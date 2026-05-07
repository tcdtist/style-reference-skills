---
version: alpha
name: "Lamanna"
description: "Lamanna's design system is a bold, high-contrast experience, marrying a vibrant, energetic color palette with a dynamic, almost rebellious typography approach. The site operates with maximal impact, using large, tightly tracked headlines that often break visual bounds. Surfaces shift abruptly between saturated backgrounds, creating distinct visual blocks rather than a fluid flow. Call-to-actions are subtly outlined, maintaining visual punch through color rather than heavy fills, complementing the overall lightweight, border-centric component aesthetic."
theme: "light"
industry: "other"
source_url: "https://lamannabakery.com"
refero_style_id: "057d7c66-76b7-4272-849c-4058543e6799"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521618954-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521618954-thumb.jpg"
extracted_at: "2026-04-30T04:00:48.236Z"
---

# Lamanna — Style Reference

> Electric Circus Diner: Bold, high-energy, and a little chaotic, like a retro diner bathed in neon.

**Theme:** light

**Industry:** other

Lamanna's design system is a bold, high-contrast experience, marrying a vibrant, energetic color palette with a dynamic, almost rebellious typography approach. The site operates with maximal impact, using large, tightly tracked headlines that often break visual bounds. Surfaces shift abruptly between saturated backgrounds, creating distinct visual blocks rather than a fluid flow. Call-to-actions are subtly outlined, maintaining visual punch through color rather than heavy fills, complementing the overall lightweight, border-centric component aesthetic.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Big Slice Orange | #ff4100 | `--color-big-slice-orange` | Dominant background, headline accents, active outlines — this orange establishes the brand's energetic and playful tone; Orange accent for outlined action borders, linked labels, and lightweight interactive emphasis. Use as a supporting accent, not as a status color |
| Golden Crust Yellow | #ffc700 | `--color-golden-crust-yellow` | Secondary accent, background for prominent elements, text color for high-contrast headlines against dark backgrounds; Warning messages, highlights — leveraging the brand yellow for immediate attention |
| Playful Pink | #fdbeba | `--color-playful-pink` | Section backgrounds, decorative elements — a softer, warmer background for content blocks |
| Navigation Blue | #1573dd | `--color-navigation-blue` | Interactive elements, navigation links, outlined component borders — providing a clear contrast for actionable items |
| Ink Text | #292a2c | `--color-ink-text` | Primary body text, bold headings, various borders — a deep, near-black for maximum legibility on light and colored backgrounds |
| Pure Black | #000000 | `--color-pure-black` | Subtle borders, text on light backgrounds, decorative fills — used sparingly for sharp definition |

## Tokens — Typography

### Open Sans

- **Token:** `--font-open-sans`
- **Weights:** 400
- **Sizes:** 18px, 22px
- **Line heights:** 1, 1.67
- **Role:** Open Sans — detected in extracted data but not described by AI

### rightgrotesk-spatialblack-webfont

- **Token:** `--font-rightgrotesk-spatialblack-webfont`
- **Substitute:** Bebas Neue
- **Weights:** 400
- **Sizes:** 18px, 24px, 30px, 36px, 54px
- **Line heights:** 0.89, 0.93, 1.00
- **Letter spacing:** -0.36, -0.33, -0.53, -0.72, -1.08
- **Role:** Display headlines and navigation — its condensed, heavy form and tight tracking establish a dynamic, almost aggressive brand voice.

### nimbus-sans-extended-bold

- **Token:** `--font-nimbus-sans-extended-bold`
- **Substitute:** Source Sans Pro Extra Condensed Bold
- **Weights:** 400
- **Sizes:** 23px
- **Line heights:** 1.13
- **Letter spacing:** -0.47
- **Role:** Sub-headings and emphasized body text — providing a strong, extended sans-serif voice for key content.

### nimbus-sans-extended-regular

- **Token:** `--font-nimbus-sans-extended-regular`
- **Substitute:** Source Sans Pro Extra Condensed Regular
- **Weights:** 400
- **Sizes:** 21px, 36px
- **Line heights:** 0.89, 1.48
- **Letter spacing:** 0, 0
- **Role:** Body text and supporting content where an extended but less imposing presence is needed.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Open Sans
- **Letter spacing:** 0, 0
- **Role:** General UI text, captions, and occasional decorative elements — a highly legible, neutral sans-serif.

### obviously-condensed-semibold

