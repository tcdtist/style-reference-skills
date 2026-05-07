---
version: alpha
name: "Graf Lantz"
description: "Graf Lantz embodies a clean, material-focused aesthetic with a high-contrast monochromatic palette grounded in deep grays and precise typography. Surfaces are predominantly white, providing a crisp canvas for content, while subtle off-white tones introduce minimal depth. A single, vivid violet accent is reserved for primary interactive elements, providing a focused point of action against the otherwise subdued interface. Components are lightweight with strong outlines and sharp corners generally, though some interactive elements feature a playful, overtly rounded form."
theme: "light"
industry: "ecommerce"
source_url: "https://glob.land"
refero_style_id: "f1a690c7-234d-4ee9-9806-5790934e7043"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518841475-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518841475-thumb.jpg"
extracted_at: "2026-04-30T03:14:18.840Z"
---

# Graf Lantz — Style Reference

> White canvas, sharp monochrome details.

**Theme:** light

**Industry:** ecommerce

Graf Lantz embodies a clean, material-focused aesthetic with a high-contrast monochromatic palette grounded in deep grays and precise typography. Surfaces are predominantly white, providing a crisp canvas for content, while subtle off-white tones introduce minimal depth. A single, vivid violet accent is reserved for primary interactive elements, providing a focused point of action against the otherwise subdued interface. Components are lightweight with strong outlines and sharp corners generally, though some interactive elements feature a playful, overtly rounded form.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, elevated card surfaces, primary content areas |
| Text Black | #212121 | `--color-text-black` | Primary text, prominent links, footer text. Provides strong contrast against white backgrounds |
| Graphite Text | #474747 | `--color-graphite-text` | General body text, default input text, secondary button text, and navigational links. This forms the most common text color |
| Subtle Gray | #eeeeee | `--color-subtle-gray` | Input backgrounds, secondary button backgrounds, subtle dividers, and light strokes |
| Deepest Gray | #000000 | `--color-deepest-gray` | Strong borders, specific icon fills, and high-emphasis text snippets, often used for structural outlines |
| Muted Silver | #7b7b7b | `--color-muted-silver` | Helper text, less important links, and soft borders, offering a tertiary level of visual hierarchy |
| Violet Action | #574cd5 | `--color-violet-action` | Primary Call To Action backgrounds, active interactive elements — a vivid punctuation mark that guides user interaction |

## Tokens — Typography

### NeueHaasUnicaW1G

- **Token:** `--font-neuehaasunicaw1g`
- **Substitute:** Helvetica Neue
- **Weights:** 400, 500, 900
- **Sizes:** 12px, 14px, 16px
- **Line heights:** 1.00, 1.20, 1.40, 1.50
- **Letter spacing:** normal
- **Role:** Primary typeface for most text content including body, links, navigation, and footer text. Its precise forms contribute to the system's clean, structured feel.

### Instrument Sans

- **Token:** `--font-instrument-sans`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 14px, 16px, 32px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Used for headings and input fields, providing clear, readable titles that maintain the overall modern aesthetic.

### accessibly

- **Token:** `--font-accessibly`
- **Substitute:** System UI
- **Weights:** 400
- **Sizes:** 16px, 35px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** A distinct display font used sparingly for high-impact buttons or decorative headings, injecting a unique personality.

### Source Sans Pro

- **Token:** `--font-source-sans-pro`
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.2
- **Role:** Source Sans Pro — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.4 | — | `--text-caption` |
| body-sm | 14px | 1.4 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| heading | 32px | 1.2 | — | `--text-heading` |
| display | 35px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-150 | 150px | `--spacing-150` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 50px |
| inputs | 0px |
| buttons | 0px |
| elements | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 50px |
| cardPadding | 15px |
| elementGap | 15px |

## Components

### Primary Action Button

**Role:** Main interactive button

