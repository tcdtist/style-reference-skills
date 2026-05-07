---
version: alpha
name: "v0 by Vercel"
description: "The design feels like a functional schematic on a stark white drafting table. Its nearly monochrome palette — #FFFFFF, #FAFAFA, #EAEAEA, #171717 — creates a utility-first atmosphere where user input is the only source of color. Typography is the main architectural element; a custom sans-serif is used everywhere, with tight negative letter-spacing at large sizes creating dense, impactful headlines. The UI is built from simple primitives: solid black CTAs with an 8px radius and subtly bordered white chips, distinguishing primary commands from secondary suggestions."
theme: "light"
industry: "ai"
source_url: "https://v0.dev"
refero_style_id: "50aa2b8e-4760-4379-a3c1-59b65d8576a7"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929113104-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929113104-thumb.jpg"
extracted_at: "2026-04-11T17:39:37.040Z"
---

# v0 by Vercel — Style Reference

> A Machinist's Blueprint. Precision and function are paramount, with every element serving a clear purpose on a clean, technical surface.

**Theme:** light

**Industry:** ai

The design feels like a functional schematic on a stark white drafting table. Its nearly monochrome palette — #FFFFFF, #FAFAFA, #EAEAEA, #171717 — creates a utility-first atmosphere where user input is the only source of color. Typography is the main architectural element; a custom sans-serif is used everywhere, with tight negative letter-spacing at large sizes creating dense, impactful headlines. The UI is built from simple primitives: solid black CTAs with an 8px radius and subtly bordered white chips, distinguishing primary commands from secondary suggestions.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Paper White | #ffffff | `--color-paper-white` | Text on dark buttons, pill button backgrounds. |
| Canvas | #fafafa | `--color-canvas` | Primary page background. |
| Line | #eaeaea | `--color-line` | Borders for headers, ghost buttons, and dividers. |
| Subtext | #666666 | `--color-subtext` | Secondary text, navigation links, placeholder text. |
| Icon | #7d7d7d | `--color-icon` | Inactive icons and tertiary UI elements. |
| Ink | #171717 | `--color-ink` | Primary text, headlines, and primary button backgrounds. |
| Onyx | #000000 | `--color-onyx` | Logo, icons, highest contrast text. |

## Tokens — Typography

### GeistSans

- **Token:** `--font-geistsans`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 13px, 14px, 15px, 16px, 18px, 20px, 24px, 32px, 48px
- **Line heights:** 1.00, 1.17, 1.25, 1.30, 1.33, 1.43, 1.50, 1.56
- **Letter spacing:** Ranges from -2.88px at 48px to normal at 16px. The progressively tighter tracking on larger sizes is a key brand identifier.
- **OpenType features:** "zero", "ss09", "ss05"
- **Role:** The universal font for all UI text, from body copy to display headings. Weight 600 is used for major headlines, 500 for buttons, and 400 for body text. Its signature is the aggressive negative letter-spacing at large sizes, creating dense, block-like headlines.

### GeistMono

