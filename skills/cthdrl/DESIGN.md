---
version: alpha
name: "cthdrl"
description: "Cthdrl presents a stark, high-contrast dark mode aesthetic, leveraging deep black backgrounds for dramatic visual impact. Typography is central, utilizing two bespoke sans-serif fonts in varied sizes to establish a strong hierarchical rhythm and distinctive brand voice. Interactive elements are minimalist, appearing as ghost controls or text links with a subtle off-white highlight, maintaining the overall severe and sophisticated atmosphere. The visual system emphasizes spaciousness, relying on precise typographic arrangement and discreet dividing lines rather than heavy components or decorative flourishes."
theme: "dark"
industry: "design"
source_url: "https://cthdrl.co"
refero_style_id: "565bfc50-3a19-4224-9a4c-125edaeb7bef"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516091238-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516091238-thumb.jpg"
extracted_at: "2026-04-30T02:28:26.053Z"
---

# cthdrl — Style Reference

> Black canvas, stark typography

**Theme:** dark

**Industry:** design

Cthdrl presents a stark, high-contrast dark mode aesthetic, leveraging deep black backgrounds for dramatic visual impact. Typography is central, utilizing two bespoke sans-serif fonts in varied sizes to establish a strong hierarchical rhythm and distinctive brand voice. Interactive elements are minimalist, appearing as ghost controls or text links with a subtle off-white highlight, maintaining the overall severe and sophisticated atmosphere. The visual system emphasizes spaciousness, relying on precise typographic arrangement and discreet dividing lines rather than heavy components or decorative flourishes.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Void | #000000 | `--color-midnight-void` | Page backgrounds, card surfaces, all primary backgrounds. Creates a high-contrast foundation for content |
| Ghost Sand | #e7ded1 | `--color-ghost-sand` | Primary text color, link text, navigation text, ghost button borders, and decorative accents. Provides stark contrast against the dark background |

## Tokens — Typography

### NB Akademie

- **Token:** `--font-nb-akademie`
- **Substitute:** Montserrat
- **Weights:** 400
- **Sizes:** 32px, 35px, 121px
- **Line heights:** 0.85, 1.00, 1.20
- **Letter spacing:** -0.016, -0.01
- **Role:** Headlines and prominent display text. Its wide character forms at large sizes define the brand's assertive yet clean typographic voice, with tight tracking enhancing its impact.

### NB Akademie Mono

- **Token:** `--font-nb-akademie-mono`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 11px, 32px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** -0.045
- **Role:** Body text, navigation, links, and various informational elements. Its monospace nature adds a technical, precise feel, with negative letter-spacing for a compact appearance.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| heading-sm | 32px | 1.2 | -0.512px | `--text-heading-sm` |
| heading | 35px | 1 | -0.56px | `--text-heading` |
| display | 121px | 0.85 | -1.936px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-75 | 75px | `--spacing-75` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 26px |
| cardPadding | 0px |
| elementGap | 10px |

## Components

### Ghost Navigation Link

**Role:** Top navigation and inline links

Uses Ghost Sand text on Midnight Void background, with 10px right padding for spacing between items. No border or radius, relying on text color for interaction states.

### Ghost Primary Button

**Role:** Call to action buttons

Text in Ghost Sand, with a 1px solid Ghost Sand border. Background is Midnight Void. No border radius or padding, creating a minimal, text-focused interactive element. The border is a subtle underline.

## Do's and Don'ts

### Do

- Prioritize Midnight Void (#000000) for all background surfaces to maintain high contrast and the dark theme.
- Use Ghost Sand (#e7ded1) as the primary color for all text, links, and interactive element outlines.
- Employ NB Akademie for large, impactful headlines, ensuring letter-spacing values (-0.0160em to -0.0100em) are applied for proper visual density.
- Reserve NB Akademie Mono for body text, navigation, and detailed information, using its distinctive negative letter-spacing (-0.0450em) to create a compact, structured feel.
- Maintain a spacious density in layouts, utilizing 26px for section gaps and 10px for element gaps to provide ample breathing room between content blocks.
- Implement Ghost Primary Buttons using Ghost Sand (#e7ded1) text and a 1px solid Ghost Sand border on a Midnight Void background, with no padding or radius.
- Utilize 1px Ghost Sand (#e7ded1) lines for subtle visual dividers, such as those seen in the header and alongside body text blocks.

### Don't

- Avoid using saturated or vivid colors for primary UI elements; color is reserved for decorative gradients or specific content within page sections.
- Do not introduce heavy shadows or elevation; the design relies on flat surfaces and high contrast for visual hierarchy.
- Refrain from using rounded corners on any UI elements; all corners should be sharp and angular (0px radius).
- Do not use generic system fonts; NB Akademie and NB Akademie Mono are essential to the brand's typographic identity.
- Avoid dense, information-heavy blocks of text without sufficient line breaks or spacing; maintain the spacious and minimalist aesthetic.
- Do not use filled buttons for primary calls to action; ghost buttons with a border are characteristic of this design system.
- Minimize the use of multiple font weights; the system primarily uses weight 400 for both typefaces.

## Imagery

The site uses minimal imagery, primarily relying on abstract, subtle line work and geometric arcs that weave across the dark background as decorative elements. Iconography, when present in the header, is monochromatic (Ghost Sand outline on Midnight Void fill), featuring a delicate stroke weight. The visual language is text-dominant, with graphics serving as atmospheric accents rather than prominent content showcases, contributing to a disciplined and structural feel.

## Layout

The page model is full-bleed, with a centered content approach that does not impose a strict max-width but rather uses horizontal white space as part of its design. The hero section is characterized by a full-bleed dark background with a large, centered headline that dominates the viewport. The section rhythm is primarily seamless, relying on typographic shifts and subtle dividing lines rather than alternating background colors. Content is often presented in a single column stack, emphasizing large headlines with smaller, supporting text blocks. Navigation is a minimal top bar, with elements precisely spaced and aligned.

## Similar Brands

- **Aether** — Shares a stark, minimalist black and white aesthetic with large, imposing typography and subtle line work.
- **Basic.Space** — Employs high-contrast dark backgrounds, large-scale sans-serif typography, and a reserved use of interactive elements.
- **Huge Inc.** — Exhibits a similar focus on bold, large-scale headings and a clean, almost austere dark-mode presentation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-void: #000000;
  --color-ghost-sand: #e7ded1;
  --font-nb-akademie: 'NB Akademie', Montserrat;
  --font-nb-akademie-mono: 'NB Akademie Mono', Space Mono;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.512px;
  --text-heading: 35px;
  --leading-heading: 1;
  --tracking-heading: -0.56px;
  --text-display: 121px;
  --leading-display: 0.85;
  --tracking-display: -1.936px;
  --spacing-0: 0px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-75: 75px;
  --radius-buttons: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-void: #000000;
  --color-ghost-sand: #e7ded1;
  --font-nb-akademie: 'NB Akademie', Montserrat;
  --font-nb-akademie-mono: 'NB Akademie Mono', Space Mono;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.512px;
  --text-heading: 35px;
  --leading-heading: 1;
  --tracking-heading: -0.56px;
  --text-display: 121px;
  --leading-display: 0.85;
  --tracking-display: -1.936px;
  --spacing-0: 0px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-75: 75px;
  --radius-buttons: 0px;
}
```
