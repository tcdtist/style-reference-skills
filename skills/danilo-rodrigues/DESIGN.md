---
version: alpha
name: "Danilo Rodrigues"
description: "Danilo Rodrigues' portfolio establishes a striking visual identity through high-contrast monochrome design. The system emphasizes clear textual information with generous spacing on a deep black canvas. A singular, vivid green accent color is used sparingly for an immediate focal point, creating a focused and bold atmosphere. Typography plays a primary role, delivering content with directness and visual weight."
theme: "dark"
industry: "design"
source_url: "https://danilorodrigues.com"
refero_style_id: "0d68dc70-15ec-494a-855d-fdb6a4e7c982"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519698815-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519698815-thumb.jpg"
extracted_at: "2026-04-30T03:28:34.243Z"
---

# Danilo Rodrigues — Style Reference

> High-contrast digital minimalist

**Theme:** dark

**Industry:** design

Danilo Rodrigues' portfolio establishes a striking visual identity through high-contrast monochrome design. The system emphasizes clear textual information with generous spacing on a deep black canvas. A singular, vivid green accent color is used sparingly for an immediate focal point, creating a focused and bold atmosphere. Typography plays a primary role, delivering content with directness and visual weight.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Absolute Zero | #000000 | `--color-absolute-zero` | Page background, primary text on light backgrounds, content borders, ghost button accents |
| Paper White | #ffffff | `--color-paper-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Fog Gray | #eaeaea | `--color-fog-gray` | Muted secondary text, subtle element borders |
| Steel Gray | #878787 | `--color-steel-gray` | Muted secondary text, descriptive labels |
| Carbon | #1e1e1e | `--color-carbon` | Subtle dark borders, low-contrast UI elements |
| Neon Green | #00ff00 | `--color-neon-green` | Supporting palette color for small decorative accents when the core palette needs contrast. Do not promote it to the primary CTA color |

## Tokens — Typography

### Neue Haas Grotesk

- **Token:** `--font-neue-haas-grotesk`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 18px, 19px, 23px, 26px, 31px, 71px
- **Line heights:** 1.00, 1.10, 1.20, 1.30
- **Letter spacing:** normal
- **Role:** Primary content font for all headings, body text, and links. Its singular weight provides consistency, relying on size and color for hierarchy.

### Times

- **Token:** `--font-times`
- **Substitute:** Times New Roman
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Tertiary text for meta-information or small, decorative details, offering a distinct serif counterpoint to the primary sans-serif.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.2 | — | `--text-caption` |
| body | 18px | 1.3 | — | `--text-body` |
| subheading | 23px | 1.2 | — | `--text-subheading` |
| heading | 31px | 1.1 | — | `--text-heading` |
| display | 71px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-13 | 13px | `--spacing-13` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-83 | 83px | `--spacing-83` |
| spacing-130 | 130px | `--spacing-130` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |
| circular | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 45px |
| cardPadding | 26px |
| elementGap | 13px |

## Components

### Primary Heading

**Role:** Hero section large text

Neue Haas Grotesk, 71px, weight 400, lineHeight 1.0, color Paper White. Used for primary page titles.

### Body Text

**Role:** General paragraph text

Neue Haas Grotesk, 18px, weight 400, lineHeight 1.3, color Paper White. Default styling for informational prose.

### Muted Subheading

**Role:** Secondary section titles or context

Neue Haas Grotesk, 23px, weight 400, lineHeight 1.2, color Fog Gray. Provides hierarchy with less visual weight than primary headings.

### Navigation Link

**Role:** Top navigation menu items

Neue Haas Grotesk, 18px, weight 400, lineHeight 1.3, color Fog Gray. Hover state changes text color to Paper White with an underline.

### Accent Circle

**Role:** Interactive visual element

A circular shape with a background color of Neon Green, containing a smaller circular cutout with an Absolute Zero border. Radius 9999px for perfect circle.

### Fine Print Text

**Role:** Copyright or disclaimer text

Times, 13px, weight 400, lineHeight 1.2, color Steel Gray. Used for small, unobtrusive information.

### Email Link

**Role:** Contact information

Neue Haas Grotesk, 19px, weight 400, lineHeight 1.2, color Steel Gray. Features an arrow icon. Hover state changes text color to Neon Green.

## Do's and Don'ts

### Do

