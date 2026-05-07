---
version: alpha
name: "Sprout Social"
description: "Sprout Social presents a commanding, professional digital environment with a strong dark foundation accented by clean white surfaces and precise typography. The design emphasizes clarity and direct interaction, utilizing a single vivid green as its primary action indicator to punctuate key user pathways. Components maintain a uniform, measured appearance with consistent corner radii, conveying stability and trustworthiness. The overall feel is one of a dense, feature-rich interface presented with visual order and an accessible rhythm."
theme: "dark"
industry: "saas"
source_url: "https://sproutsocial.com"
refero_style_id: "da7c4464-f135-41fc-b635-99c6f4dc58e6"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510679837-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510679837-thumb.jpg"
extracted_at: "2026-04-30T00:58:23.008Z"
---

# Sprout Social — Style Reference

> Ordered command center

**Theme:** dark

**Industry:** saas

Sprout Social presents a commanding, professional digital environment with a strong dark foundation accented by clean white surfaces and precise typography. The design emphasizes clarity and direct interaction, utilizing a single vivid green as its primary action indicator to punctuate key user pathways. Components maintain a uniform, measured appearance with consistent corner radii, conveying stability and trustworthiness. The overall feel is one of a dense, feature-rich interface presented with visual order and an accessible rhythm.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Core | #040404 | `--color-midnight-core` | Page backgrounds, header, footer, deep surface accents, primary text on light backgrounds |
| Canvas White | #ffffff | `--color-canvas-white` | Card backgrounds, navigation backgrounds, input fields, primary text on dark backgrounds |
| Ghost Gray | #d9d9d9 | `--color-ghost-gray` | Subtle borders, secondary text, decorative fills, and inactive states |
| Focus Silver | #cbcece | `--color-focus-silver` | Input borders, subtle button backgrounds, and soft shadows indicating elevation |
| Slate Text | #162020 | `--color-slate-text` | Secondary text on light backgrounds, input text, and card text |
| Olive Accent | #98e58e | `--color-olive-accent` | Green action color for filled buttons, selected navigation states, and focused conversion moments |
| Sky Spectrum Fade | #59cb59 | `--color-sky-spectrum-fade` | Hero section backgrounds, illustrative elements — indicating growth and expansiveness |
| Magenta Mist Fade | #ac44a8 | `--color-magenta-mist-fade` | Illustrative elements, UI highlights — conveying a soft, inviting depth |

## Tokens — Typography

### Proxima Nova

- **Token:** `--font-proxima-nova`
- **Substitute:** Montserrat
- **Weights:** 400, 700, 800
- **Sizes:** 13px, 16px, 18px, 21px, 24px, 32px, 43px, 57px, 76px
- **Line heights:** 1.05, 1.12, 1.18, 1.25, 1.33, 1.40, 1.48, 1.50, 1.64
- **Letter spacing:** normal
- **Role:** The primary typeface for all text elements. Its geometric sans-serif structure provides clarity and a modern, professional tone, supporting both compact UI labels and expressive marketing headlines.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.5 | 0px | `--text-caption` |
| body | 16px | 1.48 | 0px | `--text-body` |
| subheading | 18px | 1.4 | 0px | `--text-subheading` |
| heading-sm | 24px | 1.33 | 0px | `--text-heading-sm` |
| heading | 32px | 1.25 | 0px | `--text-heading` |
| heading-lg | 43px | 1.18 | 0px | `--text-heading-lg` |
| display | 57px | 1.12 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-57 | 57px | `--spacing-57` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-74 | 74px | `--spacing-74` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-253 | 253px | `--spacing-253` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| badges | 24px |
| inputs | 6px |
| buttons | 6px |
| largeElements | 64px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(39, 51, 51, 0.24) 0px 4px 8px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 32px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Primary Action Button (Filled)

**Role:** Call to action

