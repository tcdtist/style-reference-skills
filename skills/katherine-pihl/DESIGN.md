---
version: alpha
name: "Katherine Pihl"
description: "Katherine Pihl uses a refined, architectural blueprint aesthetic with stark monochrome surfaces and precise typographic hierarchy. The design emphasizes content through minimalist presentation, relying on compact text, subtle hover states, and clear segmentation. Projects are presented as visual modules on a uniform dark background, using imagery as the primary accent. The overall impression is one of meticulous craft and sophisticated restraint."
theme: "dark"
industry: "design"
source_url: "https://katherinepihl.com"
refero_style_id: "a6b2d6dc-7d71-4d2d-af3e-b34a8b665744"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517465900-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517465900-thumb.jpg"
extracted_at: "2026-04-30T02:51:26.681Z"
---

# Katherine Pihl — Style Reference

> Architectural Blueprint on Carbon

**Theme:** dark

**Industry:** design

Katherine Pihl uses a refined, architectural blueprint aesthetic with stark monochrome surfaces and precise typographic hierarchy. The design emphasizes content through minimalist presentation, relying on compact text, subtle hover states, and clear segmentation. Projects are presented as visual modules on a uniform dark background, using imagery as the primary accent. The overall impression is one of meticulous craft and sophisticated restraint.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Carbon | #000000 | `--color-midnight-carbon` | Page backgrounds, card backgrounds, primary text, prominent borders, focus indicators. This deep black provides a neutral and stark canvas allowing project thumbnails and typography to stand out clearly |
| Graphite Filter | #999999 | `--color-graphite-filter` | Muted secondary text, descriptive labels under project titles. Offers a subtle tonal shift for less prominent information against the dark background |
| Pewter Mist | #b3b3b3 | `--color-pewter-mist` | Subtle ghost border for navigation items, less prominent descriptive text. Slightly lighter than Graphite Filter, used for very subtle distinctions |

## Tokens — Typography

### Neue Montreal

- **Token:** `--font-neue-montreal`
- **Substitute:** Inter
- **Weights:** 300, 400, 500
- **Sizes:** 16px
- **Line heights:** 1.20, 1.50
- **Letter spacing:** 0.32, 1.12
- **Role:** The primary workhorse font. Weight 300 is used sparingly for a light touch, while 400 and 500 maintain legibility across body text, navigation, and detailed information. The tighter letter-spacing for some contexts provides a more compact, modern feel.

### Ryhmes

- **Token:** `--font-ryhmes`
- **Substitute:** Playfair Display
- **Weights:** 300
- **Sizes:** 32px
- **Line heights:** 1.10
- **Letter spacing:** -0.96
- **Role:** Used for distinctive project titles and headings. The light weight (300) combined with negative letter-spacing gives a sophisticated, almost whispered presence, creating a delicate counterpoint to the sans-serif body text.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-40 | 40px | `--spacing-40` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 0px |
| elementGap | 12px |

## Components

### Main Navigation Link

**Role:** Top-level navigation items and secondary links.

