---
version: alpha
name: "Compound"
description: "Compound's design system evokes an architectural blueprint on a white canvas, emphasizing structured clarity and subtle premium detailing. The aesthetic focuses on minimal contrast and an almost monochromatic palette, allowing information and sophisticated typography to dominate. Surfaces typically feature generous radii and extremely light, diffused shadows, creating a sense of quiet elevation rather than stark separation. Interactivity is signaled through nuanced grays and the distinctive use of a nearly black fill for primary actions, providing a sharp, confident anchor within the otherwise restrained visual hierarchy."
theme: "light"
industry: "fintech"
source_url: "https://withcompound.com/membership"
refero_style_id: "cd31ecdb-297a-4fc5-a727-05f835ff917f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512090224-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512090224-thumb.jpg"
extracted_at: "2026-04-30T01:22:06.278Z"
---

# Compound — Style Reference

> Architectural blueprint on white marble.

**Theme:** light

**Industry:** fintech

Compound's design system evokes an architectural blueprint on a white canvas, emphasizing structured clarity and subtle premium detailing. The aesthetic focuses on minimal contrast and an almost monochromatic palette, allowing information and sophisticated typography to dominate. Surfaces typically feature generous radii and extremely light, diffused shadows, creating a sense of quiet elevation rather than stark separation. Interactivity is signaled through nuanced grays and the distinctive use of a nearly black fill for primary actions, providing a sharp, confident anchor within the otherwise restrained visual hierarchy.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Primary page canvas and white card surfaces. Do not promote it to the primary CTA color |
| Graphite | #171717 | `--color-graphite` | Primary text, headings, and filled primary action buttons — provides strong contrast against light surfaces |
| Ash Gray | #e5e7eb | `--color-ash-gray` | Subtle borders, dividers, subtle background patterns, and ghost button outlines |
| Smoke | #7e7e7e | `--color-smoke` | Secondary text, muted informational elements |
| Boulder | #6f6f6f | `--color-boulder` | Muted body text, helper text, and inactive icon fills |
| Cloud Gray | #f3f3f3 | `--color-cloud-gray` | Subtle background shifts, hover states, and very light surface treatments |
| Stone Gray | #8f8f8f | `--color-stone-gray` | Tertiary text, descriptive labels, and fine print |
| Platinum | #a0a0a0 | `--color-platinum` | Placeholder text, disabled states, and decorative icon accents |
| Warm Gold | #ffc838 | `--color-warm-gold` | Announcement banners and informational tags — a rare splash of warmth |
| Deep Black | #000000 | `--color-deep-black` | Overlays, specific card backgrounds, and fine accent lines; creates depth and separation for content blocks |
| Steel Gray Gradient | #c7c7c7 | `--color-steel-gray-gradient` | Subtle background gradients for section headers or decorative elements, implying subtle depth |
| Dark Charcoal Gradient | #505050 | `--color-dark-charcoal-gradient` | Backgrounds for dark, immersive sections, hinting at premium content or focus areas |

## Tokens — Typography

### Monument Grotesk

- **Token:** `--font-monument-grotesk`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 12px, 13px, 14px, 16px, 18px, 36px, 48px, 58px, 60px, 72px
- **Line heights:** 1.00, 1.10, 1.11, 1.25, 1.33, 1.38, 1.43, 1.50, 1.56, 1.71
- **Letter spacing:** normal
- **OpenType features:** "kern"
- **Role:** The primary typeface for all text content. Its clean, sans-serif design maintains a modern and authoritative tone. The consistent single weight for all sizes prevents visual clutter and emphasizes the content's inherent importance.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.71 | — | `--text-caption` |
| body | 14px | 1.5 | — | `--text-body` |
| heading-sm | 18px | 1.38 | — | `--text-heading-sm` |
| heading | 36px | 1.33 | — | `--text-heading` |
| heading-lg | 48px | 1.25 | — | `--text-heading-lg` |
| display | 58px | 1.11 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-119 | 119px | `--spacing-119` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-176 | 176px | `--spacing-176` |
| spacing-213 | 213px | `--spacing-213` |
| spacing-238 | 238px | `--spacing-238` |
| spacing-240 | 240px | `--spacing-240` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 20px |
| icons | 9999px |
| lists | 28px |
| images | 9999px |
| buttons | 9999px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.01) 0px 128px 51px 0px, rgba(0, 0, 0, 0.02) 0px 72px 43px 0px, rgba(0, 0, 0, 0.03) 0px 32px 32px 0px, rgba(0, 0, 0, 0.04) 0px 8px 18px 0px | `--shadow-xl` |
| xl-2 | rgba(194, 194, 194, 0.01) 0px 168px 67px 0px, rgba(194, 194, 194, 0.05) 0px 94px 57px 0px, rgba(194, 194, 194, 0.09) 0px 42px 42px 0px, rgba(194, 194, 194, 0.1) 0px 10px 23px 0px | `--shadow-xl-2` |
| xl-3 | rgba(207, 207, 207, 0.01) 0px 132px 53px 0px, rgba(207, 207, 207, 0.05) 0px 74px 44px 0px, rgba(207, 207, 207, 0.09) 0px 33px 33px 0px, rgba(207, 207, 207, 0.1) 0px 8px 18px 0px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 24px |
| elementGap | 4px |

