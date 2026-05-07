---
version: alpha
name: "Hex"
description: "Hex delivers a sophisticated, data-centric aesthetic, characterized by a clean white canvas that highlights nuanced typography and subtle violet accents. The design balances precise information display with hints of visual depth through soft shadows and varied typefaces. Interactive elements are thoughtfully understated, relying on outlines and muted states rather than bold fills, ensuring the focus remains on the analytical content and user workflow."
theme: "light"
industry: "ai"
source_url: "https://hex.tech"
refero_style_id: "3e32db74-a61d-4e72-93b8-1fb949af2c00"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508417931-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508417931-thumb.jpg"
extracted_at: "2026-04-30T00:20:55.351Z"
---

# Hex — Style Reference

> Analytical Clarity on Canvas: A pristine digital workspace where data takes center stage, framed by muted sophistication and precise typography.

**Theme:** light

**Industry:** ai

Hex delivers a sophisticated, data-centric aesthetic, characterized by a clean white canvas that highlights nuanced typography and subtle violet accents. The design balances precise information display with hints of visual depth through soft shadows and varied typefaces. Interactive elements are thoughtfully understated, relying on outlines and muted states rather than bold fills, ensuring the focus remains on the analytical content and user workflow.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #fffcfc | `--color-canvas-white` | Page background, card backgrounds, input fields, primary surfaces — the foundational light backdrop for all content |
| Obsidian Ink | #01011b | `--color-obsidian-ink` | Primary text, informational UI elements, card outlines, dark surface accents — a deep, muted violet-black that anchors primary content |
| Eggplant Gray | #31263b | `--color-eggplant-gray` | Secondary text, subtle borders, navigation text, and outlined button borders — a dark, desaturated gray with a hint of violet providing subtle contrast; Background for rich data visualization or complex interactive panels, providing a deep, immersive context |
| Charcoal Grey | #14141c | `--color-charcoal-grey` | Headings, strong text, navigation text, prominent borders — a slightly warmer, very dark gray for emphasis |
| Cement Gray | #717a94 | `--color-cement-gray` | Muted helper text, secondary icon fills, faint dividing lines — a cool, light grey for low-emphasis elements |
| Dusk Violet | #43394c | `--color-dusk-violet` | Subtle borders, navigation items, descriptive text — a mid-tone desaturated violet for a sense of quiet authority |
| Platinum Mist | #ecedf2 | `--color-platinum-mist` | Subtle background panels, table headers, soft dividers — a very light, cool gray for secondary surface differentiation |
| Slate Cloud | #dbd7da | `--color-slate-cloud` | Light borders, grid lines, subtle component separators — a pale, slightly warm gray |
| Minsk Violet | #473982 | `--color-minsk-violet` | Violet outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Indigo Punch | #6f63b7 | `--color-indigo-punch` | Violet wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |
| Lavender Field | #9e91d6 | `--color-lavender-field` | Secondary data visualization, softened accents — a moderate violet for complementary data representation |
| Rose Quartz | #f5c0c0 | `--color-rose-quartz` | Subtle indicators, decorative graphic elements — a muted red that provides a soft, warm counterpoint |
| Sunset Fade Gradient | #cd5973 | `--color-sunset-fade-gradient` | Decorative graphical elements, expressive backgrounds where a dynamic color transition is desired |

## Tokens — Typography

### PP Editorial New

- **Token:** `--font-pp-editorial-new`
- **Substitute:** Playfair Display
- **Weights:** 200
- **Sizes:** 78px
- **Line heights:** 1.30
- **Letter spacing:** -0.0240em
- **Role:** Display headlines — an extremely light-weight serif that creates a sense of gravitas and refined authority, setting a delicate, yet prominent tone for key brand statements.

### PP Formula SemiExtended

- **Token:** `--font-pp-formula-semiextended`
- **Substitute:** Archivo Expanded
- **Weights:** 700
- **Sizes:** 60px
- **Line heights:** 1.30
- **Letter spacing:** -0.0310em
- **Role:** Prominent marketing headlines, impactful feature titles — a bold, semi-extended sans-serif that commands attention with its strong, wide presence.

### PP Formula

- **Token:** `--font-pp-formula`
- **Substitute:** Archivo Black
- **Weights:** 800
- **Sizes:** 28px
- **Line heights:** 1.30
- **Letter spacing:** -0.0250em
- **Role:** Section headings, key UI labels — a very bold, compact sans-serif that delivers high impact in a smaller footprint, excellent for concise titles.

### IBM Plex Sans

