---
version: alpha
name: "Ingmar Coenen"
description: "Ingmar Coenen's portfolio employs a stark, high-contrast aesthetic, built on a foundation of black and white with minimal chromatic interference. Typography plays a central role, featuring a custom, oversized display font that acts as a primary graphic element. Components are lightweight and interaction-focused, defined by crisp borders and extensive border-radius. The system favors a dense information hierarchy over spaciousness, utilizing tight spacing and a predominantly neutral palette to emphasize content and precise interaction points."
theme: "light"
industry: "design"
source_url: "https://ingmarcoenen.com"
refero_style_id: "f8c92b6b-a3a7-4141-ae61-3d865a106761"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515531565-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515531565-thumb.jpg"
extracted_at: "2026-04-30T02:19:20.074Z"
---

# Ingmar Coenen — Style Reference

> monochrome typographic canvas

**Theme:** light

**Industry:** design

Ingmar Coenen's portfolio employs a stark, high-contrast aesthetic, built on a foundation of black and white with minimal chromatic interference. Typography plays a central role, featuring a custom, oversized display font that acts as a primary graphic element. Components are lightweight and interaction-focused, defined by crisp borders and extensive border-radius. The system favors a dense information hierarchy over spaciousness, utilizing tight spacing and a predominantly neutral palette to emphasize content and precise interaction points.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, elevated card surfaces, button backgrounds in ghost state |
| Ink Black | #000000 | `--color-ink-black` | Primary text, major headlines, default button backgrounds, strong borders — acts as the dominant dark element against white |
| Subtle Gray | #f2f2f2 | `--color-subtle-gray` | Secondary button backgrounds, subtle surface delineation |
| Dark Charcoal | #3a4042 | `--color-dark-charcoal` | Muted body text, borders for secondary elements, fills for less prominent icons |
| Medium Gray | #919191 | `--color-medium-gray` | Helper text, subtle borders |
| Light Gray | #cccccc | `--color-light-gray` | Fine borders, tertiary text |

## Tokens — Typography

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** Helvetica Neue
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Utility text, navigation items, and button labels — ensures legibility for functional UI elements when custom fonts aren't used.

### Megazoid Regular

- **Token:** `--font-megazoid-regular`
- **Substitute:** Anton
- **Weights:** 400
- **Sizes:** 295px
- **Line heights:** 0.90
- **Letter spacing:** normal
- **Role:** Over-sized display headlines — this font is treated as a graphic element and main brand identifier. Its scale and unique shape define the visual personality.

### ITC Garamond Std Light Condensed

- **Token:** `--font-itc-garamond-std-light-condensed`
- **Substitute:** Garamond Light Condensed
- **Weights:** 400
- **Sizes:** 36px
- **Line heights:** 0.94
- **Letter spacing:** normal
- **Role:** Secondary large headlines and key statements — offers a distinct contrast to the Megazoid, providing a traditional yet condensed voice for significant textual content.

### Neue Haas Unica Pro Medium

- **Token:** `--font-neue-haas-unica-pro-medium`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 12px, 13px
- **Line heights:** 1.10
- **Letter spacing:** -0.02
- **Role:** Primary body text and links — its compactness and slightly reduced letter-spacing keep text efficient and integrated within the tight layouts.

### Megazoid Fill

- **Token:** `--font-megazoid-fill`
- **Weights:** 400
- **Sizes:** 295px
- **Line heights:** 0.9
- **Role:** Megazoid Fill — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.1 | -0.02px | `--text-caption` |
| subheading | 36px | 0.94 | 0px | `--text-subheading` |
| display | 295px | 0.9 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-320 | 320px | `--spacing-320` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| links | 4px |
| buttons | 100px |
| general | 12px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 80px |
| cardPadding | 14px |
| elementGap | 10px |

## Components

### Pill Navigation Button

**Role:** Primary navigation links and interactive controls.

