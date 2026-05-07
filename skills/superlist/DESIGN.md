---
version: alpha
name: "Superlist"
description: "Superlist employs a dark, almost theatrical, aesthetic with intense, contrasting colors to highlight interaction. The deep charcoal and muted violet backgrounds create a sophisticated stage, upon which vibrant pinks and oranges burst forth as calls to action and signifiers of activity. The interplay of strong, condensed headings and softer, spacious body text paired with generous spacing gives the design a comfortable yet decisive presence."
theme: "dark"
industry: "productivity"
source_url: "https://superlist.com"
refero_style_id: "13f27e7a-d84f-4ff9-a030-ae4e2c930757"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932215877-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932215877-thumb.jpg"
extracted_at: "2026-04-11T18:30:42.187Z"
---

# Superlist — Style Reference

> Dark Nebula with Neon Traces. A cosmic expanse of deep grays and violet, punctuated by sharp, vivid bursts of color that guide the eye.

**Theme:** dark

**Industry:** productivity

Superlist employs a dark, almost theatrical, aesthetic with intense, contrasting colors to highlight interaction. The deep charcoal and muted violet backgrounds create a sophisticated stage, upon which vibrant pinks and oranges burst forth as calls to action and signifiers of activity. The interplay of strong, condensed headings and softer, spacious body text paired with generous spacing gives the design a comfortable yet decisive presence.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Space | #181824 | `--color-deep-space` | Primary background for pages and major sections, setting a dark, immersive tone. |
| Charcoal Surface | #26253b | `--color-charcoal-surface` | Background for cards, navigation panels, and interactive elements, providing clear differentiation from the main background. |
| Nebula Gray | #696f81 | `--color-nebula-gray` | Subtle secondary text, inactive states, and borders, providing high contrast against dark surfaces while maintaining a dark theme. |
| Ghostly Grey | #8e8da0 | `--color-ghostly-grey` | Navigation links, body text in less prominent areas, and subtle UI accents, a slightly lighter neutral than Nebula Gray. |
| Snow Drift | #ffffff | `--color-snow-drift` | Primary text color for headlines and key information, ensuring maximum readability. |
| Stardust White | #f7f7ff | `--color-stardust-white` | Prominent text, active navigation items, and icons, a slightly off-white that feels softer than pure white. |
| Comet Tail Violet | #535676 | `--color-comet-tail-violet` | Accent color for specific iconography or secondary headings, adding a muted chromatic touch. |
| Rocket Orange | #ff4a36 | `--color-rocket-orange` | Primary call-to-action button, highlighting urgent or primary interactions against the dark background. |
| Flare Orange | #ff3a26 | `--color-flare-orange` | Hover or active state for Rocket Orange, intensifying the call to action. |
| Galaxy Violet | #9087ff | `--color-galaxy-violet` | Decorative highlights, accent text, or specific feature differentiation, adding a vibrant, luminous touch. |
| Cosmic Pink | #f866db | `--color-cosmic-pink` | Decorative highlights, accent text, or specific feature differentiation, contributing to the vibrant hero section. |
| Neon Pink | #f739f7 | `--color-neon-pink` | Decorative highlights, accent text, or specific feature differentiation, contributing to the vibrant hero section. |
| Asteroid Yellow | #fbe74 | `--color-asteroid-yellow` | Highlight elements or specific feature markers, providing a bright contrast point. |
| Plasma Green | #22c55 | `--color-plasma-green` | Success states or positive indicators. |
| Electric Blue | #2590f1 | `--color-electric-blue` | Informational highlights or specific link states. |

## Tokens — Typography

### Haffer XH SemiBold

- **Token:** `--font-haffer-xh-semibold`
- **Substitute:** Montserrat
- **Weights:** 400, 600
- **Sizes:** 16px, 18px, 24px, 30px, 48px, 70px, 88px
- **Line heights:** 0.95, 1.00, 1.10, 1.20, 1.50
- **Letter spacing:** -0.48
- **Role:** Used for smaller headings, navigation items, and input text fields, maintaining a structured, condensed feel.

### Haffer XH SemiBold

- **Token:** `--font-haffer-xh-semibold`
- **Substitute:** Montserrat
- **Weights:** 400, 600
- **Sizes:** 16px, 18px, 24px, 30px, 48px, 70px, 88px
- **Line heights:** 0.95, 1.00, 1.10, 1.20, 1.50
- **Letter spacing:** -0.02
- **Role:** Dominant font for all larger headings and display text. Its semi-bold weight at very large sizes (70px, 88px) with tight letter spacing (-2%) creates a powerful, impactful presence that avoids shouting due to its condensed form factor.

