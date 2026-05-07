---
version: alpha
name: "Opennote"
description: "Opennote employs a minimalist, paper-like aesthetic featuring a high-contrast typographical hierarchy set against a soft, near-white canvas. Subtle border treatments and distinct, functional button styles define interactive elements. Color is used sparingly, primarily for accent and to distinguish action states, creating moments of focus within an otherwise calm and content-centric design."
theme: "light"
industry: "productivity"
source_url: "https://www.opennote.com"
refero_style_id: "24d3b281-04a6-4cc7-8a74-634b08472291"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508232593-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508232593-thumb.jpg"
extracted_at: "2026-04-30T00:17:36.785Z"
---

# Opennote — Style Reference

> ink on parchment

**Theme:** light

**Industry:** productivity

Opennote employs a minimalist, paper-like aesthetic featuring a high-contrast typographical hierarchy set against a soft, near-white canvas. Subtle border treatments and distinct, functional button styles define interactive elements. Color is used sparingly, primarily for accent and to distinguish action states, creating moments of focus within an otherwise calm and content-centric design.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Parchment | #fffdf8 | `--color-parchment` | Page backgrounds, card surfaces, UI canvases — creates a soft, inviting backdrop |
| Ink Black | #0a0a0a | `--color-ink-black` | Primary text, headings, icons – provides strong contrast against light backgrounds |
| Slate Gray | #474747 | `--color-slate-gray` | Secondary text, muted descriptions, helper text, subtle icon detailing |
| Ash Gray | #8c8c8c | `--color-ash-gray` | Tertiary text, sub-labels, subtle dividers, less emphasized information |
| Whisper Border | #e5e5e5 | `--color-whisper-border` | Subtle borders, dividers, outlines for ghost buttons and input fields — defines structure without visual weight |
| Ghost Border | #d1d1d1 | `--color-ghost-border` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Burnt Umber | #512906 | `--color-burnt-umber` | Primary call-to-action buttons, key interactive elements – a deep, warm accent that signifies action and focus |
| Blue Violet | #242d64 | `--color-blue-violet` | Decorative text accents, highlights for specific content blocks |
| Forest Green | #0c3b1a | `--color-forest-green` | Decorative text accents, highlights for specific content blocks |
| Crimson Blush | #5e0831 | `--color-crimson-blush` | Decorative text accents, highlights for specific content blocks |
| Goldenrod | #ffc934 | `--color-goldenrod` | Decorative highlights, background accents on certain content blocks — a bright, joyful punctuation |

## Tokens — Typography

### IowanOld

- **Token:** `--font-iowanold`
- **Substitute:** Iowan Old Style
- **Weights:** 400, 500
- **Sizes:** 16px, 20px, 32px, 42px, 48px
- **Line heights:** 1.08, 1.10, 1.12, 1.20, 1.50
- **Role:** Headings and prominent display text — a traditional serif that lends a considered, thoughtful tone.

### SuisseIntl

- **Token:** `--font-suisseintl`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 14px, 16px
- **Line heights:** 1.00, 1.43, 1.50
- **Role:** Body text, navigation, buttons, and all functional UI elements — a clean, neutral sans-serif that ensures clarity and legibility.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 14px | 1.43 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.5 | — | `--text-subheading` |
| heading-sm | 32px | 1.2 | — | `--text-heading-sm` |
| heading | 42px | 1.12 | — | `--text-heading` |
| display | 48px | 1.08 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-49 | 49px | `--spacing-49` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-106 | 106px | `--spacing-106` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-122 | 122px | `--spacing-122` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-130 | 130px | `--spacing-130` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-169 | 169px | `--spacing-169` |
| spacing-171 | 171px | `--spacing-171` |
| spacing-276 | 276px | `--spacing-276` |
| spacing-316 | 316px | `--spacing-316` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 10px |
| buttons | 10px |
| general | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 40-80px |
| cardPadding | 16px |
| elementGap | 12px |

## Components

### Primary Filled Button

**Role:** Main call to action, drawing immediate attention.

