---
version: alpha
name: "Clyde"
description: "Clyde deploys a dark, atmospheric interface punctuated by subtle gradients and an emphasis on dimensional product rendering. The design system uses sparse, highly contrasted typography with a blend of classic serif and modern grotesk fonts, creating a 'luxury tech' feel. Surfaces are dark, with elements softly lit by internal shadows and occasional, vibrant iridescent gradients. The overall density is comfortable, providing generous breathing room for content."
theme: "dark"
industry: "saas"
source_url: "https://joinclyde.com"
refero_style_id: "39098e34-b911-4ad3-bcb5-ee80a392cd95"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514052561-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514052561-thumb.jpg"
extracted_at: "2026-04-30T01:54:33.410Z"
---

# Clyde — Style Reference

> Iridescent gradients on obsidian glass

**Theme:** dark

**Industry:** saas

Clyde deploys a dark, atmospheric interface punctuated by subtle gradients and an emphasis on dimensional product rendering. The design system uses sparse, highly contrasted typography with a blend of classic serif and modern grotesk fonts, creating a 'luxury tech' feel. Surfaces are dark, with elements softly lit by internal shadows and occasional, vibrant iridescent gradients. The overall density is comfortable, providing generous breathing room for content.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight | #000000 | `--color-midnight` | Page background, primary text on light surfaces, icon fills, strong borders |
| Ghost Ash | #f6f6f4 | `--color-ghost-ash` | Primary text on dark backgrounds, ghost button text, accent borders, light surface elements |
| Slate | #7d7d7d | `--color-slate` | Secondary background surfaces, ghost button backgrounds, muted text |
| White Smoke | #ffffff | `--color-white-smoke` | Subtle inset shadows, light accents |
| Dark Charcoal | #1a1a1a | `--color-dark-charcoal` | Subtle dark borders |
| Iridescent Glow | #ff8400 | `--color-iridescent-glow` | Decorative gradient accent, hero product highlighting; Decorative gradient accent, hero product highlighting with vertical flow |

## Tokens — Typography

### Recoleta

- **Token:** `--font-recoleta`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 36px, 47px, 61px, 80px, 125px
- **Line heights:** 1.00, 1.10
- **Letter spacing:** -0.0300em at 125px, -0.0200em at 80px, -0.0100em at 36px
- **OpenType features:** "clig", "liga"
- **Role:** Display headlines and page titles — the large, highly tracked text creates a distinct, sophisticated visual statement.

### Oldschool Grotesk

- **Token:** `--font-oldschool-grotesk`
- **Substitute:** Inter
- **Weights:** 300, 400
- **Sizes:** 15px, 16px, 21px, 80px, 138px
- **Line heights:** 1.00, 1.30, 1.40, 1.60
- **Letter spacing:** -0.0300em at 138px, -0.0200em at 80px, 0.0100em at 15px
- **OpenType features:** "clig", "liga"
- **Role:** Body text, subheadings, and UI elements — its subtle tracking and modern sans-serif form balance the Recoleta headlines, providing clear readability.

### Times

