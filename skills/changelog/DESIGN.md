---
version: alpha
name: "Changelog"
description: "This design system evokes a 'midnight command center behind frosted glass,' achieving a focused, high-tech atmosphere through a dark achromatic palette and precise typographic choices. A subtly layered grayscale background creates depth without relying on heavy shadows, while crisp text and restrained accenting maintain readability. Signature anti-conventional headlines use weight 500 at larger sizes, conveying authority through subtle refinement rather than bold weight. The system relies on precise border treatments and a dominant 9999px radius for interactive elements, contrasting with 8px radius for cards, to define interaction points within the otherwise serious interface."
theme: "dark"
industry: "devtools"
source_url: "https://linear.app/changelog"
refero_style_id: "a5cc9b0f-d274-458a-b990-d18482b70838"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777419153893-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777419153893-thumb.jpg"
extracted_at: "2026-04-28T23:32:59.397Z"
---

# Changelog — Style Reference

> Midnight command center behind frosted glass.

**Theme:** dark

**Industry:** devtools

This design system evokes a 'midnight command center behind frosted glass,' achieving a focused, high-tech atmosphere through a dark achromatic palette and precise typographic choices. A subtly layered grayscale background creates depth without relying on heavy shadows, while crisp text and restrained accenting maintain readability. Signature anti-conventional headlines use weight 500 at larger sizes, conveying authority through subtle refinement rather than bold weight. The system relies on precise border treatments and a dominant 9999px radius for interactive elements, contrasting with 8px radius for cards, to define interaction points within the otherwise serious interface.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Black | #08090a | `--color-canvas-black` | Page backgrounds, base surface for main content areas. |
| Surface Dark | #141516 | `--color-surface-dark` | Slightly elevated surfaces, button backgrounds in hover states, subtle distinctions from Canvas Black. |
| Line Graphite | #34343a | `--color-line-graphite` | Subtle dividers, borders on interactive elements, visual separation within dark surfaces. |
| Deep Charcoal | #1c1c1f | `--color-deep-charcoal` | Darker interactive elements, further elevated background layers for specific components. |
| Border Carbon | #23252a | `--color-border-carbon` | Input borders, subtle outlines for inactive states, separating elements on dark backgrounds. |
| Border Ash | #2d2e31 | `--color-border-ash` | Border color for certain interactive components, providing a slightly lighter outline than Carbon. |
| Text Primary | #f7f8f8 | `--color-text-primary` | Primary text, headings, icons, ensuring high contrast against dark backgrounds. Also used as background for ghost buttons. |
| Text Secondary | #d0d6e0 | `--color-text-secondary` | Secondary text, muted information, subtle accents, less prominent list items. Provides visual relief from primary text. |
| Text Muted | #8a8f98 | `--color-text-muted` | Placeholder text, tertiary information, disabled states. Signifies lower importance or non-interactivity. |
| Highlight Fog | #e4e5e9 | `--color-highlight-fog` | Light background highlight on interactive elements, subtle iconography against dark backgrounds. |
| Shadow Tint | #3e3e44 | `--color-shadow-tint` | Border color for interactive elements and subtle shadow effects. Creates definition without heavy contrast. |

## Tokens — Typography

### Inter Variable

- **Token:** `--font-inter-variable`
- **Substitute:** Inter
- **Weights:** 400, 500, 510, 590
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 17px, 24px, 32px, 48px
- **Line heights:** 1.00, 1.13, 1.20, 1.33, 1.40, 1.50, 1.60, 2.46, 2.67, 2.86
- **Letter spacing:** -0.01em
- **OpenType features:** "cv01" on, "ss03"
- **Role:** Used for all primary UI text, body copy, headings, and interactive elements. Its variable nature allows fine-grained control over weight, with a specific emphasis on a mid-range weight (500) for headlines to convey modern, understated authority. The tight letter-spacing (-0.01em) maintains a compact, disciplined appearance.

### Berkeley Mono

