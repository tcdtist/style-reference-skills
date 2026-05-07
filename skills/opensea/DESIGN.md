---
version: alpha
name: "OpenSea"
description: "OpenSea leverages a vibrant dark mode experience contrasting deep, cool grays with a brilliant, singular blue accent. The interface is characterized by highly structured layouts, subtle internal card borders, and ghost buttons, prioritizing content over heavy UI chrome. Typography is compact and precise, maintaining readability on dark surfaces, with a focus on displaying data and digital assets clearly. The overall aesthetic is one of a digital marketplace, emphasizing data density and functional clarity."
theme: "dark"
industry: "crypto"
source_url: "https://opensea.io"
refero_style_id: "61f1902f-6da3-4af7-b046-3b08bc1377f6"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510817078-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510817078-thumb.jpg"
extracted_at: "2026-04-30T01:00:58.161Z"
---

# OpenSea — Style Reference

> Midnight data console

**Theme:** dark

**Industry:** crypto

OpenSea leverages a vibrant dark mode experience contrasting deep, cool grays with a brilliant, singular blue accent. The interface is characterized by highly structured layouts, subtle internal card borders, and ghost buttons, prioritizing content over heavy UI chrome. Typography is compact and precise, maintaining readability on dark surfaces, with a focus on displaying data and digital assets clearly. The overall aesthetic is one of a digital marketplace, emphasizing data density and functional clarity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #080809 | `--color-midnight-ink` | Page backgrounds, underlying canvas |
| Deep Graphite | #141415 | `--color-deep-graphite` | Main canvas surface, navigation backgrounds, elevated panels |
| Slate Card | #1b1d1f | `--color-slate-card` | Card backgrounds, section separators, creating distinct content blocks |
| Steel Border | #26272d | `--color-steel-border` | Subtle borders, dividers, ghost button outlines, providing structure without harsh lines |
| Soft Stone | #34353c | `--color-soft-stone` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Ghost Fill | #3c3d40 | `--color-ghost-fill` | Mid-tone panel surface for subdued dark UI layers and secondary containers. Do not promote it to the primary CTA color |
| White Canvas | #ffffff | `--color-white-canvas` | Primary text, headings, icons, strong surface accents, ensuring readability against dark backgrounds |
| Silver Whisper | #acadae | `--color-silver-whisper` | Secondary text, muted links, subtle element borders, providing complementary descriptive information |
| Electric Blue | #83c3ff | `--color-electric-blue` | Emphasis elements, borders for active states, interactive links, providing clear focal points |
| Success Green | #47bb64 | `--color-success-green` | Green outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Error Red | #e24756 | `--color-error-red` | Red outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |

## Tokens — Typography

### gtAmerica

- **Token:** `--font-gtamerica`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px, 20px, 32px
- **Line heights:** 1.25, 1.50
- **Letter spacing:** normal
- **Role:** Primary brand typeface for all headings, body text, and UI elements. Its confident, sans-serif structure maintains clarity even at smaller sizes in a data-dense environment.

### gtAmericaMono

- **Token:** `--font-gtamericamono`
- **Substitute:** JetBrains Mono
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px
- **Line heights:** 1.00, 1.25, 1.50
- **Letter spacing:** normal
- **Role:** Monospaced typeface used for displaying technical data, prices, and code-like information, providing a precise, aligned read.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| heading-sm | 20px | 1.25 | — | `--text-heading-sm` |
| display | 32px | 1.25 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8px |
| buttons | 4px |
| default | 4px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(255, 255, 255, 0.08) 0px 0px 0px 1px inset | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.03) 0px 1px 2px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1325px |
| sectionGap | 48px |
| cardPadding | 12px |
| elementGap | 8px |

## Components

### Ghost Button

**Role:** Interactive elements for secondary actions or navigation.