### Jersey 10

- **Token:** `--font-jersey-10`
- **Substitute:** Oswald
- **Weights:** 400
- **Sizes:** 70px
- **Line heights:** 0.90
- **Letter spacing:** -1.4
- **Role:** Signature display font, often used in combination with Haffer XH SemiBold for hero headlines. Its unusually tight line height and letter spacing give a distinct, almost monospace-like character to large statements.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px, 18px
- **Line heights:** 1.20, 1.30, 1.40
- **Letter spacing:** -0.02
- **Role:** Used for most body text, links, and supporting details. Its variable weight and spacing ensure legibility across various text densities, providing a comfortable counterpoint to the condensed headlines.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px, 18px
- **Line heights:** 1.20, 1.30, 1.40
- **Letter spacing:** -0.02
- **Role:** Medium weight for Inter, used for emphasizing phrases within body text or for secondary navigation items, adding moderate emphasis.

### CUSTOM;Blender Medium

- **Token:** `--font-custom-blender-medium`
- **Substitute:** Roboto Condensed
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.30
- **Letter spacing:** 0
- **Role:** A distinct custom font blended in for specific body text sections, providing a unique micro-typographic texture compared to Inter.

### Satoshi

- **Token:** `--font-satoshi`
- **Substitute:** Manrope
- **Weights:** 500
- **Sizes:** 16px
- **Line heights:** 1.20
- **Letter spacing:** 0
- **Role:** Another custom font used for specific body text elements, likely for technical labels or UI elements, offering a clean, modern feel.

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** System UI
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Letter spacing:** 0
- **Role:** Fallback and default for minor UI elements, ensuring basic legibility across all platforms.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | — | `--text-caption` |
| body-sm | 14px | 1.3 | -0.168px | `--text-body-sm` |
| body | 16px | 1.4 | -0.08px | `--text-body` |
| subheading | 18px | 1.2 | -0.216px | `--text-subheading` |
| heading | 24px | 1.1 | -0.48px | `--text-heading` |
| heading-lg | 30px | 1.1 | -0.6px | `--text-heading-lg` |
| display | 48px | 1 | -0.96px | `--text-display` |
| display-lg | 70px | 0.9 | -1.4px | `--text-display-lg` |
| display-xl | 88px | 0.95 | -1.76px | `--text-display-xl` |

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
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-103 | 103px | `--spacing-103` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 20px |
| badges | 8px |
| inputs | 100px |
| buttons | 100px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.08) 0px 10px 15px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px, rgba(255, 255, 255, 0.45) 0px 0.5px 0px 0px inset | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 16px |
| elementGap | 10px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Testimonial Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Cookie Consent Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Navigation Link

**Role:** Header navigation items

