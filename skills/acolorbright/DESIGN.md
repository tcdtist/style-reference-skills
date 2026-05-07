---
version: alpha
name: "Acolorbright"
description: "Acolorbright employs a sophisticated, minimalist aesthetic, using a clean, monochromatic canvas to highlight content and imagery. Typography is precise and confidently understated, defining hierarchy through size and nuanced weight rather than color. Interactive elements are sparse but clearly defined, often using soft borders and subtle background shifts to indicate affordance. The overall impression is one of grounded professionalism and clarity, with design choices geared towards content presentation and subtle interaction rather than overt brand expression through color."
theme: "light"
industry: "design"
source_url: "https://www.acolorbright.com"
refero_style_id: "6738c8ec-0e5b-4533-8901-1297aebd32e1"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520475123-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520475123-thumb.jpg"
extracted_at: "2026-04-30T03:41:37.306Z"
---

# Acolorbright — Style Reference

> Gallery Canvas

**Theme:** light

**Industry:** design

Acolorbright employs a sophisticated, minimalist aesthetic, using a clean, monochromatic canvas to highlight content and imagery. Typography is precise and confidently understated, defining hierarchy through size and nuanced weight rather than color. Interactive elements are sparse but clearly defined, often using soft borders and subtle background shifts to indicate affordance. The overall impression is one of grounded professionalism and clarity, with design choices geared towards content presentation and subtle interaction rather than overt brand expression through color.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink | #1a1a1a | `--color-ink` | Primary text, prominent headings, borders for structural elements, hero content text |
| Charcoal Mist | #666666 | `--color-charcoal-mist` | Secondary text, muted links, subtle decorative backgrounds, borders for content hierarchy |
| Ash Gray | #999999 | `--color-ash-gray` | Tertiary text, button text for ghost buttons, subtle borders |
| Cloud White | #f2f2f2 | `--color-cloud-white` | Subtle surface background for alternating sections or distinct content blocks |
| Paper White | #ffffff | `--color-paper-white` | Page background, primary card surfaces, active button backgrounds, selected items |
| Pure Black | #000000 | `--color-pure-black` | Icon fills, some body text, accents in contrast to white surfaces |
| Silver Tone | #e6e6e6 | `--color-silver-tone` | Hairline borders, subtle dividers, ghost button borders |
| Deep Graphite | #262626 | `--color-deep-graphite` | Filled button backgrounds, dark interactive states |
| Vivid Violet | #6a0dad | `--color-vivid-violet` | Background for bold branding blocks and case study thumbnails |
| Lush Green | #a3ff00 | `--color-lush-green` | Accent for case study thumbnails, creating visual pop in grids |

## Tokens — Typography

### RiformaLLWeb

- **Token:** `--font-riformallweb`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 12px, 16px, 18px, 24px, 40px
- **Line heights:** 1.15, 1.20, 1.25
- **Letter spacing:** -0.01
- **OpenType features:** 'liga' 0
- **Role:** The primary typeface for all text content, from headings to body text. Its singular 400 weight across all sizes contributes to a consistent, restrained textual presence. The slight negative letter-spacing gives it a refined, tightly-set feel, even at display sizes.

### Arial

- **Token:** `--font-arial`
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.2
- **Role:** Arial — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.25 | -0.12px | `--text-caption` |
| body | 16px | 1.25 | -0.16px | `--text-body` |
| subheading | 18px | 1.25 | -0.18px | `--text-subheading` |
| heading | 24px | 1.2 | -0.24px | `--text-heading` |
| display | 40px | 1.15 | -0.4px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-256 | 256px | `--spacing-256` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| lists | 8px |
| images | 12px |
| buttons | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Ghost Button

**Role:** Secondary action button for low-priority interactions.

