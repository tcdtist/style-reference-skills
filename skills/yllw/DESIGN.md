---
version: alpha
name: "Yllw"
description: "Yllw employs a bold, industrial aesthetic: stark black typography makes an immediate impact against a mostly white and 'foggy gray' canvas. The layout often alternates between dense, high-contrast text blocks and more spacious sections featuring architectural line drawings, giving a sense of technical precision without being overly rigid. Component borders are crisp, often 1px black, reinforcing the structured, no-nonse feel, while a single vivid yellow accent provides a punch of energetic utility for alerts and interactive prompts."
theme: "light"
industry: "agency"
source_url: "https://www.yllw.com/en"
refero_style_id: "9483a10e-e098-4f94-ae22-ab5a63702243"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508774715-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508774715-thumb.jpg"
extracted_at: "2026-04-30T00:27:18.654Z"
---

# Yllw — Style Reference

> Industrial Blueprint on Fog

**Theme:** light

**Industry:** agency

Yllw employs a bold, industrial aesthetic: stark black typography makes an immediate impact against a mostly white and 'foggy gray' canvas. The layout often alternates between dense, high-contrast text blocks and more spacious sections featuring architectural line drawings, giving a sense of technical precision without being overly rigid. Component borders are crisp, often 1px black, reinforcing the structured, no-nonse feel, while a single vivid yellow accent provides a punch of energetic utility for alerts and interactive prompts.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Ghost White | #ffffff | `--color-ghost-white` | Page backgrounds, card surfaces, ghost button backgrounds, specific text highlights — acts as a clean, expansive canvas |
| Foggy Gray | #cac7b4 | `--color-foggy-gray` | Secondary page backgrounds, alternative card surfaces, muted button fills, and subtle borders — a desaturated, cool gray that maintains neutrality |
| Deep Charcoal | #191919 | `--color-deep-charcoal` | Darker surface backgrounds for contrast sections |
| Light Gray | #cccccc | `--color-light-gray` | Subtle border lines and dividers |
| School Bus Yellow | #ffdd00 | `--color-school-bus-yellow` | Prominent alert banners, attention-grabbing accents for utility messaging, and distinct section backgrounds — a vivid, high-energy punctuation |

## Tokens — Typography

### Gd Grio Vf

- **Token:** `--font-gd-grio-vf`
- **Substitute:** Archivo Black, Anton
- **Weights:** 400, 500, 600, 700
- **Sizes:** 13px, 14px, 16px, 18px, 20px, 26px, 36px, 40px, 44px, 64px, 90px, 97px, 116px, 166px, 216px
- **Line heights:** 0.88, 0.90, 0.96, 1.00, 1.04, 1.18, 1.24, 1.28, 1.50
- **Letter spacing:** -0.0250em at 216px, -0.0050em at 13px
- **Role:** All textual content, from body to display headings. The variable font allows for fine control over weight, contributing to the impactful, almost architectural feel of the typography. Letter spacing is consistently tightened for larger sizes to maintain density and visual weight.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.5 | -0.005px | `--text-caption` |
| body | 16px | 1.5 | -0.006px | `--text-body` |
| subheading | 26px | 1.24 | -0.01px | `--text-subheading` |
| heading-sm | 36px | 1.18 | -0.015px | `--text-heading-sm` |
| heading | 44px | 1.04 | -0.02px | `--text-heading` |
| heading-lg | 90px | 0.9 | -0.025px | `--text-heading-lg` |
| display | 216px | 0.88 | -0.025px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-63 | 63px | `--spacing-63` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-97 | 97px | `--spacing-97` |
| spacing-124 | 124px | `--spacing-124` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-288 | 288px | `--spacing-288` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 6px |
| default | 2px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgb(0, 0, 0) 0px 0px 0px 1px inset | `--shadow-xl` |
| xl-2 | rgb(255, 255, 255) 0px 0px 0px 1px inset | `--shadow-xl-2` |
| xl-3 | rgb(255, 255, 255) 0px 0px 0px 1px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 64px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Filled Button - Foggy

**Role:** Primary action button for key calls to action.

