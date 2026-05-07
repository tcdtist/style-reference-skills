---
version: alpha
name: "Loveseen"
description: "Loveseen's visual style evokes a minimalist fashion-editorial aesthetic. It presents content on a clean, light canvas, leveraging subtle neutral tones for background variation and borders. Typography is sophisticated and generous with letter spacing, creating an airy feel. Components are understated, featuring hairline borders and an absence of strong shadows, emphasizing content over chrome. The overall impression is one of effortless elegance and product-focused presentation."
theme: "light"
industry: "ecommerce"
source_url: "https://loveseen.com"
refero_style_id: "59d76415-95d0-43fe-a698-79147cef9f66"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521385772-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521385772-thumb.jpg"
extracted_at: "2026-04-30T03:56:52.889Z"
---

# Loveseen — Style Reference

> Minimalist Editorial Canvas

**Theme:** light

**Industry:** ecommerce

Loveseen's visual style evokes a minimalist fashion-editorial aesthetic. It presents content on a clean, light canvas, leveraging subtle neutral tones for background variation and borders. Typography is sophisticated and generous with letter spacing, creating an airy feel. Components are understated, featuring hairline borders and an absence of strong shadows, emphasizing content over chrome. The overall impression is one of effortless elegance and product-focused presentation.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #00091b | `--color-midnight-ink` | Primary text, interactive elements (links, buttons) text and borders, outline for ghost buttons. Its near-black depth offers strong contrast and a premium feel |
| Alabaster | #f2eded | `--color-alabaster` | Primary page and hero background |
| Porcelain | #faf6f5 | `--color-porcelain` | Neutral surface background for cards and image containers |
| Blush Sand | #f2e2e0 | `--color-blush-sand` | Secondary background color for subtle section breaks and footer area |

## Tokens — Typography

### BeausiteWeb

- **Token:** `--font-beausiteweb`
- **Substitute:** system-ui
- **Weights:** 400, 500
- **Sizes:** 10px, 12px, 13px, 14px, 16px, 18px
- **Line heights:** 0.92, 1.00, 1.20, 1.43, 1.54, 1.63, 1.67, 2.06, 2.20, 2.31, 2.50
- **Letter spacing:** 0.0220em, 0.0250em, 0.0280em, 0.0330em, 0.0370em, 0.0490em, 0.0500em, 0.0580em, 0.0710em
- **Role:** Primary typeface for all text content including headings, body, navigation, and interactive elements. Its wide range of letter-spacing values enables fine typographic control, emphasizing an airy, premium feel.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Arial, sans-serif
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Fallback font for small functional text, buttons, and icons where high legibility is paramount.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.63 | — | `--text-caption` |
| body-sm | 12px | 1.63 | — | `--text-body-sm` |
| body | 13px | 1.63 | — | `--text-body` |
| body-lg | 14px | 1.63 | — | `--text-body-lg` |
| heading-sm | 16px | 1.63 | — | `--text-heading-sm` |
| heading | 18px | 1.63 | — | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-49 | 49px | `--spacing-49` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-216 | 216px | `--spacing-216` |
| spacing-270 | 270px | `--spacing-270` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 70px |
| cardPadding | 12px |
| elementGap | 15px |

## Components

### Ghost Button

**Role:** Primary interactive element for calls to action.

