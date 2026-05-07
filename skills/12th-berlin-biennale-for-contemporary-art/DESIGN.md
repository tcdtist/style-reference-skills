---
version: alpha
name: "12th Berlin Biennale for Contemporary Art"
description: "The 12th Berlin Biennale design system evokes an underground gallery experience: stark black and white punctuated by a vivid violet and subtle muted violet. Typography is compact and precise, often with tight letter-spacing, contrasting against large, bold elements or ample negative space. Components are lightweight with minimal elevation, focusing on clear functionality through high-contrast text against clean surfaces. The interface relies on hard edges and distinct blocks of color for rhythm, avoiding gradients or complex shadows."
theme: "light"
industry: "design"
source_url: "https://12.berlinbiennale.de"
refero_style_id: "1c2d4a33-7ee4-4b61-a77e-dab91631d19b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516784417-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516784417-thumb.jpg"
extracted_at: "2026-04-30T02:40:05.012Z"
---

# 12th Berlin Biennale for Contemporary Art — Style Reference

> Underground gallery, high contrast, stark violet punctuation

**Theme:** light

**Industry:** design

The 12th Berlin Biennale design system evokes an underground gallery experience: stark black and white punctuated by a vivid violet and subtle muted violet. Typography is compact and precise, often with tight letter-spacing, contrasting against large, bold elements or ample negative space. Components are lightweight with minimal elevation, focusing on clear functionality through high-contrast text against clean surfaces. The interface relies on hard edges and distinct blocks of color for rhythm, avoiding gradients or complex shadows.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight | #000000 | `--color-midnight` | Primary text, surface backgrounds, borders, navigation elements. Creates dominant dark areas and strong contrast |
| Canvas | #ffffff | `--color-canvas` | Page backgrounds, card surfaces, interactive accent text. Provides a clean, bright backdrop |
| Fog | #f2f2f2 | `--color-fog` | Subtle background for interactive list items and secondary buttons. Creates a gentle visual separation without stark contrast |
| Ash | #e7e7e7 | `--color-ash` | Background for navigation items. A slightly darker variant of fog for subtle layering |
| Vivid Violet | #7373ff | `--color-vivid-violet` | Primary interactive element borders (links, buttons, cards), secondary text, and accents. This color is the main chromatic identifier and action indicator |
| Muted Violet | #23234d | `--color-muted-violet` | Decorative fills and icon accents. A deeper, less saturated brand hue for subtle graphic elements |

## Tokens — Typography

### ABCMonumentGroteskWeb

- **Token:** `--font-abcmonumentgroteskweb`
- **Substitute:** Arial, Helvetica, sans-serif
- **Weights:** 400, 700
- **Sizes:** 12px, 14px, 16px, 17px, 19px, 20px, 22px, 25px, 29px, 32px
- **Line heights:** 1.02, 1.03, 1.15, 1.20, 2.00, 2.40
- **Letter spacing:** -0.0100em at larger sizes (e.g. 29px-32px), 0.0100em at 12px, -0.0040em at other sizes
- **Role:** Primary typeface for all UI elements, body text, and most headings. Its precise, contemporary feel supports the minimal aesthetic with tight tracking for a dense, architectural look.

### BradfordLLSub

- **Token:** `--font-bradfordllsub`
- **Substitute:** Georgia, serif
- **Weights:** 400
- **Sizes:** 20px, 23px, 30px
- **Line heights:** 1.03, 1.15
- **Letter spacing:** -0.0100em
- **Role:** Used sparingly for stylistic accents in headings and input fields. Its subtly tracked, serif quality provides a refined contrast to the primary sans-serif.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 2.4 | 0.01px | `--text-caption` |
| body-sm | 14px | 2 | -0.004px | `--text-body-sm` |
| heading-sm | 19px | 1.15 | -0.004px | `--text-heading-sm` |
| heading-lg | 22px | 1.03 | -0.004px | `--text-heading-lg` |
| display | 32px | 1.02 | -0.01px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-233 | 233px | `--spacing-233` |
| spacing-316 | 316px | `--spacing-316` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 7px |
| inputs | 7px |
| buttons | 5px |
| default | 3px |
| roundButtons | 44.129px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1069px |
| sectionGap | 32px |
| cardPadding | 12px |
| elementGap | 5px |

