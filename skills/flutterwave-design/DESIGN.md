---
version: alpha
name: "Flutterwave Design"
description: "Flutterwave Design employs a high-contrast, clean canvas aesthetic, featuring bold headlines and a structured layout. The visual design emphasizes readability with dark typography on a predominantly light background, punctuated by a single vivid yellow accent for interactive elements. Imagery is abstract and often uses strong color blocking, contributing to a modern, almost digital-art feel. Components are compact and functional, supporting a dense yet organized information delivery."
theme: "light"
industry: "design"
source_url: "https://www.flutterwave.design"
refero_style_id: "97bbc1bd-873f-4048-b4cc-b20ea2e70097"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520269378-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520269378-thumb.jpg"
extracted_at: "2026-04-30T03:38:09.523Z"
---

# Flutterwave Design — Style Reference

> High-contrast digital artboard

**Theme:** light

**Industry:** design

Flutterwave Design employs a high-contrast, clean canvas aesthetic, featuring bold headlines and a structured layout. The visual design emphasizes readability with dark typography on a predominantly light background, punctuated by a single vivid yellow accent for interactive elements. Imagery is abstract and often uses strong color blocking, contributing to a modern, almost digital-art feel. Components are compact and functional, supporting a dense yet organized information delivery.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Cloud Canvas | #fff9f1 | `--color-cloud-canvas` | Page background, primary surface for content blocks |
| Storm Gray | #171717 | `--color-storm-gray` | Primary body text, borders, navigation elements. Provides strong contrast against light surfaces |
| Deep Ink | #12122c | `--color-deep-ink` | Headings, prominent text, and specific text elements. This muted violet-black color adds a subtle visual richness without compromising readability |
| Silver Mist | #b5b5b5 | `--color-silver-mist` | Secondary background surfaces, muted dividers, subtle card backgrounds |
| Ash Stone | #8b8b8b | `--color-ash-stone` | Tertiary background surfaces, hints of background texture |
| Eclipse | #000000 | `--color-eclipse` | Strongest accent for text on buttons and specific icon elements, acting as a true black for maximum definition |
| Marigold Glow | #f5a623 | `--color-marigold-glow` | Primary action background (buttons, certain interactive elements) – a vivid yellow that stands out against the neutral palette |

## Tokens — Typography

### Moderat

- **Token:** `--font-moderat`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 18px, 20px, 22px
- **Line heights:** 1.18, 1.20, 1.60, 1.63
- **Letter spacing:** -0.036em
- **Role:** Primary body text, links, descriptions, and secondary headings. Its consistent tracking across sizes helps maintain a structured yet legible appearance.

### Millik

- **Token:** `--font-millik`
- **Substitute:** Montserrat
- **Weights:** 700, 800
- **Sizes:** 32px, 60px
- **Line heights:** 1.20
- **Letter spacing:** -0.025em at 60px, -0.013em at 32px
- **Role:** Prominent headings and display text. Its bold weights and tight negative letter-spacing create a confident, assertive visual voice for key messages.

### Flutterwave

- **Token:** `--font-flutterwave`
- **Substitute:** Roboto
- **Weights:** 400
- **Sizes:** 14px, 16px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Functional text for icons and buttons where space is constrained and a neutral, legible voice is required. Likely a brand-specific utility font.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.18 | -0.432px | `--text-caption` |
| body-sm | 14px | 1.2 | -0.504px | `--text-body-sm` |
| body | 16px | 1.6 | -0.576px | `--text-body` |
| subheading | 18px | 1.63 | -0.648px | `--text-subheading` |
| heading-sm | 20px | 1.2 | -0.72px | `--text-heading-sm` |
| heading | 22px | 1.2 | -0.792px | `--text-heading` |
| heading-lg | 32px | 1.2 | -0.416px | `--text-heading-lg` |
| display | 60px | 1.2 | -0.78px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-130 | 130px | `--spacing-130` |
| spacing-180 | 180px | `--spacing-180` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 5px |
| other | 5px |
| inputs | 5px |
| buttons | 5px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 60px |
| cardPadding | 20px |
| elementGap | 10px |

## Components

### Subscribe Button

**Role:** Primary call-to-action button, featuring a distinct compound radius.

