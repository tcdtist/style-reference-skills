---
version: alpha
name: "Hume AI"
description: "This design system evokes a sense of gentle authority and advanced scientific inquiry, presenting complex AI research with an approachable, almost pastel-like palette. The primary typefaces, Fellix and PP Fraktion Mono, contrast a bespoke humanist sans-serif with a technical monospaced font, establishing a duality of user-friendliness and precision. Subtle, muted chromatic backgrounds create distinct section breaks and highlight content, preventing visual fatigue, while the prominent use of rounded forms offers visual softness in a technology-focused context."
theme: "light"
industry: "ai"
source_url: "https://hume.ai"
refero_style_id: "2e67105f-9f9a-45b5-9281-29734e753bd6"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932573314-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932573314-thumb.jpg"
extracted_at: "2026-04-11T18:36:41.146Z"
---

# Hume AI — Style Reference

> Warm pastel research lab. Soft, rounded elements meet crisp technical details within a muted, inviting color scheme.

**Theme:** light

**Industry:** ai

This design system evokes a sense of gentle authority and advanced scientific inquiry, presenting complex AI research with an approachable, almost pastel-like palette. The primary typefaces, Fellix and PP Fraktion Mono, contrast a bespoke humanist sans-serif with a technical monospaced font, establishing a duality of user-friendliness and precision. Subtle, muted chromatic backgrounds create distinct section breaks and highlight content, preventing visual fatigue, while the prominent use of rounded forms offers visual softness in a technology-focused context.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pale Ivory | #fff9f3 | `--color-pale-ivory` | Page backgrounds, subtle card surfaces – creates a warm, inviting foundation. |
| Graphite | #222222 | `--color-graphite` | Primary text, main button backgrounds, iconic elements – serves as the dominant dark anchor against the light background. |
| Bright White | #ffffff | `--color-bright-white` | Content container backgrounds, elements needing crisp contrast against Pale Ivory. |
| Light Mauve | #fce0ee | `--color-light-mauve` | Background for secondary content blocks. |
| Soft Lilac | #e6d1ed | `--color-soft-lilac` | Background for secondary content blocks. |
| Mint Cream | #cef1e1 | `--color-mint-cream` | Background for secondary content blocks. |
| Sky Mist | #ccdff1 | `--color-sky-mist` | Background for secondary content blocks. |
| Muted Apricot | #ffdfb8 | `--color-muted-apricot` | Background for secondary content blocks. |
| Dusty Peach | #fcd4bd | `--color-dusty-peach` | Background for secondary content blocks. |
| Deep Plum | #c094e4 | `--color-deep-plum` | Primary brand accent, used for prominent headings and interactive elements (links, active states, progress bars) – a vivid violet that adds a touch of digital sophistication without overpowering the softer neutrals. |
| Golden Glow | #ffb760 | `--color-golden-glow` | Secondary accent for icon backgrounds and subtle highlights – a warm, vivid orange. |
| Blush Pink | #f7bbe6 | `--color-blush-pink` | Tertiary accent for icon backgrounds and content categorization – a moderate pink. |
| Ocean Dream | #7fb8ef | `--color-ocean-dream` | Tertiary accent for icon backgrounds and content categorization – a moderate blue. |
| Jade Mist | #85e4c5 | `--color-jade-mist` | Tertiary accent for icon backgrounds and content categorization – a moderate teal. |
| Sunset Coral | #f89d6b | `--color-sunset-coral` | Tertiary accent for icon backgrounds and content categorization – a vivid orange. |
| Wavy Gradient | #c094e4 | `--color-wavy-gradient` | Decorative background for hero graphics or prominent visual elements, symbolizing organic data flow. |

## Tokens — Typography

### Fellix

- **Token:** `--font-fellix`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 520
- **Sizes:** 12px, 14px, 16px, 18px, 20px, 24px, 30px, 36px, 48px
- **Line heights:** 1.00, 1.11, 1.20, 1.25, 1.33, 1.43, 1.50, 1.56, 1.63
- **Letter spacing:** -0.6
- **Role:** Primary typeface for all headings, body text, and UI elements. Its slightly humanist touch makes technical content accessible. Letter spacing of -0.025em (approx -0.6px at 24px) contributes to a tighter, more deliberate aesthetic for headings.

### PP Fraktion Mono

