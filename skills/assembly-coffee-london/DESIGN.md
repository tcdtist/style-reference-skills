---
version: alpha
name: "Assembly Coffee London"
description: "Assembly Coffee London employs a sophisticated, dark-mode retail aesthetic that exudes understated luxury. A dominant charcoal canvas is punctuated by subtle, almost unnoticeable interactions and light typography. The brand expresses itself through refined product presentation and a restrained use of soft, warm accents for badges and subtle highlights rather than prominent branding features. Elements are typically unbordered, relying on subtle background shifts or very slight elevation for depth."
theme: "dark"
industry: "ecommerce"
source_url: "https://assemblycoffee.co.uk"
refero_style_id: "8288950a-2731-44fd-85ef-211aecd8091d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508256415-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508256415-thumb.jpg"
extracted_at: "2026-04-30T00:18:06.743Z"
---

# Assembly Coffee London — Style Reference

> Shadowy Gallery Vignettes

**Theme:** dark

**Industry:** ecommerce

Assembly Coffee London employs a sophisticated, dark-mode retail aesthetic that exudes understated luxury. A dominant charcoal canvas is punctuated by subtle, almost unnoticeable interactions and light typography. The brand expresses itself through refined product presentation and a restrained use of soft, warm accents for badges and subtle highlights rather than prominent branding features. Elements are typically unbordered, relying on subtle background shifts or very slight elevation for depth.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ember | #000000 | `--color-midnight-ember` | Primary text, deep backgrounds, filled action buttons, subtle borders for interactive elements. This deep black creates a stark, elegant contrast |
| Canvas White | #ffffff | `--color-canvas-white` | Primary inverse text, content card backgrounds, input fields, and accents for borders in light contexts |
| Charcoal Smoke | #333333 | `--color-charcoal-smoke` | Card backgrounds, secondary iconography, input placeholder text. A softer dark for surface separation on darker backgrounds |
| Ghost Marble | #f6f7f2 | `--color-ghost-marble` | Light background wash for contrasting sections, button backgrounds in inverted states |
| Greige Outline | #dfdbca | `--color-greige-outline` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Moss Badge | #cadcac | `--color-moss-badge` | Green state accent for badges, validation surfaces, and short status labels. |
| Goldenrod Badge | #faf080 | `--color-goldenrod-badge` | Yellow state accent for badges, validation surfaces, and short status labels. |
| Sunken Gold Highlight | #cfa53b | `--color-sunken-gold-highlight` | Badge text color and decorative highlights, especially in badge contexts. A rich, warm gold; Decorative gradients often paired with product imagery, hinting at warmth and richness. The primary color is a rich gold |

## Tokens — Typography

### GT America Standard

- **Token:** `--font-gt-america-standard`
- **Substitute:** system-ui
- **Weights:** 300, 400, 500, 600
- **Sizes:** 11px, 12px, 13px, 14px, 16px, 18px, 20px, 21px, 24px, 42px
- **Line heights:** 0.75, 1.20, 1.25, 1.40, 1.50, 2.00
- **Letter spacing:** normal
- **Role:** Primary content font for body text, navigation items, buttons, and most headings. Its clean, modern sans-serif nature provides clarity and a subtle utilitarian feel contrasting with the serif details.

### ID00 Serif

- **Token:** `--font-id00-serif`
- **Substitute:** serif
- **Weights:** 300, 400
- **Sizes:** 16px, 18px, 30px, 36px, 42px
- **Line heights:** 1.00, 1.20, 1.25, 1.50
- **Letter spacing:** normal
- **Role:** Signature display font for prominent headings and product titles. Its serif character adds a touch of classic sophistication and artisanal quality, particularly at larger sizes. Weight 300 for headlines implies authority through restraint, not volume.

### Helvetica

- **Token:** `--font-helvetica`
- **Substitute:** system-ui
- **Weights:** 400, 500
- **Sizes:** 11px, 14px
- **Line heights:** 1.50
- **Letter spacing:** normal
- **Role:** Used for small text elements, captions, and secondary information on cards. A highly legible system font for supporting details.

### reviewsio-font

