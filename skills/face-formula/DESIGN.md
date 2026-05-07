---
version: alpha
name: "Face Formula"
description: "Face Formula cultivates a natural, understated aesthetic with a muted color palette dominated by cool greys and subtle blue-greys, echoing its Norwegian roots. Typography combines a classic serif for impactful headlines with a clean sans-serif for body text, creating a balanced and readable experience. Design elements are minimal, favoring delicate borders and ample white space over bold colors or heavy shadows. Components are lightweight, emphasizing content and a serene visual atmosphere."
theme: "light"
industry: "ecommerce"
source_url: "https://faceformula.com"
refero_style_id: "78ac71e1-cd4c-4b4d-bac5-e7e6c65cd3fa"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509512392-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509512392-thumb.jpg"
extracted_at: "2026-04-30T00:38:56.808Z"
---

# Face Formula — Style Reference

> serene Scandinavian minimalist

**Theme:** light

**Industry:** ecommerce

Face Formula cultivates a natural, understated aesthetic with a muted color palette dominated by cool greys and subtle blue-greys, echoing its Norwegian roots. Typography combines a classic serif for impactful headlines with a clean sans-serif for body text, creating a balanced and readable experience. Design elements are minimal, favoring delicate borders and ample white space over bold colors or heavy shadows. Components are lightweight, emphasizing content and a serene visual atmosphere.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Primary page background, elevated card surfaces |
| Ghost Fog | #f2f5f8 | `--color-ghost-fog` | Subtle background panels, light hover states, decorative borders. This is a very light, almost white grey |
| Border Mist | #e6ebee | `--color-border-mist` | Secondary background panels, subtle section dividers |
| Deep Ocean | #3b505a | `--color-deep-ocean` | Primary text color, bold accents, brand elements, active states. This particular cool blue-grey defines the brand's primary visual identity |
| Text Slate | #202f3b | `--color-text-slate` | Darkest text for contrast on light backgrounds |
| Link Blue | #58737e | `--color-link-blue` | Secondary text, muted links, subtle button borders |
| Light Steel | #cfdce7 | `--color-light-steel` | Subtle button borders, decorative strokes, light element outlines |
| Black Ink | #000000 | `--color-black-ink` | Iconography, strong text emphasis, borders on dark elements |

## Tokens — Typography

### Libre Caslon Condensed

- **Token:** `--font-libre-caslon-condensed`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 32px, 52px, 120px
- **Line heights:** 1.00, 1.10, 1.20
- **Letter spacing:** -0.64, -0.52, -1.2
- **Role:** Headline typeface. Its delicate, almost whispery quality (despite large sizes) evokes a crafted, sophisticated brand rather than shouting for attention. letter-spacing reduces at smaller headline sizes.

### Circular Pro

- **Token:** `--font-circular-pro`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 12px, 13px, 15px, 16px
- **Line heights:** 1.00, 1.40
- **Letter spacing:** 0.12, 0.26, 0.3, 2.4
- **Role:** Body copy, navigation, buttons, and all functional text. The slightly wider letter spacing gives it an airy, open feel, enhancing the minimalist aesthetic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1 | 0.12px | `--text-caption` |
| heading | 32px | 1.2 | -0.64px | `--text-heading` |
| heading-lg | 52px | 1.1 | -0.52px | `--text-heading-lg` |
| display | 120px | 1 | -1.2px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-47 | 47px | `--spacing-47` |
| spacing-84 | 84px | `--spacing-84` |
| spacing-95 | 95px | `--spacing-95` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 32px |
| cardPadding | 0px |
| elementGap | 16px |

## Components

### Ghost Navigation Button (Light)

**Role:** Header navigation links, inline text links.

