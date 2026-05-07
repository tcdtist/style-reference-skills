---
version: alpha
name: "Monocle"
description: "Monocle's design evokes a classic, authoritative editorial feel, grounded in high-contrast typography on a clean white canvas. The system prioritizes crisp lines, clear hierarchy, and restraint over flourish, creating an environment where content takes center stage. Signature elements include the tight letter-spacing on headlines, the use of a custom serif font for primary content, and a sparse accent palette that highlights interactivity and key features without visual noise."
theme: "light"
industry: "media"
source_url: "https://monocle.com"
refero_style_id: "9165ecb1-f068-4093-8783-1f3c98898b8a"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924808321-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924808321-thumb.jpg"
extracted_at: "2026-04-11T16:27:05.194Z"
---

# Monocle — Style Reference

> Ink-on-paper minimalist; a finely printed journal on pristine stock.

**Theme:** light

**Industry:** media

Monocle's design evokes a classic, authoritative editorial feel, grounded in high-contrast typography on a clean white canvas. The system prioritizes crisp lines, clear hierarchy, and restraint over flourish, creating an environment where content takes center stage. Signature elements include the tight letter-spacing on headlines, the use of a custom serif font for primary content, and a sparse accent palette that highlights interactivity and key features without visual noise.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, elevated card surfaces, body text background. |
| Printer's Black | #000000 | `--color-printer-s-black` | Primary text, headers, borders, active navigation elements – ensuring maximum contrast and legibility. |
| Sterling Gray | #6e6e6 | `--color-sterling-gray` | Secondary text, metadata, disabled states, subtle borders – providing depth against brighter neutrals. |
| Zinc Gray | #d9d9d9 | `--color-zinc-gray` | Muted borders, dividers, subtle inactive states – defining structure without visual weight. |
| Cloud Gray | #e7e7e7 | `--color-cloud-gray` | Background for subtle card variants and distinct UI sections. |
| Parchment Cream | #fdfcf3 | `--color-parchment-cream` | Subtle background for specific UI elements, adding a hint of warmth. |
| Editorial Yellow | #ffc500 | `--color-editorial-yellow` | Call-to-action buttons, active navigation indicators, key interactive elements – a vivid punctuation mark. |
| Sky Blue | #64d5ff | `--color-sky-blue` | Card backgrounds for specific content categories, offering a cool counterpoint to the neutral palette. |

## Tokens — Typography

### Plantin

- **Token:** `--font-plantin`
- **Substitute:** Georgia
- **Weights:** 400, 700
- **Sizes:** 13px, 16px, 18px, 20px, 24px, 28px, 32px, 34px, 40px
- **Line heights:** 1.00, 1.13, 1.15, 1.20, 1.25, 1.30, 1.38, 1.44, 1.50
- **Letter spacing:** -0.0200em, 0.0100em, 0.0500em, 0.0750em
- **Role:** Primary content, article headlines, body text, and any long-form narrative. The custom serif embodies the brand's traditional editorial authority.

### Helvetica Neue

- **Token:** `--font-helvetica-neue`
- **Substitute:** Arial
- **Weights:** 400, 700
- **Sizes:** 13px, 14px, 16px, 24px
- **Line heights:** 1.00, 1.13, 1.25, 1.29, 1.38, 1.50
- **Letter spacing:** 0.0100em
- **Role:** UI elements, navigation, buttons, and short descriptive text – providing a clean, modern contrast to the serif content.

### Chanel

- **Token:** `--font-chanel`
- **Substitute:** Playfair Display
- **Weights:** 700
- **Sizes:** 9px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Distinctive custom display font, likely reserved for branded elements like the main Monocle logo.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.5 | 0.01px | `--text-caption` |
| body | 16px | 1.5 | 0.01px | `--text-body` |
| subheading | 24px | 1.25 | -0.48px | `--text-subheading` |
| heading | 32px | 1.15 | -0.64px | `--text-heading` |
| display | 40px | 1.13 | -0.8px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-59 | 59px | `--spacing-59` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-216 | 216px | `--spacing-216` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| buttons | 0px |
| navBadges | 50% |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1296px |
| sectionGap | 32px |
| cardPadding | 16px |
| elementGap | 4px |

## Components

### Monocle Radio Podcast Player Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Article Feature Card with Category Label and Read Time

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Podcast Episode Cards Grid

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Link

**Role:** Interactive element

