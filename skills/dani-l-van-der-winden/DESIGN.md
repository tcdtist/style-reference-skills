---
version: alpha
name: "Daniël van der Winden"
description: "Daniël van der Winden's personal site embodies a focused, editorial aesthetic, reminiscent of a neatly organized journal or academic publication. It prioritizes clarity and directness through a largely monochrome palette, functional typography, and structured content presentation. Visual elements are sparse, with strong emphasis on text, creating an atmosphere of quiet intellectual authority. The design system is characterized by subtle greys, crisp lines, and a deliberate absence of vibrant color, allowing the content to take center stage."
theme: "light"
industry: "design"
source_url: "https://www.daniel.pizza"
refero_style_id: "e8eda526-d686-4e45-a60d-61b6503a8eda"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514710269-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514710269-thumb.jpg"
extracted_at: "2026-04-30T02:05:33.892Z"
---

# Daniël van der Winden — Style Reference

> Ordered Editorial Ink

**Theme:** light

**Industry:** design

Daniël van der Winden's personal site embodies a focused, editorial aesthetic, reminiscent of a neatly organized journal or academic publication. It prioritizes clarity and directness through a largely monochrome palette, functional typography, and structured content presentation. Visual elements are sparse, with strong emphasis on text, creating an atmosphere of quiet intellectual authority. The design system is characterized by subtle greys, crisp lines, and a deliberate absence of vibrant color, allowing the content to take center stage.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Porcelain | #e5e7eb | `--color-canvas-porcelain` | Page backgrounds, surface base, subtle borders and dividers that define structure without visual weight |
| Ebony Text | #111827 | `--color-ebony-text` | Secondary body text, navigation labels, and subdued headings. Do not promote it to the primary CTA color |
| Graphite Text | #374151 | `--color-graphite-text` | Secondary text, descriptive paragraphs, list items, and subtle hero text, offering a softer reading experience than primary text |
| Midnight Ink | #1a202c | `--color-midnight-ink` | Background for primary call-to-action buttons, providing a deep, solid presence for key interactions |
| Jet Button | #222222 | `--color-jet-button` | Background for secondary action buttons, providing a slightly lighter alternative to primary button backgrounds |
| Shadow Icon | #000000 | `--color-shadow-icon` | Decorative icons and fills where pure black is used to create sharp, small accents |
| Slate Text | #2a2a28 | `--color-slate-text` | Specific prominent headings and links, adding a slightly different shade to distinguish certain textual elements |
| Ash Text | #676867 | `--color-ash-text` | Muted text in links and headings, serving as a lower-contrast visual for less emphasized information |
| Fog Border | #c4c6c8 | `--color-fog-border` | Subtle borders and dividers, providing a slightly darker line than Canvas Porcelain for structural definition |
| Stone Text | #7b7c7c | `--color-stone-text` | Specific heading elements with a muted, understated tone |

## Tokens — Typography

### Degular

- **Token:** `--font-degular`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 14px, 16px, 18px, 22px, 24px, 28px, 32px, 40px
- **Line heights:** 1.25, 1.50
- **Letter spacing:** 0.0250em, 0.1000em
- **Role:** Primary grotesque sans-serif for headings, body text, and interactive elements. Its neutral yet confident presence provides the main voice of the content, with moderate tracking at larger sizes to maintain clarity.

### Blanco

- **Token:** `--font-blanco`
- **Substitute:** Lora
- **Weights:** 400
- **Sizes:** 14px, 20px, 22px, 28px
- **Line heights:** 1.40, 1.50
- **Letter spacing:** normal
- **Role:** A serif font used for select headings, links, and specific long-form content. Its classic proportions provide an intellectual counterpoint to the sans-serif, signaling depth and traditional editorial quality.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.5 | — | `--text-subheading` |
| heading | 22px | 1.25 | — | `--text-heading` |
| heading-lg | 24px | 1.25 | — | `--text-heading-lg` |
| display-sm | 28px | 1.25 | — | `--text-display-sm` |
| display | 32px | 1.25 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-225 | 225px | `--spacing-225` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 3px |
| other | 8px |
| buttons | 0px |
| navigation | 3px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1600px |
| sectionGap | 24px |
| cardPadding | 12px |
| elementGap | 8px |

## Components

### Primary Filled Button

**Role:** Main call-to-action button, conveying prominence.