Text: Silver Whisper (#acadae), Background: transparent, Border: Steel Border (#34353c), Radius: 6px, Padding: 8px. Creates a lightweight, subtle interactive element.

### Filled Neutral Button

**Role:** Tertiary actions or category filters.

Text: Silver Whisper (#acadae), Background: rgba(255, 255, 255, 0.02), Border: rgba(255, 255, 255, 0.08), Radius: 6px, Padding: 0px 10px. Provides a subtle dark fill for less prominent actions.

### White Text Button (Ghost)

**Role:** Prominent ghost actions or tab activators.

Text: White Canvas (#ffffff), Background: transparent, Border: White Canvas (#ffffff), Radius: 6px, Padding: 0px 12px. Offers a high-contrast ghost button for critical but non-primary actions.

### Inset Border Card

**Role:** Collection or asset display cards.

Background: Slate Card (#1b1d1f), Border: rgba(255, 255, 255, 0.08) 1px inset, Radius: 8px. Provides a subtle internal border, giving a clean, contained look without strong external shadows.

### Shadowed Card

**Role:** Elevated information or interactive cards.

Background: rgba(255, 255, 255, 0.02), Radius: 8px, Shadow: rgba(0, 0, 0, 0.03) 0px 1px 2px 0px. Used for subtle elevation with a very soft shadow for content blocks.

### Navigation Tab

**Role:** Top-level navigation items or filters.

Text: White Canvas (#ffffff) or Silver Whisper (#acadae). Active state border: Electric Blue (#83c3ff) under the active element. Padding: 0px 12px 0px 12px (vertical padding implicitly adjusts with text size).

## Do's and Don'ts

### Do

- Prioritize Midnight Ink (#080809) as the base background, shifting to Deep Graphite (#141415) for main interactive surfaces and Slate Card (#1b1d1f) for isolated content blocks.
- Use White Canvas (#ffffff) strictly for primary text, headings, and high-contrast UI elements to maximize readability on dark backgrounds.
- Apply Electric Blue (#83c3ff) as the sole accent color for interactive link text, active states, and focus indicators to create clear points of interaction.
- Employ the gtAmericaMono font family only for numerical data, cryptocurrency values, and technical readouts to maintain a consistent data display aesthetic.
- Structure layouts using a max-width of 1325px, with consistent 48px vertical section gaps to ensure a balanced, spacious content presentation.
- Utilize a default border radius of 4px for most interactive elements like buttons, and 8px for cards, to maintain a consistent soft edge treatment throughout the UI.
- Use `rgba(255, 255, 255, 0.08) 0px 0px 0px 1px inset` as the internal card border for primary content cards, avoiding external box shadows for these elements.

### Don't

- Do not introduce additional chromatic colors beyond Electric Blue, Success Green, and Error Red; maintain a largely monochromatic palette otherwise.
- Avoid heavy drop shadows or strong elevation effects for cards; instead, use subtle internal borders or minimal 1px 2px soft shadows if elevation is strictly necessary.
- Do not use generic system fonts; always specify gtAmerica or gtAmericaMono to preserve brand typography.
- Do not vary letter-spacing for standard text; keep it 'normal' unless specifically defined otherwise for display typography roles.
- Avoid large, impactful imagery beyond content display; images should be contained within card structures or relevant content areas rather than full bleeding or overpowering hero sections.
- Do not use `padding: 0` for any card variant without also defining minimum internal spacing for text and content, typically 12px or 16px.
- Avoid using White Canvas (#ffffff) for borders or backgrounds for ghost buttons, unless it is for an 'active' state, deferring to Steel Border (#26272d) for inactive/default elements.

## Elevation

- **Shadow 1:** `rgba(255, 255, 255, 0.08) 0px 0px 0px 1px inset`
- **Shadow 2:** `rgba(0, 0, 0, 0.03) 0px 1px 2px 0px`

## Similar Brands

- **Rarible** — Similar dark-mode interface, focused on NFT display, with prominent card-based layouts and data-rich elements.
- **Uniswap** — Employs a deep dark theme with a singular bright accent color for interactive elements and data visualization, particularly in a complex financial interface.
- **Coinbase** — Shares a clean, data-dense approach to displaying financial information on a dark background, using subtle grays for hierarchy and a bright accent for interaction.
- **Etherscan** — Common dark theme, monospace fonts for technical data, and a focus on displaying dense blockchain information in a structured, legible way.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #080809;
  --color-deep-graphite: #141415;
  --color-slate-card: #1b1d1f;
  --color-steel-border: #26272d;
  --color-soft-stone: #34353c;
  --color-ghost-fill: #3c3d40;
  --color-white-canvas: #ffffff;
  --color-silver-whisper: #acadae;
  --color-electric-blue: #83c3ff;
  --color-success-green: #47bb64;
  --color-error-red: #e24756;
  --font-gtamerica: 'gtAmerica', Inter;
  --font-gtamericamono: 'gtAmericaMono', JetBrains Mono;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.25;
  --text-display: 32px;
  --leading-display: 1.25;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --radius-cards: 8px;
  --radius-buttons: 4px;
  --radius-default: 4px;
  --shadow-xl: rgba(255, 255, 255, 0.08) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgba(0, 0, 0, 0.03) 0px 1px 2px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #080809;
  --color-deep-graphite: #141415;
  --color-slate-card: #1b1d1f;
  --color-steel-border: #26272d;
  --color-soft-stone: #34353c;
  --color-ghost-fill: #3c3d40;
  --color-white-canvas: #ffffff;
  --color-silver-whisper: #acadae;
  --color-electric-blue: #83c3ff;
  --color-success-green: #47bb64;
  --color-error-red: #e24756;
  --font-gtamerica: 'gtAmerica', Inter;
  --font-gtamericamono: 'gtAmericaMono', JetBrains Mono;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.25;
  --text-display: 32px;
  --leading-display: 1.25;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --radius-cards: 8px;
  --radius-buttons: 4px;
  --radius-default: 4px;
  --shadow-xl: rgba(255, 255, 255, 0.08) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgba(0, 0, 0, 0.03) 0px 1px 2px 0px;
}
```
