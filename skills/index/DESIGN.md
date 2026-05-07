---
version: alpha
name: "Index"
description: "Index employs a stark, high-contrast visual identity, reminiscent of avant-garde print media. The design prioritizes typography, using a mix of serif, sans-serif, and condensed styles to convey distinct content hierarchy against a largely achromatic canvas. Interactivity is highlighted through simple border treatments and monochromatic fills, with navigation elements often appearing as outlined or inverted states rather than distinct chromatic accents. Layouts are content-centered, favoring clear segmentation and generous vertical spacing to emphasize textual information."
theme: "light"
industry: "agency"
source_url: "https://index-space.org"
refero_style_id: "b1ec2120-ceb0-42d1-9f96-2c9db2bf009b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519942048-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519942048-thumb.jpg"
extracted_at: "2026-04-30T03:32:44.015Z"
---

# Index — Style Reference

> monochrome academic journal

**Theme:** light

**Industry:** agency

Index employs a stark, high-contrast visual identity, reminiscent of avant-garde print media. The design prioritizes typography, using a mix of serif, sans-serif, and condensed styles to convey distinct content hierarchy against a largely achromatic canvas. Interactivity is highlighted through simple border treatments and monochromatic fills, with navigation elements often appearing as outlined or inverted states rather than distinct chromatic accents. Layouts are content-centered, favoring clear segmentation and generous vertical spacing to emphasize textual information.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| White Canvas | #ffffff | `--color-white-canvas` | Page backgrounds, card surfaces, ghost button backgrounds, default text for dark surfaces |
| Ink Black | #000000 | `--color-ink-black` | Primary text, surface backgrounds, button fills, borders, navigation elements. Defines the core high-contrast aesthetic |

## Tokens — Typography

### ABCDiatypeLight

- **Token:** `--font-abcdiatypelight`
- **Substitute:** Arial
- **Weights:** 300, 400
- **Sizes:** 12px, 16px, 24px, 30px, 50px, 56px, 80px
- **Line heights:** 0.90, 1.10, 1.20, 1.25
- **Letter spacing:** -0.0370em at 80px, -0.0270em at 56px, -0.0150em at 30px, -0.0090em at 24px, 0.0080em at 12px
- **Role:** Headings, descriptive sub-text, navigation items, interactive elements. Its light weight adds a contemporary and airy feel, contrasting with the bold visual identity.

### Times New Roman

- **Token:** `--font-times-new-roman`
- **Substitute:** Times New Roman
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Body text, annotations, standard interface labels. Provides a classic, legible base for long-form content.

### ITCGaramondStdLtCond

- **Token:** `--font-itcgaramondstdltcond`
- **Substitute:** Georgia
- **Weights:** 300, 400
- **Sizes:** 20px, 24px, 40px, 50px, 75px
- **Line heights:** 1.00, 1.05, 1.20, 2.10
- **Letter spacing:** -0.0220em at 75px, 0.0110em at 20px, 0.0180em at 24px
- **Role:** Prominent headings and section titles. Its condensed nature creates a striking, editorial aesthetic, demanding attention through form rather than size alone.

### IndexLogotype

- **Token:** `--font-indexlogotype`
- **Substitute:** Verdana
- **Weights:** 300
- **Sizes:** 50px
- **Line heights:** 0.90
- **Letter spacing:** normal
- **Role:** Brand logo in navigation. A unique and custom font used sparingly to reinforce brand identity.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.25 | 0.096px | `--text-caption` |
| body | 16px | 1.2 | — | `--text-body` |
| subheading | 24px | 1.2 | -0.216px | `--text-subheading` |
| heading | 40px | 1 | -0.88px | `--text-heading` |
| heading-lg | 56px | 1.1 | -1.512px | `--text-heading-lg` |
| display | 80px | 0.9 | -2.96px | `--text-display` |

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
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-105 | 105px | `--spacing-105` |
| spacing-260 | 260px | `--spacing-260` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| pills | 100px |
| buttons | 0px |
| default | 6px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 520px |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 8px |

## Components

### Filled Primary Button

**Role:** Call to action, critical navigation.

Solid Ink Black background with White Canvas text. Features 0px border-radius, 20px padding on all sides. Used for prominent, affirmative actions.

### Ghost Border Button

**Role:** Secondary actions, emphasis on linked text.

Transparent background with Ink Black text and 1px Ink Black border. No padding, designed for inline text-like integration. Appears text-only at specific instances. Rectangular, 0px border-radius.

### Pill Outline Button

**Role:** Tagging, category filters.

Ink Black text and 1px Ink Black border on a White Canvas background. Features 100px border-radius, creating a pill shape. Very minimal padding (e.g., 0px vertical, 20px horizontal).

### Navigation Link

**Role:** Top-level navigation and utility links.

Ink Black text with 0px padding, visually distinct from surrounding content through context and font style rather than explicit styling. Hover state may show border.

