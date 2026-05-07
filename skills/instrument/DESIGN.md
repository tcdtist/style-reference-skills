---
version: alpha
name: "Instrument"
description: "Instrument's visual system evokes a stark, high-contrast, minimalist agency aesthetic. Dominated by a monochrome palette of deep nearly-black gray and pure white, it leverages strong typography as its primary visual identity. Typography is both commanding and refined, with distinctive custom typefaces varying dramatically in size and tracking. Components are lightweight and functional, often using ghosting or subtle background tints against large, open white canvases, emphasizing content and a clean, editorial layout."
theme: "light"
industry: "agency"
source_url: "https://www.instrument.com"
refero_style_id: "dcd215e5-3511-4e40-87ff-95c095f44ad6"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509528107-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509528107-thumb.jpg"
extracted_at: "2026-04-30T00:39:35.477Z"
---

# Instrument — Style Reference

> High-contrast typographic canvas

**Theme:** light

**Industry:** agency

Instrument's visual system evokes a stark, high-contrast, minimalist agency aesthetic. Dominated by a monochrome palette of deep nearly-black gray and pure white, it leverages strong typography as its primary visual identity. Typography is both commanding and refined, with distinctive custom typefaces varying dramatically in size and tracking. Components are lightweight and functional, often using ghosting or subtle background tints against large, open white canvases, emphasizing content and a clean, editorial layout.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #070708 | `--color-midnight-ink` | Primary text, surface backgrounds for negative space, strong borders, strong button fills |
| White Canvas | #ffffff | `--color-white-canvas` | Page backgrounds, card surfaces, button text on filled backgrounds, ghost button borders |
| Midtone Gray | #808080 | `--color-midtone-gray` | Muted text, secondary navigation, badge borders, subtle iconography |
| Faded Ink | #0707081f | `--color-faded-ink` | Subtle badge backgrounds, input borders, ghost hover states |
| Translucent White | #ffffff80 | `--color-translucent-white` | Supporting palette color for small decorative accents when the core palette needs contrast. Do not promote it to the primary CTA color |

## Tokens — Typography

### Instrument-Sans

- **Token:** `--font-instrument-sans`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 11px, 12px, 14px, 15px, 16px, 18px, 19px, 23px, 28px, 36px, 352px
- **Line heights:** 0.85, 1.00, 1.11, 1.14, 1.22, 1.26, 1.33, 1.43, 1.45, 1.56, 1.60
- **Letter spacing:** -0.0500em, -0.0250em, -0.0100em, -0.0050em, 0.0050em, 0.0200em, 0.0300em, 0.0500em, 0.0800em, 0.1100em
- **OpenType features:** "liga", "ss12"
- **Role:** Primary text for body, navigation, buttons, and most informational elements. Its diverse sizes and precise tracking allow it to span from compact utility text to expansive hero statements.

### Instrument-Serif

- **Token:** `--font-instrument-serif`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 64px, 352px
- **Line heights:** 0.85, 1.13
- **Letter spacing:** -0.0500em, -0.0200em
- **OpenType features:** "liga", "ss12"
- **Role:** For large display headlines and hero text. The serif provides a counterpoint to the sans-serif's modernity, adding an editorial gravitas.

### Instrument-Serif-Italic

- **Token:** `--font-instrument-serif-italic`
- **Substitute:** Playfair Display Italic
- **Weights:** 400
- **Sizes:** 352px
- **Line heights:** 0.85
- **Letter spacing:** -0.0500em
- **OpenType features:** "liga", "ss12"
- **Role:** Used for specific large, stylized headline accents, leveraging its italic form for dramatic effect.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.45 | 0.44px | `--text-caption` |
| body | 14px | 1.33 | 0.056px | `--text-body` |
| subheading | 18px | 1.22 | -0.09px | `--text-subheading` |
| heading-sm | 23px | 1.26 | -0.23px | `--text-heading-sm` |
| heading | 28px | 1.14 | -0.28px | `--text-heading` |
| heading-lg | 36px | 1.11 | -0.36px | `--text-heading-lg` |
| display | 64px | 1.13 | -1.28px | `--text-display` |
| display-xl | 352px | 0.85 | -17.6px | `--text-display-xl` |

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
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-215 | 215px | `--spacing-215` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 999px |
| cards | 24px |
| inputs | 8px |
| buttons | 999px |
| minimal | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Pill Ghost Button

