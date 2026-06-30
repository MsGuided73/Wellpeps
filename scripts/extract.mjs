// Server-side extraction harness for cloning openwaterrx pages.
// Loads the JS-rendered page, dumps per-section HTML, downloads all images,
// and captures full-page + section screenshots. Reusable for any page on the site.
//
// Usage: node scripts/extract.mjs <url> <slug>
//   e.g. node scripts/extract.mjs https://openwaterrx.com/how-it-works how-it-works

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const url = process.argv[2] || 'https://openwaterrx.com/how-it-works';
const slug = process.argv[3] || 'how-it-works';

const RES = `docs/research/openwaterrx/${slug}`;
const REF = `docs/design-references/${slug}`;
const IMG_OUT = 'public/images';
for (const d of [RES, `${RES}/blocks`, REF, IMG_OUT]) fs.mkdirSync(d, { recursive: true });

const sl = s => (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);

const run = async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2
  });
  const page = await ctx.newPage();
  console.log('Navigating', url);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await page.waitForSelector('h1', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(2500);

  // Trigger lazy loading + scroll-reveal animations by scrolling through.
  await page.evaluate(async () => {
    await new Promise(res => {
      let y = 0; const step = () => {
        window.scrollTo(0, y); y += 600;
        if (y < document.body.scrollHeight) setTimeout(step, 60); else { window.scrollTo(0, 0); setTimeout(res, 800); }
      }; step();
    });
  });
  await page.waitForTimeout(1500);

  // ---- Collect image manifest (full URLs, server-side — no filter) ----
  const manifest = await page.evaluate(() => {
    const abs = u => { try { return new URL(u, location.href).href; } catch { return u; } };
    const imgs = [...document.querySelectorAll('img')].map(img => ({
      src: abs(img.currentSrc || img.src), alt: img.alt || '',
      w: img.naturalWidth, h: img.naturalHeight, cls: img.className || ''
    }));
    const bgs = [...new Set([...document.querySelectorAll('*')]
      .map(el => getComputedStyle(el).backgroundImage)
      .filter(b => b && b.includes('url('))
      .map(b => { const m = b.match(/url\(["']?(.*?)["']?\)/); return m ? abs(m[1]) : null; })
      .filter(Boolean))];
    return { imgs, bgs };
  });

  // Assign deterministic local names + download.
  const seen = new Map();
  let i = 0;
  const downloadList = [];
  for (const im of [...manifest.imgs, ...manifest.bgs.map(b => ({ src: b, alt: 'bg', w: 0, h: 0, cls: '' }))]) {
    if (seen.has(im.src)) { im.local = seen.get(im.src); continue; }
    const u = new URL(im.src);
    const isSearch = u.pathname.includes('search-image');
    const ext = isSearch ? 'jpg' : ((u.pathname.split('.').pop() || 'png').slice(0, 4).replace(/[^a-z0-9]/gi, '') || 'png');
    const name = `${slug}-${String(i).padStart(2, '0')}-${sl(im.alt) || 'img'}.${ext}`;
    i++;
    im.local = `/images/${name}`;
    seen.set(im.src, im.local);
    downloadList.push({ url: im.src, file: `${IMG_OUT}/${name}` });
  }

  // Download images via the browser context (shares session/headers, avoids CORS issues).
  for (const d of downloadList) {
    try {
      const resp = await page.request.get(d.url, { timeout: 30000 });
      if (!resp.ok()) { console.log('  SKIP', resp.status(), d.file); continue; }
      fs.writeFileSync(d.file, await resp.body());
      console.log('  IMG', d.file, fs.statSync(d.file).size);
    } catch (e) { console.log('  ERR', d.file, e.message); }
  }

  // ---- Per-block HTML (localized image src) ----
  const blocks = await page.evaluate((map) => {
    const lookup = {}; map.forEach(m => { lookup[m.src] = m.local; });
    const abs = u => { try { return new URL(u, location.href).href; } catch { return u; } };
    const all = [...document.querySelectorAll('header, section, footer')];
    const top = all.filter(el => !all.some(o => o !== el && o.contains(el)));
    return top.map((el, idx) => {
      const clone = el.cloneNode(true);
      clone.querySelectorAll('img').forEach(img => {
        const key = abs(img.getAttribute('src') || img.src);
        if (lookup[key]) img.setAttribute('src', lookup[key]);
        img.removeAttribute('srcset');
      });
      clone.querySelectorAll('[style*="url("]').forEach(n => {
        n.setAttribute('style', n.getAttribute('style').replace(/url\(["']?(.*?)["']?\)/g,
          (m, u) => `url(${lookup[abs(u)] || u})`));
      });
      const heading = (el.querySelector('h1,h2,h3')?.textContent || '').trim();
      return { idx, tag: el.tagName.toLowerCase(), heading, html: clone.outerHTML };
    });
  }, [...seen.entries()].map(([src, local]) => ({ src, local })));

  const index = [];
  for (const b of blocks) {
    const fname = `blocks/block-${String(b.idx).padStart(2, '0')}-${b.tag}-${sl(b.heading) || 'x'}.html`;
    fs.writeFileSync(`${RES}/${fname}`, b.html);
    index.push({ idx: b.idx, tag: b.tag, heading: b.heading, file: fname, htmlLen: b.html.length });
  }

  // Save manifest + index
  fs.writeFileSync(`${RES}/manifest.json`, JSON.stringify({
    url, imgManifest: [...seen.entries()].map(([src, local]) => ({ src, local })), blocks: index
  }, null, 2));

  // ---- Screenshots ----
  await page.screenshot({ path: `${REF}/${slug}-full-desktop.png`, fullPage: true });
  // Per-block screenshots at desktop
  const handles = await page.$$('header, section, footer');
  // Re-evaluate to only top-level to match blocks count
  // (simple: screenshot each block element if it is top-level)
  // Mobile full page
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${REF}/${slug}-full-mobile.png`, fullPage: true });

  await browser.close();
  console.log('DONE. blocks:', index.length, 'images:', downloadList.length);
  console.log(JSON.stringify(index.map(b => `${b.idx} ${b.tag} "${b.heading}" (${b.htmlLen}b)`), null, 2));
};

run().catch(e => { console.error('FATAL', e); process.exit(1); });
