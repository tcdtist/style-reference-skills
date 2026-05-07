---
version: alpha
name: "Mapbox"
description: "Mapbox operates in near-total darkness — a #0e1012 void that makes embedded map tiles glow like illuminated instruments. The entire neutral scale runs from #0e1012 through #333943 to #a0aaba, creating depth through layered darkness rather than shadows. A single vivid blue (#007afc) punctuates the black field exclusively on CTAs and active states, like a GPS pin dropped into night sky. Pill-form buttons (100px radius) coexist with sharp 4px badges, creating deliberate tension between cartographic curves and data-table precision. Cera Pro's geometric weight-700 at 68px and tight -0.02em tracking gives headlines a technical density — coordinates on a map, not marketing copy."
theme: "dark"
industry: "devtools"
source_url: "https://mapbox.com"
refero_style_id: "be34bbe8-9a50-4f36-b379-840328f6350c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775934542077-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775934542077-thumb.jpg"
extracted_at: "2026-04-11T19:10:46.520Z"
---

# Mapbox — Style Reference

> Satellite console at midnight — a dark control room where glowing map tiles are the only light source, surrounded by near-black instrument panels.

**Theme:** dark

**Industry:** devtools

Mapbox operates in near-total darkness — a #0e1012 void that makes embedded map tiles glow like illuminated instruments. The entire neutral scale runs from #0e1012 through #333943 to #a0aaba, creating depth through layered darkness rather than shadows. A single vivid blue (#007afc) punctuates the black field exclusively on CTAs and active states, like a GPS pin dropped into night sky. Pill-form buttons (100px radius) coexist with sharp 4px badges, creating deliberate tension between cartographic curves and data-table precision. Cera Pro's geometric weight-700 at 68px and tight -0.02em tracking gives headlines a technical density — coordinates on a map, not marketing copy.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Void Black | #0e1012 | `--color-void-black` | Page background, nav background, footer — the base layer everything sits on |
| Deep Charcoal | #15171b | `--color-deep-charcoal` | Card surfaces, elevated sections sitting one level above Void Black |
| Gunmetal | #1c1f24 | `--color-gunmetal` | Dividers, secondary borders, subtle panel edges |
| Graphite | #23262d | `--color-graphite` | Tertiary surface, hover states on dark cards |
| Steel | #333943 | `--color-steel` | Inactive icons, secondary UI strokes, muted borders |
| Pewter | #444d5a | `--color-pewter` | Ghost button borders, subtle rule lines |
| Slate | #566171 | `--color-slate` | Tertiary text, nav dropdown labels, disabled states |
| Ash | #8b96aa | `--color-ash` | Secondary body text, caption-level descriptions |
| Fog | #a0aaba | `--color-fog` | Footer text, body copy, icon fills — the primary readable text color on dark surfaces |
| Silver | #bbc2ce | `--color-silver` | Outlined button borders, slightly elevated muted text |
| Cloud | #d5dae2 | `--color-cloud` | Divider lines in lighter contexts, high-contrast borders |
| White | #ffffff | `--color-white` | Primary headings, button text, nav labels, high-emphasis body copy |
| Signal Blue | #007afc | `--color-signal-blue` | Primary CTA buttons, active nav indicators, links — single chromatic anchor in an achromatic field, impossible to miss |
| Deep Signal | #0062ca | `--color-deep-signal` | Info/announcement badges — darker blue variant for label-scale elements |
| Map Green | #228a56 | `--color-map-green` | Success and 'Product Update' badge backgrounds — cartographic green signals new features |

## Tokens — Typography

### Cera Pro

