---
version: alpha
name: "Orson"
description: "Orson uses an academic-editorial design language, combining classic serif typography with subtle, sophisticated color gradients. The system emphasizes generous white space and a calming, almost analog, background tone. Interactions are minimal and text-focused, with outlines and understated hovers. The visual identity exudes trusted authority through a restrained palette and mature typographic choices, avoiding bold or high-contrast elements for actions."
theme: "light"
industry: "agency"
source_url: "https://orson.ai"
refero_style_id: "37215d07-9e4e-4cef-ad58-65d111caba19"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520106744-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520106744-thumb.jpg"
extracted_at: "2026-04-30T03:35:22.268Z"
---

# Orson — Style Reference

> Warm parchment elegance.

**Theme:** light

**Industry:** agency

Orson uses an academic-editorial design language, combining classic serif typography with subtle, sophisticated color gradients. The system emphasizes generous white space and a calming, almost analog, background tone. Interactions are minimal and text-focused, with outlines and understated hovers. The visual identity exudes trusted authority through a restrained palette and mature typographic choices, avoiding bold or high-contrast elements for actions.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Parchment | #f0ebdd | `--color-parchment` | Page backgrounds, large content sections, subtle surface elevation |
| Inkwell | #302f2c | `--color-inkwell` | Primary text, headings, accent borders, and semantic UI elements for structure and emphasis |
| Activated Black | #000000 | `--color-activated-black` | Strongest text contrast, button text and borders when a precise contrast is needed |
| Sunbeam Gradient | #ffb801 | `--color-sunbeam-gradient` | Decorative background gradients, soft visual accents. The primary hue implies warmth and a gentle glow |

## Tokens — Typography

### Big Daily Short

- **Token:** `--font-big-daily-short`
- **Substitute:** Playfair Display
- **Weights:** 300, 400
- **Sizes:** 16px, 22px, 36px, 42px, 64px, 86px
- **Line heights:** 1.00, 1.12, 1.25, 1.50
- **Role:** Headlines, subheadings, and emphasized textual content. The custom font provides a sophisticated, almost editorial gravitas through its classic serif forms. Weight 300 for lead headlines feels light and refined, suggesting authority through understatement.

### Basel Grotesk

- **Token:** `--font-basel-grotesk`
- **Substitute:** Inter
- **Weights:** 500
- **Sizes:** 16px, 17px
- **Line heights:** 1.00, 1.41
- **Role:** Body text, navigation, and detailed content. Its clean, sans-serif structure balances the serif headlines, ensuring readability for longer passages.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Role:** Small functional text, legal disclosures, and system-level button labels where maximum legibility and neutrality are required.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.2 | — | `--text-caption` |
| body | 16px | 1.41 | — | `--text-body` |
| subheading | 22px | 1.25 | — | `--text-subheading` |
| heading | 36px | 1.25 | — | `--text-heading` |
| heading-lg | 64px | 1.12 | — | `--text-heading-lg` |
| display | 86px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-247 | 247px | `--spacing-247` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 40px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 30px |
| cardPadding | 18px |
| elementGap | 12px |

## Components

### Ghost Button

**Role:** Navigation links and secondary actions.

Text in Activated Black or Inkwell on a transparent background, with a 0px border-radius, 10px vertical padding, and 0px horizontal padding. Borders are not visible by default but appear on hover for subtle feedback.

### Navigation Link

**Role:** Primary navigation items.

Text in Inkwell (Big Daily Short, 16px) with 8px top/bottom padding and 9px left padding, 14px right padding. Applies a 40px border radius on hover/active states for a 'pill' shape.

### Implicit Badge

**Role:** Contextual labels or category indicators.

Text in Inkwell without any background or border. Used for discrete labeling, similar to inline text but carrying semantic meaning. No padding or border-radius.

## Do's and Don'ts

### Do

