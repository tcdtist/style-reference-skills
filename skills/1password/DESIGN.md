---
version: alpha
name: "1Password"
description: "The design feels like a high-security airlock transitioning into a well-lit control room. An immersive, deep-space dark hero (#1D1D21) establishes a serious, secure atmosphere, which gives way to crisp white (#FFFFFF) content sections focused on informational clarity. The signature brand blue (#145FE4) is used exclusively for calls-to-action and active states, acting like an indicator light confirming interaction. Typography is a key differentiator; the custom font `agileSans` at large sizes with tight negative letter-spacing creates dense, architectural headlines. Buttons are distinctly full-pill (9999px radius), contrasting with the generally sharp, un-rounded cards, creating a focused tension between interactive and container elements."
theme: "mixed"
industry: "saas"
source_url: "https://1password.com"
refero_style_id: "da0bfca3-df1d-49d9-ae25-61d8f348426f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929689940-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929689940-thumb.jpg"
extracted_at: "2026-04-11T17:49:18.534Z"
---

# 1Password — Style Reference

> Secure Airlock Behind Glass. A system that moves from the protective dark of an airlock to the bright clarity of a control room.

**Theme:** mixed

**Industry:** saas

The design feels like a high-security airlock transitioning into a well-lit control room. An immersive, deep-space dark hero (#1D1D21) establishes a serious, secure atmosphere, which gives way to crisp white (#FFFFFF) content sections focused on informational clarity. The signature brand blue (#145FE4) is used exclusively for calls-to-action and active states, acting like an indicator light confirming interaction. Typography is a key differentiator; the custom font `agileSans` at large sizes with tight negative letter-spacing creates dense, architectural headlines. Buttons are distinctly full-pill (9999px radius), contrasting with the generally sharp, un-rounded cards, creating a focused tension between interactive and container elements.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Brand Blue | #145fe4 | `--color-brand-blue` | Primary CTAs, active links, focus indicators — the single point of interactive confirmation. |
| Hero Fade | #145fe4 | `--color-hero-fade` | Hero background — creates a deep, atmospheric transition from dark space to brand blue. |
| White | #ffffff | `--color-white` | Main content backgrounds, card surfaces, text on dark backgrounds. |
| Onyx | #000000 | `--color-onyx` | Primary text on light backgrounds. |
| Deep Space | #1d1d21 | `--color-deep-space` | Hero and footer backgrounds. |
| Void | #242529 | `--color-void` | Secondary dark surfaces. |
| Graphite | #303136 | `--color-graphite` | Secondary text on light backgrounds, navigation links. |
| Ash | #d7d7db | `--color-ash` | Borders on light backgrounds, disabled states. |
| Warning Tan | #cbb88 | `--color-warning-tan` | Top announcement banner background — a muted, temporary accent for site-wide notices. |

## Tokens — Typography

### agileSans

- **Token:** `--font-agilesans`
- **Substitute:** Inter, Manrope
- **Weights:** 300, 350, 400, 500
- **Sizes:** 14px, 16px, 18px, 20px, 32px, 40px, 48px, 64px, 88px, 128px
- **Line heights:** 1.10, 1.20, 1.25, 1.43, 1.50, 1.60
- **Letter spacing:** -0.0230em, -0.0200em
- **Role:** The primary brand font, used for everything from display headlines to body copy. Its tight negative letter-spacing at large sizes creates a dense, architectural look. Lighter weights (300) are reserved for the largest headlines, creating authority through restraint, while mid-weights (400, 500) are used for body copy and UI elements.

### ui-sans-serif

- **Token:** `--font-ui-sans-serif`
- **Substitute:** System UI
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.50
- **Role:** Used for minor body text, likely as a fallback or for specific cross-platform UI contexts where the custom font might not load.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.5 | — | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.43 | — | `--text-subheading` |
| heading-sm | 32px | 1.25 | -0.74px | `--text-heading-sm` |
| heading | 48px | 1.2 | -1.1px | `--text-heading` |
| heading-lg | 64px | 1.1 | -1.47px | `--text-heading-lg` |
| display | 88px | 1.1 | -2.02px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| inputs | 8px |
| buttons | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 80-120px |
| cardPadding | 24px |
| elementGap | 8-16px |

## Components

### Button Group — Primary + Secondary CTAs

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Business / Personal Toggle

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Cards — Discover, Secure, Audit

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** The main call-to-action.

A pill-shaped button. Background: Brand Blue (#145fe4). Text: White (#ffffff). Radius: 9999px. Padding: 10px 24px. Font: agileSans, weight 500.

### Secondary CTA Button

**Role:** A secondary call-to-action, typically used on dark backgrounds.

A pill-shaped outline button. Background: transparent. Border: 1px solid White (#ffffff). Text: White (#ffffff). Radius: 9999px. Padding: 10px 24px.

### Integration List Item

**Role:** Represents a linked third-party service in a list.

A clickable row with a White (#ffffff) background. Padding: 16px 24px. Radius: 8px. Border: 1px solid Ash (#d7d7db). Contains a logo, title text, and a chevron icon.

### Business/Personal Toggle

**Role:** Switches between two primary user segments.

A pill-shaped switch with a static background. An inner, smaller pill of Brand Blue (#145fe4) indicates the selected state ('Business' or 'Personal'). Radius: 9999px.

### Navigation Header

**Role:** Sticky header for primary site navigation.

White (#ffffff) background with a 1px bottom border in Ash (#d7d7db). Navigation links use Graphite (#303136) text. The primary 'Get started free' button is a filled Primary CTA Button.

### Interactive Text Link

**Role:** An in-text link to another page or section.

Text in Brand Blue (#145fe4), typically followed by a '→' character. No underline by default, likely added on hover.

### Announcement Banner

**Role:** A site-wide, non-critical notification at the top of the page.

A full-width bar with a Warning Tan (#cbb88e) background. Text is Onyx (#000000).

## Do's and Don'ts

### Do

- Use Brand Blue (#145fe4) exclusively for primary CTAs, links, and active state indicators.
- Apply tight negative letter-spacing (-1px to -2px) to all headlines (48px and larger).
- Employ 9999px radius for all buttons to create the signature pill shape.
- Contrast fully-rounded buttons with modestly rounded cards (16px) and list items (8px).
- Use the Deep Space (#1d1d21) to Brand Blue gradient solely for hero sections.
- Maintain a clear visual hierarchy with generous vertical spacing between sections (80px+).
- Use Agile Sans for all typography to maintain brand consistency.

### Don't

- Do not use Brand Blue for static headlines or body text.
- Avoid using rounded corners on main layout containers; reserve rounding for interactive elements and cards.
- Do not apply shadows to buttons or in-line elements.
- Avoid introducing new saturated colors; the palette is intentionally monochrome with a single blue accent.
- Do not use system fonts for headings; the custom font is a critical brand element.
- Avoid small padding on cards; use a minimum of 24px to ensure they feel spacious.
- Do not use outlines on primary filled buttons.

## Elevation

- **Feature Card:** `box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);`

## Imagery

The visual language is product-centric and informational. It primarily uses clean product UI screenshots, often contained within abstract shapes or simplified browser chrome. There is no lifestyle photography. Icons are monochrome and line-style. A grid of grayscale customer logos provides social proof. The overall approach is to use visuals to explain functionality and build trust, not to create abstract mood.

## Layout

Starts with a full-bleed, viewport-height hero section featuring a centered headline stack over a dark gradient background. The main content that follows is contained within a centered max-width layout (~1200px) on a white background. Sections alternate between centered headline blocks, 3-column feature card grids, and 2-column text-and-image blocks. The navigation header is sticky, starting transparent over the hero and transitioning to a solid white with a bottom border upon scrolling.

## Similar Brands

- **Linear** — Similar dark-mode aesthetic, precision typography, and use of a single, functional accent color.
- **Vercel** — Shared dark/light theme approach, geometric sans-serif typography, and developer-focused branding.
- **Stripe** — Emphasis on high-quality custom typography, structured grid layouts, and use of gradients in key brand moments.
- **Figma** — Use of a strong primary brand color for CTAs, clean UI presentation, and a balance between technical and approachable design.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-brand-blue: #145fe4;
  --color-hero-fade: #145fe4;
  --color-white: #ffffff;
  --color-onyx: #000000;
  --color-deep-space: #1d1d21;
  --color-void: #242529;
  --color-graphite: #303136;
  --color-ash: #d7d7db;
  --color-warning-tan: #cbb88;
  --font-agilesans: 'agileSans', Inter, Manrope;
  --font-ui-sans-serif: 'ui-sans-serif', System UI;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.43;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.74px;
  --text-heading: 48px;
  --leading-heading: 1.2;
  --tracking-heading: -1.1px;
  --text-heading-lg: 64px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.47px;
  --text-display: 88px;
  --leading-display: 1.1;
  --tracking-display: -2.02px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-41: 41px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --radius-cards: 16px;
  --radius-inputs: 8px;
  --radius-buttons: 9999px;
}
```

### Tailwind v4

```css
@theme {
  --color-brand-blue: #145fe4;
  --color-hero-fade: #145fe4;
  --color-white: #ffffff;
  --color-onyx: #000000;
  --color-deep-space: #1d1d21;
  --color-void: #242529;
  --color-graphite: #303136;
  --color-ash: #d7d7db;
  --color-warning-tan: #cbb88;
  --font-agilesans: 'agileSans', Inter, Manrope;
  --font-ui-sans-serif: 'ui-sans-serif', System UI;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.43;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.74px;
  --text-heading: 48px;
  --leading-heading: 1.2;
  --tracking-heading: -1.1px;
  --text-heading-lg: 64px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.47px;
  --text-display: 88px;
  --leading-display: 1.1;
  --tracking-display: -2.02px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-41: 41px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --radius-cards: 16px;
  --radius-inputs: 8px;
  --radius-buttons: 9999px;
}
```
