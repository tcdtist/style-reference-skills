---
version: alpha
name: "GitHub"
description: "GitHub's design system evokes a dark, digital canvas – a midnight command center feel. Key elements are subtle translucency, glowing accents of blue, green, and violet, and a spacious, comfortable layout. Typography is precise and organized, contrasting bright text against deep backgrounds. Components are lightweight with rounded corners, often appearing as frosted overlays or bordered elements on a dark, unbounded canvas."
theme: "dark"
industry: "devtools"
source_url: "https://github.com"
refero_style_id: "c3ceca5c-d329-4559-b947-016172941ba2"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777505732760-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777505732760-thumb.jpg"
extracted_at: "2026-04-29T23:35:59.626Z"
---

# GitHub — Style Reference

> Midnight command center, subtly glowing

**Theme:** dark

**Industry:** devtools

GitHub's design system evokes a dark, digital canvas – a midnight command center feel. Key elements are subtle translucency, glowing accents of blue, green, and violet, and a spacious, comfortable layout. Typography is precise and organized, contrasting bright text against deep backgrounds. Components are lightweight with rounded corners, often appearing as frosted overlays or bordered elements on a dark, unbounded canvas.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Space | #0d1117 | `--color-deep-space` | Primary page background, base for most dark surfaces |
| Midnight Ink | #000000 | `--color-midnight-ink` | Elevated surfaces, code blocks, modal backgrounds, and deeply shadowed areas |
| Code Canvas | #151a22 | `--color-code-canvas` | Secondary background for sections, code editor areas, and subtle surface differentiation |
| Subtle Gray | #21262d | `--color-subtle-gray` | Borders between sections, divider lines, and very soft visual separation |
| Ash Gray | #283041 | `--color-ash-gray` | Faint background for inactive states or subtle borders, hinting at elevation |
| Ghost White | #ffffff | `--color-ghost-white` | Primary text, prominent icons, and active navigation elements. Also used as a white background for some translucent elements |
| Faded Silver | #f0f6fc | `--color-faded-silver` | Secondary text, subheadings, and muted UI elements that require slightly less prominence than primary text |
| UI Gray | #9198a1 | `--color-ui-gray` | Placeholder text, secondary icons, and less prominent text labels |
| Muted Text | #7c8980 | `--color-muted-text` | Subtle helper text, less important details, and desaturated captions |
| Polar Blue | #8dd6ff | `--color-polar-blue` | Link text, outlined button borders, and interactive icon accents. It's a key brand identifier for interactive elements |
| Spring Green | #08872b | `--color-spring-green` | Primary action button background. Signals positive action or confirmation |
| Cosmic Violet | #8c93fb | `--color-cosmic-violet` | Decorative card borders and subtle illustrative accents, creating a sense of digital magic |
| Neon Green | #5fed83 | `--color-neon-green` | Highlight text or decorative elements, particularly within code or feature descriptions |
| Interface Blue | #1f6feb | `--color-interface-blue` | Solid background for specific active elements or content blocks, providing a stronger visual presence |
| Violet Glow | #e6b7fe | `--color-violet-glow` | Illustrative element — background highlight for abstract graphics |
| Blue-Violet Orb | #a7a2ff | `--color-blue-violet-orb` | Illustrative element — focused glow emanating from central points in graphics |
| Vapor Trail Blue | #5993d4 | `--color-vapor-trail-blue` | Illustrative element — upward-sweeping light beams in abstract backgrounds |
| Deep Gradient Start | #000240 | `--color-deep-gradient-start` | Illustrative element — beginning of a deep blue gradient for background effects |

## Tokens — Typography

### Mona Sans

- **Token:** `--font-mona-sans`
- **Substitute:** Inter
- **Weights:** 400, 425, 440, 460, 480, 500, 600, 800
- **Sizes:** 14px, 16px, 18px, 22px, 24px, 40px, 48px, 64px
- **Line heights:** 1.00, 1.08, 1.18, 1.20, 1.30, 1.40, 1.50
- **Letter spacing:** -0.035, 0.01, 0.011, 0.013, 0.015
- **Role:** Primary brand typeface for all headings, body text, UI elements, and navigation. Its wide range of weights and precise letter-spacing ensures a consistent, modern voice.

### Mona Sans VF

- **Token:** `--font-mona-sans-vf`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 24px
- **Line heights:** 1.00, 1.25, 1.43, 1.50
- **Letter spacing:** 0
- **Role:** Used for smaller text, auxiliary information, and captions where Mona Sans would be too heavy. Its variable font capabilities likely allow for subtle optical adjustments.

### Mona Sans Mono

- **Token:** `--font-mona-sans-mono`
- **Substitute:** JetBrains Mono
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.50
- **Letter spacing:** 0.015
- **Role:** Monospace variant for code snippets, technical terms, and environments where code-like presentation is desired, ensuring visual consistency with the main typeface.

