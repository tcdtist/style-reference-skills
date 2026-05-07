---
version: alpha
name: "Logan Liffick"
description: "This design system crafts a focused, almost monastic experience, presenting information with absolute clarity and minimal visual distraction. The stark contrast between near-black text and a pale, subtle background establishes a high-readability environment, reminiscent of a printed page. Its singular typeface, 'Inter', used across varying weights and sizes, lends a consistent and understated professionalism, while the precise, controlled spacing dictates a calm, unhurried rhythm to content consumption."
theme: "light"
industry: "agency"
source_url: "https://loganliffick.com"
refero_style_id: "2b014368-6db1-417b-b84a-8af9c6450b53"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925568138-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925568138-thumb.jpg"
extracted_at: "2026-04-11T16:39:43.178Z"
---

# Logan Liffick — Style Reference

> monochromatic scholarly text

**Theme:** light

**Industry:** agency

This design system crafts a focused, almost monastic experience, presenting information with absolute clarity and minimal visual distraction. The stark contrast between near-black text and a pale, subtle background establishes a high-readability environment, reminiscent of a printed page. Its singular typeface, 'Inter', used across varying weights and sizes, lends a consistent and understated professionalism, while the precise, controlled spacing dictates a calm, unhurried rhythm to content consumption.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Text Black | #171717 | `--color-text-black` | Primary text, headings, strong emphasis, link default state. Defines the foundational monochromatic palette and achieves a formal, high-contrast readability. |
| Subtle Gray | #525252 | `--color-subtle-gray` | Secondary text, body copy, less prominent headings, small buttons, navigation items. Provides relief from the stark black and marks less critical information or interactive elements. |
| Paper White | #FFFFFF | `--color-paper-white` | Page background, primary surface. Serves as a clean, spacious canvas for all content, reflecting an academic or editorial aesthetic. |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui
- **Weights:** 400, 500
- **Sizes:** 14px, 16px, 18px
- **Line heights:** 1.43, 1.50, 1.56, 1.63
- **Letter spacing:** normal
- **Role:** Primary typeface for all content including body, headings, navigation, and interactive elements. Its legibility across weights and sizes ensures a consistent, serious tone without overt styling. Weight 500 signals importance for headings, while 400 maintains readability for long-form text.

### ui-monospace

- **Token:** `--font-ui-monospace`
- **Substitute:** monospace
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.63
- **Letter spacing:** normal
- **Role:** Used sparingly for unique interactive elements or code-like displays, providing a distinct, technical counterpoint to the primary Inter typeface. Default for Ghost Buttons.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.56 | — | `--text-caption` |
| body-sm | 16px | 1.56 | — | `--text-body-sm` |
| body | 18px | 1.56 | — | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-2 | 2px | `--spacing-2` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |

### Border Radius

| Element | Value |
| --- | --- |
| subtle | 2px |
| default | 2px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64-80px |
| cardPadding | 12-24px |
| elementGap | 2-8px |

## Components

### Profile Header

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### About Section

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Footer

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Header Title

**Role:** Main page title or identity.

Text 'Logan Liffick' in Inter weight 500, size 18px, color #171717.

### Header Subtitle

**Role:** Secondary title or descriptive role.

Text 'Design Engineer' in Inter weight 400, size 16px, color #525252.

### Section Heading

**Role:** Introduces content sections.

Text in Inter weight 500, size 16px, color #171717. Followed by a 24px vertical space.

### Body Text Paragraph

**Role:** Standard informational text.

Text in Inter weight 400, size 16px, lineHeight 1.63, color #525252. Paragraphs are separated by standard line height.

### Ghost Link Button

**Role:** Interactive text links, like footer navigation or inline references.

Text 'Github' in Inter weight 400, size 16px, lineHeight 1.63, color #525252 with an implicit 2px border radius. On hover, text color and text decoration might change.

### Monospace Link Button

**Role:** Interactive text links, often in footer, with a distinct monospace style.

Text 'Email' in ui-monospace weight 400, size 16px, lineHeight 1.63, color #525252 with an implicit 2px border radius. Background is transparent.

## Do's and Don'ts

### Do

- Prioritize Inter weight 500 for all headings to maintain a subtle, yet clear hierarchy.
- Use #171717 for primary text and #525252 for secondary text to establish a muted, monochromatic contrast.
- Employ 1.63 lineHeight for all body text sections to ensure comfortable reading distance.
- Maintain a consistent 2px border radius on all interactive elements like links and buttons.
- Apply 64px `marginBottom` for major section breaks and 40px `paddingTop`/`paddingBottom` for internal section spacing, creating a spacious flow.

### Don't

- Avoid introducing additional typefaces; the design maintains strict reliance on Inter and ui-monospace.
- Do not use highly saturated or vivid colors; the palette is deliberately achromatic with minimal contrast.
- Refrain from complex shadows or gradients; flat design and direct light are preferred.
- Do not deviate from the 2px border radius; sharp corners or excessive rounding are not part of this aesthetic.
- Avoid dense information blocks; use generous vertical spacing (64px `marginBottom`, 40px `paddingTop`/`paddingBottom`) to create visual pauses.

## Imagery

The site is entirely text-dominant, eschewing photography, illustrations, or graphics. There are no visual elements beyond typography and subtle interactive indicators. This creates an atmosphere of pure information delivery, focusing the user's attention solely on the written content.

## Layout

The page adheres to a centered, max-width content model, with ample surrounding white space, resembling a document or resumé. The sections stack vertically, each introduced by a clear heading. There's a consistent rhythm of vertical spacing between content blocks, giving a sense of calm progression. The footer is minimal, also centered, with text links.

## Similar Brands

- **Read.cv** — Similar emphasis on minimalist, text-heavy personal profiles with strong typography and ample white space.
- **Patrick Collison's website** — Shares a stripped-down, content-first approach with minimal visual embellishment and a focus on clarity.
- **Stripe Documentation** — Employs high-contrast text on a light background, clean typography, and spacious layouts for readability, often with subtle interactive elements.
- **Apple Developer Documentation** — Characterized by its clean, high-readability text emphasis, ample white space, and a functional-first aesthetic.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-text-black: #171717;
  --color-subtle-gray: #525252;
  --color-paper-white: #FFFFFF;
  --font-inter: 'Inter', system-ui;
  --font-ui-monospace: 'ui-monospace', monospace;
  --text-caption: 14px;
  --leading-caption: 1.56;
  --text-body-sm: 16px;
  --leading-body-sm: 1.56;
  --text-body: 18px;
  --leading-body: 1.56;
  --spacing-2: 2px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --radius-subtle: 2px;
  --radius-default: 2px;
}
```

### Tailwind v4

```css
@theme {
  --color-text-black: #171717;
  --color-subtle-gray: #525252;
  --color-paper-white: #FFFFFF;
  --font-inter: 'Inter', system-ui;
  --font-ui-monospace: 'ui-monospace', monospace;
  --text-caption: 14px;
  --leading-caption: 1.56;
  --text-body-sm: 16px;
  --leading-body-sm: 1.56;
  --text-body: 18px;
  --leading-body: 1.56;
  --spacing-2: 2px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --radius-subtle: 2px;
  --radius-default: 2px;
}
```
