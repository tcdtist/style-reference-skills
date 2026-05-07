---
version: alpha
name: "Jonas Pelzer"
description: "Jonas Pelzer's design system evokes an industrial, dot-matrix digital aesthetic on a clean white canvas. Typography blends a monospaced display font with a classic serif for body text, creating a tech-forward yet grounded feel. Interactions are highlighted with a distinct violet, often in subtle outlines or transparent fills, suggesting responsive interfaces and active states without overwhelming the stark, high-contrast monochrome base. Surface treatments favor soft, rounded cards and ghost buttons, maintaining lightness across the layout."
theme: "light"
industry: "design"
source_url: "https://jonaspelzer.com"
refero_style_id: "dd96b76a-b691-49e7-ba8f-1cdc8f7172e6"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519093301-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519093301-thumb.jpg"
extracted_at: "2026-04-30T03:18:30.512Z"
---

# Jonas Pelzer — Style Reference

> dot-matrix digital blueprint

**Theme:** light

**Industry:** design

Jonas Pelzer's design system evokes an industrial, dot-matrix digital aesthetic on a clean white canvas. Typography blends a monospaced display font with a classic serif for body text, creating a tech-forward yet grounded feel. Interactions are highlighted with a distinct violet, often in subtle outlines or transparent fills, suggesting responsive interfaces and active states without overwhelming the stark, high-contrast monochrome base. Surface treatments favor soft, rounded cards and ghost buttons, maintaining lightness across the layout.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button backgrounds, active navigation text |
| Ink Black | #000000 | `--color-ink-black` | Primary text, headings, body copy, list items, card text, general borders, button outlines |
| Ghost Gray | #d4d6dd | `--color-ghost-gray` | Subtle button borders, decorative strokes |
| Digital Violet | #3502ff | `--color-digital-violet` | Violet outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Muted Lilac | #d7ccff | `--color-muted-lilac` | Violet accent for outlined action borders, linked labels, and lightweight interactive emphasis. Do not promote it to the primary CTA color |
| Action Grape | #5d35ff | `--color-action-grape` | Violet text accent for links, tags, and emphasized short phrases. Do not promote it to the primary CTA color |

## Tokens — Typography

### Scope

- **Token:** `--font-scope`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 13px, 14px, 17px, 22px, 42px
- **Line heights:** 1.00, 1.10, 1.20
- **Letter spacing:** 0.0200em at 13-14px, 0.0250em at 17-22px, 0.0360em at 42px
- **Role:** Display headings and navigation items — its monospaced, dot-matrix character is a signature choice, giving a distinct digital, architectural feel. This font defines the brand's machine-like precision.

### Signifier

- **Token:** `--font-signifier`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 15px, 16px, 18px, 22px, 25px, 42px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** 0.0200em
- **Role:** Body copy, list items, and subheadings — its classic serif presence grounds the design, providing readability and a timeless counterpoint to the more rigid display font. Offers a sense of established authority.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.1 | 0.26px | `--text-caption` |
| body | 15px | 1.2 | 0.3px | `--text-body` |
| heading-sm | 22px | 1 | 0.55px | `--text-heading-sm` |
| heading | 25px | 1 | 0.5px | `--text-heading` |
| display | 42px | 1 | 1.512px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-37 | 37px | `--spacing-37` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-138 | 138px | `--spacing-138` |
| spacing-154 | 154px | `--spacing-154` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| navbar | 8.26px |
| buttons | 12px |
| default | 12px |
| navbarItem | 3.5px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(53, 2, 255, 0.1) 0px 1px 4px 2px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 14px |
| elementGap | 5px |

## Components

### Ghost Button

**Role:** Navigation and secondary actions