Transparent background, Midnight Ink (#00091b) text, 1px Midnight Ink (#00091b) border on all sides. No border radius. Padding: 12px vertical, 12px horizontal for smaller instances; 30px vertical, 30px horizontal for larger, more prominent actions.

### Navigation Link

**Role:** Top-level navigation and secondary links.

Midnight Ink (#00091b) text, BeausiteWeb font at various sizes, usually 12-14px. No explicit background or border. Generous letter-spacing. Inherits page background.

### Input Field

**Role:** Text input areas.

Transparent background, Midnight Ink (#00091b) text. Features a 1px Midnight Ink (#00091b) border on all sides. No border radius. Left padding: 21px for content. Text color can be #00091b.

### Follow CTA Block

**Role:** Social media call to action.

Features a light border in Midnight Ink (#00091b) with generous internal padding. Text is Midnight Ink (#00091b), likely with increased letter spacing. Appears on Blush Sand (#f2e2e0) background.

### Product Image Card

**Role:** Displaying product images or user-generated content.

No explicit border or shadow, relies on surrounding negative space. Background is Porcelain (#faf6f5). Appears as a simple square block containing imagery, tightly cropped without additional padding.

## Do's and Don'ts

### Do

- Use Alabaster (#f2eded) as the default background for all primary page content sections.
- Apply Midnight Ink (#00091b) for all primary body text, headlines, and interactive elements to maintain high contrast and sophistication.
- Ensure all buttons and input fields feature sharp, 0px border radii.
- Implement consistent 1px borders in Midnight Ink (#00091b) for ghost buttons and input fields to define interactive areas subtly.
- Utilize the BeausiteWeb font family across all typographic elements, leveraging its varied letter-spacing for an airy, elegant presentation.
- Introduce Blush Sand (#f2e2e0) as a background color to delineate distinct content sections or footers with a soft visual break.
- Maintain a spacious density; prioritize ample whitespace, with element gaps around 15px and vertical section gaps at 70px.

### Don't

- Avoid applying any border-radius greater than 0px to interactive components like buttons or input fields.
- Do not use strong shadows (elevation) on any UI elements; rely on subtle background color shifts or hairline borders for visual separation.
- Refrain from using highly saturated or bright colors beyond the core brand palette; color should be spare and functional.
- Do not use generic system fonts for prominent display text or navigation; BeausiteWeb is critical to the brand's aesthetic.
- Avoid decorative gradients; stick to solid colors for backgrounds and component fills.
- Do not clutter layouts; maintain a disciplined spaciousness and minimal component density.
- Do not use distinct filled buttons for primary actions; prefer the ghost button style with Midnight Ink borders and text.

## Imagery

This site features high-key, product-focused photography and lifestyle imagery, often tightly cropped to focus on the face or eyes. Images are full-bleed or presented as isolated, square, unmasked elements on clean backgrounds. The photography is vibrant and high-contrast, showcasing product usage directly rather than conceptual scenes. Icons are minimal, utilizing outlined styles with light stroke weights and predominantly Midnight Ink (#00091b) color. Imagery serves both decorative atmosphere in hero sections and explanatory/social proof roles within content blocks.

## Layout

The page primarily utilizes a full-bleed layout for hero sections, transitioning to a contained, centered model for body content. The hero typically features large, dynamic imagery often split or overlaid with minimal text and ghost buttons. Sections are defined by varying background colors (Alabaster, Blush Sand), creating a subtle visual rhythm without hard dividers. Content is arranged in flexible patterns, including centered stacks for calls to action and multi-column grids for featuring images or testimonials. Navigation is a persistent, minimal top bar with left-aligned brand logo and right-aligned links.

## Similar Brands

- **Glossier** — Similar focus on minimalist design, clean typography, and product-forward photography on light backgrounds.
- **Away Travel** — Employs an elegant, spacious layout with a premium feel, using limited color palettes and subtle surface changes.
- **Everlane** — Characterized by its stark, editorial aesthetic, strong typography, and emphasis on product visuals over heavy UI decoration.
- **Aesop** — Uses a restrained color palette, clean typography, and a strong emphasis on content, often with a spacious, almost architectural layout.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #00091b;
  --color-alabaster: #f2eded;
  --color-porcelain: #faf6f5;
  --color-blush-sand: #f2e2e0;
  --font-beausiteweb: 'BeausiteWeb', system-ui;
  --font-arial: 'Arial', Arial, sans-serif;
  --text-caption: 10px;
  --leading-caption: 1.63;
  --text-body-sm: 12px;
  --leading-body-sm: 1.63;
  --text-body: 13px;
  --leading-body: 1.63;
  --text-body-lg: 14px;
  --leading-body-lg: 1.63;
  --text-heading-sm: 16px;
  --leading-heading-sm: 1.63;
  --text-heading: 18px;
  --leading-heading: 1.63;
  --spacing-4: 4px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-49: 49px;
  --spacing-50: 50px;
  --spacing-65: 65px;
  --spacing-70: 70px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-216: 216px;
  --spacing-270: 270px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #00091b;
  --color-alabaster: #f2eded;
  --color-porcelain: #faf6f5;
  --color-blush-sand: #f2e2e0;
  --font-beausiteweb: 'BeausiteWeb', system-ui;
  --font-arial: 'Arial', Arial, sans-serif;
  --text-caption: 10px;
  --leading-caption: 1.63;
  --text-body-sm: 12px;
  --leading-body-sm: 1.63;
  --text-body: 13px;
  --leading-body: 1.63;
  --text-body-lg: 14px;
  --leading-body-lg: 1.63;
  --text-heading-sm: 16px;
  --leading-heading-sm: 1.63;
  --text-heading: 18px;
  --leading-heading: 1.63;
  --spacing-4: 4px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-49: 49px;
  --spacing-50: 50px;
  --spacing-65: 65px;
  --spacing-70: 70px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-216: 216px;
  --spacing-270: 270px;
  --radius-default: 0px;
}
```
