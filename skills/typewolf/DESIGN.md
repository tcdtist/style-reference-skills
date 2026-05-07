---
version: alpha
name: "Typewolf"
description: "This design system evokes the tactile quality of a letterpress studio, balancing classic elegance with a distinct, almost academic feel. A highly restrained palette of mauves and desaturated grays, anchored by a creamy off-white background, defines its sophisticated, understated mood. The interplay of custom serif and sans-serif fonts, particularly a heavy sans-serif with subtle negative letter-spacing for accents, establishes an intellectual yet approachable tone, akin to a well-curated typographic journal."
theme: "light"
industry: "design"
source_url: "https://typewolf.com"
refero_style_id: "c46ecd77-9c92-4a85-9162-c6d4afd99d95"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924011975-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924011975-thumb.jpg"
extracted_at: "2026-04-11T16:13:52.486Z"
---

# Typewolf — Style Reference

> Letterpress on aged paper. This design feels like pages from an expertly printed, well-loved typography textbook.

**Theme:** light

**Industry:** design

This design system evokes the tactile quality of a letterpress studio, balancing classic elegance with a distinct, almost academic feel. A highly restrained palette of mauves and desaturated grays, anchored by a creamy off-white background, defines its sophisticated, understated mood. The interplay of custom serif and sans-serif fonts, particularly a heavy sans-serif with subtle negative letter-spacing for accents, establishes an intellectual yet approachable tone, akin to a well-curated typographic journal.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Cream Canvas | #f8f5f5 | `--color-cream-canvas` | Page backgrounds, subtle card outlines, content separators. |
| Cloud White | #ffffff | `--color-cloud-white` | Card backgrounds, input fields, highlighted content blocks. |
| Dusty Mauve | #cfc6c7 | `--color-dusty-mauve` | Input and button borders, subtle dividers. |
| Inkwell Gray | #443235 | `--color-inkwell-gray` | Primary body text, link default state, subtle decorative elements, badge text. |
| Charcoal Text | #2e2c2c | `--color-charcoal-text` | Headings, prominent text, high-contrast elements. |
| Plum Accent | #654a4 | `--color-plum-accent` | Hover state for links and navigation, secondary buttons, subtle background for selected items — providing depth and interaction feedback. |
| Rosewood CTA | #916a70 | `--color-rosewood-cta` | Primary call-to-action buttons, active navigation items — a warm, inviting accent without overt vibrancy. |

## Tokens — Typography

### DomaineText

- **Token:** `--font-domainetext`
- **Substitute:** Source Serif Pro
- **Weights:** 400
- **Sizes:** 14px, 16px, 18px, 24px, 28px
- **Line heights:** 1.20, 1.25, 1.30, 1.40, 1.45, 1.50
- **Letter spacing:** normal
- **OpenType features:** "calt", "clig", "kern", "liga", "onum"
- **Role:** Primary display serif font for subtle headings, body text, badges, and general content. Its distinct character shapes define the site's classic, editorial feel. Sizes 14-18px at weight 400 are common for body paragraphs and descriptions.

### Dia

- **Token:** `--font-dia`
- **Substitute:** Inter
- **Weights:** 900
- **Sizes:** 12px, 13px, 14px, 15px
- **Line heights:** 1.20, 1.30, 2.20
- **Letter spacing:** -0.0300em
- **OpenType features:** "calt", "clig", "kern", "liga", "onum", "calt", "clig", "kern", "liga", "lnum", "c2sc", "calt", "clig", "kern", "liga", "smcp"
- **Role:** Distinctive sans-serif used for navigation items, secondary headings, and interactive elements. Its extreme weight (900) at small sizes (12-15px) with negative letter-spacing (-0.03em) creates a condensed, impactful yet sophisticated impression, making it a signature choice for interactive text.

### DomaineDisplayNarrow

