---
version: alpha
name: "Ashleyandco"
description: "Ashleyandco presents a serene and understated aesthetic, rooted in subtle monochromatic branding. The interface uses generous white space and clean typography, establishing an atmosphere of calm and elegance. Components are defined by their soft ghost states and minimal borders, often blending seamlessly into surfaces, with primary actions expressed through subtle fill and text color shifts. The overall impression is one of quiet luxury, allowing content to take precedence."
theme: "light"
industry: "ecommerce"
source_url: "https://ashleyandco.co"
refero_style_id: "645d7583-8391-455b-83d2-c95fb7fe91dc"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521069208-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521069208-thumb.jpg"
extracted_at: "2026-04-30T03:51:29.691Z"
---

# Ashleyandco — Style Reference

> Warm gray minimalism on unbleached paper.

**Theme:** light

**Industry:** ecommerce

Ashleyandco presents a serene and understated aesthetic, rooted in subtle monochromatic branding. The interface uses generous white space and clean typography, establishing an atmosphere of calm and elegance. Components are defined by their soft ghost states and minimal borders, often blending seamlessly into surfaces, with primary actions expressed through subtle fill and text color shifts. The overall impression is one of quiet luxury, allowing content to take precedence.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas | #f6f3f0 | `--color-canvas` | Page backgrounds, large content sections, subtle background wash for hero areas |
| Ink | #3c3c3c | `--color-ink` | Primary text, strong borders, key structural icons, active navigation links. This deep charcoal provides contrast without harshness |
| Onyx | #000000 | `--color-onyx` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Mist | #dedfdb | `--color-mist` | Fine dividers, subtle borders for cards and inputs, delineating sections with minimal visual weight |
| Porcelain | #ffffff | `--color-porcelain` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Ash | #434343 | `--color-ash` | Background for primary buttons, creating a muted call to action against lighter surfaces |
| Stone | #939393 | `--color-stone` | Muted secondary text, inactive links, subtle helper text, and secondary borders |

## Tokens — Typography

### Neue Haas Grotesk Text

- **Token:** `--font-neue-haas-grotesk-text`
- **Substitute:** Helvetica Neue, Arial
- **Weights:** 400, 500
- **Sizes:** 11px, 12px, 18px, 24px
- **Line heights:** 1.10, 1.20
- **Letter spacing:** -0.0050em at 24px and 18px, 0.0230em at 12px and 11px
- **Role:** Primary UI font, used for body text, navigation, buttons, and most interactive elements. Its neutral character supports the understated aesthetic. Weights 400 and 500 maintain a clear hierarchy.

### Martina Plant

- **Token:** `--font-martina-plant`
- **Weights:** 400, 500
- **Sizes:** 20px, 24px, 42px
- **Line heights:** 0.72, 1.10
- **Letter spacing:** -0.0050em at 42px and 24px, 0.0140em at 20px
- **Role:** Decorative display font for headlines and evocative marketing copy. Its distinct character adds a touch of classic sophistication to key textual elements.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.1 | 0.253px | `--text-caption` |
| body | 18px | 1.1 | -0.09px | `--text-body` |
| subheading | 20px | 1.1 | 0.28px | `--text-subheading` |
| heading | 24px | 1.1 | -0.12px | `--text-heading` |
| display | 42px | 0.72 | -0.21px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-278 | 278px | `--spacing-278` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 80px |
| cardPadding | 20px |
| elementGap | 15px |

## Components

### Ghost Button - Light Text

**Role:** Default interactive element, often for secondary actions or navigation.

Transparent background, #000000 text color, #000000 border color, 0px border-radius, 0px padding. Uses Neue Haas Grotesk Text 400.

### Ghost Button - Muted Text

**Role:** Subtle interactive elements, often found in footers or less prominent areas.

Transparent background, #3c3c3c text color, #3c3c3c border color, 0px border-radius, 0px padding. Uses Neue Haas Grotesk Text 400.

### Ghost Button - Hero White Text

**Role:** Interactive elements against dark or image backgrounds.

Transparent background, #ffffff text color, #ffffff border color, 0px border-radius, 0px padding. Uses Neue Haas Grotesk Text 400.

### Primary Filled Button

**Role:** Key call-to-action button for initiating primary actions.

#434343 background, #f6f3f0 text color, #434343 border color, 0px border-radius. Padding 8px vertical, 20px horizontal. Uses Neue Haas Grotesk Text 400.

### Untouched Card/Media Holder

**Role:** Container for images, product listings, or informational content.

Transparent background, no specific shadow, 0px border-radius, 0px padding. Content within defines its presentation.

### Modal Overlay Card

**Role:** Dialogs and pop-ups that require a distinct surface.

Solid #f6f3f0 background, 10px general border-radius. Padding for internal content is often dynamically defined.

