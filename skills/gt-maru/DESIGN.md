---
version: alpha
name: "Gt-maru"
description: "GT Maru embraces a playful, maximalist aesthetic, reminiscent of a vibrant cartoon sky. The system features a dominant electric blue canvas offset by bold, saturated accents. Typography is oversized and impactful with a unique outlined and shadowed treatment, creating a sense of buoyant energy. Components are chunky and tactile, utilizing high-contrast borders and generous padding to define interaction areas."
theme: "light"
industry: "design"
source_url: "https://gt-maru.com"
refero_style_id: "d0771b1e-15de-4bdb-868a-557cf83cf2a8"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517666778-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517666778-thumb.jpg"
extracted_at: "2026-04-30T02:54:48.124Z"
---

# Gt-maru — Style Reference

> joyful cartoon playground

**Theme:** light

**Industry:** design

GT Maru embraces a playful, maximalist aesthetic, reminiscent of a vibrant cartoon sky. The system features a dominant electric blue canvas offset by bold, saturated accents. Typography is oversized and impactful with a unique outlined and shadowed treatment, creating a sense of buoyant energy. Components are chunky and tactile, utilizing high-contrast borders and generous padding to define interaction areas.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Sky Blue | #0068ff | `--color-sky-blue` | Page background, hero section background — establishes a vivid, energetic canvas for the entire experience |
| Sunshine Yellow | #ffff55 | `--color-sunshine-yellow` | Prominent heading text fill and outline, card backgrounds — provides high-contrast vibrancy against the blue canvas, evoking cheerful warmth |
| Bubblegum Pink | #ff8080 | `--color-bubblegum-pink` | Red outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Tangerine | #ff9400 | `--color-tangerine` | Orange outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Lime Green | #00bf3a | `--color-lime-green` | Green wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |
| Lemon Drop | #ffc800 | `--color-lemon-drop` | Yellow wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |
| Seafoam | #05cf9c | `--color-seafoam` | Green wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |
| Slate Blue | #84bbff | `--color-slate-blue` | Blue wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |
| Deep Space | #000000 | `--color-deep-space` | All text, borders, and outlines — provides strong definition and contrast for all UI elements |
| White Cloud | #ffffff | `--color-white-cloud` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |

## Tokens — Typography

### GT Maru

- **Token:** `--font-gt-maru`
- **Substitute:** Comic Sans MS, Gochi Hand
- **Weights:** 400
- **Sizes:** 16px, 25px, 45px, 187px
- **Line heights:** 1.00, 1.30, 1.40
- **Letter spacing:** 0.24px, 0.38px, -1.35px, -5.61px
- **OpenType features:** 'kern', 'liga', 'onum'
- **Role:** Primary typeface for all headings and body text. Its rounded, friendly forms and distinctive letter-spacing create a playful yet impactful brand voice. Small sizes use positive tracking for legibility, while large display sizes use negative tracking for tighter lockups.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.4 | 0.24px | `--text-body` |
| subheading | 25px | 1.3 | 0.38px | `--text-subheading` |
| heading | 45px | 1 | -1.35px | `--text-heading` |
| display | 187px | 1 | -5.61px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-7 | 7px | `--spacing-7` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 30px |
| navItems | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 30px |
| elementGap | 13px |

## Components

### Navigation Tag

**Role:** Interactive navigation item

Each tag uses a solid color from the accent palette for its background, with 'Deep Space' black text and a 3px 'Deep Space' border. Padding is 7px vertical and 10-20px horizontal, with a 10px border-radius, creating a chunky, rounded pill shape.

### Outlined Heading

**Role:** Primary page title

Large headings utilize 'Sunshine Yellow' as the primary fill, with a prominent 'Deep Space' black outline. This treatment provides visual weight and enhances the cartoonish aesthetic.

### Content Card

**Role:** Information container

A 'White Cloud' background with a 3px 'Deep Space' border. Features generous padding of 30px on all sides and a large 30px border-radius, giving it a soft, bubble-like appearance.

