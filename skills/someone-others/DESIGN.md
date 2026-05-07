---
version: alpha
name: "Someone & Others"
description: "Someone & Others employs a minimalist, high-contrast aesthetic with a subtle, frosted glass surface treatment. Typography is bold and dominant, paired with a restricted achromatic palette where only minimal, vibrant gradients provide visual energy. Interactive elements are softened through larger radii and a distinct blurred background, creating a sense of refined polish against the clean canvas."
theme: "light"
industry: "agency"
source_url: "https://someoneandothers.com"
refero_style_id: "9fecf7d6-b717-49ca-8edc-b10d6110b21c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521145855-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777521145855-thumb.jpg"
extracted_at: "2026-04-30T03:52:46.040Z"
---

# Someone & Others — Style Reference

> Frosted glass on crisp canvas

**Theme:** light

**Industry:** agency

Someone & Others employs a minimalist, high-contrast aesthetic with a subtle, frosted glass surface treatment. Typography is bold and dominant, paired with a restricted achromatic palette where only minimal, vibrant gradients provide visual energy. Interactive elements are softened through larger radii and a distinct blurred background, creating a sense of refined polish against the clean canvas.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink Black | #0a0a0a | `--color-ink-black` | Primary text, prominent borders, key outlines — creates high contrast against light surfaces |
| Pure White | #ffffff | `--color-pure-white` | Card backgrounds, elevated container surfaces |
| Muted Gray | #333333 | `--color-muted-gray` | Secondary text, subtle card borders |
| Cloud White | #f4f4f4 | `--color-cloud-white` | Navigation backgrounds, subtle button borders |
| Pebble Gray | #dddddd | `--color-pebble-gray` | Subtle badge borders, decorative dividers |
| Ash Gray | #ababab | `--color-ash-gray` | Muted text, inactive navigation items, button borders that fade into the background |
| Slate Gray | #555555 | `--color-slate-gray` | Badge text |
| Recognition Gold | #ffd700 | `--color-recognition-gold` | Yellow wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Use as a supporting accent, not as a status color |
| Conversation Glow | #FFB005 | `--color-conversation-glow` | Supporting palette color for small decorative accents when the core palette needs contrast. Do not promote it to the primary CTA color |

## Tokens — Typography

### SuisseIntl

- **Token:** `--font-suisseintl`
- **Substitute:** Inter
- **Weights:** 300, 400, 500
- **Sizes:** 11px, 12px, 14px, 15px, 16px, 18px, 40px, 86px
- **Line heights:** 1.00, 1.12, 1.50, 1.60, 1.70, 2.00
- **Letter spacing:** -0.0350em, -0.0300em, -0.0230em, -0.0100em, 0.0200em, 0.0250em, 0.0270em
- **Role:** All primary textual content: headlines, body, navigation, buttons, and badges. Its varied weights and negative letter-spacing for larger sizes create a distinctive, confident presence.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Fallback and secondary details, used minimally for accessibility and browser compatibility in some interactive elements.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.7 | 0.27px | `--text-caption` |
| heading-sm | 18px | 1.5 | -0.23px | `--text-heading-sm` |
| heading | 40px | 1.12 | -0.3px | `--text-heading` |
| display | 86px | 1 | -0.35px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| badges | 100px |
| buttons | 100px |
| accentCards | 12px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(255, 255, 255, 0.06) 0px 0px 8px 0px, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 40px |
| cardPadding | 40px |
| elementGap | 16px |

## Components

### Ghost Circular Button

**Role:** Navigation and subtle actions

Transparent background with a light border of #0a0a0a at 0.3 opacity and a 50% border radius creating a perfect circle. Text color is #ababab. Padding is 0px.

### Pill Button (Neutral)

**Role:** Secondary calls to action or category filters.

Background #000000 at 6% opacity, text color #0a0a0a, with a border-radius of 100px creating a pill shape. Padding is 14px vertical, 28px horizontal. Has a subtle inset shadow rgba(255, 255, 255, 0.15) 0px 1px 0px 0px.

### Pill Button (Gradient Glow)

**Role:** Primary call to action.

A soft, multi-hued gradient starting at #c679c4, transitioning through #fa3d1d, and ending at #ffb005. Text is #0a0a0a, with a 100px border radius and 14px vertical, 28px horizontal padding. The button itself seems to emit a glow from a blur(24px) filter on its container.

### Solid Information Card

**Role:** Structured content display, typically for work examples.

Background color #ffffff, with a 16px border-radius and generous 48px vertical, 40px horizontal padding. No visible border or shadow.

### Outline Tag Badge

**Role:** Categorization and metadata.

Transparent background with #dddddd border, and #555555 text. Pill-shaped with a 100px border-radius. Padding is 6px vertical and 16px horizontal.

### Award Badge

**Role:** Highlighting achievements or awards.

Background #ffd700, with #0a0a0a text and a 100px border-radius. Padding is 6px vertical and 16px horizontal.

### Featured Project Card

**Role:** Highlighting key projects with a subtle rounded aesthetic.

Transparent background with a 12px border-radius. No padding, border, or shadow visible on the card itself, relying on nested content for detail.

## Do's and Don'ts

### Do

