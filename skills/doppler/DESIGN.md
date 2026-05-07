---
version: alpha
name: "Doppler"
description: "Doppler's visual style is a 'midnight command center' behind frosted glass, creating an atmosphere of secure, high-tech operations. Deep purples and blacks form the primary palette, suggesting seriousness and advanced technology. Vivid electric green and violet accents cut through the darkness, like indicator lights on a complex dashboard, highlighting crucial actions and information. A subtle border treatment using a near-achromatic light gray provides structure and division without breaking the dark theme, reinforcing the 'frosted glass' feel."
theme: "dark"
industry: "devtools"
source_url: "https://doppler.com"
refero_style_id: "10654184-eb92-4b75-a7af-bd92bc6cdc5c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932284864-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932284864-thumb.jpg"
extracted_at: "2026-04-11T18:31:44.357Z"
---

# Doppler — Style Reference

> Midnight command center. Deep purples on near-black surfaces, highlighted by electric green and violet, feel like precise, secure control.

**Theme:** dark

**Industry:** devtools

Doppler's visual style is a 'midnight command center' behind frosted glass, creating an atmosphere of secure, high-tech operations. Deep purples and blacks form the primary palette, suggesting seriousness and advanced technology. Vivid electric green and violet accents cut through the darkness, like indicator lights on a complex dashboard, highlighting crucial actions and information. A subtle border treatment using a near-achromatic light gray provides structure and division without breaking the dark theme, reinforcing the 'frosted glass' feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #1c1624 | `--color-midnight-ink` | Primary surface background, text on light elements (buttons). The dominant deep purple-gray setting the dark theme. |
| Deep Plum | #2d2734 | `--color-deep-plum` | Secondary surface background, subtly deeper than Midnight Ink to create visual layering without heavy shadows. |
| Text Off-White | #f1f0ec | `--color-text-off-white` | Primary body text, headers on dark backgrounds, key interactive text. High contrast for readability against dark surfaces. |
| Ash Gray | #d0c9c4 | `--color-ash-gray` | Secondary text, placeholder text, inactive elements. Provides a softer contrast than Text Off-White. |
| Outline Pale | #e5e7eb | `--color-outline-pale` | Subtle borders, dividers, card outlines. A near-achromatic light gray that provides structure on dark backgrounds. |
| Accent Green | #00f575 | `--color-accent-green` | Primary call-to-action buttons, interactive links, active states. This vibrant green is the main interactive accent. |
| Accent Violet | #b997ff | `--color-accent-violet` | Highlighting key headings, brand elements. A vivid violet used sparingly for emphasis, contrasting with the green. |
| Deep Violet Gradient | #6b13f5 | `--color-deep-violet-gradient` | Decorative backgrounds for hero sections, prominent visual elements. Creates a sense of depth and energy. |
| Nebula Pink Radial | #231736 | `--color-nebula-pink-radial` | Backgrounds for abstract graphics and brand illustrations, providing a cosmic, high-tech mood. |

## Tokens — Typography

### Doppler Repro

- **Token:** `--font-doppler-repro`
- **Substitute:** Inter
- **Weights:** 400, 450, 500, 700
- **Sizes:** 12px, 14px, 15px, 16px, 18px, 24px, 32px, 48px, 64px, 96px
- **Line heights:** 1.00, 1.05, 1.15, 1.20, 1.40, 1.50
- **Letter spacing:** -0.48, -0.16, 0.14, 0.48
- **Role:** The sole typeface for all content. Its versatility across weights and sizes, combined with micro letter-spacing adjustments, maintains a sleek, optimized feel across headlines and body text.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.4 | — | `--text-subheading` |
| heading-sm | 24px | 1.2 | — | `--text-heading-sm` |
| heading | 32px | 1.15 | — | `--text-heading` |
| heading-lg | 48px | 1.05 | -0.48px | `--text-heading-lg` |
| display | 64px | 1 | -0.48px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-140 | 140px | `--spacing-140` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 20px |
| cards | 20px |
| buttons | 12px |
| menuItems | 20px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 28px |
| elementGap | 8px |

## Components

### Primary CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Integration Feature Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Announcement Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Ghost Navigation Button

**Role:** Primary navigation and subtle secondary actions.

backgroundColor=rgba(0, 0, 0, 0), color=rgb(208, 201, 196), no border, 0px border-radius, 0px padding. Uses Ash Gray for text color.

### Primary CTA Button

**Role:** Main calls to action.

backgroundColor=rgb(0, 245, 117), color=rgb(28, 22, 36), 12px border-radius, 10px 16px padding. Text is Midnight Ink, background is Accent Green.

### Badge Button

**Role:** Informational tags or small interactive elements, often in navigation.

