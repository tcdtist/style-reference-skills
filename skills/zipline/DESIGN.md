---
version: alpha
name: "Zipline"
description: "Zipline's aesthetic is an open-air flight path: stark typography grounded in cream and black, punctuated by a single vibrant violet. The system prioritizes crisp text on expansive, neutral backgrounds, using strong contrasts to anchor content. Components are lightweight and direct, relying on bold text and large-radius containers rather than subtle shadows or complex surface layering. Color is deployed sparingly to highlight navigation, branding, and interactive elements, retaining an overall impression of efficiency and precision."
theme: "light"
industry: "other"
source_url: "https://www.zipline.com"
refero_style_id: "4a248569-2b5a-4416-bb2a-c78890218b9f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509564252-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509564252-thumb.jpg"
extracted_at: "2026-04-30T00:39:53.395Z"
---

# Zipline — Style Reference

> Open-air flight path – vast, clean, and direct.

**Theme:** light

**Industry:** other

Zipline's aesthetic is an open-air flight path: stark typography grounded in cream and black, punctuated by a single vibrant violet. The system prioritizes crisp text on expansive, neutral backgrounds, using strong contrasts to anchor content. Components are lightweight and direct, relying on bold text and large-radius containers rather than subtle shadows or complex surface layering. Color is deployed sparingly to highlight navigation, branding, and interactive elements, retaining an overall impression of efficiency and precision.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Cream Canvas | #f7f4e8 | `--color-cream-canvas` | Page backgrounds, subtle card surfaces, ghost button backgrounds, default text color in inverse contexts |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, prominent headings, button backgrounds, strong borders, icons. Provides high contrast against Cream Canvas |
| Cloud Gray | #c6c3ba | `--color-cloud-gray` | Subtle section backgrounds, divider lines, muted interface elements |
| Zipline Violet | #643aed | `--color-zipline-violet` | Violet wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |

## Tokens — Typography

### fkGroteskNeue

- **Token:** `--font-fkgroteskneue`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 14px, 16px, 18px, 22px, 120px
- **Line heights:** 0.85, 1.00, 1.20, 1.40
- **Letter spacing:** -0.01em
- **Role:** Primary UI text for body copy, buttons, navigation, and detailed information. The consistent, slightly tracked letter spacing maintains legibility and a contemporary feel.

### fkScreamer

- **Token:** `--font-fkscreamer`
- **Substitute:** Bebas Neue
- **Weights:** 700
- **Sizes:** 40px, 90px, 120px, 150px
- **Line heights:** 0.85
- **Letter spacing:** normal
- **Role:** Dominant display headings, used for impact and brand statements. Its compressed, heavy weight commands attention, often appearing in all caps.

### fkDisplay

- **Token:** `--font-fkdisplay`
- **Substitute:** Oswald
- **Weights:** 400
- **Sizes:** 22px
- **Line heights:** 0.85
- **Letter spacing:** normal
- **Role:** Used for secondary, impactful headings that require less visual dominance than fkScreamer. The slightly wider form provides contrast to the compressed fkScreamer.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.4 | -0.14px | `--text-caption` |
| body | 16px | 1.4 | -0.16px | `--text-body` |
| subheading | 18px | 1.4 | -0.18px | `--text-subheading` |
| heading-sm | 22px | 1.2 | -0.22px | `--text-heading-sm` |
| heading | 40px | 0.85 | 0px | `--text-heading` |
| display-md | 90px | 0.85 | 0px | `--text-display-md` |
| display-lg | 120px | 0.85 | 0px | `--text-display-lg` |
| display | 150px | 0.85 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-53 | 53px | `--spacing-53` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-199 | 199px | `--spacing-199` |
| spacing-247 | 247px | `--spacing-247` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 20px |
| images | 20px |
| buttons | 20px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1320px |
| sectionGap | 53px |
| cardPadding | 14px |
| elementGap | 24px |

## Components

### Filled Primary Button

**Role:** Call to action

Solid Midnight Ink background with Cream Canvas text. Corner radius of 20px, with generous horizontal padding of 20px and minimal vertical padding (inferred 12px vertical based on 0px button variants).

### Outlined Secondary Button

**Role:** Secondary action

Cream Canvas background with Midnight Ink text, outlined by a 1px Midnight Ink border. Corner radius of 20px, with 14px horizontal padding and inferred 12px vertical padding.

### Ghost Text Button

**Role:** Navigation or tertiary action

Transparent background with Cream Canvas text. No distinct border or radius, primarily used for navigation or subtle interactions. Example: top-right 'Get Delivery' button.

### Standard Card

**Role:** Content grouping

Transparent background with a 20px border radius. Used for visual separation of content, relying on underlying section backgrounds for definition. No shadow.

### Branded Violet Card

**Role:** Emphasized content grouping

Solid Zipline Violet background with a 20px border radius. Used to highlight specific content blocks, contrasting with the neutral palette. No shadow.

## Do's and Don'ts

### Do

