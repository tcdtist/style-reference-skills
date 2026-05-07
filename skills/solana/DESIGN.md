---
version: alpha
name: "Solana"
description: "Solana's design embodies a 'cyber-dark' aesthetic, where deep, rich blacks and near-blacks define the primary surfaces, creating a stage for technological elegance. A vibrant, almost holographic purple gradient often provides atmospheric depth, suggesting digital flow. White typography and sparse, vivid chromatic accents (lime, violet, orange) act like data points or signal lights, providing crucial contrast and indicating interactivity within the dark interface. The interplay of fluid gradients and sharp, contained UI elements gives it a feeling of advanced, yet approachable, digital infrastructure."
theme: "dark"
industry: "crypto"
source_url: "https://solana.com"
refero_style_id: "f493133e-e289-4fb1-9729-f611d9816aae"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924281737-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924281737-thumb.jpg"
extracted_at: "2026-04-11T16:18:27.693Z"
---

# Solana — Style Reference

> Galactic Command Center. Surfaces are deep space, accents are cosmic signals.

**Theme:** dark

**Industry:** crypto

Solana's design embodies a 'cyber-dark' aesthetic, where deep, rich blacks and near-blacks define the primary surfaces, creating a stage for technological elegance. A vibrant, almost holographic purple gradient often provides atmospheric depth, suggesting digital flow. White typography and sparse, vivid chromatic accents (lime, violet, orange) act like data points or signal lights, providing crucial contrast and indicating interactivity within the dark interface. The interplay of fluid gradients and sharp, contained UI elements gives it a feeling of advanced, yet approachable, digital infrastructure.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Space | #000000 | `--color-deep-space` | Page background, primary dark UI elements – creates an immersive, infinite dark canvas. |
| Dark Matter | #121212 | `--color-dark-matter` | Secondary surface background, card surfaces, navigation background – slightly lighter than Deep Space to provide subtle layering without harsh divisions. |
| Void Shadow | #0d0c11 | `--color-void-shadow` | Subtle background for UI components, offering a slightly softer black than the absolute #000000. |
| Vapor Gray | #ababba | `--color-vapor-gray` | Primary body text, icon fills – a very light gray that appears white against the dark backgrounds, ensuring readability without harshness. |
| Polar White | #ffffff | `--color-polar-white` | Headlines, critical text, selected interactive elements – acts as a spotlight against dark backgrounds, drawing immediate attention. |
| Border Plasma | #eaecf0 | `--color-border-plasma` | Subtle borders and separators, providing structure on dark elements without strong visual breaks. |
| Subtle Stone | #848895 | `--color-subtle-stone` | Secondary text, descriptive elements (likely --body-text-secondary based on token hint) – a slightly darker gray for less prominent information. |
| Infrared Gradient | #000000 | `--color-infrared-gradient` | Hero section background, atmospheric graphic elements – provides a sense of depth and digital energy, particularly in the hero. The starting black is #000000, fading into #14001d. |
| Cyber Lime | #55e9ab | `--color-cyber-lime` | Small interactive elements, success indicators – a vibrant, highly saturated green that stands out as a focal point. |
| Digital Violet | #ca9ff5 | `--color-digital-violet` | Illustrative accents, subtle interactive states – a softer, yet still vibrant violet for visual interest. |
| Neon Orange | #f48252 | `--color-neon-orange` | Highlight elements, specific icons – a punchy orange for high-visibility accents. |
| Muted Lilac | #dfcdf5 | `--color-muted-lilac` | Subtle background for specific interactive states or highlighted sections – provides a hint of color that is less intense than direct accents. |

## Tokens — Typography

### Diatype

- **Token:** `--font-diatype`
- **Substitute:** Inter
- **Weights:** 300, 400, 500
- **Sizes:** 16px, 18px, 20px, 21px, 24px, 28px, 36px, 40px, 64px, 88px
- **Line heights:** 1.00, 1.13, 1.14, 1.20, 1.22, 1.31, 1.33, 1.40, 1.50, 1.56
- **Letter spacing:** -0.0400em at 88px, -0.0300em at 64px, -0.0200em at 40px, -0.0100em at 28px and larger, tapering to normal at smaller sizes
- **Role:** Primary typeface for all content. The varied weights and precise letter-spacing create a highly legible yet contemporary feel, crucial for conveying technical information clearly against dark backgrounds.

### DSemi

