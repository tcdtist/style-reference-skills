---
version: alpha
name: "Riverside"
description: "Riverside's aesthetic is a dark-mode canvas punctuated by vibrant purple actions and crisp, clean typography. The interface uses deep, near-black backgrounds as primary surfaces, softened by subtle elevation with faint shadows. Interactive components are intentionally weighty and prominent, contrasting with the overall muted background, while information is delivered with ample whitespace and clear typographic hierarchy."
theme: "dark"
industry: "media"
source_url: "https://riverside.fm"
refero_style_id: "09b5a06b-29dc-4d17-8722-d29bd93010c8"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510059122-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510059122-thumb.jpg"
extracted_at: "2026-04-30T00:48:39.127Z"
---

# Riverside — Style Reference

> Midnight production studio

**Theme:** dark

**Industry:** media

Riverside's aesthetic is a dark-mode canvas punctuated by vibrant purple actions and crisp, clean typography. The interface uses deep, near-black backgrounds as primary surfaces, softened by subtle elevation with faint shadows. Interactive components are intentionally weighty and prominent, contrasting with the overall muted background, while information is delivered with ample whitespace and clear typographic hierarchy.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Obsidian | #1d1d1d | `--color-obsidian` | Primary background, card surfaces, dark text |
| White Canvas | #ffffff | `--color-white-canvas` | Text on dark backgrounds, active states, button fills for secondary actions, light surface areas |
| Smokey White | #f6f6f6 | `--color-smokey-white` | Secondary light background sections, light text on dark accents |
| Carbon Black | #111111 | `--color-carbon-black` | Hero background, prominent dark surfaces |
| Deep Graphite | #000000 | `--color-deep-graphite` | Headings, strong text, dark navigation elements |
| Silver Mist | #bfbfbf | `--color-silver-mist` | Card shadows, muted text, inactive link borders |
| Muted Grey | #d2d2d2 | `--color-muted-grey` | Subtle borders, secondary text in light areas |
| Dark Shale | #383838 | `--color-dark-shale` | Helper text on light backgrounds, subtle icons |
| Pale Ash | #969696 | `--color-pale-ash` | Tertiary text, subtle borders |
| Electric Violet | #9671ff | `--color-electric-violet` | Primary action buttons, interactive elements, brand accent |
| Soft Lavender | #f2eeff | `--color-soft-lavender` | Subtle background for navigation highlights |
| Twilight Purple | #ad98fa | `--color-twilight-purple` | Secondary accent for text and borders |
| Tinted White | #eae3ff | `--color-tinted-white` | Soft section background, alternate surface, and quiet card fill. Do not promote it to the primary CTA color |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui
- **Weights:** 300, 400, 500, 600, 700, 800
- **Sizes:** 8px, 9px, 10px, 11px, 12px, 14px, 16px, 18px, 24px, 30px, 40px, 50px, 56px, 80px
- **Line heights:** 0.71, 0.72, 0.73, 0.75, 0.90, 1.00, 1.04, 1.08, 1.14, 1.16, 1.17, 1.18, 1.21, 1.22, 1.25, 1.27, 1.29, 1.38, 1.43, 1.44, 1.50, 1.57, 1.71, 1.73, 1.80, 2.00, 2.14, 2.50
- **Letter spacing:** -0.0060em
- **Role:** Primary typeface for all text content including headings, body, navigation, and buttons. Its wide range of weights and sizes supports a detailed typographic hierarchy, from small utilitarian text to large, impactful headlines.

### IBM Plex Sans

- **Token:** `--font-ibm-plex-sans`
- **Substitute:** Roboto
- **Weights:** 600
- **Sizes:** 16px
- **Line heights:** 1.50
- **Letter spacing:** normal
- **Role:** Used for specific heading applications, providing a slightly more structured feel than Inter when needed.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | -0.006px | `--text-caption` |
| body | 14px | 1.5 | -0.006px | `--text-body` |
| subheading | 18px | 1.5 | -0.006px | `--text-subheading` |
| heading | 24px | 1.25 | -0.006px | `--text-heading` |
| heading-lg | 40px | 1.18 | -0.006px | `--text-heading-lg` |
| display | 56px | 1.21 | -0.006px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-31 | 31px | `--spacing-31` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-62 | 62px | `--spacing-62` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-84 | 84px | `--spacing-84` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-124 | 124px | `--spacing-124` |
| spacing-133 | 133px | `--spacing-133` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-252 | 252px | `--spacing-252` |

