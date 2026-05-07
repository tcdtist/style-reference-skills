---
version: alpha
name: "Perky Bros"
description: "Perky Bros employs a sophisticated, craft-oriented visual language with a limited, high-contrast palette. The design feels grounded and textural, with a prominent off-white background and deep charcoal accents. Typography is refined and deliberate, balancing a modern, compact sans-serif with a warm humanist serif. The layout emphasizes thoughtful content presentation with ample comfortable spacing, reflecting a considered approach to design."
theme: "light"
industry: "design"
source_url: "https://perkybros.com"
refero_style_id: "058c96d8-c787-4203-a3c2-fe328d941941"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514813071-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514813071-thumb.jpg"
extracted_at: "2026-04-30T02:07:13.055Z"
---

# Perky Bros — Style Reference

> Warm parchment atelier

**Theme:** light

**Industry:** design

Perky Bros employs a sophisticated, craft-oriented visual language with a limited, high-contrast palette. The design feels grounded and textural, with a prominent off-white background and deep charcoal accents. Typography is refined and deliberate, balancing a modern, compact sans-serif with a warm humanist serif. The layout emphasizes thoughtful content presentation with ample comfortable spacing, reflecting a considered approach to design.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ecru Canvas | #f5f1e7 | `--color-ecru-canvas` | Page backgrounds, card surfaces, primary content areas — a warm, creamy base echoing natural paper |
| Charcoal Ink | #1e1f20 | `--color-charcoal-ink` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Ocean Deep | #195df4 | `--color-ocean-deep` | Decorative accents, perhaps hover states or subtle highlights – suggested by CSS tokens but not heavily used, indicating a reserved use of bold color |
| Desert Tan | #d4ae8b | `--color-desert-tan` | Subtle color accents, hints towards a natural, earthy secondary palette — also from CSS tokens for potential future use |

## Tokens — Typography

### Dada-Grotesk

- **Token:** `--font-dada-grotesk`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 16px, 18px
- **Line heights:** 1.20
- **Role:** Navigation links, body text, image captions, footer text — a concise, modern sans-serif that ensures clarity and efficiency in UI elements and supporting content. Its compact form contributes to the site's overall refined feel.

### QuadrantText

- **Token:** `--font-quadranttext`
- **Substitute:** Lora
- **Weights:** 400
- **Sizes:** 19px, 60px
- **Line heights:** 1.13, 1.30
- **Letter spacing:** -0.0120em
- **Role:** Main headings, introductory body text — a distinctive serif with subtle negative letter-spacing that grants a sophisticated, almost custom-typeset feel to prominent textual blocks. It provides a warm, classic counterpoint to the sans-serif for impact.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| elementGap | 20px |

## Components

### Primary Navigation Link

**Role:** Top navigation items

Text link using Dada-Grotesk-Medium, 16px, Charcoal Ink (#1e1f20), with a 1px solid Charcoal Ink (#1e1f20) border on hover or active.

### Feature Heading

**Role:** Section titles

Large text using QuadrantText-Regular, 60px, Charcoal Ink (#1e1f20), with -0.0120em letter-spacing. Line height 1.13 for visual density.

### Body Text Block

**Role:** Main content paragraphs

Text using QuadrantText-Regular, 19px, Charcoal Ink (#1e1f20), with -0.0120em letter-spacing. Line height 1.30 for comfortable reading.

### Information Link

**Role:** Contextual links in body/footer

Text link using Dada-Grotesk-Medium, 18px, Charcoal Ink (#1e1f20), typically appearing as part of a list or informational footer item.

## Do's and Don'ts

### Do

- Use Ecru Canvas (#f5f1e7) as the dominant background color for all main content areas.
- Apply Charcoal Ink (#1e1f20) for all primary text, headings, and UI borders to create a stark, legible contrast.
- Set navigation links and UI labels in Dada-Grotesk-Medium (400) at 16px to 18px.
- Headings and prominent text blocks must use QuadrantText-Regular (400) with -0.0120em letter-spacing for a tailored, unique appearance.
- Maintain a comfortable density with 20px element gaps and 40px vertical section gaps.
- Use 1px solid borders in Charcoal Ink (#1e1f20) for interactive elements, reinforcing a crisp, defined structure.

### Don't

- Avoid using bright or vivid colors for large backgrounds or primary UI elements; reserve them strictly for subtle accents (Ocean Deep, Desert Tan).
- Do not deviate from the specified letter-spacing for QuadrantText; it is a signature characteristic of the typographic style.
- Do not apply rounded corners or significant border-radius to elements; the system prioritizes sharp, defined edges.
- Do not use generic system fonts; always utilize Dada-Grotesk and QuadrantText (or their designated substitutes).
- Avoid heavy shadows or gradients; the design relies on flat planes and high contrast for visual hierarchy.
- Do not introduce unnecessary visual flair; maintain the clean, content-focused presentation.

## Imagery

The visual language for imagery is mixed, featuring both product-focused illustrations and photography. Illustrations are predominantly flat, outlined, and monochromatic, often using brand-colored (Charcoal Ink) motifs that give a handcrafted, badge-like quality. Photography appears to be more natural and candid, potentially capturing textures or close-ups without heavy styling. Imagery functions decoratively to reinforce brand identity in some areas, and curatorially in others (e.g., project case study thumbnails). The visual density is moderate; images are used to break up text-dominant sections, but the UI itself remains clear and uncluttered.

## Layout

The page structure favors a max-width contained layout, though the exact width is not explicitly fixed but appears comfortably wide. The hero section uses a full-bleed background with a textured overlay and centered brand-related graphics, giving way to a more contained content area. Content is arranged in a fluid, single-column stack, occasionally featuring side-by-side (text-left/image-right) arrangements for featured work. Vertical rhythm is established through consistent 40px section gaps. Navigation is a simple, sticky top bar with minimal links and a 'Start a project' right-aligned accent.

## Similar Brands

- **Focus Lab** — Similar focus on sophisticated typography, limited color palettes centered on warm neutrals, and a premium, craft-oriented aesthetic.
- **Pentagram** — Employs classic typography and a clean, high-contrast visual system to convey authority and design expertise without relying on overt 'trends'.
- **Collins** — Shares a sensibility for carefully selected fonts, understated color schemes, and layouts that prioritize content with generous whitespace, presenting a refined design perspective.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ecru-canvas: #f5f1e7;
  --color-charcoal-ink: #1e1f20;
  --color-ocean-deep: #195df4;
  --color-desert-tan: #d4ae8b;
  --font-dada-grotesk: 'Dada-Grotesk', Inter;
  --font-quadranttext: 'QuadrantText', Lora;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-ecru-canvas: #f5f1e7;
  --color-charcoal-ink: #1e1f20;
  --color-ocean-deep: #195df4;
  --color-desert-tan: #d4ae8b;
  --font-dada-grotesk: 'Dada-Grotesk', Inter;
  --font-quadranttext: 'QuadrantText', Lora;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --radius-default: 0px;
}
```
