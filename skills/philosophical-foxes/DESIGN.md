---
version: alpha
name: "Philosophical Foxes"
description: "Philosophical Foxes adopts a pixel-art aesthetic integrated into a sophisticated, minimalist interface, evoking a gallery or museum catalog. The visual system pairs a stark black-on-parchment color scheme with a monospace typeface, reminiscent of terminal output or code. Component outlines and boxy forms reinforce a digital, almost wireframe-like structure for the interactive elements, while the content itself leverages a detailed pixel art style."
theme: "light"
industry: "crypto"
source_url: "https://www.philosophicalfoxes.com"
refero_style_id: "b89cbf8d-1198-4b0b-b8bc-8ee8025d8a6d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514158433-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514158433-thumb.jpg"
extracted_at: "2026-04-30T01:56:15.521Z"
---

# Philosophical Foxes — Style Reference

> Pixelated Grand Library

**Theme:** light

**Industry:** crypto

Philosophical Foxes adopts a pixel-art aesthetic integrated into a sophisticated, minimalist interface, evoking a gallery or museum catalog. The visual system pairs a stark black-on-parchment color scheme with a monospace typeface, reminiscent of terminal output or code. Component outlines and boxy forms reinforce a digital, almost wireframe-like structure for the interactive elements, while the content itself leverages a detailed pixel art style.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Parchment | #f6f2e4 | `--color-parchment` | Page backgrounds, card surfaces, ghost button backgrounds, default text. Establishes a warm, aged, and contemplative base |
| Terminal Black | #000000 | `--color-terminal-black` | Primary text, solid button fills, component borders, and card backgrounds for contrast. Provides strong definition and a digital, coded feel |

## Tokens — Typography

### IBM Plex Mono

- **Token:** `--font-ibm-plex-mono`
- **Substitute:** monospace
- **Weights:** 300, 400, 500, 700
- **Sizes:** 12px, 14px, 16px, 18px, 22px, 24px, 28px
- **Line heights:** 1.14, 1.42, 1.45, 1.56, 1.60, 1.63, 1.71, 1.83
- **Letter spacing:** normal
- **Role:** Primary typeface for all body text, links, buttons, and most UI elements. Its monospace nature reinforces the digital, code-like aesthetic across the interface.

### Code 7x5

- **Token:** `--font-code-7x5`
- **Substitute:** monospace
- **Weights:** 400, 500
- **Sizes:** 28px, 53px, 73px, 133px
- **Line heights:** 1.00, 1.14
- **Letter spacing:** normal
- **Role:** Used for distinctive, large headlines and thematic text. Its blocky, pixel-art style directly reflects the project's visual identity.

### Open Sans

- **Token:** `--font-open-sans`
- **Substitute:** sans-serif
- **Weights:** 400
- **Sizes:** 18px
- **Line heights:** 1.00
- **Letter spacing:** normal
- **Role:** Used for badges, providing a slight contrast to the monospace environment while maintaining legibility.

### Fa brands 400

- **Token:** `--font-fa-brands-400`
- **Weights:** 400
- **Sizes:** 26px
- **Line heights:** 1
- **Role:** Fa brands 400 — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.71 | — | `--text-caption` |
| body-sm | 14px | 1.6 | — | `--text-body-sm` |
| body | 16px | 1.45 | — | `--text-body` |
| subheading | 18px | 1.42 | — | `--text-subheading` |
| heading-sm | 22px | 1.63 | — | `--text-heading-sm` |
| heading | 24px | 1.56 | — | `--text-heading` |
| heading-lg | 28px | 1.14 | — | `--text-heading-lg` |
| display | 133px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-49 | 49px | `--spacing-49` |
| spacing-74 | 74px | `--spacing-74` |
| spacing-76 | 76px | `--spacing-76` |
| spacing-99 | 99px | `--spacing-99` |
| spacing-109 | 109px | `--spacing-109` |
| spacing-134 | 134px | `--spacing-134` |
| spacing-148 | 148px | `--spacing-148` |
| spacing-265 | 265px | `--spacing-265` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 24px |
| badges | 0px |
| buttons | 100px |
| avatarPlaceholder | 50px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 74px |
| cardPadding | 25px |
| elementGap | 16px |

## Components

### Primary Action Button

**Role:** Call to action button

Solid Terminal Black background, Parchment text. Pill-shaped with a 100px border-radius, 38px vertical padding, and 76px horizontal padding. Font: IBM Plex Mono.

### Ghost Action Button

**Role:** Secondary action button/navigation

Parchment background, transparent text. Pill-shaped with a 100px border-radius, 9px vertical padding, and 15px horizontal padding. Uses the default text color, which is Terminal Black. Thin black border.

### Info Card

**Role:** Content container for detailed information

Parchment background with 24px border-radius. Padding of 25px on top, right, and left, with 49px on the bottom. No shadow, simple outlined aesthetic.

### Headline Card

**Role:** Large, dark background card for prominent headlines or sections

Terminal Black background with 50px border-radius. Significant top padding (547px) and bottom padding (148px) often with 0px horizontal padding.

### Navigation Tab Box

**Role:** Tab-style navigation elements

Outlined boxes with a 0px border-radius. Typically has no background fill, relying on the page's Parchment background. Selected state has Terminal Black background and Parchment text, with a 100px border-radius on the active item.

### Outlined Input Field

**Role:** User input for data

