---
version: alpha
name: "Kevin Basset"
description: "The Kevin Basset site adopts a 'notebook scribble' aesthetic, reminiscent of a student's hand-drawn notes on lined paper. The design is characterized by its light, monochrome palette, with all elements rendered as if sketched in black ink. Interactive elements, such as links, appear as light gray boxes, maintaining the paper-like texture. Handwriting-style typography reinforces this informal, personal, and childlike visual identity."
theme: "light"
industry: "other"
source_url: "https://kevin.tw"
refero_style_id: "e3f59efd-a254-43f1-9dac-36a35a4b290c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514878652-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514878652-thumb.jpg"
extracted_at: "2026-04-30T02:08:14.997Z"
---

# Kevin Basset — Style Reference

> ink-scribbled notebook paper

**Theme:** light

**Industry:** other

The Kevin Basset site adopts a 'notebook scribble' aesthetic, reminiscent of a student's hand-drawn notes on lined paper. The design is characterized by its light, monochrome palette, with all elements rendered as if sketched in black ink. Interactive elements, such as links, appear as light gray boxes, maintaining the paper-like texture. Handwriting-style typography reinforces this informal, personal, and childlike visual identity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink Black | #000000 | `--color-ink-black` | Dark borders and separators for elevated surfaces and inverted UI. |
| Paper White | #ffffff | `--color-paper-white` | Light neutral action fill for buttons on dark surfaces. |
| Pencil Sketch | #ececec | `--color-pencil-sketch` | Hover state for interactive links, subtle background fill for selected/active elements – evokes the lighter tone of pencil shading on paper |
| Notebook Line Teal | #1d97b8 | `--color-notebook-line-teal` | Decorative notebook lines – a subtle accent that defines the page's core structure (derived from linear-gradient) |

## Tokens — Typography

### system

- **Token:** `--font-system`
- **Substitute:** Avenir Next, sans-serif (for similar humanist sans-serif feel and good rendering)
- **Weights:** 400, 600, 700
- **Sizes:** 16px, 20px, 50px
- **Line heights:** 1.20
- **Letter spacing:** 0.0200em at 16px, 0.0500em at 20px, 0.0630em at 50px
- **Role:** All text elements, including headings, body, and interactive links. The humanist sans-serif with varying letter spacing contributes to the bespoke, slightly informal 'hand-drawn' feel of the site.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.2 | 0.32px | `--text-body` |
| subheading | 20px | 1.2 | 1px | `--text-subheading` |
| display | 50px | 1.2 | 3.15px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-100 | 100px | `--spacing-100` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 25px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Sketched Link Button (Default/Inactive)

**Role:** Primary interactive element for all links on the site.

A rectangular button-like element with a Paper White background, an Ink Black hand-drawn border, and Ink Black text. The corners are sharp, reinforcing the 'cut paper' aesthetic. The drawing effect is applied through illustrations.

### Sketched Link Button (Hover)

**Role:** Visual feedback for interactive links.

Similar to the default link button but with a Pencil Sketch background. The Ink Black border and text remain consistent, providing a subtle visual cue without departing from the monochrome scheme.

## Do's and Don'ts

### Do

- Use Ink Black (#000000) for all text, borders, and hand-drawn visual elements.
- Set the primary page background to Paper White (#ffffff) to simulate notebook paper.
- Apply Pencil Sketch (#ececec) as the background color for interactive elements on hover.
- Maintain the system sans-serif font across all text, emphasizing a hand-drawn yet legible feel.
- Ensure all interactive links have a visible Ink Black border and Paper White background by default.
- Integrate Notebook Line Teal (#1d97b8) only as decorative ruled lines, not for primary UI elements.

### Don't

- Avoid using any saturated colors for functional UI elements; the palette is strictly monochrome with a single subtle accent.
- Do not introduce rounded corners; elements should maintain sharp, cut-paper edges.
- Refrain from using shadows or gradients on interactive elements, as this would break the flat, hand-drawn aesthetic.
- Do not use multiple font families; stick to the single system font to maintain typographic consistency.
- Avoid typical button styling like strong background fills or complex hover animations that would distract from the sketched feel.
- Do not vary line heights from the specified 1.2 across different type sizes.

## Imagery

The site predominantly uses hand-drawn, black-ink illustrations and icons that mimic a quirky, child-like scribble aesthetic. There are no photographs or complex graphics. Visuals are contained and appear outlined, often with a slight wobble to convey an imperfect, unpolished feel. They serve both decorative and explanatory roles, like the robot graphic or the avatar sketch. Imagery density is moderate, with illustrations breaking up text blocks and adding character.

## Layout

The page uses a centered, max-width contained layout, though no specific max-width is provided, suggesting adaptability. The hero section features a prominent centered headline/name with a hand-drawn avatar. Content is primarily a vertical stack of uniform 'sketched link buttons,' each occupying its own horizontal band. There are no complex grid layouts or alternating section patterns; the rhythm is consistent and linear, like a list on a piece of paper.

## Similar Brands

- **Paper.js (website)** — Exploits a 'paper' aesthetic with hand-drawn lines complementing technical content.
- **Neat.css** — Emphasizes a 'hand-drawn' UI with deliberate imperfections and sketch-like lines.
- **Rough.js library** — Generates graphics that look hand-drawn with a sketch effect.
- **Hand-drawn.io** — A portfolio site using a deliberately informal, sketched visual style.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink-black: #000000;
  --color-paper-white: #ffffff;
  --color-pencil-sketch: #ececec;
  --color-notebook-line-teal: #1d97b8;
  --font-system: 'system', Avenir Next, sans-serif (for similar humanist sans-serif feel and good rendering);
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: 0.32px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: 1px;
  --text-display: 50px;
  --leading-display: 1.2;
  --tracking-display: 3.15px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-100: 100px;
  --radius-links: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-ink-black: #000000;
  --color-paper-white: #ffffff;
  --color-pencil-sketch: #ececec;
  --color-notebook-line-teal: #1d97b8;
  --font-system: 'system', Avenir Next, sans-serif (for similar humanist sans-serif feel and good rendering);
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: 0.32px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: 1px;
  --text-display: 50px;
  --leading-display: 1.2;
  --tracking-display: 3.15px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-100: 100px;
  --radius-links: 0px;
}
```
