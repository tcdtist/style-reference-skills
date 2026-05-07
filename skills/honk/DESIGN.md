---
version: alpha
name: "Honk"
description: "Honk uses a vibrant, high-contrast visual system where bold primary colors make the interface pop. The design relies on a striking blue canvas accented by bright yellow highlights and white text, creating an energetic and direct communication style. Typography is bold and casual, contributing to an approachable, fun atmosphere. Most elements are flat with minimal shadows, emphasizing clarity and quick interaction."
theme: "light"
industry: "media"
source_url: "https://honk.me"
refero_style_id: "ca4708f7-7175-4da2-a47f-ce8f5e601f99"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514887821-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514887821-thumb.jpg"
extracted_at: "2026-04-30T02:08:24.943Z"
---

# Honk — Style Reference

> joyful, high-contrast messaging

**Theme:** light

**Industry:** media

Honk uses a vibrant, high-contrast visual system where bold primary colors make the interface pop. The design relies on a striking blue canvas accented by bright yellow highlights and white text, creating an energetic and direct communication style. Typography is bold and casual, contributing to an approachable, fun atmosphere. Most elements are flat with minimal shadows, emphasizing clarity and quick interaction.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Sky Canvas | #008fff | `--color-sky-canvas` | Dominant page background, creating a vibrant, immersive field for content |
| Sunshine Accent | #ffe400 | `--color-sunshine-accent` | Yellow outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Paper White | #ffffff | `--color-paper-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Charcoal Text | #111111 | `--color-charcoal-text` | Main body text, providing high contrast against lighter surfaces |
| Deep Space | #000000 | `--color-deep-space` | Used for specific icon fills and strong visual emphasis against white; never as a full background |

## Tokens — Typography

### Honk Header

- **Token:** `--font-honk-header`
- **Substitute:** Montserrat
- **Weights:** 700
- **Sizes:** 52px
- **Line heights:** 1.23
- **Letter spacing:** -0.62
- **Role:** Prominent display headings, imparting a bold and direct message.

### Honk Sans

- **Token:** `--font-honk-sans`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 13px, 14px, 16px, 17px, 19px
- **Line heights:** 0.70, 1.00, 1.20, 1.38, 1.47, 1.55
- **Letter spacing:** -0.21px at 16px, normal at 14px
- **Role:** All general UI text, from body copy to labels, links, and footer information. A versatile, clean sans-serif.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.38 | — | `--text-caption` |
| body-sm | 14px | 1.38 | — | `--text-body-sm` |
| body | 16px | 1.38 | — | `--text-body` |
| body-lg | 17px | 1.38 | — | `--text-body-lg` |
| heading-sm | 19px | 1.38 | — | `--text-heading-sm` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-48 | 48px | `--spacing-48` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 6px |
| other | 16px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48-64px |
| cardPadding | 24px |
| elementGap | 16px |

## Components

### Ghost Link Button

**Role:** Minimal interactive element for secondary actions, often paired with an icon.

