---
version: alpha
name: "REKKI"
description: "REKKI embodies a 'night vision command center' aesthetic, utilizing a predominantly dark theme with sharp, almost glowing typography, and carefully chosen pops of vivid blue for primary actions. The interface balances information density with generous padding within components, creating distinct content blocks that stand out against the deep night-mode background. Surface treatments are subtle, relying on slight tonal shifts for hierarchy, almost no shadows, and rounded corners which soften the otherwise assertive, utilitarian design."
theme: "dark"
industry: "ai"
source_url: "https://rekki.com"
refero_style_id: "65b8df27-36a3-47a6-be53-735d1f6a485d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520922237-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520922237-thumb.jpg"
extracted_at: "2026-04-30T03:49:13.133Z"
---

# REKKI — Style Reference

> Midnight Command Center

**Theme:** dark

**Industry:** ai

REKKI embodies a 'night vision command center' aesthetic, utilizing a predominantly dark theme with sharp, almost glowing typography, and carefully chosen pops of vivid blue for primary actions. The interface balances information density with generous padding within components, creating distinct content blocks that stand out against the deep night-mode background. Surface treatments are subtle, relying on slight tonal shifts for hierarchy, almost no shadows, and rounded corners which soften the otherwise assertive, utilitarian design.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Absolute Zero | #000000 | `--color-absolute-zero` | Page background, primary text on light surfaces, borders, icon fills |
| Deep Space | #040910 | `--color-deep-space` | Secondary card surfaces, slightly elevated from the background |
| Charcoal Grey | #0d0d0d | `--color-charcoal-grey` | Muted background for cards and specific information display areas |
| Input Charcoal | #1f1f1f | `--color-input-charcoal` | Input field backgrounds, providing a subtle contrast against other dark surfaces |
| Dark Card | #2b2c2e | `--color-dark-card` | Primary card backgrounds, offering a distinct visual layer |
| Cloud White | #ffffff | `--color-cloud-white` | Primary text, visible on dark backgrounds, selected interactive states, and sometimes as a button background for secondary actions |
| Steel Gray | #858585 | `--color-steel-gray` | Muted text, helper text, inactive navigation items, and subtle borders |
| Light Steel | #8c8c8c | `--color-light-steel` | Secondary muted text, typically for links and less prominent information |
| Blue Neon | #0063e1 | `--color-blue-neon` | Primary call-to-action buttons, active navigation indicators, specific card accents, and important icons — this vivid blue signals interactivity and key brand elements |
| Mid Grey | #979797 | `--color-mid-grey` | Ghost button text and borders, outline icons |

## Tokens — Typography

### sans-serif

- **Token:** `--font-sans-serif`
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.2
- **Role:** sans-serif — detected in extracted data but not described by AI

### Diatype REKKI Medium

- **Token:** `--font-diatype-rekki-medium`
- **Weights:** 400
- **Sizes:** 16px, 18px, 56px, 72px, 86px
- **Line heights:** 1.00, 1.25, 1.33
- **Letter spacing:** -0.064em at 86px, -0.042em at 72px, -0.040em at 56px, -0.015em at 18px
- **OpenType features:** 'case'
- **Role:** Headlines and prominent navigation. Its precise tracking and robust weight give digital screens an authoritative, almost technical feel.

### Diatype REKKI Regular

- **Token:** `--font-diatype-rekki-regular`
- **Weights:** 400, 600
- **Sizes:** 12px, 16px, 18px, 20px, 24px
- **Line heights:** 1.33, 1.40, 1.50, 1.67
- **Letter spacing:** -0.027em at 24px, -0.015em at 20px, -0.007em at 18px, -0.005em at 16px
- **OpenType features:** 'case'
- **Role:** Body text, subheadings, and informational elements. A slightly wider letter spacing than the Medium variant ensures legibility in smaller sizes while maintaining the modern aesthetic.

### Diatype REKKI Bolder Rounded

- **Token:** `--font-diatype-rekki-bolder-rounded`
- **Weights:** 400, 700
- **Sizes:** 12px, 14px, 16px, 20px, 72px
- **Line heights:** 1.00, 1.17
- **Letter spacing:** 0.020em at 12px, 0.040em at 14px
- **Role:** Navigation, input fields, and small decorative labels. The rounded terminals soften the otherwise industrial feel, making interactive elements more approachable.

### OCD-GARRI-V01 Regular

