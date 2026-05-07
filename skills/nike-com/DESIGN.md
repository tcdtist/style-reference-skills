---
version: alpha
name: "Nike.com"
description: "Nike.com evokes a sharp, performance-driven aesthetic, grounded in a highly contrasting black-and-white palette. The dominant use of stark black typography against pristine white surfaces creates an immediate sense of clarity and authority, amplified by a compact spacing system that keeps elements close-knit. Key elements like primary buttons and navigation items feature generous 30px radii, introducing a subtle softness that contrasts with the otherwise angular, direct visual language, hinting at the athletic curves of their products."
theme: "light"
industry: "ecommerce"
source_url: "https://nike.com"
refero_style_id: "d7ace114-0548-41f5-a2ff-2afbf32be94d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776082048585-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776082048585-thumb.jpg"
extracted_at: "2026-04-13T12:07:48.678Z"
---

# Nike.com — Style Reference

> High-contrast arena with athletic curves.

**Theme:** light

**Industry:** ecommerce

Nike.com evokes a sharp, performance-driven aesthetic, grounded in a highly contrasting black-and-white palette. The dominant use of stark black typography against pristine white surfaces creates an immediate sense of clarity and authority, amplified by a compact spacing system that keeps elements close-knit. Key elements like primary buttons and navigation items feature generous 30px radii, introducing a subtle softness that contrasts with the otherwise angular, direct visual language, hinting at the athletic curves of their products.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pitch Black | #111111 | `--color-pitch-black` | Primary text, headings, outlines, icons, primary brand color. Establishes strong contrast and a sense of luxury. |
| Cloud White | #ffffff | `--color-cloud-white` | Page backgrounds, card surfaces, primary button background, prominent UI elements. Provides a clean, expansive canvas. |
| Alloy Gray | #e5e5e5 | `--color-alloy-gray` | Subtle background for secondary sections and borders. Offers a slight textural shift from pure white. |
| Feather Gray | #f5f5f5 | `--color-feather-gray` | Background for subtle accents like navigation hovers or specific button states. A very light, almost imperceptible shift from white. |
| Steel Gray | #707072 | `--color-steel-gray` | Secondary text, muted links, subtle icons, inactive states. Provides hierarchy without being too light. |
| Pewter Gray | #9e9ea0 | `--color-pewter-gray` | Placeholder text, disabled states, decorative strokes. The lightest functional gray. |
| Ignite Red | #EE0005 | `--color-ignite-red` | Accent for urgent notifications or strong calls to action (though not prominently used in provided data, implied by token `--podium-cds-color-red-500`). |
| Blaze Orange | #FF5000 | `--color-blaze-orange` | Accent for highlighting special offers or secondary calls to action (though not prominently used in provided data, implied by token `--podium-cds-color-orange-400`). |

## Tokens — Typography

### Helvetica Now Text

- **Token:** `--font-helvetica-now-text`
- **Substitute:** Arial, Helvetica, sans-serif
- **Weights:** 400, 500
- **Sizes:** 16px, 20px
- **Line heights:** 1.50, 1.75
- **Letter spacing:** normal
- **Role:** Primary text, body copy, navigation links, button labels. Weight 500 signals medium emphasis for navigation and smaller headings, while 400 is for general body content. This family is the workhorse of the system, maintaining legibility and a contemporary feel across all textual elements.

### Helvetica Now Display

- **Token:** `--font-helvetica-now-display`
- **Substitute:** Arial, Helvetica, sans-serif
- **Weights:** 500
- **Sizes:** 20px, 24px
- **Line heights:** 1.20, 1.50
- **Letter spacing:** normal
- **Role:** Secondary headings and larger button text. Used for smaller display headings, bridging the gap between body text and the largest display font, providing clear hierarchy.

### Nike Futura ND

- **Token:** `--font-nike-futura-nd`
- **Substitute:** Arial, Helvetica, sans-serif
- **Weights:** 500
- **Sizes:** 76px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Hero headlines. This custom geometric sans-serif, with its powerful 76px size, provides a bold, iconic brand statement at grand scale. Its uniqueness drives brand recognition for major statements.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.75 | — | `--text-body-sm` |
| body | 16px | 1.75 | — | `--text-body` |
| subheading | 20px | 1.5 | — | `--text-subheading` |
| heading | 24px | 1.2 | — | `--text-heading` |
| display | 76px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-253 | 253px | `--spacing-253` |
| spacing-308 | 308px | `--spacing-308` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| buttons | 30px |
| default | 8px |
| navItems | 30px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 0px |
| elementGap | 8px |

## Components

### Primary Filled Button

**Role:** Call to Action

