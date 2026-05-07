---
version: alpha
name: "iconwerk"
description: "The iconwerk system is a minimalist black and white canvas for showcasing custom icon design. It prioritizes clarity and directness through a largely monochrome palette, sparse text, and a loose, airy layout. Visual interest comes from the high-contrast presentation of icons and the generous use of rounded rectangles, creating a playful, object-focused atmosphere. The overall impression is one of curated simplicity, allowing the icons themselves to be the main protagonists."
theme: "light"
industry: "design"
source_url: "https://www.iconwerk.com"
refero_style_id: "6e22b676-90e0-4e1a-a230-2b52f331d0e4"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512365176-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512365176-thumb.jpg"
extracted_at: "2026-04-30T01:26:19.515Z"
---

# iconwerk — Style Reference

> Gallery of crisp forms

**Theme:** light

**Industry:** design

The iconwerk system is a minimalist black and white canvas for showcasing custom icon design. It prioritizes clarity and directness through a largely monochrome palette, sparse text, and a loose, airy layout. Visual interest comes from the high-contrast presentation of icons and the generous use of rounded rectangles, creating a playful, object-focused atmosphere. The overall impression is one of curated simplicity, allowing the icons themselves to be the main protagonists.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink Black | #000000 | `--color-ink-black` | Primary headings, body text, and icon fills on light surfaces. Do not promote it to the primary CTA color |

## Tokens — Typography

### Arial

- **Token:** `--font-arial`
- **Substitute:** Arial, Helvetica, sans-serif
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.21
- **Letter spacing:** normal
- **OpenType features:** "liga"
- **Role:** System fallback for general text, links, and image captions. Provides a clean, unadorned baseline.

### Graphik

- **Token:** `--font-graphik`
- **Substitute:** Inter, ui-sans-serif, system-ui
- **Weights:** 400, 600
- **Sizes:** 16px, 21px, 22px, 24px
- **Line heights:** 1.18, 1.19, 1.21
- **Letter spacing:** normal
- **OpenType features:** "liga"
- **Role:** Headlines and prominent body text. Graphik's robust modern sans-serif character supports the direct and functional aesthetic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 14px | 1.21 | — | `--text-body` |
| body-lg | 16px | 1.21 | — | `--text-body-lg` |
| subheading | 21px | 1.18 | — | `--text-subheading` |
| heading-lg | 24px | 1.21 | — | `--text-heading-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-37 | 37px | `--spacing-37` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-61 | 61px | `--spacing-61` |
| spacing-62 | 62px | `--spacing-62` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 28px |
| cards | 28px |
| buttons | 28px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 45px |
| cardPadding | 18px |
| elementGap | 5px |

## Components

### Icon Card

**Role:** Container for individual icon examples

Squared card with a large 28px border-radius, often filled with a #000000 background for contrast or a neutral white, housing a centered icon image or text. Padding varies but often around 18px.

### Contact Button

**Role:** Primary call to action.

Text-only button with Ink Black text, 28px border-radius applied to an underlying clickable area, with a subtle border for hover states (though not explicitly detected in static data, implied by general design). Padding around text is implied to be minimal to maintain a ghost aesthetic.

## Do's and Don'ts

### Do

- Prioritize extreme visual clarity with #000000 text and borders against white or near-white backgrounds.
- Apply a generous 28px border-radius consistently to all interactive elements, cards, and prominent shapes.
- Maintain ample whitespace; use 45px for vertical section separation and 5px as a base unit for smaller element spacing.
- Use Graphik (or Inter) for all headlines and emphasized text, leveraging weights 400 and 600.
- Employ `"liga"` font feature settings for Graphik to enable ligatures, enhancing typographic refinement.
- Keep chromatic elements to a minimum, using color only for specific icon examples or very deliberate brand accent in content areas.

### Don't

- Avoid using multiple colors for interface elements; stick to the monochrome palette for UI.
- Do not use sharp corners; the 28px radius is a signature visual element.
- Refrain from dense layouts; maintain a spacious feel with generous padding and margins.
- Do not introduce heavy shadows or complex elevation; the system relies on flat, high-contrast surfaces.
- Avoid decorative gradients for UI elements; their absence reinforces clarity.

## Imagery

The site's imagery is primarily product-focused, showcasing various icon designs and product integrations. It features tight crops of actual product hardware (like remote controls, ovens) or abstract scenes (landscapes, wood textures) serving as backgrounds for overlaid icons. Icons themselves are presented either as simple outlines (often #000000 or a specific accent color) on solid backgrounds, or integrated into realistic product mockups. The style is detailed and realistic for product depictions, while icons are clean and graphic, often monochromatic. Icon style leans towards outlined with a consistent stroke weight. Imagery is used to contextualize and demonstrate the icons' versatility rather than for decorative atmosphere.

## Layout

The page uses a full-bleed layout for its main content area, with elements often centered or aligned to a relatively subtle grid. The hero section is a simple introductory text block with a logo. The main content is composed of a prominent 2x2 or 3x2 grid of 'Icon Cards' that alternate between dark and light backgrounds, creating a checkerboard-like visual rhythm. Each card is self-contained. Vertical spacing between content blocks is generous, around 45px. Navigation consists of a minimal top-right floating 'contact' button with a subtle logo.

## Similar Brands

- **Linear** — Both use a minimalist, high-contrast monochrome design with subtle rounded corners and a focus on functional clarity.
- **Stripe** — Shares a clean, modern typographic approach and a spacious layout that emphasizes content over heavy UI chrome.
- **Figma** — Similar aesthetic of clean lines, functional typography, and a grid-based presentation, letting the visual assets speak for themselves.
- **Vercel** — Employs strong typography, a monochromatic base, and a focus on direct, uncluttered information delivery with minimal ornamentation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink-black: #000000;
  --font-arial: 'Arial', Arial, Helvetica, sans-serif;
  --font-graphik: 'Graphik', Inter, ui-sans-serif, system-ui;
  --text-body: 14px;
  --leading-body: 1.21;
  --text-body-lg: 16px;
  --leading-body-lg: 1.21;
  --text-subheading: 21px;
  --leading-subheading: 1.18;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.21;
  --spacing-5: 5px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-36: 36px;
  --spacing-37: 37px;
  --spacing-44: 44px;
  --spacing-45: 45px;
  --spacing-61: 61px;
  --spacing-62: 62px;
  --radius-tags: 28px;
  --radius-cards: 28px;
  --radius-buttons: 28px;
}
```

### Tailwind v4

```css
@theme {
  --color-ink-black: #000000;
  --font-arial: 'Arial', Arial, Helvetica, sans-serif;
  --font-graphik: 'Graphik', Inter, ui-sans-serif, system-ui;
  --text-body: 14px;
  --leading-body: 1.21;
  --text-body-lg: 16px;
  --leading-body-lg: 1.21;
  --text-subheading: 21px;
  --leading-subheading: 1.18;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.21;
  --spacing-5: 5px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-36: 36px;
  --spacing-37: 37px;
  --spacing-44: 44px;
  --spacing-45: 45px;
  --spacing-61: 61px;
  --spacing-62: 62px;
  --radius-tags: 28px;
  --radius-cards: 28px;
  --radius-buttons: 28px;
}
```
