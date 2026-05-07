---
version: alpha
name: "VSCO®"
description: "VSCO's design system creates a raw, utilitarian feel, blending high-contrast black and white with a select, vibrant yellow accent. The heavy reliance on a custom sans-serif font with tight letter-spacing for headlines establishes a direct, unadorned communication style. The overall impression is one of stark professionalism with a hint of creative energy, achieved through the deliberate scarcity of color and the bold, geometric typography."
theme: "light"
industry: "media"
source_url: "https://vsco.co"
refero_style_id: "759c0588-ea22-44c1-a1cf-42cb81eb6cb0"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933198489-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933198489-thumb.jpg"
extracted_at: "2026-04-11T18:46:57.397Z"
---

# VSCO® — Style Reference

> High-contrast geometric abstraction. Like engineering blueprints rendered in bold ink on a white page, punctuated by a single, sharp burst of yellow ink.

**Theme:** light

**Industry:** media

VSCO's design system creates a raw, utilitarian feel, blending high-contrast black and white with a select, vibrant yellow accent. The heavy reliance on a custom sans-serif font with tight letter-spacing for headlines establishes a direct, unadorned communication style. The overall impression is one of stark professionalism with a hint of creative energy, achieved through the deliberate scarcity of color and the bold, geometric typography.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Absolute Black | #000000 | `--color-absolute-black` | Primary text, headline text, buttons, background for dark sections. Establishes the stark contrast. |
| Pure White | #ffffff | `--color-pure-white` | Page backgrounds, card surfaces, ghost button text. The canvas for all content, amplifying contrast. |
| Fog Gray | #f2f2f2 | `--color-fog-gray` | Subtle background for alternating sections, differentiating content blocks without visual noise. |
| Steel Gray | #d9d9d9 | `--color-steel-gray` | Outline for ghost buttons, subtle borders. Adds definition without heaviness. |
| Medium Gray | #737373 | `--color-medium-gray` | Secondary text, descriptive elements. Provides hierarchy without losing legibility. |
| Amber Glow | #f1a900 | `--color-amber-glow` | Key CTA buttons, badges, interactive accents. The single, sharp burst of color to draw attention. |
| Sunshine Yellow | #ffbc3c | `--color-sunshine-yellow` | Alternate CTA button color, indicating a secondary but still active call-to-action. |

## Tokens — Typography

### VSCO Gothic

- **Token:** `--font-vsco-gothic`
- **Substitute:** Open Sans
- **Weights:** 400, 500, 600
- **Sizes:** 10px, 11px, 13px, 15px, 16px, 24px, 29px, 36px, 54px, 89px, 98px
- **Line heights:** 0.88, 0.93, 0.95, 1.00, 1.08, 1.10, 1.14, 1.20, 1.24, 1.25, 1.29, 1.30, 1.40, 1.50
- **Letter spacing:** -0.05em at large sizes, 0.05em, 0.08em, 0.10em
- **OpenType features:** "clig" 0, "liga" 0
- **Role:** The primary typeface for all textual content, from body to display. Its custom nature and geometric structure, particularly the tight negative letter-spacing on display sizes, create a distinctive, authoritative, and modern feel that a system font would not achieve.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | — | `--text-caption` |
| body | 15px | 1.3 | — | `--text-body` |
| subheading | 24px | 1.25 | — | `--text-subheading` |
| heading | 36px | 1.25 | — | `--text-heading` |
| heading-lg | 54px | 1.14 | — | `--text-heading-lg` |
| display | 98px | 0.93 | -0.98px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-150 | 150px | `--spacing-150` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| badges | 4px |
| images | 4px |
| buttons | 999px |
| navItems | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 100px |
| cardPadding | 28-30px |
| elementGap | 4-20px |

## Components

### Hero CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Tab Bar with Product Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Info Badge & Pricing Card (Dark)

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** Call to action

