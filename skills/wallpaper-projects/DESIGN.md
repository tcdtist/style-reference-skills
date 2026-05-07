---
version: alpha
name: "Wallpaper Projects"
description: "Wallpaper Projects evokes traditional luxury with a contemporary edge, balancing classic serif typography against minimalist sans-serifs. The palette is intentionally muted, centered around a rich, deep charcoal and a soft, warm off-white, allowing the sophisticated textures and patterns of the wallpaper imagery to take prominence. Interactions are subtle, favoring discreet hovers and ghost buttons over overt fanfare to maintain a refined and understated atmosphere. The overall feel is one of considered elegance and spatial artistry, with ample negative space. Visual hierarchy is established through a strong contrast in font sizes and weights, rather than a broad color spectrum."
theme: "light"
industry: "design"
source_url: "https://wallpaperprojects.com"
refero_style_id: "0a2bcda6-b5b9-463d-bc8d-2c7ccaa2b776"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514852720-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514852720-thumb.jpg"
extracted_at: "2026-04-30T02:08:16.075Z"
---

# Wallpaper Projects — Style Reference

> Textured architectural canvas on fine paper.

**Theme:** light

**Industry:** design

Wallpaper Projects evokes traditional luxury with a contemporary edge, balancing classic serif typography against minimalist sans-serifs. The palette is intentionally muted, centered around a rich, deep charcoal and a soft, warm off-white, allowing the sophisticated textures and patterns of the wallpaper imagery to take prominence. Interactions are subtle, favoring discreet hovers and ghost buttons over overt fanfare to maintain a refined and understated atmosphere. The overall feel is one of considered elegance and spatial artistry, with ample negative space. Visual hierarchy is established through a strong contrast in font sizes and weights, rather than a broad color spectrum.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Charcoal | #1e1e1e | `--color-deep-charcoal` | Primary text, headers, button backgrounds, outline borders for ghost buttons, navigational elements |
| Alabaster White | #ffffff | `--color-alabaster-white` | Page backgrounds, button text, ghost button backgrounds, inverted interface elements, primary canvas color |
| Cloud Cream | #fbf9f3 | `--color-cloud-cream` | Secondary surface background, subtle visual separation for sections or cards |
| Pure Black | #000000 | `--color-pure-black` | Decorative strokes for icons and occasional text emphasis, used sparingly for outlines |

## Tokens — Typography

### Cardinal Fruit

- **Token:** `--font-cardinal-fruit`
- **Substitute:** Playfair Display
- **Weights:** 400, 500
- **Sizes:** 36px, 48px, 132px, 180px
- **Line heights:** 1.00, 1.20, 1.24
- **Letter spacing:** -0.0500em at 180px, -0.0250em at 132px, -0.0200em at 48px
- **Role:** Displays and prominent headings — characterized by its classic serif forms and generous sizing, it provides a sense of grandiosity and heritage. Its tight tracking at larger sizes maintains its stately presence without feeling cumbersome.

### Soehne Breit Buch

- **Token:** `--font-soehne-breit-buch`
- **Substitute:** Inter
- **Weights:** 400, 600
- **Sizes:** 10px, 12px, 14px, 72px, 80px
- **Line heights:** 1.00, 1.50
- **Letter spacing:** 0.1000em
- **Role:** Body copy, navigation, buttons, and decorative large numbers — provides a crisp, modern contrast to the serif headings. The consistent positive letter-spacing across all sizes gives it an open, airy feel.

### Soehne Mono Buch

- **Token:** `--font-soehne-mono-buch`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 12px, 14px
- **Line heights:** 1.00, 1.24, 1.30, 1.50, 1.60
- **Letter spacing:** -0.0250em, -0.0200em, 0.0250em, 0.0500em
- **Role:** Small text, labels, input fields, and occasional list items — its monospace nature lends a technical, precise undertone, often used for meta-information or functional elements. Letter-spacing varies to ensure legibility despite its fixed-width nature.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | 1px | `--text-caption` |
| body | 14px | 1.5 | 1px | `--text-body` |
| heading-sm | 36px | 1.24 | -0.05px | `--text-heading-sm` |
| heading | 48px | 1.2 | -0.02px | `--text-heading` |
| heading-lg | 132px | 1 | -0.025px | `--text-heading-lg` |
| display | 180px | 1 | -0.05px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-173 | 173px | `--spacing-173` |
| spacing-193 | 193px | `--spacing-193` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 20px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 100px |
| cardPadding | 24px |
| elementGap | 20px |

## Components

### Primary Filled Button - Dark

**Role:** Call to action.