Transparent background with a Terminal Black border. Text color is Parchment when active. Padding is 8px vertical, 12px right, and 33.5px left. No border-radius.

## Do's and Don'ts

### Do

- Prioritize Terminal Black (#000000) for all text elements to ensure high contrast against the Parchment (#f6f2e4) background.
- Use IBM Plex Mono as the primary typeface for all UI elements and body text, maintaining 'normal' letter-spacing.
- Apply a 100px border-radius for all primary action buttons and navigation pills to achieve a distinct pill shape.
- Construct information cards with a 24px border-radius on a Parchment (#f6f2e4) background, with a consistent 25px horizontal padding.
- Employ the Code 7x5 font for large, impactful headlines to leverage its pixelated, retro-digital aesthetic.
- Maintain a clear visual hierarchy using strong Terminal Black borders (1px solid) to define content blocks, cards, and input fields.
- Utilize a section gap of 74px and an element gap of 16px to create a comfortable, structured layout density.

### Don't

- Do not introduce new colors that deviate from the core Parchment and Terminal Black palette; color should be functionally minimal.
- Avoid using soft shadows or complex gradients; the system relies on strong outlines and flat surfaces for definition.
- Do not round corners on general purpose information badges; they should be strictly rectilinear (0px border-radius).
- Refrain from varying letter spacing for IBM Plex Mono; it should remain 'normal' for consistent readability.
- Do not use generic sans-serif fonts for headlines; the distinctive Code 7x5 is essential for brand identity.
- Avoid dense, overcrowded layouts; respect the established 16px element gap and 74px section gap to provide visual breathing room.
- Do not introduce multi-color illustrations or photographs into a UI context; all imagery within the interface should adhere to the pixel art style.

## Imagery

The imagery is exclusively pixel art, featuring intricate scenes and characters with a detailed, classic video game aesthetic. Visuals are contained within the layout, never full-bleed, and often appear as content within cards or as large, central decorative elements. Treatment is raw-edged, without masking or rounding, embracing the pixel grid. Icons, while minimal, follow an outlined, monochrome style with implied stroke weight, complementing the overall aesthetic.

## Layout

The page structure favors a max-width, center-aligned containment, creating a focused content area despite the full screen pixel art hero. The hero section often features large pixel art scenes that extend to the viewport edges, with centered headlines overlaying them. Content sections typically use a consistent vertical rhythm (74px section gap) and often arrange information in two-column text+image patterns or stacked, outlined cards. Navigation is handled by a minimal top bar with text links and pill-shaped 'ghost' buttons, appearing above the primary content.

## Similar Brands

- **OpenSea** — Platform for viewing and interacting with pixel art NFTs, similar context to display of digital collectibles.
- **Web3 projects with pixel art** — Specific aesthetic choice of pixel art style, often seen in NFT and blockchain-related projects.
- **Retro gaming websites** — Visual language and font choices heavily inspired by classic video games and terminal interfaces.
- **Minimalist portfolio sites** — Limited color palette and strong reliance on typography and simple geometric forms to define the visual system, similar to highly curated portfolio sites.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-parchment: #f6f2e4;
  --color-terminal-black: #000000;
  --font-ibm-plex-mono: 'IBM Plex Mono', monospace;
  --font-code-7x5: 'Code 7x5', monospace;
  --font-open-sans: 'Open Sans', sans-serif;
  --font-fa-brands-400: 'Fa brands 400', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.71;
  --text-body-sm: 14px;
  --leading-body-sm: 1.6;
  --text-body: 16px;
  --leading-body: 1.45;
  --text-subheading: 18px;
  --leading-subheading: 1.42;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.63;
  --text-heading: 24px;
  --leading-heading: 1.56;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.14;
  --text-display: 133px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-25: 25px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-38: 38px;
  --spacing-49: 49px;
  --spacing-74: 74px;
  --spacing-76: 76px;
  --spacing-99: 99px;
  --spacing-109: 109px;
  --spacing-134: 134px;
  --spacing-148: 148px;
  --spacing-265: 265px;
  --radius-cards: 24px;
  --radius-badges: 0px;
  --radius-buttons: 100px;
  --radius-avatarplaceholder: 50px;
}
```

### Tailwind v4

```css
@theme {
  --color-parchment: #f6f2e4;
  --color-terminal-black: #000000;
  --font-ibm-plex-mono: 'IBM Plex Mono', monospace;
  --font-code-7x5: 'Code 7x5', monospace;
  --font-open-sans: 'Open Sans', sans-serif;
  --font-fa-brands-400: 'Fa brands 400', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.71;
  --text-body-sm: 14px;
  --leading-body-sm: 1.6;
  --text-body: 16px;
  --leading-body: 1.45;
  --text-subheading: 18px;
  --leading-subheading: 1.42;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.63;
  --text-heading: 24px;
  --leading-heading: 1.56;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.14;
  --text-display: 133px;
  --leading-display: 1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-25: 25px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-38: 38px;
  --spacing-49: 49px;
  --spacing-74: 74px;
  --spacing-76: 76px;
  --spacing-99: 99px;
  --spacing-109: 109px;
  --spacing-134: 134px;
  --spacing-148: 148px;
  --spacing-265: 265px;
  --radius-cards: 24px;
  --radius-badges: 0px;
  --radius-buttons: 100px;
  --radius-avatarplaceholder: 50px;
}
```
