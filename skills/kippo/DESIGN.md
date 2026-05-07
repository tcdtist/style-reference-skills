---
version: alpha
name: "Kippo"
description: "Kippo builds a dark-mode, gaming-centric interface with a compelling use of a single vibrant fuchsia accent color against a deep charcoal background. Typography leans modern and compact, utilizing a monospace font that evokes code or terminal screens. Interactive elements are softened with generous corner radii, creating a friendly contrast to the sharp, dark theme. The overall aesthetic is engaging and dynamic, designed to keep users immersed."
theme: "dark"
industry: "other"
source_url: "https://kippo.com"
refero_style_id: "917048a3-53b3-44e6-ab33-faefc4dcc9df"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513222160-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777513222160-thumb.jpg"
extracted_at: "2026-04-30T01:40:54.374Z"
---

# Kippo — Style Reference

> Fuchsia glow in the dark.

**Theme:** dark

**Industry:** other

Kippo builds a dark-mode, gaming-centric interface with a compelling use of a single vibrant fuchsia accent color against a deep charcoal background. Typography leans modern and compact, utilizing a monospace font that evokes code or terminal screens. Interactive elements are softened with generous corner radii, creating a friendly contrast to the sharp, dark theme. The overall aesthetic is engaging and dynamic, designed to keep users immersed.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pitch Black | #000000 | `--color-pitch-black` | Page backgrounds, section dividers, default text for contrast |
| Charcoal Surface | #29292a | `--color-charcoal-surface` | Card backgrounds, elevated container surfaces |
| Snow Ghost | #ffffff | `--color-snow-ghost` | Primary text, navigation links, button text, subtle borders |
| Smoke Text | #333333 | `--color-smoke-text` | Muted text, secondary links |
| Kippo Fuchsia | #ee1f66 | `--color-kippo-fuchsia` | Red action color for filled buttons, selected navigation states, and focused conversion moments. |
| Sunshine Aura | #ffc400 | `--color-sunshine-aura` | Decorative gradient accent for highlights or special content |
| Fresh Mint Gradient | #33beff | `--color-fresh-mint-gradient` | Decorative gradient accent, possibly for rewards or positive feedback |
| Silver Gloss Gradient | #cfcfcf | `--color-silver-gloss-gradient` | Subtle decorative gradient for background textures or UI embellishments |

## Tokens — Typography

### Source Code Pro

- **Token:** `--font-source-code-pro`
- **Substitute:** monospace
- **Weights:** 400, 600, 700
- **Sizes:** 10px, 12px, 16px, 42px
- **Line heights:** 1.19, 1.67, 1.88, 2.00
- **Letter spacing:** 0.10em at 10px, 0.083em at 12px, 0.417em at 16px
- **OpenType features:** "zero"
- **Role:** Body text, captions, and secondary information, maintaining a legible, compact density.

### Source Code Pro

- **Token:** `--font-source-code-pro`
- **Substitute:** monospace
- **Weights:** 400, 600, 700
- **Sizes:** 10px, 12px, 16px, 42px
- **Line heights:** 1.19, 1.67, 1.88, 2.00
- **Letter spacing:** 0.313em at 16px
- **OpenType features:** "zero"
- **Role:** Subheadings and emphasized text, providing a slightly bolder voice while retaining the monospace aesthetic.

### Source Code Pro

- **Token:** `--font-source-code-pro`
- **Substitute:** monospace
- **Weights:** 400, 600, 700
- **Sizes:** 10px, 12px, 16px, 42px
- **Line heights:** 1.19, 1.67, 1.88, 2.00
- **Letter spacing:** 0.333em at 42px
- **OpenType features:** "zero"
- **Role:** Primary headlines and impactful statements, using increased weight and generous letter spacing to command attention within the dark theme.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.67 | 1px | `--text-caption` |
| body | 16px | 1.67 | 6.67px | `--text-body` |
| heading | 42px | 1.88 | 14px | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-150 | 150px | `--spacing-150` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 10px |
| icons | 50px |
| other | 15px |
| images | 15px |
| buttons | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1170px |
| sectionGap | 50px |
| cardPadding | 15px |
| elementGap | 15px |

## Components

### Primary Action Button

**Role:** Interactive element

