---
version: alpha
name: "Redis Agency"
description: "Redis Agency employs a dramatic, high-contrast dark-mode aesthetic, creating a sense of luxury and seriousness. It pairs large, elegant serif headlines with a compact sans-serif for body text, establishing clear typographic hierarchy. The overall feel is spacious, with generous negative space and minimal, highly rounded components that appear almost sculptural against the black canvas. Color is strictly controlled, centered around a stark black and white palette, accented only by brand-specific imagery or internal details that appear as subtle splashes of vibrancy."
theme: "dark"
industry: "agency"
source_url: "https://www.redis.agency"
refero_style_id: "4406799b-1586-4d84-aac9-e6acdee0f679"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512341879-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512341879-thumb.jpg"
extracted_at: "2026-04-30T01:26:00.081Z"
---

# Redis Agency — Style Reference

> Dramatic Midnight Sculpture

**Theme:** dark

**Industry:** agency

Redis Agency employs a dramatic, high-contrast dark-mode aesthetic, creating a sense of luxury and seriousness. It pairs large, elegant serif headlines with a compact sans-serif for body text, establishing clear typographic hierarchy. The overall feel is spacious, with generous negative space and minimal, highly rounded components that appear almost sculptural against the black canvas. Color is strictly controlled, centered around a stark black and white palette, accented only by brand-specific imagery or internal details that appear as subtle splashes of vibrancy.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Canvas | #000000 | `--color-midnight-canvas` | Page backgrounds, large content blocks, foundational surfaces |
| Ghost White | #ffffff | `--color-ghost-white` | Primary text, button backgrounds, outline borders, prominent UI elements that demand attention against the dark canvas |
| Slate Text | #808080 | `--color-slate-text` | Muted body text, secondary information, and borders for subtle segmentation. Provides softer contrast than pure white |
| Dark Stone | #333333 | `--color-dark-stone` | Fine borders and subtle dividers, offering a very low-contrast separation on dark backgrounds |

## Tokens — Typography

### Times New Roman

- **Token:** `--font-times-new-roman`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 32px, 90px
- **Line heights:** 0.82, 1.05
- **Letter spacing:** -1.0em at 90px, -1.0em at 32px
- **Role:** Hero headlines and major section titles. Its classic serif form and extremely tight tracking (subtly inverting common design rules) convey gravitas and exclusivity.

### Suisseintl WebM

- **Token:** `--font-suisseintl-webm`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 14px, 16px, 18px, 24px, 36px, 38px
- **Line heights:** 1.16, 1.20, 1.40
- **Letter spacing:** -0.8em
- **Role:** Body text, links, buttons, and general UI elements. Its compact, neutral sans-serif form ensures readability and efficiency across smaller text blocks, balancing the expressive headlines.

### Editorialnew

- **Token:** `--font-editorialnew`
- **Substitute:** Georgia
- **Weights:** 100
- **Sizes:** 14px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Occasional decorative or delicate text elements, its light weight suggesting an editorial, refined touch.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.4 | -0.8px | `--text-caption` |
| body | 16px | 1.4 | -0.8px | `--text-body` |
| subheading | 24px | 1.2 | -0.8px | `--text-subheading` |
| heading | 32px | 1.05 | -1px | `--text-heading` |
| heading-lg | 38px | 1.16 | -0.8px | `--text-heading-lg` |
| display | 90px | 0.82 | -1px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-146 | 146px | `--spacing-146` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-162 | 162px | `--spacing-162` |
| spacing-180 | 180px | `--spacing-180` |
| spacing-216 | 216px | `--spacing-216` |
| spacing-268 | 268px | `--spacing-268` |
| spacing-288 | 288px | `--spacing-288` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 24px |
| buttons | 40px |
| default | 44px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 70px |
| cardPadding | 25px |
| elementGap | 22px |

## Components

### Filled Primary Button

**Role:** Action button

Ghost White fill, Midnight Canvas text, 40px border-radius, padding of 25px horizontal and 7-9px vertical. Suisseintl WebM font, weight 400.

### Ghost Outline Link

**Role:** Navigation or secondary action link

Midnight Canvas background, Ghost White text, 1px Ghost White border, 24px border-radius. Padding based on content. No distinct hover background change, only text color to white if originally a softer grey.

### Zero-Padding Card

**Role:** Content card/container for case studies

Transparent background, 0px border-radius, no box shadow, 0px padding. Acts as a container for full-bleed content rather than a distinct card surface.

## Do's and Don'ts

### Do

