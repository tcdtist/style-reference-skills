---
version: alpha
name: "Spline"
description: "The design feels like a creative void, a deep space canvas where ideas materialize as glowing forms. An absolute black (#000000) background serves as this void, making every piece of content feel like it's emitting light. Hierarchy is achieved not through shadows or solid grays, but through layered translucency — panels and buttons are semi-transparent white overlays, creating a glassmorphism effect. The custom Spline Sans typeface is used universally at normal weights, giving headings a confident but understated presence. A single, energetic Spline Blue (#0062ff) is reserved for primary actions, acting as a focused beacon in the minimalist dark environment."
theme: "dark"
industry: "design"
source_url: "https://spline.design"
refero_style_id: "b36d5c7c-9b28-4c99-b5a8-69ce03621410"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929283439-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929283439-thumb.jpg"
extracted_at: "2026-04-11T17:42:35.262Z"
---

# Spline — Style Reference

> Glowing Forms in the Void

**Theme:** dark

**Industry:** design

The design feels like a creative void, a deep space canvas where ideas materialize as glowing forms. An absolute black (#000000) background serves as this void, making every piece of content feel like it's emitting light. Hierarchy is achieved not through shadows or solid grays, but through layered translucency — panels and buttons are semi-transparent white overlays, creating a glassmorphism effect. The custom Spline Sans typeface is used universally at normal weights, giving headings a confident but understated presence. A single, energetic Spline Blue (#0062ff) is reserved for primary actions, acting as a focused beacon in the minimalist dark environment.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Void Black | #000000 | `--color-void-black` | Global page background, the foundational canvas for all content |
| Panel Sheen | #ffffff | `--color-panel-sheen` | Card and panel surfaces (CSS var: --color-panel-bg) |
| Button Sheen | #ffffff | `--color-button-sheen` | Secondary button backgrounds (CSS var: --color-btn-bg) |
| Bright White | #ffffff | `--color-bright-white` | Headlines, primary text, active icons, logos |
| Cloud | #cccccc | `--color-cloud` | Secondary body text |
| Silver | #999999 | `--color-silver` | Tertiary text, metadata, placeholder text |
| Text Dim | #ffffff | `--color-text-dim` | Inactive navigation link text |
| Nav Background | #191a1d | `--color-nav-background` | Opaque background for navigation bar on scroll |
| Spline Blue | #0062ff | `--color-spline-blue` | Primary CTA buttons — the single, high-energy action color |
| Neon Pink | #ff5cab | `--color-neon-pink` | Hero graphic accents and illustrative elements |
| Golden Orb | #ffb01f | `--color-golden-orb` | Hero graphic accents and illustrative elements |
| Violet Haze | #a770ff | `--color-violet-haze` | Hero graphic accents and illustrative elements |
| Emerald Glow | #47b35f | `--color-emerald-glow` | Hero graphic accents and illustrative elements |
| Code Orange | #ce9178 | `--color-code-orange` | Syntax highlighting in code blocks |
| Code Green | #6a9955 | `--color-code-green` | Syntax highlighting in code blocks |
| Code Blue | #569cd6 | `--color-code-blue` | Syntax highlighting in code blocks |

## Tokens — Typography

### Spline Sans

- **Token:** `--font-spline-sans`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 12px, 13px, 14px, 16px, 18px, 20px, 24px, 36px, 40px, 58px
- **Line heights:** 1.15, 1.22, 1.24, 1.25, 1.33, 1.35, 1.38, 1.43, 1.50, 1.56, 1.71
- **Role:** The universal brand typeface for all UI text, from display headlines to body copy. Its use at normal weights (400/500) gives the design an approachable, technical feel, avoiding the aggression of heavy, bold headlines.

### Spline Sans Mono

- **Token:** `--font-spline-sans-mono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.50
- **Role:** Used exclusively for code snippets and technical text, providing clear differentiation from UI copy.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.5 | — | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.35 | — | `--text-subheading` |
| heading-sm | 24px | 1.33 | — | `--text-heading-sm` |
| heading | 40px | 1.25 | — | `--text-heading` |
| display | 58px | 1.22 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-95 | 95px | `--spacing-95` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-103 | 103px | `--spacing-103` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-173 | 173px | `--spacing-173` |
| spacing-180 | 180px | `--spacing-180` |
| spacing-207 | 207px | `--spacing-207` |
| spacing-215 | 215px | `--spacing-215` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 24px |
| pills | 99px |
| buttons | 12px |
| smallPanels | 16px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1280px |
| sectionGap | 96px |
| cardPadding | 40px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Community Showcase Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Announcement Banner + Feature Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** The main user call-to-action.

Solid Spline Blue (#0062ff) background with Bright White (#ffffff) text. Uses a 12px radius and generous padding (16px 24px). Font is Spline Sans 16px weight 500.

### Secondary Button

**Role:** Secondary actions, like 'Log in' or alternate CTAs.

Translucent Button Sheen (rgba(255, 255, 255, 0.15)) background with Bright White (#ffffff) text. Uses a 12px radius and 10px 20px padding.

### Navigation Link

**Role:** Links within the main header navigation.

Ghost button style with a transparent background. Text is Text Dim (rgba(255, 255, 255, 0.7)) and becomes Bright White (#ffffff) on hover/active. No border or radius.

### Feature Card

**Role:** Large cards used to detail product features or benefits.

Large container with a Panel Sheen (rgba(255, 255, 255, 0.08)) background, a 24px border radius, and 40px internal padding. Contains heading and body text.

### Header Nav Bar

**Role:** Persistent site navigation.

A full-width container, initially transparent over the hero and transitioning to a translucent Nav Background (#191a1d) on scroll. Contains the logo, navigation links, and primary/secondary buttons.

### Logo Marquee Item

**Role:** Displaying partner or customer logos.

A simple container with a single monochrome logo in Bright White (#ffffff). No background, border, or shadow.

## Do's and Don'ts

### Do

- Use Void Black (#000000) as the universal background. Never use solid grays.
- Achieve depth and hierarchy using translucent white overlays (e.g., rgba(255,255,255,0.08)), not shadows.
- Reserve the vibrant Spline Blue (#0062ff) exclusively for primary call-to-action buttons.
- Use a 24px radius for large panels/cards and a 12px radius for buttons.
- Set all UI text, including headlines, in Spline Sans at a 400 or 500 font weight.
- Maintain generous whitespace between sections (approx. 96px) to let content breathe.
- Pair any imagery or illustrative elements with the core accent palette (Neon Pink, Golden Orb, Violet Haze).

### Don't

- Don't use drop shadows or box shadows for elevation.
- Don't introduce new saturated colors for UI elements beyond the primary Spline Blue.
- Don't use bold (700+) font weights; rely on size and color for typographic hierarchy.
- Don't use fully opaque gray backgrounds for any component.
- Don't use inconsistent corner radii; stick to the 12px/24px/pill system.
- Don't outline buttons or inputs with solid borders; use translucent fills instead.
- Don't place text directly on complex background imagery without a text protection scrim or overlay.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Void | #000000 | Global page background |
| 1 | Panel | #ffffff14 | Base card and large container surfaces |
| 2 | Interactive | #ffffff26 | Secondary buttons and interactive surfaces |

## Imagery

The visual language is split between abstract and concrete. The hero features amorphous, glowing 3D shapes that are purely atmospheric, setting a futuristic and creative tone. Below this, the imagery switches to product-focused showcases: a grid of thumbnails displaying user-generated 3D scenes and designs. All imagery serves to demonstrate the tool's capabilities, either by evoking creative possibility (abstract) or showing tangible results (showcase). There is no lifestyle photography; the product and its output are the heroes.

## Layout

The layout leads with a full-bleed, immersive hero section with centered text over an animated visual background. Subsequent content is contained within a centered, max-width (approx. 1280px) column. The page structure is a simple vertical stack of sections separated by generous whitespace (96px+). Content is often arranged in multi-column grids, such as the 5-column community showcase and the multi-column logo marquee, to display information densely but cleanly.

## Similar Brands

- **Linear** — Precision dark-mode UI with a custom sans-serif font and a single, vibrant accent color for key actions.
- **Vercel** — Developer-focused dark theme, emphasis on typography, and a minimalist interface with high-contrast elements.
- **Framer** — Creative tool for digital products with a polished dark theme, clean typography, and focus on interactive examples.
- **Runway** — AI creative tool with a futuristic dark UI, glowing accents, and emphasis on showcasing generated media.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-void-black: #000000;
  --color-panel-sheen: #ffffff;
  --color-button-sheen: #ffffff;
  --color-bright-white: #ffffff;
  --color-cloud: #cccccc;
  --color-silver: #999999;
  --color-text-dim: #ffffff;
  --color-nav-background: #191a1d;
  --color-spline-blue: #0062ff;
  --color-neon-pink: #ff5cab;
  --color-golden-orb: #ffb01f;
  --color-violet-haze: #a770ff;
  --color-emerald-glow: #47b35f;
  --color-code-orange: #ce9178;
  --color-code-green: #6a9955;
  --color-code-blue: #569cd6;
  --font-spline-sans: 'Spline Sans', Inter;
  --font-spline-sans-mono: 'Spline Sans Mono', IBM Plex Mono;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.35;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --text-heading: 40px;
  --leading-heading: 1.25;
  --text-display: 58px;
  --leading-display: 1.22;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-95: 95px;
  --spacing-96: 96px;
  --spacing-103: 103px;
  --spacing-140: 140px;
  --spacing-150: 150px;
  --spacing-173: 173px;
  --spacing-180: 180px;
  --spacing-207: 207px;
  --spacing-215: 215px;
  --radius-cards: 24px;
  --radius-pills: 99px;
  --radius-buttons: 12px;
  --radius-smallpanels: 16px;
  --surface-void: #000000;
  --surface-panel: #ffffff14;
  --surface-interactive: #ffffff26;
}
```

### Tailwind v4

```css
@theme {
  --color-void-black: #000000;
  --color-panel-sheen: #ffffff;
  --color-button-sheen: #ffffff;
  --color-bright-white: #ffffff;
  --color-cloud: #cccccc;
  --color-silver: #999999;
  --color-text-dim: #ffffff;
  --color-nav-background: #191a1d;
  --color-spline-blue: #0062ff;
  --color-neon-pink: #ff5cab;
  --color-golden-orb: #ffb01f;
  --color-violet-haze: #a770ff;
  --color-emerald-glow: #47b35f;
  --color-code-orange: #ce9178;
  --color-code-green: #6a9955;
  --color-code-blue: #569cd6;
  --font-spline-sans: 'Spline Sans', Inter;
  --font-spline-sans-mono: 'Spline Sans Mono', IBM Plex Mono;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.35;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --text-heading: 40px;
  --leading-heading: 1.25;
  --text-display: 58px;
  --leading-display: 1.22;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-95: 95px;
  --spacing-96: 96px;
  --spacing-103: 103px;
  --spacing-140: 140px;
  --spacing-150: 150px;
  --spacing-173: 173px;
  --spacing-180: 180px;
  --spacing-207: 207px;
  --spacing-215: 215px;
  --radius-cards: 24px;
  --radius-pills: 99px;
  --radius-buttons: 12px;
  --radius-smallpanels: 16px;
  --surface-void: #000000;
  --surface-panel: #ffffff14;
  --surface-interactive: #ffffff26;
}
```