- Use Midnight Ink (#000000) for all primary text and calls to action against Cream Canvas (#f7f4e8) backgrounds.
- Apply fkScreamer Bold (700 weight) for all hero and display headings, ranging from 40px to 150px with a tight line-height of 0.85.
- Maintain a uniform border radius of 20px across all buttons, cards, and images, promoting a soft, approachable feel.
- Employ the Cream Canvas (#f7f4e8) as the predominant page background and for ghost button text.
- Utilize a baseline letter-spacing of -0.01em for all fkGroteskNeue body text, navigation, and button labels to improve density.
- Structure content with section gaps of 53px and element gaps of 24px to create a comfortable, airy feel.
- Limit the use of Zipline Violet (#643aed) to specific cards or decorative elements; avoid using it for primary interactive states.

### Don't

- Do not introduce new primary action colors; Midnight Ink (#000000) filled buttons and Midnight Ink borders for outlined buttons are the defined interactive styles.
- Avoid applying shadows or complex elevations to cards or components; the design relies on flat surfaces and color contrast for hierarchy.
- Do not deviate from the 20px border radius for interactive elements and content containers; consistency is key to the brand's shape language.
- Refrain from using fkScreamer or fkDisplay for body copy or navigation; these are strictly for large, impactful headings.
- Do not use generic gray tones for backgrounds or text; adhere to Cream Canvas (#f7f4e8), Cloud Gray (#c6c3ba), and Midnight Ink (#000000).
- Avoid excessive use of Zipline Violet (#643aed); it's an accent, not a primary color for large areas or ubiquitous interface elements.
- Do not introduce highly saturated or brightly colored illustrations in contexts where photography or minimal graphics are typically used; maintain visual restraint.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Cream Canvas | #f7f4e8 | Primary page background and lightest surface level. |
| 1 | Cloud Gray | #c6c3ba | Secondary background for alternating sections or subtle differentiation. |
| 2 | Zipline Violet | #643aed | Elevated, branded surface for emphasized cards or content blocks. |
| 3 | Midnight Ink | #000000 | Most prominent surface, used for filled buttons and strong containers. |

## Imagery

Imagery predominantly features dynamic, high-motion photography, often showcasing drones or expansive natural landscapes from a unique perspective, reinforcing the theme of flight and speed. There's also some use of tightly-cropped product photography or candid lifestyle shots, often integrated directly into text blocks. Visuals are full-bleed for hero sections or contained within organic, wave-like masks. When present, icons are minimalist, outlined, and monochromatic, primarily in Midnight Ink.

## Layout

The page model is primarily a max-width contained layout of 1320px, with occasional full-bleed sections, especially for heroes. The hero pattern is often a full-viewport dynamic video or large image with a centered, bold headline. Sections alternate between light and cream backgrounds, creating a clear vertical rhythm. Content often uses 2-column layouts with text and visuals, but also features centered stacks for impactful messages. There are instances of 3-column card grids for features or articles. Overall density is comfortable, with generous breathing room between sections. Navigation is a sticky top bar with a left-aligned hamburger menu, a center-aligned logo, and right-aligned ghost buttons.

## Similar Brands

- **Wing** — Clear and direct drone delivery service with functional UI over decorative elements.
- **Skydio** — Heavy reliance on aerial photography and bold sans-serif typography for technological authority.
- **Starship Technologies** — Focus on last-mile delivery, using a clean, almost playful aesthetic with a limited bold color palette.
- **OpenAI** — Uses large, impactful display typography and minimal color for a professional, cutting-edge feel.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-cream-canvas: #f7f4e8;
  --color-midnight-ink: #000000;
  --color-cloud-gray: #c6c3ba;
  --color-zipline-violet: #643aed;
  --font-fkgroteskneue: 'fkGroteskNeue', Inter;
  --font-fkscreamer: 'fkScreamer', Bebas Neue;
  --font-fkdisplay: 'fkDisplay', Oswald;
  --text-caption: 14px;
  --leading-caption: 1.4;
  --tracking-caption: -0.14px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.18px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.22px;
  --text-heading: 40px;
  --leading-heading: 0.85;
  --tracking-heading: 0px;
  --text-display-md: 90px;
  --leading-display-md: 0.85;
  --tracking-display-md: 0px;
  --text-display-lg: 120px;
  --leading-display-lg: 0.85;
  --tracking-display-lg: 0px;
  --text-display: 150px;
  --leading-display: 0.85;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-48: 48px;
  --spacing-53: 53px;
  --spacing-60: 60px;
  --spacing-120: 120px;
  --spacing-128: 128px;
  --spacing-199: 199px;
  --spacing-247: 247px;
  --radius-cards: 20px;
  --radius-images: 20px;
  --radius-buttons: 20px;
  --surface-cream-canvas: #f7f4e8;
  --surface-cloud-gray: #c6c3ba;
  --surface-zipline-violet: #643aed;
  --surface-midnight-ink: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-cream-canvas: #f7f4e8;
  --color-midnight-ink: #000000;
  --color-cloud-gray: #c6c3ba;
  --color-zipline-violet: #643aed;
  --font-fkgroteskneue: 'fkGroteskNeue', Inter;
  --font-fkscreamer: 'fkScreamer', Bebas Neue;
  --font-fkdisplay: 'fkDisplay', Oswald;
  --text-caption: 14px;
  --leading-caption: 1.4;
  --tracking-caption: -0.14px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.18px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.22px;
  --text-heading: 40px;
  --leading-heading: 0.85;
  --tracking-heading: 0px;
  --text-display-md: 90px;
  --leading-display-md: 0.85;
  --tracking-display-md: 0px;
  --text-display-lg: 120px;
  --leading-display-lg: 0.85;
  --tracking-display-lg: 0px;
  --text-display: 150px;
  --leading-display: 0.85;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-48: 48px;
  --spacing-53: 53px;
  --spacing-60: 60px;
  --spacing-120: 120px;
  --spacing-128: 128px;
  --spacing-199: 199px;
  --spacing-247: 247px;
  --radius-cards: 20px;
  --radius-images: 20px;
  --radius-buttons: 20px;
  --surface-cream-canvas: #f7f4e8;
  --surface-cloud-gray: #c6c3ba;
  --surface-zipline-violet: #643aed;
  --surface-midnight-ink: #000000;
}
```
