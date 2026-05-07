---
version: alpha
name: "Nornorm"
description: "Nornorm presents a stark, almost architectural aesthetic: clean white surfaces and deep, commanding dark typography with a single, highly saturated violet acting as a functional highlight for interactive elements and brand accents. The design emphasizes content clarity and a sense of gravity, achieved through generous negative space and a reserved use of color. Component styles are minimal, often borderless or using subtle outlines, allowing the strong typographic voice and the violet accent to direct focus."
theme: "light"
industry: "saas"
source_url: "https://nornorm.com"
refero_style_id: "0769ff4c-f719-4865-98df-de2f44c694a6"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519543549-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519543549-thumb.jpg"
extracted_at: "2026-04-30T03:26:03.665Z"
---

# Nornorm — Style Reference

> Architectural Blueprint on White

**Theme:** light

**Industry:** saas

Nornorm presents a stark, almost architectural aesthetic: clean white surfaces and deep, commanding dark typography with a single, highly saturated violet acting as a functional highlight for interactive elements and brand accents. The design emphasizes content clarity and a sense of gravity, achieved through generous negative space and a reserved use of color. Component styles are minimal, often borderless or using subtle outlines, allowing the strong typographic voice and the violet accent to direct focus.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button text (hero), navigation background |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text across titles, body, and major UI elements, high-contrast borders |
| Storm Gray | #6a6a6a | `--color-storm-gray` | Secondary text, muted headings, subtle borders, navigation text for inactive states |
| Light Ash | #f1efe9 | `--color-light-ash` | Subtle background for alternating sections or elevated surfaces |
| Frost | #ececec | `--color-frost` | Background for subtle, interactive elements and secondary buttons |
| Command Violet | #1e37a0 | `--color-command-violet` | Violet outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |

## Tokens — Typography

### Lunar

- **Token:** `--font-lunar`
- **Substitute:** Inter
- **Weights:** 400, 500, 700
- **Sizes:** 14px, 16px, 20px, 24px, 32px, 48px, 64px, 80px, 112px
- **Line heights:** 1.00, 1.30
- **Letter spacing:** -0.03
- **Role:** The primary typeface for all text content, from headings to body text and UI labels. Its broad range of weights and tight letter-spacing (-0.03em across all sizes) are key to its compact, authoritative feel, especially for larger headlines. Weight 700 is reserved for dominant messaging, while 400 and 500 maintain legibility in body and UI contexts.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.3 | -0.03px | `--text-caption` |
| body | 16px | 1.3 | -0.03px | `--text-body` |
| subheading | 20px | 1.3 | -0.03px | `--text-subheading` |
| heading-sm | 24px | 1.3 | -0.03px | `--text-heading-sm` |
| heading | 32px | 1.3 | -0.03px | `--text-heading` |
| heading-lg | 48px | 1 | -0.03px | `--text-heading-lg` |
| display | 64px | 1 | -0.03px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-63 | 63px | `--spacing-63` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-78 | 78px | `--spacing-78` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-95 | 95px | `--spacing-95` |
| spacing-105 | 105px | `--spacing-105` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-154 | 154px | `--spacing-154` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-202 | 202px | `--spacing-202` |
| spacing-218 | 218px | `--spacing-218` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 8px |
| others | 8px |
| buttons | 1440px |
| navigation | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Ghost Navigation Button

**Role:** Primary navigation links and interactive textual buttons that blend into the background.

backgroundColor: rgba(0,0,0,0), color: #ffffff, border: none, padding: 12px 12px, border-radius: 0px. Used in dark hero sections.

### Subtle Gray Button

**Role:** Secondary action buttons with a soft visual emphasis.

backgroundColor: #ececec, color: #000000, border: none, border-radius: 1440px, padding: varies (minimal, often 0px in observed data but typically 12px vertical/24px horizontal for text). This is a 'pill' shape.

### Command Violet Filled Button

**Role:** Primary call-to-action buttons, indicating strongest interactive focus.

backgroundColor: #1e37a0, color: #ffffff, border: none, border-radius: 8px (inferred from general UI radius, not button-specific), padding: 12px 24px (example sizes).

### Feature Card

**Role:** Informational cards presenting key selling points or content blocks.

backgroundColor: rgba(0,0,0,0) or #ffffff (depending on section), border: none (implied by shadow=none), border-radius: 0px. Internal padding is elementGap/cardPadding of 16px.

### Header Navigation Item

**Role:** Top-level navigation links.

color: #000000 (active) or #6a6a6a (inactive), padding: 12px vertical, 24px horizontal, border-radius: 8px (for dropdowns/active states). Font: Lunar 16px, weight 400.

## Do's and Don'ts

### Do

