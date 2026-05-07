---
version: alpha
name: "Touchy Coffee"
description: "Touchy Coffee's design system evokes the feeling of a friendly, DIY publication with a strong personality. It uses a limited, somewhat desaturated color palette with a vivid accent program and a striking, custom logotype that's soft and rounded. The layout is structured but playful, featuring hand-drawn elements and a slightly retro, analog feel. Typography relies on a monospaced sans-serif for high legibility and a distinct voice."
theme: "light"
industry: "ecommerce"
source_url: "https://touchycoffee.com"
refero_style_id: "6da76890-6e04-452a-834d-ff019e232c2b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508986091-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508986091-thumb.jpg"
extracted_at: "2026-04-30T00:30:12.374Z"
---

# Touchy Coffee — Style Reference

> whimsical indie zine

**Theme:** light

**Industry:** ecommerce

Touchy Coffee's design system evokes the feeling of a friendly, DIY publication with a strong personality. It uses a limited, somewhat desaturated color palette with a vivid accent program and a striking, custom logotype that's soft and rounded. The layout is structured but playful, featuring hand-drawn elements and a slightly retro, analog feel. Typography relies on a monospaced sans-serif for high legibility and a distinct voice.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Burnt Sienna | #9f4920 | `--color-burnt-sienna` | Brand accent in text, borders, and decorative elements — adds warmth and a handcrafted touch |
| Forest Green | #5b9133 | `--color-forest-green` | Green accent for outlined action borders, linked labels, and lightweight interactive emphasis |
| Periwinkle Mist | #a697c6 | `--color-periwinkle-mist` | Violet outline accent for tags, dividers, and focused UI edges |
| Graphite | #000000 | `--color-graphite` | Primary text, icon fill, and strong borders. Provides high contrast against lighter backgrounds |
| Canvas White | #ffffff | `--color-canvas-white` | Card backgrounds, secondary text, and borders against darker surfaces. Functions as a clean base |
| Muted Sage | #788c8c | `--color-muted-sage` | Dominant page background, secondary text, and subtle borders — establishes the overall calm, earthy tone |

## Tokens — Typography

### Apercu Mono

- **Token:** `--font-apercu-mono`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 20px, 24px, 50px
- **Line heights:** 1.20, 1.50
- **Letter spacing:** normal
- **Role:** Primary UI text for body copy, labels, links, and various component texts. Its monospaced nature delivers a retro, mechanical feel that contrasts with the organic brandmark.

### Apercu Mono Bold

- **Token:** `--font-apercu-mono-bold`
- **Substitute:** Space Mono Bold
- **Weights:** 700
- **Sizes:** 20px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Used for emphasized text, input labels, and interactive button elements to provide hierarchy within the monospaced aesthetic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 20px | 1.2 | — | `--text-body` |
| subheading | 24px | 1.5 | — | `--text-subheading` |
| heading | 50px | 1.2 | — | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 20px |
| other | 100px |
| buttons | 100px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 80px |
| cardPadding | 10px |
| elementGap | 20px |

## Components

### Ghost Header Button

**Role:** Navigation and utility actions

Text-only button for navigation, using Apercu Mono with Muted Sage for text and border. No background, 0px padding and radius emphasizes its ghost state. Example: 'H O M E'.

### Filled Primary Button

**Role:** Key interactions and calls to action

Solid Graphite background with Canvas White text, featuring a 100px border-radius. Uses Apercu Mono Bold 700 at 20px, with 10px vertical and 20px horizontal padding. Example: 'ADD'.

### Filled Forest Green Button

**Role:** Secondary calls to action or context-specific actions

Solid Forest Green background with Canvas White text, 100px border-radius. Uses Apercu Mono Bold 700 at 20px, with 15px vertical and 20px horizontal padding.

### Product Card

**Role:** Displaying individual product items

Canvas White background with 20px border-radius, 10px padding on all sides. No shadow, maintaining a flat aesthetic. Houses product name, image, and price/quantity controls.

### Promotional Modal

**Role:** Temporary messages or offers

Canvas White background with 20px border-radius, no shadow. Contains text styled with Graphite using Apercu Mono, often paired with a Ghost Header Button for closing.

### Text Input (with border)

**Role:** Forms and data entry

Transparent background with a Muted Sage border. Text uses Apercu Mono at 20px with Muted Sage color. Example: 'YOUR EMAIL'.

### Decorative Slider Placeholder

**Role:** Visual indicator of horizontal scrollable content

Consists of a Muted Sage pipe element, often with a finger icon, followed by a Periwinkle Mist filled gradient track. Purely visual, no direct interactivity.

### Review Card

**Role:** Displaying customer testimonials

Distinct background colors (Forest Green, Burnt Sienna) with 20px border-radius. Inner padding is 10px. Features rating stars and body text in Apercu Mono.

### Newsletter Card

