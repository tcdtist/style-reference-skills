---
version: alpha
name: "No Ideas"
description: "No Ideas employs a stark, editorial aesthetic, reminiscent of a printed publication. The design is monochromatic, relying almost entirely on black and white to establish a clear hierarchy and dramatic contrast, with emphasis on robust typography. Layouts are clean and spacious, emphasizing content over decorative elements, creating a focused and impactful visual experience. The system avoids shadows and complex gradients, prioritizing a flat, graphic quality."
theme: "dark"
industry: "design"
source_url: "https://noideas.website"
refero_style_id: "908017b4-311c-4b89-afa5-c29c8cb08e8b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520218536-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520218536-thumb.jpg"
extracted_at: "2026-04-30T03:37:13.960Z"
---

# No Ideas — Style Reference

> High-contrast editorial publication

**Theme:** dark

**Industry:** design

No Ideas employs a stark, editorial aesthetic, reminiscent of a printed publication. The design is monochromatic, relying almost entirely on black and white to establish a clear hierarchy and dramatic contrast, with emphasis on robust typography. Layouts are clean and spacious, emphasizing content over decorative elements, creating a focused and impactful visual experience. The system avoids shadows and complex gradients, prioritizing a flat, graphic quality.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, prominent text (on dark), borders, ghost button outlines |
| Ink Black | #000000 | `--color-ink-black` | Primary surface background, main body text, navigation elements, footer text |
| Text Gray | #212529 | `--color-text-gray` | General body text for readability, subtle borders |

## Tokens — Typography

### ABC Diatype

- **Token:** `--font-abc-diatype`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 36px, 48px, 331px
- **Line heights:** 1.05, 1.10, 1.52
- **Letter spacing:** -0.052em at 36px/48px, -0.010em at 331px
- **OpenType features:** (none observed)
- **Role:** Primary display font for headings and prominent editorial text. Its distinct letterforms and tight tracking at larger sizes create a bold, modern, almost logotype-like feel.

### system-ui

- **Token:** `--font-system-ui`
- **Substitute:** Segoe UI, Apple System
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.50
- **Letter spacing:** normal
- **OpenType features:** (none observed)
- **Role:** Body text and functional UI elements where high readability and system-level consistency are preferred.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.5 | 0px | `--text-body` |
| heading | 36px | 1.05 | -0.74px | `--text-heading` |
| heading-lg | 48px | 1.1 | -0.96px | `--text-heading-lg` |
| display | 331px | 1.52 | -3.31px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-19 | 19px | `--spacing-19` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-202 | 202px | `--spacing-202` |

### Border Radius

| Element | Value |
| --- | --- |
| image | 15px |

### Layout Tokens

| Name | Value |
| --- | --- |
| elementGap | 29px |

## Components

### Ghost Navigation Link

**Role:** Interactive text link within headers and footers.

Text in Ink Black (#000000) or Canvas White (#ffffff) using ABC Diatype 400 at appropriate sizes for navigation, with no background or specific padding, relying on surrounding whitespace for interaction cues.

### Editorial Header

**Role:** Primary heading for sections or pages.

Utilizes ABC Diatype at large sizes (48px or 331px), typically in Canvas White (#ffffff) against Ink Black (#000000) or vice-versa, with tight letter spacing for visual impact. Has a distinct vertical rhythm of 202px below it.

### Image Card

**Role:** Container for visual content.

Images are presented with a 15px border-radius, giving a subtle softness to photographic elements within the otherwise sharp design. Text associated with images (e.g., captions) would typically use Canvas White #ffffff or Text Gray #212529.

### Editorial Footer Section

**Role:** Bottom navigation and additional information block.

Ink Black (#000000) background with Canvas White (#ffffff) text, structured with internal padding of 19px top/bottom and 29px left/right. Contains multiple interactive text links.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) and Ink Black (#000000) for all primary backgrounds and text, maintaining high contrast.
- Use ABC Diatype for all headings and prominent textual elements, applying the specified letter-spacing for each size.
- Maintain generous spacing around sections, specifically a 202px bottom margin after primary content blocks.
- Apply a 15px border-radius consistently to all images for a subtle softening effect.
- Ensure UI elements for navigation and information are simple text links, without pronounced button styling, using either Canvas White (#ffffff) or Ink Black (#000000).
- Employ `system-ui` for all body text and secondary informational content at 16px weight 400 with normal letter-spacing and 1.5 line height.

### Don't

- Avoid introducing additional chromatic colors; the system relies on a strictly monochromatic palette.
- Do not use box-shadows or complex gradients; the design aesthetic is intentionally flat.
- Do not vary from the specified line heights and letter spacing for ABC Diatype; these are critical to the typographic identity.
- Do not add heavy borders or background fills to interactive elements; they should remain text-based or 'ghost' styled.
- Avoid dense informational blocks; embrace spacious layouts to create visual breathing room.
- Do not use decorative imagery that detracts from the stark, editorial focus; images should be integral to the content.

## Imagery

The site uses photography as its primary imagery. These are integrated as large, full-bleed backgrounds or large, contained elements, often in black and white or highly desaturated states. The treatment is direct, with images sometimes having a 15px border-radius for a refined edge. There are no illustrations or abstract graphics. The imagery serves to set a mood or showcase work within an overarching editorial publication style, rather than providing explicit product functionality or step-by-step guides. The density is image-heavy in sections, defining visual chapters.

## Layout

The page embraces a full-bleed content model where sections can stretch across the viewport width. The hero section, as seen with the 'WINGS' title, features a full-bleed Ink Black background with large, centered Canvas White text. The section rhythm is defined by large vertical gaps (202px) between content blocks and a clear contrast shift between dark and light backgrounds. Content is often presented in a simple, stacked or implied two-column arrangement, focusing on strong typographic statements. Navigation is minimal, consisting of a top bar for core links and a detailed footer. The overall density is spacious, allowing elements significant room to breathe.

## Similar Brands

- **AIGA Journal** — Strong editorial design, heavy reliance on typography as primary visual, monochromatic palette, and spacious layouts.
- **The New York Times (digital)** — Focus on high-contrast black and white, robust typographic hierarchy, and clean content presentation.
- **Actual Source** — Contemporary graphic design studio with a strong print-inspired, grid-based aesthetic, and a minimal color palette.
- **Pentagram** — Design portfolio site structure with a focus on large images and clear, impactful typography over decorative UI elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-text-gray: #212529;
  --font-abc-diatype: 'ABC Diatype', Inter;
  --font-system-ui: 'system-ui', Segoe UI, Apple System;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-heading: 36px;
  --leading-heading: 1.05;
  --tracking-heading: -0.74px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.96px;
  --text-display: 331px;
  --leading-display: 1.52;
  --tracking-display: -3.31px;
  --spacing-19: 19px;
  --spacing-29: 29px;
  --spacing-202: 202px;
  --radius-image: 15px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-text-gray: #212529;
  --font-abc-diatype: 'ABC Diatype', Inter;
  --font-system-ui: 'system-ui', Segoe UI, Apple System;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-heading: 36px;
  --leading-heading: 1.05;
  --tracking-heading: -0.74px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.96px;
  --text-display: 331px;
  --leading-display: 1.52;
  --tracking-display: -3.31px;
  --spacing-19: 19px;
  --spacing-29: 29px;
  --spacing-202: 202px;
  --radius-image: 15px;
}
```