- **Token:** `--font-obviously-condensed-semibold`
- **Substitute:** Oswald Semi Bold
- **Weights:** 400
- **Sizes:** 32px
- **Line heights:** 1.16
- **Letter spacing:** 0
- **Role:** Decorative text for links and specialized elements.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 18px | 1 | 0px | `--text-body` |
| subheading | 22px | 1.67 | 0px | `--text-subheading` |
| heading | 24px | 1 | -0.53px | `--text-heading` |
| heading-lg | 30px | 0.93 | -0.33px | `--text-heading-lg` |
| display-sm | 32px | 1.16 | 0px | `--text-display-sm` |
| display | 36px | 0.89 | -0.72px | `--text-display` |
| display-lg | 54px | 0.89 | -1.08px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-105 | 105px | `--spacing-105` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-130 | 130px | `--spacing-130` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-186 | 186px | `--spacing-186` |

### Border Radius

| Element | Value |
| --- | --- |
| badges | 0px |
| buttons | 50% |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1230px |
| sectionGap | 105px |
| cardPadding | 15px |
| elementGap | 10px |

## Components

### Circular Outline Button

**Role:** Secondary action button for navigation or minor actions.

Round border, transparent background, #000000 text. Uses 1px padding-top/bottom and 6px padding-left/right for minimal size, with a 50% border radius for a circular shape.

### Product Display Badge

**Role:** Highlighting key product items with a strong visual presence.

