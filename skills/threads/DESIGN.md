---
version: alpha
name: "Threads"
description: "Threads presents a clean, content-focused experience with minimal ornamentation. The visual system prioritizes clarity and directness through a largely achromatic palette, precise typography, and subtle surface differentiation. Interaction is marked by a single, distinct blue accent, deployed sparingly to guide user attention. Components are lightweight with soft, rounded corners, emphasizing an approachable and modern feel."
theme: "light"
industry: "media"
source_url: "https://www.threads.com"
refero_style_id: "3b46c64e-b733-4d70-8cd0-531ca1f92937"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510730368-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510730368-thumb.jpg"
extracted_at: "2026-04-30T00:59:12.490Z"
---

# Threads — Style Reference

> Minimalist Content Stream

**Theme:** light

**Industry:** media

Threads presents a clean, content-focused experience with minimal ornamentation. The visual system prioritizes clarity and directness through a largely achromatic palette, precise typography, and subtle surface differentiation. Interaction is marked by a single, distinct blue accent, deployed sparingly to guide user attention. Components are lightweight with soft, rounded corners, emphasizing an approachable and modern feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Graphite | #000000 | `--color-midnight-graphite` | Primary text, critical body text, button text, icon fills, strong borders |
| Canvas White | #fafafa | `--color-canvas-white` | Page backgrounds, elevated card surfaces |
| Silver Mist | #d5d5d5 | `--color-silver-mist` | Subtle dividers, hairline borders, muted visual separation |
| Platinum Gray | #969696 | `--color-platinum-gray` | Secondary text, disabled button borders, UI outlines |
| Dark Metal | #424242 | `--color-dark-metal` | Tertiary text, less prominent icons, secondary borders for content blocks |
| Action Azure | #385898 | `--color-action-azure` | Primary action indicators (outlined buttons, active links), brand accent for interactive elements, distinct information display |

## Tokens — Typography

### system-ui

- **Token:** `--font-system-ui`
- **Substitute:** Inter, Noto Sans, Arial
- **Weights:** 400, 600
- **Sizes:** 12px, 13px, 15px
- **Line heights:** 1.33, 1.40
- **Role:** All text elements, including body, links, buttons, and headings. Its native and adaptable rendering across device platforms contributes to the system's lightweight feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.4 | — | `--text-caption` |
| body-sm | 13px | 1.4 | — | `--text-body-sm` |
| body | 15px | 1.4 | — | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-48 | 48px | `--spacing-48` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| images | 8px |
| avatars | 50% |
| buttons | 1000px |
| modules | 18px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.04) 0px 0px 12px 0px, rgb(250, 250, 250) 0px 0px 0px 48px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.04) 0px 0px 12px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 16px |
| elementGap | 12px |

## Components

### Ghost Button

**Role:** Minimal interactive element for secondary actions

