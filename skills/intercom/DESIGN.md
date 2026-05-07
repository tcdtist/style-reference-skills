---
version: alpha
name: "Intercom"
description: "Intercom's design system evokes a sense of understated innovation, like an architectural blueprint on white marble. Lightness and clarity are established through an expansive white canvas contrasted by fine-lined black typography and minimal, precise UI elements. The tension between the nearly achromatic palette and a single vibrant violet accent for primary calls to action creates a focused, forward-thinking feel without visual clutter. Custom typography with subtle letter-spacing variations adds a layer of quiet sophistication, preventing the sparse aesthetic from feeling sterile."
theme: "light"
industry: "ai"
source_url: "https://intercom.com"
refero_style_id: "12255b63-e506-4bc1-a4cd-d05487de32f3"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776119163185-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776119163185-thumb.jpg"
extracted_at: "2026-04-13T22:26:32.443Z"
---

# Intercom — Style Reference

> Architectural blueprint on white marble

**Theme:** light

**Industry:** ai

Intercom's design system evokes a sense of understated innovation, like an architectural blueprint on white marble.  Lightness and clarity are established through an expansive white canvas contrasted by fine-lined black typography and minimal, precise UI elements. The tension between the nearly achromatic palette and a single vibrant violet accent for primary calls to action creates a focused, forward-thinking feel without visual clutter. Custom typography with subtle letter-spacing variations adds a layer of quiet sophistication, preventing the sparse aesthetic from feeling sterile.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, primary surfaces, overlay base. |
| Background Off-White | #faf9f6 | `--color-background-off-white` | Subtle background for sections or softer UI elements. |
| Surface Cream | #f1eee9 | `--color-surface-cream` | Slightly elevated surface, subtle background differentiation. |
| Border Sand | #dedbd6 | `--color-border-sand` | Delicate borders for subtle UI separation, active tab indicators. |
| Subtle Gray | #e7e3db | `--color-subtle-gray` | More pronounced background for distinct content blocks, light dividers. |
| Canvas Beige | #d3cec6 | `--color-canvas-beige` | Background for secondary content areas or muted sections. |
| Headline Black | #111111 | `--color-headline-black` | Primary heading text, strong impactful body copy. |
| Body Text Black | #000000 | `--color-body-text-black` | General body text, links, primary UI elements, icons. |
| Subtle Graphite | #414141 | `--color-subtle-graphite` | Muted text for less prominent information, secondary links. |
| Mid Gray | #585858 | `--color-mid-gray` | Secondary text, descriptive elements with slightly less emphasis than body text. |
| Footer Gray | #666666 | `--color-footer-gray` | Tertiary text, footer links, less critical information. |
| Icon Gray | #707070 | `--color-icon-gray` | Icons and very subtle UI elements. |
| Button Text Gray | #888888 | `--color-button-text-gray` | Text for secondary buttons, disabled states. |
| Placeholder Gray | #a0a0a0 | `--color-placeholder-gray` | Placeholder text in input fields, further muted text elements. |
| Inactive Icon Gray | #b8b8b8 | `--color-inactive-icon-gray` | Icons in inactive or secondary states. |
| Accent Violet | #0007cb | `--color-accent-violet` | Primary interactive elements, call-to-action buttons, active indicators — a vivid modern accent against the neutral palette. |
| Accent Orange | #ff5600 | `--color-accent-orange` | Highlighting specific words or small interactive elements, used sparingly for emphasis. |

## Tokens — Typography

### Saans

- **Token:** `--font-saans`
- **Substitute:** system-ui, sans-serif
- **Weights:** 300, 400
- **Sizes:** 14px, 16px, 20px, 24px, 32px, 40px, 54px, 80px
- **Line heights:** 0.95, 1.00, 1.25, 1.40, 1.43, 1.50
- **Letter spacing:** -2.4, -1.62, -0.8, -0.16
- **Role:** The primary typeface for headings, body text, and general UI. Weight 300 for display sizes provides a refined, non-aggressive presence.

### SaansMono

- **Token:** `--font-saansmono`
- **Substitute:** SFMono-Regular, monospace
- **Weights:** 300, 400, 500
- **Sizes:** 12px, 14px
- **Line heights:** 1.00, 1.30, 1.40
- **Letter spacing:** 1.2, 0.7
- **Role:** Used for technical information, code snippets, or any content requiring monospace presentation. The increased letter-spacing distinguishes it.

### Serrif

- **Token:** `--font-serrif`
- **Substitute:** serif
- **Weights:** 300
- **Sizes:** 16px
- **Line heights:** 1.40
- **Letter spacing:** -0.16
- **Role:** A decorative serif font used sparingly, likely for emphasis within body text or specific callouts. Its light weight keeps it subtle.

### MediumLL

