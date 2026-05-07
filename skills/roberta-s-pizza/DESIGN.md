---
version: alpha
name: "Roberta's Pizza"
description: "Roberta's Pizza brand identity is a playful fusion of classic diner aesthetic and rebellious punk rock energy. It centers on stark contrast, featuring bold red punctuated by deep charcoal and crisp white, creating a high-energy environment. Typography couples a quirky, custom script with a strong, industrial sans-serif. Visual elements are direct and impactful, with minimal decorative ornamentation, prioritizing clear communication and a distinctive personality."
theme: "light"
industry: "other"
source_url: "https://www.robertaspizza.com"
refero_style_id: "3e497155-bd96-4134-a4a5-855bd885a25c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516845076-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516845076-thumb.jpg"
extracted_at: "2026-04-30T02:41:08.916Z"
---

# Roberta's Pizza — Style Reference

> Vivid Red & Industrial Grit – a raw, energetic palette with no-nonsense type for an unpretentious, bold brand.

**Theme:** light

**Industry:** other

Roberta's Pizza brand identity is a playful fusion of classic diner aesthetic and rebellious punk rock energy. It centers on stark contrast, featuring bold red punctuated by deep charcoal and crisp white, creating a high-energy environment. Typography couples a quirky, custom script with a strong, industrial sans-serif. Visual elements are direct and impactful, with minimal decorative ornamentation, prioritizing clear communication and a distinctive personality.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pizza Red | #ed2023 | `--color-pizza-red` | Primary accent, CTA backgrounds, critical calls to action, section backgrounds — a vivid, in-your-face red demanding attention and conveying brand energy |
| Ink Black | #2b2f36 | `--color-ink-black` | Primary text, dark surface backgrounds, button backgrounds, borders — a deep, almost black charcoal that provides strong contrast and grounding |
| Crisp White | #ffffff | `--color-crisp-white` | Page backgrounds, card surfaces, button backgrounds, primary text on dark backgrounds — the clean canvas for content and high-contrast element |
| Pitch Black | #000000 | `--color-pitch-black` | Input borders, deep shadows, subtle background patterns — a pure black reserved for definitive structural elements |
| Hover Gray | #bfbfbf | `--color-hover-gray` | Subtle link shadows on hover, secondary borders — a light, almost invisible gray that hints at interaction without drawing focus |

## Tokens — Typography

### Borensa

- **Token:** `--font-borensa`
- **Substitute:** Brush Script MT
- **Weights:** 400
- **Sizes:** 14px, 22px, 26px, 80px, 120px
- **Line heights:** 0.88, 1.25, 1.36, 1.38, 2.14
- **Letter spacing:** -0.02
- **Role:** Brand script for headlines and high-impact messaging — its compressed, slightly italicized form gives a distinctive, informal voice. Used for large display text and brand moments.

### Offset TM

- **Token:** `--font-offset-tm`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 20px, 22px, 24px, 34px, 54px, 80px
- **Line heights:** 1.00, 1.11, 1.25, 1.30, 1.36, 1.43, 1.50
- **Letter spacing:** 0.04
- **Role:** Workhorse sans-serif for body text, button labels, and navigation. Its slightly wider tracking ensures readability at smaller sizes while maintaining a utilitarian feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.25 | 0.04px | `--text-caption` |
| body | 20px | 1.43 | 0.04px | `--text-body` |
| subheading | 22px | 1.43 | -0.02px | `--text-subheading` |
| heading | 26px | 1.36 | -0.02px | `--text-heading` |
| heading-lg | 54px | 1.3 | 0.04px | `--text-heading-lg` |
| display | 120px | 0.88 | -0.02px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-111 | 111px | `--spacing-111` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-196 | 196px | `--spacing-196` |
| spacing-296 | 296px | `--spacing-296` |
| spacing-309 | 309px | `--spacing-309` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 16000px |
| buttons | 7.2px |
| circular | 100% |
| callToAction | 7.2px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.25) 0px 4px 4px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 16px |

## Components