backgroundColor=rgba(242, 241, 237, 0.04), color=rgb(241, 240, 236), 20px border-radius, 8px 10px padding. Uses primary body text color and a subtle transparent background, creating a 'frosted glass' effect.

### Feature Card

**Role:** Showcasing integration partners or key features.

backgroundColor=rgba(242, 241, 237, 0.04), 20px border-radius, no box-shadow, 28px padding. Displays content on a slightly elevated, transparent dark surface.

## Do's and Don'ts

### Do

- Use Accent Green (#00f575) exclusively for primary calls-to-action to maximize its impact.
- Apply 'Doppler Repro' font with appropriate letterSpacing from the type scale for all text elements.
- Maintain a 20px border-radius for all cards and informational badges.
- Structure UI elements with Text Off-White (#f1f0ec) on Midnight Ink (#1c1624) or Deep Plum (#2d2734) for optimal contrast in dark mode.
- Utilize Outline Pale (#e5e7eb) for subtle borders and dividers to provide structure without adding visual weight.
- Employ consistent 8px element gaps for most internal component spacing.

### Don't

- Do not use saturated colors other than Accent Green or Accent Violet for interactive elements or brand highlights.
- Avoid box-shadows; use background color layering (Midnight Ink, Deep Plum) and subtle borders for elevation and separation.
- Do not use highly rounded corners (e.g., 9999px) on any elements other than specific, explicit tags.
- Do not introduce additional font families; 'Doppler Repro' covers all typographic needs.
- Avoid using bright, non-text colors (like red, yellow, pure white) for large text blocks, as it undermines the dark theme's sophistication.

## Imagery

Imagery primarily consists of product screenshots and abstract, brand-colored graphics/illustrations. Product screenshots are contained within device mockups or dark-themed UI frames, showcasing the product's interface. Illustrations employ vivid violet, green, and deep purple color palettes, featuring organic, flowing shapes as well as geometric abstractions, often with subtle gradients (Nebula Pink Radial) or glowing effects that integrate seamlessly into the dark theme. Icons are consistently monochrome (Outline Pale on dark backgrounds) and outlined with a medium stroke weight. The visual language centers on explaining complex technical concepts through clear UI examples and atmospheric, abstract visuals rather than photography, contributing to a high-density, informational feel.

## Layout

The layout features a full-bleed dark background (Midnight Ink) with content sections generally confined to a centered, implicit max-width. The hero section employs a split layout: a commanding headline and descriptive text on the left, an illustrative product screenshot on the right, all on a gradient background. Subsequent sections reveal a consistent vertical rhythm of padding (64px sectionGap), alternating between text-centric blocks and grid layouts (e.g., a 4-column card grid for integrations). Content arrangement often uses a text-left, image-right or grid-based pattern. The page is information-dense yet maintains clear visual separation through consistent spacing and subtle surface variations. Navigation is a sticky top bar with ghost buttons and a prominent Accent Green CTA.

## Similar Brands

- **Vercel** — Similar dark-mode aesthetic with emphasis on clean typography and vibrant single-color accents for CTAs.
- **Supabase** — Shared use of deep purple hues and neon accents to convey a modern, developer-centric tool's brand identity.
- **Linear** — Adherence to precise typography, subtle surface layering, and a minimalist dark UI without heavy shadows.
- **GitHub (dark mode)** — Utilizes a dark, muted background with selective use of bright, functional accent colors for interactive elements and status indicators.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #1c1624;
  --color-deep-plum: #2d2734;
  --color-text-off-white: #f1f0ec;
  --color-ash-gray: #d0c9c4;
  --color-outline-pale: #e5e7eb;
  --color-accent-green: #00f575;
  --color-accent-violet: #b997ff;
  --color-deep-violet-gradient: #6b13f5;
  --color-nebula-pink-radial: #231736;
  --font-doppler-repro: 'Doppler Repro', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --text-heading: 32px;
  --leading-heading: 1.15;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.48px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -0.48px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --radius-tags: 20px;
  --radius-cards: 20px;
  --radius-buttons: 12px;
  --radius-menuitems: 20px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #1c1624;
  --color-deep-plum: #2d2734;
  --color-text-off-white: #f1f0ec;
  --color-ash-gray: #d0c9c4;
  --color-outline-pale: #e5e7eb;
  --color-accent-green: #00f575;
  --color-accent-violet: #b997ff;
  --color-deep-violet-gradient: #6b13f5;
  --color-nebula-pink-radial: #231736;
  --font-doppler-repro: 'Doppler Repro', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --text-heading: 32px;
  --leading-heading: 1.15;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.48px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -0.48px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --radius-tags: 20px;
  --radius-cards: 20px;
  --radius-buttons: 12px;
  --radius-menuitems: 20px;
}
```
