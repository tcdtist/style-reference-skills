---
version: alpha
name: "SAPGOODENERGY"
description: "SAPGOODENERGY uses a high-contrast athletic minimalism: stark black typography on vast white canvases, punctuated by a single vibrant orange accent. The design leans into raw energy, with strong sans-serifs and a focus on essential information. Large, generous spacing emphasizes content and creates a focused, almost clinical, presentation. Elements are clean-edged, with soft rounded corners on interactive components providing a subtle human touch."
theme: "light"
industry: "ecommerce"
source_url: "https://sapgoodenergy.com"
refero_style_id: "0cead5f0-0a56-401f-b637-81d1fe457259"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508581888-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508581888-thumb.jpg"
extracted_at: "2026-04-30T00:23:30.297Z"
---

# SAPGOODENERGY — Style Reference

> Athletic Minimalism: black ink on white canvas, with bursts of energetic orange.

**Theme:** light

**Industry:** ecommerce

SAPGOODENERGY uses a high-contrast athletic minimalism: stark black typography on vast white canvases, punctuated by a single vibrant orange accent. The design leans into raw energy, with strong sans-serifs and a focus on essential information. Large, generous spacing emphasizes content and creates a focused, almost clinical, presentation. Elements are clean-edged, with soft rounded corners on interactive components providing a subtle human touch.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, major headlines, prominent borders, primary buttons — creating a bold, assertive presence |
| Canvas White | #ffffff | `--color-canvas-white` | Main page background, card backgrounds, white text on dark surfaces |
| Alabaster | #fffffb | `--color-alabaster` | Subtle background for UI elements, slightly off-white to distinguish from pure canvas |
| Ash Grey | #e7e7e7 | `--color-ash-grey` | Card backgrounds, subtle fills, secondary borders |
| Graphite | #303030 | `--color-graphite` | Secondary text, subtle borders, UI elements that need to be present but not dominant |
| Pewter | #c0c0c0 | `--color-pewter` | Muted text, placeholder text, disabled states, subtle graphic elements |
| Slate | #707070 | `--color-slate` | Helper text, less prominent body copy, lower-contrast UI elements |
| Energy Burst Orange | #ff7840 | `--color-energy-burst-orange` | Call-to-action buttons, active navigation indicators — a singular vivid accent color to drive interaction |

## Tokens — Typography

### GT Pressura LC Standard

- **Token:** `--font-gt-pressura-lc-standard`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 10px, 13px, 14px, 16px, 24px
- **Line heights:** 1.00, 1.08, 1.13, 1.14, 1.20, 1.60
- **Role:** Primary text for body, links, navigation, and input fields. Its geometric sans-serif quality supports the site's modern, straightforward feel.

### Helvetica Neue LT Std

- **Token:** `--font-helvetica-neue-lt-std`
- **Substitute:** Arial
- **Weights:** 500, 800
- **Sizes:** 14px, 18px, 30px, 38px, 53px, 56px
- **Line heights:** 1.00, 1.03, 1.11, 1.60
- **Letter spacing:** -0.0500em at 56px, -0.0400em at 38px
- **Role:** Used for prominent headlines and buttons, conveying authority and impact. The tighter letter-spacing on larger sizes creates a condensed, powerful visual.

### GTStandard-M

- **Token:** `--font-gtstandard-m`
- **Substitute:** Montserrat
- **Weights:** 500
- **Sizes:** 14px
- **Line heights:** 1.50
- **Role:** A secondary display font, used sparingly for specific headings or branding elements to add textural variation without deviating from the overall sans-serif aesthetic.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.6 | — | `--text-caption` |
| heading | 24px | 1.2 | — | `--text-heading` |
| heading-lg | 30px | 1.11 | — | `--text-heading-lg` |
| display | 56px | 1 | -0.672px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-53 | 53px | `--spacing-53` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-76 | 76px | `--spacing-76` |
| spacing-99 | 99px | `--spacing-99` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-116 | 116px | `--spacing-116` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-121 | 121px | `--spacing-121` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-165 | 165px | `--spacing-165` |
| spacing-300 | 300px | `--spacing-300` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 18px |
| inputs | 7px |
| buttons | 7px |
| interactiveElements | 14px |
| smallInteractiveElements | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 100px |
| cardPadding | 24px |
| elementGap | 4px |

## Components

### Primary Action Button

**Role:** Filled button

