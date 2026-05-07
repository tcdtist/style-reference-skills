---
version: alpha
name: "monopo saigon"
description: "monopo saigon operates with a sophisticated dark aesthetic, employing a backdrop of organic, shifting gradients that give the impression of fluid, sculpted surfaces. The UI elements are minimal and translucent, appearing as if etched onto or floating within this rich, atmospheric background. Typography is stark white against dark, providing a strong contrast for readability while maintaining an understated elegance. The overall impression is one of artful depth and a restrained, almost ethereal digital presence."
theme: "dark"
industry: "agency"
source_url: "https://monopo.vn"
refero_style_id: "3e52dd36-6ab1-48c6-bc40-47ef6d33abc2"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515314411-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515314411-thumb.jpg"
extracted_at: "2026-04-30T02:15:35.869Z"
---

# monopo saigon — Style Reference

> Shifting gradient depths on frosted glass

**Theme:** dark

**Industry:** agency

monopo saigon operates with a sophisticated dark aesthetic, employing a backdrop of organic, shifting gradients that give the impression of fluid, sculpted surfaces. The UI elements are minimal and translucent, appearing as if etched onto or floating within this rich, atmospheric background. Typography is stark white against dark, providing a strong contrast for readability while maintaining an understated elegance. The overall impression is one of artful depth and a restrained, almost ethereal digital presence.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Canvas | #000000 | `--color-midnight-canvas` | Primary background for pages, cards, and dark-themed sections |
| Frost White | #ffffff | `--color-frost-white` | Primary text color, link defaults, borders for ghost components, and accents against dark backgrounds. Used for text on primary buttons |
| Deep Shadow | #181818 | `--color-deep-shadow` | Secondary text in footers and less prominent information. Subtly darker borders |
| Whisper Gray | #6d6d6d | `--color-whisper-gray` | Muted body text and auxiliary text where lower contrast is desired |
| Misty Gray | #636363 | `--color-misty-gray` | Background for subtle, low-contrast interactive elements like the cookie consent button |
| Deep Ocean Gradient | #a0e0ab | `--color-deep-ocean-gradient` | Atmospheric background for hero sections and full-bleed visual elements, creating an immersive, fluid environment |

## Tokens — Typography

### Roobert

- **Token:** `--font-roobert`
- **Substitute:** system-ui, sans-serif
- **Weights:** 300, 400, 600
- **Sizes:** 11px, 12px, 16px, 18px, 29px, 30px, 39px, 45px, 54px, 78px, 94px, 225px
- **Line heights:** 0.70, 0.76, 1.10, 1.15, 1.19, 1.21, 1.22, 1.24, 1.25, 1.36, 1.39, 1.58, 1.82
- **Letter spacing:** normal
- **Role:** Primary brand typeface for all headings, body text, links, and buttons. Its wide range of weights and sizes supports a detailed typographic hierarchy, from subtle metadata to commanding display text. The default 'normal' letter spacing keeps it highly legible.

### Raleway

- **Token:** `--font-raleway`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 54px
- **Line heights:** 1.39
- **Letter spacing:** normal
- **Role:** Used for specific heading elements, providing an alternative, slightly more classic feel than Roobert.

### system-ui

- **Token:** `--font-system-ui`
- **Weights:** 400
- **Sizes:** 9px, 16px
- **Line heights:** 1.15, 1.32
- **Role:** system-ui — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.58 | — | `--text-caption` |
| body | 16px | 1.25 | — | `--text-body` |
| subheading | 18px | 1.22 | — | `--text-subheading` |
| heading-sm | 29px | 1.21 | — | `--text-heading-sm` |
| heading | 39px | 1.15 | — | `--text-heading` |
| heading-lg | 54px | 1.39 | — | `--text-heading-lg` |
| display | 225px | 0.7 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-37 | 37px | `--spacing-37` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-47 | 47px | `--spacing-47` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-74 | 74px | `--spacing-74` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-79 | 79px | `--spacing-79` |
| spacing-83 | 83px | `--spacing-83` |
| spacing-92 | 92px | `--spacing-92` |
| spacing-97 | 97px | `--spacing-97` |
| spacing-101 | 101px | `--spacing-101` |
| spacing-111 | 111px | `--spacing-111` |
| spacing-126 | 126px | `--spacing-126` |
| spacing-152 | 152px | `--spacing-152` |
| spacing-180 | 180px | `--spacing-180` |
| spacing-181 | 181px | `--spacing-181` |
| spacing-187 | 187px | `--spacing-187` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 10px |
| buttons | 75.024px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1078px |
| sectionGap | 46px |
| cardPadding | 34px |
| elementGap | 14px |

