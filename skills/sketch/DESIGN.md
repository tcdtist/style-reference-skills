---
version: alpha
name: "Sketch"
description: "This design system feels like a softly illuminated, modern creative studio, balancing precise Swiss design principles with a playful, digital-native warmth. The extensive use of achromatic values creates a clean, almost stark foundation, elevated by a single vibrant gradient that appears subtly in the background and on key interactive elements. A bespoke serif font, 'Reckless', introduces an unexpected, artful touch for major headlines, contrasting with the utilitarian 'InterVariable' for all other text, grounding the aesthetic between craft and computation. The juxtaposition of highly rounded 'pill' elements and more structured 20px radii hints at a system that values both approachability and considered form."
theme: "light"
industry: "design"
source_url: "https://sketch.com"
refero_style_id: "4caadb3c-3865-4a4d-9e1a-46478ac71078"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923818452-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923818452-thumb.jpg"
extracted_at: "2026-04-11T16:10:43.998Z"
---

# Sketch — Style Reference

> Architectural Digital Canvas. A pristine white canvas with soft, glowing digital light, and precise typography.

**Theme:** light

**Industry:** design

This design system feels like a softly illuminated, modern creative studio, balancing precise Swiss design principles with a playful, digital-native warmth. The extensive use of achromatic values creates a clean, almost stark foundation, elevated by a single vibrant gradient that appears subtly in the background and on key interactive elements. A bespoke serif font, 'Reckless', introduces an unexpected, artful touch for major headlines, contrasting with the utilitarian 'InterVariable' for all other text, grounding the aesthetic between craft and computation. The juxtaposition of highly rounded 'pill' elements and more structured 20px radii hints at a system that values both approachability and considered form.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pitch Black | #000000 | `--color-pitch-black` | Major text, icons, borders, input text — provides high contrast for legibility on light backgrounds. |
| Graphite | #212123 | `--color-graphite` | Primary body text, headers, and key UI elements — a softer alternative to pure black for improved visual comfort. |
| Stone Grey | #4a4a4a | `--color-stone-grey` | Secondary text, subheadings, icon fills — for reduced emphasis. Provides clear hierarchy below Graphite. |
| Ash Grey | #5c5c5c | `--color-ash-grey` | Tertiary text, subtle descriptions, and less prominent UI elements. |
| Silver Mist | #a7a7a7 | `--color-silver-mist` | Placeholder text, disabled states, divider lines — for very low emphasis. |
| Canvas White | #fafafa | `--color-canvas-white` | Page backgrounds, card backgrounds, button backgrounds for ghost buttons, primary surface color. |
| Cloud White | #e6e6e6 | `--color-cloud-white` | Input field backgrounds, subtle borders, and background accents — provides a slight visual separation from Canvas White without introducing color. |
| Deep Space | #151515 | `--color-deep-space` | Filled button backgrounds for primary actions — provides a strong, authoritative call to action against light backgrounds. |
| Sky Blue | #555dff | `--color-sky-blue` | Status badges, interactive element highlights — signals 'new' or 'info' effectively. |
| Teal Glow | #03cbbc | `--color-teal-glow` | Status badges, subtle accent for specific content categories. |
| Ocean Blue | #4389e6 | `--color-ocean-blue` | Status badges, alternative accent for information or categories. |
| Aurora Gradient | #744bd0 | `--color-aurora-gradient` | Subtle background element of the hero section and for card backgrounds — instills a sense of modern digital creativity and wonder. |
| Sunset Gradient | #b47eee | `--color-sunset-gradient` | Accent gradient for specific UI elements or illustrations, adding visual flair. |

## Tokens — Typography

### InterVariable