Text: Paper White (#ffffff) Honk Sans, variable size/weight; Background: transparent (rgba(0,0,0,0)); Border: Paper White (rgb(255, 255, 255)) 0px; Padding: 0px. Used for 'Read Announcement' link.

## Do's and Don'ts

### Do

- Use Sky Canvas (#008fff) as the foundational background for most sections to maintain a high-energy, immersive feel.
- Apply Sunshine Accent (#ffe400) selectively for major headers and highlight elements to create emphasis against the blue background.
- Ensure all primary text on Sky Canvas uses Paper White (#ffffff) for maximum contrast and legibility.
- Utilize Honk Header font (weight 700) at 52px for all top-level page headings, with a letter-spacing of -0.62px to give a strong, bold identity.
- Implement Honk Sans for all body text, using 14px/400 weight for general paragraphs and 16px/500 weight with -0.42px letter-spacing for subheadings or more prominent paragraphs.
- Maintain minimal border radii where observed: 6px for individual links/buttons and 16px for larger 'other' container elements to introduce soft friendly edges.
- Use 16px as a comfortable base for element spacing where default grid gaps are not explicitly defined, providing adequate breathing room.

### Don't

- Avoid using multiple chromatic colors beyond Sky Canvas and Sunshine Accent; the system relies on this high-contrast two-tone approach.
- Do not introduce complex shadows or gradients; concentrate on flat, clean design with color providing definition.
- Refrain from using thin light typography for headlines; the system prioritizes bold and impactful messaging.
- Do not place body text directly on Sky Canvas backgrounds in a small size without adequate contrast; if using Charcoal Text (#111111), ensure it's on a Paper White (#ffffff) surface.
- Avoid excessive use of borders; elements should primarily be defined by color blocks or subtle shifts in surface.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Sky Canvas Background | #008fff | Primary page background layer, providing the brand's signature vibrant blue. |
| 1 | Paper White Elements | #ffffff | Used for content blocks, text bubbles, and interactive surfaces that sit atop the Sky Canvas to contain and present information clearly. |

## Imagery

The visual language is characterized by abstract graphic elements and product screenshots. The main image features a stylized smartphone with a brightly colored, in-app messaging interface (Tic-Tac-Toe game). This imagery is contained within clearly defined shapes and uses a vibrant green for the app screen, contrasting with the overall blue background. Conversational bubble shapes with playful icons (heart, flower, hand) are used as decorative elements, often in pastel or bright complementary colors (yellow, light blue). Photography is absent; the focus is on a digitally native, illustrative, and UI-centric aesthetic.

## Layout

The page primarily uses a full-bleed layout with no discernible maximum width, allowing the vibrant Sky Canvas to fill the entire viewport. The hero section features a large, off-centered headline and subheading on the left, balanced by a significant product visual (smartphone mockup) on the right. Content is arranged with ample negative space around key elements. Navigation appears to be minimal, indicated by a logo in the top left and a footer with a single link. The overall density feels comfortable due to the generous spacing.

## Similar Brands

- **Discord** — Similar use of expressive, high-contrast color pairings and playful, stylized iconography in a messaging context.
- **Snapchat** — Bright, primary color palette and a focus on real-time, ephemeral communication, often with visual playfulness.
- **KakaoTalk** — Employs an expressive, colorful interface with character-driven elements and a modern messaging aesthetic.
- **Slack** — Utilizes a highly branded, vibrant color palette to differentiate its UI and convey a friendly, productive atmosphere.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-sky-canvas: #008fff;
  --color-sunshine-accent: #ffe400;
  --color-paper-white: #ffffff;
  --color-charcoal-text: #111111;
  --color-deep-space: #000000;
  --font-honk-header: 'Honk Header', Montserrat;
  --font-honk-sans: 'Honk Sans', Inter;
  --text-caption: 13px;
  --leading-caption: 1.38;
  --text-body-sm: 14px;
  --leading-body-sm: 1.38;
  --text-body: 16px;
  --leading-body: 1.38;
  --text-body-lg: 17px;
  --leading-body-lg: 1.38;
  --text-heading-sm: 19px;
  --leading-heading-sm: 1.38;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-48: 48px;
  --radius-links: 6px;
  --radius-other: 16px;
  --surface-sky-canvas-background: #008fff;
  --surface-paper-white-elements: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-sky-canvas: #008fff;
  --color-sunshine-accent: #ffe400;
  --color-paper-white: #ffffff;
  --color-charcoal-text: #111111;
  --color-deep-space: #000000;
  --font-honk-header: 'Honk Header', Montserrat;
  --font-honk-sans: 'Honk Sans', Inter;
  --text-caption: 13px;
  --leading-caption: 1.38;
  --text-body-sm: 14px;
  --leading-body-sm: 1.38;
  --text-body: 16px;
  --leading-body: 1.38;
  --text-body-lg: 17px;
  --leading-body-lg: 1.38;
  --text-heading-sm: 19px;
  --leading-heading-sm: 1.38;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-48: 48px;
  --radius-links: 6px;
  --radius-other: 16px;
  --surface-sky-canvas-background: #008fff;
  --surface-paper-white-elements: #ffffff;
}
```