Solid Kippo Fuchsia background (#ee1f66) with Snow Ghost text (#ffffff), 10px border-radius, and 10px vertical, 15px horizontal padding. This is the primary call to action, demanding attention with its vibrant color.

### Standard Card

**Role:** Content container

Charcoal Surface (#29292a) background with 10px border-radius and 15px padding on all sides. Used for grouping related content in a distinct, elevated block.

### Promo Callout Card

**Role:** Featured content container

Charcoal Surface (#29292a) background with a larger 15px border-radius and generous 35px vertical, 30px horizontal padding. Used for prominent content sections requiring more visual breathing room.

### Ghost Navigation Link

**Role:** Navigation element

Transparent background with Snow Ghost text (#ffffff) and subtle 1px Snow Ghost border visible on hover or focus within a navigation menu. No border-radius or padding.

## Do's and Don'ts

### Do

- Prioritize Kippo Fuchsia (#ee1f66) exclusively for primary calls to action or key interactive states, ensuring it stands out against the dark canvas.
- Container elements like cards should use Charcoal Surface (#29292a) with radius 10px, providing subtle depth against the Pitch Black (#000000) background.
- Use Source Code Pro at weight 700 and size 42px for main headlines, applying its distinctive 0.333em letter spacing to establish brand identity.
- Employ consistent padding of 15px around content within cards and as element gaps between distinct UI elements.
- Ensure all interactive elements and content containers adhere to either 10px or 15px border-radius for a consistent soft-edged aesthetic.
- For all text content, default to Source Code Pro with Snow Ghost (#ffffff) for readability on dark backgrounds.

### Don't

- Do not introduce new saturated colors; maintain the brand focus on Kippo Fuchsia (#ee1f66) as the primary accent.
- Avoid using drop shadows for elevation; rely on background color changes from Pitch Black (#000000) to Charcoal Surface (#29292a) and border radii for depth.
- Do not use generic sans-serif fonts; the monospace Source Code Pro is integral to the brand's 'gamer tech' aesthetic.
- Never overcrowd sections; maintain a generous sectionGap of 50px between major content blocks to preserve visual breathing room.
- Avoid sharp corners on interactive components; 10px or 15px border radii are critical for the brand's softer, approachable feel.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Background | #000000 | The foundational layer for the entire dark theme, providing a deep, immersive canvas. |
| 1 | Card Surface | #29292a | Elevated containers for prominent content sections, offering slight visual separation from the main background. |

## Imagery

This site uses product screenshots and abstract vector illustrations. Product screenshots are typically displayed within a mobile device mock-up, showcasing UI functionality. Abstract vector illustrations are used decoratively, sometimes with subtle gradients like Sunshine Aura or Fresh Mint Gradient. Photography is minimal, appearing primarily as small profile images of users, often desaturated or blended into the dark theme. Icons are outlined, mono-color (either Snow Ghost or Kippo Fuchsia), and have a substantial stroke weight, sometimes with a 50px border-radius creating a circular appearance. Imagery serves both as explanatory content (product UI) and decorative atmosphere (abstract graphics), maintaining a balanced density relative to the text.

## Layout

The page model is a max-width contained layout at 1170px, centered on the screen, creating a focused content area while allowing the Pitch Black background to extend full-bleed. The hero pattern features a split layout: a bold, centered headline on the left alongside a product UI screenshot within a dark mobile mock-up on the right. Sections primarily follow an alternating content arrangement, featuring textual information on one side and supporting visuals or client logos on the other. A rhythm of consistent vertical spacing is created by a section gap of 50px between major blocks, sometimes with a sub-section elementGap of 15px. Navigation is a sticky top bar with minimal links.

## Similar Brands

- **Discord** — Dark UI with vibrant accent colors, monospace-influenced typography, and a community-focused product.
- **Twitch** — Heavy reliance on a dark theme and prominent accent colors for interactive elements, catering to a gaming audience.
- **Razer** — Gaming-focused brand with dark aesthetics and strong, singular accent colors that define interactive elements.
- **Linear** — Minimalist dark mode UI with compact, code-like typography and a focus on clean content presentation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pitch-black: #000000;
  --color-charcoal-surface: #29292a;
  --color-snow-ghost: #ffffff;
  --color-smoke-text: #333333;
  --color-kippo-fuchsia: #ee1f66;
  --color-sunshine-aura: #ffc400;
  --color-fresh-mint-gradient: #33beff;
  --color-silver-gloss-gradient: #cfcfcf;
  --font-source-code-pro: 'Source Code Pro', monospace;
  --font-source-code-pro: 'Source Code Pro', monospace;
  --font-source-code-pro: 'Source Code Pro', monospace;
  --text-caption: 10px;
  --leading-caption: 1.67;
  --tracking-caption: 1px;
  --text-body: 16px;
  --leading-body: 1.67;
  --tracking-body: 6.67px;
  --text-heading: 42px;
  --leading-heading: 1.88;
  --tracking-heading: 14px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-50: 50px;
  --spacing-100: 100px;
  --spacing-128: 128px;
  --spacing-150: 150px;
  --radius-cards: 10px;
  --radius-icons: 50px;
  --radius-other: 15px;
  --radius-images: 15px;
  --radius-buttons: 10px;
  --surface-page-background: #000000;
  --surface-card-surface: #29292a;
}
```

### Tailwind v4

```css
@theme {
  --color-pitch-black: #000000;
  --color-charcoal-surface: #29292a;
  --color-snow-ghost: #ffffff;
  --color-smoke-text: #333333;
  --color-kippo-fuchsia: #ee1f66;
  --color-sunshine-aura: #ffc400;
  --color-fresh-mint-gradient: #33beff;
  --color-silver-gloss-gradient: #cfcfcf;
  --font-source-code-pro: 'Source Code Pro', monospace;
  --font-source-code-pro: 'Source Code Pro', monospace;
  --font-source-code-pro: 'Source Code Pro', monospace;
  --text-caption: 10px;
  --leading-caption: 1.67;
  --tracking-caption: 1px;
  --text-body: 16px;
  --leading-body: 1.67;
  --tracking-body: 6.67px;
  --text-heading: 42px;
  --leading-heading: 1.88;
  --tracking-heading: 14px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-50: 50px;
  --spacing-100: 100px;
  --spacing-128: 128px;
  --spacing-150: 150px;
  --radius-cards: 10px;
  --radius-icons: 50px;
  --radius-other: 15px;
  --radius-images: 15px;
  --radius-buttons: 10px;
  --surface-page-background: #000000;
  --surface-card-surface: #29292a;
}
```
