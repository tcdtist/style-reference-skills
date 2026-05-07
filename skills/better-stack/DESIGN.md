---
version: alpha
name: "Better Stack"
description: "Better Stack employs a 'deep space console' aesthetic, built on a dark, near-black canvas layered with subtly differentiated dark gray surfaces. Typography is compact and precise, maintaining excellent contrast. A single vivid violet hue provides functional accents for interactive elements and brand highlights, creating moments of focus within the muted interface. Components are lightweight with large border radii, suggesting touch-friendly forms on a data-dense, technical interface."
theme: "dark"
industry: "devtools"
source_url: "https://betterstack.com"
refero_style_id: "1de273f2-166f-4526-8442-16cc39fc7fd5"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510659246-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510659246-thumb.jpg"
extracted_at: "2026-04-30T00:58:12.160Z"
---

# Better Stack — Style Reference

> Deep space console

**Theme:** dark

**Industry:** devtools

Better Stack employs a 'deep space console' aesthetic, built on a dark, near-black canvas layered with subtly differentiated dark gray surfaces. Typography is compact and precise, maintaining excellent contrast. A single vivid violet hue provides functional accents for interactive elements and brand highlights, creating moments of focus within the muted interface. Components are lightweight with large border radii, suggesting touch-friendly forms on a data-dense, technical interface.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Abyss | #0f101a | `--color-midnight-abyss` | Primary page background, base surface for links, darkest tone in the UI |
| Graphite Panel | #151621 | `--color-graphite-panel` | Default button background, card backgrounds, and slightly elevated surfaces |
| Steel Overlay | #1f2433 | `--color-steel-overlay` | Input borders, card borders, and subtle separating lines |
| Faded Steel | #262935 | `--color-faded-steel` | Outlined button borders, secondary dividers |
| Muted Ash | #646e87 | `--color-muted-ash` | Faded secondary text, ghost button text, decorative icons |
| Ash Text | #939db8 | `--color-ash-text` | Primary text color for body copy, interactive states for text elements, and default borders |
| Cloud Whisper | #c9d3ee | `--color-cloud-whisper` | Navigation text, crisp text in low-contrast areas, button hover states, icon strokes |
| Pure White | #ffffff | `--color-pure-white` | Headline text, high-contrast text elements, input text; Subtle background texture or element fill for cards or graphic elements |
| Zero Black | #000000 | `--color-zero-black` | Icon fills in certain contexts, part of shadow definitions |
| Focus Violet | #98a4f7 | `--color-focus-violet` | Brand accent color for links, borders of interactive elements, and key highlights. Creates visual attention against the dark neutrals |
| Blue Violet Gradient | #5b63d3 | `--color-blue-violet-gradient` | Decorative gradient for headers or significant visual elements |

## Tokens — Typography

### Helvetica Now Text

- **Token:** `--font-helvetica-now-text`
- **Substitute:** Inter
- **Weights:** 400, 500, 700
- **Sizes:** 10px, 12px, 13px, 14px, 16px, 20px, 28px, 36px
- **Line heights:** 1.00, 1.08, 1.17, 1.20, 1.45, 1.50, 1.55, 1.60, 1.85
- **Letter spacing:** -0.01
- **OpenType features:** "ss01" on, "ss03" on, "ss04" on, "ss19" on
- **Role:** Versatile text font used for body copy, navigation, buttons, and most UI elements. Its compact metrics and varied weights provide clarity and efficiency in a data-rich environment.

### Helvetica Now Display

- **Token:** `--font-helvetica-now-display`
- **Substitute:** Inter
- **Weights:** 500, 700
- **Sizes:** 40px, 53px
- **Line heights:** 1.08, 1.10
- **Letter spacing:** -0.01
- **OpenType features:** "salt" on, "ss02" on, "ss01" on, "ss03" on, "ss04" on, "ss19" on
- **Role:** Used for prominent page headlines and key visual statements. Its display-specific optimizations enhance readability and visual impact at larger sizes, maintaining a precise, engineering-like aesthetic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | — | `--text-caption` |
| body | 14px | 1.5 | — | `--text-body` |
| body-lg | 16px | 1.6 | — | `--text-body-lg` |
| subheading | 20px | 1.55 | -0.2px | `--text-subheading` |
| heading | 28px | 1.17 | -0.28px | `--text-heading` |
| heading-lg | 36px | 1.2 | -0.36px | `--text-heading-lg` |
| display | 53px | 1.08 | -0.53px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-53 | 53px | `--spacing-53` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-158 | 158px | `--spacing-158` |
| spacing-164 | 164px | `--spacing-164` |
| spacing-165 | 165px | `--spacing-165` |
| spacing-192 | 192px | `--spacing-192` |
| spacing-213 | 213px | `--spacing-213` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| inputs | 10px |
| buttons | 9999px |
| dialogs | 16px |
| general | 10px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(255, 255, 255, 0.25) 0px 1px 3px 0px inset | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1320px |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Primary Filled Button

