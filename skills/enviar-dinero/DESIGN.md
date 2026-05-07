---
version: alpha
name: "Enviar Dinero"
description: "PayPal ES radiates electric confidence — a sky-blue hero floods the first viewport with near-neon energy (#60CDFF), while the rest of the page alternates between cobalt navy (#002991) and pure white, creating a two-temperature rhythm of cool sky and deep sea. The defining typographic move is PayPal Pro at weight 900 running from 67px to 181px, with letter-spacing at -0.03em: headlines feel like they were stamped onto the surface, not set in type. The plain body font carries a consistent -0.02em tracking that keeps even 14px text feeling intentional. Buttons are universally pill-shaped (1000px radius) against chromatic backgrounds, using transparent fills with 1px borders — never solid fills — creating an outline-only button language that feels airy against intense color fields. Photography is used full-bleed behind type overlays, with white super-size letterforms bleeding off crop edges as a graphic device."
theme: "mixed"
industry: "fintech"
source_url: "https://paypal.com"
refero_style_id: "46c16139-b0bb-49e6-95dc-74bef576e5ce"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775934768613-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775934768613-thumb.jpg"
extracted_at: "2026-04-11T19:14:39.744Z"
---

# Enviar Dinero — Style Reference

> Electric Sky Wallet — a sky that you can spend from.

**Theme:** mixed

**Industry:** fintech

PayPal ES radiates electric confidence — a sky-blue hero floods the first viewport with near-neon energy (#60CDFF), while the rest of the page alternates between cobalt navy (#002991) and pure white, creating a two-temperature rhythm of cool sky and deep sea. The defining typographic move is PayPal Pro at weight 900 running from 67px to 181px, with letter-spacing at -0.03em: headlines feel like they were stamped onto the surface, not set in type. The plain body font carries a consistent -0.02em tracking that keeps even 14px text feeling intentional. Buttons are universally pill-shaped (1000px radius) against chromatic backgrounds, using transparent fills with 1px borders — never solid fills — creating an outline-only button language that feels airy against intense color fields. Photography is used full-bleed behind type overlays, with white super-size letterforms bleeding off crop edges as a graphic device.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Cerulean Surge | #60CDFF | `--color-cerulean-surge` | Hero backgrounds, section backgrounds, badge borders — the dominant attention color that establishes PayPal's sky-blue identity across the first viewport and accent panels |
| Cobalt Vault | #002991 | `--color-cobalt-vault` | Deep-section backgrounds, card fills, navy sections — counterpoint to Cerulean Surge, appearing in feature sections to create the hot/cold alternating rhythm |
| Ice Mist | #B8E9FF | `--color-ice-mist` | Subtle background tints in transitional or secondary panels within the blue range |
| Cobalt Fade | #002991 | `--color-cobalt-fade` | Gradient overlay used to bleed navy into transparent sections — see linear-gradient underline/band effect on interactive elements |
| Midnight | #000000 | `--color-midnight` | Page text, button borders (black variant), nav items, headings on light/sky backgrounds |
| Snow | #FFFFFF | `--color-snow` | Page backgrounds, card surfaces, button borders (white variant on dark/colored fields), body text on dark sections |
| Parchment | #F1EFEA | `--color-parchment` | Warm off-white panel backgrounds — appears in transitional content sections |
| Ash | #B3B3B3 | `--color-ash` | Inactive/ghost card backgrounds, dimmed UI state fills |
| Fog | #CCCCCC | `--color-fog` | Dividers, subdued body text on light backgrounds |

## Tokens — Typography

### Plain

- **Token:** `--font-plain`
- **Substitute:** DM Sans, Inter
- **Weights:** 400, 500
- **Sizes:** 10px, 14px, 16px, 18px, 22px, 26px, 38px
- **Line heights:** 1.15–2.08 (varies by size; body text 1.40–1.57, large text 1.15–1.20)
- **Letter spacing:** -0.02em across all sizes
- **Role:** All UI text: nav labels, body copy, footer, links, button labels, captions. At 16-18px with weight 400 it handles running text; at 22-26px weight 500 it becomes section subheadings. The -0.02em tracking is applied universally, tightening all sizes slightly against system defaults.

### PayPal Pro

- **Token:** `--font-paypal-pro`
- **Substitute:** Sohne, Aktiv Grotesk ExtraBold, Neue Haas Grotesk Display 900
- **Weights:** 400, 900
- **Sizes:** 16px, 18px, 22px, 45px, 55px, 67px, 99px, 121px, 181px
- **Line heights:** 1.00–1.25 at display sizes; 1.50 at body sizes
- **Letter spacing:** -0.03em at display sizes (45px+); -0.02em at heading sizes (16–22px)
- **Role:** Display headlines and hero text. Weight 900 at 67–181px is the signature move — at these sizes with -0.03em tracking, individual letters fill nearly the full viewport width, functioning as graphic architecture not just type. Weight 400 handles nav and smaller headings. The extreme scale range (16px to 181px) within one family indicates it carries ALL heading duties across the page.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.57 | -0.28px | `--text-body-sm` |
| body | 16px | 1.5 | -0.32px | `--text-body` |
| subheading | 18px | 1.43 | -0.36px | `--text-subheading` |
| heading-sm | 22px | 1.2 | -0.44px | `--text-heading-sm` |
| heading | 38px | 1.15 | -0.76px | `--text-heading` |
| heading-lg | 67px | 1.1 | -2.01px | `--text-heading-lg` |
| display | 121px | 1 | -3.63px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-31 | 31px | `--spacing-31` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-37 | 37px | `--spacing-37` |
| spacing-47 | 47px | `--spacing-47` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-53 | 53px | `--spacing-53` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-79 | 79px | `--spacing-79` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-83 | 83px | `--spacing-83` |
| spacing-106 | 106px | `--spacing-106` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 8px |
| cards | 30px |
| pills | 104px |
| avatars | 12px |
| buttons | 1000px |
| roundedPanels | 25-32px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.08) 0px 24px 48px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1280px |
| sectionGap | 80-120px |
| cardPadding | 27px |
| elementGap | 16-24px |

