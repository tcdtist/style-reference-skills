---
version: alpha
name: "HAPE PRIME"
description: "HAPE's visual system evokes a high-contrast, edgy digital fashion magazine. A dominant, vivid red acts as a powerful brand accent against deep black and pure white, creating high-impact statements. Typography is bold and tightly tracked, featuring extended and condensed forms for a distinctive editorial feel. The overall presentation is dark and atmospheric, using minimal surfaces and relying on strong color pops and sculptural 3D imagery to define its presence."
theme: "dark"
industry: "crypto"
source_url: "https://www.hape.io"
refero_style_id: "fc739087-2f0a-4deb-b105-2af10205f185"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514163687-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514163687-thumb.jpg"
extracted_at: "2026-04-30T01:56:24.030Z"
---

# HAPE PRIME — Style Reference

> Neon Red Noir — a digital fashion runway bathed in dramatic light.

**Theme:** dark

**Industry:** crypto

HAPE's visual system evokes a high-contrast, edgy digital fashion magazine. A dominant, vivid red acts as a powerful brand accent against deep black and pure white, creating high-impact statements. Typography is bold and tightly tracked, featuring extended and condensed forms for a distinctive editorial feel. The overall presentation is dark and atmospheric, using minimal surfaces and relying on strong color pops and sculptural 3D imagery to define its presence.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Crimson Flux | #730200 | `--color-crimson-flux` | Brand accent, background for embedded content blocks, card surfaces — a vivid red that saturates the dark canvas |
| Deep Space Black | #000000 | `--color-deep-space-black` | Primary surface for backgrounds and structural borders, dominant text color against lighter canvases — creates a strong, immersive dark mode aesthetic |
| Ghost White | #ffffff | `--color-ghost-white` | Primary text color against dark backgrounds, border for ghost buttons and navigation items, icon accents — provides stark contrast |
| Heat Stroke Radial | #b70505 | `--color-heat-stroke-radial` | Hero section background, conveying visual depth and intensity |

## Tokens — Typography

### Integral CF

- **Token:** `--font-integral-cf`
- **Substitute:** Bebas Neue
- **Weights:** 400, 600, 800
- **Sizes:** 8px, 11px, 13px, 16px, 20px, 40px
- **Line heights:** 0.90, 1.00, 1.05, 1.10, 1.25, 2.63
- **Letter spacing:** -0.02em, 0.12em, 0.58em
- **Role:** Headlines and prominent display text — its condensed, strong forms and tight tracking make a bold statement, essential for brand recognition.

### Neue Plak Extended

- **Token:** `--font-neue-plak-extended`
- **Substitute:** Oswald
- **Weights:** 400
- **Sizes:** 12px, 13px, 15px
- **Line heights:** 1.40, 1.50, 1.54, 1.75
- **Letter spacing:** -0.02em
- **Role:** Body copy, navigation links, and descriptive text — provides a modern, slightly extended read that complements the primary display font with its own tight tracking.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Functional UI labels and secondary content, used sparingly for small, neutral elements.

### Druk Text Wide

- **Token:** `--font-druk-text-wide`
- **Substitute:** DIN Condensed
- **Weights:** 700
- **Sizes:** 10px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Small, uppercase labels and metadata where extreme compactness and impact are needed, often found in technical or index-like contexts.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.54 | — | `--text-caption` |
| body-sm | 13px | 1.54 | — | `--text-body-sm` |
| body | 15px | 1.54 | — | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 26px |
| buttons | 26px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 50px |
| elementGap | 6px |

## Components

### Ghost Button (White Border)

**Role:** Primary navigation and interactive elements where minimal visual weight is desired.

Transparent background, Ghost White text, 1px Ghost White border, 26px border-radius, 0px padding. Uses light text on dark background.

### Ghost Button (Black Border)

**Role:** Secondary interactive elements, often within hero sections or against lighter backgrounds.

Transparent background, Deep Space Black text, 1px Deep Space Black border, 26px border-radius, 0px padding. Uses dark text on light background.

### Ghost Button (No Radius)

**Role:** Text-based actions with a subtle border for emphasis.

Transparent background, Deep Space Black text, 1px Deep Space Black border, 0px border-radius, 0px padding.

### Crimson Content Card

**Role:** Container for distinct content blocks within the layout, particularly for rich media.

