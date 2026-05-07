---
version: alpha
name: "Zora"
description: "Zora's design evokes an 'underground market' feel, blending a stark monochromatic UI with unexpected, almost illicit, bursts of vivid color. The primary interaction zones are kept deliberately understated with muted grays and crisp whites, allowing product imagery and the occasional electric gradient to dominate. This tension between a neutral, almost unstyled frame and hyper-vivid accents creates an edgy, disruptive atmosphere."
theme: "light"
industry: "crypto"
source_url: "https://zora.co"
refero_style_id: "5c4eb249-fa38-4254-81e0-a32ee22766e2"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924295519-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924295519-thumb.jpg"
extracted_at: "2026-04-11T16:18:36.124Z"
---

# Zora — Style Reference

> Raw Concrete Gallery

**Theme:** light

**Industry:** crypto

Zora's design evokes an 'underground market' feel, blending a stark monochromatic UI with unexpected, almost illicit, bursts of vivid color. The primary interaction zones are kept deliberately understated with muted grays and crisp whites, allowing product imagery and the occasional electric gradient to dominate. This tension between a neutral, almost unstyled frame and hyper-vivid accents creates an edgy, disruptive atmosphere.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, primary text on dark elements. |
| Graphite Dark | #121212 | `--color-graphite-dark` | Primary UI elements, text on white backgrounds, button backgrounds for emphasis. |
| Slate Gray | #4d4d4d | `--color-slate-gray` | Secondary text, borders, icons, input text. |
| Ash Gray | #878787 | `--color-ash-gray` | Placeholder text, minor labels, badges. |
| Fog Contrast | #e6e6e6 | `--color-fog-contrast` | Subtle borders, button outlines. |
| Signal Green | #00df00 | `--color-signal-green` | Primary success indicators, 'Buy' buttons, highlights — a jarring, vivid green. |
| Vivid Magenta | #ff00f0 | `--color-vivid-magenta` | Accent color used for icons and small interactive elements, creating extreme contrast. |
| Electro Pink Gradient | #ff00d9 | `--color-electro-pink-gradient` | Distinctive gradient for call-to-actions or special states. |
| Luminous Green Gradient | #62ff00 | `--color-luminous-green-gradient` | Attention-grabbing highlights, often associated with positive status or interaction. |
| Monochrome Stripe Gradient | #d2d2d2 | `--color-monochrome-stripe-gradient` | Subtle background texture or separator, adding visual interest without distracting. |

## Tokens — Typography

### MonumentGrotesk

- **Token:** `--font-monumentgrotesk`
- **Substitute:** Inter, Arial, sans-serif
- **Weights:** 410, 450, 500, 600
- **Sizes:** 11px, 13px, 15px, 16px, 17px
- **Line heights:** 1.09, 1.23, 1.25, 1.33, 1.41
- **Letter spacing:** -0.0150em
- **Role:** Unified font for all text elements from body to headlines, contributing to a modern, slightly technical feel. The consistent negative letter-spacing across all sizes gives text a condensed, intentional presence.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.25 | — | `--text-caption` |
| body-sm | 13px | 1.25 | — | `--text-body-sm` |
| body | 15px | 1.25 | — | `--text-body` |
| body-lg | 16px | 1.25 | — | `--text-body-lg` |
| heading-sm | 17px | 1.25 | — | `--text-heading-sm` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| badges | 999px |
| buttons | 8px |
| round-elements | 50% |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | oklch(0.880331 0.276486 138.811 / 0.75) -4px 0px 8px 0px, oklch(0.880331 0.276486 138.811 / 0.97) 4px 0px 8px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.05) 0px 5px 10px 0px, rgba(0, 0, 0, 0.07) 0px 15px 25px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 20px |
| cardPadding | 0px |
| elementGap | 4px |

## Components

### Suggested Follows Panel

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Content Card with Buy Action

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### NFT Card with Price Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Ghost Button

**Role:** Functional text buttons for navigation and secondary actions.