## Components

### Personal / Negocios Toggle Pill

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Animated Headline Stack — Enviar / Recibir / Bote

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group — Ghost Pills

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Ghost Pill Button — White

**Role:** Primary CTA on dark or colored (blue/navy) backgrounds

Transparent fill, #FFFFFF 1px border, #FFFFFF text, 1000px border-radius, 14px vertical padding, 33px horizontal padding. PayPal Pro or Plain weight 500. Used on sky-blue and navy sections where a solid fill would compete with the background energy.

### Ghost Pill Button — Black

**Role:** Secondary CTA on white or light backgrounds

Transparent fill, #000000 1px border, #000000 text, 1000px border-radius, 14px vertical padding, 33px horizontal padding. Same geometry as White variant — color is the only difference.

### Inline Text Button

**Role:** Tertiary action, inline link-style button within body copy

Transparent fill, #000000 1px border, #000000 text, 0px border-radius (square corners), 1px vertical padding, 6px horizontal padding. Functions as an underline-style call-to-action without pill shape.

### Rounded CTA Button

**Role:** App download / secondary marketing CTA

Transparent fill, #000000 1px border, #000000 text, 25px border-radius (not full pill), 8px vertical padding, 32px right / 12px left padding (asymmetric — accommodates icon on left). Used for the 'Descargar la app' block.

### Frosted App Card

**Role:** In-page mobile app screen preview overlay

Background rgba(0,0,0,0.30), border-radius 30px, 27px padding all sides, no box-shadow. Appears floating over lifestyle photography, simulating a frosted-glass phone UI with white text inside.

### Navy Feature Card

**Role:** Highlighted product feature block with strong depth

Background #002991, border-radius 0px (sharp), box-shadow rgba(0,0,0,0.08) 0px 24px 48px 0px. The only component using elevation — the 48px blur shadow grounds the navy card against white sections without making it feel heavy.

### Full-Bleed Photo Section

**Role:** Lifestyle hero band with oversized type overlay

Photography fills 100vw with no border-radius or container. PayPal Pro weight 900 at 99–181px in #FFFFFF bleeds off crop edges — letters are cropped intentionally at both sides. No overlay scrim; high-key photography provides natural contrast for white text.

### Top Navigation Bar

**Role:** Sticky global navigation

