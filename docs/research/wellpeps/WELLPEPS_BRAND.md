# WellPeps Brand System (source of truth for the rebrand)

Captured from the client's Google Drive "WP 2.0 Design. Color and Font Guidance" + "Design References".
WellPeps is an **informational front-end** that routes patients to **OpenLoop** (OpenLoop supplies
licensed providers, runs care, and collects payment). All CTAs deep-link into OpenLoop.

## Colors (replaces Open Water RX teal/gold)

| Token | Hex | Usage |
|---|---|---|
| Logo Navy | `#082B59` | Logo, footer, navigation, premium headings |
| Primary Blue | `#1565C0` | Primary CTA buttons, links, active states |
| Primary Blue Hover | `#0F56AF` | CTA hover |
| Accent Blue | `#2EA8F7` | Highlights, gradients, icons, emphasis |
| Headline Blue | `#153B73` | H1–H3 headings |
| Soft Wellness Blue | `#EAF5FF` | Section backgrounds, trust bars, cards |
| Light Gray | `#F7F9FC` | Page background, alternating sections |
| White | `#FFFFFF` | Primary background, cards |
| Gold Accent | `#D8A53A` | Thin dividers / premium accents ONLY — minimal |
| Body Text | `#4B5C73` | Paragraphs |
| Muted | `#7A8899` | Captions |
| Success / Warning / Error | `#2E7D32` / `#F9A825` / `#D32F2F` | Status |

Buttons: Primary = `#1565C0` bg / white text; Secondary = white / 2px `#1565C0` border + `#1565C0` text.
Hero background: white → `#F4F9FF` gradient.

## Typography

- **Headings:** Plus Jakarta Sans — H1 700 (60–72px), H2 700 (46–52px), H3 600 (34–38px), H4 600 (26–30px).
- **Body / UI:** Inter — Large 20px, Body 18px, Small 16px, Buttons 600 / 17–18px.
- Both are Google Fonts → load via `next/font/google`.

## Aesthetic direction

Modern telehealth between **Hims**, **Willow** (startwillow.com), and **Wellmedr** — "Apple, not hospital."
Large typography, generous whitespace, lifestyle imagery, clean cards, minimal copy, mobile-first.
Avoid: white coats, stethoscopes, clipboards, heavy blue gradients, hospital look.
Polish targets (Design Note): +30–50% section spacing, larger headlines, working blue primary,
simpler cards with more padding, larger photography, "magazine rhythm."

## Logo

WellPeps logo (navy). Variants in Drive: navy-on-transparent, on-dark-blue, "W" mark on white.
Use light/navy logo on light header; light logo on dark navy footer. (Confirm via "Navigation Logo Note".)

## Page template (shared structure, per-category content)

Hero → Educational ("How X works"/"Understanding"/"Personalized Care") → Products →
Comparison/"WellPeps Difference" (some categories) → Getting Started (optional) → FAQ → CTA.
Plus shared chrome: announcement bar, header+nav, footer, scroll-to-top.
Categories: Peptide & Wellness, Weight Loss, Hair Restoration, Sexual Wellness (+ Home page, separate).
