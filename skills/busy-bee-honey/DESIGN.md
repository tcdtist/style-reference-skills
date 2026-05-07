---
version: alpha
name: "Busy Bee Honey"
description: "Busy Bee Honey's design system evokes a rustic, wholesome, and approachable brand character. It uses warm, earthy tones contrasting with a clean, light background and vibrant accent colors. Typography combines a classic serif for branding and headings with highly legible sans-serif for body text, creating a sense of heritage and trustworthiness. Components are soft and generous, prioritizing comfort over sharp precision, with rounded shapes and ample padding."
theme: "light"
industry: "ecommerce"
source_url: "https://www.busybeehoney.com"
refero_style_id: "9836e7c2-ac8e-453d-bdef-2677eb078d59"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508110654-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508110654-thumb.jpg"
extracted_at: "2026-04-30T00:15:32.732Z"
---

# Busy Bee Honey — Style Reference

> Golden Harvest Comfort: a sun-drenched, natural warmth with a handmade touch.

**Theme:** light

**Industry:** ecommerce

Busy Bee Honey's design system evokes a rustic, wholesome, and approachable brand character. It uses warm, earthy tones contrasting with a clean, light background and vibrant accent colors. Typography combines a classic serif for branding and headings with highly legible sans-serif for body text, creating a sense of heritage and trustworthiness. Components are soft and generous, prioritizing comfort over sharp precision, with rounded shapes and ample padding.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Honeycomb Gold | #ffca50 | `--color-honeycomb-gold` | Decorative background accents, outlined button borders, navigation background for current page |
| Earth Brown | #3b2722 | `--color-earth-brown` | Primary typography, high-contrast text, filled buttons, structural borders |
| Sky Blue | #6aacc2 | `--color-sky-blue` | Secondary background accents, navigation highlights |
| Warm Cream | #f2ebd0 | `--color-warm-cream` | Page backgrounds, surface elements, muted text |
| Black Ink | #000000 | `--color-black-ink` | High-contrast text, borders, decorative elements |
| Harvest Green | #6fa162 | `--color-harvest-green` | Green wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Cacao Red | #a0342a | `--color-cacao-red` | Red outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |

## Tokens — Typography

### TayMakawao

- **Token:** `--font-taymakawao`
- **Substitute:** Merriweather, Playfair Display
- **Weights:** 400
- **Sizes:** 28px, 90px, 135px, 209px, 238px
- **Line heights:** 0.80, 0.82, 1.00
- **Letter spacing:** -0.0100em
- **Role:** Display and primary headings – an unconventional serif with tight tracking, giving a handcrafted yet bold presence. Substitute: Merriweather, Playfair Display.

### TayBirdie

- **Token:** `--font-taybirdie`
- **Weights:** 400
- **Sizes:** 12px, 14px, 16px, 20px
- **Line heights:** 1.00, 1.10, 1.50
- **Letter spacing:** normal
- **Role:** Navigation, subheadings, and specific call-out text – a unique serif that complements the primary display font. Substitute: Georgia, Lora.

### Times

- **Token:** `--font-times`
- **Substitute:** Georgia, Lora
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** System serif for general body text and product descriptions where long-form readability is key. Substitute: Georgia, Lora.

### AnonymousPro

- **Token:** `--font-anonymouspro`
- **Substitute:** Roboto Mono, Space Mono
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.61
- **Letter spacing:** 0.0310em
- **Role:** Specialized text, possibly for code or unique labels, with generous letter spacing.

### barkmanhoney

- **Token:** `--font-barkmanhoney`
- **Weights:** 400
- **Sizes:** 13px, 16px, 24px, 65px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Specific branding elements and decorative text; appears to be a unique ornamental font. Substitute: none, use as image where possible.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Helvetica, Open Sans
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Fallback sans-serif for button labels and small utilitarian text. Substitute: Helvetica, Open Sans.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1 | 0px | `--text-caption` |
| body | 14px | 1.1 | 0px | `--text-body` |
| body-lg | 16px | 1.2 | 0px | `--text-body-lg` |
| subheading | 20px | 1.5 | 0px | `--text-subheading` |
| heading | 28px | 1 | -0.448px | `--text-heading` |
| heading-lg | 90px | 0.82 | -14.4px | `--text-heading-lg` |
| display | 238px | 0.8 | -38.08px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-298 | 298px | `--spacing-298` |

### Border Radius

| Element | Value |
| --- | --- |
| body | 42.75px |
| buttons | 500px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 32px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Primary Filled Button

**Role:** Main call-to-action button.

Background: Earth Brown (`#3b2722`), Text: Warm Cream (`#f2ebd0`), Border Radius: 500px, Padding: 24px all sides. Uses system sans-serif `Arial`.

### Ghost Outlined Button (Earth Brown)

**Role:** Secondary action or subtle navigation.

Background: Transparent (`rgba(255, 255, 255, 0)`), Text: Earth Brown (`#3b2722`), Border: 1px Earth Brown, Border Radius: 1000px, Padding: 24px vertical, 40px horizontal. Uses system sans-serif `Arial`.

### Ghost Outlined Button (Black)

**Role:** Neutral tertiary action.

Background: Transparent (`rgba(0, 0, 0, 0)`), Text: Black Ink (`#000000`), Border: 1px Black Ink, Border Radius: 500px, Padding: 0px. Uses system sans-serif `Arial`.

### Basic Card

**Role:** Container for content where no elevation or strong visual separation is needed.

