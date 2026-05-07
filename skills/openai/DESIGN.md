---
version: alpha
name: "OpenAI"
description: "OpenAI.com reads like a blank page waiting to be written on — pure white, near-zero chromatic saturation (1%), and typography that does everything. The custom OpenAI Sans carries the entire visual weight: tightly tracked at -0.03em for large display text, it condenses space so headlines feel carved rather than set. Black (#000000) and border-gray (#e5e7eb) are the only tools; no accent colors, no gradients on the core UI, no decorative illustration. Color arrives exclusively through editorial imagery — soft-focus flower macros, pastel gradient thumbnail cards — making those images feel explosive against the white canvas. The signature tension is 9999px pills for interactive chips and inputs sitting inside a layout where cards use a very specific 6.08px radius, creating a system that pairs one extreme roundness with one precise near-flat radius."
theme: "light"
industry: "ai"
source_url: "https://openai.com"
refero_style_id: "dc541737-8bf2-4b31-b729-0352f696e82f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775930610847-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775930610847-thumb.jpg"
extracted_at: "2026-04-11T18:05:13.549Z"
---

# OpenAI — Style Reference

> Blank page before the first word — a design that treats white space as the most powerful element, reserving all color for user-generated and editorial content.

**Theme:** light

**Industry:** ai