Transparent background, Midnight Graphite (#000000) text. No padding, 0px border radius.

### Pill Ghost Button

**Role:** Minimal interactive element, for icon-only actions or small secondary controls where a soft touch is desired.

Transparent background, Midnight Graphite (#000000) text. 1000px border radius (effectively pill-shaped). No padding.

### Primary Filled Button

**Role:** Main call-to-action button for critical user flows

Midnight Graphite (#000000) background, Canvas White (#fafafa) text. 10px border radius. Horizontal padding of 16px.

### Circular Icon Button

**Role:** Small, usually icon-only buttons for navigation or quick actions.

Transparent background, Midnight Graphite (#000000) icon. 50% border radius (perfectly circular). No padding.

### Feed Post Card

**Role:** Primary content container for user-generated posts

Canvas White (#fafafa) background. 8px border radius. Uses a subtle rgba(0,0,0,0.04) 0px 0px 12px 0px shadow for elevation. Padding is typically 12-16px internally, matching content spacing.

### Navigation Side Rail

**Role:** Main persistent navigation element

Transparent background, with icon colors from Midnight Graphite (#000000) for inactive states and Action Azure (#385898) for active. Offers icons with 1000px and 50% border radii for visual elements within.

## Do's and Don'ts

### Do

- Prioritize a clean, achromatic base: use Canvas White (#fafafa) for main backgrounds and Midnight Graphite (#000000) for primary text and icons.
- Introduce Action Azure (#385898) only for primary interactive elements like links and outlined buttons, and for active navigation states.
- Apply soft borders and separation with Silver Mist (#d5d5d5) for hairline dividers and Platinum Gray (#969696) for more substantial outlines.
- Maintain high contrast for all text against backgrounds, ensuring AAA accessibility with Midnight Graphite (#000000) on Canvas White (#fafafa).
- Use flexible 'system-ui' fonts at specified sizes (12px, 13px, 15px) for consistent readability and platform-native feel.
- Ensure all interactive elements have highly rounded corners (1000px) or full circles (50%) to convey approachability and clear affordance.
- Differentiate content blocks with subtle elevation using rgba(0,0,0,0.04) 0px 0px 12px 0px shadows rather than heavy backgrounds or strong borders.

### Don't

- Do not introduce new chromatic colors; restrict accents to Action Azure (#385898) and only when signifying interaction or brand.
- Avoid strong gradients or overly decorative background textures; surfaces should remain flat and understated.
- Do not use sharp 0px corners on interactive elements; all buttons and similar controls require a minimum of 8px radius, preferably 1000px for pill shapes.
- Do not use generic box-shadows; adhere to the specified subtle shadow for cards to maintain a lightweight feel.
- Avoid large, impactful headlines; all typography should remain compact and direct, primarily relying on 'system-ui' at smaller sizes.
- Do not use excessive white space between elements; maintain a compact density with 12px for `elementGap` for visual efficiency.
- Do not use non-system fonts; the UI relies on a native font feel for consistency and performance.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #fafafa | Primary page background |
| 1 | Card Surface | #fafafa | Content cards, elevated through subtle shadows rather than distinct background color. |
| 2 | Hover/Focus Tint | #efefef | Subtle background shift for hover or active states (inferred from contrast table). |

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.04) 0px 0px 12px 0px, rgb(250, 250, 250) 0px 0px 0px 48px`
- **Shadow 2:** `rgba(0, 0, 0, 0.04) 0px 0px 12px 0px`

## Imagery

The visual language for imagery is primarily functional. It consists of user-uploaded content (images, GIFs, videos) within cards, product screenshots, and avatar photography for user profiles. Photography is generally unstyled, maintaining its original context, often displayed within contained, rounded (8px) frames. Icons are minimalist, outlined, and monochromatic, primarily using Midnight Graphite (#000000) or Action Azure (#385898) to indicate states. Imagery serves explanatory and content-display purposes, rather than decorative atmosphere, often occupying significant visual space within a post's content area.

## Layout

The page uses a full-bleed structure for the main content stream, without a fixed `pageMaxWidth`, allowing content to adapt to viewport width. The hero section is minimal, simply a centered 'Home' title. The primary layout consists of a left-aligned, fixed sidebar for navigation and a central, scrolling content stream. Content posts are vertically stacked cards, with consistent vertical `sectionGap` spacing but no strong visual dividers between them. Card content is arranged in a text-dominant, centered stack within its container, often with images or media filling a central block. There is no complex grid usage beyond a single-column content stream. The density is compact, designed for efficient scrolling and information consumption. Navigation is handled by a sticky left-aligned sidebar with functional icons and a minimal top bar with a 'Log in' button.

## Similar Brands

- **Twitter (X)** — Monochromatic interface, heavy reliance on text and content cards, similar sidebar navigation, and a single accent color for interaction.
- **Bluesky** — Minimalist social media UI, white background, compact typography, and a focus on content stream rather than heavy graphic elements.
- **Mastodon** — Similar column-based, content-heavy feed structure, with a focus on text content, system fonts, and a primarily achromatic palette.
- **LinkedIn** — Professional content feed, system-font usage, and largely neutral color palette with specific blue accents for links and primary actions.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-graphite: #000000;
  --color-canvas-white: #fafafa;
  --color-silver-mist: #d5d5d5;
  --color-platinum-gray: #969696;
  --color-dark-metal: #424242;
  --color-action-azure: #385898;
  --font-system-ui: 'system-ui', Inter, Noto Sans, Arial;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --text-body-sm: 13px;
  --leading-body-sm: 1.4;
  --text-body: 15px;
  --leading-body: 1.4;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-48: 48px;
  --radius-cards: 8px;
  --radius-images: 8px;
  --radius-avatars: 50%;
  --radius-buttons: 1000px;
  --radius-modules: 18px;
  --shadow-xl: rgba(0, 0, 0, 0.04) 0px 0px 12px 0px, rgb(250, 250, 250) 0px 0px 0px 48px;
  --shadow-xl-2: rgba(0, 0, 0, 0.04) 0px 0px 12px 0px;
  --surface-canvas-white: #fafafa;
  --surface-card-surface: #fafafa;
  --surface-hover-focus-tint: #efefef;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-graphite: #000000;
  --color-canvas-white: #fafafa;
  --color-silver-mist: #d5d5d5;
  --color-platinum-gray: #969696;
  --color-dark-metal: #424242;
  --color-action-azure: #385898;
  --font-system-ui: 'system-ui', Inter, Noto Sans, Arial;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --text-body-sm: 13px;
  --leading-body-sm: 1.4;
  --text-body: 15px;
  --leading-body: 1.4;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-48: 48px;
  --radius-cards: 8px;
  --radius-images: 8px;
  --radius-avatars: 50%;
  --radius-buttons: 1000px;
  --radius-modules: 18px;
  --shadow-xl: rgba(0, 0, 0, 0.04) 0px 0px 12px 0px, rgb(250, 250, 250) 0px 0px 0px 48px;
  --shadow-xl-2: rgba(0, 0, 0, 0.04) 0px 0px 12px 0px;
  --surface-canvas-white: #fafafa;
  --surface-card-surface: #fafafa;
  --surface-hover-focus-tint: #efefef;
}
```