Solid white background with Pitch Black (#111111) text and a 1px Pitch Black (#111111) border. The prominent 30px border-radius makes buttons feel distinct and softer than other UI elements. Padding is 6px vertical, 16px horizontal.

### Ghost Button

**Role:** Secondary Action

Transparent background with Pitch Black (#111111) text. No visible border or padding by default. Used for less prominent actions, blending seamlessly with the background.

### Circular Icon Button

**Role:** Navigation/Utility

White background with Pitch Black (#111111) icon/text. Features a 50% border-radius, creating perfect circles. Used for compact actions like search or favorites in the header.

### Feature Card

**Role:** Content Display

Transparent background, no border-radius. Features a large image, a Pitch Black (#111111) heading, and Steel Gray (#707072) body copy, with Ghost Buttons for action. No visible border or shadow, relying on imagery for visual separation.

### Product Tile

**Role:** Product Listing

Cloud White (#ffffff) background with a 1px Alloy Gray (#e5e5e5) border. No border-radius. Displays product images and Pitch Black (#111111) product names, used in structured grids.

## Do's and Don'ts

### Do

- Use Pitch Black (#111111) for all primary text, headings, and outlines to maintain high contrast and sophistication.
- Apply Cloud White (#ffffff) as the primary background for all page sections and card surfaces, ensuring visual spaciousness.
- Ensure primary action buttons feature 30px border-radius with 6px vertical and 16px horizontal padding.
- Implement a compact spacing system using 8px as the primary `elementGap` between UI elements.
- Utilize Nike Futura ND (or Arial as substitute) at 76px size and 1.0 lineHeight for all hero headlines to convey brand power.
- Divide content using subtle background shifts to Alloy Gray (#e5e5e5) for secondary sections instead of heavy borders or shadows.

### Don't

- Avoid using drop shadows or heavy box shadows, as the system relies on background color shifts and borders for depth.
- Do not deviate from the monochrome palette for functional UI elements; save branded colors for marketing accents only.
- Do not use generic system fonts when custom fonts like Helvetica Now Text/Display or Nike Futura ND are specified, as they are crucial for brand identity.
- Disregard the 30px radius for buttons and nav items except for specific utility components like circular buttons.
- Do not introduce large gaps or excessive padding; the design favors a compact, information-dense layout.
- Avoid using multiple bright, saturated colors for primary UI elements; reserve these for specific brand highlights or imagery if necessary.

## Imagery

The visual language is characterized by high-quality product photography, often shot with dramatic lighting against dark, sometimes black, backgrounds for hero sections, and on pristine white or simple colored backgrounds for product listings. When not product-focused, imagery features crisp action shots of athletes. Images are typically contained within rectangular frames with sharp edges or within grid structures, with no noticeable masking or complex overlapping. Icons are monochrome, often Pitch Black (#111111) on white, thin-stroked, and functional.

## Layout

The layout primarily uses a max-width contained grid for most content, though the hero section often leverages full-bleed imagery. The header is sticky and provides a minimal but clear global navigation. Sections alternate between prominent full-width visual statements (like the hero shoe image) and structured content blocks. Content arrangement frequently uses two-column or four-column card grids for features and product listings. Vertical spacing between logical sections appears consistent, creating a rhythmic flow down the page. The overall density is compact, ensuring visual information is readily available without excessive scrolling.

## Similar Brands

- **Adidas** — Both brands in the athletic apparel industry use high-contrast photography of products/athletes against neutral backgrounds, focusing on product dynamism.
- **Apple** — Shares a use of strong black and white contrast, minimal UI elements, high-quality product photography, and a sophisticated, modern typography choice for brand recognition.
- **lululemon** — Similar approach to high-quality product photography and clean, minimal layouts with ample negative space to highlight products.
- **Under Armour** — Focus on performance, often reflected in high-contrast product-centric layouts and bold typography, albeit with a slightly rougher edge than Nike.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pitch-black: #111111;
  --color-cloud-white: #ffffff;
  --color-alloy-gray: #e5e5e5;
  --color-feather-gray: #f5f5f5;
  --color-steel-gray: #707072;
  --color-pewter-gray: #9e9ea0;
  --color-ignite-red: #EE0005;
  --color-blaze-orange: #FF5000;
  --font-helvetica-now-text: 'Helvetica Now Text', Arial, Helvetica, sans-serif;
  --font-helvetica-now-display: 'Helvetica Now Display', Arial, Helvetica, sans-serif;
  --font-nike-futura-nd: 'Nike Futura ND', Arial, Helvetica, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.75;
  --text-body: 16px;
  --leading-body: 1.75;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-display: 76px;
  --leading-display: 1;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-36: 36px;
  --spacing-48: 48px;
  --spacing-253: 253px;
  --spacing-308: 308px;
  --radius-cards: 0px;
  --radius-buttons: 30px;
  --radius-default: 8px;
  --radius-navitems: 30px;
}
```

### Tailwind v4

```css
@theme {
  --color-pitch-black: #111111;
  --color-cloud-white: #ffffff;
  --color-alloy-gray: #e5e5e5;
  --color-feather-gray: #f5f5f5;
  --color-steel-gray: #707072;
  --color-pewter-gray: #9e9ea0;
  --color-ignite-red: #EE0005;
  --color-blaze-orange: #FF5000;
  --font-helvetica-now-text: 'Helvetica Now Text', Arial, Helvetica, sans-serif;
  --font-helvetica-now-display: 'Helvetica Now Display', Arial, Helvetica, sans-serif;
  --font-nike-futura-nd: 'Nike Futura ND', Arial, Helvetica, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.75;
  --text-body: 16px;
  --leading-body: 1.75;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-display: 76px;
  --leading-display: 1;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-36: 36px;
  --spacing-48: 48px;
  --spacing-253: 253px;
  --spacing-308: 308px;
  --radius-cards: 0px;
  --radius-buttons: 30px;
  --radius-default: 8px;
  --radius-navitems: 30px;
}
```
