---
version: alpha
name: "Studio Tumulte"
description: "Studio Tumulte employs a minimal, artistic design language centered around a muted, almost-achromatic palette, punctuated by a single, strong blue accent. The layout is spacious, with content given ample room to breathe. Typography is a core expressive element, featuring custom fonts that lend a distinctive, editorial feel, while components are kept understated and border-focused, allowing content and subtle visual flair to dominate."
theme: "light"
industry: "design"
source_url: "https://studio-tumulte.com"
refero_style_id: "5f72a3c2-7040-4d8c-9882-4d9384822469"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515398401-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515398401-thumb.jpg"
extracted_at: "2026-04-30T02:17:01.910Z"
---

# Studio Tumulte — Style Reference

> Editorial canvas, artful typography

**Theme:** light

**Industry:** design

Studio Tumulte employs a minimal, artistic design language centered around a muted, almost-achromatic palette, punctuated by a single, strong blue accent. The layout is spacious, with content given ample room to breathe. Typography is a core expressive element, featuring custom fonts that lend a distinctive, editorial feel, while components are kept understated and border-focused, allowing content and subtle visual flair to dominate.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink | #000000 | `--color-ink` | Primary text, borders for outlines, decorative accents, button outlines. Creates a stark contrast against light backgrounds |
| Canvas | #fef7ef | `--color-canvas` | Dominant page background, providing a soft, warm base for content |
| Soft Taupe | #eedfd9 | `--color-soft-taupe` | Subtle background for alternate sections or elements, offering a slight visual break from the main canvas |
| Art Blue | #3d50ff | `--color-art-blue` | Key accent color, used for prominent graphic elements and visual focal points, particularly within imagery or abstract shapes |

## Tokens — Typography

### Moche Light

- **Token:** `--font-moche-light`
- **Substitute:** Montserrat Thin
- **Weights:** 400
- **Sizes:** 18px, 70px
- **Line heights:** 0.80, 1.25
- **Role:** Headlines and prominent display text. The light weight at large sizes creates an airy, elegant, and almost whisper-like presence, contrasting typical bold headline conventions.

### Moche

- **Token:** `--font-moche`
- **Substitute:** Montserrat
- **Weights:** 400
- **Sizes:** 14px, 18px
- **Line heights:** 1.25
- **Role:** Body text, links, and button labels. Provides clarity and an understated yet distinctive feel, complementing the lighter headline variant.

### Forno-r

- **Token:** `--font-forno-r`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 18px, 70px
- **Line heights:** 0.80, 1.25
- **Role:** Decorative text and stylistic elements, often used for wordmark or specific typographic flourishes due to its unique character.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-71 | 71px | `--spacing-71` |
| spacing-127 | 127px | `--spacing-127` |
| spacing-134 | 134px | `--spacing-134` |
| spacing-161 | 161px | `--spacing-161` |
| spacing-212 | 212px | `--spacing-212` |
| spacing-312 | 312px | `--spacing-312` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 0px |
| menuIcon | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1354px |
| sectionGap | 71px |
| cardPadding | 18px |
| elementGap | 20px |

## Components

### Ghost Button

**Role:** Interactive elements, navigations, often appearing as plain text with hover states.

