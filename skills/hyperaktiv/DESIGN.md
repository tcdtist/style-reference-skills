---
version: alpha
name: "HyperAktiv"
description: "HyperAktiv's design system is minimalist and stark, featuring high-contrast typography and a raw, unadorned aesthetic. Dominant black text on pure white surfaces creates a strong, direct presence, while a lone vibrant blue provides a single, impactful interactive accent. The system avoids elaborate styling, favoring sharp edges and direct expression over soft shadows or rounded forms, giving it an almost industrial, no-nonsense feel."
theme: "light"
industry: "other"
source_url: "https://hyperaktiv.li"
refero_style_id: "d19c6fc3-1fc6-44a0-9c22-a0a82f7f79b4"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517851496-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517851496-thumb.jpg"
extracted_at: "2026-04-30T02:57:57.800Z"
---

# HyperAktiv — Style Reference

> High-contrast stark blueprint

**Theme:** light

**Industry:** other

HyperAktiv's design system is minimalist and stark, featuring high-contrast typography and a raw, unadorned aesthetic. Dominant black text on pure white surfaces creates a strong, direct presence, while a lone vibrant blue provides a single, impactful interactive accent. The system avoids elaborate styling, favoring sharp edges and direct expression over soft shadows or rounded forms, giving it an almost industrial, no-nonsense feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, input fields, interactive element text, base for headings and body text |
| Text Black | #000000 | `--color-text-black` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Muted Gray | #cccccc | `--color-muted-gray` | Subtle borders for input fields, indicating inactive states or contained areas without heavy visual weight |
| Dark Text Gray | #333333 | `--color-dark-text-gray` | Text within form inputs, slightly softer than primary text black |
| Action Blue | #0000ff | `--color-action-blue` | Primary interactive elements like buttons and footer background, providing a vivid accent color against the monochrome palette |

## Tokens — Typography

### Studiofeixensans

- **Token:** `--font-studiofeixensans`
- **Substitute:** Arial Black, Impact
- **Weights:** 400, 700
- **Sizes:** 14px, 16px, 20px, 22px, 25px, 28px, 42px, 72px, 80px, 90px
- **Line heights:** 0.89, 1.00, 1.20, 1.22, 1.43, 1.50, 2.00
- **Role:** Headings and prominent display text that demand immediate attention. Its heavy weights and condensed appearance contribute to the system's direct, impactful tone.

### DM Sans

- **Token:** `--font-dm-sans`
- **Substitute:** Inter, Lato
- **Weights:** 400
- **Sizes:** 14px, 16px, 20px
- **Line heights:** 1.25, 1.43
- **Role:** Body copy, input text, and more subtle information. Its legibility balances the bold, aggressive nature of the display font.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.43 | — | `--text-caption` |
| body | 16px | 1.25 | — | `--text-body` |
| subheading | 20px | 1.25 | — | `--text-subheading` |
| heading | 28px | 1.2 | — | `--text-heading` |
| heading-lg | 42px | 1.2 | — | `--text-heading-lg` |
| display | 90px | 0.89 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-243 | 243px | `--spacing-243` |

### Border Radius

| Element | Value |
| --- | --- |
| inputs | 0px |
| buttons | 0px |
| round-button | 20px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 30px |
| cardPadding | 15px |
| elementGap | 10px |

## Components

### Primary Filled Button

**Role:** Main call-to-action button, direct and prominent.

