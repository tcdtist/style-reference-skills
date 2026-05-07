---
version: alpha
name: "Office Chair Finder"
description: "Vitra's Office Chair Finder adopts a functional, no-frills aesthetic, prioritizing clear user interaction over decorative flourishes. The design relies on a monochrome palette of deep charcoals and bright whites, complemented by a single muted red for interactive elements. Typography is direct and legible, with button components featuring defined borders and a subtle shadow for clear affordance rather than visual spectacle. The overall impression is one of practical utility, guiding the user through a structured process."
theme: "light"
industry: "other"
source_url: "https://findmy.vitra.com/en-en"
refero_style_id: "756dd3c1-6ccf-4824-bad3-96027cd0faf0"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513140399-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513140399-thumb.jpg"
extracted_at: "2026-04-30T01:39:17.246Z"
---

# Office Chair Finder — Style Reference

> Monochrome utility with active red accents.

**Theme:** light

**Industry:** other

Vitra's Office Chair Finder adopts a functional, no-frills aesthetic, prioritizing clear user interaction over decorative flourishes. The design relies on a monochrome palette of deep charcoals and bright whites, complemented by a single muted red for interactive elements. Typography is direct and legible, with button components featuring defined borders and a subtle shadow for clear affordance rather than visual spectacle. The overall impression is one of practical utility, guiding the user through a structured process.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Absolute Zero | #272727 | `--color-absolute-zero` | Most prominent text color, default borders, major headings, content text |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, button text for filled buttons, outlines for ghost buttons |
| Ink Wash | #333333 | `--color-ink-wash` | Filled button backgrounds, subtle decorative fills in navigation |
| Ash Gray | #a9a9a9 | `--color-ash-gray` | Muted link text, secondary border details |
| Action Red | #ef6b6b | `--color-action-red` | Outlined interactive elements (links, buttons) — provides the only chromatic highlight to draw attention to actionable items without overwhelming the monochrome interface |

## Tokens — Typography

### Times New Roman

- **Token:** `--font-times-new-roman`
- **Substitute:** serif
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00
- **Role:** Body text and miscellaneous content, providing a classic, readable foundation.

### Futura

- **Token:** `--font-futura`
- **Substitute:** sans-serif
- **Weights:** 400
- **Sizes:** 12px, 14px, 48px
- **Line heights:** 1.15, 1.20, 1.30
- **Role:** Headings, navigation elements, and interactive text. Its geometric sans-serif nature provides a modern counterpoint to the body text for clear hierarchy and calls to action.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | — | `--text-caption` |
| body-sm | 14px | 1.2 | — | `--text-body-sm` |
| body | 48px | 1.2 | — | `--text-body` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-173 | 173px | `--spacing-173` |
| spacing-269 | 269px | `--spacing-269` |

### Border Radius

| Element | Value |
| --- | --- |
| button | 5px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.094) 2px 2px 4px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 173px |
| cardPadding | 12px |
| elementGap | 13px |

## Components

### Filled Action Button

**Role:** Primary Call to Action

