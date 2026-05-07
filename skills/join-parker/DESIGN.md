---
version: alpha
name: "Join Parker"
description: "Parker's visual system evokes a smart, modern financial platform with a distinct material quality. Cool grays and crisp whites form a quiet canvas that allows a vibrant blue and a warm orange to highlight key interactive elements and brand accents. Typography is compact and precise, maintaining readability while maximizing information density. Softly rounded cards and buttons provide a friendly tactile feel, contrasting with the directness of the color palette."
theme: "light"
industry: "fintech"
source_url: "https://www.getparker.com"
refero_style_id: "f08f9870-2018-4c0b-80d4-0b2e525ff49c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777507917872-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777507917872-thumb.jpg"
extracted_at: "2026-04-30T00:12:22.784Z"
---

# Join Parker — Style Reference

> Matte bluescreen material

**Theme:** light

**Industry:** fintech

Parker's visual system evokes a smart, modern financial platform with a distinct material quality. Cool grays and crisp whites form a quiet canvas that allows a vibrant blue and a warm orange to highlight key interactive elements and brand accents. Typography is compact and precise, maintaining readability while maximizing information density. Softly rounded cards and buttons provide a friendly tactile feel, contrasting with the directness of the color palette.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Off-Black | #1b1d20 | `--color-off-black` | Primary text, darkest surface background for sections, base UI elements like navigation |
| Pure White | #ffffff | `--color-pure-white` | Page backgrounds, card surfaces, ghost button backgrounds, text on dark accents |
| Medium Gray | #6e6e6e | `--color-medium-gray` | Secondary text, muted icon fills, dividers in neutral contexts |
| Ash Gray | #f2f1ec | `--color-ash-gray` | Subtle background for UI elements, light card surfaces within sections |
| Border Gray | #e1dfd8 | `--color-border-gray` | Hairline borders for cards and other UI components, subtle visual separation |
| Input Border | #a3a3a3 | `--color-input-border` | Default border color for input fields |
| Parker Blue | #5196fe | `--color-parker-blue` | Interactive elements like links, outlined buttons, decorative accents, and the main brand color |
| Parker Orange | #f9754e | `--color-parker-orange` | Primary call-to-action button fills – a warm, inviting accent for crucial actions |
| Alert Blue | #f4ebff | `--color-alert-blue` | Background for informational banners or highlights, providing a soft background contrast |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui
- **Weights:** 400, 500, 600, 700
- **Sizes:** 14px, 16px, 18px, 19px, 20px, 32px, 48px, 64px
- **Line heights:** 1.05, 1.13, 1.16, 1.42, 1.43, 1.50, 1.55
- **Letter spacing:** -0.1em at 64px, -0.06em at 48px, -0.03em at 32px, -0.023em at 20px, -0.02em at 18px, 0.008em at 14px
- **Role:** Primary typeface for all UI elements, including body text, navigation, and smaller headings. Its compact nature supports dense information presentation without sacrificing clarity.

### Gambetta

- **Token:** `--font-gambetta`
- **Substitute:** Georgia
- **Weights:** 500
- **Sizes:** 51px, 64px
- **Line heights:** 1.05, 1.16
- **Letter spacing:** -0.08em at 64px, -0.04em at 51px
- **Role:** Used for prominent display headlines, providing a distinctive, authoritative voice. Its moderate weight and tighter tracking set it apart for key statements.

### system-ui

- **Token:** `--font-system-ui`
- **Weights:** 400, 500, 600
- **Sizes:** 14px, 16px
- **Line heights:** 1.42, 1.5
- **Role:** system-ui — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.5 | 0.008px | `--text-caption` |
| body | 16px | 1.5 | 0px | `--text-body` |
| body-lg | 18px | 1.43 | -0.02px | `--text-body-lg` |
| subheading | 20px | 1.42 | -0.023px | `--text-subheading` |
| heading | 32px | 1.13 | -0.03px | `--text-heading` |
| heading-lg | 48px | 1.16 | -0.06px | `--text-heading-lg` |
| display-sm | 51px | 1.16 | -0.04px | `--text-display-sm` |
| display | 64px | 1.05 | -0.08px | `--text-display` |

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
| spacing-16 | 16px | `--spacing-16` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-123 | 123px | `--spacing-123` |
| spacing-203 | 203px | `--spacing-203` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 24px |
| badges | 12.8px |
| inputs | 12px |
| buttons | 1584px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 2px 10px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 64px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Primary Action Button (Orange)

**Role:** Call to action

