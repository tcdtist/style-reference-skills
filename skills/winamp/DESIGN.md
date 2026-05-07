---
version: alpha
name: "Winamp"
description: "Winamp's visual system evokes a clean, high-contrast digital canvas with sharp, modern typography, accented by a subtle, almost invisible shadow treatment for components. The design maintains a comfortable informational density, balancing clear text hierarchy with a functional, minimal use of color. Cards and interactive elements use defined radii, providing a structured yet approachable feel."
theme: "light"
industry: "media"
source_url: "https://www.winamp.com"
refero_style_id: "bc4b4dee-8b32-494c-9a2d-d56fcd450b79"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516197464-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516197464-thumb.jpg"
extracted_at: "2026-04-30T02:30:17.233Z"
---

# Winamp — Style Reference

> Crisp digital canvas

**Theme:** light

**Industry:** media

Winamp's visual system evokes a clean, high-contrast digital canvas with sharp, modern typography, accented by a subtle, almost invisible shadow treatment for components. The design maintains a comfortable informational density, balancing clear text hierarchy with a functional, minimal use of color. Cards and interactive elements use defined radii, providing a structured yet approachable feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Absolute Zero | #000000 | `--color-absolute-zero` | Primary text, critical UI elements, strong borders, icons |
| Arctic White | #ffffff | `--color-arctic-white` | Pure white page backgrounds and elevated card surfaces, strong text contrast for dark elements |
| Graphite | #18181b | `--color-graphite` | Darker card surfaces, button backgrounds in dark mode contexts (not visible in screenshot but suggested by data) |
| Fog | #f7f7f7 | `--color-fog` | Default page background, light card surfaces, subtle navigation backgrounds |
| Storm Gray | #71717a | `--color-storm-gray` | Muted body text, secondary navigation items, subtle borders and fills |
| Midnight Ash | #09090b | `--color-midnight-ash` | Dark body text, headings on light surfaces, subtle borders |
| Silver Whisper | #a1a1aa | `--color-silver-whisper` | Helper text, ghost button borders, subtle link colors |
| Cloud Burst | #d4d4d8 | `--color-cloud-burst` | Hairline separators and dividers, subtle navigational borders |

## Tokens — Typography

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Used for a variety of minimal UI elements, including some links and small informational text, providing a reliable baseline.

### Poppins

- **Token:** `--font-poppins`
- **Substitute:** sans-serif
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 13px, 15px, 19px, 24px, 34px, 69px
- **Line heights:** 1.13, 1.18, 1.25, 1.26, 1.33, 1.50, 1.60, 1.62
- **Letter spacing:** -0.0220em
- **Role:** The primary typeface for headings, body text, and navigation, offering a modern and legible aesthetic. Its consistent letter-spacing across sizes gives it a subtly crafted feel.

### Rubik

- **Token:** `--font-rubik`
- **Substitute:** sans-serif
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.50
- **Letter spacing:** normal
- **Role:** A secondary font for very specific, likely decorative or specialized content areas.

### Inter

- **Token:** `--font-inter`
- **Substitute:** sans-serif
- **Weights:** 700
- **Sizes:** 24px
- **Line heights:** 1.33
- **Letter spacing:** normal
- **Role:** Used for specific emphasized text or elements where a bold, clear statement is needed.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | -0.264px | `--text-caption` |
| body | 15px | 1.6 | -0.33px | `--text-body` |
| subheading | 19px | 1.26 | -0.418px | `--text-subheading` |
| heading | 24px | 1.33 | -0.528px | `--text-heading` |
| heading-lg | 34px | 1.18 | -0.748px | `--text-heading-lg` |
| display | 69px | 1.13 | -1.518px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| buttons | 8px |
| general | 12px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 24px |
| elementGap | 10px |

## Components

### Primary Filled Button

**Role:** Navigational call to action

A button with a background of #18181b, text color #0000ee (browser default, but effectively a strong dark blue), and 8px border radius. Used for key interactive elements.

### Ghost Button

**Role:** Secondary action or subtle navigation

A button with a transparent background, text color #0000ee (browser default), and 8px border radius. Its presence is defined by text color and shape, not fill.

### Light Card

**Role:** Content container

A card with a #f7f7f7 background and 16px border radius, no discernible box-shadow. Used for grouping related content on light backgrounds.

### Dark Card

**Role:** Emphasized content container

A card with a #18181b background and 16px border radius, no discernible box-shadow. Used for higher contrast content sections.

### Navigation Link

**Role:** Top-level navigation items

Uses Poppins Regular at 15px, color #000000 or #71717a, with no background. Interaction is subtle, relying on hover states not captured.

## Do's and Don'ts

### Do

