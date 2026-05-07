---
version: alpha
name: "Kinfolk"
description: "Kinfolk cultivates an atmosphere of understated elegance and classic publishing. Its design relies on a spacious, monochrome canvas with strong typographic hierarchy, favoring custom serif fonts for headlines and body text to evoke a sense of heritage and literary depth. Interaction is minimal, with ghost-like controls and strong black borders that frame content like traditional print media. The aesthetic emphasizes clean lines and ample negative space, allowing imagery and text to breathe and command attention."
theme: "light"
industry: "media"
source_url: "https://www.kinfolk.com"
refero_style_id: "ac9b040e-36aa-4881-ada5-72d4744947a4"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509712783-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509712783-thumb.jpg"
extracted_at: "2026-04-30T00:42:17.633Z"
---

# Kinfolk — Style Reference

> Literary magazine, minimal frames

**Theme:** light

**Industry:** media

Kinfolk cultivates an atmosphere of understated elegance and classic publishing. Its design relies on a spacious, monochrome canvas with strong typographic hierarchy, favoring custom serif fonts for headlines and body text to evoke a sense of heritage and literary depth. Interaction is minimal, with ghost-like controls and strong black borders that frame content like traditional print media. The aesthetic emphasizes clean lines and ample negative space, allowing imagery and text to breathe and command attention.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button backgrounds, interactive elements' hover states |
| Ink Black | #000000 | `--color-ink-black` | Primary text, headings, strong borders, interactive elements' static states, button backgrounds for filled variants |
| Paper Gray | #dbded5 | `--color-paper-gray` | Subtle background for UI elements, secondary surfaces, and very muted text contrast |

## Tokens — Typography

### Kinfolk-Serif-Text

- **Token:** `--font-kinfolk-serif-text`
- **Substitute:** Lora
- **Weights:** 400
- **Sizes:** 15px, 20px
- **Line heights:** 1.25, 1.33, 1.50
- **Letter spacing:** normal
- **Role:** Body text and subheadings. Its generous line height contributes to readability and the overall spacious layout.

### Kinfolk-Serif-Deck

- **Token:** `--font-kinfolk-serif-deck`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 25px, 32px, 50px, 60px
- **Line heights:** 1.00, 1.04, 1.16, 1.19
- **Letter spacing:** -0.0100em, -0.0050em
- **Role:** Hero headlines and section titles. The wide letter spacing at larger sizes gives a stately, editorial feel.

### Kinfolk-Sans

- **Token:** `--font-kinfolk-sans`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 13px, 15px, 16px, 20px, 25px
- **Line heights:** 1.16, 1.31, 1.33, 1.50
- **Letter spacing:** -0.0050em, 0.0100em, 0.0200em, 0.0300em, 0.0600em
- **Role:** Captions, button text, and smaller UI labels. Its neutrality balances the classic elegance of the serif fonts.

### Arial

- **Token:** `--font-arial`
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.2
- **Role:** Arial — detected in extracted data but not described by AI

### Kinfolk-Serif-Display

- **Token:** `--font-kinfolk-serif-display`
- **Weights:** 400
- **Sizes:** 20px
- **Line heights:** 0.85
- **Letter spacing:** -0.025
- **Role:** Kinfolk-Serif-Display — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-lg | 16px | 1.33 | — | `--text-body-lg` |
| subheading | 20px | 1.25 | -0.5px | `--text-subheading` |
| heading | 25px | 1.16 | -0.25px | `--text-heading` |
| heading-lg | 32px | 1.04 | -0.32px | `--text-heading-lg` |
| display | 50px | 1 | -0.5px | `--text-display` |
| display-lg | 60px | 1.19 | -0.6px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-91 | 91px | `--spacing-91` |
| spacing-102 | 102px | `--spacing-102` |
| spacing-110 | 110px | `--spacing-110` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-114 | 114px | `--spacing-114` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-141 | 141px | `--spacing-141` |
| spacing-170 | 170px | `--spacing-170` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-285 | 285px | `--spacing-285` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 2px |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 25px |
| cardPadding | 0px |
| elementGap | 20px |

