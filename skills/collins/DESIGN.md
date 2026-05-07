---
version: alpha
name: "COLLINS"
description: "COLLINS employs a minimalist, sophisticated aesthetic, utilizing a pale canvas and precise typography to convey authority and restraint. The visual identity emphasizes clarity with high-contrast text and a deliberate absence of busy elements. Subtle interaction cues and carefully defined spacing create a sense of calm composure, allowing content to take precedence. The system avoids vibrant colors, relying instead on a refined neutral palette for impact."
theme: "light"
industry: "agency"
source_url: "https://wearecollins.com"
refero_style_id: "cf733c2a-dca1-46af-b41d-5e1d354e4297"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508716564-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508716564-thumb.jpg"
extracted_at: "2026-04-30T00:25:37.722Z"
---

# COLLINS — Style Reference

> Architectural parchment and chiseled stone

**Theme:** light

**Industry:** agency

COLLINS employs a minimalist, sophisticated aesthetic, utilizing a pale canvas and precise typography to convey authority and restraint. The visual identity emphasizes clarity with high-contrast text and a deliberate absence of busy elements. Subtle interaction cues and carefully defined spacing create a sense of calm composure, allowing content to take precedence. The system avoids vibrant colors, relying instead on a refined neutral palette for impact.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Parchment | #f8f8f7 | `--color-canvas-parchment` | Page backgrounds, large inactive panels, secondary button text |
| Absolute White | #ffffff | `--color-absolute-white` | Button backgrounds for ghost buttons, borders, and some text elements |
| Deep Onyx | #140700 | `--color-deep-onyx` | Primary text, headings, button backgrounds for filled buttons, primary borders. This near-black provides a stark, authoritative contrast |
| Pewter Accent | #cccccc | `--color-pewter-accent` | Subtle borders, inactive text, subtle background fills |
| Slate Echo | #5e5855 | `--color-slate-echo` | Muted text, secondary headings, soft borders |
| Shadowed Steel | #514c49 | `--color-shadowed-steel` | Muted text, accent borders with slightly more depth than Pewter |

## Tokens — Typography

### Times

- **Token:** `--font-times`
- **Substitute:** serif
- **Weights:** 500
- **Sizes:** 16px, 19px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Primary headings and select stylized text. The classic serif conveys heritage and gravitas, used for visual impact.

### Graphik

- **Token:** `--font-graphik`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 11px, 12px, 14px, 16px, 18px, 28px
- **Line heights:** 1.00, 1.05, 1.20, 1.30
- **Letter spacing:** -0.53px at 11px, -0.47px at 12px, -0.36px at 14px, -0.26px at 16px, -0.28px at 18px, -0.45px at 28px
- **OpenType features:** "kern", "liga"
- **Role:** Body text, navigation, and button labels - provides modern legibility with tight tracking for a contemporary feel.

### Portrait Text

- **Token:** `--font-portrait-text`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 36px, 72px
- **Line heights:** 1.00, 1.05
- **Letter spacing:** -0.72px at 36px, -1.44px at 72px
- **OpenType features:** "kern", "liga"
- **Role:** Display headings and prominent statements. The narrow tracking and sophisticated serif create a refined, impactful presence.

### Arial

- **Token:** `--font-arial`
- **Substitute:** sans-serif
- **Weights:** 400
- **Sizes:** 13px, 16px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Subtler button text, navigation sub-items, and some body copy, offering a highly readable, unpretentious voice.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1 | -0.58px | `--text-caption` |
| body | 14px | 1.2 | -0.21px | `--text-body` |
| body-lg | 16px | 1.2 | -0.16px | `--text-body-lg` |
| subheading | 18px | 1.05 | -0.18px | `--text-subheading` |
| heading | 28px | 1.05 | -0.28px | `--text-heading` |
| heading-lg | 36px | 1.05 | -0.72px | `--text-heading-lg` |
| display | 72px | 1.05 | -1.44px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-98 | 98px | `--spacing-98` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-170 | 170px | `--spacing-170` |
| spacing-224 | 224px | `--spacing-224` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| buttons | 96px |
| general | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 24px |
| elementGap | 16px |

## Components

### Primary Filled Button

**Role:** Call to action for key interactions.

