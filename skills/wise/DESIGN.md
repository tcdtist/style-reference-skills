---
version: alpha
name: "Wise"
description: "The Wise design system feels like an assured and straightforward financial platform, built on stark contrasts and an unwavering accent color. The primary palette of deep forest green, near-black, and bright white creates a dynamic and trustworthy visual identity. Heavy, condensed sans-serif headings anchor information with a no-nonsense tone, while clear, readable body text maintains legibility. Deliberately rounded corners on interactive elements provide a touch of modern approachability against otherwise sharp UI elements, emphasizing ease of use within a rigorous financial context."
theme: "light"
industry: "fintech"
source_url: "https://wise.com"
refero_style_id: "367c0c6e-73a7-441c-a8ff-91d139ac60dc"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776119210797-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776119210797-thumb.jpg"
extracted_at: "2026-04-13T22:27:20.223Z"
---

# Wise — Style Reference

> Vibrant Fintech Authority; a financial system in bold green and crisp black on a pristine white canvas.

**Theme:** light

**Industry:** fintech

The Wise design system feels like an assured and straightforward financial platform, built on stark contrasts and an unwavering accent color. The primary palette of deep forest green, near-black, and bright white creates a dynamic and trustworthy visual identity. Heavy, condensed sans-serif headings anchor information with a no-nonsense tone, while clear, readable body text maintains legibility. Deliberately rounded corners on interactive elements provide a touch of modern approachability against otherwise sharp UI elements, emphasizing ease of use within a rigorous financial context.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page and section backgrounds, primary surfaces for content. |
| Ink Black | #0e0f0c | `--color-ink-black` | Primary heading text, interactive element text, high-contrast UI details. |
| Slate Text | #454745 | `--color-slate-text` | Body text, secondary headings, default icon color. |
| Ash Gray | #e8ebe6 | `--color-ash-gray` | Subtle background for UI blocks, secondary card surfaces, borders. |
| Muted Grey | #868685 | `--color-muted-grey` | Disabled states, subtle borders around inputs and buttons, placeholder text. |
| Ghost Gray | #6a6c6a | `--color-ghost-gray` | Tertiary text, less prominent UI elements. |
| Ambient Cyan | #ecf9f9 | `--color-ambient-cyan` | Soft accent background, often for celebratory or informational sections. Suggests a cool, clean environment. |
| Forest Green | #163300 | `--color-forest-green` | Primary brand color for text links, navigation items, selected states, and dark green elements within the UI. |
| Lime Accent | #9fe870 | `--color-lime-accent` | Call-to-action buttons, interactive accents, success indicators. Its vivid hue provides clear visual affordance. |
| Deep Teal | #0b4c72 | `--color-deep-teal` | Informational badges, secondary links, and icons where a cooler blue tone is preferred over green for thematic variation. |
| Alert Red | #cb272f | `--color-alert-red` | Error messages, warnings, critical state indicators. A vivid, immediate call for attention. |
| Rich Red | #ef253b | `--color-rich-red` | Vivid red filling for specific illustrations or icons. |
| Violet Tint | #221d9a | `--color-violet-tint` | Specific illustration details, rare accent. |
| Warm Orange | #ff7700 | `--color-warm-orange` | Specific illustration details, rare accent. |
| Deep Emerald | #054d28 | `--color-deep-emerald` | Darker green accents within cards or icons. |
| Gold Yellow | #ffd300 | `--color-gold-yellow` | Coin illustrations, specific accents. |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 18px, 20px, 22px, 25px, 36px, 45px, 61px, 300px
- **Line heights:** 0.72, 1.00, 1.10, 1.25, 1.30, 1.40, 1.43, 1.44, 1.50, 1.55, 1.63, 1.71, 1.86, 2.17
- **Letter spacing:** 0.005, 0.005, -0.003, -0.005, -0.006, -0.007, -0.008, -0.009, -0.011, -0.015, -0.03
- **OpenType features:** "calt"
- **Role:** General body text, navigation, buttons, and smaller headings. Its high legibility and wide range of weights support all secondary content.

### Wise Sans

- **Token:** `--font-wise-sans`
- **Weights:** 400, 900
- **Sizes:** 40px, 52px, 59px, 89px, 105px, 300px
- **Line heights:** 0.85, 1.50
- **Letter spacing:** -0.002, -0.002
- **OpenType features:** "calt"
- **Role:** Display and prominent headings. The custom font provides a distinctive brand voice with its strong, expanded letterforms, making headlines assertive without being aggressive.

### monospace

- **Token:** `--font-monospace`
- **Weights:** 400
- **Sizes:** 300px
- **OpenType features:** "calt"
- **Role:** monospace — detected in extracted data but not described by AI

