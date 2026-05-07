---
version: alpha
name: "Legend"
description: "Legend employs a stark, almost architectural interface, leveraging precise typography and a highly restrained achromatic color palette. A single vivid violet provides a 'switched-on' accent, pulling focus to key data points or interactive elements without overwhelming the clean surfaces. Components are lightweight and subtly defined, often through borders or slight shifts in gray rather than heavy fills, creating an experience that feels understated yet highly functional."
theme: "light"
industry: "crypto"
source_url: "https://legend.xyz"
refero_style_id: "63bd1ed9-b161-45fd-8734-85282bd945ec"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508320444-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508320444-thumb.jpg"
extracted_at: "2026-04-30T00:19:14.502Z"
---

# Legend — Style Reference

> Architectural blueprint on white marble

**Theme:** light

**Industry:** crypto

Legend employs a stark, almost architectural interface, leveraging precise typography and a highly restrained achromatic color palette. A single vivid violet provides a 'switched-on' accent, pulling focus to key data points or interactive elements without overwhelming the clean surfaces. Components are lightweight and subtly defined, often through borders or slight shifts in gray rather than heavy fills, creating an experience that feels understated yet highly functional.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ededed | `--color-canvas-white` | Page backgrounds, large content blocks, primary surfaces — a warm white that establishes a spacious, clean foundation |
| Ink Black | #000000 | `--color-ink-black` | Primary text, strong borders, prominent icons, hero headlines — provides high contrast against light surfaces |
| Deep Gray | #131313 | `--color-deep-gray` | Dark card backgrounds, secondary text on dark surfaces, subtle borders — a deep, almost off-black for elevated elements |
| Medium Gray | #949494 | `--color-medium-gray` | Muted body text, secondary interface borders, subtle background tints — provides visual separation without high contrast |
| Light Gray | #b2b2b2 | `--color-light-gray` | Subtle border accents, helper text, disabled states — an even lighter gray for tertiary information |
| Muted Gray | #6c6c6c | `--color-muted-gray` | Navigation text, less prominent body text, soft background accents — provides a soft contrast against brighter grays |
| Outline Gray | #474747 | `--color-outline-gray` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Button Gray | #2d2d2d | `--color-button-gray` | Filled button backgrounds for secondary actions — a dark, solid gray for contained interactive elements |
| Background Gray | #dedddc | `--color-background-gray` | Subtle background panels, alternative light surface — a very light, almost white gray for layering |
| Accent Violet | #8931c4 | `--color-accent-violet` | Violet outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Muted Forest Gradient | #9c9991 | `--color-muted-forest-gradient` | Background gradient for specific sections, adding naturalistic depth with desaturated greens and browns |
| Charcoal Dawn Gradient | #655c5b | `--color-charcoal-dawn-gradient` | Used for background elements that need a deeper, more atmospheric transition from dark neutral to a hint of warmth |

## Tokens — Typography

### knapp

- **Token:** `--font-knapp`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 12px, 16px, 20px, 22px, 44px, 56px
- **Line heights:** 1.00, 1.10, 1.25, 1.30, 1.40, 1.50
- **Letter spacing:** -0.0100em
- **Role:** Primary typeface for headings, body text, and UI elements. Its clean, sans-serif forms with slightly condensed characters convey precision and modernity. While default weight is 400, a bolder 500 is used for key interface elements.

### diatypeMono

- **Token:** `--font-diatypemono`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 11px, 13px
- **Line heights:** 1.00, 1.35
- **Letter spacing:** 0.0600em
- **Role:** Monospaced font for technical details, coordinates, and subtle navigation. Its fixed width creates a structured, data-driven feel and distinguishes it from the primary typeface, hinting at underlying complexity.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1 | 0.66px | `--text-caption` |
| heading | 20px | 1.3 | -0.2px | `--text-heading` |
| heading-lg | 22px | 1.25 | -0.22px | `--text-heading-lg` |
| display-sm | 44px | 1.1 | -0.44px | `--text-display-sm` |
| display | 56px | 1.4 | -0.56px | `--text-display` |

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
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-192 | 192px | `--spacing-192` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 32px |
| buttons | 4px |
| general | 4px |
| navItems | 12px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.05) 0px 2px 2px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1416px |
| sectionGap | 68px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Navigation Item

