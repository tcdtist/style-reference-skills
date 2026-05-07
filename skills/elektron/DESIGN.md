---
version: alpha
name: "Elektron"
description: "This design system evokes a high-fidelity control panel, where functional elements are precisely rendered against a deep, uniform darkness. The visual atmosphere is serious and technical, achieved through minimal color and sharp contrasts between almost-black backgrounds and near-white text. This stark aesthetic prioritizes clarity within a complex interface, using a restricted palette to focus attention on interactive elements and critical information, allowing for subtle visual depth through varied text weights and button styles."
theme: "dark"
industry: "other"
source_url: "https://elektron.se"
refero_style_id: "6b5a0bf4-3d2a-4c3b-aa2e-652f1acb82c0"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933160360-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933160360-thumb.jpg"
extracted_at: "2026-04-11T18:46:23.589Z"
---

# Elektron — Style Reference

> Digital console in midnight. A world of precise, glowing information contained within a dark, structured shell.

**Theme:** dark

**Industry:** other

This design system evokes a high-fidelity control panel, where functional elements are precisely rendered against a deep, uniform darkness. The visual atmosphere is serious and technical, achieved through minimal color and sharp contrasts between almost-black backgrounds and near-white text. This stark aesthetic prioritizes clarity within a complex interface, using a restricted palette to focus attention on interactive elements and critical information, allowing for subtle visual depth through varied text weights and button styles.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Absolute Zero | #000000 | `--color-absolute-zero` | Page backgrounds, critical borders, deepest shadows. |
| Control Panel Black | #151515 | `--color-control-panel-black` | Primary surface background for cards and interactive components, providing subtle differentiation from page background. Implies a slightly raised or interactive surface. |
| Deep Graphite | #222222 | `--color-deep-graphite` | Alternative background for sections or distinct content blocks, slightly lighter than 'Control Panel Black'. |
| Input Surface Gray | #333337 | `--color-input-surface-gray` | Background for secondary input fields, indicating an active or editable state within a confined area. |
| Icon Gray | #6a6a6 | `--color-icon-gray` | Default color for inactive or secondary icons, receding into the background. |
| Input Text Gray | #b4b4b8 | `--color-input-text-gray` | Placeholder text and secondary informational text within dark input fields. |
| Off White Text | #eeeef2 | `--color-off-white-text` | Primary text color for body copy, links, icons, and interactive elements against dark backgrounds. Provides high contrast without being pure white, reducing eye strain. |
| White Glow | #ffffff | `--color-white-glow` | High-contrast text for critical headings, active links, and prominent calls to action, drawing immediate attention. |
| Amber Indicator | #ffcc00 | `--color-amber-indicator` | Used for specific icon states or to highlight minor interactive elements — a subtle warning or attention signal. |

## Tokens — Typography

### Neue Haas Grotesk Text Pro

- **Token:** `--font-neue-haas-grotesk-text-pro`
- **Substitute:** Helvetica Neue, Arial
- **Weights:** 400
- **Sizes:** 11px, 14px, 16px, 18px, 28px, 35px
- **Line heights:** 1.20, 1.50
- **Letter spacing:** -0.013em, -0.017em, -0.026em, -0.033em, -0.040em, -0.042em
- **Role:** General text, body copy, subheadings, and some hero elements. Its slightly condensed feel at smaller sizes allows for information density within the dark interface.

### Neue Haas Grotesk Display Pro

- **Token:** `--font-neue-haas-grotesk-display-pro`
- **Substitute:** Helvetica Neue, Arial
- **Weights:** 400, 450, 500
- **Sizes:** 24px, 31px, 64px
- **Line heights:** 0.95, 1.33, 1.50
- **Letter spacing:** -0.010em, -0.040em
- **Role:** Headlines and prominent display text. The tighter letter spacing at larger sizes (e.g., -0.010em at 24px) creates an imposing yet elegant presence, reinforcing the technical and precise aesthetic.

### NHaasGroteskDSPro

- **Token:** `--font-nhaasgroteskdspro`
- **Substitute:** Helvetica Neue, Arial
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** normal
- **Role:** Specific for input fields and button text, prioritizing readability and functional clarity at interactive sizes.

### digi one v2

