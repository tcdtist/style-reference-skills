---
version: alpha
name: "Sociotype"
description: "Sociotype presents as a serious, editorial platform for typography, characterized by an expansive white canvas, precise black typography, and highly controlled spacing. Interaction elements are almost entirely ghosted or underlined, relying on a subtle shift to black for active states. The visual weight is carried by the large, expressive font specimens and carefully structured content blocks, rather than decorative colors or heavy UI components."
theme: "light"
industry: "design"
source_url: "https://socio-type.com"
refero_style_id: "973332dc-4e10-4e90-85d8-3bce9c3cd3ed"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515764859-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515764859-thumb.jpg"
extracted_at: "2026-04-30T02:23:05.841Z"
---

# Sociotype — Style Reference

> Editorial White Canvas

**Theme:** light

**Industry:** design

Sociotype presents as a serious, editorial platform for typography, characterized by an expansive white canvas, precise black typography, and highly controlled spacing. Interaction elements are almost entirely ghosted or underlined, relying on a subtle shift to black for active states. The visual weight is carried by the large, expressive font specimens and carefully structured content blocks, rather than decorative colors or heavy UI components.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, primary text on dark hero sections |
| Ink Black | #000000 | `--color-ink-black` | Primary text, borders, active states for ghost buttons and navigation, accent markings |
| Medium Gray | #818181 | `--color-medium-gray` | Muted text, secondary information, placeholder text, inactive link borders |
| Light Gray | #d6d6d6 | `--color-light-gray` | Subtle dividers, borders between content sections |
| Faded Gray | #9d9d9d | `--color-faded-gray` | Tertiary text, list item borders |

## Tokens — Typography

### Main Onsite

- **Token:** `--font-main-onsite`
- **Weights:** 400
- **Sizes:** 11px, 12px, 13px, 14px, 16px, 18px, 26px, 40px
- **Line heights:** 1, 1.13, 1.19, 1.22, 1.29, 1.31, 1.33, 1.38
- **Letter spacing:** 0.015, 0.025, 0.04, 0.05, 0.08
- **Role:** Main Onsite — detected in extracted data but not described by AI

### Onsite

- **Token:** `--font-onsite`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 251px
- **Line heights:** 1.25
- **Letter spacing:** 0.0800em at 11px, 0.0500em at 12px, 0.0400em at 13px, 0.0250em at 14px, 0.0150em at 16px, 0.0150em at 18px
- **Role:** Primary typeface for all body text, navigation, buttons, and smaller headings. Its regular weight ensures readability while maintaining a modern, understated presence.

### Avec Sharp

- **Token:** `--font-avec-sharp`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 251px
- **Line heights:** 1.25
- **Letter spacing:** 0.0010em
- **Role:** Display typeface for featured headlines and typographic showcases. Its unique character defines the brand's aesthetic in a large, impactful way.

### Ceno

- **Token:** `--font-ceno`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 251px
- **Line heights:** 1.25
- **Letter spacing:** 0.0010em
- **Role:** Alternative display typeface, used for specific typographic showcases. Shares the overall expressive, impactful role of Avec Sharp.

### Meso

- **Token:** `--font-meso`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 251px
- **Line heights:** 1.25
- **Letter spacing:** 0.0010em
- **Role:** Alternative display typeface, used for specific typographic showcases. Expands the brand's visual range for showcasing different font styles.

### Gestura

- **Token:** `--font-gestura`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 251px
- **Line heights:** 1.25
- **Letter spacing:** 0.0010em
- **OpenType features:** 'liga' on
- **Role:** Alternative display typeface with ligatures, used for specific typographic showcases. Highlights the intricate details of font design.

### Rework

- **Token:** `--font-rework`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 251px
- **Line heights:** 1.25
- **Letter spacing:** 0.0010em
- **Role:** Alternative display typeface, used for specific typographic showcases. Contributes to the diverse presentation of font families.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.38 | 0.88px | `--text-caption` |
| body | 14px | 1.29 | 0.35px | `--text-body` |
| heading | 26px | 1.13 | 0.26px | `--text-heading` |
| display-sm | 40px | 1 | 0.6px | `--text-display-sm` |
| display | 251px | 1.25 | 2.51px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-37 | 37px | `--spacing-37` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-140 | 140px | `--spacing-140` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 120px |
| cardPadding | 0px |
| elementGap | 12px |

## Components

### Ghost Button - Inactive

**Role:** Navigational and call-to-action link styling

Text in Ink Black or Canvas White, with a 1px bottom border of the same color. No background fill or padding. This gives buttons a lightweight, integrated feel with the surrounding text.

### Ghost Button - Muted

**Role:** Secondary actions or menu items

Text in Medium Gray, with a 1px bottom border of the same color. No background fill or padding. Used for less prominent interactive elements.

### Featured Card

**Role:** Displaying prominent typefaces without visual distraction

Completely transparent background, no borders, no box shadow, with 0px border-radius. Content manages its own spacing and visual hierarchy. Features a text block with 'Onsite' typography, 14px size, Ink Black color, 0.025em letter spacing, and a 1px Ink Black bottom border for 'More Info' link.

### Text Input

**Role:** User input for forms (e.g., newsletter signup)