## Components

### Ghost Button - Light Border

**Role:** Interactive element allowing light interaction without dominating the dark background. Features a very subtle border.

Background: rgba(0, 0, 0, 0), Text: #000000, Border: 1px solid rgba(255, 255, 255, 0.3) on top only, Radius: 75.024px, Padding: 1px 6px.

### Text Link Button

**Role:** Minimal interactive element, appearing as simple text. Used for navigation and tertiary actions.

Background: rgba(0, 0, 0, 0), Text: #000000, No border, Radius: 0px, Padding: 0px.

### Filled Cookie Consent Button

**Role:** Primary action button within transient UI elements like cookie consent pop-ups. Offers a clear, actionable contrast.

Background: rgba(55, 55, 55, 0.78), Text: #ffffff, Border: 1px solid #ffffff, Radius: 75.024px, Padding: 11.232px 33.696px.

### Dark Text Link Button

**Role:** Minimal interactive element for navigation and tertiary actions, in context where text color should be white.

Background: rgba(0, 0, 0, 0), Text: #ffffff, No border, Radius: 0px, Padding: 0px.

### Information Card Overlay

**Role:** Base card element for presenting content. Designed to blend seamlessly into the background, letting content take precedence.

Background: rgba(0, 0, 0, 0), Border-radius: 0px, No shadow, Padding: 0px.

## Do's and Don'ts

### Do

