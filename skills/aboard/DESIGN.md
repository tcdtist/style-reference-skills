---
version: alpha
name: "Aboard"
description: "Aboard projects a playful, human-centered HR experience through its soft, pastel color palette and friendly, rounded interfaces. The system combines crisp, dark typography with a clean, light canvas, punctuated by cheerful accent colors and varied card backgrounds. Components are lightweight with generous padding and prominent border radii, creating an approachable and inviting visual environment. The overall design feels like a thoughtful, organized space that prioritizes user comfort and visual delight."
theme: "light"
industry: "productivity"
source_url: "https://aboardhr.com"
refero_style_id: "fabacd2a-acb6-46c4-939c-4a464df15440"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510344592-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510344592-thumb.jpg"
extracted_at: "2026-04-30T00:53:06.694Z"
---

# Aboard — Style Reference

> Joyful pastel workspace

**Theme:** light

**Industry:** productivity

Aboard projects a playful, human-centered HR experience through its soft, pastel color palette and friendly, rounded interfaces. The system combines crisp, dark typography with a clean, light canvas, punctuated by cheerful accent colors and varied card backgrounds. Components are lightweight with generous padding and prominent border radii, creating an approachable and inviting visual environment. The overall design feels like a thoughtful, organized space that prioritizes user comfort and visual delight.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #fafafa | `--color-canvas-white` | Page backgrounds, primary surface for cards and clean sections |
| Graphite Black | #000000 | `--color-graphite-black` | Primary text, headline text, bold iconography, strong borders |
| Ink Gray | #262626 | `--color-ink-gray` | Secondary text, subheadings, internal UI labels; Decorative background gradient used for dynamic visual interest, typically in hero sections or prominent feature blocks |
| Muted Ash | #757577 | `--color-muted-ash` | Tertiary text, navigation links, decorative border lines |
| Light Shadow | #cdcdcd | `--color-light-shadow` | Subtle border colors, divider lines, soft box shadows for elements |
| Sky Blue | #e0f2fe | `--color-sky-blue` | Background for secondary action buttons, subtle highlights |
| Cotton Candy Pink | #fbcfe8 | `--color-cotton-candy-pink` | Decorative card backgrounds, playful highlight sections |
| Misty Lavender | #e6dafd | `--color-misty-lavender` | Decorative card backgrounds, soft thematic accents |
| Aquamarine Tint | #b6edee | `--color-aquamarine-tint` | Decorative card backgrounds, refreshing soft highlights |
| Powder Blue | #afe4ff | `--color-powder-blue` | Decorative card backgrounds, light background accents |
| Buttercup Yellow | #ffe77a | `--color-buttercup-yellow` | Decorative card backgrounds, bright accent blocks |
| Vivid Violet | #975aff | `--color-vivid-violet` | Spot color for icons, specific text highlights, small decorative elements |
| Warm Orange | #ff6800 | `--color-warm-orange` | Spot color for icons, specific text highlights, small decorative elements |
| Bright Teal | #00babf | `--color-bright-teal` | Spot color for icons, specific text highlights, small decorative elements |
| Deep Blue | #008ae8 | `--color-deep-blue` | Blue outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |

## Tokens — Typography

### system-ui

- **Token:** `--font-system-ui`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 15px, 16px, 18px, 20px, 24px, 44px, 56px, 64px
- **Line heights:** 1.00, 1.10, 1.20, 1.30, 1.40, 1.50, 1.56, 1.60, 2.00
- **Letter spacing:** -0.0100em
- **Role:** All primary interface text, headings, body text, and links. The varied weights and precise letter-spacing create a clear, modern voice that feels simultaneously friendly and authoritative.

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** Roboto
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Fallback for system-ui, used for general UI elements where specific styling is less critical, ensuring broad compatibility.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | -0.12px | `--text-caption` |
| body-sm | 15px | 1.5 | -0.15px | `--text-body-sm` |
| subheading | 18px | 1.5 | -0.162px | `--text-subheading` |
| heading-sm | 20px | 1.3 | -0.18px | `--text-heading-sm` |
| heading | 24px | 1.4 | -0.24px | `--text-heading` |
| heading-lg | 44px | 1.1 | -0.44px | `--text-heading-lg` |
| display | 56px | 1 | -0.56px | `--text-display` |
| display-lg | 64px | 1 | -0.64px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
| --- | --- |
| body | 2px |
| cards | 24px |
| small | 6px |
| buttons | 99px |
| general | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 32px |
| elementGap | 10px |

## Components

### Outline Pill Button

**Role:** Primary action, navigation items

