---
version: alpha
name: "Kraken"
description: "This design system projects a technically forward and secure image, achieved through a meticulously balanced palette of near-achromatic grays and subtle purple accents. The key visual identity is driven by the custom 'Kraken-Product' and 'Kraken-Brand' fonts, particularly their application with precise, tight letter-spacing for headlines, conveying modern authority. Controlled use of rounded corners (8-12px for cards and buttons, 9999px for small indicators) softens the sharp, data-driven aesthetic without compromising precision, like a high-end electronic device. Strategic use of a vibrant violet (#7132f5) acts as a high-contrast indicator, drawing immediate attention to interactive elements, similar to a status LED on a piece of financial hardware."
theme: "light"
industry: "crypto"
source_url: "https://kraken.com"
refero_style_id: "14389660-81ff-4ca0-957f-b0dcc8fbe120"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924218656-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924218656-thumb.jpg"
extracted_at: "2026-04-11T16:17:21.875Z"
---

# Kraken — Style Reference

> Regulated purple circuit board. Precise, interconnected components glowing with strategic violet light.

**Theme:** light

**Industry:** crypto

This design system projects a technically forward and secure image, achieved through a meticulously balanced palette of near-achromatic grays and subtle purple accents. The key visual identity is driven by the custom 'Kraken-Product' and 'Kraken-Brand' fonts, particularly their application with precise, tight letter-spacing for headlines, conveying modern authority. Controlled use of rounded corners (8-12px for cards and buttons, 9999px for small indicators) softens the sharp, data-driven aesthetic without compromising precision, like a high-end electronic device. Strategic use of a vibrant violet (#7132f5) acts as a high-contrast indicator, drawing immediate attention to interactive elements, similar to a status LED on a piece of financial hardware.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #101114 | `--color-midnight-ink` | Most primary text, high-contrast UI elements, and essential information. |
| Graphite | #686b82 | `--color-graphite` | Secondary text, subtle borders, and less prominent UI elements; provides a softer contrast. |
| Pure White | #ffffff | `--color-pure-white` | Page backgrounds, card surfaces, and text on dark backgrounds. |
| Whisper Gray | #f6f5f9 | `--color-whisper-gray` | Secondary section backgrounds, providing a subtle visual separation without strong contrast. |
| Mist | #d4d4dc | `--color-mist` | Divider lines and disabled states, offering a very light boundary. |
| Kraken Violet | #7132f5 | `--color-kraken-violet` | Primary brand accent, interactive elements like buttons, navigation highlights, and key icons — signifies action and brand identity. |
| Lavender Mist | #e4dcf9 | `--color-lavender-mist` | Subtle background for active navigation items or accented buttons, creates a softer touchpoint than the solid violet. |
| Success Green | #026b3f | `--color-success-green` | Indicators for positive status, such as successful transactions or positive price changes. |
| Alert Red | #d11d45 | `--color-alert-red` | Indicators for negative status or warnings, such as error messages or negative price changes. |
| Deep Space Purple | #8453e6 | `--color-deep-space-purple` | Background for bold, immersive gradients. Dominant color extracted from the provided CSS gradient for visual consistency. |

## Tokens — Typography

### Kraken-Product

- **Token:** `--font-kraken-product`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 10px, 12px, 14px, 16px
- **Line heights:** 1.00, 1.33, 1.38, 1.40, 1.43, 1.71
- **Role:** Body copy, navigation, badges, and smaller UI elements. Its clean, utilitarian nature underpins all informational text.

### Kraken-Brand

- **Token:** `--font-kraken-brand`
- **Substitute:** Space Grotesk
- **Weights:** 400, 700
- **Sizes:** 20px, 24px, 36px, 48px
- **Line heights:** 1.17, 1.22, 1.33, 1.40
- **Letter spacing:** -0.0210em, -0.0140em
- **Role:** Headlines and prominent display text. The distinctive tight letter spacing (-0.021em for larger sizes, -0.014em for smaller) is a signature element that makes headings feel precise and modern without being overtly decorative.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.71 | — | `--text-caption` |
| body | 14px | 1.4 | — | `--text-body` |
| body-lg | 16px | 1.38 | — | `--text-body-lg` |
| subheading | 20px | 1.4 | -0.42px | `--text-subheading` |
| heading | 24px | 1.33 | -0.34px | `--text-heading` |
| heading-lg | 36px | 1.22 | -0.76px | `--text-heading-lg` |
| display | 48px | 1.17 | -1px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-39 | 39px | `--spacing-39` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-47 | 47px | `--spacing-47` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-126 | 126px | `--spacing-126` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| pills | 9999px |
| badges | 6px |
| buttons | 8-12px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.03) 0px 4px 24px 0px | `--shadow-xl` |
| xl-2 | rgba(16, 24, 40, 0.04) 0px 1px 4px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 12-16px |
| elementGap | 4-16px |