Background: transparent (rgba(0,0,0,0)). Text: Slate Gray (#4d4d4d). Color: #4d4d4d. No padding, no border radius, text only.

### Rectangular Text Button

**Role:** Secondary action buttons, often inline.

Background: transparent (rgba(0,0,0,0)). Text: Slate Gray (#4d4d4d). Border: 1px solid #4d4d4d. Radius: 8px. Padding: 12px 12px.

### Circular Icon Button

**Role:** Icon-only primary actions, usually on sidebars or within cards.

Background: Graphite Dark (#121212). Text/Icon: Canvas White (#ffffff). Radius: 50% (circular). No padding. The entire element is a clickable circle rather than containing text.

### Vivid Buy Button

**Role:** Primary call-to-action for purchasing items.

Background: Signal Green (#00df00). Text: Black (#000000). Radius: 8px. Padding: 4px 12px. Distinctively bright to stand out.

### Content Card - Minimal

**Role:** Default content container for displaying items.

Background: transparent (rgba(0,0,0,0)). No border, no shadow. Radius: 0px. Padding bottom: 16px. Content flows directly.

### Content Card - Rounded

**Role:** Card variant for specific items or sections that need slight framing.

Background: transparent (rgba(0,0,0,0)). No border, no shadow. Radius: 12px. No padding.

### Search Input Field

**Role:** Global search functionality.

Background: transparent (rgba(0,0,0,0)). Text: Slate Gray (#4d4d4d). Border: 1px solid #4d4d4d. Radius: 0px. Padding: 12px 12px.

### Follow Badge

**Role:** Label for following users.

Background: #f5f5f5. Text: Ash Gray (#878787). Radius: 999px (pill shape). Padding: 0px 4px.

## Do's and Don'ts

### Do

- Always use MonumentGrotesk with a negative letter-spacing of -0.0150em for all text elements to maintain a condensed aesthetic.
- Apply Graphite Dark (#121212) as the default text color on Canvas White (#ffffff) backgrounds for strong contrast.
- Utilize Signal Green (#00df00) exclusively for primary 'Buy' actions or positive affirmations, ensuring its high visibility.
- Employ rounded corners of 8px for most interactive elements like buttons, and 12px for card containers, creating a soft but not overly playful feel.
- Maintain a clear visual hierarchy by placing content directly on the Canvas White (#ffffff) page background with minimal framing unless a specific grouping is required.
- Integrate the Monochrome Stripe Gradient for subtle background texture on neutral blocks, avoiding solid gray fills where possible.
- Use 50% border-radius for circular icon buttons, making them immediately recognizable as interactive elements.

### Don't

- Avoid using standard black text on light backgrounds; instead, opt for Graphite Dark (#121212) or Slate Gray (#4d4d4d).
- Do not introduce additional accent colors beyond Signal Green (#00df00) and Vivid Magenta (#ff00f0) to preserve the brand's distinct color palette.
- Refrain from adding explicit box-shadows to cards; elevation is mostly implied by content framing rather than visual depth cues.
- Do not use generic padding values; adhere to the established spacing scale based on 4px increments (4px, 8px, 12px, 16px).
- Avoid large, impactful headlines; all typography uses MonumentGrotesk with a consistent negative letter-spacing and relatively modest sizes.
- Do not use default browser form element styles; all inputs should be styled with transparent backgrounds, Slate Gray (#4d4d4d) text, and a border style matching the search input.

## Elevation

- **Shadow 1:** `oklch(0.880331 0.276486 138.811 / 0.75) -4px 0px 8px 0px, oklch(0.880331 0.276486 138.811 / 0.97) 4px 0px 8px 0px`
- **Shadow 2:** `rgba(0, 0, 0, 0.05) 0px 5px 10px 0px, rgba(0, 0, 0, 0.07) 0px 15px 25px 0px`

## Imagery

Imagery on Zora is product-focused or artistic, often full-bleed within card areas or as central page features. There's a mix of photography, abstract graphics, and some potentially illustrative elements. The treatment varies: images themselves appear to respect the content card's border-radius (0px or 12px) but are otherwise raw, without masks or heavy treatments. Photography tends towards detailed, sometimes artistic or conceptual works, with varied color palettes depending on the content. Illustrations, if present, lean towards flat or outlined graphic styles (like some icons). The density is high, with images being the primary focal points upon which the UI elements are overlaid or positioned, serving both decorative and explanatory roles for NFTs/digital assets.

## Layout

The page adheres to a max-width contained layout, with a prominent left-hand fixed sidebar navigation that introduces asymmetry. The main content area is centrally aligned. The hero pattern appears to be absent in the provided screens, with the page immediately presenting a grid-like feed of content cards. Section rhythm is driven by the feed, presenting a consistent stream of items rather than distinct, block-separated sections. Content is arranged primarily in a single-column stack of cards within the main content area, with a right-hand sidebar for suggestions and QR code. Navigation consists of a left-hand fixed sidebar with minimalist icons and a top-right header with 'Log in' and 'Sign up' buttons. This creates a focused, content-heavy experience within clearly defined UI zones.

## Similar Brands

- **OpenSea** — Similar NFT marketplace structure with content-first presentation and a minimal UI surrounding the digital assets.
- **Rarible** — Uses stark whitespace and focused content blocks with occasional vibrant accents for NFTs, echoing Zora's contrast.
- **Foundation** — Maintains a clean, almost gallery-like feel for digital art, allowing the artwork to be the hero against a subdued interface.
- **Are.na** — Web-native feel with a strong emphasis on content blocks and a minimal, almost utilitarian design language.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-graphite-dark: #121212;
  --color-slate-gray: #4d4d4d;
  --color-ash-gray: #878787;
  --color-fog-contrast: #e6e6e6;
  --color-signal-green: #00df00;
  --color-vivid-magenta: #ff00f0;
  --color-electro-pink-gradient: #ff00d9;
  --color-luminous-green-gradient: #62ff00;
  --color-monochrome-stripe-gradient: #d2d2d2;
  --font-monumentgrotesk: 'MonumentGrotesk', Inter, Arial, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.25;
  --text-body-sm: 13px;
  --leading-body-sm: 1.25;
  --text-body: 15px;
  --leading-body: 1.25;
  --text-body-lg: 16px;
  --leading-body-lg: 1.25;
  --text-heading-sm: 17px;
  --leading-heading-sm: 1.25;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --radius-cards: 12px;
  --radius-badges: 999px;
  --radius-buttons: 8px;
  --radius-round-elements: 50%;
  --shadow-xl: oklch(0.880331 0.276486 138.811 / 0.75) -4px 0px 8px 0px, oklch(0.880331 0.276486 138.811 / 0.97) 4px 0px 8px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.05) 0px 5px 10px 0px, rgba(0, 0, 0, 0.07) 0px 15px 25px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-graphite-dark: #121212;
  --color-slate-gray: #4d4d4d;
  --color-ash-gray: #878787;
  --color-fog-contrast: #e6e6e6;
  --color-signal-green: #00df00;
  --color-vivid-magenta: #ff00f0;
  --color-electro-pink-gradient: #ff00d9;
  --color-luminous-green-gradient: #62ff00;
  --color-monochrome-stripe-gradient: #d2d2d2;
  --font-monumentgrotesk: 'MonumentGrotesk', Inter, Arial, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.25;
  --text-body-sm: 13px;
  --leading-body-sm: 1.25;
  --text-body: 15px;
  --leading-body: 1.25;
  --text-body-lg: 16px;
  --leading-body-lg: 1.25;
  --text-heading-sm: 17px;
  --leading-heading-sm: 1.25;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --radius-cards: 12px;
  --radius-badges: 999px;
  --radius-buttons: 8px;
  --radius-round-elements: 50%;
  --shadow-xl: oklch(0.880331 0.276486 138.811 / 0.75) -4px 0px 8px 0px, oklch(0.880331 0.276486 138.811 / 0.97) 4px 0px 8px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.05) 0px 5px 10px 0px, rgba(0, 0, 0, 0.07) 0px 15px 25px 0px;
}
```
