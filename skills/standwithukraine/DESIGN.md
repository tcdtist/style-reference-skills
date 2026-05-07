---
version: alpha
name: "#standwithukraine"
description: "The #standwithukraine design system conveys a sense of urgent, stark information delivery. It utilizes a striking contrast between dark backgrounds and vivid yellow accents, evoking the Ukrainian flag. Typography is dominant and forceful, often with wide letter-spacing, set against minimal UI elements. The overall aesthetic is raw and direct, prioritizing message over decorative flourishes, with a spacious, almost sparse layout that reinforces the gravity of the content."
theme: "dark"
industry: "other"
source_url: "https://theothersideoftruth.com"
refero_style_id: "6e91afd2-a3ce-4bd7-88ab-eea9e38f6af4"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513540418-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513540418-thumb.jpg"
extracted_at: "2026-04-30T01:46:19.068Z"
---

# #standwithukraine — Style Reference

> Stark Contrast, Urgent Resolve

**Theme:** dark

**Industry:** other

The #standwithukraine design system conveys a sense of urgent, stark information delivery. It utilizes a striking contrast between dark backgrounds and vivid yellow accents, evoking the Ukrainian flag. Typography is dominant and forceful, often with wide letter-spacing, set against minimal UI elements. The overall aesthetic is raw and direct, prioritizing message over decorative flourishes, with a spacious, almost sparse layout that reinforces the gravity of the content.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Freedom Yellow | #f6e54e | `--color-freedom-yellow` | Yellow accent for outlined action borders, linked labels, and lightweight interactive emphasis |
| Sky Blue | #77afd8 | `--color-sky-blue` | Background for specific hero sections and decorative graphical elements. Represents a secondary, softer component of the national colors, providing a visual counterpoint to the dominant dark theme |
| Deep Night | #202020 | `--color-deep-night` | Predominant background for canvas and card surfaces, primary text color for headings and body text, and border color for UI elements. Establishes the somber, impactful tone of the site |
| Ghost White | #ffffff | `--color-ghost-white` | Secondary text color for content that needs to stand out against dark backgrounds, such as card headers or important statements |

## Tokens — Typography

### Helvetica Neue Cyr

- **Token:** `--font-helvetica-neue-cyr`
- **Substitute:** Arial
- **Weights:** 400, 700
- **Sizes:** 12px, 16px, 20px, 28px, 72px, 80px, 168px
- **Line heights:** 0.86, 1.12, 1.15, 1.20
- **Letter spacing:** -0.96px at 72px, 2.4px at 12px
- **Role:** Primary typeface for all headings, body text, navigation, and interactive elements. Its strong, sans-serif character supports the site's direct and urgent messaging.

### Nitti-Normal

- **Token:** `--font-nitti-normal`
- **Substitute:** Menlo
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.12
- **Letter spacing:** normal
- **Role:** Used for code snippets and specific data entries where a more monospace, functional presentation is desired for clarity.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.12 | 0.24px | `--text-caption` |
| body | 16px | 1.15 | — | `--text-body` |
| subheading | 20px | 1.15 | — | `--text-subheading` |
| heading | 28px | 1.15 | — | `--text-heading` |
| heading-lg | 72px | 0.86 | -0.96px | `--text-heading-lg` |
| display | 168px | 0.86 | 79px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-91 | 91px | `--spacing-91` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-122 | 122px | `--spacing-122` |
| spacing-138 | 138px | `--spacing-138` |
| spacing-140 | 140px | `--spacing-140` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 20px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 32px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Outlined CTA Button

**Role:** Primary call to action.

Transparent background with a 4px `Freedom Yellow` border and `Freedom Yellow` text. Padding is 4px on all sides, with 0px border-radius. One variant has a `20px` border-radius.

### Neutral Outlined Button

**Role:** Secondary call to action.

Transparent background with a 4px `Deep Night` border and `Deep Night` text. Padding is 4px on all sides, with 0px border-radius.

### Navigation Link

**Role:** Primary site navigation.

Text in `Deep Night` or `Freedom Yellow` without explicit borders or background. Appears with 24px vertical padding and varied horizontal spacing.

### Info Badge

**Role:** Informational highlight.

Background in `Deep Night` with `Deep Night` text, 0px border-radius and 0px padding. Sometimes appears with 16px padding and transparent background.

### Text Card

**Role:** Container for content sections.

Transparent background, no shadow, 0px border-radius, and 0px internal padding. Uses `Deep Night` or `Ghost White` as text color depending on contrast needs.

## Do's and Don'ts

### Do

