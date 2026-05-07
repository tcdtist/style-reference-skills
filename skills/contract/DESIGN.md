---
version: alpha
name: "Contract"
description: "The Contract design system by MDF Italia embodies a refined, architectural blueprint aesthetic: a stark monochromatic palette emphasizes structure and form. Typography is the primary visual communicator, utilizing a wide range of weights to establish hierarchy rather than color. Surfaces are clean and unadorned, promoting a focus on product photography and minimal, precise UI elements. The overall impression is one of understated luxury and functional clarity, where space and proportion play a crucial role."
theme: "light"
industry: "design"
source_url: "https://contract.mdfitalia.com/en"
refero_style_id: "76faeb42-b43d-4cc7-ac03-1e4bd74f04b7"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514359150-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514359150-thumb.jpg"
extracted_at: "2026-04-30T01:59:37.377Z"
---

# Contract — Style Reference

> Architectural Blueprint on Marble: Precise lines and forms over a neutral, expansive canvas.

**Theme:** light

**Industry:** design

The Contract design system by MDF Italia embodies a refined, architectural blueprint aesthetic: a stark monochromatic palette emphasizes structure and form. Typography is the primary visual communicator, utilizing a wide range of weights to establish hierarchy rather than color. Surfaces are clean and unadorned, promoting a focus on product photography and minimal, precise UI elements. The overall impression is one of understated luxury and functional clarity, where space and proportion play a crucial role.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, elevated card surfaces, clean backdrop for product visuals |
| Ink Black | #000000 | `--color-ink-black` | Primary text, headings, strong outlines, section backgrounds for contrast. Creates a bold, definitive visual anchor |
| Ash Gray | #e5e7eb | `--color-ash-gray` | Soft icon strokes, subtle dividers, and low-emphasis decorative details. Do not promote it to the primary CTA color |
| Slate Text | #6b7280 | `--color-slate-text` | Muted secondary text, placeholder text in input fields, less prominent UI elements |
| Medium Gray | #b3b3b3 | `--color-medium-gray` | Tertiary text, subtle descriptions, copyright information. Used for low-priority textual content |
| Light Gray | #bbbbbb | `--color-light-gray` | Very subtle descriptive text, fine print, or as a background accent to text for very low hierarchy |
| Azure Accent | #2563eb | `--color-azure-accent` | Violet text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color |

## Tokens — Typography

### Plain

- **Token:** `--font-plain`
- **Substitute:** Inter, Arial, sans-serif
- **Weights:** 300, 400, 500, 600
- **Sizes:** 16px, 18px, 24px, 30px, 50px, 100px
- **Line heights:** 1.00, 1.07, 1.08, 1.13, 1.25, 1.50, 1.56, 1.63, 1.75
- **Letter spacing:** -0.0500em, -0.0400em, -0.0250em, -0.0020em
- **Role:** Primary brand typeface for all text content. The use of a custom font named 'Plain' suggests a focus on understated elegance, with a wide range of weights providing granular control over hierarchy. The specific letter-spacing values ensure precise optical alignment across different sizes, maintaining a consistent, refined feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.5 | -0.002px | `--text-body` |
| subheading | 18px | 1.56 | -0.002px | `--text-subheading` |
| heading-sm | 24px | 1.63 | -0.025px | `--text-heading-sm` |
| heading | 30px | 1.13 | -0.04px | `--text-heading` |
| heading-lg | 50px | 1.08 | -0.04px | `--text-heading-lg` |
| display | 100px | 1 | -0.05px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-69 | 69px | `--spacing-69` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-154 | 154px | `--spacing-154` |

### Border Radius

| Element | Value |
| --- | --- |
| inputs | 2px |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 69px |
| cardPadding | 12px |
| elementGap | 8px |

## Components

### Primary Ghost Button

**Role:** Interactive control for primary actions, presenting as an outlined element to maintain a light visual footprint.