Background: Deep Onyx (#140700), Text: Canvas Parchment (#f8f8f7), Radius: 96px, Padding: 0px vertical, 24px horizontal. Text uses Graphik 400.

### Ghost Border Button

**Role:** Secondary call to action, navigation items.

Background: Absolute White (rgba(0, 0, 0, 0) in component data suggests transparency against Absolute White), Border: 1px Deep Onyx (#140700),  Text: Deep Onyx (#140700), Radius: 0px, Padding: 1px vertical, 6px horizontal. Text uses Arial 400.

### Hero Ghost Button

**Role:** Calls to action within prominent dark sections.

Background: transparent (rgba(0,0,0,0)), Border: 1px Absolute White (#ffffff), Text: Absolute White (#ffffff), Radius: 0px, Padding: 1px vertical, 6px horizontal. Text uses Arial 400.

### Programs Card (Plain)

**Role:** Structural container for program listings or similar content.

Background: transparent, Border: none, Radius: 0px, Padding: 0px.

### Programs Card (Rounded)

**Role:** Structural container with soft corners for related content blocks.

Background: transparent, Border: none, Radius: 16px, Padding: 0px.

### Text Input

**Role:** Single-line text entry fields.

Background: transparent, Text: Pewter Accent (#cccccc), Border: 1px bottom border in Pewter Accent (#cccccc), Radius: 0px, Padding: 0px. Text uses Graphik.

## Do's and Don'ts

### Do

- Prioritize Deep Onyx (#140700) for all primary text and calls to action against Canvas Parchment (#f8f8f7) backgrounds to ensure high contrast and brand coherence.
- Use Portrait Text 400 at 72px for hero headings to establish a commanding, yet refined textual presence with -1.44px letter spacing.
- Maintain a highly achromatic palette, reserving the subtle brown tint of Deep Onyx (#140700) as the most saturated element.
- Employ Graphik 400 with its characteristic tight letter spacing for body text and interactive elements to convey modern precision.
- Utilize 96px border-radius consistently for primary filled buttons and 0px for ghost/outlined buttons to define interaction types.
- Apply 16px border-radius to card-like elements or content containers where a softer edge is desired, contrasting with the generally sharp aesthetic.
- Ensure all interactive text elements use either Deep Onyx (#140700) for active states or Absolute White (#ffffff) in dark contexts, maintaining strong readability.

### Don't

- Avoid introducing additional chromatic colors; the visual system is built on a precise neutral and near-black palette.
- Do not use generic sans-serif fonts for headings; Portrait Text and Times are critical for the brand's sophisticated voice.
- Steer clear of heavy drop shadows or strong gradients; the system relies on flat surfaces and high-contrast typography for visual depth.
- Do not deviate from the established tight letter spacing for Graphik and Portrait Text; it's a signature characteristic of the typography.
- Avoid overly generous padding or wide element gaps that would disrupt the comfortable but precise density of the layout.
- Do not round corners on elements intended to be sharp and austere, such as the ghost buttons and form inputs with zero radius.
- Never use light text on light backgrounds or dark text on dark backgrounds without ensuring WCAG AAA contrast levels, particularly with the subtle off-white tones.

## Imagery

The imagery is sparse and impactful. Photography, when used, tends to be full-bleed, conceptual, and often dark and moody with a clear focal point, appearing within masked, rounded containers that soften the otherwise sharp UI. There are no illustrations. Icons are minimal, typically monochrome and filled, serving as subtle navigational or decorative elements (e.g., hamburger menu, arrows). The overall density is text-dominant, allowing the few high-impact visual elements to stand out, primarily for atmospheric or product showcase purposes without literal depiction.

## Layout

The page primarily uses a max-width contained layout, centering content within a generous whitespace on a Canvas Parchment background. The hero section features a centered, impactful headline against the same background, followed by a full-width visual banner or video with a 16px border-radius, acting as a visual break. Content sections maintain consistent vertical spacing (64px section gap) and often feature simple stacked content, or alternating horizontal arrangements of text and implied visual content (like program listings). Navigation is a sticky top bar with minimal branding and interactive elements. The site favors large, isolated blocks of content over dense grids.

## Similar Brands

- **AIGA Design** — Shares a sophisticated, text-heavy aesthetic with careful typographic hierarchy and a limited, high-contrast color palette.
- **Pentagram** — Employs prominent serif typography for headlines and a minimal color scheme, focusing on content and subtle interaction.
- **Meta Design** — Exhibits a clean, architectural approach to layout and typography, with a strong emphasis on precise spacing and subtle visual cues.
- **Chermayeff & Geismar & Haviv** — Utilizes classic, authoritative typography and a restrained color palette to convey a sense of timeless design and brand strength.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-parchment: #f8f8f7;
  --color-absolute-white: #ffffff;
  --color-deep-onyx: #140700;
  --color-pewter-accent: #cccccc;
  --color-slate-echo: #5e5855;
  --color-shadowed-steel: #514c49;
  --font-times: 'Times', serif;
  --font-graphik: 'Graphik', system-ui;
  --font-portrait-text: 'Portrait Text', serif;
  --font-arial: 'Arial', sans-serif;
  --text-caption: 11px;
  --leading-caption: 1;
  --tracking-caption: -0.58px;
  --text-body: 14px;
  --leading-body: 1.2;
  --tracking-body: -0.21px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.05;
  --tracking-subheading: -0.18px;
  --text-heading: 28px;
  --leading-heading: 1.05;
  --tracking-heading: -0.28px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.72px;
  --text-display: 72px;
  --leading-display: 1.05;
  --tracking-display: -1.44px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-98: 98px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-170: 170px;
  --spacing-224: 224px;
  --radius-cards: 16px;
  --radius-buttons: 96px;
  --radius-general: 4px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-parchment: #f8f8f7;
  --color-absolute-white: #ffffff;
  --color-deep-onyx: #140700;
  --color-pewter-accent: #cccccc;
  --color-slate-echo: #5e5855;
  --color-shadowed-steel: #514c49;
  --font-times: 'Times', serif;
  --font-graphik: 'Graphik', system-ui;
  --font-portrait-text: 'Portrait Text', serif;
  --font-arial: 'Arial', sans-serif;
  --text-caption: 11px;
  --leading-caption: 1;
  --tracking-caption: -0.58px;
  --text-body: 14px;
  --leading-body: 1.2;
  --tracking-body: -0.21px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.05;
  --tracking-subheading: -0.18px;
  --text-heading: 28px;
  --leading-heading: 1.05;
  --tracking-heading: -0.28px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.72px;
  --text-display: 72px;
  --leading-display: 1.05;
  --tracking-display: -1.44px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-98: 98px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-170: 170px;
  --spacing-224: 224px;
  --radius-cards: 16px;
  --radius-buttons: 96px;
  --radius-general: 4px;
}
```