- **Token:** `--font-times`
- **Substitute:** Times New Roman
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20, 1.25
- **Letter spacing:** normal
- **OpenType features:** "clig", "liga"
- **Role:** System fallback for various UI elements where a classic serif provides visual texture.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 15px | 1.6 | 0.15px | `--text-body-sm` |
| subheading | 21px | 1.4 | 0.21px | `--text-subheading` |
| heading | 36px | 1.1 | -0.36px | `--text-heading` |
| heading-lg | 47px | 1.1 | -0.94px | `--text-heading-lg` |
| display | 61px | 1.1 | -1.22px | `--text-display` |
| display-lg | 80px | 1 | -1.6px | `--text-display-lg` |
| display-xl | 125px | 1 | -3.75px | `--text-display-xl` |
| display-xxl | 138px | 1 | -4.14px | `--text-display-xxl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-92 | 92px | `--spacing-92` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-114 | 114px | `--spacing-114` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-250 | 250px | `--spacing-250` |
| spacing-261 | 261px | `--spacing-261` |
| spacing-278 | 278px | `--spacing-278` |
| spacing-300 | 300px | `--spacing-300` |
| spacing-320 | 320px | `--spacing-320` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| links | 12px |
| inputs | 4px |
| buttons | 100px |
| largeElements | 38px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 50px |
| cardPadding | 22px |
| elementGap | 20px |

## Components

### Ghost Header Button

**Role:** Navigation and secondary actions

Text in Ghost Ash (#f6f6f4) on a transparent background, with no border and 0px radius. Used for discreet navigation items.

### Pill Button

**Role:** Primary Call to Action

Background in Slate (#7d7d7d) with Ghost Ash (#f6f6f4) text. Has a 100px border-radius, creating a pill shape. Padding is generous at 22px all around, making it a prominent interaction point.

### Feature Card

**Role:** Content container for features or case studies

Transparent background with a subtle inset shadow (rgba(255, 255, 255, 0.25) 0px 0.636826px 3.82096px 0px inset). Rounded corners of 16px. Content padding is 10px.

### Large Radius Card

**Role:** Prominent content blocks

Similar to Feature Card but with a larger 40px border-radius and slightly different boxShadow. No internal padding specified, implying full-bleed content.

### Inline Text Link

**Role:** Linked text within content

Text color in Ghost Ash (#f6f6f4) on a transparent background, with 0px radius. No discernible padding, appears as simple underlined or distinct text.

### Announcement Bar Link

**Role:** High-visibility information link

Transparent background with text in Ghost Ash (#f6f6f4), appearing on the Midnight background. Text likely uses a smaller font size.

## Do's and Don'ts

### Do

- Use Midnight (#000000) for all page backgrounds to maintain atmospheric depth.
- Apply Recoleta for all primary headlines, leveraging its unique tracking values for distinct visual impact.
- Implement 100px border-radius for all primary buttons to achieve a soft, pill-shaped aesthetic.
- Employ the Iridescent Glow gradient (linear-gradient(90deg, #feed7a, #ff8400, #df91f7)) for any elements requiring unique visual emphasis or product highlights.
- Ensure Ghost Ash (#f6f6f4) is the default text color on dark backgrounds, providing maximum contrast and legibility.
- Maintain generous spacing with a base unit of 4px and elemental gaps around 20px, fostering a comfortable content density.

### Don't

- Avoid harsh, solid borders or backgrounds, except for functional elements that require clear separation.
- Do not use highly saturated colors for text except for specific accent elements; stick to Ghost Ash (#f6f6f4) and Midnight (#000000) for content.
- Do not introduce sharp corners or small radii on interactive elements; favor the 16px and 100px radii for organic, approachable shapes.
- Avoid generic system fonts for any primary heading or body text; always use Recoleta or Oldschool Grotesk.
- Do not use explicit drop shadows for elevation; rely on subtle inset shadows (rgba(255, 255, 255, 0.25) 0px 0.636826px 3.82096px 0px inset) for depth on dark surfaces.
- Do not introduce competing gradients; the Iridescent Glow is the signature gradient.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Midnight Canvas | #000000 | Dominant page background, providing a deep, dark atmospheric base. |
| 1 | Slate Module | #7d7d7d | Secondary background for cards and ghost buttons, offering a slightly lighter, distinct surface within the dark theme. |

## Imagery

The site utilizes 3D abstract graphics with an iridescent, glowing quality, serving as decorative atmosphere rather than direct content. These are often full-bleed backgrounds or large, contained elements. Product visuals are crisp and dimensional, appearing either isolated against the dark backdrop or within simulated screen interfaces, demonstrating a clear focus on showcasing objects with a realistic, high-fidelity render. Icons are minimal, outlined, and monochromatic, primarily in Ghost Ash (#f6f6f4). Imagery density is moderate; illustrative elements occupy significant visual space but are balanced with generous typography.

## Layout

The page primarily employs a full-bleed layout on a Midnight (#000000) canvas. The hero section features a centered, large Recoleta headline over an abstract 3D iridescent background. Main content sections alternate between full-width blocks and content contained within fluid sections that appear centered. A common pattern is a two-column layout with large typography on one side and a product visual or smaller text block on the other, occasionally reversing. Feature lists utilize a grid of card-like elements. Navigation is a minimalist top bar, generally un-sticky, with ghost buttons and a pill-shaped primary action.

## Similar Brands

- **Framer** — Similar use of dark backgrounds with contrasting light typography and abstract glowing shapes to highlight content.
- **Linear** — Employs an elegant dark-mode UI with a restrained color palette, subtle elevation, and a focus on crisp typography.
- **Apple (product pages)** — Showcases products with dimensional renders against dark, minimal backgrounds, emphasizing the object itself.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight: #000000;
  --color-ghost-ash: #f6f6f4;
  --color-slate: #7d7d7d;
  --color-white-smoke: #ffffff;
  --color-dark-charcoal: #1a1a1a;
  --color-iridescent-glow: #ff8400;
  --font-recoleta: 'Recoleta', Playfair Display;
  --font-oldschool-grotesk: 'Oldschool Grotesk', Inter;
  --font-times: 'Times', Times New Roman;
  --text-body-sm: 15px;
  --leading-body-sm: 1.6;
  --tracking-body-sm: 0.15px;
  --text-subheading: 21px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.21px;
  --text-heading: 36px;
  --leading-heading: 1.1;
  --tracking-heading: -0.36px;
  --text-heading-lg: 47px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.94px;
  --text-display: 61px;
  --leading-display: 1.1;
  --tracking-display: -1.22px;
  --text-display-lg: 80px;
  --leading-display-lg: 1;
  --tracking-display-lg: -1.6px;
  --text-display-xl: 125px;
  --leading-display-xl: 1;
  --tracking-display-xl: -3.75px;
  --text-display-xxl: 138px;
  --leading-display-xxl: 1;
  --tracking-display-xxl: -4.14px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-43: 43px;
  --spacing-44: 44px;
  --spacing-50: 50px;
  --spacing-51: 51px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-92: 92px;
  --spacing-100: 100px;
  --spacing-114: 114px;
  --spacing-144: 144px;
  --spacing-200: 200px;
  --spacing-250: 250px;
  --spacing-261: 261px;
  --spacing-278: 278px;
  --spacing-300: 300px;
  --spacing-320: 320px;
  --radius-cards: 16px;
  --radius-links: 12px;
  --radius-inputs: 4px;
  --radius-buttons: 100px;
  --radius-largeelements: 38px;
  --surface-midnight-canvas: #000000;
  --surface-slate-module: #7d7d7d;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight: #000000;
  --color-ghost-ash: #f6f6f4;
  --color-slate: #7d7d7d;
  --color-white-smoke: #ffffff;
  --color-dark-charcoal: #1a1a1a;
  --color-iridescent-glow: #ff8400;
  --font-recoleta: 'Recoleta', Playfair Display;
  --font-oldschool-grotesk: 'Oldschool Grotesk', Inter;
  --font-times: 'Times', Times New Roman;
  --text-body-sm: 15px;
  --leading-body-sm: 1.6;
  --tracking-body-sm: 0.15px;
  --text-subheading: 21px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.21px;
  --text-heading: 36px;
  --leading-heading: 1.1;
  --tracking-heading: -0.36px;
  --text-heading-lg: 47px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.94px;
  --text-display: 61px;
  --leading-display: 1.1;
  --tracking-display: -1.22px;
  --text-display-lg: 80px;
  --leading-display-lg: 1;
  --tracking-display-lg: -1.6px;
  --text-display-xl: 125px;
  --leading-display-xl: 1;
  --tracking-display-xl: -3.75px;
  --text-display-xxl: 138px;
  --leading-display-xxl: 1;
  --tracking-display-xxl: -4.14px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-43: 43px;
  --spacing-44: 44px;
  --spacing-50: 50px;
  --spacing-51: 51px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-92: 92px;
  --spacing-100: 100px;
  --spacing-114: 114px;
  --spacing-144: 144px;
  --spacing-200: 200px;
  --spacing-250: 250px;
  --spacing-261: 261px;
  --spacing-278: 278px;
  --spacing-300: 300px;
  --spacing-320: 320px;
  --radius-cards: 16px;
  --radius-links: 12px;
  --radius-inputs: 4px;
  --radius-buttons: 100px;
  --radius-largeelements: 38px;
  --surface-midnight-canvas: #000000;
  --surface-slate-module: #7d7d7d;
}
```
