---
version: alpha
name: "Diabla"
description: "Diabla's visual system evokes a playful, modern aesthetic set against a backdrop of sun-drenched outdoor living. The design is characterized by crisp white and a soft pastel pink canvas, punctuated by a vibrant, almost neon red accent for crucial interactions and branding. Typography is elegant and airy, maintaining a degree of formality even amidst the relaxed, resort-like imagery. Components are lightweight with defined outlines, contributing to an open, spacious feel."
theme: "light"
industry: "ecommerce"
source_url: "https://www.diablaoutdoor.com/en"
refero_style_id: "5528d10f-2e7d-4502-aa49-7bde290e8fe2"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513426344-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513426344-thumb.jpg"
extracted_at: "2026-04-30T01:44:23.299Z"
---

# Diabla — Style Reference

> Tropical Modernism Pop

**Theme:** light

**Industry:** ecommerce

Diabla's visual system evokes a playful, modern aesthetic set against a backdrop of sun-drenched outdoor living. The design is characterized by crisp white and a soft pastel pink canvas, punctuated by a vibrant, almost neon red accent for crucial interactions and branding. Typography is elegant and airy, maintaining a degree of formality even amidst the relaxed, resort-like imagery. Components are lightweight with defined outlines, contributing to an open, spacious feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Coral Kiss | #ed2e38 | `--color-coral-kiss` | Brand accent, outline buttons, active links, functional icons — a vivid pop against the muted palette |
| Carbon | #333333 | `--color-carbon` | Primary body text, dark borders, general UI text |
| Deep Ink | #000000 | `--color-deep-ink` | Headlines, strong text emphasis, button borders with a bold presence |
| Shell Pink | #fcf0f3 | `--color-shell-pink` | Page backgrounds, card surfaces, subtle input backgrounds — provides a soft, warm canvas |
| Pure White | #ffffff | `--color-pure-white` | Alternative input backgrounds, card surfaces |
| Rosy Clouds | #F9C2CC | `--color-rosy-clouds` | Secondary accent for decorative elements, soft blocks |

## Tokens — Typography

### Linotype Helvetica Neue LT Std Roman

- **Token:** `--font-linotype-helvetica-neue-lt-std-roman`
- **Substitute:** Helvetica Neue
- **Weights:** 400
- **Sizes:** 10px, 12px, 14px, 15px, 16px, 18px, 22px, 33px
- **Line heights:** 1.00, 1.09, 1.13, 1.20, 1.22, 1.29, 1.30, 1.43, 1.50, 1.80, 2.00, 2.33, 2.80
- **Letter spacing:** normal
- **Role:** Body text, links, smaller headings, UI labels — provides a clean, neutral voice for information.

### Linotype Helvetica Neue LT Std Lt

- **Token:** `--font-linotype-helvetica-neue-lt-std-lt`
- **Substitute:** Helvetica Neue Light
- **Weights:** 400
- **Sizes:** 80px, 110px
- **Line heights:** 0.88, 0.91
- **Letter spacing:** normal
- **Role:** Large display headlines — thin weight at massive sizes creates an airy, modern, almost whispered statement.

### Arial

- **Token:** `--font-arial`
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.2
- **Role:** Arial — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.43 | — | `--text-caption` |
| body | 14px | 1.22 | — | `--text-body` |
| body-lg | 18px | 1.2 | — | `--text-body-lg` |
| heading-sm | 22px | 1.13 | — | `--text-heading-sm` |
| heading | 33px | 1.09 | — | `--text-heading` |
| heading-lg | 80px | 0.91 | — | `--text-heading-lg` |
| display | 110px | 0.88 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-66 | 66px | `--spacing-66` |
| spacing-80 | 80px | `--spacing-80` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 14px |
| inputs | 0px |
| buttons | 14px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 80px |
| cardPadding | 25px |
| elementGap | 10px |

## Components

### Outlined Button - Coral Kiss

**Role:** Primary action button, often paired with an icon.

