---
version: alpha
name: "BMW.com"
description: "This design system projects an image of understated luxury and precision, typical of a high-end automotive brand. The focus on a monochrome palette with sharp contrasts and subtle textural shifts creates a refined, almost clinical atmosphere. Typography is the primary visual differentiator, using a bespoke font that balances technical exactness with approachable forms, especially in larger display sizes where its clarity is paramount. There is minimal use of color, which emphasizes content and maintains a strong, consistent brand presence."
theme: "light"
industry: "other"
source_url: "https://bmw.com"
refero_style_id: "b8899cbd-e2ca-4069-83cf-d8f8b0d71100"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924844847-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924844847-thumb.jpg"
extracted_at: "2026-04-11T16:27:40.763Z"
---

# BMW.com — Style Reference

> Precision-engineered monochrome luxury; every detail is intentional, nothing is superfluous.

**Theme:** light

**Industry:** other

This design system projects an image of understated luxury and precision, typical of a high-end automotive brand. The focus on a monochrome palette with sharp contrasts and subtle textural shifts creates a refined, almost clinical atmosphere. Typography is the primary visual differentiator, using a bespoke font that balances technical exactness with approachable forms, especially in larger display sizes where its clarity is paramount. There is minimal use of color, which emphasizes content and maintains a strong, consistent brand presence.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Obsidian | #262626 | `--color-obsidian` | Primary text, interactive elements, navigation links, button text — forms the core dark against light contrast. |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, prominent navigational elements — establishes the primary visual canvas. |
| Graphite Grey | #bbbbbb | `--color-graphite-grey` | Secondary navigation text, subtle borders, contextual information — provides sufficient contrast on dark surfaces while appearing subdued on light ones. |
| Frost | #f1f1f1 | `--color-frost` | Subtle background accents, dividers — provides a very light contrast against Canvas White. |
| Deep Space | #262626 | `--color-deep-space` | Footer background — anchors the page with a solid, dark foundation. |
| Electric Blue | #1c69d4 | `--color-electric-blue` | Interactive highlights, focus states — a vibrant, technical accent for user interaction. |

## Tokens — Typography

### BMWTypeNextLatin

- **Token:** `--font-bmwtypenextlatin`
- **Substitute:** Open Sans
- **Weights:** 400, 700, 900
- **Sizes:** 16px, 18px
- **Line heights:** 1.15, 1.20, 1.30, 1.60, 1.63
- **Letter spacing:** normal
- **Role:** Body text, navigation, interactive elements, button labels, and general UI text. Its precise forms reflect the brand's engineering heritage, ensuring clarity across all contexts.

### BMWTypeNextLatin Light

- **Token:** `--font-bmwtypenextlatin-light`
- **Substitute:** Open Sans Light
- **Weights:** 300
- **Sizes:** 60px
- **Line heights:** 1.30
- **Letter spacing:** normal
- **Role:** Primary display headlines; the light weight at large sizes conveys authority through refinement rather than aggression, creating a sophisticated brand voice. It's unexpected at this scale, establishing an elegant, high-impact presence.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.63 | — | `--text-body` |
| subheading | 18px | 1.6 | — | `--text-subheading` |
| display | 60px | 1.3 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-100 | 100px | `--spacing-100` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 0px |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### CTA Link Button — 'Find your BMW'

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Language Selector Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Footer Link Columns

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Text Link Button

**Role:** Primary Call to Action