- Prioritize text content readability by using `Deep Night` (#202020) for most text against neutral backgrounds, and `Ghost White` (#ffffff) against `Deep Night` backgrounds.
- Use `Freedom Yellow` (#f6e54e) exclusively for primary interactive elements (outlined buttons, links) and key informational accents to maintain its impact.
- Maintain a spacious layout with `32px` vertical gaps between major sections and `8px` between smaller elements.
- Apply `0px` border-radius for general UI components like cards and text containers, reserving `20px` for specific button variants.
- Employ the Helvetica Neue Cyr font family for all primary text, leveraging its bold weights for headings and wider letter-spacing for dramatic effect.
- Use transparent backgrounds and `Freedom Yellow` (#f6e54e) borders for call-to-action buttons, avoiding solid fills to maintain a lightweight, urgent feel.
- Feature large, impactful headlines (72px or 168px) with tight line heights and significant negative letter-spacing for a sculptural, authoritative presence.

### Don't

- Do not introduce new saturated accent colors beyond `Freedom Yellow` (#f6e54e) and `Sky Blue` (#77afd8) to preserve the stark brand identity.
- Avoid solid background fills for interactive buttons; use the outlined style with `Freedom Yellow` (#f6e54e) to signify interactivity.
- Do not use subtle elevation or shadows on card components; maintain a flat aesthetic for content containers.
- Refrain from using decorative gradients or complex visual textures, as the system relies on stark contrasts and direct presentation.
- Do not use generic system fonts; stick to Helvetica Neue Cyr and Nitti-Normal to uphold the unique typographic voice.
- Avoid dense information blocks; use generous spacing and clear divisions to ensure content is easily digestible.
- Do not dilute the contrast by placing light text on `Sky Blue` (#77afd8) backgrounds, as the contrast ratio is insufficient (`2.4:1`).

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Deep Canvas | #202020 | Dominant background for the entire page, setting a dark, somber tone. |
| 2 | Sky Gradient | #77afd8 | A background for specific hero sections or full-bleed graphic elements, providing a strategic break from the deep canvas. |

## Imagery

The site predominantly uses abstract, large-scale typography and graphic elements over traditional imagery. When present, images appear as background elements or within cards, treated with a stark, often monochromatic filter that aligns with the overall somber mood. Icons are minimal, outlined, and monochromatic, primarily serving functional navigation. The visual density is image-light, focusing on text as the primary informational and emotional carrier.

## Layout

The page exhibits a full-bleed layout contrasting with sections restricted by a max-width, suggesting a hybrid model that maximizes impact for key sections while containing detailed content. The hero section leverages a full-viewport gradient background with centered, large-scale typographic elements. Sections typically stack vertically with consistent `32px` gaps, utilizing alternating color bands (dark canvas, yellow accents). Content is often arranged in centered stacks or simple text blocks, with a notable absence of complex grid structures for features, instead relying on clear hierarchical typography. Navigation is via a fixed top bar and a prominent vertical side navigation, both minimalistic.

## Similar Brands

- **Amnesty International** — Similar use of dark backgrounds with striking, single-color accents to convey serious, urgent messaging.
- **The New York Times (digital edition)** — Emphasis on strong typography and a clear, minimal visual hierarchy to prioritize information delivery in a stark manner.
- **The Intercept** — Uses a similar confrontational and direct aesthetic, with strong typefaces and high contrast for impactful storytelling.
- **WIRED (older designs)** — Features bold, impactful typography as primary visual elements, often with exaggerated letter-spacing, similar to the large 'UKR' text.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-freedom-yellow: #f6e54e;
  --color-sky-blue: #77afd8;
  --color-deep-night: #202020;
  --color-ghost-white: #ffffff;
  --font-helvetica-neue-cyr: 'Helvetica Neue Cyr', Arial;
  --font-nitti-normal: 'Nitti-Normal', Menlo;
  --text-caption: 12px;
  --leading-caption: 1.12;
  --tracking-caption: 0.24px;
  --text-body: 16px;
  --leading-body: 1.15;
  --text-subheading: 20px;
  --leading-subheading: 1.15;
  --text-heading: 28px;
  --leading-heading: 1.15;
  --text-heading-lg: 72px;
  --leading-heading-lg: 0.86;
  --tracking-heading-lg: -0.96px;
  --text-display: 168px;
  --leading-display: 0.86;
  --tracking-display: 79px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-38: 38px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-68: 68px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-91: 91px;
  --spacing-120: 120px;
  --spacing-122: 122px;
  --spacing-138: 138px;
  --spacing-140: 140px;
  --radius-buttons: 20px;
  --surface-deep-canvas: #202020;
  --surface-sky-gradient: #77afd8;
}
```

### Tailwind v4

```css
@theme {
  --color-freedom-yellow: #f6e54e;
  --color-sky-blue: #77afd8;
  --color-deep-night: #202020;
  --color-ghost-white: #ffffff;
  --font-helvetica-neue-cyr: 'Helvetica Neue Cyr', Arial;
  --font-nitti-normal: 'Nitti-Normal', Menlo;
  --text-caption: 12px;
  --leading-caption: 1.12;
  --tracking-caption: 0.24px;
  --text-body: 16px;
  --leading-body: 1.15;
  --text-subheading: 20px;
  --leading-subheading: 1.15;
  --text-heading: 28px;
  --leading-heading: 1.15;
  --text-heading-lg: 72px;
  --leading-heading-lg: 0.86;
  --tracking-heading-lg: -0.96px;
  --text-display: 168px;
  --leading-display: 0.86;
  --tracking-display: 79px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-38: 38px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-68: 68px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-91: 91px;
  --spacing-120: 120px;
  --spacing-122: 122px;
  --spacing-138: 138px;
  --spacing-140: 140px;
  --radius-buttons: 20px;
  --surface-deep-canvas: #202020;
  --surface-sky-gradient: #77afd8;
}
```
