---
version: alpha
name: "15five"
description: "15Five employs a vibrant, confident design language with clean white canvases, softened cards, and a striking violet-to-pink gradient. Typography is a blend of bold, impactful headlines and accessible body text. The system uses a specific 'hero' violet as its primary accent, contrasted with touches of warm orange and pink, creating an energetic yet grounded feel. Components are lightweight with generous rounded corners, emphasizing an approachable and modern presentation."
theme: "light"
industry: "saas"
source_url: "https://www.15five.com"
refero_style_id: "88a00b3e-1c1e-49d3-ae0f-9fbc1f35ad99"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510567812-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510567812-thumb.jpg"
extracted_at: "2026-04-30T00:56:33.928Z"
---

# 15five — Style Reference

> Violet-tinged sunrise on white marble

**Theme:** light

**Industry:** saas

15Five employs a vibrant, confident design language with clean white canvases, softened cards, and a striking violet-to-pink gradient. Typography is a blend of bold, impactful headlines and accessible body text. The system uses a specific 'hero' violet as its primary accent, contrasted with touches of warm orange and pink, creating an energetic yet grounded feel. Components are lightweight with generous rounded corners, emphasizing an approachable and modern presentation.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button backgrounds, default text for dark elements |
| Warm Mist | #fff2e8 | `--color-warm-mist` | Subtle background for secondary cards and elevated surface sections, providing visual separation |
| Violet Shadow | #5e5777 | `--color-violet-shadow` | Muted text, secondary button text, decorative borders, helper text |
| Deep Violet | #2f115b | `--color-deep-violet` | Primary text, bold accents, outlined button borders, key interactive elements |
| Midnight Indigo | #1a0d3f | `--color-midnight-indigo` | Prominent headings and body text, providing high contrast on light backgrounds |
| Accent Violet | #3b1572 | `--color-accent-violet` | Primary action button background fill, active states for interactive elements — a rich, vibrant brand identifier; Prominent background for hero sections and testimonials, establishing a vibrant brand tone |
| Pink Sunset | #ffdacf | `--color-pink-sunset` | Highlight backgrounds, secondary action buttons, gradient accents |
| Fiery Orange | #ff4b11 | `--color-fiery-orange` | Outlined button borders, subtle highlights and decorative accents |

## Tokens — Typography

### Manrope

- **Token:** `--font-manrope`
- **Substitute:** system-ui
- **Weights:** 300, 400, 500, 600, 700
- **Sizes:** 14px, 16px, 18px, 22px, 24px
- **Line heights:** 1.00, 1.33, 1.43, 1.44, 1.50, 1.63, 1.64, 2.57
- **Letter spacing:** 0.0020em (at 14px), 0.3750em (for specific uppercase elements)
- **Role:** Primary sans-serif for all body text, navigation, buttons, and helper content. Its varied weights offer flexibility for hierarchy, maintaining legibility and a contemporary feel across the interface.

### DM Serif Display

- **Token:** `--font-dm-serif-display`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 24px, 40px, 52px, 66px
- **Line heights:** 1.15, 1.20, 1.25, 1.33
- **Letter spacing:** normal
- **Role:** Distinguished serif typeface for prominent headings, creating a sophisticated and editorial impact with its elegant curves and generous scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.43 | 0.002px | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.63 | — | `--text-subheading` |
| heading-sm | 22px | 1.64 | — | `--text-heading-sm` |
| heading | 24px | 1.33 | — | `--text-heading` |
| heading-lg | 40px | 1.25 | — | `--text-heading-lg` |
| display | 66px | 1.15 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-31 | 31px | `--spacing-31` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-63 | 63px | `--spacing-63` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-69 | 69px | `--spacing-69` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-84 | 84px | `--spacing-84` |
| spacing-85 | 85px | `--spacing-85` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-138 | 138px | `--spacing-138` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-152 | 152px | `--spacing-152` |
| spacing-278 | 278px | `--spacing-278` |
| spacing-316 | 316px | `--spacing-316` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| buttons | 68px |
| general | 10px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 12px 30px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1363px |
| sectionGap | 24px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Primary Filled Button

**Role:** Call to action.

