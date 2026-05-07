---
version: alpha
name: "Sougen"
description: "Sougen presents a digital-futuristic aesthetic through a high-contrast, mostly achromatic palette punctuated by a singular, vivid teal accent. Typography is a blend of structured geometric sans-serifs, emphasizing clean lines and generous letter spacing that hints at digital interfaces. Components are lightweight, often outlined, and favor rounded forms for interactive elements, reinforcing an approachable yet modern digital presence. The visual system balances stark, almost monochrome backgrounds with vivid, glowing accents to draw attention to interactive elements and brand identity."
theme: "light"
industry: "other"
source_url: "https://sougen.co"
refero_style_id: "20c01a33-fded-4094-8450-6114b1508a30"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514423794-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514423794-thumb.jpg"
extracted_at: "2026-04-30T02:00:41.230Z"
---

# Sougen — Style Reference

> monochromatic starkness with glowing teal

**Theme:** light

**Industry:** other

Sougen presents a digital-futuristic aesthetic through a high-contrast, mostly achromatic palette punctuated by a singular, vivid teal accent. Typography is a blend of structured geometric sans-serifs, emphasizing clean lines and generous letter spacing that hints at digital interfaces. Components are lightweight, often outlined, and favor rounded forms for interactive elements, reinforcing an approachable yet modern digital presence. The visual system balances stark, almost monochrome backgrounds with vivid, glowing accents to draw attention to interactive elements and brand identity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button backgrounds, default text in negative space |
| Surface Frost | #f9f9f9 | `--color-surface-frost` | Slightly off-white backgrounds for subtle surface differentiation, secondary text |
| Border Fog | #e5e7eb | `--color-border-fog` | Hairline borders, dividers, subtle button outlines |
| Text Graphite | #242424 | `--color-text-graphite` | Primary body text, headings, dark button backgrounds, icons |
| Pitch Black | #000000 | `--color-pitch-black` | Deepest text color for maximum contrast, occasionally used for icons |
| System Teal | #16ebeb | `--color-system-teal` | Brand accent, interactive highlights, active states, decorative fills, glowing elements. Signals actionable items and key brand iconography |
| Teal Glow | #6df8f8 | `--color-teal-glow` | Used for gradient highlights and subtle glowing effects, often paired with System Teal |

## Tokens — Typography

### Rubik

- **Token:** `--font-rubik`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 600, 700
- **Sizes:** 9px, 12px, 14px, 15px, 16px, 20px, 22px, 23px, 50px, 100px, 115px, 116px
- **Line heights:** 0.98, 1.00, 1.03, 1.04, 1.07, 1.23, 1.25, 1.58, 1.59
- **Letter spacing:** -0.28px at 9px (0.07em), -1.2px at 15px (0.07em), -4.4px at 100px (0.07em)
- **Role:** Primary headings and display text, conveying a strong, geometric, and modern digital presence with its clean lines. Noticeable for its slightly condensed appearance at larger sizes.

### Akrobat

- **Token:** `--font-akrobat`
- **Substitute:** Avenir Next, sans-serif
- **Weights:** 400, 700
- **Sizes:** 16px, 24px, 45px, 86px
- **Line heights:** 1.00, 1.50
- **Letter spacing:** 2.25px at 45px (0.05em), 4.3px at 86px (0.05em)
- **Role:** Large, impactful display headings that provide a unique, highly geometric and wide feel. Used sparingly for maximum effect, reinforcing the high-tech, architectural feel.

### Open Sans

