---
version: alpha
name: "Mr. Pops"
description: "Mr. Pops projects a playful, premium, indulgent atmosphere through its high-contrast aesthetic. It pairs bold, whimsical typography with a dominant, vivid red accent, creating a sense of energetic fun. Surfaces are generally clean and light, ensuring the vibrant brand color truly pops. The design prioritizes visual impact and direct engagement rather than complex UI elements or subtle hierarchies."
theme: "light"
industry: "ecommerce"
source_url: "https://mrpops.ua/en"
refero_style_id: "ab7996ed-e0ed-40a0-81a5-d37f19ef35b0"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512210174-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512210174-thumb.jpg"
extracted_at: "2026-04-30T01:23:51.869Z"
---

# Mr. Pops — Style Reference

> Playful Indulgence on a White Canvas

**Theme:** light

**Industry:** ecommerce

Mr. Pops projects a playful, premium, indulgent atmosphere through its high-contrast aesthetic. It pairs bold, whimsical typography with a dominant, vivid red accent, creating a sense of energetic fun. Surfaces are generally clean and light, ensuring the vibrant brand color truly pops. The design prioritizes visual impact and direct engagement rather than complex UI elements or subtle hierarchies.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Snow | #ffffff | `--color-snow` | Page backgrounds, card surfaces, ghost button text and borders, outline element strokes |
| Licorice | #000000 | `--color-licorice` | Primary body text, headers, filled button text, outlined button borders |
| Candy Apple | #b00e2f | `--color-candy-apple` | Primary action backgrounds, brand accents, prominent hero elements, active states — signals vibrancy and direct action |
| Nude Peach | #fee5ca | `--color-nude-peach` | Secondary surface backgrounds, subtle hover states, ghost button backgrounds – a warm, light neutral |

## Tokens — Typography

### Cervo

- **Token:** `--font-cervo`
- **Substitute:** Georgia
- **Weights:** 400, 500
- **Sizes:** 16px, 18px, 22px, 42px, 64px, 72px, 144px
- **Line heights:** 0.75, 0.90, 1.00
- **Letter spacing:** 0.0500em
- **Role:** Primary headings and display text. Its high letter-spacing and varied weights give titles a distinctive, impactful presence.

### HelveticaNeueCyr

- **Token:** `--font-helveticaneuecyr`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 12px, 15px, 16px, 18px
- **Line heights:** 1.15, 1.20, 1.30, 1.40
- **Letter spacing:** normal
- **Role:** Body text, links, smaller functional text, input text. Provides clarity and legibility against the decorative headings.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.15 | — | `--text-caption` |
| body-sm | 15px | 1.2 | — | `--text-body-sm` |
| subheading | 18px | 1.4 | 0.05px | `--text-subheading` |
| heading-sm | 22px | 1 | 0.05px | `--text-heading-sm` |
| heading | 42px | 0.9 | 0.05px | `--text-heading` |
| heading-lg | 64px | 0.75 | 0.05px | `--text-heading-lg` |
| display | 144px | 0.75 | 0.05px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-133 | 133px | `--spacing-133` |
| spacing-134 | 134px | `--spacing-134` |
| spacing-160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 50% |
| default | 40px |
| circularElements | 300px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 30px |
| elementGap | 10px |

## Components

### Primary Filled Button

**Role:** Call to action button for core tasks

