---
version: alpha
name: "SuperHi Plus"
description: "SuperHi Plus employs a vibrant and high-contrast design language, built on a foundation of deep blue and crisp white. Surfaces are predominantly flat, with color providing separation and hierarchy rather than shadows or complex textures. Typography is compact and direct, ensuring quick communication, while generous spacing frames content with confidence. The overall impression is energetic, modern, and direct, using bold color as a primary structuring element."
theme: "dark"
industry: "other"
source_url: "https://superhi.plus"
refero_style_id: "a1f9e844-c4b6-4526-9cfc-81208c50aee1"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512035493-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512035493-thumb.jpg"
extracted_at: "2026-04-30T01:20:56.002Z"
---

# SuperHi Plus — Style Reference

> Electric Blue Canvas: crisp text, confident forms.

**Theme:** dark

**Industry:** other

SuperHi Plus employs a vibrant and high-contrast design language, built on a foundation of deep blue and crisp white. Surfaces are predominantly flat, with color providing separation and hierarchy rather than shadows or complex textures. Typography is compact and direct, ensuring quick communication, while generous spacing frames content with confidence. The overall impression is energetic, modern, and direct, using bold color as a primary structuring element.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| SuperHi Blue | #0033e5 | `--color-superhi-blue` | Dominant background for sections and cards, primary interactive elements, highlights, and borders. This bold blue defines the brand's energetic tone |
| Canvas White | #f0f7ff | `--color-canvas-white` | Primary text color against SuperHi Blue backgrounds, key card surfaces, and subtle borders. Provides stark contrast to the dominant blue |
| Action Highlight Blue | #527ceb | `--color-action-highlight-blue` | Hover or active states for buttons and interactive elements, a slightly lighter variant of the brand blue for subtle feedback |
| Text Black | #000000 | `--color-text-black` | Body text and occasional icon fills against white surfaces. Used sparingly for maximum impact |

## Tokens — Typography

### Haas Grot Disp Web

- **Token:** `--font-haas-grot-disp-web`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 16px, 18px, 24px, 32px, 42px, 56px, 85px
- **Line heights:** 1.13, 1.14, 1.20, 1.25, 1.33, 1.50
- **Letter spacing:** normal
- **Role:** The singular typeface for all content, from headlines to body text. Its simplicity and compact letterforms contribute to the brand's direct and digital aesthetic. All text maintains a weight of 400, relying on size and color for hierarchy.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 16px | 1.5 | — | `--text-body-sm` |
| body | 18px | 1.33 | — | `--text-body` |
| subheading | 24px | 1.25 | — | `--text-subheading` |
| heading-sm | 32px | 1.25 | — | `--text-heading-sm` |
| heading | 42px | 1.14 | — | `--text-heading` |
| heading-lg | 56px | 1.13 | — | `--text-heading-lg` |
| display | 85px | 1.13 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-51 | 51px | `--spacing-51` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| inputs | 2.4px |
| buttons | 16px |
| pillButtons | 72px |
| largeElements | 50px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgb(0, 51, 229) 0px 0px 0px 1px inset | `--shadow-xl` |
| xl-2 | rgb(240, 247, 255) 0px 0px 0px 1px inset | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 60px |
| sectionGap | 24px |
| cardPadding | 22-24px |
| elementGap | 6-16px |

## Components

### Ghost Navigation Button

**Role:** Navigation and secondary actions

Transparent background, Canvas White text and border. Used as a button in navigation for SuperHi Plus. No explicit padding provided in component data, implying content-based sizing.

### Filled Primary Button

**Role:** Primary calls to action

Solid SuperHi Blue background, Canvas White text, 16px border-radius. Padding of 8px vertical and 24px horizontal. Appears for 'View calculator'.

### Pill Primary Button

**Role:** Prominent, primary calls to action with extreme roundedness

Solid SuperHi Blue background, Canvas White text, 72px border-radius. Padding of 6.4-7.2px vertical and 24px horizontal.

### Accent Filled Button (Inactive/Decorative)

**Role:** Decorative or inactive button style

