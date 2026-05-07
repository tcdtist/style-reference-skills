---
version: alpha
name: "Green Angel Syndicate"
description: "Green Angel Syndicate employs a clear, confident aesthetic blending corporate professionalism with a vibrant, eco-conscious identity. A crisp white canvas serves as the backdrop for substantial, dark typography, ensuring high readability. The brand's commitment is articulated through a distinctive teal accent color that highlights key actions and investment opportunities, with a playful pink used for sub-brand elements. Layouts are spacious and structured, using subtle elevation to differentiate content blocks while maintaining an overall light and airy feel."
theme: "light"
industry: "fintech"
source_url: "https://greenangelsyndicate.com"
refero_style_id: "72f16808-d783-45e9-8166-2399c73473fc"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518939038-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518939038-thumb.jpg"
extracted_at: "2026-04-30T03:16:07.302Z"
---

# Green Angel Syndicate — Style Reference

> White canvas, teal commitment

**Theme:** light

**Industry:** fintech

Green Angel Syndicate employs a clear, confident aesthetic blending corporate professionalism with a vibrant, eco-conscious identity. A crisp white canvas serves as the backdrop for substantial, dark typography, ensuring high readability. The brand's commitment is articulated through a distinctive teal accent color that highlights key actions and investment opportunities, with a playful pink used for sub-brand elements. Layouts are spacious and structured, using subtle elevation to differentiate content blocks while maintaining an overall light and airy feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, form input fills – the primary content canvas |
| Deep Slate | #1e293b | `--color-deep-slate` | Primary text, prominent headings, borders for inactive elements |
| Teal Accent | #0f766e | `--color-teal-accent` | Primary action buttons for key interactions, significant headings, strong brand identifiers. A moderate teal signifying growth and environmental focus |
| Ink Wash | #171730 | `--color-ink-wash` | Secondary text, link hovers, outlines for ghost buttons, providing a slightly softer contrast than Deep Slate |
| Blush Pink | #ec4899 | `--color-blush-pink` | Decorative highlights, underlined text accents, footer styling – a vivid secondary brand color |
| Subtle Gray | #475569 | `--color-subtle-gray` | Muted text, descriptive labels, secondary information. Softer than Ink Wash |
| Border Grey | #767676 | `--color-border-grey` | Input field borders, divider lines, subtle UI separations |
| Dark Teal Footer | #115e59 | `--color-dark-teal-footer` | Background for the footer section, providing a dark contrast to the main content |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 700
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 20px, 32px, 56px
- **Line heights:** 1.00, 1.10, 1.20, 1.50
- **Letter spacing:** -0.0300em at 56px, -0.0200em at 32px, 0.0180em at 12-16px, normal at other sizes
- **Role:** The sole typeface for all text content, from body text to headlines and navigation, ensuring consistency. Varied weights and sizes create strong hierarchy. Tighter tracking at larger sizes maintains visual density.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | 0.22px | `--text-caption` |
| heading | 20px | 1.2 | — | `--text-heading` |
| heading-lg | 32px | 1.1 | -0.64px | `--text-heading-lg` |
| display | 56px | 1 | -1.68px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-117 | 117px | `--spacing-117` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 52px |
| cards | 16px |
| buttons | 6px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px | `--shadow-xl` |
| xl-2 | rgba(96, 97, 98, 0.15) 0px 4px 16px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 40px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Primary Action Button

**Role:** Main call-to-action for user interactions.

