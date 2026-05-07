---
version: alpha
name: "Quizlet"
description: "This design system feels like a friendly, structured learning environment, prioritizing clarity and interactive engagement. The dominant near-gray background (#F6F7FB) provides a clean canvas, while a palette of vivid and moderate hues—primarily a bold violet (#4255FF) and accent colors like light blue (#98E3FF) and vibrant pink (#EEAAFF)—define interactive elements and illustrate content categories. The consistent use of `hurme_no2-webfont` with varying weights creates a cohesive textual experience, balancing readability with a distinctive, approachable character."
theme: "light"
industry: "other"
source_url: "https://quizlet.com"
refero_style_id: "528eb1d4-8508-4dc6-87b4-c7b92d648dac"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933125039-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933125039-thumb.jpg"
extracted_at: "2026-04-11T18:45:45.571Z"
---

# Quizlet — Style Reference

> Academic Playground on Soft Gray. Like a well-organized desk scattered with colorful learning tools.

**Theme:** light

**Industry:** other

This design system feels like a friendly, structured learning environment, prioritizing clarity and interactive engagement. The dominant near-gray background (#F6F7FB) provides a clean canvas, while a palette of vivid and moderate hues—primarily a bold violet (#4255FF) and accent colors like light blue (#98E3FF) and vibrant pink (#EEAAFF)—define interactive elements and illustrate content categories. The consistent use of `hurme_no2-webfont` with varying weights creates a cohesive textual experience, balancing readability with a distinctive, approachable character.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Stormcloud Ink | #282e3 | `--color-stormcloud-ink` | Primary text, deep context elements, input text, prominent icons. |
| Quizlet Violet | #4255ff | `--color-quizlet-violet` | Primary interactive elements, main CTA buttons, active links, important icons, defining Quizlet's brand identity. |
| Sky Study | #98e3ff | `--color-sky-study` | Decorative background for 'Learn' card, adding a moderate, fresh accent. |
| Flashcard Pink | #eeaaff | `--color-flashcard-pink` | Decorative background for 'Study Guides' card, adding a playful, vivid accent. |
| Night Violet | #423ed8 | `--color-night-violet` | Decorative background for 'Flashcards' card, a darker, more intense variant of the brand violet. |
| Practice Orange | #ffc38c | `--color-practice-orange` | Decorative background for 'Practice Tests' card, a moderate, warm accent. |
| Slate Text | #586380 | `--color-slate-text` | Secondary text, less prominent icons, button outlines, subtle informational text. |
| Light Slate | #939bb4 | `--color-light-slate` | Subtle borders, inactive states, lighter text elements for hierarchical distinction. |
| Deep Slate | #2e3856 | `--color-deep-slate` | Detailed body text, specific informational blocks, providing a muted contrast. |
| Page Background | #f6f7fb | `--color-page-background` | Dominant background color for the entire application, serving as a bright, clean foundation. |
| Pure White | #ffffff | `--color-pure-white` | Card backgrounds, section separators, text on dark buttons, establishing a crisp, elevated surface. |
| Ash Border | #d9dde8 | `--color-ash-border` | Dividers, subtle input borders, defining content boundaries without harshness. |

## Tokens — Typography

### hurme_no2-webfont

- **Token:** `--font-hurme-no2-webfont`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 600, 700
- **Sizes:** 12px, 14px, 16px, 20px, 21px, 24px, 32px, 44px
- **Line heights:** 1.25, 1.27, 1.33, 1.40, 1.43, 1.50, 1.63
- **Letter spacing:** normal
- **Role:** Primary typeface for all textual content from headlines to body text, buttons, and navigation. Its consistent application across all sizes and weights establishes a direct, legible tone.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.43 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.25 | — | `--text-subheading` |
| heading | 24px | 1.33 | — | `--text-heading` |
| heading-lg | 32px | 1.27 | — | `--text-heading-lg` |
| display | 44px | 1.25 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-86 | 86px | `--spacing-86` |
| spacing-87 | 87px | `--spacing-87` |
| spacing-201 | 201px | `--spacing-201` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| inputs | 4px |
| buttons | 200px |
| general | 4px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(40, 46, 62, 0.1) 0px 4px 16px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.3) 0px 0px 1px 0px inset | `--shadow-xl-2` |
| xl-3 | rgba(40, 46, 62, 0.1) 0px 2px 4px 0px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| elementGap | 8px |