Text: Coral Kiss (#ed2e38), Linotype Helvetica Neue LT Std Roman, weight 400. Background: transparent. Border: 1px solid Coral Kiss (#ed2e38). Padding: 0px vertical, 20px horizontal. Border radius: 14px.

### Outlined Button - Deep Ink

**Role:** Secondary action or ghost button.

Text: Deep Ink (#000000), Linotype Helvetica Neue LT Std Roman, weight 400. Background: transparent. Border: 1px solid Deep Ink (#000000). Padding: 0px vertical, 0px horizontal. Border radius: 0px.

### Input - Underlined Coral Kiss

**Role:** Text input field with focus.

Text: Coral Kiss (#ed2e38). Background: transparent. Border: 1px solid Coral Kiss (#ed2e38) on bottom, otherwise transparent. Border-radius: 0px.

### Input - Shell Pink Background Circle

**Role:** Small input or selection with a circular, soft background.

Text: Coral Kiss (#ed2e38). Background: Shell Pink (#fcf0f3). Border: 1px solid Coral Kiss (#ed2e38). Border-radius: 50% (circular). Padding: 0px.

## Do's and Don'ts

### Do

- Always use Coral Kiss (#ed2e38) as the primary brand accent for interactive elements and highlights.
- Maintain a clear visual hierarchy by limiting large headlines to Linotype Helvetica Neue LT Std Lt at sizes 80px or 110px.
- Apply Shell Pink (#fcf0f3) for ambient backgrounds and card surfaces to establish the site's warm, light base.
- Utilize a 14px border radius for interactive elements like buttons and links to create a consistent soft, rounded treatment.
- Employ consistent 0px vertical padding with 20px horizontal padding for primary outlined buttons to create a flat, elongated look.
- Break up page content with alternating sections using Shell Pink (#fcf0f3) and Pure White (#ffffff) backgrounds.
- Use Linotype Helvetica Neue LT Std Roman (400) for all body text, links, and minor headings with normal letter spacing.

### Don't

- Avoid using multiple chromatic colors; Coral Kiss (#ed2e38) should be the singular vibrant accent.
- Do not use heavy shadows or significant elevation; maintain a flat, open aesthetic.
- Refrain from using solid fill buttons; the primary action style is an outlined button with Coral Kiss (#ed2e38).
- Never deviate from the specified font families or their intended roles and weights.
- Do not introduce complex gradient fills; the system relies on solid colors and subtle background variations.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Shell Pink Canvas | #fcf0f3 | Primary page background, base for most content blocks. |
| 2 | Pure White Panel | #ffffff | Elevated card backgrounds, alternative input fields. |

## Imagery

Diabla features high-quality, aspirational photography and 3D renders of their furniture in lush, tropical or Mediterranean outdoor settings. The visuals are clean and focus on product integration within an idealized lifestyle. Photography is generally high-key, with natural lighting and vibrant but soft colors that blend with the brand's playful aesthetic. Imagery often serves as a full-bleed hero or contained rectangles, seamlessly integrated with text. Icons are minimal, outlined, and used descriptively for navigation and small functional elements.

## Layout

The page primarily uses a full-bleed layout for hero sections, filling the viewport with striking imagery and large text overlays. Subsequent sections follow a max-width contained pattern, with content centered. Section rhythm is established through consistent vertical spacing around 80px, creating a comfortable density. Content often alternates between text-dominant blocks and imagery or product showcases, following a flexible grid for features and product displays. The overall structure is open and breathable, avoiding dense information blocks.

## Similar Brands

- **Kettal** — Luxury outdoor furniture brands with a focus on clean lines, high-quality photography, and minimalist UI.
- **Ferm Living** — Modern design aesthetic, often using soft color palettes and emphasis on interior/exterior lifestyle imagery.
- **Hay Design** — Focus on playful modern design, often incorporates bright, unexpected accent colors against a neutral backdrop.
- **Muuto** — Contemporary Scandinavian design language, blending natural elements with modern forms and vibrant accents.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-coral-kiss: #ed2e38;
  --color-carbon: #333333;
  --color-deep-ink: #000000;
  --color-shell-pink: #fcf0f3;
  --color-pure-white: #ffffff;
  --color-rosy-clouds: #F9C2CC;
  --font-linotype-helvetica-neue-lt-std-roman: 'Linotype Helvetica Neue LT Std Roman', Helvetica Neue;
  --font-linotype-helvetica-neue-lt-std-lt: 'Linotype Helvetica Neue LT Std Lt', Helvetica Neue Light;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 10px;
  --leading-caption: 1.43;
  --text-body: 14px;
  --leading-body: 1.22;
  --text-body-lg: 18px;
  --leading-body-lg: 1.2;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.13;
  --text-heading: 33px;
  --leading-heading: 1.09;
  --text-heading-lg: 80px;
  --leading-heading-lg: 0.91;
  --text-display: 110px;
  --leading-display: 0.88;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-66: 66px;
  --spacing-80: 80px;
  --radius-links: 14px;
  --radius-inputs: 0px;
  --radius-buttons: 14px;
  --surface-shell-pink-canvas: #fcf0f3;
  --surface-pure-white-panel: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-coral-kiss: #ed2e38;
  --color-carbon: #333333;
  --color-deep-ink: #000000;
  --color-shell-pink: #fcf0f3;
  --color-pure-white: #ffffff;
  --color-rosy-clouds: #F9C2CC;
  --font-linotype-helvetica-neue-lt-std-roman: 'Linotype Helvetica Neue LT Std Roman', Helvetica Neue;
  --font-linotype-helvetica-neue-lt-std-lt: 'Linotype Helvetica Neue LT Std Lt', Helvetica Neue Light;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 10px;
  --leading-caption: 1.43;
  --text-body: 14px;
  --leading-body: 1.22;
  --text-body-lg: 18px;
  --leading-body-lg: 1.2;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.13;
  --text-heading: 33px;
  --leading-heading: 1.09;
  --text-heading-lg: 80px;
  --leading-heading-lg: 0.91;
  --text-display: 110px;
  --leading-display: 0.88;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-66: 66px;
  --spacing-80: 80px;
  --radius-links: 14px;
  --radius-inputs: 0px;
  --radius-buttons: 14px;
  --surface-shell-pink-canvas: #fcf0f3;
  --surface-pure-white-panel: #ffffff;
}
```
