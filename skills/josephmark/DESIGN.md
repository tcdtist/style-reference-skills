---
version: alpha
name: "Josephmark"
description: "Josephmark evokes a commanding, minimalist aesthetic where stark contrasts and purposeful typography convey authority. The design system is built on an achromatic palette, predominantly black and white, creating an expansive canvas that recedes to highlight content. Type is a core visual element, with custom grotesk forms carrying a substantial portion of the brand identity through precise letter-spacing and varying weights. Interaction is subtle, relying on ghost elements and border changes rather than bold color accents."
theme: "light"
industry: "design"
source_url: "https://josephmark.studio"
refero_style_id: "58c0af12-8706-428f-8282-482d57d7b90e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514601447-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514601447-thumb.jpg"
extracted_at: "2026-04-30T02:03:46.834Z"
---

# Josephmark — Style Reference

> monochromatic gallery space

**Theme:** light

**Industry:** design

Josephmark evokes a commanding, minimalist aesthetic where stark contrasts and purposeful typography convey authority. The design system is built on an achromatic palette, predominantly black and white, creating an expansive canvas that recedes to highlight content. Type is a core visual element, with custom grotesk forms carrying a substantial portion of the brand identity through precise letter-spacing and varying weights. Interaction is subtle, relying on ghost elements and border changes rather than bold color accents.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight | #000000 | `--color-midnight` | Primary background for hero sections and dark content blocks; primary text color on light surfaces |
| Canvas White | #ffffff | `--color-canvas-white` | Dominant page background, card surfaces, and primary text color on dark backgrounds |
| Platinum Mist | #e5e7eb | `--color-platinum-mist` | Subtle borders, dividers, secondary ghost button borders, and subtle list item separators |
| Cloud Gray | #f4f5ef | `--color-cloud-gray` | Secondary background for alternating content sections, providing a soft lift from Canvas White |
| Granite | #666666 | `--color-granite` | Secondary text for supportive information and subdued headings |
| Stone | #a9a498 | `--color-stone` | Muted background for specific content sections and tertiary text |
| Carbon | #4e5449 | `--color-carbon` | Tertiary body text for less prominent details, hinting at a slight warmth in an otherwise cool palette |

## Tokens — Typography

### Scto Grotesk A

- **Token:** `--font-scto-grotesk-a`
- **Substitute:** Inter
- **Weights:** 300, 400, 500
- **Sizes:** 12px, 14px, 16px, 19px, 20px, 28px, 36px, 70px
- **Line heights:** 1.10, 1.20, 1.25, 1.38, 1.40, 1.50
- **Letter spacing:** -0.0350em at 70px, -0.0300em at 36px, -0.0270em at 28px, -0.0250em at 20px, -0.0200em at 19px, -0.0190em at 16px
- **Role:** Primary typeface for all headings, body text, and UI elements. Its custom, meticulously tracked forms are central to the brand's sophisticated, minimalist voice.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | 0px | `--text-caption` |
| body-sm | 14px | 1.4 | 0px | `--text-body-sm` |
| body | 16px | 1.5 | -0.19px | `--text-body` |
| subheading | 19px | 1.4 | -0.38px | `--text-subheading` |
| heading | 28px | 1.25 | -0.76px | `--text-heading` |
| heading-lg | 36px | 1.2 | -1.08px | `--text-heading-lg` |
| display | 70px | 1.1 | -2.45px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-280 | 280px | `--spacing-280` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64-96px |
| cardPadding | 20px |
| elementGap | 16px |

## Components

### Ghost Primary Button

**Role:** Interactive element for main calls to action, appearing as a transparent pill with a white border.

