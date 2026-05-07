---
version: alpha
name: "Railway"
description: "The design system feels like a tranquil night journey on a futuristic train. It operates in a deep, near-black space (#13111c), punctuated by a single, focused accent of cosmic lilac (#553f83) for primary actions, creating a calm yet confident mood. Large, elegant serif headlines (IBM Plex Serif) provide a literary, almost classic authority that contrasts with the clean, utilitarian sans-serif (Inter) used for the UI. Elevation is achieved through subtle surface shifts and fine borders (#33323e) rather than shadows, reinforcing a flat, technical aesthetic. The signature element is the painterly, atmospheric hero illustration, which establishes a peaceful, imaginative tone that subverts typical dev-tool intensity."
theme: "dark"
industry: "devtools"
source_url: "https://railway.app"
refero_style_id: "5c32375f-6ef1-4345-9418-ebbb7e887343"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775928941976-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775928941976-thumb.jpg"
extracted_at: "2026-04-11T17:36:56.930Z"
---

# Railway — Style Reference

> Cosmic Midnight Express. A calm, powerful journey through a dark, starlit environment, guided by clear signals.

**Theme:** dark

**Industry:** devtools

The design system feels like a tranquil night journey on a futuristic train. It operates in a deep, near-black space (#13111c), punctuated by a single, focused accent of cosmic lilac (#553f83) for primary actions, creating a calm yet confident mood. Large, elegant serif headlines (IBM Plex Serif) provide a literary, almost classic authority that contrasts with the clean, utilitarian sans-serif (Inter) used for the UI. Elevation is achieved through subtle surface shifts and fine borders (#33323e) rather than shadows, reinforcing a flat, technical aesthetic. The signature element is the painterly, atmospheric hero illustration, which establishes a peaceful, imaginative tone that subverts typical dev-tool intensity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Space | #13111c | `--color-deep-space` | Primary page background. |
| Surface | #1a191f | `--color-surface` | Card backgrounds, secondary surfaces. |
| Crater | #33323 | `--color-crater` | Borders, UI dividers, subtle background elements. |
| Black Hole | #0d0c14 | `--color-black-hole` | Darkest UI components, code blocks. |
| Starlight | #f7f7f8 | `--color-starlight` | Primary text, active navigation, icons. |
| Starlight Dim | #d0cfd2 | `--color-starlight-dim` | Subheadings, less prominent text. |
| Comet | #a1a0ab | `--color-comet` | Body copy, placeholder text, inactive-state UI. |
| Asteroid | #868593 | `--color-asteroid` | Helper text, metadata, disabled states. |
| Cosmic Lilac | #553f83 | `--color-cosmic-lilac` | Primary CTA buttons — a calm but distinct call to action against the dark backdrop. |
| Supernova | #a05fcf | `--color-supernova` | Focus rings, active state borders, UI highlights — a brighter violet for interactive feedback. |
| Nebula Haze | #bf92ec | `--color-nebula-haze` | Decorative highlights, accent text. |
| Warp Drive Glow | #a05fcf | `--color-warp-drive-glow` | Decorative background effect — adds a powerful, futuristic energy. |
| Success | #42946 | `--color-success` | Success indicators, confirmation messages. |
| Error | #d82c20 | `--color-error` | Error messages and destructive action states. |

## Tokens — Typography

### IBM Plex Serif

- **Token:** `--font-ibm-plex-serif`
- **Substitute:** Georgia, Times New Roman
- **Weights:** 400, 500
- **Sizes:** 36px, 40px, 54px
- **Line heights:** 1.12, 1.20, 1.33
- **Letter spacing:** -1.94px at 54px, -0.72px at 36px.
- **Role:** Display headlines (54px) and large section titles (36-40px). The serif choice is a signature move, lending a classic, literary authority to a technical product. The tight negative letter-spacing is essential.

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, -apple-system
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 18px, 20px, 24px
- **Line heights:** 1.25, 1.33, 1.40, 1.43, 1.50, 1.56, 1.60, 1.63, 1.75
- **Letter spacing:** Slightly tightened at all sizes (e.g., -0.1px at 16px).
- **Role:** The workhorse font for all UI text, body copy, and subtitles. Its neutrality and readability provide a clean canvas that allows the serif headlines to stand out.

### Inter Tight

- **Token:** `--font-inter-tight`
- **Substitute:** Inter
- **Weights:** 400, 600
- **Sizes:** 32px, 40px
- **Line heights:** 1.20, 1.38
- **Letter spacing:** -0.6px at 40px, -0.48px at 32px.
- **Role:** Used for some medium-to-large headings, offering a slightly more condensed feel than Inter for specific layouts.

### ui-monospace

- **Token:** `--font-ui-monospace`
- **Substitute:** Menlo, Monaco, Consolas
- **Weights:** 400
- **Sizes:** 16px, 40px
- **Line heights:** 1.40, 1.63
- **Role:** Code snippets and log outputs in product demonstrations, providing a familiar terminal aesthetic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | -0.12px | `--text-caption` |
| body-sm | 14px | 1.5 | -0.14px | `--text-body-sm` |
| body | 16px | 1.6 | -0.1px | `--text-body` |
| subheading | 18px | 1.5 | -0.09px | `--text-subheading` |
| heading-sm | 24px | 1.33 | — | `--text-heading-sm` |
| heading | 36px | 1.2 | -0.72px | `--text-heading` |
| heading-lg | 40px | 1.2 | — | `--text-heading-lg` |
| display | 54px | 1.12 | -1.94px | `--text-display` |

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
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-76 | 76px | `--spacing-76` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-104 | 104px | `--spacing-104` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-136 | 136px | `--spacing-136` |
| spacing-159 | 159px | `--spacing-159` |
| spacing-174 | 174px | `--spacing-174` |
| spacing-235 | 235px | `--spacing-235` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 9999px |
| cards | 12px |
| inputs | 6px |
| buttons | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1280px |
| sectionGap | 96-160px |
| cardPadding | 32px |
| elementGap | 8px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Deployment Success Toast + Tab Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Testimonial Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** The main call-to-action, like 'Deploy →'.

Solid `Cosmic Lilac` (#553f83) background with `Starlight` (#f7f7f8) text. Padding is `12px 24px` with an `8px` border radius. Border is a subtle `rgba(255, 255, 255, 0.15)`. Font is Inter 500.

### Secondary Button

**Role:** Secondary actions, like 'Demo'.

Transparent background with `Starlight` (#f7f7f8) text and a `1px` solid border of `Crater` (#33323e). Padding is `12px 24px` with an `8px` border radius. Font is Inter 500.

### Navigation Link

**Role:** Header and footer navigation items.

Transparent background with `Comet` (#a1a0ab) text. On hover, text changes to `Starlight` (#f7f7f8). Padding is minimal, typically around `6px 12px`.

### Logo Grid Card

**Role:** Container for customer logos in the 'Trusted by' section.

`Surface` (#1a191f) background with a `12px` border radius and `24px` padding. A `1px` `Crater` (#33323e) border defines the card. Displays a grayscale partner logo at its center.

### Product UI Tab

**Role:** Navigation within the product UI demo.

Text label in `Asteroid` (#868593). The active tab has `Starlight` (#f7f7f8) text and a `2px` bottom border of `Supernova` (#a05fcf), providing a clear visual indicator.

### Success Toast

**Role:** A small notification for successful operations.

Dark green background (`#15231d`) with `Success` (#42946e) text and a `4px` border radius. A `1px` border of muted green (`#26543f`) provides subtle definition.

### Log Line Item

**Role:** A single line in the product's log viewer.

Uses `ui-monospace` font at 16px. Background is `Black Hole` (#0d0c14). Text color varies by log level, but defaults to `Comet` (#a1a0ab).

## Do's and Don'ts

### Do

- Use IBM Plex Serif exclusively for display-level headlines to create a sophisticated, literary feel.
- Rely on surface color shifts (`Deep Space` page, `Surface` cards) and 1px `Crater` borders for elevation.
- Reserve the `Cosmic Lilac` color for primary, high-value calls to action.
- Incorporate the atmospheric, painterly illustration style for hero sections to set the mood.
- Maintain generous vertical spacing (96px+) between content sections for a calm, spacious rhythm.
- Use a subtle grid pattern on the background of key container cards like testimonials.
- Ensure all interactive elements have a clear focus state, typically using `Supernova` (#a05fcf) as a highlight border or ring.

### Don't

- Don't use traditional box-shadows. The system's depth comes from color and borders.
- Don't use serif fonts for body copy, buttons, or any UI controls.
- Don't use the brand purples for large blocks of text.
- Don't make layouts feel dense or rushed. Prioritize breathing room.
- Don't use bright, saturated colors outside the defined purple accent and semantic palette.
- Don't use photography, especially lifestyle photos. The visual language is illustrative and product-focused.
- Don't create buttons or cards with sharp corners; use the established `8px` and `12px` radii.

## Elevation

- **Shadow 1:** `rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset`

## Imagery

The visual language is defined by a dichotomy. Atmospheric, painterly illustrations with a lofi, dreamy quality dominate the hero and background elements, establishing a unique, non-corporate mood. These are juxtaposed with clean, unadorned product UI screenshots which anchor the site in its technical reality. Customer logos are presented simply on contained cards. There is no lifestyle photography; the focus is on the abstract mood and the concrete product. Icons are minimal, likely line-based, and used for functional UI rather than decoration.

## Layout

The layout is governed by a centered, max-width container of 1280px. It opens with an immersive, full-bleed hero featuring a large atmospheric illustration that sets a calm, imaginative tone. Subsequent content sections are contained within the max-width, separated by generous vertical spacing (96px+), creating a spacious, unhurried rhythm. The structure is largely composed of centered headline stacks, followed by multi-column grids for testimonials (3-column) and partner logos. This creates a clear, hierarchical flow from broad statements to specific proof points.

## Similar Brands

- **Vercel** — Shares the high-contrast dark mode, minimalist UI, and use of a single accent color for a developer audience.
- **Linear** — Similar layered dark surfaces, subtle gradients, and precise, border-defined UI components.
- **PlanetScale** — Also combines a dark, refined aesthetic with an elegant serif font for headlines.
- **Supabase** — Another dev-tool with a strong dark-mode identity and a clean, grid-based layout structure.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-space: #13111c;
  --color-surface: #1a191f;
  --color-crater: #33323;
  --color-black-hole: #0d0c14;
  --color-starlight: #f7f7f8;
  --color-starlight-dim: #d0cfd2;
  --color-comet: #a1a0ab;
  --color-asteroid: #868593;
  --color-cosmic-lilac: #553f83;
  --color-supernova: #a05fcf;
  --color-nebula-haze: #bf92ec;
  --color-warp-drive-glow: #a05fcf;
  --color-success: #42946;
  --color-error: #d82c20;
  --font-ibm-plex-serif: 'IBM Plex Serif', Georgia, Times New Roman;
  --font-inter: 'Inter', system-ui, -apple-system;
  --font-inter-tight: 'Inter Tight', Inter;
  --font-ui-monospace: 'ui-monospace', Menlo, Monaco, Consolas;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.14px;
  --text-body: 16px;
  --leading-body: 1.6;
  --tracking-body: -0.1px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.09px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --tracking-heading: -0.72px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --text-display: 54px;
  --leading-display: 1.12;
  --tracking-display: -1.94px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-76: 76px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-104: 104px;
  --spacing-120: 120px;
  --spacing-128: 128px;
  --spacing-136: 136px;
  --spacing-159: 159px;
  --spacing-174: 174px;
  --spacing-235: 235px;
  --radius-tags: 9999px;
  --radius-cards: 12px;
  --radius-inputs: 6px;
  --radius-buttons: 8px;
  --shadow-xl: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-space: #13111c;
  --color-surface: #1a191f;
  --color-crater: #33323;
  --color-black-hole: #0d0c14;
  --color-starlight: #f7f7f8;
  --color-starlight-dim: #d0cfd2;
  --color-comet: #a1a0ab;
  --color-asteroid: #868593;
  --color-cosmic-lilac: #553f83;
  --color-supernova: #a05fcf;
  --color-nebula-haze: #bf92ec;
  --color-warp-drive-glow: #a05fcf;
  --color-success: #42946;
  --color-error: #d82c20;
  --font-ibm-plex-serif: 'IBM Plex Serif', Georgia, Times New Roman;
  --font-inter: 'Inter', system-ui, -apple-system;
  --font-inter-tight: 'Inter Tight', Inter;
  --font-ui-monospace: 'ui-monospace', Menlo, Monaco, Consolas;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.14px;
  --text-body: 16px;
  --leading-body: 1.6;
  --tracking-body: -0.1px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.09px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --tracking-heading: -0.72px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --text-display: 54px;
  --leading-display: 1.12;
  --tracking-display: -1.94px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-76: 76px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-104: 104px;
  --spacing-120: 120px;
  --spacing-128: 128px;
  --spacing-136: 136px;
  --spacing-159: 159px;
  --spacing-174: 174px;
  --spacing-235: 235px;
  --radius-tags: 9999px;
  --radius-cards: 12px;
  --radius-inputs: 6px;
  --radius-buttons: 8px;
  --shadow-xl: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
```
