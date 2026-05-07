---
version: alpha
name: "Symbol Audio"
description: "Symbol Audio embodies a sophisticated industrial aesthetic, pairing a dominant forest green canvas with stark white typography and neutral product cards. Typography is a critical brand differentiator, utilizing custom display typefaces with extreme letter-spacing and substantial size to create an impactful, sculptural presence. Components are generally borderless and unadorned, relying on color contrast and the precision of typography to define elements. The overall feel is one of deliberate craftsmanship, reflecting the brand's focus on custom audio furniture."
theme: "dark"
industry: "ecommerce"
source_url: "https://www.symbolaudio.com"
refero_style_id: "3b742f76-25ad-446c-a942-09b09b93f6a3"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512576291-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512576291-thumb.jpg"
extracted_at: "2026-04-30T01:30:04.480Z"
---

# Symbol Audio — Style Reference

> Sculptural Typography on Forest Canvas: Letterforms as architecture, anchored by a deep green backdrop.

**Theme:** dark

**Industry:** ecommerce

Symbol Audio embodies a sophisticated industrial aesthetic, pairing a dominant forest green canvas with stark white typography and neutral product cards. Typography is a critical brand differentiator, utilizing custom display typefaces with extreme letter-spacing and substantial size to create an impactful, sculptural presence. Components are generally borderless and unadorned, relying on color contrast and the precision of typography to define elements. The overall feel is one of deliberate craftsmanship, reflecting the brand's focus on custom audio furniture.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Forest Canvas | #1c3c27 | `--color-forest-canvas` | Page backgrounds, section fills, hero backgrounds, subtle interactive element borders — creates a deep, immersive environment where products stand out |
| Arctic Mist | #dfe2e5 | `--color-arctic-mist` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Ink | #000000 | `--color-ink` | Accent text, specific icon fills, high-contrast states on light surfaces, subtle borders — provides maximum contrast against lighter neutrals |
| Polar White | #fffffd | `--color-polar-white` | Product card backgrounds, modal surfaces — provides a clean, bright stage for product imagery and content |
| Mellow Yellow | #fffcda | `--color-mellow-yellow` | A subtle, warm background tint used sparingly for secondary content blocks or to alleviate visual fatigue from pure white |
| Link Blue | #447cf0 | `--color-link-blue` | Informational links, decorative accents, border highlights — a vivid, cool accent used for functional cues |
| Alert Red | #c72a00 | `--color-alert-red` | Orange outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |

## Tokens — Typography

### Chalet-LondonSixty

- **Token:** `--font-chalet-londonsixty`
- **Substitute:** Georgia
- **Weights:** 400
- **Sizes:** 13px, 15px, 16px
- **Line heights:** 1.00, 1.30, 1.31, 1.33, 1.50
- **Letter spacing:** normal
- **Role:** Primary body text, labels, and sub-headings — characterized by its humanist, slightly condensed form for legibility at smaller sizes amid bold display type. Favored for its classic, refined feel.

### SupremeLL-Bold

- **Token:** `--font-supremell-bold`
- **Substitute:** Roboto Condensed
- **Weights:** 400
- **Sizes:** 14px, 20px, 34px, 52px, 80px
- **Line heights:** 1.00, 1.13, 1.25, 1.26, 1.33
- **Letter spacing:** -0.0200em
- **Role:** Headlines, display text, and prominent navigational elements — its bold, tightly-tracked presence creates a high-impact, architectural statement.

### Chalet-NewYorkSixty

- **Token:** `--font-chalet-newyorksixty`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 11px, 13px, 15px
- **Line heights:** 1.00, 1.33
- **Letter spacing:** normal
- **Role:** Captions, meta-information, and secondary navigational items — a more compact and understated version for supporting text.

### SupremeLL-BoldFlat