Filled button with Parker Orange (#f9754e) background and Pure White (#ffffff) text. Features a full pill shape (1584px border-radius) with 8px vertical and 24px horizontal padding.

### Outlined Action Button (Blue)

**Role:** Secondary action or link

Ghost button with a 1px Parker Blue (#5196fe) border and Parker Blue text. Full pill shape (1584px border-radius) with 8px vertical and 24px horizontal padding.

### Neutral Ghost Button

**Role:** Tertiary action or navigation

Ghost button with Pure White (#ffffff) background and Off-Black (#1b1d20) text, with no visible border. Full pill shape (1584px border-radius) with 8px vertical and 24px horizontal padding.

### Feature Card

**Role:** Content container

Pure White (#ffffff) background, with Border Gray (#e1dfd8) 1px border. Features a 24px border-radius and generous internal padding (48px top/bottom, 32px right, ~58px left).

### Input Field

**Role:** User input

Plain white background, Input Border (#a3a3a3) with a 1px border, and 12px border-radius. Internal padding is 8px vertical and 12px horizontal. Text is Medium Gray (#333333).

### Branded Pill Badge

**Role:** Categorization or status

Off-Black (#1b1d20) background with Off-Black text. Features a 12.8px border-radius for a slightly rounded pill shape with 10px vertical and 20px horizontal padding.

## Do's and Don'ts

### Do

- Always use the Parker Orange (#f9754e) for primary call-to-action button fills to maintain brand recognition and visual hierarchy.
- Apply 24px border-radius to all content cards and major section containers to maintain the friendly, soft aesthetic.
- Utilize Inter for all body text, UI labels, and most headings, adjusting weight to 400 for body and 600/700 for distinct headings.
- Ensure a horizontal padding of 24px and vertical of 8px for all buttons to achieve the consistent pill shape.
- Use Parker Blue (#5196fe) for all interactive links and secondary action outlines, ensuring clear visual distinction from primary actions.
- Maintain maximum content width at 1200px, centered on the page, with consistent 64px vertical section gaps.
- Use Gambetta for high-impact headlines (e.g., above 48px) with its defined tighter letter spacing (e.g., -0.08em at 64px) for a focused, bold statement.

### Don't

- Do not use multiple accent colors for CTA buttons; restrict chromatic fills to Parker Orange and outlines to Parker Blue.
- Avoid sharp corners; all major UI elements like cards and buttons must adhere to the specified border-radii of 24px or 1584px.
- Do not introduce new typefaces; rely solely on Inter and Gambetta to preserve typographic rhythm and brand voice.
- Do not use generic gray backgrounds for prominent cards; use Pure White (#ffffff) or Ash Gray (#f2f1ec).
- Avoid heavy drop shadows; elevation should be subtle, defined by a single rgba(0,0,0,0.1) 0px 2px 10px 0px shadow for cards, or none at all.
- Do not vary line-height arbitrarily; stick to the defined ratios of 1.05 and 1.16 for display text and 1.42-1.55 for body text.
- Do not use less than 8px element gap for components unless explicitly defined in a specific component recipe.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Page Canvas | #ffffff | Dominant background for the overall page, providing a clean, bright foundation. |
| 2 | Accent Surface | #f2f1ec | A subtle, slightly off-white background for specific sections or contained UI elements to add visual texture without strong contrast. |
| 3 | Interactive Surface | #5196fe | Background for selected interactive elements or larger brand-accented blocks, creating visual prominence. |

## Elevation

- **Card:** `rgba(0, 0, 0, 0.1) 0px 2px 10px 0px`

## Similar Brands

- **Ramp** — Business finance platforms with clean, card-based layouts and a strong accent color.
- **Brex** — Fintech companies for startups, often featuring product visuals of their credit cards and a modern, approachable UI.
- **Mercury** — Online banking interfaces with a focus on simplicity, clear typography, and subtle use of brand colors for hierarchy.
- **Stripe** — Developer-friendly platforms with compact UI, sans-serif typography, and a balance of informational density with clear spacing.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-off-black: #1b1d20;
  --color-pure-white: #ffffff;
  --color-medium-gray: #6e6e6e;
  --color-ash-gray: #f2f1ec;
  --color-border-gray: #e1dfd8;
  --color-input-border: #a3a3a3;
  --color-parker-blue: #5196fe;
  --color-parker-orange: #f9754e;
  --color-alert-blue: #f4ebff;
  --font-inter: 'Inter', system-ui;
  --font-gambetta: 'Gambetta', Georgia;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: 0.008px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.43;
  --tracking-body-lg: -0.02px;
  --text-subheading: 20px;
  --leading-subheading: 1.42;
  --tracking-subheading: -0.023px;
  --text-heading: 32px;
  --leading-heading: 1.13;
  --tracking-heading: -0.03px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.16;
  --tracking-heading-lg: -0.06px;
  --text-display-sm: 51px;
  --leading-display-sm: 1.16;
  --tracking-display-sm: -0.04px;
  --text-display: 64px;
  --leading-display: 1.05;
  --tracking-display: -0.08px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-123: 123px;
  --spacing-203: 203px;
  --radius-cards: 24px;
  --radius-badges: 12.8px;
  --radius-inputs: 12px;
  --radius-buttons: 1584px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;
  --surface-page-canvas: #ffffff;
  --surface-accent-surface: #f2f1ec;
  --surface-interactive-surface: #5196fe;
}
```

### Tailwind v4

```css
@theme {
  --color-off-black: #1b1d20;
  --color-pure-white: #ffffff;
  --color-medium-gray: #6e6e6e;
  --color-ash-gray: #f2f1ec;
  --color-border-gray: #e1dfd8;
  --color-input-border: #a3a3a3;
  --color-parker-blue: #5196fe;
  --color-parker-orange: #f9754e;
  --color-alert-blue: #f4ebff;
  --font-inter: 'Inter', system-ui;
  --font-gambetta: 'Gambetta', Georgia;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: 0.008px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.43;
  --tracking-body-lg: -0.02px;
  --text-subheading: 20px;
  --leading-subheading: 1.42;
  --tracking-subheading: -0.023px;
  --text-heading: 32px;
  --leading-heading: 1.13;
  --tracking-heading: -0.03px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.16;
  --tracking-heading-lg: -0.06px;
  --text-display-sm: 51px;
  --leading-display-sm: 1.16;
  --tracking-display-sm: -0.04px;
  --text-display: 64px;
  --leading-display: 1.05;
  --tracking-display: -0.08px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-123: 123px;
  --spacing-203: 203px;
  --radius-cards: 24px;
  --radius-badges: 12.8px;
  --radius-inputs: 12px;
  --radius-buttons: 1584px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;
  --surface-page-canvas: #ffffff;
  --surface-accent-surface: #f2f1ec;
  --surface-interactive-surface: #5196fe;
}
```
