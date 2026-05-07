---
version: alpha
name: "Emmalewisham"
description: "Emma Lewisham presents a refined and classic aesthetic, characterized by a dominant muted pink-beige background against which a deep, vivid violet serves as the primary brand accent. Typography, featuring a serif for headings and a sans-serif for body text, is used with classic letter-spacing for legibility. Elements are generally soft and rounded, avoiding harsh lines, giving UI components a gentle, tactile quality that complements the natural skincare brand."
theme: "light"
industry: "ecommerce"
source_url: "https://emmalewisham.co.uk"
refero_style_id: "1e93f444-0b01-4412-aa2b-877be5ef08d7"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515484956-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515484956-thumb.jpg"
extracted_at: "2026-04-30T02:18:33.300Z"
---

# Emmalewisham — Style Reference

> Soft Pink Marble with Deep Orchid

**Theme:** light

**Industry:** ecommerce

Emma Lewisham presents a refined and classic aesthetic, characterized by a dominant muted pink-beige background against which a deep, vivid violet serves as the primary brand accent. Typography, featuring a serif for headings and a sans-serif for body text, is used with classic letter-spacing for legibility. Elements are generally soft and rounded, avoiding harsh lines, giving UI components a gentle, tactile quality that complements the natural skincare brand.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Vanilla Cream | #ffffff | `--color-vanilla-cream` | Primary surface background, card surfaces, ghost button text (when on dark backgrounds), light text |
| Powder Pink | #f2f1ef | `--color-powder-pink` | Page canvas background, subtle product display surfaces |
| Charcoal Ink | #000000 | `--color-charcoal-ink` | Primary body text, dark outline button borders, navigation links on light backgrounds |
| Smoke Gray | #a09c97 | `--color-smoke-gray` | Muted background for specific nav sections, subtle dividers |
| Deep Plum | #49369e | `--color-deep-plum` | Interactive elements, outlined button borders, key typography highlights, active navigation indicators — a vivid and deep brand signatory color |
| Lavender Mist | #a9a7db | `--color-lavender-mist` | Subtlety on lists and links, a lighter tint of the brand's signature purple |
| Warm Petal | #ec9bad | `--color-warm-petal` | Accent for navigation elements, small badge backgrounds, provides a soft counterpoint to the deep plum |

## Tokens — Typography

### Martina Plantijn

- **Token:** `--font-martina-plantijn`
- **Substitute:** Playfair Display
- **Weights:** 300, 400, 700
- **Sizes:** 11px, 13px, 14px, 16px, 20px, 30px
- **Line heights:** 1.00, 1.20, 1.25, 1.38, 1.40, 1.50, 1.63, 1.69, 1.82, 1.86
- **Letter spacing:** normal
- **Role:** Primary typeface for headings and larger display text. Its classic serif evokes elegance and heritage.

### Regola Pro Book

- **Token:** `--font-regola-pro-book`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 16px, 20px, 24px, 80px
- **Line heights:** 1.20, 1.25, 1.40, 1.63
- **Letter spacing:** normal
- **Role:** Used for body text, product descriptions, and other content-heavy areas. Its clean sans-serif ensures readability against varied backgrounds.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.5 | — | `--text-caption` |
| body | 16px | 1.86 | — | `--text-body` |
| subheading | 20px | 1.25 | — | `--text-subheading` |
| heading | 24px | 1.4 | — | `--text-heading` |
| heading-lg | 30px | 1.2 | — | `--text-heading-lg` |
| display | 80px | 1.2 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-195 | 195px | `--spacing-195` |
| spacing-260 | 260px | `--spacing-260` |

### Border Radius

| Element | Value |
| --- | --- |
| body | 10px |
| cards | 0px |
| buttons | 3px |
| navBadges | 50px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 30px |
| elementGap | 5px |

## Components

### Ghost Button - Deep Plum

**Role:** Primary call to action for interactive elements.

Transparent background with a 1px solid '--deep-plum' border and '--deep-plum' text. No padding, uses surrounding element spacing. Radius is 3px.

### Ghost Button - Charcoal Ink

**Role:** Secondary call to action.

Transparent background with a 1px solid '--charcoal-ink' border and '--charcoal-ink' text. No padding, uses surrounding element spacing. Radius is 0px.

### Image Card

**Role:** Product display or informational cards.

Transparent background, no border or shadow. Generous horizontal padding of 50px and no vertical padding. Radius is 0px.

### Text Input

**Role:** User input fields.

Transparent background. Features a 1px solid '--deep-plum' bottom border. Placeholder text is '--lavender-mist'. Internal left padding is 10px. Radius is 0px.

### Navigation Badge - Warm Petal

**Role:** Small, functional numerical indicators in navigation.

Background is '--warm-petal', text color is contrast-appropriate. Radius is 50px, creating a pill shape. No padding.

## Do's and Don'ts

### Do

