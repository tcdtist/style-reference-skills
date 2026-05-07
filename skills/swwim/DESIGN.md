---
version: alpha
name: "Swwim"
description: "Swwim projects a bold, impactful, and trustworthy brand image using a striking primary blue contrasted with crisp white typography. The design emphasizes clear hierarchy through large, confident sans-serif headlines and functional, rounded secondary elements. Its comfortable density allows content to breathe while maintaining a strong visual presence. Accents are primarily subtle and tonal, reinforcing the main brand blue."
theme: "light"
industry: "agency"
source_url: "https://www.weswwim.com"
refero_style_id: "5cb1fbe8-b539-4482-b645-74a745332965"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515806273-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777515806273-thumb.jpg"
extracted_at: "2026-04-30T02:23:51.318Z"
---

# Swwim — Style Reference

> Deep Ocean Canvas

**Theme:** light

**Industry:** agency

Swwim projects a bold, impactful, and trustworthy brand image using a striking primary blue contrasted with crisp white typography. The design emphasizes clear hierarchy through large, confident sans-serif headlines and functional, rounded secondary elements. Its comfortable density allows content to breathe while maintaining a strong visual presence. Accents are primarily subtle and tonal, reinforcing the main brand blue.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ocean Blue | #1658b3 | `--color-ocean-blue` | Primary brand color for backgrounds and prominent headings, indicating stability and clarity |
| Midnight Indigo | #0d3c88 | `--color-midnight-indigo` | Darker variant used for footer backgrounds, subtle textural elements, and deeper tonal contrast |
| Sky Blue | #015fee | `--color-sky-blue` | Decorative fill for illustrations and graphical elements, adding visual interest |
| Horizon Blue | #01295f | `--color-horizon-blue` | Subtler fill for decorative graphics, providing depth within brand blue hues |
| Canvas White | #ffffff | `--color-canvas-white` | Default page background, primary text color on dark surfaces, and button fills for contrast |
| Smoke Grey | #e5e7eb | `--color-smoke-grey` | Hairline borders, subtle dividers, and inactive states, used for structural separation |
| Jet Black | #000000 | `--color-jet-black` | Default text color on light backgrounds and for high-contrast icons |
| Parchment | #eee1d9 | `--color-parchment` | Decorative fill and stroke for accent graphics and illustrations |

## Tokens — Typography

### Greycliff

- **Token:** `--font-greycliff`
- **Substitute:** system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
- **Weights:** 400, 500, 700
- **Sizes:** 14px, 16px, 18px, 20px, 24px, 30px
- **Line heights:** 1.20, 1.25, 1.33, 1.40, 1.43, 1.50, 1.56
- **Role:** Primary font for body text, links, and less prominent headings, providing clear readability and a modern aesthetic. Weights 400 and 500 maintain a professional yet approachable feel across UI elements.

### Baton Turbo

- **Token:** `--font-baton-turbo`
- **Substitute:** Impact, 'Arial Black', sans-serif
- **Weights:** 400
- **Sizes:** 14px, 16px, 18px, 29px, 36px, 48px, 151px
- **Line heights:** 1.00, 1.11, 1.43, 1.50, 1.56
- **Role:** Signature display font primarily for large, impactful headlines, conveying a bold and authoritative brand voice due to its condensed, blocky nature. Its use is reserved for maximum visual effect.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.5 | 0px | `--text-caption` |
| body | 16px | 1.5 | 0px | `--text-body` |
| subheading | 18px | 1.43 | 0px | `--text-subheading` |
| heading-sm | 20px | 1.4 | 0px | `--text-heading-sm` |
| heading | 24px | 1.33 | 0px | `--text-heading` |
| heading-lg | 30px | 1.25 | 0px | `--text-heading-lg` |
| display | 151px | 1 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-74 | 74px | `--spacing-74` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-188 | 188px | `--spacing-188` |
| spacing-224 | 224px | `--spacing-224` |
| spacing-287 | 287px | `--spacing-287` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 9999px |
| cards | 0px |
| buttons | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1080px |
| sectionGap | 24px |
| cardPadding | 24px |
| elementGap | 4px |

## Components

### Outline Ghost Button

**Role:** Interactive element for secondary actions.

