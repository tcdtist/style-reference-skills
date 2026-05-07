---
version: alpha
name: "Eindhoven Design District"
description: "Eindhoven Design District presents a high-contrast rectilinear system, built on stark black and white with an almost entire absence of grays, emphasizing clarity and bold forms. Type is a core visual element, with large, confident headlines often appearing as graphic elements. Imagery is integrated as clean, self-contained rectangles, maintaining the sharp visual rhythm. A playful use of occasional vivid color blocks acts as a punctuation rather than an integral part of the primary interface."
theme: "light"
industry: "design"
source_url: "https://www.eindhovendesigndistrict.com"
refero_style_id: "c90b584e-de5b-4971-9e13-8ab991bd96c0"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512227300-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512227300-thumb.jpg"
extracted_at: "2026-04-30T01:24:12.637Z"
---

# Eindhoven Design District — Style Reference

> Graphic Modernist Poster

**Theme:** light

**Industry:** design

Eindhoven Design District presents a high-contrast rectilinear system, built on stark black and white with an almost entire absence of grays, emphasizing clarity and bold forms. Type is a core visual element, with large, confident headlines often appearing as graphic elements. Imagery is integrated as clean, self-contained rectangles, maintaining the sharp visual rhythm. A playful use of occasional vivid color blocks acts as a punctuation rather than an integral part of the primary interface.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button backgrounds, and general UI where lightness is needed |
| Ink Black | #000000 | `--color-ink-black` | Primary text, borders, icons, and as a stark background for hero sections or prominent display areas, creating high contrast against Canvas White |
| Ash Gray | #e8e8e8 | `--color-ash-gray` | Secondary card surfaces, offering a subtle visual break from pure white |
| Silver Thread | #bfbfbf | `--color-silver-thread` | Fine lines, subtle borders, and less prominent text elements |
| Focus Red | #ff0000 | `--color-focus-red` | Content emphasis, such as article headings and decorative accents |
| Blush Pink | #ffc2eb | `--color-blush-pink` | Decorative background blocks for featured sections, adding a soft, yet vivid, accent |
| Electric Blue | #0f26ed | `--color-electric-blue` | Decorative background blocks, providing a vibrant, high-energy counterpoint |

## Tokens — Typography

### Helvetica Now

- **Token:** `--font-helvetica-now`
- **Substitute:** Inter
- **Weights:** 400, 600
- **Sizes:** 14px, 16px, 18px, 19px, 23px, 35px, 46px, 50px
- **Line heights:** 0.93, 1.00, 1.15, 1.20, 1.31, 1.40, 1.47
- **Letter spacing:** -0.05em at 50px, -0.03em at 46px, -0.024em at 35px, -0.02em at 23px, -0.017em at 19px, -0.004em at 18px, 0.005em at 16px, 0.015em at 14px
- **Role:** The sole typeface, Helvetica Now, dictates the entire typographic voice. Its use at extreme sizes and with tight letter-spacing for headings creates a bold, almost architectural feel, making type itself a key visual component of the layout. For body text, its legibility supports a functional, direct communication style.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.47 | 0.15px | `--text-caption` |
| body | 16px | 1.4 | 0.005px | `--text-body` |
| subheading | 18px | 1.31 | -0.004px | `--text-subheading` |
| heading | 23px | 1.15 | -0.02px | `--text-heading` |
| heading-lg | 35px | 1 | -0.024px | `--text-heading-lg` |
| display | 46px | 0.93 | -0.03px | `--text-display` |
| display-lg | 50px | 0.93 | -0.05px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-187 | 187px | `--spacing-187` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| buttons | 500px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 35px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Ghost Button

**Role:** Navigation, secondary actions, and inline links.

Minimalist buttons with no background, Ink Black text, and a 1px Ink Black border, using 500px radius for a pill shape. Padding is compact: 1px vertical, 15px horizontal. The focus is on the border and text, emphasizing clickable areas without visual weight.

### Primary Action Button

**Role:** Key interactions and calls to action.

Filled buttons with Canvas White background, Ink Black text, and a 1px Ink Black border. Features generous padding (18px top, 21px bottom, 35px horizontal) and a 500px radius for a bold, approachable pill shape, conveying an important, but not aggressive, action.

### Icon Button

**Role:** Standalone interactive icons, such as menu toggles or search.

Circular buttons with a Canvas White background and a 1px Ink Black border, using a 100% border-radius. No internal padding, designed to enclose a single icon, maintaining a clean, compact footprint typical of utility actions.

### Plain Link Button

**Role:** Text-based actions that blend seamlessly with content.

Simple text links with no background, border, or radius. The Ink Black text identifies it as an actionable element within sentences or lists, providing a low-hierarchy interactive element.

### Article Card

**Role:** Displaying content previews in grid layouts.

Cards with a transparent background and no borders or shadow, defining content regions purely by image and typography. Text is Ink Black.

### Gray Background Card

**Role:** Highlighting distinct content blocks within a section.

Cards with an Ash Gray background, no borders or shadows. These cards provide a subtle elevation for content, making them stand out against the main Canvas White background without introducing strong visual separation.

## Do's and Don'ts

### Do