backgroundColor: rgba(0, 0, 0, 0), color: Deep Ocean (#3b505a), border: none, padding: 0px.

### Ghost Navigation Button (Dark)

**Role:** Contextual navigation links against dark hero backgrounds.

backgroundColor: rgba(0, 0, 0, 0), color: Ghost Fog (#f2f5f8), border: none, padding: 0px.

### Contained Button

**Role:** Secondary action button for interactive elements.

backgroundColor: Ghost Fog (#f2f5f8), color: Link Blue (#58737e), border: none, padding: 0px 47.5px.

### Product Input Field

**Role:** Text input areas with a subtle border for user interaction.

backgroundColor: rgba(0, 0, 0, 0), color: Deep Ocean (#3b505a), borderBottom: 1px solid Deep Ocean (#3b505a), borderRadius: 0px, padding: 0px 14.8px 0px 0px.

### Bestseller Label

**Role:** Small, contained label for product features.

backgroundColor: Link Blue (#58737e), color: Ghost Fog (#f2f5f8), padding: 6px 6px, borderRadius: 0px.

## Do's and Don'ts

### Do

- Prioritize Deep Ocean (#3b505a) for primary textual content and interactive elements, establishing it as the dominant brand color.
- Use Libre Caslon Condensed (or Playfair Display) exclusively for major headings, leveraging its distinct serif character.
- Apply Circular Pro (or Inter) for all body text, navigation, and button labels, maintaining a consistent sans-serif voice.
- Ensure generous white space, particularly using Canvas White (#ffffff) and Ghost Fog (#f2f5f8) for background dilution and section separation.
- Use Border Mist (#e6ebee) for subtle background shifts to indicate different content blocks without heavy visual breaks.
- Set all border-radius values to 0px for a sharp, modern, and uncluttered appearance.
- Maintain a default element gap of 16px for consistent visual rhythm between components.

### Don't

- Avoid using bold or highly saturated colors outside of the defined brand palette for primary UI elements.
- Do not introduce strong shadows or excessive elevation; the design favors flat surfaces and subtle depth.
- Do not deviate from the specified 0px border-radius; rounded corners are not part of this aesthetic.
- Do not use generic system fonts for body or heading; the custom typefaces are critical to the brand identity.
- Avoid dense information placement; maintain the comfortable density and ample spacing.
- Do not use multiple font weights for Circular Pro; it is intended to be used at its regular weight 400 throughout.
- Do not use 'Action', 'CTA', 'primary action', or similar phrasing for buttons unless they explicitly have a #3b505a background or border, and prioritize un-filled, text-based button styles rather than solid fills where possible.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas White | #ffffff | Base page background and default content areas. |
| 2 | Ghost Fog | #f2f5f8 | Subtle background for distinct content sections or cards. |
| 3 | Border Mist | #e6ebee | Slightly darker secondary background panels, offering visual distinction. |

## Imagery

The site uses high-quality, product-focused photography and natural lifestyle imagery featuring models with clear, healthy skin. Photography is usually full-bleed in hero sections, serving as a backdrop for textual content. Product visuals are crisp, isolated shots on clean white or solid color backgrounds. There are small decorative landscape images. Iconography is minimalist, outlined, and monochromatic, primarily using Black Ink (#000000) or Deep Ocean (#3b505a), maintaining a light stroke weight. Imagery is primarily decorative and atmospheric but also showcases product details.

## Layout

The page primarily employs a max-width contained layout, with content centered. The hero section is full-bleed, overlaying large lifestyle photography with centered or left-aligned headlines and subtext. Section rhythm is created through alternating Canvas White and Ghost Fog background bands, with generous vertical spacing (32px section gap). Content often uses two-column arrangements, alternating text-left/image-right or vice-versa, or stacked centered blocks. There's a 3-column card grid in some sections, likely for product display. Navigation is a fixed top bar with ghost text links.

## Similar Brands

- **aesop.com** — Shares a sophisticated, minimalist aesthetic with clean typography, muted palette, and a focus on product photography.
- **byredo.com** — Exhibits a similar elegant, understated design, featuring large lifestyle imagery, minimal UI, and a refined serif-sans font pairing.
- **frama.com** — Uses a comparable Scandinavian-inspired design with generous white space, subtle color variations, and a focus on natural textures and light.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ghost-fog: #f2f5f8;
  --color-border-mist: #e6ebee;
  --color-deep-ocean: #3b505a;
  --color-text-slate: #202f3b;
  --color-link-blue: #58737e;
  --color-light-steel: #cfdce7;
  --color-black-ink: #000000;
  --font-libre-caslon-condensed: 'Libre Caslon Condensed', Playfair Display;
  --font-circular-pro: 'Circular Pro', Inter;
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: 0.12px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.64px;
  --text-heading-lg: 52px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.52px;
  --text-display: 120px;
  --leading-display: 1;
  --tracking-display: -1.2px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-47: 47px;
  --spacing-84: 84px;
  --spacing-95: 95px;
  --radius-none: 0px;
  --surface-canvas-white: #ffffff;
  --surface-ghost-fog: #f2f5f8;
  --surface-border-mist: #e6ebee;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ghost-fog: #f2f5f8;
  --color-border-mist: #e6ebee;
  --color-deep-ocean: #3b505a;
  --color-text-slate: #202f3b;
  --color-link-blue: #58737e;
  --color-light-steel: #cfdce7;
  --color-black-ink: #000000;
  --font-libre-caslon-condensed: 'Libre Caslon Condensed', Playfair Display;
  --font-circular-pro: 'Circular Pro', Inter;
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: 0.12px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.64px;
  --text-heading-lg: 52px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.52px;
  --text-display: 120px;
  --leading-display: 1;
  --tracking-display: -1.2px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-47: 47px;
  --spacing-84: 84px;
  --spacing-95: 95px;
  --radius-none: 0px;
  --surface-canvas-white: #ffffff;
  --surface-ghost-fog: #f2f5f8;
  --surface-border-mist: #e6ebee;
}
```
