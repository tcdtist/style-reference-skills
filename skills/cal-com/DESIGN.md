---
version: alpha
name: "Cal.com"
description: "The design feels like a pragmatic, high-precision instrument. It's built on a strict and disciplined monochrome palette of black, white, and echelon grays, where color is intentionally excluded from the core UI to emphasize function. The custom font, 'Cal Sans', defines the visual identity with its geometric yet open letterforms, giving headlines a technical but approachable character. Nearly all interactive elements are either solid black or pill-shaped outlines, creating a binary system of action. Cards are the fundamental building block, using soft 8-12px radii and extremely subtle shadows to create a quiet, layered topology on a light gray background."
theme: "light"
industry: "productivity"
source_url: "https://cal.com"
refero_style_id: "5d7aa503-8cfa-49a4-bd3b-0c2f0f075c70"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775928760847-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775928760847-thumb.jpg"
extracted_at: "2026-04-11T17:33:49.454Z"
---

# Cal.com — Style Reference

> Monochrome Utility, Human Touch. A system that prioritizes clarity and function with a stark black-and-white palette, but softens it with friendly typography and rounded forms.

**Theme:** light

**Industry:** productivity

The design feels like a pragmatic, high-precision instrument. It's built on a strict and disciplined monochrome palette of black, white, and echelon grays, where color is intentionally excluded from the core UI to emphasize function. The custom font, 'Cal Sans', defines the visual identity with its geometric yet open letterforms, giving headlines a technical but approachable character. Nearly all interactive elements are either solid black or pill-shaped outlines, creating a binary system of action. Cards are the fundamental building block, using soft 8-12px radii and extremely subtle shadows to create a quiet, layered topology on a light gray background.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink | #101010 | `--color-ink` | Primary CTAs, primary text, active states. Used as the strongest dark tone, providing maximum contrast and visual weight for key actions. |
| Action Blue | #0099ff | `--color-action-blue` | Tertiary links, informational banner text. A rare, functional splash of color reserved for secondary calls to action and informational highlights. |
| White | #ffffff | `--color-white` | Card backgrounds, text on dark buttons. |
| Paper | #f4f4f4 | `--color-paper` | Main page background. |
| Graphite | #242424 | `--color-graphite` | Headlines, primary body text. |
| Slate | #6b7280 | `--color-slate` | Secondary text, descriptive copy, disabled states. |
| Stone | #898989 | `--color-stone` | Placeholder text, decorative UI elements. |
| Silver | #e5e7eb | `--color-silver` | Borders, dividers, subtle backgrounds. |
| Info Banner BG | #eff6fe | `--color-info-banner-bg` | Background for the top-of-page informational banner. |
| Google Blue | #4285f4 | `--color-google-blue` | Integration logos only. |
| Google Yellow | #fbbc04 | `--color-google-yellow` | Integration logos only. |
| Google Green | #34a853 | `--color-google-green` | Integration logos only. |
| Google Red | #ea4335 | `--color-google-red` | Integration logos only. |

## Tokens — Typography

### Cal Sans

- **Token:** `--font-cal-sans`
- **Substitute:** Poppins, Gilroy
- **Weights:** 600
- **Sizes:** 20px, 24px, 48px, 64px
- **Line heights:** 1.10 - 1.30
- **Letter spacing:** +0.01em tracking adds airiness at display sizes.
- **Role:** Primary headline font. Its geometric forms and slightly wide stance give the brand a unique, technical-yet-friendly voice. Used exclusively for headings to establish hierarchy.

### Cal Sans UI Variable Light

- **Token:** `--font-cal-sans-ui-variable-light`
- **Substitute:** Inter Light
- **Weights:** 300
- **Sizes:** 14px, 16px, 18px
- **Line heights:** 1.40 - 1.50
- **Letter spacing:** Tight negative tracking from -0.19px to -0.24px for a compact feel.
- **Role:** Primary body and UI text font. The light weight and tight negative tracking create a clean, modern text block that is readable without being loud.

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, -apple-system, sans-serif
- **Weights:** 400, 500, 600
- **Sizes:** 10px, 12px, 14px, 16px
- **Line heights:** 1.14 - 1.43
- **Role:** Secondary UI and body font. Used for smaller text, labels, and inside complex components like the calendar widget where utmost clarity is required.

### Matter