- **Token:** `--font-ibm-plex-sans`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 10px, 12px, 16px, 20px, 24px, 26px
- **Line heights:** 1.20, 1.30, 1.40, 1.60, 1.83, 2.20, 2.33
- **Letter spacing:** -0.0350em, -0.0250em
- **Role:** General body text, UI labels, subheadings, and data labels — providing legibility and versatility across various content densities and functional needs. Distinctly tight letter-spacing at larger sizes gives a modern, compact feel.

### Lato

- **Token:** `--font-lato`
- **Substitute:** Open Sans
- **Weights:** 400, 600, 700
- **Sizes:** 10px, 12px, 14px
- **Line heights:** 1.20, 1.40, 1.83, 2.00, 2.20
- **Letter spacing:** -0.0140em
- **Role:** Small text, captions, metadata, and fine print — used for subtle informational text due to its slightly condensed feel and moderate letter-spacing.

### Cinetype

- **Token:** `--font-cinetype`
- **Substitute:** Inter
- **Weights:** 300, 400, 500, 700
- **Sizes:** 12px, 14px, 16px, 20px, 24px
- **Line heights:** 1.00, 1.50, 1.57
- **Letter spacing:** normal
- **Role:** Navigation, buttons, and functional UI elements — a versatile geometric sans-serif for interactive components, ensuring clarity and crispness. Normal letter-spacing maintains readability at smaller UI sizes.

### IBM Plex Mono

- **Token:** `--font-ibm-plex-mono`
- **Substitute:** Roboto Mono
- **Weights:** 400
- **Sizes:** 11px
- **Line heights:** 1.50
- **Letter spacing:** normal
- **Role:** Code snippets, data fields, and technical information — providing a consistent, fixed-width appearance crucial for displaying code and structured data clearly.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.2 | -0.14px | `--text-caption` |
| heading | 24px | 1.3 | — | `--text-heading` |
| heading-lg | 28px | 1.3 | -0.7px | `--text-heading-lg` |
| display | 78px | 1.3 | -1.872px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-92 | 92px | `--spacing-92` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-103 | 103px | `--spacing-103` |
| spacing-108 | 108px | `--spacing-108` |
| spacing-110 | 110px | `--spacing-110` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-122 | 122px | `--spacing-122` |
| spacing-242 | 242px | `--spacing-242` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 6px |
| badges | 9999px |
| inputs | 6px |
| buttons | 3px |
| default | 3px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(71, 57, 130, 0.1) 0px 0px 0px 1px inset | `--shadow-xl` |
| xl-2 | rgba(49, 38, 59, 0.22) 0px 0px 0px 1px, rgba(49, 38, 59, 0.09) 0px 103px 103px 0px, rgba(49, 38, 59, 0.1) 0px 26px 57px 0px | `--shadow-xl-2` |
| xl-3 | rgb(255, 255, 255) 0px 0px 0px 1px inset | `--shadow-xl-3` |
| xl-4 | rgba(71, 57, 130, 0.15) 0px 0px 0px 4px | `--shadow-xl-4` |
| xl-5 | rgba(49, 38, 59, 0.22) 0px 0px 0px 1px, rgba(49, 38, 59, 0.1) 0px 26px 57px 0px | `--shadow-xl-5` |
| xl-6 | rgba(0, 0, 0, 0.05) 0px 0px 11px 0px inset, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 16px 24px -8px, rgba(0, 0, 0, 0.05) 0px 8px 12px -4px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px | `--shadow-xl-6` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 70px |
| cardPadding | 12px |
| elementGap | 8px |

## Components

### Ghost Button

**Role:** Action button

