---
version: alpha
name: "alet"
description: "ALET utilizes a muted, gallery-like aesthetic, offering an understated backdrop for its creative work. The design minimizes visual distractions, employing a monochrome palette dominated by dark text on a warm, desaturated canvas. Typography carries the primary visual weight, with elegant serifs for headlines and crisp sans-serifs for functional text, achieving a sophisticated yet grounded presentation. Interactive elements are subtle, blending into the background until hovered, emphasizing content over chrome."
theme: "light"
industry: "agency"
source_url: "https://aletagency.com"
refero_style_id: "9b5203a8-07c8-4987-94c5-6411970896d2"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512890720-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512890720-thumb.jpg"
extracted_at: "2026-04-30T01:35:07.963Z"
---

# alet — Style Reference

> Warm clay gallery

**Theme:** light

**Industry:** agency

ALET utilizes a muted, gallery-like aesthetic, offering an understated backdrop for its creative work. The design minimizes visual distractions, employing a monochrome palette dominated by dark text on a warm, desaturated canvas. Typography carries the primary visual weight, with elegant serifs for headlines and crisp sans-serifs for functional text, achieving a sophisticated yet grounded presentation. Interactive elements are subtle, blending into the background until hovered, emphasizing content over chrome.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Clay | #ada59b | `--color-canvas-clay` | Muted UI surface for disabled controls, low-emphasis panels, and placeholder blocks. Do not promote it to the primary CTA color |
| Inkwell | #000000 | `--color-inkwell` | Primary text across all elements, icon color, strong borders for embedded content |
| Charcoal Grey | #252525 | `--color-charcoal-grey` | Navigation text, subheadings, and soft borders |
| Deep Shadow | #060506 | `--color-deep-shadow` | Decorative strokes and subtle visual accents. Almost indistinguishable from primary text but used for lighter effect |
| Ash Secondary | #101010 | `--color-ash-secondary` | Secondary text for categories and descriptive labels |
| Muted Stone | #454545 | `--color-muted-stone` | Subtle background for UI elements, very light borders, used sparingly |

## Tokens — Typography

### Work Sans

- **Token:** `--font-work-sans`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 11px, 12px, 13px
- **Line heights:** 1.00, 1.10, 1.50
- **Role:** Navigation, body text, image labels, and all functional interface elements. Its neutrality allows the serif to stand out.

### Silk Serif

- **Token:** `--font-silk-serif`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 23px
- **Line heights:** 0.94
- **Role:** Primary headings and large display text. The delicate light weight creates a sense of gravitas and refined presence.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.1 | — | `--text-caption` |
| body-sm | 12px | 1.1 | — | `--text-body-sm` |
| body | 13px | 1.1 | — | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-101 | 101px | `--spacing-101` |
| spacing-180 | 180px | `--spacing-180` |
| spacing-209 | 209px | `--spacing-209` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 10.8px |
| buttons | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 101px |
| cardPadding | 22px |
| elementGap | 5px |

## Components

### Navigation Link

**Role:** Interactive text link in the header and footer.

Work Sans, Weight 400, size 13px, 'Charcoal Grey' #252525. Active/hover states subtle, often indicated by an 'Inkwell' #000000 border.

### Category Label

**Role:** Descriptive text for content categories.

Work Sans, Weight 400, size 13px, 'Ash Secondary' #101010, positioned below headings.

### Main Heading

**Role:** Large, eye-catching title for sections or hero content.

Silk Serif, Weight 400, size 23px, Line Height 0.94, 'Inkwell' #000000. Features a tight letter-spacing that is inherent to the font choice.

### Gallery Item Card

**Role:** Display unit for portfolio pieces.

Background is often the base 'Canvas Clay' #ada59b. Contains an 'Inkwell' #000000 border or text, varying content. Corner radius 10.8px.

### Linear/Random Toggle

**Role:** Interactive element for content sorting.

Small pill-shaped container with Work Sans 400, 11px text. Border of 1px 'Inkwell' #000000, 9999px radius. Background is transparent or 'Canvas Clay' #ada59b.

## Do's and Don'ts

### Do

