---
version: alpha
name: "Sigmaphoto"
description: "Sigma presents a sophisticated, high-contrast aesthetic emphasizing product photography against a mostly achromatic interface. Typography is reserved yet impactful, combining custom sans-serif and serif fonts for a classic yet modern feel. Visual hierarchy is achieved through stark black and white contrasts, with a single vivid blue for primary interactive elements, reserving color for action and brand emphasis. Components are sharp-edged and minimalist, reflecting precision and technical excellence."
theme: "light"
industry: "ecommerce"
source_url: "https://www.sigmaphoto.com"
refero_style_id: "67c60ee4-ac38-41ee-834e-ed2a92146417"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509235191-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509235191-thumb.jpg"
extracted_at: "2026-04-30T00:34:26.915Z"
---

# Sigmaphoto — Style Reference

> Precision engineered, high-contrast monochrome

**Theme:** light

**Industry:** ecommerce

Sigma presents a sophisticated, high-contrast aesthetic emphasizing product photography against a mostly achromatic interface. Typography is reserved yet impactful, combining custom sans-serif and serif fonts for a classic yet modern feel. Visual hierarchy is achieved through stark black and white contrasts, with a single vivid blue for primary interactive elements, reserving color for action and brand emphasis. Components are sharp-edged and minimalist, reflecting precision and technical excellence.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, text elements on dark backgrounds |
| Ink Black | #000000 | `--color-ink-black` | Primary text, critical borders, icons, input text. Used for strong contrast |
| Charcoal Gray | #333333 | `--color-charcoal-gray` | Secondary text, dark navigation backgrounds, subtle borders, input placeholder text |
| Cadet Blue | #0048ff | `--color-cadet-blue` | Primary action backgrounds, interactive elements, branding accents — a singular vibrant color to signify interactivity |
| Cool Gray | #707070 | `--color-cool-gray` | Muted text, helper text, less prominent links, input borders |
| Silver Mist | #999999 | `--color-silver-mist` | Disabled states, faint icon details, ghost button borders |

## Tokens — Typography

### Sigma Sans

- **Token:** `--font-sigma-sans`
- **Weights:** 400
- **Sizes:** 13px, 16px
- **Line heights:** 1.10, 1.20, 1.25, 1.54
- **Letter spacing:** -0.31em at 13px, 0.005em at 16px
- **Role:** General body text, navigation links, and button labels. Its clean, sans-serif form ensures readability in functional UI areas.

### Sigma Serif

- **Token:** `--font-sigma-serif`
- **Weights:** 400
- **Sizes:** 16px, 24px
- **Line heights:** 1.10, 1.25
- **Letter spacing:** 0.003em at 16px, 0.005em at 24px
- **Role:** Subheadings and featured product descriptions, adding a touch of classic sophistication without being ornate. The serif grounds longer text blocks.

### Sigma Serif head

- **Token:** `--font-sigma-serif-head`
- **Substitute:** Palatino
- **Weights:** 400
- **Sizes:** 48px, 88px
- **Line heights:** 1.10, 1.25
- **Letter spacing:** 0.001em at 48px, 0.002em at 88px
- **Role:** Prominent headings and display text for hero sections, conveying authority and product focus. Its relatively loose tracking maintains a premium feel.

### Arial

- **Token:** `--font-arial`
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Accessibility text and fallback for small UI elements, ensuring universal legibility.

### Metropolis

- **Token:** `--font-metropolis`
- **Substitute:** Open Sans
- **Weights:** 500
- **Sizes:** 14px
- **Line heights:** 1.14
- **Letter spacing:** -0.004em
- **Role:** Specific, smaller body text applications where a slightly more condensed feel is desired, with a subtle negative letter-spacing for tightness.

### Times

- **Token:** `--font-times`
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.2
- **Role:** Times — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.2 | -0.31px | `--text-caption` |
| body | 16px | 1.25 | 0.005px | `--text-body` |
| subheading | 24px | 1.25 | 0.005px | `--text-subheading` |
| heading | 48px | 1.1 | 0.001px | `--text-heading` |
| display | 88px | 1.25 | 0.002px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-184 | 184px | `--spacing-184` |

### Border Radius

| Element | Value |
| --- | --- |
| inputs | 1px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.5) -2px 0px 5px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 15px |
| elementGap | 16px |

## Components

### Ghost Button

**Role:** Secondary action or discrete navigation trigger.