- **Token:** `--font-digi-one-v2`
- **Substitute:** Dot Digital-7
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.50
- **Letter spacing:** -0.033em
- **Role:** Specialized digital display font for unique branding or data representation, mimicking a retro digital screen, particularly for system readouts or version numbers. Its negative letter spacing is a key characteristic.

### Analog One V2.

- **Token:** `--font-analog-one-v2`
- **Substitute:** Share Tech Mono
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.25
- **Letter spacing:** normal
- **Role:** Used for specific input fields, suggesting a monospaced, technical data entry environment. This is a subtle nod to older hardware interfaces.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.5 | -0.013px | `--text-caption` |
| body-sm | 14px | 1.5 | -0.017px | `--text-body-sm` |
| body | 16px | 1.5 | -0.026px | `--text-body` |
| subheading | 18px | 1.2 | -0.033px | `--text-subheading` |
| heading-sm | 24px | 1.5 | -0.01px | `--text-heading-sm` |
| heading | 28px | 1.2 | -0.04px | `--text-heading` |
| heading-lg | 31px | 1.33 | -0.04px | `--text-heading-lg` |
| display | 64px | 0.95 | -0.04px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-100 | 100px | `--spacing-100` |

### Border Radius

| Element | Value |
| --- | --- |
| inputs | 7px |
| buttons | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 100-140px |
| elementGap | 4px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Product Accessory Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Search Input Field

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Call to Action Button

**Role:** Primary user interaction.