**Role:** Text link within the primary navigation bar.

Text uses knapp font at 12px or 16px, Ink Black color, with a faint 1px border on hover or active states. Padding is usually 10px vertically and 16px horizontally.

### Primary Ghost Button

**Role:** Text-only button with a transparent background.

No background color, Ink Black text, 0px border radius. Example: 'EXPLORE' button. Uses knapp font.

### Secondary Filled Button

**Role:** Contained button for secondary actions.

Background color is Button Gray (#2d2d2d), text is Canvas White (#ededed), border radius is 4px. Example: '+ −' buttons in expandable content sections.

### Navigation Utility Button

**Role:** Button within the utility navigation area (e.g. download button, menu icon).

White text on an Ink Black background, 8px border radius, with 16px padding on either side. Uses knapp font.

### Product Display Card

**Role:** Showcases key data or features, like a phone screen rendering.

Background color is Deep Gray (#131313) with a 32px border radius and no box shadow. Padding is generally absent as content reaches the edges.

### Expandable Content Header

**Role:** Header for an accordion-style content section.

Background is transparent, uses Accent Violet (#8931c4) for the 'Q' or icon, and Ink Black for the question text. Features an Outline Gray (#474747) 1px border. The associated button has a Button Gray (#2d2d2d) background and 4px radius.

## Do's and Don'ts

### Do

- Use Canvas White (#ededed) as the default page background to maintain a bright, expansive canvas.
- Apply Deep Gray (#131313) for cards or elevated content blocks to create subtle visual layering.
- Reserve Accent Violet (#8931c4) exclusively for key headlines, interactive states, and essential data points.
- Utilize knapp font family with its defined weights and line heights for all primary text content.
- Employ diatypeMono font for coordinates, technical details, or any data requiring a fixed-width presentation.
- Ensure buttons and interactive elements use either 4px or 8px border radius, as defined by their type (e.g., 4px for action buttons, 8px for nav buttons).
- Maintain a consistent 20px elementGap to structure content with comfortable breathing room.

### Don't

- Do not introduce new saturated colors; the palette is intentionally monochromatic with a single accent.
- Avoid heavy drop shadows or excessive elevation; the system relies on subtle borders and background shifts for depth.
- Do not use generic font sizes; always refer to the established type scale (e.g., 56px for display, 16px for body).
- Never embed branding or illustrative elements that clash with the crisp, technical aesthetic.
- Do not use letter-spacing values other than the ones defined for knapp and diatypeMono.
- Avoid arbitrary border radii; adhere strictly to 4px, 8px, 12px, and 32px for specific components.
- Do not introduce gradients unless they are the Muted Forest Gradient or Charcoal Dawn Gradient, and only in defined background contexts.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ededed | Primary page background providing a clean, bright foundation. |
| 1 | Background Gray | #dedddc | Subtle background panels or alternative light surfaces for layering content. |
| 2 | Deep Gray | #131313 | Elevated card backgrounds and containers for darker content sections. |
| 3 | Button Gray | #2d2d2d | Used for filled interactive elements, providing a clear visual affordance. |

## Elevation

- **Navigation Bar:** `rgba(0, 0, 0, 0.05) 0px 2px 2px 0px`

## Imagery

Imagery is predominantly product screenshots of a mobile application, presented in a clean, isolated style with very soft, diffused backgrounds that sometimes feature muted, out-of-focus naturalistic elements like hills or mist, often with a slight violet tint from the brand's accent color. Graphics are minimal, typically monochromatic icons or subtle geometric shapes, featuring fine outlines and filled states. The overall density of imagery is balanced, serving to exemplify product features rather than purely decorative atmospheric elements.

## Layout

The page adheres to a max-width of 1416px, content is horizontally centered. The hero section uses a full-bleed background often incorporating subtle gradients and misty landscapes, with primary headlines stacked centrally. Subsequent sections alternate between full-width informational blocks and symmetrical two-column layouts featuring text on one side and a product screenshot or visual on the other. Vertical rhythm is established with a consistent section gap, creating a spacious and composed feel. Navigation is a fixed top bar on larger screens, highly utilitarian with minimal styling.

## Similar Brands

- **Linear** — Shares a stark, ultra-minimal interface with strong achromatic focus and precise typography.
- **Rive** — Similar use of a single vibrant accent color against an otherwise monochromatic UI for key interactions and branding.
- **Framer** — Adopts a clean, grid-aligned layout and emphasizes product screenshots with minimal visual distractions.
- **Superhuman** — Employs an interface that feels fast and precise, with carefully chosen typography and a very quiet color palette.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ededed;
  --color-ink-black: #000000;
  --color-deep-gray: #131313;
  --color-medium-gray: #949494;
  --color-light-gray: #b2b2b2;
  --color-muted-gray: #6c6c6c;
  --color-outline-gray: #474747;
  --color-button-gray: #2d2d2d;
  --color-background-gray: #dedddc;
  --color-accent-violet: #8931c4;
  --color-muted-forest-gradient: #9c9991;
  --color-charcoal-dawn-gradient: #655c5b;
  --font-knapp: 'knapp', Inter;
  --font-diatypemono: 'diatypeMono', Space Mono;
  --text-caption: 11px;
  --leading-caption: 1;
  --tracking-caption: 0.66px;
  --text-heading: 20px;
  --leading-heading: 1.3;
  --tracking-heading: -0.2px;
  --text-heading-lg: 22px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.22px;
  --text-display-sm: 44px;
  --leading-display-sm: 1.1;
  --tracking-display-sm: -0.44px;
  --text-display: 56px;
  --leading-display: 1.4;
  --tracking-display: -0.56px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-192: 192px;
  --radius-cards: 32px;
  --radius-buttons: 4px;
  --radius-general: 4px;
  --radius-navitems: 12px;
  --shadow-xl: rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;
  --surface-canvas-white: #ededed;
  --surface-background-gray: #dedddc;
  --surface-deep-gray: #131313;
  --surface-button-gray: #2d2d2d;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ededed;
  --color-ink-black: #000000;
  --color-deep-gray: #131313;
  --color-medium-gray: #949494;
  --color-light-gray: #b2b2b2;
  --color-muted-gray: #6c6c6c;
  --color-outline-gray: #474747;
  --color-button-gray: #2d2d2d;
  --color-background-gray: #dedddc;
  --color-accent-violet: #8931c4;
  --color-muted-forest-gradient: #9c9991;
  --color-charcoal-dawn-gradient: #655c5b;
  --font-knapp: 'knapp', Inter;
  --font-diatypemono: 'diatypeMono', Space Mono;
  --text-caption: 11px;
  --leading-caption: 1;
  --tracking-caption: 0.66px;
  --text-heading: 20px;
  --leading-heading: 1.3;
  --tracking-heading: -0.2px;
  --text-heading-lg: 22px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.22px;
  --text-display-sm: 44px;
  --leading-display-sm: 1.1;
  --tracking-display-sm: -0.44px;
  --text-display: 56px;
  --leading-display: 1.4;
  --tracking-display: -0.56px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-192: 192px;
  --radius-cards: 32px;
  --radius-buttons: 4px;
  --radius-general: 4px;
  --radius-navitems: 12px;
  --shadow-xl: rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;
  --surface-canvas-white: #ededed;
  --surface-background-gray: #dedddc;
  --surface-deep-gray: #131313;
  --surface-button-gray: #2d2d2d;
}
```
