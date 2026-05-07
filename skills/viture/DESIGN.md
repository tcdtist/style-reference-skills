---
version: alpha
name: "VITURE"
description: "VITURE designs with a high-contrast, modern tech aesthetic. Black and white dominate the UI, serving as a canvas for striking product imagery and a singular vivid orange accent that highlights calls to action and critical information. Typography is sophisticated and varied, supporting both extensive content and bold headlines. Components are minimal, focusing on functionality with soft, large radii and subtle elevation for interactive elements."
theme: "light"
industry: "ecommerce"
source_url: "https://www.viture.com"
refero_style_id: "390cfba6-8c2f-4273-8c9e-750d470b6e2e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512735526-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512735526-thumb.jpg"
extracted_at: "2026-04-30T01:32:42.617Z"
---

# VITURE — Style Reference

> High-contrast tech canvas

**Theme:** light

**Industry:** ecommerce

VITURE designs with a high-contrast, modern tech aesthetic. Black and white dominate the UI, serving as a canvas for striking product imagery and a singular vivid orange accent that highlights calls to action and critical information. Typography is sophisticated and varied, supporting both extensive content and bold headlines. Components are minimal, focusing on functionality with soft, large radii and subtle elevation for interactive elements.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight | #0c0c0c | `--color-midnight` | Primary text, deep surface backgrounds, strong borders — establishing the core dark contrast against light surfaces |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, primary button text, interactive element outlines — providing luminosity and clean separation |
| Ash Gray | #7e7e7f | `--color-ash-gray` | Muted text, secondary information, subtle borders — offering a softer contrast than Midnight |
| Ink Black | #000000 | `--color-ink-black` | Footer backgrounds, overlay elements — for maximum depth and visual separation |
| Silver Mist | #949597 | `--color-silver-mist` | Subtle background panels, alternative card backgrounds, ghost button fills — for soft structural differentiation |
| Light Frost | #f7f7f8 | `--color-light-frost` | Elevated card backgrounds, input fields — a slightly off-white serving as a secondary surface |
| Pale Clay | #eff0f3 | `--color-pale-clay` | Tertiary card backgrounds, subtle UI elements — a very light gray for minimal contrast against Canvas White |
| Storm Gray | #5b5c5d | `--color-storm-gray` | Placeholder text, subtle contextual accents — providing a medium-dark neutral for interface details |
| Muted Clay | #abacae | `--color-muted-clay` | Lightest grey for disabled states, hairline borders, very soft secondary text |
| Blaze Orange | #ff5f34 | `--color-blaze-orange` | Primary calls to action, accent branding, active states, important links — providing a vibrant focal point; Error messages, destructive actions, form validation feedback — consistent with brand orange but in semantic context; Branded hero sections, spotlight effects on product imagery — creating a dynamic, electric visual |
| Deep Sunset Gradient | #ff2900 | `--color-deep-sunset-gradient` | Promotional banners, background washes for featured content — a rich, dramatic multi-hue blend |

## Tokens — Typography

### FontSeasonSans

- **Token:** `--font-fontseasonsans`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700, 800
- **Sizes:** 12px, 14px, 16px, 20px, 23px, 28px, 32px, 60px, 72px, 105px, 340px
- **Line heights:** 1.00, 1.20, 1.25, 1.33, 1.35, 1.38, 1.40, 1.43, 1.50, 1.63
- **Letter spacing:** 0.0120em at 12px, 0.0200em at 14px, 0.0260em at 16px, 0.0500em at 20px+
- **Role:** The primary typeface for all text content, from subtle captions to heroic display headings. Its versatility across weights and a range of sizes supports both clarity in detail and strong visual impact for brand messaging. Varied letter-spacing tightens very small text and provides openness for large headings.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.4 | 0.144px | `--text-caption` |
| body-sm | 14px | 1.5 | 0.28px | `--text-body-sm` |
| body | 16px | 1.63 | 0.416px | `--text-body` |
| subheading | 20px | 1.35 | 1px | `--text-subheading` |
| heading-sm | 23px | 1.33 | — | `--text-heading-sm` |
| heading | 28px | 1.25 | — | `--text-heading` |
| heading-lg | 32px | 1.2 | — | `--text-heading-lg` |
| display | 60px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-144 | 144px | `--spacing-144` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 28px |
| pills | 9999px |
| images | 28px |
| inputs | 16px |
| buttons | 9999px |
| largeFeatures | 120px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 44px |
| elementGap | 4px |