Rounded pill-shaped button with a border of Deep Blue (#008ae8), transparent background, and Deep Blue (#008ae8) text. Padding: 10px vertical, 24px horizontal. Radius: 99px.

### Light Blue Pill Button

**Role:** Secondary action, call to action

Rounded pill-shaped button with a Sky Blue (#e0f2fe) background, Deep Blue (#008ae8) text. Padding: 10px vertical, 24px horizontal. Radius: 99px.

### Hero Section Card

**Role:** Content container, information display

Card with varied backgrounds like Cotton Candy Pink (#fbcfe8) or Misty Lavender (#e6dafd). Features a 24px border radius, with 40px padding on top, right, and left, and 0px padding at the bottom for content flow into the next section.

### Feature Card (Playful)

**Role:** Feature showcase, data visualization

Square card with a 24px border radius and generous 32px padding on all sides. Backgrounds include Buttercup Yellow (#ffe77a), Aquamarine Tint (#b6edee), or Powder Blue (#afe4ff), creating a vibrant, inviting visual. No box shadow.

## Do's and Don'ts

### Do

- Use Graphite Black (#000000) for all main headings and primary body text to maintain visual clarity and contrast.
- Apply a 99px border radius to all interactive buttons and tags to consistently convey an approachable, friendly aesthetic.
- Utilize Canvas White (#fafafa) as the dominant background for all main page content and primary cards.
- Incorporate the accent colors (Cotton Candy Pink, Misty Lavender, Aquamarine Tint, Powder Blue, Buttercup Yellow) primarily for distinct card backgrounds and decorative sections.
- Maintain a comfortable density with an element gap of 10px and card padding of 32px to ensure readability and spaciousness.
- Headers and page titles should use system-ui at appropriate sizes from the type scale with negative letter-spacing for a refined look.
- Use Deep Blue (#008ae8) exclusively for interactive link text and button borders to clearly signal interactivity.

### Don't

- Avoid using the accent pastel colors for text or borders; they are reserved for background washes and decorative surfaces.
- Do not introduce sharp corners or small radii (less than 24px) for cards or larger containers; consistency in rounded shapes is key.
- Refrain from using strong, dark shadows. The system relies on light-colored borders and background variations for element separation.
- Do not apply the Gradient Aura to small UI elements or text; it is intended for large, impactful background sections only.
- Avoid deviating from the defined system-ui and sans-serif fonts; no custom fonts should be introduced.
- Do not use generic gray tones for interactive elements; leverage Deep Blue (#008ae8) for all actionable states.
- Do not clutter layouts; prioritize comfortable spacing with 10px element gaps and 32px card padding.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Background | #fafafa | Dominant page and main content area background. |
| 1 | Accent Card Base | #e0f2fe | Background for secondary action buttons, subtle highlights, and a base for themed content blocks. |
| 2 | Vibrant Card Washes | #ffe77a | A range of pastel colors (#ffe77a, #b6edee, #e6dafd, #fbcfe8, #afe4ff) for decorative card backgrounds and thematic sections, adding visual warmth and playfulness. |

## Similar Brands

- **Braid** — Shares a pastel, multi-color card background approach for features and content.
- **Rippling** — Similar emphasis on a clean, light interface with concise data presentation and friendly typography, though Aboard is more colorful.
- **Notion** — Uses generous whitespace and subtle UI elements to create a calm, focused digital workspace, albeit with a less chromatic palette than Aboard.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #fafafa;
  --color-graphite-black: #000000;
  --color-ink-gray: #262626;
  --color-muted-ash: #757577;
  --color-light-shadow: #cdcdcd;
  --color-sky-blue: #e0f2fe;
  --color-cotton-candy-pink: #fbcfe8;
  --color-misty-lavender: #e6dafd;
  --color-aquamarine-tint: #b6edee;
  --color-powder-blue: #afe4ff;
  --color-buttercup-yellow: #ffe77a;
  --color-vivid-violet: #975aff;
  --color-warm-orange: #ff6800;
  --color-bright-teal: #00babf;
  --color-deep-blue: #008ae8;
  --font-system-ui: 'system-ui', Inter;
  --font-sans-serif: 'sans-serif', Roboto;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: -0.12px;
  --text-body-sm: 15px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.15px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.162px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: -0.18px;
  --text-heading: 24px;
  --leading-heading: 1.4;
  --tracking-heading: -0.24px;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.44px;
  --text-display: 56px;
  --leading-display: 1;
  --tracking-display: -0.56px;
  --text-display-lg: 64px;
  --leading-display-lg: 1;
  --tracking-display-lg: -0.64px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-120: 120px;
  --radius-body: 2px;
  --radius-cards: 24px;
  --radius-small: 6px;
  --radius-buttons: 99px;
  --radius-general: 10px;
  --surface-canvas-background: #fafafa;
  --surface-accent-card-base: #e0f2fe;
  --surface-vibrant-card-washes: #ffe77a;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #fafafa;
  --color-graphite-black: #000000;
  --color-ink-gray: #262626;
  --color-muted-ash: #757577;
  --color-light-shadow: #cdcdcd;
  --color-sky-blue: #e0f2fe;
  --color-cotton-candy-pink: #fbcfe8;
  --color-misty-lavender: #e6dafd;
  --color-aquamarine-tint: #b6edee;
  --color-powder-blue: #afe4ff;
  --color-buttercup-yellow: #ffe77a;
  --color-vivid-violet: #975aff;
  --color-warm-orange: #ff6800;
  --color-bright-teal: #00babf;
  --color-deep-blue: #008ae8;
  --font-system-ui: 'system-ui', Inter;
  --font-sans-serif: 'sans-serif', Roboto;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: -0.12px;
  --text-body-sm: 15px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.15px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.162px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: -0.18px;
  --text-heading: 24px;
  --leading-heading: 1.4;
  --tracking-heading: -0.24px;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.44px;
  --text-display: 56px;
  --leading-display: 1;
  --tracking-display: -0.56px;
  --text-display-lg: 64px;
  --leading-display-lg: 1;
  --tracking-display-lg: -0.64px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-120: 120px;
  --radius-body: 2px;
  --radius-cards: 24px;
  --radius-small: 6px;
  --radius-buttons: 99px;
  --radius-general: 10px;
  --surface-canvas-background: #fafafa;
  --surface-accent-card-base: #e0f2fe;
  --surface-vibrant-card-washes: #ffe77a;
}
```