Filled with Accent Violet (#3b1572), white text, 68px border-radius, 16px padding on top/bottom, 40px on left/right. Commands attention for key actions.

### Light Outlined Button

**Role:** Secondary action or ghost button.

White background, Deep Violet (#2f115b) text, 68px border-radius, 16px padding on top/bottom, 40px on left/right. Provides a subtle interactive element that doesn't compete with primary actions.

### Subtle Nav Link

**Role:** Navigation or in-page links.

Transparent background, Violet Shadow (#5e5777) text, 16px border-radius, 20px padding. Minimally styled for navigation, with a soft border-radius that hints at interactivity.

### Text Only Link

**Role:** Inline textual links.

Transparent background, Midnight Indigo (#1a0d3f) text, no border-radius or padding. Used for simple text links within body content or lists.

### Information Card (Transparent)

**Role:** Content container for data or features.

Transparent background, 0px border-radius, 0px padding on top/bottom, 20px on left/right. Used for presenting information without strong visual boundaries, allowing content to breathe.

### Data Insight Card

**Role:** Displays data metrics or key insights.

White background, 12px border-radius, no padding. A clean, contained surface for showcasing performance metrics or brief information.

### Highlighted Testimonial Card

**Role:** Prominently features customer testimonials.

Pink Sunset (#ffdacf) background, 16px border-radius, with decorative gradient accents. No internal padding defined, relies on content spacing.

### Shadowed Link Box

**Role:** Interactive link blocks with elevation.

Features a white background, 10px border-radius, and a soft shadow (rgba(0, 0, 0, 0.1) 0px 12px 30px 0px). Used for clickable elements that require a distinct elevated presence.

## Do's and Don'ts

### Do

- Use Midnight Indigo (#1a0d3f) for all main headings and primary body text to ensure high contrast and readability.
- Apply Canvas White (#ffffff) as the default background for all primary page content sections and cards.
- Implement the 68px border-radius for all button elements, including both filled and outlined variants, to maintain a consistent soft, approachable shape.
- Utilize Manrope for all functional typography (buttons, nav, body text) and DM Serif Display for major page headings to leverage their distinct roles.
- Incorporate the Hero Gradient (linear-gradient(90deg, #3b1572 0%, #1a0d3f 100%)) as a background for high-impact sections like hero banners and testimonials.
- Maintain a comfortable density with an element gap of 20px and a section gap of 24px between major content blocks.
- Use Accent Violet (#3b1572) as the primary fill color for active buttons and key interactive elements, drawing immediate attention.

### Don't

- Avoid using multiple border styles or weights for interactive elements; stick to 1px solid for subtle hints and no border for purely textual links.
- Do not introduce new typefaces; rely solely on Manrope and DM Serif Display to preserve typographic consistency.
- Resist using harsh or high-contrast shadows; only apply the soft, diffused shadow (rgba(0, 0, 0, 0.1) 0px 12px 30px 0px) for specific elevated components like link cards.
- Do not deviate from the established border radii; avoid sharp corners or excessively small radii as they contradict the system's approachable aesthetic.
- Refrain from using saturated colors other than Accent Violet, Pink Sunset, or Fiery Orange for UI elements; other vibrant hues are reserved for data visualization or illustrations.
- Do not expand the primary color palette with additional blues, greens, or reds unless they are specifically for semantic status indications (success, error).
- Avoid arbitrary letter-spacing adjustments; adhere to the defined Manrope letter-spacing values or normal for DM Serif Display.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background, base layer. |
| 1 | Warm Mist | #fff2e8 | Secondary background for sections, subtle elevation for content blocks. |
| 2 | Pink Sunset | #ffdacf | Highlight background for interactive elements or featured content like testimonials. |
| 3 | Accent Violet | #3b1572 | Background for primary action buttons, signaling interaction points. |
| 4 | Hero Gradient | #3b1572 | Prominent stylistic background for hero sections and testimonial blocks, providing visual depth and brand emphasis. |

## Elevation

- **Shadowed Link Box:** `rgba(0, 0, 0, 0.1) 0px 12px 30px 0px`

## Imagery

The site predominantly uses clean, product-focused illustrations and data visualizations. Illustrations are often abstract, geometric, and brand-colored, featuring soft gradients. Photography is largely absent, replaced by UI screenshots of the product. Icons are filled, with a consistent stroke weight, and mostly monochromatic or brand-colored. Imagery serves an explanatory and illustrative role, showcasing product features and data outputs rather than decorative atmosphere, contributing to a high-density, text-supported visual experience.

## Layout

The page adheres to a max-width of 1363px, centered for most content, but the initial hero section appears full-bleed with a gradient background. The hero features a large, centered headline and subtext, followed by two prominent call-to-action buttons. Sections below alternate between a white canvas and a subtle Warm Mist (#fff2e8) background, often employing a two-column layout with text on one side and product UI screenshots or data visualizations on the other. A three or four-column card grid is used for feature showcases. Vertical spacing is consistent and comfortable, with a section gap of 24px fostering readability. The navigation is a sticky top bar with a 'Book a Demo' button prominently featured.

## Similar Brands

- **Lattice** — White space, structured layouts, and product interface screenshots mixed with brand-specific color accents.
- **BetterUp** — Uses a limited palette of white and a deep accent color for primary actions, with subtle background gradients.
- **Culture Amp** — Focus on data visualization in cards, soft rounded corners for components, and strong, clear typography on light backgrounds.
- **Brightwheel** — Similar approachable feel with soft rounded shapes, a dominant white canvas, and a vibrant primary accent color for calls to action.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-warm-mist: #fff2e8;
  --color-violet-shadow: #5e5777;
  --color-deep-violet: #2f115b;
  --color-midnight-indigo: #1a0d3f;
  --color-accent-violet: #3b1572;
  --color-pink-sunset: #ffdacf;
  --color-fiery-orange: #ff4b11;
  --font-manrope: 'Manrope', system-ui;
  --font-dm-serif-display: 'DM Serif Display', serif;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --tracking-caption: 0.002px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.63;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.64;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.25;
  --text-display: 66px;
  --leading-display: 1.15;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-34: 34px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-63: 63px;
  --spacing-64: 64px;
  --spacing-69: 69px;
  --spacing-70: 70px;
  --spacing-73: 73px;
  --spacing-84: 84px;
  --spacing-85: 85px;
  --spacing-90: 90px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-138: 138px;
  --spacing-150: 150px;
  --spacing-152: 152px;
  --spacing-278: 278px;
  --spacing-316: 316px;
  --radius-cards: 16px;
  --radius-buttons: 68px;
  --radius-general: 10px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 12px 30px 0px;
  --surface-canvas-white: #ffffff;
  --surface-warm-mist: #fff2e8;
  --surface-pink-sunset: #ffdacf;
  --surface-accent-violet: #3b1572;
  --surface-hero-gradient: #3b1572;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-warm-mist: #fff2e8;
  --color-violet-shadow: #5e5777;
  --color-deep-violet: #2f115b;
  --color-midnight-indigo: #1a0d3f;
  --color-accent-violet: #3b1572;
  --color-pink-sunset: #ffdacf;
  --color-fiery-orange: #ff4b11;
  --font-manrope: 'Manrope', system-ui;
  --font-dm-serif-display: 'DM Serif Display', serif;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --tracking-caption: 0.002px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.63;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.64;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.25;
  --text-display: 66px;
  --leading-display: 1.15;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-34: 34px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-63: 63px;
  --spacing-64: 64px;
  --spacing-69: 69px;
  --spacing-70: 70px;
  --spacing-73: 73px;
  --spacing-84: 84px;
  --spacing-85: 85px;
  --spacing-90: 90px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-138: 138px;
  --spacing-150: 150px;
  --spacing-152: 152px;
  --spacing-278: 278px;
  --spacing-316: 316px;
  --radius-cards: 16px;
  --radius-buttons: 68px;
  --radius-general: 10px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 12px 30px 0px;
  --surface-canvas-white: #ffffff;
  --surface-warm-mist: #fff2e8;
  --surface-pink-sunset: #ffdacf;
  --surface-accent-violet: #3b1572;
  --surface-hero-gradient: #3b1572;
}
```