Background of Crimson Flux (#730200), 0px border-radius, 0px box-shadow, 0px top/bottom padding, 50px left/right padding.

## Do's and Don'ts

### Do

- Use Deep Space Black (#000000) as the default background for most page sections.
- Apply Crimson Flux (#730200) as a strong accent color for background washes or content cards.
- Prioritize Integral CF for all headlines and impactful display text, with tight letter-spacing.
- Use Neue Plak Extended for detailed body copy, ensuring -0.02em letter spacing for a refined feel.
- Implement 26px border-radius for all interactive buttons and links to give them a distinct pill-like shape.
- Maintain a clear visual hierarchy with Ghost White (#ffffff) text on dark backgrounds and Deep Space Black (#000000) on lighter surfaces.
- Ensure generous horizontal padding of 50px for card components to create breathing room.

### Don't

- Avoid using multiple chromatic colors; stick to Crimson Flux as the primary accent.
- Do not use box-shadows or elevation to distinguish elements; rely on color contrast and strong borders.
- Do not use system default font stacks; always specify custom fonts for brand consistency.
- Avoid decorative gradients unless explicitly part of a hero or full-bleed background element.
- Do not introduce soft, rounded shapes except for the 26px radius on buttons and links.
- Do not use generic button styles; always apply the ghost button variants to maintain a minimalist interactive approach.
- Avoid complex layouts or grids; prefer full-bleed imagery and two-column content arrangements.

## Imagery

This site predominantly features full-bleed, high-fidelity 3D renders of its primary HAPE character, often in dynamic or editorial poses. These visuals are core to the brand and act as both atmospheric backdrops and product showcases. The visuals are typically dark and moody, with a strong emphasis on red lighting or accents, creating a dramatic and high-fashion aesthetic. Icons appear in an outlined, monochrome style, complementing the minimalist UI. Imagery is high-density, dominating screen real estate over text, and is always fully contained within its section boundaries.

## Layout

The page adheres to a full-bleed layout, particularly in the hero section, which features a large 3D graphic under a centered headline. Subsequent sections maintain a strong visual rhythm with contrasting full-bleed backgrounds (Crimson Flux or Deep Space Black) and content often arranged in a two-column text-left/image-right or centered stack. Vertical spacing between sections is consistent at around 50px, creating defined content blocks without explicit dividers. The navigation is minimal, consisting of a sticky top bar with subtle ghost links and a burger menu, plus a persistent bottom navigation bar for key actions.

## Similar Brands

- **RTFKT Studios** — High-fidelity 3D character renders as central brand imagery, dark and futuristic aesthetic.
- **Dior (digital campaigns)** — Fashion-forward typography, strong use of extended typefaces, and high-impact editorial layouts with bold color accents.
- **Kith (ecommerce)** — Emphasis on lifestyle photography mixed with abstract design elements, strong black-and-white base with color pops.
- **The Fabricant** — Digital fashion focus, use of avant-garde 3D imagery, minimalist UI with strong visual statements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-crimson-flux: #730200;
  --color-deep-space-black: #000000;
  --color-ghost-white: #ffffff;
  --color-heat-stroke-radial: #b70505;
  --font-integral-cf: 'Integral CF', Bebas Neue;
  --font-neue-plak-extended: 'Neue Plak Extended', Oswald;
  --font-arial: 'Arial', Arial;
  --font-druk-text-wide: 'Druk Text Wide', DIN Condensed;
  --text-caption: 12px;
  --leading-caption: 1.54;
  --text-body-sm: 13px;
  --leading-body-sm: 1.54;
  --text-body: 15px;
  --leading-body: 1.54;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --radius-links: 26px;
  --radius-buttons: 26px;
}
```

### Tailwind v4

```css
@theme {
  --color-crimson-flux: #730200;
  --color-deep-space-black: #000000;
  --color-ghost-white: #ffffff;
  --color-heat-stroke-radial: #b70505;
  --font-integral-cf: 'Integral CF', Bebas Neue;
  --font-neue-plak-extended: 'Neue Plak Extended', Oswald;
  --font-arial: 'Arial', Arial;
  --font-druk-text-wide: 'Druk Text Wide', DIN Condensed;
  --text-caption: 12px;
  --leading-caption: 1.54;
  --text-body-sm: 13px;
  --leading-body-sm: 1.54;
  --text-body: 15px;
  --leading-body: 1.54;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --radius-links: 26px;
  --radius-buttons: 26px;
}
```
