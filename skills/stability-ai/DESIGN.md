---
version: alpha
name: "Stability AI"
description: "Stability AI's design evokes a sophisticated, high-tech command center with its deep, dark palette and vibrant purple accents. The dominant use of Achromatic Raven for backgrounds provides a sleek, near-black foundation, while crisp Archivo typography in white and light gray ensures clarity. Generous spacing and the playful use of fully rounded buttons contrast with otherwise sharp edges, creating a balance between serious technicality and modern approachability."
theme: "dark"
industry: "ai"
source_url: "https://stability.ai"
refero_style_id: "f532c703-1179-465d-9933-7736df44d0ae"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923752199-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923752199-thumb.jpg"
extracted_at: "2026-04-11T16:09:31.356Z"
---

# Stability AI — Style Reference

> Midnight command center; a sophisticated dark UI with precise information delivery.

**Theme:** dark

**Industry:** ai

Stability AI's design evokes a sophisticated, high-tech command center with its deep, dark palette and vibrant purple accents. The dominant use of Achromatic Raven for backgrounds provides a sleek, near-black foundation, while crisp Archivo typography in white and light gray ensures clarity. Generous spacing and the playful use of fully rounded buttons contrast with otherwise sharp edges, creating a balance between serious technicality and modern approachability.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Achromatic Raven | #1e1e1 | `--color-achromatic-raven` | Primary background for pages and most elevated surfaces, providing a deep, consistent visual anchor. |
| Storm Cloud | #383838 | `--color-storm-cloud` | Secondary background for cards, list items, and subtle differentiations between sections, adding depth to the dark theme. |
| Off-White Text | #e5e7e6 | `--color-off-white-text` | Primary text color for body copy, ensuring high contrast against dark backgrounds. |
| Polar White | #ffffff | `--color-polar-white` | Headline text, interactive element states, and high-emphasis information, drawing immediate attention. |
| Deep Plum Accent | #a381ff | `--color-deep-plum-accent` | Primary brand accent for CTA buttons, active navigation items, and interactive links, providing a burst of energetic color against the dark theme. |
| Luminous Violet | #776cff | `--color-luminous-violet` | Variant accent for borders and outlines, maintaining brand consistency while offering subtle visual hierarchy. |
| Slate Gray | #bbbbbb | `--color-slate-gray` | Secondary text for less prominent information, such as captions or helper text, offering a softer presence than white. |
| Lavender Mist | #b6a9c6 | `--color-lavender-mist` | Subtle accent for selected type elements and borders, hinting at the brand's chromatic palette within a neutral context. |

## Tokens — Typography

### Archivo

- **Token:** `--font-archivo`
- **Substitute:** Open Sans
- **Weights:** 400, 600, 700
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px, 20px, 25px, 30px, 32px, 40px, 42px, 50px, 72px
- **Line heights:** 0.98-2.22
- **Letter spacing:** normal
- **Role:** Primary font for all textual content, from headlines to body text and UI elements. Its clean, sans-serif structure underpins the system's technical yet approachable feel.

### Figtree

- **Token:** `--font-figtree`
- **Substitute:** Montserrat
- **Weights:** 600
- **Sizes:** 14px, 16px
- **Line heights:** 1.20
- **Role:** Used specifically for button text, Figtree's slightly more geometric and contemporary feel adds a subtle distinction to interactive elements.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.5 | — | `--text-subheading` |
| heading | 40px | 1.05 | — | `--text-heading` |
| heading-lg | 50px | 1 | — | `--text-heading-lg` |
| display | 72px | 0.98 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-47 | 47px | `--spacing-47` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-95 | 95px | `--spacing-95` |
| spacing-130 | 130px | `--spacing-130` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 15px |
| input | 99px |
| buttons | 300px |
| default | 11px |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 0px |
| elementGap | 10-18px |

## Components

### Announcement Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Mailing List Signup Form

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Call to Action Button

**Role:** Primary interactive element for key actions