Transparent background with a subtle border in Ghost Gray (#d4d6dd). Text is Ink Black (#000000). Radius is 12px. Used for navigation elements and low-hierarchy actions, maintaining a minimal aesthetic.

### Outlined Violet Button

**Role:** Primary Call to Action

Transparent background, Muted Lilac (#d7ccff) border at 1px. Text is Action Grape (#5d35ff). Padding is 6px vertical, 14px horizontal. Radius is 12px. Visually distinct as the primary action through its chromatic outline and text color.

### Work Card

**Role:** Portfolio item container

Background in Muted Lilac (rgba(53, 2, 255, 0.1)), with a 12px border-radius. No box shadow. Used to subtly contain portfolio items, featuring a soft violet tint.

### Navigation Link (Active)

**Role:** Current page indicator

Background in Digital Violet (#3502ff), text in Canvas White (#ffffff). Radius is 3.5px for individual items, contained within a navbar with 8.26px radius. Creates a strong visual cue for the active state.

### Navigation Wrap

**Role:** Container for primary navigation

Background opacity of Canvas White (rgba(255, 255, 255, 0.3)), with a Digital Violet (rgba(53, 2, 255, 0.2)) border. Blur filter of 10px applied. Has a radius of 8.26px and a shadow rgba(53, 2, 255, 0.1) 0px 1px 4px 2px.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) for page backgrounds to maintain an open, clean aesthetic.
- Use Ink Black (#000000) for all primary text elements, ensuring high contrast and legibility.
- Apply Digital Violet (#3502ff) exclusively for active navigation states and decorative accents.
- Use the Scope typeface for all headings and navigation to leverage its distinctive digital character.
- Employ a 12px border-radius for all cards and buttons to ensure a consistent softened aesthetic.
- Utilize Muted Lilac (#d7ccff) for ghost button outlines and subtle card backgrounds.
- Maintain a compact elementGap of 5px to keep interactive elements closely related.

### Don't

- Do not use highly saturated colors for large background areas; maintain a light monochromatic base.
- Avoid heavy drop shadows; implement transparent shadows like rgba(53, 2, 255, 0.1) 0px 1px 4px 2px sparingly, only for elevated components like the navigation wrap.
- Do not use generic system fonts for headings; maintain the distinct visual identity provided by Scope.
- Do not apply excessive padding to cards or buttons; adhere to the compact 6px vertical, 14px horizontal button padding and 14px card padding.
- Do not introduce strong visual dividers between sections; rely on spacing and subtle background shifts to define content blocks.
- Avoid bold or heavy weights for any typeface; the design relies on the weight 400 of Scope and Signifier for consistent typography.
- Do not use solid fills for primary action buttons; always use the outlined Muted Lilac style.

## Elevation

- **Navigation Wrap:** `rgba(53, 2, 255, 0.1) 0px 1px 4px 2px`

## Similar Brands

- **Figma** — Clean white backgrounds with accent colors defining interactive elements and a focus on UI typography.
- **Linear** — High contrast dark text on light backgrounds, with a specific accent color for interactions and a strong emphasis on typographic clarity.
- **Read.cv** — Minimalist aesthetic driven by typography and subtle accent colors on a largely achromatic canvas.
- **Stripe (early designs)** — A similar approach to using distinct, clear typography combined with a single saturated color to highlight key actions against a clean, white background.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-ghost-gray: #d4d6dd;
  --color-digital-violet: #3502ff;
  --color-muted-lilac: #d7ccff;
  --color-action-grape: #5d35ff;
  --font-scope: 'Scope', IBM Plex Mono;
  --font-signifier: 'Signifier', Playfair Display;
  --text-caption: 13px;
  --leading-caption: 1.1;
  --tracking-caption: 0.26px;
  --text-body: 15px;
  --leading-body: 1.2;
  --tracking-body: 0.3px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1;
  --tracking-heading-sm: 0.55px;
  --text-heading: 25px;
  --leading-heading: 1;
  --tracking-heading: 0.5px;
  --text-display: 42px;
  --leading-display: 1;
  --tracking-display: 1.512px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-37: 37px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-138: 138px;
  --spacing-154: 154px;
  --radius-cards: 12px;
  --radius-navbar: 8.26px;
  --radius-buttons: 12px;
  --radius-default: 12px;
  --radius-navbaritem: 3.5px;
  --shadow-xl: rgba(53, 2, 255, 0.1) 0px 1px 4px 2px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-ghost-gray: #d4d6dd;
  --color-digital-violet: #3502ff;
  --color-muted-lilac: #d7ccff;
  --color-action-grape: #5d35ff;
  --font-scope: 'Scope', IBM Plex Mono;
  --font-signifier: 'Signifier', Playfair Display;
  --text-caption: 13px;
  --leading-caption: 1.1;
  --tracking-caption: 0.26px;
  --text-body: 15px;
  --leading-body: 1.2;
  --tracking-body: 0.3px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1;
  --tracking-heading-sm: 0.55px;
  --text-heading: 25px;
  --leading-heading: 1;
  --tracking-heading: 0.5px;
  --text-display: 42px;
  --leading-display: 1;
  --tracking-display: 1.512px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-37: 37px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-138: 138px;
  --spacing-154: 154px;
  --radius-cards: 12px;
  --radius-navbar: 8.26px;
  --radius-buttons: 12px;
  --radius-default: 12px;
  --radius-navbaritem: 3.5px;
  --shadow-xl: rgba(53, 2, 255, 0.1) 0px 1px 4px 2px;
}
```