Background: Candy Apple (#b00e2f). Text: Licorice (#000000). Border Radius: 50% for a pill shape. Padding not consistently defined from data, infer 16px vertical, 30px horizontal.

### Secondary Ghost Button

**Role:** Alternative actions or navigation elements

Background: transparent. Text: Snow (#ffffff) or Licorice (#000000). Border: 1px solid matching text color (Snow or Licorice). No border radius, sharp corners. Padding not consistently defined, infer 16px bottom, 30px horizontal for larger text elements.

### Navigation Menu Button

**Role:** Toggle for site navigation

Background: transparent. Text: Snow (#ffffff). No border. No border radius. Top and bottom padding are not consistently defined, refer to global padding for element-gap.

### Form Input Field

**Role:** User input fields for forms

Background: transparent. Text: Snow (#ffffff). Border: 1px solid Snow (#ffffff) at the bottom. No border radius. Padding: 10px top, 30px right.

### Circular Callout Button

**Role:** Small interactive circular elements, often for quantity or selection

Background: Nude Peach (#fee5ca). Text: Licorice (#000000). Border Radius: 50%. Size is small, typically 40x40px.

## Do's and Don'ts

### Do

- Use Candy Apple (#b00e2f) strictly for primary actions, critical highlights, and brand accents to maintain its impact.
- Pair Cervo for all headings with HelveticaNeueCyr for body text to leverage the contrast between decorative and legible typography.
- Implement letter-spacing of 0.0500em for all Cervo text sizes to maintain its distinct character.
- Apply 50% border-radius to all primary action buttons for a consistent pill shape.
- Maintain a spacious density with at least 40px section gaps and 10px element gaps to allow visual breathing room.
- Prioritize high-contrast text-on-background combinations, using Licorice (#000000) on Snow (#ffffff) or Nude Peach (#fee5ca), and Snow on Candy Apple (#b00e2f).

### Don't

- Do not introduce new primary brand colors; restrict the palette to Snow, Licorice, Candy Apple, and Nude Peach.
- Avoid using Cervo for body text or any functional text, as its decorative nature reduces readability in smaller sizes.
- Do not use subtle background gradients or complex shadows; aim for flat, defined surfaces.
- Do not apply padding or margins that significantly break the established 10px base element gap, 30px card padding, or 40px section gap.
- Avoid mixed-case headings when using Cervo; stick to the dominant all-caps or title-case style for visual consistency.
- Do not use rectangular buttons with sharp corners for primary actions; reserve that for ghost/secondary buttons if necessary.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas | #ffffff | Primary page background |
| 1 | Card Base | #fee5ca | Secondary background for cards, slight elevation, or subtle segmentation |
| 2 | Accent Fill | #b00e2f | Dominant interactive elements and hero backgrounds |

## Imagery

The site uses photography as its primary imagery. These are high-key, likely full-bleed product shots showing ice creams, often held by people, emphasizing indulgence and the product experience. They are not contained by frames or masks, blending into the background or acting as the dominant visual. The treatment is vibrant and rich, focusing on the product's appealing textures and colors.

## Layout

The page structure is full-bleed, with content dynamically layered over large hero images. Sections typically stack vertically, maintaining consistent vertical spacing derived from sectionGap. Content within sections varies; the hero presents large, centered, and left-aligned display typography over an image. Other sections feature combinations of headings with short descriptive text. Layout density is spacious, allowing images and large text to command attention. Navigation is a minimal top-right bar with icon-only and ghost buttons.

## Similar Brands

- **Ben & Jerry's** — Uses vivid colors and playful typography with a focus on indulgent food products.
- **Oatly** — Employs bold, quirky typography for headlines and a strong, singular brand color against mostly neutral backdrops.
- **Glossier** — Features a strong, specific brand color (pink) used as a primary accent against clean, minimalist surfaces, alongside large photographic elements.
- **Magnum Ice Cream** — Focuses on high-quality, appealing product photography in hero sections to evoke desire for an indulgent product.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-snow: #ffffff;
  --color-licorice: #000000;
  --color-candy-apple: #b00e2f;
  --color-nude-peach: #fee5ca;
  --font-cervo: 'Cervo', Georgia;
  --font-helveticaneuecyr: 'HelveticaNeueCyr', Arial;
  --text-caption: 12px;
  --leading-caption: 1.15;
  --text-body-sm: 15px;
  --leading-body-sm: 1.2;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.05px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1;
  --tracking-heading-sm: 0.05px;
  --text-heading: 42px;
  --leading-heading: 0.9;
  --tracking-heading: 0.05px;
  --text-heading-lg: 64px;
  --leading-heading-lg: 0.75;
  --tracking-heading-lg: 0.05px;
  --text-display: 144px;
  --leading-display: 0.75;
  --tracking-display: 0.05px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-46: 46px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-120: 120px;
  --spacing-133: 133px;
  --spacing-134: 134px;
  --spacing-160: 160px;
  --radius-buttons: 50%;
  --radius-default: 40px;
  --radius-circularelements: 300px;
  --surface-canvas: #ffffff;
  --surface-card-base: #fee5ca;
  --surface-accent-fill: #b00e2f;
}
```

### Tailwind v4

```css
@theme {
  --color-snow: #ffffff;
  --color-licorice: #000000;
  --color-candy-apple: #b00e2f;
  --color-nude-peach: #fee5ca;
  --font-cervo: 'Cervo', Georgia;
  --font-helveticaneuecyr: 'HelveticaNeueCyr', Arial;
  --text-caption: 12px;
  --leading-caption: 1.15;
  --text-body-sm: 15px;
  --leading-body-sm: 1.2;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.05px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1;
  --tracking-heading-sm: 0.05px;
  --text-heading: 42px;
  --leading-heading: 0.9;
  --tracking-heading: 0.05px;
  --text-heading-lg: 64px;
  --leading-heading-lg: 0.75;
  --tracking-heading-lg: 0.05px;
  --text-display: 144px;
  --leading-display: 0.75;
  --tracking-display: 0.05px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-46: 46px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-120: 120px;
  --spacing-133: 133px;
  --spacing-134: 134px;
  --spacing-160: 160px;
  --radius-buttons: 50%;
  --radius-default: 40px;
  --radius-circularelements: 300px;
  --surface-canvas: #ffffff;
  --surface-card-base: #fee5ca;
  --surface-accent-fill: #b00e2f;
}
```
