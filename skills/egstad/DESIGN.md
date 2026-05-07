---
version: alpha
name: "Egstad"
description: "Egstad's design system embraces a bold, unadorned aesthetic with stark visual contrasts. A muted, warm off-white background serves as the canvas for heavy, densely tracked sans-serif typography, asserting presence through scale and weight rather than color. Interactive elements use a tactile, almost skeumorphic toggle-like appearance with rounded full-bleed radii, creating a sense of mechanical precision against the otherwise flat plane. The overall impression is one of grounded, deliberate clarity, using minimal color to focus attention on structure and text."
theme: "light"
industry: "design"
source_url: "https://egstad.com"
refero_style_id: "ec17bdec-c8fa-4221-abd6-da717bf38d96"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521663997-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521663997-thumb.jpg"
extracted_at: "2026-04-30T04:01:21.088Z"
---

# Egstad — Style Reference

> Type-first Brutalist

**Theme:** light

**Industry:** design

Egstad's design system embraces a bold, unadorned aesthetic with stark visual contrasts. A muted, warm off-white background serves as the canvas for heavy, densely tracked sans-serif typography, asserting presence through scale and weight rather than color. Interactive elements use a tactile, almost skeumorphic toggle-like appearance with rounded full-bleed radii, creating a sense of mechanical precision against the otherwise flat plane. The overall impression is one of grounded, deliberate clarity, using minimal color to focus attention on structure and text.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Parchment | #e2e0d9 | `--color-canvas-parchment` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Inkwell Black | #252422 | `--color-inkwell-black` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Deepest Black | #000000 | `--color-deepest-black` | Secondary text, subtle borders, high-contrast accents |

## Tokens — Typography

### Times New Roman

- **Token:** `--font-times-new-roman`
- **Substitute:** Times
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **OpenType features:** "kern", "liga", "pnum"
- **Role:** Muted body text, navigation items, secondary information, adopting a classic feel.

### EG Metaphor

- **Token:** `--font-eg-metaphor`
- **Weights:** 400
- **Sizes:** 12px, 15px, 59px, 399px
- **Line heights:** 0.97, 1.00, 1.33, 1.34
- **Letter spacing:** -0.055em at 399px, 0.020em at 12px and 15px
- **OpenType features:** "kern", "liga", "pnum", "ss04", "ss05", "ss06", "ss07"
- **Role:** Dominant headlines and large display text, creating a strong, almost architectural presence with tight tracking and custom features for distinctive letterforms.

### S85

- **Token:** `--font-s85`
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 3.00
- **Letter spacing:** 0.100em
- **OpenType features:** "ss04", "ss05", "ss06", "ss07"
- **Role:** Specialized navigation elements and labels, characterized by wide tracking for a technical, spaced-out effect.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.34 | 0.24px | `--text-caption` |
| body-lg | 16px | 1.2 | — | `--text-body-lg` |
| heading | 59px | 1.33 | — | `--text-heading` |
| display | 399px | 0.97 | -22px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-7 | 7px | `--spacing-7` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-30 | 30px | `--spacing-30` |

### Border Radius

| Element | Value |
| --- | --- |
| tabs | 36px |
| buttons | 1440px |
| navigation | 1440px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 22px |
| cardPadding | 14px |
| elementGap | 16px |

## Components

### Navigation Tab Active

**Role:** Primary navigation item, active state

Solid Inkwell Black background with Canvas Parchment text. Uses 1440px border radius for full rounded ends. Padding of 14px vertical and 30px horizontal, with 1px Deepest Black border.

### Navigation Tab Inactive

**Role:** Primary navigation item, inactive state

Transparent background with Inkwell Black text. Uses 1440px border radius for full rounded ends. Padding of 14px vertical and 30px horizontal, with 1px Canvas Parchment border.

### Navigation Link Outlined

**Role:** Small, outlined navigation link

Text in Inkwell Black, border in Canvas Parchment. Uses S85 font at 12px, 0.1em letter spacing. Padding of 14px vertical and 16px horizontal. Radius of 1440px for a pill shape.

### Large Typography Headline

**Role:** Main heading text on hero sections

