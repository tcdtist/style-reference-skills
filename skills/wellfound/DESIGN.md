---
version: alpha
name: "Wellfound"
description: "Wellfound projects a functional, modern job market feel with a dominant light theme punctuated by dark, almost black, sections for emphasis. The design emphasizes clear navigation and content presentation using a structured layout and a clean typographic hierarchy. Subtle touches of vibrant accent colors are used sparingly to highlight interactive elements and brand identity, rather than for decorative flourishes. Components are generally lightweight, favoring soft borders over heavy shadows."
theme: "light"
industry: "productivity"
source_url: "https://wellfound.com"
refero_style_id: "f8286b32-cc41-43e3-8b43-067333bb2e32"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510320117-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510320117-thumb.jpg"
extracted_at: "2026-04-30T00:52:31.047Z"
---

# Wellfound — Style Reference

> Startup Canvas, Clean Bold Type

**Theme:** light

**Industry:** productivity

Wellfound projects a functional, modern job market feel with a dominant light theme punctuated by dark, almost black, sections for emphasis. The design emphasizes clear navigation and content presentation using a structured layout and a clean typographic hierarchy. Subtle touches of vibrant accent colors are used sparingly to highlight interactive elements and brand identity, rather than for decorative flourishes. Components are generally lightweight, favoring soft borders over heavy shadows.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button backgrounds |
| Midnight Ink | #051316 | `--color-midnight-ink` | Primary text, main CTA backgrounds, dark card surfaces, navigation text |
| Smoke Gray | #d8d8d8 | `--color-smoke-gray` | Muted borders, inactive button borders, hero element borders |
| Charcoal | #333333 | `--color-charcoal` | Secondary text, link text, image border details |
| Off-Black | #222222 | `--color-off-black` | Navigation text in dark sections |
| Deep Plum | #210d25 | `--color-deep-plum` | Dark section backgrounds, decorative icon fills |
| Rose Blush | #fff4f6 | `--color-rose-blush` | Soft accent card backgrounds, subtle background washes |
| Vermillion Red | #ec2e3a | `--color-vermillion-red` | Red outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Burgundy Bloom | #541142 | `--color-burgundy-bloom` | Decorative link backgrounds for specific content blocks |
| Marigold Gold | #f4b640 | `--color-marigold-gold` | Specific link backgrounds, decorative accents |
| Fiery Orange | #e32e19 | `--color-fiery-orange` | Orange outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Peach Fuzz | #ffdfda | `--color-peach-fuzz` | Subtle background tones, light decorative elements |

## Tokens — Typography

### Graphik

- **Token:** `--font-graphik`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 14px, 16px, 17px, 21px, 22px, 24px, 30px, 40px, 72px, 100px
- **Line heights:** 0.82, 1.00, 1.13, 1.14, 1.27, 1.30, 1.36, 1.40, 1.43, 1.50, 1.71
- **Letter spacing:** -0.0200em at 100px, -0.0160em at 40px, -0.0130em at 30px
- **Role:** Primary typeface for all headings, body text, and UI elements. Its strong, geometric character provides a confident, direct voice. The wide range of weights supports extensive hierarchy.

### Aeonik Fono

- **Token:** `--font-aeonik-fono`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.40
- **Letter spacing:** -0.0200em at 40px, normal at 14px
- **Role:** Used for specific button text and decorative headings, providing a distinct geometric feel compared to Graphik.

### Aeonikfono

- **Token:** `--font-aeonikfono`
- **Weights:** 400, 700
- **Sizes:** 40px
- **Line heights:** 1.3
- **Letter spacing:** -0.02
- **Role:** Aeonikfono — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.4 | 0px | `--text-caption` |
| body-sm | 16px | 1.4 | 0px | `--text-body-sm` |
| subheading | 21px | 1.36 | 0px | `--text-subheading` |
| heading | 30px | 1.3 | -0.39px | `--text-heading` |
| heading-lg | 40px | 1.13 | -0.64px | `--text-heading-lg` |
| display | 72px | 1 | -1.44px | `--text-display` |
| display-lg | 100px | 0.82 | -2px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-264 | 264px | `--spacing-264` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 1000px |
| cards | 16px |
| buttons | 12px |
| largeElements | 40px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.06) 0px 9px 20px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1400px |
| sectionGap | 40px |
| cardPadding | 22px |
| elementGap | 20px |

