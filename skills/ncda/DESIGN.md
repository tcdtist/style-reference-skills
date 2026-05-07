---
version: alpha
name: "NCDA"
description: "NCDA projects an architectural blueprint on white marble aesthetic: a minimalist, high-contrast system built on stark black and white surfaces. Typography is the primary visual element, meticulously spaced and sized to create a sense of expansive calm. Subtle visual hierarchy is achieved through variations in text color and the generous use of whitespace, rather than heavy borders or shadows. Components are understated, relying on inherent typographic weight and precise positioning."
theme: "light"
industry: "design"
source_url: "https://ncda.biz"
refero_style_id: "f654d52c-42de-4f3b-a377-9287b1536ad0"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514304249-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514304249-thumb.jpg"
extracted_at: "2026-04-30T01:58:40.946Z"
---

# NCDA — Style Reference

> Architectural blueprint on white marble

**Theme:** light

**Industry:** design

NCDA projects an architectural blueprint on white marble aesthetic: a minimalist, high-contrast system built on stark black and white surfaces. Typography is the primary visual element, meticulously spaced and sized to create a sense of expansive calm. Subtle visual hierarchy is achieved through variations in text color and the generous use of whitespace, rather than heavy borders or shadows. Components are understated, relying on inherent typographic weight and precise positioning.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, heading text against dark elements, primary surface |
| NCDA Black | #191919 | `--color-ncda-black` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Absolute Zero | #000000 | `--color-absolute-zero` | Secondary text, subtle borders, fills for certain icons. A purer black for added punch where needed |
| Ghost Gray | #808080 | `--color-ghost-gray` | Muted text, hairline borders, and subtle link text for less emphasized information. This is the lightest functional gray |

## Tokens — Typography

### TWK Everett

- **Token:** `--font-twk-everett`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 11px, 15px, 21px, 32px, 62px
- **Line heights:** 0.80, 1.20, 1.35, 1.40, 1.44
- **Letter spacing:** -0.0500em at 62px, -0.0100em at 21px, 0.0400em at 11-15px
- **Role:** The primary typeface for headings, body text, and general interface elements. Its generous sizing and variable letter-spacing convey a deliberate, unhurried presence.

### TWK Everett Mono

- **Token:** `--font-twk-everett-mono`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 21px
- **Line heights:** 0.80
- **Letter spacing:** -0.0100em
- **Role:** Used sparingly for time displays and other code-like or data-driven content, providing a distinct, technical counterpoint to the primary serif.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.35 | — | `--text-caption` |
| body-sm | 15px | 1.35 | — | `--text-body-sm` |
| body | 21px | 1.35 | — | `--text-body` |
| body-lg | 32px | 1.3 | — | `--text-body-lg` |
| heading-sm | 62px | 1.3 | — | `--text-heading-sm` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-53 | 53px | `--spacing-53` |
| spacing-59 | 59px | `--spacing-59` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-188 | 188px | `--spacing-188` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 28px |
| elementGap | 15px |

## Components

### Navigation Link

**Role:** Primary navigation item

