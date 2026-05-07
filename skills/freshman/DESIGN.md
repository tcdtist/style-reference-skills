---
version: alpha
name: "Freshman"
description: "Freshman employs a stark, high-contrast dark theme emphasizing bold typography and minimal UI elements. The design prioritizes content, with a monochromatic canvas broken by sharp, subtle geometric accents and a single vibrant red for impact. Typography is the primary visual communicator, leveraging custom fonts to create a direct and authoritative tone. Components are ghost-like and integrated, giving space to the brand's work."
theme: "dark"
industry: "media"
source_url: "https://freshman.tv"
refero_style_id: "a6284fcd-fa69-4469-ac40-4239e5b84a39"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508435342-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508435342-thumb.jpg"
extracted_at: "2026-04-30T00:20:58.106Z"
---

# Freshman — Style Reference

> monochrome cinematic canvas

**Theme:** dark

**Industry:** media

Freshman employs a stark, high-contrast dark theme emphasizing bold typography and minimal UI elements. The design prioritizes content, with a monochromatic canvas broken by sharp, subtle geometric accents and a single vibrant red for impact. Typography is the primary visual communicator, leveraging custom fonts to create a direct and authoritative tone. Components are ghost-like and integrated, giving space to the brand's work.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Void | #000000 | `--color-midnight-void` | Page backgrounds, significant surface areas, text selection background |
| Near Black | #101010 | `--color-near-black` | Subtle background for UI elements, icon fills, card backgrounds where separation from the main canvas is needed |
| White Frost | #ffffff | `--color-white-frost` | Primary text, prominent headings, link text, borders, iconography |
| Power Red | #ff2936 | `--color-power-red` | Highlighting specific content, decorative accents, loading indicators — a singular color for emphasis |

## Tokens — Typography

### TT Firs Neue

- **Token:** `--font-tt-firs-neue`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00
- **Role:** Primary headings and core informational text — a robust sans-serif that projects confidence and clarity.

### Editorial New

- **Token:** `--font-editorial-new`
- **Substitute:** Lora
- **Weights:** 200
- **Sizes:** 16px, 20px
- **Line heights:** 1.00, 1.25
- **Letter spacing:** -0.0100em
- **Role:** Subtle, descriptive text, menu items, and UI labels. Its light weight adds an airy, sophisticated counterpoint to heavier elements.

### Altform

- **Token:** `--font-altform`
- **Substitute:** IBM Plex Mono
- **Weights:** 400, 700
- **Sizes:** 14px, 16px
- **Line heights:** 0.86, 0.88
- **Letter spacing:** -0.0300em
- **Role:** Small functional text, legal disclosures, and metadata where extreme compactness and subtle distinction are needed.

### Wasted Year

- **Token:** `--font-wasted-year`
- **Substitute:** Montserrat Thin
- **Weights:** 400
- **Sizes:** 12px, 14px, 17px, 20px
- **Line heights:** 0.86, 0.94, 1.00, 1.25
- **Letter spacing:** --0.0100em
- **Role:** Decorative and thematic text elements, often for unique branding or special callouts. Its distinct character adds a bespoke feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 0.86 | -0.01px | `--text-caption` |
| body-sm | 14px | 0.86 | -0.03px | `--text-body-sm` |
| heading | 20px | 1 | -0.01px | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-47 | 47px | `--spacing-47` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 47px |
| cardPadding | 20px |
| elementGap | 12px |

## Components

### Ghost Navigation Button

**Role:** Top-level navigation element

Text-only button with White Frost text on Midnight Void background. No padding, no radius, making it blend seamlessly into the negative space. On hover, likely a subtle underline or text color change.

### Thumbnail Link Title

**Role:** Interactive content title within a grid

White Frost text using TT Firs Neue font 16px, normal letter-spacing. Minimal padding (e.g. 8px vertical, 0px horizontal). 

### Footer Cookie Button

**Role:** Legal/utility action in the footer

White Frost text on a transparent background, with a minimal White Frost border. No border radius, sharp corners for a utilitarian feel.

### Main Headline

**Role:** Hero section primary statement

Large, bold White Frost text, centrally aligned. Uses TT Firs Neue for maximum impact and legibility against the dark background.

### Sub-Headline Descriptive Text

**Role:** Supporting text for hero sections or key messages

Smaller White Frost text, often centered, using Editorial New font for a more refined, descriptive tone. Accompanied by bracketed thematic phrases also in Editorial New.

## Do's and Don'ts

### Do