## Components

### Study Mode Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Flashcard Set Cards Grid

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### CTA Button Group with Search Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Secondary Button (Ghost)

**Role:** Action

Transparent background (`rgba(0, 0, 0, 0)`), text 'Quizlet Violet' (`#4255ff`), `hurme_no2-webfont` weight 400 at 16px, padding `0px`, `4px` border-radius.

### Icon Button (Circular)

**Role:** Navigation/Action

Transparent background (`rgba(0, 0, 0, 0)`), text 'Ash Border' (`#d9dde8`) (likely for inactive state), `50%` border-radius resulting in a circle, `0px` padding.

### Navigation Link Button

**Role:** Navigation

Transparent background (`rgba(0, 0, 0, 0)`), text 'Stormcloud Ink' (`#282e3e`), `0px` border-radius, `0px` padding, typically for internal navigation.

### Category Card (Learn)

**Role:** Content Display

Background 'Pure White' (`#ffffff`), `8px` border-radius, `Stormcloud Ink` (`rgba(40, 46, 62, 0.1) 0px 4px 16px 0px`) shadow, `Sky Study` (`#98e3ff`) background accent for content block.

### Category Card (Flashcards)

**Role:** Content Display

Background 'Pure White' (`#ffffff`), `8px` border-radius, `Stormcloud Ink` (`rgba(40, 46, 62, 0.1) 0px 4px 16px 0px`) shadow, `Night Violet` (`#423ed8`) background accent for content block.

### Category Card (Practice Tests)

**Role:** Content Display

Background 'Pure White' (`#ffffff`), `8px` border-radius, `Stormcloud Ink` (`rgba(40, 46, 62, 0.1) 0px 4px 16px 0px`) shadow, `Practice Orange` (`#ffc38c`) background accent for content block.

## Do's and Don'ts

### Do

- Use 'Page Background' (`#f6f7fb`) as the foundational canvas for all pages.
- Apply 'Quizlet Violet' (`#4255ff`) exclusively for primary call-to-action buttons and key interactive elements to maintain focus.
- Utilize `hurme_no2-webfont` weight 700 for headlines and primary CTA button text to ensure clear hierarchy and impact.
- Maintain `8px` border-radius for all content cards and larger container elements, and `4px` for input fields and smaller interactive items.
- Employ the `Stormcloud Ink` shadow (`rgba(40, 46, 62, 0.1) 0px 4px 16px 0px`) for elevated components like cards and navigation to create subtle depth.
- Employ `16px` padding for internal spacing within content blocks and `48px` for vertical separation between major sections.
- Use `Stormcloud Ink` (`#282e3e`) for main body text and prominent informational text, and `Slate Text` (`#586380`) for secondary text details.

### Don't