## Components

### Primary Filled Button

**Role:** High-emphasis action

Filled with Blaze Orange (#ff5f34), text in Canvas White (#ffffff). Features a fully rounded 'pill' shape (9999px radius) for a friendly yet distinct call to action.

### Ghost Border Button

**Role:** Secondary action on dark backgrounds

Transparent background with a 1px Canvas White (#ffffff) border, text in Canvas White. Also uses a 9999px pill radius. Used where primary action color would be too dominant.

### Text Button

**Role:** Minimalistic interactive element

Transparent background, text set to Midnight (#0c0c0c) on light surfaces or Canvas White (#ffffff) on dark. No border, no radius, used for navigation or subtle interactions.

### Feature Card

**Role:** Content container with subtle elevation

Background in Light Frost (#f7f7f8) or Pale Clay (#eff0f3) with a 28px or 24px border radius. No shadow, maintaining a flat, clean aesthetic.

### Input Field

**Role:** Standard form input

Canvas White (#ffffff) background with a Blaze Orange (#ff5f34) border and 16px radius. Placeholder text in Storm Gray (#5b5c5d). Large padding: 28px vertical, 20-40px horizontal.

### Navigation Link

**Role:** Interactive text in primary navigation

Text in Midnight (#0c0c0c) by default. On hover or active state, text adopts Blaze Orange (#ff5f34). No background or border, minimal styling focusing on underline or text color change for interaction.

### Footer Black Background

**Role:** Section background for global footer

Uses Ink Black (#000000) as background, ensuring maximum contrast for white text links. No visible border or radius on the block itself.

### Product Image Card

**Role:** Showcasing product visuals

Image within a container that uses a 28px border radius. Often appears without a distinct background, blending into the surrounding context with a focus on the visual itself.

## Do's and Don'ts

### Do

- Prioritize Midnight (#0c0c0c) for primary text and Canvas White (#ffffff) for backgrounds to maintain clarity and high contrast.
- Use Blaze Orange (#ff5f34) exclusively for primary calls to action, interactive states, and key brand highlights to ensure visual impact.
- Apply 9999px border radius to all buttons and tags to create a consistent 'pill' shape, indicating interactive elements.
- Maintain comfortable element spacing with a base unit of 4px and frequent use of 16px row and column gaps for readability.
- Employ the FontSeasonSans typeface consistently across all text elements, leveraging its weight variations for hierarchy.
- Design interactive elements with subtle but clear feedback, such as text color changes to Blaze Orange (#ff5f34) for links.
- Ensure all backgrounds are solid colors, avoiding decorative patterns unless explicitly part of dynamic product visualizations.

### Don't

- Do not introduce new chromatic colors outside of Blaze Orange (#ff5f34) and the predefined gradients, to preserve brand focus.
- Avoid excessive use of shadows; maintain a flat UI unless a single, subtle elevation is strictly needed for interactive elements.
- Do not use generic system fonts; always map to FontSeasonSans or its substitute to maintain typographic brand identity.
- Refrain from using small, sharp radii; all interactive and content containers should use generous radii like 16px, 24px, 28px, or 9999px.
- Do not break the established contrast hierarchy by using low-contrast color pairs for essential text or interactive elements.
- Avoid cluttering layouts; prioritize comfortable spacing and clear visual separation between sections and elements.
- Do not apply Blaze Orange to non-interactive decorative elements, restricting its use to functional accents and calls to action.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background |
| 1 | Light Frost | #f7f7f8 | Elevated card backgrounds, input fields |
| 2 | Pale Clay | #eff0f3 | Alternative card backgrounds, subtle UI elements |
| 3 | Silver Mist | #949597 | Alternative background panels for sections within content |
| 4 | Ink Black | #000000 | Deepest backgrounds, especially for footers or full-bleed dark sections |

## Elevation

- **Button:** `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`

## Imagery

This design system heavily relies on slick, often abstract product photography with vibrant neon accents or gradients. Product visuals are mostly tight crops on dark or monochrome backgrounds, emphasizing the technology and its glowing elements. Images are generally contained within rectangular boundaries, sometimes with large radii (28px). Icons are minimalist, using outlines unless for decorative 'hero' branding. The focus is on showcasing the product's advanced nature through stylized visuals rather than lifestyle shots or complex illustrations. Imagery acts as content showcase and brand atmosphere rather than purely decorative elements.

## Layout

The page primarily uses a full-bleed layout for sections, with content often contained within a flexible maximum width. Hero sections are typically dark, featuring large headlines centered over dynamic product imagery or gradients. Section rhythm is often created through alternating background colors, moving between light Canvas White and deeper Silver Mist, with prominent Ink Black for the footer. Content is arranged in alternating text-and-image blocks or multi-column card grids, aiming for a spacious, comfortable density with clear vertical separation. The navigation is a sticky top bar, providing persistent access.

## Similar Brands

- **Ray-Ban Stories** — High-tech glasses with a focus on product visuals and a clean, high-contrast UI.
- **Oculus (Meta Quest)** — Emphasis on future-forward tech products, often using dark interfaces with bright accents and striking product photography.
- **Nothing (Phone)** — Strong brand identity through minimalist aesthetic, high contrast, and a unique accent color for interactive elements.
- **Framework Laptop** — Modern consumer electronics branding with a focus on product photography on clean backgrounds and precise typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight: #0c0c0c;
  --color-canvas-white: #ffffff;
  --color-ash-gray: #7e7e7f;
  --color-ink-black: #000000;
  --color-silver-mist: #949597;
  --color-light-frost: #f7f7f8;
  --color-pale-clay: #eff0f3;
  --color-storm-gray: #5b5c5d;
  --color-muted-clay: #abacae;
  --color-blaze-orange: #ff5f34;
  --color-deep-sunset-gradient: #ff2900;
  --font-fontseasonsans: 'FontSeasonSans', Inter;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 0.144px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.28px;
  --text-body: 16px;
  --leading-body: 1.63;
  --tracking-body: 0.416px;
  --text-subheading: 20px;
  --leading-subheading: 1.35;
  --tracking-subheading: 1px;
  --text-heading-sm: 23px;
  --leading-heading-sm: 1.33;
  --text-heading: 28px;
  --leading-heading: 1.25;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --text-display: 60px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --spacing-144: 144px;
  --radius-cards: 28px;
  --radius-pills: 9999px;
  --radius-images: 28px;
  --radius-inputs: 16px;
  --radius-buttons: 9999px;
  --radius-largefeatures: 120px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
  --surface-canvas-white: #ffffff;
  --surface-light-frost: #f7f7f8;
  --surface-pale-clay: #eff0f3;
  --surface-silver-mist: #949597;
  --surface-ink-black: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight: #0c0c0c;
  --color-canvas-white: #ffffff;
  --color-ash-gray: #7e7e7f;
  --color-ink-black: #000000;
  --color-silver-mist: #949597;
  --color-light-frost: #f7f7f8;
  --color-pale-clay: #eff0f3;
  --color-storm-gray: #5b5c5d;
  --color-muted-clay: #abacae;
  --color-blaze-orange: #ff5f34;
  --color-deep-sunset-gradient: #ff2900;
  --font-fontseasonsans: 'FontSeasonSans', Inter;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 0.144px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.28px;
  --text-body: 16px;
  --leading-body: 1.63;
  --tracking-body: 0.416px;
  --text-subheading: 20px;
  --leading-subheading: 1.35;
  --tracking-subheading: 1px;
  --text-heading-sm: 23px;
  --leading-heading-sm: 1.33;
  --text-heading: 28px;
  --leading-heading: 1.25;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --text-display: 60px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --spacing-144: 144px;
  --radius-cards: 28px;
  --radius-pills: 9999px;
  --radius-images: 28px;
  --radius-inputs: 16px;
  --radius-buttons: 9999px;
  --radius-largefeatures: 120px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
  --surface-canvas-white: #ffffff;
  --surface-light-frost: #f7f7f8;
  --surface-pale-clay: #eff0f3;
  --surface-silver-mist: #949597;
  --surface-ink-black: #000000;
}
```