- Prioritize text content against Midnight Void (#000000) or Near Black (#101010) backgrounds using White Frost (#ffffff) for readability.
- Use TT Firs Neue consistently for primary headings and clear informational text.
- Employ the light weight of Editorial New (200) for all menu items and subtle UI labels.
- Reserve Power Red (#ff2936) specifically for single-point emphasis or decorative accents; avoid using it for primary interactive elements.
- Maintain a zero border-radius on all UI elements for a sharp, modern aesthetic.
- Ensure generous spacing between content blocks, with section gaps averaging ~47px to prevent visual clutter.

### Don't

- Do not use saturated colors other than Power Red (#ff2936) anywhere in the primary UI.
- Avoid decorative elements like heavy drop shadows or complex gradients; rely on flat surfaces and high contrast.
- Do not introduce additional font families; restrict typography to TT Firs Neue, Editorial New, Altform, and Wasted Year.
- Avoid rounded corners on any UI component; all borders and edges should be sharp 0px radius.
- Do not use box shadows for elevation; rely on color shifts between Midnight Void and Near Black for subtle depth.
- Do not break the monospace alignment of the footer elements; maintain horizontal consistency.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Midnight Void | #000000 | Primary page background and deepest surface level, providing a stark 'black box' for content. |
| 1 | Near Black | #101010 | Slightly lighter background for elevated UI elements like cards or modals, creating minimal visual separation. |

## Imagery

This design system uses minimal, tightly cropped video thumbnails and potentially small decorative icons. Imagery serves primarily as content teasers rather than large, atmospheric elements. If photography is used, it should be dark, high-contrast, and focused on product or subject matter, avoiding lifestyle shots. Icons are simple, outlined or filled, and monochrome (White Frost). Image density is low, with text dominating visual space, reinforcing the idea of 'content first' and a clear, direct communication style.

## Layout

The page employs a full-bleed dark canvas with content largely centered and contained within implied horizontal bands. The hero section is dominated by an expansive, bold headline and sub-headline, centrally stacked. Below the fold, content appears in a grid-like structure, with horizontally scrolling or paginated blocks (implied by the thumbnails and '2026©' footer). Vertical rhythm is established through significant vertical spacing between sections, leading to a compact density within the content areas. Navigation is minimal, consisting of an 'X' logo and a '+' menu text positioned at the top corners.

## Similar Brands

- **A24 (film studio)** — Stark, dark-themed website with minimalist design, strong typography, and a focus on content trailers/thumbnails.
- **Huge Inc. (agency)** — Heavy reliance on custom, impactful typography, monochrome palettes with occasional stark accent colors, and a clean, spacious layout in a dark mode context.
- **Active Theory (creative studio)** — Bold, custom typography, dark backgrounds, high-contrast text, and a strong emphasis on showcasing interactive content without heavy UI chrome.
- **Basic (design agency)** — Minimalist dark theme, focus on large-scale brand typography, and a 'less is more' approach to UI elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-void: #000000;
  --color-near-black: #101010;
  --color-white-frost: #ffffff;
  --color-power-red: #ff2936;
  --font-tt-firs-neue: 'TT Firs Neue', Inter;
  --font-editorial-new: 'Editorial New', Lora;
  --font-altform: 'Altform', IBM Plex Mono;
  --font-wasted-year: 'Wasted Year', Montserrat Thin;
  --text-caption: 12px;
  --leading-caption: 0.86;
  --tracking-caption: -0.01px;
  --text-body-sm: 14px;
  --leading-body-sm: 0.86;
  --tracking-body-sm: -0.03px;
  --text-heading: 20px;
  --leading-heading: 1;
  --tracking-heading: -0.01px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-47: 47px;
  --radius-none: 0px;
  --surface-midnight-void: #000000;
  --surface-near-black: #101010;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-void: #000000;
  --color-near-black: #101010;
  --color-white-frost: #ffffff;
  --color-power-red: #ff2936;
  --font-tt-firs-neue: 'TT Firs Neue', Inter;
  --font-editorial-new: 'Editorial New', Lora;
  --font-altform: 'Altform', IBM Plex Mono;
  --font-wasted-year: 'Wasted Year', Montserrat Thin;
  --text-caption: 12px;
  --leading-caption: 0.86;
  --tracking-caption: -0.01px;
  --text-body-sm: 14px;
  --leading-body-sm: 0.86;
  --tracking-body-sm: -0.03px;
  --text-heading: 20px;
  --leading-heading: 1;
  --tracking-heading: -0.01px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-47: 47px;
  --radius-none: 0px;
  --surface-midnight-void: #000000;
  --surface-near-black: #101010;
}
```