Transparent background, text color 'Ink' (#000000), no border or padding initially, adapting to content naturally. Provides functionality without visual weight.

### Menu Toggle Circle

**Role:** Primary navigation trigger, always visible with a distinct visual style.

Circular button with 'Ink' (#000000) border, 9999px border-radius, transparent background, and 'Ink' (#000000) text. Text 'M e n u' implies an open character spacing.

### Headline Stack

**Role:** Prominent textual content sections, often appearing in two lines.

Each line of text is typically 'Moche Light' at 70px, weight 400, color 'Ink' (#000000), with a line-height of 0.8. They are arranged vertically with the element gap of 20px.

## Do's and Don'ts

### Do

- Prioritize 'Ink' (#000000) for all text and UI outlines, establishing strong contrast against light backgrounds.
- Utilize 'Canvas' (#fef7ef) as the predominant background color for all main content areas.
- Employ 'Moche Light' for all primary headings at 70px to convey a light, elegant tone, using a line-height of 0.8.
- Maintain uniform 0px border-radius for all primary UI elements to preserve a crisp, angular aesthetic.
- Implement the 71px 'sectionGap' consistently between major content blocks for generous vertical rhythm.
- Embed the 'Art Blue' (#3d50ff) accent selectively, primarily for artistic graphic elements or distinctive visual highlights, not for general UI.
- Keep interactive controls like buttons simple with transparent backgrounds and 'Ink' (#000000) text as ghost elements.

### Don't

- Avoid using bold or heavy font weights for headlines; the lightness of 'Moche Light' is a signature characteristic.
- Do not introduce strong saturations or hues beyond 'Art Blue' and the muted neutrals; the palette is intentionally restrained.
- Refrain from using shadows or strong elevation effects; the design emphasizes flat surfaces and crisp outlines.
- Do not deviate from the 0px border-radius for non-circular components; sharp edges are essential to the aesthetic.
- Do not fill buttons with solid colors; all primary interactive elements should remain ghosted or outlined.
- Avoid dense information layouts; spaciousness between elements is crucial for the design's breathability and elegance.
- Do not use generic system fonts; custom fonts 'Moche', 'Moche Light', and 'Forno-r' are integral to the brand's typographic identity.

## Imagery

The site uses a mix of abstract, artistic photography, and product-focused imagery. Photography often features blurred or distorted subjects, sometimes tinted with brand accent colors like 'Art Blue' or soft gradients, creating an ethereal and artistic mood rather than descriptive realism. Imagery is frequently contained within distinct shapes, sometimes rotated slightly, breaking free from traditional grid alignment. Icons, if visible, are minimalist outlines. Image density is moderate, used to punctuate textual content and establish atmospheric breaks rather than illustrate every point.

## Layout

The page adheres to a max-width 1354px contained layout, centered on a background of 'Canvas'. The hero section features a centered, multi-line typographic headline (Moche Light) with an abstract art piece slightly rotated and layered within it, setting a unique, editorial tone. Sections maintain a consistent 'sectionGap' of 71px, creating a spacious vertical rhythm. Content arrangement is typically centered or in two-column structures with text and imagery, favoring an artful, asymmetrical balance over strict grids. Navigation is minimal, limited to a circular menu toggle in the top right. The overall impression is one of artful curation and generous breathing room.

## Similar Brands

- **AIGA** — Employs custom typography as a core expressive element, often using spacious layouts and a minimal color palette.
- **Pentagram** — Focuses on bold, geometric layouts and distinct type choices, with a strong emphasis on clean, almost minimalist design.
- **Actual Source** — Utilizes custom fonts, a graphic, editorial approach to web design, and a curated, often monochromatic color scheme with occasional vibrant accents.
- **Kerning Cultures** — Features a strong emphasis on unique typography, spacious, content-forward layouts, and a refined, often muted color palette.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink: #000000;
  --color-canvas: #fef7ef;
  --color-soft-taupe: #eedfd9;
  --color-art-blue: #3d50ff;
  --font-moche-light: 'Moche Light', Montserrat Thin;
  --font-moche: 'Moche', Montserrat;
  --font-forno-r: 'Forno-r', Playfair Display;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-36: 36px;
  --spacing-43: 43px;
  --spacing-71: 71px;
  --spacing-127: 127px;
  --spacing-134: 134px;
  --spacing-161: 161px;
  --spacing-212: 212px;
  --spacing-312: 312px;
  --radius-buttons: 0px;
  --radius-menuicon: 9999px;
}
```

### Tailwind v4

```css
@theme {
  --color-ink: #000000;
  --color-canvas: #fef7ef;
  --color-soft-taupe: #eedfd9;
  --color-art-blue: #3d50ff;
  --font-moche-light: 'Moche Light', Montserrat Thin;
  --font-moche: 'Moche', Montserrat;
  --font-forno-r: 'Forno-r', Playfair Display;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-36: 36px;
  --spacing-43: 43px;
  --spacing-71: 71px;
  --spacing-127: 127px;
  --spacing-134: 134px;
  --spacing-161: 161px;
  --spacing-212: 212px;
  --spacing-312: 312px;
  --radius-buttons: 0px;
  --radius-menuicon: 9999px;
}
```