Background: Midnight Ink (#1a202c), Text: Canvas Porcelain (#e5e7eb), Padding: 8px vertical, 12px horizontal. Border radius: 0px. Font: Degular.

### Email Button

**Role:** Secondary action button for personal contacts, slightly softer than primary.

Background: Jet Button (#222222), Text: Canvas Porcelain (#ffffff), Padding: 8px vertical, 12px horizontal. Border radius: 4px. Font: Degular.

### Ghost Icon Button

**Role:** Subtle interactive button, often for icons or secondary actions, maintaining minimal visual footprint.

Background: transparent, Text: Ebony Text (#111827), Padding: 8px square. Border radius: 6px. Font: Degular.

### Navigation Link

**Role:** Interactive elements within the left-hand navigation, indicating selectable items.

Text: Ebony Text (#111827) for active, Graphite Text (#374151) for inactive. Underline on hover. Border radius: 3px for focused/active states.

### Text Input (Default)

**Role:** Standard input field for user data entry.

Background: Canvas Porcelain (#e5e7eb), Border: 1px solid Canvas Porcelain (#e5e7eb). Text: Ebony Text (#111827). Padding: likely 8-12px.

### Resume Entry Card

**Role:** Presenting individual job or project entries in a structured list.

No explicit card background, assumes Canvas Porcelain (#e5e7eb) as background. Text: Ebony Text (#111827) for roles, Graphite Text (#374151) for descriptions. Defined by vertical spacing.

### Image Wrapper

**Role:** Container for imagery, providing subtle shaping.

Border radius: 3px. No explicit border, image is contained directly.

## Do's and Don'ts

### Do

- Prioritize text content: use Ebony Text (#111827) and Graphite Text (#374151) for all primary and secondary text, ensuring AAA contrast against Canvas Porcelain (#e5e7eb).
- Maintain a clear hierarchy with Degular for headings and interactive elements, and Blanco for specific editorial and long-form content.
- Utilize Canvas Porcelain (#e5e7eb) as the dominant background and base for all surfaces and subtly defining structural borders.
- Employ consistent vertical rhythm in content sections, defaulting to 27px for body paragraphs and 40px for list item separation.
- Apply 3px border radius to navigation items, links, and contained images for a subtle softening of edges, contrasting with the sharp 0px radius for primary buttons.
- Use Midnight Ink (#1a202c) exclusively for primary filled button backgrounds to signal key actions.
- Distribute elements with a base element gap of 8px, scaling up for larger section spacing where needed.

### Don't

- Avoid introducing vibrant or saturated colors; maintain the predominantly monochrome palette with subtle shifts in grey.
- Do not use heavy shadows or excessive elevation; the system relies on subtle borders and spacing for visual separation.
- Refrain from drastically altering font weights or letter spacing beyond the defined Degular and Blanco profiles, especially avoiding tight tracking on body text.
- Do not deviate from the strict 0px radius for primary filled buttons; this is a signature sharp detail.
- Avoid large, ornate, or busy graphical elements; visual communication should remain direct and content-focused.
- Do not use multiple background colors for successive sections; maintain a seamless flow or use Canvas Porcelain with subtle internal borders.
- Do not use generic system fonts; stick to Degular and Blanco to uphold the distinct brand voice.

## Imagery

Imagery is used sparingly, primarily focusing on candid, slightly desaturated, or monochromatic photography and product shots, often contained within a 3px rounded border. The images serve to provide context or a personal touch rather than being decorative. There are no illustrations or elaborate graphics; the visual language is direct and non-intrusive. Icons are simple, outlined, and monochromatic (Shadow Icon or Ebony Text), acting as functional cues like external link indicators.

## Layout

The page primarily uses a contained layout with a maximum width of 1600px, centering content within the Canvas Porcelain background. The hero section presents a combination of text and imagery, arranged as a split screen or with imagery serving as context for the text. Content sections are typically text-dominant, with a clear vertical flow and consistent spacing, avoiding busy or overlapping elements. A prominent left-hand navigation column remains fixed, echoing a desk-bound journal. Features and resume entries are presented in a clean, stacked list-like fashion, defined by strong typographic hierarchy and generous line spacing rather than visual containers. The density is comfortable, with ample breathing room around text blocks and between sections.

## Similar Brands

- **Read.cv** — Uses a similar resume-like structure, monochrome palette, and emphasis on clear typography for professional portfolios.
- **Superlist** — Employs an editorial tone, strong grid, and muted color palette for a content-focused productivity application.
- **Ghost CMS** — Shares a clean, minimalist aesthetic with an emphasis on readable typography and a subtle, functional interface.
- **Linear** — Uses a controlled color palette (mostly neutrals with a strong accent), crisp lines, and an information-dense yet organized layout.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-porcelain: #e5e7eb;
  --color-ebony-text: #111827;
  --color-graphite-text: #374151;
  --color-midnight-ink: #1a202c;
  --color-jet-button: #222222;
  --color-shadow-icon: #000000;
  --color-slate-text: #2a2a28;
  --color-ash-text: #676867;
  --color-fog-border: #c4c6c8;
  --color-stone-text: #7b7c7c;
  --font-degular: 'Degular', Inter;
  --font-blanco: 'Blanco', Lora;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading: 22px;
  --leading-heading: 1.25;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.25;
  --text-display-sm: 28px;
  --leading-display-sm: 1.25;
  --text-display: 32px;
  --leading-display: 1.25;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-225: 225px;
  --radius-cards: 3px;
  --radius-other: 8px;
  --radius-buttons: 0px;
  --radius-navigation: 3px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-porcelain: #e5e7eb;
  --color-ebony-text: #111827;
  --color-graphite-text: #374151;
  --color-midnight-ink: #1a202c;
  --color-jet-button: #222222;
  --color-shadow-icon: #000000;
  --color-slate-text: #2a2a28;
  --color-ash-text: #676867;
  --color-fog-border: #c4c6c8;
  --color-stone-text: #7b7c7c;
  --font-degular: 'Degular', Inter;
  --font-blanco: 'Blanco', Lora;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading: 22px;
  --leading-heading: 1.25;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.25;
  --text-display-sm: 28px;
  --leading-display-sm: 1.25;
  --text-display: 32px;
  --leading-display: 1.25;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-225: 225px;
  --radius-cards: 3px;
  --radius-other: 8px;
  --radius-buttons: 0px;
  --radius-navigation: 3px;
}
```