- **Token:** `--font-open-sans`
- **Substitute:** Roboto, Helvetica Neue, sans-serif
- **Weights:** 400, 600, 700
- **Sizes:** 8px, 9px, 11px, 12px, 13px, 15px, 16px
- **Line heights:** 0.77, 1.25, 1.33, 1.46, 1.50, 1.56, 1.58, 1.60, 1.63, 1.64
- **Letter spacing:** 0.24px at 8px (0.03em), 1.6px at 16px (0.10em)
- **Role:** Body copy, descriptions, and smaller textual elements. Provides legibility and a neutral grounding against the more prominent display fonts, with varied letter spacing for distinct visual texture.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| heading | 23px | 1.23 | -1.61px | `--text-heading` |
| heading-lg | 50px | 1.07 | -3.5px | `--text-heading-lg` |
| display | 100px | 1 | -7px | `--text-display` |
| display-xl | 116px | 0.98 | -8.12px | `--text-display-xl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-150 | 150px | `--spacing-150` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 999px |
| buttons | 999px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(109, 248, 248, 0.6) 0px 0px 4px 1px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.05) 5px 5px 15px 5px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 90px |
| cardPadding | 15px |
| elementGap | 15px |

## Components

### Hero Outline Button

**Role:** Primary call to action in hero sections.

Ghost button with rounded corners: Text Graphite for text, transparent background, Border Fog 1px border. Padding of 0px top/bottom, 15px left/right. Font Rubik, weight 400. Letter spacing 0.07em.

### Accent Ghost Button

**Role:** Secondary call to action or interactive element.

Transparent background button with Border Fog border and rounded corners (999px). Uses Text Graphite for text. Padding of 0px top/bottom, 15px left/right.

### Filled Dark Button

**Role:** High-contrast action button.

Solid Text Graphite background with Canvas White text and rounded corners (999px). Padding of 0px top/bottom, 20px left/right.

### Footer Nav Link

**Role:** Navigation links in the footer.

Text Graphite text, 0px border-radius, top padding 20px, bottom padding 20px, left padding 50px.

### Subtle Dividers

**Role:** Visual separation between content blocks.

Hairline borders using Border Fog, primarily for horizontal separation.

## Do's and Don'ts

### Do

- Prioritize a System Teal accent for all interactive elements, active states, and small brand details, like button borders or icon fills for calls to action.
- Use Text Graphite (#242424) for primary body text and most headings, transitioning to Pitch Black (#000000) only for highest contrast where context allows.
- Employ Rubik for most major headings and display text, leveraging its geometric character. For maximal impact, use Akrobat for the largest, most significant titles.
- Ensure all interactive buttons and tags utilize a 999px border-radius, creating an approachable, pill-shaped aesthetic.
- Maintain high contrast between text and backgrounds; primarily use Canvas White (#ffffff) or Surface Frost (#f9f9f9) for backgrounds against dark text.
- Apply Open Sans (#400) for all body copy and descriptive text, ensuring readability across varying text densities.
- Introduce a subtle 1px Border Fog (#e5e7eb) for dividers, outlines, and inactive states to maintain visual structure without heaviness.

### Don't

- Avoid introducing additional chromatic colors; the System Teal (#16ebeb) is the sole brand accent.
- Do not use heavy, filled background cards or sections; prefer transparent or subtly differentiated Surface Frost (#f9f9f9) and Canvas White (#ffffff) backgrounds.
- Do not use standard rectangular buttons; all buttons and tags should adhere to the 999px rounded-corner aesthetic.
- Avoid mixing font families arbitrarily; stick to Rubik for headings/display, Akrobat for impactful titles, and Open Sans for body text.
- Do not use dark backgrounds extensively; the site is predominantly light-themed, with dark elements serving as strong contrast points.
- Do not rely on subtle visual cues for interactive elements; the System Teal should clearly indicate clickable or active states.
- Avoid complex shadow effects; stick to the subtle glow of rgba(109, 248, 248, 0.6) 0px 0px 4px 1px for accent glow or rgba(0, 0, 0, 0.05) 5px 5px 15px 5px for soft elevation.

## Elevation

- **Shadow 1:** `rgba(109, 248, 248, 0.6) 0px 0px 4px 1px`
- **Shadow 2:** `rgba(0, 0, 0, 0.05) 5px 5px 15px 5px`

## Imagery

The visual language is characterized by 3D rendered, stylized characters and abstract architectural forms, primarily in achromatic tones (white, black, gray). The core imagery is a character in a white hooded cloak with glowing System Teal accents, symbolizing technological advancement. Graphics are clean, often outlined, and minimal, contributing to a futuristic, digital aesthetic. Imagery serves an explanatory and atmospheric role, showcasing product concepts rather than real-world applications. The density is moderate, with imagery occupying dominant visual space in the hero section and complementing text in content blocks.

## Layout

The page employs a full-bleed layout for the hero section with a centered, high-contrast headline and supporting text. Subsequent sections appear to follow a max-width contained pattern, with content likely centered. Vertical spacing between sections is generous, contributing to a comfortable density. Content arrangement often features a centered stack for textual information, transitioning to a split-section for features or ecosystem details. The navigation consists of a minimal top bar with social icons and a 'Scroll Down' indicator for primary interaction guidance.

## Similar Brands

- **The Sandbox** — Web3/Metaverse sites with similar blend of digital art and clean UI, focused on immersive user experience.
- **Decentraland** — Platform-focused metaverse brand leveraging a future-forward, digital aesthetic with distinct accent colors on minimal backgrounds.
- **Figma** — Modern design tool with a clear, functional monochromatic UI and a strong accent color for interactive elements and brand recognition.
- **Linear** — Productivity tool with a minimalist, high-contrast interface, relying on careful typography and a strategic accent color to define its brand.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-surface-frost: #f9f9f9;
  --color-border-fog: #e5e7eb;
  --color-text-graphite: #242424;
  --color-pitch-black: #000000;
  --color-system-teal: #16ebeb;
  --color-teal-glow: #6df8f8;
  --font-rubik: 'Rubik', system-ui, sans-serif;
  --font-akrobat: 'Akrobat', Avenir Next, sans-serif;
  --font-open-sans: 'Open Sans', Roboto, Helvetica Neue, sans-serif;
  --text-heading: 23px;
  --leading-heading: 1.23;
  --tracking-heading: -1.61px;
  --text-heading-lg: 50px;
  --leading-heading-lg: 1.07;
  --tracking-heading-lg: -3.5px;
  --text-display: 100px;
  --leading-display: 1;
  --tracking-display: -7px;
  --text-display-xl: 116px;
  --leading-display-xl: 0.98;
  --tracking-display-xl: -8.12px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-50: 50px;
  --spacing-54: 54px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-150: 150px;
  --radius-tags: 999px;
  --radius-buttons: 999px;
  --shadow-xl: rgba(109, 248, 248, 0.6) 0px 0px 4px 1px;
  --shadow-xl-2: rgba(0, 0, 0, 0.05) 5px 5px 15px 5px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-surface-frost: #f9f9f9;
  --color-border-fog: #e5e7eb;
  --color-text-graphite: #242424;
  --color-pitch-black: #000000;
  --color-system-teal: #16ebeb;
  --color-teal-glow: #6df8f8;
  --font-rubik: 'Rubik', system-ui, sans-serif;
  --font-akrobat: 'Akrobat', Avenir Next, sans-serif;
  --font-open-sans: 'Open Sans', Roboto, Helvetica Neue, sans-serif;
  --text-heading: 23px;
  --leading-heading: 1.23;
  --tracking-heading: -1.61px;
  --text-heading-lg: 50px;
  --leading-heading-lg: 1.07;
  --tracking-heading-lg: -3.5px;
  --text-display: 100px;
  --leading-display: 1;
  --tracking-display: -7px;
  --text-display-xl: 116px;
  --leading-display-xl: 0.98;
  --tracking-display-xl: -8.12px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-50: 50px;
  --spacing-54: 54px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-150: 150px;
  --radius-tags: 999px;
  --radius-buttons: 999px;
  --shadow-xl: rgba(109, 248, 248, 0.6) 0px 0px 4px 1px;
  --shadow-xl-2: rgba(0, 0, 0, 0.05) 5px 5px 15px 5px;
}
```
