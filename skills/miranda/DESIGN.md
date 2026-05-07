---
version: alpha
name: "Miranda"
description: "Miranda's visual system evokes a vintage newspaper aesthetic with a modern, high-contrast twist. It combines deeply saturated, almost black backgrounds with warm, desaturated off-white surfaces, creating a dramatic stage for its expressive typography. The layout is structured yet dynamic, featuring oversized type and editorial-inspired content blocks with subtle elevation. This system prioritizes visual impact and textural richness over minimalist austerity."
theme: "dark"
industry: "design"
source_url: "https://www.niccolomiranda.com"
refero_style_id: "3f6e3076-e77f-487e-b212-3b5946a34e87"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517030899-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517030899-thumb.jpg"
extracted_at: "2026-04-30T02:44:13.601Z"
---

# Miranda — Style Reference

> Vintage newsprint, bold headlines.

**Theme:** dark

**Industry:** design

Miranda's visual system evokes a vintage newspaper aesthetic with a modern, high-contrast twist. It combines deeply saturated, almost black backgrounds with warm, desaturated off-white surfaces, creating a dramatic stage for its expressive typography. The layout is structured yet dynamic, featuring oversized type and editorial-inspired content blocks with subtle elevation. This system prioritizes visual impact and textural richness over minimalist austerity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #1d1d1b | `--color-midnight-ink` | Page backgrounds, primary text, active states, button fills, and strong borders — forms the dark canvas of the design; Base tint for subtle shadows, giving elevation a consistent, muted dark appearance |
| Aged Paper | #cdc6be | `--color-aged-paper` | Card backgrounds, secondary text, and interactive elements — provides a warm, lighter surface contrast |
| Deep Shadow | #000000 | `--color-deep-shadow` | Accent borders, visual separators, and strong typographic elements — used sparingly for maximum impact |
| Bleached Canvas | #e2dedb | `--color-bleached-canvas` | Subtle background accents, image backgrounds, and very light surface highlights |

## Tokens — Typography

### Editorial New

- **Token:** `--font-editorial-new`
- **Substitute:** Playfair Display
- **Weights:** 300
- **Sizes:** 16px, 17px, 19px, 20px, 24px, 29px, 31px, 32px, 37px, 86px
- **Line heights:** 0.93, 1.08, 1.11, 1.15, 1.16, 1.18, 1.20, 1.25, 1.27, 1.33, 1.36
- **Letter spacing:** -0.0400em, -0.0330em, -0.0300em, -0.0210em, -0.0200em, -0.0190em, -0.0100em
- **Role:** Primary text across navigation, body copy, and secondary headings. Its light weight at various sizes provides a refined, editorial feel.

### Canopee

- **Token:** `--font-canopee`
- **Substitute:** Anton
- **Weights:** 400
- **Sizes:** 17px, 20px, 22px, 23px, 32px, 43px, 65px, 72px, 86px, 109px, 112px, 118px, 122px, 202px, 212px, 366px, 432px, 446px, 533px
- **Line heights:** 0.71, 0.73, 0.77, 0.78, 0.79, 0.81, 0.91, 1.00, 1.25
- **Letter spacing:** -0.0890em, -0.0500em, -0.0450em, -0.0400em, -0.0360em, -0.0310em, -0.0300em, -0.0290em, -0.0140em, -0.0070em
- **Role:** Display headings and section titles that demand bold presence. Its extreme letter-spacing and massive sizes create a striking, almost architectural visual impact.

### Domaine Display

- **Token:** `--font-domaine-display`
- **Substitute:** Staatliches
- **Weights:** 500
- **Sizes:** 20px, 22px, 32px, 65px, 72px, 86px, 109px, 118px, 122px, 446px
- **Line heights:** 0.73, 0.78, 0.79, 0.91, 1.00
- **Letter spacing:** -0.0600em, -0.0500em, -0.0310em, -0.0300em, -0.0200em
- **Role:** Large, impactful headings used for key statements, often layered with other elements. Its bold forms and tight kerning contribute to the 'newspaper masthead' feel.

### Germgoth