Background: transparent (rgba(0, 0, 0, 0)). Text Color: Canvas White (#ffffff). Border: 1px solid Smoke Grey (#e5e7eb) with 9999px radius. Padding: 8px vertical, 16px horizontal.

### Solid White Button

**Role:** Primary Call to Action.

Background: Canvas White (#ffffff). Text Color: Ocean Blue (#1658b3). Radius: 9999px. Padding: 8px vertical, 24px horizontal.

### Text Link Button

**Role:** Minor interactive elements and navigation links.

Background: transparent (rgba(0, 0, 0, 0)). Text Color: Canvas White (#ffffff). No border, no radius, no padding.

### Hero Headline

**Role:** Primary visual communication on section headers.

Font: Baton Turbo, weight 400. Font size varies greatly (e.g., 151px in hero). Color: Canvas White (#ffffff). Letter spacing: normal. Appears over Ocean Blue background.

### Body Text

**Role:** Standard conveying informational detail.

Font: Greycliff, weight 400. Font size 16px. Line height: 1.5. Color: Canvas White (#ffffff) on dark backgrounds, Jet Black (#000000) on light backgrounds.

### Navigation Item

**Role:** Interactive element for site navigation.

Font: Greycliff, weight 400. Text Color: Canvas White (#ffffff). No background, border, or radius. Padding: 0px.

## Do's and Don'ts

### Do

- Use Ocean Blue (#1658b3) as the dominant background for hero sections and key informational blocks.
- Employ Baton Turbo font (weight 400) exclusively for large, impactful headlines, ensuring normal letter spacing.
- Style all primary action buttons with Canvas White (#ffffff) background, Ocean Blue (#1658b3) text, and a 9999px border-radius with 8px vertical and 24px horizontal padding.
- Utilize Smoke Grey (#e5e7eb) for subtle 1px borders on cards and dividers, creating clear structural separation without visual weight.
- Apply a 9999px border-radius to all buttons and tags to maintain a consistent soft, modern edge.
- Set default body text in Greycliff (weight 400, 16px) with Canvas White (#ffffff) on dark fields and Jet Black (#000000) on light fields.

### Don't

- Do not use Baton Turbo for body text or subheadings; reserve it for large display typography only.
- Avoid using multiple accent colors; stick to the brand blue palette and neutrals for all UI elements.
- Do not introduce square corners on interactive elements; all buttons and small components should use the 9999px radius.
- Refrain from heavy drop shadows or complex elevation; maintain a generally flat and clean aesthetic with minimal border emphasis.
- Do not use dark text colors on Ocean Blue (#1658b3) backgrounds, always prioritize Canvas White (#ffffff) for readability.
- Avoid using gradients beyond decorative illustrations; UI surfaces should remain solid color fills.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Default page background for general content areas, providing a clean base. |
| 1 | Smoke Grey | #e5e7eb | Subtle background for UI elements like borders and inactive states, hinting at depth. |
| 2 | Ocean Blue | #1658b3 | Prominent background for hero sections, interactive blocks, and key informational areas. |
| 3 | Midnight Indigo | #0d3c88 | Darker background for footers and rich content sections, providing strong visual contrast. |

## Imagery

The imagery style is a mix of high-quality, muted photographs and blocky, abstract illustrations. Photographs, when present, appear as small, contained visual accents, often cropped tightly on products or context-setting elements (e.g., a hand, a flag) rather than expansive lifestyle shots. Illustrations use the brand's blue palette and parchment, featuring bold, geometric shapes and limited detail, serving a decorative atmosphere rather than explanatory content. Icons are minimal, outlined, and primarily monochromatic white on dark backgrounds or black on light backgrounds, maintaining a light stroke weight. The overall density is text-dominant, with imagery serving as visual punctuation or supporting accents.

## Layout

The page uses a maximum-width contained layout at 1080px, with content centered. The hero section is full-bleed Ocean Blue (#1658b3) with a large, centered headline and secondary descriptive text, often featuring abstract illustrations or small, contrast-rich photographs. Sections primarily feature comfortable vertical spacing (around 24px) but can vary. Content arrangement favors a stacked approach, especially for headlines and body text, with occasional two-column layouts pairing text with imagery. Card grids are not prominently featured in the provided view. The navigation is a minimalist top bar with 'Contact Us' and 'Menu' buttons on the right, floating above the hero.

## Similar Brands

- **Social Chain** — Bold use of primary brand color as background for hero/key sections, large confident typography.
- **Wave.video** — Heavy reliance on a strong blue as the main brand identifier, paired with clean white text for impact.
- **Buzzer** — Minimal UI elements with a focus on strong typographic hierarchy and specific rounded button styles.
- **Hootsuite** — Clear, direct visual language with a dominant blue palette and a mix of strong headlines and functional body text.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ocean-blue: #1658b3;
  --color-midnight-indigo: #0d3c88;
  --color-sky-blue: #015fee;
  --color-horizon-blue: #01295f;
  --color-canvas-white: #ffffff;
  --color-smoke-grey: #e5e7eb;
  --color-jet-black: #000000;
  --color-parchment: #eee1d9;
  --font-greycliff: 'Greycliff', system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-baton-turbo: 'Baton Turbo', Impact, 'Arial Black', sans-serif;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --tracking-subheading: 0px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: 0px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: 0px;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: 0px;
  --text-display: 151px;
  --leading-display: 1;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-74: 74px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-188: 188px;
  --spacing-224: 224px;
  --spacing-287: 287px;
  --radius-tags: 9999px;
  --radius-cards: 0px;
  --radius-buttons: 9999px;
  --surface-canvas-white: #ffffff;
  --surface-smoke-grey: #e5e7eb;
  --surface-ocean-blue: #1658b3;
  --surface-midnight-indigo: #0d3c88;
}
```

### Tailwind v4

```css
@theme {
  --color-ocean-blue: #1658b3;
  --color-midnight-indigo: #0d3c88;
  --color-sky-blue: #015fee;
  --color-horizon-blue: #01295f;
  --color-canvas-white: #ffffff;
  --color-smoke-grey: #e5e7eb;
  --color-jet-black: #000000;
  --color-parchment: #eee1d9;
  --font-greycliff: 'Greycliff', system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-baton-turbo: 'Baton Turbo', Impact, 'Arial Black', sans-serif;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --tracking-subheading: 0px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: 0px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: 0px;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: 0px;
  --text-display: 151px;
  --leading-display: 1;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-74: 74px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-188: 188px;
  --spacing-224: 224px;
  --spacing-287: 287px;
  --radius-tags: 9999px;
  --radius-cards: 0px;
  --radius-buttons: 9999px;
  --surface-canvas-white: #ffffff;
  --surface-smoke-grey: #e5e7eb;
  --surface-ocean-blue: #1658b3;
  --surface-midnight-indigo: #0d3c88;
}
```