- **Token:** `--font-reviewsio-font`
- **Weights:** 400
- **Sizes:** 15px, 16px, 22px, 24px
- **Line heights:** 1
- **Role:** reviewsio-font — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.5 | 0px | `--text-caption` |
| body | 14px | 1.5 | 0px | `--text-body` |
| heading | 24px | 1.25 | 0px | `--text-heading` |
| heading-lg | 30px | 1 | 0px | `--text-heading-lg` |
| display | 42px | 0.75 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-119 | 119px | `--spacing-119` |
| spacing-160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 9999px |
| default | 4px |
| largeButton | 60px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.05) 0px 2.5px 10px -4px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 0px |
| elementGap | 8px |

## Components

### Text Button - Dark

**Role:** Ghost button for navigation and secondary actions on dark backgrounds.

Transparent background, 'Midnight Ember' (#000000) text (on light backgrounds) or 'Canvas White' (#ffffff) text (on dark backgrounds), no padding, 0px radius, no border.

### Filled Button - Dark

**Role:** Primary call to action button.

Background 'Midnight Ember' (#000000), text 'Canvas White' (#ffffff), 4px radius, 8px vertical padding, 12px horizontal padding. A substantial-looking button for key actions.

### Filled Button - Light

**Role:** Alternative primary call to action button for dark backgrounds.

Background 'Canvas White' (#ffffff), text 'Midnight Ember' (#000000), 4px radius, 8px vertical padding, 12px horizontal padding.

### Product Card - Transparent

**Role:** Gallery-style displays for products with visual emphasis on imagery.

Transparent background, 0px border radius, no padding, no box shadow. Relies on imagery for definition.

### Product Card - Elevated

**Role:** Content card for showcasing product details or features within sections.

Background 'Charcoal Smoke' (#333333), 6px border radius, no padding or shadow.

### Badge - New Release

**Role:** Informational tag for new product introductions.

Background 'Goldenrod Badge' (#faf080), text 'Midnight Ember' (#000000), 4px radius, 8px padding.

### Badge - Elevated Brewing

**Role:** Informational tag for premium product features.

Background 'Moss Badge' (#cadcac), text 'Midnight Ember' (#000000), 4px radius, 8px padding.

### Input Field - Dark Outline

**Role:** Form input field for user entry on dark backgrounds.

Transparent background, text 'Canvas White' (#ffffff), 1px 'Canvas White' (#ffffff) border, 0px radius, 10px vertical padding, 8px left padding, 20px right padding.

## Do's and Don'ts

### Do

- Prioritize 'Midnight Ember' (#000000) as the dominant background or text color to reinforce the dark, sophisticated aesthetic.
- Use 'ID00 Serif' for headings, especially at display sizes, to convey a sense of artisanal quality and gravitas.
- Apply 4px border radius for most interactive elements like buttons and inputs, and 9999px for pill-shaped badges, for a subtle softness.
- Employ 'Greige Outline' (#dfdbca) for hairline borders and subtle dividers, maintaining a minimal presence.
- Utilize 'Goldenrod Badge' (#faf080) and 'Moss Badge' (#cadcac) sparingly for key status indicators or new releases, ensuring they stand out as functional accents.
- Maintain generous section gaps of at least 24px to create a comfortable, uncrowded layout, allowing content to breathe.
- Ensure all body text uses 'GT America Standard' at appropriate weights for maximum legibility on both dark and light surfaces.

### Don't

- Avoid generic system-level button styles; stick to the defined 'Filled Button - Dark' or 'Filled Button - Light' for primary actions.
- Do not introduce new saturated primary colors; brand expression relies on specific accents and gradients, not broad color usage.
- Refrain from using strong box shadows or heavy borders; the design emphasizes subtle surface changes and near-invisible outlines.
- Do not use highly decorative or illustrative imagery; imagery should be product-focused or abstractly minimal.
- Avoid dense arrangement of interactive elements; prioritize comfortable 'elementGap' spacing of 8px.
- Do not deviate from 'ID00 Serif' for product titles and main headings; its unique character is central to the brand's voice.
- Do not use dark backgrounds with light text for entire pages without defining supporting components for inverse states; stick to the dominant dark theme for surface consistency.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Midnight Canvas | #000000 | Base page background, providing a deep, dark foundation. |
| 1 | Charcoal Smoke Card | #333333 | Background for elevated content cards, subtly differentiated from the base canvas. |
| 2 | Greige Highlight | #dfdbca | Background for specific, light-themed sections or product cards where a higher contrast is desired. |
| 3 | Canvas White Panel | #ffffff | Background for pop-ups, modals, or focused content areas requiring maximum contrast with black text. |

## Elevation

- **Card Shadow:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`

## Imagery

This system features a blend of tight product photography and abstract graphic elements. Product images are typically isolated against clean backgrounds (black, white, or light gray) often with minimal staging, focusing intensely on the product itself. The treatment is direct and unfussy, with raw edges and no overlapping. Illustrations are minimalist, often outline-based icons with a moderate stroke weight, and are monochromatic or use single brand accent colors like 'Sunken Gold Highlight'. Imagery serves both decorative atmosphere and product showcase roles, dense in some areas and sparser in others, always maintaining a sophisticated and functional presence.

## Layout

The page primarily uses a full-bleed layout for background elements, but content is often constrained within a max-width container, likely centered. The hero section features full-bleed dark backgrounds with prominent, centered typographic elements and floating product visuals. Sections typically alternate between dark backgrounds and occasionally lighter 'Ghost Marble' washes or 'Greige Highlight' panels, creating a distinct vertical rhythm. Content arrangement frequently follows a simple stack or two-column grid, especially for product listings, with images and text often paired. Navigation is primarily a top sticky bar with subtle text links and a ghost search/cart functionality. The overall density feels comfortable due to consistent section and element spacing.

## Similar Brands

- **A.P.C.** — Shares a sophisticated, often dark-mode aesthetic with minimal branding, emphasizing product purity and subdued elegance.
- **Fellow Products** — Utilizes clean product photography on simple backgrounds and relies on subtle, high-quality typography for branding, similar to Assembly's focus on product essence.
- **Aesop** — Employs an understated visual language with dark palettes, premium typography (often with serif accents), and minimalist layout, creating a luxurious and academic feel.
- **Oatly** — While different in tone, shares the use of distinct, custom typography for brand identity and a strong focus on a core product, using limited color palettes.
- **Tekla Fabrics** — Features a similar blend of stark, product-centric imagery, a preference for deep neutral palettes, and minimal, precise typography for a high-end feel.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ember: #000000;
  --color-canvas-white: #ffffff;
  --color-charcoal-smoke: #333333;
  --color-ghost-marble: #f6f7f2;
  --color-greige-outline: #dfdbca;
  --color-moss-badge: #cadcac;
  --color-goldenrod-badge: #faf080;
  --color-sunken-gold-highlight: #cfa53b;
  --font-gt-america-standard: 'GT America Standard', system-ui;
  --font-id00-serif: 'ID00 Serif', serif;
  --font-helvetica: 'Helvetica', system-ui;
  --font-reviewsio-font: 'reviewsio-font', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: 0px;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: 0px;
  --text-display: 42px;
  --leading-display: 0.75;
  --tracking-display: 0px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-119: 119px;
  --spacing-160: 160px;
  --radius-pill: 9999px;
  --radius-default: 4px;
  --radius-largebutton: 60px;
  --shadow-xl: rgba(0, 0, 0, 0.05) 0px 2.5px 10px -4px;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --surface-midnight-canvas: #000000;
  --surface-charcoal-smoke-card: #333333;
  --surface-greige-highlight: #dfdbca;
  --surface-canvas-white-panel: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ember: #000000;
  --color-canvas-white: #ffffff;
  --color-charcoal-smoke: #333333;
  --color-ghost-marble: #f6f7f2;
  --color-greige-outline: #dfdbca;
  --color-moss-badge: #cadcac;
  --color-goldenrod-badge: #faf080;
  --color-sunken-gold-highlight: #cfa53b;
  --font-gt-america-standard: 'GT America Standard', system-ui;
  --font-id00-serif: 'ID00 Serif', serif;
  --font-helvetica: 'Helvetica', system-ui;
  --font-reviewsio-font: 'reviewsio-font', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: 0px;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: 0px;
  --text-display: 42px;
  --leading-display: 0.75;
  --tracking-display: 0px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-119: 119px;
  --spacing-160: 160px;
  --radius-pill: 9999px;
  --radius-default: 4px;
  --radius-largebutton: 60px;
  --shadow-xl: rgba(0, 0, 0, 0.05) 0px 2.5px 10px -4px;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --surface-midnight-canvas: #000000;
  --surface-charcoal-smoke-card: #333333;
  --surface-greige-highlight: #dfdbca;
  --surface-canvas-white-panel: #ffffff;
}
```