- **Token:** `--font-cera-pro`
- **Substitute:** DM Sans, Plus Jakarta Sans
- **Weights:** 400, 500, 700
- **Sizes:** 10px, 14px, 15px, 16px, 18px, 20px, 24px, 32px, 44px, 56px, 68px
- **Line heights:** 1.00–1.60 (tighter at large sizes: 1.00–1.14 at 44–68px; looser at small: 1.40–1.60 at 14–18px)
- **Letter spacing:** -1.36px at 68px (-0.02em), -0.56px at 56px (-0.01em), wide tracking at badge/caption sizes (+0.70em to +1.00em for all-caps labels)
- **OpenType features:** "lnum"
- **Role:** All text on the site — nav, headings, body, badges, buttons. Weight 700 at 44–68px for hero headlines with -0.02em tracking that compresses letterforms into coordinate-grid density. Weight 500 for subheadings and UI labels. Weight 400 for body copy and captions. The geometric construction of Cera Pro — circular O, monoline strokes — echoes the precision circles of map pin iconography.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.6 | 1px | `--text-caption` |
| body-sm | 14px | 1.43 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.4 | — | `--text-subheading` |
| heading-sm | 24px | 1.33 | — | `--text-heading-sm` |
| heading | 32px | 1.25 | — | `--text-heading` |
| heading-lg | 44px | 1.14 | -0.88px | `--text-heading-lg` |
| display | 68px | 1 | -1.36px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 24px |
| chips | 12px |
| badges | 4px |
| inputs | 6px |
| buttons | 100px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgb(14, 16, 18) 0px -175px 175px -75px inset | `--shadow-xl` |
| xl-2 | rgb(14, 16, 18) 0px 0px 100px 50px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1344px |
| sectionGap | 96px |
| cardPadding | 24px |
| elementGap | 12px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Category Filter Tab Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Customer Story Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** Main call-to-action, 'Get started for free', 'Sign up'

backgroundColor #007afc, color #ffffff, borderRadius 100px, padding 12px 24px. No border visible (border matches background). The only filled blue element on the page — stands alone against the black field.

### Outlined Pill Button

**Role:** Secondary actions like 'Contact us', nav secondary links

backgroundColor transparent, color #ffffff, border 1px solid #bbc2ce, borderRadius 100px, padding 12px 24px. On hover, likely shifts border to #ffffff. Maintains pill geometry to match primary CTA.

### Ghost Text Button

**Role:** Inline text links, 'Learn more →', 'Read more →', footer links

backgroundColor transparent, color #ffffff or #007afc for links, borderRadius 0px, no padding. Used for narrative-flow links where a button frame would over-formalize the action.

### Icon Frame Button

**Role:** Utility buttons like language selector 'EN', compact controls

backgroundColor transparent, color #ffffff, border 1px solid #444d5a, borderRadius 6px, padding 8px 10px. Sharp radius breaks from the pill system — signals 'tool', not 'action'.

### Product Update Badge

**Role:** Labels marking new features, product announcements

backgroundColor #228a56, color #ffffff, borderRadius 4px, padding 5.6px 7.7px. All-caps Cera Pro at 10px with +1.00em letter-spacing. Green signals 'new/live', echoing map layer status indicators.

### Info Badge

**Role:** Announcement or info-type labels

backgroundColor #0062ca, color #ffffff, borderRadius 3px, padding 3px 6px. Slightly tighter radius and padding than Product Update badge — distinguishes tier.

### Category Tab / Filter Pill

**Role:** Section filters like 'Automotive', 'Weather', 'Fleets'

Active state: backgroundColor #007afc, color #ffffff, borderRadius 100px. Inactive: backgroundColor transparent, color #a0aaba, borderRadius 100px with visible border. Cera Pro 500 at 15–16px.

### News / Product Carousel Card

**Role:** Homepage feature cards for recent updates and partnerships

borderRadius 24px, dark surface #15171b, badge at top-left, headline Cera Pro 700, directional arrow link in #007afc. Card edges use inset shadow rgb(14,16,18) to bleed into page background.

### Logo Grid (Social Proof Rail)

**Role:** Partner/customer logo display — GM, CNN, BMW, Strava etc.

Logos rendered in #a0aaba (desaturated) against #0e1012 background. No card frames. Two rows, roughly 6 logos per row. Tight letter-spaced all-caps Cera Pro label above in #566171 at 12px.

### Top Navigation Bar

**Role:** Sticky site nav with logo, dropdown menus, CTA

backgroundColor #0e1012, height 62px, boxShadow rgb(14,16,18) 0px 0px 100px 50px on scroll. Left: Mapbox wordmark in #ffffff. Center: dropdown nav links in Cera Pro 400/500 at 15px color #ffffff. Right: 'Log in' ghost text + 'Sign up' primary pill (#007afc).

### Video / Map Embed Block

**Role:** Full-width media with inset shadow fade at bottom edge