**Role:** Subscription call to action

Muted violet background with 20px border-radius and 10px padding on all sides. Contains a text input and a small 'X' close button.

## Do's and Don'ts

### Do

- Prioritize Apercu Mono for almost all text elements, relying on weight 400 for body and weight 700 for emphasis, always with 'normal' letter spacing.
- Utilize Muted Sage (#788c8c) as the primary canvas color for large background areas, establishing a subdued base.
- Apply 100px border-radius to all interactive buttons and small tags for a soft, friendly pill shape.
- Use 20px border-radius on cards, images, and larger container elements to maintain consistent rounded corners.
- Employ Graphite (#000000) for all primary body text and strong outlines against lighter backgrounds.
- Incorporate Burnt Sienna (#9f4920) or Forest Green (#5b9133) as vivid accent colors for decorative details, specific statuses, or when a strong, yet warm, visual pop is needed.
- Maintain a clear visual hierarchy by limiting shadows and keeping component surfaces flat or outlined.

### Don't

- Avoid using highly saturated, primary colors outside of the defined accent palette (Burnt Sienna, Forest Green, Periwinkle Mist).
- Do not introduce sharp corners or square elements for interactive components or cards; leverage the curved radii consistently.
- Refrain from using complex gradients or drop shadows, as the system emphasizes flat surfaces and outlines.
- Do not deviate from Apercu Mono; introducing other typefaces would break the distinctive brand voice.
- Avoid dense, compact layouts. Strive for comfortable density with 20px element spacing and 80px section gaps.
- Don't add custom padding to buttons; adhere to the 10px/20px or 15px/20px padding specifications for consistent sizing.
- Never use blue for links outside of the Periwinkle Mist accent; all link text should be Graphite or White as context dictates.

## Imagery

The site uses a mix of product photography (muted, neutral tones for coffee bags that serve as a canvas for colorful product names), abstract graphics (finger pointer icon), and line-art elements. Photography is typically studio-style, product-focused. Icons are minimal, outlined, and monochromatic, often using Muted Sage. Imagery serves primarily to showcase products or add a touch of whimsy and brand personality rather than being purely decorative.

## Layout

The page uses a maximum-width contained layout, with content centered. The hero section features a large, custom logotype centered over a solid Muted Sage background with minimal overlaying text. Sections alternate between Muted Sage, Periwinkle Mist, and even an all-white background. Content arrangement often utilizes a grid for product display (e.g., 3-column) or a two-column side-by-side layout for text blocks and a central image. Vertical spacing between sections is generous, using 80px gaps. Navigation is minimal, with 'HOME' and 'SHOP' as ghost buttons positioned at the top corners.

## Similar Brands

- **Oatly** — Shares a playful, slightly quirky brand voice with custom, organic typography and a limited but distinct color palette on simple product packaging.
- **Ghia** — Similar use of expressive, custom typography as a core brand element, paired with a sophisticated yet approachable color palette and clean, modern layout.
- **Are.na** — Employs heavy use of monospaced typography, minimal UI, and a focus on content within distinct, framed containers, similar to the card-based layout.
- **Baggu** — Features a direct, unpretentious e-commerce experience with bold, clear typography and a playful approach to color and custom graphic elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-burnt-sienna: #9f4920;
  --color-forest-green: #5b9133;
  --color-periwinkle-mist: #a697c6;
  --color-graphite: #000000;
  --color-canvas-white: #ffffff;
  --color-muted-sage: #788c8c;
  --font-apercu-mono: 'Apercu Mono', Space Mono;
  --font-apercu-mono-bold: 'Apercu Mono Bold', Space Mono Bold;
  --text-body: 20px;
  --leading-body: 1.2;
  --text-subheading: 24px;
  --leading-subheading: 1.5;
  --text-heading: 50px;
  --leading-heading: 1.2;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-140: 140px;
  --spacing-150: 150px;
  --spacing-160: 160px;
  --radius-cards: 20px;
  --radius-other: 100px;
  --radius-buttons: 100px;
}
```

### Tailwind v4

```css
@theme {
  --color-burnt-sienna: #9f4920;
  --color-forest-green: #5b9133;
  --color-periwinkle-mist: #a697c6;
  --color-graphite: #000000;
  --color-canvas-white: #ffffff;
  --color-muted-sage: #788c8c;
  --font-apercu-mono: 'Apercu Mono', Space Mono;
  --font-apercu-mono-bold: 'Apercu Mono Bold', Space Mono Bold;
  --text-body: 20px;
  --leading-body: 1.2;
  --text-subheading: 24px;
  --leading-subheading: 1.5;
  --text-heading: 50px;
  --leading-heading: 1.2;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-140: 140px;
  --spacing-150: 150px;
  --spacing-160: 160px;
  --radius-cards: 20px;
  --radius-other: 100px;
  --radius-buttons: 100px;
}
```
