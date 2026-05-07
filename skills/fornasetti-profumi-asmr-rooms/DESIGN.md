---
version: alpha
name: "Fornasetti Profumi ASMR Rooms"
description: "Fornasetti Profumi ASMR creates a deeply immersive, almost reverent atmosphere through its use of a pure black canvas and delicate, antique-inspired typography. The UI is exceptionally sparse, relying on subtle outlined interactive elements and minimal text to guide the user. The aesthetic is one of quiet luxury and focused attention, where UI elements are barely-there whispers rather than prominent features."
theme: "dark"
industry: "other"
source_url: "https://www.fornasettiprofumi.com"
refero_style_id: "d9fca67f-0b4c-4ba5-ab95-2b3b1018d5a3"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513594839-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513594839-thumb.jpg"
extracted_at: "2026-04-30T01:47:26.698Z"
---

# Fornasetti Profumi ASMR Rooms — Style Reference

> velvet darkness, whispered elegance

**Theme:** dark

**Industry:** other

Fornasetti Profumi ASMR creates a deeply immersive, almost reverent atmosphere through its use of a pure black canvas and delicate, antique-inspired typography. The UI is exceptionally sparse, relying on subtle outlined interactive elements and minimal text to guide the user. The aesthetic is one of quiet luxury and focused attention, where UI elements are barely-there whispers rather than prominent features.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Canvas | #000000 | `--color-midnight-canvas` | Page backgrounds, full-bleed sections, ambient darkness |
| Antique Ivory | #ffffff | `--color-antique-ivory` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Shadowed Slate | #4d4d4d | `--color-shadowed-slate` | Muted helper text, secondary information, very subtle borders – recedes into the background, providing information without drawing attention |

## Tokens — Typography

### Quadrant Text Mono

- **Token:** `--font-quadrant-text-mono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 10px, 12px, 16px
- **Line heights:** 1.00, 1.30, 1.50
- **Letter spacing:** -0.15em
- **Role:** Decorative labels, small utility text, captions. The generous letter-spacing makes it airy and subtle, almost a visual texture.

### Quadrant Text Mono

- **Token:** `--font-quadrant-text-mono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 10px, 12px, 16px
- **Line heights:** 1.00, 1.30, 1.50
- **Letter spacing:** -0.15em
- **Role:** Body text for descriptions and detail. Maintains legibility while keeping the ethereal, sparse feel.

### Quadrant Text Mono

