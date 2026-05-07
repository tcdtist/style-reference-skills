---
version: alpha
name: "Dennis Snellenberg"
description: "Dennis Snellenberg's design system uses a confident, dark-mode aesthetic with a strong emphasis on spaciousness and precise typography. Surfaces are predominantly dark, with crisp white text providing high contrast. A single vivid violet hue serves as the primary brand accent, thoughtfully deployed to highlight interactive elements and create moments of visual interest. The overall impression is one of meticulous craft and understated digital elegance."
theme: "dark"
industry: "design"
source_url: "https://dennissnellenberg.com"
refero_style_id: "28e8e762-8d8c-4e88-84ed-858f9917cb58"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514235323-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514235323-thumb.jpg"
extracted_at: "2026-04-30T01:57:33.265Z"
---

# Dennis Snellenberg — Style Reference

> midnight command center

**Theme:** dark

**Industry:** design

Dennis Snellenberg's design system uses a confident, dark-mode aesthetic with a strong emphasis on spaciousness and precise typography. Surfaces are predominantly dark, with crisp white text providing high contrast. A single vivid violet hue serves as the primary brand accent, thoughtfully deployed to highlight interactive elements and create moments of visual interest. The overall impression is one of meticulous craft and understated digital elegance.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #1c1d20 | `--color-midnight-ink` | Page background, primary text, prominent borders for both dark and light surfaces, and neutral interactive states |
| Frosted Glass | #ffffff | `--color-frosted-glass` | Primary text on dark backgrounds, secondary background surfaces, and borders that delineate content on darker cards |
| Neutral Stone | #999d9e | `--color-neutral-stone` | Muted background elements, serving as a softer dark surface |
| Graphite Shadow | #494a4d | `--color-graphite-shadow` | Subtle background surfaces, card shadows, suggesting depth without high contrast |
| Vivid Violet | #455ce9 | `--color-vivid-violet` | Main accent color for interactive elements like links and card backgrounds, drawing attention to clickable areas and brand-specific content |
| Deep Violet | #334bd3 | `--color-deep-violet` | A darker shade of violet for subtle variations in accent elements or states |

## Tokens — Typography

### Dennis Sans

- **Token:** `--font-dennis-sans`
- **Substitute:** Inter
- **Weights:** 450
- **Sizes:** 10px, 12px, 14px, 15px, 17px, 33px, 60px, 76px, 88px, 216px
- **Line heights:** 1.00, 1.06, 1.07, 1.20, 1.40, 1.45, 1.60, 1.66
- **Letter spacing:** 0.0500em
- **Role:** The single typeface for all interface elements, from large display headings to body text. Its consistent weight and geometric clarity establish a strong, modern, and readable foundation across the system, contributing to the site's confident voice.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.66 | 0.05px | `--text-caption` |
| body-lg | 15px | 1.06 | 0.05px | `--text-body-lg` |
| heading-sm | 33px | 1.45 | 0.05px | `--text-heading-sm` |
| heading | 60px | 1.2 | 0.05px | `--text-heading` |
| heading-lg | 76px | 1 | 0.05px | `--text-heading-lg` |
| display | 216px | 1 | 0.05px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-63 | 63px | `--spacing-63` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-108 | 108px | `--spacing-108` |
| spacing-115 | 115px | `--spacing-115` |
| spacing-125 | 125px | `--spacing-125` |
| spacing-135 | 135px | `--spacing-135` |
| spacing-189 | 189px | `--spacing-189` |
| spacing-230 | 230px | `--spacing-230` |

### Border Radius

| Element | Value |
| --- | --- |
| body | 10px |
| links | 36.72px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| elementGap | 12px |

## Components

### Located Tag

**Role:** Informational tag showing location context.