OpenAI.com reads like a blank page waiting to be written on — pure white, near-zero chromatic saturation (1%), and typography that does everything. The custom OpenAI Sans carries the entire visual weight: tightly tracked at -0.03em for large display text, it condenses space so headlines feel carved rather than set. Black (#000000) and border-gray (#e5e7eb) are the only tools; no accent colors, no gradients on the core UI, no decorative illustration. Color arrives exclusively through editorial imagery — soft-focus flower macros, pastel gradient thumbnail cards — making those images feel explosive against the white canvas. The signature tension is 9999px pills for interactive chips and inputs sitting inside a layout where cards use a very specific 6.08px radius, creating a system that pairs one extreme roundness with one precise near-flat radius.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Void | #000000 | `--color-void` | Primary text, nav labels, filled CTA button background, icon fills — the singular chromatic anchor of the entire system |
| Fog Border | #e5e7eb | `--color-fog-border` | All dividing lines, card outlines, input borders, nav underlines — the lightest possible mark that still reads as a separator on white |
| Chalk | #f1f1f1 | `--color-chalk` | Hover-state button backgrounds, subtle surface fills — one step off pure white without introducing warmth |
| Graphite | #666666 | `--color-graphite` | Supporting body text, icon strokes, secondary labels — muted but still readable |
| Ash | #8f8f8f | `--color-ash` | Tertiary labels, disabled states, fine-grain icon strokes |
| Canvas | #ffffff | `--color-canvas` | Page background, card surfaces, all primary surfaces — absolute white with no warm or cool tint |

## Tokens — Typography

### OpenAI Sans

- **Token:** `--font-openai-sans`
- **Substitute:** Inter, DM Sans
- **Weights:** 400, 500, 600
- **Sizes:** 13px, 14px, 16px, 17px, 18px, 22px, 28px, 48px
- **Line heights:** 1.00–1.65 (tighter at large sizes ~1.16, looser at body ~1.50–1.65)
- **Letter spacing:** -0.03em at display sizes (48px), -0.01em at mid sizes, +0.011em at smallest sizes (13px caps/tags)
- **OpenType features:** "calt", "liga"
- **Role:** The single typeface for the entire site across every context — nav, body, headlines, buttons, inputs. At 48px display it runs at roughly -0.03em letter-spacing, making large text feel compressed and precise rather than airy. Weight 600 for headlines, 500 for UI labels, 400 for body. The custom cuts provide 'calt' and 'liga' features for text composition.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.64 | — | `--text-caption` |
| heading | 22px | 1.26 | — | `--text-heading` |
| heading-lg | 28px | 1.21 | — | `--text-heading-lg` |
| display | 48px | 1.16 | -1.44px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 6.08px |
| chips | 9999px |
| input | 9999px |
| links | 4px |
| buttons | 9999px |
| softButton | 40px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 64-80px |
| cardPadding | 32px |
| elementGap | 8-16px |

## Components

### Conversational Input with Category Chips

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Editorial News Card — Featured + Sidebar Stack

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group — Primary + Ghost + Soft Chips

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Bar

**Role:** Top-level site navigation

White background, 64px tall. OpenAI logo left-aligned. Nav links in OpenAI Sans 14px weight 500, #000000, no underline, zero border-radius. 'Log in' ghost button with rgba(0,0,0,0.12) border, 9999px radius, 12px horizontal padding. 'Try ChatGPT' filled pill button: #000000 background, #ffffff text, 9999px radius, 12px horizontal padding. Search icon right of nav links. No sticky shadow — only #e5e7eb bottom border on scroll.

### Filled Pill CTA Button

**Role:** Primary call-to-action

#000000 background, #ffffff text, OpenAI Sans 14px weight 500, 9999px border-radius, 10px vertical padding, 16px horizontal padding. External link indicator (arrow icon) inline with label. Box-shadow: rgba(0,0,0,0.02) 0px 4px 6px, rgba(0,0,0,0.05) 0px 0px 2px — almost invisible elevation.

### Ghost Pill Button

**Role:** Secondary actions, navigation chips

Transparent background, #000000 text, rgba(0,0,0,0.12) border, 9999px radius, 10px vertical padding, 12px horizontal padding. Hover state shifts background to #f1f1f1.

### Soft Rounded Button

**Role:** Feature category chips (Search with ChatGPT, Talk with ChatGPT, Sora)

rgba(0,0,0,0.04) background, #000000 text, OpenAI Sans 14px weight 500, 40px border-radius, 8px vertical padding, 16px horizontal padding. Separated by #e5e7eb borders between group items.

### Conversational Input

**Role:** ChatGPT-style prompt entry field

Transparent background, #000000 text, #e5e7eb border, 9999px border-radius, 10px vertical padding, 24px right padding, 52px left padding (icon offset). Placeholder text in #666666. Submit arrow button in bottom-right corner. Full-width within a centered container max ~640px.

### Editorial News Card

**Role:** Article thumbnails in news/stories grids

Transparent background, 6.08px border-radius, no box-shadow, 0px padding. Full-bleed thumbnail image on top with 6.08px radius clipping. Below: category label in OpenAI Sans 13px weight 500 #666666 with letter-spacing +0.011em, headline in 18-22px weight 600 #000000, read-time in 13px weight 400 #666666. No card border — image and type float on white.

### Image Overlay Badge

**Role:** Model or product name displayed over hero images

#ffffff background, 9999px border-radius (very large ~24px for readable badge). Text in OpenAI Sans weight 600 — bold portion in #000000, variable portion in #666666. Appears centered over editorial hero image with subtle shadow: rgba(0,0,0,0.05) 0px 2px 4px.

### Nav Text Link

**Role:** Top-level navigation items

Transparent background, #000000 text, OpenAI Sans 14px weight 500, borderRadius 0px, no padding. Hover state adds underline. No border. Active state unspecified — likely underline weight change.

### Inline Text Link

**Role:** Body copy hyperlinks and 'View more' actions

#000000 text, OpenAI Sans 16px weight 400, 4px border-radius on focus ring. Underline on hover. No background color. 'View more' uses no underline at rest, underline on hover.

### Category Label Badge

**Role:** Content taxonomy tags (Product, Company, Research)

No background, no border. OpenAI Sans 13px weight 500, letter-spacing +0.011em, #666666 color. Uppercase or title-case. Placed inline before read-time, separated by a middot or space.

### Footer Column Block

**Role:** Site footer navigation

White background, full-width. Column headers in OpenAI Sans 13px weight 600 #000000, letter-spacing +0.011em. Links in 13px weight 400 #666666. Row gap 8px between links. Column gap 64px between groups. Top border #e5e7eb 1px.

## Do's and Don'ts

### Do

- Use #000000 as the only filled button background color — no colored CTAs
- Apply 9999px border-radius to all pill buttons, ghost buttons, and the conversational input field
- Use 6.08px border-radius on all image-containing card elements and thumbnail clips
- Set display headlines (48px) with letter-spacing -0.03em; omit tracking overrides below 22px unless using caps labels
- Use #e5e7eb as the only border/divider color — never darken it or tint it
- Introduce color only through photography or editorial imagery — never through UI backgrounds or button fills
- Maintain minimum 64px vertical gap between page sections

### Don't

- Do not use any colored accent (blue, green, orange) on interactive elements or backgrounds
- Do not apply box-shadows to cards — separation comes from whitespace, not depth
- Do not mix border-radius values between pill (9999px) and card (6.08px) contexts — the contrast is intentional and the values must be exact
- Do not use weight below 400 or above 600 in OpenAI Sans — the 400/500/600 triad defines all typographic hierarchy
- Do not use background colors on section blocks — the page stays #ffffff wall-to-wall
- Do not add letter-spacing at body sizes (16-18px) — tracking is only for display (negative) and caps labels (positive +0.011em)
- Do not use more than two typographic colors: #000000 for primary and #666666 for secondary — #8f8f8f is reserved for disabled/tertiary only

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px`

## Imagery

Editorial photography is the only source of color on the page — soft-focus macro flower shots in warm oranges/pinks, pastel gradient abstract tiles for sidebar cards in blue/purple/teal. These images are contained within 6.08px rounded-corner tiles, never full-bleed on the page. No lifestyle photography, no people, no UI screenshots in news cards. The color in images feels deliberate and curated — always soft, always gradient-adjacent, never harsh or literal. Icons are monochrome: outlined/filled in #000000 or #666666, 1.5px apparent stroke weight. Image density is low — images appear only in editorial card grids, leaving vast white space across the page.

## Layout

Max-width centered layout (~1200px) on a pure white canvas. Hero section is minimal-centered: headline at 48px centered horizontally, input box centered below, chip buttons centered below that — no hero image, no background treatment. Below hero: asymmetric two-column editorial grid (large featured card left ~60% width, vertical stack of smaller cards right ~35%). Further sections use consistent top-to-bottom stacking with 64-80px section gaps. Navigation is a fixed top bar at 64px, logo left, links center-left, CTAs right. Footer is a multi-column link grid. No alternating dark/light bands — the entire page is white with content as the only visual differentiation.

## Similar Brands

- **Anthropic** — Same achromatic UI palette with all color deferred to editorial imagery, identical pill-button approach on CTAs
- **Linear** — Single typeface system where weight variation carries all hierarchy, near-zero background color usage
- **Notion** — White-dominant canvas with black as sole accent, conversational input as hero element, flat card approach with only radius for differentiation
- **Arc Browser (The Browser Company)** — Custom typeface doing all brand work on a white ground, imagery as sole chromatic expression in an otherwise achromatic UI
- **Perplexity AI** — Centered conversational prompt as hero layout, pill-bordered chip buttons for mode switching, monochromatic nav system

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-void: #000000;
  --color-fog-border: #e5e7eb;
  --color-chalk: #f1f1f1;
  --color-graphite: #666666;
  --color-ash: #8f8f8f;
  --color-canvas: #ffffff;
  --font-openai-sans: 'OpenAI Sans', Inter, DM Sans;
  --text-caption: 13px;
  --leading-caption: 1.64;
  --text-heading: 22px;
  --leading-heading: 1.26;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.21;
  --text-display: 48px;
  --leading-display: 1.16;
  --tracking-display: -1.44px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-120: 120px;
  --radius-cards: 6.08px;
  --radius-chips: 9999px;
  --radius-input: 9999px;
  --radius-links: 4px;
  --radius-buttons: 9999px;
  --radius-softbutton: 40px;
  --shadow-xl: rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-void: #000000;
  --color-fog-border: #e5e7eb;
  --color-chalk: #f1f1f1;
  --color-graphite: #666666;
  --color-ash: #8f8f8f;
  --color-canvas: #ffffff;
  --font-openai-sans: 'OpenAI Sans', Inter, DM Sans;
  --text-caption: 13px;
  --leading-caption: 1.64;
  --text-heading: 22px;
  --leading-heading: 1.26;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.21;
  --text-display: 48px;
  --leading-display: 1.16;
  --tracking-display: -1.44px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-120: 120px;
  --radius-cards: 6.08px;
  --radius-chips: 9999px;
  --radius-input: 9999px;
  --radius-links: 4px;
  --radius-buttons: 9999px;
  --radius-softbutton: 40px;
  --shadow-xl: rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px;
}
```
