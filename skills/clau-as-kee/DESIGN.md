---
version: alpha
name: "clau.as.kee"
description: "Clau.as.kee employs a distinct, playful visual style foregrounding bold, oversized typography. A vibrant lavender canvas (#8e93ff) provides a backdrop for crisp black text and an occasional pop of vivid green as a functional accent. The layout is spacious, allowing typography to breathe and creating a sense of openness. Components are minimal, relying on stark color contrast and large round radii for visual identity rather than complex shadows or borders."
theme: "light"
industry: "design"
source_url: "https://clauaskee.com"
refero_style_id: "9aad4722-413d-4b32-bda7-6f94bbd9938c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513594951-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513594951-thumb.jpg"
extracted_at: "2026-04-30T01:47:15.387Z"
---

# clau.as.kee — Style Reference

> Playful Serif on Lavender

**Theme:** light

**Industry:** design

Clau.as.kee employs a distinct, playful visual style foregrounding bold, oversized typography. A vibrant lavender canvas (#8e93ff) provides a backdrop for crisp black text and an occasional pop of vivid green as a functional accent. The layout is spacious, allowing typography to breathe and creating a sense of openness. Components are minimal, relying on stark color contrast and large round radii for visual identity rather than complex shadows or borders.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #1a1a1a | `--color-midnight-ink` | Primary text, navigation links, borders, dark backgrounds for emphasis |
| Canvas Lavender | #8e93ff | `--color-canvas-lavender` | Primary page background, expansive section fills — a dominant, playful brand color |
| Digital Green | #47f654 | `--color-digital-green` | Interactive elements, action backgrounds (e.g., mailto links), badges — a high-contrast accent color that signals engagement |
| Paper White | #ffffff | `--color-paper-white` | Elevated card backgrounds, text contrast against dark surfaces |

## Tokens — Typography

### Beastly clauworks

- **Token:** `--font-beastly-clauworks`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 288px, 504px
- **Line heights:** 1.00, 1.05
- **Letter spacing:** normal
- **Role:** Hero display text, large decorative headlines – commands attention with its massive scale and distinctive, almost calligraphic form.

### Suisse Intl clauworks

- **Token:** `--font-suisse-intl-clauworks`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 20px, 30px, 144px
- **Line heights:** 1.15, 1.30, 1.33, 1.50
- **Letter spacing:** normal
- **Role:** Primary headings, subheadings, and larger body text – a crisp, modern sans-serif that balances the display font's expressiveness.

### Times

- **Token:** `--font-times`
- **Substitute:** Times New Roman
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.15
- **Letter spacing:** normal
- **Role:** Body text, paragraphs, smaller descriptive content – provides a classic, readable counterpoint to the more stylized display fonts.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.15 | 0px | `--text-body` |
| body-lg | 20px | 1.15 | 0px | `--text-body-lg` |
| heading-sm | 30px | 1.33 | 0px | `--text-heading-sm` |
| heading | 144px | 1.3 | 0px | `--text-heading` |
| display-lg | 288px | 1.05 | 0px | `--text-display-lg` |
| display-xl | 504px | 1 | 0px | `--text-display-xl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-130 | 130px | `--spacing-130` |
| spacing-202 | 202px | `--spacing-202` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 75px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 130px |
| cardPadding | 58px |
| elementGap | 30px |

## Components

### Pill Accent Button

**Role:** Primary call to action, interactive links

Filled with Digital Green (#47f654), black text Midnight Ink (#1a1a1a), and a radius of 75px. Padding is implicitly generous, creating a soft, inviting shape.

### Navigation Link

**Role:** Global navigation, secondary interactive elements

Uses Suisse Intl clauworks, weight 400, size 16px. Text color is Midnight Ink (#1a1a1a). Features a subtle underline on hover.

### Text Card

**Role:** Content presentation for projects or information blocks

White background (Paper White #ffffff), with Midnight Ink (#1a1a1a) as border color and text. Padding is spacious, typically around 58px on the sides. No explicit border radius is applied, creating sharp corners.

## Do's and Don'ts

### Do

- Prioritize Canvas Lavender (#8e93ff) as the dominant background color for most sections.
- Use Beastly clauworks for all hero and large decorative text, leveraging its large sizes (288px, 504px) and tight line-height.
- Apply a 75px border-radius to all circular or pill-shaped interactive elements like the Digital Green (#47f654) accent button.
- Maintain generous spacing, with section gaps typically at 130px and internal element gaps around 30px, to create an airy feel.
- Use Midnight Ink (#1a1a1a) for all primary body text and UI elements against light backgrounds.
- Introduce Digital Green (#47f654) only for explicit interactive actions or strong accents, never for large content areas.

### Don't

- Do not introduce complex shadow systems; elevation is indicated primarily by color contrast and surface changes.
- Avoid using multiple chromatic colors; stick to Canvas Lavender and Digital Green as the only brand-identifying hues.
- Do not center-align large blocks of body text; maintain a left-aligned reading rhythm for longer content.
- Do not use overly dense layouts or small text sizes that compromise the spacious visual language.
- Avoid strictly symmetrical layouts; embrace slight asymmetries in content arrangement to add visual interest.
- Do not use subtle variations of neutrals; the contrast between Midnight Ink (#1a1a1a) and Paper White (#ffffff) is sharp and intentional.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Lavender | #8e93ff | Primary page background, expansive sections |
| 1 | Paper White | #ffffff | Content cards, overlaid text blocks |
| 2 | Midnight Ink Overlay | #1a1a1a | Accented sections, background for high-contrast text |

## Imagery

The site primarily features a 'no imagery' UI, focusing instead on stark typography and color. Where visuals do appear, they are contained within rigid card structures or serve as background elements for large text. The only illustrative elements are playful, outlined emoji-style icons (like the green 'portfolio on request' badge). Its purpose is almost purely decorative and atmospheric, rather than content-focused, reflecting a design-centric brand identity.

## Layout

The layout is primarily full-bleed, with the Canvas Lavender (#8e93ff) background extending edge-to-edge, especially in hero and key sections. Content, when present, is loosely contained and allows very large typography to occasionally break visual bounds. Section rhythm is marked by consistent vertical spacing (130px) and distinct color blocks. Content arrangement often uses a large centered display headline over a colored background, followed by more conventional multi-column arrangements or card grids when showcasing project content. There is no strict fixed grid; elements are positioned with a confident, almost playful looseness.

## Similar Brands

- **The Browser Company (Arc)** — Uses a vibrant, distinct primary background color with minimal UI components and bold typography.
- **Figma** — Focuses on a clean visual language with a dominant single brand color (purple) for interactive elements and strong typographic hierarchy.
- **Muzli** — Features a strong, playful color palette and large, expressive typography for a distinct design aesthetic.
- **Superside** — Employs an asymmetrical, highly stylized typographic approach with strong brand color accents.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #1a1a1a;
  --color-canvas-lavender: #8e93ff;
  --color-digital-green: #47f654;
  --color-paper-white: #ffffff;
  --font-beastly-clauworks: 'Beastly clauworks', Playfair Display;
  --font-suisse-intl-clauworks: 'Suisse Intl clauworks', Inter;
  --font-times: 'Times', Times New Roman;
  --text-body: 16px;
  --leading-body: 1.15;
  --tracking-body: 0px;
  --text-body-lg: 20px;
  --leading-body-lg: 1.15;
  --tracking-body-lg: 0px;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: 0px;
  --text-heading: 144px;
  --leading-heading: 1.3;
  --tracking-heading: 0px;
  --text-display-lg: 288px;
  --leading-display-lg: 1.05;
  --tracking-display-lg: 0px;
  --text-display-xl: 504px;
  --leading-display-xl: 1;
  --tracking-display-xl: 0px;
  --spacing-5: 5px;
  --spacing-22: 22px;
  --spacing-30: 30px;
  --spacing-58: 58px;
  --spacing-65: 65px;
  --spacing-90: 90px;
  --spacing-130: 130px;
  --spacing-202: 202px;
  --radius-buttons: 75px;
  --surface-canvas-lavender: #8e93ff;
  --surface-paper-white: #ffffff;
  --surface-midnight-ink-overlay: #1a1a1a;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #1a1a1a;
  --color-canvas-lavender: #8e93ff;
  --color-digital-green: #47f654;
  --color-paper-white: #ffffff;
  --font-beastly-clauworks: 'Beastly clauworks', Playfair Display;
  --font-suisse-intl-clauworks: 'Suisse Intl clauworks', Inter;
  --font-times: 'Times', Times New Roman;
  --text-body: 16px;
  --leading-body: 1.15;
  --tracking-body: 0px;
  --text-body-lg: 20px;
  --leading-body-lg: 1.15;
  --tracking-body-lg: 0px;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: 0px;
  --text-heading: 144px;
  --leading-heading: 1.3;
  --tracking-heading: 0px;
  --text-display-lg: 288px;
  --leading-display-lg: 1.05;
  --tracking-display-lg: 0px;
  --text-display-xl: 504px;
  --leading-display-xl: 1;
  --tracking-display-xl: 0px;
  --spacing-5: 5px;
  --spacing-22: 22px;
  --spacing-30: 30px;
  --spacing-58: 58px;
  --spacing-65: 65px;
  --spacing-90: 90px;
  --spacing-130: 130px;
  --spacing-202: 202px;
  --radius-buttons: 75px;
  --surface-canvas-lavender: #8e93ff;
  --surface-paper-white: #ffffff;
  --surface-midnight-ink-overlay: #1a1a1a;
}
```
