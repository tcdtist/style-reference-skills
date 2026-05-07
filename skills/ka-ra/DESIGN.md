---
version: alpha
name: "Ka-ra"
description: "Ka Ra Studio embodies an austere gallery aesthetic, blending raw product display with minimalist typography and a singular, muted accent color. The visual system is defined by a vast expanse of white space, creating a quiet backdrop that lets the craftsmanship of the products stand out. Typography is understated yet precise, using a custom serif for titles and a system sans-serif for body text, maintaining legibility without competing with the visuals. The design prioritizes space and a restrained palette, with interactive elements subtly framed rather than highlighted, creating a sense of calm and considered presentation."
theme: "light"
industry: "design"
source_url: "https://www.ka-ra.studio"
refero_style_id: "315660d3-36f4-4458-8148-1317fc909e8b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512623865-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512623865-thumb.jpg"
extracted_at: "2026-04-30T01:31:03.699Z"
---

# Ka-ra — Style Reference

> Gallery white, framed bronze.

**Theme:** light

**Industry:** design

Ka Ra Studio embodies an austere gallery aesthetic, blending raw product display with minimalist typography and a singular, muted accent color. The visual system is defined by a vast expanse of white space, creating a quiet backdrop that lets the craftsmanship of the products stand out. Typography is understated yet precise, using a custom serif for titles and a system sans-serif for body text, maintaining legibility without competing with the visuals. The design prioritizes space and a restrained palette, with interactive elements subtly framed rather than highlighted, creating a sense of calm and considered presentation.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #FFFFFF | `--color-canvas-white` | Page background, primary surface for content |
| Text Black | #000000 | `--color-text-black` | Primary text color for body, headings, and functional icons |
| Border Fog | #E5E5E5 | `--color-border-fog` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Muted Bronze | #674A1D | `--color-muted-bronze` | Outlined action borders, collection titles, and secondary informational text – a warm, earthy tone that indicates interaction or hierarchy |

## Tokens — Typography

### A B C Laica

- **Token:** `--font-a-b-c-laica`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 16px, 34px
- **Line heights:** 1.20, 1.50, 2.00
- **Letter spacing:** normal
- **Role:** Headlines and collection titles – its unique serif quality adds a touch of classic craftsmanship to functional text, eschewing heavy weights for refined presence.

### -apple-system

- **Token:** `--font-apple-system`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 15px
- **Line heights:** 1.65
- **Letter spacing:** normal
- **Role:** Body copy and informational text – a neutral, highly readable system font that recedes to prioritize content.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-26 | 26px | `--spacing-26` |
| spacing-39 | 39px | `--spacing-39` |
| spacing-67 | 67px | `--spacing-67` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 67px |
| cardPadding | 39px |
| elementGap | 26px |

## Components

### Info Link

**Role:** Subtle navigational or disclosure element.

Text in A B C Laica, weight 400, 16px, color Muted Bronze (#674A1D), with a 1px border in Border Fog (#E5E5E5) creating a soft, outlined pill shape on hover/focus.

### Collection Title

**Role:** Product or collection identifier.

Text in A B C Laica, weight 400, 34px, color Muted Bronze (#674A1D). No distinct background or border.

### Product View Link

**Role:** Call to action for viewing product details.

Text in A B C Laica, weight 400, 16px, color Muted Bronze (#674A1D), with a 1px border in Muted Bronze (#674A1D) on hover/focus, for a slightly more prominent outline than informational links.

### Copyright Text

**Role:** Legal and meta information.

Text in A B C Laica, weight 400, 16px, color Muted Bronze (#674A1D).

## Do's and Don'ts

### Do

- Prioritize Canvas White (#FFFFFF) as the dominant background color to maintain an expansive, airy feel.
- Use Text Black (#000000) for all main body text and standard headings for clear contrast.
- Apply Muted Bronze (#674A1D) as the primary accent for interactive borders, emphasized titles, and all link text.
- Frame interactive elements with thin, 1px borders in Border Fog (#E5E5E5) or Muted Bronze (#674A1D) rather than solid backgrounds.
- Maintain generous vertical spacing between sections (67px) to emphasize individual content blocks and product images.
- Utilize A B C Laica for all headings and emphasized textual elements to convey a handcrafted, artistic identity.
- Ensure -apple-system (or system-ui equivalent) is used for all descriptive body text for maximum clarity and unobtrusiveness.

### Don't

- Avoid using saturated or bright colors; the palette should remain muted and natural.
- Do not introduce heavy shadows or gradients; rely on space and subtle borders for definition.
- Refrain from using strong bold weights for typography; maintain an understated, elegant visual hierarchy through font family and size.
- Do not embed text directly onto product images; text overlays are not part of this visual system.
- Avoid dense information blocks; instead, disperse content with ample padding (39px) and element spacing (26px).
- Do not use highly decorative UI elements; form follows function with a bias towards visual silence.

## Similar Brands

- **Frama** — Shared use of stark white backgrounds, raw material focus, and understated typography to emphasize product form and texture.
- **B&B Italia** — Similar high-end furniture presentation, employing generous white space and minimalist layouts to convey luxury and craftsmanship.
- **Muuto** — Focus on clean product photography and a calm, spacious user interface, allowing products to be the visual hero.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #FFFFFF;
  --color-text-black: #000000;
  --color-border-fog: #E5E5E5;
  --color-muted-bronze: #674A1D;
  --font-a-b-c-laica: 'A B C Laica', Playfair Display;
  --font-apple-system: '-apple-system', system-ui;
  --spacing-26: 26px;
  --spacing-39: 39px;
  --spacing-67: 67px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #FFFFFF;
  --color-text-black: #000000;
  --color-border-fog: #E5E5E5;
  --color-muted-bronze: #674A1D;
  --font-a-b-c-laica: 'A B C Laica', Playfair Display;
  --font-apple-system: '-apple-system', system-ui;
  --spacing-26: 26px;
  --spacing-39: 39px;
  --spacing-67: 67px;
  --radius-none: 0px;
}
```