- **Token:** `--font-dsemi`
- **Substitute:** Roboto Slab
- **Weights:** 700
- **Sizes:** 12px, 14px
- **Line heights:** 1.14, 1.33
- **Role:** Used for navigational items and small, assertive labels. Its bold, serif-like weight provides clarity and distinction for functional elements within the predominantly sans-serif interface.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.14 | — | `--text-caption` |
| body-sm | 14px | 1.33 | — | `--text-body-sm` |
| body | 16px | 1.5 | 0px | `--text-body` |
| body-lg | 18px | 1.5 | — | `--text-body-lg` |
| subheading | 20px | 1.31 | — | `--text-subheading` |
| heading-lg | 28px | 1.2 | -0.28px | `--text-heading-lg` |
| display-sm | 36px | 1.14 | -0.72px | `--text-display-sm` |
| display | 40px | 1.13 | -0.8px | `--text-display` |
| display-lg | 64px | 1 | -1.92px | `--text-display-lg` |
| display-xl | 88px | 1 | -3.52px | `--text-display-xl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| buttons | 9999px |
| containers | 12px |
| smallElements | 4px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.17) 0px 2px 4px 1px, rgba(255, 255, 255, 0.29) 0px -4px 12px 0px inset, rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.2) 0px -1px 0px 0px inset | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 32px |
| elementGap | 4px |

## Components

### Promotion Card (Hackathon)

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Event Cards — Meet Solana IRL

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### News Article Card — Latest on Solana

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Ghost Button

**Role:** Call to action, navigation items

backgroundColor=transparent, color=rgb(255, 255, 255), borderTopColor=rgba(236, 228, 253, 0.2), borderRadius=9999px, paddingTop=0px, paddingRight=24px, paddingBottom=0px, paddingLeft=24px. Text uses Diatype, 16px.

### Secondary Ghost Button

**Role:** Subtle actions, secondary navigation

backgroundColor=transparent, color=rgba(255, 255, 255, 0.64), borderTopColor=rgb(234, 236, 240), borderRadius=9999px, paddingTop=4px, paddingRight=16px, paddingBottom=4px, paddingLeft=16px. Text uses Diatype, 16px.

### Icon-Only Ghost Button

**Role:** Tertiary actions, social links, compact navigation

backgroundColor=rgba(0, 0, 0, 0.7), color=rgb(255, 255, 255), borderTopColor=rgb(234, 236, 240), borderRadius=9999px, paddingTop=0px, paddingRight=0px, paddingBottom=0px, paddingLeft=0px.

### Card Button

**Role:** Interactive clickable cards featuring content

backgroundColor=rgba(236, 228, 253, 0.12), color=rgb(255, 255, 255), borderTopColor=rgb(234, 236, 240), borderRadius=12px, paddingTop=32px, paddingRight=24px, paddingBottom=32px, paddingLeft=24px. This button style elevates card content to be clickable.

### Transparent Content Card

**Role:** Showcasing content blocks, events, images with minimal visual chrome.

backgroundColor=transparent, borderRadius=0px, boxShadow=none, paddingTop=32px, paddingRight=32px, paddingBottom=32px, paddingLeft=32px. Features white text (Diatype, various sizes) against the dark page background, emphasizing content over container.

### Fixed Navigation Bar

**Role:** Global navigation, search, language toggle

Fixed header. backgroundColor=rgb(18, 21, 29) (apparent from screenshot, slightly darker than main BG), height 71px. Contains ghost buttons and search input. Text is Polar White (Diatype 16px).

### Promotion Card (Hackathon)

**Role:** Highlighting specific events or features

backgroundColor=rgba(236, 228, 253, 0.12), borderRadius=12px. Padding is generous. Contains heading text (Diatype 21px, Polar White), body text (Diatype 16px, Vapor Gray), and a Ghost Button (Diatype 14px, Polar White), creating a self-contained informational block.

## Do's and Don'ts

### Do

- Do use Deep Space (#000000) as the primary page background for ultimate contrast.
- Do apply 9999px borderRadius for all interactive buttons and pill-shaped elements to maintain brand consistency.
- Do utilize Diatype (or Inter) at heavier weights (300-500) and Polar White (#ffffff) for all headlines.
- Do leverage the Infrared Gradient (linear-gradient(rgb(0, 0, 0), rgb(20, 0, 29))) for hero backgrounds to establish atmospheric depth.
- Do maintain a comfortable elementGap of 4px for tight UI element separation, scaling up as needed for larger blocks.
- Do use Border Plasma (rgba(236, 228, 253, 0.2)) for subtle borders on ghost buttons against dark backgrounds.
- Do use Cyber Lime (#55e9ab) sparingly as an accent color for key interactive states or indicators.

### Don't

- Don't use pronounced box shadows; subtle insets or glows are preferred, if any, as the design relies on color and gradient depth.
- Don't introduce additional bright or pastel backgrounds; maintain the dark theme with Dark Matter (#121212) or Deep Space (#000000) for all surfaces.
- Don't use standard square buttons; all primary interaction buttons should be pill-shaped (9999px radius).
- Don't use overly saturated colors for body text; rely on Vapor Gray (#ababba) for readability against dark surfaces.
- Don't use generic system fonts; always prioritize Diatype (or its substitute Inter) to maintain the brand's typographic identity.
- Don't break the established padding of 32px for cards; this ensures consistent content breathing room.

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.17) 0px 2px 4px 1px, rgba(255, 255, 255, 0.29) 0px -4px 12px 0px inset, rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.2) 0px -1px 0px 0px inset`