Background: Deep Plum Accent (#a381ff), Text: Polar White (#ffffff), Border Radius: 300px (full pill shape). Padding: 16px top/bottom, 20.8px left/right. Font: Figtree, weight 600, size 16px.

### Navigation Link Button

**Role:** Navigation items in header and footer

Background: transparent, Text: Polar White (#ffffff), Border: 1px Polar White (#ffffff) when active or hovered. Padding: 20px top/bottom, 0px left/right. Font: Archivo, weight 400.

### Email Input Field

**Role:** User input for email addresses

Background: Achromatic Raven (#1e1e1e), Text: Polar White (#ffffff), Border: 1px Polar White (#ffffff), Border Radius: 99px (pill shape). Padding: 12px top/bottom, 10px left/right. Placeholder text is Polar White (#ffffff).

### Select Input Field

**Role:** Dropdown select fields

Background: Achromatic Raven (#1e1e1e) in focus state (initially transparent), Text: Polar White (#ffffff), Border: 1px Polar White (#ffffff), Border Radius: 99px (pill shape). Padding: 12px top/bottom, 10px left/right.

### Hero Section Headline

**Role:** Large, impactful headlines

Font: Archivo, weight 400 (implied, as 72px is present), size 72px, line-height 0.98-1.07. Color: Polar White (#ffffff).

### Informational Card Base

**Role:** Container for content; appears as a content division rather than a distinct card

Background: transparent, Border Radius: 0px. No padding or box-shadow by default. Content defines its internal structure.

### Rounded Corner Card Variant

**Role:** Container for specific content that requires subtle rounding for visual grouping

Background: transparent, Border Radius: 15px (only on specific corners, e.g., 15px 0px 0px 15px or 0px 15px 15px 0px). No padding or box-shadow.

## Do's and Don'ts

### Do

- Use Achromatic Raven (#1e1e1e) as the primary background color for all main content areas.
- Apply Deep Plum Accent (#a381ff) for all primary call-to-action buttons and interactive links.
- Adopt a 300px border radius for all buttons and fully-rounded elements to maintain the signature pill shape.
- Utilize Archivo font consistently across all text elements, leveraging its various weights for hierarchy.
- Ensure high contrast by using Polar White (#ffffff) for headlines and Off-White Text (#e5e7e6) for body copy against dark backgrounds.
- Prioritize transparency for background elements (cards, badges) to allow base backgrounds to show through, creating depth.

### Don't

- Avoid using bright or pastel colors outside of the defined accent palette to maintain the sophisticated dark theme.
- Do not introduce sharp corners on interactive buttons; they must maintain the full pill (300px) or near-pill (99px) radius.
- Refrain from using drop shadows on cards or containers; depth is achieved primarily through background color variations and strategic spacing.
- Do not deviate from the Archivo and Figtree font families; they are central to the brand's typographic identity.
- Avoid excessive use of bold text – rely on size, contrast, and color to establish visual hierarchy, rather than heavy weights.

## Imagery

The visual language relies on high-resolution, artistic photography of diverse individuals, often featuring tech accessories like headphones. These images are typically full-bleed or large background elements, creating an immersive, aspirational atmosphere, and are heavily integrated into the UI rather than being isolated. Product screenshots are woven into the hero and other sections, showcasing the UI of the software in context. There's an absence of traditional cartoon-style illustrations, favoring realism and a sophisticated, professional aesthetic. Small, minimalist icons appear as outline-style for navigation and social media. The overall density is image-heavy in key sections like the hero, creating an immediate visual impact, while other sections are more text-dominant.

## Layout

The layout primarily uses a full-bleed background for sections, creating a cohesive, unbroken visual experience, within which content is usually centered, but not strictly constrained by a max-width, allowing for fluid arrangements. The hero section is characterized by a full-viewport image with centered, large headlines and a primary CTA. Content sections follow a rhythm of alternating text and visual elements, sometimes split into two columns (text-left/image-right or vice-versa). The page emphasizes spaciousness with generous vertical gaps between sections, avoiding dense information blocks. Navigation is handled by a sticky top bar, ensuring consistent access.

## Similar Brands

- **Anthropic** — Dark UI with vibrant, single-color accent and an emphasis on clean typography for a research-oriented AI company.
- **Replit** — Combines a dark coding environment aesthetic with playful, rounded UI elements and modern typography, similar to the tech-forward yet approachable feel.
- **Vercel** — Known for a sleek dark mode, sophisticated component design, and strong typographic hierarchy, albeit with fewer 'pill' shapes.
- **Linear** — Uses a dark, command-line interface aesthetic leveraging a single accent color for interactive states and detailed information organization.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-achromatic-raven: #1e1e1;
  --color-storm-cloud: #383838;
  --color-off-white-text: #e5e7e6;
  --color-polar-white: #ffffff;
  --color-deep-plum-accent: #a381ff;
  --color-luminous-violet: #776cff;
  --color-slate-gray: #bbbbbb;
  --color-lavender-mist: #b6a9c6;
  --font-archivo: 'Archivo', Open Sans;
  --font-figtree: 'Figtree', Montserrat;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading: 40px;
  --leading-heading: 1.05;
  --text-heading-lg: 50px;
  --leading-heading-lg: 1;
  --text-display: 72px;
  --leading-display: 0.98;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-43: 43px;
  --spacing-47: 47px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-95: 95px;
  --spacing-130: 130px;
  --radius-cards: 15px;
  --radius-input: 99px;
  --radius-buttons: 300px;
  --radius-default: 11px;
}
```

### Tailwind v4

```css
@theme {
  --color-achromatic-raven: #1e1e1;
  --color-storm-cloud: #383838;
  --color-off-white-text: #e5e7e6;
  --color-polar-white: #ffffff;
  --color-deep-plum-accent: #a381ff;
  --color-luminous-violet: #776cff;
  --color-slate-gray: #bbbbbb;
  --color-lavender-mist: #b6a9c6;
  --font-archivo: 'Archivo', Open Sans;
  --font-figtree: 'Figtree', Montserrat;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading: 40px;
  --leading-heading: 1.05;
  --text-heading-lg: 50px;
  --leading-heading-lg: 1;
  --text-display: 72px;
  --leading-display: 0.98;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-43: 43px;
  --spacing-47: 47px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-95: 95px;
  --spacing-130: 130px;
  --radius-cards: 15px;
  --radius-input: 99px;
  --radius-buttons: 300px;
  --radius-default: 11px;
}
```