- **Token:** `--font-intervariable`
- **Substitute:** Inter
- **Weights:** 300, 400, 500, 600
- **Sizes:** 11px, 12px, 14px, 15px, 16px, 17px, 20px, 22px, 24px
- **Line heights:** 1.00, 1.09, 1.15, 1.17, 1.25, 1.33, 1.40, 1.41, 1.43, 1.50, 1.60, 1.65
- **Letter spacing:** normal
- **OpenType features:** "calt", "liga"
- **Role:** Body text, navigation items, buttons, form inputs, and badges — a highly legible, functional sans-serif for all UI elements. 'calt' and 'liga' features ensure typographic precision.

### Reckless

- **Token:** `--font-reckless`
- **Substitute:** Playfair Display
- **Weights:** 500
- **Sizes:** 44px, 76px
- **Line heights:** 1.00, 1.09
- **Letter spacing:** -0.0230em at 76px, -0.0200em at 44px
- **OpenType features:** 'calt', 'liga'
- **Role:** Large display headlines — provides a distinctive and elegant contrast to the utilitarian sans-serif, suggesting a craft or artistic sensibility for key messages.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.43 | — | `--text-caption` |
| body-sm | 14px | 1.41 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.4 | — | `--text-subheading` |
| heading | 44px | 1.09 | -0.88px | `--text-heading` |
| display | 76px | 1 | -1.748px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-49 | 49px | `--spacing-49` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-76 | 76px | `--spacing-76` |
| spacing-78 | 78px | `--spacing-78` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-81 | 81px | `--spacing-81` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-183 | 183px | `--spacing-183` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 20px |
| badges | 9999px |
| inputs | 16px |
| buttons | 24px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.2) 0px 1px 3px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.05) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.5) 0px 1px 4px 0px inset, rgba(0, 0, 0, 0.94) 0px -2px 4px 0px inset, rgba(0, 0, 0, 0.2) 0px 1px 4px 0px | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.1) 0px 2px 4px 0px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 78px |
| elementGap | 8px |

## Components

### Primary CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Announcement Banner Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Status Badge Collection

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Filled Button

**Role:** Main call to action

backgroundColor: #151515, color: #fafafa, borderRadius: 24px, paddingTop: 11px, paddingRight: 24px, paddingBottom: 12px, paddingLeft: 24px.

### Ghost Button with Outline

**Role:** Secondary action or link

backgroundColor: #fafafa, color: #0000ee (browser default link color, likely intended as a brand blue or an un-styled link, for this system treat as #4389e6), border: 1px solid #4389e6, borderRadius: 20px, paddingTop: 52px, paddingRight: 52px, paddingBottom: 52px, paddingLeft: 52px. Note the unusually large padding for a button, indicating a hero-level element.

### Information Card with Shadow

**Role:** Container for secondary content or announcements

backgroundColor: rgba(255, 255, 255, 0.48), borderRadius: 20px, boxShadow: rgba(0, 0, 0, 0.08) 0px 0px 4px 0px, rgba(0, 0, 0, 0.02) 0px 4px 8px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px, paddingTop: 100px, paddingRight: 100px, paddingBottom: 78px, paddingLeft: 78px. Transparent background allows background gradients to show through.

### Default Input Field

**Role:** Standard user input

backgroundColor: #f9f9f9, color: #000000, borderRadius: 16px, paddingTop: 12px, paddingRight: 14px, paddingBottom: 12px, paddingLeft: 14px, border: 1px solid #000000.

### Line Input Field

**Role:** Minimalist input field

backgroundColor: #ffffff, color: #000000, borderBottom: 1px solid rgba(0, 0, 0, 0.1), borderRadius: 3px, minimal padding allowing content to define size.

### Vivid Blue Badge

**Role:** Highlighting 'new' or 'info' status

backgroundColor: #555dff, color: #ffffff, borderRadius: 9999px (pill shape), paddingTop: 4px, paddingRight: 6px, paddingBottom: 3px, paddingLeft: 6px.

### Teal Badge

**Role:** Highlighting secondary status or category