## Components

### Primary Filled Button

**Role:** Standard interactive button for general actions.

Background: Canvas (#ffffff), Text: Midnight (#000000), Border: 1px solid Midnight (#000000), Border Radius: 5px, Padding: 6.61935px vertical, 11.0323px horizontal.

### Secondary Pill Button (Outlined)

**Role:** Secondary action or tag component, distinctly rounded.

Background: Midnight (#000000), Text: Vivid Violet (#7373ff), Border: 1px solid Vivid Violet (#7373ff), Border Radius: 44.129px (pill shape), Padding: 5.51613px vertical, 22.0645px horizontal.

### Bare Text Link

**Role:** Stylized text link, often inside a component or list.

No background or border. Text: Midnight (#000000), Padding: 0px vertical, 18.7548px right, 46.8871px left (for specific inline use cases).

### Vivid Violet Text Link

**Role:** Distinguished interactive text link.

No background, Text: Vivid Violet (#7373ff), Border: 1px solid Vivid Violet (#7373ff) for an underlined effect, Border Radius: 0px.

### Default Card

**Role:** Container for content, appearing as a floating panel.

Background: Canvas (#ffffff), Border: No visible border, Box Shadow: None, Border Radius: 7px, Padding: 12px.

### Transparent Card

**Role:** Subtle content container, often for lists within a dark section.

Background: Transparent, Border: No visible border, Box Shadow: None, Border Radius: 7px, Padding: 12px.

### Search Input

**Role:** Interactive text input field.

Background: Canvas (#ffffff), Text: Midnight (#000000), Placeholder: Midnight (#000000) (implied), Border: No visible border (likely just a bottom border from context photos for focus), Border Radius: 6.90968px, Padding: 7.89677px vertical, 9.87097px left, 35.5355px right (for icon area).

### Navigation Item (White BG)

**Role:** Menu items within navigation blocks.

Background: Canvas (#ffffff), Border Radius: 3px, Padding: 3px vertical (top/bottom), 11px horizontal (left/right).

### Navigation Item (Ash BG)

**Role:** Menu items within navigation blocks, slightly differentiated.

Background: Ash (#e7e7e7), Border Radius: 3px, Padding: 3px vertical (top/bottom), 11px horizontal (left/right).

## Do's and Don'ts

### Do

- Always use Midnight (#000000) for primary text on Canvas (#ffffff) backgrounds to ensure AAA contrast.
- Apply Vivid Violet (#7373ff) as the primary accent color for active states, link underlinings, and outlined buttons.
- Maintain a compact typographic density with ABCMonumentGroteskWeb, utilizing tight letter-spacing (-0.0100em for large headings) to create an architectural feel.
- Use a default border-radius of 3px for most interactive elements, transitioning to 5px for primary buttons and 7px for cards and inputs.
- Structure layouts with a maximum content width of 1069px, centered, allowing ample negative space around content blocks.
- Employ Midnight (#000000) and Canvas (#ffffff) as core background colors, with Fog (#f2f2f2) and Ash (#e7e7e7) for subtle background differentiation in lists and navigation.
- Ensure all interactive elements have a clear visual feedback using Vivid Violet (#7373ff) for borders or text, especially for ghost or outlined components.

### Don't

- Avoid complex gradients or multi-color shadows; the design relies on flat colors and minimal elevation.
- Do not introduce new typefaces; adhere strictly to ABCMonumentGroteskWeb and BradfordLLSub.
- Do not use overly large line-heights for body text; aim for compact information presentation.
- Do not deviate from the established radius values; specific radii like 5px for buttons and 7px for cards are part of the brand identity.
- Do not use highly saturated colors other than Vivid Violet (#7373ff) for UI elements; maintain a largely monochromatic palette with a single dominant accent.
- Avoid heavy borders or solid backgrounds on cards; rely on subtle background shifts and corner radii for visual separation.
- Do not use decorative background patterns or textures; surfaces should remain clean and uniform.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas | #ffffff | Dominant page background |
| 1 | Fog | #f2f2f2 | Subtle background for interactive list items and secondary buttons |
| 2 | Ash | #e7e7e7 | Background for navigation items, slightly more prominent than Fog |

## Imagery

This design system eschews photographic imagery, decorative illustrations, or product screenshots in favor of an 'icons-only' approach. The visual language is almost entirely UI-driven, with graphic elements being minimal and abstract geometric shapes, such as the large black '1' and '2' numbers or the map in the screenshots. When present, icons are typically solid filled, monochromatic (Midnight or Muted Violet), and serve a functional rather than decorative role. The density is text-dominant; imagery is used sparingly for navigation or conceptual emphasis, not for content presentation.

## Layout

The page uses a max-width contained layout set at 1069px, with content consistently centered. The hero section is full-bleed and dark (Midnight background) with large, centered headlines and abstract numerical shapes. Sections maintain consistent vertical spacing. Content is largely arranged in compact, text-heavy blocks, often within clearly defined card-like structures. Navigation consists of a top bar that becomes sticky on scroll, and a detailed off-canvas menu or pop-over overlay. The overall rhythm is stark and blocky, emphasizing high contrast and distinct areas of information rather than seamless flow.

## Similar Brands

- **AIGA** — High-contrast, black-and-white dominant palette with a single vibrant accent color (often blue or red) for links and highlights.
- **Bauhaus Dessau** — Minimalist graphic aesthetic, primary color usage for functional elements, and strong sans-serif typography with tight tracking.
- **The Tent** — Emphasis on dark backgrounds, vibrant accent colors for interaction, and a geometric, structured layout.
- **Future Fonts** — Experimental typography, high contrast, and a 'less is more' approach to layout and color.
- **Are.na** — Grid-based layouts, focus on typography and subtle card definitions, and a utilitarian but artistic visual tone.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight: #000000;
  --color-canvas: #ffffff;
  --color-fog: #f2f2f2;
  --color-ash: #e7e7e7;
  --color-vivid-violet: #7373ff;
  --color-muted-violet: #23234d;
  --font-abcmonumentgroteskweb: 'ABCMonumentGroteskWeb', Arial, Helvetica, sans-serif;
  --font-bradfordllsub: 'BradfordLLSub', Georgia, serif;
  --text-caption: 12px;
  --leading-caption: 2.4;
  --tracking-caption: 0.01px;
  --text-body-sm: 14px;
  --leading-body-sm: 2;
  --tracking-body-sm: -0.004px;
  --text-heading-sm: 19px;
  --leading-heading-sm: 1.15;
  --tracking-heading-sm: -0.004px;
  --text-heading-lg: 22px;
  --leading-heading-lg: 1.03;
  --tracking-heading-lg: -0.004px;
  --text-display: 32px;
  --leading-display: 1.02;
  --tracking-display: -0.01px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-233: 233px;
  --spacing-316: 316px;
  --radius-cards: 7px;
  --radius-inputs: 7px;
  --radius-buttons: 5px;
  --radius-default: 3px;
  --radius-roundbuttons: 44.129px;
  --surface-canvas: #ffffff;
  --surface-fog: #f2f2f2;
  --surface-ash: #e7e7e7;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight: #000000;
  --color-canvas: #ffffff;
  --color-fog: #f2f2f2;
  --color-ash: #e7e7e7;
  --color-vivid-violet: #7373ff;
  --color-muted-violet: #23234d;
  --font-abcmonumentgroteskweb: 'ABCMonumentGroteskWeb', Arial, Helvetica, sans-serif;
  --font-bradfordllsub: 'BradfordLLSub', Georgia, serif;
  --text-caption: 12px;
  --leading-caption: 2.4;
  --tracking-caption: 0.01px;
  --text-body-sm: 14px;
  --leading-body-sm: 2;
  --tracking-body-sm: -0.004px;
  --text-heading-sm: 19px;
  --leading-heading-sm: 1.15;
  --tracking-heading-sm: -0.004px;
  --text-heading-lg: 22px;
  --leading-heading-lg: 1.03;
  --tracking-heading-lg: -0.004px;
  --text-display: 32px;
  --leading-display: 1.02;
  --tracking-display: -0.01px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-233: 233px;
  --spacing-316: 316px;
  --radius-cards: 7px;
  --radius-inputs: 7px;
  --radius-buttons: 5px;
  --radius-default: 3px;
  --radius-roundbuttons: 44.129px;
  --surface-canvas: #ffffff;
  --surface-fog: #f2f2f2;
  --surface-ash: #e7e7e7;
}
```