## Imagery

The visual language is characterized by abstract, swirling 3D graphics in deep purples, blues, and electric greens, suggesting data flow and connectivity. These graphics are often full-bleed in hero sections, creating immersive backgrounds that establish a futuristic, technological atmosphere. Product screenshots are absent; instead, the focus is on the underlying infrastructure and abstract representations of its power. Icons are minimalist, using mono-color fills or strokes, primarily in white or accent colors, complementing the UI rather than distracting from it.

## Layout

The page primarily employs a max-width contained layout for content sections, set against full-bleed dark backgrounds. The hero section is full-bleed with a prominent abstract gradient graphic and a large, centered headline, immediately establishing the brand's aesthetic. Subsequent sections alternate between full-width content bands and cards grids. Content arrangement frequently uses large, centered text blocks (headings) followed by multi-column card grids for features and events. Spacing between sections is generous, creating a sense of expansiveness. The navigation is a sticky top bar, providing consistent access to global actions.

## Similar Brands

- **Polygon** — Shares a dark theme and emphasizes tech-forward aesthetics with gradients and subtle glows, focused on blockchain infrastructure.
- **Uniswap** — Utilizes a dark interface with vibrant, often purple and blue, accent colors to highlight data and interactive elements in a DeFi context.
- **Brave Browser** — Employs a dark, streamlined UI with subtle background patterns and high-contrast text, maintaining a focus on performance and efficiency.
- **Discord** — Known for its predominantly dark UI, utilizing various shades of gray and purple accents, creating a modern and immersive experience.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-space: #000000;
  --color-dark-matter: #121212;
  --color-void-shadow: #0d0c11;
  --color-vapor-gray: #ababba;
  --color-polar-white: #ffffff;
  --color-border-plasma: #eaecf0;
  --color-subtle-stone: #848895;
  --color-infrared-gradient: #000000;
  --color-cyber-lime: #55e9ab;
  --color-digital-violet: #ca9ff5;
  --color-neon-orange: #f48252;
  --color-muted-lilac: #dfcdf5;
  --font-diatype: 'Diatype', Inter;
  --font-dsemi: 'DSemi', Roboto Slab;
  --text-caption: 12px;
  --leading-caption: 1.14;
  --text-body-sm: 14px;
  --leading-body-sm: 1.33;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.31;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.28px;
  --text-display-sm: 36px;
  --leading-display-sm: 1.14;
  --tracking-display-sm: -0.72px;
  --text-display: 40px;
  --leading-display: 1.13;
  --tracking-display: -0.8px;
  --text-display-lg: 64px;
  --leading-display-lg: 1;
  --tracking-display-lg: -1.92px;
  --text-display-xl: 88px;
  --leading-display-xl: 1;
  --tracking-display-xl: -3.52px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-128: 128px;
  --radius-cards: 12px;
  --radius-buttons: 9999px;
  --radius-containers: 12px;
  --radius-smallelements: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.17) 0px 2px 4px 1px, rgba(255, 255, 255, 0.29) 0px -4px 12px 0px inset, rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.2) 0px -1px 0px 0px inset;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-space: #000000;
  --color-dark-matter: #121212;
  --color-void-shadow: #0d0c11;
  --color-vapor-gray: #ababba;
  --color-polar-white: #ffffff;
  --color-border-plasma: #eaecf0;
  --color-subtle-stone: #848895;
  --color-infrared-gradient: #000000;
  --color-cyber-lime: #55e9ab;
  --color-digital-violet: #ca9ff5;
  --color-neon-orange: #f48252;
  --color-muted-lilac: #dfcdf5;
  --font-diatype: 'Diatype', Inter;
  --font-dsemi: 'DSemi', Roboto Slab;
  --text-caption: 12px;
  --leading-caption: 1.14;
  --text-body-sm: 14px;
  --leading-body-sm: 1.33;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.31;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.28px;
  --text-display-sm: 36px;
  --leading-display-sm: 1.14;
  --tracking-display-sm: -0.72px;
  --text-display: 40px;
  --leading-display: 1.13;
  --tracking-display: -0.8px;
  --text-display-lg: 64px;
  --leading-display-lg: 1;
  --tracking-display-lg: -1.92px;
  --text-display-xl: 88px;
  --leading-display-xl: 1;
  --tracking-display-xl: -3.52px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-128: 128px;
  --radius-cards: 12px;
  --radius-buttons: 9999px;
  --radius-containers: 12px;
  --radius-smallelements: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.17) 0px 2px 4px 1px, rgba(255, 255, 255, 0.29) 0px -4px 12px 0px inset, rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.2) 0px -1px 0px 0px inset;
}
```
