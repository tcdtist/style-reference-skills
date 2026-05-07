---
version: alpha
name: "Aristide Benoist"
description: "Aristide Benoist employs a stark, high-contrast dark theme, creating a minimalist canvas for showcasing visual work. Typography plays a central role, utilizing custom fonts with distinct letter-spacing and compact line heights to establish a deliberate, almost architectural tone. Subtle use of a vivid yellow accent provides a critical but restrained counterpoint to the monochromatic surfaces, drawing attention to interactive elements without visual clutter. The overall presentation is sparse and content-focused, emphasizing precision and interaction."
theme: "dark"
industry: "other"
source_url: "https://www.aristidebenoist.com"
refero_style_id: "0803e911-23ac-46aa-a770-007674906e73"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515702824-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515702824-thumb.jpg"
extracted_at: "2026-04-30T02:22:20.309Z"
---

# Aristide Benoist — Style Reference

> Monochromatic minimalist stage

**Theme:** dark

**Industry:** other

Aristide Benoist employs a stark, high-contrast dark theme, creating a minimalist canvas for showcasing visual work. Typography plays a central role, utilizing custom fonts with distinct letter-spacing and compact line heights to establish a deliberate, almost architectural tone. Subtle use of a vivid yellow accent provides a critical but restrained counterpoint to the monochromatic surfaces, drawing attention to interactive elements without visual clutter. The overall presentation is sparse and content-focused, emphasizing precision and interaction.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Page backgrounds, deeply recessed surfaces, primary text color for high contrast elements |
| Storm Gray | #1e1e1e | `--color-storm-gray` | Card surfaces, secondary background elements, subtle dividers |
| Mist Gray | #bac4b8 | `--color-mist-gray` | Medium-contrast borders, control outlines, and structural separators. Do not promote it to the primary CTA color |
| Goldenrod Accent | #cc9933 | `--color-goldenrod-accent` | Yellow outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |

## Tokens — Typography

### jws

- **Token:** `--font-jws`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 10px, 11px, 12px, 16px
- **Line heights:** 0.91, 1.00, 1.17, 1.20, 2.00, 2.83
- **Letter spacing:** -0.0200em at 10px, 0.0200em at 11px, 0.0330em at 12px, -0.0200em at 16px
- **OpenType features:** 'liga' 0
- **Role:** Body text, links, navigation items, and descriptive labels. Its tight tracking and condensed impression maintain visual density.

### TNY

- **Token:** `--font-tny`
- **Substitute:** Georgia
- **Weights:** 400
- **Sizes:** 50px, 258px, 338px
- **Line heights:** 0.75, 0.88
- **Letter spacing:** -0.0240em at 258px, -0.0200em at 338px, -0.0100em at 50px
- **OpenType features:** 'liga' 0
- **Role:** Dominant display headlines and hero text. The extremely large sizes and negative letter-spacing create an architectural, almost sculptural presence, defining key sections with minimal words.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.2 | — | `--text-caption` |
| body-sm | 11px | 1.2 | — | `--text-body-sm` |
| body | 12px | 1.2 | — | `--text-body` |
| body-lg | 16px | 1.2 | — | `--text-body-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-48 | 48px | `--spacing-48` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 24px |
| elementGap | 24px |

## Components

### Primary Navigation Link

**Role:** Top-level navigation element

Text in jws 400 at 16px (0.0200em letter-spacing) with Mist Gray (#bac4b8). Active state signaled by Goldenrod Accent (#cc9933) text.

### Secondary Footer Link

**Role:** Utility links in the footer

Text in jws 400 at 10px (0.0200em letter-spacing) with Mist Gray (#bac4b8). Interacts visually with the overall minimalist theme.

### Horizontal Divider

**Role:** Visual separation within lists or sections

1px solid line using Mist Gray (#bac4b8) or Goldenrod Accent (#cc9933) for active/focused elements.

### Hero Display Text

**Role:** Large, impactful headlines for hero sections

TNY 400, sizes like 258px or 338px with very tight negative letter-spacing (-0.024em or -0.020em). Color is Midnight Ink (#000000) or Mist Gray (#bac4b8), depending on background contrast.

### Body Paragraph

**Role:** Standard informational text blocks

jws 400 font at 16px, with Mist Gray (#bac4b8) color, providing comfortable legibility against dark backgrounds.

## Do's and Don'ts

### Do

- Prioritize Midnight Ink (#000000) for primary page canvas and Storm Gray (#1e1e1e) for secondary background surfaces, emphasizing depth through subtle tonal shifts.
- Use Mist Gray (#bac4b8) for all body text, default links, and inactive navigation items.
- Reserve Goldenrod Accent (#cc9933) for active element borders, focused states, and selected interactive text to maximize its impact.
- Apply jws 400 font with a consistent 1.0 line height for all body copy and interactive text elements.
- Utilize TNY 400 with its extremely large sizes and negative letter-spacing for all primary headlines, treating text as a dominant visual element.
- Maintain a clear visual hierarchy with high contrast between text and background, adhering to AAA accessibility standards for critical information.
- Implement 1px solid borders using Mist Gray (#bac4b8) for subtle content separation and interactive feedback.

### Don't

- Avoid using multiple chromatic colors; limit the accent palette exclusively to Goldenrod Accent (#cc9933).
- Do not introduce rounded corners; maintain sharp, crisp edges for all UI elements and imagery.
- Refrain from using shadows or elevation; the design system relies on flat surfaces and color contrast for visual hierarchy.
- Do not use generic system fonts; stick to the specified jws and TNY fonts to preserve brand identity.
- Avoid decorative gradients; surfaces should be flat and uniform in color.
- Do not use letter-spacing outside the specified values for jws and TNY fonts; precise tracking is a key brand identifier.
- Circumvent any large gaps or excessive padding that would disrupt the dense, content-focused layout.

## Similar Brands

- **Awwwards** — Shares a focus on stark, often dark, canvases with high-contrast typography, showcasing creative visual work with minimal distractions.
- **Figma** — Exhibits a clean, functional aesthetic with careful typographic hierarchies and selective use of accent colors on a largely neutral interface.
- **Linear** — Utilizes a highly structured, text-heavy dark mode interface with subtle color accents and precise typography to convey functionality and efficiency.
- **Stripe** — Employs clean layout, strong typography, and a strategic use of color on elements to guide user attention within a minimalist design.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-storm-gray: #1e1e1e;
  --color-mist-gray: #bac4b8;
  --color-goldenrod-accent: #cc9933;
  --font-jws: 'jws', Arial;
  --font-tny: 'TNY', Georgia;
  --text-caption: 10px;
  --leading-caption: 1.2;
  --text-body-sm: 11px;
  --leading-body-sm: 1.2;
  --text-body: 12px;
  --leading-body: 1.2;
  --text-body-lg: 16px;
  --leading-body-lg: 1.2;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-48: 48px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-storm-gray: #1e1e1e;
  --color-mist-gray: #bac4b8;
  --color-goldenrod-accent: #cc9933;
  --font-jws: 'jws', Arial;
  --font-tny: 'TNY', Georgia;
  --text-caption: 10px;
  --leading-caption: 1.2;
  --text-body-sm: 11px;
  --leading-body-sm: 1.2;
  --text-body: 12px;
  --leading-body: 1.2;
  --text-body-lg: 16px;
  --leading-body-lg: 1.2;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-48: 48px;
  --radius-default: 0px;
}
```