- Use Martina Plantijn for all headings and display text, employing its 300 or 400 weight for a refined, understated presence.
- Apply Deep Plum (#49369e) exclusively for primary interactive states, outlined button borders, and key brand highlights, maintaining its vivid impact.
- Ensure all primary button elements are rendered as ghost buttons with a 1px border using either Deep Plum (#49369e) or Charcoal Ink (#000000).
- Employ Powder Pink (#f2f1ef) as the standard page background, providing a consistent soft canvas for all content.
- Utilize 3px radius for all button elements, providing a subtle softness without appearing overly playful.
- Maintain a comfortable density with element spacing often at 5px, and section gaps at 30px to create visual harmony.
- For inputs, use a transparent background and a 1px solid bottom border of Deep Plum (#49369e).

### Don't

- Do not use solid backgrounds for primary action buttons; all interactive buttons should be ghosted or outlined.
- Avoid using multiple vivid accent colors; restrict chromatic accents to Deep Plum (#49369e) and Warm Petal (#ec9bad).
- Do not apply strong elevation or shadows; the aesthetic is flat and tactile, relying on color and form for distinction.
- Do not override the classic 'normal' letter-spacing for Martina Plantijn or Regola Pro Book; maintain generous legibility.
- Avoid large, impactful heading weights; the brand language favors lighter weights for sophistication.
- Do not use default browser link colors (e.g., #0000EE); all links should be styled with Charcoal Ink (#000000) or Deep Plum (#49369e).
- Never use text colors that don't pass AAA contrast against their background unless they're clearly decorative and non-essential.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Page Canvas | #f2f1ef | The primary background for all page content, providing a soft, uniform base. |
| 2 | Content Card | #ffffff | Background for secondary content areas and cards, creating a subtle lift from the canvas. |

## Imagery

This site predominantly uses clean product photography. Products are typically presented as tight crops, often against a plain background (like the Powder Pink page canvas) or a pure white. The treatment is direct and focused on the product itself, with a clear emphasis on quality and detail. There is minimal lifestyle context. Icons are simple, likely outlined, and in monochrome or brand accent colors, serving purely functional roles.

## Layout

The page layout is primarily full-bleed with content often centered within an implied max-width container. The hero section features a large, product-focused image overlapping the header, establishing a premium and direct visual introduction. Sections generally follow a consistent vertical rhythm. Content arrangement appears to favor centered stacks or simple two-column layouts, particularly for text-left/image-right compositions. Navigation is a prominent top bar, appearing sticky, with both utility and primary links. The overall density feels comfortable and uncrowded, allowing product imagery and typography to breathe.

## Similar Brands

- **Aēsop** — Shares a sophisticated, minimalist aesthetic with a focus on product presentation over busy UI, and a limited, high-quality color palette.
- **Augustinus Bader** — Similar luxurious skincare brand with a restrained color palette, elegant typography, and clean layouts that let product imagery dominate.
- **Drunk Elephant** — Utilizes a clean, product-forward presentation, although with brighter accent colors, the overall emphasis on distinct product packaging against a minimalist background is comparable.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-vanilla-cream: #ffffff;
  --color-powder-pink: #f2f1ef;
  --color-charcoal-ink: #000000;
  --color-smoke-gray: #a09c97;
  --color-deep-plum: #49369e;
  --color-lavender-mist: #a9a7db;
  --color-warm-petal: #ec9bad;
  --font-martina-plantijn: 'Martina Plantijn', Playfair Display;
  --font-regola-pro-book: 'Regola Pro Book', Inter;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.86;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --text-heading: 24px;
  --leading-heading: 1.4;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.2;
  --text-display: 80px;
  --leading-display: 1.2;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-90: 90px;
  --spacing-120: 120px;
  --spacing-144: 144px;
  --spacing-195: 195px;
  --spacing-260: 260px;
  --radius-body: 10px;
  --radius-cards: 0px;
  --radius-buttons: 3px;
  --radius-navbadges: 50px;
  --surface-page-canvas: #f2f1ef;
  --surface-content-card: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-vanilla-cream: #ffffff;
  --color-powder-pink: #f2f1ef;
  --color-charcoal-ink: #000000;
  --color-smoke-gray: #a09c97;
  --color-deep-plum: #49369e;
  --color-lavender-mist: #a9a7db;
  --color-warm-petal: #ec9bad;
  --font-martina-plantijn: 'Martina Plantijn', Playfair Display;
  --font-regola-pro-book: 'Regola Pro Book', Inter;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.86;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --text-heading: 24px;
  --leading-heading: 1.4;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.2;
  --text-display: 80px;
  --leading-display: 1.2;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-90: 90px;
  --spacing-120: 120px;
  --spacing-144: 144px;
  --spacing-195: 195px;
  --spacing-260: 260px;
  --radius-body: 10px;
  --radius-cards: 0px;
  --radius-buttons: 3px;
  --radius-navbadges: 50px;
  --surface-page-canvas: #f2f1ef;
  --surface-content-card: #ffffff;
}
```