- **Token:** `--font-ocd-garri-v01-regular`
- **Weights:** 400
- **Sizes:** 13px, 15px, 16px
- **Line heights:** 1.00, 1.07, 1.23
- **Letter spacing:** 0.033em at 15px, 0.038em at 13px
- **Role:** Supporting text, footnotes, and small interactive prompts. Its generous letter spacing and slightly condensed proportions enhance readability in tight spaces.

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Utility text, data labels within tables or cards, ensuring legibility at minimal sizes.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | 0.48px | `--text-caption` |
| body | 16px | 1.5 | -0.08px | `--text-body` |
| subheading | 18px | 1.33 | -0.126px | `--text-subheading` |
| heading-sm | 24px | 1.33 | -0.648px | `--text-heading-sm` |
| heading | 56px | 1.25 | -2.24px | `--text-heading` |
| heading-lg | 72px | 1 | -3.024px | `--text-heading-lg` |
| display | 86px | 1 | -5.504px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-39 | 39px | `--spacing-39` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| inputs | 100px |
| buttons | 59px |
| largeImages | 24px |
| asymmetricCards | 30px |
| navigationItems | 2px |
| topRoundedCards | 38px 38px 0px 0px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset | `--shadow-xl` |
| xl-2 | rgba(255, 255, 255, 0.2) 0px 0px 1px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 56px |
| cardPadding | 32px |
| elementGap | 20px |

## Components

### Primary Action Button

**Role:** Call to action