## Do's and Don'ts

### Do

- Always use 'Sky Blue' (#0068ff) as the primary page background to establish the core brand ambiance.
- Apply a 3px 'Deep Space' (#000000) border to all content cards and interactive elements for a defined, cartoon-like edge.
- Use 'GT Maru' typeface with the distinctive negative letter-spacing for large headlines and positive letter-spacing for body text to maintain clear hierarchy.
- Implement 10px border-radius on all navigation items for a rounded, approachable feel.
- Utilize 'Sunshine Yellow' (#ffff55) for prominent text fills and 'Deep Space' (#000000) for accompanying outlines to create high-impact, playful headings.
- Maintain a comfortable density with 13px gaps between elements and 30px padding within content cards.
- Vary navigation item background colors using hues from the accent palette (Bubblegum Pink, Tangerine, Lime Green, Lemon Drop, Seafoam, Slate Blue) to differentiate sections.

### Don't

- Avoid using subtle color variations; always opt for vivid, high-contrast colors from the specified palette.
- Do not introduce sharp corners; maintain the rounded aesthetic with 10px and 30px border-radii as specified.
- Never use generic shadow effects; rely on bold outlines and vivid color contrasts for emphasis.
- Do not use letter-spacing values outside the defined 'GT Maru' proportions – positive for small text, negative for large text.
- Avoid heavy decorative elements or complex gradients that would detract from the flat, cartoonish style.
- Do not use dark backgrounds for content areas; content should always be on 'White Cloud' (#ffffff) or 'Sunshine Yellow' (#ffff55) with a 'Deep Space' (#000000) border.

## Similar Brands

- **Sanity.io (older branding)** — Childlike, vivid color schemes and a highly distinct, chunky typographic identity.
- **Figma** — Use of oversized, friendly typography and a playful approach to interface elements, albeit with a different color palette.
- **Stripe (illustrations)** — Flat, outlined illustrations with a clear border style, although GT Maru's are more overtly cartoonish.
- **Playbook.com** — Bold, saturated color usage and a focus on unique, expressive typography to convey brand personality.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-sky-blue: #0068ff;
  --color-sunshine-yellow: #ffff55;
  --color-bubblegum-pink: #ff8080;
  --color-tangerine: #ff9400;
  --color-lime-green: #00bf3a;
  --color-lemon-drop: #ffc800;
  --color-seafoam: #05cf9c;
  --color-slate-blue: #84bbff;
  --color-deep-space: #000000;
  --color-white-cloud: #ffffff;
  --font-gt-maru: 'GT Maru', Comic Sans MS, Gochi Hand;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: 0.24px;
  --text-subheading: 25px;
  --leading-subheading: 1.3;
  --tracking-subheading: 0.38px;
  --text-heading: 45px;
  --leading-heading: 1;
  --tracking-heading: -1.35px;
  --text-display: 187px;
  --leading-display: 1;
  --tracking-display: -5.61px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-13: 13px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --radius-cards: 30px;
  --radius-navitems: 10px;
}
```

### Tailwind v4

```css
@theme {
  --color-sky-blue: #0068ff;
  --color-sunshine-yellow: #ffff55;
  --color-bubblegum-pink: #ff8080;
  --color-tangerine: #ff9400;
  --color-lime-green: #00bf3a;
  --color-lemon-drop: #ffc800;
  --color-seafoam: #05cf9c;
  --color-slate-blue: #84bbff;
  --color-deep-space: #000000;
  --color-white-cloud: #ffffff;
  --font-gt-maru: 'GT Maru', Comic Sans MS, Gochi Hand;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: 0.24px;
  --text-subheading: 25px;
  --leading-subheading: 1.3;
  --tracking-subheading: 0.38px;
  --text-heading: 45px;
  --leading-heading: 1;
  --tracking-heading: -1.35px;
  --text-display: 187px;
  --leading-display: 1;
  --tracking-display: -5.61px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-13: 13px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --radius-cards: 30px;
  --radius-navitems: 10px;
}
```
