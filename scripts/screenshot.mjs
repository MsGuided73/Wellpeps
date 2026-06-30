import { chromium } from 'playwright';
import fs from 'node:fs';
fs.mkdirSync('docs/design-references/clone', {recursive:true});
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:900}, deviceScaleFactor:1 });
const p = await ctx.newPage();
await p.goto('http://localhost:3002', { waitUntil:'networkidle', timeout:60000 });
// Force scroll-reveal visible so fullPage capture shows true content
await p.addStyleTag({ content: '.reveal{opacity:1!important;transform:none!important;transition:none!important}' });
await p.waitForTimeout(500);
await p.screenshot({ path:'docs/design-references/clone/clone-full-desktop.png', fullPage:true });
const h = await p.evaluate(()=>document.body.scrollHeight);
console.log('clone desktop scrollHeight', h);
await p.setViewportSize({width:390,height:844}); await p.waitForTimeout(400);
await p.addStyleTag({ content: '.reveal{opacity:1!important;transform:none!important;transition:none!important}' });
await p.screenshot({ path:'docs/design-references/clone/clone-full-mobile.png', fullPage:true });
const hm = await p.evaluate(()=>document.body.scrollHeight);
console.log('clone mobile scrollHeight', hm);
await b.close();