- Do not introduce new highly saturated colors outside of the defined accent palette, as they will clash with the established brand hues.
- Avoid using `200px` border-radius on any element other than primary buttons to preserve their distinctive pill shape.
- Do not use generic system fonts; only `hurme_no2-webfont` should be used for all text content.
- Refrain from heavy, dark shadows; the subtle `Stormcloud Ink` shadow is sufficient for elevation.
- Do not use `0px` border-radius on any visible component unless it's a specific, text-only navigation link, to preserve a soft, approachable aesthetic.
- Do not cluster too much vibrant imagery; allow the core UI colors and clean layout to guide user attention.
- Avoid using `Pure White` (#ffffff) for any primary text color; it's reserved for backgrounds and text on dark buttons.

## Elevation

- **Card / Elevated Panel:** `rgba(40, 46, 62, 0.1) 0px 4px 16px 0px`
- **Button Focus:** `rgba(40, 46, 62, 0.1) 0px 2px 4px 0px`
- **Icon Outline / Inner Shadow:** `rgba(0, 0, 0, 0.3) 0px 0px 1px 0px inset`

## Imagery

Imagery features a mix of product screenshots demonstrating the app's interface (contained in stylized device mockups), flat, geometric illustrations that are brand-colored and serve as decorative accents on cards, and abstract graphics. Photography is largely absent. The icons are minimalistic, usually filled, with a medium stroke weight where outlines are present, consistent with the brand colors. Imagery plays a role in both explanatory content (product screenshots) and decorative atmosphere (card illustrations), balancing visual interest with clean UI. Density shows imagery playing a significant role in breaking up text and making sections more engaging, especially in the hero area and feature descriptions.

## Layout

The page primarily uses a max-width contained layout, approximately 1200px wide, centered within the browser. The hero section features a centered headline and subtext over a `Page Background` (`#f6f7fb`), followed by a row of distinct, accent-colored category cards. Sections generally follow a consistent `48px` vertical spacing. Content is often arranged in alternate text-left/image-right compositions for features, and a flexible grid for content cards (visible as a 3-column grid in some sections). The navigation is a fixed top bar (`64px` height) with a clear search input and primary CTA button. The footer is dense with links, organized into column lists.

## Similar Brands

- **Canva** — Similar approach to using a light background canvas (#F6F7FB) with vibrant, distinct accent colors for feature differentiation and interactive elements.
- **Duolingo** — Employs an educational focus with playful, colorful illustrations and clear, approachable typography for learning modules.
- **Notion** — Clean, predominantly gray/white interface with minimal, subtle shadows and focused use of brand colors for interactive elements, favoring clarity over visual clutter.
- **Headspace** — Uses soft, rounded shapes and a limited, vibrant color palette effectively for a calming yet engaging user experience within a learning context.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-stormcloud-ink: #282e3;
  --color-quizlet-violet: #4255ff;
  --color-sky-study: #98e3ff;
  --color-flashcard-pink: #eeaaff;
  --color-night-violet: #423ed8;
  --color-practice-orange: #ffc38c;
  --color-slate-text: #586380;
  --color-light-slate: #939bb4;
  --color-deep-slate: #2e3856;
  --color-page-background: #f6f7fb;
  --color-pure-white: #ffffff;
  --color-ash-border: #d9dde8;
  --font-hurme-no2-webfont: 'hurme_no2-webfont', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.27;
  --text-display: 44px;
  --leading-display: 1.25;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-86: 86px;
  --spacing-87: 87px;
  --spacing-201: 201px;
  --radius-cards: 8px;
  --radius-inputs: 4px;
  --radius-buttons: 200px;
  --radius-general: 4px;
  --shadow-xl: rgba(40, 46, 62, 0.1) 0px 4px 16px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.3) 0px 0px 1px 0px inset;
  --shadow-xl-3: rgba(40, 46, 62, 0.1) 0px 2px 4px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-stormcloud-ink: #282e3;
  --color-quizlet-violet: #4255ff;
  --color-sky-study: #98e3ff;
  --color-flashcard-pink: #eeaaff;
  --color-night-violet: #423ed8;
  --color-practice-orange: #ffc38c;
  --color-slate-text: #586380;
  --color-light-slate: #939bb4;
  --color-deep-slate: #2e3856;
  --color-page-background: #f6f7fb;
  --color-pure-white: #ffffff;
  --color-ash-border: #d9dde8;
  --font-hurme-no2-webfont: 'hurme_no2-webfont', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.25;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.27;
  --text-display: 44px;
  --leading-display: 1.25;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-86: 86px;
  --spacing-87: 87px;
  --spacing-201: 201px;
  --radius-cards: 8px;
  --radius-inputs: 4px;
  --radius-buttons: 200px;
  --radius-general: 4px;
  --shadow-xl: rgba(40, 46, 62, 0.1) 0px 4px 16px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.3) 0px 0px 1px 0px inset;
  --shadow-xl-3: rgba(40, 46, 62, 0.1) 0px 2px 4px 0px;
}
```
