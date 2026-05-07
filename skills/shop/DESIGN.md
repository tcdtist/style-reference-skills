---
version: alpha
name: "Shop"
description: "Shop's design system evokes a digital boutique atmosphere: clean, spacious white surfaces present product cards and information with minimal distraction allowing the content to breathe. A distinctive vivid violet acts as a signature accent, punctuating interactive elements and branding. Typography is compact and precise, maintaining a high information density without feeling cramped, while subtle shadows give elements a soft lift."
theme: "light"
industry: "ecommerce"
source_url: "https://shop.app"
refero_style_id: "4fa67bd1-f01d-454a-b522-4a0359ff9815"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510542013-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510542013-thumb.jpg"
extracted_at: "2026-04-30T00:56:22.307Z"
---

# Shop — Style Reference

> Digital boutique showcase

**Theme:** light

**Industry:** ecommerce

Shop's design system evokes a digital boutique atmosphere: clean, spacious white surfaces present product cards and information with minimal distraction allowing the content to breathe. A distinctive vivid violet acts as a signature accent, punctuating interactive elements and branding. Typography is compact and precise, maintaining a high information density without feeling cramped, while subtle shadows give elements a soft lift.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas | #ffffff | `--color-canvas` | Page backgrounds, card surfaces, ghost button backgrounds |
| Ink Black | #000000 | `--color-ink-black` | Primary text, strong borders, icons |
| Subtle Gray | #ebebeb | `--color-subtle-gray` | Hairline borders, subtle dividers, inactive states |
| Muted Text | #707070 | `--color-muted-text` | Secondary text, link text, navigation items |
| Soft Gray | #c9cbcc | `--color-soft-gray` | Loader text, tertiary informational text, placeholder text |
| Placeholder Text | #7b7b7b | `--color-placeholder-text` | Placeholder text in input fields |
| Shop Violet | #5433eb | `--color-shop-violet` | Primary action backgrounds, interactive icons, selected states, brand logo |
| Violet Shadow | #c0b5f3 | `--color-violet-shadow` | Violet supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |

## Tokens — Typography

### GTStandard-MRegular

- **Token:** `--font-gtstandard-mregular`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 9px, 11px, 12px, 14px, 16px
- **Line heights:** 1.29, 1.33, 1.38
- **Letter spacing:** -0.0580em (9px), -0.0440em (11px), -0.0310em (12px), -0.0170em (14px), -0.0140em (16px)
- **Role:** Body text, card descriptions, general UI labels – a workhorse sans-serif with subtle compact tracking that creates a precise, information-dense feel.

### GTStandard-MMedium

- **Token:** `--font-gtstandard-mmedium`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 11px, 12px
- **Line heights:** 1.33
- **Letter spacing:** -0.0180em (11px), -0.0170em (12px)
- **Role:** Used for compact UI elements and icons where slightly increased emphasis is needed without increasing weight.

### Shopify Sans

- **Token:** `--font-shopify-sans`
- **Substitute:** Poppins
- **Weights:** 400, 700
- **Sizes:** 10px, 14px
- **Line heights:** 1.20, 1.57, 1.71
- **Letter spacing:** -0.0230em
- **Role:** Accent text for banners and links, and primary brand typography. Its unique letterforms give a distinct brand voice.

### Shopify Sans

- **Token:** `--font-shopify-sans`
- **Substitute:** Poppins
- **Weights:** 400, 700
- **Sizes:** 10px, 14px
- **Line heights:** 1.20, 1.57, 1.71
- **Letter spacing:** -0.0230em
- **Role:** Bold variant for Shopify Sans, used specifically for the 'Shop' logo mark and other brand-critical emphasis.

### GTStandard-MSemibold