## Components

### Text Only Button

**Role:** Link-style buttons for navigation and secondary actions.

Transparent background, text content in Graphite (#171717). No padding or border, relying on typography for definition. Used for header navigation items.

### Pill Primary Button

**Role:** Main calls to action.

Filled with Graphite (#171717) background, Canvas White (#ffffff) text, and a 9999px border-radius creating a pill shape. Padding is 9px vertical, 20px horizontal.

### Pill Inverted Button

**Role:** Secondary action or prominent ghost button.

Filled with Canvas White (#ffffff) background, Graphite (#171717) text, and a 9999px border-radius. Padding is 9px vertical, 16px horizontal. Used for 'Sign in'.

### Elevated Content Card

**Role:** Container for featured information or interactive content blocks.

Canvas White (#ffffff) background with a 20px border-radius. Features a soft, spread-out shadow using rgba(207, 207, 207, 0.01) 0px 132px 53px 0px, making it appear to float subtly. Internal padding is 24px on all sides.

### Dark Embed Card

**Role:** Embedded content blocks, often product screenshots or code examples.

Deep Black (#000000) background with a tight 9px border-radius. No shadow, relying on the dark background for visual distinction. Internal padding is 15.5px on all sides.

### Subtle Highlight Card

**Role:** Highlighting related or suggested content with minimal visual weight.

Background at rgba(0, 0, 0, 0.05) with a 14px border-radius. No shadow. Internal padding is 6px on all sides. Used for nested or secondary content groupings.

### Announcement Banner

**Role:** Top-level informational alerts or promotions.

Background color of Warm Gold (#ffc838). Text and button are Graphite (#171717) and Pill Primary Button style respectively, offering clear call-to-action within the banner.

## Do's and Don'ts

### Do

- Use Monument Grotesk 400 for all text elements, ranging from 12px for captions to 72px for display headings.
- Apply Canvas White (#ffffff) as the primary page background and for elevated card surfaces, ensuring a clean, bright canvas.
- Employ Graphite (#171717) for all primary text and main calls to action, providing strong focal points and clear hierarchy.
- Utilize Ash Gray (#e5e7eb) for subtle borders and ghost button outlines to delineate elements without harsh lines.
- Round corners with a 9999px radius for all buttons and icons to create a consistent pill-like or circular shape.
- Apply a 20px border-radius to all primary content cards, softening their appearance and suggesting approachability.
- Always use diffuse, light shadows like rgba(207, 207, 207, 0.01) for elevated cards, maintaining a floating rather than heavy aesthetic.

### Don't

- Avoid using saturated colors other than Warm Gold (#ffc838) for accents; the system is built on a near-monochromatic palette.
- Do not deviate from the single 400 weight for Monument Grotesk; visual hierarchy is established through size and color, not varied weight.
- Do not use hard, high-contrast shadows; the system favors soft, barely-there elevation effects.
- Avoid introducing additional border colors that aren't Ash Gray (#e5e7eb) or Graphite (#171717) to maintain visual consistency.
- Do not use sharp 0px border-radii for interactive elements or cards; all prominent components should have rounded corners.
- Refrain from bolding text for emphasis; use different font sizes or the Graphite (#171717) color for distinction.
- Do not break the established 4px element gap and 24px card padding; these values maintain the comfortable density.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Background | #e5e7eb | Dominant page background for the site. |
| 1 | Base Surface | #ffffff | Primary surface for cards, sections, and interactive elements. |
| 2 | Subtle Surface | #f3f3f3 | Slightly recessed or highlighted areas; hover states, subtle background differentiation. |
| 3 | Dark Content Surface | #000000 | Distinct, immersive content containers for media or specific product modules. |

## Elevation

- **Elevated Content Card:** `rgba(207, 207, 207, 0.01) 0px 132px 53px 0px, rgba(207, 207, 207, 0.05) 0px 74px 44px 0px, rgba(207, 207, 207, 0.09) 0px 33px 33px 0px, rgba(207, 207, 207, 0.1) 0px 8px 18px 0px`
- **Link with Drop Shadow:** `rgba(0, 0, 0, 0.01) 0px 128px 51px 0px, rgba(0, 0, 0, 0.02) 0px 72px 43px 0px, rgba(0, 0, 0, 0.03) 0px 32px 32px 0px, rgba(0, 0, 0, 0.04) 0px 8px 18px 0px`
- **List Item:** `rgba(194, 194, 194, 0.01) 0px 168px 67px 0px, rgba(194, 194, 194, 0.05) 0px 94px 57px 0px, rgba(194, 194, 194, 0.09) 0px 42px 42px 0px, rgba(194, 194, 194, 0.1) 0px 10px 23px 0px`

## Similar Brands

- **Linear** — Monochromatic interface with subtle gradients and a premium, clean aesthetic.
- **Stripe** — Heavy reliance on typography for hierarchy and a restrained, almost colorless palette for content areas.
- **Vercel** — Minimalist layout, focus on clarity, and use of very light shadows and rounded corners for UI elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-graphite: #171717;
  --color-ash-gray: #e5e7eb;
  --color-smoke: #7e7e7e;
  --color-boulder: #6f6f6f;
  --color-cloud-gray: #f3f3f3;
  --color-stone-gray: #8f8f8f;
  --color-platinum: #a0a0a0;
  --color-warm-gold: #ffc838;
  --color-deep-black: #000000;
  --color-steel-gray-gradient: #c7c7c7;
  --color-dark-charcoal-gradient: #505050;
  --font-monument-grotesk: 'Monument Grotesk', system-ui;
  --text-caption: 12px;
  --leading-caption: 1.71;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.38;
  --text-heading: 36px;
  --leading-heading: 1.33;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.25;
  --text-display: 58px;
  --leading-display: 1.11;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-119: 119px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-176: 176px;
  --spacing-213: 213px;
  --spacing-238: 238px;
  --spacing-240: 240px;
  --radius-cards: 20px;
  --radius-icons: 9999px;
  --radius-lists: 28px;
  --radius-images: 9999px;
  --radius-buttons: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.01) 0px 128px 51px 0px, rgba(0, 0, 0, 0.02) 0px 72px 43px 0px, rgba(0, 0, 0, 0.03) 0px 32px 32px 0px, rgba(0, 0, 0, 0.04) 0px 8px 18px 0px;
  --shadow-xl-2: rgba(194, 194, 194, 0.01) 0px 168px 67px 0px, rgba(194, 194, 194, 0.05) 0px 94px 57px 0px, rgba(194, 194, 194, 0.09) 0px 42px 42px 0px, rgba(194, 194, 194, 0.1) 0px 10px 23px 0px;
  --shadow-xl-3: rgba(207, 207, 207, 0.01) 0px 132px 53px 0px, rgba(207, 207, 207, 0.05) 0px 74px 44px 0px, rgba(207, 207, 207, 0.09) 0px 33px 33px 0px, rgba(207, 207, 207, 0.1) 0px 8px 18px 0px;
  --surface-canvas-background: #e5e7eb;
  --surface-base-surface: #ffffff;
  --surface-subtle-surface: #f3f3f3;
  --surface-dark-content-surface: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-graphite: #171717;
  --color-ash-gray: #e5e7eb;
  --color-smoke: #7e7e7e;
  --color-boulder: #6f6f6f;
  --color-cloud-gray: #f3f3f3;
  --color-stone-gray: #8f8f8f;
  --color-platinum: #a0a0a0;
  --color-warm-gold: #ffc838;
  --color-deep-black: #000000;
  --color-steel-gray-gradient: #c7c7c7;
  --color-dark-charcoal-gradient: #505050;
  --font-monument-grotesk: 'Monument Grotesk', system-ui;
  --text-caption: 12px;
  --leading-caption: 1.71;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.38;
  --text-heading: 36px;
  --leading-heading: 1.33;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.25;
  --text-display: 58px;
  --leading-display: 1.11;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-119: 119px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-176: 176px;
  --spacing-213: 213px;
  --spacing-238: 238px;
  --spacing-240: 240px;
  --radius-cards: 20px;
  --radius-icons: 9999px;
  --radius-lists: 28px;
  --radius-images: 9999px;
  --radius-buttons: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.01) 0px 128px 51px 0px, rgba(0, 0, 0, 0.02) 0px 72px 43px 0px, rgba(0, 0, 0, 0.03) 0px 32px 32px 0px, rgba(0, 0, 0, 0.04) 0px 8px 18px 0px;
  --shadow-xl-2: rgba(194, 194, 194, 0.01) 0px 168px 67px 0px, rgba(194, 194, 194, 0.05) 0px 94px 57px 0px, rgba(194, 194, 194, 0.09) 0px 42px 42px 0px, rgba(194, 194, 194, 0.1) 0px 10px 23px 0px;
  --shadow-xl-3: rgba(207, 207, 207, 0.01) 0px 132px 53px 0px, rgba(207, 207, 207, 0.05) 0px 74px 44px 0px, rgba(207, 207, 207, 0.09) 0px 33px 33px 0px, rgba(207, 207, 207, 0.1) 0px 8px 18px 0px;
  --surface-canvas-background: #e5e7eb;
  --surface-base-surface: #ffffff;
  --surface-subtle-surface: #f3f3f3;
  --surface-dark-content-surface: #000000;
}
```
