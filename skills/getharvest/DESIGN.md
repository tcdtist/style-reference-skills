---
version: alpha
name: "Getharvest"
description: "Harvest projects a dependable, organized workspace aesthetic, blending understated neutrals with a single vibrant orange accent. The primary visual tension arises from the interplay of a clean, spacious layout and rich, textured data visualizations. Surfaces are primarily crisp white, occasionally warmed by a subtle cream, with a focus on soft, rounded corners rather than hard edges. Typography is approachable yet confident, often using a slightly wider letter-spacing for an open feel, contrasting with compact, data-rich interfaces."
theme: "light"
industry: "productivity"
source_url: "https://www.getharvest.com"
refero_style_id: "1eee9aa2-1e23-4675-9f6e-fb98c93969bd"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510836587-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510836587-thumb.jpg"
extracted_at: "2026-04-30T01:01:16.383Z"
---

# Getharvest — Style Reference

> Warm, organized workspace: like an inviting desk with neatly arranged tools and a single, bright sticky note.

**Theme:** light

**Industry:** productivity

Harvest projects a dependable, organized workspace aesthetic, blending understated neutrals with a single vibrant orange accent. The primary visual tension arises from the interplay of a clean, spacious layout and rich, textured data visualizations. Surfaces are primarily crisp white, occasionally warmed by a subtle cream, with a focus on soft, rounded corners rather than hard edges. Typography is approachable yet confident, often using a slightly wider letter-spacing for an open feel, contrasting with compact, data-rich interfaces.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Amber Glow | #fa5d00 | `--color-amber-glow` | Primary action buttons, interactive elements, brand highlights — a warm red-orange that signifies activity and focus |
| Harvest Cream | #fff8f1 | `--color-harvest-cream` | Subtle background for cards, embedded sections, and visual containment, providing a soft contrast to white |
| Deep Graphite | #1d1e1c | `--color-deep-graphite` | Primary text, headings, and significant UI elements — a very dark, almost black, for strong readability |
| Canvas White | #ffffff | `--color-canvas-white` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Soft Fog | #c0bbb6 | `--color-soft-fog` | Input borders, subtle dividers, and non-intrusive UI boundaries |
| Pale Sand | #e3d6c5 | `--color-pale-sand` | Subtle shadow tint for cards, adding a delicate warmth to elevated elements |
| Muted Stone | #8e8b87 | `--color-muted-stone` | Secondary text, descriptive labels, and less prominent UI elements |
| Link Gray | #615f5c | `--color-link-gray` | Muted link text and subtle icons, providing less emphasis than primary text |
| Light Steel | #d9d9d9 | `--color-light-steel` | Hairline borders and separators, providing minimal visual interruption |
| Golden Wash | #fee3b5 | `--color-golden-wash` | Accent for card shadows — a faint golden hue that echoes the primary brand color |
| Mid Slate | #777571 | `--color-mid-slate` | Tertiary text and subtle informational elements |
| Dark Slate | #4a4a47 | `--color-dark-slate` | Darker decorative borders and occasional icon fills |
| Subtle Gray | #a5a19c | `--color-subtle-gray` | Even lighter secondary text and subtle boundary accents |
| Text Gray | #999999 | `--color-text-gray` | Placeholder text and very muted labels |
| Shadow Tint | #ccc6c1 | `--color-shadow-tint` | Base for subtle button shadows, often combined with an alpha value |

## Tokens — Typography

### MuotoWeb

- **Token:** `--font-muotoweb`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 13px, 14px, 16px, 17px, 18px, 20px, 22px, 24px, 25px, 26px, 28px, 34px, 48px, 50px
- **Line heights:** 1.00, 1.10, 1.15, 1.20, 1.26, 1.30, 1.35, 1.38, 1.40, 1.50
- **Letter spacing:** 0.0150em
- **Role:** Primary UI font for body text, navigation, forms, and most headings — its slightly wider tracking contributes to the open and breathable aesthetic.

### Monarch

