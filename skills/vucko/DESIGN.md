---
version: alpha
name: "Vucko"
description: "Vucko's design system embodies unadorned precision with a high-contrast monochrome palette. Bold, oversized typography dominates the visual field, creating clear hierarchy through scale rather than color. Surface treatments are flat and minimal, emphasizing content, while subtle border radii apply to interactive elements and showcased cards. The overall effect is one of directness and sophisticated restraint, where motion is implied through scale and interaction rather than explicit graphical flourishes."
theme: "light"
industry: "design"
source_url: "https://vucko.co"
refero_style_id: "cc5b19fd-12cf-4b30-801c-8a0363646e48"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509258904-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509258904-thumb.jpg"
extracted_at: "2026-04-30T00:34:40.800Z"
---

# Vucko — Style Reference

> High-contrast typographic canvas.

**Theme:** light

**Industry:** design

Vucko's design system embodies unadorned precision with a high-contrast monochrome palette. Bold, oversized typography dominates the visual field, creating clear hierarchy through scale rather than color. Surface treatments are flat and minimal, emphasizing content, while subtle border radii apply to interactive elements and showcased cards. The overall effect is one of directness and sophisticated restraint, where motion is implied through scale and interaction rather than explicit graphical flourishes.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Canvas White | #ffffff | `--color-canvas-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Slate Mist | #eeeeee | `--color-slate-mist` | Subtle background for UI cards and contained sections, providing a soft lift from the main canvas |
| Warm Gray | #888a8b | `--color-warm-gray` | Secondary body text, muted details, and less prominent borders, offering visual relief without losing legibility |
| Deep Gray | #222222 | `--color-deep-gray` | Darker background for utility navigation or section separators, creating a deeper tonal shift than slate mist |

## Tokens — Typography

### suisse

- **Token:** `--font-suisse`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 700
- **Sizes:** 17px, 18px, 19px, 43px, 55px, 120px, 211px
- **Line heights:** 0.70, 1.00, 1.05, 1.13, 1.17, 1.21, 1.50
- **Letter spacing:** -0.0570em at 211px, -0.0200em at 55px, -0.0100em at 43px, normal at 17px
- **OpenType features:** 'kern' 0
- **Role:** The singular typeface for all content. Its commanding presence, especially at large sizes with negative letter-spacing, defines the brand's direct and impactful tone. Monochromatic by default, its role is anchored in its sheer scale and weight for distinction.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 17px | 1.5 | 0px | `--text-caption` |
| subheading | 19px | 1.5 | 0px | `--text-subheading` |
| heading-sm | 43px | 1.21 | -0.43px | `--text-heading-sm` |
| heading | 55px | 1.17 | -1.1px | `--text-heading` |
| heading-lg | 120px | 1.13 | -2.4px | `--text-heading-lg` |
| display | 211px | 0.7 | -11.9px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-77 | 77px | `--spacing-77` |
| spacing-82 | 82px | `--spacing-82` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-192 | 192px | `--spacing-192` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 9.6px |
| buttons | 0px |
| navItems | 9999px |
| utilityElements | 4.8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 58px |
| cardPadding | 0px |
| elementGap | 23px |

## Components

### Text Link Button (Dark)

**Role:** Interactive text link, border-bottom appears on hover/focus.

