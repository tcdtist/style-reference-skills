---
version: alpha
name: "Jeton"
description: "Jeton's design system radiates a vibrant, energetic feel with a strong focus on a single, dominant red accent color. Typography is precise and impactful, preferring tightly tracked, strong headlines. Surfaces are primarily clean white, contrasted by gradients that inject warmth and dynamism. Components feature generous border-radii, often creating pill shapes, and subtle shadows or gradient overlays are used sparingly for depth and interaction feedback."
theme: "light"
industry: "fintech"
source_url: "https://www.jeton.com"
refero_style_id: "1f32d914-6fdd-4692-b4fc-fcee2c414766"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508860779-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508860779-thumb.jpg"
extracted_at: "2026-04-30T00:28:05.401Z"
---

# Jeton — Style Reference

> Vibrant gradient pulse.

**Theme:** light

**Industry:** fintech

Jeton's design system radiates a vibrant, energetic feel with a strong focus on a single, dominant red accent color. Typography is precise and impactful, preferring tightly tracked, strong headlines. Surfaces are primarily clean white, contrasted by gradients that inject warmth and dynamism. Components feature generous border-radii, often creating pill shapes, and subtle shadows or gradient overlays are used sparingly for depth and interaction feedback.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, primary text on dark backgrounds |
| Text Black | #000000 | `--color-text-black` | General body text, icons, neutral button text |
| Jeton Red | #f73b20 | `--color-jeton-red` | Primary brand color. Outlined actions, badges, decorative elements, accents, and hero gradients; Primary hero section background, providing a warm, dynamic visual anchor |
| Red Velvet | #360802 | `--color-red-velvet` | Muted text, input placeholder text, subtle icon details |
| Flamingo Pink | #f84d35 | `--color-flamingo-pink` | Accent surface background in navigation elements, decorative elements |
| Fiery Rose | #fb2d54 | `--color-fiery-rose` | Red outline accent for tags, dividers, and focused UI edges. |
| Ocean Blue | #477ee9 | `--color-ocean-blue` | Violet outline accent for tags, dividers, and focused UI edges. |
| Mint Green | #34c771 | `--color-mint-green` | Green outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |

## Tokens — Typography

### Sequel Sans

- **Token:** `--font-sequel-sans`
- **Substitute:** Inter, Montserrat
- **Weights:** 400, 450, 500
- **Sizes:** 12px, 14px, 16px, 23px, 33px, 44px, 72px, 106px, 110px, 155px
- **Line heights:** 0.90, 1.00, 1.20, 1.25, 1.40, 1.50
- **Letter spacing:** 0.0100em, 0.0300em
- **Role:** Primary brand typeface for all text. Headlines tend to be large and tightly tracked for visual impact, while body text balances readability with a confident, modern feel.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.4 | 0.12px | `--text-caption` |
| body-sm | 14px | 1.4 | — | `--text-body-sm` |
| body | 16px | 1.4 | — | `--text-body` |
| subheading | 23px | 1.25 | — | `--text-subheading` |
| heading-sm | 33px | 1.2 | 0.33px | `--text-heading-sm` |
| heading | 44px | 1.2 | 0.44px | `--text-heading` |
| heading-lg | 72px | 1 | 0.72px | `--text-heading-lg` |
| display | 155px | 0.9 | 1.55px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-61 | 61px | `--spacing-61` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-86 | 86px | `--spacing-86` |
| spacing-109 | 109px | `--spacing-109` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-142 | 142px | `--spacing-142` |
| spacing-157 | 157px | `--spacing-157` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-201 | 201px | `--spacing-201` |
| spacing-303 | 303px | `--spacing-303` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| links | 8px |
| pills | 84px |
| inputs | 16px |
| buttons | 16px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(247, 59, 32, 0.1) 0px 8px 24px 0px, rgba(247, 59, 32, 0.05) 0px 2px 8px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.05) 0px -4px 16px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 51px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Outline Primary Button

**Role:** Call to action button for primary actions.

Ghost button with Jeton Red text and a 1px Jeton Red border, 16px border-radius, no background fill. Text uses Sequel Sans, weight 400.

### Outline Inverse Button

**Role:** Secondary call to action, or actions on dark backgrounds.