- **Token:** `--font-pp-fraktion-mono`
- **Substitute:** monospace
- **Weights:** 400
- **Sizes:** 10px, 12px, 14px
- **Line heights:** 1.33, 1.43, 1.50
- **Letter spacing:** 0.3
- **OpenType features:** "calt" 0, "liga" 0
- **Role:** Secondary typeface for code snippets, data labels, and certain UI elements requiring a precise, technical feel. Its monospaced nature and slight positive letter-spacing (0.025em, approx 0.3px at 12px) clearly distinguishes factual, quantitative content.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | 0.3px | `--text-caption` |
| body | 14px | 1.56 | -0.35px | `--text-body` |
| subheading | 18px | 1.43 | -0.45px | `--text-subheading` |
| heading | 24px | 1.25 | -0.6px | `--text-heading` |
| heading-lg | 36px | 1.11 | -0.9px | `--text-heading-lg` |
| display | 48px | 1 | -1.2px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-143 | 143px | `--spacing-143` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-201 | 201px | `--spacing-201` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| input | 1.67772e+07px |
| buttons | 1.67772e+07px |
| default | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| elementGap | 12px |

## Components

### Stat Block — Research Metrics

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Tab Bar + Data Bar Chart

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Dataset Composition Card + Feature Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Navigation Link

**Role:** Navigation element

Transparent background, text Graphite (rgba(0, 0, 0, 0.8)) on hover for current, or rgba(34, 34, 34, 0.6) for inactive. No border. Padding 8px vertical, 12px horizontal. Uses Fellix typeface, 14px size, weight 400.

### Pill Button

**Role:** Segmented control or tag

Transparent background, text Graphite (rgba(34, 34, 34, 0.6)). Fully rounded corners (1.67772e+07px). Padding 8px vertical, 16px horizontal. Used for filters or options.

### Ghost Button (White Text)

**Role:** Secondary action on dark backgrounds

