---
version: alpha
name: "Films 53/12"
description: "Films 53/12 embraces a stark, monochromatic aesthetic, creating a feeling of artistic minimalism. The design relies heavily on high contrast typography and ample dark negative space, lending an air of seriousness and focused intent. Interactions are subtle, communicated through text highlights rather than bold colorful components. The overall impression is one of restraint and intellectual depth, allowing the content to take precedence within a tightly controlled visual framework."
theme: "dark"
industry: "media"
source_url: "https://www.films53-12.com"
refero_style_id: "9796b04a-2bb6-4571-9f68-f3360e5746c2"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514655501-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514655501-thumb.jpg"
extracted_at: "2026-04-30T02:04:28.359Z"
---

# Films 53/12 — Style Reference

> Black canvas, stark white type

**Theme:** dark

**Industry:** media

Films 53/12 embraces a stark, monochromatic aesthetic, creating a feeling of artistic minimalism. The design relies heavily on high contrast typography and ample dark negative space, lending an air of seriousness and focused intent. Interactions are subtle, communicated through text highlights rather than bold colorful components. The overall impression is one of restraint and intellectual depth, allowing the content to take precedence within a tightly controlled visual framework.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pitch Black | #000000 | `--color-pitch-black` | Page background, primary canvas |
| Ghost White | #ece5ea | `--color-ghost-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |

## Tokens — Typography

### Founders Grotesk

- **Token:** `--font-founders-grotesk`
- **Substitute:** Inter
- **Weights:** 300
- **Sizes:** 14px, 18px
- **Line heights:** 1.11, 1.43
- **Letter spacing:** 0.0560em
- **Role:** All text: headlines, body copy, and navigation links. The consistent light weight (300) contributes to the minimalist, high-contrast aesthetic and avoids any visual 'shouting'.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 14px | 1.43 | 0.56px | `--text-body` |
| heading | 18px | 1.11 | 0.56px | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-10 | 10px | `--spacing-10` |
| spacing-108 | 108px | `--spacing-108` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 108px |

## Components

### Navigation Link

**Role:** Interactive text link

Ghost White (#ece5ea) text, Founders Grotesk weight 300, 14px size, 1.43 line height, letter-spacing 0.0560em. Hover state shows a subtle border as its interaction cue. No background or distinct padding.

## Do's and Don'ts

### Do

- Use Pitch Black (#000000) for all page and section backgrounds.
- Apply Ghost White (#ece5ea) for all text elements to maintain high contrast.
- Utilize Founders Grotesk weight 300 for all typography, ensuring a consistent light, airy feel.
- Maintain a letter-spacing of 0.0560em across all text to enhance readability in uppercase contexts.
- Employ 108px as the primary vertical spacing between major sections.
- Keep borders to a minimum; use subtle Ghost White (#ece5ea) outlines for interactive elements only.

### Don't

- Never use saturated colors; the palette is strictly monochromatic.
- Avoid heavy font weights; the system is defined by its light, airy typography.
- Do not use any shadows or elevation; the design system is entirely flat.
- Refrain from introducing decorative gradients; stick to solid color blocks.
- Do not add extra padding or backgrounds to text links, unless specifically for an interactive border.
- Exclude circular or highly rounded border radii; the implied shape language is sharp and rectilinear.
- Do not break the high-contrast pairing of Ghost White text on a Pitch Black background.

## Imagery

No imagery or graphical elements beyond stark typography and a solid black background. The visual language is pure text and negative space; imagery serves no active role in the design system itself, only as content.

## Layout

The page uses a full-bleed black background. The hero features a large, horizontally centered headline. Navigation and secondary information are sparsely placed with large horizontal and vertical gaps. Content is arranged in a minimalist, open fashion, prioritizing ample negative space between each textual element and section. There is no grid system or complex content arrangements; elements appear to be intentionally isolated.

## Similar Brands

- **A24 Films** — High-contrast, minimalist, text-focused design with dark backgrounds and white typography.
- **Studio Fnt** — Predominantly monochrome palette, with emphasis on typography and stark layout against ample negative space.
- **Some.Place** — Extreme minimalism, often using only black and white with subtle interactive elements and clean typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pitch-black: #000000;
  --color-ghost-white: #ece5ea;
  --font-founders-grotesk: 'Founders Grotesk', Inter;
  --text-body: 14px;
  --leading-body: 1.43;
  --tracking-body: 0.56px;
  --text-heading: 18px;
  --leading-heading: 1.11;
  --tracking-heading: 0.56px;
  --spacing-10: 10px;
  --spacing-108: 108px;
}
```

### Tailwind v4

```css
@theme {
  --color-pitch-black: #000000;
  --color-ghost-white: #ece5ea;
  --font-founders-grotesk: 'Founders Grotesk', Inter;
  --text-body: 14px;
  --leading-body: 1.43;
  --tracking-body: 0.56px;
  --text-heading: 18px;
  --leading-heading: 1.11;
  --tracking-heading: 0.56px;
  --spacing-10: 10px;
  --spacing-108: 108px;
}
```
