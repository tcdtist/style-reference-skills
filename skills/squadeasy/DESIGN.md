---
version: alpha
name: "SquadEasy"
description: "SquadEasy's design system evokes a playful, high-contrast digital environment. It uses bold, unadorned typography set against vibrant, geometric color blocks and photo cutouts. The layout is dynamic, featuring angled visual elements and prominent typography to create a sense of directness and energy. Color is employed in large, flat regions and as vivid accents, while component styling is typically crisp with generous radii, prioritizing impact over subtle detail."
theme: "light"
industry: "saas"
source_url: "https://www.squadeasy.com"
refero_style_id: "3e5c272b-8d68-40d8-9726-b4d6914b4b16"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518528106-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518528106-thumb.jpg"
extracted_at: "2026-04-30T03:09:16.133Z"
---

# SquadEasy — Style Reference

> Playful block playground

**Theme:** light

**Industry:** saas

SquadEasy's design system evokes a playful, high-contrast digital environment. It uses bold, unadorned typography set against vibrant, geometric color blocks and photo cutouts. The layout is dynamic, featuring angled visual elements and prominent typography to create a sense of directness and energy. Color is employed in large, flat regions and as vivid accents, while component styling is typically crisp with generous radii, prioritizing impact over subtle detail.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Amber Canvas | #e1c19e | `--color-amber-canvas` | Primary page background for hero sections and expansive content zones, evoking a warm, inviting atmosphere |
| Deep Violet | #adabff | `--color-deep-violet` | Background for certain cards and content sections, adding depth and a distinct visual interruption to the warm canvas |
| Electric Lime | #e4ff60 | `--color-electric-lime` | Primary action background, indicating interactivity with a high-energy pop, and used for decorative fills |
| Sky Blue | #7fb6e6 | `--color-sky-blue` | Secondary button backgrounds and decorative elements, providing a cooler accent hue |
| Hot Pink | #ea5da3 | `--color-hot-pink` | Highlight text, decorative fills, and border accents, drawing immediate attention to key phrases and elements |
| Forest Green | #6fb853 | `--color-forest-green` | Green accent for outlined action borders, linked labels, and lightweight interactive emphasis. Use as a supporting accent, not as a status color |
| Absolute Black | #000000 | `--color-absolute-black` | Primary text, borders, and solid button fills, providing strong contrast against all backgrounds |
| Pure White | #ffffff | `--color-pure-white` | Secondary text, button text on dark backgrounds, and footer background, acting as a clean counterpoint |
| Soft Gray | #f6f6f6 | `--color-soft-gray` | Subtle background for UI elements, offering a slight visual break from pure white |

## Tokens — Typography

### Body

- **Token:** `--font-body`
- **Substitute:** Inter
- **Weights:** 400, 500, 700
- **Sizes:** 14px, 16px, 17px, 18px, 19px, 22px
- **Line heights:** 1.00, 1.20, 1.21
- **Letter spacing:** -0.0180em, -0.0160em, -0.0150em, -0.0140em, -0.0130em, -0.0110em
- **Role:** General body text, links, and various UI elements. Its range of weights and sizes provides versatility for content hierarchy and interactive states.

### Black

- **Token:** `--font-black`
- **Substitute:** Oswald
- **Weights:** 400, 700
- **Sizes:** 16px, 50px, 56px, 62px, 80px, 110px, 220px
- **Line heights:** 0.87, 1.00, 1.05, 1.20
- **Letter spacing:** -0.0360em, -0.0320em, -0.0250em, -0.0180em, -0.0160em, -0.0050em, -0.0010em
- **Role:** Dominant font for headings and impactful display text. Its inherent boldness, combined with tight line heights and negative letter-spacing, creates a commanding, space-efficient presence.

### Regular

- **Token:** `--font-regular`
- **Substitute:** Open Sans
- **Weights:** 400
- **Sizes:** 14px, 16px, 18px, 22px
- **Line heights:** 1.20, 1.21
- **Letter spacing:** -0.0180em, -0.0160em, -0.0140em, -0.0110em
- **Role:** Used for specific button labels and navigation items, offering a slightly more relaxed feel than 'Body' to contrast interactive elements.

### Medium

- **Token:** `--font-medium`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 12px, 14px, 16px
- **Line heights:** 1.20
- **Letter spacing:** -0.0210em, -0.0180em, -0.0160em
- **Role:** Small text and button labels, maintaining legibility at smaller sizes with slightly tighter tracking.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Fallback or specific utility text, relying on system font accessibility.

### Sharpie

- **Token:** `--font-sharpie`
- **Substitute:** Comic Neue
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20
- **Letter spacing:** -0.0160em
- **Role:** Specific decorative text, providing a distinctive, hand-drawn aesthetic.