Transparent background, text Bright White (#ffffff). Fully rounded corners (1.67772e+07px). Padding 8px vertical, 16px horizontal. Used for actions within dark hero sections.

### Text Input

**Role:** User data entry

Background Bright White with 10% opacity (oklab(0.999994 0.0000455678 0.0000200868 / 0.1)), text Bright White (#ffffff), border Bright White (#ffffff). Fully rounded corners (1.67772e+07px). Padding 12px vertical, 20px left, 48px right. Uses Fellix typeface.

### Feature Card with Muted Background

**Role:** Showcasing features or data points

Backgrounds vary between Light Mauve, Soft Lilac, Mint Cream, Sky Mist, Muted Apricot, Dusty Peach. Corner radius 8px or 12px. Internal padding generally 24px.

### Data Bar Chart Segment (Vivid Violet)

**Role:** Visualizing quantitative data

Background Deep Plum (#c094e4). Used for bar charts, indicating performance or quantity. Rounded corners likely 8px or 12px.

## Do's and Don'ts

### Do

- Use Pale Ivory (#fff9f3) as the default page background to establish a warm, inviting tone.
- Apply Graphite (#222222) for all primary body text, headlines, and main interactive element backgrounds to ensure strong contrast and readability.
- Employ the fully rounded 1.67772e+07px radius for all buttons and text input fields to maintain a soft, approachable aesthetic.
- Reserve Deep Plum (#c094e4) for key interactive elements, headlines that need emphasis, and prominent data visualizations.
- Utilize Fellix for all general UI text and headings, adjusting letter-spacing to -0.6px where larger font sizes are used.
- Alternate section backgrounds between Pale Ivory (#fff9f3) and muted chromatic tints like Light Mauve (#fce0ee) or Soft Lilac (#e6d1ed) to create visual separation.
- Maintain a clear element gap of 12px and card padding of 24px within components for consistent internal spacing.

### Don't

- Avoid using harsh, saturated colors for backgrounds; stick to the muted pastel range provided for secondary content areas.
- Do not introduce sharp corners on interactive elements or cards; the aesthetic relies on a consistent soft radius (8px to 1.67772e+07px).
- Refrain from using bold or heavy font weights for headlines; the Fellix typeface in weights 400 and 520 provides sufficient hierarchy without being assertive.
- Do not deviate from the established letter-spacing values; the tight -0.025em for Fellix and expanded 0.025em for PP Fraktion Mono are integral to the typographic identity.
- Avoid excessive use of drop shadows; depth is primarily achieved through background color shifts and subtle elevation.
- Do not use PP Fraktion Mono for general body text; its monospaced nature is intended for data and technical contexts only.
- Never use generic blue for links; active links should employ Deep Plum (#c094e4) to align with brand accents.

## Imagery

Imagery is predominantly abstract, featuring organic wave-like gradients that symbolize intelligence and data flow, rendered with a soft, pastel color scheme (e.g., Wavy Gradient). When product-related, visuals lean towards data visualizations within soft, muted containers. Icons are minimalist, outline-based, and adopt the brand's accent colors, often contained within fully rounded shapes. The overall impression is one of sophisticated, abstract representation rather than literal photography or complex illustrations, keeping the focus on the data and technology.

## Layout

The page maintains a centered, max-width content container (likely around 1200-1400px, though not explicitly defined) against full-bleed backgrounds. The hero section often features a large, centered headline over a Pale Ivory background, sometimes accompanied by a prominent abstract visual. Sections alternate their background colors (Pale Ivory and various muted pastels) creating a distinct visual rhythm. Content arrangement is primarily centered text blocks, often followed by a 2-column or 3-column grid for features or data points, ensuring a balanced and spacious presentation. Navigation is a clear top bar with discrete 'Log In' and 'Get Started' buttons. Vertical spacing between main sections is generous, typically 64px or more, contributing to an airy feel.

## Similar Brands

- **Linear** — Shares a clean, minimalist aesthetic with a focus on clear typography and disciplined use of color accents on an otherwise neutral palette.
- **Anthropic** — Similar focus on AI/research, using a restrained, professional visual language that balances technical gravitas with user approachability.
- **Figma** — Exhibits a playful yet functional use of soft, muted colors for UI elements and branding on a generally clean, light background, alongside a humanist sans-serif.
- **Perplexity AI** — Employs an inviting, slightly softened approach to presenting complex AI concepts with a light theme and selective color usage.
- **Superhuman** — Leverages a bespoke humanist sans-serif for clarity and a minimal color palette with subtle accents for a premium, focused experience.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pale-ivory: #fff9f3;
  --color-graphite: #222222;
  --color-bright-white: #ffffff;
  --color-light-mauve: #fce0ee;
  --color-soft-lilac: #e6d1ed;
  --color-mint-cream: #cef1e1;
  --color-sky-mist: #ccdff1;
  --color-muted-apricot: #ffdfb8;
  --color-dusty-peach: #fcd4bd;
  --color-deep-plum: #c094e4;
  --color-golden-glow: #ffb760;
  --color-blush-pink: #f7bbe6;
  --color-ocean-dream: #7fb8ef;
  --color-jade-mist: #85e4c5;
  --color-sunset-coral: #f89d6b;
  --color-wavy-gradient: #c094e4;
  --font-fellix: 'Fellix', system-ui, sans-serif;
  --font-pp-fraktion-mono: 'PP Fraktion Mono', monospace;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.3px;
  --text-body: 14px;
  --leading-body: 1.56;
  --tracking-body: -0.35px;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --tracking-subheading: -0.45px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -0.6px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.11;
  --tracking-heading-lg: -0.9px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: -1.2px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-96: 96px;
  --spacing-112: 112px;
  --spacing-143: 143px;
  --spacing-144: 144px;
  --spacing-201: 201px;
  --radius-cards: 8px;
  --radius-input: 1.67772e+07px;
  --radius-buttons: 1.67772e+07px;
  --radius-default: 8px;
}
```

### Tailwind v4

```css
@theme {
  --color-pale-ivory: #fff9f3;
  --color-graphite: #222222;
  --color-bright-white: #ffffff;
  --color-light-mauve: #fce0ee;
  --color-soft-lilac: #e6d1ed;
  --color-mint-cream: #cef1e1;
  --color-sky-mist: #ccdff1;
  --color-muted-apricot: #ffdfb8;
  --color-dusty-peach: #fcd4bd;
  --color-deep-plum: #c094e4;
  --color-golden-glow: #ffb760;
  --color-blush-pink: #f7bbe6;
  --color-ocean-dream: #7fb8ef;
  --color-jade-mist: #85e4c5;
  --color-sunset-coral: #f89d6b;
  --color-wavy-gradient: #c094e4;
  --font-fellix: 'Fellix', system-ui, sans-serif;
  --font-pp-fraktion-mono: 'PP Fraktion Mono', monospace;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.3px;
  --text-body: 14px;
  --leading-body: 1.56;
  --tracking-body: -0.35px;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --tracking-subheading: -0.45px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -0.6px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.11;
  --tracking-heading-lg: -0.9px;
  --text-display: 48px;
  --leading-display: 1;
  --tracking-display: -1.2px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-96: 96px;
  --spacing-112: 112px;
  --spacing-143: 143px;
  --spacing-144: 144px;
  --spacing-201: 201px;
  --radius-cards: 8px;
  --radius-input: 1.67772e+07px;
  --radius-buttons: 1.67772e+07px;
  --radius-default: 8px;
}
```
