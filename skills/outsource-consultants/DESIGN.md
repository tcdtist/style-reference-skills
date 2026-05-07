---
version: alpha
name: "Outsource Consultants"
description: "Outsource Consultants adopts an 'architectural blueprint' aesthetic, defined by stark contrasts, precise typography, and a deliberate absence of soft edges. The interplay of a cool, almost industrial grey background with bold violet accents creates a sense of rigorous order and technical authority. Large, statement typography in a custom sans-serif font dominates, giving the impression of blueprints or large-scale technical drawings, while monospaced text provides detailed annotations."
theme: "light"
industry: "other"
source_url: "https://oci.madebybuzzworthy.com"
refero_style_id: "16be276a-d8ce-484e-8f7a-cbbb09f717f7"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776008649730-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776008649730-thumb.jpg"
extracted_at: "2026-04-12T15:44:27.984Z"
---

# Outsource Consultants — Style Reference

> Architectural Blueprint on Stark Grey

**Theme:** light

**Industry:** other

Outsource Consultants adopts an 'architectural blueprint' aesthetic, defined by stark contrasts, precise typography, and a deliberate absence of soft edges. The interplay of a cool, almost industrial grey background with bold violet accents creates a sense of rigorous order and technical authority. Large, statement typography in a custom sans-serif font dominates, giving the impression of blueprints or large-scale technical drawings, while monospaced text provides detailed annotations.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Blueprint Violet | #1925aa | `--color-blueprint-violet` | Primary brand color; used for interactive elements, navigation accents, headings, and key information. Its vividness provides a clear focal point against the neutral backgrounds. |
| Deep Violet | #0d1355 | `--color-deep-violet` | Used sparingly for deeper background accents in navigation, providing subtle depth. |
| Base Graphite | #000000 | `--color-base-graphite` | Primary text color for maximum contrast and readability on light backgrounds. |
| Blueprint Gray | #e8e6e0 | `--color-blueprint-gray` | Dominant page background, card surfaces, and subtle borders. Its light, cool tone forms the canvas for the design. |
| Paper White | #ffffff | `--color-paper-white` | Used for button backgrounds, elevated card surfaces, and some text elements, providing high contrast and visual breaks. |

## Tokens — Typography

### PP Neue Montreal

- **Token:** `--font-pp-neue-montreal`
- **Substitute:** system-ui
- **Weights:** 400, 500
- **Sizes:** 12px, 16px, 18px, 24px, 30px, 36px, 46px, 160px
- **Line heights:** 0.94, 1.00, 1.50
- **Role:** Primary display and headline font. Its wide range of sizes, especially the 160px for display, creates the architectural scale. Also used for badge and button text, maintaining brand consistency.

### GT America Mono

- **Token:** `--font-gt-america-mono`
- **Substitute:** ui-monospace
- **Weights:** 400, 500
- **Sizes:** 10px, 12px, 14px
- **Line heights:** 1.00, 1.30, 1.33, 1.50
- **Letter spacing:** -0.05em at 10px, 0.02em at 12px and 14px
- **Role:** Secondary functional font for navigation, buttons, and detailed body text. Its monospaced nature evokes technical documentation, reinforcing the 'blueprint' theme.

### ui-sans-serif

- **Token:** `--font-ui-sans-serif`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.50
- **Role:** Tertiary body text, used for general content where a standard sans-serif is appropriate.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.3 | -0.5px | `--text-caption` |
| body | 14px | 1.5 | 0.28px | `--text-body` |
| body-lg | 16px | 1.5 | — | `--text-body-lg` |
| subheading | 18px | 1.5 | — | `--text-subheading` |
| heading-sm | 24px | 1.5 | — | `--text-heading-sm` |
| heading | 30px | 1.5 | — | `--text-heading` |
| heading-lg | 36px | 1.5 | — | `--text-heading-lg` |
| display | 160px | 0.94 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-180 | 180px | `--spacing-180` |

### Border Radius

| Element | Value |
| --- | --- |
| all | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| elementGap | 10px |

## Components

### Services Accordion

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### About Stat Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Navigation Link – Menu

**Role:** Primary navigation item

Text uses GT America Mono, weight 400, size 12px, line-height 1, Blueprint Gray #e8e6e0 text on a Blueprint Violet #1925aa background. No border radius, emphasizing sharp angles.

### Primary Header Link

**Role:** Interactive menu item

GT America Mono, weight 400, size 12px, line-height 1, Blueprint Gray #e8e6e0 text on a transparent background. Features an underline effect on hover, borderTopColor=oklab(0.372857 -0.0071817 -0.204536) on hover.

### Service Accordion Button

**Role:** Expandable content trigger

Text is Base Graphite #000000. Uses PP Neue Montreal, size 16px. Transparent background with no border radius. Explicitly styled for content sections, not general interaction.

### Service Card

**Role:** Content container

Blueprint Gray #e8e6e0 background with 0px border radius and no shadow. Internal padding of 9.99999px top, 22px right, 22px bottom, 22px left. Accommodates various content types.

### Ghost Button (Accent)

**Role:** Secondary action or link