- Prioritize Absolute Zero (#000000) for all primary text elements to ensure high contrast and readability on light backgrounds.
- Use Fog (#f7f7f7) as the base page background color; combine it with Arctic White (#ffffff) for subtle surface elevation on cards or modal backgrounds.
- Apply 16px border-radius to cards and larger content blocks to maintain a consistent soft-edged aesthetic.
- Utilize Poppins for all primary typographic needs, applying the detected -0.0220em letter-spacing for a refined text appearance.
- Maintain an elementGap of 10px between inline UI elements and a sectionGap of 40px for vertical rhythm between content blocks.
- Implement buttons with an 8px border-radius, using either the Primary Filled Button (background #18181b) or Ghost Button variants to delineate actions.

### Don't

- Avoid arbitrary uses of color; chromatic color should be reserved for brand accents or semantic states not present on this page.
- Do not introduce heavy box-shadows or complex layer effects; the system relies on flat surfaces and high contrast for visual hierarchy.
- Do not deviate from the Poppins typeface for headings and body text; alternative fonts like Rubik and Inter are for specialized contexts only.
- Avoid using radii larger than 16px or smaller than 8px for main components, as this disrupts the established shape language.
- Do not use generic system link blue; primary links should inherit text colors or use Silver Whisper (#a1a1aa) for subtle interactive states if not a button.

## Imagery

Imagery consists primarily of lifestyle photography with a warm, slightly desaturated tonal quality, featuring people engaged with music or technology. These images are treatment-free (no filters or overlays) and are presented within a distinctive rotated, rectangular mask with 16px rounded corners, often angled to create dynamic, overlapping compositions that break the typical grid. Icons are minimal, outlined, and monochromatic, primarily serving functional roles rather than decorative.

## Layout

The page uses a maximum content width centered model, though the hero section spans full-bleed with angled graphical elements. The hero features a large, left-aligned headline and supporting text juxtaposed against the dynamic, overlapping rotated image masks on the right. Subsequent sections, while not fully detailed, suggest a consistent vertical rhythm using a 40px section gap. Content generally seems to follow a clear single-column or implied two-column structure for text-focused areas, with visual interest added by the angled images.

## Similar Brands

- **Spotify** — Clean, high-contrast typography and a focus on content presentation within a clear layout hierarchy.
- **Apple Music** — Minimalist aesthetic with strong typographic emphasis and a clear distinction between text and visual elements on a light canvas.
- **SoundCloud** — Focus on creative content (music) presented with a modern, approachable design and relatively flat UI components.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-absolute-zero: #000000;
  --color-arctic-white: #ffffff;
  --color-graphite: #18181b;
  --color-fog: #f7f7f7;
  --color-storm-gray: #71717a;
  --color-midnight-ash: #09090b;
  --color-silver-whisper: #a1a1aa;
  --color-cloud-burst: #d4d4d8;
  --font-sans-serif: 'sans-serif', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --font-poppins: 'Poppins', sans-serif;
  --font-rubik: 'Rubik', sans-serif;
  --font-inter: 'Inter', sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: -0.264px;
  --text-body: 15px;
  --leading-body: 1.6;
  --tracking-body: -0.33px;
  --text-subheading: 19px;
  --leading-subheading: 1.26;
  --tracking-subheading: -0.418px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.528px;
  --text-heading-lg: 34px;
  --leading-heading-lg: 1.18;
  --tracking-heading-lg: -0.748px;
  --text-display: 69px;
  --leading-display: 1.13;
  --tracking-display: -1.518px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --radius-cards: 16px;
  --radius-buttons: 8px;
  --radius-general: 12px;
}
```

### Tailwind v4

```css
@theme {
  --color-absolute-zero: #000000;
  --color-arctic-white: #ffffff;
  --color-graphite: #18181b;
  --color-fog: #f7f7f7;
  --color-storm-gray: #71717a;
  --color-midnight-ash: #09090b;
  --color-silver-whisper: #a1a1aa;
  --color-cloud-burst: #d4d4d8;
  --font-sans-serif: 'sans-serif', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --font-poppins: 'Poppins', sans-serif;
  --font-rubik: 'Rubik', sans-serif;
  --font-inter: 'Inter', sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: -0.264px;
  --text-body: 15px;
  --leading-body: 1.6;
  --tracking-body: -0.33px;
  --text-subheading: 19px;
  --leading-subheading: 1.26;
  --tracking-subheading: -0.418px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.528px;
  --text-heading-lg: 34px;
  --leading-heading-lg: 1.18;
  --tracking-heading-lg: -0.748px;
  --text-display: 69px;
  --leading-display: 1.13;
  --tracking-display: -1.518px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --radius-cards: 16px;
  --radius-buttons: 8px;
  --radius-general: 12px;
}
```