## Do's and Don'ts

### Do

- Prioritize Neue Haas Grotesk Text 400 for all body copy and most UI elements, reserving Martina Plant for headlines to maintain visual hierarchy.
- Use #f6f3f0 (Canvas) as the primary background color for most page sections, ensuring a consistent light aesthetic.
- Employ #3c3c3c (Ink) for primary text and strong outline borders to define interactive areas without heavy fills.
- Define interactive states with subtle border changes using #000000 (Onyx) for active ghost buttons.
- Apply 0px border-radius to most buttons and interactive elements for a crisp, rectangular aesthetic.
- Maintain a clear visual hierarchy by utilizing the 80px section gap for content block separation.
- Use #434343 (Ash) for primary button backgrounds with #f6f3f0 (Canvas) text, creating a soft but distinct call to action.

### Don't

- Avoid using highly saturated or vibrant colors; stick to the established achromatic and muted palette.
- Do not introduce significant box-shadows or elevation effects; the design relies on flat surfaces and subtle borders.
- Do not use generic system fonts; always specify Neue Haas Grotesk Text or Martina Plant.
- Avoid unnecessary decorative elements or heavy gradients; minimalism is key to the brand's identity.
- Do not deviate from the general 0px border-radius for interactive components unless a specific, subtle 10px radius is explicitly required for a card or modal.
- Do not vary line-height significantly from the type scale values; maintain the controlled density.
- Avoid aggressive letter-spacing for body text; apply tracking judiciously as specified by the type profiles.

## Imagery

This site predominantly uses clean, product-focused photography and minimal graphic elements. Photography features tightly cropped products on soft, often desaturated backgrounds, with occasional lifestyle shots that maintain a muted, high-key aesthetic. Images are typically contained within rectangular frames, with sharp edges and no overlap. Icons are minimal, outlined, and monochromatic, with a fine stroke weight. The imagery serves to showcase products and create an atmospheric, curated feel rather than providing dense informational content.

## Layout

The page layout utilizes a contained maximum width for primary content, centered on a light canvas. The hero section often features full-bleed atmospheric photography with text overlaid, immediately establishing a refined tone. Sections are demarcated by consistent vertical spacing (80px), creating a comfortable rhythm. Content typically alternates between text-dominant blocks, two-column text-and-image arrangements, and multi-column product grids. Navigation is a top-bar sticky header, minimal and unobtrusive. The density is spacious, providing ample breathing room around elements.

## Similar Brands

- **Aesop** — Shares a similar minimal, monochromatic aesthetic with a focus on product photography and elegant typography.
- **Frama** — Exhibits analogous use of understated color palettes, high-quality product imagery, and classic serif/sans-serif typography pairing.
- **Byredo** — Features a comparable sense of luxury and calm, achieved through clean layouts, subtle color use, and sophisticated typography.
- **Jenni Kayne** — Employs an elevated, minimalist approach to e-commerce, using abundant white space and natural, soft tones.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas: #f6f3f0;
  --color-ink: #3c3c3c;
  --color-onyx: #000000;
  --color-mist: #dedfdb;
  --color-porcelain: #ffffff;
  --color-ash: #434343;
  --color-stone: #939393;
  --font-neue-haas-grotesk-text: 'Neue Haas Grotesk Text', Helvetica Neue, Arial;
  --font-martina-plant: 'Martina Plant', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.1;
  --tracking-caption: 0.253px;
  --text-body: 18px;
  --leading-body: 1.1;
  --tracking-body: -0.09px;
  --text-subheading: 20px;
  --leading-subheading: 1.1;
  --tracking-subheading: 0.28px;
  --text-heading: 24px;
  --leading-heading: 1.1;
  --tracking-heading: -0.12px;
  --text-display: 42px;
  --leading-display: 0.72;
  --tracking-display: -0.21px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-278: 278px;
  --radius-default: 10px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas: #f6f3f0;
  --color-ink: #3c3c3c;
  --color-onyx: #000000;
  --color-mist: #dedfdb;
  --color-porcelain: #ffffff;
  --color-ash: #434343;
  --color-stone: #939393;
  --font-neue-haas-grotesk-text: 'Neue Haas Grotesk Text', Helvetica Neue, Arial;
  --font-martina-plant: 'Martina Plant', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.1;
  --tracking-caption: 0.253px;
  --text-body: 18px;
  --leading-body: 1.1;
  --tracking-body: -0.09px;
  --text-subheading: 20px;
  --leading-subheading: 1.1;
  --tracking-subheading: 0.28px;
  --text-heading: 24px;
  --leading-heading: 1.1;
  --tracking-heading: -0.12px;
  --text-display: 42px;
  --leading-display: 0.72;
  --tracking-display: -0.21px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-278: 278px;
  --radius-default: 10px;
}
```