## Components

### Primary Filled Button (Dark)

**Role:** Call to action button for primary actions.

Background: Midnight Ink (#051316). Text: Canvas White (#ffffff). Radius: 12px. Padding: 8px vertical, 24px horizontal. Border: none.

### Ghost Button (Light Border)

**Role:** Secondary action or navigational buttons, visually lighter.

Background: transparent. Text: Canvas White (#ffffff). Border: 1px solid rgba(255, 255, 255, 0.25). Radius: 12px. Padding: 14px vertical, 24px horizontal.

### Ghost Button (Dark Border)

**Role:** Secondary action button on light backgrounds.

Background: Canvas White (#ffffff). Text: Midnight Ink (#051316). Border: 1px solid Smoke Gray (#d8d8d8). Radius: 12px. Padding: 14px vertical, 24px horizontal.

### Feature Card (Rose Blush)

**Role:** Used for presenting key features or benefits.

Background: Rose Blush (#fff4f6). Radius: 16px. Padding: 40px. No box-shadow.

### Information Card (White)

**Role:** Standard card for content blocks and lists.

Background: Canvas White (#ffffff). Radius: 16px. Padding: 40px. No box-shadow.

### Job Tag Button

**Role:** Interactive tags for filtering or categorization.

Background: Canvas White (#ffffff). Text: Midnight Ink (#051316). Border: 1px solid Smoke Gray (#d8d8d8). Radius: 1000px (pill shape). Padding: 14px vertical, 24px horizontal. Has a soft shadow on interaction.

### Log In Button (Header)

**Role:** Navigation button for user authentication.

Background: Canvas White (#ffffff). Text: Midnight Ink (#051316). Border: 1px solid Smoke Gray (#d8d8d8). Radius: 12px. Padding: 14px vertical, 24px horizontal.

## Do's and Don'ts

### Do

- Prioritize Midnight Ink (#051316) for primary text and main calls to action on light backgrounds, ensuring strong contrast.
- Use a 12px border-radius for interactive elements like buttons and navigation items for a consistent rounded aesthetic.
- Apply Rose Blush (#fff4f6) as a subtle background for feature cards to differentiate them from the main Canvas White (#ffffff) surface.
- Maintain generous padding; apply at least 20px padding around content within cards and elements, and a 40px section gap between major content blocks.
- Employ the Graphik typeface for all text elements, utilizing its multiple weights to establish clear typographic hierarchy.
- Use pill-shaped tags with a 1000px border-radius for interactive filters and categorizations, styled with Canvas White (#ffffff) background and Smoke Gray (#d8d8d8) border.
- Introduce a subtle shadow (rgba(0, 0, 0, 0.06) 0px 9px 20px 0px) on interactive elements like buttons to indicate hover or active states.

### Don't

- Avoid using multiple accent colors in close proximity; restrict their use to single highlights or functional elements.
- Do not extend Deep Plum (#210d25) to text or borders; reserve it exclusively for background sections or large decorative elements.
- Prevent excessive use of borders; use them sparingly for separation or interactive states rather than for all container elements.
- Do not deviate from the established type scale; maintain consistent font sizes and line heights defined for each semantic role.
- Avoid decorative gradients for UI elements; keep a flat aesthetic with solid colors for all buttons and panels.
- Do not introduce new shadow styles; adhere to the specified button shadow or refrain from using additional shadows.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background and default surface for content areas |
| 1 | Rose Blush | #fff4f6 | Elevated card backgrounds, subtle highlight sections |
| 2 | Deep Plum | #210d25 | Prominent dark background sections for emphasis and data display |

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.06) 0px 9px 20px 0px`

## Imagery

The site uses minimal imagery, primarily focusing on UI and typographic presentation. When present, images are tightly cropped product shots or abstract, illustrative icons rather than photography. Icons are generally outlined, matching the lightweight UI aesthetic. The overall density is text-dominant, with imagery serving as functional complements rather than decorative elements. Abstract graphics like the 'Find what's next' dotted outline are simple, linear, and serve to highlight key phrases.

## Layout

The page primarily follows a max-width contained model (1400px), centered on the screen. The hero section features a prominent, centered headline with interactive tags over a large, dynamically generated background. Sections alternate between Canvas White (#ffffff) and Deep Plum (#210d25) backgrounds for visual rhythm. Content is arranged in either centered stacks or symmetrical two-column text-left/image-right configurations for feature explanations. Navigation consists of a sticky top bar with 'Log In' and 'Sign Up' buttons, and sub-navigation with compact links. Overall density is comfortable, with ample breathing room between elements and sections.

## Similar Brands

- **Linear** — Both use a minimalist light-on-dark/dark-on-light aesthetic with clean typography and strong structural lines, prioritizing UI over heavy graphics.
- **Supabase** — Similar bold, geometric heading typography and use of dark background sections to punctuate content in an otherwise light-themed site.
- **Vercel** — Shares a preference for a clean, developer-tool aesthetic with sophisticated typography and a focus on content hierarchy through restrained use of color.
- **Figma** — Employs an interaction-focused UI, using subtle borders and shadows for components and a clear, functional color palette to guide user flow.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-midnight-ink: #051316;
  --color-smoke-gray: #d8d8d8;
  --color-charcoal: #333333;
  --color-off-black: #222222;
  --color-deep-plum: #210d25;
  --color-rose-blush: #fff4f6;
  --color-vermillion-red: #ec2e3a;
  --color-burgundy-bloom: #541142;
  --color-marigold-gold: #f4b640;
  --color-fiery-orange: #e32e19;
  --color-peach-fuzz: #ffdfda;
  --font-graphik: 'Graphik', Inter;
  --font-aeonik-fono: 'Aeonik Fono', Space Mono;
  --font-aeonikfono: 'Aeonikfono', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 14px;
  --leading-caption: 1.4;
  --tracking-caption: 0px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: 0px;
  --text-subheading: 21px;
  --leading-subheading: 1.36;
  --tracking-subheading: 0px;
  --text-heading: 30px;
  --leading-heading: 1.3;
  --tracking-heading: -0.39px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -0.64px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -1.44px;
  --text-display-lg: 100px;
  --leading-display-lg: 0.82;
  --tracking-display-lg: -2px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-144: 144px;
  --spacing-264: 264px;
  --radius-tags: 1000px;
  --radius-cards: 16px;
  --radius-buttons: 12px;
  --radius-largeelements: 40px;
  --shadow-xl: rgba(0, 0, 0, 0.06) 0px 9px 20px 0px;
  --surface-canvas-white: #ffffff;
  --surface-rose-blush: #fff4f6;
  --surface-deep-plum: #210d25;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-midnight-ink: #051316;
  --color-smoke-gray: #d8d8d8;
  --color-charcoal: #333333;
  --color-off-black: #222222;
  --color-deep-plum: #210d25;
  --color-rose-blush: #fff4f6;
  --color-vermillion-red: #ec2e3a;
  --color-burgundy-bloom: #541142;
  --color-marigold-gold: #f4b640;
  --color-fiery-orange: #e32e19;
  --color-peach-fuzz: #ffdfda;
  --font-graphik: 'Graphik', Inter;
  --font-aeonik-fono: 'Aeonik Fono', Space Mono;
  --font-aeonikfono: 'Aeonikfono', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 14px;
  --leading-caption: 1.4;
  --tracking-caption: 0px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: 0px;
  --text-subheading: 21px;
  --leading-subheading: 1.36;
  --tracking-subheading: 0px;
  --text-heading: 30px;
  --leading-heading: 1.3;
  --tracking-heading: -0.39px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -0.64px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -1.44px;
  --text-display-lg: 100px;
  --leading-display-lg: 0.82;
  --tracking-display-lg: -2px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-144: 144px;
  --spacing-264: 264px;
  --radius-tags: 1000px;
  --radius-cards: 16px;
  --radius-buttons: 12px;
  --radius-largeelements: 40px;
  --shadow-xl: rgba(0, 0, 0, 0.06) 0px 9px 20px 0px;
  --surface-canvas-white: #ffffff;
  --surface-rose-blush: #fff4f6;
  --surface-deep-plum: #210d25;
}
```
