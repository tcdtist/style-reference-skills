---
version: alpha
name: "Brisbane Web Developer"
description: "This design system evokes the ambiance of a high-end art gallery, where precise visual arrangement and subtle material textures give objects a curated weight. A minimalist palette of near-white, light gray, and charcoal provides a neutral stage, making the content—especially project thumbnails framed by soft shadows—the primary visual event. The extensive use of achromatic tones ensures a calm, contemplative experience, subtly emphasizing the work itself rather than decorative flair. Sparse, intentional typography with a high degree of contrast feels both academic and accessible."
theme: "light"
industry: "agency"
source_url: "https://carlbeaverson.com"
refero_style_id: "23d83a89-8f22-405a-aa33-74fd0ebde9d8"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925627735-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925627735-thumb.jpg"
extracted_at: "2026-04-11T16:40:47.490Z"
---

# Brisbane Web Developer — Style Reference

> Art Gallery Minimalism: Project thumbnails, like curated art pieces, float on a light, matte background, each framed by a subtle, soft shadow box.

**Theme:** light

**Industry:** agency

This design system evokes the ambiance of a high-end art gallery, where precise visual arrangement and subtle material textures give objects a curated weight. A minimalist palette of near-white, light gray, and charcoal provides a neutral stage, making the content—especially project thumbnails framed by soft shadows—the primary visual event. The extensive use of achromatic tones ensures a calm, contemplative experience, subtly emphasizing the work itself rather than decorative flair. Sparse, intentional typography with a high degree of contrast feels both academic and accessible.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #f4f3f1 | `--color-canvas-white` | Page backgrounds, card surfaces, form input fields, buttons. |
| Graphite Text | #333333 | `--color-graphite-text` | Primary body text, headings, input text, and high-contrast elements. |
| Ash Details | #aaaaaa | `--color-ash-details` | Secondary text, link text, borders for inactive elements, and subtle dividers. |
| Stone Gray | #4d4d4d | `--color-stone-gray` | Informational body text, lower contrast textual elements. |
| Dust Border | #dddddd | `--color-dust-border` | Subtle borders and input field outlines. |
| Inactive Slate | #666666 | `--color-inactive-slate` | Color for inactive or secondary button text. |

## Tokens — Typography

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** system-ui, 'Helvetica Neue', 'Segoe UI', Arial, sans-serif
- **Weights:** 400
- **Sizes:** 14px, 15px, 20px
- **Line heights:** 1.20, 1.40, 1.50
- **Letter spacing:** normal
- **Role:** Default text for body copy, navigational links, button labels, and input fields. Sizes 14px and 15px handle most informational content, with 20px reserved for more prominent informational statements.

### Suisse Works Trial

- **Token:** `--font-suisse-works-trial`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.50
- **Letter spacing:** -0.49
- **Role:** This custom font, though small at 13px, is used for specific textual details, its negative letter-spacing (-0.0380em) hinting at a refined, almost condensed aesthetic that creates subtle visual tension against the regular sans-serif.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.5 | -0.49px | `--text-caption` |
| body | 15px | 1.4 | — | `--text-body` |
| heading-sm | 20px | 1.2 | — | `--text-heading-sm` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-10 | 10px | `--spacing-10` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-98 | 98px | `--spacing-98` |
| spacing-122 | 122px | `--spacing-122` |
| spacing-127 | 127px | `--spacing-127` |
| spacing-136 | 136px | `--spacing-136` |
| spacing-141 | 141px | `--spacing-141` |
| spacing-161 | 161px | `--spacing-161` |
| spacing-163 | 163px | `--spacing-163` |
| spacing-164 | 164px | `--spacing-164` |
| spacing-172 | 172px | `--spacing-172` |
| spacing-190 | 190px | `--spacing-190` |
| spacing-191 | 191px | `--spacing-191` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 5px |
| inputs | 5px |
| buttons | 5px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(90, 50, 40, 0.15) 0px 5px 15px 0px, rgba(80, 40, 30, 0.1) 0px 4px 8px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 122px |
| cardPadding | 20px |
| elementGap | 10px |

## Components

### Project Thumbnail Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Hero Bio Text Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Newsletter Segmented Form

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Button

**Role:** Call-to-action buttons for submissions.