- **Token:** `--font-gtstandard-msemibold`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.33
- **Letter spacing:** -0.0170em
- **Role:** Used for specific body text elements requiring clear distinction, such as bolded links or section titles, without a heavy visual presence.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.33 | — | `--text-caption` |
| body-sm | 12px | 1.33 | — | `--text-body-sm` |
| body | 14px | 1.33 | — | `--text-body` |
| body-lg | 16px | 1.33 | — | `--text-body-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-136 | 136px | `--spacing-136` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 11.4046px |
| large | 28px |
| other | 8px |
| inputs | 1e+07px |
| buttons | 22.8092px |
| display | 32px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(69, 36, 219, 0.34) 0px 4px 24px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Ghost Button

**Role:** Secondary action or navigational link.

Transparent background, Ink Black text, 9999px border-radius, 4px padding in all directions. No visible border unless specified by context.

### Rounded White Button

**Role:** General utility button, often found in modals or forms.

White background, Ink Black text, a Subtle Gray border. Radius is 22.8092px, with 11.4046px padding on all sides. Features a soft Violet Shadow.

### Pill Button

**Role:** Prominent action or filter button.

White background, Ink Black text, 30px border-radius, with a 2px vertical and 16px horizontal padding. Borders are transparent white for a ghost effect on light backgrounds.

### Flat Square Button

**Role:** Icon-only button or small inline action.

Transparent background, Ink Black text, 0px border-radius, 12px padding on all sides. Functionally a text button with a larger hit area.

### Product Card

**Role:** Displays individual product items.

Transparent background, 0px border-radius, no shadow or padding by default. Visual separation achieved through image cropping and underlying shadow effects from parent containers.

### Search Input

**Role:** Primary search functionality.

Transparent background, Ink Black text, 1e+07px (pill shape) border radius. 4px vertical padding, 48px right padding, 20px left padding. Suggests a long, rounded search bar.

### Pill Search Submit Button

**Role:** Submit button for the search input.

Uses Shop Violet as background, white icon. Part of the search input field. Padding matches the overall input field's height.

## Do's and Don'ts

### Do

- Use Canvas (#ffffff) sparingly as a primary action background, preferring Shop Violet (#5433eb) for true calls to action to maintain brand distinction.
- Apply GTStandard-MRegular for all main body content and instructional text, utilizing the specified letter-spacing for each size to maintain compact readability.
- Employ the 11.4046px radius for product image containers within cards to provide a soft-edged visual.
- Ensure interactive elements such as buttons and form fields primarily use the 22.8092px or 1e+07px (pill shape) border radii for consistency.
- Maintain an elementGap of 8px between closely related UI components to ensure comfortable spacing within compact layouts.
- Utilize Muted Text (#707070) for descriptive labels and secondary information, reserving Ink Black (#000000) for primary headlines and critical text.
- Apply the Violet Shadow (rgba(69, 36, 219, 0.34) 0px 4px 24px 0px) to interactive and elevated components, especially buttons, to provide distinct depth.

### Don't

- Do not use generic system fonts; always map to the specified GTStandard or Shopify Sans families or their substitutes.
- Avoid using Ink Black (#000000) as a prominent background color; it is reserved for text, borders, and accents.
- Do not deviate from the established letter-spacing values from GTStandard-MRegular typographic scale; they are critical for the brand’s compact text aesthetic.
- Do not introduce new border radii beyond the defined set (8px, 11.4046px, 17.1064px, 22.8092px, 28px, 32px, 9999px) to maintain a consistent visual language.
- Do not use highly saturated colors other than Shop Violet (#5433eb); the system relies on a monochrome base with one distinct accent.
- Avoid large, impactful hero images; imagery should be contained within cards or product visuals.
- Do not use hard, sharp shadows; all elevation should be achieved using the soft, diffused Violet Shadow.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Background | #ffffff | Primary page background layer, forms the foundational white space. |

## Elevation

- **Rounded White Button:** `rgba(69, 36, 219, 0.34) 0px 4px 24px 0px`

## Imagery

This system primarily uses product-focused photography and minimal, abstract graphics. Photography is typically studio-shot, with products isolated on white or light backgrounds, often with soft, diffused lighting. Imagery in cards is contained, with a soft 11.4046px border radius, and often appears to float with a subtle shadow. Icons are monochromatic, typically Ink Black filled or outlined, with Shop Violet used for active states or branding. Imagery serves to showcase products and provide visual cues rather than create an overarching atmosphere.

## Layout

The page maintains a centered, contained layout, likely with a maximum width, creating ample white space around content. The hero section features a prominent brand logo ('shop') and a central search bar. Product displays are arranged in a dynamic, slightly overlapping grid of rounded cards, giving a curated, editorial feel rather than a rigid structure. A left-hand persistent navigation sidebar uses small, monochromatic icons. Sections are visually distinct through large vertical spacing rather than explicit dividers.

## Similar Brands

- **Glossier** — Minimalist white backgrounds, strong accent color for branding, soft curves and light shadows on product displays.
- **Stripe** — Clean white interfaces, compact sans-serif typography, and singular, vibrant accent colors for key interactive elements.
- **Apple (e-commerce)** — Product-focused imagery against clean white spaces, subtle elevation on cards, and a sophisticated, restrained typographic system.
- **Canva** — Clean, spacious layouts, a strong brand color used for primary actions, and clear typographic hierarchy on a light canvas.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas: #ffffff;
  --color-ink-black: #000000;
  --color-subtle-gray: #ebebeb;
  --color-muted-text: #707070;
  --color-soft-gray: #c9cbcc;
  --color-placeholder-text: #7b7b7b;
  --color-shop-violet: #5433eb;
  --color-violet-shadow: #c0b5f3;
  --font-gtstandard-mregular: 'GTStandard-MRegular', Inter;
  --font-gtstandard-mmedium: 'GTStandard-MMedium', Inter;
  --font-shopify-sans: 'Shopify Sans', Poppins;
  --font-shopify-sans: 'Shopify Sans', Poppins;
  --font-gtstandard-msemibold: 'GTStandard-MSemibold', Inter;
  --text-caption: 11px;
  --leading-caption: 1.33;
  --text-body-sm: 12px;
  --leading-body-sm: 1.33;
  --text-body: 14px;
  --leading-body: 1.33;
  --text-body-lg: 16px;
  --leading-body-lg: 1.33;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-136: 136px;
  --radius-cards: 11.4046px;
  --radius-large: 28px;
  --radius-other: 8px;
  --radius-inputs: 1e+07px;
  --radius-buttons: 22.8092px;
  --radius-display: 32px;
  --shadow-xl: rgba(69, 36, 219, 0.34) 0px 4px 24px 0px;
  --surface-canvas-background: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas: #ffffff;
  --color-ink-black: #000000;
  --color-subtle-gray: #ebebeb;
  --color-muted-text: #707070;
  --color-soft-gray: #c9cbcc;
  --color-placeholder-text: #7b7b7b;
  --color-shop-violet: #5433eb;
  --color-violet-shadow: #c0b5f3;
  --font-gtstandard-mregular: 'GTStandard-MRegular', Inter;
  --font-gtstandard-mmedium: 'GTStandard-MMedium', Inter;
  --font-shopify-sans: 'Shopify Sans', Poppins;
  --font-shopify-sans: 'Shopify Sans', Poppins;
  --font-gtstandard-msemibold: 'GTStandard-MSemibold', Inter;
  --text-caption: 11px;
  --leading-caption: 1.33;
  --text-body-sm: 12px;
  --leading-body-sm: 1.33;
  --text-body: 14px;
  --leading-body: 1.33;
  --text-body-lg: 16px;
  --leading-body-lg: 1.33;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-136: 136px;
  --radius-cards: 11.4046px;
  --radius-large: 28px;
  --radius-other: 8px;
  --radius-inputs: 1e+07px;
  --radius-buttons: 22.8092px;
  --radius-display: 32px;
  --shadow-xl: rgba(69, 36, 219, 0.34) 0px 4px 24px 0px;
  --surface-canvas-background: #ffffff;
}
```