Ghost button with Canvas White text and a 1px Canvas White border, 84px (pill-shaped) border-radius, no background fill. Text uses Sequel Sans, weight 400, with 16px horizontal padding.

### Neutral Pill Button

**Role:** Informational or navigation buttons in neutral contexts.

Pill-shaped button with Text Black text and a 1px Text Black border, 16px border-radius, no background fill. Has 12px padding all around.

### App Store Link Card

**Role:** Download links for mobile applications.

Card with Canvas White background, 16px border-radius, and a soft shadow (rgba(0, 0, 0, 0.05) 0px -4px 16px 0px). No internal padding specified, assumed to be content-driven.

### Accent Highlight Card

**Role:** Decorative card for emphasized content.

Card with a soft Jeton Red background (rgba(247, 59, 32, 0.05)), 16px border-radius, and no shadow. No internal padding.

### Pill Navigation Button

**Role:** Navigation items within a segmented control or menu.

Pill-shaped button with Jeton Red text, no border or background (transparent), and a massive 84px border-radius for fluid shapes. Has 16px horizontal padding.

### Form Input Field

**Role:** Standard input field for user data.

Input field with subtle Jeton Red background (rgba(247, 59, 32, 0.05)), Red Velvet text and border, and 16px border-radius. Includes 17.6px top padding, 10px right padding, 6.4px bottom padding, and 48px left padding.

## Do's and Don'ts

### Do

