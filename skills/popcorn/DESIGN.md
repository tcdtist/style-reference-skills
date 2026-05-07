---
version: alpha
name: "Popcorn"
description: "Popcorn employs a modern, calm, and spacious aesthetic built on a largely monochrome palette. Light, soft surfaces and ample white space define the visual canvas. Typography is characteristically bold yet airy for headlines, conveying information with subtle authority, while body text remains minimal and legible. Small, rounded components with soft shadows and transparent accents give an impression of lightness and approachability."
theme: "light"
industry: "other"
source_url: "https://popcorn.space"
refero_style_id: "93fe74fd-bac8-4d13-9d5b-3b5e242f74e6"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508441102-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508441102-thumb.jpg"
extracted_at: "2026-04-30T00:21:06.890Z"
---

# Popcorn — Style Reference

> Monochrome canvas, silent authority

**Theme:** light

**Industry:** other

Popcorn employs a modern, calm, and spacious aesthetic built on a largely monochrome palette. Light, soft surfaces and ample white space define the visual canvas. Typography is characteristically bold yet airy for headlines, conveying information with subtle authority, while body text remains minimal and legible. Small, rounded components with soft shadows and transparent accents give an impression of lightness and approachability.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Graphite | #393737 | `--color-midnight-graphite` | Primary text, headline text, dark surface backgrounds for contrast, navigation links, primary icon color; Overlays or background fills for sections that require heavy contrast, used sparingly for strong visual separation |
| Canvas White | #f7f7f7 | `--color-canvas-white` | Dominant page background, soft button backgrounds, subtle surface details, light badge backgrounds |
| Snow Drift | #ffffff | `--color-snow-drift` | Card backgrounds, elevated UI elements, navigation backgrounds |
| Slate Mist | #888787 | `--color-slate-mist` | Secondary text, muted helper text, inactive navigation items, subtle border colors |
| Pale Cloud | #e9eff6 | `--color-pale-cloud` | Subtle alternative card background for visual separation, delicate UI accents |
| Gradient Aura | #e7f3ee | `--color-gradient-aura` | Background illustrations, subtle decorative elements suggesting depth and iridescence. Represents the cool-toned starting point of a complex conic gradient |
| Skylight Fade | #dae8f5 | `--color-skylight-fade` | Subtle background gradients for atmospheric effects, suggesting depth and height |

## Tokens — Typography

### Messina Sans

- **Token:** `--font-messina-sans`
- **Substitute:** Inter
- **Weights:** 400, 600, 700
- **Sizes:** 11px, 13px, 14px, 16px, 18px, 19px, 64px, 88px
- **Line heights:** 1.00, 1.20, 1.40, 1.50
- **Letter spacing:** -0.0300em (at 88px, 64px), -0.0200em (at 19px, 18px), normal (at 16px, 14px)
- **Role:** Primary UI font for body text, button labels, navigation, and smaller headings. The range of weights and granular sizes supports a precise textual hierarchy across the interface.

### Untitled Serif

- **Token:** `--font-untitled-serif`
- **Substitute:** Freight Text Pro
- **Weights:** 400
- **Sizes:** 20px, 22px, 24px, 30px, 40px, 58px, 84px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** -0.0300em (at 84px, 58px), -0.0250em (at 40px)
- **Role:** Dedicated serif font for large, impactful headlines, subheadings, and decorative text. Its single weight and careful tracking give it a refined presence.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| subheading | 19px | 1.4 | -0.38px | `--text-subheading` |
| heading-sm | 24px | 1.2 | — | `--text-heading-sm` |
| heading | 40px | 1.2 | -1px | `--text-heading` |
| heading-lg | 58px | 1.2 | -1.74px | `--text-heading-lg` |
| display | 88px | 1.2 | -2.64px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-76 | 76px | `--spacing-76` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-92 | 92px | `--spacing-92` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-155 | 155px | `--spacing-155` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-250 | 250px | `--spacing-250` |
| spacing-290 | 290px | `--spacing-290` |
| spacing-300 | 300px | `--spacing-300` |
| spacing-320 | 320px | `--spacing-320` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| badges | 100px |
| buttons | 100px |
| largeElements | 64px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.05) 0px 4px 20px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 64px |
| cardPadding | 18px |
| elementGap | 16px |

