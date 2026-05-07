---
version: alpha
name: "Visual"
description: "Visual employs an editorial-minimalist aesthetic, using a muted, near-achromatic palette to emphasize typography and content. A primary accent of deep charcoal and secondary highlights of yellow are used sparingly to draw attention to key functional elements. The design prioritizes generous spacing and a deliberate grid, creating a sense of calm authority and allowing the AI-generated content to take center stage without visual clutter. Surfaces are mostly light, acting as a clean canvas."
theme: "light"
industry: "ai"
source_url: "https://designstripe.com"
refero_style_id: "d2c0ed7b-c649-4d77-91de-1bd69dd10a9e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515757469-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515757469-thumb.jpg"
extracted_at: "2026-04-30T02:23:30.610Z"
---

# Visual — Style Reference

> Editorial blueprint on parchment

**Theme:** light

**Industry:** ai

Visual employs an editorial-minimalist aesthetic, using a muted, near-achromatic palette to emphasize typography and content. A primary accent of deep charcoal and secondary highlights of yellow are used sparingly to draw attention to key functional elements. The design prioritizes generous spacing and a deliberate grid, creating a sense of calm authority and allowing the AI-generated content to take center stage without visual clutter. Surfaces are mostly light, acting as a clean canvas.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Parchment | #f6f6f4 | `--color-canvas-parchment` | Page background, large section backgrounds for breathing room |
| Surface White | #ffffff | `--color-surface-white` | Card backgrounds, secondary section backgrounds, light panels |
| Charcoal Ink | #2c2c26 | `--color-charcoal-ink` | Primary text, darker section backgrounds, filled buttons, footer background. Serves as the primary dark contrast element |
| Content Black | #000000 | `--color-content-black` | Headings, strong text, icon fills – provides maximum contrast against light backgrounds |
| Muted Stone | #d0d0c8 | `--color-muted-stone` | Subtle borders, helper text, inactive navigation items, faint dividers |
| Warm Gray | #e8e7d9 | `--color-warm-gray` | Hover states, subtle background accents, default button backgrounds |
| Icon Gray | #aaab9c | `--color-icon-gray` | Muted icon color, secondary text, descriptive body text for readability |
| Border Khaki | #57584b | `--color-border-khaki` | Hairline borders, subtle strokes, structural lines |
| Accent Lime | #fff347 | `--color-accent-lime` | Vivid functional highlights, small decorative elements, indicators for active states or new content. Used very sparingly |
| Muted Gold | #aaa674 | `--color-muted-gold` | Subtle decorative elements, ghost button borders, background highlights in some contexts |

## Tokens — Typography

### fontSerif

- **Token:** `--font-fontserif`
- **Substitute:** Playfair Display
- **Weights:** 300, 400
- **Sizes:** 24px, 32px, 48px, 64px, 96px
- **Line heights:** 0.94, 1.00, 1.13
- **Letter spacing:** -0.050em at 48px to -0.025em at 24px
- **Role:** Primary headings and large display text. The low weights (300, 400) give an authoritative yet approachable feel, avoiding the harshness of bold serif headlines.

### fontMono

- **Token:** `--font-fontmono`
- **Substitute:** IBM Plex Mono
- **Weights:** 300, 400, 500
- **Sizes:** 12px, 14px, 16px, 20px, 28px, 48px
- **Line heights:** 1.00, 1.33, 1.41, 1.50
- **Letter spacing:** -0.067em at 48px to -0.025em at 28px, normal at smaller sizes
- **Role:** Body text, navigation, buttons, and all functional interface elements. The monospaced feel adds a technical, precise undertone without sacrificing readability, especially at smaller sizes.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | 0px | `--text-caption` |
| body | 16px | 1.5 | 0px | `--text-body` |
| subheading | 20px | 1.41 | -0.025px | `--text-subheading` |
| heading-sm | 28px | 1.33 | -0.025px | `--text-heading-sm` |
| heading | 32px | 1.13 | -0.05px | `--text-heading` |
| heading-lg | 48px | 1 | -0.05px | `--text-heading-lg` |
| display | 64px | 0.94 | -0.05px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-305 | 305px | `--spacing-305` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| buttons | 9999px |
| navigation | 3px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 80px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Primary Ghost Button

**Role:** Outlined action button

Used as the primary action for key interactive elements like 'Join waitlist' on dark backgrounds. Features Surface White text with a 1px Surface White border, no fill, 0px border-radius, and 16px vertical / 32px horizontal padding. The squared edges signify a distinct, modern identity.

### Filled Pill Button

**Role:** Secondary action button/Tag

A compact pill-shaped button for secondary actions or tags. Uses Charcoal Ink for background, Surface White text, and a massive 1.67772e+07px border-radius for the pill shape, with 0px vertical / 16px horizontal padding. Text uses fontMono.

### Light Pill Button

**Role:** Neutral secondary button

Similar to the filled pill button, but uses Surface White background with Charcoal Ink text, and a matched 1.67772e+07px border-radius for a pill shape.

### Light Muted Pill Button

**Role:** Tertiary or ghost action button

A softer pill-shaped button for less prominent actions, like 'Waitlist' in the header. Uses Warm Gray background, Charcoal Ink text, and Muted Gold border, with 1.67772e+07px border-radius and 0px vertical / 12px horizontal padding.