#FFFFFF background, 88px height, PayPal logo left-aligned, nav links in Plain 16px weight 400 #000000, 'Iniciar sesión' as Ghost Pill (black) and 'Crear cuenta' as solid black pill (#000000 fill, #FFFFFF text, 1000px radius, 14px/33px padding) on the right.

### QR Download Block

**Role:** App download prompt with QR code

#000000 background, 8-12px border-radius, #FFFFFF text in Plain weight 500 at 14px, QR code image right-aligned. Appears fixed or sticky at bottom-right corner of hero sections.

### Animated Headline Stack

**Role:** Feature section cycling headline (Enviar / Recibir / Bote)

#FFFFFF text, PayPal Pro weight 900 at 45–67px on #002991 background. Active word is full opacity white; inactive words appear in lower opacity (approximately 40%) in the same position, indicating the cycling state.

## Do's and Don'ts

### Do

- Use PayPal Pro weight 900 at 67px+ with -0.03em letter-spacing for all display headlines; allow letterforms to crop at container edges intentionally
- Apply 1000px border-radius to all primary and secondary pill buttons; never use a partial radius (e.g. 4px or 8px) on CTAs
- Switch button color (white or black border/text) based on background: #FFFFFF border on #60CDFF or #002991 surfaces, #000000 border on #FFFFFF surfaces
- Use the exact three-color section sequence — sky-blue, navy, white — for page-level section backgrounds; never use gradient backgrounds except the Cobalt Fade band accent
- Keep photography full-bleed (0px radius, 100vw) when used as section backgrounds; place white PayPal Pro type directly over photos without a scrim
- Apply -0.02em letter-spacing universally to all Plain text and -0.03em to all PayPal Pro display text
- Use rgba(0,0,0,0.08) 0px 24px 48px shadow only on the one premium navy card — preserve its singularity by keeping all other surfaces shadow-free

### Don't