- **Token:** `--font-domainedisplaynarrow`
- **Substitute:** Playfair Display
- **Weights:** 700
- **Sizes:** 26px, 42px, 46px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **OpenType features:** "calt", "clig", "kern", "liga", "onum"
- **Role:** Primary serif font for prominent headings. Used at larger sizes (26-46px) and a bold weight (700) for impactful titles, maintaining an elegant, authoritative presence.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.3 | -0.48px | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.4 | — | `--text-body` |
| subheading | 18px | 1.25 | — | `--text-subheading` |
| heading-sm | 24px | 1.2 | — | `--text-heading-sm` |
| heading | 26px | 1.2 | — | `--text-heading` |
| heading-lg | 42px | 1.2 | — | `--text-heading-lg` |
| display | 46px | 1.2 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-149 | 149px | `--spacing-149` |
| spacing-188 | 188px | `--spacing-188` |

### Border Radius

| Element | Value |
| --- | --- |
| small | 4px |
| default | 0px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(145, 106, 112, 0.15) 0px 6px 24px 0px | `--shadow-xl` |
| xl-2 | rgb(245, 241, 242) 0px -3px 0px 0px inset | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 12px |

## Components

### Content Card Grid

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Navigation Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Promo Card — Definitive Guide

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Call to Action Button

**Role:** Interactive element

