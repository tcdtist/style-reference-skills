---
version: alpha
name: "Revenuecat"
description: "This design system conjures the feeling of a highly organized, trustworthy digital workspace, balancing robust information display with approachable interactions. It achieves this through a high-contrast white background and deep, muted violet text, accented by a single, prominent 'Digital Violet' (#576cdb) that signifies action and focus. Object Sans headlines, particularly at display sizes, use a whisper-soft letter spacing (e.g., -0.0700em at 80px) to convey authority through precision rather than boldness, ensuring technical infrastructure feels accessible. The interplay between sharp 0px radii on informational cards and generous 9999px pill shapes for primary buttons creates a dynamic tension between structure and user-friendliness."
theme: "light"
industry: "devtools"
source_url: "https://revenuecat.com"
refero_style_id: "b5fdba21-fd4d-427e-b551-1e22c51e42db"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932537850-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932537850-thumb.jpg"
extracted_at: "2026-04-11T18:36:03.542Z"
---

# Revenuecat — Style Reference

> precision architecture on crisp white. Like an x-ray of meticulously organized components within a bright, airy digital lab.

**Theme:** light

**Industry:** devtools

This design system conjures the feeling of a highly organized, trustworthy digital workspace, balancing robust information display with approachable interactions. It achieves this through a high-contrast white background and deep, muted violet text, accented by a single, prominent 'Digital Violet' (#576cdb) that signifies action and focus. Object Sans headlines, particularly at display sizes, use a whisper-soft letter spacing (e.g., -0.0700em at 80px) to convey authority through precision rather than boldness, ensuring technical infrastructure feels accessible. The interplay between sharp 0px radii on informational cards and generous 9999px pill shapes for primary buttons creates a dynamic tension between structure and user-friendliness.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| White Canvas | #ffffff | `--color-white-canvas` | Page background, surface backgrounds, interactive element text. |
| Cloud Gray | #f9f9fb | `--color-cloud-gray` | Subtle background for card sections and segmented content areas. Provides slight visual separation from the main page. |
| Deep Space Violet | #1f1f47 | `--color-deep-space-violet` | Primary text for headings, navigation, and key informational elements. Establishes a professional, technical tone. |
| Digital Violet | #576cdb | `--color-digital-violet` | Primary accent for CTA buttons, active navigation, links, and interactive icons. Signals action and interactivity. |
| Charcoal Text | #171a1c | `--color-charcoal-text` | Secondary text color for body paragraphs, labels, and less prominent text that still requires high readability. |
| Slate Text | #3d3d5c | `--color-slate-text` | Body text for longer descriptions and secondary information, providing a softer contrast than Deep Space Violet. |
| Whisper Gray | #6c7693 | `--color-whisper-gray` | Placeholder text, subtle borders, and tertiary information. Creates a subdued, supporting visual layer. |
| Hover Violet | #abb6ed | `--color-hover-violet` | Subtle background for hover states or very light emphasis on certain text blocks. |
| Light Violet Stroke | #eaedf6 | `--color-light-violet-stroke` | Fine borders for subtle element separation, like separators or table dividers. Provides structure without visual weight. |
| Gradient Aura | #5a73f2 | `--color-gradient-aura` | Decorative background gradient used for abstract visual elements or hero sections, blending violet, gray, and green for a dynamic, modern feel. |

## Tokens — Typography

### Object Sans

- **Token:** `--font-object-sans`
- **Substitute:** system-ui
- **Weights:** 100, 300, 400, 500, 700
- **Sizes:** 13px, 14px, 16px, 18px, 24px, 28px, 32px, 40px, 48px, 54px, 56px, 64px, 80px
- **Line heights:** 1.00, 1.13, 1.25, 1.38, 1.50
- **Letter spacing:** -0.0700em at 80px, -0.0400em at 48px, -0.0300em at 40px, -0.0250em at 32px, -0.0200em at 24px
- **Role:** Headings and prominent display text. The tight letter-spacing on larger sizes is a signature trait, conveying precision and authority through controlled forms rather than bold mass.

### Helvetica Neue

- **Token:** `--font-helvetica-neue`
- **Substitute:** system-ui
- **Weights:** 300, 400, 500
- **Sizes:** 16px, 18px, 20px, 22px
- **Line heights:** 1.00, 1.25, 1.38, 1.50
- **Letter spacing:** normal
- **Role:** Body text, navigation, and input fields. Its clean, neutral readability supports the precision-focused aesthetic without distracting from the custom heading font.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.5 | — | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.5 | — | `--text-subheading` |
| heading-sm | 24px | 1.38 | -0.48px | `--text-heading-sm` |
| heading | 32px | 1.25 | -0.8px | `--text-heading` |
| heading-lg | 40px | 1.25 | -1.2px | `--text-heading-lg` |
| display | 48px | 1.25 | -1.92px | `--text-display` |
| display-lg | 80px | 1.13 | -5.6px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-53 | 53px | `--spacing-53` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-82 | 82px | `--spacing-82` |
| spacing-105 | 105px | `--spacing-105` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-147 | 147px | `--spacing-147` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-192 | 192px | `--spacing-192` |
| spacing-208 | 208px | `--spacing-208` |
| spacing-215 | 215px | `--spacing-215` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| images | 16px |
| buttons | 9999px |
| general | 16px |
| pill-buttons-large | 40px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(73, 46, 107, 0.14) 0px 3px 16px 0px | `--shadow-xl` |
| xl-2 | rgba(71, 92, 133, 0.25) 0px 4px 20px 0px, rgba(144, 138, 208, 0.1) 0px 30px 60px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1216px |
| sectionGap | 120px |
| cardPadding | 24px |
| elementGap | 20px |

## Components

### Stat Block — Hero Metrics

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Cards — Data and Tools for Every Team

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Testimonial Card — VSCO Case Study

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button

**Role:** Calls to action

Filled button with `Digital Violet` background (#576cdb) and `White Canvas` text (#ffffff), `9999px` border-radius, `28px` horizontal padding, `16px` vertical padding. Prominently signals primary interaction.

### Text Link Button

**Role:** Secondary actions, navigation, and inline links

Transparent background, `Charcoal Text` color (#171a1c), `0px` border-radius, no horizontal padding, generous `36px` top padding, no bottom padding. Used for 'Talk to sales' type actions, blending with surrounding text.

### Informational Card

**Role:** Displaying content blocks, features, testimonials

Transparent background or `Cloud Gray` (#f9f9fb) background, `0px` border-radius, `0px` padding, no boxShadow for most. A minimalist container that prioritizes content.

### Input Field

**Role:** User input fields

Transparent background, `Slate Text` color (#3d3d5c) for input text, `Whisper Gray` (#6b7280) border on focus, `0px` border-radius, `24px` horizontal padding, `8px` vertical padding.

### Elevated Content Card

**Role:** Highlighting key information or interactive elements with depth

White background (`#ffffff`), `16px` border-radius. Features a complex shadow: `rgba(71, 92, 133, 0.25) 0px 4px 20px 0px, rgba(144, 138, 208, 0.1) 0px 30px 60px 0px`. This dual shadow creates a distinct, layered elevation.

### Horizontal Divider Line

**Role:** Visual separation between content sections or elements

Thin line (`1px`) with `Light Violet Stroke` color (#eaedf6). Used for subtle visual breaks, grounding content without heavy borders.

## Do's and Don'ts

### Do

- Use `Digital Violet` (#576cdb) exclusively for primary interactive elements, reserving its impact for key actions.
- Apply `Object Sans` with tight letter-spacing for all headlines to establish a tone of precise authority.
- Maintain `0px` border-radius for all informational cards and structural containers to reinforce a clean and architectural aesthetic.
- Prioritize `White Canvas` (#ffffff) and `Cloud Gray` (#f9f9fb) as dominant background colors to support the bright, spacious feel.
- Utilize `Charcoal Text` (#171a1c) for main body copy and `Deep Space Violet` (#1f1f47) for headlines to ensure clear typographic hierarchy.
- Employ `9999px` border-radius for all buttons that are not hero-sized, distinguishing them as friendly, clickable elements.

### Don't

- Avoid using `Digital Violet` (#576cdb) for non-interactive decorative elements; preserve its signaling function.
- Do not introduce additional font families or weights beyond `Object Sans` (100-700) and `Helvetica Neue` (300-500) to maintain typographic rigor.
- Refrain from using strong, colorful background images or patterns that would detract from the minimalist, content-focused layout.
- Do not apply heavy, opaque shadows to elements unless specifically using the `Elevated Content Card` style, to preserve the system's light and airy quality.
- Limit the use of `4px` and `6px` spacing tokens to internal component padding or very subtle micro-adjustments; stick to larger multiples of 20px for overall layout.
- Do not deviate from the `0px` border-radius for non-button components; rounded corners break their structured appearance.

## Elevation

- **Elevated Content Card:** `rgba(71, 92, 133, 0.25) 0px 4px 20px 0px, rgba(144, 138, 208, 0.1) 0px 30px 60px 0px`

## Imagery

The visual language relies heavily on product pseudo-screenshots and abstract data visualizations. Product screenshots are typically high-fidelity UI snippets, often framed within clean, white cards, highlighting specific features or data points. They sometimes show overlapping elements with soft, almost translucent edges, creating depth. Photography is sparse, appearing mostly in testimonials as profile pictures. Illustrations are minimalist icons, often represented in a single brand color like `Digital Violet` (#576cdb) or `Deep Space Violet` (#1f1f47), acting as clear, explanatory content indicators rather than decorative elements. The overall density is balanced, allowing UI elements and text to dominate, with imagery serving a direct, explanatory role.

## Layout

The page adheres to a centered, max-width `1216px` container for most content, maintaining clarity and readability. The hero section, however, uses a full-bleed background often featuring abstract gradients, with key information centered. Sections alternate between pure `White Canvas` (#ffffff) and `Cloud Gray` (#f9f9fb) backgrounds, providing a clear visual rhythm without harsh dividers. Content is frequently arranged in multi-column grids (2-column for text+image and 4-column for featured items/cards), showcasing information efficiently. A notable pattern is the use of horizontally scrolling card carousels for testimonials and feature highlights, lending a dynamic, interactive feel to content blocks. The navigation is a sticky top bar, consistent across the site.

## Similar Brands

- **Stripe** — Similar product-focused UI with subtle elevation, clean typography, and a strategic use of a single, vibrant accent color against a largely monochromatic background.
- **Vercel** — Shares a dedication to precise, modern typography with custom font choices, minimalist card layouts, and a developer-tool aesthetic that prioritizes clarity.
- **Linear** — Employs an elevated, card-based UI with subtle shadows and a clean, spacious layout. Focuses on structured information presentation.
- **Notion** — Similar white-space heavy layout with strong typographic hierarchy, functional iconography, and a focus on content organization within a clean interface.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-white-canvas: #ffffff;
  --color-cloud-gray: #f9f9fb;
  --color-deep-space-violet: #1f1f47;
  --color-digital-violet: #576cdb;
  --color-charcoal-text: #171a1c;
  --color-slate-text: #3d3d5c;
  --color-whisper-gray: #6c7693;
  --color-hover-violet: #abb6ed;
  --color-light-violet-stroke: #eaedf6;
  --color-gradient-aura: #5a73f2;
  --font-object-sans: 'Object Sans', system-ui;
  --font-helvetica-neue: 'Helvetica Neue', system-ui;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.38;
  --tracking-heading-sm: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.8px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -1.2px;
  --text-display: 48px;
  --leading-display: 1.25;
  --tracking-display: -1.92px;
  --text-display-lg: 80px;
  --leading-display-lg: 1.13;
  --tracking-display-lg: -5.6px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-53: 53px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-82: 82px;
  --spacing-105: 105px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --spacing-147: 147px;
  --spacing-160: 160px;
  --spacing-192: 192px;
  --spacing-208: 208px;
  --spacing-215: 215px;
  --radius-cards: 0px;
  --radius-images: 16px;
  --radius-buttons: 9999px;
  --radius-general: 16px;
  --radius-pill-buttons-large: 40px;
  --shadow-xl: rgba(73, 46, 107, 0.14) 0px 3px 16px 0px;
  --shadow-xl-2: rgba(71, 92, 133, 0.25) 0px 4px 20px 0px, rgba(144, 138, 208, 0.1) 0px 30px 60px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-white-canvas: #ffffff;
  --color-cloud-gray: #f9f9fb;
  --color-deep-space-violet: #1f1f47;
  --color-digital-violet: #576cdb;
  --color-charcoal-text: #171a1c;
  --color-slate-text: #3d3d5c;
  --color-whisper-gray: #6c7693;
  --color-hover-violet: #abb6ed;
  --color-light-violet-stroke: #eaedf6;
  --color-gradient-aura: #5a73f2;
  --font-object-sans: 'Object Sans', system-ui;
  --font-helvetica-neue: 'Helvetica Neue', system-ui;
  --text-caption: 13px;
  --leading-caption: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.38;
  --tracking-heading-sm: -0.48px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.8px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -1.2px;
  --text-display: 48px;
  --leading-display: 1.25;
  --tracking-display: -1.92px;
  --text-display-lg: 80px;
  --leading-display-lg: 1.13;
  --tracking-display-lg: -5.6px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-53: 53px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-82: 82px;
  --spacing-105: 105px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --spacing-147: 147px;
  --spacing-160: 160px;
  --spacing-192: 192px;
  --spacing-208: 208px;
  --spacing-215: 215px;
  --radius-cards: 0px;
  --radius-images: 16px;
  --radius-buttons: 9999px;
  --radius-general: 16px;
  --radius-pill-buttons-large: 40px;
  --shadow-xl: rgba(73, 46, 107, 0.14) 0px 3px 16px 0px;
  --shadow-xl-2: rgba(71, 92, 133, 0.25) 0px 4px 20px 0px, rgba(144, 138, 208, 0.1) 0px 30px 60px 0px;
}
```