### sans-serif

- **Token:** `--font-sans-serif`
- **Weights:** 400
- **Sizes:** 300px
- **OpenType features:** "calt"
- **Role:** sans-serif — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.44 | 0.005px | `--text-caption` |
| body-sm | 14px | 1.43 | 0.005px | `--text-body-sm` |
| body | 16px | 1.5 | -0.003px | `--text-body` |
| subheading | 18px | 1.55 | -0.005px | `--text-subheading` |
| heading-sm | 20px | 1.4 | -0.006px | `--text-heading-sm` |
| heading-lg | 25px | 1.25 | -0.008px | `--text-heading-lg` |
| display-sm | 36px | 1.1 | -0.009px | `--text-display-sm` |
| display | 45px | 1.1 | -0.011px | `--text-display` |
| display-lg | 61px | 1 | -0.015px | `--text-display-lg` |
| display-xl | 89px | 0.85 | -0.002px | `--text-display-xl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-94 | 94px | `--spacing-94` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-124 | 124px | `--spacing-124` |
| spacing-131 | 131px | `--spacing-131` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-162 | 162px | `--spacing-162` |
| spacing-193 | 193px | `--spacing-193` |
| spacing-211 | 211px | `--spacing-211` |

### Border Radius

| Element | Value |
| --- | --- |
| sm | 2px |
| full | 1000px |
| none | 0px |
| pill | 9999px |
| card-lg | 28.1539px |
| card-md | 18.7693px |
| card-xl | 37.5385px |
| default | 10px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(14, 15, 12, 0.12) 0px 0px 0px 1px | `--shadow-xl` |
| xl-2 | rgb(134, 134, 133) 0px 0px 0px 1px inset | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.15) 0px 10px 32px 0px, rgba(0, 0, 0, 0.04) 0px 40px 40px 0px | `--shadow-xl-3` |
| xl-4 | rgba(0, 0, 0, 0.08) 0px 6px 20px 0px | `--shadow-xl-4` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 32px |
| cardPadding | 28px |
| elementGap | 8px |

## Components

### Primary Filled Button

**Role:** Call to action

Background: Lime Accent (#9fe870), Text: Forest Green (#163300), Border: 1px transparent, Radius: 9999px, Padding: 11px vertical, 24px horizontal. Delivers immediate visual action.

### Secondary Ghost Button

**Role:** Secondary action (text only)

Background: transparent, Text: Forest Green (#163300), Border: 1px transparent, Radius: 9999px, Padding: 11px vertical, 24px horizontal. Used for less prominent actions, integrating seamlessly with text content.

### Outlined Pill Button

**Role:** Tertiary action

Background: transparent, Text: Forest Green (#163300), Border: 1px solid Forest Green (#163300), Radius: 9999px, Padding: 8px vertical, 9.38462px horizontal. Provides a subtle interactive element with a clear boundary.

### Circular Icon Button

**Role:** Decorative/Functional

Background: Canvas White (#ffffff), Text: Slate Text (#454745), Border: 1px solid rgba(14, 15, 12, 0.12), Radius: 50%, Padding: 0px. Used for standalone icons or small interactive elements like pagination controls.

### Base Card

**Role:** Informational grouping

Background: transparent, Border: none, Shadow: none, Radius: 0px, Padding: 0px. Used for displaying collections of items, often with internal spacing creating structure.

### Rounded Informational Card

**Role:** Featured content

Background: Canvas White (#ffffff), Border: none, Shadow: none, Radius: 28.1539px, Padding: 37.5385px vertical, 28.1539px horizontal. Used for drawing attention to specific content blocks with a softer visual appeal.

### Dark Featured Card

**Role:** Prominent promotional content

Background: Forest Green (#163300), Border: none, Shadow: none, Radius: 37.5385px, Padding: 75.0769px vertical, 56.3076px horizontal. Acts as a high-contrast container for key messages or calls to value.

### Text Input

**Role:** User data entry

Background: transparent, Text: Ink Black (#0e0f0c), Border: 1px solid transparent, Radius: 10px, Padding: 12px vertical, 16px horizontal. Focus state likely indicated by a border.

### Accent Badge

**Role:** Highlight/Tag

Background: Lime Accent (#9fe870), Text: Forest Green (#163300), Radius: 16px, Padding: 0px vertical, 16px horizontal. Used for active states or small feature flags.

### Ghost Badge

**Role:** Informational tag

Background: transparent, Text: Forest Green (#163300), Radius: 16px, Padding: 0px vertical, 16px horizontal. For subtler categorization or descriptors.

## Do's and Don'ts

### Do

- Use Wise Sans at weight 900 for all large page headings to preserve the brand's bold, condensed voice.
- Apply Lime Accent (#9fe870) exclusively to primary call-to-action buttons and interactive elements to maintain its distinction.
- Set text links to Forest Green (#163300) to ensure interactive elements are clearly marked, matching the brand's primary color.
- Employ a 9999px border-radius for all primary buttons and interactive tags to provide a consistent modern and approachable feel.
- Use Canvas White (#ffffff) as the dominant background color for all primary content sections to ensure high contrast and readability.
- Implement an 8px element gap for standard spacing between UI elements like buttons and icons for a comfortable density.

### Don't

- Do not use Forest Green (#163300) as a background for non-interactive elements, as it's reserved for brand highlights and interactive text.
- Avoid using sharp corners on interactive buttons; all primary action buttons should use the 9999px pill radius.
- Do not deviate from the Inter font for body text and secondary content, as it is crucial for legibility and information hierarchy.
- Avoid applying excessive shadows; visual depth is primarily achieved through surface color variations and clear layout, with subtle shadow only for occasional emphasis.
- Do not use less than 11px padding for primary buttons; maintain the established 11px vertical and 24px horizontal padding for consistent actionability.
- Do not introduce additional vivid accent colors; the Lime Accent (#9fe870) and Deep Teal (#0b4c72) serve distinct purposes and should not be diluted.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Base page background, primary content sections. |
| 1 | Ash Gray | #e8ebe6 | Subtle background for UI blocks, secondary card surfaces. |
| 2 | Ambient Cyan | #ecf9f9 | Background for informational or celebratory sections, providing a soft color block. |

## Elevation

- **Input/Button focus:** `rgb(134, 134, 133) 0px 0px 0px 1px inset`
- **Card Overlay:** `rgba(0, 0, 0, 0.15) 0px 10px 32px 0px, rgba(0, 0, 0, 0.04) 0px 40px 40px 0px`
- **Small Card Shadow:** `rgba(0, 0, 0, 0.08) 0px 6px 20px 0px`
- **Navigation:** `rgba(14, 15, 12, 0.12) 0px 0px 0px 1px`

## Imagery

The visual language focuses on a mix of abstract 3D elements and functional iconography. Large, stylized 3D coin and globe illustrations are used in hero sections, providing a unique, playful yet sophisticated brand identity related to finance. Product screenshots are used sparingly to show app interfaces. Iconography is clean, outlined, and monochromatic, primarily using Ink Black or Forest Green, serving an explanatory and navigational role. Images generally exist in isolation or within content blocks, avoiding full-bleed photography. The density is image-heavy in hero sections, transitioning to text-dominant with supporting icons in content areas.

## Layout

The page model is primarily max-width contained, with a few full-bleed sections. The hero section features a large, centered headline over a background that integrates a striking 3D graphic. Section rhythm alternates between full-width content blocks and contained content, maintaining consistent vertical spacing. Content is generally arranged in centered stacks for headings and subtext, transitioning to multi-column grids (like a 3-column country flag grid) for features and lists. The navigation is a sticky top bar, providing persistent access to core links and CTAs. The overall density is comfortable, ensuring sufficient breathing room around content.

## Similar Brands

- **Revolut** — Shares a clean, light mode UI with strong typography and a singular vibrant accent color (purple for Revolut, green for Wise) for interactive elements and brand signaling.
- **Monzo** — Features a direct, no-nonsense tone with high-contrast text, a predominantly light aesthetic, and a distinctive brand color (coral for Monzo) used for primary actions and highlights.
- **N26** — Employs a simple, clear layout with strong use of whitespace, bold headings, and a single accent color (blue for N26) to guide user interaction within a financial context.
- **Stripe** — Displays a robust, product-focused UI with clear information hierarchy, strong sans-serif fonts, and a restrained use of vibrant colors against a largely monochrome background for trust and clarity.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #0e0f0c;
  --color-slate-text: #454745;
  --color-ash-gray: #e8ebe6;
  --color-muted-grey: #868685;
  --color-ghost-gray: #6a6c6a;
  --color-ambient-cyan: #ecf9f9;
  --color-forest-green: #163300;
  --color-lime-accent: #9fe870;
  --color-deep-teal: #0b4c72;
  --color-alert-red: #cb272f;
  --color-rich-red: #ef253b;
  --color-violet-tint: #221d9a;
  --color-warm-orange: #ff7700;
  --color-deep-emerald: #054d28;
  --color-gold-yellow: #ffd300;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-wise-sans: 'Wise Sans', ui-sans-serif, system-ui, sans-serif;
  --font-monospace: 'monospace', ui-sans-serif, system-ui, sans-serif;
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.44;
  --tracking-caption: 0.005px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: 0.005px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.003px;
  --text-subheading: 18px;
  --leading-subheading: 1.55;
  --tracking-subheading: -0.005px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.006px;
  --text-heading-lg: 25px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.008px;
  --text-display-sm: 36px;
  --leading-display-sm: 1.1;
  --tracking-display-sm: -0.009px;
  --text-display: 45px;
  --leading-display: 1.1;
  --tracking-display: -0.011px;
  --text-display-lg: 61px;
  --leading-display-lg: 1;
  --tracking-display-lg: -0.015px;
  --text-display-xl: 89px;
  --leading-display-xl: 0.85;
  --tracking-display-xl: -0.002px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-75: 75px;
  --spacing-94: 94px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-124: 124px;
  --spacing-131: 131px;
  --spacing-150: 150px;
  --spacing-162: 162px;
  --spacing-193: 193px;
  --spacing-211: 211px;
  --radius-sm: 2px;
  --radius-full: 1000px;
  --radius-none: 0px;
  --radius-pill: 9999px;
  --radius-card-lg: 28.1539px;
  --radius-card-md: 18.7693px;
  --radius-card-xl: 37.5385px;
  --radius-default: 10px;
  --shadow-xl: rgba(14, 15, 12, 0.12) 0px 0px 0px 1px;
  --shadow-xl-2: rgb(134, 134, 133) 0px 0px 0px 1px inset;
  --shadow-xl-3: rgba(0, 0, 0, 0.15) 0px 10px 32px 0px, rgba(0, 0, 0, 0.04) 0px 40px 40px 0px;
  --shadow-xl-4: rgba(0, 0, 0, 0.08) 0px 6px 20px 0px;
  --surface-canvas-white: #ffffff;
  --surface-ash-gray: #e8ebe6;
  --surface-ambient-cyan: #ecf9f9;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #0e0f0c;
  --color-slate-text: #454745;
  --color-ash-gray: #e8ebe6;
  --color-muted-grey: #868685;
  --color-ghost-gray: #6a6c6a;
  --color-ambient-cyan: #ecf9f9;
  --color-forest-green: #163300;
  --color-lime-accent: #9fe870;
  --color-deep-teal: #0b4c72;
  --color-alert-red: #cb272f;
  --color-rich-red: #ef253b;
  --color-violet-tint: #221d9a;
  --color-warm-orange: #ff7700;
  --color-deep-emerald: #054d28;
  --color-gold-yellow: #ffd300;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-wise-sans: 'Wise Sans', ui-sans-serif, system-ui, sans-serif;
  --font-monospace: 'monospace', ui-sans-serif, system-ui, sans-serif;
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.44;
  --tracking-caption: 0.005px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: 0.005px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.003px;
  --text-subheading: 18px;
  --leading-subheading: 1.55;
  --tracking-subheading: -0.005px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.006px;
  --text-heading-lg: 25px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.008px;
  --text-display-sm: 36px;
  --leading-display-sm: 1.1;
  --tracking-display-sm: -0.009px;
  --text-display: 45px;
  --leading-display: 1.1;
  --tracking-display: -0.011px;
  --text-display-lg: 61px;
  --leading-display-lg: 1;
  --tracking-display-lg: -0.015px;
  --text-display-xl: 89px;
  --leading-display-xl: 0.85;
  --tracking-display-xl: -0.002px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-75: 75px;
  --spacing-94: 94px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-124: 124px;
  --spacing-131: 131px;
  --spacing-150: 150px;
  --spacing-162: 162px;
  --spacing-193: 193px;
  --spacing-211: 211px;
  --radius-sm: 2px;
  --radius-full: 1000px;
  --radius-none: 0px;
  --radius-pill: 9999px;
  --radius-card-lg: 28.1539px;
  --radius-card-md: 18.7693px;
  --radius-card-xl: 37.5385px;
  --radius-default: 10px;
  --shadow-xl: rgba(14, 15, 12, 0.12) 0px 0px 0px 1px;
  --shadow-xl-2: rgb(134, 134, 133) 0px 0px 0px 1px inset;
  --shadow-xl-3: rgba(0, 0, 0, 0.15) 0px 10px 32px 0px, rgba(0, 0, 0, 0.04) 0px 40px 40px 0px;
  --shadow-xl-4: rgba(0, 0, 0, 0.08) 0px 6px 20px 0px;
  --surface-canvas-white: #ffffff;
  --surface-ash-gray: #e8ebe6;
  --surface-ambient-cyan: #ecf9f9;
}
```
