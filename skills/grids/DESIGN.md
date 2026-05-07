---
version: alpha
name: "Grids"
description: "Grids' visual style evokes the precision of an architectural drawing coming to life, with dynamic motion shaping static typography. The aesthetic is stark, relying on a monochrome palette and sharp geometric forms. Giant, highly tracked letterforms transform into interactive elements, giving the impression of blueprints being manipulated in real-time. Subtle shadows provide the only depth in an otherwise flat, canvas-like environment."
theme: "light"
industry: "design"
source_url: "https://grids.obys.agency"
refero_style_id: "386ffc4a-f4a7-48c8-985b-df86b8612080"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777411426177-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777411426177-thumb.jpg"
extracted_at: "2026-04-28T21:24:07.240Z"
---

# Grids — Style Reference

> Blueprint in Motion – a stark, interactive canvas where giant letterforms are the only dynamic elements.

**Theme:** light

**Industry:** design

Grids' visual style evokes the precision of an architectural drawing coming to life, with dynamic motion shaping static typography. The aesthetic is stark, relying on a monochrome palette and sharp geometric forms. Giant, highly tracked letterforms transform into interactive elements, giving the impression of blueprints being manipulated in real-time. Subtle shadows provide the only depth in an otherwise flat, canvas-like environment.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Primary page background, elevated card surfaces |
| Graphite Black | #010101 | `--color-graphite-black` | Primary text color, bold headlines, core interactive elements like the central diamond |
| Concrete Gray | #f1f1f1 | `--color-concrete-gray` | Secondary background, subtle dividers, supporting text |
| Charcoal Text | #282828 | `--color-charcoal-text` | General body text, default text contrast on light backgrounds |
| Smoke Border | #c2c2c2 | `--color-smoke-border` | Subtle card outlines, placeholder text |

## Tokens — Typography

### custom_40538

- **Token:** `--font-custom-40538`
- **Weights:** 400
- **Sizes:** 10px, 14px, 31px, 86px, 264px
- **Line heights:** 1.10, 1.14, 1.21, 1.30, 1.62, 1.64, 1.70
- **Letter spacing:** -0.0420em, -0.0380em, -0.0100em, -0.0070em, -0.0060em, -0.0020em
- **OpenType features:** "dlig" 0, "hlig" 0, "liga" 0, "rlig" 0, "smcp" 0
- **Role:** Primary display font for all headings and large interactive text elements. Its geometric structure and varying letter-spacing contribute to the architectural, dynamic feel of the site. Critical for large, animating text.

### -apple-system

- **Token:** `--font-apple-system`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **OpenType features:** "dlig" 0, "hlig" 0, "liga" 0, "rlig" 0, "smcp" 0
- **Role:** Fallback and utilitarian text for smaller labels and descriptive copy, ensuring readability despite the highly stylized main display font.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.7 | -0.42px | `--text-caption` |
| body-sm | 14px | 1.64 | -0.42px | `--text-body-sm` |
| body | 16px | 1 | 0px | `--text-body` |
| subheading | 31px | 1.21 | -0.31px | `--text-subheading` |
| heading | 86px | 1.14 | -3.27px | `--text-heading` |
| display | 264px | 1.1 | -10.56px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-89 | 89px | `--spacing-89` |
| spacing-168 | 168px | `--spacing-168` |
| spacing-176 | 176px | `--spacing-176` |
| spacing-177 | 177px | `--spacing-177` |
| spacing-257 | 257px | `--spacing-257` |
| spacing-259 | 259px | `--spacing-259` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.24) 0px 1px 2px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 0px |
| elementGap | 7px |

## Components

### Standard Card

**Role:** Container for content, appearing as an overlay or distinct element.