**Role:** Primary navigation and filter controls.

Rounded shape with `999px` border radius, translucent white background at `rgba(255, 255, 255, 0.5)`, `Midnight Ink` text. `0px` inner padding. Minimalist and soft.

### Outline Text Button

**Role:** Secondary actions and category filters.

Text in `Midnight Ink`, no background, with `Midnight Ink` border. Square, `0px` border radius. `0px` inner padding. Emphasizes text over button form.

### Soft Rectangular Button

**Role:** Filter controls on darker backgrounds or for a slightly more defined appearance.

Solid white background `#ffffff`, `Midnight Ink` text, with a `32px` border radius. `0px` inner padding. Offers a soft, distinct action area.

### Filled Square Button

**Role:** Interactive elements requiring strong visual presence on white backgrounds.

Solid `Midnight Ink` background `#070708`, `White Canvas` text, `0px` border radius, `20px` horizontal padding. Used for high-contrast actions.

### Transparent Card

**Role:** Content presentation where the background provides context.

No background color `rgba(0, 0, 0, 0)`, `0px` border radius, no shadow, `0px` padding. Acts as a content wrapper without visual boundaries.

### Rounded Card

**Role:** Visual highlights for individual content blocks.

No background color `rgba(0, 0, 0, 0)`, `24px` border radius, no shadow, `0px` padding. Subtly lifts content from the background.

### Input Field

**Role:** Data entry forms.

Translucent white background `rgba(255, 255, 255, 0.12)`, `White Canvas` text, `White Canvas` border, `8px` border radius, `12px` vertical and `16px` horizontal padding.

### Transparent Badge

**Role:** Minimalist labels and tags.

No background, `Midnight Ink` text, `0px` border radius, `0px` padding. Blends seamlessly with surrounding text.

### Pill Badge

**Role:** Category tags and filters.

Faded Ink background `rgba(7, 7, 8, 0.12)`, `Midnight Ink` text, `999px` border radius, `4px` vertical and `10px` horizontal padding. Provides a soft, distinguishable label.

## Do's and Don'ts

### Do

- Prioritize `Midnight Ink` text (`#070708`) on `White Canvas` (`#ffffff`) for readability and high contrast.
- Use `Instrument-Sans` for all body text, navigation, and button labels, adjusting sizes and letter-spacing for impact.
- Apply `999px` border-radius to all buttons and badges for a consistent pill-like shape.
- Break up page content with distinct blocks of `Midnight Ink` background for dramatic negative space and visual hierarchy.
- Employ `24px` for internal card padding and image corner rounding to maintain soft block definition.
- Utilize the `Instrument-Serif` typeface sparingly for large, editorial headlines to introduce a layer of sophisticated tension.
- Maintain a compact spacing density, generally utilizing multiples of `4px` with an `8px` base unit for element gaps.

### Don't

- Avoid generic border radii; stick to `0px`, `8px`, `24px`, `32px`, or `999px` as defined.
- Do not introduce strong accent colors; the palette is strictly monochrome with subtle translucent effects.
- Refrain from using shadows or heavy elevation styles; surfaces should remain flat or use minimal transparency.
- Do not deviate from the specified typefaces and their distinct letter-spacing values to preserve the brand's typographic identity.
- Avoid excessive padding or large gaps between elements; maintain a compact, information-dense layout where appropriate.
- Do not use generic system fonts; `Instrument-Sans` and `Instrument-Serif` are central to the brand.
- Do not dilute the high-contrast ethos with mid-tone backgrounds or multiple shades of gray for primary content areas.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | White Canvas | #ffffff | Dominant background for pages and sections, creating a spacious, clean feel. |
| 1 | Midnight Ink | #070708 | Background for bold, immersive sections, video players, and header/footer blocks, providing strong contrast. |

## Imagery

This system primarily uses product screenshots and abstract graphic artwork in a contained, card-like format. Photography is largely absent, focusing instead on digital renders and stylized brand visuals. Imagery is either contained within clean, rounded or sharp-edged card structures, or used as full-bleed background for hero sections. Icons are minimal, featuring outlined, mono-color designs that align with the stark aesthetic. The visual density is image-heavy in portfolio grids, alternating with text-dominant editorial blocks, where images serve as key content indicators rather than decorative elements.

