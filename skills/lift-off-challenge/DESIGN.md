---
version: alpha
name: "Lift-off challenge"
description: "This design evokes a retro-futuristic mission control panel, blending a stark, industrial realism with an urgent, high-stakes atmosphere. The dominance of a light grey canvas punctuated by sharp, dark-grey interfaces creates a sense of mechanical precision. Visual urgency is delivered through vibrant, almost alarm-like red accents, sparingly used on critical elements like \"Lift-off\" buttons and warning indicators, contrasting with the otherwise monochromatic scene."
theme: "light"
industry: "other"
source_url: "https://liftoffchallenge.hypr-space.com"
refero_style_id: "cf1f4666-bb5b-4fc4-a3e6-660218996cbb"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777411219516-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777411219516-thumb.jpg"
extracted_at: "2026-04-28T21:20:46.028Z"
---

# Lift-off challenge — Style Reference

> Aircraft control panel — high-contrast modular interfaces on a rigid, light-grey chassis with urgent red signals.

**Theme:** light

**Industry:** other

This design evokes a retro-futuristic mission control panel, blending a stark, industrial realism with an urgent, high-stakes atmosphere. The dominance of a light grey canvas punctuated by sharp, dark-grey interfaces creates a sense of mechanical precision. Visual urgency is delivered through vibrant, almost alarm-like red accents, sparingly used on critical elements like "Lift-off" buttons and warning indicators, contrasting with the otherwise monochromatic scene.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Control Panel Grey | #e5e7eb | `--color-control-panel-grey` | Page canvas, primary panel background, borders, input backgrounds |
| Display Black | #11161c | `--color-display-black` | Interface display backgrounds, interactive card backgrounds, dense information blocks |
| Obsidian Grey | #000000 | `--color-obsidian-grey` | Primary text on light backgrounds, shadows, critical text on dark backgrounds |
| Digital White | #ffffff | `--color-digital-white` | Text on dark backgrounds, active elements, subtle card shadows |
| Graphite | #bbbbbb | `--color-graphite` | Secondary borders, subtle background tints |
| Steel Grey | #a3a3a3 | `--color-steel-grey` | Muted text, icon fills, inactive states |
| Slate Blue | #575c75 | `--color-slate-blue` | Secondary text, subtle details, some icon fills |
| Urgency Red | #f43325 | `--color-urgency-red` | Primary call-to-action buttons, warning indicators, critical states |
| Active Blue | #0078a8 | `--color-active-blue` | Interactive links, specific highlights |
| Gradient Night | #c9cbe4 | `--color-gradient-night` | Decorative background gradient used in some sections, suggesting cosmic or distant elements |
| Gradient Combustion | #f43325 | `--color-gradient-combustion` | Strong, urgent gradients for prominent visual elements or critical interaction areas |

## Tokens — Typography

### proxima-nova

- **Token:** `--font-proxima-nova`
- **Substitute:** system-ui
- **Weights:** 400, 600, 700, 800
- **Sizes:** 11px, 12px, 14px, 15px, 16px, 18px, 36px, 40px, 48px, 56px
- **Line heights:** 1.00, 1.10, 1.16, 1.25, 1.50
- **Letter spacing:** -0.0710em, 0.0110em, 0.0130em, 0.0140em, 0.0200em, 0.0250em, 0.0280em, 0.0330em
- **Role:** Primary sans-serif for most UI text, headings, and buttons. Its varied weights support clear hierarchy without excessive stylistic flair.

### SF Mono

- **Token:** `--font-sf-mono`
- **Substitute:** monospace
- **Weights:** 400, 500
- **Sizes:** 10px, 11px, 12px
- **Line heights:** 0.80, 1.10, 1.20, 1.50
- **Letter spacing:** 0.0420em, 0.0450em, 0.0500em
- **Role:** Monospaced font used for data readouts, code snippets, and technical labels, reinforcing the control panel aesthetic.

### Helvetica Neue

- **Token:** `--font-helvetica-neue`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 11px
- **Line heights:** 1.50
- **Letter spacing:** normal
- **Role:** Secondary sans-serif for minor body text sections, providing a clean, recognizable base for small text.

### Doto

- **Token:** `--font-doto`
- **Substitute:** Press Start 2P
- **Weights:** 900
- **Sizes:** 106px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Custom display font for large numerical values and impactful headlines, providing a distinctive pixelated, digital read-out feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 0.8 | 0.5px | `--text-caption` |
| body | 14px | 1.5 | 0.013px | `--text-body` |
| subheading | 18px | 1.25 | 0.014px | `--text-subheading` |
| heading | 36px | 1.16 | -0.071px | `--text-heading` |
| heading-lg | 48px | 1.1 | -0.071px | `--text-heading-lg` |
| display | 106px | 1 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-77 | 77px | `--spacing-77` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-115 | 115px | `--spacing-115` |
| spacing-180 | 180px | `--spacing-180` |
| spacing-221 | 221px | `--spacing-221` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 127.397px |
| pills | 9999px |
| buttons | 270.89px |
| default | 4px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.8) 0px 0px 2px 0px | `--shadow-xl` |
| xl-2 | rgba(255, 255, 255, 0.5) 0px 0px 2px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 8px |
| elementGap | 8px |

