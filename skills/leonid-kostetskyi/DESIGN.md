---
version: alpha
name: "Leonid Kostetskyi"
description: "The Leonid Kostetskyi site presents a minimalist, high-contrast aesthetic with an almost architectural use of typography. Its visual identity relies on sharp typographic forms and an extremely limited color palette, dominated by a warm off-white canvas and a deep, muted reddish-brown for primary text and accents. The design emphasizes content through stark clarity and spacious layouts, avoiding decorative elements or heavy component chrome. Interactivity is subtle, often indicated by fine line treatments or inverse color changes rather than overt button styling."
theme: "light"
industry: "design"
source_url: "https://leonidkostetskyi.com"
refero_style_id: "5a7ba5ff-0476-4f3f-99f9-0b920534dde5"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518482963-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518482963-thumb.jpg"
extracted_at: "2026-04-30T03:08:27.523Z"
---

# Leonid Kostetskyi — Style Reference

> Type-driven architectural minimalism: a stark, high-contrast typographic landscape on a warm, textured canvas.

**Theme:** light

**Industry:** design

The Leonid Kostetskyi site presents a minimalist, high-contrast aesthetic with an almost architectural use of typography. Its visual identity relies on sharp typographic forms and an extremely limited color palette, dominated by a warm off-white canvas and a deep, muted reddish-brown for primary text and accents. The design emphasizes content through stark clarity and spacious layouts, avoiding decorative elements or heavy component chrome. Interactivity is subtle, often indicated by fine line treatments or inverse color changes rather than overt button styling.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Parchment | #fdfaf3 | `--color-canvas-parchment` | Page background; a soft, warm off-white providing an antique paper-like feel to the entire experience |
| Cocoa Ink | #472425 | `--color-cocoa-ink` | Primary text, headings, outline borders, and a subtle action indicator. Its deep red-brown provides strong contrast without the harshness of true black, defining the brand's sophisticated warmth |
| Pure White | #ffffff | `--color-pure-white` | Background for certain interactive states, subtle borders, and an alternative text color on dark backgrounds |
| Absolute Black | #000000 | `--color-absolute-black` | Background for dark themed sections, and inverse text color. This color is used sparingly to create visual breaks |
| Deep Charcoal | #121212 | `--color-deep-charcoal` | Secondary text and outline borders, providing a slightly softer dark tone than Absolute Black |
| Alert Crimson | #e73737 | `--color-alert-crimson` | Red outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |

## Tokens — Typography

### SFUIDisplay

- **Token:** `--font-sfuidisplay`
- **Substitute:** system-ui
- **Weights:** 300, 400
- **Sizes:** 8px, 9px, 11px, 12px, 15px, 18px, 19px, 20px, 21px
- **Line heights:** 1.00, 1.10, 1.33, 1.40, 1.60
- **Letter spacing:** normal
- **Role:** Primary text for body content, navigational elements, and descriptive links. Its neutrality supports legibility across various UI elements.

### NeueHaasDisplay

- **Token:** `--font-neuehaasdisplay`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 11px, 12px, 15px, 27px, 135px, 143px, 165px, 188px
- **Line heights:** 0.86, 1.00
- **Letter spacing:** -0.0250em at large sizes, -0.0200em for smaller headings
- **Role:** Distinctive display font for large headlines and titles. The tight letter-spacing and very large sizes create a strong, imposing, and modern visual statement, prioritizing form over immediate readability at extreme scales.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Used for a specific functional button style, acting as a system fallback or for very minor interface text where a standard sans-serif is preferred.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| heading | 27px | 1 | -0.54px | `--text-heading` |
| display-lg | 135px | 0.86 | -3.375px | `--text-display-lg` |
| display | 188px | 0.86 | -4.7px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-47 | 47px | `--spacing-47` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-59 | 59px | `--spacing-59` |
| spacing-71 | 71px | `--spacing-71` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-74 | 74px | `--spacing-74` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-101 | 101px | `--spacing-101` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-179 | 179px | `--spacing-179` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-225 | 225px | `--spacing-225` |
| spacing-276 | 276px | `--spacing-276` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |
| extraLarge | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 200px |
| cardPadding | 12px |
| elementGap | 16px |

## Components

### Text Only Button (Cocoa Ink)

**Role:** Interactive navigation and thematic switches.