Background: Canvas White (#f4f3f1). Text: Graphite Text (#333333). Border Top: Dust Border (#eeeded). Padding: 20px vertical, 30px horizontal. Right border radius: 5px, others 0px. Font: sans-serif 400, 15px, 1.4 lineHeight.

### Secondary Button

**Role:** General interactive buttons.

Background: Canvas White (#f4f3f1). Text: Inactive Slate (#666666). Border Top: Dust Border (#eeeded). Padding: 15px vertical, 40px horizontal. Border radius: 5px. Font: sans-serif 400, 15px, 1.4 lineHeight.

### Text Input

**Role:** Standard user input fields.

Background: Canvas White (#f4f3f1). Text: Graphite Text (#333333). Border Top: Dust Border (#eeeded). Padding: 20px. Border radius: 5px. Font: sans-serif 400, 15px, 1.4 lineHeight.

### Segmented Input Left

**Role:** Input field designed to be part of a group, appearing on the left.

Background: Canvas White (#f4f3f1). Text: Graphite Text (#333333). Border Top: Dust Border (#eeeded). Padding: 20px. Left border radius: 5px, others 0px. Font: sans-serif 400, 15px, 1.4 lineHeight.

### Project Thumbnail Card

**Role:** Displays project previews.

A container with background Canvas White (#f4f3f1) and a pronounced, soft shadow: rgba(90, 50, 40, 0.15) 0px 5px 15px 0px, rgba(80, 40, 30, 0.1) 0px 4px 8px 0px. Border radius: 5px.

## Do's and Don'ts

### Do

- Use Canvas White (#f4f3f1) as the primary background for all major content sections and interactive elements.
- Apply Graphite Text (#333333) for all primary body text, headings, and high-contrast UI labels.
- Frame significant visual content, like project cards, with the soft elevation shadow: rgba(90, 50, 40, 0.15) 0px 5px 15px 0px, rgba(80, 40, 30, 0.1) 0px 4px 8px 0px.
- Maintain a clear vertical rhythm between sections using a 122px gap (`sectionGap`).
- Employ a uniform 5px border radius (`radius.inputs`, `radius.buttons`, `radius.cards`) for all rounded elements.
- Utilize Ash Details (#aaaaaa) for all auxiliary textual elements, links, and borders on non-primary UI elements.

### Don't

- Avoid using highly saturated or chromatic colors; adhere strictly to the achromatic palette.
- Do not introduce sharp corners or larger radii than 5px for any interactive or card-like elements.
- Do not vary line heights for `sans-serif` from the specified 1.2, 1.4, or 1.5, or for `Suisse Works Trial` from 1.5.
- Do not deviate from the specified letter-spacing for `Suisse Works Trial`; its tightly spaced appearance is a signature element.
- Do not use complex gradient fills or patterned backgrounds; surfaces should remain uniformly Canvas White (#f4f3f1) or Dust Border (#dddddd).

## Elevation

- **Project Thumbnail Card:** `rgba(90, 50, 40, 0.15) 0px 5px 15px 0px, rgba(80, 40, 30, 0.1) 0px 4px 8px 0px`

## Imagery

This design primarily relies on product screenshots and illustrative web interfaces within project cards, contained and presented as distinct objects. The 'project thumbnail' treatment is crucial: these are not full-bleed images, but smaller, contained visuals framed by Card White (#f4f3f1) and lifted by a soft, brown-tinted shadow. This makes each project feel like a displayed artifact. Photography, when used, is integrated within these 'project cards' and visually consistent with digital output, often focused on UI elements or abstract textures. The role of imagery is strictly to showcase work, not to add decorative flourish or lifestyle context. Icons, where present, are minimal line-art, fitting the achromatic theme.

## Layout

The page adheres to a max-width contained model, centered on the screen, creating a formal, academic presentation space. The hero section is a simple, centered text block with ample negative space. Content sections are primarily a grid of project cards, arranged in a visually consistent 3-column layout, maintaining generous horizontal and vertical spacing. The rhythm is established by section gaps of 122px, separating distinct content blocks vertically. The overall density is spacious, emphasizing individual content elements. Navigation is a minimal top-right link cluster, reinforcing the content-first approach.

## Similar Brands

- **Awwwards-featured portfolio sites** — Shares the focus on presenting work as distinct, elevated objects against a minimal background, often using similar soft shadows and restrained palettes.
- **Certain architecture portfolio sites** — Employs a grid-based, spacious layout with a strong emphasis on showcasing individual projects as hero elements, often with controlled lighting (shadows).
- **High-end product display pages** — Similar achromatic background and subtle elevation used to highlight the 'product' (in this case, web projects) as the central visual focus.
- **Minimalist editorial platforms** — Relies heavily on well-structured typography with significant white space and a limited, high-contrast color palette to convey information.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #f4f3f1;
  --color-graphite-text: #333333;
  --color-ash-details: #aaaaaa;
  --color-stone-gray: #4d4d4d;
  --color-dust-border: #dddddd;
  --color-inactive-slate: #666666;
  --font-sans-serif: 'sans-serif', system-ui, 'Helvetica Neue', 'Segoe UI', Arial, sans-serif;
  --font-suisse-works-trial: 'Suisse Works Trial', serif;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: -0.49px;
  --text-body: 15px;
  --leading-body: 1.4;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-55: 55px;
  --spacing-65: 65px;
  --spacing-80: 80px;
  --spacing-98: 98px;
  --spacing-122: 122px;
  --spacing-127: 127px;
  --spacing-136: 136px;
  --spacing-141: 141px;
  --spacing-161: 161px;
  --spacing-163: 163px;
  --spacing-164: 164px;
  --spacing-172: 172px;
  --spacing-190: 190px;
  --spacing-191: 191px;
  --radius-cards: 5px;
  --radius-inputs: 5px;
  --radius-buttons: 5px;
  --shadow-xl: rgba(90, 50, 40, 0.15) 0px 5px 15px 0px, rgba(80, 40, 30, 0.1) 0px 4px 8px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #f4f3f1;
  --color-graphite-text: #333333;
  --color-ash-details: #aaaaaa;
  --color-stone-gray: #4d4d4d;
  --color-dust-border: #dddddd;
  --color-inactive-slate: #666666;
  --font-sans-serif: 'sans-serif', system-ui, 'Helvetica Neue', 'Segoe UI', Arial, sans-serif;
  --font-suisse-works-trial: 'Suisse Works Trial', serif;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: -0.49px;
  --text-body: 15px;
  --leading-body: 1.4;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-55: 55px;
  --spacing-65: 65px;
  --spacing-80: 80px;
  --spacing-98: 98px;
  --spacing-122: 122px;
  --spacing-127: 127px;
  --spacing-136: 136px;
  --spacing-141: 141px;
  --spacing-161: 161px;
  --spacing-163: 163px;
  --spacing-164: 164px;
  --spacing-172: 172px;
  --spacing-190: 190px;
  --spacing-191: 191px;
  --radius-cards: 5px;
  --radius-inputs: 5px;
  --radius-buttons: 5px;
  --shadow-xl: rgba(90, 50, 40, 0.15) 0px 5px 15px 0px, rgba(80, 40, 30, 0.1) 0px 4px 8px 0px;
}
```