Transparent background, Charcoal Gray (#333333) text and border. No padding, giving it a minimalist, text-link like appearance. Border radius 0px.

### Solid Button (Dark)

**Role:** Standard action button for primary or important actions.

Solid Charcoal Gray (#333333) background with Canvas White (#ffffff) text. Padding of 11px vertical, 15px horizontal. Border radius 0px.

### Blue Circular Button

**Role:** Distinctive interactive element, possibly for a specific function like an accessibility toggle.

Solid Cadet Blue (#0048ff) background. Content color Ink Black (#000000). Circular shape with 50% border radius. No explicit padding.

### Muted Ghost Button

**Role:** An action button with lower visual emphasis, for less critical functions.

Transparent background, Silver Mist (#999999) text and border. No padding, Border radius 0px.

### Standard Input Field

**Role:** Form input element for text entry.

Canvas White (#ffffff) background, Ink Black (#000000) text. Border is a 1px solid Cool Gray (#707070) for normal state. Padding 7px vertical, 11px horizontal. Border radius 1px.

### Header Navigation Link

**Role:** Primary navigation item in the header.

Uses Sigma Sans, weight 400, size 13px. Charcoal Gray text (#333333), no explicit background or border, implying a text-only link within a navigation bar.

## Do's and Don'ts

### Do

- Prioritize high visual contrast between text (Ink Black #000000, Charcoal Gray #333333) and backgrounds (Canvas White #ffffff) for all informational elements.
- Use Cadet Blue (#0048ff) exclusively for primary interactive elements, ensuring it stands out against the achromatic palette.
- Maintain a border-radius of 0px for most buttons and visual containers to reinforce a precise, engineered aesthetic.
- Apply Sigma Serif head for all primary marketing headlines (sizes 48px, 88px) with their specified letter-spacing to convey impact.
- Use 1px borders sparingly for subtle separation, favoring hard edges and direct contrast over extensive use of outlines.
- Employ consistent 16px element gaps for spacing between distinct inline items, ensuring a comfortable data density.
- Ensure all input fields have a 1px border radius and a Cool Gray (#707070) border when not focused, signaling a slightly framed but clean input area.

### Don't

- Avoid using multiple chromatic colors; limit color accents strictly to Cadet Blue (#0048ff) for critical interaction.
- Do not use soft, rounded corners for primary UI components or buttons, as the system favors sharp, defined edges.
- Do not introduce extensive drop shadows or complex elevation schemes; rely on direct background changes and contrast for visual layering.
- Do not use highly decorative or script fonts; stick to the defined Sigma Sans and Sigma Serif families for all text.
- Avoid large, uncontained images; always ensure product photography is precisely cropped and presented against clear backgrounds.
- Do not create excessive visual noise with gradients or complex background patterns; keep surfaces clean and solid.
- Do not use overly large padding or element gaps that would reduce the sense of precision and density.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas Background | #ffffff | Dominant page background for most content sections. |
| 2 | Card Surface | #ffffff | Background for self-contained content blocks, often within the main canvas. |
| 3 | Interactive Background | #333333 | Dark backgrounds for interactive components like filled buttons or navigation bars that require white text for contrast. |

## Elevation

- **Product Display Object:** `rgba(0, 0, 0, 0.5) -2px 0px 5px 0px`

## Imagery

Imagery primarily features product photography: tight crops of lenses and cameras, often against dark, stark, or reflective monochrome backgrounds. The products are presented in high detail, well-lit, and isolated, emphasizing their form and precision. No lifestyle photography is used. Icons are monochromatic, either Ink Black (#000000) or Cool Gray (#707070), with a clean, outlined style. Imagery serves to showcase products as the central focus.

## Layout

The page primarily employs a max-width contained layout for content, but hero sections frequently use a full-bleed dark background with centered product imagery. There's a consistent vertical rhythm with sections clearly delineated by background color changes (white to dark). Content is often arranged in centered stacks for headlines and body text, emphasizing product information. Feature sections may use implicit grids for product display. A sticky top navigation bar remains present.

## Similar Brands

- **Leica Camera** — High-end product focus, minimalist design, and strong use of black and white photography against clean backgrounds.
- **Bang & Olufsen** — Premium electronics brand with a stark, sophisticated visual style, often featuring products in isolated, well-lit settings and minimal UI.
- **Apple** — Emphasis on product-focused photography with clean, minimalist interfaces and a deliberate use of white space and subdued typography.
- **Hasselblad** — Luxury camera brand aesthetic characterized by precision, dark themes highlighting product detail, and a lean, functional UI.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-charcoal-gray: #333333;
  --color-cadet-blue: #0048ff;
  --color-cool-gray: #707070;
  --color-silver-mist: #999999;
  --font-sigma-sans: 'Sigma Sans', ui-sans-serif, system-ui, sans-serif;
  --font-sigma-serif: 'Sigma Serif', ui-sans-serif, system-ui, sans-serif;
  --font-sigma-serif-head: 'Sigma Serif head', Palatino;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --font-metropolis: 'Metropolis', Open Sans;
  --font-times: 'Times', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 13px;
  --leading-caption: 1.2;
  --tracking-caption: -0.31px;
  --text-body: 16px;
  --leading-body: 1.25;
  --tracking-body: 0.005px;
  --text-subheading: 24px;
  --leading-subheading: 1.25;
  --tracking-subheading: 0.005px;
  --text-heading: 48px;
  --leading-heading: 1.1;
  --tracking-heading: 0.001px;
  --text-display: 88px;
  --leading-display: 1.25;
  --tracking-display: 0.002px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-184: 184px;
  --radius-inputs: 1px;
  --shadow-xl: rgba(0, 0, 0, 0.5) -2px 0px 5px 0px;
  --surface-canvas-background: #ffffff;
  --surface-card-surface: #ffffff;
  --surface-interactive-background: #333333;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-charcoal-gray: #333333;
  --color-cadet-blue: #0048ff;
  --color-cool-gray: #707070;
  --color-silver-mist: #999999;
  --font-sigma-sans: 'Sigma Sans', ui-sans-serif, system-ui, sans-serif;
  --font-sigma-serif: 'Sigma Serif', ui-sans-serif, system-ui, sans-serif;
  --font-sigma-serif-head: 'Sigma Serif head', Palatino;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --font-metropolis: 'Metropolis', Open Sans;
  --font-times: 'Times', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 13px;
  --leading-caption: 1.2;
  --tracking-caption: -0.31px;
  --text-body: 16px;
  --leading-body: 1.25;
  --tracking-body: 0.005px;
  --text-subheading: 24px;
  --leading-subheading: 1.25;
  --tracking-subheading: 0.005px;
  --text-heading: 48px;
  --leading-heading: 1.1;
  --tracking-heading: 0.001px;
  --text-display: 88px;
  --leading-display: 1.25;
  --tracking-display: 0.002px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-184: 184px;
  --radius-inputs: 1px;
  --shadow-xl: rgba(0, 0, 0, 0.5) -2px 0px 5px 0px;
  --surface-canvas-background: #ffffff;
  --surface-card-surface: #ffffff;
  --surface-interactive-background: #333333;
}
```