Background: Burnt Umber (#512906). Text: Ink Black (#0a0a0a). Padding: 16px vertical, 24px horizontal. Border radius: 10px.

### Secondary Outlined Button

**Role:** Alternative actions, less emphasized than the primary.

Background: transparent. Text: Ink Black (#0a0a0a). Border: 1px Ghost Border (#d1d1d1) solid. Padding: 15px vertical, 23px horizontal. Border radius: 10px.

### Ghost Navigation Link

**Role:** Main navigation items, in-text links.

Background: transparent. Text: Ink Black (#0a0a0a). Underline: 1px Whisper Border (#e5e5e5) solid, 8px offset. No padding or radius.

## Do's and Don'ts

### Do

- Prioritize IowanOld for all headings and display text to deliver a traditional, thoughtful voice.
- Use SuisseIntl for all body text, button labels, and navigation to maintain readability and a clean feel.
- Apply Parchment (#fffdf8) as the dominant background color across all pages and main content areas.
- Use Burnt Umber (#512906) exclusively for primary action buttons to clearly signpost key interactions.
- Employ Ink Black (#0a0a0a) for all primary text and critical UI elements to ensure high contrast and legibility.
- Define UI boundaries and elements with subtle Whisper Border (#e5e5e5) 1px solid borders, avoiding heavy lines.
- Maintain a consistent 10px border-radius for all interactive components and cards to soften edges uniformly.

### Don't

- Do not introduce new serif fonts beyond IowanOld, as it would dilute the typographic identity.
- Avoid using highly saturated colors for background elements; reserve saturation for functional accents and brand highlights.
- Do not use heavy shadows or gradients on interactive elements; prefer solid color fills and subtle borders.
- Do not deviate from the Parchment (#fffdf8) background color for core content sections; alternative backgrounds should be used sparingly and only for distinct sections.
- Avoid excessive use of colors like Blue Violet, Forest Green, or Crimson Blush in body text; reserve them for decorative accent blocks or specific highlighted elements.
- Do not use less than 12px padding around clickable elements; maintain a comfortable tap/click target.
- Avoid text colors with insufficient contrast against the background; always prioritize Ink Black or Slate Gray for readability.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Parchment Base | #fffdf8 | Primary page background, expansive canvas for content. |
| 1 | Subtle Card | #f9f9f9 | Slightly elevated card surfaces, subtly distinguished from the base. |
| 2 | Accent Block | #fef5de | Backgrounds for highlighted content sections or decorative areas, introducing a warm tint. |

## Imagery

The visual language is characterized by simple, outlined, hand-drawn style illustrations that are whimsical and often depict figures interacting with abstract concepts or tools. These illustrations are mono-color, typically in black outline, with occasional small colored fills like Goldenrod (#ffc934) or muted pastels. They are contained within the white space, serving as explanatory and decorative elements rather than full-bleed imagery. Icons are minimal, outlined, and monochromatic, matching the linear illustration style. Product screenshots are absent, focusing instead on symbolic representation. Imagery is sparse, ensuring the UI remains text-dominant.

## Layout

The site uses a max-width contained layout, typically centered, allowing ample whitespace on either side. The hero section often features a centered headline with an illustration above, sometimes on a slightly tinted background. Sections mostly follow a vertical rhythm with consistent spacing, lacking strong visual dividers between them, creating a seamless flow. Content frequently alternates between centered stacks of text and visual elements, and occasionally two-column layouts with text and iconography. Navigation is a sticky top-bar, minimal and text-based, with a 'Get started free' button. The overall density is spacious, favoring clear separation and readability over information compactness.

## Similar Brands

- **Notion** — Clean, light UI with powerful text editing features and emphasis on typographic clarity.
- **Roam Research** — Minimalist aesthetic focused on note-taking, content display, and subtle UI elements.
- **Readwise Reader** — Content-focused design with a crisp, high-contrast text presentation and a restrained use of color.
- **Craft.do** — Intuitive, clean interface for document creation, emphasizing typography and a calm visual environment.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-parchment: #fffdf8;
  --color-ink-black: #0a0a0a;
  --color-slate-gray: #474747;
  --color-ash-gray: #8c8c8c;
  --color-whisper-border: #e5e5e5;
  --color-ghost-border: #d1d1d1;
  --color-burnt-umber: #512906;
  --color-blue-violet: #242d64;
  --color-forest-green: #0c3b1a;
  --color-crimson-blush: #5e0831;
  --color-goldenrod: #ffc934;
  --font-iowanold: 'IowanOld', Iowan Old Style;
  --font-suisseintl: 'SuisseIntl', Inter;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --text-heading: 42px;
  --leading-heading: 1.12;
  --text-display: 48px;
  --leading-display: 1.08;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-49: 49px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-106: 106px;
  --spacing-120: 120px;
  --spacing-122: 122px;
  --spacing-128: 128px;
  --spacing-130: 130px;
  --spacing-160: 160px;
  --spacing-169: 169px;
  --spacing-171: 171px;
  --spacing-276: 276px;
  --spacing-316: 316px;
  --radius-cards: 10px;
  --radius-buttons: 10px;
  --radius-general: 10px;
  --surface-parchment-base: #fffdf8;
  --surface-subtle-card: #f9f9f9;
  --surface-accent-block: #fef5de;
}
```

### Tailwind v4

```css
@theme {
  --color-parchment: #fffdf8;
  --color-ink-black: #0a0a0a;
  --color-slate-gray: #474747;
  --color-ash-gray: #8c8c8c;
  --color-whisper-border: #e5e5e5;
  --color-ghost-border: #d1d1d1;
  --color-burnt-umber: #512906;
  --color-blue-violet: #242d64;
  --color-forest-green: #0c3b1a;
  --color-crimson-blush: #5e0831;
  --color-goldenrod: #ffc934;
  --font-iowanold: 'IowanOld', Iowan Old Style;
  --font-suisseintl: 'SuisseIntl', Inter;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --text-heading: 42px;
  --leading-heading: 1.12;
  --text-display: 48px;
  --leading-display: 1.08;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-49: 49px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-106: 106px;
  --spacing-120: 120px;
  --spacing-122: 122px;
  --spacing-128: 128px;
  --spacing-130: 130px;
  --spacing-160: 160px;
  --spacing-169: 169px;
  --spacing-171: 171px;
  --spacing-276: 276px;
  --spacing-316: 316px;
  --radius-cards: 10px;
  --radius-buttons: 10px;
  --radius-general: 10px;
  --surface-parchment-base: #fffdf8;
  --surface-subtle-card: #f9f9f9;
  --surface-accent-block: #fef5de;
}
```