Filled with Teal Accent (#0f766e), Canvas White (#ffffff) text, 6px border-radius, 12px vertical padding, 24px horizontal padding.

### Ghost Navigation Link

**Role:** Standard navigation and text links.

No background, Ink Wash (#171730) text, no border-radius or padding by default. Underlines on hover.

### Detailed Feature Card

**Role:** Displays key information or offers in a structured block.

Canvas White (#ffffff) background, 16px border-radius, subtle shadow rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px. No explicit internal padding, content controls spacing.

### Elevated Content Card

**Role:** Highlights important content or form fields with more visual emphasis.

Canvas White (#ffffff) background, 8px border-radius, prominent shadow rgba(96, 97, 98, 0.15) 0px 4px 16px 0px. No explicit internal padding, content controls spacing.

### Informational Card

**Role:** Simple containers for grouped content without strong visual emphasis.

Transparent background, 0px border-radius, no shadow, 16px internal padding.

### Form Input Field

**Role:** Standard input for user data.

Canvas White (#ffffff) background, Black (#000000) text (on keypress), Border Grey (#767676) border, 0px border-radius, 8px padding. Placeholder text is the default font color.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) for all main content backgrounds to maintain a clean, open feel.
- Use Deep Slate (#1e293b) for all primary text and main headings to ensure readability and authority.
- Apply Teal Accent (#0f766e) exclusively for primary call-to-action buttons and critical brand emphasis.
- Utilize Inter font consistently across all text elements, relying on weight and size variations for hierarchy.
- Implement a 6px border-radius for all interactive elements like buttons for a consistent soft touch.
- Maintain a comfortable density with 8px element gaps and 16px card padding for internal component spacing.
- Employ the subtle shadow rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px for most cards, reserving the stronger rgba(96, 97, 98, 0.15) 0px 4px 16px 0px for elevated, focused elements.

### Don't

- Do not introduce new typefaces; rely solely on Inter's weights and sizes.
- Avoid using Teal Accent (#0f766e) for decorative purposes or extensive text; it is reserved for key actions.
- Refrain from heavy, solid backgrounds within content sections; maintain Canvas White (#ffffff) as the dominant background.
- Do not use dark text colors against dark backgrounds; ensure high contrast ratios (e.g., #1e293b on #ffffff).
- Avoid arbitrary border-radii; adhere to 6px for buttons, 16px for most cards, and 52px for tags.
- Do not deviate from the established spacing system; use 8px or multiples for consistent rhythm.
- Do not use highly saturated colors for text or backgrounds unless it's the specified Blush Pink (#ec4899) accent for specific highlights.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background, default content area. |
| 1 | Information Card | #00000000 | Grouped content areas without distinct background or elevation, relying on internal spacing and borders for definition. |
| 2 | Feature Card | #ffffff | Content cards with subtle elevation for emphasis. |
| 3 | Elevated Card | #ffffff | Highly noticeable cards or input containers with stronger shadow for clear separation. |
| 4 | Dark Teal Footer | #115e59 | Distinct, dark section for footer content. |

## Elevation

- **Feature Card:** `rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px`
- **Elevated Content Card:** `rgba(96, 97, 98, 0.15) 0px 4px 16px 0px`

## Imagery

The imagery focuses on a mix of authentic, often slightly desaturated, photography depicting people in professional settings (collaborating, meeting) and natural landscapes with an environmental focus (snow-capped mountains). These are typically contained within rectangular frames, sometimes with subtle rounded corners, and are used to convey both human connection and the environmental mission. Icons are simple, outlined, and monochromatic, used sparingly for quantitative metrics and visual reinforcement.

## Layout

The page primarily uses a max-width contained layout, approximately 1200px, centered on the screen. The hero section is full-width with a generous pink-tinted background, featuring a prominent, centered headline and a left-aligned descriptive paragraph. Content sections below often follow a three-column card grid pattern for features or alternating text-left/image-right blocks. Vertical spacing between sections is generous, ensuring comfortable readability and breathing room. A sticky header with minimal navigation is present at the top, and the footer is a distinct dark teal block with copyright information and secondary links.

## Similar Brands

- **Ecosia** — Shares a green/environmental theme with a focus on impact metrics and a clean, accessible UI.
- **Seedrs** — A finance/investment platform with a similar corporate yet approachable aesthetic, using a strong brand color for CTAs.
- **Monzo** — Digital banking with a clean, functional UI, distinct brand colors, and careful typography for clarity and trust.
- **Climeworks** — Environmental tech company using a white canvas, strong typography, and a prominent brand color to convey a serious yet hopeful message.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-deep-slate: #1e293b;
  --color-teal-accent: #0f766e;
  --color-ink-wash: #171730;
  --color-blush-pink: #ec4899;
  --color-subtle-gray: #475569;
  --color-border-grey: #767676;
  --color-dark-teal-footer: #115e59;
  --font-inter: 'Inter', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.22px;
  --text-heading: 20px;
  --leading-heading: 1.2;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.64px;
  --text-display: 56px;
  --leading-display: 1;
  --tracking-display: -1.68px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-56: 56px;
  --spacing-88: 88px;
  --spacing-117: 117px;
  --radius-tags: 52px;
  --radius-cards: 16px;
  --radius-buttons: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  --shadow-xl-2: rgba(96, 97, 98, 0.15) 0px 4px 16px 0px;
  --surface-canvas-white: #ffffff;
  --surface-information-card: #00000000;
  --surface-feature-card: #ffffff;
  --surface-elevated-card: #ffffff;
  --surface-dark-teal-footer: #115e59;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-deep-slate: #1e293b;
  --color-teal-accent: #0f766e;
  --color-ink-wash: #171730;
  --color-blush-pink: #ec4899;
  --color-subtle-gray: #475569;
  --color-border-grey: #767676;
  --color-dark-teal-footer: #115e59;
  --font-inter: 'Inter', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0.22px;
  --text-heading: 20px;
  --leading-heading: 1.2;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.64px;
  --text-display: 56px;
  --leading-display: 1;
  --tracking-display: -1.68px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-56: 56px;
  --spacing-88: 88px;
  --spacing-117: 117px;
  --radius-tags: 52px;
  --radius-cards: 16px;
  --radius-buttons: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  --shadow-xl-2: rgba(96, 97, 98, 0.15) 0px 4px 16px 0px;
  --surface-canvas-white: #ffffff;
  --surface-information-card: #00000000;
  --surface-feature-card: #ffffff;
  --surface-elevated-card: #ffffff;
  --surface-dark-teal-footer: #115e59;
}
```