- **Token:** `--font-matter`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 10px, 12px, 14px
- **Line heights:** 1.14 - 1.50
- **Role:** Tertiary UI text for captions and metadata where a highly legible, neutral choice is needed.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.4 | -0.24px | `--text-caption` |
| body-sm | 14px | 1.5 | -0.2px | `--text-body-sm` |
| body | 16px | 1.5 | -0.19px | `--text-body` |
| subheading | 18px | 1.4 | -0.2px | `--text-subheading` |
| heading-sm | 20px | 1.3 | 0.2px | `--text-heading-sm` |
| heading | 24px | 1.3 | 0.24px | `--text-heading` |
| heading-lg | 48px | 1.1 | 0.48px | `--text-heading-lg` |
| display | 64px | 1.1 | 0.64px | `--text-display` |

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
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 9999px |
| cards | 12px |
| inputs | 8px |
| buttons | 9999px (pills), 8px (rectangular) |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px | `--shadow-xl` |
| xl-2 | rgba(255, 255, 255, 0.15) 0px 2px 0px 0px inset | `--shadow-xl-2` |
| xl-3 | rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.1) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px | `--shadow-xl-3` |
| xl-4 | rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px | `--shadow-xl-4` |
| xl-5 | rgba(34, 42, 53, 0.05) 0px 4px 8px 0px | `--shadow-xl-5` |
| xl-6 | rgb(255, 255, 255) 0px 2px 0px 0px inset | `--shadow-xl-6` |
| xl-7 | rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 0px 2px 0px | `--shadow-xl-7` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 96px |
| cardPadding | 24px |

## Components

### Compliance Info Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### How It Works — Feature Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Testimonial Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** The main call-to-action on the page.