- **Token:** `--font-supremell-boldflat`
- **Substitute:** Roboto Condensed
- **Weights:** 400
- **Sizes:** 15px
- **Line heights:** 1.33
- **Letter spacing:** normal
- **Role:** Specialized links, often used within paragraphs for emphasis or specific contexts.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1 | 0px | `--text-caption` |
| body | 15px | 1.33 | 0px | `--text-body` |
| subheading | 20px | 1.25 | -0.4px | `--text-subheading` |
| heading | 34px | 1.26 | -0.68px | `--text-heading` |
| heading-lg | 52px | 1.13 | -1.04px | `--text-heading-lg` |
| display | 80px | 1 | -1.6px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 0px |
| default | 0px |
| tagsAndBadges | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Bare Text Button

**Role:** Navigation and functional buttons

Text-only buttons using Arctic Mist (#dfe2e5) text on a transparent background, no padding or border by default. Focus is on direct textual interaction, minimalist by design.

### Outlined Text Button

**Role:** Secondary navigation and ghost actions

Text-based buttons with a Forest Canvas (#1c3c27) border and matching text, often seen with 20px left/right padding. These act as subtle calls to action or supplementary links.

### Product Card

**Role:** Display individual product listings

Product cards feature a Polar White (#fffffd) background with sharp 0px corners, no shadow. Product imagery is contained within, paired with Arctic Mist (#dfe2e5) text for titles and prices. A subtle border of Forest Canvas (#1c3c27) often frames the card.

### Minimal Input Field

**Role:** Search and data entry fields

Input fields have a transparent background with Arctic Mist (#dfe2e5) text and a matching bottom border. Minimalist design prioritizes direct text input. Includes 20px top/bottom padding.

### Product Tag

**Role:** Labels for product features or categories

Small informational tags or labels, often 'Bestseller' or 'New Arrival', with a 9999px border-radius, giving them a pill shape. Text is Ink (#000000) on a light background, paired with a subtle border for definition.

## Do's and Don'ts

### Do

- Prioritize SupremeLL-Bold for all major headings and display text, applying a tight letter-spacing of -0.0200em to maintain its distinctive, condensed feel.
- Use Forest Canvas (#1c3c27) as the primary background for most sections, creating a consistent, deep, and immersive brand experience.
- Employ Arctic Mist (#dfe2e5) for all primary body text, link text, and button text, ensuring legibility against the dark Forest Canvas.
- Keep all corners sharp with a 0px border-radius for product cards, input fields, and most structural components, reflecting a clean, unadorned aesthetic.
- Use Polar White (#fffffd) sparingly as a background for content cards where product presentation requires a bright, contrasting stage.
- Define interactive elements primarily through text color and subtle borders using Forest Canvas (#1c3c27) rather than filled backgrounds.
- Maintain a comfortable information density, using a base element gap of 20px to separate components and allow visual breathing room.

### Don't

- Avoid using drop shadows or complex elevation schemes; rely on color contrast and typographic hierarchy to establish visual organization.
- Do not introduce new saturated accent colors outside of Link Blue (#447cf0) and Alert Red (#c72a00) to preserve the muted and sophisticated palette.
- Refrain from using heavily styled, filled buttons; all primary interactions should be text-based or rely on subtle outlined appearances.
- Do not deviate from the established 0px border-radius for main content blocks or 9999px for tags; rounded corners are not part of the core brand identity.
- Avoid generic stock photography; all imagery should focus on high-quality product shots, lifestyle imagery should be minimal or absent.
- Do not center text within large content blocks unless it is a primary headline or hero element; prefer left-aligned text for readability.
- Avoid dense, information-heavy sections; ensure generous spacing around text and components to maintain a premium feel.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Forest Canvas Background | #1c3c27 | Primary page and section background; the foundational layer of the design. |
| 2 | Product Display Card | #fffffd | Elevated clean surface for showcasing product photography and details. |
| 3 | Subtle Cream Background | #fffcda | Lightest background for secondary content sections, providing a slight warmth. |

## Imagery

This site prominently features high-quality, professional product photography. Images are consistently full-bleed or tightly cropped product shots on pure white backgrounds, emphasizing the object without distracting context. There's an absence of lifestyle photography. Visuals are contained within sharp, 0px-radius boundaries. Icons, where present, are monochromatic and outlined, mirroring the minimalist interface style. Imagery primarily serves to showcase products, acting as direct content rather than decorative atmosphere. The density is image-heavy in product grids, with text playing a supporting role.

## Layout

The page primarily utilizes a full-bleed layout, where the Forest Canvas background extends edge-to-edge. Content within sections adheres to implied maximum widths, but the background color often fills the entire viewport width. The hero section is characterized by a full-bleed image or solid background with large, often sculptural, centered text overlay. Sections maintain a consistent vertical rhythm, often separated by the continuous Forest Canvas background. Content arrangement alternates between large centered headlines, and structured grids, such as 3-column product cards. The navigation is a classic top bar, appearing sticky at the top.

## Similar Brands

- **Figma** — Prominent use of a deep, single brand accent color against a largely monochrome UI, with emphasis on clean typography and functional components.
- **Acme Co.** — An industrial and slightly rugged aesthetic, favoring large, impactful typography, and minimal decoration on components.
- **Grovemade** — Focus on high-quality product photography, natural materials and a strong, almost austere, presentation of goods, with limited color palette.
- **Braun (product pages)** — Emphasis on functionality and uncluttered layouts, with precise typography and a restrained color scheme that lets products dominate visually.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-forest-canvas: #1c3c27;
  --color-arctic-mist: #dfe2e5;
  --color-ink: #000000;
  --color-polar-white: #fffffd;
  --color-mellow-yellow: #fffcda;
  --color-link-blue: #447cf0;
  --color-alert-red: #c72a00;
  --font-chalet-londonsixty: 'Chalet-LondonSixty', Georgia;
  --font-supremell-bold: 'SupremeLL-Bold', Roboto Condensed;
  --font-chalet-newyorksixty: 'Chalet-NewYorkSixty', Inter;
  --font-supremell-boldflat: 'SupremeLL-BoldFlat', Roboto Condensed;
  --text-caption: 11px;
  --leading-caption: 1;
  --tracking-caption: 0px;
  --text-body: 15px;
  --leading-body: 1.33;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.4px;
  --text-heading: 34px;
  --leading-heading: 1.26;
  --tracking-heading: -0.68px;
  --text-heading-lg: 52px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -1.04px;
  --text-display: 80px;
  --leading-display: 1;
  --tracking-display: -1.6px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-100: 100px;
  --spacing-200: 200px;
  --radius-buttons: 0px;
  --radius-default: 0px;
  --radius-tagsandbadges: 9999px;
  --surface-forest-canvas-background: #1c3c27;
  --surface-product-display-card: #fffffd;
  --surface-subtle-cream-background: #fffcda;
}
```

### Tailwind v4

```css
@theme {
  --color-forest-canvas: #1c3c27;
  --color-arctic-mist: #dfe2e5;
  --color-ink: #000000;
  --color-polar-white: #fffffd;
  --color-mellow-yellow: #fffcda;
  --color-link-blue: #447cf0;
  --color-alert-red: #c72a00;
  --font-chalet-londonsixty: 'Chalet-LondonSixty', Georgia;
  --font-supremell-bold: 'SupremeLL-Bold', Roboto Condensed;
  --font-chalet-newyorksixty: 'Chalet-NewYorkSixty', Inter;
  --font-supremell-boldflat: 'SupremeLL-BoldFlat', Roboto Condensed;
  --text-caption: 11px;
  --leading-caption: 1;
  --tracking-caption: 0px;
  --text-body: 15px;
  --leading-body: 1.33;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.4px;
  --text-heading: 34px;
  --leading-heading: 1.26;
  --tracking-heading: -0.68px;
  --text-heading-lg: 52px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -1.04px;
  --text-display: 80px;
  --leading-display: 1;
  --tracking-display: -1.6px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-100: 100px;
  --spacing-200: 200px;
  --radius-buttons: 0px;
  --radius-default: 0px;
  --radius-tagsandbadges: 9999px;
  --surface-forest-canvas-background: #1c3c27;
  --surface-product-display-card: #fffffd;
  --surface-subtle-cream-background: #fffcda;
}
```