Background: Subtle Gray (#f2f2f2), Text: Ink Black (#000000). Padding: 9px top, 14px right, 0px bottom, 20px left. Border Radius: 100px for a distinct pill shape.

### Ghost Navigation Button

**Role:** Secondary navigation links and interactive controls, visually less prominent than filled buttons.

Background: Canvas White (transparent), Text: Ink Black (#000000). Border: 1px Ink Black (#000000). Padding: 9px top, 14px right, 0px bottom, 20px left. Border Radius: 100px.

### Start Project Button

**Role:** Prominent call to action, visually contrasting with other buttons.

Background: Ink Black (#000000), Text: Canvas White (#ffffff). Padding: 9px top, 14px right, 0px bottom, 14px left. Border Radius: 100px.

### Text Link Button

**Role:** Minimal interactive elements with a default browser link style.

Background: Canvas White (#ffffff), Text: Ink Black (#000000). Padding: 9px top, 14px right, 0px bottom, 14px left. Border Radius: 100px.

### Portfolio Grid Item

**Role:** Card-like containers for portfolio pieces.

Background: typically Canvas White (#ffffff). Border radius: 12px. No visible border or shadow, relying on spacing for separation.

## Do's and Don'ts

### Do

- Prioritize Ink Black (#000000) for all primary text and dominant graphic elements to maintain high contrast.
- Utilize Canvas White (#ffffff) for all main backgrounds and content surfaces to establish an expansive feel.
- Apply 100px border radius to all buttons for a consistent pill-shaped aesthetic.
- Use Megazoid Regular at 295px size as a graphic display element for prominent page titles, not for standard headlines.
- Maintain a compact elementGap of 10px between interactive elements and textual content.
- Employ Neue Haas Unica Pro Medium at its specified line height and letter spacing for all functional body text and links.
- Use Subtle Gray (#f2f2f2) sparingly for secondary button fills to provide a softer interactive alternative to Ink Black.

### Don't

- Avoid using chromatic colors for functional UI elements; reserve them strictly for content imagery or specific brand assets if any.
- Do not deviate from the high-contrast black and white palette for core UI elements; color is not used for primary hierarchy.
- Do not introduce shadows or significant elevation; the design relies on flat surfaces and clean borders for depth perception.
- Avoid excessive line spacing for body text; aim for the tight 1.1 line height specified for Neue Haas Unica Pro Medium.
- Do not use generic sans-serif fonts where custom fonts are specified; font uniqueness is a core brand identifier.
- Do not add extra padding around cards or sections beyond the defined cardPadding of 14px and sectionGap of 80px, as density is valued over whitespace.

## Imagery

This site predominantly uses embedded product shots and specialized graphic treatments rather than conventional photography or illustrations. Images appear contained, often with rounded corners (12px radius), acting as content within the stark UI. There's also dynamic, text-based visual imagery like the circular 'Haven-1' graphic, which fuses typography with abstract motion, indicating a deliberate integration of text as visual art. Iconography is minimal, primarily functional arrows associated with navigation, appearing outlined or filled in black and white.

## Layout

The page maintains a full-width, full-bleed canvas, with content often centered but not rigidly constrained by a max-width container, allowing for expansive typographic treatments like the 'INGMAR' header. The hero section is characterized by large, visually consuming typography that functions as a branding element, accompanied by a concise right-aligned bio. Sections flow seamlessly without distinct visual dividers, relying on shifts in content type or large typographic elements to delineate areas. Content arrangement often features a primary text block or graphic element interacting with a secondary one, sometimes with alternating left/right positioning. Navigation is a minimalist top bar with ghost and pill-shaped buttons, complemented by a persistent 'Start a project' button on the right and a bottom-left 'Grid/List' toggle.

## Similar Brands

- **Bruno Porto** — Monochromatic palette, large experimental typography as a core graphic element, minimalist navigation.
- **Active Theory** — Heavy reliance on custom, bold display typography on a stark background, compact interactive elements.
- **Build in Amsterdam** — Focus on high-contrast black and white, oversized type, and clean, unadorned surfaces for portfolio presentation.
- **Alinea Invest** — Striking use of large, custom typography as central visual components, paired with a minimalist color scheme and functional UI.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-subtle-gray: #f2f2f2;
  --color-dark-charcoal: #3a4042;
  --color-medium-gray: #919191;
  --color-light-gray: #cccccc;
  --font-sans-serif: 'sans-serif', Helvetica Neue;
  --font-megazoid-regular: 'Megazoid Regular', Anton;
  --font-itc-garamond-std-light-condensed: 'ITC Garamond Std Light Condensed', Garamond Light Condensed;
  --font-neue-haas-unica-pro-medium: 'Neue Haas Unica Pro Medium', Inter;
  --font-megazoid-fill: 'Megazoid Fill', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.1;
  --tracking-caption: -0.02px;
  --text-subheading: 36px;
  --leading-subheading: 0.94;
  --tracking-subheading: 0px;
  --text-display: 295px;
  --leading-display: 0.9;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-320: 320px;
  --radius-cards: 12px;
  --radius-links: 4px;
  --radius-buttons: 100px;
  --radius-general: 12px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-subtle-gray: #f2f2f2;
  --color-dark-charcoal: #3a4042;
  --color-medium-gray: #919191;
  --color-light-gray: #cccccc;
  --font-sans-serif: 'sans-serif', Helvetica Neue;
  --font-megazoid-regular: 'Megazoid Regular', Anton;
  --font-itc-garamond-std-light-condensed: 'ITC Garamond Std Light Condensed', Garamond Light Condensed;
  --font-neue-haas-unica-pro-medium: 'Neue Haas Unica Pro Medium', Inter;
  --font-megazoid-fill: 'Megazoid Fill', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.1;
  --tracking-caption: -0.02px;
  --text-subheading: 36px;
  --leading-subheading: 0.94;
  --tracking-subheading: 0px;
  --text-display: 295px;
  --leading-display: 0.9;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-320: 320px;
  --radius-cards: 12px;
  --radius-links: 4px;
  --radius-buttons: 100px;
  --radius-general: 12px;
}
```