## Components

### Primary Action Button

**Role:** Main call-to-action

Background #f43325 with white #ffffff text, minimal padding like 2px vertical and 8px horizontal, with a 270.89px border-radius creating a rounded pill shape. No outline.

### Ghost Button

**Role:** Secondary or tertiary actions

Transparent background with #000000 text and a 0px border-radius. Minimal padding like 0px.

### Dark Interface Card

**Role:** Content presentation within a dark display area

Background #11161c, white #ffffff text. Features a rounded 127.397px border-radius for an industrial-chic look. Padding is 8px vertical and 6px horizontal.

### Pill Card

**Role:** Small, contained information units or selectors

Background #11161c with a 9999px border-radius. White #ffffff boxShadow of 0px 0px 4.269px 0px. No padding.

### Input Field

**Role:** Data entry

Transparent background with #ffffff text and a #ffffff 1px border. 0px border-radius. Padding is 8px on all sides. Placeholder text is #575c75.

### Lift-off Button

**Role:** Critical, visually dominant interaction

Full-bleed circular button with a large #f43325 background and white #ffffff text. This is a very prominent component designed to attract immediate attention. Has a gradient based on `Gradient Combustion`.

### Status Indicator

**Role:** Visual feedback for states (waiting, warning)

Small text using #f43325 for warnings and gray tones for waiting. Accompanied by small triangle or dot icons. Uses SF Mono or proxima-nova at 11-12px.

### Doto Number Display

**Role:** Large, eye-catching numerical readouts

Uses the custom 'Doto' font at 106px weight 900 for a pixelated, digital display effect on a #11161c background, with #ffffff text. This is typically used for stats or counts.

## Do's and Don'ts

### Do

- Use Control Panel Grey #e5e7eb as the primary canvas for all page backgrounds and top-level panels.
- Apply Urgency Red #f43325 exclusively for critical action buttons and warning states, ensuring strong visual signaling.
- Implement Display Black #11161c for all interactive data displays and information cards to maintain the control panel aesthetic.
- For large numerical data, use the Doto font at 106px font size with Digital White #ffffff color against a Display Black #11161c background.
- Utilize border-radius 270.89px for primary buttons and 9999px for small, contained elements like pill buttons or tags, while using 127.397px for cards.
- Maintain high contrast text: Obsidian Grey #000000 on Control Panel Grey #e5e7eb, and Digital White #ffffff on Display Black #11161c.
- Use SF Mono for any small, technical or data-driven text elements to reinforce the retro-futuristic theme.

### Don't

- Do not use gradients or colored backgrounds on general text or informational sections, as they are reserved for prominent elements like the Lift-off button.
- Avoid applying Urgency Red #f43325 for decorative purposes or non-critical text; its impact must be preserved for alerts and main calls to action.
- Do not use generic square radius for buttons; leverage the defined 270.89px or 9999px for consistent button styling.
- Refrain from using heavily saturated colors beyond Urgency Red #f43325 or Active Blue #0078a8; the color palette is intentionally restrained.
- Do not introduce drop shadows on every element; elevation is minimal, reserving white shadows for subtle card lifts and dark shadow for deeper interaction states.
- Avoid excessive spacing between elements; maintain a compact information density typical of control interfaces, using 8px as the primary element gap.
- Do not deviate from the specified font families; their distinct characteristics are crucial for maintaining the thematic integrity.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas | #e5e7eb | The primary background, acting as the base 'metal' or chassis of the overall control panel. |
| 2 | Display | #11161c | Used for 'screen' elements, data readouts, and information cards, mimicking embedded digital panels. |
| 3 | Elevated Control | #ffffff | Used for specific interactive components like button backgrounds or subtle highlights, providing digital light. |

## Elevation

- **Card (subtle elevation):** `rgba(255, 255, 255, 0.95) 0px 0px 2.719px 0px`
- **Button (interactive press):** `rgba(255, 255, 255, 0.5) 0px 0px 2px 0px`
- **Other interactive (pressed state):** `rgba(0, 0, 0, 0.8) 0px 0px 2px 0px`

## Imagery