- Use 'Canvas Clay' #ada59b as the primary background for all page sections and major UI elements.
- Apply 'Inkwell' #000000 for all primary text, ensuring a high contrast against the background.
- Employ Silk Serif Light 400 at 23px with 0.94 line height for all prominent headings to maintain a refined tone.
- Utilize Work Sans 400 at sizes 11px, 12px, or 13px with their respective line heights for all body text, navigation, and functional labels.
- Apply a 10.8px border-radius to all card-like containers, establishing a soft corner aesthetic.
- Use a minimum of 101px vertical spacing between major page sections to ensure a comfortable density.
- Outline interactive elements like buttons and toggles with a 1px 'Inkwell' #000000 border and a 9999px radius for a subtle, rounded pill shape.

### Don't

- Avoid introducing vibrant colors; all UI elements must adhere to the defined monochrome palette of warm grays and off-whites.
- Do not use heavy shadows or gradients; flat surfaces and subtle borders define the visual hierarchy.
- Refrain from using bold or heavy weights for any typeface; lightness and delicate forms are key to the brand's aesthetic.
- Do not deviate from the specified typefaces; custom Work Sans and Silk Serif are integral to the brand identity.
- Avoid dense, overcrowded layouts; prioritize ample whitespace and comfortable spacing values like sectionGap 101px and elementGap 5px.
- Do not use generic system fonts; 'Work Sans' and 'Silk Serif' are deliberate choices.
- Introduce no rounded corners sharper than 10.8px for cards, nor less than 9999px for buttons, to maintain consistency.

## Imagery

This design system uses a combination of curated, high-quality photography and minimalist graphical elements. Photography is central, featuring interiors, product shots, and abstract compositions, often with muted color palettes that blend with the site's overall tone. Images frequently appear as contained blocks within the layout, sometimes overlapping or featuring a slight rotation. Iconography is minimal, primarily text-based or simple, fine-line outlined styles, complementing the lightweight typography. Imagery serves both decorative atmosphere and to showcase content, and the density is balanced, allowing text to breathe alongside visuals.

## Layout

The page structure is full-bleed, with content dynamically displayed across the viewport without a fixed max-width container, creating an immersive experience. The hero area is atypical, consisting of horizontally scrolling image cards and text, inviting exploration. Sections flow seamlessly with consistent vertical spacing, leveraging a natural, relaxed rhythm. Text and content blocks lean towards centered compositions or appear within the flow of the image carousel. Navigation is a minimalist top bar, almost blending into the background, providing essential links without drawing undue attention.

## Similar Brands

- **B&B Italia** — Shares a sophisticated, minimal aesthetic with high-quality imagery and understated typography on muted backgrounds.
- **Frama** — Exhibits a similar focus on natural, desaturated color palettes, functional typography, and a strong sense of spaciousness.
- **Aesop** — Utilizes a calm, academic typographic style paired with a limited, earthy color palette and clean, sparse layouts.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-clay: #ada59b;
  --color-inkwell: #000000;
  --color-charcoal-grey: #252525;
  --color-deep-shadow: #060506;
  --color-ash-secondary: #101010;
  --color-muted-stone: #454545;
  --font-work-sans: 'Work Sans', system-ui;
  --font-silk-serif: 'Silk Serif', serif;
  --text-caption: 11px;
  --leading-caption: 1.1;
  --text-body-sm: 12px;
  --leading-body-sm: 1.1;
  --text-body: 13px;
  --leading-body: 1.1;
  --spacing-5: 5px;
  --spacing-11: 11px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-36: 36px;
  --spacing-101: 101px;
  --spacing-180: 180px;
  --spacing-209: 209px;
  --radius-cards: 10.8px;
  --radius-buttons: 9999px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-clay: #ada59b;
  --color-inkwell: #000000;
  --color-charcoal-grey: #252525;
  --color-deep-shadow: #060506;
  --color-ash-secondary: #101010;
  --color-muted-stone: #454545;
  --font-work-sans: 'Work Sans', system-ui;
  --font-silk-serif: 'Silk Serif', serif;
  --text-caption: 11px;
  --leading-caption: 1.1;
  --text-body-sm: 12px;
  --leading-body-sm: 1.1;
  --text-body: 13px;
  --leading-body: 1.1;
  --spacing-5: 5px;
  --spacing-11: 11px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-36: 36px;
  --spacing-101: 101px;
  --spacing-180: 180px;
  --spacing-209: 209px;
  --radius-cards: 10.8px;
  --radius-buttons: 9999px;
}
```