Text in Blueprint Violet #1925aa, transparent background, 0px border radius. Padding of 0px top, 15px right, 0px bottom, 15px left. Used for inline calls to action like 'learn more'.

### Mini Menu Icon

**Role:** Navigation toggle icon

Square, no border radius, transparent background with Paper White #ffffff icon. Example of circular variant for an edit icon.

## Do's and Don'ts

### Do

- Prioritize Blueprint Violet #1925aa for all primary interactive elements and key headings to guide user attention.
- Maintain a strict 0px border-radius across all components (buttons, cards, inputs) to reinforce the sharp, precise aesthetic.
- Use GT America Mono for all navigation, buttons, and informational text to establish the technical, blueprint-like tone.
- Employ PP Neue Montreal exclusively for large display text and main headings to create a bold, architectural feel.
- Leverage the Blueprint Gray #e8e6e0 as the dominant background color for most page sections, and Paper White #ffffff for contrast on cards or specific content blocks.
- Ensure high contrast ratios: Base Graphite #000000 text on Blueprint Gray #e8e6e0 or Paper White #ffffff backgrounds is crucial.

### Don't

- Avoid any soft shadows or rounded elements; the design emphasizes sharp edges and flat surfaces.
- Do not introduce additional saturated colors beyond Blueprint Violet #1925aa; maintain a controlled two-color brand palette.
- Refrain from using generic sans-serif fonts for primary navigation or component text; GT America Mono is essential for brand identity.
- Do not add gradients or complex background patterns; backgrounds should primarily be solid Blueprint Gray #e8e6e0 or Paper White #ffffff.
- Avoid excessive spacing between elements to maintain a sense of density and order, adhering to specified element gaps like 10px.
- Do not use system default link styles; all interactive text should adhere to Blueprint Violet #1925aa or Base Graphite #000000 based on context.

## Imagery

The site uses minimal imagery, focusing instead on stark UI elements and typography. When present, images appear to be product/service-related, possibly technical drawings or relevant documentation snippets, treated in a functional, non-decorative manner. Icons are simple, outlined, and monochromatic, designed to integrate seamlessly rather than stand out. The visual density is text-dominant, with images playing a supporting, explanatory role.

## Layout

The site employs a max-width contained layout, centered on the page. The hero section features a large, off-center display heading, utilizing the expansive Blueprint Gray #e8e6e0 background as negative space. Content sections alternate between visually distinct blocks, often with a full-bleed Blueprint Violet #1925aa section acting as a strong visual divider or call-out. Information is frequently presented in two-column layouts, with text on one side and a more structured visual or interactive element on the other. Navigation is a sticky top bar with a minimal, subtle approach, expanding into a full-screen overlay menu. The overall rhythm is controlled and deliberate, emphasizing clear segmentation and information hierarchy.

## Similar Brands

- **Architectural firms online** — Shares the formal, structured layout, emphasis on typography as a primary visual element, and a restrained color palette that evokes technical drawings and precision.
- **Brutalism-inspired portfolios** — Exhibits a similar starkness, minimal decoration, heavy reliance on typography, and a deliberate avoidance of soft UI elements or effects.
- **Technical documentation sites** — Uses monospaced fonts for functional elements and a very clean, structured grid-like approach to information display, prioritizing clarity over ornamentation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-blueprint-violet: #1925aa;
  --color-deep-violet: #0d1355;
  --color-base-graphite: #000000;
  --color-blueprint-gray: #e8e6e0;
  --color-paper-white: #ffffff;
  --font-pp-neue-montreal: 'PP Neue Montreal', system-ui;
  --font-gt-america-mono: 'GT America Mono', ui-monospace;
  --font-ui-sans-serif: 'ui-sans-serif', system-ui;
  --text-caption: 10px;
  --leading-caption: 1.3;
  --tracking-caption: -0.5px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0.28px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.5;
  --text-heading: 30px;
  --leading-heading: 1.5;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.5;
  --text-display: 160px;
  --leading-display: 0.94;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-45: 45px;
  --spacing-46: 46px;
  --spacing-50: 50px;
  --spacing-55: 55px;
  --spacing-65: 65px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-128: 128px;
  --spacing-150: 150px;
  --spacing-180: 180px;
  --radius-all: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-blueprint-violet: #1925aa;
  --color-deep-violet: #0d1355;
  --color-base-graphite: #000000;
  --color-blueprint-gray: #e8e6e0;
  --color-paper-white: #ffffff;
  --font-pp-neue-montreal: 'PP Neue Montreal', system-ui;
  --font-gt-america-mono: 'GT America Mono', ui-monospace;
  --font-ui-sans-serif: 'ui-sans-serif', system-ui;
  --text-caption: 10px;
  --leading-caption: 1.3;
  --tracking-caption: -0.5px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0.28px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.5;
  --text-heading: 30px;
  --leading-heading: 1.5;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.5;
  --text-display: 160px;
  --leading-display: 0.94;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-45: 45px;
  --spacing-46: 46px;
  --spacing-50: 50px;
  --spacing-55: 55px;
  --spacing-65: 65px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-128: 128px;
  --spacing-150: 150px;
  --spacing-180: 180px;
  --radius-all: 0px;
}
```