### Simple Card (Dark)

**Role:** Content grouping, featured sections.

Ink Black background with 16px border-radius. No explicit padding inside from data, implying content controls its own spacing.

### Search Input (Outlined)

**Role:** Site search, form fields.

Transparent background with White Canvas placeholder/text, 1px White Canvas border. 0px border-radius. Features 1px vertical padding and 40px left padding for icon integration.

## Do's and Don'ts

### Do

- Prioritize Ink Black (#000000) and White Canvas (#ffffff) for all background, text, and border elements to maintain high contrast.
- Use ABCDiatypeLight (weight 300, -0.0370em at 80px) for prominent headlines to achieve a modern, airy feel.
- Employ ITCGaramondStdLtCond (weight 300, -0.0220em at 75px) for critical section titles, leveraging its condensed form for visual impact.
- Apply 0px border-radius to all filled buttons to maintain a sharp, deliberate aesthetic.
- Ensure section gaps consistently use 40px vertical spacing for clear content segmentation.
- Center all page content and adhere to a maximum width of 520px to create a focused reading experience.
- Utilize 1px borders with Ink Black (#000000) for interactive elements and content divisions to establish structure without heavy visual weight.

### Don't

- Avoid using any colors outside of the Ink Black (#000000) and White Canvas (#ffffff) palette for primary UI elements.
- Do not introduce rounded corners for primary buttons or input fields; maintain the strict 0px border-radius.
- Refrain from using shadows or artificial elevation, as the design system relies on stark color contrast and borders for depth.
- Do not deviate from the specified type scales and letter-spacing for ABCDiatypeLight or ITCGaramondStdLtCond; these are critical for brand typography.
- Avoid full-bleed layouts for main content sections; always constrain content to the 520px maximum width.
- Do not apply padding to inline interactive elements unless explicitly defined as a button variant; text links should primarily rely on their typographic styling.
- Never use generic block quotes or colored background for content emphasis; rely on typographic hierarchy and borders.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | White Canvas | #ffffff | Primary page and main content background. |
| 2 | Ink Black | #000000 | Elevated card backgrounds, banner sections, and strong visual grouping zones. |

## Similar Brands

- **Are.na** — Stark, monochrome aesthetic with a focus on simple borders and typographic hierarchy for content organization.
- **The Browser Company (Arc)** — Reliance on a minimal, high-contrast palette and distinct typography to define brand identity, with an emphasis on functional UI elements over decorative visuals.
- **AIGA (early websites)** — Editorial, text-heavy approach with high regard for classic typography and a clean, almost academic presentation of information.
- **Stripe (documentation)** — Clear, direct information architecture supported by a predominantly grayscale palette and subtle interactivity through outlined elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-white-canvas: #ffffff;
  --color-ink-black: #000000;
  --font-abcdiatypelight: 'ABCDiatypeLight', Arial;
  --font-times-new-roman: 'Times New Roman', Times New Roman;
  --font-itcgaramondstdltcond: 'ITCGaramondStdLtCond', Georgia;
  --font-indexlogotype: 'IndexLogotype', Verdana;
  --text-caption: 12px;
  --leading-caption: 1.25;
  --tracking-caption: 0.096px;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.216px;
  --text-heading: 40px;
  --leading-heading: 1;
  --tracking-heading: -0.88px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.512px;
  --text-display: 80px;
  --leading-display: 0.9;
  --tracking-display: -2.96px;
  --spacing-4: 4px;
  --spacing-5: 5px;
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
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-105: 105px;
  --spacing-260: 260px;
  --radius-cards: 16px;
  --radius-pills: 100px;
  --radius-buttons: 0px;
  --radius-default: 6px;
  --surface-white-canvas: #ffffff;
  --surface-ink-black: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-white-canvas: #ffffff;
  --color-ink-black: #000000;
  --font-abcdiatypelight: 'ABCDiatypeLight', Arial;
  --font-times-new-roman: 'Times New Roman', Times New Roman;
  --font-itcgaramondstdltcond: 'ITCGaramondStdLtCond', Georgia;
  --font-indexlogotype: 'IndexLogotype', Verdana;
  --text-caption: 12px;
  --leading-caption: 1.25;
  --tracking-caption: 0.096px;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.216px;
  --text-heading: 40px;
  --leading-heading: 1;
  --tracking-heading: -0.88px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.512px;
  --text-display: 80px;
  --leading-display: 0.9;
  --tracking-display: -2.96px;
  --spacing-4: 4px;
  --spacing-5: 5px;
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
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-105: 105px;
  --spacing-260: 260px;
  --radius-cards: 16px;
  --radius-pills: 100px;
  --radius-buttons: 0px;
  --radius-default: 6px;
  --surface-white-canvas: #ffffff;
  --surface-ink-black: #000000;
}
```