Text in NCDA Black (#191919) at 21px with a lineHeight of 0.8. On hover, a subtle border may appear, also in NCDA Black, but the text remains the defining feature. No background or padding.

### Menu Link

**Role:** Menu trigger and secondary navigation

Text in NCDA Black (#191919) or Absolute Zero (#000000) at 21px (or smaller) with default letter-spacing. Minimalistic, relying solely on typography and position for recognition.

### Body Text Block

**Role:** Standard paragraph content

Uses TWK Everett, 400 weight, 15px size, 1.2 lineHeight, and 0.0400em letter-spacing. Color is usually NCDA Black (#191919) or Ghost Gray (#808080) for less critical information. Generous marginBottom of 15px separates paragraphs.

### Section Heading

**Role:** Major content section titles

Uses TWK Everett, 400 weight, sizes 32px or 62px, with a lineHeight of 1.35 or 0.8 and letter-spacing of -0.0100em or -0.0500em respectively. Color is NCDA Black (#191919). Features notable horizontal margins (e.g., 59px paddingLeft, 64px marginRight) to define its placement.

### Monospace Time Display

**Role:** Displaying time or highly precise data

Uses TWK Everett Mono, 400 weight, 21px size, 0.8 lineHeight, and -0.0100em letter-spacing. Color is Absolute Zero (#000000). Distinctive mono font provides clear separation from other text.

## Do's and Don'ts

### Do

- Prioritize typography as the primary driver of visual hierarchy, leveraging TWK Everett's weight 400 for both headings and body text.
- Use Canvas White (#ffffff) for all large background planes to maintain a spacious and luminous feel.
- Define interactive states and section breaks with subtle borders using NCDA Black (#191919) or Ghost Gray (#808080), avoiding filled backgrounds for navigation.
- Apply generous vertical spacing between sections, adhering to the 150px marginBottom and 28px/53px padding and margins to create a sense of calm.
- Employ the negative letter-spacing values (-0.0500em at 62px, -0.0100em at 21px) for headings and specific elements to enhance legibility and unique character.
- Use Absolute Zero (#000000) for high-impact text or fills, and Ghost Gray (#808080) for de-emphasized elements, always against Canvas White.
- Ensure all components have a radius of 0px for sharp, architectural edges.

### Don't

- Avoid using drop shadows or complex elevation schemes; the design relies on flat surfaces and high contrast.
- Do not introduce new colors; adhere strictly to the established black, white, and gray palette.
- Refrain from using heavily decorative elements or ornate graphics; the focus is on content and clean structure.
- Do not use letter-spacing outside the defined values (0.0400em, -0.0100em, -0.0500em) as it is a core aspect of the brand's typographic identity.
- Do not use background colors for interactive elements; opt for text color changes or subtle border treatments instead.
- Avoid crowded layouts or tight spacing; maintain the spacious, minimalist aesthetic with ample whitespace.
- Do not apply rounded corners to any UI elements; all shapes should be sharp and rectilinear.

## Imagery

The site's visual language is characterized by an absence of photography or complex illustrations. Instead, it relies on pure typography and a stark, almost architectural, grid system. If any imagery (beyond project showcases) were to be introduced, it would likely be technical diagrams or abstract geometric shapes, treated with high contrast and minimal color, serving as explanatory content rather than decorative atmosphere. Icons (e.g., the 'Menu' hamburger) are minimal, outlined, monochromatic (Absolute Zero), and blend seamlessly with the typographic focus.

## Layout

The page structure is full-bleed horizontally, but content feels contained and centered within implied columns. The hero section is characterized by a very large, prominent typographic logo (NCDA) taking up significant vertical space, offset by smaller, concise branding text. Subsequent sections alternate between large, impactful headings and sparse body copy, with consistent wide vertical gaps. The layout avoids complex grids for content, favoring a single-column flow or simple two-column splits (text-left/image-right or vice versa if imagery existed) that emphasize whitespace. Navigation is minimal, consisting of a sticky top bar with time displays and a 'Menu' trigger, suggesting an off-canvas or overlay menu system.

## Similar Brands

- **Awwwards** — High-contrast, typography-driven, minimalist presentation websites.
- **Certain graphic design portfolios** — Focus on large, impactful typography, stark black/white palette, and generous whitespace.
- **Brutalism-inspired agencies** — Raw, honest use of typography and structural elements, eschewing decorative flourishes.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ncda-black: #191919;
  --color-absolute-zero: #000000;
  --color-ghost-gray: #808080;
  --font-twk-everett: 'TWK Everett', Inter;
  --font-twk-everett-mono: 'TWK Everett Mono', Space Mono;
  --text-caption: 11px;
  --leading-caption: 1.35;
  --text-body-sm: 15px;
  --leading-body-sm: 1.35;
  --text-body: 21px;
  --leading-body: 1.35;
  --text-body-lg: 32px;
  --leading-body-lg: 1.3;
  --text-heading-sm: 62px;
  --leading-heading-sm: 1.3;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-53: 53px;
  --spacing-59: 59px;
  --spacing-64: 64px;
  --spacing-150: 150px;
  --spacing-188: 188px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ncda-black: #191919;
  --color-absolute-zero: #000000;
  --color-ghost-gray: #808080;
  --font-twk-everett: 'TWK Everett', Inter;
  --font-twk-everett-mono: 'TWK Everett Mono', Space Mono;
  --text-caption: 11px;
  --leading-caption: 1.35;
  --text-body-sm: 15px;
  --leading-body-sm: 1.35;
  --text-body: 21px;
  --leading-body: 1.35;
  --text-body-lg: 32px;
  --leading-body-lg: 1.3;
  --text-heading-sm: 62px;
  --leading-heading-sm: 1.3;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-53: 53px;
  --spacing-59: 59px;
  --spacing-64: 64px;
  --spacing-150: 150px;
  --spacing-188: 188px;
  --radius-none: 0px;
}
```