## Components

### Primary Ghost Button

**Role:** Action button for primary calls to action, maintaining lightness and integrating into the design.

Background: rgba(247, 247, 247, 0.6), Text color: #393737, Border Top: rgba(255, 255, 255, 0.6), Border Radius: 100px, Padding: 13px vertical, 18px horizontal. Uses Messina Sans 16px.

### Elevated Feature Card

**Role:** Highlights key features or testimonials, using soft elevation to draw attention.

Background: #ffffff, Border Radius: 12px, Box Shadow: rgba(0, 0, 0, 0.05) 0px 4px 20px 0px, Padding: 18px on all sides. Content spacing of 16px.

### Base Feature Card

**Role:** Standard card for displaying information without strong visual hierarchy.

Background: #ffffff, Border Radius: 15px, No shadow, Padding: 34px top, 0px horizontal, 0px bottom.

### Badge Pill

**Role:** Categorization or status indicator.

Background: #f7f7f7, Text color: #393737, Border Radius: 100px, Padding: 10px vertical, 14px horizontal internally, 10px leading graphic padding. Uses Messina Sans 14px.

### Hero Pill Badge

**Role:** Prominent status indicator within hero sections.

Background: rgba(0, 0, 0, 0), Text color: #393737, Border Radius: 100px, Padding: 7px vertical, 16px horizontal leading, 7px right. Uses Messina Sans 14px.

### Navigation Link

**Role:** Primary navigation elements.

Text color: #393737, Messina Sans 16px, 10px horizontal padding, 12px vertical padding. Active state indicated by an underline.

## Do's and Don'ts

### Do