Bold, filled button with 'Blue Neon' (#0063e1) background and 'Absolute Zero' (#000000) text. Features a large 59px border-radius for a distinct, pill-like shape. Padding: 39px top, 56px right, 37px bottom, 56px left. Text uses Diatype REKKI Bolder Rounded.

### Secondary Action Button

**Role:** Alternative call to action

Inverted button with 'Cloud White' (#ffffff) background and browser-default link color text (not a brand color, but for #0000ee from data; use 'Absolute Zero' if a browser default, or 'Blue Neon' if linked). Features a large 59px border-radius. Padding: 32px top/bottom, 44px left/right. Appears sparingly.

### Ghost Text Button

**Role:** Subtle UI interaction

Transparent background with 'Mid Grey' (#979797) text and border (when present). No specific border-radius, often inline. No padding.

### Dark Base Card

**Role:** Content container

Uses 'Deep Space' (#040910) background, 8px border-radius, and 32px internal padding on all sides. No shadow. Used for general content grouping.

### Semi-Transparent Card

**Role:** Overlay content, context cards

Background of rgba(87, 89, 89, 0.45), 8px border-radius. Padding: 0px top/bottom, 24px left/right. Used for translucent, less opaque content blocks.

### Top-Rounded Input Card

**Role:** Dialog or input grouping

Background is 'Dark Card' (#2b2c2e) with a specific 38px 38px 0px 0px border-radius. Padding: 8px on all sides. Used for input areas or top sections of modular components.

### Input Field

**Role:** Data entry

Background is 'Input Charcoal' (#1f1f1f) with 'Cloud White' (#ffffff) text. Features a 100px border-radius, creating an extreme pill shape. Padding: 21px top, 24px right, 19px bottom, 24px left. Has a subtle white inset shadow: rgba(255, 255, 255, 0.2) 0px 0px 1px 0px.

## Do's and Don'ts

### Do

- Prioritize 'Absolute Zero' (#000000) as the canvas background for most page sections, ensuring a dark theme is consistently applied.
- Use 'Blue Neon' (#0063e1) exclusively for primary calls-to-action, active navigation states, and key interactive elements to create focus.
- Apply a 59px border-radius to all primary and secondary action buttons, providing a distinct pill shape.
- Utilize 'Diatype REKKI Medium' for all main headlines (56px, 72px, 86px) with precise negative letter-spacing values to emphasize its sharp, technical feel.
- Employ the 8px border-radius for general content cards and the more extreme 100px radius for input fields to differentiate element types.
- Use 'Cloud White' (#ffffff) for primary text on dark backgrounds and 'Steel Gray' (#858585) for muted or secondary text.
- Maintain an 'elementGap' of 20px and 'cardPadding' of 32px to ensure a comfortable density and clear separation within components and content blocks.

### Don't

- Do not introduce new saturated accent colors beyond 'Blue Neon' (#0063e1); maintain the dark/monochromatic base with a single color highlight.
- Avoid heavy drop shadows; elevation is primarily achieved through subtle background color shifts between 'Absolute Zero' and 'Dark Card' or 'Deep Space'.
- Do not deviate from the specified extreme border-radii for interactive elements; the 59px (buttons) and 100px (inputs) radius are signature elements.
- Refrain from using 'sans-serif' system font for primary UI text; always use the specific 'Diatype REKKI' fonts to maintain brand typography.
- Do not use generic padding values; adhere to the base unit of 4px and derived component padding (e.g., 32px for cards, 24px for inputs).
- Avoid full-bleed section backgrounds that are not 'Absolute Zero' or a very dark neutral; sections should either be contained or maintain the dark theme.
- Do not use highly textured or photographic backgrounds within core UI components; keep surfaces clean, flat, and dark.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Absolute Zero Canvas | #000000 | Primary page background, the deepest tonal layer. |
| 1 | Deep Space Surface | #040910 | Slightly elevated card backgrounds, providing minimal depth over the canvas. |
| 2 | Charcoal Card Surface | #0d0d0d | Dominant card backgrounds, a step brighter than Deep Space. |
| 3 | Dark Card Elevated | #2b2c2 | Most prominent card background, provides clear separation from lower layers. |
| 4 | Input Charcoal Field | #1f1f1f | Dedicated background for input fields, sitting above typical card layers. |

## Elevation

- **Input Field:** `rgba(255, 255, 255, 0.2) 0px 0px 1px 0px`

## Similar Brands

- **Rive** — Dark theme with strong focus on product UI, sharp typography, and deliberate accent colors.
- **Linear** — Monochromatic dark interface with crisp typography and subtle use of accent colors to denote interaction or status.
- **Vercel** — Technical, development-focused dark UI, prominent headlines, and use of modern sans-serif fonts with precise letter-spacing.
- **Notion** — Functional UI with a focus on clear hierarchy, using subtle shades of grey for surface differentiation in dark mode, and a rounded aesthetic for containers and buttons.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-absolute-zero: #000000;
  --color-deep-space: #040910;
  --color-charcoal-grey: #0d0d0d;
  --color-input-charcoal: #1f1f1f;
  --color-dark-card: #2b2c2e;
  --color-cloud-white: #ffffff;
  --color-steel-gray: #858585;
  --color-light-steel: #8c8c8c;
  --color-blue-neon: #0063e1;
  --color-mid-grey: #979797;
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, sans-serif;
  --font-diatype-rekki-medium: 'Diatype REKKI Medium', ui-sans-serif, system-ui, sans-serif;
  --font-diatype-rekki-regular: 'Diatype REKKI Regular', ui-sans-serif, system-ui, sans-serif;
  --font-diatype-rekki-bolder-rounded: 'Diatype REKKI Bolder Rounded', ui-sans-serif, system-ui, sans-serif;
  --font-ocd-garri-v01-regular: 'OCD-GARRI-V01 Regular', ui-sans-serif, system-ui, sans-serif;
  --font-inter: 'Inter', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: 0.48px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.08px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.126px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.648px;
  --text-heading: 56px;
  --leading-heading: 1.25;
  --tracking-heading: -2.24px;
  --text-heading-lg: 72px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -3.024px;
  --text-display: 86px;
  --leading-display: 1;
  --tracking-display: -5.504px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-38: 38px;
  --spacing-39: 39px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-120: 120px;
  --radius-cards: 8px;
  --radius-inputs: 100px;
  --radius-buttons: 59px;
  --radius-largeimages: 24px;
  --radius-asymmetriccards: 30px;
  --radius-navigationitems: 2px;
  --radius-toproundedcards: 38px 38px 0px 0px;
  --shadow-xl: rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgba(255, 255, 255, 0.2) 0px 0px 1px 0px;
  --surface-absolute-zero-canvas: #000000;
  --surface-deep-space-surface: #040910;
  --surface-charcoal-card-surface: #0d0d0d;
  --surface-dark-card-elevated: #2b2c2;
  --surface-input-charcoal-field: #1f1f1f;
}
```

### Tailwind v4

```css
@theme {
  --color-absolute-zero: #000000;
  --color-deep-space: #040910;
  --color-charcoal-grey: #0d0d0d;
  --color-input-charcoal: #1f1f1f;
  --color-dark-card: #2b2c2e;
  --color-cloud-white: #ffffff;
  --color-steel-gray: #858585;
  --color-light-steel: #8c8c8c;
  --color-blue-neon: #0063e1;
  --color-mid-grey: #979797;
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, sans-serif;
  --font-diatype-rekki-medium: 'Diatype REKKI Medium', ui-sans-serif, system-ui, sans-serif;
  --font-diatype-rekki-regular: 'Diatype REKKI Regular', ui-sans-serif, system-ui, sans-serif;
  --font-diatype-rekki-bolder-rounded: 'Diatype REKKI Bolder Rounded', ui-sans-serif, system-ui, sans-serif;
  --font-ocd-garri-v01-regular: 'OCD-GARRI-V01 Regular', ui-sans-serif, system-ui, sans-serif;
  --font-inter: 'Inter', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: 0.48px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.08px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.126px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.648px;
  --text-heading: 56px;
  --leading-heading: 1.25;
  --tracking-heading: -2.24px;
  --text-heading-lg: 72px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -3.024px;
  --text-display: 86px;
  --leading-display: 1;
  --tracking-display: -5.504px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-38: 38px;
  --spacing-39: 39px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-120: 120px;
  --radius-cards: 8px;
  --radius-inputs: 100px;
  --radius-buttons: 59px;
  --radius-largeimages: 24px;
  --radius-asymmetriccards: 30px;
  --radius-navigationitems: 2px;
  --radius-toproundedcards: 38px 38px 0px 0px;
  --shadow-xl: rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgba(255, 255, 255, 0.2) 0px 0px 1px 0px;
  --surface-absolute-zero-canvas: #000000;
  --surface-deep-space-surface: #040910;
  --surface-charcoal-card-surface: #0d0d0d;
  --surface-dark-card-elevated: #2b2c2;
  --surface-input-charcoal-field: #1f1f1f;
}
```