- Always use SuisseIntl for all text, varying weights (300, 400, 500) to establish hierarchy.
- Apply negative letter-spacing defined in typography tokens for all headlines and larger text sizes to create a distinctive, impactful look.
- Prioritize a clean, achromatic palette (#0a0a0a, #ffffff, various grays) for primary UI elements, reserving color for functional accents.
- Use a generous 100px border-radius for all interactive elements like buttons and badges to create a soft, approachable feel.
- Introduce visual interest and hierarchy through large, bold typography and subtle background gradients on interactive elements.
- Maintain high contrast (minimum 15:1) between text and background for all content, primarily using #0a0a0a on light surfaces.
- Use backdrop-filter: blur(12px) saturate(1.8) brightness(1.08) on interactive containers to create a frosted glass effect behind actions.

### Don't

- Avoid using solid, saturated colors for large interface areas or primary backgrounds; keep them neutral and understated.
- Do not introduce hard, sharp corners; all functional UI elements should use 100px, 16px, or 12px border radii.
- Refrain from using strong, opaque drop shadows; prefer subtle inset shadows or blur effects for elevation.
- Do not clutter layouts; maintain generous section gaps (40px) and element gaps (16px) to ensure breathing room.
- Avoid generic icon styles; use custom, illustrative icons like the '&' character for unique brand identity.
- Do not rely on outline or ghost buttons for primary calls to action; always use the gradient glow button for high-impact actions.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas Background | #f0f0f0 | The base page background, providing a clean, subtle off-white canvas. |
| 2 | Card Surface | #ffffff | Elevated card backgrounds, offering a crisp white content area. |

## Elevation

- **Navigation / Gradient Button:** `rgba(255, 255, 255, 0.06) 0px 0px 8px 0px, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset`

## Imagery

The site uses a combination of abstract, dynamic illustrations and tightly cropped product photography. Illustrations are often geometric, whimsical, and serve as decorative elements or brand mascots (e.g., the '&' character). Product photography focuses on hands holding or showcasing items, often against a plain white or soft, solid color background, emphasizing the product itself over lifestyle context. Icons are minimal, outlined, and monochromatic when functional, with occasional illustrative brand elements. Imagery density is moderate, used to break up large blocks of text and add visual personality, rather than dominating the page.

## Layout

The page adheres to a centered max-width 1200px content area. The hero section is full-bleed, featuring a dominant, centered headline over a subtle light background with a pronounced blur effect. Content sections follow a consistent vertical rhythm with 40px gaps, primarily using a single-column stack for large text or alternating text-left/image-right two-column layouts. Navigation is a sticky top bar, minimal and unobtrusive, contrasting with the expansive main content. Density is comfortable, with ample white space around elements, contributing to a sense of clarity and focus.

## Similar Brands

- **Stripe** — Clean, spacious light theme with strong typography and minimal, functional use of color, predominantly grays and dark text on light backgrounds.
- **Figma** — Emphasis on well-defined spacing, high-contrast typography, and a primarily achromatic interface with color reserved for interactive elements and brand accents.
- **Linear** — Strict visual hierarchy through typography, a focus on efficiency with uncluttered layouts, and subtle surface differentiation.
- **Playbook** — Utilizes frosted glass effects and subtle gradients for interactive elements against clean, light backgrounds, with bold, geometric typefaces.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink-black: #0a0a0a;
  --color-pure-white: #ffffff;
  --color-muted-gray: #333333;
  --color-cloud-white: #f4f4f4;
  --color-pebble-gray: #dddddd;
  --color-ash-gray: #ababab;
  --color-slate-gray: #555555;
  --color-recognition-gold: #ffd700;
  --color-conversation-glow: #FFB005;
  --font-suisseintl: 'SuisseIntl', Inter;
  --font-arial: 'Arial', Arial;
  --text-caption: 11px;
  --leading-caption: 1.7;
  --tracking-caption: 0.27px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.5;
  --tracking-heading-sm: -0.23px;
  --text-heading: 40px;
  --leading-heading: 1.12;
  --tracking-heading: -0.3px;
  --text-display: 86px;
  --leading-display: 1;
  --tracking-display: -0.35px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-120: 120px;
  --spacing-200: 200px;
  --radius-cards: 16px;
  --radius-badges: 100px;
  --radius-buttons: 100px;
  --radius-accentcards: 12px;
  --shadow-xl: rgba(255, 255, 255, 0.06) 0px 0px 8px 0px, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset;
  --surface-canvas-background: #f0f0f0;
  --surface-card-surface: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-ink-black: #0a0a0a;
  --color-pure-white: #ffffff;
  --color-muted-gray: #333333;
  --color-cloud-white: #f4f4f4;
  --color-pebble-gray: #dddddd;
  --color-ash-gray: #ababab;
  --color-slate-gray: #555555;
  --color-recognition-gold: #ffd700;
  --color-conversation-glow: #FFB005;
  --font-suisseintl: 'SuisseIntl', Inter;
  --font-arial: 'Arial', Arial;
  --text-caption: 11px;
  --leading-caption: 1.7;
  --tracking-caption: 0.27px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.5;
  --tracking-heading-sm: -0.23px;
  --text-heading: 40px;
  --leading-heading: 1.12;
  --tracking-heading: -0.3px;
  --text-display: 86px;
  --leading-display: 1;
  --tracking-display: -0.35px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-120: 120px;
  --spacing-200: 200px;
  --radius-cards: 16px;
  --radius-badges: 100px;
  --radius-buttons: 100px;
  --radius-accentcards: 12px;
  --shadow-xl: rgba(255, 255, 255, 0.06) 0px 0px 8px 0px, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset;
  --surface-canvas-background: #f0f0f0;
  --surface-card-surface: #ffffff;
}
```