Background: Action Blue (#0000ff), Text: Canvas White (#ffffff), Border Radius: 0px, Padding: 9px vertical, 15px horizontal. Uses Studiofeixensans font.

### Outline Button

**Role:** Secondary action or informational button.

Background: Canvas White (#ffffff), Text: Text Black (#000000), Border: 1px solid Text Black (#000000), Border Radius: 0px, Padding: 9px vertical, 15px horizontal. Uses DM Sans font.

### Pill Button

**Role:** Small, distinct interactive element for specific actions or navigation.

Background: Canvas White (#ffffff), Text: Text Black (#000000), Border: 1px solid Text Black (#000000), Border Radius: 20px, Padding: 9px vertical, 15px horizontal. Uses DM Sans font.

### Input Field

**Role:** Standard form input for collecting user data.

Background: Canvas White (#ffffff), Text: Dark Text Gray (#333333), Border: 1px solid Muted Gray (#cccccc), Border Radius: 0px, Padding: 8px vertical, 12px horizontal. Uses DM Sans font.

### Feature Card (Text Only)

**Role:** Divisive content section for features or conceptual blocks.

Background: transparent (no fill). Features no explicit border, shadow, or radius, relying on layout for separation. Content padding is 0px.

## Do's and Don'ts

### Do

- Prioritize Text Black (#000000) for all main headings and body copy to maintain high contrast and directness.
- Use Canvas White (#ffffff) as the default background for sections and components, creating a stark, clean canvas.
- Reserve Action Blue (#0000ff) strictly for primary call-to-action buttons and prominent interactive elements.
- Maintain a rigid sans-serif typography hierarchy, using Studiofeixensans for headlines and DM Sans for body text.
- Apply 0px border-radius to most UI components for a sharp, unyielding aesthetic, except for specific pill-shaped buttons at 20px.
- Ensure input fields use Muted Gray (#cccccc) for borders against Canvas White (#ffffff) backgrounds.
- Utilize white space generously, with a base element gap of 10px and section gaps of 30px to create distinct content blocks.

### Don't

- Avoid soft gradients or shadows; the visual system is flat and direct, with elevation primarily conveyed through contrast and spatial separation.
- Do not introduce additional chromatic colors; the palette is intentionally limited to black, white, and a single accent blue.
- Refrain from using rounded corners on cards or typical buttons; sharp edges are a core identifier of the system's visual language.
- Do not use subtle variations of grays for text; stick to Text Black (#000000) for prominence and Dark Text Gray (#333333) only for input text.
- Do not apply padding or borders to feature cards; their visual distinction comes from their content and surrounding layout.
- Avoid decorative imagery that deviates from product photos; the system emphasizes functionality and direct information.
- Do not use light font weights for headlines; bold contrast is key to the brand's assertive vocal tone.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Canvas | #ffffff | Primary background for all content, maintaining a high-contrast foundation. |
| 1 | Input Surface | #ffffff | Background for interactive input fields, slightly bordered to define its area. |
| 2 | Actionable Surface | #0000ff | Solid, vibrant background for primary interactive elements and specific section footers. |

## Imagery

Imagery primarily consists of high-quality, often architectural or interior product photography, presented without complex treatments like masking or layering. There are no illustrations or abstract graphics. Photography serves to showcase physical spaces and events, typically contained within their content sections. Icons are minimal, outlined, and monochromatic, used sparingly for functional markers. The density is moderate, with images serving as content anchors rather than decorative elements.

## Layout

The page uses a contained layout with no explicit page maximum width, allowing content to stretch. The hero prominently features a full-width background image with bold, centered, high-contrast typography. Sections exhibit a modular rhythm, often alternating between centered text blocks and multi-column arrangements (e.g., text-left/image-right). Vertical spacing is consistent, creating clear separation between content blocks. Navigation is typically a simple top bar, with a persistent floating circular 'feedback' button at the bottom right. Cards are text-only, relying on their stark content and surrounding whitespace for definition.

## Similar Brands

- **B&O (Bang & Olufsen)** — High-contrast monochrome palette with a single vibrant accent, sharp typography, and minimalist product-focused visuals.
- **Archiweb** — Stark, structural layouts, heavy use of black and white, and clean, unadorned typography for a direct, architectural feel.
- **AIGA Journal** — Emphasis on strong typography, high contrast, and a deliberate absence of decorative elements to prioritize content.
- **Dyson** — Bold, functional typography, clean product photography on white backgrounds, and minimal color use to highlight product engineering.
- **Cargo Collective (some portfolios)** — DIY-inspired raw aesthetic, often characterized by strong black-and-white typography, lack of soft UI elements, and direct presentation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-text-black: #000000;
  --color-muted-gray: #cccccc;
  --color-dark-text-gray: #333333;
  --color-action-blue: #0000ff;
  --font-studiofeixensans: 'Studiofeixensans', Arial Black, Impact;
  --font-dm-sans: 'DM Sans', Inter, Lato;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --text-body: 16px;
  --leading-body: 1.25;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.2;
  --text-display: 90px;
  --leading-display: 0.89;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-243: 243px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --radius-round-button: 20px;
  --surface-page-canvas: #ffffff;
  --surface-input-surface: #ffffff;
  --surface-actionable-surface: #0000ff;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-text-black: #000000;
  --color-muted-gray: #cccccc;
  --color-dark-text-gray: #333333;
  --color-action-blue: #0000ff;
  --font-studiofeixensans: 'Studiofeixensans', Arial Black, Impact;
  --font-dm-sans: 'DM Sans', Inter, Lato;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --text-body: 16px;
  --leading-body: 1.25;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.2;
  --text-display: 90px;
  --leading-display: 0.89;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-243: 243px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --radius-round-button: 20px;
  --surface-page-canvas: #ffffff;
  --surface-input-surface: #ffffff;
  --surface-actionable-surface: #0000ff;
}
```
