---
version: alpha
name: "Krea"
description: "This system evokes a sleek, high-tech command center with deep, subdued tones and crisp, functional typography. The near-black background provides a stark contrast for the luminous white text, emphasizing content. Subtle gradients introduce depth without overwhelming the dark aesthetic, mimicking layered screens in a digital environment. The interplay of sharp 8px radii and some larger 14px and 32px radii, combined with a total absence of strong accent colors, creates a restrained and focused visual experience."
theme: "dark"
industry: "ai"
source_url: "https://krea.ai"
refero_style_id: "50833119-cb36-4b75-b0cc-be48afea050a"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932585962-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932585962-thumb.jpg"
extracted_at: "2026-04-11T18:36:49.487Z"
---

# Krea — Style Reference

> Midnight Terminal Interface. Imagine looking at code on a deep dark monitor, illuminated only by crisp white text and subtle UI elements.

**Theme:** dark

**Industry:** ai

This system evokes a sleek, high-tech command center with deep, subdued tones and crisp, functional typography. The near-black background provides a stark contrast for the luminous white text, emphasizing content. Subtle gradients introduce depth without overwhelming the dark aesthetic, mimicking layered screens in a digital environment. The interplay of sharp 8px radii and some larger 14px and 32px radii, combined with a total absence of strong accent colors, creates a restrained and focused visual experience.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Void Black | #000000 | `--color-void-black` | Primary background, text (on light buttons), icons, borders. |
| Canvas White | #ffffff | `--color-canvas-white` | Primary text, button backgrounds, interactive elements, icons. |
| Ash Gray | #a3a3a3 | `--color-ash-gray` | Secondary text, disabled states, subtle borders. |
| Coal | #171717 | `--color-coal` | Darker interactive elements, subtle surface variations. |
| Iron | #262626 | `--color-iron` | Button backgrounds for secondary actions. |
| Frost | #f5f5f5 | `--color-frost` | Light button backgrounds, subtle accents in light mode elements. |
| Deep Space Gradient | #474747 | `--color-deep-space-gradient` | Background feature sections, providing a sense of depth and atmospheric perspective. |
| Cosmic Drift Gradient | #646464 | `--color-cosmic-drift-gradient` | Variant gradient for sections, implying subtle light sources or material depth. |
| Haze Gradient | #FFFFFF | `--color-haze-gradient` | Rare usage, likely for product shots or specific content blocks, to hint at a layered interface element. |

## Tokens — Typography

### Suisse Intl

- **Token:** `--font-suisse-intl`
- **Substitute:** Inter
- **Weights:** 400, 450, 500, 600, 700
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px, 20px, 24px, 30px, 36px, 48px, 60px, 72px, 96px
- **Line heights:** 1.00, 1.05, 1.11, 1.20, 1.25, 1.33, 1.38, 1.40, 1.43, 1.50, 1.56
- **Letter spacing:** -0.0250em, -0.0150em, 0.0100em, 0.0150em, 0.1000em
- **Role:** Dominant and sole typeface, maintaining a consistent, precise tone across all content from large display headings to small body text. The tight letter-spacing for larger sizes gives headlines a carved, intentional feel, while wider spacing for small text aids readability. Its custom nature highlights a brand commitment to distinct visual identity.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.43 | 0.15px | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 24px | 1.33 | -0.48px | `--text-subheading` |
| heading | 36px | 1.25 | -0.54px | `--text-heading` |
| heading-lg | 48px | 1.2 | -0.72px | `--text-heading-lg` |
| display | 72px | 1.05 | -1.08px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-61 | 61px | `--spacing-61` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-108 | 108px | `--spacing-108` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-192 | 192px | `--spacing-192` |

### Border Radius

| Element | Value |
| --- | --- |
| large | 14px |
| buttons | 8px |
| default | 8px |
| extraLarge | 32px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 1px 6px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.05) 0px 1px 2px 0px | `--shadow-xl-3` |
| xl-4 | rgba(0, 0, 0, 0.2) 0px 9px 8px 0px, rgba(0, 0, 0, 0.2) 0px 6px 4px -1px | `--shadow-xl-4` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 72px |
| cardPadding | 20px |
| elementGap | 8px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Stat / Metric Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Pricing Plan Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button

**Role:** Call to action.

Canvas White background, Void Black text. Padding 12px vertical, 20px horizontal. 8px border radius. Subtle shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px.

### Secondary Action Button

**Role:** Alternative action.

Iron background, Canvas White text. Padding 12px vertical, 20px horizontal. 8px border radius. Subtle shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px.

### Ghost Navigation Button

**Role:** Navigation links in header, subtle secondary calls-to-action.

Transparent background, Coal text. Padding 8px vertical, 24px horizontal. No border radius (0px). No shadow.

### Navigation Link Button

**Role:** Top navigation items.

Transparent background, Canvas White text. Padding not explicitly defined, but implies minimal (e.g. 8px vertical, 12px horizontal). 8px border radius when active/hovered for interactive feedback.

### Image Action Button

**Role:** Action button within an image or content block.

Ash Gray background, Void Black text. 8px border radius. No explicit padding detectable but likely 0px on all sides, acting as a small accent.

### Header Navigation Link

**Role:** Primary navigation items in the header.

Canvas White text (body weight 400). Padded for spacing rather than explicit button styling.

## Do's and Don'ts

### Do