Background: Deep Charcoal (#1e1e1e). Text: Alabaster White (#ffffff). Border radius: 20px. Padding: 12px vertical, 24px horizontal. Uses Soehne Breit Buch, weight 400.

### Secondary Ghost Button - Dark

**Role:** Subtle interactive element.

Background: transparent. Text: Alabaster White (#ffffff). Border: 1px Alabaster White (#ffffff). Border radius: 0px. Minimal padding on text, indicating a link-like button. Uses Soehne Breit Buch, weight 400.

### Secondary Filled Button - Light

**Role:** Subtle call to action on dark backgrounds.

Background: Alabaster White (#ffffff). Text: Deep Charcoal (#1e1e1e). Border radius: 20px. Padding: 8px vertical, 16px horizontal. Uses Soehne Breit Buch, weight 400.

### Text Input - Dark

**Role:** Form element.

Background: transparent. Text: Alabaster White (#ffffff). Border: 1px Alabaster White (#ffffff) on focus. Placeholder color: Alabaster White. Uses Soehne Mono Buch.

## Do's and Don'ts

### Do

- Use Cardinal Fruit for display and primary headings at 132px or 180px with corresponding negative letter-spacing for a grand, elegant appearance.
- Employ Deep Charcoal (#1e1e1e) as the dominant text color throughout the interface, ensuring high contrast on Alabaster White (#ffffff) or Cloud Cream (#fbf9f3) backgrounds.
- Apply a 20px border-radius consistently to all interactive buttons for a soft, approachable pill-shaped aesthetic.
- Maintain generous vertical spacing between sections, adhering to the 100px section gap to provide ample breathing room and a spacious feel.
- Utilize Soehne Breit Buch with 0.1000em letter-spacing for all navigation items and standard body text to promote an open, readable layout.
- Prioritize Cloud Cream (#fbf9f3) for secondary background surfaces, providing subtle depth and differentiation from pure white while maintaining warmth.
- Ensure all buttons follow the 12px vertical, 24px horizontal padding for dark filled buttons, and 8px vertical, 16px horizontal for light filled buttons, with rounded corners of 20px radius.

### Don't

- Avoid using bright or vivid colors; restrict the palette to the established neutrals for all interface elements.
- Do not introduce sharp corners or square buttons; maintain the consistent 20px border radius for interactive components.
- Do not deviate from the specified typefaces; mixing in other fonts will disrupt the established aesthetic tension between classic and modern.
- Avoid dense, information-heavy blocks; prioritize generous white space and vertical rhythm for an upscale, uncluttered presentation.
- Do not use drop shadows or heavy elevation for interface elements; the design emphasizes a flat aesthetic with subtle surface changes.
- Refrain from using Soehne Mono Buch for primary headings or extensive body copy; its monospace nature is reserved for functional or technical elements.
- Do not auto-center content; adhere to the max-width page constraint when implied, or left-align content when working within a defined content column.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Alabaster White | #ffffff | Primary page background, base canvas. |
| 1 | Cloud Cream | #fbf9f3 | Secondary background for content sections, subtle distinction from the base canvas. |

## Imagery

The visual language focuses on high-quality product photography and architectural interior shots, showcasing the wallpaper in context. Photography is often full-bleed or large-scale, framed by ample negative space. Lifestyle elements are secondary, with the product itself being the central focus. Illustrations are either absent or very sparingly used as subtle, abstract graphic elements, as seen in some of the wallpaper patterns themselves. Icons are minimal, outlined, and monochromatic, supporting functionality without drawing excessive attention. Imagery is presented with sharp edges, avoiding rounded corners, creating a stark contrast with the rounded buttons.

## Layout

The page primarily uses a contained layout within a soft, off-white canvas, with a prominent full-bleed hero section at the top featuring a large, elegant headline centered over an abstract, atmospheric background. Subsequent sections often feature a two-column layout with text on one side and a large visual on the other, frequently alternating side-to-side. Vertical sections are demarcated by consistent, spacious gaps rather than hard dividers, creating a seamless flow. Content tends to be left-aligned within its columns, fostering a clean and organized appearance. Navigation is a minimalist top bar, with a responsive hamburger menu for collapsed states.

## Similar Brands

- **Farrow & Ball** — Shares a sophisticated, muted color palette and emphasizes interior design aesthetics framed by classical typography.
- **The Future Perfect** — Utilizes a gallery-like presentation for products, with abundant white space and a focus on large, impactful imagery, similar typographic clash of sans and serif.
- **Studio McGee** — Employs an elegant and spacious layout, with a similar balance of serif headlines and clean sans-serif body text, and a soft, inviting color scheme geared towards home design.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-charcoal: #1e1e1e;
  --color-alabaster-white: #ffffff;
  --color-cloud-cream: #fbf9f3;
  --color-pure-black: #000000;
  --font-cardinal-fruit: 'Cardinal Fruit', Playfair Display;
  --font-soehne-breit-buch: 'Soehne Breit Buch', Inter;
  --font-soehne-mono-buch: 'Soehne Mono Buch', Space Mono;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 1px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 1px;
  --text-heading-sm: 36px;
  --leading-heading-sm: 1.24;
  --tracking-heading-sm: -0.05px;
  --text-heading: 48px;
  --leading-heading: 1.2;
  --tracking-heading: -0.02px;
  --text-heading-lg: 132px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.025px;
  --text-display: 180px;
  --leading-display: 1;
  --tracking-display: -0.05px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-173: 173px;
  --spacing-193: 193px;
  --radius-buttons: 20px;
  --surface-alabaster-white: #ffffff;
  --surface-cloud-cream: #fbf9f3;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-charcoal: #1e1e1e;
  --color-alabaster-white: #ffffff;
  --color-cloud-cream: #fbf9f3;
  --color-pure-black: #000000;
  --font-cardinal-fruit: 'Cardinal Fruit', Playfair Display;
  --font-soehne-breit-buch: 'Soehne Breit Buch', Inter;
  --font-soehne-mono-buch: 'Soehne Mono Buch', Space Mono;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 1px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 1px;
  --text-heading-sm: 36px;
  --leading-heading-sm: 1.24;
  --tracking-heading-sm: -0.05px;
  --text-heading: 48px;
  --leading-heading: 1.2;
  --tracking-heading: -0.02px;
  --text-heading-lg: 132px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.025px;
  --text-display: 180px;
  --leading-display: 1;
  --tracking-display: -0.05px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-173: 173px;
  --spacing-193: 193px;
  --radius-buttons: 20px;
  --surface-alabaster-white: #ffffff;
  --surface-cloud-cream: #fbf9f3;
}
```