Background is Canvas White (#ffffff). Features a subtle shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px 0px. Border radius is 0px. Padding is not applied directly to the card itself (0px) but content layers within.

### Loading Indicator

**Role:** Visual cue for content loading states.

Text 'Loading...' uses custom_40538 font at 10px, Graphite Black (#010101).

### Primary Display Text

**Role:** Large, interactive headings and key messages.

Composed of individual letters or words using custom_40538 at sizes ranging from 31px up to 264px, with Graphite Black (#010101) or Charcoal Text (#282828). Features dynamic letter-spacing (e.g., -0.0420em) and animation capabilities.

### Utility Text

**Role:** Informational text like copyrights or small labels.

Uses -apple-system (system-ui) font at 16px, Charcoal Text (#282828).

## Do's and Don'ts

### Do

- Use Canvas White (#ffffff) for all primary page and card backgrounds to maintain a stark, clean canvas aesthetic.
- Apply Graphite Black (#010101) for all main headlines and significant text elements, emphasizing strong contrast.
- Utilize custom_40538 for all headings and large textual components, embracing its geometric forms and dynamic letter-spacing for visual impact.
- Employ a 0px border radius for all cards and containers to enforce a sharp, angular aesthetic.
- Introduce depth only through subtle box-shadows like rgba(0, 0, 0, 0.24) 0px 1px 2px 0px for cards, avoiding heavy or colored shadows.
- Prioritize text as the main visual and interactive element, especially large, animated letterforms.
- Maintain generous spacing, with section gaps of 40px and dynamic element spacing derived from the base unit of 4px.

### Don't

- Do not use highly saturated or chromatic colors for any UI elements; maintain a strict monochrome palette.
- Avoid rounded corners on any primary UI components; the design language relies on sharp angles and geometric precision.
- Do not introduce complex gradients or background images; surfaces should be solid colors.
- Do not use heavy or numerous drop shadows, as subtle elevation is preferred.
- Avoid decorative icons or illustrations that are not integral to content; focus on typographic and geometric forms.
- Do not deviate from the distinct letter-spacing values provided for custom_40538, as they are crucial to its visual identity.
- Do not introduce highly varied font weights; stick to the specified 400 weight for custom_40538 and -apple-system.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Base page background |
| 1 | Concrete Gray | #f1f1f1 | Secondary background layer, subtle content separation |

## Elevation

- **Card:** `rgba(0, 0, 0, 0.24) 0px 1px 2px 0px`

## Imagery

The design predominantly uses typography as its core visual element, with a strong focus on large, animated letterforms. There are no traditional photographs, illustrations, or product screenshots. Icons are minimal, represented by simple geometric shapes (like the central rotating black diamond) or basic system icons. The visual language is purely abstract and interactive, using text and simple forms to convey meaning and create a dynamic experience. Imagery is effectively replaced by animated, oversized text that functions as both content and decorative element.

## Layout

The page operates on a full-bleed model, without a fixed max-width, allowing elements to extend to the viewport edges. The hero section is dominated by large, interactive text elements and geometric shapes (e.g., the rotating diamond) appearing floating on the Canvas White background. Sections have a spacious rhythm, with alternating white and light gray backgrounds indicated by the 'Concrete Gray' and 'Canvas White' surfaces, creating visual breaks. Content is arranged with a strong emphasis on horizontal and vertical lines, reminiscent of a technical drawing grid, and features large, often animated, typography. The navigation appears to be a minimal top bar, possibly a single line indicating progress or sections, reinforcing the technical blueprint aesthetic. The overall density is spacious, giving elements ample room to breathe and animate.

## Similar Brands

- **Awwwards** — Similar focus on experimental typography and interactive, minimalist web experiences.
- **Future Fonts** — Emphasizes typography as a primary visual and interactive element, showcasing letterforms dynamically.
- **Locomotive** — Known for highly interactive, motion-driven websites with stark aesthetics and engaging scroll-based narratives.
- **Bruno Simon's Portfolio** — Playful, interactive, and experimental use of 3D geometry and motion on a minimalist canvas.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-graphite-black: #010101;
  --color-concrete-gray: #f1f1f1;
  --color-charcoal-text: #282828;
  --color-smoke-border: #c2c2c2;
  --font-custom-40538: 'custom_40538', ui-sans-serif, system-ui, sans-serif;
  --font-apple-system: '-apple-system', system-ui;
  --text-caption: 10px;
  --leading-caption: 1.7;
  --tracking-caption: -0.42px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.64;
  --tracking-body-sm: -0.42px;
  --text-body: 16px;
  --leading-body: 1;
  --tracking-body: 0px;
  --text-subheading: 31px;
  --leading-subheading: 1.21;
  --tracking-subheading: -0.31px;
  --text-heading: 86px;
  --leading-heading: 1.14;
  --tracking-heading: -3.27px;
  --text-display: 264px;
  --leading-display: 1.1;
  --tracking-display: -10.56px;
  --spacing-0: 0px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-29: 29px;
  --spacing-40: 40px;
  --spacing-46: 46px;
  --spacing-70: 70px;
  --spacing-89: 89px;
  --spacing-168: 168px;
  --spacing-176: 176px;
  --spacing-177: 177px;
  --spacing-257: 257px;
  --spacing-259: 259px;
  --radius-cards: 0px;
  --shadow-xl: rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
  --surface-canvas-white: #ffffff;
  --surface-concrete-gray: #f1f1f1;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-graphite-black: #010101;
  --color-concrete-gray: #f1f1f1;
  --color-charcoal-text: #282828;
  --color-smoke-border: #c2c2c2;
  --font-custom-40538: 'custom_40538', ui-sans-serif, system-ui, sans-serif;
  --font-apple-system: '-apple-system', system-ui;
  --text-caption: 10px;
  --leading-caption: 1.7;
  --tracking-caption: -0.42px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.64;
  --tracking-body-sm: -0.42px;
  --text-body: 16px;
  --leading-body: 1;
  --tracking-body: 0px;
  --text-subheading: 31px;
  --leading-subheading: 1.21;
  --tracking-subheading: -0.31px;
  --text-heading: 86px;
  --leading-heading: 1.14;
  --tracking-heading: -3.27px;
  --text-display: 264px;
  --leading-display: 1.1;
  --tracking-display: -10.56px;
  --spacing-0: 0px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-29: 29px;
  --spacing-40: 40px;
  --spacing-46: 46px;
  --spacing-70: 70px;
  --spacing-89: 89px;
  --spacing-168: 168px;
  --spacing-176: 176px;
  --spacing-177: 177px;
  --spacing-257: 257px;
  --spacing-259: 259px;
  --radius-cards: 0px;
  --shadow-xl: rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
  --surface-canvas-white: #ffffff;
  --surface-concrete-gray: #f1f1f1;
}
```