Solid Ink Wash background (#333333) with Canvas White text (#ffffff), a 5px border-radius, and a soft shadow. Padding is 12px vertical and 52px horizontal, creating substantial visual weight.

### Outlined Action Link

**Role:** Secondary Interaction

Canvas White background with an Action Red border (#ef6b6b) and Action Red text. Used for navigation where an interactive state is highlighted, typically with minimal padding (implicit from text size).

### Muted Link Text

**Role:** Tertiary Navigation/Information

Ash Gray text (#a9a9a9) with an Ash Gray border, used for less prominent links like country selectors. Provides visual differentiation from primary links.

### Modal Card

**Role:** Content Overlay

Canvas White background (#ffffff) with Absolute Zero text (#272727). Implicitly uses page padding for internal content, and a border radius of 5px if buttons inside match this radius.

### Navigation Bar

**Role:** Persistent Global Navigation

Canvas White background (#ffffff) with Ink Wash (#333333) decorative elements. Text is typically sized 14px Futura at weight 400 with a line height of 1.2.

## Do's and Don'ts

### Do

- Use Absolute Zero (#272727) for all primary text content and main headings.
- Implement Canvas White (#ffffff) as the default background for all cards and page surfaces.
- Apply Ink Wash (#333333) exclusively for filled button backgrounds, paired with Canvas White text.
- Reserve Action Red (#ef6b6b) for borders and text of outlined interactive elements, indicating primary actions or important links.
- Ensure all buttons have a 5px border-radius and use 12px vertical padding.
- Maintain a spacious feel, using 173px for vertical section gaps and 13px for element spacing.
- Utilize Futura (sans-serif) for all headings, navigation, and interactive text, and Times New Roman (serif) for body copy.

### Don't

- Avoid using multiple chromatic colors; limit color accents strictly to Action Red (#ef6b6b).
- Do not use shadows on elements other than buttons or distinct interactive components.
- Refrain from deviating from the established monochromatic palette for backgrounds or primary textual elements.
- Do not apply decorative text styles or weights other than what is specified for Futura and Times New Roman.
- Avoid tight spacing; maintain the generous 173px section gaps and 13px element gaps.
- Do not use generic blue for links; all interactive link text should either be Absolute Zero or Action Red.
- Do not introduce complex gradients; the system relies heavily on solid colors and subtle elevation.

## Elevation

- **Filled Action Button:** `rgba(0, 0, 0, 0.094) 2px 2px 4px 0px`

## Imagery

The site uses a 'no imagery, pure UI' approach for its interface elements, relying on typography and solid color fields to convey information. For product display, it features 3D rendered office chairs presented in a dynamic, scattered pattern on a neutral background, serving as decorative atmosphere rather than direct content support. Icons, where present, appear to be minimal and monochromatic, adhering to the overall utilitarian design.

## Layout

The page exhibits a max-width contained layout rather than full-bleed. The hero section, if present, is obscured by a modal, but background elements suggest a visually dynamic, full-viewport aesthetic. Content is arranged with consistent vertical spacing, and sections appear to predominantly stack. The primary content is presented within a central modal that overlays the background, indicating a highly focused, task-oriented user flow. Navigation is a minimal top bar, suggesting an overlay or simplified experience rather than complex hierarchies.

## Similar Brands

- **Herman Miller** — Focus on high-design office furniture with a clean, functional web presence and emphasis on product visuals.
- **Hay** — Minimalist aesthetic for furniture design, relying on sharp typography and curated product display.
- **Artek** — Modernist furniture with a lean digital interface, often using stark contrasts and clear information hierarchy.
- **Flos** — Lighting design brand with a sophisticated, product-centric website featuring precise UI and limited color.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-absolute-zero: #272727;
  --color-canvas-white: #ffffff;
  --color-ink-wash: #333333;
  --color-ash-gray: #a9a9a9;
  --color-action-red: #ef6b6b;
  --font-times-new-roman: 'Times New Roman', serif;
  --font-futura: 'Futura', sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.2;
  --text-body: 48px;
  --leading-body: 1.2;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-19: 19px;
  --spacing-38: 38px;
  --spacing-52: 52px;
  --spacing-173: 173px;
  --spacing-269: 269px;
  --radius-button: 5px;
  --shadow-xl: rgba(0, 0, 0, 0.094) 2px 2px 4px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-absolute-zero: #272727;
  --color-canvas-white: #ffffff;
  --color-ink-wash: #333333;
  --color-ash-gray: #a9a9a9;
  --color-action-red: #ef6b6b;
  --font-times-new-roman: 'Times New Roman', serif;
  --font-futura: 'Futura', sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.2;
  --text-body: 48px;
  --leading-body: 1.2;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-19: 19px;
  --spacing-38: 38px;
  --spacing-52: 52px;
  --spacing-173: 173px;
  --spacing-269: 269px;
  --radius-button: 5px;
  --shadow-xl: rgba(0, 0, 0, 0.094) 2px 2px 4px 0px;
}
```