backgroundColor: #03cbbc, color: #ffffff, borderRadius: 9999px (pill shape), paddingTop: 4px, paddingRight: 6px, paddingBottom: 3px, paddingLeft: 6px.

### Ocean Blue Badge

**Role:** Highlighting tertiary status or category

backgroundColor: #4389e6, color: #ffffff, borderRadius: 9999px (pill shape), paddingTop: 4px, paddingRight: 6px, paddingBottom: 3px, paddingLeft: 6px.

## Do's and Don'ts

### Do

- Do use Reckless (weight 500) for all display headlines (44px, 76px) to establish a distinctive brand voice.
- Do apply InterVariable (weight 400) at 16px with Graphite (#212123) for all primary body text.
- Do use Canvas White (#fafafa) as the primary page background color for all main content sections.
- Do ensure interactive elements like buttons and badges utilize either 24px or 9999px border radii, never using intermediate values.
- Do apply the Aurora Gradient (linear-gradient(90deg, rgb(50, 173, 247) 20%, rgb(116, 75, 208) 40%, rgb(233, 127, 66) 50%, rgb(50, 173, 247) 75%)) as a background element to convey a digital, artistic atmosphere.
- Do reserve Deep Space (#151515) filled buttons for the most prominent calls to action only, pairing with Canvas White (#fafafa) text.

### Don't

- Don't use generic system fonts for any text; adhere strictly to InterVariable and Reckless fonts.
- Don't clutter layouts; maintain spaciousness with elementGap of 8px and larger section gaps where appropriate.
- Don't introduce shadows that are not specified; adhere to the subtle, dark shadow palette for icons and cards.
- Don't use highly saturated colors for backgrounds or large content blocks; reserve vivid hues for small accent elements like badges.
- Don't use rounded corners for cards or buttons that deviate from 20px or 24px respectively, or 9999px for pills.
- Don't use any color other than Canvas White (#fafafa), Cloud White (#e6e6e6), or transparent for card backgrounds.

## Elevation

- **Card:** `rgba(0, 0, 0, 0.08) 0px 0px 4px 0px, rgba(0, 0, 0, 0.02) 0px 4px 8px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px`
- **Icon:** `rgba(0, 0, 0, 0.2) 0px 1px 3px 0px`
- **Button:** `rgba(0, 0, 0, 0.05) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.5) 0px 1px 4px 0px inset, rgba(0, 0, 0, 0.94) 0px -2px 4px 0px inset, rgba(0, 0, 0, 0.2) 0px 1px 4px 0px`

## Imagery

Imagery is minimal and highly abstracted. The site primarily uses UI screenshots of the Sketch application, presented as clean, functional demonstrations. When present, graphics are abstract, soft gradients like Aurora Gradient or Sunset Gradient, serving as large background elements to add a sense of digital atmosphere rather than conveying specific information. There's an absence of lifestyle photography or complex illustrations, keeping the focus squarely on the product UI and its functionality. Icons are outline-based, monochromatic (Graphite #212123 or Pitch Black #000000), contributing to the clean, technical aesthetic.

## Layout

The page uses a full-bleed background model, with content largely contained within an implicit maximum width, centrally aligned. The hero section features a large, full-bleed gradient background ('Aurora Gradient') with a centered, prominent headline in 'Reckless' and a multi-line value proposition using 'InterVariable'. Subsequent sections follow a consistent alternating pattern of text-left/image-right or vice-versa, maintaining generous vertical spacing (likely around 64px sectionGap). Content blocks are generally stacked, and information cards tend to be centered. The navigation is a classic top bar, adhering to the main content width, featuring text links and distinct 'Sign In' (text) and 'Get Started' (pill button) actions. The overall density is spacious, allowing typography and UI elements to breathe.

## Similar Brands

- **Figma** — Shares a clean, modern SaaS aesthetic with a focus on achromatic backgrounds, subtle elevations, and the use of a sans-serif primary typeface for UI elements.
- **Linear** — Exhibits a precise, almost clinical feel with meticulous spacing, high contrast text on light backgrounds, and limited accent colors for functional cues rather than decorative purposes.
- **Apple (Software UI)** — Reflects the macOS design language with its emphasis on subtle translucency (rgba backgrounds), clean typography, rounded corners on interactive elements, and a focus on content presentation over heavy visual embellishment.
- **Notion** — Utilizes a minimalist, workspace-oriented design with a preference for high contrast text and a clean, spacious layout, allowing content to take center stage, similar to Sketch's UI focus.
- **Webflow** — Maintains a brand identity through distinctive typography (mixing serif and sans-serif for impact), restrained color palettes, and a structured approach to component design that feels premium and thoughtful.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pitch-black: #000000;
  --color-graphite: #212123;
  --color-stone-grey: #4a4a4a;
  --color-ash-grey: #5c5c5c;
  --color-silver-mist: #a7a7a7;
  --color-canvas-white: #fafafa;
  --color-cloud-white: #e6e6e6;
  --color-deep-space: #151515;
  --color-sky-blue: #555dff;
  --color-teal-glow: #03cbbc;
  --color-ocean-blue: #4389e6;
  --color-aurora-gradient: #744bd0;
  --color-sunset-gradient: #b47eee;
  --font-intervariable: 'InterVariable', Inter;
  --font-reckless: 'Reckless', Playfair Display;
  --text-caption: 11px;
  --leading-caption: 1.43;
  --text-body-sm: 14px;
  --leading-body-sm: 1.41;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading: 44px;
  --leading-heading: 1.09;
  --tracking-heading: -0.88px;
  --text-display: 76px;
  --leading-display: 1;
  --tracking-display: -1.748px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-49: 49px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-76: 76px;
  --spacing-78: 78px;
  --spacing-80: 80px;
  --spacing-81: 81px;
  --spacing-88: 88px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-183: 183px;
  --radius-cards: 20px;
  --radius-badges: 9999px;
  --radius-inputs: 16px;
  --radius-buttons: 24px;
  --shadow-xl: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.05) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.5) 0px 1px 4px 0px inset, rgba(0, 0, 0, 0.94) 0px -2px 4px 0px inset, rgba(0, 0, 0, 0.2) 0px 1px 4px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-pitch-black: #000000;
  --color-graphite: #212123;
  --color-stone-grey: #4a4a4a;
  --color-ash-grey: #5c5c5c;
  --color-silver-mist: #a7a7a7;
  --color-canvas-white: #fafafa;
  --color-cloud-white: #e6e6e6;
  --color-deep-space: #151515;
  --color-sky-blue: #555dff;
  --color-teal-glow: #03cbbc;
  --color-ocean-blue: #4389e6;
  --color-aurora-gradient: #744bd0;
  --color-sunset-gradient: #b47eee;
  --font-intervariable: 'InterVariable', Inter;
  --font-reckless: 'Reckless', Playfair Display;
  --text-caption: 11px;
  --leading-caption: 1.43;
  --text-body-sm: 14px;
  --leading-body-sm: 1.41;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading: 44px;
  --leading-heading: 1.09;
  --tracking-heading: -0.88px;
  --text-display: 76px;
  --leading-display: 1;
  --tracking-display: -1.748px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-49: 49px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-76: 76px;
  --spacing-78: 78px;
  --spacing-80: 80px;
  --spacing-81: 81px;
  --spacing-88: 88px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-183: 183px;
  --radius-cards: 20px;
  --radius-badges: 9999px;
  --radius-inputs: 16px;
  --radius-buttons: 24px;
  --shadow-xl: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.05) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.5) 0px 1px 4px 0px inset, rgba(0, 0, 0, 0.94) 0px -2px 4px 0px inset, rgba(0, 0, 0, 0.2) 0px 1px 4px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
}
```