Text uses Neue Montreal, 16px, weight 400. Letter spacing is 0.32px. It appears as Midnight Carbon (#000000) against the page background. On hover, a subtle 1px solid Midnight Carbon (#000000) border appears, indicating interactivity without a color change.

### Project Gallery Grid Item

**Role:** Thumbnail container for showcasing individual projects.

Each item is a square module with a 0px border-radius, presenting an image as its primary content. The background is Midnight Carbon (#000000). On hover, it may show a border or text overlay, but the core is a crisp, unpadded visual block.

### Project Title

**Role:** Displaying the name of individual projects within the gallery or on project pages.

Uses Ryhmes, 32px, weight 300, Midnight Carbon (#000000) with a refined letter-spacing of -0.96px, giving a distinctive, elegant feel.

### Project Category/Sub-Text

**Role:** Descriptive text below project titles, indicating category or additional detail.

Uses Neue Montreal, 16px, weight 400. Text color is Graphite Filter (#999999) or Pewter Mist (#b3b3b3), depending on context, providing a clear but subordinate hierarchy to the main title. This text adheres to a loose letter-spacing of 0.32px.

### Footer Links

**Role:** Contact information or secondary navigation in the footer.

Rendered in Neue Montreal, 16px, weight 400, Midnight Carbon (#000000). Functionally a link, it matches the primary text style, maintaining a unified typographic appearance.

### Filter Tags

**Role:** Categorization labels for filtering content (e.g., 'All', 'Branding', 'Web Design').

Uses Neue Montreal, 16px, weight 400, in Midnight Carbon (#000000). When inactive, it may appear as a Graphite Filter (#999999). Interaction is handled by a 1px solid Midnight Carbon (#000000) border-bottom appearing on hover or active states, no background fill.

## Do's and Don'ts

### Do

- Use Midnight Carbon (#000000) as the foundational background color for all pages and components.
- Apply Ryhmes, weight 300, 32px with -0.96px letter-spacing for all primary headings and project titles.
- Utilize Neue Montreal, 16px, weight 400 for all body text, navigation elements, and descriptive labels, adjusting color between Midnight Carbon, Graphite Filter, and Pewter Mist for hierarchy.
- Maintain a precise 0px border-radius for all image containers and content modules, emphasizing sharpness and structured presentation.
- Employ 1px solid Midnight Carbon (#000000) borders for interactive elements like navigation links on hover or focus states, avoiding background fills where possible.
- Keep ample vertical spacing between sections, using a sectionGap of 40px to delineate content blocks clearly.

### Don't

- Do not introduce soft shadows or excessive elevation; the aesthetic relies on flat surfaces and sharp edges.
- Avoid using saturated accent colors for functional UI elements; color should primarily reside within project imagery.
- Do not use generic button styles with filled backgrounds; interactive elements should primarily be text links with subtle borders or ghost styles.
- Do not vary global border-radius; all corners should be sharp and angular (0px).
- Avoid decorative gradients for backgrounds or surfaces; the system favors solid, monochromatic fields.
- Do not use letter-spacing wider than 0.32px; the typography is designed for a compact, controlled appearance.

## Imagery

The site prominently features product photography and full-bleed image content as the primary visual display for projects. Photography is high-resolution, often with tight crops focusing on product details or contextual atmosphere. Some images include UI mockups or abstract graphics. Imagery is typically self-contained within sharp, unrounded modules, with no overlapping elements. The role of imagery is to showcase product output and provide atmospheric context, acting as the main visual 'color' against the monochromatic UI.

## Layout

The page uses a full-bleed layout, particularly for the header and main content grid, with elements like the header extending edge-to-edge. The hero section is minimal, featuring the brand name and contact link. The main content area presents projects in a symmetrical, tight grid pattern (likely 3-column), where each project module is a uniform square. Vertical rhythm is maintained through consistent spacing between the project grid and other sections. Navigation is a simple top-right text link. The layout is content-focused and highly structured, relying on the visual strength of the image modules.

## Similar Brands

- **Huge Inc.** — Similar dark, minimalist aesthetic with a focus on project presentation through large, unadorned image modules and refined typography.
- **Basic (Design Agency)** — Shared use of stark monochrome backgrounds, a structured grid for case studies, and a focus on high-quality visual content rather than heavy UI elements.
- **AIGA (American Institute of Graphic Arts)** — Similar emphasis on clean typography, strong grid layouts, and showcasing visual work in a highly structured, gallery-like format.
- **Area 17** — Aligns with a clean, editorial layout, prominent use of imagery in grid formats for portfolio display, and a subdued, sophisticated color palette.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-carbon: #000000;
  --color-graphite-filter: #999999;
  --color-pewter-mist: #b3b3b3;
  --font-neue-montreal: 'Neue Montreal', Inter;
  --font-ryhmes: 'Ryhmes', Playfair Display;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-carbon: #000000;
  --color-graphite-filter: #999999;
  --color-pewter-mist: #b3b3b3;
  --font-neue-montreal: 'Neue Montreal', Inter;
  --font-ryhmes: 'Ryhmes', Playfair Display;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --radius-none: 0px;
}
```