- Prioritize Roobert as the primary typeface for all textual content, utilizing its diverse weights to establish hierarchy.
- Maintain a spacious layout with a base unit of 4px and aim for an element gap of 14px to ensure visual breathing room.
- Use Midnight Canvas (#000000) for all primary backgrounds and Frost White (#ffffff) for primary text to ensure high contrast.
- Apply a border-radius of 75.024px to all buttons for a distinctly rounded, pill-like appearance.
- Implement the Deep Ocean Gradient (linear-gradient(90deg, rgb(160, 224, 171), rgb(255, 172, 46) 50%, rgb(165, 45, 37))) as a background for hero and large interactive sections.
- Ensure interactive elements like buttons and links use Frost White (#ffffff) text against dark backgrounds unless a specific muted tone (Whisper Gray #6d6d6d) is explicitly called for.
- Use a subtle 1px border with rgba(255, 255, 255, 0.3) for ghost buttons to maintain a minimalist aesthetic.

### Don't

- Avoid using harsh, saturated accent colors that would disrupt the site's subdued and atmospheric palette.
- Do not introduce square or sharp borders on interactive elements; button radii should always be 75.024px.
- Refrain from using strong box-shadows or heavy elevation, as the design relies on gradient depth rather than layered elements.
- Do not deviate from the specified Roobert and Raleway font families; avoid generic system fonts for branding elements.
- Avoid tight information density; maintain spacious relationships between elements and sections.
- Do not treat #636363 as a primary action color; reserve it for specific, muted interactive elements like secondary consent buttons.
- Never use solid color backgrounds in feature sections where the organic gradient is intended to create atmosphere.

## Imagery

The site deploys abstract, organic gradients and translucent spherical shapes as primary background visuals, creating a sense of depth and fluid motion. There is an absence of traditional photography or illustrations. Icons (if present) are minimal, outlined, and monochromatic, matching the overall dark and understated UI. The visual density is image-heavy in terms of atmospheric graphics, but text-dominant for content presentation, allowing the background to provide mood without distracting from information.

## Layout

The page primarily uses a full-bleed layout for its immersive background gradients, with content contained within a consistent max-width of 1078px, centered on the screen. The hero section features a large, centered headline directly on the animated gradient background. Sections maintain a consistent vertical rhythm, with generous section gaps of 46px. Content elements are typically stacked or arranged in minimal two-column text-left/image-right patterns (where 'image' refers to the abstract gradient visuals), but all elements appear to live within the main content well. The header is a sticky top navigation bar with minimal text links.

## Similar Brands

- **Stripe** — Uses dark backgrounds with subtle lighting effects and large, clean typography for a sophisticated feel.
- **Apple (services pages)** — Employs immersive, full-bleed backgrounds often with abstract or gradient visuals and prominent, minimalist text overlays.
- **Framer** — Features a dark, developer-focused UI with precise typography and a minimalist approach to components, emphasizing content over heavy chrome.
- **Spotify (desktop app)** — Maintains a dark theme with high-contrast text and a focus on content presentation against subdued backgrounds.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-canvas: #000000;
  --color-frost-white: #ffffff;
  --color-deep-shadow: #181818;
  --color-whisper-gray: #6d6d6d;
  --color-misty-gray: #636363;
  --color-deep-ocean-gradient: #a0e0ab;
  --font-roobert: 'Roobert', system-ui, sans-serif;
  --font-raleway: 'Raleway', serif;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.58;
  --text-body: 16px;
  --leading-body: 1.25;
  --text-subheading: 18px;
  --leading-subheading: 1.22;
  --text-heading-sm: 29px;
  --leading-heading-sm: 1.21;
  --text-heading: 39px;
  --leading-heading: 1.15;
  --text-heading-lg: 54px;
  --leading-heading-lg: 1.39;
  --text-display: 225px;
  --leading-display: 0.7;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-19: 19px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-37: 37px;
  --spacing-40: 40px;
  --spacing-46: 46px;
  --spacing-47: 47px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-74: 74px;
  --spacing-75: 75px;
  --spacing-79: 79px;
  --spacing-83: 83px;
  --spacing-92: 92px;
  --spacing-97: 97px;
  --spacing-101: 101px;
  --spacing-111: 111px;
  --spacing-126: 126px;
  --spacing-152: 152px;
  --spacing-180: 180px;
  --spacing-181: 181px;
  --spacing-187: 187px;
  --radius-cards: 10px;
  --radius-buttons: 75.024px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-canvas: #000000;
  --color-frost-white: #ffffff;
  --color-deep-shadow: #181818;
  --color-whisper-gray: #6d6d6d;
  --color-misty-gray: #636363;
  --color-deep-ocean-gradient: #a0e0ab;
  --font-roobert: 'Roobert', system-ui, sans-serif;
  --font-raleway: 'Raleway', serif;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.58;
  --text-body: 16px;
  --leading-body: 1.25;
  --text-subheading: 18px;
  --leading-subheading: 1.22;
  --text-heading-sm: 29px;
  --leading-heading-sm: 1.21;
  --text-heading: 39px;
  --leading-heading: 1.15;
  --text-heading-lg: 54px;
  --leading-heading-lg: 1.39;
  --text-display: 225px;
  --leading-display: 0.7;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-19: 19px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-37: 37px;
  --spacing-40: 40px;
  --spacing-46: 46px;
  --spacing-47: 47px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-74: 74px;
  --spacing-75: 75px;
  --spacing-79: 79px;
  --spacing-83: 83px;
  --spacing-92: 92px;
  --spacing-97: 97px;
  --spacing-101: 101px;
  --spacing-111: 111px;
  --spacing-126: 126px;
  --spacing-152: 152px;
  --spacing-180: 180px;
  --spacing-181: 181px;
  --spacing-187: 187px;
  --radius-cards: 10px;
  --radius-buttons: 75.024px;
}
```