Transparent background with a 1px Eggplant Gray (#31263b) border, 3px corner radius, and Obsidian Ink (#01011b) text. Padding is 9.6px vertical and 13.6px horizontal, using Cinetype font at 16px.

### Standard Card

**Role:** Information container

Canvas White (#fffcfc) background with a 6px border radius, featuring a layered shadow: rgba(49, 38, 59, 0.22) 0px 0px 0px 1px (thin border), rgba(49, 38, 59, 0.09) 0px 103px 103px 0px (large, distant shadow), rgba(49, 38, 59, 0.1) 0px 26px 57px 0px (closer, softer shadow). No internal padding indicated by default.

### Modal Card

**Role:** Interactive container

Frosted Canvas White (rgba(253, 253, 253, 0.4)) background with a larger 12px border radius. This card uses a complex, soft, multi-layered shadow with an inset #000000 shadow for depth, suggesting a floating, ethereal quality. Internal padding of 38px vertical and 45px horizontal defines its content area.

### Text Input

**Role:** Data entry

Transparent background, Obsidian Ink (#01011b) text and 1px border, with a 6px border radius. Internal padding is 12px on all sides, ensuring ample space for input. Focus states are indicated by an inset white shadow.

### Nav Button

**Role:** Navigation link

Transparent background, Eggplant Gray (#31263b) text, with Cinetype font at 16px. Implicitly, interaction involves a border change or background fill, as seen on the 'Get Started' button when hovered/active.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#fffcfc) for all primary backgrounds to maintain a clean, expansive aesthetic.
- Use Obsidian Ink (#01011b) for primary body text and most UI elements, reserving Charcoal Grey (#14141c) for headings.
- Apply Eggplant Gray (#31263b) as the default border color for outlined elements and secondary text.
- Utilize Minsk Violet (#473982) sparingly for accents, interactive states, and to highlight key application functionality.
- Ensure all cards use a 6px border radius and the layered shadow style: rgba(49, 38, 59, 0.22) 0px 0px 0px 1px, rgba(49, 38, 59, 0.09) 0px 103px 103px 0px, rgba(49, 38, 59, 0.1) 0px 26px 57px 0px.
- Implement the display typography in PP Editorial New at 78px, weight 200, with -0.0240em letter-spacing for all hero headlines.
- Maintain a compact spacing density, predominantly using 8px for element gaps and 3px for general corner radii (buttons, links).

### Don't

- Avoid using bold, filled buttons unless explicitly specified for a primary action, favoring ghost buttons with Eggplant Gray (#31263b) borders.
- Do not introduce strong, saturated colors unless they are part of the defined brand or accent palette, maintaining the subdued aesthetic.
- Refrain from using heavily textured or patterned backgrounds; surfaces should remain clean and uniform.
- Do not deviate from the specified typefaces; the interplay of serif for display and sans-serif for UI is crucial to the brand's typographic identity.
- Avoid excessive use of heavy shadows or opaque overlays, as the system relies on subtle depth and clear separation.
- Do not use letter-spacing values greater than normal for any text, especially body or caption text, as the design uses tight tracking to aid clarity.
- Avoid 9999px radius for anything other than small tags or badges; standard components use radii of 3px, 6px, or 12px.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #fffcfc | Primary page background, base surface for the entire application. |
| 1 | Platinum Mist | #ecedf2 | Secondary background for sections, tables, and subtle content blocks, providing a slight elevation from the main canvas. |
| 2 | Frost Card | #fffcfc | Component surfaces, cards, and interactive elements, distinguished by subtle shadow elevation rather than color change. |

## Elevation

- **Card:** `rgba(49, 38, 59, 0.22) 0px 0px 0px 1px, rgba(49, 38, 59, 0.09) 0px 103px 103px 0px, rgba(49, 38, 59, 0.1) 0px 26px 57px 0px`
- **Hovered Card:** `rgba(49, 38, 59, 0.22) 0px 0px 0px 1px, rgba(49, 38, 59, 0.1) 0px 26px 57px 0px`
- **Modal/Overlay Card:** `rgba(0, 0, 0, 0.05) 0px 0px 11px 0px inset, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 16px 24px -8px, rgba(0, 0, 0, 0.05) 0px 8px 12px -4px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`
- **Input Focus:** `rgb(255, 255, 255) 0px 0px 0px 1px inset`

## Similar Brands

- **Figma** — Similar approach to clean, white interface with prominent product screenshots embedded into the UI and a focus on subtle interactive elements.
- **Linear** — Emphasizes clear typography with a blend of serif and sans-serif for distinct roles, minimalist UI patterns, and strong brand presence through content rather than heavy styling.
- **Amplitude** — Heavy use of data visualization within a light, analytical product interface, pairing a primary monospace font with a versatile sans-serif.
- **Notion** — Clear, crisp typography on a spacious white canvas, allowing content to take precedence, with functional components integrating seamlessly into the flow.
- **Vercel** — Precise, almost austere typography, with an emphasis on code and technical content within a clean, high-contrast light-mode interface.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #fffcfc;
  --color-obsidian-ink: #01011b;
  --color-eggplant-gray: #31263b;
  --color-charcoal-grey: #14141c;
  --color-cement-gray: #717a94;
  --color-dusk-violet: #43394c;
  --color-platinum-mist: #ecedf2;
  --color-slate-cloud: #dbd7da;
  --color-minsk-violet: #473982;
  --color-indigo-punch: #6f63b7;
  --color-lavender-field: #9e91d6;
  --color-rose-quartz: #f5c0c0;
  --color-sunset-fade-gradient: #cd5973;
  --font-pp-editorial-new: 'PP Editorial New', Playfair Display;
  --font-pp-formula-semiextended: 'PP Formula SemiExtended', Archivo Expanded;
  --font-pp-formula: 'PP Formula', Archivo Black;
  --font-ibm-plex-sans: 'IBM Plex Sans', Inter;
  --font-lato: 'Lato', Open Sans;
  --font-cinetype: 'Cinetype', Inter;
  --font-ibm-plex-mono: 'IBM Plex Mono', Roboto Mono;
  --text-caption: 10px;
  --leading-caption: 1.2;
  --tracking-caption: -0.14px;
  --text-heading: 24px;
  --leading-heading: 1.3;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.3;
  --tracking-heading-lg: -0.7px;
  --text-display: 78px;
  --leading-display: 1.3;
  --tracking-display: -1.872px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-35: 35px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-92: 92px;
  --spacing-96: 96px;
  --spacing-103: 103px;
  --spacing-108: 108px;
  --spacing-110: 110px;
  --spacing-120: 120px;
  --spacing-122: 122px;
  --spacing-242: 242px;
  --radius-cards: 6px;
  --radius-badges: 9999px;
  --radius-inputs: 6px;
  --radius-buttons: 3px;
  --radius-default: 3px;
  --shadow-xl: rgba(71, 57, 130, 0.1) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgba(49, 38, 59, 0.22) 0px 0px 0px 1px, rgba(49, 38, 59, 0.09) 0px 103px 103px 0px, rgba(49, 38, 59, 0.1) 0px 26px 57px 0px;
  --shadow-xl-3: rgb(255, 255, 255) 0px 0px 0px 1px inset;
  --shadow-xl-4: rgba(71, 57, 130, 0.15) 0px 0px 0px 4px;
  --shadow-xl-5: rgba(49, 38, 59, 0.22) 0px 0px 0px 1px, rgba(49, 38, 59, 0.1) 0px 26px 57px 0px;
  --shadow-xl-6: rgba(0, 0, 0, 0.05) 0px 0px 11px 0px inset, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 16px 24px -8px, rgba(0, 0, 0, 0.05) 0px 8px 12px -4px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  --surface-canvas-white: #fffcfc;
  --surface-platinum-mist: #ecedf2;
  --surface-frost-card: #fffcfc;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #fffcfc;
  --color-obsidian-ink: #01011b;
  --color-eggplant-gray: #31263b;
  --color-charcoal-grey: #14141c;
  --color-cement-gray: #717a94;
  --color-dusk-violet: #43394c;
  --color-platinum-mist: #ecedf2;
  --color-slate-cloud: #dbd7da;
  --color-minsk-violet: #473982;
  --color-indigo-punch: #6f63b7;
  --color-lavender-field: #9e91d6;
  --color-rose-quartz: #f5c0c0;
  --color-sunset-fade-gradient: #cd5973;
  --font-pp-editorial-new: 'PP Editorial New', Playfair Display;
  --font-pp-formula-semiextended: 'PP Formula SemiExtended', Archivo Expanded;
  --font-pp-formula: 'PP Formula', Archivo Black;
  --font-ibm-plex-sans: 'IBM Plex Sans', Inter;
  --font-lato: 'Lato', Open Sans;
  --font-cinetype: 'Cinetype', Inter;
  --font-ibm-plex-mono: 'IBM Plex Mono', Roboto Mono;
  --text-caption: 10px;
  --leading-caption: 1.2;
  --tracking-caption: -0.14px;
  --text-heading: 24px;
  --leading-heading: 1.3;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.3;
  --tracking-heading-lg: -0.7px;
  --text-display: 78px;
  --leading-display: 1.3;
  --tracking-display: -1.872px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-35: 35px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-92: 92px;
  --spacing-96: 96px;
  --spacing-103: 103px;
  --spacing-108: 108px;
  --spacing-110: 110px;
  --spacing-120: 120px;
  --spacing-122: 122px;
  --spacing-242: 242px;
  --radius-cards: 6px;
  --radius-badges: 9999px;
  --radius-inputs: 6px;
  --radius-buttons: 3px;
  --radius-default: 3px;
  --shadow-xl: rgba(71, 57, 130, 0.1) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgba(49, 38, 59, 0.22) 0px 0px 0px 1px, rgba(49, 38, 59, 0.09) 0px 103px 103px 0px, rgba(49, 38, 59, 0.1) 0px 26px 57px 0px;
  --shadow-xl-3: rgb(255, 255, 255) 0px 0px 0px 1px inset;
  --shadow-xl-4: rgba(71, 57, 130, 0.15) 0px 0px 0px 4px;
  --shadow-xl-5: rgba(49, 38, 59, 0.22) 0px 0px 0px 1px, rgba(49, 38, 59, 0.1) 0px 26px 57px 0px;
  --shadow-xl-6: rgba(0, 0, 0, 0.05) 0px 0px 11px 0px inset, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 16px 24px -8px, rgba(0, 0, 0, 0.05) 0px 8px 12px -4px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  --surface-canvas-white: #fffcfc;
  --surface-platinum-mist: #ecedf2;
  --surface-frost-card: #fffcfc;
}
```