Background: Transparent, Border Radius: 0px, No shadow. Padding: 0px.

## Do's and Don'ts

### Do

- Use Earth Brown (`#3b2722`) for primary text and calls to action to maintain brand consistency.
- Apply 500px or 1000px border-radius to all interactive elements like buttons for a soft, friendly feel.
- Prioritize TayMakawao for large headlines using its tight letter-spacing for visual impact.
- Utilize Warm Cream (`#f2ebd0`) as the dominant background color for content sections.
- Employ consistent 24px vertical and 40px horizontal padding for main ghost buttons.
- Use Honeycomb Gold (`#ffca50`) and Sky Blue (`#6aacc2`) sparingly as accent colors for distinct elements or to indicate active states.

### Don't

- Avoid sharp corners; all functional UI elements should have a significant border radius.
- Do not use generic system fonts for branding or primary headlines where TayMakawao or TayBirdie are intended.
- Do not overuse accent colors; most of the UI should remain in the neutral and Earth Brown palette.
- Avoid complex shadow systems; the design system appears to favor flat surfaces.
- Do not vary line heights excessively within body text; maintain a comfortable 1.2-1.5 ratio.
- Do not use transparent backgrounds for text-heavy sections; ensure sufficient contrast with solid background colors.

## Imagery

The imagery features highly stylized product photography (honey bottles), often floating or placed centrally against a strong brand-colored background. Illustrations are minimal but present, such as bee icons, adding a whimsical touch without overpowering the product. Icons are either outlined or filled, with a moderate stroke weight, and monochrome. The overall density is low, allowing images to occupy significant visual space and act as focal points, primarily for product showcase and brand atmosphere rather than explanatory content.

## Layout

The page primarily uses a full-bleed layout, where background colors or large imagery stretch across the viewport width. The hero section features a large, centered headline over a dark, full-width background, with a prominent product image. Subsequent sections vary, often incorporating alternating full-width color bands (e.g., Warm Cream, Honeycomb Gold). Content within these bands tends to be centrally aligned or uses two-column text and image arrangements. Vertical spacing between sections is generous, establishing a comfortable, unhurried rhythm. Navigation is a top bar, with interactive elements subtly highlighted on hover.

## Similar Brands

- **Burt's Bees** — Natural, earthy color palette combined with classic serif typography for a wholesome, heritage feel.
- **King Arthur Baking Company** — Focus on high-quality product photography, rustic aesthetic, and a blend of traditional and approachable typography.
- **Local Honey Co-ops** — Emphasis on natural elements, transparent sourcing, and soft, comforting user experience with classic, non-techy design.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-honeycomb-gold: #ffca50;
  --color-earth-brown: #3b2722;
  --color-sky-blue: #6aacc2;
  --color-warm-cream: #f2ebd0;
  --color-black-ink: #000000;
  --color-harvest-green: #6fa162;
  --color-cacao-red: #a0342a;
  --font-taymakawao: 'TayMakawao', Merriweather, Playfair Display;
  --font-taybirdie: 'TayBirdie', ui-sans-serif, system-ui, sans-serif;
  --font-times: 'Times', Georgia, Lora;
  --font-anonymouspro: 'AnonymousPro', Roboto Mono, Space Mono;
  --font-barkmanhoney: 'barkmanhoney', ui-sans-serif, system-ui, sans-serif;
  --font-arial: 'Arial', Helvetica, Open Sans;
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: 0px;
  --text-body: 14px;
  --leading-body: 1.1;
  --tracking-body: 0px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --tracking-subheading: 0px;
  --text-heading: 28px;
  --leading-heading: 1;
  --tracking-heading: -0.448px;
  --text-heading-lg: 90px;
  --leading-heading-lg: 0.82;
  --tracking-heading-lg: -14.4px;
  --text-display: 238px;
  --leading-display: 0.8;
  --tracking-display: -38.08px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-52: 52px;
  --spacing-80: 80px;
  --spacing-298: 298px;
  --radius-body: 42.75px;
  --radius-buttons: 500px;
}
```

### Tailwind v4

```css
@theme {
  --color-honeycomb-gold: #ffca50;
  --color-earth-brown: #3b2722;
  --color-sky-blue: #6aacc2;
  --color-warm-cream: #f2ebd0;
  --color-black-ink: #000000;
  --color-harvest-green: #6fa162;
  --color-cacao-red: #a0342a;
  --font-taymakawao: 'TayMakawao', Merriweather, Playfair Display;
  --font-taybirdie: 'TayBirdie', ui-sans-serif, system-ui, sans-serif;
  --font-times: 'Times', Georgia, Lora;
  --font-anonymouspro: 'AnonymousPro', Roboto Mono, Space Mono;
  --font-barkmanhoney: 'barkmanhoney', ui-sans-serif, system-ui, sans-serif;
  --font-arial: 'Arial', Helvetica, Open Sans;
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: 0px;
  --text-body: 14px;
  --leading-body: 1.1;
  --tracking-body: 0px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --tracking-subheading: 0px;
  --text-heading: 28px;
  --leading-heading: 1;
  --tracking-heading: -0.448px;
  --text-heading-lg: 90px;
  --leading-heading-lg: 0.82;
  --tracking-heading-lg: -14.4px;
  --text-display: 238px;
  --leading-display: 0.8;
  --tracking-display: -38.08px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-52: 52px;
  --spacing-80: 80px;
  --spacing-298: 298px;
  --radius-body: 42.75px;
  --radius-buttons: 500px;
}
```
