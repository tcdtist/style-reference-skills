---
version: alpha
name: "F. MILLER"
description: "F. MILLER presents a serene, natural aesthetic through a desaturated, almost monochromatic palette of warm grays and muted greens, evoking an apothecary-like simplicity. Typography is understated and functional, with subtle letter spacing adjustments for a precise, unadorned feel. Components are minimal, often borderless or with hairline borders, and elevation is primarily achieved through subtle shifts in background color rather than shadows, creating a lightweight and tactile surface design."
theme: "light"
industry: "ecommerce"
source_url: "https://fmillerskincare.com"
refero_style_id: "c96d2252-84d9-4770-8afe-8de570102124"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519026653-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519026653-thumb.jpg"
extracted_at: "2026-04-30T03:17:28.288Z"
---

# F. MILLER — Style Reference

> Apothecary's botanical canvas

**Theme:** light

**Industry:** ecommerce

F. MILLER presents a serene, natural aesthetic through a desaturated, almost monochromatic palette of warm grays and muted greens, evoking an apothecary-like simplicity. Typography is understated and functional, with subtle letter spacing adjustments for a precise, unadorned feel. Components are minimal, often borderless or with hairline borders, and elevation is primarily achieved through subtle shifts in background color rather than shadows, creating a lightweight and tactile surface design.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Parchment | #fdfbf6 | `--color-canvas-parchment` | Primary page canvas and base background for light UI elements |
| Cream Surface | #f8f1e1 | `--color-cream-surface` | Secondary surface background for cards, modals, and input fields |
| Sage Shadow | #464c3a | `--color-sage-shadow` | Primary text color, dark borders, and some interactive elements. This muted green-gray anchors the palette |
| Moss Accent | #3f4536 | `--color-moss-accent` | Link text, prominent borders, and as an accent for subtle hover states |
| Text Black | #000000 | `--color-text-black` | High-contrast text for headings and critical information |
| Muted Placeholder | #b7b7b7 | `--color-muted-placeholder` | Placeholder text in input fields |
| Subtle Charcoal | #373f47 | `--color-subtle-charcoal` | Subtle button borders and decorative strokes |

## Tokens — Typography

### basic-commercial

- **Token:** `--font-basic-commercial`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 8px, 10px, 11px, 12px, 16px, 18px, 24px, 30px
- **Line heights:** 1.00, 1.20, 2.00, 3.00
- **Letter spacing:** -0.013em (at 30px), -0.017em (at 24px), -0.022em (at 18px), -0.025em (at 16px), -0.033em (at 12px), -0.036em (at 11px), -0.040em (at 10px), -0.050em (at 8px)
- **Role:** Primary UI font for body text, navigation, links, and buttons. Its fixed width contributes to a precise, engineered feel. The consistent weight 400 maintains visual neutrality across various sizes.

### AkzidenzGrotesk