- Always use Sequel Sans for all text elements, prioritizing weights 400, 450, and 500 for clarity.
- Apply Jeton Red (#f73b20) as the primary accent, particularly for interactive elements, outlined actions, and key branding.
- Ensure all primary call-to-action buttons are ghost buttons with Jeton Red text and borders, following the Outline Primary Button component specification.
- Use 16px for card, button, and input border-radii, embracing the rounded aesthetic.
- Implement the Sunrise Gradient linear-gradient(rgba(122, 39, 57, 0) 15%, rgb(247, 59, 32) 69%) for hero sections and prominent visual backgrounds.
- Maintain a default letter-spacing of 0.0100em or 0.0300em, specially for headlines, to achieve a compact and impactful typographic appearance.
- Utilize Canvas White (#ffffff) for all main page backgrounds and component surfaces to provide a clean, expansive canvas.

### Don't

- Do not introduce new color hues; strictly adhere to the defined brand, accent, and semantic palette.
- Avoid solid background fills for primary calls to action; always prefer the outlined Jeton Red style.
- Do not deviate from the established border-radii; avoid sharp corners or excessively small radii.
- Never use generic system fonts; always utilize Sequel Sans or its approved substitutes.
- Do not use heavy, opaque shadows unless specifically for card elevation (rgba(0, 0, 0, 0.05) 0px -4px 16px 0px).
- Avoid overly loose letter-spacing; maintain a tight, controlled textual presentation especially for headings.
- Do not overuse accent colors, ensure they serve a functional or brand-defining purpose.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Dominant background for the entire page, providing a clean foundation. |
| 1 | Subtle Accent Surface | #f84d35 | Used sparingly for navigation background highlights or small decorative elements. |
| 2 | Elevated Card Surface | #ffffff1a | Cards with a slightly translucent white background, appearing elevated against the canvas. |

## Elevation

- **App Store Link Card:** `rgba(0, 0, 0, 0.05) 0px -4px 16px 0px`
- **Navigation/Other:** `rgba(247, 59, 32, 0.1) 0px 8px 24px 0px, rgba(247, 59, 32, 0.05) 0px 2px 8px 0px`

## Imagery

Jeton uses a mix of abstract 3D renders with a volumetric, gradient light treatment, product screenshots embedded in device mockups, and vibrant brand-colored icons. Photography is absent. Abstract 3D elements are prominent in hero sections, creating a dynamic and modern feel. Icons are clean, often filled, and use the brand's primary and accent colors to denote different categories or actions (e.g., green for 'Add', blue for 'Send', red for 'Exchange'). The overall density is balanced, with imagery serving as decorative atmosphere and explanatory content, rather than overwhelming the layout.

## Layout

The page primarily uses a full-bleed layout for hero sections, transitioning to a contained, max-width layout for subsequent content. The hero typically features a centered headline over a gradient background with a prominent 3D abstract graphic. Section rhythm is often seamless, with consistent vertical spacing and a lack of strong visual dividers, except for subtle card elevations. Content arrangement often utilizes centered stacks or dual-column text-left/image-right patterns. A grid of cards can be seen for feature showcases. The navigation is a sticky top bar with a minimal set of links, along with a secondary bottom navigation or floating support button. The design leans towards a comfortable density, allowing visual breathing room.

## Similar Brands

- **Revolut** — Monolithic, vibrant branding with a strong single accent color and clean UI.
- **N26** — Clean white backgrounds contrasted with specific colored illustrations and tightly organized components.
- **Stripe** — Emphasis on clear, precise typography and product-focused imagery over lifestyle photography.
- **Wise (formerly TransferWise)** — Bold use of color accents on an otherwise neutral UI, with a focus on financial functionality.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-text-black: #000000;
  --color-jeton-red: #f73b20;
  --color-red-velvet: #360802;
  --color-flamingo-pink: #f84d35;
  --color-fiery-rose: #fb2d54;
  --color-ocean-blue: #477ee9;
  --color-mint-green: #34c771;
  --font-sequel-sans: 'Sequel Sans', Inter, Montserrat;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.4;
  --text-subheading: 23px;
  --leading-subheading: 1.25;
  --text-heading-sm: 33px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0.33px;
  --text-heading: 44px;
  --leading-heading: 1.2;
  --tracking-heading: 0.44px;
  --text-heading-lg: 72px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: 0.72px;
  --text-display: 155px;
  --leading-display: 0.9;
  --tracking-display: 1.55px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-41: 41px;
  --spacing-48: 48px;
  --spacing-51: 51px;
  --spacing-56: 56px;
  --spacing-61: 61px;
  --spacing-70: 70px;
  --spacing-86: 86px;
  --spacing-109: 109px;
  --spacing-140: 140px;
  --spacing-142: 142px;
  --spacing-157: 157px;
  --spacing-160: 160px;
  --spacing-201: 201px;
  --spacing-303: 303px;
  --radius-cards: 16px;
  --radius-links: 8px;
  --radius-pills: 84px;
  --radius-inputs: 16px;
  --radius-buttons: 16px;
  --shadow-xl: rgba(247, 59, 32, 0.1) 0px 8px 24px 0px, rgba(247, 59, 32, 0.05) 0px 2px 8px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.05) 0px -4px 16px 0px;
  --surface-canvas-white: #ffffff;
  --surface-subtle-accent-surface: #f84d35;
  --surface-elevated-card-surface: #ffffff1a;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-text-black: #000000;
  --color-jeton-red: #f73b20;
  --color-red-velvet: #360802;
  --color-flamingo-pink: #f84d35;
  --color-fiery-rose: #fb2d54;
  --color-ocean-blue: #477ee9;
  --color-mint-green: #34c771;
  --font-sequel-sans: 'Sequel Sans', Inter, Montserrat;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.4;
  --text-subheading: 23px;
  --leading-subheading: 1.25;
  --text-heading-sm: 33px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0.33px;
  --text-heading: 44px;
  --leading-heading: 1.2;
  --tracking-heading: 0.44px;
  --text-heading-lg: 72px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: 0.72px;
  --text-display: 155px;
  --leading-display: 0.9;
  --tracking-display: 1.55px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-41: 41px;
  --spacing-48: 48px;
  --spacing-51: 51px;
  --spacing-56: 56px;
  --spacing-61: 61px;
  --spacing-70: 70px;
  --spacing-86: 86px;
  --spacing-109: 109px;
  --spacing-140: 140px;
  --spacing-142: 142px;
  --spacing-157: 157px;
  --spacing-160: 160px;
  --spacing-201: 201px;
  --spacing-303: 303px;
  --radius-cards: 16px;
  --radius-links: 8px;
  --radius-pills: 84px;
  --radius-inputs: 16px;
  --radius-buttons: 16px;
  --shadow-xl: rgba(247, 59, 32, 0.1) 0px 8px 24px 0px, rgba(247, 59, 32, 0.05) 0px 2px 8px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.05) 0px -4px 16px 0px;
  --surface-canvas-white: #ffffff;
  --surface-subtle-accent-surface: #f84d35;
  --surface-elevated-card-surface: #ffffff1a;
}
```
