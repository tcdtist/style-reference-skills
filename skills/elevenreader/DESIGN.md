---
version: alpha
name: "ElevenReader"
description: "This design evokes a sense of airy professionalism, like a digital stage bathed in diffused light presenting focused information. The near-monochromatic palette uses subtle off-whites and grays to create spaciousness, punctuated by sharp black text and interactive elements. The deliberate contrast between full-round pill shapes and sharp 16px corners on cards establishes a nuanced balance between approachable softness and precise functionality."
theme: "light"
industry: "productivity"
source_url: "https://elevenreader.io"
refero_style_id: "c51c8371-0e42-4bdf-9766-c9eac5eee9a5"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933159505-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933159505-thumb.jpg"
extracted_at: "2026-04-11T18:46:17.291Z"
---

# ElevenReader — Style Reference

> diffused light on a minimalist stage

**Theme:** light

**Industry:** productivity

This design evokes a sense of airy professionalism, like a digital stage bathed in diffused light presenting focused information. The near-monochromatic palette uses subtle off-whites and grays to create spaciousness, punctuated by sharp black text and interactive elements. The deliberate contrast between full-round pill shapes and sharp 16px corners on cards establishes a nuanced balance between approachable softness and precise functionality.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, buttons, brand elements — provides stark contrast on light backgrounds. |
| Cloud White | #ffffff | `--color-cloud-white` | Page backgrounds, card surfaces, button text — ensures clarity and an open feel. |
| Ash Gray | #e5e5e5 | `--color-ash-gray` | Subtle borders, dividers, inactive states — defines structure without distraction. |
| Pale Mist | #f2f2f2 | `--color-pale-mist` | Secondary button backgrounds, section backgrounds — provides a gentle visual break from stark white. |
| Faded Sky | #f2f5fc | `--color-faded-sky` | Subtle background shading — introduces a hint of cool without overt color. |
| Steel Gray | #767676 | `--color-steel-gray` | Secondary text, descriptive elements — lighter than primary text for hierarchy. |
| Charcoal Haze | #6e6e6 | `--color-charcoal-haze` | Tertiary text, subtle hints — even less prominent than secondary text. |
| Muted Lavender | #c8d5f4 | `--color-muted-lavender` | Decorative background accent — provides a very subtle chromatic undertone without becoming a brand color. |
| Verdant Aura | #243f2b | `--color-verdant-aura` | Accent gradient start, contributing to atmospheric background effects. |
| Forest Dew | #c6e7d6 | `--color-forest-dew` | Subtle background gradient end, creating a soft, natural transition. |

## Tokens — Typography

### WaldenburgHF

- **Token:** `--font-waldenburghf`
- **Substitute:** Inter
- **Weights:** 700
- **Sizes:** 28px, 32px, 48px
- **Line heights:** 1.10
- **Letter spacing:** 0.01
- **Role:** Display and primary section headings — custom font lending a distinct, modern digital signature.

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui
- **Weights:** 400, 700
- **Sizes:** 12px, 14px, 16px, 18px
- **Line heights:** 1.10, 1.40, 1.43, 1.60
- **Letter spacing:** 0.01
- **Role:** All body text, navigation, buttons, and secondary headings — provides high readability and a clean, technical feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.1 | 0.01px | `--text-caption` |
| body-sm | 14px | 1.4 | 0.01px | `--text-body-sm` |
| body | 16px | 1.43 | 0.01px | `--text-body` |
| subheading | 18px | 1.6 | 0.01px | `--text-subheading` |
| heading | 28px | 1.1 | 0.01px | `--text-heading` |
| heading-lg | 32px | 1.1 | 0.01px | `--text-heading-lg` |
| display | 48px | 1.1 | 0.01px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-61 | 61px | `--spacing-61` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-125 | 125px | `--spacing-125` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-199 | 199px | `--spacing-199` |
| spacing-200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| links | 2px |
| buttons | 9999px |
| ctaCard | 30px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(16, 24, 40, 0.05) 0px 1px 2px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1304px |
| sectionGap | 40px |
| cardPadding | 0px |
| elementGap | 8px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### FAQ Accordion

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### App Download QR Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Secondary Action Button