Solid 'Energy Burst Orange' background (#ff7840) with 'Canvas White' text (#ffffff). Features a 7px border-radius and generous horizontal padding (0px top/bottom, 32px left/right). Text uses Helvetica Neue LT Std 14px weight 800.

### Secondary Ghost Button

**Role:** Outlined/ghost button

Transparent background with 'Midnight Ink' text (#000000) and 'Midnight Ink' border (#000000). No border-radius, maintaining sharp edges. Text uses GT Pressura LC Standard 14px weight 500.

### Tertiary Ghost Button

**Role:** Outlined/ghost button (muted)

Transparent background with muted 'Graphite' text (rgba(0, 0, 0, 0.81)) and matching border. No border-radius. Used for less prominent calls to action. Text uses GT Pressura LC Standard 14px weight 500.

### Callout Card

**Role:** Informational card with soft background

Features a semi-transparent 'Alabaster' background (oklab(0.999994 0.0000455678 0.0000200868 / 0.3)) with an 18px border-radius. Padding is 24px top, 21px left/right, 30px bottom.

### Content Card

**Role:** Container card

'Ash Grey' background (#e7e7e7) with an 18px border-radius. No explicit padding applied directly to the card container, intended for content to define its own spacing within.

### Text Input (with placeholder)

**Role:** Form input field

Background is a subtle 'Midnight Ink' tint (rgba(0, 0, 0, 0.1)) with 'Midnight Ink' text (#000000). Features a 9px border-radius. Placeholder text is 'Pewter'. Padding is 0px top/bottom, 16px left.

### Adhesion Banner

**Role:** Sticky promotional banner

Left-aligned banner with a solid 'Energy Burst Orange' background (#ff7840). Text is 'Canvas White' (#ffffff) using GT Pressura LC Standard 14px weight 700. Features a 7px border-radius.

## Do's and Don'ts

### Do

- Prioritize 'Midnight Ink' (#000000) for all primary text and calls to action on 'Canvas White' (#ffffff) backgrounds.
- Use 'Energy Burst Orange' (#ff7840) exclusively for primary action elements like CTA buttons and key highlights.
- Employ a 7px border-radius for all interactive elements like buttons and input fields.
- Maintain generous horizontal padding (e.g., 32px) around primary buttons to give them breathing room.
- Utilize 'Ash Grey' (#e7e7e7) and 'Alabaster' (oklab blend) for background surfaces that need to subtly stand out from 'Canvas White' (#ffffff).
- Apply tighter letter-spacing (-0.05em, -0.04em) to large 'Helvetica Neue LT Std' headlines to create a dense, impactful visual.
- Ensure consistent spacing for inner card content with 24px top, 21px left/right, and 30px bottom for Callout Cards.

### Don't

- Avoid introducing new chromatic colors; 'Energy Burst Orange' (#ff7840) is the sole accent.
- Do not use gradients; the system relies on solid colors for clear, direct communication.
- Do not use overly decorative elements; keep the aesthetic clean and functional.
- Avoid small text sizes for 'Helvetica Neue LT Std'; reserve it for impactful headlines and buttons.
- Do not vary border-radius significantly; adhere to 7px for interactive elements and 18px for larger containers.
- Avoid crowded layouts; prioritize ample white space between sections and elements.
- Do not mix font families within a single element where one family would suffice; leverage weight variations within GT Pressura LC Standard and Helvetica Neue LT Std.

## Similar Brands

- **Aesthetic fitness brands (e.g. Ten Thousand)** — High-contrast typography, minimalist layout, and a singular accent color against a clean white background.
- **High-end direct-to-consumer athletic wear** — Focus on product imagery, ample white space, and a premium, clean visual without excessive ornamentation.
- **Modern tech-focused e-commerce** — Strong sans-serif typography, restrained color palette, and clear, functional component design.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --color-alabaster: #fffffb;
  --color-ash-grey: #e7e7e7;
  --color-graphite: #303030;
  --color-pewter: #c0c0c0;
  --color-slate: #707070;
  --color-energy-burst-orange: #ff7840;
  --font-gt-pressura-lc-standard: 'GT Pressura LC Standard', Inter;
  --font-helvetica-neue-lt-std: 'Helvetica Neue LT Std', Arial;
  --font-gtstandard-m: 'GTStandard-M', Montserrat;
  --text-caption: 10px;
  --leading-caption: 1.6;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.11;
  --text-display: 56px;
  --leading-display: 1;
  --tracking-display: -0.672px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-53: 53px;
  --spacing-68: 68px;
  --spacing-70: 70px;
  --spacing-76: 76px;
  --spacing-99: 99px;
  --spacing-100: 100px;
  --spacing-116: 116px;
  --spacing-120: 120px;
  --spacing-121: 121px;
  --spacing-150: 150px;
  --spacing-160: 160px;
  --spacing-165: 165px;
  --spacing-300: 300px;
  --radius-cards: 18px;
  --radius-inputs: 7px;
  --radius-buttons: 7px;
  --radius-interactiveelements: 14px;
  --radius-smallinteractiveelements: 4px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-canvas-white: #ffffff;
  --color-alabaster: #fffffb;
  --color-ash-grey: #e7e7e7;
  --color-graphite: #303030;
  --color-pewter: #c0c0c0;
  --color-slate: #707070;
  --color-energy-burst-orange: #ff7840;
  --font-gt-pressura-lc-standard: 'GT Pressura LC Standard', Inter;
  --font-helvetica-neue-lt-std: 'Helvetica Neue LT Std', Arial;
  --font-gtstandard-m: 'GTStandard-M', Montserrat;
  --text-caption: 10px;
  --leading-caption: 1.6;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.11;
  --text-display: 56px;
  --leading-display: 1;
  --tracking-display: -0.672px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-53: 53px;
  --spacing-68: 68px;
  --spacing-70: 70px;
  --spacing-76: 76px;
  --spacing-99: 99px;
  --spacing-100: 100px;
  --spacing-116: 116px;
  --spacing-120: 120px;
  --spacing-121: 121px;
  --spacing-150: 150px;
  --spacing-160: 160px;
  --spacing-165: 165px;
  --spacing-300: 300px;
  --radius-cards: 18px;
  --radius-inputs: 7px;
  --radius-buttons: 7px;
  --radius-interactiveelements: 14px;
  --radius-smallinteractiveelements: 4px;
}
```