- Use Midnight Graphite (#393737) for all primary text and main headlines.
- Apply Canvas White (#f7f7f7) for the main page background and soft button fills.
- Ensure all primary interactive elements like buttons and badges use a 100px border radius for a continuous pill shape.
- Implement the soft shadow rgba(0, 0, 0, 0.05) 0px 4px 20px 0px for all elevated cards to maintain a light visual weight.
- Reserve Untitled Serif for headlines and subheadings at larger sizes (40px and above) to distinguish them from UI text.
- Maintain a comfortable vertical rhythm with a default element gap of 16px and section gap of 64px.

### Don't

- Avoid using highly saturated, vivid colors; the palette is intentionally subtle and achromatic.
- Do not introduce sharp corners or small radii; the system favors soft, rounded edges at 12px for cards and 100px for buttons.
- Do not use heavy, opaque drop shadows; stick to the light, ethereal shadow for elevation.
- Do not use generic system fonts; always specify Messina Sans for UI and body text, and Untitled Serif for display headings.
- Avoid tightly packed content; maintain ample spacing and allow sufficient whitespace around elements.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Canvas | #f7f7f7 | The primary background of the application, providing a clean, light base. |
| 1 | Card Surface | #ffffff | Used for content blocks and cards that need to stand out slightly from the canvas. |
| 2 | Alternative Card Surface | #e9eff6 | A subtle alternative card background for variation or grouping related content without strong visual breaks. |
| 3 | Dark Foreground | #393737 | Used for background of sections meant for high contrast or a distinct visual break. |

## Elevation

- **Elevated Feature Card:** `rgba(0, 0, 0, 0.05) 0px 4px 20px 0px`

## Imagery

The visual language for imagery is minimal and functional, primarily consisting of product showcases and abstract atmospheric elements. Product screenshots of mobile devices are shown with realistic interfaces, rendered on white backgrounds with soft shadows for elevation. Icons are outlined, lightweight, and mono-color, serving as subtle decorative or explanatory elements. Backgrounds feature large, abstract, multi-color conic gradients, providing a soft, almost ethereal atmosphere without disrupting the clean UI. Imagery serves a decorative and illustrative role rather than being critical content.

## Layout

The page uses a maximum width of 1200px, centered on the screen, creating a contained and focused experience. The hero section features a large, centered headline over a subtle gradient background, setting a calm, spacious tone. Content sections generally follow a pattern of generous vertical spacing, with testimonials in a 3-column card grid and feature lists presented as centered blocks. Navigation is a sticky top bar with left-aligned branding and right-aligned links and a sign-up button. The overall density is spacious, ensuring ample breathing room between elements and sections.

## Similar Brands

- **Linear** — Monochrome base, subtle shadows for elevation, and a focus on clean, spacious UI with minimal color accents.
- **Framer** — Extensive use of whitespace, lightweight typography, and understated component styling.
- **Stripe** — Emphasis on simplicity, balanced layouts, and a refined achromatic palette with subtle functional highlights.
- **Revolut** — Modern fintech aesthetic with clean lines, functional UI components, and a primary dependence on neutral tones.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-graphite: #393737;
  --color-canvas-white: #f7f7f7;
  --color-snow-drift: #ffffff;
  --color-slate-mist: #888787;
  --color-pale-cloud: #e9eff6;
  --color-gradient-aura: #e7f3ee;
  --color-skylight-fade: #dae8f5;
  --font-messina-sans: 'Messina Sans', Inter;
  --font-untitled-serif: 'Untitled Serif', Freight Text Pro;
  --text-subheading: 19px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.38px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --text-heading: 40px;
  --leading-heading: 1.2;
  --tracking-heading: -1px;
  --text-heading-lg: 58px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -1.74px;
  --text-display: 88px;
  --leading-display: 1.2;
  --tracking-display: -2.64px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-54: 54px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-76: 76px;
  --spacing-80: 80px;
  --spacing-92: 92px;
  --spacing-120: 120px;
  --spacing-150: 150px;
  --spacing-155: 155px;
  --spacing-200: 200px;
  --spacing-250: 250px;
  --spacing-290: 290px;
  --spacing-300: 300px;
  --spacing-320: 320px;
  --radius-cards: 12px;
  --radius-badges: 100px;
  --radius-buttons: 100px;
  --radius-largeelements: 64px;
  --shadow-xl: rgba(0, 0, 0, 0.05) 0px 4px 20px 0px;
  --surface-page-canvas: #f7f7f7;
  --surface-card-surface: #ffffff;
  --surface-alternative-card-surface: #e9eff6;
  --surface-dark-foreground: #393737;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-graphite: #393737;
  --color-canvas-white: #f7f7f7;
  --color-snow-drift: #ffffff;
  --color-slate-mist: #888787;
  --color-pale-cloud: #e9eff6;
  --color-gradient-aura: #e7f3ee;
  --color-skylight-fade: #dae8f5;
  --font-messina-sans: 'Messina Sans', Inter;
  --font-untitled-serif: 'Untitled Serif', Freight Text Pro;
  --text-subheading: 19px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.38px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --text-heading: 40px;
  --leading-heading: 1.2;
  --tracking-heading: -1px;
  --text-heading-lg: 58px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -1.74px;
  --text-display: 88px;
  --leading-display: 1.2;
  --tracking-display: -2.64px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-54: 54px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-76: 76px;
  --spacing-80: 80px;
  --spacing-92: 92px;
  --spacing-120: 120px;
  --spacing-150: 150px;
  --spacing-155: 155px;
  --spacing-200: 200px;
  --spacing-250: 250px;
  --spacing-290: 290px;
  --spacing-300: 300px;
  --spacing-320: 320px;
  --radius-cards: 12px;
  --radius-badges: 100px;
  --radius-buttons: 100px;
  --radius-largeelements: 64px;
  --shadow-xl: rgba(0, 0, 0, 0.05) 0px 4px 20px 0px;
  --surface-page-canvas: #f7f7f7;
  --surface-card-surface: #ffffff;
  --surface-alternative-card-surface: #e9eff6;
  --surface-dark-foreground: #393737;
}
```
