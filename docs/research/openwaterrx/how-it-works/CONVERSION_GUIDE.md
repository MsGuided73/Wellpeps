# HTML → React Conversion Guide (Open Water RX clone)

Each builder converts ONE extracted HTML block (clean Tailwind markup, already
localized image paths) into ONE clean React component. Fidelity is the goal:
preserve every class, text string, and structure exactly.

## Stack context (already set up — do NOT re-create)
- Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4.
- Fonts loaded globally: Inter (`--font-inter`, default body) and Playfair Display
  (`--font-playfair`). Headings on the site use `font-family: "Playfair Display", serif`.
- **Remix Icon** is loaded globally (`remixicon/fonts/remixicon.css`). Keep all
  `<i className="ri-...">` icon tags AS-IS — do not convert to Lucide.
- Brand colors are used as Tailwind arbitrary values directly in classNames
  (`bg-[#0B7A8C]`, `text-[#E8A923]`, etc.) and work out of the box. Keep them verbatim.
- Images already point at `/images/how-it-works-XX-*.ext` under `public/images/`. Keep those paths.
- A `<Reveal>` component exists at `src/components/Reveal.tsx` — DO NOT use it inside
  section components; page assembly handles reveal wrapping. Just build the section content.

## Conversion rules (mechanical)
1. `class=` → `className=`. `for=` → `htmlFor=`. `tabindex` → `tabIndex`, etc.
2. Inline `style="font-family: &quot;Playfair Display&quot;, serif; ..."` → JSX style object:
   `style={{ fontFamily: '"Playfair Display", serif' }}`. Convert ALL inline styles to
   JSX style objects (camelCase keys, string values). Keep them — they carry exact
   backdrop-filter/transition/transform values.
3. Self-close void elements: `<img ... />`, `<br />`, `<path ... />`, `<input ... />`.
4. Keep inline `<svg>...</svg>` exactly (e.g. the hero bottom wave). Convert SVG attrs to
   camelCase where JSX requires (`viewBox` stays, `stroke-width`→`strokeWidth`,
   `fill-rule`→`fillRule`, `clip-rule`→`clipRule`, `stroke-linecap`→`strokeLinecap`).
5. Remove framework noise attributes that React rejects or that are dead: `data-discover`,
   `fetchpriority` → `fetchPriority`, keep `loading`, `decoding`, `width`, `height`, `alt`.
   Keep `data-clarity-tag` as-is (valid data-* attr). Keep `aria-*` and `role`.
6. Replace real navigation `href="/intake"`, `href="/programs"` etc. with the SAME paths
   (they're internal routes that don't exist yet — that's fine, keep them as `<a href="...">`).
   External links (`https://...openloop.ai/...`) keep as-is; add `target="_blank" rel="noopener noreferrer"`.
7. Comments: none needed. Match the source's structure; don't editorialize.

## Component shape
```tsx
export function ComponentName() {
  return (
    <section className="...exact classes...">
      ...
    </section>
  );
}
```
- Named export, PascalCase, matching the target filename.
- If the block root is `<header>`/`<footer>`/`<section>`, keep that element as the root.
- Add `"use client"` on line 1 ONLY if the component has interactivity (state/effects/handlers).

## Verify before finishing
Run `npx tsc --noEmit` from the project root and ensure ZERO errors introduced by your file.
If your component is imported nowhere yet, that's fine — tsc still checks it.
