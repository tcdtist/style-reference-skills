---
version: alpha
name: "Figma Config"
description: "Figma Config employs a bold, high-contrast dark theme, emphasizing clarity and directness. Monochrome neutrals dominate the canvas, creating space for content to stand out. Typography is dense and strong, utilizing custom fonts that command attention while maintaining high legibility against the dark background. Interaction is signaled through subtle border changes and direct color swaps rather than complex elevation, giving components a lightweight and integrated feel."
theme: "dark"
industry: "design"
source_url: "https://config.figma.com/events/figma-config-2022"
refero_style_id: "8caa5004-a8cc-4c7e-a2bb-00ff60618729"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513857853-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513857853-thumb.jpg"
extracted_at: "2026-04-30T01:51:17.444Z"
---

# Figma Config — Style Reference

> monochrome command console

**Theme:** dark

**Industry:** design

Figma Config employs a bold, high-contrast dark theme, emphasizing clarity and directness. Monochrome neutrals dominate the canvas, creating space for content to stand out. Typography is dense and strong, utilizing custom fonts that command attention while maintaining high legibility against the dark background. Interaction is signaled through subtle border changes and direct color swaps rather than complex elevation, giving components a lightweight and integrated feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Void | #000000 | `--color-midnight-void` | Page background, primary text on light surfaces, button backgrounds for primary actions |
| Ghost White | #e2e2e2 | `--color-ghost-white` | Primary text on dark backgrounds, ghost button borders, navigation links |
| Shadow Charcoal | #3d3d3d | `--color-shadow-charcoal` | Subtle button borders, secondary dividers |
| Polar Mist | #ffffff | `--color-polar-mist` | Background for lighter surfaces, such as cookie consent dialogs, secondary text color on dark backgrounds |

## Tokens — Typography

### figmaSans

- **Token:** `--font-figmasans`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 16px, 18px, 20px, 32px, 80px
- **Line heights:** 0.95, 1.00, 1.10, 1.25, 1.30
- **Letter spacing:** -0.0300em at large sizes, -0.0200em at medium sizes
- **OpenType features:** "kern"
- **Role:** Primary brand typeface for all headlines, body text, and interactive elements. Its specific letter-spacing creates a compact, intentional appearance, especially noticeable on larger headings.

### figmaMono

- **Token:** `--font-figmamono`
- **Substitute:** Menlo
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.30
- **Letter spacing:** normal
- **Role:** Monospaced typeface for code snippets or technical details, offering a distinct visual break from the primary typeface while maintaining legibility.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.3 | — | `--text-body` |
| subheading | 20px | 1.1 | — | `--text-subheading` |
| heading | 32px | 1.1 | -0.64px | `--text-heading` |
| display | 80px | 0.95 | -2.4px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-157 | 157px | `--spacing-157` |
| spacing-160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 0px |
| navPills | 50% |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 12px |
| elementGap | 12px |

## Components

### Primary Filled Button

**Role:** Main call-to-action on dark backgrounds.

Solid Midnight Void background, Ghost White text. Padding 12px horizontal and vertical. Square corners (0px radius). Example: 'ALLOW ALL COOKIES'.

### Ghost Button

**Role:** Secondary action or navigable link that appears as a button.

Transparent background, Ghost White text and 1px border. No padding specified, acts as a text link with button styling. Example: 'GO TO HOMEPAGE'.

### Cookie Consent Button

**Role:** Button within the cookie consent dialog.

Solid Midnight Void background with Ghost White text and a subtle 1px border of `rgba(255, 255, 255, 0.24)`. Rounded with 50% border radius. No explicit padding data, likely derived from text size.

### Navigation Link

**Role:** Top-level navigation items.

Ghost White text, with a 1px border of Midnight Void. Compact padding of 4-6px vertical and 6-12px horizontal. Renders as text only with a subtle underline effect on hover (not present in current data).

### Cookie Consent Panel

**Role:** Floating informational message.

Polar Mist background with Midnight Void text for primary content. Elements within use Shadow Charcoal borders. Padding is not explicit but appears generous. Square corners (0px radius).

## Do's and Don'ts

### Do