- **Token:** `--font-mediumll`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 14px, 16px
- **Line heights:** 0.94, 1.00, 1.29
- **Letter spacing:** -0.4, -0.35, 0.56
- **Role:** Used for navigation elements and specific UI labels, characterized by tight letter-spacing for concise presentation.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.4 | 0.7px | `--text-caption` |
| body-sm | 14px | 1.5 | -0.16px | `--text-body-sm` |
| body | 16px | 1.5 | -0.16px | `--text-body` |
| subheading | 20px | 1.4 | -0.4px | `--text-subheading` |
| heading-sm | 24px | 1.25 | -0.48px | `--text-heading-sm` |
| heading | 32px | 1.25 | -0.8px | `--text-heading` |
| heading-lg | 40px | 1 | -0.8px | `--text-heading-lg` |
| display | 54px | 1 | -1.62px | `--text-display` |
| display-lg | 80px | 0.95 | -2.4px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-146 | 146px | `--spacing-146` |
| spacing-171 | 171px | `--spacing-171` |
| spacing-216 | 216px | `--spacing-216` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 4px |
| navItems | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Alert Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Tab Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button

**Role:** Call to action

Solid black background (#111111), white text (#ffffff), 4px border-radius, 14px horizontal padding, 0px vertical padding. Focus and hover states use Accent Violet (#0007cb) for the background.

### Secondary Outline Button

**Role:** Secondary action

Transparent background, Headline Black (#111111) text, Border Sand (#dedbd6) border, 4px border-radius, 14px horizontal padding, 0px vertical padding. Text color matches Body Text Black (#111111). Hover state uses Border Sand (#dedbd6) for border.

### Ghost Navigation Button

**Role:** Navigation link

Transparent background, Body Text Black (#000000) text (color #111111 for main nav, #000000 for sub nav), no border, no radius. Tight padding; active state indicated by underline or Border Sand (#dedbd6) hover effect.

### Tab Button

**Role:** Tab selection

Transparent background, muted gray text (oklab(0.177637 / 0.5) for default, #111111 for active), Border Sand (#dedbd6) bottom border for active state only, 16px padding on all sides. No border-radius.

### Primary Navigation Item

**Role:** Main navigation

Text in Headline Black (#111111), Saans weight 400 at 16px, line-height 1.25. Has a 4px border-radius on hover/active states with Background Off-White (#faf9f6) as background color.

### Header Alert Banner

**Role:** Informational banner

Background #e7e3db. Text in Headline Black (#111111), Saans weight 400 at 14px. Padding of 8px vertically and 16px horizontally.

### Logo Grid Item

**Role:** Client/partner logo display

Logo typically in Inactive Icon Gray (#b8b8b8) or Body Text Black (#000000). Displayed on page Canvas White (#ffffff) or Background Off-White (#faf9f6) background within a grid, often with no explicit padding on logo itself, relying on grid spacing.

### Input Field

**Role:** Data entry

Assumed white background with a subtle border in Border Sand (#dedbd6) or a similar muted neutral. Placeholder text in Placeholder Gray (#a0a0a0). Focus ring would likely be Accent Violet (#0007cb) or a darker neutral.

## Do's and Don'ts

### Do

- Use Headline Black (#111111) for all major headings and impactful statements to maintain strong contrast.
- Apply Saans font with a weight of 300 for display-sized headlines (54px, 80px) to achieve an authoritative yet understated feel.
- Implement 4px border-radius for all interactive buttons and navigation items, creating a subtle visual softness.
- Reserve Accent Violet (#0007cb) strictly for primary interactive elements, such as CTA buttons and active state indicators.
- Differentiate sections using the neutral background progression: Canvas White (#ffffff) > Background Off-White (#faf9f6) > Surface Cream (#f1eee9) for subtle visual hierarchy.
- Maintain standard element spacing of 16px for comfortable content flow, adjusting vertically with multiples of 8px as needed.
- Utilize SaansMono for any technical or explicit code-like content, with its distinctive increased letter-spacing.

### Don't

- Avoid using saturated colors other than Accent Violet (#0007cb) and Accent Orange (#ff5600) to preserve the clean, neutral aesthetic.
- Do not introduce sharp, unrounded corners on interactive elements, as this contradicts the established 4px radius pattern.
- Refrain from heavy drop shadows or complex gradients; the system relies on subtle background shifts and crisp lines for depth.
- Do not deviate from the specified Saans, SaansMono, or MediumLL typefaces; ensure consistency in typographic personality.
- Avoid dense, information-heavy blocks without adequate spacing; prioritize comfortable content density and readability.
- Do not use Body Text Black (#000000) for large, prominent headlines; Headline Black (#111111) should be preferred for impact.
- Do not use highly saturated photography; imagery should align with the muted or monochromatic style.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background, base layer. |
| 1 | Background Off-White | #faf9f6 | Subtle background for distinct content sections or cards, offering minimal elevation. |
| 2 | Surface Cream | #f1eee9 | More pronounced background for feature blocks or secondary content areas, indicating a slight lift. |
| 3 | Subtle Gray | #e7e3db | Used for banners or highly differentiated content blocks, suggesting a higher level of separation. |

## Imagery

The visual language focuses on a mix of product screenshots, abstract and illustrative graphics, and subtly treated photography. Product screenshots are clean, showcasing the UI in action, often on a slight perspective. Abstract illustrations feature monochromatic human-like figures or organic shapes (like the flower graphic) in black against the dominant white background, serving as decorative atmosphere rather than direct content. Photography is minimal, often cropped tightly or treated with filters/desaturation, focusing on human elements (eyes, silhouettes) without being overtly vibrant or lifestyle-oriented. Iconography is primarily outlined and monochromatic, aligning with the refined, clean aesthetic. The role is a blend of product showcase, conceptual atmosphere, and light visual breaks, with a strong emphasis on maintaining a text-dominant layout.

## Layout

The page primarily uses a max-width contained layout, though the hero section spans full-bleed to establish a grander scale. The hero features a centered oversized headline (Saans 80px, weight 300) with a secondary text block right-aligned. Sections often alternate between full-width content blocks and contained layouts. Content arrangement frequently uses a split-screen pattern (text column left, visual/product screenshot right, or vice versa) with consistent vertical spacing between sections. There's a minimal use of explicit grids for feature showcasing, but logo sections use a fluid, adaptive grid. The layout prioritizes spaciousness, using ample whitespace around elements and between sections to keep information digestible. The navigation is a sticky header with primary links on the left and action buttons (Start free trial, Fin AI Agent) on the right.

## Similar Brands

- **Linear** — Shares a clean, light mode UI with strong typography, minimal color accents, and a focus on essential information.
- **Stripe** — Similar approach to sophisticated, modern SaaS design with a lean color palette, precise typography, and strategic use of negative space.
- **Figma** — Exhibits a comparable clarity in UI, relying on system neutrals with specific, functional color highlights for interaction, avoiding unnecessary adornment.
- **Vercel** — Employs a refined and spacious aesthetic, with emphasis on typography and a limited but impactful use of brand colors on a predominantly light background.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-background-off-white: #faf9f6;
  --color-surface-cream: #f1eee9;
  --color-border-sand: #dedbd6;
  --color-subtle-gray: #e7e3db;
  --color-canvas-beige: #d3cec6;
  --color-headline-black: #111111;
  --color-body-text-black: #000000;
  --color-subtle-graphite: #414141;
  --color-mid-gray: #585858;
  --color-footer-gray: #666666;
  --color-icon-gray: #707070;
  --color-button-text-gray: #888888;
  --color-placeholder-gray: #a0a0a0;
  --color-inactive-icon-gray: #b8b8b8;
  --color-accent-violet: #0007cb;
  --color-accent-orange: #ff5600;
  --font-saans: 'Saans', system-ui, sans-serif;
  --font-saansmono: 'SaansMono', SFMono-Regular, monospace;
  --font-serrif: 'Serrif', serif;
  --font-mediumll: 'MediumLL', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 0.7px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.16px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.16px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.4px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.8px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.8px;
  --text-display: 54px;
  --leading-display: 1;
  --tracking-display: -1.62px;
  --text-display-lg: 80px;
  --leading-display-lg: 0.95;
  --tracking-display-lg: -2.4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-112: 112px;
  --spacing-146: 146px;
  --spacing-171: 171px;
  --spacing-216: 216px;
  --radius-buttons: 4px;
  --radius-navitems: 4px;
  --surface-canvas-white: #ffffff;
  --surface-background-off-white: #faf9f6;
  --surface-surface-cream: #f1eee9;
  --surface-subtle-gray: #e7e3db;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-background-off-white: #faf9f6;
  --color-surface-cream: #f1eee9;
  --color-border-sand: #dedbd6;
  --color-subtle-gray: #e7e3db;
  --color-canvas-beige: #d3cec6;
  --color-headline-black: #111111;
  --color-body-text-black: #000000;
  --color-subtle-graphite: #414141;
  --color-mid-gray: #585858;
  --color-footer-gray: #666666;
  --color-icon-gray: #707070;
  --color-button-text-gray: #888888;
  --color-placeholder-gray: #a0a0a0;
  --color-inactive-icon-gray: #b8b8b8;
  --color-accent-violet: #0007cb;
  --color-accent-orange: #ff5600;
  --font-saans: 'Saans', system-ui, sans-serif;
  --font-saansmono: 'SaansMono', SFMono-Regular, monospace;
  --font-serrif: 'Serrif', serif;
  --font-mediumll: 'MediumLL', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 0.7px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.16px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.16px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.4px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.8px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.8px;
  --text-display: 54px;
  --leading-display: 1;
  --tracking-display: -1.62px;
  --text-display-lg: 80px;
  --leading-display-lg: 0.95;
  --tracking-display-lg: -2.4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-112: 112px;
  --spacing-146: 146px;
  --spacing-171: 171px;
  --spacing-216: 216px;
  --radius-buttons: 4px;
  --radius-navitems: 4px;
  --surface-canvas-white: #ffffff;
  --surface-background-off-white: #faf9f6;
  --surface-surface-cream: #f1eee9;
  --surface-subtle-gray: #e7e3db;
}
```