- Use Parchment (#f0ebdd) as the primary background color for all main content areas.
- Employ Inkwell (#302f2c) for primary text content and essential structural elements like borders.
- Apply Big Daily Short font at weight 300 for large headings and weight 400 for subheadings to maintain the editorial tone.
- Ensure navigation links have 8px vertical padding and 9px-14px horizontal padding, with a 40px border-radius upon interaction.
- Maintain a comfortable information density by using '12px' for element gaps and '30px' for section gaps.
- Integrate the Sunbeam Gradient into hero sections or subtle atmospheric backgrounds to add warmth and depth.
- Use radial-gradient(41.33% 41.33%, rgb(255, 199, 56) 0px, rgba(248, 233, 226, 0) 100%) for decorative background effects.

### Don't

- Avoid high-contrast, vivid colors for interactive elements; use the existing neutral palette with subtle activations.
- Do not introduce strong visual borders or shadows on cards or buttons; maintain a flat, uncluttered aesthetic.
- Do not deviate from the Big Daily Short and Basel Grotesk fonts for headlines and body text to preserve brand consistency.
- Do not use letter-spacing other than 'normal' for any type roles, as it's not present in the extracted data and would alter the typographic rhythm.
- Avoid heavy imagery or large visual elements that clash with the text-dominant, editorial aesthetic.
- Do not use generic system borders; all borders should be 1px solid with Inkwell (#302f2c) as the color.
- Avoid using any geometric shapes or sharp angles for interactive elements; prefer soft curves or ghost outlines.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas | #f0ebdd | Dominant background for the entire page, conveying a warm, inviting foundation. |
| 2 | Accent Surface | #ffb801 | Used subtly for decorative backgrounds, often in gradient form, creating gentle visual interest without sharp contrast. |
| 3 | Interactive Text/Stroke | #302f2c | Main text, outlines for subtle interactive elements, and key structural lines. |

## Imagery

The visual language for imagery is minimal and functional. Photography, when present, is often contained within clear boundaries, focusing on human subjects or concepts relevant to professional settings. There are abstract, geometric line-art illustrations used as decorative elements, typically rendered in outline form with a strong visual connection to the brand's Inkwell color. Icons are simple, outlined, and monochromatic, used sparingly for navigation or conceptual representation. The density is text-dominant, with imagery serving as an atmospheric or explanatory complement rather than the primary focus, aiming for a refined, almost academic aesthetic.

## Layout

The page uses a maximum content width that is visually contained, often with generous horizontal margins, giving a sense of spaciousness. The hero section features a centered headline over a soft radial gradient, creating an immediate atmospheric impression. Content sections generally employ consistent vertical spacing, creating an even rhythm. The arrangement often features centered text blocks or occasionally multi-column layouts, particularly for feature descriptions below decorative line-art. Navigation is a minimalist top bar with a hamburger menu for expanded options, reflecting a focus on clear, uncluttered presentation rather than constant access to many links. The overall density is spacious, emphasizing readability and a calm user experience.

## Similar Brands

- **AIGA** — Similar classic serif typography combined with sophisticated use of neutrals and generous white space for an editorial feel.
- **The New York Times** — Shared emphasis on classic, authoritative typography and a restrained color palette, prioritizing content legibility and an academic tone.
- **Future Fonts** — Similar focus on unique, high-quality typography as a core brand element, paired with sparse, elegant design.
- **The Information** — Uses a light, parchment-like background with dark, traditional typography for a serious, content-focused feel.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-parchment: #f0ebdd;
  --color-inkwell: #302f2c;
  --color-activated-black: #000000;
  --color-sunbeam-gradient: #ffb801;
  --font-big-daily-short: 'Big Daily Short', Playfair Display;
  --font-basel-grotesk: 'Basel Grotesk', Inter;
  --font-arial: 'Arial', Arial;
  --text-caption: 13px;
  --leading-caption: 1.2;
  --text-body: 16px;
  --leading-body: 1.41;
  --text-subheading: 22px;
  --leading-subheading: 1.25;
  --text-heading: 36px;
  --leading-heading: 1.25;
  --text-heading-lg: 64px;
  --leading-heading-lg: 1.12;
  --text-display: 86px;
  --leading-display: 1;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-18: 18px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --spacing-90: 90px;
  --spacing-247: 247px;
  --radius-links: 40px;
  --surface-canvas: #f0ebdd;
  --surface-accent-surface: #ffb801;
  --surface-interactive-text-stroke: #302f2c;
}
```

### Tailwind v4

```css
@theme {
  --color-parchment: #f0ebdd;
  --color-inkwell: #302f2c;
  --color-activated-black: #000000;
  --color-sunbeam-gradient: #ffb801;
  --font-big-daily-short: 'Big Daily Short', Playfair Display;
  --font-basel-grotesk: 'Basel Grotesk', Inter;
  --font-arial: 'Arial', Arial;
  --text-caption: 13px;
  --leading-caption: 1.2;
  --text-body: 16px;
  --leading-body: 1.41;
  --text-subheading: 22px;
  --leading-subheading: 1.25;
  --text-heading: 36px;
  --leading-heading: 1.25;
  --text-heading-lg: 64px;
  --leading-heading-lg: 1.12;
  --text-display: 86px;
  --leading-display: 1;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-18: 18px;
  --spacing-30: 30px;
  --spacing-40: 40px;
  --spacing-60: 60px;
  --spacing-90: 90px;
  --spacing-247: 247px;
  --radius-links: 40px;
  --surface-canvas: #f0ebdd;
  --surface-accent-surface: #ffb801;
  --surface-interactive-text-stroke: #302f2c;
}
```