Background: Off White Text (#eeeef2), Text: Control Panel Black (#151515). Border Radius: 0px. Padding-top/bottom: 0px. Padding-left/right: 10px. Uses NHaasGroteskDSPro, weight 400, size 16px.

### Default Input Field

**Role:** User data entry.

Background: Control Panel Black (#151515), Text: Off White Text (#eeeef2). Border Radius: 7px. Padding: 10.5px 17.5px. Uses Analog One V2., weight 400, size 14px.

### Search Input Field

**Role:** Site search functionality.

Background: Input Surface Gray (#333337), Text: Input Text Gray (#b4b4b8). Border Radius: 0px. Padding-left: 16px. Uses NHaasGroteskDSPro, weight 400, size 16px.

### Navigation Badge

**Role:** Informational marker for navigation or categories.

Background: transparent (rgba(0, 0, 0, 0)), Text: Off White Text (#eeeef2). Border Radius: 0px. Padding-right: 1.4px. Uses Neue Haas Grotesk Text Pro, weight 400, size 11px.

## Do's and Don'ts

### Do

- Use Absolute Zero (#000000) for page backgrounds to establish the deep, dark canvas.
- Apply Control Panel Black (#151515) for main interactive surfaces like cards and elevated sections to create subtle depth.
- Prioritize Off White Text (#eeeef2) for body text and navigation elements against dark backgrounds for optimal readability.
- Employ White Glow (#ffffff) sparingly for critical headlines and active states that demand immediate attention.
- Maintain 0px border-radius for most elements like buttons, reinforcing the sharp, technical aesthetic.
- Utilize Neue Haas Grotesk Text Pro for body text at various sizes (11px-35px) with specific negative letter spacing to achieve a modern, dense textual presentation.
- Use specific digital fonts (digi one v2, Analog One V2.) for any element requiring a retro-tech or numerical display, preserving the unique brand character.

### Don't

- Avoid using bright or overly saturated colors, except for the defined 'Amber Indicator' accent, to maintain the control panel aesthetic.
- Do not introduce rounded corners beyond the 7px radius for specific input fields; maintain sharp edges elsewhere.
- Steer clear of gradients or soft shadows that would soften the hard-edged, precise visual identity.
- Do not use generic system fonts for headlines or special numbers; Neue Haas Grotesk Display Pro and the unique digital fonts are integral to brand recognition.
- Avoid large, airy padding or excessive white space between elements where information density is intended, as the system favors a compact layout.
- Do not break the dark theme with light sections unless specifically defined by brand guidelines, as the overall mood is consistently dark.

## Imagery

The visual language focuses on close-up product photography with a strong engineering aesthetic, occasionally featuring a digital display element (e.g. blue waveforms on black screens). Images are often dark, moody, and serve primarily to showcase product details or technical interfaces rather than lifestyle. They are contained, typically not full-bleed, and integrated with the dark theme through color and lighting, reinforcing the high-tech, precision instrument feel. Icons are monochrome, generally filled, with a consistent stroke weight, and have a function-first role for navigation and utility.

## Layout

The site uses a full-bleed dark background for the entire page, creating a unified canvas. Content is generally displayed within sections that stack vertically with consistent large gaps (implied 100-140px). Hero sections often feature a full-width image with subtle overlays or prominent typography. Content within sections tends to be left-aligned, often featuring a headline followed by text or interactive elements. There are instances of implied 2-column or 3-column grids for presenting accessories, but the overall presentation is sequential and block-based rather than complex grid layouts. Navigation is a persistent top bar with minimal links and icons, sitting above the full-bleed content.

## Similar Brands

- **Native Instruments** — Uses a dark, technical UI with restrained color accents and a focus on product visuals for music production hardware and software.
- **Ableton** — Shares a dedication to a dark, functional interface and precise typography that supports complex music creation tools.
- **Teenage Engineering** — Exhibits a similar aesthetic of industrial design for music hardware, often with minimalist dark interfaces and sharp visual forms.
- **Bitwig** — Features a dark, modular UI for creative software, emphasizing functionality and a clean, technical presentation with a similar lack of decorative elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-absolute-zero: #000000;
  --color-control-panel-black: #151515;
  --color-deep-graphite: #222222;
  --color-input-surface-gray: #333337;
  --color-icon-gray: #6a6a6;
  --color-input-text-gray: #b4b4b8;
  --color-off-white-text: #eeeef2;
  --color-white-glow: #ffffff;
  --color-amber-indicator: #ffcc00;
  --font-neue-haas-grotesk-text-pro: 'Neue Haas Grotesk Text Pro', Helvetica Neue, Arial;
  --font-neue-haas-grotesk-display-pro: 'Neue Haas Grotesk Display Pro', Helvetica Neue, Arial;
  --font-nhaasgroteskdspro: 'NHaasGroteskDSPro', Helvetica Neue, Arial;
  --font-digi-one-v2: 'digi one v2', Dot Digital-7;
  --font-analog-one-v2: 'Analog One V2.', Share Tech Mono;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --tracking-caption: -0.013px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.017px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.026px;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.033px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.5;
  --tracking-heading-sm: -0.01px;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --tracking-heading: -0.04px;
  --text-heading-lg: 31px;
  --leading-heading-lg: 1.33;
  --tracking-heading-lg: -0.04px;
  --text-display: 64px;
  --leading-display: 0.95;
  --tracking-display: -0.04px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-21: 21px;
  --spacing-28: 28px;
  --spacing-42: 42px;
  --spacing-60: 60px;
  --spacing-100: 100px;
  --radius-inputs: 7px;
  --radius-buttons: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-absolute-zero: #000000;
  --color-control-panel-black: #151515;
  --color-deep-graphite: #222222;
  --color-input-surface-gray: #333337;
  --color-icon-gray: #6a6a6;
  --color-input-text-gray: #b4b4b8;
  --color-off-white-text: #eeeef2;
  --color-white-glow: #ffffff;
  --color-amber-indicator: #ffcc00;
  --font-neue-haas-grotesk-text-pro: 'Neue Haas Grotesk Text Pro', Helvetica Neue, Arial;
  --font-neue-haas-grotesk-display-pro: 'Neue Haas Grotesk Display Pro', Helvetica Neue, Arial;
  --font-nhaasgroteskdspro: 'NHaasGroteskDSPro', Helvetica Neue, Arial;
  --font-digi-one-v2: 'digi one v2', Dot Digital-7;
  --font-analog-one-v2: 'Analog One V2.', Share Tech Mono;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --tracking-caption: -0.013px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.017px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.026px;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.033px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.5;
  --tracking-heading-sm: -0.01px;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --tracking-heading: -0.04px;
  --text-heading-lg: 31px;
  --leading-heading-lg: 1.33;
  --tracking-heading-lg: -0.04px;
  --text-display: 64px;
  --leading-display: 0.95;
  --tracking-display: -0.04px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-21: 21px;
  --spacing-28: 28px;
  --spacing-42: 42px;
  --spacing-60: 60px;
  --spacing-100: 100px;
  --radius-inputs: 7px;
  --radius-buttons: 0px;
}
```