- Do not use solid-fill buttons on colored backgrounds — the outline-only pill language is non-negotiable on sky-blue and navy fields
- Do not set display headlines below 45px when using PayPal Pro weight 900 — the extreme tracking only reads correctly at large scales
- Do not add border-radius to photography containers — full-bleed raw edges are the visual contract for imagery in this system
- Do not use Fog (#CCCCCC) or Ash (#B3B3B3) as background colors — they exist only as dividers and disabled UI states
- Do not use box-shadow on more than one surface type per page — elevation is a singular emphasis tool, not a layering system
- Do not introduce additional accent hues beyond Cerulean Surge (#60CDFF), Cobalt Vault (#002991), and Ice Mist (#B8E9FF) — the palette is intentionally a monochromatic blue family with black/white
- Do not use letter-spacing of 0 or positive values on PayPal Pro — all display use requires negative tracking

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Page Base | #FFFFFF | Primary content sections, navigation bar, footer |
| 2 | Sky Section | #60CDFF | Hero and accent band backgrounds |
| 3 | Navy Section | #002991 | Deep feature sections, high-contrast content panels |
| 4 | Frosted Overlay | #000000 | rgba(0,0,0,0.30) glass card over photography — app preview overlays |

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.08) 0px 24px 48px 0px`

## Imagery

Two modes of photography, used with intention. Mode 1: lifestyle full-bleed — high-key, vibrant, candid-feeling shots of people mid-action (shopping, smiling, outdoors). These fill 100vw with no containment, no rounded corners, no overlay scrim. White PayPal Pro letterforms at 99–181px are placed over them, cropping at the image edge so the type becomes a graphic element. Mode 2: app screen overlays — frosted dark cards (rgba 30% black, 30px radius) float over the photography to simulate a phone UI mid-transaction. Icons are filled mono-white inside these cards. The photography itself is warm and sun-lit — Mediterranean light, retail contexts, aspirational but not luxury. Color treatment is natural and vibrant, never duotone or desaturated.

## Layout

Max-width approximately 1280px centered on wide viewports, with full-bleed color fields breaking out behind content columns. Hero: full-viewport sky-blue (#60CDFF) with centered display headline (PayPal Pro 900, 67px+) and a centered toggle pill above it. Below hero, sections alternate: white → navy (#002991) → white → sky-blue → white, with no visual dividers — color-field changes are the only section separators. The full-bleed photo band sits mid-page with type bleeding off-edges. Feature sections use a 2-column split: text left, app preview card or photo right. Navigation is top-fixed, white, minimal — logo + 3 nav items + 2 button CTAs. Footer is white with small Plain text in a multi-column link grid.

## Similar Brands

- **Stripe** — Two-temperature palette (vivid accent + deep navy) with full-bleed color sections and pill-button language throughout
- **Cash App** — Single dominant brand color floods entire hero viewport; lifestyle photography with type-as-graphic-overlay
- **Klarna** — Consumer fintech with pink/pastel hero fields, extreme display-weight type, and outline-only button CTAs on colored backgrounds
- **Revolut** — Navy + electric accent color rhythm, alternating section backgrounds, no elevation except one featured card
- **N26** — Full-bleed monochromatic sections with lifestyle photography and app UI cards floating over real-world scenes

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-cerulean-surge: #60CDFF;
  --color-cobalt-vault: #002991;
  --color-ice-mist: #B8E9FF;
  --color-cobalt-fade: #002991;
  --color-midnight: #000000;
  --color-snow: #FFFFFF;
  --color-parchment: #F1EFEA;
  --color-ash: #B3B3B3;
  --color-fog: #CCCCCC;
  --font-plain: 'Plain', DM Sans, Inter;
  --font-paypal-pro: 'PayPal Pro', Sohne, Aktiv Grotesk ExtraBold, Neue Haas Grotesk Display 900;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.57;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.44px;
  --text-heading: 38px;
  --leading-heading: 1.15;
  --tracking-heading: -0.76px;
  --text-heading-lg: 67px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -2.01px;
  --text-display: 121px;
  --leading-display: 1;
  --tracking-display: -3.63px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-29: 29px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-37: 37px;
  --spacing-47: 47px;
  --spacing-48: 48px;
  --spacing-53: 53px;
  --spacing-55: 55px;
  --spacing-58: 58px;
  --spacing-70: 70px;
  --spacing-79: 79px;
  --spacing-80: 80px;
  --spacing-83: 83px;
  --spacing-106: 106px;
  --radius-tags: 8px;
  --radius-cards: 30px;
  --radius-pills: 104px;
  --radius-avatars: 12px;
  --radius-buttons: 1000px;
  --radius-roundedpanels: 25-32px;
  --shadow-xl: rgba(0, 0, 0, 0.08) 0px 24px 48px 0px;
  --surface-page-base: #FFFFFF;
  --surface-sky-section: #60CDFF;
  --surface-navy-section: #002991;
  --surface-frosted-overlay: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-cerulean-surge: #60CDFF;
  --color-cobalt-vault: #002991;
  --color-ice-mist: #B8E9FF;
  --color-cobalt-fade: #002991;
  --color-midnight: #000000;
  --color-snow: #FFFFFF;
  --color-parchment: #F1EFEA;
  --color-ash: #B3B3B3;
  --color-fog: #CCCCCC;
  --font-plain: 'Plain', DM Sans, Inter;
  --font-paypal-pro: 'PayPal Pro', Sohne, Aktiv Grotesk ExtraBold, Neue Haas Grotesk Display 900;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.57;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.44px;
  --text-heading: 38px;
  --leading-heading: 1.15;
  --tracking-heading: -0.76px;
  --text-heading-lg: 67px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -2.01px;
  --text-display: 121px;
  --leading-display: 1;
  --tracking-display: -3.63px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-29: 29px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-37: 37px;
  --spacing-47: 47px;
  --spacing-48: 48px;
  --spacing-53: 53px;
  --spacing-55: 55px;
  --spacing-58: 58px;
  --spacing-70: 70px;
  --spacing-79: 79px;
  --spacing-80: 80px;
  --spacing-83: 83px;
  --spacing-106: 106px;
  --radius-tags: 8px;
  --radius-cards: 30px;
  --radius-pills: 104px;
  --radius-avatars: 12px;
  --radius-buttons: 1000px;
  --radius-roundedpanels: 25-32px;
  --shadow-xl: rgba(0, 0, 0, 0.08) 0px 24px 48px 0px;
  --surface-page-base: #FFFFFF;
  --surface-sky-section: #60CDFF;
  --surface-navy-section: #002991;
  --surface-frosted-overlay: #000000;
}
```