## Components

### Ghost Button

**Role:** Minimal interactive elements with a strong border, common for secondary actions.

Background: transparent (rgba(0, 0, 0, 0)), Text: Ink Black (#000000), Border: 1px solid Ink Black (#000000), Padding: 1px top/bottom, 6px left/right. Radius: 0px.

### Outlined Button

**Role:** General purpose buttons for secondary actions or links, maintaining a light footprint.

Background: Canvas White (#ffffff), Text: Ink Black (#000000), Border: 1px solid Ink Black (#000000), Padding: 9px top, 7px bottom, 30px left/right. Radius: 0px.

### Filled Button

**Role:** Primary calls to action, providing high contrast and visual weight.

Background: Ink Black (#000000), Text: Canvas White (#ffffff), Border: 1px solid Ink Black (#000000), Padding: 9px top, 7px bottom, 30px left/right. Radius: 0px.

### Content Card

**Role:** Displaying articles or features with a focus on imagery and text.

Background: transparent (rgba(0,0,0,0)), Border: none, Shadow: none, Padding: 0px. Emphasizes content over container.

### Input Field

**Role:** Standard text input fields, visually minimal.

Background: Canvas White (#ffffff), Text: Ink Black (#000000), Border: 1px solid Ink Black (#000000), Padding: 0px. Radius: 0px.

## Do's and Don'ts

### Do

- Always use Kinfolk-Serif-Deck for hero and main section headlines to convey editorial gravitas.
- Maintain generous line heights (e.g., 1.5 for body text) throughout the design to enhance readability and spaciousness.
- Frame crucial interactive elements with a distinct 1px solid Ink Black (#000000) border, especially for ghost or outlined buttons.
- Prioritize Canvas White (#ffffff) backgrounds with Ink Black (#000000) text for all primary content areas.
- Apply 0px border radius as a default for all elements to maintain a sharp, classic aesthetic, except for specific interactive links which can use 2px.
- Use a minimum element gap of 20px (from elementGap token) between distinct content blocks to preserve visual breathing room.
- Ensure all black text on white backgrounds achieves AAA contrast ratio (21.0:1) for optimal accessibility and visual clarity.

### Don't

- Avoid using drop shadows or complex gradients; the design relies on flat surfaces and high contrast borders.
- Do not introduce highly saturated colors; stick to the achromatic palette with occasional photographic color accents.
- Never use rounded corners on cards or primary buttons; maintain a strict 0px radius for these elements.
- Minimize visual clutter; every element should have ample negative space around it.
- Do not deviate from the specified font families; their custom nature is central to the brand's identity.
- Avoid dense packing of information; break content into distinct, well-spaced blocks.
- Refrain from using thin, light gray text on white backgrounds; ensure sufficient contrast for all text elements.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background, base for all content. |
| 1 | Paper Gray | #dbded5 | Subtle background for specific sections or UI elements, providing minimal visual separation. |
| 2 | Ink Black | #000000 | Background for footer or full-width feature sections, creating strong contrast and visual anchors. |

## Imagery

Imagery on Kinfolk is a central element, frequently occupying large sections. It primarily features high-quality, often editorial or lifestyle photography that ranges from bright and airy to moodier, more contemplative scenes, often with a muted or desaturated color palette. Photography is typically full-bleed or contained within sharp, unrounded frames, presented without overlapping elements. The focus is on product/subject-focused shots or candid, natural compositions. Illustrations, when present, are simple, monochromatic, and used minimally. Icons are outlined, simple, and monochrome, often Ink Black, used functionally rather than decoratively to create a clean UI. Imagery serves a dual role: both as explanatory content and to establish the brand's atmospheric mood and aesthetic.

## Layout

The page primarily uses a max-width contained model with significant white space, although some hero and content sections break to full-bleed. The hero pattern often involves a large, atmospheric image or a combination with a prominent, centered headline in Kinfolk-Serif-Deck. Sections typically flow vertically with consistent, generous vertical spacing, primarily using either a simple centered stack for text and imagery or a grid of cards. There's a strong visual rhythm established by alternating content blocks horizontally, often a 2-column with text on one side and an image on the other. Navigation is a minimal top bar that includes the brand logo and a discreet burger menu icon.

## Similar Brands

- **Apartamento** — Shares a classic, minimalist magazine aesthetic with strong serif typography and generous white space.
- **Cereal Magazine** — Similar focus on high-quality photography, a clean layout, and a muted, sophisticated color palette.
- **The New York Times (digital)** — Employs strong typographic hierarchy using serif fonts and a predominantly black and white scheme for an authoritative, editorial feel.
- **Monocle** — Known for a structured, print-inspired layout, limited color palette, and emphasis on elegant typography and imagery.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-paper-gray: #dbded5;
  --font-kinfolk-serif-text: 'Kinfolk-Serif-Text', Lora;
  --font-kinfolk-serif-deck: 'Kinfolk-Serif-Deck', Playfair Display;
  --font-kinfolk-sans: 'Kinfolk-Sans', Inter;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --font-kinfolk-serif-display: 'Kinfolk-Serif-Display', ui-sans-serif, system-ui, sans-serif;
  --text-body-lg: 16px;
  --leading-body-lg: 1.33;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.5px;
  --text-heading: 25px;
  --leading-heading: 1.16;
  --tracking-heading: -0.25px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.04;
  --tracking-heading-lg: -0.32px;
  --text-display: 50px;
  --leading-display: 1;
  --tracking-display: -0.5px;
  --text-display-lg: 60px;
  --leading-display-lg: 1.19;
  --tracking-display-lg: -0.6px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-43: 43px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-75: 75px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-91: 91px;
  --spacing-102: 102px;
  --spacing-110: 110px;
  --spacing-113: 113px;
  --spacing-114: 114px;
  --spacing-120: 120px;
  --spacing-141: 141px;
  --spacing-170: 170px;
  --spacing-200: 200px;
  --spacing-285: 285px;
  --radius-links: 2px;
  --radius-default: 0px;
  --surface-canvas-white: #ffffff;
  --surface-paper-gray: #dbded5;
  --surface-ink-black: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #000000;
  --color-paper-gray: #dbded5;
  --font-kinfolk-serif-text: 'Kinfolk-Serif-Text', Lora;
  --font-kinfolk-serif-deck: 'Kinfolk-Serif-Deck', Playfair Display;
  --font-kinfolk-sans: 'Kinfolk-Sans', Inter;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --font-kinfolk-serif-display: 'Kinfolk-Serif-Display', ui-sans-serif, system-ui, sans-serif;
  --text-body-lg: 16px;
  --leading-body-lg: 1.33;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.5px;
  --text-heading: 25px;
  --leading-heading: 1.16;
  --tracking-heading: -0.25px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.04;
  --tracking-heading-lg: -0.32px;
  --text-display: 50px;
  --leading-display: 1;
  --tracking-display: -0.5px;
  --text-display-lg: 60px;
  --leading-display-lg: 1.19;
  --tracking-display-lg: -0.6px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-43: 43px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-75: 75px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-91: 91px;
  --spacing-102: 102px;
  --spacing-110: 110px;
  --spacing-113: 113px;
  --spacing-114: 114px;
  --spacing-120: 120px;
  --spacing-141: 141px;
  --spacing-170: 170px;
  --spacing-200: 200px;
  --spacing-285: 285px;
  --radius-links: 2px;
  --radius-default: 0px;
  --surface-canvas-white: #ffffff;
  --surface-paper-gray: #dbded5;
  --surface-ink-black: #000000;
}
```