Text in Midnight Ink (#000000), 0px border-radius, 0px padding. Activated by a 1px Midnight Ink (#000000) border-bottom.

### Text Link Button (Light)

**Role:** Interactive text link within dark contexts, border-bottom appears on hover/focus.

Text in Canvas White (#ffffff), 0px border-radius, 0px padding. Activated by a 1px Canvas White (#ffffff) border-bottom.

### Showcase Card

**Role:** Display individual portfolio items or content blocks.

No background or box shadow, 0px border-radius, with 0px padding. Visuals are contained within this structure.

### Elevated Showcase Card

**Role:** Highlight specific content or product showcases.

Background of Slate Mist (#eeeeee), 9.6px border-radius, no shadow, with 0px padding. Provides a subtle visual lift.

### Navigation Dot

**Role:** Indicates current section or state in compact navigation.

Small circular element with 9999px radius (effectively a circle), used for navigation status indicators.

## Do's and Don'ts

### Do

- Prioritize text scale and weight changes over color for hierarchy; use Midnight Ink (#000000) for primary content and Canvas White (#ffffff) for backgrounds.
- Apply 9.6px border-radius to showcase cards and similar contained content areas for subtle softness.
- Utilize 0px padding and 0px border-radius for ghost buttons/links, relying on a bottom border for interactive states.
- Maintain a spacious density; use 58px as the primary vertical section gap and 23px for element gaps.
- Use Suisse, or its closest sans-serif substitute, for all textual elements in various weights to ensure typographic consistency.
- Employ the negative letter-spacing values provided for larger text sizes to achieve a tightly composed, impactful headline aesthetic.
- Ensure all interactive text elements use a 1px border on hover, matching the text color.

### Don't

- Avoid decorative gradients or vivid accent colors; the system is built on a high-contrast achromatic foundation.
- Do not introduce unnecessary shadows or complex layer effects; keep surfaces flat and distinct through background color changes.
- Do not deviate from the specified scale for typography; large sizes have specific line heights and negative letter spacing that are integral to brand identity.
- Avoid using multiple font families; Suisse is the sole typeface.
- Do not add internal padding to cards or buttons, the padding is implied by the surrounding spacing.
- Do not use generic rounded corners; adhere strictly to 9.6px for cards, 0px for buttons, and 9999px for dots.
- Do not use subtle gray borders for actionable items; borders are strong and match the text color.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background. |
| 1 | Slate Mist | #eeeeee | Subtle lift for cards and contained content sections. |
| 2 | Deep Gray | #222222 | Background for utility navigation or section separators. |
| 3 | Midnight Ink | #000000 | Deepest background for striking contrast elements or full-bleed dark sections. |

## Imagery

Imagery treatment varies between simple black rectangular placeholders for abstract motion concepts and full-bleed product showcases with rounded corners (9.6px). Photography is not dominant. Illustrations are abstract and colorful, often appearing as embedded content rather than primary UI elements, contained within the UI structure. Icons are minimal, primarily filled, and monochrome (Midnight Ink or Canvas White), used for functional navigation cues like a small dot.

## Layout

The page adheres to a full-bleed layout, particularly for hero sections and large typographic statements, which extend to the viewport edges. Content within sections, however, often feels implicitly contained by generous horizontal padding. The hero leverages oversized, high-contrast typography, often centered or left-aligned, establishing an immediate impactful presence. Sections exhibit consistent vertical spacing of 58px. Content often alternates between pure typographic blocks and large visual showcases. Navigation is a minimal top bar, featuring right-aligned text links and a utility dot, without a sticky header visible.

## Similar Brands

- **Büro Union** — Dominant, bold sans-serif typography, high contrast monochrome palette, and minimal UI elements.
- **Gretel** — Heavy reliance on large-scale typography for headlines and a stark, clean visual presentation.
- **Basic Type** — Monochromatic design with a focus on type treatment as the primary visual element, subtle use of border radii on content blocks.
- **Huge Inc.** — Clean, unadorned aesthetic with large, impactful headlines and a strong emphasis on content over decorative UI.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --color-slate-mist: #eeeeee;
  --color-warm-gray: #888a8b;
  --color-deep-gray: #222222;
  --font-suisse: 'suisse', system-ui, sans-serif;
  --text-caption: 17px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-subheading: 19px;
  --leading-subheading: 1.5;
  --tracking-subheading: 0px;
  --text-heading-sm: 43px;
  --leading-heading-sm: 1.21;
  --tracking-heading-sm: -0.43px;
  --text-heading: 55px;
  --leading-heading: 1.17;
  --tracking-heading: -1.1px;
  --text-heading-lg: 120px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -2.4px;
  --text-display: 211px;
  --leading-display: 0.7;
  --tracking-display: -11.9px;
  --spacing-0: 0px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-19: 19px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-34: 34px;
  --spacing-38: 38px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-77: 77px;
  --spacing-82: 82px;
  --spacing-96: 96px;
  --spacing-144: 144px;
  --spacing-192: 192px;
  --radius-cards: 9.6px;
  --radius-buttons: 0px;
  --radius-navitems: 9999px;
  --radius-utilityelements: 4.8px;
  --surface-canvas-white: #ffffff;
  --surface-slate-mist: #eeeeee;
  --surface-deep-gray: #222222;
  --surface-midnight-ink: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --color-slate-mist: #eeeeee;
  --color-warm-gray: #888a8b;
  --color-deep-gray: #222222;
  --font-suisse: 'suisse', system-ui, sans-serif;
  --text-caption: 17px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-subheading: 19px;
  --leading-subheading: 1.5;
  --tracking-subheading: 0px;
  --text-heading-sm: 43px;
  --leading-heading-sm: 1.21;
  --tracking-heading-sm: -0.43px;
  --text-heading: 55px;
  --leading-heading: 1.17;
  --tracking-heading: -1.1px;
  --text-heading-lg: 120px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -2.4px;
  --text-display: 211px;
  --leading-display: 0.7;
  --tracking-display: -11.9px;
  --spacing-0: 0px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-19: 19px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-34: 34px;
  --spacing-38: 38px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-77: 77px;
  --spacing-82: 82px;
  --spacing-96: 96px;
  --spacing-144: 144px;
  --spacing-192: 192px;
  --radius-cards: 9.6px;
  --radius-buttons: 0px;
  --radius-navitems: 9999px;
  --radius-utilityelements: 4.8px;
  --surface-canvas-white: #ffffff;
  --surface-slate-mist: #eeeeee;
  --surface-deep-gray: #222222;
  --surface-midnight-ink: #000000;
}
```