Filled background in Olive Accent (#98e58e), text in Midnight Core (#040404), with a 6px border-radius, 8px vertical and 12px horizontal padding. Signals the primary interactive element on the page.

### Ghost Button (Dark)

**Role:** Secondary action

Transparent background, text in Canvas White (#ffffff), with a 0px border-radius and 16px padding on all sides. Used for less prominent actions, maintaining hierarchy against dark backgrounds.

### Ghost Button (Light)

**Role:** Secondary action

Transparent background and text in Midnight Core (#040404), with a 0px border-radius and no padding, usually found in navigation or inline actions.

### White Information Card

**Role:** Content container

Canvas White (#ffffff) background, 16px border-radius, no shadow, with 24px padding on all sides. Used for presenting information blocks on dark backgrounds.

### Dark Feature Card

**Role:** Feature showcase

Midnight Core (#040404) background, 8px border-radius, no shadow, with 40px vertical and 32px horizontal padding. Highlights product features or integrations.

### Hero Input Field

**Role:** User input

Canvas White (#ffffff) background, Slate Text (#162020) for text, Focus Silver (#cbcece) 1px border, 4px border-radius, with 8px padding on all sides. For prominent email capture in hero sections.

### Navigation Link

**Role:** Navigation element

Inherits text color from parent context, typically Midnight Core or Canvas White. No background or padding. Hover states implied by color change or subtle underline.

## Do's and Don'ts

### Do

- Prioritize text legibility by ensuring Midnight Core (#040404) on Canvas White (#ffffff) backgrounds, and Canvas White on Midnight Core backgrounds.
- Use Olive Accent (#98e58e) exclusively for primary calls-to-action or key success indicators; avoid decorative use.
- Apply a 16px border-radius to all primary content cards and navigation containers to maintain a consistent soft edge.
- Maintain a comfortable rhythm with 'elementGap': 16px between most interactive elements and 'sectionGap': 32px between major content blocks.
- All headings should use Proxima Nova weight 700 or 800, carefully selecting corresponding sizes from the typescale to establish a clear hierarchy.
- Employ the rgba(39, 51, 51, 0.24) 0px 4px 8px 0px shadow sparingly, primarily for the sticky navigation, to indicate subtle elevation without visual clutter.
- Ensure input fields have a 1px Focus Silver (#cbcece) border and a 4px border-radius for clear definition and soft containment.

### Don't

- Do not introduce new chromatic colors outside of Olive Accent (#98e58e) for interactive elements.
- Avoid arbitrary changes in border-radius; adhere to 16px for cards, 6px for buttons/inputs, and 24px for badges.
- Do not use generic system fonts; only use Proxima Nova or its designated substitute.
- Do not use shadows on content cards directly; rely on background color changes for surface differentiation.
- Do not deviate from the established spacing units; avoid custom padding or margin values that aren't multiples of 4px.
- Avoid hero sections with busy imagery; prioritize gradients or a solid Midnight Core background to highlight text content and interactive elements.
- Do not use black (#000000) for primary text on default light backgrounds where Midnight Core (#040404) is available for better visual cohesion.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Midnight Core Canvas | #040404 | Primary page background for main content areas and deep sections. |
| 1 | Canvas White Panel | #ffffff | Card backgrounds, main navigation, and prominent content blocks appearing on the Midnight Core Canvas. |

## Elevation

- **Sticky Navigation Bar:** `rgba(39, 51, 51, 0.24) 0px 4px 8px 0px`

## Imagery

The visual language relies heavily on product UI screenshots and stylized workflow diagrams, which are embedded within soft-edged white cards or presented within the primary content area. When photography is used, it features high-key, professional, and slightly staged images of individuals interacting with technology, often with a clear focus on the user. Illustrations are dimensional and gradient-filled, avoiding hard outlines, featuring organic shapes that blend into backgrounds. Icons are minimal, either solid-filled or slightly outlined, often monochrome. Imagery serves an explanatory and product-showcasing role, rarely decorative atmosphere, and is generally contained within defined spaces rather than full-bleed.

## Layout

The page primarily uses a full-bleed structure with content often contained within a maximum width section, likely centered. The hero section is full-bleed with a dark background, featuring a prominent centered headline and input fields. Subsequent sections alternate between dark (Midnight Core) and light (Canvas White) backgrounds, creating a clear vertical rhythm. Content within sections is often arranged in multi-column layouts, such as two-column text-left/visual-right patterns or three-column card grids for features and integrations. Navigation is a fixed top bar on a Canvas White background, while the header itself is initially on Midnight Core. The overall density feels comfortable, providing ample breathing room around content blocks.

## Similar Brands

- **Hootsuite** — Social media management tool with a similar emphasis on clean UI, prominent feature cards, and accessible typography.
- **Buffer** — Social media scheduling and analytics platform that uses a dark/light contrast for sections and clean, functional components.
- **Later** — Marketing platform with a focus on visual content presentation and a structured grid layout for features and integrations.
- **Mailchimp** — Known for a distinct brand color (yellow) used as a primary accent against neutral backdrops, similar to Sprout Social's use of green.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-core: #040404;
  --color-canvas-white: #ffffff;
  --color-ghost-gray: #d9d9d9;
  --color-focus-silver: #cbcece;
  --color-slate-text: #162020;
  --color-olive-accent: #98e58e;
  --color-sky-spectrum-fade: #59cb59;
  --color-magenta-mist-fade: #ac44a8;
  --font-proxima-nova: 'Proxima Nova', Montserrat;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 16px;
  --leading-body: 1.48;
  --tracking-body: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: 0px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: 0px;
  --text-heading-lg: 43px;
  --leading-heading-lg: 1.18;
  --tracking-heading-lg: 0px;
  --text-display: 57px;
  --leading-display: 1.12;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-55: 55px;
  --spacing-56: 56px;
  --spacing-57: 57px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-74: 74px;
  --spacing-80: 80px;
  --spacing-160: 160px;
  --spacing-200: 200px;
  --spacing-253: 253px;
  --radius-cards: 16px;
  --radius-badges: 24px;
  --radius-inputs: 6px;
  --radius-buttons: 6px;
  --radius-largeelements: 64px;
  --shadow-xl: rgba(39, 51, 51, 0.24) 0px 4px 8px 0px;
  --surface-midnight-core-canvas: #040404;
  --surface-canvas-white-panel: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-core: #040404;
  --color-canvas-white: #ffffff;
  --color-ghost-gray: #d9d9d9;
  --color-focus-silver: #cbcece;
  --color-slate-text: #162020;
  --color-olive-accent: #98e58e;
  --color-sky-spectrum-fade: #59cb59;
  --color-magenta-mist-fade: #ac44a8;
  --font-proxima-nova: 'Proxima Nova', Montserrat;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 16px;
  --leading-body: 1.48;
  --tracking-body: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: 0px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: 0px;
  --text-heading-lg: 43px;
  --leading-heading-lg: 1.18;
  --tracking-heading-lg: 0px;
  --text-display: 57px;
  --leading-display: 1.12;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-55: 55px;
  --spacing-56: 56px;
  --spacing-57: 57px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-74: 74px;
  --spacing-80: 80px;
  --spacing-160: 160px;
  --spacing-200: 200px;
  --spacing-253: 253px;
  --radius-cards: 16px;
  --radius-badges: 24px;
  --radius-inputs: 6px;
  --radius-buttons: 6px;
  --radius-largeelements: 64px;
  --shadow-xl: rgba(39, 51, 51, 0.24) 0px 4px 8px 0px;
  --surface-midnight-core-canvas: #040404;
  --surface-canvas-white-panel: #ffffff;
}
```
