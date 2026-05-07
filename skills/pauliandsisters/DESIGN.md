---
version: alpha
name: "Pauliandsisters"
description: "The Pauli & Sisters visual system evokes a natural and understated aesthetic, built upon a palette of organic greens and soft neutrals. Typography balances elegant, structured serifs with clean, approachable sans-serifs, creating a grounded yet refined feel. Spacing is generous, allowing elements to breathe and emphasizing content clarity over density. Components prioritize utility and a sense of craft, often appearing as subtle outlines or ghost elements rather than bold, filled forms."
theme: "light"
industry: "ecommerce"
source_url: "https://pauliandsisters.com"
refero_style_id: "0a5bd460-07fd-487f-8bde-de20f80ce20f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517945135-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517945135-thumb.jpg"
extracted_at: "2026-04-30T02:59:24.400Z"
---

# Pauliandsisters — Style Reference

> Organic botanical serenity

**Theme:** light

**Industry:** ecommerce

The Pauli & Sisters visual system evokes a natural and understated aesthetic, built upon a palette of organic greens and soft neutrals. Typography balances elegant, structured serifs with clean, approachable sans-serifs, creating a grounded yet refined feel. Spacing is generous, allowing elements to breathe and emphasizing content clarity over density. Components prioritize utility and a sense of craft, often appearing as subtle outlines or ghost elements rather than bold, filled forms.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Forest Canopy | #152800 | `--color-forest-canopy` | Primary text, outlined button borders, key interactive elements, subtle accent details for navigation and headings |
| Spring Meadow | #d8ffa4 | `--color-spring-meadow` | Primary background for sections and cards, accent for outlined headings, and subtle interactive states |
| Limestone | #8b9682 | `--color-limestone` | Input borders and placeholder text — a soft, almost imperceptible boundary |
| Sky Pale | #d0e3ff | `--color-sky-pale` | Background for secondary content blocks and design elements, providing a cool contrast to the dominant green palette |
| Faded Denim | #bdd2dc | `--color-faded-denim` | Background for informational panels and subtle surface changes, sitting between Sky Pale and Spring Meadow |
| Azure Haze | #a0c8ff | `--color-azure-haze` | Background for elevated content or distinctive sections, a slightly deeper cool tone |

## Tokens — Typography

### Cooper Lt BT Light

- **Token:** `--font-cooper-lt-bt-light`
- **Substitute:** Lora
- **Weights:** 300, 400
- **Sizes:** 14px, 20px, 28px, 48px, 54px
- **Line heights:** 1.10, 1.20, 1.30
- **Letter spacing:** normal
- **Role:** Primary headings and display text, its light weight and classic serif form create an air of understated elegance and authority, almost like letterpress.

### Sharp Sans

- **Token:** `--font-sharp-sans`
- **Substitute:** Montserrat
- **Weights:** 400, 800
- **Sizes:** 13px, 18px, 21px
- **Line heights:** 1.30
- **Letter spacing:** normal
- **Role:** Body copy, link text, and component labels. Its geometric sans-serif nature provides clarity and a modern, approachable counterbalance to the serif headings.

### Beatrice

- **Token:** `--font-beatrice`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 45px
- **Line heights:** 1.10
- **Letter spacing:** normal
- **Role:** Specific display headings and decorative text elements, bringing a unique, distinctive character to focal points.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.3 | — | `--text-caption` |
| subheading | 18px | 1.3 | — | `--text-subheading` |
| heading-sm | 20px | 1.3 | — | `--text-heading-sm` |
| heading-lg | 28px | 1.2 | — | `--text-heading-lg` |
| display | 48px | 1.1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-86 | 86px | `--spacing-86` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1341px |
| sectionGap | 70px |
| cardPadding | 24px |
| elementGap | 6px |

## Components

### Outline Ghost Button

**Role:** Primary call to action.