- **Token:** `--font-berkeley-mono`
- **Substitute:** Space Mono
- **Weights:** 400, 590
- **Sizes:** 15px, 21px
- **Line heights:** 1.30
- **Letter spacing:** -0.014em
- **Role:** Exclusively for code blocks, timestamps, and technical notations. Its monospaced nature clearly differentiates technical content, and the slightly tighter letter-spacing hints at precision.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.4 | -0.12px | `--text-caption` |
| heading | 24px | 1.33 | -0.29px | `--text-heading` |
| heading-lg | 32px | 1.2 | -0.38px | `--text-heading-lg` |
| display | 48px | 1.13 | -0.58px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-71 | 71px | `--spacing-71` |
| spacing-77 | 77px | `--spacing-77` |
| spacing-80 | 80px | `--spacing-80` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| search | 100px |
| buttons | 9999px |
| interactive | 4.46px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgb(62, 62, 68) 0px 0px 0px 1px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px | `--shadow-xl-2` |
| xl-3 | rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Text Link

**Role:** Interactive text, navigation items.

Text Primary #f7f8f8, Inter Variable weight 400. No underline by default; hover state adds underline or changes background.

### Ghost Button (Primary)

**Role:** Primary Call to Action, outlines interactiveness without filling.

Background transparent, text #f7f8f8 (Text Primary). Border 1px solid #f7f8f8. Border radius 9999px. Padding 0px top/bottom, 12px left/right for medium, 16px for large.

### Ghost Button (Secondary)

**Role:** Secondary actions that need less visual emphasis.

Background transparent, text #8a8f98 (Text Muted). Border 1px solid #8a8f98. Border radius 9999px. Padding 0px top/bottom, 12px left/right.

### Filled Button (Compact)

**Role:** Small, contained action buttons.

Background #141516 (Surface Dark), text #8a8f98 (Text Muted). Border 1px solid #23252a (Border Carbon). Border radius 100px. Padding 0px top/bottom, 16px left/right.

### Search Input

**Role:** Input elements for search functionality.

Background transparent. Placeholder text #8a8f98 (Text Muted). Border 1px solid #34343a (Line Graphite). Border radius 100px. Icon fill #8a8f98. Padding 0px vertical, 12px horizontal.

### Changelog Card

**Role:** Container for changelog entries.

Background transparent. Contents date in Berkeley Mono, title as Heading Small. Border 1px solid #34343a (Line Graphite) on inactive/hover. Border radius 8px. Inner padding around content section 16px.

### Navigation Tab

**Role:** Filtering or category navigation.

Text #f7f8f8 (Text Primary) for active, #8a8f98 (Text Muted) for inactive. Background transparent. Border radius 9999px. Padding 0px top/bottom, 12px left/right.

### Pill Tag

**Role:** Categorization or short labels.

Background #141516 (Surface Dark), text #f7f8f8 (Text Primary). Border radius 9999px. Padding 0px top/bottom, 12px left/right.

## Do's and Don'ts

### Do

- Prioritize Inter Variable font for all UI text, ensuring readability and consistency.
- Use Text Primary #f7f8f8 for all main text elements and headings on dark backgrounds to maintain strong contrast.
- Apply Canvas Black #08090a as the dominant background color across all pages.
- Use 9999px border radius for all actionable buttons and interactive pill components.
- Employ a 1px solid border using Line Graphite #34343a for subtle visual separation of components and containers, especially on hover.
- Leverage Berkeley Mono for all code snippets, timestamps, or technical text, keeping its distinct letter-spacing.
- Apply Surface Dark #141516 for subtle elevation for backgrounds of interactive components or hover states.

### Don't

- Avoid using multiple vibrant colors; restrict accent colors to functional elements if not present in the palette.
- Do not use heavy shadows for visual depth; rely on background color layering and subtle borders instead.
- Do not introduce new typefaces; the system is built on Inter Variable and Berkeley Mono.
- Avoid large hero imagery; prefer UI-focused elements or subtle graphic overlays.
- Do not use generic square corners; apply 8px radius to cards and containers for a softer, integrated feel.
- Do not use standard, bold font weights for large headlines; leverage Inter Variable weight 500-590 for a refined, modern approach.
- Avoid overly bright or pure white backgrounds; the system is designed for a dark interface.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Black | #08090a | Dominant page background, providing the base dark theme. |
| 1 | Surface Dark | #1c1c1f | Slightly elevated component backgrounds, such as the search input or interactive elements on hover. |
| 2 | Interactive Surface | #141516 | Backgrounds for ghost buttons, tags, or other active interactive components, offering a minimal step up from the base canvas. |