Background: Foggy Gray (#cac7b4), Text: Midnight Ink (#000000), Border: 1px solid Midnight Ink (#000000), Radius: 2px, Padding: 12px vertical, 20px horizontal.

### Outlined Button - Foggy

**Role:** Secondary action button, providing a less prominent interactive element.

Background: transparent, Text: Midnight Ink (#000000), Border: 1px solid Midnight Ink (#000000), Radius: 2px, Padding: 12px vertical, 20px horizontal.

### Filled Button - White

**Role:** Action button used on darker backgrounds or for specific content blocks.

Background: Ghost White (#ffffff), Text: Midnight Ink (#000000), Border: 1px solid Midnight Ink (#000000), Radius: 2px, Padding: 12px vertical, 20px horizontal.

### Outlined Button - White Text

**Role:** Ghost button variant, typically used on dark or image backgrounds.

Background: transparent, Text: Ghost White (#ffffff), Border: 1px solid Ghost White (#ffffff), Radius: 2px, Padding: 12px vertical, 20px horizontal.

### Borderless Card

**Role:** Content container for features or descriptions, emphasizing content without visual heavy lifting.

Background: transparent, Border: none, Radius: 0px, Padding: 0px vertical, 24px horizontal, 16px bottom.

### White Card

**Role:** Elevated content block, typically for feature outlines or detailed information.

Background: Ghost White (#ffffff), Border: none, Radius: 0px, Padding: 0px.

### Foggy Card Border

**Role:** Decorative card with a subtle contextual background, indicating a section.

Background: Foggy Gray (#cac7b4), Border: none, Radius: 0px, Padding: 1px.

### Black Card

**Role:** High-contrast card for specific standout content sections.

Background: Midnight Ink (#000000), Border: none, Radius: 0px, Padding: 0px.

### Accordion Item

**Role:** Collapsible content area, often seen in FAQs or service listings.

Background: transparent, Text: Midnight Ink (#000000), Border: none, Radius: 0px, Padding: 0px. Features hidden content revealed on click, typically marked with a '+' icon.

### Info Banner - Yellow

**Role:** Top-level communication bar for important, temporary messages.

Background: School Bus Yellow (#ffdd00), Text: Midnight Ink (#000000), Height: 32px (calculated from screenshot of top banner).

## Do's and Don'ts

### Do

- Prioritize high contrast with Midnight Ink (#000000) for all primary text and critical UI elements against lighter backgrounds.
- Use Foggy Gray (#cac7b4) and Ghost White (#ffffff) as the primary background and surface colors, alternating them to create visual rhythm between sections.
- Apply Gd Grio Vf with dense, impactful kerning, especially at larger sizes, to convey a strong, architectural typographic presence (e.g., -0.0250em for display text).
- Employ the 2px border radius for all interactive elements like buttons and navigation items, maintaining a sharp, precise feel.
- Reserve School Bus Yellow (#ffdd00) sparingly for high-attention alerts, banners, and functional highlights rather than decorative purposes.
- Maintain consistent 1px Midnight Ink (#000000) borders for all outline buttons and visual separators to reinforce a structured system.
- Use 64px for section gaps to create generous breathing room between major content blocks, with 16px as the primary element spacing within sections.

### Don't

- Avoid using multiple chromatic colors; restrict non-neutral color to School Bus Yellow (#ffdd00) for accent and utility.
- Do not introduce soft shadows or gradients for elevation; rely on stark color contrast and 1px borders for depth.
- Refrain from using heavily rounded corners; adhere to the 2px default radius for buttons and links, and 6px for cards.
- Do not break away from the Gd Grio Vf font; avoid generic sans-serif substitutes that dilute the bold, industrial aesthetic.
- Do not vary line heights significantly for body text; keep it tight and consistent to maintain readability and density.
- Avoid decorative imagery that is not aligned with the brand's architectural, industrial, or blueprint aesthetic.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background, expansive light areas. |
| 1 | Section Fog | #cac7b4 | Secondary page sections, alternating background for content blocks. |
| 2 | Utility Yellow | #ffdd00 | Top-level alert banners, highly prominent calls to action or information. |
| 3 | Accent Dark | #191919 | High-contrast background for feature blocks or quotes, providing visual anchor. |

## Elevation

- **Button Inset Shadow - Black:** `rgb(0, 0, 0) 0px 0px 0px 1px inset`
- **Button Inset Shadow - White:** `rgb(255, 255, 255) 0px 0px 0px 1px inset`
- **Button Outline Shadow - White:** `rgb(255, 255, 255) 0px 0px 0px 1px`

## Imagery

This site uses a mix of high-contrast photography integrated into large typographic fields and abstract architectural line drawings or blueprints. Photography tends to be tightly cropped, often showcasing people collaboratively working in modern office environments, serving as a backdrop or infill for bold text. Illustrations are highly stylized, consisting of geometric, outlined floor plans and structural elements, usually in white against Foggy Gray backgrounds, functioning as explanatory content or decorative accents. Icons are minimal, outlined, and monochromatic (Midnight Ink) with a thin stroke weight, primarily for functional purposes (e.g., accordion toggles, navigation arrows). The overall role of imagery is to support the structured, architectural narrative and enhance content explanation, keeping a text-dominant feel.

## Layout

The page primarily follows a max-width contained layout, typically centered around a 1200px content area, with some full-bleed sections (e.g., the top alert bar, some hero elements, or alternating background bands). The hero section is a full-width header featuring oversized, impactful typography 'TRANSFORMING SPACES DRIVING GROWTH' often with an embedded image or video within the text itself. Sections alternate between Ghost White and Foggy Gray backgrounds, creating a clear vertical rhythm. Content often appears in centered stacks, or in 2-column or 3-column feature grids for services and solutions. Distinct structural elements are often outlined with thin Midnight Ink (#000000) borders, especially in areas featuring architectural drawings. Navigation is a minimalist sticky top bar within a contained layout, with a prominent 'Book a meeting' call to action button.

## Similar Brands

- **Linear** — Lean UI with sharp contrasts, minimal color accents, and a focus on highly legible, functional typography.
- **Figma** — Strategic use of dark neutrals, stark typography, and a powerful single accent color to define interactive elements.
- **Architectural firms' websites** — Emphasis on large, impactful typography, structured layouts, and often architectural line drawings or blueprints as decorative elements.
- **Supabase** — Heavy reliance on a few strong colors, particularly a distinctive accent, and crisp, sharp component detailing.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-ghost-white: #ffffff;
  --color-foggy-gray: #cac7b4;
  --color-deep-charcoal: #191919;
  --color-light-gray: #cccccc;
  --color-school-bus-yellow: #ffdd00;
  --font-gd-grio-vf: 'Gd Grio Vf', Archivo Black, Anton;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: -0.005px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.006px;
  --text-subheading: 26px;
  --leading-subheading: 1.24;
  --tracking-subheading: -0.01px;
  --text-heading-sm: 36px;
  --leading-heading-sm: 1.18;
  --tracking-heading-sm: -0.015px;
  --text-heading: 44px;
  --leading-heading: 1.04;
  --tracking-heading: -0.02px;
  --text-heading-lg: 90px;
  --leading-heading-lg: 0.9;
  --tracking-heading-lg: -0.025px;
  --text-display: 216px;
  --leading-display: 0.88;
  --tracking-display: -0.025px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-63: 63px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-96: 96px;
  --spacing-97: 97px;
  --spacing-124: 124px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-288: 288px;
  --radius-cards: 6px;
  --radius-default: 2px;
  --shadow-xl: rgb(0, 0, 0) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgb(255, 255, 255) 0px 0px 0px 1px inset;
  --shadow-xl-3: rgb(255, 255, 255) 0px 0px 0px 1px;
  --surface-canvas-white: #ffffff;
  --surface-section-fog: #cac7b4;
  --surface-utility-yellow: #ffdd00;
  --surface-accent-dark: #191919;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-ghost-white: #ffffff;
  --color-foggy-gray: #cac7b4;
  --color-deep-charcoal: #191919;
  --color-light-gray: #cccccc;
  --color-school-bus-yellow: #ffdd00;
  --font-gd-grio-vf: 'Gd Grio Vf', Archivo Black, Anton;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: -0.005px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.006px;
  --text-subheading: 26px;
  --leading-subheading: 1.24;
  --tracking-subheading: -0.01px;
  --text-heading-sm: 36px;
  --leading-heading-sm: 1.18;
  --tracking-heading-sm: -0.015px;
  --text-heading: 44px;
  --leading-heading: 1.04;
  --tracking-heading: -0.02px;
  --text-heading-lg: 90px;
  --leading-heading-lg: 0.9;
  --tracking-heading-lg: -0.025px;
  --text-display: 216px;
  --leading-display: 0.88;
  --tracking-display: -0.025px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-63: 63px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-96: 96px;
  --spacing-97: 97px;
  --spacing-124: 124px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-288: 288px;
  --radius-cards: 6px;
  --radius-default: 2px;
  --shadow-xl: rgb(0, 0, 0) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgb(255, 255, 255) 0px 0px 0px 1px inset;
  --shadow-xl-3: rgb(255, 255, 255) 0px 0px 0px 1px;
  --surface-canvas-white: #ffffff;
  --surface-section-fog: #cac7b4;
  --surface-utility-yellow: #ffdd00;
  --surface-accent-dark: #191919;
}
```