Uses Golden Crust Yellow (#ffc700) as a background and Ink Text (#292a2c) for text, with 0px border radius and generous vertical padding (120px).

## Do's and Don'ts

### Do

- Prioritize Big Slice Orange (#ff4100) or Golden Crust Yellow (#ffc700) as primary background colors for sections to maintain high energy.
- Use 'rightgrotesk-spatialblack-webfont' (or Bebas Neue) with tight letter spacing for all major headlines to maintain brand impact.
- Apply 50% border-radius to all buttons for a distinctive circular or pill shape.
- Utilize Navigation Blue (#1573dd) for outlined interactive elements to signal action without heavy fills.
- Ensure large headlines utilize a font-size of 36px or higher for maximum visual impact.
- Implement Ink Text (#292a2c) for body copy to ensure strong contrast and readability on colored backgrounds.

### Don't

- Avoid using pastel or desaturated colors for main sections; the system thrives on vivid and high-contrast combinations.
- Do not use subtle or thin typefaces for headlines; the brand demands bold, condensed, or extended typography.
- Do not introduce complex shadows or depth effects; rely on color blocking and outlines for visual hierarchy.
- Avoid large blocks of pure white or light grey backgrounds; always integrate brand colors in sections.
- Do not use generic square buttons; adhere to the distinct circular/pill shape.
- Do not use open, airy letter-spacing for display text; tight tracking is a signature element.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Playful Pink Surface | #fdbeba | Base background for content sections, providing a soft anchor. |
| 1 | Golden Crust Yellow Surface | #ffc700 | Elevated background for prominent features, badges, and attention-grabbing blocks. |
| 2 | Big Slice Orange Canvas | #ff4100 | Dominant full-bleed background for hero sections and high-impact areas, asserting brand presence. |

## Imagery

The imagery is product-focused and high-energy. It primarily features isolated food items (pizza slices, donuts, gelato) with clear, high-contrast presentation. Some images creatively integrate human elements (like hands holding food) to add personality without detracting from the product. The style is raw, vibrant, and direct, often using angular or dynamic compositions. Icons are simple, outlined, and monochromatic, used for navigation or small decorative flourishes like pointing hands, matching the bold but minimalist component aesthetic. Photography is clearly product showcase and decorative atmosphere, not explanatory or social proof. The density is image-heavy in hero sections, with imagery often overlapping with or being cut by text.

## Layout

The page uses a maximum width containment of 1230px, but the hero section often spills out as full-bleed. The hero pattern features large, overlaying typography on a solid Big Slice Orange background, sometimes with a large product image (like a pizza slice) cutting through the text. Section rhythm is highly dynamic, characterized by abrupt shifts in background color between Playful Pink, Big Slice Orange, and Golden Crust Yellow. Content arrangement often features central stacks of text and product images, or simple grid structures, like the 3-column product display below the 'Hall of Fame' section. The layout is compact in its information delivery within these colorful blocks. Navigation is a minimalist top bar with small, uppercase text links and subtle circular outline buttons.

## Similar Brands

- **Sweetgreen** — Energetic, bold typography with a focus on product visuals and vibrant accent colors.
- **Shake Shack** — Playful, bright color palette with a strong brand personality in headings and casual, inviting imagery.
- **Dosist** — Pill-shaped UI elements and a focus on distinct, blocky color fields for sections.
- **McDonald's (newer branding)** — Use of large, impactful typography, simplified graphics, and dominant brand colors for a modern, direct feel.
- **Chipotle** — Focus on high-quality food photography and a clean, direct layout with strong typographic elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-big-slice-orange: #ff4100;
  --color-golden-crust-yellow: #ffc700;
  --color-playful-pink: #fdbeba;
  --color-navigation-blue: #1573dd;
  --color-ink-text: #292a2c;
  --color-pure-black: #000000;
  --font-open-sans: 'Open Sans', ui-sans-serif, system-ui, sans-serif;
  --font-rightgrotesk-spatialblack-webfont: 'rightgrotesk-spatialblack-webfont', Bebas Neue;
  --font-nimbus-sans-extended-bold: 'nimbus-sans-extended-bold', Source Sans Pro Extra Condensed Bold;
  --font-nimbus-sans-extended-regular: 'nimbus-sans-extended-regular', Source Sans Pro Extra Condensed Regular;
  --font-inter: 'Inter', Open Sans;
  --font-obviously-condensed-semibold: 'obviously-condensed-semibold', Oswald Semi Bold;
  --text-body: 18px;
  --leading-body: 1;
  --tracking-body: 0px;
  --text-subheading: 22px;
  --leading-subheading: 1.67;
  --tracking-subheading: 0px;
  --text-heading: 24px;
  --leading-heading: 1;
  --tracking-heading: -0.53px;
  --text-heading-lg: 30px;
  --leading-heading-lg: 0.93;
  --tracking-heading-lg: -0.33px;
  --text-display-sm: 32px;
  --leading-display-sm: 1.16;
  --tracking-display-sm: 0px;
  --text-display: 36px;
  --leading-display: 0.89;
  --tracking-display: -0.72px;
  --text-display-lg: 54px;
  --leading-display-lg: 0.89;
  --tracking-display-lg: -1.08px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-43: 43px;
  --spacing-50: 50px;
  --spacing-55: 55px;
  --spacing-60: 60px;
  --spacing-100: 100px;
  --spacing-105: 105px;
  --spacing-120: 120px;
  --spacing-130: 130px;
  --spacing-160: 160px;
  --spacing-186: 186px;
  --radius-badges: 0px;
  --radius-buttons: 50%;
  --surface-playful-pink-surface: #fdbeba;
  --surface-golden-crust-yellow-surface: #ffc700;
  --surface-big-slice-orange-canvas: #ff4100;
}
```

### Tailwind v4

```css
@theme {
  --color-big-slice-orange: #ff4100;
  --color-golden-crust-yellow: #ffc700;
  --color-playful-pink: #fdbeba;
  --color-navigation-blue: #1573dd;
  --color-ink-text: #292a2c;
  --color-pure-black: #000000;
  --font-open-sans: 'Open Sans', ui-sans-serif, system-ui, sans-serif;
  --font-rightgrotesk-spatialblack-webfont: 'rightgrotesk-spatialblack-webfont', Bebas Neue;
  --font-nimbus-sans-extended-bold: 'nimbus-sans-extended-bold', Source Sans Pro Extra Condensed Bold;
  --font-nimbus-sans-extended-regular: 'nimbus-sans-extended-regular', Source Sans Pro Extra Condensed Regular;
  --font-inter: 'Inter', Open Sans;
  --font-obviously-condensed-semibold: 'obviously-condensed-semibold', Oswald Semi Bold;
  --text-body: 18px;
  --leading-body: 1;
  --tracking-body: 0px;
  --text-subheading: 22px;
  --leading-subheading: 1.67;
  --tracking-subheading: 0px;
  --text-heading: 24px;
  --leading-heading: 1;
  --tracking-heading: -0.53px;
  --text-heading-lg: 30px;
  --leading-heading-lg: 0.93;
  --tracking-heading-lg: -0.33px;
  --text-display-sm: 32px;
  --leading-display-sm: 1.16;
  --tracking-display-sm: 0px;
  --text-display: 36px;
  --leading-display: 0.89;
  --tracking-display: -0.72px;
  --text-display-lg: 54px;
  --leading-display-lg: 0.89;
  --tracking-display-lg: -1.08px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-43: 43px;
  --spacing-50: 50px;
  --spacing-55: 55px;
  --spacing-60: 60px;
  --spacing-100: 100px;
  --spacing-105: 105px;
  --spacing-120: 120px;
  --spacing-130: 130px;
  --spacing-160: 160px;
  --spacing-186: 186px;
  --radius-badges: 0px;
  --radius-buttons: 50%;
  --surface-playful-pink-surface: #fdbeba;
  --surface-golden-crust-yellow-surface: #ffc700;
  --surface-big-slice-orange-canvas: #ff4100;
}
```