Background: Marigold Glow (#f5a623), Text: Eclipse (#000000). Border Radius: 0px 5px 5px 0px. Padding: 1px 6px. Type: Flutterwave, 16px, weight 400.

### Article Card (Curved Carousel)

**Role:** Display individual articles within a visually engaging, curved hero carousel.

Background: Silver Mist (#b5b5b5) or Storm Gray opaque variations (e.g., rgba(128, 128, 128, 0.58)). Border Radius: 5px. Text: White. No padding on card itself, content is full-bleed to the edge of the card.

### Standard Article Card

**Role:** Display individual articles in a grid layout, focusing on visual clarity and content hierarchy.

Background: Cloud Canvas (#fff9f1). Border Radius: 5px. Title text: Deep Ink (#12122c). Details text: Storm Gray (#171717). Image at top, text content below.

### Subscription Input Field

**Role:** User input field for email subscriptions, paired with a button.

Background: Transparent (rgba(0, 0, 0, 0)), Text: Storm Gray (#171717). Border: 1px Storm Gray (#171717). Border Radius: 5px 0px 0px 5px. Padding: 20px 32px.

## Do's and Don'ts

### Do

- Use Cloud Canvas (#fff9f1) as the default page background for sections, ensuring strong contrast with text.
- Apply a consistent 5px border radius to all interactive elements, cards, and input fields for a soft, unified edge treatment.
- Utilize Millik (700-800 weight) with tight letter-spacing for all primary headings, reinforcing a bold and confident tone.
- Reserve Marigold Glow (#f5a623) exclusively for primary action backgrounds, making calls-to-action highly visible.
- Maintain a clear visual hierarchy by rendering primary body text in Storm Gray (#171717) and headings in Deep Ink (#12122c), both on Cloud Canvas backgrounds.

### Don't

- Avoid using highly saturated colors for large background areas; maintain a light, neutral canvas.
- Do not deviate from the specified negative letter-spacing for Millik headings, as this is a key typographic characteristic.
- Do not use Marigold Glow (#f5a623) for text or borders; it is strictly an action background color.
- Do not introduce heavy shadows or gradients; rely on color contrast and subtle surface variations for depth.
- Do not use generic system fonts; stick to Moderat, Millik, and Flutterwave for a consistent brand voice.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Cloud Canvas | #fff9f1 | Base page background, light and airy foundation. |
| 2 | Silver Mist | #b5b5b5 | Secondary background for cards or subtle content distinctions, a slightly darker neutral tint. |
| 3 | Ash Stone | #8b8b8b | Tertiary background, hinting at layered depth or subtle segmentation. |

## Imagery

Imagery primarily consists of abstract, often colorful illustrations with strong graphic qualities. These visuals use broad color blocking and clean lines, creating a digital-art aesthetic rather than realistic depictions. Photography, if present, is usually tightly cropped and product-focused without lifestyle context. Icons are typically solid or filled, with a medium stroke weight where outlines exist, often using neutral colors or subtle brand accents. The role of imagery is decorative and atmospheric, contributing heavily to the brand's visual identity, often serving as visual anchors within content blocks or as hero elements. Density is moderate, with images typically contained within defined areas, complementing text rather than dominating the layout.

## Layout

The page primarily employs a max-width contained layout, likely around 1200-1400px, but with notable full-bleed sections, particularly the hero. The hero section features a prominent centered headline over a background that integrates a visually dynamic, curved carousel of content cards, creating a sense of movement and depth. Vertical rhythm is established through consistent section gaps, creating distinct content blocks. Content arrangement often utilizes a 3-column card grid for 'Latest Stories' and 'Vibes' sections, which balances visual information. Navigation is a simple top bar with left-aligned branding and right-aligned text links. Overall, the layout feels spacious yet structured, using strong visual sections to guide the user.

## Similar Brands

- **Stripe** — High-contrast text on light backgrounds, strong reliance on geometric typefaces with subtle color accents.
- **Figma** — Clean interface with emphasis on readability, a distinct, well-defined typographic hierarchy, and illustrative visual language.
- **Linear** — Compact layout for content, distinctive header typography and negative letter-spacing, using subtle neutrals for backgrounds and borders.
- **Vercel** — Dominant light mode, strong type choices, and a preference for abstract or technical illustrations rather than photography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-cloud-canvas: #fff9f1;
  --color-storm-gray: #171717;
  --color-deep-ink: #12122c;
  --color-silver-mist: #b5b5b5;
  --color-ash-stone: #8b8b8b;
  --color-eclipse: #000000;
  --color-marigold-glow: #f5a623;
  --font-moderat: 'Moderat', Inter;
  --font-millik: 'Millik', Montserrat;
  --font-flutterwave: 'Flutterwave', Roboto;
  --text-caption: 12px;
  --leading-caption: 1.18;
  --tracking-caption: -0.432px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.2;
  --tracking-body-sm: -0.504px;
  --text-body: 16px;
  --leading-body: 1.6;
  --tracking-body: -0.576px;
  --text-subheading: 18px;
  --leading-subheading: 1.63;
  --tracking-subheading: -0.648px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.72px;
  --text-heading: 22px;
  --leading-heading: 1.2;
  --tracking-heading: -0.792px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.416px;
  --text-display: 60px;
  --leading-display: 1.2;
  --tracking-display: -0.78px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-120: 120px;
  --spacing-130: 130px;
  --spacing-180: 180px;
  --radius-cards: 5px;
  --radius-other: 5px;
  --radius-inputs: 5px;
  --radius-buttons: 5px;
  --surface-cloud-canvas: #fff9f1;
  --surface-silver-mist: #b5b5b5;
  --surface-ash-stone: #8b8b8b;
}
```

### Tailwind v4

```css
@theme {
  --color-cloud-canvas: #fff9f1;
  --color-storm-gray: #171717;
  --color-deep-ink: #12122c;
  --color-silver-mist: #b5b5b5;
  --color-ash-stone: #8b8b8b;
  --color-eclipse: #000000;
  --color-marigold-glow: #f5a623;
  --font-moderat: 'Moderat', Inter;
  --font-millik: 'Millik', Montserrat;
  --font-flutterwave: 'Flutterwave', Roboto;
  --text-caption: 12px;
  --leading-caption: 1.18;
  --tracking-caption: -0.432px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.2;
  --tracking-body-sm: -0.504px;
  --text-body: 16px;
  --leading-body: 1.6;
  --tracking-body: -0.576px;
  --text-subheading: 18px;
  --leading-subheading: 1.63;
  --tracking-subheading: -0.648px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.72px;
  --text-heading: 22px;
  --leading-heading: 1.2;
  --tracking-heading: -0.792px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.416px;
  --text-display: 60px;
  --leading-display: 1.2;
  --tracking-display: -0.78px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-120: 120px;
  --spacing-130: 130px;
  --spacing-180: 180px;
  --radius-cards: 5px;
  --radius-other: 5px;
  --radius-inputs: 5px;
  --radius-buttons: 5px;
  --surface-cloud-canvas: #fff9f1;
  --surface-silver-mist: #b5b5b5;
  --surface-ash-stone: #8b8b8b;
}
```