- Use Midnight Void (#000000) as the dominant background color for all main canvas areas.
- Apply FigmaSans for all text elements, setting letter-spacing to -0.0300em for display text (80px, 32px) and -0.0200em for smaller headings and body text.
- Form primary interactive buttons with a Midnight Void (#000000) background and Ghost White (#e2e2e2) text, using 0px border-radius.
- For ghost buttons or secondary actions, use Ghost White (#e2e2e2) for both text and a 1px border, maintaining a transparent background.
- Utilize the 4-6px vertical padding and 6-12px horizontal padding for navigation and compact interactive elements.
- Maintain a primary text color of Ghost White (#e2e2e2) against dark backgrounds and Midnight Void (#000000) against light backgrounds.
- Apply 1px borders using Midnight Void or Shadow Charcoal (#3d3d3d) for subtle division and emphasis.

### Don't

- Avoid using gradients; the system relies on flat colors for a stark, impactful appearance.
- Do not introduce intermediate grey tones between Midnight Void (#000000) and Ghost White (#e2e2e2) without a clear functional purpose, as the system favors high contrast.
- Do not use highly saturated colors for large surface areas; color is reserved for functional accents or semantic states.
- Do not use generic system fonts; stick to figmaSans or figmaMono for all typographic elements.
- Avoid soft, rounded corners for main interactive elements (buttons, cards); prefer sharp, square edges unless specifically for small pill-shaped accents.
- Do not use drop shadows for elevation; rely on color contrast and borders to define hierarchy and interactive states.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas | #000000 | Primary page background for most sections. |
| 1 | Dialog | #ffffff | Background for overlay elements like cookie consent pop-ups, providing a contrast to the dark canvas. |

## Imagery

The visual language uses abstract, organic, blob-like shapes in a limited, vibrant accent palette (blue, green, orange, yellow) against the dark, high-contrast UI. These shapes are mostly opaque, layered, and slightly rotated, creating a playful yet dynamic feel. They function primarily as decorative atmosphere rather than conveying specific content. Icons, such as the `(pause)` and `(X)` are minimal, outlined, and monochromatic, integrated seamlessly into the UI.

## Layout

The page maintains a full-bleed dark background, with content neatly centered or aligned to the left. The hero section features a prominent headline centered over the dark background. Sections generally use consistent vertical spacing, often indicated by the 40px section gap. Content arrangement appears to be stacked vertically, with some areas allowing for asymmetric or interleaved visual elements like the abstract shapes. The navigation is a minimal, right-aligned header bar that stays fixed at the top, offering essential links.

## Similar Brands

- **Sanity.io** — Features a dark UI, strong custom typography, and a limited accent color palette for interactive elements.
- **Supabase** — Utilizes a dark theme with high contrast and impactful typography, often incorporating abstract or geometric background elements.
- **Vercel** — Known for a meticulously crafted dark UI, compact spacing, and a focus on sharp, legible typography on a dark canvas.
- **Linear** — Employs a monochrome dark mode, precise typography with careful letter-spacing, and a minimalist approach to components.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-void: #000000;
  --color-ghost-white: #e2e2e2;
  --color-shadow-charcoal: #3d3d3d;
  --color-polar-mist: #ffffff;
  --font-figmasans: 'figmaSans', Inter;
  --font-figmamono: 'figmaMono', Menlo;
  --text-body: 16px;
  --leading-body: 1.3;
  --text-subheading: 20px;
  --leading-subheading: 1.1;
  --text-heading: 32px;
  --leading-heading: 1.1;
  --tracking-heading: -0.64px;
  --text-display: 80px;
  --leading-display: 0.95;
  --tracking-display: -2.4px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-157: 157px;
  --spacing-160: 160px;
  --radius-buttons: 0px;
  --radius-navpills: 50%;
  --surface-canvas: #000000;
  --surface-dialog: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-void: #000000;
  --color-ghost-white: #e2e2e2;
  --color-shadow-charcoal: #3d3d3d;
  --color-polar-mist: #ffffff;
  --font-figmasans: 'figmaSans', Inter;
  --font-figmamono: 'figmaMono', Menlo;
  --text-body: 16px;
  --leading-body: 1.3;
  --text-subheading: 20px;
  --leading-subheading: 1.1;
  --text-heading: 32px;
  --leading-heading: 1.1;
  --tracking-heading: -0.64px;
  --text-display: 80px;
  --leading-display: 0.95;
  --tracking-display: -2.4px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-157: 157px;
  --spacing-160: 160px;
  --radius-buttons: 0px;
  --radius-navpills: 50%;
  --surface-canvas: #000000;
  --surface-dialog: #ffffff;
}
```
