---
version: alpha
name: "Marco"
description: "Macro.fyi presents a functional white-canvas aesthetic, emphasizing content organization within distinct, softly shadowed containers. The system balances readability with a dense information display, utilizing a largely achromatic palette punctuated by a sole vivid violet for actionable elements and subtle gradient accents for dynamic cards."
theme: "light"
industry: "design"
source_url: "https://www.marco.fyi"
refero_style_id: "88e9d606-7e8f-479c-9508-1b081e254ed9"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512438373-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512438373-thumb.jpg"
extracted_at: "2026-04-30T01:27:44.966Z"
---

# Marco — Style Reference

> organized content on frosted glass

**Theme:** light

**Industry:** design

Macro.fyi presents a functional white-canvas aesthetic, emphasizing content organization within distinct, softly shadowed containers. The system balances readability with a dense information display, utilizing a largely achromatic palette punctuated by a sole vivid violet for actionable elements and subtle gradient accents for dynamic cards.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card base layer, foundational surface |
| Card Frost | #f7f7f9 | `--color-card-frost` | Default card backgrounds, subtle surface distinction from the main canvas |
| Whisper Gray | #f2f2f2 | `--color-whisper-gray` | Subtle background for UI elements, light active states |
| Cloud Tint | #eff0ff | `--color-cloud-tint` | Light background for specific interactive cards or linked elements, a slight cool tint |
| Warm Paper | #fff9ed | `--color-warm-paper` | Background for information cards, providing a soft, accessible contrast to the standard frost |
| Text Primary | #333333 | `--color-text-primary` | Primary text, headings, and crucial interface elements for high readability |
| Text Secondary | #707070 | `--color-text-secondary` | Secondary text, muted headlines, subtle labels |
| Text Dim | #949494 | `--color-text-dim` | Tertiary text, helper text, and subtle interface labels, receding slightly from text secondary |
| Divider Gray | #cccccf | `--color-divider-gray` | Muted UI surface for disabled controls, low-emphasis panels, and placeholder blocks. Do not promote it to the primary CTA color |
| Outline Blue | #1685c7 | `--color-outline-blue` | Blue accent for outlined action borders, linked labels, and lightweight interactive emphasis. Do not promote it to the primary CTA color |
| Interactive Violet | #6366f1 | `--color-interactive-violet` | Outline for active/focused elements, interactive links, and highlights — signals engagement dynamically |
| Gradient Sunset | #ff4d79 | `--color-gradient-sunset` | Supporting palette color for small decorative accents when the core palette needs contrast. Do not promote it to the primary CTA color |
| Alarm Red | #e92f48 | `--color-alarm-red` | Red wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Use as a supporting accent, not as a status color |
| Blush Shadow | #f8c1c8 | `--color-blush-shadow` | Red supporting accent for decorative details and low-frequency emphasis. Use as a supporting accent, not as a status color |

## Tokens — Typography

### Maison Neue

- **Token:** `--font-maison-neue`
- **Substitute:** Inter
- **Weights:** 400, 600
- **Sizes:** 12px, 14px, 40px
- **Line heights:** 1.00, 1.43, 1.67
- **Letter spacing:** 0.0070em
- **Role:** Body text, card labels, and some section information. Its precise tracking supports dense information display without sacrificing clarity.

### Graphik

- **Token:** `--font-graphik`
- **Substitute:** Figtree
- **Weights:** 400, 500, 600
- **Sizes:** 14px, 16px, 20px, 31px
- **Line heights:** 1.00, 1.25, 1.38, 1.43, 1.50
- **Letter spacing:** -0.0130em, 0.0050em, 0.0070em, 0.0140em
- **Role:** Headings and prominent links, its varied weights and tight letter spacing create a modern, impactful presence for key statements.

### Neue Montreal

- **Token:** `--font-neue-montreal`
- **Substitute:** Montserrat
- **Weights:** 400, 500
- **Sizes:** 8px, 10px, 12px, 14px, 16px, 18px, 20px, 22px, 24px, 26px
- **Line heights:** 1.00, 1.11, 1.13, 1.20, 1.25, 1.45, 1.67
- **Letter spacing:** 0.0090em, 0.0130em, 0.0200em, 0.0220em, 0.0250em, 0.0440em, 0.0500em, 0.0750em, 0.1000em, 0.2000em
- **Role:** Detailed labels, metadata, and small print, its generous letter-spacing at smaller sizes ensures legibility of ancillary information.

### Chirp