Appears as a transparent rectangle with a 'Forest Canopy' (#152800) border, 'Forest Canopy' text, 0px border-radius, and generous 30px vertical and 54px horizontal padding. The text should use Sharp Sans at 14px 400 weight.

### Outline Text Input

**Role:** User input fields.

Features a 'Limestone' (#8b9682) border, same color placeholder text, no background fill (transparent), and 0px border-radius. Padding is 22px vertical and 24px horizontal. Text input uses Cooper Lt BT Light at 14px 400 weight.

### Badge with Padding

**Role:** Informational labels or tags.

Transparent background with 'Forest Canopy' (#152800) text. Features large vertical padding of 44px with no horizontal padding, and 0px border-radius. Text uses Sharp Sans at 13px 400 weight.

## Do's and Don'ts

### Do

- Always use 'Forest Canopy' (#152800) for primary text and key interactive elements.
- Prioritize 'Spring Meadow' (#d8ffa4) and 'Sky Pale' (#d0e3ff) for background sections to maintain brand neutrality.
- Employ generous vertical spacing, primarily using `sectionGap` of 70px between major content blocks.
- Set borders to 0px radius across all components for a sharp, deliberate aesthetic.
- Use Cooper Lt BT Light for all main headings and Sharp Sans for body copy and navigation links.
- Implement the 'Outline Ghost Button' for primary calls to action to reinforce the subtle interaction style.
- Ensure all input fields utilize a 'Limestone' (#8b9682) outline for consistent form styling.

### Don't

- Avoid solid, filled buttons; all primary actions should be ghosted or outlined.
- Do not introduce strong accent colors outside the defined palette of greens and cool neutrals.
- Refrain from using any border-radius greater than 0px on UI elements.
- Avoid dense layouts; always maintain the generous 70px `sectionGap` between primary content blocks.
- Do not apply shadow to any component, maintaining a flat and clean visual style.
- Never use a different font family for headings or body text than Cooper Lt BT Light and Sharp Sans, respectively.
- Do not use inline padding for elements within components where specific `elementGap` of 6px or `cardPadding` of 24px should apply.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Spring Meadow | #d8ffa4 | Primary page background and default card surfaces. |
| 2 | Sky Pale | #d0e3ff | Secondary background for contrasting content blocks or featured sections. |
| 3 | Faded Denim | #bdd2dc | Background for informational panels or slightly elevated surface contexts. |
| 4 | Azure Haze | #a0c8ff | Background for distinct or emphasized sections, providing a deeper cool tone. |

## Imagery

The visual language for imagery is a mix of product photography and stylized abstract graphics. Photography consists of authentic, unedited shots of models in natural poses, often with a subtle light blue or green tint. Product elements are minimal, tightly cropped, and presented directly. Illustrations are flat, organic shapes, relying on the brand's green palette. Icons are minimal, outlined, and monochromatic, maintaining a light stroke weight.

## Layout

The page uses a maximum width of 1341px, centered, creating a contained content experience. The hero section often features a full-width image with text overlaid, sometimes with a split layout incorporating a solid color panel. Section rhythm is managed through consistent vertical spacing of 70px and alternating background colors (Spring Meadow, Sky Pale, Faded Denim). Content is arranged in alternating text-left/image-right patterns, centered stacks for headlines, and occasional 2-column breakdowns for detailed information. Navigation is a sticky top bar with centrally aligned brand logo and dispersed links.

## Similar Brands

- **Glossier** — Soft, natural color palettes, minimalist typography for body copy, and a focus on product authenticity.
- **Seedlip** — Botanical-inspired aesthetic, elegant serif headings, and a reserved, natural color scheme.
- **Byredo** — Uncluttered layouts, strong typographic hierarchy, and a sophisticated, almost monochromatic base with subtle accents.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-forest-canopy: #152800;
  --color-spring-meadow: #d8ffa4;
  --color-limestone: #8b9682;
  --color-sky-pale: #d0e3ff;
  --color-faded-denim: #bdd2dc;
  --color-azure-haze: #a0c8ff;
  --font-cooper-lt-bt-light: 'Cooper Lt BT Light', Lora;
  --font-sharp-sans: 'Sharp Sans', Montserrat;
  --font-beatrice: 'Beatrice', Playfair Display;
  --text-caption: 13px;
  --leading-caption: 1.3;
  --text-subheading: 18px;
  --leading-subheading: 1.3;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.3;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.2;
  --text-display: 48px;
  --leading-display: 1.1;
  --spacing-6: 6px;
  --spacing-16: 16px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-54: 54px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-86: 86px;
  --radius-none: 0px;
  --surface-spring-meadow: #d8ffa4;
  --surface-sky-pale: #d0e3ff;
  --surface-faded-denim: #bdd2dc;
  --surface-azure-haze: #a0c8ff;
}
```

### Tailwind v4

```css
@theme {
  --color-forest-canopy: #152800;
  --color-spring-meadow: #d8ffa4;
  --color-limestone: #8b9682;
  --color-sky-pale: #d0e3ff;
  --color-faded-denim: #bdd2dc;
  --color-azure-haze: #a0c8ff;
  --font-cooper-lt-bt-light: 'Cooper Lt BT Light', Lora;
  --font-sharp-sans: 'Sharp Sans', Montserrat;
  --font-beatrice: 'Beatrice', Playfair Display;
  --text-caption: 13px;
  --leading-caption: 1.3;
  --text-subheading: 18px;
  --leading-subheading: 1.3;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.3;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.2;
  --text-display: 48px;
  --leading-display: 1.1;
  --spacing-6: 6px;
  --spacing-16: 16px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-54: 54px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-86: 86px;
  --radius-none: 0px;
  --surface-spring-meadow: #d8ffa4;
  --surface-sky-pale: #d0e3ff;
  --surface-faded-denim: #bdd2dc;
  --surface-azure-haze: #a0c8ff;
}
```