- **Token:** `--font-monarch`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 72px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Display font used specifically for large, impactful headlines, offering a more traditional and grounded presence at significant scales.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.3 | — | `--text-caption` |
| heading | 22px | 1.26 | — | `--text-heading` |
| heading-lg | 28px | 1.2 | — | `--text-heading-lg` |
| display | 72px | 1.2 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-113 | 113px | `--spacing-113` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 20px |
| other | 16px |
| images | 16px |
| inputs | 16px |
| buttons | 16px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.2) 0px 1px 4px 0px | `--shadow-xl` |
| xl-2 | rgba(250, 166, 0, 0.25) 6px 4px 24px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 30px |
| cardPadding | 20px |
| elementGap | 10px |

## Components

### Primary Action Button

**Role:** Call-to-action button

Filled with Amber Glow (#fa5d00), white text, prominently rounded corners via 16px border-radius, generous padding. Used for primary calls to action like 'Try Harvest free'.

### Standard Content Card

**Role:** Informational content container

Rounded corners (20px), Harvest Cream background (#fff8f1), no visible border, and no shadow. Used for features or descriptive blocks.

### Elevated Content Card

**Role:** Prominent content container

Rounded corners (15px), Canvas White background (#ffffff), and a distinct golden-tinted shadow (rgba(250, 166, 0, 0.25) 6px 4px 24px 0px). Used to highlight key information or interactive elements.

### Text Input Field

**Role:** User data input

Canvas White background (#ffffff), subtle Soft Fog border (#c0bbb6), and generously rounded 16px corners. Primary text color uses Deep Graphite (#1d1e1c).

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) or Harvest Cream (#fff8f1) for all background surfaces to maintain a light and airy feel.
- Use Amber Glow (#fa5d00) exclusively for primary interactive elements and brand accents; avoid scattering it decoratively.
- Apply Deep Graphite (#1d1e1c) for all primary text and headings to ensure strong contrast and readability.
- Maintain a 16px border-radius for buttons and inputs, and a softer 20px for content cards to unify the rounded aesthetic.
- Employ MuotoWeb as the default font across the UI, leveraging its 0.0150em letter spacing for an open typographic presence.
- Utilize 10px as the default elementGap horizontally and vertically between related UI elements for comfortable spacing.
- Ensure all interactive components have a moderate transition duration of 0.2s with an ease timing function for smooth feedback.

### Don't

- Do not introduce new saturated colors; the palette relies on Amber Glow (#fa5d00) as the sole chromatic accent.
- Avoid hard-edged components; all card, button, and input elements should adhere to the established border-radius values.
- Do not use heavy, dark shadows; elevation should be subtle, leveraging the Golden Wash (#fee3b5) or rgba(0, 0, 0, 0.2) tints.
- Refrain from tight, condensed typography; prioritize the slightly expanded letter spacing of MuotoWeb for all body and UI text.
- Do not use gradients on backgrounds or interactive elements; the visual system is primarily flat with subtle surface changes.
- Avoid dense, information-packed sections without generous internal padding or a Clearfix button text in Amber Glow.
- Do not use dark backgrounds for main content areas; maintain the light theme with Canvas White and Harvest Cream as primary surfaces.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background and base for prominent content. |
| 1 | Harvest Cream | #fff8f1 | Background for secondary content blocks and feature cards, providing a soft, subtle lift. |
| 2 | Amber Glow Solid | #fa5d00 | Filled interactive components, indicating active state or primary action. |

## Elevation

- **Primary Action Button:** `rgba(0, 0, 0, 0.2) 0px 1px 4px 0px`
- **Elevated Content Card:** `rgba(250, 166, 0, 0.25) 6px 4px 24px 0px`

## Imagery

The site uses a mix of stylized product screenshots and abstract graphic elements. Product screenshots are typically rendered on white or a very light pastel background, focusing on clean UI and data visualization. Abstract graphics are subtle, organic, and often take the form of watercolor-like washes in warm, muted tones (like those suggesting Golden Wash #fee3b5 or Pale Sand #e3d6c5). Icons are primarily mono-color, Deep Graphite outlines or fills, used functionally to illustrate features. Imagery serves an explanatory and atmospheric role, rather than decorative, and never breaks out of contained, rounded forms.

## Layout

The page uses a maximum content width centered layout, rather than full-bleed, creating a contained and organized feel. The hero section often features a large, centered headline (Monarch font) over a subtle, abstract background using light, warm washes, with a call to action immediately below. Sections alternate between Canvas White and Harvest Cream backgrounds, creating a gentle visual rhythm. Content within sections favors centered stacks or two-column layouts (text alongside illustrations or cards). Feature sections often arrange content in three-column card grids. The overall density is comfortable, with generous vertical spacing between sections (around 30px). Navigation is a sticky top bar.

## Similar Brands

- **FreshBooks** — Shares a clean, light SaaS aesthetic with a single strong accent color for CTAs and iconography.
- **Toggl Track** — Similar focus on whitespace, approachable typography, and clear functional orange/red accents in a time-tracking context.
- **Clockify** — Employs a white base, rounded UI elements, and a distinct brand color to highlight actions and key information.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-amber-glow: #fa5d00;
  --color-harvest-cream: #fff8f1;
  --color-deep-graphite: #1d1e1c;
  --color-canvas-white: #ffffff;
  --color-soft-fog: #c0bbb6;
  --color-pale-sand: #e3d6c5;
  --color-muted-stone: #8e8b87;
  --color-link-gray: #615f5c;
  --color-light-steel: #d9d9d9;
  --color-golden-wash: #fee3b5;
  --color-mid-slate: #777571;
  --color-dark-slate: #4a4a47;
  --color-subtle-gray: #a5a19c;
  --color-text-gray: #999999;
  --color-shadow-tint: #ccc6c1;
  --font-muotoweb: 'MuotoWeb', Inter;
  --font-monarch: 'Monarch', Playfair Display;
  --text-caption: 13px;
  --leading-caption: 1.3;
  --text-heading: 22px;
  --leading-heading: 1.26;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.2;
  --text-display: 72px;
  --leading-display: 1.2;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --radius-cards: 20px;
  --radius-other: 16px;
  --radius-images: 16px;
  --radius-inputs: 16px;
  --radius-buttons: 16px;
  --shadow-xl: rgba(0, 0, 0, 0.2) 0px 1px 4px 0px;
  --shadow-xl-2: rgba(250, 166, 0, 0.25) 6px 4px 24px 0px;
  --surface-canvas-white: #ffffff;
  --surface-harvest-cream: #fff8f1;
  --surface-amber-glow-solid: #fa5d00;
}
```

### Tailwind v4

```css
@theme {
  --color-amber-glow: #fa5d00;
  --color-harvest-cream: #fff8f1;
  --color-deep-graphite: #1d1e1c;
  --color-canvas-white: #ffffff;
  --color-soft-fog: #c0bbb6;
  --color-pale-sand: #e3d6c5;
  --color-muted-stone: #8e8b87;
  --color-link-gray: #615f5c;
  --color-light-steel: #d9d9d9;
  --color-golden-wash: #fee3b5;
  --color-mid-slate: #777571;
  --color-dark-slate: #4a4a47;
  --color-subtle-gray: #a5a19c;
  --color-text-gray: #999999;
  --color-shadow-tint: #ccc6c1;
  --font-muotoweb: 'MuotoWeb', Inter;
  --font-monarch: 'Monarch', Playfair Display;
  --text-caption: 13px;
  --leading-caption: 1.3;
  --text-heading: 22px;
  --leading-heading: 1.26;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.2;
  --text-display: 72px;
  --leading-display: 1.2;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --radius-cards: 20px;
  --radius-other: 16px;
  --radius-images: 16px;
  --radius-inputs: 16px;
  --radius-buttons: 16px;
  --shadow-xl: rgba(0, 0, 0, 0.2) 0px 1px 4px 0px;
  --shadow-xl-2: rgba(250, 166, 0, 0.25) 6px 4px 24px 0px;
  --surface-canvas-white: #ffffff;
  --surface-harvest-cream: #fff8f1;
  --surface-amber-glow-solid: #fa5d00;
}
```
