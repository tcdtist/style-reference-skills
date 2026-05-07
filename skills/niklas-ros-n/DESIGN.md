---
version: alpha
name: "Niklas Rosén"
description: "The Niklas Rosén portfolio embodies a minimalist, content-first layout with a strong emphasis on typography and structured information. A monochromatic palette of deep charcoal, soft grays, and crisp white defines the interface, creating a serious, uncluttered canvas. Interactivity is subtle, often indicated by fine line treatments rather than bold color fills, allowing the project titles and details to take center stage with a quiet authority."
theme: "light"
industry: "design"
source_url: "https://niklasrosen.se"
refero_style_id: "b5bc8362-467b-455b-b31c-08a16f224649"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521485829-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521485829-thumb.jpg"
extracted_at: "2026-04-30T03:58:17.031Z"
---

# Niklas Rosén — Style Reference

> monochromatic archive on stark paper white

**Theme:** light

**Industry:** design

The Niklas Rosén portfolio embodies a minimalist, content-first layout with a strong emphasis on typography and structured information. A monochromatic palette of deep charcoal, soft grays, and crisp white defines the interface, creating a serious, uncluttered canvas. Interactivity is subtle, often indicated by fine line treatments rather than bold color fills, allowing the project titles and details to take center stage with a quiet authority.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Charcoal | #1a1a1a | `--color-midnight-charcoal` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Soft Frost | #ededed | `--color-soft-frost` | Subtle borders, list item separators — provides visual division without harsh lines, maintaining a light feel |
| Muted Gray | #b7b7b7 | `--color-muted-gray` | Secondary text, subtle decorative lines — offers a softer tone for less emphasized information |

## Tokens — Typography

### Univers Next Pro

- **Token:** `--font-univers-next-pro`
- **Substitute:** Helvetica Neue
- **Weights:** 400
- **Sizes:** 24px
- **Line heights:** 1.00
- **Letter spacing:** -0.0300em
- **Role:** All textual content, from headings to body text and interactive elements. Its consistent use at a single weight creates a uniform, unadorned voice across the site.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-80 | 80px | `--spacing-80` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 80px |
| cardPadding | 0px |
| elementGap | 4px |

## Components

### Unstyled Text Button

**Role:** Interactive navigation and information toggles

Minimalist button with no background or padding beyond text. Text color is Midnight Charcoal (#1a1a1a). Border radius is 0px. Focus indication is implied by hover line stroke, or text color change only. Used for 'Portfolio', 'Learn more', 'Browse Index'.

### Index List Item

**Role:** Displaying project entries in a structured, scannable format

Each list item is text-based with padding that implies grouping, without explicit cards or borders. Separated by a 1px solid Soft Frost (#ededed) border. Text uses Univers Next Pro 24px weight 400 with -0.0300em letter spacing. Interaction highlights are text-based.

### Menu Toggle

**Role:** Initiating navigation pane display

A ghost button, typically displaying 'Menu' or a hamburger icon. Text is Midnight Charcoal (#1a1a1a), no background, no border, no radius. Implicit 0px padding. Transitions on color change for active states.

## Do's and Don'ts

### Do

- Use Midnight Charcoal (#1a1a1a) for all primary text and critical interactive borders to maintain visual gravity.
- Apply Soft Frost (#ededed) for hairline separators and subtle divisions, particularly for list items and section breaks.
- Maintain a tight, structured hierarchy through generous vertical spacing of 80px between main content blocks.
- Ensure all interactive elements, such as buttons and links, have a 0px border-radius and no distinct background to emphasize content over chrome.
- Strictly adhere to Univers Next Pro 24px weight 400 with -0.0300em letter spacing for all typorgraphic elements to preserve a consistent visual voice.
- Utilize 4px as the foundational unit for small inner element spacing, creating a compact yet legible content display.
- Favor minimal interactive states, relying on subtle text color changes or fine line strokes rather than background fills for feedback.

### Don't

- Do not introduce strong accent colors or vivid hues; the palette is strictly achromatic to maintain a serious, content-focused atmosphere.
- Avoid using any border-radius greater than 0px on buttons or containers; the design intentionally disavows rounded corners.
- Refrain from using drop shadows or complex elevation techniques; the design should remain flat and stark.
- Do not deviate from the single Univers Next Pro font at 24px weight 400; typographic variety is not part of this system.
- Do not use explicit card backgrounds or paneling; boundaries and hierarchy are established through spacing and subtle borders.
- Do not use full-width backgrounds or color blocks to define sections; transitions should be defined by typography, spacing, and thin lines.
- Avoid marketing-style imagery, decorative backgrounds, or large graphical elements; the focus is on textual information and structured presentation.

## Imagery

The site is almost entirely devoid of imagery, relying instead on clean typography and structured text. When icons are present (like the arrow icons for navigation), they are simple, outline-based, and rendered in the primary text color, serving purely functional roles without decorative flair. The visual density is extremely low, placing all emphasis on the textual content.

## Layout

The page adheres to a full-bleed, unconstrained width layout, with central content columns implicitly defined by text alignment and max-width of text blocks. The hero section introduces the designer with a centered name and left-aligned descriptive text. Sections are clearly delineated by generous 80px vertical spacing and sometimes by a hairline border. Content is primarily presented in-list format, with minimal lateral hierarchy. Navigation is minimal, consisting of a sticky top bar and a main index that forms the core of the page structure.

## Similar Brands

- **Kerem Suer** — Monochromatic palette with a focus on text-based portfolio items and clean, unadorned UI.
- **Build with Argonaut** — Minimalist design, strong emphasis on typography over imagery, and subtle interactive elements.
- **Studiometa** — Clean, grid-like layout for content, restrained color use, and a focus on project presentation through text rather than rich visuals.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-charcoal: #1a1a1a;
  --color-soft-frost: #ededed;
  --color-muted-gray: #b7b7b7;
  --font-univers-next-pro: 'Univers Next Pro', Helvetica Neue;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-80: 80px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-charcoal: #1a1a1a;
  --color-soft-frost: #ededed;
  --color-muted-gray: #b7b7b7;
  --font-univers-next-pro: 'Univers Next Pro', Helvetica Neue;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-80: 80px;
  --radius-none: 0px;
}
```