- **Token:** `--font-quadrant-text-mono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 10px, 12px, 16px
- **Line heights:** 1.00, 1.30, 1.50
- **Letter spacing:** -0.15em
- **Role:** Main content headings, interactive element text. The wide letter-spacing is a signature, lending an antique, almost hand-set quality.

### Fornasetti Text

- **Token:** `--font-fornasetti-text`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.30
- **Letter spacing:** 0.03em
- **Role:** Primary headings, elegant titles. Its slight serif and more compact letter-spacing provide a touch of classic sophistication against the monospaced backdrop.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.3 | — | `--text-caption` |
| body-sm | 12px | 1.3 | — | `--text-body-sm` |
| body | 16px | 1.3 | — | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |

### Border Radius

| Element | Value |
| --- | --- |
| elements | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 900px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Ghost Circular Action Button

**Role:** Primary interactive elements

A purely outlined circular button with a 0px border-radius, using Antique Ivory (#ffffff) for its border and text. Buttons are visually light, almost transparent, aligning with the ethereal aesthetic. Text uses Quadrant Text Mono at 16px with -0.15em letter-spacing. Padding for these specific circular elements is implicitly driven by their content, not explicit padding tokens in the data. The visual shape is a circle due to internal SVG paths, which acts as the 'button'.

### Introductory Text Block

**Role:** Hero and section introductions

Centered text blocks on the Midnight Canvas (#000000) background. Main headline uses Fornasetti Text 16px with 0.03em letter-spacing, color Antique Ivory (#ffffff). Subtext uses Quadrant Text Mono 16px with -0.15em letter-spacing, color Antique Ivory (#ffffff). Content areas are constrained to a max-width of 900px, creating focused viewing.

### Navigation Link

**Role:** Accessing different 'rooms' or sections

Simple text links using Antique Ivory (#ffffff) on the Midnight Canvas (#000000). Uses Quadrant Text Mono 16px, -0.15em letter-spacing. Padded horizontally with 48px to create generous whitespace, serving as discrete navigation items.

### Body Copy Text

**Role:** Detailed descriptions

Body copy uses Quadrant Text Mono 12px with -0.15em letter-spacing and Antique Ivory (#ffffff) color, creating a readable yet subdued presence. Lines are set with 1.3 line height.

### Muted Footer Text

**Role:** Legal or experience guidance text

Small, functional text blocks using Shadowed Slate (#4d4d4d) for extreme subtlety against Midnight Canvas (#000000), using Quadrant Text Mono at 10px with -0.15em letter-spacing. Intended to be almost invisible boilerplate.

## Do's and Don'ts

### Do

- Ground all designs in Midnight Canvas (#000000) for backgrounds and primary surfaces.
- Use Antique Ivory (#ffffff) sparingly for primary text and subtle UI outlines to create luminous contrast.
- Employ Quadrant Text Mono (IBM Plex Mono) with -0.15em letter-spacing for the majority of UI text to maintain the ethereal, spaced-out feel.
- Limit interactive elements to pure outlines or text-only, avoiding solid filled backgrounds for buttons unless explicitly necessary.
- Maintain a clear sense of visual spaciousness, especially around interactive elements where 48px horizontal padding is typical.
- Utilize Fornasetti Text (Playfair Display) for key headlines or titles, leveraging its classic serif appearance at 16px 400 weight with 0.03em letter-spacing.
- Ensure all components have a 0px border radius, contributing to a sharp, uncluttered aesthetic.

### Don't

- Do not introduce highly saturated colors; the palette is strictly achromatic and relies on subtle contrast for visual interest.
- Avoid heavy shadows or gradients; elevation should be achieved through subtle borders or implied depth via content placement.
- Do not use generic sans-serif fonts; the distinct monospaced and serif typefaces are fundamental to the brand's atmosphere.
- Avoid dense, information-heavy layouts; prioritize generous white space and minimal content presentation.
- Do not deviate from the 0px border radius; rounded corners would disrupt the precise, antique quality of the design.
- Do not animate elements with fast, jarring transitions; motion should be smooth and subtle (circa 0.5s ease).
- Do not overload screens with interactive elements; the UI is meant to be sparse and meditative.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Midnight Canvas | #000000 | Primary page background, creating a deep, void-like atmosphere. |

## Imagery

The site primarily features a lack of overt imagery, creating a stark, UI-dominant experience. When 'imagery' is present, it is represented by conceptual, almost abstract interactive candle elements, consisting of simple white outlines on the black canvas. These outlined 'candles' serve as functional interaction points that reveal content rather than decorative graphics. Icons, if present, are minimal simple outlines. The visual language emphasizes emptiness and suggestion over overt visual content, allowing the focus to remain on the poetic text and implied sensory experience.

## Layout

The layout is primarily a full-bleed dark canvas with content constrained to a max-width of 900px and centered. The hero section features a centered headline and subtext over the Midnight Canvas. Subsequent sections also follow a centered, single-column content stack, each section appearing to be a distinct 'room' without strong visual dividers between them. The rhythm is slow and deliberate, with a focus on individual content blocks that fade into the dominant darkness. The navigation is minimal and appears as discreet, widely spaced text links or subtle outlined interactive elements.

## Similar Brands

- **Aēsop** — Shared aesthetic of understated luxury, minimal interfaces, emphasis on typography, and a deliberate, unhurried content presentation.
- **Bang & Olufsen** — Similar approach to dark, immersive UI, precise typography with significant letter-spacing, and a focus on core content with minimal distractions.
- **Le Moniteur des Parfums** — Emphasizes a premium, editorial aesthetic with generous white (or in this case, black) space and classic typography.
- **The Art of Shaving** — A blend of traditional elegance with minimalist digital presence, using classic typefaces against a refined, simple color palette.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-canvas: #000000;
  --color-antique-ivory: #ffffff;
  --color-shadowed-slate: #4d4d4d;
  --font-quadrant-text-mono: 'Quadrant Text Mono', IBM Plex Mono;
  --font-quadrant-text-mono: 'Quadrant Text Mono', IBM Plex Mono;
  --font-quadrant-text-mono: 'Quadrant Text Mono', IBM Plex Mono;
  --font-fornasetti-text: 'Fornasetti Text', Playfair Display;
  --text-caption: 10px;
  --leading-caption: 1.3;
  --text-body-sm: 12px;
  --leading-body-sm: 1.3;
  --text-body: 16px;
  --leading-body: 1.3;
  --spacing-8: 8px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --radius-elements: 0px;
  --surface-midnight-canvas: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-canvas: #000000;
  --color-antique-ivory: #ffffff;
  --color-shadowed-slate: #4d4d4d;
  --font-quadrant-text-mono: 'Quadrant Text Mono', IBM Plex Mono;
  --font-quadrant-text-mono: 'Quadrant Text Mono', IBM Plex Mono;
  --font-quadrant-text-mono: 'Quadrant Text Mono', IBM Plex Mono;
  --font-fornasetti-text: 'Fornasetti Text', Playfair Display;
  --text-caption: 10px;
  --leading-caption: 1.3;
  --text-body-sm: 12px;
  --leading-body-sm: 1.3;
  --text-body: 16px;
  --leading-body: 1.3;
  --spacing-8: 8px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --radius-elements: 0px;
  --surface-midnight-canvas: #000000;
}
```