Background: Paper White (#ffffff), Text: Pure Black (#000000), Border: 1px solid Silver Tone (#e6e6e6), Radius: 8px, Padding: 1px top/bottom, 6px left/right. Font: RiformaLLWeb 400, size based on context.

### Filled Button (Dark)

**Role:** Primary action button for important interactions.

Background: Deep Graphite (#262626), Text: Ash Gray (#999999), Border: 1px solid Ash Gray (#999999), Radius: 8px, Padding: 12px top/bottom, 16px left/right. Font: RiformaLLWeb 400, size based on context.

### Feature Card

**Role:** Container for showcasing projects or service areas.

Background: transparent (#00000000), Border: none, Radius: 0px, Padding: 0px. Used in grid layouts with prominent imagery.

### Case Study Thumbnail

**Role:** Visual link to detailed case studies within grids.

Background: Vivid Violet (#6a0dad) or Lush Green (#a3ff00), Text: white (assumed based on screenshot), Radius: 12px, Padding varies by content. Imagery within these has a 12px radius.

### Service Section Header

**Role:** Numbered heading for main content sections.

Text: Ink (#1a1a1a), Font: RiformaLLWeb 400, 40px, Line Height 1.15. Prefixed with a numerical identifier (e.g., '➊') to provide clear section hierarchy.

## Do's and Don'ts

### Do

- Use RiformaLLWeb at weight 400 for all text, varying size for hierarchy and setting letter-spacing to -0.01em.
- Maintain a monochromatic palette with Paper White (#ffffff) as the dominant background and Ink (#1a1a1a) for primary text.
- Apply 12px border radius to all images and larger content cards, and 8px to buttons and small list items.
- Utilize Charcoal Mist (#666666) for secondary text and subtle background fills to introduce visual depth without strong contrast.
- Employ Deep Graphite (#262626) for filled buttons when a clear, direct action is needed.
- Structure page content using a consistent 64px vertical gap between main sections.
- Ensure interactive elements are clearly delineated through subtle borders with Silver Tone (#e6e6e6) or background shifts to Deep Graphite (#262626).

### Don't

- Avoid introducing additional saturated colors beyond Vivid Violet (#6a0dad) and Lush Green (#a3ff00) as they are reserved for specific brand elements and imagery.
- Do not use heavy shadows or gradients; rely on flat surfaces, clear typography, and subtle borders for hierarchy.
- Refrain from using varied font weights; RiformaLLWeb 400 is the only typeface weight permitted.
- Do not break the clear vertical rhythm of 64px section spacing with arbitrary gaps.
- Avoid overly bold or aggressive calls to action; buttons should be understated but functionally clear.
- Do not use fully justified text; left-align content for a clean reading experience.
- Avoid making content elements look like primary actions when they are not; reserve button styling for explicit interactive elements.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Paper White | #ffffff | Primary page background and default surface for most content. |
| 2 | Cloud White | #f2f2f2 | Subtle background for distinct content blocks or sections, providing a slight visual separation. |

## Similar Brands

- **Stripe** — Clean, predominantly monochromatic UI with careful typography and subtle elevation for components.
- **Linear** — Focus on high information density, clear typographic hierarchy, and a quiet background palette with functional accents.
- **Framer** — Minimalist design approach, strong grid layouts, effective use of whitespace, and controlled application of brand colors.
- **Google Material Design** — Emphasis on clear surface levels with minimal shadows and a focus on content through structured layouts and readable typography.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink: #1a1a1a;
  --color-charcoal-mist: #666666;
  --color-ash-gray: #999999;
  --color-cloud-white: #f2f2f2;
  --color-paper-white: #ffffff;
  --color-pure-black: #000000;
  --color-silver-tone: #e6e6e6;
  --color-deep-graphite: #262626;
  --color-vivid-violet: #6a0dad;
  --color-lush-green: #a3ff00;
  --font-riformallweb: 'RiformaLLWeb', system-ui;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.25;
  --tracking-caption: -0.12px;
  --text-body: 16px;
  --leading-body: 1.25;
  --tracking-body: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.18px;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --tracking-heading: -0.24px;
  --text-display: 40px;
  --leading-display: 1.15;
  --tracking-display: -0.4px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-64: 64px;
  --spacing-256: 256px;
  --radius-cards: 12px;
  --radius-lists: 8px;
  --radius-images: 12px;
  --radius-buttons: 8px;
  --surface-paper-white: #ffffff;
  --surface-cloud-white: #f2f2f2;
}
```

### Tailwind v4

```css
@theme {
  --color-ink: #1a1a1a;
  --color-charcoal-mist: #666666;
  --color-ash-gray: #999999;
  --color-cloud-white: #f2f2f2;
  --color-paper-white: #ffffff;
  --color-pure-black: #000000;
  --color-silver-tone: #e6e6e6;
  --color-deep-graphite: #262626;
  --color-vivid-violet: #6a0dad;
  --color-lush-green: #a3ff00;
  --font-riformallweb: 'RiformaLLWeb', system-ui;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.25;
  --tracking-caption: -0.12px;
  --text-body: 16px;
  --leading-body: 1.25;
  --tracking-body: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.18px;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --tracking-heading: -0.24px;
  --text-display: 40px;
  --leading-display: 1.15;
  --tracking-display: -0.4px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-64: 64px;
  --spacing-256: 256px;
  --radius-cards: 12px;
  --radius-lists: 8px;
  --radius-images: 12px;
  --radius-buttons: 8px;
  --surface-paper-white: #ffffff;
  --surface-cloud-white: #f2f2f2;
}
```