Text in Printer's Black (#000000), Helvetica Neue, weight 400. Underlined with a 1px solid Printer's Black (#000000) border when active or hovered. No padding.

### Call-to-Action Button

**Role:** Primary action

Background Editorial Yellow (#ffc500), text Printer's Black (#000000), Helvetica Neue, weight 700. No border, no radius. Content based on current context.

### Icon Button (Circular Outline)

**Role:** Secondary action/icon toggle

Transparent background, Printer's Black (#000000) text (icon), 1px Printer's Black (#000000) circular border, 50% border-radius. No padding.

### Standard Content Card

**Role:** Content container

Background Canvas White (#ffffff), 8px border-radius, no box shadow. Internal padding of 16px around content.

### Category Label Card

**Role:** Thematic content grouping

Background Sky Blue (#64d5ff), 8px border-radius, no box shadow. Internal padding of 16px around content.

### Neutral Background Card

**Role:** Subtle content grouping

Background Cloud Gray (#e7e7e7), 8px border-radius, no box shadow. Internal padding of 16px around content.

### Podcast Player Card

**Role:** Dynamic audio content display

Background Printer's Black (#000000), 8px border-radius, no box shadow. Features an Editorial Yellow (#ffc500) 'Listen Live' button.

### Search Input Field

**Role:** User input

Canvas White (#ffffff) background, Printer's Black (#000000) text. No border, no radius. Padding of 16px.

## Do's and Don'ts

### Do

- Prioritize Plantin for all article bodies and headlines to maintain editorial voice.
- Use Printer's Black (#000000) on Canvas White (#ffffff) for all primary text and background combinations.
- Apply 8px border-radius for all content cards and UI blocks where a soft edge is needed.
- Reserve Editorial Yellow (#ffc500) exclusively for calls to action and critical interactive states.
- Maintain tight letter-spacing for headlines (e.g., -0.64px for 32px Plantin headings) to enhance visual density.
- Utilize Helvetica Neue for navigation and utility text, setting it at 13px weight 400 for consistency.
- Implement 16px internal padding for all card components to provide sufficient breathing room for content.

### Don't

- Do not introduce additional color accents beyond Editorial Yellow (#ffc500) and Sky Blue (#64d5ff).
- Avoid box shadows or elevations; establish depth through background color changes (Canvas White, Cloud Gray, Sky Blue).
- Do not use rounded corners on primary buttons or navigation elements; maintain sharp, defined edges.
- Never use less than 4px spacing between elements unless for iconography or nested micro-interactions.
- Do not deviate from the specified font families; avoid system defaults for major text blocks.
- Avoid large, impactful hero images; focus on contained, editorial photography or illustrations.
- Do not use highly decorative UI elements; stick to functional and minimal design patterns.

## Imagery

Imagery is primarily editorial photography and stylized illustrations. Photography is typically tightly cropped, showcasing subjects directly in a high-key or natural light. Illustrations are often line-drawn with minimal flat colors, or possess a distinctive, quirky style (like the plane diagram or the Nic Monisse portrait). Images are usually contained within card structures or embedded directly into the content stream, not used as full-bleed hero elements. They serve an explanatory or illustrative role rather than purely decorative, balancing text-heavy layouts.

## Layout

The page adheres to a max-width 1296px centered layout, creating a contained reading experience. The hero section features a prominent brand marque and headline, often with a large, editorial photograph beneath it, setting an immediate authoritative tone. Content is arranged in a grid-like fashion, employing a combination of single-column article previews and multiple-column card grids for features and related content. The rhythm is established by consistent vertical spacing of 32px between major sections and 16px padding within cards. Navigation is persistent at the top, splitting into a utility bar and a primary category navigation. The layout is information-dense but organized, resembling a structured print publication.

## Similar Brands

- **The New York Times** — Similar high-contrast black on white, emphasis on serif typography for editorial content, and a restrained use of accent colors.
- **The Economist** — Shares a classic editorial aesthetic, dense information presentation, and a focus on strong visual hierarchy through typography rather than extensive imagery.
- **The Guardian** — Employs a grid-based, article-heavy layout with a clean background, strong use of black text, and clear separation of content blocks.
- **AIGA Journal** — Similar approach to showcasing long-form editorial content with focused photography and illustrations within a crisp, print-inspired layout.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-printer-s-black: #000000;
  --color-sterling-gray: #6e6e6;
  --color-zinc-gray: #d9d9d9;
  --color-cloud-gray: #e7e7e7;
  --color-parchment-cream: #fdfcf3;
  --color-editorial-yellow: #ffc500;
  --color-sky-blue: #64d5ff;
  --font-plantin: 'Plantin', Georgia;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --font-chanel: 'Chanel', Playfair Display;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: 0.01px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.01px;
  --text-subheading: 24px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.15;
  --tracking-heading: -0.64px;
  --text-display: 40px;
  --leading-display: 1.13;
  --tracking-display: -0.8px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-59: 59px;
  --spacing-65: 65px;
  --spacing-80: 80px;
  --spacing-216: 216px;
  --radius-cards: 8px;
  --radius-buttons: 0px;
  --radius-navbadges: 50%;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-printer-s-black: #000000;
  --color-sterling-gray: #6e6e6;
  --color-zinc-gray: #d9d9d9;
  --color-cloud-gray: #e7e7e7;
  --color-parchment-cream: #fdfcf3;
  --color-editorial-yellow: #ffc500;
  --color-sky-blue: #64d5ff;
  --font-plantin: 'Plantin', Georgia;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --font-chanel: 'Chanel', Playfair Display;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: 0.01px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.01px;
  --text-subheading: 24px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.15;
  --tracking-heading: -0.64px;
  --text-display: 40px;
  --leading-display: 1.13;
  --tracking-display: -0.8px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-59: 59px;
  --spacing-65: 65px;
  --spacing-80: 80px;
  --spacing-216: 216px;
  --radius-cards: 8px;
  --radius-buttons: 0px;
  --radius-navbadges: 50%;
}
```