borderRadius 24px, inset shadow rgb(14,16,18) 0px -175px 175px -75px at bottom — the map tile or video appears to dissolve into the page background. Plays on the 'emerging from darkness' surface philosophy.

## Do's and Don'ts

### Do

- Use #007afc exclusively for primary interactive elements (CTA buttons, active tabs, text links needing high emphasis) — never as a decorative fill or background wash.
- Apply 100px borderRadius to all pill buttons and filter tabs; reserve 4–6px radius for badge and utility elements only.
- Set hero and display headlines in Cera Pro weight 700 with -0.02em letter-spacing (-1.36px at 68px, -0.88px at 44px) — no weight below 700 at display sizes.
- Use all-caps Cera Pro at 10–12px with +0.70em to +1.00em letter-spacing for section labels, badge text, and category markers.
- Layer surfaces using the four-step dark scale (#0e1012 → #15171b → #1c1f24 → #23262d); never use drop shadows to imply depth between content layers.
- Apply inset shadow rgb(14,16,18) 0px -175px 175px -75px on bottom edge of map tiles, video embeds, and image blocks to dissolve them into the #0e1012 page background.
- Render partner/brand logos at #a0aaba on #0e1012 — no color, no individual treatment — keeping the partner rail visually subordinate to the product.

### Don't

- Never use a radius between 6px and 12px on buttons — the system uses either pill (100px), card (24px), chip (12px), or sharp utility (4–6px). Intermediate values break the rhythm.
- Never introduce a second chromatic accent color — orange, purple, teal, or any additional hue violates the single-signal-in-darkness principle of Signal Blue (#007afc).
- Never set body copy or subheadings in white (#ffffff) — use #a0aaba for body and #8b96aa for captions; full white is reserved for headings and interactive labels.
- Never place cards or sections on white or light backgrounds — all content lives within the #0e1012–#15171b dark range; light surfaces appear only inside embedded map tiles.
- Never use Cera Pro weight 400 for headings larger than 24px — weight 500 minimum at subheading scale, 700 at heading-lg and display.
- Never apply colored drop shadows — the only allowed shadows are monochromatic #0e1012 inset vignettes on media blocks.
- Never add decorative borders or dividers between sections — vertical rhythm is created by spacing and surface color change, not ruled lines.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Void Floor | #0e1012 | Page background, nav, footer — base canvas |
| 1 | Deep Panel | #15171b | Card backgrounds, content sections elevated from page |
| 2 | Raised Surface | #1c1f24 | Nested panels, modal backgrounds, secondary cards |
| 3 | Overlay | #23262d | Dropdown menus, tooltips, hover overlays |

## Elevation

- **Media Card / Video Embed:** `rgb(14, 16, 18) 0px -175px 175px -75px inset`
- **Section Fade Overlay:** `rgb(14, 16, 18) 0px 0px 100px 50px`

## Imagery

The dominant visual is product screenshots of Mapbox map tiles — dark-mode 3D city renders, automotive circular navigation interfaces, satellite-toned street maps. These are always contained within rounded-24px frames and treated with an inset bottom shadow that dissolves the lower edge into the page background, making map content feel embedded in the surface rather than placed on it. Photography appears in customer story cards: tight editorial product shots (BMW instrument cluster, in-vehicle navigation screens) cropped dark and moody, no lifestyle context. Icons are minimal outlined mono-stroke in #a0aaba to #566171. Logo grid partners are desaturated to near-gray. The overall imagery density is medium — one or two large map/product visuals per section, with text-dominant supporting sections. No abstract illustration or decorative graphics; every image is either a real map tile or a real customer device.

## Layout

Max-width 1344px centered on an always-dark #0e1012 full-bleed background. Hero is full-viewport centered text stack (headline + subtext + dual CTA buttons) with a large rounded map-tile video embed below it, fading at its bottom edge. Second section is a no-frame logo grid (two rows, ~6 logos each) labeled with a tight all-caps eyebrow. Below that, alternating asymmetric 2-column sections: text left + map visual right, then reversed. Customer stories use a 2-column layout: large image card left (~55%), text + logo + body right (~45%). A horizontal filter tab row (pill tabs) controls the visible story. Navigation is a fixed top bar, full-bleed at the background color, with center-aligned dropdown links and right-side auth buttons. Vertical section gaps are approximately 96px. The layout avoids visual dividers entirely — section transitions happen through background color and content spacing only.

## Similar Brands

- **Twilio** — Same dark developer platform aesthetic — black field, single vivid accent on CTAs, Cera-like geometric sans, technical badge labeling
- **Stripe** — Single saturated blue CTA against dark page background; pill-button shape; type scale with tight negative tracking at large sizes
- **Vercel** — Deep black (#000) base with pure white headlines, desaturated secondary text, and near-zero decorative color — monochromatic field with one accent
- **Maptiler** — Map tile embeds as hero visuals, dark UI wrapping geographic product content, same cartographic green for feature badges
- **AWS Amplify** — Dark dev-tools UI, geometric sans at display scale, badge-and-card system for product updates, single blue primary action color

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-void-black: #0e1012;
  --color-deep-charcoal: #15171b;
  --color-gunmetal: #1c1f24;
  --color-graphite: #23262d;
  --color-steel: #333943;
  --color-pewter: #444d5a;
  --color-slate: #566171;
  --color-ash: #8b96aa;
  --color-fog: #a0aaba;
  --color-silver: #bbc2ce;
  --color-cloud: #d5dae2;
  --color-white: #ffffff;
  --color-signal-blue: #007afc;
  --color-deep-signal: #0062ca;
  --color-map-green: #228a56;
  --font-cera-pro: 'Cera Pro', DM Sans, Plus Jakarta Sans;
  --text-caption: 10px;
  --leading-caption: 1.6;
  --tracking-caption: 1px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.14;
  --tracking-heading-lg: -0.88px;
  --text-display: 68px;
  --leading-display: 1;
  --tracking-display: -1.36px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-34: 34px;
  --spacing-40: 40px;
  --spacing-43: 43px;
  --spacing-48: 48px;
  --spacing-54: 54px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-90: 90px;
  --spacing-96: 96px;
  --spacing-140: 140px;
  --spacing-160: 160px;
  --radius-cards: 24px;
  --radius-chips: 12px;
  --radius-badges: 4px;
  --radius-inputs: 6px;
  --radius-buttons: 100px;
  --shadow-xl: rgb(14, 16, 18) 0px -175px 175px -75px inset;
  --shadow-xl-2: rgb(14, 16, 18) 0px 0px 100px 50px;
  --surface-void-floor: #0e1012;
  --surface-deep-panel: #15171b;
  --surface-raised-surface: #1c1f24;
  --surface-overlay: #23262d;
}
```

### Tailwind v4

```css
@theme {
  --color-void-black: #0e1012;
  --color-deep-charcoal: #15171b;
  --color-gunmetal: #1c1f24;
  --color-graphite: #23262d;
  --color-steel: #333943;
  --color-pewter: #444d5a;
  --color-slate: #566171;
  --color-ash: #8b96aa;
  --color-fog: #a0aaba;
  --color-silver: #bbc2ce;
  --color-cloud: #d5dae2;
  --color-white: #ffffff;
  --color-signal-blue: #007afc;
  --color-deep-signal: #0062ca;
  --color-map-green: #228a56;
  --font-cera-pro: 'Cera Pro', DM Sans, Plus Jakarta Sans;
  --text-caption: 10px;
  --leading-caption: 1.6;
  --tracking-caption: 1px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.14;
  --tracking-heading-lg: -0.88px;
  --text-display: 68px;
  --leading-display: 1;
  --tracking-display: -1.36px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-34: 34px;
  --spacing-40: 40px;
  --spacing-43: 43px;
  --spacing-48: 48px;
  --spacing-54: 54px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-90: 90px;
  --spacing-96: 96px;
  --spacing-140: 140px;
  --spacing-160: 160px;
  --radius-cards: 24px;
  --radius-chips: 12px;
  --radius-badges: 4px;
  --radius-inputs: 6px;
  --radius-buttons: 100px;
  --shadow-xl: rgb(14, 16, 18) 0px -175px 175px -75px inset;
  --shadow-xl-2: rgb(14, 16, 18) 0px 0px 100px 50px;
  --surface-void-floor: #0e1012;
  --surface-deep-panel: #15171b;
  --surface-raised-surface: #1c1f24;
  --surface-overlay: #23262d;
}
```