## Elevation

- **Button (filled):** `rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px`
- **Input Focus/Hover:** `rgb(62, 62, 68) 0px 0px 0px 1px`
- **Navigation Bar:** `rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px`

## Imagery

The visual language is characterized by functional abstraction and product-focused graphics. It primarily uses icons and stylized, often monochrome, product screenshots or UI elements within dark, contained boxes. Icons are outlined, with a moderate stroke weight, and mostly monochromatic, occasionally using a subtle gradient. Imagery serves an explanatory role for product features or decorative atmosphere within the dark UI, always contained and never full-bleed. There's a high density of text-dominant content, punctuated by these visually precise, often button-like, graphics.

## Layout

The page maintains a max-width contained layout, with content centered within a defined vertical flow. The hero section is a full-bleed dark canvas with a left-aligned, prominent headline. Sections follow a consistent vertical rhythm, primarily using a text-heavy, single-column stack for changelog entries, occasionally broken by centered visual components like the grid of app icons. Navigation is provided by a sticky top bar with clearly segmented, low-prominence text links and a ghost button for primary action. The layout emphasizes clarity and direct information delivery, with ample vertical rhythm from the 24px section gap and compact element spacing.

## Similar Brands

- **Stripe** — Dark UI with emphasis on precise typography, subtle border details, and a high reliance on achromatic colors with minimal accenting.
- **GitHub** — Developer-centric dark mode aesthetics, clean code display, and functional, uncluttered interface design.
- **Vercel** — Modern dark theme, strong typography, and a focus on content presentation and minimal use of color for functional elements.
- **Figma (dark mode)** — Dark design environment with layered greys, strong text hierarchy, and a precise, tool-like feel.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-black: #08090a;
  --color-surface-dark: #141516;
  --color-line-graphite: #34343a;
  --color-deep-charcoal: #1c1c1f;
  --color-border-carbon: #23252a;
  --color-border-ash: #2d2e31;
  --color-text-primary: #f7f8f8;
  --color-text-secondary: #d0d6e0;
  --color-text-muted: #8a8f98;
  --color-highlight-fog: #e4e5e9;
  --color-shadow-tint: #3e3e44;
  --font-inter-variable: 'Inter Variable', Inter;
  --font-berkeley-mono: 'Berkeley Mono', Space Mono;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: -0.12px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.29px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.38px;
  --text-display: 48px;
  --leading-display: 1.13;
  --tracking-display: -0.58px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-46: 46px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-71: 71px;
  --spacing-77: 77px;
  --spacing-80: 80px;
  --radius-cards: 8px;
  --radius-search: 100px;
  --radius-buttons: 9999px;
  --radius-interactive: 4.46px;
  --shadow-xl: rgb(62, 62, 68) 0px 0px 0px 1px;
  --shadow-xl-2: rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px;
  --shadow-xl-3: rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px;
  --surface-canvas-black: #08090a;
  --surface-surface-dark: #1c1c1f;
  --surface-interactive-surface: #141516;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-black: #08090a;
  --color-surface-dark: #141516;
  --color-line-graphite: #34343a;
  --color-deep-charcoal: #1c1c1f;
  --color-border-carbon: #23252a;
  --color-border-ash: #2d2e31;
  --color-text-primary: #f7f8f8;
  --color-text-secondary: #d0d6e0;
  --color-text-muted: #8a8f98;
  --color-highlight-fog: #e4e5e9;
  --color-shadow-tint: #3e3e44;
  --font-inter-variable: 'Inter Variable', Inter;
  --font-berkeley-mono: 'Berkeley Mono', Space Mono;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: -0.12px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.29px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.38px;
  --text-display: 48px;
  --leading-display: 1.13;
  --tracking-display: -0.58px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-46: 46px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-71: 71px;
  --spacing-77: 77px;
  --spacing-80: 80px;
  --radius-cards: 8px;
  --radius-search: 100px;
  --radius-buttons: 9999px;
  --radius-interactive: 4.46px;
  --shadow-xl: rgb(62, 62, 68) 0px 0px 0px 1px;
  --shadow-xl-2: rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px;
  --shadow-xl-3: rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px;
  --surface-canvas-black: #08090a;
  --surface-surface-dark: #1c1c1f;
  --surface-interactive-surface: #141516;
}
```