- **Token:** `--font-geistmono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 10px
- **Line heights:** 1.50
- **OpenType features:** "zero"
- **Role:** Used for small, technical annotations or user statistics where tabular alignment is beneficial.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.43 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.56 | — | `--text-subheading` |
| heading-sm | 20px | 1.25 | — | `--text-heading-sm` |
| heading | 24px | 1.33 | -0.48px | `--text-heading` |
| heading-lg | 32px | 1.17 | -1.28px | `--text-heading-lg` |
| display | 48px | 1 | -2.88px | `--text-display` |

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
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-108 | 108px | `--spacing-108` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-224 | 224px | `--spacing-224` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| pills | 9999px |
| inputs | 12px |
| buttons | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 1px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.08) 0px 0px 0px 1px | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.25) 0px 25px 50px -12px | `--shadow-xl-3` |
| xl-4 | rgba(0, 0, 0, 0.04) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 8px 8px -8px | `--shadow-xl-4` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1440px |
| sectionGap | 96px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Main Prompt Input

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Template Filter Pills

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group — Action Hierarchy

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** The main action on a page, like 'Sign Up'.

Solid Ink (#171717) background with Paper White (#ffffff) text. Font is 14px GeistSans at 500 weight. Padding is ~8px vertically and 12px horizontally, with an 8px border radius.

### Ghost Navigation Link

**Role:** Secondary navigation actions like 'Sign In'.

Transparent background with Subtext (#666666) text. No border in its default state. Font is 14px GeistSans at 400 weight.

### Prompt Suggestion Chip

**Role:** Clickable suggestions below the main input.

Transparent background with a 1px Line (#eaeaea) border. Text is Subtext (#666666) at ~13px. Padding is 4px vertically and 8px horizontally, with a 6px border radius.

### Filter Pill Button

**Role:** Filtering content categories like 'Landing Pages'.

A pill-shaped button (9999px radius) with a Paper White (#ffffff) background and Ink (#171717) text. Features a faint 1px border of `rgba(0, 0, 0, 0.08)`.

### Main Prompt Input

**Role:** The primary interaction point for user queries.

A large input field with a 12px border radius and a subtle 1px Line (#eaeaea) border. Placeholder text is Subtext (#666666). On focus, it gets a subtle outer glow.

### Header Divider

**Role:** Separates the sticky header from page content.

A full-width 1px solid border using the Line color (#eaeaea).

## Do's and Don'ts

### Do

- Use GeistSans for all text, without exception.
- Apply aggressive negative letter-spacing to headings 24px and larger.
- Adhere strictly to the achromatic palette; all color comes from content, not chrome.
- Use 8px radius for buttons and 12px for cards and inputs.
- Use 1px solid #eaeaea for all visual dividers.
- Differentiate action hierarchy using fills and borders: solid for primary, bordered for secondary, text-only for tertiary.
- Maintain generous whitespace (min. 96px) between content sections.

### Don't

- Do not introduce any saturated colors to the UI chrome.
- Do not use system fonts or other brand fonts.
- Do not use shadows on interactive elements like buttons or inputs; reserve them for cards.
- Do not use any border-radius values other than 6px, 8px, 12px, or 9999px (for pills).
- Do not use gradients or background images.
- Do not use bold (700+) font weights; rely on 600 weight and size for emphasis.
- Do not create dense layouts; prioritize clarity and space.

## Elevation

- **Template Card:** `0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 2px 1px 0px rgba(0, 0, 0, 0.04)`
- **Modal / Popover:** `0px 25px 50px -12px rgba(0, 0, 0, 0.25)`

## Imagery

This design uses no decorative imagery. Visuals are strictly confined to user-generated content previews within the Template Cards. These thumbnails are presented as raw, unstyled content inside a 12px rounded container. The page is UI-dominant, with imagery serving only to showcase product output, not to build atmosphere.

## Layout

The layout is clean and centered within a generous max-width container (approx. 1440px). The header is full-width with a 1px bottom border. The hero area is a simple centered stack comprising a headline, a large input field, and suggestion chips. Body sections are separated by large vertical whitespace (~96px) on the Canvas (#fafafa) background, creating a spacious rhythm. Content grids, such as the 3-column template gallery, are the primary structure for displaying information.

## Similar Brands

- **Linear** — Shares the high-contrast, black/white/gray palette and surgically precise typography.
- **GitHub** — Similar utilitarian, developer-centric aesthetic with a focus on functional components over decoration.
- **Read.cv** — Extreme typography-first approach on a minimal, monochrome canvas.
- **Height** — Clean, high-contrast UI with a similar approach to minimal buttons and inputs.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-paper-white: #ffffff;
  --color-canvas: #fafafa;
  --color-line: #eaeaea;
  --color-subtext: #666666;
  --color-icon: #7d7d7d;
  --color-ink: #171717;
  --color-onyx: #000000;
  --font-geistsans: 'GeistSans', Inter;
  --font-geistmono: 'GeistMono', IBM Plex Mono;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.25;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.48px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -1.28px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: -2.88px;
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
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-108: 108px;
  --spacing-128: 128px;
  --spacing-224: 224px;
  --radius-cards: 12px;
  --radius-pills: 9999px;
  --radius-inputs: 12px;
  --radius-buttons: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 1px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  --shadow-xl-3: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  --shadow-xl-4: rgba(0, 0, 0, 0.04) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 8px 8px -8px;
}
```

### Tailwind v4

```css
@theme {
  --color-paper-white: #ffffff;
  --color-canvas: #fafafa;
  --color-line: #eaeaea;
  --color-subtext: #666666;
  --color-icon: #7d7d7d;
  --color-ink: #171717;
  --color-onyx: #000000;
  --font-geistsans: 'GeistSans', Inter;
  --font-geistmono: 'GeistMono', IBM Plex Mono;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.25;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.48px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.17;
  --tracking-heading-lg: -1.28px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: -2.88px;
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
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-108: 108px;
  --spacing-128: 128px;
  --spacing-224: 224px;
  --radius-cards: 12px;
  --radius-pills: 9999px;
  --radius-inputs: 12px;
  --radius-buttons: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 1px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  --shadow-xl-3: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  --shadow-xl-4: rgba(0, 0, 0, 0.04) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 8px 8px -8px;
}
```