- Use Ink Black (#000000) for all primary text and Canvas White (#ffffff) for all main backgrounds to achieve maximum contrast.
- Apply a 500px border-radius to all interactive buttons and tags for a consistent pill-shaped aesthetic.
- Reinforce design elements with 1px Ink Black (#000000) borders for definition, maintaining a very clean and sharp edge.
- Employ Helvetica Now as the sole typeface, varying weight and size to establish typographic hierarchy rather than introducing additional fonts.
- Utilize large display typography with tight letter-spacing (-0.05em at 50px, -0.03em at 46px) as a prominent graphic component in hero sections and headlines.
- Implement a spacious `elementGap` of 20px and a `sectionGap` of 35px to create ample negative space and visual breathing room between UI elements and content blocks.
- Integrate photographic imagery as contained rectangles with 0px border-radius, maintaining the overall rectilinear and stark aesthetic.

### Don't

- Do not introduce mid-tone gray backgrounds or text colors beyond Ash Gray (#e8e8e8) or Silver Thread (#bfbfbf), as the system relies on stark black and white contrast.
- Avoid using drop shadows or complex elevation styles; the design emphasizes flat surfaces and clear planar separation.
- Do not deviate from the Helvetica Now typeface; its specific character and variable weights are central to the brand's typographic identity.
- Refrain from using gradients for backgrounds, text, or UI elements; the system prioritizes solid color blocks.
- Do not apply rounded corners to images or cards; maintain the strict rectilinear forms defined by '0px' border-radius.
- Avoid excessive use of vivid chromatic colors; they are reserved for controlled, decorative blocks and specific content emphasis, not general UI components.
- Do not use generic font icons or heavily stylized icons; prefer simple, monochrome, possibly outlined icons that maintain the graphical integrity.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas White | #ffffff | Primary page background and default card background. |
| 2 | Ash Gray | #e8e8e8 | Secondary background for distinct content sections and cards, providing subtle visual separation. |

## Imagery

This system primarily uses high-contrast photography, often featuring architectural details, urban landscapes, or candid people shots. Images are treated as clean, unmasked rectangular blocks, integrated directly into the layout without rounded corners or complex treatments. There are no illustrations or 3D renders; the visual language is grounded in photography. Icons are minimal, outlined, and monochromatic (Ink Black), serving purely functional roles.

## Layout

The page maintains a crisp, high-contrast layout, primarily favoring a max-width, center-aligned container for content, though the hero section breaks this to full-bleed. The hero often employs large, graphic typography interacting with contained rectangular images. Content sections have a consistent vertical rhythm (35px sectionGap) and use alternating single-column centered text blocks, 2-column text+image arrangements, and 3-column card grids for features and articles. The navigation is a minimalist top bar with utility icons and a hamburger menu.

## Similar Brands

- **Architectural Digests** — Dominant use of bold, opinionated typography as a core design element, often interacting with rectified photography.
- **Monotype** — Emphasis on typographic craftsmanship, high contrast, and a clean, modernist aesthetic in marketing materials.
- **Bauhaus Archive** — Stark black and white color palette, geometric forms, and a focus on essential functionality over decorative elements.
- **Strelka Institute** — Graphic and editorial layouts with large, impactful type and prominent use of negative space.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-ash-gray: #e8e8e8;
  --color-silver-thread: #bfbfbf;
  --color-focus-red: #ff0000;
  --color-blush-pink: #ffc2eb;
  --color-electric-blue: #0f26ed;
  --font-helvetica-now: 'Helvetica Now', Inter;
  --text-caption: 14px;
  --leading-caption: 1.47;
  --tracking-caption: 0.15px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: 0.005px;
  --text-subheading: 18px;
  --leading-subheading: 1.31;
  --tracking-subheading: -0.004px;
  --text-heading: 23px;
  --leading-heading: 1.15;
  --tracking-heading: -0.02px;
  --text-heading-lg: 35px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.024px;
  --text-display: 46px;
  --leading-display: 0.93;
  --tracking-display: -0.03px;
  --text-display-lg: 50px;
  --leading-display-lg: 0.93;
  --tracking-display-lg: -0.05px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-25: 25px;
  --spacing-27: 27px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-100: 100px;
  --spacing-187: 187px;
  --radius-cards: 0px;
  --radius-buttons: 500px;
  --surface-canvas-white: #ffffff;
  --surface-ash-gray: #e8e8e8;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-ash-gray: #e8e8e8;
  --color-silver-thread: #bfbfbf;
  --color-focus-red: #ff0000;
  --color-blush-pink: #ffc2eb;
  --color-electric-blue: #0f26ed;
  --font-helvetica-now: 'Helvetica Now', Inter;
  --text-caption: 14px;
  --leading-caption: 1.47;
  --tracking-caption: 0.15px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: 0.005px;
  --text-subheading: 18px;
  --leading-subheading: 1.31;
  --tracking-subheading: -0.004px;
  --text-heading: 23px;
  --leading-heading: 1.15;
  --tracking-heading: -0.02px;
  --text-heading-lg: 35px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.024px;
  --text-display: 46px;
  --leading-display: 0.93;
  --tracking-display: -0.03px;
  --text-display-lg: 50px;
  --leading-display-lg: 0.93;
  --tracking-display-lg: -0.05px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-25: 25px;
  --spacing-27: 27px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-100: 100px;
  --spacing-187: 187px;
  --radius-cards: 0px;
  --radius-buttons: 500px;
  --surface-canvas-white: #ffffff;
  --surface-ash-gray: #e8e8e8;
}
```