Filled button with Rosewood CTA background (#916a70), Cloud White text (#ffffff). No border radius, borders are 0px. Padding is top: 15px, right: 11px, bottom: 12px, left: 11px.

### Secondary Button

**Role:** Interactive element

Filled button with Plum Accent background (#654a4e), Cloud White text (#ffffff). No border radius, borders are 0px. Padding is top: 18px, right: 20px, bottom: 16px, left: 20px.

### Default Input Field

**Role:** Data input

Cloud White background (#ffffff), Inkwell Gray text (#443235). Border is 1px solid Dusty Mauve (#cfc6c7). No border radius, borders are 0px. Padding is 10.5px on all sides.

### Flat Badge

**Role:** Categorization/metadata

Transparent background (rgba(0,0,0,0)), Inkwell Gray text (#443235). No border, no border radius. No explicit padding (0px on all sides), relying on text spacing.

### Content Card

**Role:** Content container

Cloud White background (#ffffff) with a subtle shadow: rgba(145, 106, 112, 0.15) 0px 6px 24px 0px. No explicit border radius other than 0px. Internal padding varies; content areas often have 12px vertical spacing with elements. Headlines use DomaineDisplayNarrow 46px/1.2 at #2e2c2c.

### Navigation Link

**Role:** Navigation element

Dia 900, 14px/-0.03em letter-spacing, Inkwell Gray (#443235). On hover, color changes to Plum Accent (#654a4e). No explicit background or radius.

### Hero Section Title

**Role:** Page headline

DomaineDisplayNarrow 700 with size 46px and lineHeight 1.2, in Charcoal Text (#2e2c2c). Subtitle uses DomaineText 18px 400.

## Do's and Don'ts

### Do

- Use Cream Canvas (#f8f5f5) as the default page background to establish the site's light, subtle aesthetic.
- Apply Charcoal Text (#2e2c2c) for primary headlines and Inkwell Gray (#443235) for body text, maintaining contrast and readability.
- Emphasize interactive elements and calls to action with Rosewood CTA (#916a70) as the background color for primary buttons.
- Utilize Dia 900 font with -0.03em letter-spacing for all navigation items and concise, impactful labels.
- Maintain a default border radius of 0px for most elements to reinforce the crisp, structured aesthetic, only deviating to 4px for specific components where a subtle break is required.
- Apply the shadow rgba(145, 106, 112, 0.15) 0px 6px 24px 0px for elevated content cards, ensuring subtle depth without harshness.
- Employ DomaineText at 14-18px for body and descriptive text to maintain the editorial and inviting tone.

### Don't

- Avoid using highly saturated, vibrant colors; stick to the muted, near-gray, and earthy tones defined in the palette.
- Do not introduce rounded corners arbitrarily; reserve the 4px radius only where explicitly defined for small, functional elements.
- Refrain from using excessively bold weights for body text; DomaineText 400 is sufficient for paragraphs.
- Do not deviate from the specified letter-spacing for Dia font; the -0.03em is integral to its distinctive appearance.
- Do not use dark backgrounds for main content areas; the design is firmly built on a light theme with Cream Canvas and Cloud White surfaces.
- Avoid generic, system fonts; prioritize DomaineText, Dia, and DomaineDisplayNarrow to preserve the site's unique typographic identity.
- Do not use box-shadows on individual text elements; reserve them for content containers like cards for subtle elevation.

## Elevation

- **Content Cards:** `rgba(145, 106, 112, 0.15) 0px 6px 24px 0px`
- **Hovered Link Cards:** `rgb(245, 241, 242) 0px -3px 0px 0px inset`

## Imagery

This site features illustrations and product screenshots, all contained within specific sections or cards. Illustrations are line-art based, often black or brand-colored on a solid, muted background (like the orange card background). Photography, when present, appears to be product-focused (e.g., large letterforms, type specimens). The overall treatment is contained and isolated, with no full-bleed or overlapping imagery. Images serve an explanatory or decorative role within their content blocks, enhancing the editorial feel rather than dominating the layout. Icons are minimal, likely line-art to match the illustrations.

## Layout

The page primarily uses a max-width contained model, with content centered. The hero section features a centered headline and subtitle over the Cream Canvas background. Content sections generally consist of a grid of cards, often two columns wide, each card presenting a distinct article or resource. Each card is a self-contained unit with its own content and visual treatment. There's a consistent vertical rhythm of spacing between elements and sections, contributing to an organized, readable flow. Navigation is a minimalist top-bar with horizontally listed links, and a prominent header introducing the brand. The layout is information-dense yet visually uncluttered.

## Similar Brands

- **Fonts In Use** — Shares a similar focus on typography as a primary visual element, with an editorial, content-rich layout and a restrained color palette.
- **The Brand New (Brandings)** — Employs a content-first approach with a classic, professional typographic hierarchy and often uses a light background with subtle accents.
- **AIGA Eye on Design** — Curated content presented with a distinct, often nuanced typographic style, leaning towards a sophisticated editorial aesthetic with controlled color usage.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-cream-canvas: #f8f5f5;
  --color-cloud-white: #ffffff;
  --color-dusty-mauve: #cfc6c7;
  --color-inkwell-gray: #443235;
  --color-charcoal-text: #2e2c2c;
  --color-plum-accent: #654a4;
  --color-rosewood-cta: #916a70;
  --font-domainetext: 'DomaineText', Source Serif Pro;
  --font-dia: 'Dia', Inter;
  --font-domainedisplaynarrow: 'DomaineDisplayNarrow', Playfair Display;
  --text-caption: 12px;
  --leading-caption: 1.3;
  --tracking-caption: -0.48px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.4;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --text-heading: 26px;
  --leading-heading: 1.2;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.2;
  --text-display: 46px;
  --leading-display: 1.2;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-42: 42px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-149: 149px;
  --spacing-188: 188px;
  --radius-small: 4px;
  --radius-default: 0px;
  --shadow-xl: rgba(145, 106, 112, 0.15) 0px 6px 24px 0px;
  --shadow-xl-2: rgb(245, 241, 242) 0px -3px 0px 0px inset;
}
```

### Tailwind v4

```css
@theme {
  --color-cream-canvas: #f8f5f5;
  --color-cloud-white: #ffffff;
  --color-dusty-mauve: #cfc6c7;
  --color-inkwell-gray: #443235;
  --color-charcoal-text: #2e2c2c;
  --color-plum-accent: #654a4;
  --color-rosewood-cta: #916a70;
  --font-domainetext: 'DomaineText', Source Serif Pro;
  --font-dia: 'Dia', Inter;
  --font-domainedisplaynarrow: 'DomaineDisplayNarrow', Playfair Display;
  --text-caption: 12px;
  --leading-caption: 1.3;
  --tracking-caption: -0.48px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.4;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --text-heading: 26px;
  --leading-heading: 1.2;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.2;
  --text-display: 46px;
  --leading-display: 1.2;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-42: 42px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-149: 149px;
  --spacing-188: 188px;
  --radius-small: 4px;
  --radius-default: 0px;
  --shadow-xl: rgba(145, 106, 112, 0.15) 0px 6px 24px 0px;
  --shadow-xl-2: rgb(245, 241, 242) 0px -3px 0px 0px inset;
}
```