Text link using 'Ghostly Grey' (#8e8da0), weight 400 (Inter) or 600 (Haffer XH SemiBold) at 16px size. No background; simply a text element. Hover state likely uses 'Stardust White' (#f7f7ff) or 'Snow Drift' (#ffffff).

### Hero Section Headline

**Role:** Prominent page titles

Large text using a combination of 'Haffer XH SemiBold' weight 600 at 88px and 'Jersey 10' weight 400 at 70px. Text color is 'Snow Drift' (#ffffff), with character spacing of -0.02em (-1.4px at 70px, -1.76px at 88px) and a tight line height of 0.90 for Jersey 10 and 0.95 for Haffer XH SemiBold, creating a dense, impactful textual block.

### Feature Card

**Role:** Content container for features or testimonials

Rectangular card with 'Deep Space' (#181824) background, contrasted from the main page background. Features a generous corner radius of `20px` and likely internal padding of 16px to 24px (inferred from spacing tokens). Testimonial cards are on 'Charcoal Surface' (#26253b) and feature text color 'Snow Drift' (#ffffff).

## Do's and Don'ts

### Do

- Use 'Rocket Orange' (#ff4a36) exclusively for primary calls to action, such as 'Sign up for free' buttons, maintaining its high impact across the site.
- Apply `20px` border-radius to all significant content cards and feature blocks, and `100px` for interactive elements like buttons and input fields, to balance visual softness with system precision.
- Employ the 'Deep Space' (#181824) for page backgrounds and 'Charcoal Surface' (#26253b) for elevated content containers to establish a clear visual hierarchy in the dark theme.
- Pair 'Haffer XH SemiBold' (600 weight) with 'Jersey 10' (400 weight) for large headlines, maintaining a -0.02em letter spacing for a signature condensed and bold statement.
- Utilize Inter font family for all body text in weights 400 and 500, with varying line heights (1.2-1.4) and subtle negative letter spacing (-0.02em, -0.012em, -0.005em) to ensure legibility and a refined feel.
- Maintain a comfortable '10px' as the default element spacing, scaling up to '64px' for section gaps, providing ample breathing room between content blocks.

### Don't

- Do not introduce new primary accent colors; restrict all vibrant highlights to the established 'Rocket Orange', 'Galaxy Violet', 'Cosmic Pink', 'Neon Pink', and 'Asteroid Yellow' palette.
- Avoid using multiple different font families for body text; stick to Inter, Blender Medium, and Satoshi as designated to prevent visual inconsistency.
- Do not deviate from the established border radii (`20px` for cards, `100px` for buttons/inputs); arbitrary rounding will disrupt the visual consistency.
- Do not use subtle, low-contrast shadows; only apply the `rgba(0, 0, 0, 0.08) 0px 10px 15px 0px` for clear elevation on dark backgrounds, or the `rgba(0,0,0,.1) 0 1px 1px 0, rgba(0,0,0,.05) 0 2px 4px 0, rgba(255,255,255,.45) 0 .5px 0 0 inset` for more complex UI components.
- Never use line heights greater than 1.5 for any text, especially headlines, to maintain the site's condensed and impactful typographic style.
- Do not use pure black (#000000) for text on a dark background; always prioritize the high-contrast 'Snow Drift' (#ffffff) or 'Stardust White' (#f7f7ff) for readability.
- Avoid full-width content; ensure main content areas are logically contained, implicitly aligning to a grid or maximum width, even if no explicit max-width is declared.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Deep Space | #181824 | Primary page background layer |
| 1 | Charcoal Surface | #26253b | Elevated card backgrounds, navigation panels, interactive elements, creating visible separation from the main page. |

## Elevation

- **Testimonial Card:** `rgba(0, 0, 0, 0.08) 0px 10px 15px 0px`
- **Navigation Bar:** `rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px, rgba(255, 255, 255, 0.45) 0px 0.5px 0px 0px inset`

## Imagery

This site features a blend of product screenshots, abstract gradient backgrounds, and minimal iconography. Product screenshots are typically shown within dark, rounded UI containers, often overlaid on gradient backdrops, emphasizing the application's functionality in context. The abstract graphics are vibrant, evolving gradients (like those in the hero section) that provide a dynamic, futuristic feel without being distracting. Icons are monochrome, often using 'Stardust White' (#f7f7ff) or 'Ghostly Grey' (#8e8da0) on dark surfaces, maintaining a consistent, clean pictogram style. Imagery serves to showcase the product directly or provide decorative atmosphere, sparingly used to balance visual interest with UI focus. Density is moderate, with images playing a primary role in hero sections and feature displays, but giving way to text-dominant layouts in deeper content.

## Layout

The site uses a full-bleed layout for background elements, but content is generally contained within an implicit maximum width, giving a spacious feel without feeling confined. The hero section is full-viewport, featuring a large, centered headline over a dynamic, dark gradient background. Sections alternate between a dark 'Deep Space' (#181824) background and potentially a slightly lighter variant for feature blocks. Content is often presented in a single, centered stack, or in two-column layouts with text on one side and a product image or screenshot on the other, creating a clear visual flow. Testimonials are arranged in a dynamic, potentially uneven grid of cards. The navigation is a fixed top bar on a dark background, with prominent 'Sign In' and 'Sign up for free' actions.

## Similar Brands

- **Linear** — Dark UI with vibrant accent colors (Linear's purple vs Superlist's orange/pink), focus on condensed typography, and generous spacing to highlight content.
- **Raycast** — Dark mode interface with prominent product screenshots, emphasis on productivity tools, and a combination of structured and rounded UI elements.
- **Notion** — Focus on an 'all-in-one workspace' proposition, clean typography for content, and a preference for functional over decorative imagery.
- **Todoist** — Emphasis on task management and productivity with a clean, functional UI, although Todoist typically uses lighter themes, the emphasis on direct function is similar.
- **Craft.do** — Strong emphasis on visual design and typography in a productivity app context, often mixing different font styles for impact.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-space: #181824;
  --color-charcoal-surface: #26253b;
  --color-nebula-gray: #696f81;
  --color-ghostly-grey: #8e8da0;
  --color-snow-drift: #ffffff;
  --color-stardust-white: #f7f7ff;
  --color-comet-tail-violet: #535676;
  --color-rocket-orange: #ff4a36;
  --color-flare-orange: #ff3a26;
  --color-galaxy-violet: #9087ff;
  --color-cosmic-pink: #f866db;
  --color-neon-pink: #f739f7;
  --color-asteroid-yellow: #fbe74;
  --color-plasma-green: #22c55;
  --color-electric-blue: #2590f1;
  --font-haffer-xh-semibold: 'Haffer XH SemiBold', Montserrat;
  --font-haffer-xh-semibold: 'Haffer XH SemiBold', Montserrat;
  --font-jersey-10: 'Jersey 10', Oswald;
  --font-inter: 'Inter', Inter;
  --font-inter: 'Inter', Inter;
  --font-custom-blender-medium: 'CUSTOM;Blender Medium', Roboto Condensed;
  --font-satoshi: 'Satoshi', Manrope;
  --font-sans-serif: 'sans-serif', System UI;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.3;
  --tracking-body-sm: -0.168px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.08px;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.216px;
  --text-heading: 24px;
  --leading-heading: 1.1;
  --tracking-heading: -0.48px;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.6px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: -0.96px;
  --text-display-lg: 70px;
  --leading-display-lg: 0.9;
  --tracking-display-lg: -1.4px;
  --text-display-xl: 88px;
  --leading-display-xl: 0.95;
  --tracking-display-xl: -1.76px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-103: 103px;
  --spacing-150: 150px;
  --spacing-200: 200px;
  --radius-cards: 20px;
  --radius-badges: 8px;
  --radius-inputs: 100px;
  --radius-buttons: 100px;
  --shadow-xl: rgba(0, 0, 0, 0.08) 0px 10px 15px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px, rgba(255, 255, 255, 0.45) 0px 0.5px 0px 0px inset;
  --surface-deep-space: #181824;
  --surface-charcoal-surface: #26253b;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-space: #181824;
  --color-charcoal-surface: #26253b;
  --color-nebula-gray: #696f81;
  --color-ghostly-grey: #8e8da0;
  --color-snow-drift: #ffffff;
  --color-stardust-white: #f7f7ff;
  --color-comet-tail-violet: #535676;
  --color-rocket-orange: #ff4a36;
  --color-flare-orange: #ff3a26;
  --color-galaxy-violet: #9087ff;
  --color-cosmic-pink: #f866db;
  --color-neon-pink: #f739f7;
  --color-asteroid-yellow: #fbe74;
  --color-plasma-green: #22c55;
  --color-electric-blue: #2590f1;
  --font-haffer-xh-semibold: 'Haffer XH SemiBold', Montserrat;
  --font-haffer-xh-semibold: 'Haffer XH SemiBold', Montserrat;
  --font-jersey-10: 'Jersey 10', Oswald;
  --font-inter: 'Inter', Inter;
  --font-inter: 'Inter', Inter;
  --font-custom-blender-medium: 'CUSTOM;Blender Medium', Roboto Condensed;
  --font-satoshi: 'Satoshi', Manrope;
  --font-sans-serif: 'sans-serif', System UI;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.3;
  --tracking-body-sm: -0.168px;
  --text-body: 16px;
  --leading-body: 1.4;
  --tracking-body: -0.08px;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.216px;
  --text-heading: 24px;
  --leading-heading: 1.1;
  --tracking-heading: -0.48px;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.6px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: -0.96px;
  --text-display-lg: 70px;
  --leading-display-lg: 0.9;
  --tracking-display-lg: -1.4px;
  --text-display-xl: 88px;
  --leading-display-xl: 0.95;
  --tracking-display-xl: -1.76px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-103: 103px;
  --spacing-150: 150px;
  --spacing-200: 200px;
  --radius-cards: 20px;
  --radius-badges: 8px;
  --radius-inputs: 100px;
  --radius-buttons: 100px;
  --shadow-xl: rgba(0, 0, 0, 0.08) 0px 10px 15px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px, rgba(255, 255, 255, 0.45) 0px 0.5px 0px 0px inset;
  --surface-deep-space: #181824;
  --surface-charcoal-surface: #26253b;
}
```
