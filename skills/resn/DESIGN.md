---
version: alpha
name: "Resn"
description: "This design system conjures the atmosphere of a clandestine darkroom or a meticulously crafted minimalist exhibition space. Its visual identity relies on extreme contrast and the absence of color, creating a stark, high-impact aesthetic. The entire experience is built around the interplay of pure black and pure white, with a subtle, near-black background providing the only hint of depth, making every interactive element pop with graphic intensity."
theme: "dark"
industry: "agency"
source_url: "https://resn.co.nz"
refero_style_id: "9c1ec0f7-f6fb-4388-9fde-760942dedbda"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925510935-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925510935-thumb.jpg"
extracted_at: "2026-04-11T16:38:44.451Z"
---

# Resn — Style Reference

> monochrome cinematic starkness — like a black & white film noir, every detail is intentional and high contrast.

**Theme:** dark

**Industry:** agency

This design system conjures the atmosphere of a clandestine darkroom or a meticulously crafted minimalist exhibition space. Its visual identity relies on extreme contrast and the absence of color, creating a stark, high-impact aesthetic. The entire experience is built around the interplay of pure black and pure white, with a subtle, near-black background providing the only hint of depth, making every interactive element pop with graphic intensity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Absolute Zero | #000000 | `--color-absolute-zero` | Primary text, interactive elements in light themes, background and borders for high-contrast sections. |
| Abyssal Night | #141214 | `--color-abyssal-night` | Dominant background color for the overall page, providing a dark canvas that's just off-black. |
| Polar White | #ffffff | `--color-polar-white` | Primary text on dark backgrounds, active states, and borders against dark elements. |

## Tokens — Typography

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** Arial, Helvetica
- **Weights:** 400
- **Sizes:** 9px
- **Line heights:** 1.20
- **Role:** Default system fallback for most body text and UI elements, used when 'Fort-Medium' is not specified.

### Fort-Medium

- **Token:** `--font-fort-medium`
- **Substitute:** Montserrat, Open Sans
- **Weights:** 400
- **Sizes:** 10px
- **Line heights:** 2.00
- **Letter spacing:** 0.1
- **Role:** Distinctive typeface for links and small body text, providing a monospace-like, technical feel with generous letter spacing that enhances its graphic presence.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 2 | 0.1px | `--text-caption` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 24px |
| elementGap | 16px |

## Components

### Primary Link Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Project Feature Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Studio Statement Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Link

**Role:** Interactive text link

Uses 'Fort-Medium' at 10px, weight 400, Polar White text (#ffffff) on an Abyssal Night (#141214) background or Absolute Zero (#000000) for contrast, with a high line-height of 2.0 and discernible letter-spacing of 0.1em.

## Do's and Don'ts

### Do

- Maintain a strict monochrome palette utilizing only #000000, #141214, and #ffffff for all visual elements.
- Prioritize high contrast between foreground (#ffffff) and background (#141214 or #000000) for readability and visual punch.
- Apply 'Fort-Medium' to all link and interaction text to preserve the graphic, spaced-out character.
- Use a line-height of 2.0 and letter-spacing of 0.1em for Fort-Medium text to create its signature open appearance.
- Ensure all interactive elements distinctly stand out through color inversion or bold use of #ffffff against dark backgrounds.

### Don't

- Introduce any chromatic colors; the system is strictly achromatic.
- Use subtle grays or low-contrast combinations; prioritize stark black and white for visual impact.
- Apply varying border radii; all shapes are sharp and angular, or implicitly defined by their content.
- Reduce the letter-spacing on 'Fort-Medium' text; its open quality is a key identifier.
- Use any imagery or decorative elements that break the high-contrast, minimalist aesthetic.

## Imagery

The site eschews traditional imagery (photography, illustration) in favor of pure UI and text-based communication. This creates a dense, textual, and highly graphic experience. The absence of traditional visuals forces focus on typography and layout. If any imagery were to be introduced, it would likely be abstract, stark, or highly stylized to maintain the monochrome and high-contrast aesthetic – potentially stark white outlines on black, or pure black silhouettes.

## Layout

The layout is primarily full-bleed, using the Abyssal Night (#141214) as a consistent dark canvas across sections. Content appears to be centered and uses generous vertical spacing between blocks. There's a strong emphasis on stacking content vertically, with prominent headlines and text blocks, rather than complex multi-column grids or side-by-side arrangements. The page unfolds as a series of distinct, high-contrast textual statements, leveraging the full screen width for dramatic effect.

## Similar Brands

- **Awwwards site design** — Shares a dedication to using dark themes, sharp typography, and high contrast for a graphically intense, almost editorial feel.
- **Certain Apple Developer pages** — Exhibits a similar stark, minimalist aesthetic with heavy reliance on black, white, and a single accent font for differentiation.
- **Luxury fashion brand sites (e.g., Balenciaga)** — Often use extreme monochrome palettes, large typography, and minimalist layouts to convey exclusivity and a strong brand identity.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-absolute-zero: #000000;
  --color-abyssal-night: #141214;
  --color-polar-white: #ffffff;
  --font-sans-serif: 'sans-serif', Arial, Helvetica;
  --font-fort-medium: 'Fort-Medium', Montserrat, Open Sans;
  --text-caption: 10px;
  --leading-caption: 2;
  --tracking-caption: 0.1px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-64: 64px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-absolute-zero: #000000;
  --color-abyssal-night: #141214;
  --color-polar-white: #ffffff;
  --font-sans-serif: 'sans-serif', Arial, Helvetica;
  --font-fort-medium: 'Fort-Medium', Montserrat, Open Sans;
  --text-caption: 10px;
  --leading-caption: 2;
  --tracking-caption: 0.1px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-64: 64px;
  --radius-none: 0px;
}
```