Background: transparent (rgba(0,0,0,0)), Text: Ink Black (#000000), Border: 1px solid Ash Gray (#e5e7eb) on top, Padding: 18px top/bottom, 48px left/right. Radius: 0px.

### Text Link Button

**Role:** Minimal interactive control for navigation or secondary actions, appearing as plain text.

Background: transparent (rgba(0,0,0,0)), Text: Ink Black (#000000), No explicit border. Padding: 0px.

### Text Input Field

**Role:** User input area for forms.

Background: transparent (rgba(0,0,0,0)), Text: Ink Black (#000000), Border: 1px solid Slate Text (#6b7280). Padding: 8px top/bottom, 12px left/right. Radius: 0px. Placeholder text is Slate Text (#6b7280).

### Office Product Card

**Role:** Display individual product categories or offerings.

Background for product card: Canvas White (#ffffff). No visible border radius, hard edges. Features strong black text for titles, with smaller slate or gray text for descriptions. Visual elements are contained within the card's bounds without overlap.

### Key Value Circle

**Role:** Highlights key features or services within a section.

Comprises a white circular outline over a Canvas White (#ffffff) background. Text is Ink Black (#000000), typically centered in the circle. The graphic is a white circle, the structure is created by the black text and the negative space. The radius of the circle is undefined in the tokens but visually large and soft-edged.

### Download Catalog Link

**Role:** Direct call to action for downloading detailed information.

Text: Ink Black (#000000), typically accompanied by an icon or visual cue. No explicit background or padding, presented as a standard link. Underlined on hover.

## Do's and Don'ts

### Do

- Prioritize Ink Black (#000000) for all primary text and headings.
- Use Canvas White (#ffffff) for all main section backgrounds and card surfaces.
- Apply Plain typeface with specific letter-spacing values as defined in Typography for all text elements to maintain precise optical rhythm.
- Utilize Ash Gray (#e5e7eb) for subtle borders and dividers between content blocks and interactive elements.
- Maintain a compact density with an 8px element gap and 12px internal padding for cards.
- Form inputs should feature a 1px solid Slate Text (#6b7280) border with a 0px radius, aligning with the clean, unornamented aesthetic.
- Only use Azure Accent (#2563eb) for specific interactive feedback such as focus states or informational messages, never as a primary brand color.

### Don't

- Avoid using saturated background colors; all primary backgrounds should adhere to Canvas White (#ffffff) or Ink Black (#000000).
- Do not introduce decorative shadows or heavy gradients; the system relies on flat surfaces and high contrast.
- Refrain from using varied border radii across components; stick to 0px for most elements and 2px only for inputs.
- Do not deviate from the specified letter-spacing for 'Plain' font; optical precision is critical for this brand’s typographic identity.
- Do not use color to create hierarchy in text; rely on font weight and size variations within the `Plain` typeface.
- Avoid large, impactful graphics unless they are product photography; maintain a text-dominant, information-focused layout.
- Do not add unnecessary padding or margin; adhere to the defined spacing tokens for a consistently compact arrangement.

## Imagery

Imagery primarily consists of high-quality product photography and architectural renders. These visuals are typically contained within their sections, often shown as part of a larger composition or in a grid, with clean edges. Product shots are often full-frame or tightly cropped, emphasizing the material and form of the furniture. There are minimal decorative illustrations or abstract graphics. Icons are monochrome, typically filled where present, and serve a functional purpose.

## Layout

The page primarily uses a full-bleed layout for sections, with strong visual separation often created by alternating Ink Black (#000000) and Canvas White (#ffffff) backgrounds. Content within these sections is typically contained within a maximum width (not explicitly defined, but visually present). The hero section features a large, striking image or video. Content is often arranged in simple two-column text-left/image-right patterns or centered stacking for emphasis. Card grids are used for feature presentation or product categories. Navigation is a minimalist top bar, with elements appearing lightweight and subservient to the main content.

## Similar Brands

- **B&B Italia** — Shares a focus on high-end furniture, with a similar clean aesthetic, strong typography, and emphasis on product photography.
- **Flos** — Exhibits a refined, monochrome design system where product imagery and strong type hierarchy define the visual experience.
- **Artemide** — Features a modern, architectural approach with minimalist layouts and a reliance on high-contrast black and white for a sophisticated feel.
- **Vitra** — Utilizes a clean, product-focused presentation with a strong typographic foundation and a restrained use of color.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-ash-gray: #e5e7eb;
  --color-slate-text: #6b7280;
  --color-medium-gray: #b3b3b3;
  --color-light-gray: #bbbbbb;
  --color-azure-accent: #2563eb;
  --font-plain: 'Plain', Inter, Arial, sans-serif;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.002px;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --tracking-subheading: -0.002px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.63;
  --tracking-heading-sm: -0.025px;
  --text-heading: 30px;
  --leading-heading: 1.13;
  --tracking-heading: -0.04px;
  --text-heading-lg: 50px;
  --leading-heading-lg: 1.08;
  --tracking-heading-lg: -0.04px;
  --text-display: 100px;
  --leading-display: 1;
  --tracking-display: -0.05px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-55: 55px;
  --spacing-69: 69px;
  --spacing-100: 100px;
  --spacing-154: 154px;
  --radius-inputs: 2px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-ash-gray: #e5e7eb;
  --color-slate-text: #6b7280;
  --color-medium-gray: #b3b3b3;
  --color-light-gray: #bbbbbb;
  --color-azure-accent: #2563eb;
  --font-plain: 'Plain', Inter, Arial, sans-serif;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.002px;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --tracking-subheading: -0.002px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.63;
  --tracking-heading-sm: -0.025px;
  --text-heading: 30px;
  --leading-heading: 1.13;
  --tracking-heading: -0.04px;
  --text-heading-lg: 50px;
  --leading-heading-lg: 1.08;
  --tracking-heading-lg: -0.04px;
  --text-display: 100px;
  --leading-display: 1;
  --tracking-display: -0.05px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-55: 55px;
  --spacing-69: 69px;
  --spacing-100: 100px;
  --spacing-154: 154px;
  --radius-inputs: 2px;
  --radius-default: 0px;
}
```