A pill-shaped button. Background: Ink (#101010). Text: White (#ffffff). Font: Cal Sans UI at 14-16px. Radius: 9999px. Padding: ~12px 24px.

### Secondary Ghost Button

**Role:** A secondary call-to-action, often next to the primary.

A pill-shaped outline button. Background: transparent or Paper (#f4f4f4). Text: Graphite (#242424). Border: 1px solid Silver (#e5e7eb). Radius: 9999px. Padding: ~12px 24px.

### Header CTA Button

**Role:** The main call-to-action in the sticky header.

A rectangular button. Background: Ink (#101010). Text: White (#ffffff). Font: Cal Sans UI at 14px. Radius: 8px. Padding: ~8px 16px.

### Tag Button

**Role:** Small, non-critical buttons for categorizing or filtering content.

A small pill button. Background: Paper (#f4f4f4) or Silver (#e5e7eb). Text: Graphite (#242424). Radius: 9999px. Padding: ~4px 12px.

### Scheduling Widget Card

**Role:** The hero component showcasing the product's core functionality.

Background: White (#ffffff). Padding: 16px. Radius: 12px. Shadow: `rgba(36, 36, 36, 0.05) 0px 4px 8px 0px`. Contains an interactive calendar UI.

### Navigation Link

**Role:** Links in the main site header.

Text-only link. Color: Graphite (#242424). Font: Cal Sans UI at 14-16px. No underline.

## Do's and Don'ts

### Do

- Use 'Cal Sans' weight 600 exclusively for headings (size 20px and above).
- Employ a strict monochrome palette (Ink, Graphite, Slate, Paper, White) for 99% of the UI.
- Use pill-shaped buttons (9999px radius) for all primary and secondary page CTAs.
- Apply a 12px border radius to all content cards and large containers.
- Use subtle, diffuse shadows (`rgba(36, 36, 36, 0.05) 0px 4px 8px 0px`) for elevation.
- Set body copy in 'Cal Sans UI Variable Light' with tight negative letter-spacing.
- Reserve the single 'Action Blue' (#0099ff) for secondary links or informational highlights.

### Don't

- Do not introduce any new colors to the core UI; confine color to logos and the single blue accent.
- Do not use sharp corners on buttons or cards.
- Do not use font weights heavier than 600.
- Do not use traditional outlined buttons; use either solid 'Ink' or 'ghost' pill buttons.
- Do not use gradients on any buttons or card backgrounds.
- Do not use borders on cards; use shadows for separation.
- Do not set body text in 'Cal Sans'; it is for headlines only.

## Elevation

- **Feature Card, Scheduling Widget:** `rgba(36, 36, 36, 0.05) 0px 4px 8px 0px`
- **Hover/Focus Card:** `rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px`

## Imagery

The visual language is entirely product-centric and informational. Imagery consists solely of clean, isolated product UI screenshots and the logos of integration partners. There is no lifestyle photography, illustration, or abstract graphics. This choice reinforces the brand's focus on its functional capabilities, letting the product itself be the hero. All visual elements are presented within contained cards, never full-bleed, maintaining the page's orderly, grid-based structure.

## Layout

The site uses a centered layout within a max-width of 1200px, creating generous breathing room on either side. Sections are clearly demarcated by 96px of vertical space, establishing a calm, deliberate rhythm. The hero combines a large headline stack with a prominent product UI visual. Content below follows a predictable pattern of centered headlines followed by 3-column feature card grids or alternating text-and-visual blocks. This simple, highly structured approach emphasizes clarity and ease of navigation.

## Similar Brands

- **Calendly** — Direct competitor with a similar clean, utility-focused scheduling UI, but uses more color.
- **Linear** — Shares the disciplined monochrome palette, precision typography, and subtle shadows.
- **Vercel** — Similar use of a geometric sans-serif for headlines (Geist) against a stark black-and-white UI.
- **Pitch** — Employs a custom slab-serif for identity and relies on a clean, card-based layout with a primarily B&W palette.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink: #101010;
  --color-action-blue: #0099ff;
  --color-white: #ffffff;
  --color-paper: #f4f4f4;
  --color-graphite: #242424;
  --color-slate: #6b7280;
  --color-stone: #898989;
  --color-silver: #e5e7eb;
  --color-info-banner-bg: #eff6fe;
  --color-google-blue: #4285f4;
  --color-google-yellow: #fbbc04;
  --color-google-green: #34a853;
  --color-google-red: #ea4335;
  --font-cal-sans: 'Cal Sans', Poppins, Gilroy;
  --font-cal-sans-ui-variable-light: 'Cal Sans UI Variable Light', Inter Light;
  --font-inter: 'Inter', system-ui, -apple-system, sans-serif;
  --font-matter: 'Matter', Inter;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: -0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.2px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.19px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: 0.2px;
  --text-heading: 24px;
  --leading-heading: 1.3;
  --tracking-heading: 0.24px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: 0.48px;
  --text-display: 64px;
  --leading-display: 1.1;
  --tracking-display: 0.64px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --radius-tags: 9999px;
  --radius-cards: 12px;
  --radius-inputs: 8px;
  --radius-buttons: 9999px (pills), 8px (rectangular);
  --shadow-xl: rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px;
  --shadow-xl-2: rgba(255, 255, 255, 0.15) 0px 2px 0px 0px inset;
  --shadow-xl-3: rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.1) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px;
  --shadow-xl-4: rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px;
  --shadow-xl-5: rgba(34, 42, 53, 0.05) 0px 4px 8px 0px;
  --shadow-xl-6: rgb(255, 255, 255) 0px 2px 0px 0px inset;
  --shadow-xl-7: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 0px 2px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-ink: #101010;
  --color-action-blue: #0099ff;
  --color-white: #ffffff;
  --color-paper: #f4f4f4;
  --color-graphite: #242424;
  --color-slate: #6b7280;
  --color-stone: #898989;
  --color-silver: #e5e7eb;
  --color-info-banner-bg: #eff6fe;
  --color-google-blue: #4285f4;
  --color-google-yellow: #fbbc04;
  --color-google-green: #34a853;
  --color-google-red: #ea4335;
  --font-cal-sans: 'Cal Sans', Poppins, Gilroy;
  --font-cal-sans-ui-variable-light: 'Cal Sans UI Variable Light', Inter Light;
  --font-inter: 'Inter', system-ui, -apple-system, sans-serif;
  --font-matter: 'Matter', Inter;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: -0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.2px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.19px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: 0.2px;
  --text-heading: 24px;
  --leading-heading: 1.3;
  --tracking-heading: 0.24px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: 0.48px;
  --text-display: 64px;
  --leading-display: 1.1;
  --tracking-display: 0.64px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --radius-tags: 9999px;
  --radius-cards: 12px;
  --radius-inputs: 8px;
  --radius-buttons: 9999px (pills), 8px (rectangular);
  --shadow-xl: rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px;
  --shadow-xl-2: rgba(255, 255, 255, 0.15) 0px 2px 0px 0px inset;
  --shadow-xl-3: rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.1) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px;
  --shadow-xl-4: rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px;
  --shadow-xl-5: rgba(34, 42, 53, 0.05) 0px 4px 8px 0px;
  --shadow-xl-6: rgb(255, 255, 255) 0px 2px 0px 0px inset;
  --shadow-xl-7: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 0px 2px 0px;
}
```