### Content Card

**Role:** Container for content blocks

Standard content container, using Surface White background, with an 8px border-radius and no shadow. Used for blog posts and featurettes. Padding is determined by content.

### Half-Rounded Card

**Role:** Asymmetric content container

A specific content card variant with an 8px radius on the top-left and no radius on other corners. Used for distinct content blocks, likely for visual interest or a specific layout split. Background is Surface White.

### Navigation Bar Item

**Role:** Top navigation link

Individual navigation links in the header, utilizing fontMono. Text color defaults to Content Black, changing on hover/active. Contains 3px border-radius for internal elements or highlighting.

### Footer Block

**Role:** Bottom page section

The footer area, characterized by a solid Charcoal Ink background and Surface White text. Uses a generous 24px vertical padding.

## Do's and Don'ts

### Do

- Prioritize fontSerif for all primary headlines, with a weight of 300 or 400, not bolder.
- Use fontMono for all body text, navigation, and button labels to maintain the technical, precise feel.
- Maintain generous vertical spacing between sections, primarily using 80px for section gaps.
- Apply Canvas Parchment (#f6f6f4) as the default background for most page sections.
- Use Charcoal Ink (#2c2c26) for filled button backgrounds and dark section backgrounds, paired with Surface White text.
- Accent key functional elements and interactive states with Accent Lime (#fff347), used sparingly and punctually.
- Ensure all buttons and interactive tags maintain an aggressively pill-shaped radius (1.67772e+07px) or a sharp 0px radius for ghost actions.

### Don't

- Avoid arbitrary use of strong colors; color should always serve a functional purpose.
- Do not use heavy shadows or strong elevation effects; surfaces should remain flat or subtly bordered.
- Do not use generic system fonts; stick strictly to fontMono and fontSerif for all text.
- Avoid excessively long line lengths for body text to preserve the editorial clarity.
- Do not apply rounded corners to elements unless explicitly specified with 8px for cards or 3px for navigation elements.
- Do not use images as primary branding elements, maintain the emphasis on typography and structured content.
- Avoid decorative gradients; stick to solid color backgrounds unless for specific imagery.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas Parchment | #f6f6f4 | Primary page and main content area background. |
| 2 | Surface White | #ffffff | Used for content cards and specific blocks nested within the main canvas, adding a subtle layer distinction. |
| 3 | Charcoal Ink | #2c2c26 | Used for footers and occasional rich content sections for strong contrast, acting as a background for inverse colors. |

## Similar Brands

- **Linear** — Monochromatic interface with minimal accents, strong typography, and generous spacing conveying a sense of precision.
- **Framer** — Focus on high-quality product renders, clean canvas, and precise UI elements with limited color palettes.
- **Amie** — White canvas, flat product surfaces, compact typography, and a single vivid accent color for interactive states.
- **Read.cv** — Editorial feel with emphasis on large serif headlines against clean backgrounds and simplified UI.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-parchment: #f6f6f4;
  --color-surface-white: #ffffff;
  --color-charcoal-ink: #2c2c26;
  --color-content-black: #000000;
  --color-muted-stone: #d0d0c8;
  --color-warm-gray: #e8e7d9;
  --color-icon-gray: #aaab9c;
  --color-border-khaki: #57584b;
  --color-accent-lime: #fff347;
  --color-muted-gold: #aaa674;
  --font-fontserif: 'fontSerif', Playfair Display;
  --font-fontmono: 'fontMono', IBM Plex Mono;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.41;
  --tracking-subheading: -0.025px;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.025px;
  --text-heading: 32px;
  --leading-heading: 1.13;
  --tracking-heading: -0.05px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.05px;
  --text-display: 64px;
  --leading-display: 0.94;
  --tracking-display: -0.05px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-38: 38px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-128: 128px;
  --spacing-305: 305px;
  --radius-cards: 8px;
  --radius-buttons: 9999px;
  --radius-navigation: 3px;
  --surface-canvas-parchment: #f6f6f4;
  --surface-surface-white: #ffffff;
  --surface-charcoal-ink: #2c2c26;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-parchment: #f6f6f4;
  --color-surface-white: #ffffff;
  --color-charcoal-ink: #2c2c26;
  --color-content-black: #000000;
  --color-muted-stone: #d0d0c8;
  --color-warm-gray: #e8e7d9;
  --color-icon-gray: #aaab9c;
  --color-border-khaki: #57584b;
  --color-accent-lime: #fff347;
  --color-muted-gold: #aaa674;
  --font-fontserif: 'fontSerif', Playfair Display;
  --font-fontmono: 'fontMono', IBM Plex Mono;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.41;
  --tracking-subheading: -0.025px;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.025px;
  --text-heading: 32px;
  --leading-heading: 1.13;
  --tracking-heading: -0.05px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.05px;
  --text-display: 64px;
  --leading-display: 0.94;
  --tracking-display: -0.05px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-38: 38px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-128: 128px;
  --spacing-305: 305px;
  --radius-cards: 8px;
  --radius-buttons: 9999px;
  --radius-navigation: 3px;
  --surface-canvas-parchment: #f6f6f4;
  --surface-surface-white: #ffffff;
  --surface-charcoal-ink: #2c2c26;
}
```
