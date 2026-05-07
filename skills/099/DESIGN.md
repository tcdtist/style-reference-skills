---
version: alpha
name: "099"
description: "This design system presents as a 'digital workbench' – dark, stark, and highly organized, creating an atmosphere of focused, technical precision. The reliance on extreme achromatic contrast combined with a monospace system font defines its aesthetic, making it feel less like a brand and more like an interface for a command-line tool. Sharp 10px corner radii on interactive elements provide a subtle softening against the otherwise rigid grid, allowing functional elements to feel grounded yet approachable."
theme: "dark"
industry: "agency"
source_url: "https://099.supply"
refero_style_id: "e4a7b5f3-f393-4f6d-b4a5-ecf874024bed"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925841682-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925841682-thumb.jpg"
extracted_at: "2026-04-11T16:44:23.257Z"
---

# 099 — Style Reference

> Terminal aesthetic, digital workbench. The UI feels like a high-contrast monospaced terminal environment for creative tools.

**Theme:** dark

**Industry:** agency

This design system presents as a 'digital workbench' – dark, stark, and highly organized, creating an atmosphere of focused, technical precision. The reliance on extreme achromatic contrast combined with a monospace system font defines its aesthetic, making it feel less like a brand and more like an interface for a command-line tool. Sharp 10px corner radii on interactive elements provide a subtle softening against the otherwise rigid grid, allowing functional elements to feel grounded yet approachable.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Oil | #000000 | `--color-midnight-oil` | Page background, primary text on white surfaces, icon active state. This provides the deep, commanding backdrop for all content. |
| Ghost White | #ffffff | `--color-ghost-white` | Primary text, headers, icons, button text. Provides maximum contrast against dark backgrounds for clear information hierarchy. |
| Steel Gray | #1d1d1d | `--color-steel-gray` | Card backgrounds, selected button states, input fields. Creates a subtle, secondary surface level for interactive components and content blocks. |
| Muted Ash | #383838 | `--color-muted-ash` | Outlined button borders, subtle dividers. A lighter gray for visual separation without being too jarring on dark surfaces. |
| Dim Gray | #888888 | `--color-dim-gray` | Subtle text, secondary information, card borders for visual grouping. Used for less prominent content that still needs to be legible against dark backgrounds. |

## Tokens — Typography

### Soehne Mono

- **Token:** `--font-soehne-mono`
- **Substitute:** Space Mono, Fira Code
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00, 1.20, 1.40
- **Letter spacing:** 0.24px
- **OpenType features:** "zero"
- **Role:** All text elements, including body copy, headings, and interactive elements. The consistent use of a monospace font across the entire UI is a signature choice, reinforcing the technical, command-line aesthetic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 19.2 | 0.24px | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 10px |
| inputs | 10px |
| buttons | 10px |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1600px |
| sectionGap | 48px |
| elementGap | 16px |

## Components

### Filter Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Product Card Grid

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Hero Info Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Text Button (Invisible)

**Role:** Primary interactive element for navigation and inline actions