Solid black background (#000000), white text (#ffffff), 999px border-radius, 2px vertical padding, 16px horizontal padding. Font is VSCO Gothic, weight 600.

### Ghost Button

**Role:** Secondary action

Transparent background, black text (#000000), 1px solid black border (#000000), 999px border-radius, 2px vertical padding, 28px horizontal padding. Font is VSCO Gothic, weight 400.

### Underlined Navigation Button

**Role:** Navigation links

Transparent background, black text (#000000), 1px solid black border-bottom (#000000), 0px border-radius, 8px vertical padding, 0px horizontal padding. Font is VSCO Gothic, weight 400.

### Amber CTA Button

**Role:** Alternate call to action

Solid amber background (#f1a900), black text (#000000), 999px border-radius, 2px vertical padding, 28px horizontal padding. Font is VSCO Gothic, weight 600.

### Info Badge (Amber)

**Role:** Labels for new features or status

Solid amber background (#f1a900), black text (#000000), 4px border-radius, 4px vertical padding, 6px horizontal padding. Font is VSCO Gothic.

### Pricing Card (Dark)

**Role:** Displays pricing tiers or feature sets

Solid black background (#000000), white text (#ffffff), 0px border-radius, 30px vertical padding, 28px horizontal padding.

### Pricing Card (Light)

**Role:** Displays pricing tiers or feature sets

Solid white background (#ffffff), black text (#000000), 0px border-radius, 30px vertical padding, 28px horizontal padding.

### Hero Headline

**Role:** Main page title

VSCO Gothic, 98px size, 0.93 line-height, -0.05em letter-spacing, pure black text (#000000).

## Do's and Don'ts

### Do

- Prioritize Absolute Black (#000000) and Pure White (#ffffff) for high-contrast pairs, especially for text and background combinations.
- Use VSCO Gothic with negative letter-spacing for headlines (e.g., -0.05em at large sizes) to create a distinct, modern feel.
- Apply 999px border-radius for all primary and secondary buttons, signifying interactive elements.
- Employ Amber Glow (#f1a900) as the exclusive accent color for primary calls-to-action and badges.
- Maintain a tight vertical rhythm using base units of 4px, especially for margin-bottom and padding in blocks and text.
- Utilize Fog Gray (#f2f2f2) to subtly differentiate background sections without introducing strong chromatic shifts.

### Don't

- Avoid using multiple accent colors; Amber Glow (#f1a900) and Sunshine Yellow (#ffbc3c) serve as the only chromatic highlights.
- Do not introduce soft shadows or gradients; the design relies on stark contrast and flat surfaces for depth.
- Omit rounded corners for cards and main content blocks; these should remain sharp (0px radius) to maintain the geometric aesthetic.
- Do not deviate from VSCO Gothic; it is integral to the brand's typographic identity.
- Avoid excessive spacing; elements are presented compactly to maintain information density.
- Do not use subtle gray for actionable elements; interactivity should be clearly indicated by Absolute Black, Pure White, or Amber Glow.

## Imagery

Imagery on this site is dominated by high-quality photography, often depicting people using cameras or artistic, abstract compositions. Images are typically full-bleed in hero sections or contained within fluid, responsive layouts, sometimes with a 4px border-radius. Product screenshots are minimal, focusing on the interface itself. The role of imagery is primarily aspirational and atmospheric, showcasing the potential results of using the product, with a secondary role in explanatory content via illustrative product UI shots. Graphics are largely absent, favoring photography.

## Layout

The page model alternates between full-bleed sections and a max-width contained layout, centered on the page. The hero features a full-bleed background photograph with a prominent, centered headline and subtext over solid white. Subsequent sections often use alternating white and Fog Gray (#f2f2f2) backgrounds with consistent vertical spacing. Content is primarily arranged in two-column layouts featuring text and imagery, or three-column card grids for features. The navigation is a sticky top bar with clearly delineated links and call-to-action buttons. The overall density is compact, presenting information efficiently with minimal whitespace between elements.

## Similar Brands

- **Adobe Creative Cloud** — Similar target audience (creatives), uses a clean, utilitarian aesthetic with high-contrast text and limited accent colors for professional tools.
- **Figma** — Employs a stark, functional interface with strong typography and a measured use of brand accent colors against a mostly monochromatic background.
- **Frame.io** — Features a direct, high-contrast visual style with a focus on product visuals and a precise typographic hierarchy for professional users.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-absolute-black: #000000;
  --color-pure-white: #ffffff;
  --color-fog-gray: #f2f2f2;
  --color-steel-gray: #d9d9d9;
  --color-medium-gray: #737373;
  --color-amber-glow: #f1a900;
  --color-sunshine-yellow: #ffbc3c;
  --font-vsco-gothic: 'VSCO Gothic', Open Sans;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body: 15px;
  --leading-body: 1.3;
  --text-subheading: 24px;
  --leading-subheading: 1.25;
  --text-heading: 36px;
  --leading-heading: 1.25;
  --text-heading-lg: 54px;
  --leading-heading-lg: 1.14;
  --text-display: 98px;
  --leading-display: 0.93;
  --tracking-display: -0.98px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-150: 150px;
  --radius-cards: 0px;
  --radius-badges: 4px;
  --radius-images: 4px;
  --radius-buttons: 999px;
  --radius-navitems: 4px;
}
```

### Tailwind v4

```css
@theme {
  --color-absolute-black: #000000;
  --color-pure-white: #ffffff;
  --color-fog-gray: #f2f2f2;
  --color-steel-gray: #d9d9d9;
  --color-medium-gray: #737373;
  --color-amber-glow: #f1a900;
  --color-sunshine-yellow: #ffbc3c;
  --font-vsco-gothic: 'VSCO Gothic', Open Sans;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body: 15px;
  --leading-body: 1.3;
  --text-subheading: 24px;
  --leading-subheading: 1.25;
  --text-heading: 36px;
  --leading-heading: 1.25;
  --text-heading-lg: 54px;
  --leading-heading-lg: 1.14;
  --text-display: 98px;
  --leading-display: 0.93;
  --tracking-display: -0.98px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-150: 150px;
  --radius-cards: 0px;
  --radius-badges: 4px;
  --radius-images: 4px;
  --radius-buttons: 999px;
  --radius-navitems: 4px;
}
```