### Epilogue

- **Token:** `--font-epilogue`
- **Substitute:** Epilogue
- **Weights:** 400
- **Sizes:** 18px
- **Line heights:** 1.20
- **Letter spacing:** -0.0140em
- **Role:** Used for distinctive button labels, offering a subtle, elegant touch for important actions.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | -0.252px | `--text-caption` |
| body-sm | 14px | 1.21 | -0.252px | `--text-body-sm` |
| body | 16px | 1.2 | -0.256px | `--text-body` |
| subheading | 18px | 1.2 | -0.252px | `--text-subheading` |
| heading-sm | 22px | 1.2 | -0.242px | `--text-heading-sm` |
| heading | 50px | 1.05 | -1.6px | `--text-heading` |
| heading-lg | 56px | 1 | -1.4px | `--text-heading-lg` |
| display | 80px | 0.87 | -2.88px | `--text-display` |

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
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-69 | 69px | `--spacing-69` |
| spacing-77 | 77px | `--spacing-77` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-106 | 106px | `--spacing-106` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-164 | 164px | `--spacing-164` |
| spacing-272 | 272px | `--spacing-272` |
| spacing-284 | 284px | `--spacing-284` |

### Border Radius

| Element | Value |
| --- | --- |
| misc | 10px |
| cards | 0px |
| buttons | 100px |
| navElements | 14px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 100px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Text Link Button

**Role:** Navigation and secondary actions.

Transparent background, 'Absolute Black' text or 'Pure White' on dark backgrounds. No border, 'Regular' or 'Body' font family at 16px, 0px border radius, 16px padding on all sides for clickable area.

### Pill Ghost Button (Black)

**Role:** Outlined secondary actions.

Transparent background, 'Absolute Black' text, 100px border radius, with a 1px 'Absolute Black' border. No horizontal/vertical padding detected, suggesting an icon button or minimal text treatment.

### Pill Ghost Button (White)

**Role:** Outlined secondary actions on dark backgrounds.

Transparent background, 'Pure White' text, 100px border radius, with a 1px 'Pure White' border. No horizontal/vertical padding detected, suggesting an icon button or minimal text treatment.

### Pill Filled Button (Black)

**Role:** Primary action within a neutral context.

'Absolute Black' background, 'Pure White' text, 100px border radius, 16px vertical padding, 14px horizontal padding on right and 16px on left.

### Pill Filled Button (Electric Lime)

**Role:** Prominent calls to action.

'Electric Lime' background, 'Absolute Black' text, 100px border radius, 16px padding. This is the most persuasive button style.

### Info Card (Squared)

**Role:** Content presentation with a distinctive background.

Background 'Deep Violet', 0px border radius, no box shadow, 40px top padding, 24px horizontal padding, 140px bottom padding. Large internal padding for generous content framing.

## Do's and Don'ts

### Do