- Prioritize a white (#ffffff) or light ash (#f1efe9) background for main content areas.
- Use Midnight Ink (#000000) for all primary body text and significant headings.
- Apply Command Violet (#1e37a0) exclusively for primary interactive elements, brand accents, and decorative borders on textual elements.
- Maintain tight letter-spacing (-0.03em) across all Lunar typography to ensure a compact and serious tone.
- Implement the large 1440px border-radius for 'pill' shaped buttons and a consistent 8px radius for container-like elements such as links and potentially filled buttons.
- Ensure generous vertical spacing between sections, adhering to a 48px section gap, allowing content to breathe.
- Use Storm Gray (#6a6a6a) for all secondary, supporting text and subtle UI borders.

### Don't

- Avoid using highly saturated colors other than Command Violet (#1e37a0) in the primary UI.
- Do not introduce heavy shadows or gradients, as the system relies on flat surfaces and high contrast.
- Do not deviate from the strict letter-spacing values; even slight changes will undermine the typographic identity.
- Avoid using multiple border styles or thicknesses, sticking to minimal or no borders for most elements except for specific accents.
- Do not use small, playful, or highly decorative typography; maintain the serious and professional character of Lunar.
- Avoid dense UIs; prioritize clear information hierarchy with ample negative space.
- Do not apply a border-radius of 0px to interactive surface-level buttons or links except for specific 'ghost' button variants.

## Imagery

The visual language predominantly features high-key, product-focused photography and abstract 3D renders with a monochromatic or desaturated color palette, often featuring clean lines and precise arrangements. Photography focuses on office environments and furniture, presented in a minimalist, often uncropped or full-bleed manner. Illustrations appear as flat, geometric, and monochromatic representations of concepts, primarily used for explanatory purposes within content cards. Icons are subtle, leveraging the primary text color, typically outlined. Imagery serves to showcase products and explain concepts, maintaining a clean and professional aesthetic with a medium density, allowing UI elements and text to dominate.

## Layout

The page generally follows a max-width contained model, ensuring content is centered and readable, although the hero section appears full-bleed. The hero pattern consists of a large, commanding centered headline overlaid on a rich, textural image, accompanied by ghost and subtle gray buttons. Section rhythm is primarily defined by alternating subtle background colors (white and light ash) and consistent vertical spacing (48px section gap), creating distinct content blocks. Content arrangement frequently uses 2-column or 4-column grids for feature lists and imagery, with a strong preference for centered text stacks for main headings and descriptive paragraphs. A sticky header provides persistent navigation.

## Similar Brands

- **Figma** — Clean, light UI with strong typography and a clear accent color for interactive elements.
- **Linear** — Uses a highly structured, minimalist approach with a focus on sharp typography and functional use of accent colors.
- **Stripe** — Combines a professional, white-dominant aesthetic with precise typography and subtle use of brand color highlights.
- **Vercel** — Leverages a minimalist design with ample white space, strong dark typography, and a single accent color to denote interactivity.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-midnight-ink: #000000;
  --color-storm-gray: #6a6a6a;
  --color-light-ash: #f1efe9;
  --color-frost: #ececec;
  --color-command-violet: #1e37a0;
  --font-lunar: 'Lunar', Inter;
  --text-caption: 14px;
  --leading-caption: 1.3;
  --tracking-caption: -0.03px;
  --text-body: 16px;
  --leading-body: 1.3;
  --tracking-body: -0.03px;
  --text-subheading: 20px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.03px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: -0.03px;
  --text-heading: 32px;
  --leading-heading: 1.3;
  --tracking-heading: -0.03px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.03px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -0.03px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-63: 63px;
  --spacing-64: 64px;
  --spacing-78: 78px;
  --spacing-90: 90px;
  --spacing-95: 95px;
  --spacing-105: 105px;
  --spacing-112: 112px;
  --spacing-140: 140px;
  --spacing-154: 154px;
  --spacing-160: 160px;
  --spacing-202: 202px;
  --spacing-218: 218px;
  --radius-links: 8px;
  --radius-others: 8px;
  --radius-buttons: 1440px;
  --radius-navigation: 8px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-midnight-ink: #000000;
  --color-storm-gray: #6a6a6a;
  --color-light-ash: #f1efe9;
  --color-frost: #ececec;
  --color-command-violet: #1e37a0;
  --font-lunar: 'Lunar', Inter;
  --text-caption: 14px;
  --leading-caption: 1.3;
  --tracking-caption: -0.03px;
  --text-body: 16px;
  --leading-body: 1.3;
  --tracking-body: -0.03px;
  --text-subheading: 20px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.03px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: -0.03px;
  --text-heading: 32px;
  --leading-heading: 1.3;
  --tracking-heading: -0.03px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.03px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -0.03px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-63: 63px;
  --spacing-64: 64px;
  --spacing-78: 78px;
  --spacing-90: 90px;
  --spacing-95: 95px;
  --spacing-105: 105px;
  --spacing-112: 112px;
  --spacing-140: 140px;
  --spacing-154: 154px;
  --spacing-160: 160px;
  --spacing-202: 202px;
  --spacing-218: 218px;
  --radius-links: 8px;
  --radius-others: 8px;
  --radius-buttons: 1440px;
  --radius-navigation: 8px;
}
```