- Prioritize Midnight Canvas (#000000) for all page and section backgrounds to maintain dramatic contrast.
- Use Times New Roman (400) with tight letter-spacing for headlines and Ghost White (#ffffff) for maximum impact.
- Employ Suisseintl WebM (400) for all body text, links, and buttons, using Ghost White (#ffffff) for primary text and Slate Text (#808080) for secondary details.
- Apply a 40px border-radius to all interactive elements like buttons to achieve a soft, rounded aesthetic.
- Maintain generous vertical spacing between sections, using the 70px sectionGap token.
- Utilize 1px Ghost White (#ffffff) borders for subtle delineation of content blocks or interactive elements.
- Ensure all primary call-to-action buttons use a Ghost White (#ffffff) background with Midnight Canvas (#000000) text for high visibility.

### Don't

- Avoid using highly saturated colors for backgrounds or large sections; reserve them strictly for imagery or small accents.
- Do not deviate from the specified font families; avoid system defaults or other decorative fonts.
- Never use hard-edged, 0px border-radius on interactive elements; always lean into the soft, rounded forms.
- Do not introduce shadows for elevation, as the design relies on stark color contrast and negative space for hierarchy.
- Avoid dense information blocks; maintain the spacious and minimalist approach.
- Do not apply excessive letter-spacing to Suisseintl WebM; maintain its compact character with -0.8em tracking.
- Do not use Slate Text (#808080) for primary headlines or critical information where maximum contrast is required.

## Imagery

The site uses a mix of highly stylized and abstract 3D renders (e.g., green organic blobs) and product-focused photography that often features single objects like radishes. Graphics are decorative and atmospheric, adding a sense of organic fluidity and surrealism against the stark UI. Iconography is minimalist, likely outlined or mono-colored, serving functional rather than decorative roles. Imagery is used to create mood and brand identity rather than explanatory content, often full-bleed or large-scale, dominating certain sections to create visual drama.

## Layout

The page primarily uses a full-bleed layout on a Midnight Canvas background, featuring large, dramatic sections. The hero section displays a centered headline with hero imagery. Content sections alternate between visually dominant imagery and text blocks, often with a centered stack approach for headlines and body text. There is a strong emphasis on spaciousness, with ample negative space defining the rhythm between content blocks. Navigation appears to be minimal, likely a top bar and potentially a hamburger menu for mobile, designed to recede and let the content shine.

## Similar Brands

- **Awwwards sites** — Dramatic high-contrast themes, large experimental typography, and evocative 3D/abstract imagery.
- **Future Fonts** — Focus on bespoke, expressive typography as a core design element, especially large serif headlines on dark backgrounds.
- **Active Theory** — Use of abstract, organic 3D elements for atmospheric branding against dark backgrounds.
- **B&R Design** — High-contrast dark-mode design with a sophisticated, minimalist approach and limited color palette.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-canvas: #000000;
  --color-ghost-white: #ffffff;
  --color-slate-text: #808080;
  --color-dark-stone: #333333;
  --font-times-new-roman: 'Times New Roman', serif;
  --font-suisseintl-webm: 'Suisseintl WebM', Arial;
  --font-editorialnew: 'Editorialnew', Georgia;
  --text-caption: 14px;
  --leading-caption: 1.4;
  --tracking-caption: -0.8px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.8px;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.8px;
  --text-heading: 32px;
  --leading-heading: 1.05;
  --tracking-heading: -1px;
  --text-heading-lg: 38px;
  --leading-heading-lg: 1.16;
  --tracking-heading-lg: -0.8px;
  --text-display: 90px;
  --leading-display: 0.82;
  --tracking-display: -1px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-25: 25px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-146: 146px;
  --spacing-150: 150px;
  --spacing-162: 162px;
  --spacing-180: 180px;
  --spacing-216: 216px;
  --spacing-268: 268px;
  --spacing-288: 288px;
  --radius-links: 24px;
  --radius-buttons: 40px;
  --radius-default: 44px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-canvas: #000000;
  --color-ghost-white: #ffffff;
  --color-slate-text: #808080;
  --color-dark-stone: #333333;
  --font-times-new-roman: 'Times New Roman', serif;
  --font-suisseintl-webm: 'Suisseintl WebM', Arial;
  --font-editorialnew: 'Editorialnew', Georgia;
  --text-caption: 14px;
  --leading-caption: 1.4;
  --tracking-caption: -0.8px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.8px;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.8px;
  --text-heading: 32px;
  --leading-heading: 1.05;
  --tracking-heading: -1px;
  --text-heading-lg: 38px;
  --leading-heading-lg: 1.16;
  --tracking-heading-lg: -0.8px;
  --text-display: 90px;
  --leading-display: 0.82;
  --tracking-display: -1px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-25: 25px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-146: 146px;
  --spacing-150: 150px;
  --spacing-162: 162px;
  --spacing-180: 180px;
  --spacing-216: 216px;
  --spacing-268: 268px;
  --spacing-288: 288px;
  --radius-links: 24px;
  --radius-buttons: 40px;
  --radius-default: 44px;
}
```