- **Token:** `--font-chirp`
- **Substitute:** Roboto
- **Weights:** 400, 700
- **Sizes:** 16px, 17px, 24px
- **Line heights:** 1.20, 1.35, 1.40
- **Letter spacing:** normal
- **Role:** Used for specific social media embeds and some stylized links, maintaining its distinct character.

### SF Pro Display

- **Token:** `--font-sf-pro-display`
- **Weights:** 400, 600
- **Sizes:** 8px, 11px, 16px
- **Line heights:** 0.75, 1.4, 1.63, 1.82
- **Letter spacing:** -0.004, 0.013, 0.018
- **Role:** SF Pro Display — detected in extracted data but not described by AI

### Bluu suuperstar

- **Token:** `--font-bluu-suuperstar`
- **Weights:** 700
- **Sizes:** 15px, 16px, 38px
- **Line heights:** 1, 1.33
- **Role:** Bluu suuperstar — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 14px | 1.43 | — | `--text-body` |
| body-lg | 16px | 1.25 | — | `--text-body-lg` |
| subheading | 20px | 1.2 | 0.009px | `--text-subheading` |
| heading | 31px | 1.25 | -0.403px | `--text-heading` |
| display | 40px | 1.67 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 32px |
| badges | 100px |
| inputs | 8px |
| buttons | 230px |
| default | 12px |
| thumbnails | 18px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.25) 0px 1px 2px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.25) 0px 1px 3px 0px | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.25) 0px 1px 1px 0px | `--shadow-xl-3` |
| xl-4 | rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px | `--shadow-xl-4` |
| xl-5 | rgba(89, 100, 138, 0.16) 0px 2px 4px 0px | `--shadow-xl-5` |
| xl-6 | rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.06) 0px 3px 3px 0px | `--shadow-xl-6` |
| xl-7 | rgba(0, 0, 0, 0.18) 0px 1px 2px 0px | `--shadow-xl-7` |
| xl-8 | rgba(0, 0, 0, 0.12) 0px 1px 2px 0px | `--shadow-xl-8` |
| xl-9 | rgba(0, 0, 0, 0.16) 0px 1px 2px 0px | `--shadow-xl-9` |
| xl-10 | rgba(0, 0, 0, 0.05) 0px 4px 6px 0px, rgba(0, 0, 0, 0.1) 0px 10px 16px -3px | `--shadow-xl-10` |
| xl-11 | rgba(0, 0, 0, 0.1) 0px 15px 10px -3px, rgba(0, 0, 0, 0.05) 0px 6px 4px -2px | `--shadow-xl-11` |
| xl-12 | rgba(0, 0, 0, 0.1) 0px 0px 10px -3px | `--shadow-xl-12` |
| xl-13 | rgba(233, 47, 72, 0.3) 0px 4px 24px 0px | `--shadow-xl-13` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1400px |
| sectionGap | 24px |
| cardPadding | 32px |
| elementGap | 8px |

## Components

### Pill Navigation Button

**Role:** Top-level navigation and filter controls.

Ghost button with `Card Frost` background, `Text Primary` color, `230px` radius for a pill shape, and `12px` vertical, `24px` horizontal padding. No border unless active.

### Outline Action Button

**Role:** Secondary calls-to-action or subtle interactive elements.

Ghost button with `Outline Blue` border, `Text Primary` color, `56px` radius, and `10px` vertical, `16px` horizontal padding.

### Default Content Card

**Role:** Container for primary content blocks.

Background `Card Frost`, `32px` border-radius, no box shadow, `32px` padding on all sides. Houses main text content and sub-components.

### Layered Detail Card

**Role:** Elevated information or interactive listings within larger content areas.

Background can be `Cloud Tint` or `Warm Paper`. `8px` border-radius, subtle shadow `rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px`, and `8px` vertical padding with no horizontal padding.

### Ghost Card

**Role:** Purely structural grouping without visual adornment.

Transparent background, no border-radius, no shadow, no padding. Used for simple content wrapping.

### Gradient Action Card

**Role:** Prominent interactive elements or special offers.

Background `Gradient Sunset`, `32px` border-radius, `32px` padding. Contains inverted text for contrast.

### Input Field

**Role:** User input for forms.

White background, `Divider Gray` 1px border. Focus state border turns into `Interactive Violet`.

### Selected Link Badge

**Role:** Indicates active or selected items in a list.

Background `Cloud Tint`, border `Interactive Violet`, `100px` radius for a pill shape, `6px` vertical, `10px` horizontal padding.

## Do's and Don'ts

### Do