Transparent background, placeholder/text in Medium Gray (#818181), with a thin 1px bottom border in Medium Gray.

## Do's and Don'ts

### Do

- Prioritize Ink Black (#000000) for all primary text and interactive element outlines on default light backgrounds.
- Use Canvas White (#ffffff) as the dominant page, card, and footer background, establishing a clean, expansive aesthetic.
- Maintain a strict 0px border-radius for all components, including buttons, cards, and input fields, for a sharp, precise feel.
- Implement interactive elements primarily as ghost buttons or underlined text, with minimal visual styling beyond color and text decoration transitions.
- Structure content with ample vertical spacing, leveraging the implied section gap of 120px to create distinct content blocks.
- Employ the Onsite font for all functional text under 'display' sizes, ensuring consistency in body, navigation, and button labels.
- Utilize Avec Sharp, Ceno, Meso, Gestura, or Rework fonts exclusively for large, impactful display typography to showcase different font characteristics.

### Don't

- Avoid using saturated background colors or heavy fills for interactive elements; stick to the achromatic palette.
- Do not introduce shadows or significant elevation on cards or buttons; elements should appear flat against the canvas.
- Refrain from applying rounded corners to any UI elements; all corners should be sharp 0px radius.
- Do not use highly contrasting accent colors for calls to action; rely on text weight, size, and subtle border changes for emphasis.
- Avoid dense, clustered layouts; allow generous empty space around content sections and individual elements.
- Do not deviate from the specified typefaces Onsite, Avec Sharp, Ceno, Meso, Gestura, or Rework; no other typefaces are part of this system.
- Do not use generic system fonts or default browser styles for links; ensure all interactive text uses the defined ghost button or underlined styles.

## Imagery

This design system relies heavily on large-scale typographic specimen imagery and abstract, sometimes vibrant, graphic backgrounds behind hero sections. Photography is absent. Illustrations are primarily abstract, organic, and colorful, serving as striking backdrops that contrast with the monochrome UI. Icons, if present, are minimal vector outlines, like the 'Cart' icon, suggesting a thin stroke weight. The imagery serves a decorative, atmospheric role, often full-bleed in hero sections, providing visual intrigue without distracting from the UI or text.

## Layout

The page maintains a full-bleed structure without a fixed maximum width for its main content, allowing elements to span the entire viewport. The hero section often features a large-scale, sometimes abstract image or graphic background with centered, prominent type specimen alongside informative text. Content sections below the hero typically follow a two-column layout with text on one side and associated visuals or another type specimen on the other. Navigation is a minimalist top bar with ghosted links, and a very large, eye-catching text (Sociotype) floats over the hero graphic. Vertical rhythm is established through generous, consistent section gaps, creating a spacious, editorial flow rather than a dense grid.

## Similar Brands

- **Fonts.com** — Similar focus on typographic display and large font specimen showcases.
- **Future Fonts** — Monochromatic interface, emphasis on typefaces, and ghosted interactive elements.
- **Pangram Pangram** — Clean, spacious layout with strong typographic hierarchy, and limited use of color.
- **Grilli Type** — Editorial aesthetic with large-scale typography and minimal UI decoration.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-medium-gray: #818181;
  --color-light-gray: #d6d6d6;
  --color-faded-gray: #9d9d9d;
  --font-main-onsite: 'Main Onsite', ui-sans-serif, system-ui, sans-serif;
  --font-onsite: 'Onsite', system-ui, sans-serif;
  --font-avec-sharp: 'Avec Sharp', serif;
  --font-ceno: 'Ceno', serif;
  --font-meso: 'Meso', serif;
  --font-gestura: 'Gestura', serif;
  --font-rework: 'Rework', serif;
  --text-caption: 11px;
  --leading-caption: 1.38;
  --tracking-caption: 0.88px;
  --text-body: 14px;
  --leading-body: 1.29;
  --tracking-body: 0.35px;
  --text-heading: 26px;
  --leading-heading: 1.13;
  --tracking-heading: 0.26px;
  --text-display-sm: 40px;
  --leading-display-sm: 1;
  --tracking-display-sm: 0.6px;
  --text-display: 251px;
  --leading-display: 1.25;
  --tracking-display: 2.51px;
  --spacing-0: 0px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-37: 37px;
  --spacing-50: 50px;
  --spacing-51: 51px;
  --spacing-55: 55px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-medium-gray: #818181;
  --color-light-gray: #d6d6d6;
  --color-faded-gray: #9d9d9d;
  --font-main-onsite: 'Main Onsite', ui-sans-serif, system-ui, sans-serif;
  --font-onsite: 'Onsite', system-ui, sans-serif;
  --font-avec-sharp: 'Avec Sharp', serif;
  --font-ceno: 'Ceno', serif;
  --font-meso: 'Meso', serif;
  --font-gestura: 'Gestura', serif;
  --font-rework: 'Rework', serif;
  --text-caption: 11px;
  --leading-caption: 1.38;
  --tracking-caption: 0.88px;
  --text-body: 14px;
  --leading-body: 1.29;
  --tracking-body: 0.35px;
  --text-heading: 26px;
  --leading-heading: 1.13;
  --tracking-heading: 0.26px;
  --text-display-sm: 40px;
  --leading-display-sm: 1;
  --tracking-display-sm: 0.6px;
  --text-display: 251px;
  --leading-display: 1.25;
  --tracking-display: 2.51px;
  --spacing-0: 0px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-37: 37px;
  --spacing-50: 50px;
  --spacing-51: 51px;
  --spacing-55: 55px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --radius-none: 0px;
}
```