Ghost button with no background or padding. Text color: Cocoa Ink (#472425). Border radius: 0px. Used for subtle, text-based actions.

### Circular Toggle Button (Dark)

**Role:** Theme switcher.

Background: Absolute Black (#000000). Text color: Absolute Black (#000000). Border: Pure White (#ffffff) 1px. Border radius: 50%. Serves as a visual toggle for theme changes.

### Circular Toggle Button (Light)

**Role:** Theme switcher.

Background: Pure White (#ffffff). Text color: Absolute Black (#000000). Border: Pure White (#ffffff) 1px. Border radius: 50%. Complements the dark circular toggle.

### Outlined Input Field (Dark Text)

**Role:** User input fields.

Transparent background, text color: Pure White (#ffffff) at 70% opacity. Border: Pure White (#ffffff) at 70% opacity bottom border. Padding: 3px top, 5px bottom, 75px right. Border radius: 0px. Used in dark theme sections.

### Outlined Input Field (Cocoa Ink)

**Role:** User input fields.

Transparent background, text color: Cocoa Ink (#472425). Border: Cocoa Ink (#472425) bottom border. Padding: 3px top, 5px bottom, 75px right. Border radius: 0px. Used in light theme sections.

### Project Card (Implicit)

**Role:** Display individual work projects or portfolio items.

No explicit background color, no border, no shadow, 0px border radius. Content dictates visual form, acting as an implicit card within a larger grid.

### Project Card with Background (White)

**Role:** Display individual work projects or portfolio items.

Background Pure White (#ffffff), no border, no shadow, 0px border radius. Padding: 0px. Used where a distinct white background is desired against a neutral canvas.

### Project Card with Background (Black)

**Role:** Display individual work projects or portfolio items for dark themed sections.

Background Absolute Black (#000000), no border, no shadow, 0px border radius. Padding: 15px top/bottom, 10.5px left/right. Provides a surface for content in dark mode sections.

## Do's and Don'ts

### Do

- Prioritize NeueHaasDisplay for titles and headlines, using large sizes (135px, 188px) with tight letter-spacing (-0.0250em) to create monumental textual elements.
- Maintain a monochromatic base palette using Canvas Parchment (#fdfaf3) for backgrounds and Cocoa Ink (#472425) for primary text and subtle outlined interactions.
- Use no border-radius (0px) for most components, including cards and input fields, to preserve a sharp, architectural aesthetic.
- Indicate interactivity for `Link` and `Button` roles primarily through text color changes or subtle line treatments, avoiding prominent background fills on most buttons.
- Employ generous vertical spacing, specifically a ~200px section gap, to create an airy, uncrowded layout between major content blocks.
- Use Pure White (#ffffff) as the dominant background color for cards and informational blocks within light mode, maintaining visual consistency.
- Apply subtle 1px dashed borders of varying colors (Cocoa Ink, Pure White) to delineate active states or structural elements where a visible separation is needed without heavy lines.

### Don't

- Avoid using bright, saturated colors unless specifically for semantic feedback (like Alert Crimson #e73737), as they contradict the brand's muted, high-contrast palette.
- Do not introduce rounded corners (e.g., above 0px radius) for primary UI elements like buttons, cards, or inputs, as this clashes with the sharp, angular design language.
- Refrain from heavy drop shadows or complex elevation schemes; the design is flat and relies on color contrast and minimal borders for visual hierarchy.
- Do not use generic system fonts for display elements; stick to NeueHaasDisplay for impact and SFUIDisplay for readability.
- Avoid dense, information-heavy blocks of text; focus on clear, concise copy supported by ample whitespace and strong typography.
- Do not deviate from the established letter-spacing values for NeueHaasDisplay headlines; the tight tracking is a core part of its visual identity.
- Do not add decorative gradients; the system relies on solid colors and text-based visual interest.

## Imagery

The site's visual language is characterized by an absence of conventional imagery. Instead, it uses typography as its primary visual element, sometimes at extreme scales. When graphical elements appear (like the starburst shape), they are minimal, geometric, and monochrome, serving as abstract decorative accents rather than content-bearing visuals. This creates a text-dominant, almost brutalist aesthetic where the display type itself is the hero image.

## Similar Brands

- **AIGA** — Similar bold, typographic-centric design with stark contrast and an emphasis on large, impactful headlines as primary visual elements.
- **Frank Chimero** — Employs an editorial, text-heavy design with significant whitespace and a muted color palette to create a refined, thoughtful experience.
- **Dieter Rams Archive** — Reflects a purist, functionalist minimalist aesthetic with high reliance on typography, grid systems, and a restrained color scheme.
- **Future Fonts** — Features experimental typography at large scales, emphasizing unique letterforms and unconventional layouts over traditional imagery.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-parchment: #fdfaf3;
  --color-cocoa-ink: #472425;
  --color-pure-white: #ffffff;
  --color-absolute-black: #000000;
  --color-deep-charcoal: #121212;
  --color-alert-crimson: #e73737;
  --font-sfuidisplay: 'SFUIDisplay', system-ui;
  --font-neuehaasdisplay: 'NeueHaasDisplay', system-ui;
  --font-arial: 'Arial', Arial;
  --text-heading: 27px;
  --leading-heading: 1;
  --tracking-heading: -0.54px;
  --text-display-lg: 135px;
  --leading-display-lg: 0.86;
  --tracking-display-lg: -3.375px;
  --text-display: 188px;
  --leading-display: 0.86;
  --tracking-display: -4.7px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-41: 41px;
  --spacing-45: 45px;
  --spacing-47: 47px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-59: 59px;
  --spacing-71: 71px;
  --spacing-72: 72px;
  --spacing-74: 74px;
  --spacing-75: 75px;
  --spacing-101: 101px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --spacing-179: 179px;
  --spacing-200: 200px;
  --spacing-225: 225px;
  --spacing-276: 276px;
  --radius-none: 0px;
  --radius-extralarge: 9999px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-parchment: #fdfaf3;
  --color-cocoa-ink: #472425;
  --color-pure-white: #ffffff;
  --color-absolute-black: #000000;
  --color-deep-charcoal: #121212;
  --color-alert-crimson: #e73737;
  --font-sfuidisplay: 'SFUIDisplay', system-ui;
  --font-neuehaasdisplay: 'NeueHaasDisplay', system-ui;
  --font-arial: 'Arial', Arial;
  --text-heading: 27px;
  --leading-heading: 1;
  --tracking-heading: -0.54px;
  --text-display-lg: 135px;
  --leading-display-lg: 0.86;
  --tracking-display-lg: -3.375px;
  --text-display: 188px;
  --leading-display: 0.86;
  --tracking-display: -4.7px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-41: 41px;
  --spacing-45: 45px;
  --spacing-47: 47px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-59: 59px;
  --spacing-71: 71px;
  --spacing-72: 72px;
  --spacing-74: 74px;
  --spacing-75: 75px;
  --spacing-101: 101px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --spacing-179: 179px;
  --spacing-200: 200px;
  --spacing-225: 225px;
  --spacing-276: 276px;
  --radius-none: 0px;
  --radius-extralarge: 9999px;
}
```