**Role:** Filled button for secondary actions.

Background: Pale Mist (#f2f2f2), Text: Midnight Ink (#000000), Border: Ash Gray (#e5e5e5), Radius: 9999px, Padding: 0px 16px.

### Tertiary Action Button

**Role:** Outline button for less prominent actions.

Background: Cloud White (#ffffff), Text: Midnight Ink (#000000), Border: Ash Gray (#e5e5e5), Radius: 9999px, Padding: 0px 12px.

### Ghost Button

**Role:** Minimal button for subtle interactions.

Background: transparent (rgba(0,0,0,0)), Text: Midnight Ink (#000000), Border: Ash Gray (#e5e5e5), Radius: 9999px, Padding: 2px 12px.

### Transparent Card

**Role:** Card with no background, for organizing content.

Background: transparent (rgba(0,0,0,0)), Border: none, Radius: 0px, Shadow: none, Padding: 0px.

### Rounded Information Card

**Role:** Card for containing distinct information blocks.

Background: transparent (rgba(0,0,0,0)), Border: none, Radius: 16px, Shadow: none, Padding: 0px 64px.

### Navigation Link

**Role:** Top navigation item.

Text: Midnight Ink (#000000), Underline: none, Font: Inter, Weight: 400, Size: 16px, Line Height: 1.43.

### Hero Headline

**Role:** Primary page title.

Text: Midnight Ink (#000000), Font: WaldenburgHF, Weight: 700, Size: 48px, Line Height: 1.1, Letter Spacing: 0.01em.

### QR Code Callout

**Role:** Promotional card for app download.

Background: Cloud White (#ffffff), Border: 1px solid Ash Gray (#e5e5e5), Radius: 16px, Padding: 20px, Shadow: rgba(16, 24, 40, 0.05) 0px 1px 2px 0px.

## Do's and Don'ts

### Do

- Use Cloud White (#ffffff) as the primary page background to maintain an open and airy aesthetic.
- Apply Midnight Ink (#000000) for all primary text elements and main CTA backgrounds for maximum contrast.
- Round all interactive buttons and navigation elements with a 9999px radius for visual softness and approachability.
- Utilize WaldenburgHF font for headlines (28px, 32px, 48px) at weight 700 to establish a bold yet refined presence.
- Employ Ash Gray (#e5e5e5) for thin borders and dividers to structure content subtly.
- Maintain generous vertical spacing between sections, primarily using the 40px `sectionGap` token.
- Group related information within cards with a 16px border-radius and minimal or no background (#ffffff or transparent).

### Don't

- Avoid strong, saturated colors; stick to the neutral palette and only use subtle chromatic hints for atmosphere.
- Do not use sharp corners for interactive elements; buttons and navigation should always be fully rounded (9999px).
- Refrain from heavy shadows; subtle shadows like `rgba(16, 24, 40, 0.05) 0px 1px 2px 0px` are acceptable only for floating elements.
- Do not vary from the Inter font family for body text, navigation, and secondary UI elements to maintain consistency.
- Avoid tight element spacing; ensure a minimum `elementGap` of 8px to preserve an uncluttered layout.
- Do not use dark backgrounds for main content sections; the system is designed for a light theme with ample whitespace.

## Elevation

- **Shadow 1:** `rgba(16, 24, 40, 0.05) 0px 1px 2px 0px`

## Imagery

The visual language is dominantly product-focused, featuring tight crops of mobile device screens showcasing the ElevenReader app UI. These are typically contained and isolated, without decorative masks or overlapping elements. Photography appears absent. Illustrations consist of 2D, filled icons with a light stroke weight, used primarily for functional purposes (e.g., QR code). Abstract gradients occasionally provide decorative background context, but they are soft and desaturated, never overwhelming the UI. The density is text-dominant, with imagery serving to explain or demonstrate product features rather than create atmosphere.

## Layout

The page adheres to a max-width contained model (1304px), with content centered within this boundary. The hero section is a full-width presentation featuring a bold, centered headline and subtext, often laid over a subtle background gradient. Section rhythm is predominantly defined by consistent vertical spacing, creating spacious breathing room between content blocks. Content arrangement frequently uses horizontally aligned elements, such as multi-column layouts for features or news articles. Navigation is a sticky top bar, containing branding, main links, and clear calls-to-action on the right. Sidebars are not present, maintaining a clean, linear flow.

## Similar Brands

- **OpenAI** — Shares a clean, minimalist aesthetic with high contrast text on light backgrounds and a focus on clarity for AI products.
- **Readwise** — Features a similar spacious, text-dominant layout with subtle interactive cues and full-round buttons for primary actions.
- **Amplitude** — Employs a professional, white-space heavy design with clear typography and restrained use of color, often applying soft gradients for atmospheric effect.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-cloud-white: #ffffff;
  --color-ash-gray: #e5e5e5;
  --color-pale-mist: #f2f2f2;
  --color-faded-sky: #f2f5fc;
  --color-steel-gray: #767676;
  --color-charcoal-haze: #6e6e6;
  --color-muted-lavender: #c8d5f4;
  --color-verdant-aura: #243f2b;
  --color-forest-dew: #c6e7d6;
  --font-waldenburghf: 'WaldenburgHF', Inter;
  --font-inter: 'Inter', system-ui;
  --text-caption: 12px;
  --leading-caption: 1.1;
  --tracking-caption: 0.01px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: 0.01px;
  --text-body: 16px;
  --leading-body: 1.43;
  --tracking-body: 0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.6;
  --tracking-subheading: 0.01px;
  --text-heading: 28px;
  --leading-heading: 1.1;
  --tracking-heading: 0.01px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: 0.01px;
  --text-display: 48px;
  --leading-display: 1.1;
  --tracking-display: 0.01px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-60: 60px;
  --spacing-61: 61px;
  --spacing-64: 64px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-125: 125px;
  --spacing-140: 140px;
  --spacing-150: 150px;
  --spacing-199: 199px;
  --spacing-200: 200px;
  --radius-cards: 16px;
  --radius-links: 2px;
  --radius-buttons: 9999px;
  --radius-ctacard: 30px;
  --shadow-xl: rgba(16, 24, 40, 0.05) 0px 1px 2px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-cloud-white: #ffffff;
  --color-ash-gray: #e5e5e5;
  --color-pale-mist: #f2f2f2;
  --color-faded-sky: #f2f5fc;
  --color-steel-gray: #767676;
  --color-charcoal-haze: #6e6e6;
  --color-muted-lavender: #c8d5f4;
  --color-verdant-aura: #243f2b;
  --color-forest-dew: #c6e7d6;
  --font-waldenburghf: 'WaldenburgHF', Inter;
  --font-inter: 'Inter', system-ui;
  --text-caption: 12px;
  --leading-caption: 1.1;
  --tracking-caption: 0.01px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: 0.01px;
  --text-body: 16px;
  --leading-body: 1.43;
  --tracking-body: 0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.6;
  --tracking-subheading: 0.01px;
  --text-heading: 28px;
  --leading-heading: 1.1;
  --tracking-heading: 0.01px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: 0.01px;
  --text-display: 48px;
  --leading-display: 1.1;
  --tracking-display: 0.01px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-60: 60px;
  --spacing-61: 61px;
  --spacing-64: 64px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-125: 125px;
  --spacing-140: 140px;
  --spacing-150: 150px;
  --spacing-199: 199px;
  --spacing-200: 200px;
  --radius-cards: 16px;
  --radius-links: 2px;
  --radius-buttons: 9999px;
  --radius-ctacard: 30px;
  --shadow-xl: rgba(16, 24, 40, 0.05) 0px 1px 2px 0px;
}
```