## Layout

The page primarily uses a full-bleed layout, allowing sections to stretch edge-to-edge. Content within these sections often appears to be contained within an implicit maximum width, centrally aligned. The hero section features large, centered typography over a full-bleed black background. Section rhythm alternates between large, open white canvas areas and immersive, full-bleed black blocks. Content is arranged in alternating text-and-image two-column layouts, often with the text on the left and visual on the right, or in multi-column card grids for portfolio and articles. Navigation is a minimalist top bar, with sticky header behavior. Vertical spacing between sections is consistent, typically using `24px` as a base unit for vertical rhythm.

## Similar Brands

- **Huge Inc.** — Shares a sophisticated, high-contrast, text-heavy design with a monochrome palette and strong typographic presence.
- **Basic Agency** — Known for stark, minimalist layouts, prominent use of custom typography, and a subdued color palette to convey agency work.
- **Work & Co** — Utilizes a clean, white-space dominant aesthetic with a focus on editorial-style content presentation and bold sans-serif headlines.
- **Fantasy** — Features strong, graphic typography, dramatic use of dark backgrounds for immersive sections, and a focus on high-fidelity visual presentation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #070708;
  --color-white-canvas: #ffffff;
  --color-midtone-gray: #808080;
  --color-faded-ink: #0707081f;
  --color-translucent-white: #ffffff80;
  --font-instrument-sans: 'Instrument-Sans', Inter;
  --font-instrument-serif: 'Instrument-Serif', Playfair Display;
  --font-instrument-serif-italic: 'Instrument-Serif-Italic', Playfair Display Italic;
  --text-caption: 11px;
  --leading-caption: 1.45;
  --tracking-caption: 0.44px;
  --text-body: 14px;
  --leading-body: 1.33;
  --tracking-body: 0.056px;
  --text-subheading: 18px;
  --leading-subheading: 1.22;
  --tracking-subheading: -0.09px;
  --text-heading-sm: 23px;
  --leading-heading-sm: 1.26;
  --tracking-heading-sm: -0.23px;
  --text-heading: 28px;
  --leading-heading: 1.14;
  --tracking-heading: -0.28px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.11;
  --tracking-heading-lg: -0.36px;
  --text-display: 64px;
  --leading-display: 1.13;
  --tracking-display: -1.28px;
  --text-display-xl: 352px;
  --leading-display-xl: 0.85;
  --tracking-display-xl: -17.6px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-215: 215px;
  --radius-tags: 999px;
  --radius-cards: 24px;
  --radius-inputs: 8px;
  --radius-buttons: 999px;
  --radius-minimal: 0px;
  --surface-white-canvas: #ffffff;
  --surface-midnight-ink: #070708;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #070708;
  --color-white-canvas: #ffffff;
  --color-midtone-gray: #808080;
  --color-faded-ink: #0707081f;
  --color-translucent-white: #ffffff80;
  --font-instrument-sans: 'Instrument-Sans', Inter;
  --font-instrument-serif: 'Instrument-Serif', Playfair Display;
  --font-instrument-serif-italic: 'Instrument-Serif-Italic', Playfair Display Italic;
  --text-caption: 11px;
  --leading-caption: 1.45;
  --tracking-caption: 0.44px;
  --text-body: 14px;
  --leading-body: 1.33;
  --tracking-body: 0.056px;
  --text-subheading: 18px;
  --leading-subheading: 1.22;
  --tracking-subheading: -0.09px;
  --text-heading-sm: 23px;
  --leading-heading-sm: 1.26;
  --tracking-heading-sm: -0.23px;
  --text-heading: 28px;
  --leading-heading: 1.14;
  --tracking-heading: -0.28px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.11;
  --tracking-heading-lg: -0.36px;
  --text-display: 64px;
  --leading-display: 1.13;
  --tracking-display: -1.28px;
  --text-display-xl: 352px;
  --leading-display-xl: 0.85;
  --tracking-display-xl: -17.6px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-215: 215px;
  --radius-tags: 999px;
  --radius-cards: 24px;
  --radius-inputs: 8px;
  --radius-buttons: 999px;
  --radius-minimal: 0px;
  --surface-white-canvas: #ffffff;
  --surface-midnight-ink: #070708;
}
```