- Use `Text Primary` (#333333) for all main content and headings.
- Apply `Card Frost` (#f7f7f9) as the default background for content cards, reserving `Canvas White` (#ffffff) for the page background.
- Utilize `32px` border-radius for main content cards and larger organizational blocks.
- Employ `Outline Blue` (#1685c7) for borders of interactive elements when a filled background is not desired.
- Ensure generous `32px` padding within all `Default Content Card` elements.
- Differentiate interactive elements using `Interactive Violet` (#6366f1) for borders on focus or active states.
- Maintain a clear visual hierarchy by limiting prominent box shadows to `Layered Detail Card` elements, and keep them subtle.

### Don't

- Do not use highly saturated colors for large background areas; maintain the overall achromatic canvas.
- Avoid using multiple distinct colors for primary call-to-action buttons; the system emphasizes outlined chromatic actions.
- Do not use generic border-radii; adhere to the specified `32px` for cards, `230px` for pill buttons, and `8px` for inputs.
- Avoid deep, dark shadows; elevation is achieved through subtle, light box-shadows or subtle colored tints.
- Do not use large, decorative imagery; product screenshots and UI examples should be contained within cards.
- Refrain from drastically altering default typography letter-spacing for body text; rely on the defined values for each font family.
- Do not introduce new border styles; primarily use 1-4px solid borders with neutral or accent colors.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Canvas | #ffffff | Primary page background, expansive white space |
| 1 | Content Frost | #f7f7f9 | Default background for main content cards and sections |
| 2 | Interactive Tint | #eff0ff | Background for active or emphasized cards and interactive elements |
| 3 | Elevated Shadow | #fff9ed | Background for visually distinct cards that appear slightly lifted, often with custom shadows |

## Elevation

- **Layered Detail Card:** `rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px`
- **Thumbnail Image:** `rgba(0, 0, 0, 0.25) 0px 1px 2px 0px`
- **Interactive Link with Shadow:** `rgba(0, 0, 0, 0.25) 0px 1px 3px 0px`

## Imagery

This site predominantly uses clean, contained product screenshots and carefully cropped UI examples, often within cards with rounded corners. Photography is minimal, focusing on atmospheric shots when present. Icons are primarily outlined or filled charcoal gray, with a consistent stroke weight, serving functional rather than decorative roles. The visual focus is on clarity and the presentation of work and tools, making the imagery explanatory and showcasing rather than atmospheric.

## Layout

The page uses a maximum width of 1400px but primarily feels constrained and organized, reminiscent of a desktop application. The hero section often features a centered headline over a subtle background. Content is arranged within distinct rectangular cards, leading to a grid-like or stacked flow with consistent vertical `24px` section gaps. Many sections feature side-by-side card arrangements, creating visual pairs. The overall density is compact but not crowded, with content clearly delineated by card boundaries and subtle shadows. Navigation is a simple top bar with pill-shaped ghost buttons.

## Similar Brands

- **Notion** — Uses a white canvas, extensive use of cards, and a compact, functional typography to organize varied content.
- **Linear** — Employs an achromatic palette with a singular vivid accent color (violet/blue), subtle card-based layouts, and precise typography.
- **Superhuman** — Focuses on clean UI, high information density, and card-like structures for productivity, with minimal imagery.
- **Read.cv** — Relies on a structured, card-based approach for showcasing work, utilizing subtle grays and distinct typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-card-frost: #f7f7f9;
  --color-whisper-gray: #f2f2f2;
  --color-cloud-tint: #eff0ff;
  --color-warm-paper: #fff9ed;
  --color-text-primary: #333333;
  --color-text-secondary: #707070;
  --color-text-dim: #949494;
  --color-divider-gray: #cccccf;
  --color-outline-blue: #1685c7;
  --color-interactive-violet: #6366f1;
  --color-gradient-sunset: #ff4d79;
  --color-alarm-red: #e92f48;
  --color-blush-shadow: #f8c1c8;
  --font-maison-neue: 'Maison Neue', Inter;
  --font-graphik: 'Graphik', Figtree;
  --font-neue-montreal: 'Neue Montreal', Montserrat;
  --font-chirp: 'Chirp', Roboto;
  --font-sf-pro-display: 'SF Pro Display', ui-sans-serif, system-ui, sans-serif;
  --font-bluu-suuperstar: 'Bluu suuperstar', ui-sans-serif, system-ui, sans-serif;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-body-lg: 16px;
  --leading-body-lg: 1.25;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: 0.009px;
  --text-heading: 31px;
  --leading-heading: 1.25;
  --tracking-heading: -0.403px;
  --text-display: 40px;
  --leading-display: 1.67;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --radius-cards: 32px;
  --radius-badges: 100px;
  --radius-inputs: 8px;
  --radius-buttons: 230px;
  --radius-default: 12px;
  --radius-thumbnails: 18px;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.25) 0px 1px 3px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.25) 0px 1px 1px 0px;
  --shadow-xl-4: rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  --shadow-xl-5: rgba(89, 100, 138, 0.16) 0px 2px 4px 0px;
  --shadow-xl-6: rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.06) 0px 3px 3px 0px;
  --shadow-xl-7: rgba(0, 0, 0, 0.18) 0px 1px 2px 0px;
  --shadow-xl-8: rgba(0, 0, 0, 0.12) 0px 1px 2px 0px;
  --shadow-xl-9: rgba(0, 0, 0, 0.16) 0px 1px 2px 0px;
  --shadow-xl-10: rgba(0, 0, 0, 0.05) 0px 4px 6px 0px, rgba(0, 0, 0, 0.1) 0px 10px 16px -3px;
  --shadow-xl-11: rgba(0, 0, 0, 0.1) 0px 15px 10px -3px, rgba(0, 0, 0, 0.05) 0px 6px 4px -2px;
  --shadow-xl-12: rgba(0, 0, 0, 0.1) 0px 0px 10px -3px;
  --shadow-xl-13: rgba(233, 47, 72, 0.3) 0px 4px 24px 0px;
  --surface-page-canvas: #ffffff;
  --surface-content-frost: #f7f7f9;
  --surface-interactive-tint: #eff0ff;
  --surface-elevated-shadow: #fff9ed;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-card-frost: #f7f7f9;
  --color-whisper-gray: #f2f2f2;
  --color-cloud-tint: #eff0ff;
  --color-warm-paper: #fff9ed;
  --color-text-primary: #333333;
  --color-text-secondary: #707070;
  --color-text-dim: #949494;
  --color-divider-gray: #cccccf;
  --color-outline-blue: #1685c7;
  --color-interactive-violet: #6366f1;
  --color-gradient-sunset: #ff4d79;
  --color-alarm-red: #e92f48;
  --color-blush-shadow: #f8c1c8;
  --font-maison-neue: 'Maison Neue', Inter;
  --font-graphik: 'Graphik', Figtree;
  --font-neue-montreal: 'Neue Montreal', Montserrat;
  --font-chirp: 'Chirp', Roboto;
  --font-sf-pro-display: 'SF Pro Display', ui-sans-serif, system-ui, sans-serif;
  --font-bluu-suuperstar: 'Bluu suuperstar', ui-sans-serif, system-ui, sans-serif;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-body-lg: 16px;
  --leading-body-lg: 1.25;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: 0.009px;
  --text-heading: 31px;
  --leading-heading: 1.25;
  --tracking-heading: -0.403px;
  --text-display: 40px;
  --leading-display: 1.67;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --radius-cards: 32px;
  --radius-badges: 100px;
  --radius-inputs: 8px;
  --radius-buttons: 230px;
  --radius-default: 12px;
  --radius-thumbnails: 18px;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.25) 0px 1px 3px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.25) 0px 1px 1px 0px;
  --shadow-xl-4: rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  --shadow-xl-5: rgba(89, 100, 138, 0.16) 0px 2px 4px 0px;
  --shadow-xl-6: rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.06) 0px 3px 3px 0px;
  --shadow-xl-7: rgba(0, 0, 0, 0.18) 0px 1px 2px 0px;
  --shadow-xl-8: rgba(0, 0, 0, 0.12) 0px 1px 2px 0px;
  --shadow-xl-9: rgba(0, 0, 0, 0.16) 0px 1px 2px 0px;
  --shadow-xl-10: rgba(0, 0, 0, 0.05) 0px 4px 6px 0px, rgba(0, 0, 0, 0.1) 0px 10px 16px -3px;
  --shadow-xl-11: rgba(0, 0, 0, 0.1) 0px 15px 10px -3px, rgba(0, 0, 0, 0.05) 0px 6px 4px -2px;
  --shadow-xl-12: rgba(0, 0, 0, 0.1) 0px 0px 10px -3px;
  --shadow-xl-13: rgba(233, 47, 72, 0.3) 0px 4px 24px 0px;
  --surface-page-canvas: #ffffff;
  --surface-content-frost: #f7f7f9;
  --surface-interactive-tint: #eff0ff;
  --surface-elevated-shadow: #fff9ed;
}
```