- Use Suisse Intl as the sole typeface, varying weight and size for hierarchy.
- Prioritize Void Black (#000000) for backgrounds and Canvas White (#ffffff) for foreground text to maintain high contrast.
- Apply 8px border radius consistently for most interactive elements like buttons and cards.
- Employ the Deep Space Gradient (linear-gradient(rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)) or Cosmic Drift Gradient (linear-gradient(200deg, rgb(100, 100, 100) 0%, rgb(0, 0, 0) 100%)) for feature section backgrounds to create subtle depth.
- Use Ash Gray (#a3a3a3) for secondary text and disabled states to reduce visual hierarchy.
- Maintain a default letter-spacing pattern, notably the tight -0.0150em for larger headings, to achieve a precise, chiseled look.
- Utilize specific padding values (e.g., 12px vertical, 20px horizontal for primary buttons) to ensure consistent element sizing.

### Don't

- Do not introduce additional saturated colors beyond the strict neutral palette.
- Avoid overuse of shadows; reserve the rgba(0, 0, 0, 0.1) 0px 1px 6px 0px shadow for interactive elements only.
- Do not deviate from Suisse Intl; no other font families should be used.
- Do not use generic border radii; adhere to 8px, 14px, or 32px values.
- Avoid bright or high-key imagery that would disrupt the dark, high-contrast aesthetic.
- Do not use letter-spacing values outside the defined -0.0250em, -0.0150em, 0.0100em, 0.0150em, 0.1000em ranges.
- Do not apply vibrant accent colors to active states; rely on subtle background changes or border shifts instead.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Base Surface | #000000 | Primary page background, deepest layer. |
| 1 | Component Surface | #061c37 | Subtle background for specific components or sections, seen in visual elements like the monitor screen background. |
| 2 | Interactive Surface | #171717 | Background for secondary buttons and subtly raised elements. |

## Elevation

- **Primary Action Button:** `rgba(0, 0, 0, 0.1) 0px 1px 6px 0px`
- **Secondary Action Button:** `rgba(0, 0, 0, 0.1) 0px 1px 6px 0px`
- **Card/Container:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`

## Imagery

The site uses a mix of real-world photography and UI product screenshots. Photography is dark, moody, and atmospheric (like the background behind the monitor), providing context without distraction. Product screenshots are contained within device mockups (e.g., monitor), showcasing the UI in a realistic, non-abstract way. Icons are simple, monochrome, and filled, often in Canvas White against Void Black, or vice-versa. The overall visual language for imagery is functional, demonstrating the product in a high-fidelity context rather than decorative or abstract illustration.

## Layout

The layout is primarily full-bleed, with content centered. The hero section features a full-viewport, dark, atmospheric background image with a centered headline and subheading, followed by centered action buttons. Content sections appear to alternate between darker gradient backgrounds and potentially pure black, maintaining consistent vertical rhythm. Text-dominant sections are centered, while key features or product displays are often presented within a visual element like a monitor. The navigation is a classic top bar, horizontally aligned, with primary links left-aligned and authentication actions right-aligned. Density is balanced, with ample breathing room around key content blocks and a clear visual hierarchy.

## Similar Brands

- **Framer** — Similar dark, high-contrast aesthetic with precise typography and a focus on displaying software interfaces.
- **Vercel** — Embraces a similar developer-tool dark theme, using subtle gradients and sharp text, with an emphasis on functional UI elements.
- **Linear** — Shares a precise, minimalist dark-mode UI with a strong emphasis on clean typography and functional components over decorative elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-void-black: #000000;
  --color-canvas-white: #ffffff;
  --color-ash-gray: #a3a3a3;
  --color-coal: #171717;
  --color-iron: #262626;
  --color-frost: #f5f5f5;
  --color-deep-space-gradient: #474747;
  --color-cosmic-drift-gradient: #646464;
  --color-haze-gradient: #FFFFFF;
  --font-suisse-intl: 'Suisse Intl', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: 0.15px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.48px;
  --text-heading: 36px;
  --leading-heading: 1.25;
  --tracking-heading: -0.54px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.72px;
  --text-display: 72px;
  --leading-display: 1.05;
  --tracking-display: -1.08px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-61: 61px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --spacing-108: 108px;
  --spacing-160: 160px;
  --spacing-192: 192px;
  --radius-large: 14px;
  --radius-buttons: 8px;
  --radius-default: 8px;
  --radius-extralarge: 32px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl-3: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --shadow-xl-4: rgba(0, 0, 0, 0.2) 0px 9px 8px 0px, rgba(0, 0, 0, 0.2) 0px 6px 4px -1px;
  --surface-base-surface: #000000;
  --surface-component-surface: #061c37;
  --surface-interactive-surface: #171717;
}
```

### Tailwind v4

```css
@theme {
  --color-void-black: #000000;
  --color-canvas-white: #ffffff;
  --color-ash-gray: #a3a3a3;
  --color-coal: #171717;
  --color-iron: #262626;
  --color-frost: #f5f5f5;
  --color-deep-space-gradient: #474747;
  --color-cosmic-drift-gradient: #646464;
  --color-haze-gradient: #FFFFFF;
  --font-suisse-intl: 'Suisse Intl', Inter;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: 0.15px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.48px;
  --text-heading: 36px;
  --leading-heading: 1.25;
  --tracking-heading: -0.54px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.72px;
  --text-display: 72px;
  --leading-display: 1.05;
  --tracking-display: -1.08px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-61: 61px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --spacing-108: 108px;
  --spacing-160: 160px;
  --spacing-192: 192px;
  --radius-large: 14px;
  --radius-buttons: 8px;
  --radius-default: 8px;
  --radius-extralarge: 32px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl-3: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --shadow-xl-4: rgba(0, 0, 0, 0.2) 0px 9px 8px 0px, rgba(0, 0, 0, 0.2) 0px 6px 4px -1px;
  --surface-base-surface: #000000;
  --surface-component-surface: #061c37;
  --surface-interactive-surface: #171717;
}
```