### ui-monospace

- **Token:** `--font-ui-monospace`
- **Substitute:** Menlo, Monaco
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.50
- **Letter spacing:** 0
- **Role:** Fallback monospace font for code blocks and technical displays, ensuring readability across systems.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.5 | 0.015px | `--text-body-sm` |
| body | 16px | 1.5 | 0.01px | `--text-body` |
| subheading | 18px | 1.5 | 0.01px | `--text-subheading` |
| heading-sm | 22px | 1.4 | 0.01px | `--text-heading-sm` |
| heading | 24px | 1.4 | 0.01px | `--text-heading` |
| heading-lg | 40px | 1.2 | -0.035px | `--text-heading-lg` |
| display | 64px | 1 | -0.035px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-102 | 102px | `--spacing-102` |
| spacing-309 | 309px | `--spacing-309` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 60px |
| cards | 24px |
| input | 8px |
| buttons | 6px |
| default | 6px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 8px |
| elementGap | 16px |

## Components

### Ghost Header Button

**Role:** Navigation, secondary actions

Text in Ghost White (#ffffff) on a transparent background, 8px padding. No border. Used for top navigation items.

### Pill Ghost Button

**Role:** Secondary, subtle actions, category filters

Text in Ghost White (#ffffff) on a transparent background with 8px vertical, 16px horizontal padding and a 60px border radius, creating a pill shape. Used for navigation and category tabs.

### Primary Action Button

**Role:** Main call to action

Spring Green (#08872b) background, Ghost White (#ffffff) text, 6px border radius, with 6px vertical and 28px horizontal padding. Signals the most important action on a page.

### Outlined Accent Button

**Role:** Secondary interactive actions, often related to product features

Polar Blue (#8dd6ff) text on a transparent background with a 1px Ghost White (#ffffff) border, 8px border radius, and 6px vertical, 28px horizontal padding. Provides a clear interactive target without being as dominant as the primary button.

### Code Block Card

**Role:** Displaying code snippets or technical content

Semi-transparent surface (rgba(255, 255, 255, 0.06)), 24px border radius only on top corners (24px 24px 0px 0px), no internal padding, no box shadow. Edges are sharp at the bottom, suggesting continuity.

### Floating Content Card

**Role:** Elevated content blocks or interactive elements

Highly translucent background (rgba(255, 255, 255, 0.2)), 24px border radius, 8px internal padding on all sides, no box shadow. Appears as a frosted overlay.

### Input Field

**Role:** User text input

Transparent background with 18px top, 12px right, 0px bottom, 18px left padding. No explicit border specified, relying on contrasting text input/label (placeholder) against the dark background. 8px border radius.

### Pill Input

**Role:** Search or short text inputs

Transparent background, Ghost White (#ffffff) text, with an 8px border radius. Likely uses implicit top/bottom paddings of 8px and side as 16px to create the pill shape, similar to pill buttons.

## Do's and Don'ts

### Do

- Prioritize Deep Space (#0d1117) as the canvas background for most page sections.
- Use Ghost White (#ffffff) for all primary body and heading text for maximum contrast on dark backgrounds.
- Apply Spring Green (#08872b) exclusively for primary call-to-action button backgrounds.
- Utilize Polar Blue (#8dd6ff) for all links, outlined buttons, and interactive icons.
- Apply a 6px border radius for most interactive elements like buttons and inputs, but use 60px for pill-shaped elements.
- Ensure cards use a larger 24px border radius, often with only top corners rounded for a more architectural feel.
- Maintain comfortable element spacing using multiples of 4px, especially 16px for elementGap.

### Don't

- Avoid using bright, saturated colors for backgrounds; stick to the dark neutral palette.
- Do not use generic gray borders (such as #f0f6fc) on interactive elements; Polar Blue (#8dd6ff) is reserved for interaction outlining.
- Never introduce hard, sharp corners on cards or primary buttons; maintain a consistent rounded aesthetic.
- Do not use overly large or decorative drop shadows; the system favors subtle glows and translucency over heavy elevation.
- Avoid dense packing of information; allow ample `elementGap` and `sectionGap` for a comfortable user experience.
- Do not vary font families outside of Mona Sans variants and monospace fallbacks; maintain typographic consistency.
- Avoid using Mona Sans Mono or ui-monospace for non-code content; these are specifically for technical text.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Deep Space | #0d1117 | Base page background |
| 1 | Code Canvas | #151a22 | Secondary page sections, code editor areas |
| 2 | Midnight Ink | #000000 | Elevated panels, code blocks, deepest darks |
| 3 | Floating Card Translucent | #ffffff | Cards and overlays with high transparency (rgba(255, 255, 255, 0.2)) |

## Imagery

The visual language for imagery is characterized by glowing, abstract 3D elements and vibrant, often purple or blue-hued, digital illustrations. These are frequently featured as floating objects or emanating light sources against dark backgrounds, adding a sense of futuristic technology and depth. Product screenshots are clean and integrated, showing code or UI elements with subtle, contrasting highlights. Icons are typically outlined or filled in Ghost White or subtle grays, occasionally accented with Polar Blue. The imagery serves both decorative atmosphere and to explain complex concepts, with a density that allows for significant textual information on screen.

## Layout

The page primarily employs a max-width contained layout, though the hero section spans full-bleed with a deep, dark gradient background. Content sections follow a vertical rhythm, often featuring alternating left/right text-and-visual arrangements or centered stacks. Card grids, typically 3-column, are used for features. The density is spacious, providing ample breathing room between information blocks. Navigation is managed via a sticky top bar, featuring Ghost Header Buttons and a pill-shaped search input.

## Similar Brands

- **Vercel** — Similar dark theme with vivid accent colors for interactive elements and abstract, glowing background visuals.
- **Linear** — Employs a precise, compact typography with subtle background gradients and a focus on dark mode UI with minimal, functional color hints.
- **Notion** — While not dark-first, it shares the principle of a clean, functional UI with distinct text levels and a reliance on whitespace/spacing for hierarchy.
- **Stripe** — Uses a sophisticated color palette with intentional accent colors against a largely neutral background, and clean, modern typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-space: #0d1117;
  --color-midnight-ink: #000000;
  --color-code-canvas: #151a22;
  --color-subtle-gray: #21262d;
  --color-ash-gray: #283041;
  --color-ghost-white: #ffffff;
  --color-faded-silver: #f0f6fc;
  --color-ui-gray: #9198a1;
  --color-muted-text: #7c8980;
  --color-polar-blue: #8dd6ff;
  --color-spring-green: #08872b;
  --color-cosmic-violet: #8c93fb;
  --color-neon-green: #5fed83;
  --color-interface-blue: #1f6feb;
  --color-violet-glow: #e6b7fe;
  --color-blue-violet-orb: #a7a2ff;
  --color-vapor-trail-blue: #5993d4;
  --color-deep-gradient-start: #000240;
  --font-mona-sans: 'Mona Sans', Inter;
  --font-mona-sans-vf: 'Mona Sans VF', Inter;
  --font-mona-sans-mono: 'Mona Sans Mono', JetBrains Mono;
  --font-ui-monospace: 'ui-monospace', Menlo, Monaco;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.015px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: 0.01px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: 0.01px;
  --text-heading: 24px;
  --leading-heading: 1.4;
  --tracking-heading: 0.01px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.035px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -0.035px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-96: 96px;
  --spacing-102: 102px;
  --spacing-309: 309px;
  --radius-pill: 60px;
  --radius-cards: 24px;
  --radius-input: 8px;
  --radius-buttons: 6px;
  --radius-default: 6px;
  --surface-deep-space: #0d1117;
  --surface-code-canvas: #151a22;
  --surface-midnight-ink: #000000;
  --surface-floating-card-translucent: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-space: #0d1117;
  --color-midnight-ink: #000000;
  --color-code-canvas: #151a22;
  --color-subtle-gray: #21262d;
  --color-ash-gray: #283041;
  --color-ghost-white: #ffffff;
  --color-faded-silver: #f0f6fc;
  --color-ui-gray: #9198a1;
  --color-muted-text: #7c8980;
  --color-polar-blue: #8dd6ff;
  --color-spring-green: #08872b;
  --color-cosmic-violet: #8c93fb;
  --color-neon-green: #5fed83;
  --color-interface-blue: #1f6feb;
  --color-violet-glow: #e6b7fe;
  --color-blue-violet-orb: #a7a2ff;
  --color-vapor-trail-blue: #5993d4;
  --color-deep-gradient-start: #000240;
  --font-mona-sans: 'Mona Sans', Inter;
  --font-mona-sans-vf: 'Mona Sans VF', Inter;
  --font-mona-sans-mono: 'Mona Sans Mono', JetBrains Mono;
  --font-ui-monospace: 'ui-monospace', Menlo, Monaco;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.015px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: 0.01px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: 0.01px;
  --text-heading: 24px;
  --leading-heading: 1.4;
  --tracking-heading: 0.01px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.035px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -0.035px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-96: 96px;
  --spacing-102: 102px;
  --spacing-309: 309px;
  --radius-pill: 60px;
  --radius-cards: 24px;
  --radius-input: 8px;
  --radius-buttons: 6px;
  --radius-default: 6px;
  --surface-deep-space: #0d1117;
  --surface-code-canvas: #151a22;
  --surface-midnight-ink: #000000;
  --surface-floating-card-translucent: #ffffff;
}
```