Accent Highlight Blue background, white text (#FFFFFF), 120px border-radius. This variant is shown with no padding, suggesting a decorative purpose.

### Blue Information Card

**Role:** Information display or feature highlights

SuperHi Blue background, 16px border-radius, 24px padding on all sides. Used for sections highlighting aspects like Funding or Support.

### White Detail Card

**Role:** Detailed content display

Canvas White background, 16px border-radius, 24px padding on all sides. Used for sections detailing information or program specifics.

### White Feature Card

**Role:** Prominent feature display

Canvas White background, 24px border-radius, with 22.4px top, 24px horizontal, and 32px bottom padding. Provides a slightly more emphasized presentation than the White Detail Card.

### Outlined Text Input

**Role:** User input fields

Transparent background, SuperHi Blue text and border, 2.4px border-radius. Padding is 3.2px vertical and 24px horizontal. Focus state includes inset border shadow.

## Do's and Don'ts

### Do

- Use SuperHi Blue (#0033e5) as the primary background for content sections and cards to maintain brand identity.
- Utilize Canvas White (#f0f7ff) for all body text and informational elements on SuperHi Blue backgrounds to ensure high contrast and readability.
- Apply a 16px border-radius to all cards and primary buttons, transitioning to 72px for pill-shaped buttons to vary visual emphasis.
- Employ the Haas Grot Disp Web font at weight 400 for all text, relying on the type scale for hierarchy rather than varied weights.
- Maintain a comfortable density with element gaps ranging from 6px to 16px, and card/section padding around 22-24px.
- Use Accent Highlight Blue (#527ceb) specifically for interactive states like button hovers to provide clear feedback.
- Structure pages with alternating sections of SuperHi Blue and Canvas White to create a clear visual rhythm.

### Don't

- Avoid using multiple font weights; stick exclusively to Haas Grot Disp Web weight 400 for consistency.
- Do not introduce drop shadows for elevation; rely on color and border treatments for component separation and visual surfacing.
- Refrain from using heavily saturated colors outside of the defined brand and accent blues.
- Do not use generic black (#000000) for text on blue backgrounds; always use Canvas White (#f0f7ff) for optimal contrast.
- Avoid large imagery that breaks the grid or draws focus from the core UI; keep visuals concise and contained.
- Do not use generic, unrounded rectangles; ensure all interactive elements and containers have a defined border-radius from the token system.
- Do not vary paragraph line-heights excessively; adhere to the defined line-height values appropriate for each text size.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | SuperHi Blue Canvas | #0033e5 | Primary background for the application and major sections. |
| 1 | Canvas White Panel | #f0f7ff | Elevated content areas, detail cards, and explanatory sections that contrast with the main blue canvas. |

## Elevation

- **Shadow 1:** `rgb(0, 51, 229) 0px 0px 0px 1px inset`
- **Shadow 2:** `rgb(240, 247, 255) 0px 0px 0px 1px inset`

## Imagery

This site uses abstract, spherical 3D illustrations with varied emoji-like faces and symbols (X, checkmark) in shades of SuperHi Blue and Canvas White. These visuals are dense, creating a dynamic, almost playful atmosphere on the main blue canvas. Imagery is primarily decorative and atmospheric rather than explanatory. Icons are simple, outlined shapes (money, hourglass, pencil, arrow) for clear functional communication, colored in Canvas White against SuperHi Blue backgrounds. There's also a subtle 3D cylindrical illustration, suggesting product visualization.

## Layout

The page primarily uses a split-screen layout or a max-width contained layout with heavy left/right visual segmentation. The hero section divides the screen horizontally, contrasting a Canvas White left panel with large, bold typography and a SuperHi Blue right panel for introductory text. Subsequent sections alternate between full-width SuperHi Blue and segmented SuperHi Blue panels, maintaining a consistent rhythm. Content is generally stacked vertically within these sections, with some instances of two-column layouts (text beside bulleted lists or features). The page has a fixed max-width for column content, but certain sections, like the hero, utilize a split, full-height design. A sticky header with branded logo appears at the top.

## Similar Brands

- **Figma** — Utilizes a strong brand blue with clean, almost-white surfaces and a functional, direct type hierarchy.
- **Webflow** — Employs a high-contrast dark theme with a prominent brand color on a neutral background for impactful headlines and actions.
- **Linear** — Features a dark mode UI with a single vibrant accent color used for interactive elements and highlights, paired with clean typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-superhi-blue: #0033e5;
  --color-canvas-white: #f0f7ff;
  --color-action-highlight-blue: #527ceb;
  --color-text-black: #000000;
  --font-haas-grot-disp-web: 'Haas Grot Disp Web', Inter;
  --text-body-sm: 16px;
  --leading-body-sm: 1.5;
  --text-body: 18px;
  --leading-body: 1.33;
  --text-subheading: 24px;
  --leading-subheading: 1.25;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.25;
  --text-heading: 42px;
  --leading-heading: 1.14;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.13;
  --text-display: 85px;
  --leading-display: 1.13;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-51: 51px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --radius-cards: 16px;
  --radius-inputs: 2.4px;
  --radius-buttons: 16px;
  --radius-pillbuttons: 72px;
  --radius-largeelements: 50px;
  --shadow-xl: rgb(0, 51, 229) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgb(240, 247, 255) 0px 0px 0px 1px inset;
  --surface-superhi-blue-canvas: #0033e5;
  --surface-canvas-white-panel: #f0f7ff;
}
```

### Tailwind v4

```css
@theme {
  --color-superhi-blue: #0033e5;
  --color-canvas-white: #f0f7ff;
  --color-action-highlight-blue: #527ceb;
  --color-text-black: #000000;
  --font-haas-grot-disp-web: 'Haas Grot Disp Web', Inter;
  --text-body-sm: 16px;
  --leading-body-sm: 1.5;
  --text-body: 18px;
  --leading-body: 1.33;
  --text-subheading: 24px;
  --leading-subheading: 1.25;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.25;
  --text-heading: 42px;
  --leading-heading: 1.14;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.13;
  --text-display: 85px;
  --leading-display: 1.13;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-51: 51px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --radius-cards: 16px;
  --radius-inputs: 2.4px;
  --radius-buttons: 16px;
  --radius-pillbuttons: 72px;
  --radius-largeelements: 50px;
  --shadow-xl: rgb(0, 51, 229) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgb(240, 247, 255) 0px 0px 0px 1px inset;
  --surface-superhi-blue-canvas: #0033e5;
  --surface-canvas-white-panel: #f0f7ff;
}
```