**Role:** Button

Filled button for primary actions. Background: Graphite Panel (#151621), Text: Ash Text (#939db8). Padding: 12px vertical, 24px horizontal. Border radius: 9999px. No shadow.

### Ghost Button

**Role:** Button

Ghost button for secondary actions. Background: transparent. Text: Muted Ash (#646e87). Padding: 8px vertical, 6px horizontal. No border or radius defined, implies square edges unless contextually inherited.

### Small Pill Button

**Role:** Button

Small, rounded ghost button with transparent background, Cloud Whisper (#c9d3ee) text, and a 10px border radius. Padding: 0px vertical, 24px horizontal. No shadow.

### Accent Outlined Button

**Role:** Button

Outlined button often used for accent links or calls to action. Background: transparent. Border: 1px solid Focus Violet (#98a4f7). Text: Focus Violet (#98a4f7). Padding: 12px vertical, 24px horizontal. Border radius: 9999px.

### Informative Card

**Role:** Card

Standard content card. Background: Graphite Panel (#151621). Border radius: 16px. Padding: 20px on all sides. No shadow.

### Input Field

**Role:** Input

Input field with a subtle dark background and white text. Background: rgba(0.594223, 0.00140271, -0.0566696, 0.1) which is near-black with 10% opacity. Border: 1px solid Steel Overlay (#1f2433). Text: Pure White (#ffffff). Border radius: 12px. Padding: 0px vertical, 20px horizontal.

## Do's and Don'ts

### Do

- Maintain a clear visual hierarchy by layering neutral background colors: Midnight Abyss (#0f101a) for base, Graphite Panel (#151621) for cards, and Steel Overlay (#1f2433) for borders.
- Use Focus Violet (#98a4f7) sparingly and strategically for brand accents, links, and active states to guide user attention within the dark UI.
- Adopt the rounded, pill-shaped '9999px' border radius for all actionable buttons to ensure a consistent, friendly form.
- Apply Helvetica Now Text font with a -0.01em letter-spacing consistently across all body and UI elements for a compact, technical feel.
- Center-align primary headlines and section titles, especially in full-width hero sections, to create a strong focal point.
- Utilize a base spacing unit of 4px to maintain consistent density and alignment across all components and layouts.
- Implement the linear blue-violet gradient (linear-gradient(353deg, rgb(91, 99, 211) 17.51%, rgb(124, 135, 247) 183.08%)) only for major decorative elements like hero backgrounds or section separators to prevent visual noise.

### Don't

- Avoid using saturated chromatic colors other than Focus Violet (#98a4f7) unless those colors are explicitly for semantic status indicators.
- Do not introduce strong drop shadows; rely on subtle inset shadows (rgba(255, 255, 255, 0.25) 0px 1px 3px 0px inset) or border differences for elevation.
- Do not deviate from the established type scale; maintain the precise letter-spacing and line heights for a consistent typographic rhythm.
- Do not use sharp 0px border radii on interactive elements or cards; the system prioritizes soft, rounded shapes.
- Avoid large, impactful photos or illustrations that break the product's dark, UI-focused aesthetic; prioritize product screenshots and abstract visuals.
- Do not use generic, default blue link colors; ensure all links are styled with Focus Violet (#98a4f7) or Cloud Whisper (#c9d3ee) for consistent branding.
- Refrain from using complex, multi-color decorative gradients casually; reserve them for impactful moments where their presence enhances, not distracts.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Midnight Abyss | #0f101a | Base page and deepest background surface |
| 1 | Graphite Panel | #151621 | Default background for cards and interactive components, slightly elevated from the base |
| 2 | Steel Overlay | #1f2433 | Input field borders, providing subtle depth and separation for interactive elements |

## Elevation

- **Nav, Button:** `inset 0px 1px 3px 0px rgba(255, 255, 255, 0.25)`

## Imagery

Imagery is functional and product-focused, primarily consisting of dark-themed UI screenshots that showcase the Better Stack platform. These embeds are contained within cards or placed alongside text. Iconography is minimalist, often monochrome or in Cloud Whisper (#c9d3ee), with clear, outlined styles, appearing at a small to medium stroke weight. No full-bleed photography or complex illustrations are present. The density of imagery is low, with visuals serving explanatory roles rather than decorative atmosphere, letting the UI and typography dominate.

## Layout

The page maintains a max-width of 1320px, with content consistently centered. The hero section is full-bleed with a dark background, featuring a prominent, centered headline and a call to action immediately below. Subsequent sections typically follow a 2-column or text-left/image-right alternating pattern. Vertical rhythm is established by consistent section gaps, with elements frequently grouped into cards that receive 20px of padding. Navigation is a persistent top bar, sticky on scroll, with clear text links.

## Similar Brands

- **Linear** — Dark UI, focus on structured data, subtle elevation, and a minimalist typographic approach with a single accent color.
- **Vercel** — Technical, dark-themed interface with clean typography, restrained use of color for functional highlights, and a focus on product screenshots.
- **Supabase** — Developer-centric dark mode emphasizing data and code, compact information density, and subtle branding through UI elements.
- **Stripe (dark mode)** — Sophisticated dark theme, precise typography, a strong focus on data visualization, and components designed for internal tool-like functionality.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-abyss: #0f101a;
  --color-graphite-panel: #151621;
  --color-steel-overlay: #1f2433;
  --color-faded-steel: #262935;
  --color-muted-ash: #646e87;
  --color-ash-text: #939db8;
  --color-cloud-whisper: #c9d3ee;
  --color-pure-white: #ffffff;
  --color-zero-black: #000000;
  --color-focus-violet: #98a4f7;
  --color-blue-violet-gradient: #5b63d3;
  --font-helvetica-now-text: 'Helvetica Now Text', Inter;
  --font-helvetica-now-display: 'Helvetica Now Display', Inter;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-body-lg: 16px;
  --leading-body-lg: 1.6;
  --text-subheading: 20px;
  --leading-subheading: 1.55;
  --tracking-subheading: -0.2px;
  --text-heading: 28px;
  --leading-heading: 1.17;
  --tracking-heading: -0.28px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.36px;
  --text-display: 53px;
  --leading-display: 1.08;
  --tracking-display: -0.53px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-53: 53px;
  --spacing-56: 56px;
  --spacing-128: 128px;
  --spacing-150: 150px;
  --spacing-158: 158px;
  --spacing-164: 164px;
  --spacing-165: 165px;
  --spacing-192: 192px;
  --spacing-213: 213px;
  --radius-cards: 16px;
  --radius-inputs: 10px;
  --radius-buttons: 9999px;
  --radius-dialogs: 16px;
  --radius-general: 10px;
  --shadow-xl: rgba(255, 255, 255, 0.25) 0px 1px 3px 0px inset;
  --surface-midnight-abyss: #0f101a;
  --surface-graphite-panel: #151621;
  --surface-steel-overlay: #1f2433;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-abyss: #0f101a;
  --color-graphite-panel: #151621;
  --color-steel-overlay: #1f2433;
  --color-faded-steel: #262935;
  --color-muted-ash: #646e87;
  --color-ash-text: #939db8;
  --color-cloud-whisper: #c9d3ee;
  --color-pure-white: #ffffff;
  --color-zero-black: #000000;
  --color-focus-violet: #98a4f7;
  --color-blue-violet-gradient: #5b63d3;
  --font-helvetica-now-text: 'Helvetica Now Text', Inter;
  --font-helvetica-now-display: 'Helvetica Now Display', Inter;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-body-lg: 16px;
  --leading-body-lg: 1.6;
  --text-subheading: 20px;
  --leading-subheading: 1.55;
  --tracking-subheading: -0.2px;
  --text-heading: 28px;
  --leading-heading: 1.17;
  --tracking-heading: -0.28px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.36px;
  --text-display: 53px;
  --leading-display: 1.08;
  --tracking-display: -0.53px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-53: 53px;
  --spacing-56: 56px;
  --spacing-128: 128px;
  --spacing-150: 150px;
  --spacing-158: 158px;
  --spacing-164: 164px;
  --spacing-165: 165px;
  --spacing-192: 192px;
  --spacing-213: 213px;
  --radius-cards: 16px;
  --radius-inputs: 10px;
  --radius-buttons: 9999px;
  --radius-dialogs: 16px;
  --radius-general: 10px;
  --shadow-xl: rgba(255, 255, 255, 0.25) 0px 1px 3px 0px inset;
  --surface-midnight-abyss: #0f101a;
  --surface-graphite-panel: #151621;
  --surface-steel-overlay: #1f2433;
}
```