### Border Radius

| Element | Value |
| --- | --- |
| hero | 60px |
| cards | 8px |
| badges | 100px |
| images | 4px |
| buttons | 300px |
| default | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.25) 0px 4px 15px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 43px |
| cardPadding | 12px |
| elementGap | 10px |

## Components

### Primary Call to Action Button

**Role:** Main interactive button

Filled with Electric Violet (#9671ff), White Canvas (#ffffff) text, 300px border radius, 17px vertical and 46px horizontal padding. This button stands out with its vivid color against dark backgrounds.

### Ghost Navigation Button

**Role:** Navigation and secondary actions

Transparent background, Muted Grey (#d2d2d2) text with a slight opacity (rgba(255,255,255,0.8)), 8px vertical and 10px horizontal padding, 0px border radius. This subtle button blends into the navigation.

### Light Secondary Button

**Role:** Alternate call to action on light backgrounds

Filled with White Canvas (#ffffff), Carbon Black (#111111) text, 300px border radius, 17px vertical and 46px horizontal padding. Offers a solid light-background interaction.

### Dark Content Card

**Role:** Container for content sections

Obsidian (#1d1d1d) background, 8px border radius, no shadow. 34px vertical and 32px horizontal padding. Used for grouping related content on the primary dark canvas.

### Subtle Feature Card

**Role:** Feature or showcase card

Semi-transparent background (rgba(255, 255, 255, 0.05)), 8px border-radius, no shadow. Padding of 26px top, 24px right, 34px bottom, 24px left. Creates a soft, almost frosted effect.

### Elevated Content Card

**Role:** Emphasized content or testimonials

Obsidian (#1d1d1d) background, 4.32px border radius, with a subtle shadow (rgba(0, 0, 0, 0.25) 0px 4px 15px 0px). Padding 15px top, 7px horizontal, 11.5px bottom. This variant indicates slight visual hierarchy.

### Light Badge

**Role:** Categorization or tags

White Canvas (#ffffff) background, Obsidian (#1d1d1d) text, 100px border radius for a pill shape, 16px vertical and 24px horizontal padding. Provides clear, contrasting tags.

## Do's and Don'ts

### Do

- Prioritize Electric Violet (#9671ff) for all primary calls to action to maintain interaction consistency.
- Use Obsidian (#1d1d1d) as the default background for most content sections and cards, creating a consistent dark-mode base.
- Apply White Canvas (#ffffff) for all main body text and crucial information on dark backgrounds, ensuring high legibility.
- Utilize Inter font family with its variable weights for all typographic elements, leveraging its versatility for hierarchy.
- Maintain a 300px border-radius on all primary buttons for a distinct, pill-like appearance.
- Incorporate 8px border-radius for card backgrounds and contained elements using Obsidian (#1d1d1d) or Subtle Feature Card styling.
- Implement -0.0060em letter spacing for Inter font wherever applied, creating a compact and modern text feel.

### Don't

- Avoid using bright, highly saturated colors for large background areas; maintain a dominant dark, muted palette.
- Do not introduce new shadow styles beyond rgba(0, 0, 0, 0.25) 0px 4px 15px 0px, maintaining a consistent, subtle elevation effect.
- Refrain from using thin borders or outlines as primary button styles when a clear call to action is needed; prefer the filled Electric Violet (#9671ff) button.
- Avoid using White Canvas (#ffffff) as a primary background for entire sections, reserving it for text or contained components within darker canvases.
- Do not deviate from the established padding and radius values for specific components like buttons and cards to ensure visual consistency.
- Restrict the use of IBM Plex Sans to specified heading contexts; Inter is the primary typeface for general content.
- Do not overuse Soft Lavender or Tinted White; these are subtle accents, not primary interface colors.

## Elevation

- **Elevated Content Card:** `rgba(0, 0, 0, 0.25) 0px 4px 15px 0px`

## Imagery

Imagery primarily consists of tight product crops and professional photography of individuals speaking or presenting, often with a product UI overlay. Images are typically contained within cards with 4px or 8px rounded corners, sometimes with a subtle shadow. The overall treatment is realistic and product-focused, serving to showcase the platform's utility with minimal decorative elements. Icons are filled, monochrome, and typically in White Canvas (#ffffff) against dark backgrounds, providing clear functional indicators.

## Layout

The page uses a full-bleed layout for sections, with content mostly constrained to a centered maximum width (implied, not explicit in data but visible in screenshots). The hero section is full-bleed dark with a prominent, centered headline and a person in the foreground. Subsequent sections alternate between dark and light full-width background bands, featuring two-column layouts with text-left/image-right or centered feature stacks. Content blocks are comfortably spaced with ample vertical rhythm, creating a spacious but focused presentation. Navigation is a sticky top bar with a primary action button on the right.

## Similar Brands

- **Linear** — Dark UI with strong purple accents and highly structured, spacious typography.
- **Figma** — Focus on product-centric imagery within UI, subtle card elevation, and a distinct primary action color.
- **Supabase** — Dominant dark theme for the main interface, contrasted with specific vibrant brand colors for calls to action.
- **Vercel** — Professional dark UI with clean typography and a strong emphasis on content hierarchy and clear interactive elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-obsidian: #1d1d1d;
  --color-white-canvas: #ffffff;
  --color-smokey-white: #f6f6f6;
  --color-carbon-black: #111111;
  --color-deep-graphite: #000000;
  --color-silver-mist: #bfbfbf;
  --color-muted-grey: #d2d2d2;
  --color-dark-shale: #383838;
  --color-pale-ash: #969696;
  --color-electric-violet: #9671ff;
  --color-soft-lavender: #f2eeff;
  --color-twilight-purple: #ad98fa;
  --color-tinted-white: #eae3ff;
  --font-inter: 'Inter', system-ui;
  --font-ibm-plex-sans: 'IBM Plex Sans', Roboto;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: -0.006px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: -0.006px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.006px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -0.006px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.18;
  --tracking-heading-lg: -0.006px;
  --text-display: 56px;
  --leading-display: 1.21;
  --tracking-display: -0.006px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-43: 43px;
  --spacing-46: 46px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-62: 62px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-84: 84px;
  --spacing-100: 100px;
  --spacing-112: 112px;
  --spacing-120: 120px;
  --spacing-124: 124px;
  --spacing-133: 133px;
  --spacing-140: 140px;
  --spacing-252: 252px;
  --radius-hero: 60px;
  --radius-cards: 8px;
  --radius-badges: 100px;
  --radius-images: 4px;
  --radius-buttons: 300px;
  --radius-default: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 4px 15px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-obsidian: #1d1d1d;
  --color-white-canvas: #ffffff;
  --color-smokey-white: #f6f6f6;
  --color-carbon-black: #111111;
  --color-deep-graphite: #000000;
  --color-silver-mist: #bfbfbf;
  --color-muted-grey: #d2d2d2;
  --color-dark-shale: #383838;
  --color-pale-ash: #969696;
  --color-electric-violet: #9671ff;
  --color-soft-lavender: #f2eeff;
  --color-twilight-purple: #ad98fa;
  --color-tinted-white: #eae3ff;
  --font-inter: 'Inter', system-ui;
  --font-ibm-plex-sans: 'IBM Plex Sans', Roboto;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: -0.006px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: -0.006px;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --tracking-subheading: -0.006px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -0.006px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.18;
  --tracking-heading-lg: -0.006px;
  --text-display: 56px;
  --leading-display: 1.21;
  --tracking-display: -0.006px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-43: 43px;
  --spacing-46: 46px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-62: 62px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-84: 84px;
  --spacing-100: 100px;
  --spacing-112: 112px;
  --spacing-120: 120px;
  --spacing-124: 124px;
  --spacing-133: 133px;
  --spacing-140: 140px;
  --spacing-252: 252px;
  --radius-hero: 60px;
  --radius-cards: 8px;
  --radius-badges: 100px;
  --radius-images: 4px;
  --radius-buttons: 300px;
  --radius-default: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 4px 15px 0px;
}
```