- **Token:** `--font-germgoth`
- **Substitute:** Oswald
- **Weights:** 400
- **Sizes:** 158px
- **Letter spacing:** -0.0040em
- **Role:** Single-purpose, extremely large decorative text for emphasis, often in single words or short phrases.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.36 | — | `--text-body` |
| subheading | 20px | 1.25 | — | `--text-subheading` |
| heading | 32px | 1.15 | -0.64px | `--text-heading` |
| heading-lg | 86px | 0.93 | -2.58px | `--text-heading-lg` |
| display | 446px | 0.73 | -4.46px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-115 | 115px | `--spacing-115` |

### Border Radius

| Element | Value |
| --- | --- |
| misc | 2.88px |
| cards | 11.52px |
| buttons | 0px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(29, 29, 27, 0.2) -4px 4px 6px 0px | `--shadow-xl` |
| xl-2 | rgba(29, 29, 27, 0.2) -5px 3px 6px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 43px |
| elementGap | 14px |

## Components

### Filled Button (Email Me)

**Role:** Primary action button.

Solid filled button with a strong, dark background and no visible border radius. Uses Midnight Ink (#1d1d1b) for both background and text, with 7.2px top padding and 11.52px horizontal/bottom padding.

### Feature Card

**Role:** Content container for showcased work or information blocks.

Aged Paper (#cdc6be) background with 11.52px border-radius. Features a soft, offset shadow (rgba(29, 29, 27, 0.2) -4px 4px 6px 0px) and generous internal padding (43.2px horizontal, 36px top, 43.2px bottom).

### Callout Badge

**Role:** Small, contextual label for showcasing new content.

Transparent background with Midnight Ink (#1d1d1b) text. No padding or border-radius, appearing as inline text.

## Do's and Don'ts

### Do

- Prioritize high contrast between Midnight Ink (#1d1d1b) and Aged Paper (#cdc6be) for readability and visual punch.
- Use Editorial New weight 300 for all body text and secondary headings, leveraging its refined character.
- Implement the square, zero-radius design for all action buttons using Midnight Ink (#1d1d1b) as background and text.
- Apply 11.52px border-radius consistently to all card-like containers and content blocks.
- Utilize extreme letter-spacing (-0.089em for Canopee at 17px, reducing for larger sizes) for display typography to reinforce the editorial aesthetic.
- Employ the subtle offset shadow rgba(29, 29, 27, 0.2) -4px 4px 6px 0px for elevated content cards, rather than hard borders.
- Maintain a comfortable rhythm with element gaps primarily around 14px and card padding at 43.2px.

### Don't

- Avoid generic system fonts; always use the specified custom fonts (Editorial New, Canopee, Domaine Display, Germgoth) to maintain brand identity.
- Do not introduce sharp, angular shadows; stick to the soft, tinted shadows derived from Midnight Ink for all elevations.
- Refrain from using highly saturated colors for interface elements; the palette is primarily monochromatic with warm neutrals.
- Do not deviate from the specified padding for cards (43.2px horizontal, 36px top, 43.2px bottom); consistency is key for content blocks.
- Avoid large border-radii on interactive elements like buttons, adhering to the 0px radius for this component.
- Do not apply excessive visual decorations or gradients; the system relies on strong typography, high contrast, and subtle textures.
- Never use automatic letter-spacing for headings; manually apply the specified negative letter-spacing values to achieve the desired tight appearance.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas (Midnight Ink) | #1d1d1b | Dominant background for the entire page, creating a deep, immersive environment. |
| 1 | Paper Surface (Aged Paper) | #cdc6be | Primary surface for cards and content blocks, providing a warm, contrasting layer against the dark canvas. |
| 2 | Image Canvas (Bleached Canvas) | #e2dedb | Specific background for images, offering a very light, almost white base to make visuals pop. |

## Elevation

- **Card:** `rgba(29, 29, 27, 0.2) -4px 4px 6px 0px`

## Imagery

The imagery on this site consists primarily of contained, full-color product or artistic shots. Photos and illustrations are presented within rectangular frames atop the Aged Paper (#cdc6be) surface, which usually includes Bleached Canvas (#e2dedb) for the image background itself. The treatment is isolated and contained, with no complex masking or overlapping, resembling framed art or magazine cutouts. Icons, when present, are minimal in style, likely outlined and monochrome to blend into the overall aesthetic.

## Layout

The page embraces a contained, centered layout, punctuated by full-bleed sections or oversized typographic elements. The hero section establishes the newspaper aesthetic with a centered, massive headline (e.g., 'MIRANDA'). Content sections often alternate between dark (Midnight Ink) and light (Aged Paper) bands, creating a distinct visual rhythm. Inner sections frequently utilize a two-column grid for text and image combinations, or a more flexible editorial arrangement with asymmetrical content blocks and large, expressive typography. Navigation is subtle, typically a top-right hamburger menu and small, discreet links, maintaining focus on the content blocks. Vertical spacing is consistent but generous, contributing to a comfortable, unhurried reading experience.

## Similar Brands

- **AIGA Eye on Design** — Heavy use of display typography, high-contrast monochrome palettes, and strong grid-based editorial layouts.
- **The New York Times Online** — Classic newsprint typography, structured content blocks, and a sense of gravitas through stark contrasts and strong headlines.
- **Studio—JQ** — Portfolio sites with a dark aesthetic, bold type as visual elements, and minimal, structured layouts.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #1d1d1b;
  --color-aged-paper: #cdc6be;
  --color-deep-shadow: #000000;
  --color-bleached-canvas: #e2dedb;
  --font-editorial-new: 'Editorial New', Playfair Display;
  --font-canopee: 'Canopee', Anton;
  --font-domaine-display: 'Domaine Display', Staatliches;
  --font-germgoth: 'Germgoth', Oswald;
  --text-body: 16px;
  --leading-body: 1.36;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --text-heading: 32px;
  --leading-heading: 1.15;
  --tracking-heading: -0.64px;
  --text-heading-lg: 86px;
  --leading-heading-lg: 0.93;
  --tracking-heading-lg: -2.58px;
  --text-display: 446px;
  --leading-display: 0.73;
  --tracking-display: -4.46px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-17: 17px;
  --spacing-22: 22px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-36: 36px;
  --spacing-43: 43px;
  --spacing-58: 58px;
  --spacing-65: 65px;
  --spacing-115: 115px;
  --radius-misc: 2.88px;
  --radius-cards: 11.52px;
  --radius-buttons: 0px;
  --shadow-xl: rgba(29, 29, 27, 0.2) -4px 4px 6px 0px;
  --shadow-xl-2: rgba(29, 29, 27, 0.2) -5px 3px 6px 0px;
  --surface-canvas-midnight-ink: #1d1d1b;
  --surface-paper-surface-aged-paper: #cdc6be;
  --surface-image-canvas-bleached-canvas: #e2dedb;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #1d1d1b;
  --color-aged-paper: #cdc6be;
  --color-deep-shadow: #000000;
  --color-bleached-canvas: #e2dedb;
  --font-editorial-new: 'Editorial New', Playfair Display;
  --font-canopee: 'Canopee', Anton;
  --font-domaine-display: 'Domaine Display', Staatliches;
  --font-germgoth: 'Germgoth', Oswald;
  --text-body: 16px;
  --leading-body: 1.36;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --text-heading: 32px;
  --leading-heading: 1.15;
  --tracking-heading: -0.64px;
  --text-heading-lg: 86px;
  --leading-heading-lg: 0.93;
  --tracking-heading-lg: -2.58px;
  --text-display: 446px;
  --leading-display: 0.73;
  --tracking-display: -4.46px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-17: 17px;
  --spacing-22: 22px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-36: 36px;
  --spacing-43: 43px;
  --spacing-58: 58px;
  --spacing-65: 65px;
  --spacing-115: 115px;
  --radius-misc: 2.88px;
  --radius-cards: 11.52px;
  --radius-buttons: 0px;
  --shadow-xl: rgba(29, 29, 27, 0.2) -4px 4px 6px 0px;
  --shadow-xl-2: rgba(29, 29, 27, 0.2) -5px 3px 6px 0px;
  --surface-canvas-midnight-ink: #1d1d1b;
  --surface-paper-surface-aged-paper: #cdc6be;
  --surface-image-canvas-bleached-canvas: #e2dedb;
}
```