- Always use Absolute Zero (#000000) for backgrounds and Paper White (#ffffff) for primary text to maintain high contrast.
- Apply Neon Green (#00ff00) exclusively for primary interactive elements or key brand highlights, ensuring impactful visual moments.
- Prioritize Neue Haas Grotesk for all primary text elements, leveraging size and line height to establish clear typographic hierarchy.
- Utilize generous vertical spacing, with a base unit of 13px for elements and 45px for section separation, to create an airy, uncrowded layout.
- Maintain sharp edges: border-radius should generally be 0px, reserving 9999px for perfectly circular elements only.
- Emphasize content through direct text presentation; imagery should be minimal and serve as abstract visual accents rather than detailed content.
- Ensure all interactive text elements (links, buttons) are differentiated by color changes on hover, primarily to Paper White or Neon Green.

### Don't

- Avoid introducing additional saturated colors; the palette is strictly monochrome with a single Neon Green accent.
- Do not use shadows or elevation effects; surfaces are flat and defined by solid color blocks and clear borders.
- Do not use Neue Haas Grotesk below 18px for body text; switch to smaller, more legible fonts only for meta-information if necessary.
- Do not deviate from the established spacing values; consistent padding and margins are crucial for the minimalist aesthetic.
- Avoid decorative gradients or complex backgrounds; main surfaces should remain solid black to maintain visual intensity.
- Do not use generic system font styling. Adhere strictly to Neue Haas Grotesk and Times typefaces as specified.
- Avoid cluttering sections with numerous elements; maintain a clean, sparse arrangement where each element has room to breathe.

## Imagery

The visual language is characterized by an absence of conventional imagery. Instead, abstract geometric shapes, notably a prominent Neon Green circle, serve as decorative and interactive focal points. Icons, when present, are minimal, often depicted as simple arrows or text-based indicators. The overall density is very low, ensuring text remains the primary content, with graphic elements providing atmospheric texture rather than detailed information or demonstration.

## Layout

The page adheres to a full-bleed layout, maximizing the impact of the deep black canvas. The hero section features a large, horizontally centered headline over a background that interacts with a large abstract green circle. Sections maintain a consistent vertical rhythm, primarily composed of centered text blocks. Content primarily arranges in single columns for direct readability, with navigation elements positioned in the top corners for a balanced, minimalist visual structure. The layout prioritizes ample negative space, creating an uncluttered and focused experience.

## Similar Brands

- **Basic Apple Guy** — High-contrast dark mode with bright, minimalist graphic elements and strong typography focus.
- **Tobias van Schneider** — Monochromatic palette, emphasis on large typography, and minimalist layout for a portfolio site.
- **Gusto** — Clean, spacious layouts prioritizing typography and limited, impactful color accents against a neutral base.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-absolute-zero: #000000;
  --color-paper-white: #ffffff;
  --color-fog-gray: #eaeaea;
  --color-steel-gray: #878787;
  --color-carbon: #1e1e1e;
  --color-neon-green: #00ff00;
  --font-neue-haas-grotesk: 'Neue Haas Grotesk', Inter;
  --font-times: 'Times', Times New Roman;
  --text-caption: 13px;
  --leading-caption: 1.2;
  --text-body: 18px;
  --leading-body: 1.3;
  --text-subheading: 23px;
  --leading-subheading: 1.2;
  --text-heading: 31px;
  --leading-heading: 1.1;
  --text-display: 71px;
  --leading-display: 1;
  --spacing-13: 13px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-45: 45px;
  --spacing-83: 83px;
  --spacing-130: 130px;
  --radius-default: 0px;
  --radius-circular: 9999px;
}
```

### Tailwind v4

```css
@theme {
  --color-absolute-zero: #000000;
  --color-paper-white: #ffffff;
  --color-fog-gray: #eaeaea;
  --color-steel-gray: #878787;
  --color-carbon: #1e1e1e;
  --color-neon-green: #00ff00;
  --font-neue-haas-grotesk: 'Neue Haas Grotesk', Inter;
  --font-times: 'Times', Times New Roman;
  --text-caption: 13px;
  --leading-caption: 1.2;
  --text-body: 18px;
  --leading-body: 1.3;
  --text-subheading: 23px;
  --leading-subheading: 1.2;
  --text-heading: 31px;
  --leading-heading: 1.1;
  --text-display: 71px;
  --leading-display: 1;
  --spacing-13: 13px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-45: 45px;
  --spacing-83: 83px;
  --spacing-130: 130px;
  --radius-default: 0px;
  --radius-circular: 9999px;
}
```