- Always use 'Absolute Black' (#000000) for primary text on light backgrounds and 'Pure White' (#ffffff) on dark backgrounds.
- Apply a 100px border radius to all interactive buttons for a consistent, soft pill shape.
- Use 'Electric Lime' (#e4ff60) specifically for primary call-to-action button backgrounds.
- Employ 'Deep Violet' (#adabff) for prominent content cards to differentiate them from the main canvas.
- Layer large, angled photographic cutouts to create a dynamic and energetic visual composition.
- Utilize 'Black' font family at large sizes for headlines (50-220px) with tight line heights to ensure a commanding presence.
- Maintain a comfortable density with a base spacing unit of 4px and elemental gaps around 16px.

### Don't

- Do not use generic gray tones for primary interactive elements; always use chromatic colors for emphasis.
- Avoid subtle shadows or gradients on component surfaces; stick to flat, vibrant color blocks or crisp borders.
- Do not use small, delicate fonts for headlines; always leverage the 'Black' font family for impact.
- Never use square corners for buttons; always apply the 100px border radius for a distinct visual identity.
- Do not place images in simple, contained boxes; allow them to break out of their bounds or appear dynamically angled.
- Avoid highly ornate or complex typography; the system favors bold, direct, and efficient typefaces.
- Do not introduce additional background colors outside of the defined 'Amber Canvas', 'Deep Violet', 'Electric Lime', and 'Soft Gray' for major sections.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Amber Canvas | #e1c19 | Primary page background, providing a warm, foundational tone for expansive sections. |
| 1 | Soft Gray | #f6f6f6 | Subtle background for specific content areas, offering a slight visual differentiation from pure white. |
| 2 | Pure White | #ffffff | Background for specific content blocks, footer, and internal elements requiring a clean, bright surface. |
| 3 | Deep Violet | #adabff | Elevated card backgrounds, creating strong visual segments and conveying importance. |

## Imagery

Imagery primarily consists of high-contrast, candid lifestyle photography featuring diverse individuals, often cropped tightly and presented as angled, unmasked cutouts. These images are used decoratively to add a human element and dynamic energy, frequently layered over solid color blocks. Icons are minimal, utilizing bold strokes or fills in black or accent colors. Product screenshots are contained within device mockups, maintaining a clean, focused presentation.

## Layout

The page primarily uses a full-bleed layout for background color blocks and hero sections, with text content often centered or presented in two-column arrangements. The hero features a bold, centered headline overlaying the 'Amber Canvas' background with dynamic, angled photo cutouts. Sections alternate between solid color backgrounds (like 'Amber Canvas' and 'Deep Violet') with strong vertical spacing provided by a section gap of 100px. Content blocks, such as testimonial cards, often use a grid-like structure. Elements within sections generally maintain a max-width for readability, but the backgrounds extend full-width. Navigation is a sticky top bar with a centered logo, text links, and a prominent pill-shaped CTA button.

## Similar Brands

- **Stripe** — Uses large, impactful typography, clear functional interface elements on neutral backgrounds, and strategic use of a limited, vibrant accent color for interaction and branding.
- **Linear** — Combines a sense of modern playfulness with high-contrast elements, using bold text, geometric shapes, and a distinctive color palette.
- **Figma** — Features a light theme with clear information hierarchy, strong typography, and a strategic application of playful, saturated colors for key UI elements and branding.
- **Notion** — Employs a clean, spacious layout with a focus on powerful typography and functional colored elements that stand out against a generally light, minimalist canvas.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-amber-canvas: #e1c19e;
  --color-deep-violet: #adabff;
  --color-electric-lime: #e4ff60;
  --color-sky-blue: #7fb6e6;
  --color-hot-pink: #ea5da3;
  --color-forest-green: #6fb853;
  --color-absolute-black: #000000;
  --color-pure-white: #ffffff;
  --color-soft-gray: #f6f6f6;
  --font-body: 'Body', Inter;
  --font-black: 'Black', Oswald;
  --font-regular: 'Regular', Open Sans;
  --font-medium: 'Medium', Inter;
  --font-arial: 'Arial', Arial;
  --font-sharpie: 'Sharpie', Comic Neue;
  --font-epilogue: 'Epilogue', Epilogue;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: -0.252px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.21;
  --tracking-body-sm: -0.252px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.256px;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.252px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.242px;
  --text-heading: 50px;
  --leading-heading: 1.05;
  --tracking-heading: -1.6px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.4px;
  --text-display: 80px;
  --leading-display: 0.87;
  --tracking-display: -2.88px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-69: 69px;
  --spacing-77: 77px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-106: 106px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --spacing-164: 164px;
  --spacing-272: 272px;
  --spacing-284: 284px;
  --radius-misc: 10px;
  --radius-cards: 0px;
  --radius-buttons: 100px;
  --radius-navelements: 14px;
  --surface-amber-canvas: #e1c19;
  --surface-soft-gray: #f6f6f6;
  --surface-pure-white: #ffffff;
  --surface-deep-violet: #adabff;
}
```

### Tailwind v4

```css
@theme {
  --color-amber-canvas: #e1c19e;
  --color-deep-violet: #adabff;
  --color-electric-lime: #e4ff60;
  --color-sky-blue: #7fb6e6;
  --color-hot-pink: #ea5da3;
  --color-forest-green: #6fb853;
  --color-absolute-black: #000000;
  --color-pure-white: #ffffff;
  --color-soft-gray: #f6f6f6;
  --font-body: 'Body', Inter;
  --font-black: 'Black', Oswald;
  --font-regular: 'Regular', Open Sans;
  --font-medium: 'Medium', Inter;
  --font-arial: 'Arial', Arial;
  --font-sharpie: 'Sharpie', Comic Neue;
  --font-epilogue: 'Epilogue', Epilogue;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: -0.252px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.21;
  --tracking-body-sm: -0.252px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.256px;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.252px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.242px;
  --text-heading: 50px;
  --leading-heading: 1.05;
  --tracking-heading: -1.6px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.4px;
  --text-display: 80px;
  --leading-display: 0.87;
  --tracking-display: -2.88px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-69: 69px;
  --spacing-77: 77px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-106: 106px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --spacing-164: 164px;
  --spacing-272: 272px;
  --spacing-284: 284px;
  --radius-misc: 10px;
  --radius-cards: 0px;
  --radius-buttons: 100px;
  --radius-navelements: 14px;
  --surface-amber-canvas: #e1c19;
  --surface-soft-gray: #f6f6f6;
  --surface-pure-white: #ffffff;
  --surface-deep-violet: #adabff;
}
```