The visual language is characterized by a complete absence of photography or illustration in the traditional sense. Instead, the design relies heavily on technical UI elements: pixelated fonts for impactful numbers, grid lines on maps, simple geometric icons, and monochrome charts. Any 'imagery' serves a functional, data-driven purpose, mimicking readouts from a mission control system or engineering schematics. Icons are simple, outlined, and monochromatic, integrated seamlessly into the panel aesthetic. The density is high, with imagery and technical graphics embedded within text-dominant sections, purely for informative or functional visual flair rather than aesthetic decoration.

## Layout

The page model is a full-bleed, multi-panel interface, resembling a grid of modular embedded screens rather than a traditional web page. The hero section is not distinct but rather the 'Lift-off' panel, a circular, urgent red button embedded within one of the lighter sections. Section rhythm is driven by the clear borders and distinct backgrounds of each 'panel' or module, arranged in an asymmetric, dense composition. There isn't a strict grid for content arrangement but rather a collection of rectangular and circular modules nested within the larger light-grey 'chassis'. Navigation is minimal, implied through in-panel links and small interactive elements, with no visible global navigation bar.

## Similar Brands

- **Kerbal Space Program (UI)** — Modular panel-based UI, functional aesthetics, and heavy use of technical readouts.
- **Terminal.com** — High-contrast dark interfaces, emphasis on data, and a programmatic or developer-tool feel.
- **Factorio (Game UI)** — Dense, industrial UI with functional elements and clear state indicators on a light background.
- **NASA Mission Control archival footage** — Multiscreen, high-contrast displays with critical information highlighted, and analog/digital blend.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-control-panel-grey: #e5e7eb;
  --color-display-black: #11161c;
  --color-obsidian-grey: #000000;
  --color-digital-white: #ffffff;
  --color-graphite: #bbbbbb;
  --color-steel-grey: #a3a3a3;
  --color-slate-blue: #575c75;
  --color-urgency-red: #f43325;
  --color-active-blue: #0078a8;
  --color-gradient-night: #c9cbe4;
  --color-gradient-combustion: #f43325;
  --font-proxima-nova: 'proxima-nova', system-ui;
  --font-sf-mono: 'SF Mono', monospace;
  --font-helvetica-neue: 'Helvetica Neue', system-ui;
  --font-doto: 'Doto', Press Start 2P;
  --text-caption: 10px;
  --leading-caption: 0.8;
  --tracking-caption: 0.5px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0.013px;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --tracking-subheading: 0.014px;
  --text-heading: 36px;
  --leading-heading: 1.16;
  --tracking-heading: -0.071px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.071px;
  --text-display: 106px;
  --leading-display: 1;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-77: 77px;
  --spacing-80: 80px;
  --spacing-115: 115px;
  --spacing-180: 180px;
  --spacing-221: 221px;
  --radius-cards: 127.397px;
  --radius-pills: 9999px;
  --radius-buttons: 270.89px;
  --radius-default: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.8) 0px 0px 2px 0px;
  --shadow-xl-2: rgba(255, 255, 255, 0.5) 0px 0px 2px 0px;
  --surface-canvas: #e5e7eb;
  --surface-display: #11161c;
  --surface-elevated-control: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-control-panel-grey: #e5e7eb;
  --color-display-black: #11161c;
  --color-obsidian-grey: #000000;
  --color-digital-white: #ffffff;
  --color-graphite: #bbbbbb;
  --color-steel-grey: #a3a3a3;
  --color-slate-blue: #575c75;
  --color-urgency-red: #f43325;
  --color-active-blue: #0078a8;
  --color-gradient-night: #c9cbe4;
  --color-gradient-combustion: #f43325;
  --font-proxima-nova: 'proxima-nova', system-ui;
  --font-sf-mono: 'SF Mono', monospace;
  --font-helvetica-neue: 'Helvetica Neue', system-ui;
  --font-doto: 'Doto', Press Start 2P;
  --text-caption: 10px;
  --leading-caption: 0.8;
  --tracking-caption: 0.5px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0.013px;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --tracking-subheading: 0.014px;
  --text-heading: 36px;
  --leading-heading: 1.16;
  --tracking-heading: -0.071px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.071px;
  --text-display: 106px;
  --leading-display: 1;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-77: 77px;
  --spacing-80: 80px;
  --spacing-115: 115px;
  --spacing-180: 180px;
  --spacing-221: 221px;
  --radius-cards: 127.397px;
  --radius-pills: 9999px;
  --radius-buttons: 270.89px;
  --radius-default: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.8) 0px 0px 2px 0px;
  --shadow-xl-2: rgba(255, 255, 255, 0.5) 0px 0px 2px 0px;
  --surface-canvas: #e5e7eb;
  --surface-display: #11161c;
  --surface-elevated-control: #ffffff;
}
```