Filled button with 'Violet Action' background (#574cd5), 'Graphite Text' (#474747), and a 100% border radius creating a pill shape. Text is medium weight (500) Instrument Sans at 16px.

### Search Input Field

**Role:** User input for search queries

Input field with 'Subtle Gray' background (#eeeeee), 'Graphite Text' (#474747) for text, no border radius (0px). Padding is 9px vertical and 16px horizontal. Uses Instrument Sans.

### Secondary Ghost Button

**Role:** Secondary action or navigational button

Ghost button with 'Subtle Gray' background (#eeeeee), 'Graphite Text' (#474747) for text, and no border radius (0px). Padded 0px vertical and 15px horizontal. Uses NeueHaasUnicaW1G.

### Header Navigation Link

**Role:** Top-level navigation items

Text link using NeueHaasUnicaW1G, size 16px, 'Graphite Text' (#474747). Active/focus states likely involve border or color changes.

### Pill Button

**Role:** Small, high-contrast action or tag.

Button with 'Canvas White' background (#ffffff), 'Graphite Text' (#474747), and a 50px border radius, typically containing uppercase text. Example: 'SHOP COASTERS'.

## Do's and Don'ts

### Do

- Use 'Canvas White' (#ffffff) as the default background for all primary page sections and elevated component surfaces.
- Apply 'Graphite Text' (#474747) for most body text, links, and form field content to ensure consistent readability.
- Reserve 'Violet Action' (#574cd5) exclusively for primary interactive elements, such as filled call-to-action buttons, to maintain its impact.
- Form input fields should utilize 'Subtle Gray' (#eeeeee) backgrounds and maintain a 0px border radius for a sharp, neutral appearance.
- Headlines should primarily use Instrument Sans font with variable weights and sizes (e.g., 32px), with careful attention to line height 1.2 to 1.0.
- Maintain a default padding of 15px for cards and primary element spacing, with sections separated by 50px of vertical space.
- Employ a 0px border radius for most container elements and buttons to preserve the sharp, modern aesthetic, except for specific pill-shaped elements that use 50px.

### Don't

- Do not introduce new vibrant colors outside of 'Violet Action' (#574cd5) for interactive elements; color should remain predominantly monochromatic.
- Avoid arbitrary uses of 'Deepest Gray' (#000000) for text; reserve it for structural borders or specific high-contrast icon details.
- Do not vary border radius extensively; stick to 0px for most elements and 50px for specific pill-like shapes.
- Refrain from using lightweight fonts for primary headings. Instrument Sans at weights 400 or 500 should be used for clarity.
- Do not apply shadows or heavy elevation styles; the system relies on flat surfaces and high color contrast for hierarchy.
- Avoid using multiple font families for body text; NeueHaasUnicaW1G should be the standard for general content.
- Do not deviate from the established spacing units of 4px increments, particularly for element gaps (15px) and section gaps (50px).

## Imagery

This system primarily uses product photography, often close-cropped to showcase material texture and detail. Imagery is presented within contained sections, with a tendency toward raw edges over masking. The photography appears brightly lit, focusing on the product itself with minimal background context. Icons are minimal, likely outlined, and contribute to the functional UI rather than serving as decorative elements. The overall density of imagery is balanced, with imagery serving both explanatory and atmospheric roles, breaking up text-dominant sections.

## Layout

The page structure favors a max-width contained layout, likely centered, rather than full-bleed. The hero section is characterized by a prominent visual (like a background image with text overlay) and a focused call to action. Section rhythm appears to be consistent with ample vertical spacing. Content arrangement frequently uses stacked elements with clear headings and accompanying text. Navigation is a simple top bar with text links, likely sticky or prominent. The density is on the comfortable side, prioritizing readability and visual breathing room over information packing.

## Similar Brands

- **Everlane** — Similar focus on crisp white backgrounds, strong photographic emphasis, and a clean, minimalist typographic approach with subtle accents.
- **Aesop** — Shares a sophisticated, stark monochrome aesthetic with a deliberate use of typography and high-quality product imagery.
- **Figma** — Exhibits a clean UI with strong use of neutral grays and a single, vibrant accent color to highlight interactive elements and status.
- **Made by Google (Store)** — Employs clean, product-focused layouts with ample white space, monochromatic text, and specific colored accents for interactive states.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-text-black: #212121;
  --color-graphite-text: #474747;
  --color-subtle-gray: #eeeeee;
  --color-deepest-gray: #000000;
  --color-muted-silver: #7b7b7b;
  --color-violet-action: #574cd5;
  --font-neuehaasunicaw1g: 'NeueHaasUnicaW1G', Helvetica Neue;
  --font-instrument-sans: 'Instrument Sans', Inter;
  --font-accessibly: 'accessibly', System UI;
  --font-source-sans-pro: 'Source Sans Pro', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --text-display: 35px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --spacing-144: 144px;
  --spacing-150: 150px;
  --radius-pill: 50px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --radius-elements: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-text-black: #212121;
  --color-graphite-text: #474747;
  --color-subtle-gray: #eeeeee;
  --color-deepest-gray: #000000;
  --color-muted-silver: #7b7b7b;
  --color-violet-action: #574cd5;
  --font-neuehaasunicaw1g: 'NeueHaasUnicaW1G', Helvetica Neue;
  --font-instrument-sans: 'Instrument Sans', Inter;
  --font-accessibly: 'accessibly', System UI;
  --font-source-sans-pro: 'Source Sans Pro', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --text-display: 35px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --spacing-144: 144px;
  --spacing-150: 150px;
  --radius-pill: 50px;
  --radius-inputs: 0px;
  --radius-buttons: 0px;
  --radius-elements: 0px;
}
```