- **Token:** `--font-akzidenzgrotesk`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 14px, 15px, 16px, 20px, 24px, 30px
- **Line heights:** 1.00, 1.20, 1.50
- **Letter spacing:** 0.013em (at 30px), 0.017em (at 24px), 0.027em (at 20px), 0.029em (at 16px), 0.029em (at 15px), 0.029em (at 14px)
- **Role:** Used sparingly for headings and specific callouts, this font provides a clean, sans-serif contrast. The subtle positive letter-spacing adds airiness.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 2 | — | `--text-caption` |
| body-sm | 11px | 2 | — | `--text-body-sm` |
| body | 12px | 2 | — | `--text-body` |
| body-lg | 16px | 2 | — | `--text-body-lg` |
| heading-sm | 18px | 2 | — | `--text-heading-sm` |
| heading | 24px | 1.3 | — | `--text-heading` |
| heading-lg | 30px | 1.3 | — | `--text-heading-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-110 | 110px | `--spacing-110` |
| spacing-115 | 115px | `--spacing-115` |
| spacing-123 | 123px | `--spacing-123` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-180 | 180px | `--spacing-180` |
| spacing-188 | 188px | `--spacing-188` |
| spacing-220 | 220px | `--spacing-220` |

### Border Radius

| Element | Value |
| --- | --- |
| all | 2px |
| cards | 0px |
| inputs | 0px |
| buttons | 2px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 144px |
| cardPadding | 0px |
| elementGap | 20px |

## Components

### Text Link Button

**Role:** Navigation and subtle actions

Minimalist button with no background or padding, only text in Sage Shadow (#464c3a). Hover state shows an underline in Moss Accent (#3f4536) at 1px height. Typography is basic-commercial, weight 400.

### Ghost Circular Button

**Role:** Icon-only actions like close buttons

Transparent background, text color in Sage Shadow (#464c3a). Round shape (50% border radius) for small, dismissive actions. Typography is basic-commercial, weight 400.

### Primary Filled Button

**Role:** Main calls to action

Solid Sage Shadow (#464c3a) background with Text Black (#000000) text for minimal contrast, but with brand primary color emphasis. Padding is 0px top/bottom, 10px left/right. Radius is 0px. Typography is basic-commercial, weight 400.

### Outline Submit Button

**Role:** Secondary form submission

Used for newsletter subscriptions. Transparent background with Sage Shadow (#464c3a) text and a 1px solid border in Subtle Charcoal (#373f47). Padding is 0px top/bottom, 10px left/right. Radius is 0px. Typography is basic-commercial, weight 400.

### Simple Card

**Role:** Product listings, content containers

Cards have no distinct background, radius, or shadow, blending seamlesly with the Canvas Parchment (#fdfbf6) or Cream Surface (#f8f1e1) backgrounds. Padding is 0px.

### Standard Text Input

**Role:** Form text entry fields

Transparent background with Sage Shadow (#464c3a) text. A 1px border in Moss Accent (#3f4536) when focused. Placeholder text in Muted Placeholder (#b7b7b7). No border radius.

### Newsletter Input with Background

**Role:** Specific inputs requiring visual distinction

Input field with a Cream Surface (#f8f1e1) background and Sage Shadow (#464c3a) text. Placeholder text in Muted Placeholder (#b7b7b7). 16px left padding.

## Do's and Don'ts

### Do

- Use Canvas Parchment (#fdfbf6) as the default background for all page sections unless an elevated surface is explicitly requested.
- Apply Sage Shadow (#464c3a) for all primary body text and main interaction elements to maintain the brand's muted tone.
- Ensure all interactive elements, including buttons and links, use the basic-commercial font at weight 400 with specific letter-spacing adjustments.
- Employ a 0px border-radius for most containers and cards, maintaining a sharp, clean edge, with the occasional 2px radius for small elements like buttons.
- Prioritize background color changes and subtle border lines over drop shadows for creating visual hierarchy between elements.
- Maintain minimal padding (0-10px) around interactive elements to contribute to a compact and efficient UI density.
- Use AkzidenzGrotesk only for primary headings, ensuring a slightly airy feel with appropriate positive letter-spacing.

### Don't

- Avoid generic large drop shadows; elevation should primarily be achieved through background color shifts or hairline borders.
- Do not introduce highly saturated or vivid colors outside of the established Sage Shadow and Moss Accent tones.
- Do not vary font weights for basic-commercial; always use weight 400 for consistency.
- Avoid heavy borders or solid backgrounds on cards; they should maintain a lightweight appearance, often blending with the page background.
- Do not deviate from the specified letter-spacing values, as they are crucial to the typographic personality.
- Do not use generic system fonts; stick to basic-commercial and AkzidenzGrotesk for all text.
- Do not use high-contrast white text on Sage Shadow or Moss Accent backgrounds, use Text Black for increased legibility and subtlety.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Parchment | #fdfbf6 | Base page background |
| 1 | Cream Surface | #f8f1e1 | Modals, product cards, input backgrounds, subtle elevated sections |

## Imagery

Imagery primarily features tight product crops on pure white or softly blurred backgrounds, emphasizing product details without distracting lifestyle contexts. The treatment is clean and isolated, with no overlapping elements or complex masks. Icons, if present, are minimal (e.g., arrows, close 'x' marks), thin-stroked, and mono-color, typically in Sage Shadow (#464c3a). The overall density is balanced, allowing product visuals to breathe while text provides context, maintaining a focus on the product itself.

## Layout

The page primarily uses a full-bleed layout, with content often bleeding to the edges. The hero section often features large product photography. Content sections typically alternate between centered stacks and split text+visual arrangements, frequently with the main content aligned to the left. The site uses a responsive grid for product listings, but specific column counts are not consistently defined outside of product feeds. Vertical rhythm is established through consistent section-level spacing rather than strong visual dividers. Navigation is a minimal top bar, which may or may not be sticky, offering subtle interactive elements.

## Similar Brands

- **Glossier** — Similar focus on product-first visuals, clean UI, and a soft, muted color palette with a single accent color.
- **Aesop** — Shared aesthetic of apothecary-inspired design, minimalist typography, and a subdued, earth-toned color scheme.
- **Byredo** — Employs an elegant, understated visual language with monochrome UI and subtle branding, letting packaging and product photography take center stage.
- **Necessaire** — Clean, product-focused e-commerce with a similar restraint in color and a preference for simple, classic typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-parchment: #fdfbf6;
  --color-cream-surface: #f8f1e1;
  --color-sage-shadow: #464c3a;
  --color-moss-accent: #3f4536;
  --color-text-black: #000000;
  --color-muted-placeholder: #b7b7b7;
  --color-subtle-charcoal: #373f47;
  --font-basic-commercial: 'basic-commercial', IBM Plex Mono;
  --font-akzidenzgrotesk: 'AkzidenzGrotesk', Inter;
  --text-caption: 10px;
  --leading-caption: 2;
  --text-body-sm: 11px;
  --leading-body-sm: 2;
  --text-body: 12px;
  --leading-body: 2;
  --text-body-lg: 16px;
  --leading-body-lg: 2;
  --text-heading-sm: 18px;
  --leading-heading-sm: 2;
  --text-heading: 24px;
  --leading-heading: 1.3;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.3;
  --spacing-0: 0px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --spacing-110: 110px;
  --spacing-115: 115px;
  --spacing-123: 123px;
  --spacing-144: 144px;
  --spacing-180: 180px;
  --spacing-188: 188px;
  --spacing-220: 220px;
  --radius-all: 2px;
  --radius-cards: 0px;
  --radius-inputs: 0px;
  --radius-buttons: 2px;
  --surface-canvas-parchment: #fdfbf6;
  --surface-cream-surface: #f8f1e1;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-parchment: #fdfbf6;
  --color-cream-surface: #f8f1e1;
  --color-sage-shadow: #464c3a;
  --color-moss-accent: #3f4536;
  --color-text-black: #000000;
  --color-muted-placeholder: #b7b7b7;
  --color-subtle-charcoal: #373f47;
  --font-basic-commercial: 'basic-commercial', IBM Plex Mono;
  --font-akzidenzgrotesk: 'AkzidenzGrotesk', Inter;
  --text-caption: 10px;
  --leading-caption: 2;
  --text-body-sm: 11px;
  --leading-body-sm: 2;
  --text-body: 12px;
  --leading-body: 2;
  --text-body-lg: 16px;
  --leading-body-lg: 2;
  --text-heading-sm: 18px;
  --leading-heading-sm: 2;
  --text-heading: 24px;
  --leading-heading: 1.3;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.3;
  --spacing-0: 0px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --spacing-110: 110px;
  --spacing-115: 115px;
  --spacing-123: 123px;
  --spacing-144: 144px;
  --spacing-180: 180px;
  --spacing-188: 188px;
  --spacing-220: 220px;
  --radius-all: 2px;
  --radius-cards: 0px;
  --radius-inputs: 0px;
  --radius-buttons: 2px;
  --surface-canvas-parchment: #fdfbf6;
  --surface-cream-surface: #f8f1e1;
}
```