## Components

### Stat Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Crypto Portfolio Tab Selector with Price Rows

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Email Sign Up Form

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Navigation Link - Default

**Role:** Primary navigation links in header

Color: Midnight Ink (#101114), font and weight: Kraken-Product 400, padding: 20px vertical, 10px horizontal. No border, no radius. Interacts with Kraken Violet on hover/active via a bottom border.

### Navigation Link - Ghost Secondary

**Role:** Secondary navigation items within lists or filters

Color: Graphite (#686b82), font and weight: Kraken-Product 500. Padding: 8px vertical, 12px horizontal. Radius: 10px. Transparent background.

### Primary Action Button

**Role:** Key call-to-action buttons

Background color: Kraken Violet (#7132f5), text color: Pure White (#ffffff), Kraken-Product 500, font size 14px. Radius: 8-12px. Padding 12-16px horizontal, 8-10px vertical.

### Accent Tag Button

**Role:** Small interactive tags or filters

Background color: Lavender Mist (#e4dcf9), text color: Kraken Violet (#7132f5), Kraken-Product 500. Radius: 12px. Padding 8px all sides.

### Information Card

**Role:** Displaying informational blocks or articles

Background color: Pure White (#ffffff), border radius: 8px. Box shadow: rgba(0, 0, 0, 0.03) 0px 4px 24px 0px. Padding: 12px vertical, 16px horizontal.

### Success Badge

**Role:** Highlighting positive metrics or status

Background color: rgba(20, 158, 97, 0.16), text color: Success Green (#026b3f), Kraken-Product 400. Border radius: 6px. Padding: 1px vertical, 4px horizontal. Tight structure for showing compact, positive statistics.

### Email Input Field

**Role:** User input for forms

Transparent background, color: Midnight Ink (#101114), Kraken-Product 400. Border color: Mist (#767676). Underlined style with no border radius. Placeholder text is Graphite (#686b82).

## Do's and Don'ts

### Do

- Use Kraken Violet (#7132f5) exclusively for primary calls to action, active states, and critical brand accents to maintain its strong signaling power.
- Apply Kraken-Brand font with specific negative letter-spacing for all headlines (e.g., -0.021em at 48px, -0.014em at 24px) to achieve the signature precise, modern feel.
- Maintain a clear visual hierarchy by limiting shadows to Information Cards (rgba(0, 0, 0, 0.03) 0px 4px 24px 0px) and a minimal effect for elevated buttons (rgba(16, 24, 40, 0.04) 0px 1px 4px 0px).
- Employ an 8px border radius for all primary cards and buttons, using 9999px for small pill-shaped labels or indicators to create a consistent soft yet defined component shape.
- Ensure generous internal padding within components using the established spacing tokens (e.g., 12-16px for card padding, 8-12px for button padding) to prevent a cramped feel and promote readability.
- Utilize Whisper Gray (#f6f5f9) for section backgrounds that require subtle separation from Pure White (#ffffff) without creating stark visual breaks.

### Don't

- Do not introduce new saturated primary colors; adhere strictly to Kraken Violet as the sole chromatic brand accent.
- Avoid using drop shadows on elements other than specified cards and buttons, as this dilutes the subtle elevation strategy.
- Do not deviate from the defined Kraken-Brand and Kraken-Product font families or their specified weights and letter-spacing for text, as they are central to the brand's typographic identity.
- Do not use highly rounded corners (e.g. 20px, 16px) for cards or primary buttons; maintain the 8-12px range for a consistent, precise aesthetic.
- Never use Pure White (#ffffff) as text on light backgrounds; always ensure sufficient contrast with Midnight Ink (#101114) or Graphite (#686b82) for readability.

## Elevation

- **Information Card:** `rgba(0, 0, 0, 0.03) 0px 4px 24px 0px`
- **Button/UI Element subtle hover:** `rgba(16, 24, 40, 0.04) 0px 1px 4px 0px`

## Imagery

This design primarily uses abstract, branded illustrations and product screenshots. Illustrations feature geometric forms, often with subtle gradients in brand violet or muted cool tones, and serve decorative or conceptual roles. Product screenshots of the mobile app are rendered on a modern smartphone, demonstrating the UI in context, always in a pristine, 'hero' position. Icons are minimalist and outlined, typically in Midnight Ink or Graphite, occasionally filled in Kraken Violet for active states. Imagery is either full-bleed for impactful hero sections (like the mobile app screenshot) or contained within cards and sections, with soft 8px rounded corners to integrate with the UI. The density is moderate; imagery supports content rather than dominating it, providing visual anchor points in a text-rich layout.

## Layout

The site employs a max-width contained layout, typically centered, though the hero section often utilizes a full-bleed background. The hero pattern features a prominent headline and call-to-action on the left, balanced by a large product screenshot (mobile app) on the right. Content sections generally follow a consistent vertical rhythm, often alternating between a main content area and a slightly differentiated background color like Whisper Gray. Featured information and statistics are presented in clear, gridded layouts, such as 3-column card grids for articles or detailed feature lists. Navigation is handled by a sticky top bar, featuring primary links and user actions on the right. The overall density is balanced, allowing breathing room between sections while maintaining a structured, information-dense display.

## Similar Brands

- **Coinbase** — Shares a professional, modern cryptocurrency platform aesthetic with clean layouts, systematic use of white space, and a measured application of a single vibrant accent color against a neutral palette.
- **Binance** — Uses a similar data-dense UI with a focus on clear information presentation, distinctive typography for headlines, and a functional approach to color with a primary brand accent.
- **Revolut** — Employs a clean, high-tech financial UI, often pairing subtle gray backgrounds with a distinct brand color to highlight interactive elements and important information. Emphasizes modern, condensed typography.
- **Stripe** — Features a very precise, almost 'designed by engineers' aesthetic, with strict typographic scales, carefully controlled color palettes, and an emphasis on functionality over embellishment, similar to Kraken's minimal and exact approach.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #101114;
  --color-graphite: #686b82;
  --color-pure-white: #ffffff;
  --color-whisper-gray: #f6f5f9;
  --color-mist: #d4d4dc;
  --color-kraken-violet: #7132f5;
  --color-lavender-mist: #e4dcf9;
  --color-success-green: #026b3f;
  --color-alert-red: #d11d45;
  --color-deep-space-purple: #8453e6;
  --font-kraken-product: 'Kraken-Product', Inter;
  --font-kraken-brand: 'Kraken-Brand', Space Grotesk;
  --text-caption: 10px;
  --leading-caption: 1.71;
  --text-body: 14px;
  --leading-body: 1.4;
  --text-body-lg: 16px;
  --leading-body-lg: 1.38;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.42px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.34px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.22;
  --tracking-heading-lg: -0.76px;
  --text-display: 48px;
  --leading-display: 1.17;
  --tracking-display: -1px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-36: 36px;
  --spacing-39: 39px;
  --spacing-40: 40px;
  --spacing-47: 47px;
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-126: 126px;
  --radius-cards: 8px;
  --radius-pills: 9999px;
  --radius-badges: 6px;
  --radius-buttons: 8-12px;
  --shadow-xl: rgba(0, 0, 0, 0.03) 0px 4px 24px 0px;
  --shadow-xl-2: rgba(16, 24, 40, 0.04) 0px 1px 4px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #101114;
  --color-graphite: #686b82;
  --color-pure-white: #ffffff;
  --color-whisper-gray: #f6f5f9;
  --color-mist: #d4d4dc;
  --color-kraken-violet: #7132f5;
  --color-lavender-mist: #e4dcf9;
  --color-success-green: #026b3f;
  --color-alert-red: #d11d45;
  --color-deep-space-purple: #8453e6;
  --font-kraken-product: 'Kraken-Product', Inter;
  --font-kraken-brand: 'Kraken-Brand', Space Grotesk;
  --text-caption: 10px;
  --leading-caption: 1.71;
  --text-body: 14px;
  --leading-body: 1.4;
  --text-body-lg: 16px;
  --leading-body-lg: 1.38;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.42px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.34px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.22;
  --tracking-heading-lg: -0.76px;
  --text-display: 48px;
  --leading-display: 1.17;
  --tracking-display: -1px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-36: 36px;
  --spacing-39: 39px;
  --spacing-40: 40px;
  --spacing-47: 47px;
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-126: 126px;
  --radius-cards: 8px;
  --radius-pills: 9999px;
  --radius-badges: 6px;
  --radius-buttons: 8-12px;
  --shadow-xl: rgba(0, 0, 0, 0.03) 0px 4px 24px 0px;
  --shadow-xl-2: rgba(16, 24, 40, 0.04) 0px 1px 4px 0px;
}
```