### Primary Action Button

**Role:** Critical call to action

Filled button with Pizza Red (#ed2023) background and Crisp White (#ffffff) text. Features 7.2px border radius and 20px vertical, 24px horizontal padding.

### Secondary Outline Button

**Role:** Alternative or less prominent actions

White (#ffffff) background with Ink Black (#2b2f36) text and a 1px Ink Black border. Uses 7.2px border radius and 20px vertical, 30px horizontal padding.

### Dark Inverse Button

**Role:** Actions on light backgrounds that require strong visual weight

Ink Black (#2b2f36) background with Crisp White (#ffffff) text. Adopts 7.2px border radius and 20px vertical, 30px horizontal padding.

### Input Field

**Role:** Data entry

Crisp White (#ffffff) background, Ink Black (#2b2f36) text, and a 1px Pitch Black (#000000) bottom border. No border radius, 28px vertical and 18px horizontal padding.

### Small Circular Button

**Role:** Icon-only actions or minimal interactive elements

Crisp White (#ffffff) background and text, using a 100% border radius to form a perfect circle. No padding, designed for compact elements.

### Image Card (No Background)

**Role:** Visual content display, often within image galleries

Transparent background with no border radius or box shadow. Minimal 5px top padding for content alignment.

## Do's and Don'ts

### Do

- Prioritize Pizza Red (#ed2023) for primary actions and key brand highlights, ensuring high visibility and energy.
- Use Ink Black (#2b2f36) for all primary body text and darker surface elements, creating strong contrast against Crisp White (#ffffff) backgrounds.
- Apply a consistent 7.2px border radius to all interactive buttons for a subtly softened yet modern feel.
- Maintain generous spacing between sections (40px) and elements (16px) to keep content breathable and prevent visual clutter.
- Employ the Borensa script font for all primary headlines, leveraging its unique character to establish brand personality.
- Ensure input fields have a distinct Pitch Black (#000000) bottom border to clearly delineate interactive areas.
- Use Subtle Hover Gray (#bfbfbf) exclusively for subtle box-shadows on interactive link elements, avoiding heavy drop shadows.

### Don't

- Avoid using multiple chromatic colors; Pizza Red (#ed2023) should remain the sole saturated brand accent.
- Do not introduce light gray backgrounds; stick to Crisp White (#ffffff) or Ink Black (#2b2f36) for dominant surfaces.
- Refrain from using border radii on cards or input fields; maintain sharp, defined edges for content blocks.
- Do not letter-space `Offset TM` text below 20px; its default letterSpacing of 0.04em is crucial for readability at smaller sizes.
- Avoid generic button shapes; buttons should either have a 7.2px radius or be fully circular with a 100% radius.
- Do not use box-shadows on cards or standard interface elements; visual depth should be achieved primarily through color contrast.
- Do not use Borensa for body text or small labels; reserve it for large display sizes where its unique characteristics are legible.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Crisp White Canvas | #ffffff | Dominant page background and primary content surface, supporting high-contrast text. |
| 1 | Ink Black Surface | #2b2f36 | Used for dark sections and button backgrounds, providing a contrasting backdrop for white text. |
| 2 | Pizza Red Accent | #ed2023 | High-impact sections and primary calls to action, drawing immediate attention. |

## Elevation

- **Interactive Links:** `rgba(0, 0, 0, 0.25) 0px 4px 4px 0px`

## Imagery

Photography is full-bleed or contained within irregularly angled frames, often overlapping. Images capture candid, dynamic moments of people interacting with food or the brand, mixed with stylized product shots (e.g., pizza making). The photography style is generally vibrant and natural, focusing on the sensory experience. Icons are bold, filled, and represent illustrative elements like skull & crossbones or skateboards, reinforcing the rebellious brand identity. Visuals serve as both decorative atmosphere and explanatory content, creating an image-heavy, immersive experience.

## Layout

The page primarily uses a full-bleed layout, with hero sections spanning 100% width. Content is generally centered and stacked vertically. The hero pattern features a full-screen video background with brand logo and navigation overlaid. Sections often alternate between full-bleed Pizza Red (#ed2023) and Crisp White (#ffffff) backgrounds, creating a clear visual rhythm. Content within sections is typically contained with a max-width, using centered text blocks or asymmetric image + text compositions. Navigation is a sticky top bar with a hamburger menu for mobile and key call-to-action buttons for desktop.

## Similar Brands

- **Gopuff** — Energetic brand red paired with a stark dark neutral, focused on quick delivery and bold visual presence.
- **Sweetgreen** — Clean white and dark text base, but uses a single, vibrant brand color to punctuate UI elements.
- **Shake Shack** — Heavy reliance on a single primary brand color (green) with stark white and basic black for UI, combined with a custom, friendly typeface.
- **Dewey's Pizza** — Employs a bold, saturated primary color (orange or red) with high-contrast typography and a playful, irreverent tone.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pizza-red: #ed2023;
  --color-ink-black: #2b2f36;
  --color-crisp-white: #ffffff;
  --color-pitch-black: #000000;
  --color-hover-gray: #bfbfbf;
  --font-borensa: 'Borensa', Brush Script MT;
  --font-offset-tm: 'Offset TM', Inter;
  --text-caption: 14px;
  --leading-caption: 1.25;
  --tracking-caption: 0.04px;
  --text-body: 20px;
  --leading-body: 1.43;
  --tracking-body: 0.04px;
  --text-subheading: 22px;
  --leading-subheading: 1.43;
  --tracking-subheading: -0.02px;
  --text-heading: 26px;
  --leading-heading: 1.36;
  --tracking-heading: -0.02px;
  --text-heading-lg: 54px;
  --leading-heading-lg: 1.3;
  --tracking-heading-lg: 0.04px;
  --text-display: 120px;
  --leading-display: 0.88;
  --tracking-display: -0.02px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-46: 46px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-96: 96px;
  --spacing-111: 111px;
  --spacing-113: 113px;
  --spacing-128: 128px;
  --spacing-196: 196px;
  --spacing-296: 296px;
  --spacing-309: 309px;
  --radius-tags: 16000px;
  --radius-buttons: 7.2px;
  --radius-circular: 100%;
  --radius-calltoaction: 7.2px;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
  --surface-crisp-white-canvas: #ffffff;
  --surface-ink-black-surface: #2b2f36;
  --surface-pizza-red-accent: #ed2023;
}
```

### Tailwind v4

```css
@theme {
  --color-pizza-red: #ed2023;
  --color-ink-black: #2b2f36;
  --color-crisp-white: #ffffff;
  --color-pitch-black: #000000;
  --color-hover-gray: #bfbfbf;
  --font-borensa: 'Borensa', Brush Script MT;
  --font-offset-tm: 'Offset TM', Inter;
  --text-caption: 14px;
  --leading-caption: 1.25;
  --tracking-caption: 0.04px;
  --text-body: 20px;
  --leading-body: 1.43;
  --tracking-body: 0.04px;
  --text-subheading: 22px;
  --leading-subheading: 1.43;
  --tracking-subheading: -0.02px;
  --text-heading: 26px;
  --leading-heading: 1.36;
  --tracking-heading: -0.02px;
  --text-heading-lg: 54px;
  --leading-heading-lg: 1.3;
  --tracking-heading-lg: 0.04px;
  --text-display: 120px;
  --leading-display: 0.88;
  --tracking-display: -0.02px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-46: 46px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-96: 96px;
  --spacing-111: 111px;
  --spacing-113: 113px;
  --spacing-128: 128px;
  --spacing-196: 196px;
  --spacing-296: 296px;
  --spacing-309: 309px;
  --radius-tags: 16000px;
  --radius-buttons: 7.2px;
  --radius-circular: 100%;
  --radius-calltoaction: 7.2px;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
  --surface-crisp-white-canvas: #ffffff;
  --surface-ink-black-surface: #2b2f36;
  --surface-pizza-red-accent: #ed2023;
}
```