Background: transparent, Text: Ghost White (#ffffff), Border: none, Padding: 0px. Used for 'Menu', 'Cart 0' in header.

### Ghost Button (Outlined)

**Role:** Secondary interactive element, filtering, or calls to action

Background: transparent, Text: Ghost White (#ffffff), Border: 1px solid Muted Ash (#383838), Border Radius: 10px, Padding: 19.2px 25.6px. Example: 'Show All', 'Mockups (M)'.

### Subtle Filled Button

**Role:** Tertiary action or selected state within a group

Background: Steel Gray (#1d1d1d), Text: Ghost White (#ffffff), Border: none, Border Radius: 10px, Padding: 19.2px 25.6px. Example: 'Components (C)' when selected.

### High-Contrast Filled Button

**Role:** Primary call to action in specific contexts (e.g., checkout)

Background: Ghost White (#ffffff), Text: Midnight Oil (#000000), Border: none, Border Radius: 10px, Padding: 19.2px 25.6px. (No visible example in screenshot, but specified in data).

### Content Card (Rounded)

**Role:** Container for product items or featured content

Background: transparent, Border Radius: 10px, Box Shadow: none, Padding: 0px. Used for product listings, allows content to define its own padding.

### Info Card (Padded)

**Role:** Descriptive content blocks, like hero text areas

Background: transparent, Border Radius: 0px, Box Shadow: none, Padding: 26.5px. Used for the main text description on the left.

### Elevated Card

**Role:** Interactive elements with a background to signify interaction or state

Background: Steel Gray (#1d1d1d), Border Radius: 10px, Box Shadow: none, Padding: 0px. Used for the product image 'T-Shirt (Bestseller)'.

### Text Input (Search)

**Role:** Form element for user input

Background: Steel Gray (#1d1d1d), Text: Ghost White (#ffffff), Border: none, Border Radius: 10px (left side), Padding: 6.4px 19.2px. Typically paired with a button.

## Do's and Don'ts

### Do

- Use Midnight Oil (#000000) as the primary page background color across all layouts.
- Always use the Soehne Mono font at 16px weight 400 for all text elements.
- Apply 10px border-radius to all interactive components like buttons, cards, and input fields.
- Maintain a clear visual hierarchy by limiting text colors to Ghost White (#ffffff) for primary information and Dim Gray (#888888) for secondary details.
- Ensure generous spacing: a minimum of 16px between elements and 26.5px internal padding for information cards.
- For content blocks, apply Steel Gray (#1d1d1d) for explicit background distinction, maintaining a 10px radius.

### Don't

- Do not use any chromatic colors; visuals must remain strictly achromatic.
- Avoid box shadows or complex elevation; depth is created through varying shades of gray and explicit borders.
- Do not introduce any additional font families; exclusively use Soehne Mono.
- Do not use border-radius values other than 0px or 10px.
- Do not vary line-height significantly from the base 1.2 or 1.4 for readability, especially on long blocks of text.
- Do not use images or graphics that break the high-contrast, dark mode aesthetic; ensure all visuals integrate seamlessly.

## Similar Brands

- **Are.na** — Both use a minimalist, grid-based aesthetic with strong emphasis on content, minimal ornamentation, and a focus on functionality over visual flair.
- **Command-line interfaces / Terminal UIs** — The exclusive use of a monospace font, high achromatic contrast, and stark presentation evokes the utilitarian and technical aesthetic of a developer's terminal.
- **Linear** — Similar disciplined use of dark mode, crisp typography, and subtle component variations to create a highly functional and polished application feel, though Linear uses more color.
- **Figma (dark mode)** — Shares the dark, low-distraction visual environment for creative work, with clean lines and clear separation of interactive elements, although Figma has more chromatic range.
- **GitHub (dark mode)** — Employs a similar high-contrast dark theme with a focus on code and text readability, leveraging monospace fonts and muted neutrals.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-oil: #000000;
  --color-ghost-white: #ffffff;
  --color-steel-gray: #1d1d1d;
  --color-muted-ash: #383838;
  --color-dim-gray: #888888;
  --font-soehne-mono: 'Soehne Mono', Space Mono, Fira Code;
  --text-body: 16px;
  --leading-body: 19.2;
  --tracking-body: 0.24px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --radius-cards: 10px;
  --radius-inputs: 10px;
  --radius-buttons: 10px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-oil: #000000;
  --color-ghost-white: #ffffff;
  --color-steel-gray: #1d1d1d;
  --color-muted-ash: #383838;
  --color-dim-gray: #888888;
  --font-soehne-mono: 'Soehne Mono', Space Mono, Fira Code;
  --text-body: 16px;
  --leading-body: 19.2;
  --tracking-body: 0.24px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --radius-cards: 10px;
  --radius-inputs: 10px;
  --radius-buttons: 10px;
  --radius-default: 0px;
}
```