Background: Midnight Ink (#1c1d20). Text: Frosted Glass (#ffffff). Padding: 17px vertical, 18px horizontal. Border radius: 36.72px. Contains an icon.

### Navigation Link

**Role:** Primary navigation item in headers and footers.

Text: Frosted Glass (#ffffff) on dark backgrounds, Midnight Ink (#1c1d20) on light. Padding: 8px vertical. Margin: 12px horizontal. Border radius: 36.72px for interactive states, often exhibiting an inset white shadow `rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset` on hover/focus.

### Circular Brand Card - Vivid Violet

**Role:** Highlighting specific project categories or services with brand color.

Background: Vivid Violet (#455ce9). Border radius: 50%. No box shadow. Padding: 0px.

### Circular Brand Card - Deep Violet

**Role:** Supporting brand elements with a darker variation of the accent.

Background: Deep Violet (#334bd3). Border radius: 50%. No box shadow. Padding: 0px.

### Circular Neutral Card - Midnight Ink

**Role:** General purpose neutral card for categorization or grouping.

Background: Midnight Ink (#1c1d20). Border radius: 50%. No box shadow. Padding: 0px.

### Circular Neutral Card - Frosted Glass

**Role:** Highlighting elements on a dark background where full contrast is desired.

Background: Frosted Glass (#ffffff). Border radius: 50%. No box shadow. Padding: 0px.

## Do's and Don'ts

### Do

- Prioritize Midnight Ink (#1c1d20) for primary page backgrounds and dark surface elements, establishing the core theme.
- Use Frosted Glass (#ffffff) for all main text on dark backgrounds and as a crisp accent for elements requiring high contrast.
- Apply Vivid Violet (#455ce9) sparingly for interactive elements, links, and card backgrounds to draw attention and reinforce brand identity.
- Ensure generous padding and spacing, using 18px as a consistent vertical and horizontal padding for most major content blocks and 12px for smaller element gaps.
- Utilize the Dennis Sans font with its consistent weight 450 across all text, relying on size changes for hierarchical differentiation.
- Employ a border radius of 36.72px for interactive links and tags, creating a distinct pill-like shape, contrasting with 10px for more structural body elements.
- Implement an inset shadow `rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset` for interactive link states to provide subtle feedback without heavy elevation.

### Don't

- Avoid using multiple accent colors; Vivid Violet (#455ce9) is the sole chromatic accent.
- Do not introduce heavy drop shadows or strong skeuomorphic elements; use subtle inset borders or background color shifts for depth.
- Refrain from using overly bold or light font weights, as Dennis Sans weight 450 is the primary typographic expression.
- Do not clutter layouts with dense information; maintain comfortable spacing values (12px element gap, 18px padding for sections) to ensure readability.
- Avoid arbitrary border radii; stick to the specified 36.72px for interactive elements and 10px for structural containers.
- Do not use Frosted Glass (#ffffff) as a full-page background; its primary role is for text and elevated surfaces on dark pages.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Base | #1c1d20 | Primary background for the entire page, providing a foundational dark canvas. |
| 1 | Card Surface | #494a4d | Slightly elevated background for cards or distinct content blocks. |
| 2 | Accent Surface | #334bd3 | A vivid violet background for interactive elements or highlighted cards. |
| 3 | Highlighted Accent Surface | #455ce9 | A brighter vivid violet for primary interactive elements, standing out boldly. |
| 4 | Muted Background | #999d9 | A lighter neutral background for specific sections or elements requiring less contrast. |

## Elevation

- **Navigation Link Interactive:** `rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset`

## Imagery

The site primarily uses photography, featuring a candid product shot of the brand's owner on a neutral gray background. The imagery is product-focused (the person as the 'product' representation) with a clean, unadorned treatment. Icons are minimal, represented by a clear, outlined style for global context (globe icon). Density is low, with imagery serving as a focal point rather than information conveyance, leaving ample space for typography.

## Layout

The page exhibits a max-width contained layout, approximately 1200px, with content centered. The hero section is full-bleed, featuring a person offset to the right against a gray background with large typography on the left. Section rhythm is implied by strong negative space and the dark theme, rather than distinct alternating bands. Content arrangement seems to favor asymmetric compositions with large typographic elements balanced by visual components. Navigation is a minimalist top-right header, indicating a non-sticky, simple structure.

## Similar Brands

- **Stripe** — High contrast dark-mode UI with sophisticated typography and minimal use of bold accent colors for interaction.
- **Linear** — Emphasis on spaciousness, clean typography, system-level design with a controlled chromatic palette, and subtle elevation.
- **Figma** — Clear hierarchy through type scaling, dark theme surfaces, and functional use of color, often applying a single primary accent.
- **Craft.do** — Clean, understated dark UI that allows content to breathe, employing deliberate spacing and typography for visual comfort.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #1c1d20;
  --color-frosted-glass: #ffffff;
  --color-neutral-stone: #999d9e;
  --color-graphite-shadow: #494a4d;
  --color-vivid-violet: #455ce9;
  --color-deep-violet: #334bd3;
  --font-dennis-sans: 'Dennis Sans', Inter;
  --text-caption: 10px;
  --leading-caption: 1.66;
  --tracking-caption: 0.05px;
  --text-body-lg: 15px;
  --leading-body-lg: 1.06;
  --tracking-body-lg: 0.05px;
  --text-heading-sm: 33px;
  --leading-heading-sm: 1.45;
  --tracking-heading-sm: 0.05px;
  --text-heading: 60px;
  --leading-heading: 1.2;
  --tracking-heading: 0.05px;
  --text-heading-lg: 76px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: 0.05px;
  --text-display: 216px;
  --leading-display: 1;
  --tracking-display: 0.05px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-22: 22px;
  --spacing-43: 43px;
  --spacing-54: 54px;
  --spacing-58: 58px;
  --spacing-63: 63px;
  --spacing-90: 90px;
  --spacing-108: 108px;
  --spacing-115: 115px;
  --spacing-125: 125px;
  --spacing-135: 135px;
  --spacing-189: 189px;
  --spacing-230: 230px;
  --radius-body: 10px;
  --radius-links: 36.72px;
  --shadow-xl: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset;
  --surface-page-base: #1c1d20;
  --surface-card-surface: #494a4d;
  --surface-accent-surface: #334bd3;
  --surface-highlighted-accent-surface: #455ce9;
  --surface-muted-background: #999d9;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #1c1d20;
  --color-frosted-glass: #ffffff;
  --color-neutral-stone: #999d9e;
  --color-graphite-shadow: #494a4d;
  --color-vivid-violet: #455ce9;
  --color-deep-violet: #334bd3;
  --font-dennis-sans: 'Dennis Sans', Inter;
  --text-caption: 10px;
  --leading-caption: 1.66;
  --tracking-caption: 0.05px;
  --text-body-lg: 15px;
  --leading-body-lg: 1.06;
  --tracking-body-lg: 0.05px;
  --text-heading-sm: 33px;
  --leading-heading-sm: 1.45;
  --tracking-heading-sm: 0.05px;
  --text-heading: 60px;
  --leading-heading: 1.2;
  --tracking-heading: 0.05px;
  --text-heading-lg: 76px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: 0.05px;
  --text-display: 216px;
  --leading-display: 1;
  --tracking-display: 0.05px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-22: 22px;
  --spacing-43: 43px;
  --spacing-54: 54px;
  --spacing-58: 58px;
  --spacing-63: 63px;
  --spacing-90: 90px;
  --spacing-108: 108px;
  --spacing-115: 115px;
  --spacing-125: 125px;
  --spacing-135: 135px;
  --spacing-189: 189px;
  --spacing-230: 230px;
  --radius-body: 10px;
  --radius-links: 36.72px;
  --shadow-xl: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset;
  --surface-page-base: #1c1d20;
  --surface-card-surface: #494a4d;
  --surface-accent-surface: #334bd3;
  --surface-highlighted-accent-surface: #455ce9;
  --surface-muted-background: #999d9;
}
```