Ghost-style button with no background, Obsidian text (#262626), zero border radius, and minimal horizontal padding (12px). Emphasizes action through text rather than a contained shape.

### Navigation Link

**Role:** Primary Navigation

Text in Obsidian (#262626) by default, switching to Graphite Grey (#bbbbbb) in the footer. Line height of 1.63 and zero padding, relying on surrounding layout for spacing, with zero border radius.

### Heading Text Badge

**Role:** Section Labels

Descriptive text in Obsidian (#262626) with no background or borders, often used to introduce sections or categories with zero padding and border radius.

## Do's and Don'ts

### Do

- Prioritize BMWTypeNextLatin for all text elements to maintain brand consistency.
- Use Canvas White (#ffffff) as the dominant background color for main content areas.
- Apply Obsidian (#262626) for primary text and interactive elements to ensure high contrast.
- Utilize BMWTypeNextLatin Light weight 300 at 60px for prominent headings to create an impactful yet refined statement.
- Maintain zero border-radius on all components to preserve the precise, angular aesthetic.
- Employ Electric Blue (#1c69d4) sparingly for interactive highlights and focus states, ensuring it stands out against the monochrome palette.

### Don't

- Avoid using saturated or chromatic colors outside of the designated Electric Blue accent.
- Do not introduce rounded corners or soft shapes, as the aesthetic is defined by sharp precision.
- Refrain from heavy shadows or overt elevation a primary means of drawing attention; rely on typography and strong contrast.
- Do not deviate from the BMWTypeNextLatin font family; consistency is key to the brand's visual identity.
- Avoid excessive padding around interactive textual elements like links; use 0-12px as seen in button examples.

## Imagery

Imagery features high-quality product photography, often focusing on close-up detailed crops (like the wheel) or larger views of vehicles. The treatment is full-bleed or wide, contained within sections, without visible masks or rounded corners. Photography is often presented in a moody, low-key lighting style with distinct color casts (e.g., blue tints) rather than bright, high-key studio shots. The role of imagery is primarily decorative and aspirational, showcasing the product while also setting a sophisticated atmosphere. The site is image-heavy, relying on visuals to convey brand essence alongside concise textual information.

## Layout

The page structure is primarily max-width contained, but hero sections often utilize full-bleed photography. The main content areas tend to be centered. The hero uses a background image with text overlay, establishing an immediate brand impression. Section rhythm is clear, using a dominant white background for content with a distinct, dark footer (#262626) that grounds the page. Content is arranged in a fluid, stacked manner, often with large images followed by textual information, leading to multi-column layouts within the footer. The density is spacious, with significant white space around content, allowing elements to breathe. Navigation consists of a sticky top bar with branding and primary links, along with a comprehensive multi-column footer.

## Similar Brands

- **Audi** — High-end automotive, clean monochrome aesthetic with a focus on product visuals and sophisticated typography.
- **Mercedes-Benz** — Luxury brand website with a similar emphasis on impactful, large-scale imagery and a refined, understated UI.
- **Porsche** — Premium automotive with a precise, almost technical design language, using a bespoke font and minimal color palette.
- **Apple** — Product-focused, clean design with significant white space, strong typography, and high-quality photography as central brand elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-obsidian: #262626;
  --color-canvas-white: #ffffff;
  --color-graphite-grey: #bbbbbb;
  --color-frost: #f1f1f1;
  --color-deep-space: #262626;
  --color-electric-blue: #1c69d4;
  --font-bmwtypenextlatin: 'BMWTypeNextLatin', Open Sans;
  --font-bmwtypenextlatin-light: 'BMWTypeNextLatin Light', Open Sans Light;
  --text-body: 16px;
  --leading-body: 1.63;
  --text-subheading: 18px;
  --leading-subheading: 1.6;
  --text-display: 60px;
  --leading-display: 1.3;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-56: 56px;
  --spacing-100: 100px;
  --radius-buttons: 0px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-obsidian: #262626;
  --color-canvas-white: #ffffff;
  --color-graphite-grey: #bbbbbb;
  --color-frost: #f1f1f1;
  --color-deep-space: #262626;
  --color-electric-blue: #1c69d4;
  --font-bmwtypenextlatin: 'BMWTypeNextLatin', Open Sans;
  --font-bmwtypenextlatin-light: 'BMWTypeNextLatin Light', Open Sans Light;
  --text-body: 16px;
  --leading-body: 1.63;
  --text-subheading: 18px;
  --leading-subheading: 1.6;
  --text-display: 60px;
  --leading-display: 1.3;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-56: 56px;
  --spacing-100: 100px;
  --radius-buttons: 0px;
  --radius-default: 0px;
}
```