Background: transparent, Text: Canvas White (#ffffff), Border: 1px solid Canvas White (#ffffff), Padding: 8px vertical, 28px horizontal, Border Radius: 9999px.

### Outlined Card Button

**Role:** Secondary action or category filter within content sections, offering structure through a subtle border.

Background: transparent, Text: Canvas White (#ffffff), Border: 1px solid Platinum Mist (#e5e7eb), Padding: 20px all sides, Border Radius: 0px.

### Text Input (Underlined)

**Role:** Form element for user data entry, with a minimal, focus-driven border.

Background: transparent, Text: Canvas White (#ffffff), Border-bottom: 1px solid Canvas White (#ffffff), Padding: 12px vertical, 0px horizontal, Border Radius: 0px.

### Navigation Link

**Role:** Interactive text link for site navigation and inline content, maintaining high contrast on all backgrounds.

Text color: Canvas White (#ffffff) on dark backgrounds, Midnight (#000000) on light backgrounds. No underline on default state. Hover state is implied by motion profile for color and transform effects.

## Do's and Don'ts

### Do

- Prioritize high contrast between text and background, typically Midnight (#000000) on Canvas White (#ffffff) or vice-versa.
- Use Scto Grotesk A typeface with precise letter-spacing as defined by the type scale for all text elements.
- Apply a 9999px border-radius for all primary buttons to achieve a soft, pill-like shape.
- Utilize Platinum Mist (#e5e7eb) for subtle, hairline borders and dividers to maintain visual lightness without stark separation.
- Maintain generous vertical spacing between content sections, using 64px or 96px for `sectionGap` to create ample breathing room.
- Implement `_elementGap` at 16px to ensure a consistent, comfortable distance between adjacent UI elements.
- Design interactive elements as 'ghost' components using borders, favoring transparency in backgrounds to emphasize content.
- Use the predefined motion durations (0.3s) and `ease` timing functions for all UI transitions to create a responsive, fluid feel.

### Don't

- Avoid using saturated or vivid chromatic colors; the palette is strictly achromatic with subtle gray variations.
- Do not introduce strong drop shadows; the design system avoids elevation through shadows and relies on stark background shifts for depth.
- Do not use generic system fonts; Scto Grotesk A is fundamental to the brand's typographic identity.
- Refrain from tight, cramped layouts; the design system emphasizes spaciousness and clear visual hierarchy through generous padding and margins.
- Do not use square or hard-edged buttons for primary actions; all prominent buttons should use the 9999px radius.
- Avoid using underlines for default link states; interaction should be indicated by hover effects or contextual cues.
- Do not feature imagery with busy backgrounds or conflicting color palettes; all visuals should either be monochromatic or have controlled color palettes that align with the brand's aesthetic.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Base page background and default card background. |
| 1 | Cloud Gray | #f4f5ef | Secondary background for alternating content sections, providing minimal visual separation. |
| 2 | Midnight | #000000 | Dominant background for hero elements, full-width banners, and high-impact content blocks to create stark contrast. |

## Similar Brands

- **Akin** — Monochrome palette, focus on typography and whitespace, subtle ghost buttons.
- **Useberry** — High contrast dark/light sections, precise typography with custom fonts, minimalist UI.
- **Stripe (early versions)** — Emphasis on clean, powerful typography, and a restrained color palette using neutrals for hierarchy.
- **Figma (landing pages)** — Clear divisions between dark and light sections, strong use of custom grotesque typefaces for branding.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight: #000000;
  --color-canvas-white: #ffffff;
  --color-platinum-mist: #e5e7eb;
  --color-cloud-gray: #f4f5ef;
  --color-granite: #666666;
  --color-stone: #a9a498;
  --color-carbon: #4e5449;
  --font-scto-grotesk-a: 'Scto Grotesk A', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.19px;
  --text-subheading: 19px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.38px;
  --text-heading: 28px;
  --leading-heading: 1.25;
  --tracking-heading: -0.76px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -1.08px;
  --text-display: 70px;
  --leading-display: 1.1;
  --tracking-display: -2.45px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-43: 43px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-112: 112px;
  --spacing-280: 280px;
  --radius-buttons: 9999px;
  --surface-canvas-white: #ffffff;
  --surface-cloud-gray: #f4f5ef;
  --surface-midnight: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight: #000000;
  --color-canvas-white: #ffffff;
  --color-platinum-mist: #e5e7eb;
  --color-cloud-gray: #f4f5ef;
  --color-granite: #666666;
  --color-stone: #a9a498;
  --color-carbon: #4e5449;
  --font-scto-grotesk-a: 'Scto Grotesk A', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.19px;
  --text-subheading: 19px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.38px;
  --text-heading: 28px;
  --leading-heading: 1.25;
  --tracking-heading: -0.76px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -1.08px;
  --text-display: 70px;
  --leading-display: 1.1;
  --tracking-display: -2.45px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-43: 43px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-112: 112px;
  --spacing-280: 280px;
  --radius-buttons: 9999px;
  --surface-canvas-white: #ffffff;
  --surface-cloud-gray: #f4f5ef;
  --surface-midnight: #000000;
}
```