Uses EG Metaphor font at 399px, weight 400, Inkwell Black color, with -0.055em letter spacing. Underlined with a 4px solid Inkwell Black line.

### Body Text Section

**Role:** Paragraphs of body content

Times New Roman at 16px, weight 400, Inkwell Black color. Line height 1.2. Margin bottom of 14px between paragraphs.

## Do's and Don'ts

### Do

- Prioritize text as the primary visual element, using large scale and distinct typefaces to convey meaning.
- Maintain high contrast between text (Inkwell Black) and background (Canvas Parchment) for all content.
- Use 1440px border radius consistently for all interactive elements and navigation items to create a 'pill' shape.
- Apply -0.055em letter spacing to display text (EG Metaphor 399px) to enhance its compactness and visual weight.
- Employ the Canvas Parchment background as the dominant canvas, allowing Inkwell Black typography and components to stand out.
- Utilize 4px solid Inkwell Black lines for expressive underlines or dividers, particularly under large headlines.

### Don't

- Avoid decorative gradients or shadows; the aesthetic relies on flat, high-contrast forms.
- Do not introduce additional color; the palette is strictly monochrome with a warm neutral base.
- Do not vary from the precise letter spacing applied to display and specialized navigation text (S85), as it is integral to their identity.
- Avoid complex layouts or highly nested elements; maintain a clean, open composition.
- Do not use Times New Roman for display elements; reserve it for secondary content where a classic feel is desired.

## Imagery

This site features very minimal imagery. When present, it appears as a singular, dominant, circular cropped portrait of a person, positioned in a way that visually interacts with text. There are no other visual elements like photography, illustrations, or product screenshots. The focus is entirely on typography and UI.

## Layout

The site employs a max-width contained layout, with content usually centered. The hero section features extremely large, full-width typography ('EGSTAD') which dominates the screen, often overlapping with the circular portrait. Sections maintain a consistent vertical rhythm, primarily defined by the spacing between large text blocks and smaller content groupings. Navigation consists of a static top bar with interactive 'pill' shaped buttons, appearing like a physical tab interface, and a secondary minimalist footer navigation. The overall density is spacious, emphasizing individual elements rather than overwhelming the user with information.

## Similar Brands

- **Brutalist Websites** — Employs an unadorned, high-contrast, type-focused approach with minimal use of color or decorative elements.
- **Linear** — Uses a stark, functional aesthetic with strong typography and high contrast across UI elements.
- **Stripe** — Features a clean, minimalist design with a focus on typography and clear functional elements, though more refined than Egstad.
- **Are.na** — Prioritizes content clarity with minimal UI chrome, using a neutral color palette and straightforward type.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-parchment: #e2e0d9;
  --color-inkwell-black: #252422;
  --color-deepest-black: #000000;
  --font-times-new-roman: 'Times New Roman', Times;
  --font-eg-metaphor: 'EG Metaphor', ui-sans-serif, system-ui, sans-serif;
  --font-s85: 'S85', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.34;
  --tracking-caption: 0.24px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.2;
  --text-heading: 59px;
  --leading-heading: 1.33;
  --text-display: 399px;
  --leading-display: 0.97;
  --tracking-display: -22px;
  --spacing-7: 7px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-22: 22px;
  --spacing-30: 30px;
  --radius-tabs: 36px;
  --radius-buttons: 1440px;
  --radius-navigation: 1440px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-parchment: #e2e0d9;
  --color-inkwell-black: #252422;
  --color-deepest-black: #000000;
  --font-times-new-roman: 'Times New Roman', Times;
  --font-eg-metaphor: 'EG Metaphor', ui-sans-serif, system-ui, sans-serif;
  --font-s85: 'S85', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.34;
  --tracking-caption: 0.24px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.2;
  --text-heading: 59px;
  --leading-heading: 1.33;
  --text-display: 399px;
  --leading-display: 0.97;
  --tracking-display: -22px;
  --spacing-7: 7px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-22: 22px;
  --spacing-30: 30px;
  --radius-tabs: 36px;
  --radius-buttons: 1440px;
  --radius-navigation: 1440px;
}
```
