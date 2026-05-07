---
version: alpha
name: "Champions4good"
description: "This design system conjures a vibrant, high-energy atmosphere through its daring color palette and bold typography. A deep, almost regal purple dominates as the primary background, punctuated by electric pink and sharp neon green accents. Type is a declarative, almost industrial statement, mixing a condensed, extra-bold display font with a more understated sans-serif for body text, creating a strong contrast between commanding headlines and informational support. Rectangular shapes are favored, with only subtle rounding, reinforcing a sense of precise, deliberate construction."
theme: "dark"
industry: "other"
source_url: "https://www.champions4good.club"
refero_style_id: "e02671e1-ba31-465f-bb7f-b124bf91ab5e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776007947245-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776007947245-thumb.jpg"
extracted_at: "2026-04-12T15:32:47.855Z"
---

# Champions4good — Style Reference

> Electric purple, condensed statements. A punchy, digital-neon aesthetic on a dark, rich canvas.

**Theme:** dark

**Industry:** other

This design system conjures a vibrant, high-energy atmosphere through its daring color palette and bold typography. A deep, almost regal purple dominates as the primary background, punctuated by electric pink and sharp neon green accents. Type is a declarative, almost industrial statement, mixing a condensed, extra-bold display font with a more understated sans-serif for body text, creating a strong contrast between commanding headlines and informational support. Rectangular shapes are favored, with only subtle rounding, reinforcing a sense of precise, deliberate construction.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Royal Plum | #23002b | `--color-royal-plum` | Page background, significant content blocks — establishes the primary dark theme with a distinct chromatic depth. |
| Hot Pink | #e894ff | `--color-hot-pink` | Interactive elements like buttons and toggles, highlighted text, card backgrounds — provides a high-contrast accent that feels dynamic and modern. |
| Neon Green | #93ffe4 | `--color-neon-green` | Decorative text, subtle accents, highlighting — a vivid, cool counterpoint to the warm pink and deep purple. |
| Sunburst Orange | #ffac47 | `--color-sunburst-orange` | Alternative decorative text, secondary highlights — adds another layer of vivid chromatic energy, often seen in headlines. |
| Forest Shard | #002629 | `--color-forest-shard` | Specific card backgrounds, alternate content areas — introduces a very dark, desaturated teal as a subtle variation in background texture. |
| Espresso Chip | #291900 | `--color-espresso-chip` | Specific card backgrounds, alternate content areas — a very dark, desaturated brown providing another distinct tonal background. |
| Ink Black | #121212 | `--color-ink-black` | Primary body text, headers on light backgrounds — provides strong contrast while avoiding absolute #000. |
| Pure White | #ffffff | `--color-pure-white` | Text on dark backgrounds, icons — ensures maximum readability against the brand's deep chromatic backgrounds. |
| Graphite | #333333 | `--color-graphite` | Secondary text, subtle borders, some UI elements in light contexts. |
| Deep Plum | #db99f7 | `--color-deep-plum` | Stroke color for outlined elements, subtle graphical details. |

## Tokens — Typography

### Druk Condensed Super Desktop

- **Token:** `--font-druk-condensed-super-desktop`
- **Substitute:** Anton
- **Weights:** 400, 500
- **Sizes:** 24px, 29px, 32px, 43px, 44px, 151px, 187px, 317px
- **Line heights:** 0.78, 0.85, 1.00
- **Letter spacing:** 0.005em, 0.008em
- **Role:** Display headlines and hero text — its condensed, heavy-set nature screams attention and is the primary driver of the system's bold, declarative tone.

### Neue Montreal

- **Token:** `--font-neue-montreal`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 14px, 15px, 16px, 58px
- **Line heights:** 1.00, 1.10, 1.20, 1.30, 1.40, 1.43
- **Letter spacing:** -0.022em
- **Role:** Body text, navigation, and input labels — a modern, geometric sans-serif that provides clarity and a modern edge, contrasting with the loudness of Druk. Negative letter-spacing keeps it tight and contemporary.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.43
- **Letter spacing:** normal
- **Role:** Fallback and minimal UI elements — for high readability in small contexts or as a general system fallback.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| heading-sm | 24px | 0.85 | — | `--text-heading-sm` |
| heading | 44px | 0.85 | 0.005px | `--text-heading` |
| heading-lg | 58px | 1.1 | -0.48px | `--text-heading-lg` |
| display | 317px | 0.78 | 0.008px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-192 | 192px | `--spacing-192` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 14px |
| buttons | 0px |
| default | 6px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 0px |
| elementGap | 8px |

## Components

### Join CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Cards — Triptych

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Sound Toggle + Navigation Pills

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Ghost Navigation Link

**Role:** Primary navigation links

Text in Pure White, no background, no borders. Uses Neue Montreal, weight 400 at 14px size for navigation items. On hover or active, it likely changes to Hot Pink or a similar accent color for emphasis.

### Hero Text Button

**Role:** Call to action in hero

Background transparent, text in Hot Pink (#e894ff). No padding, no border radius. Typography uses Neue Montreal, weight 400.

### Standard Card (Forest Green)

**Role:** Content container

Background color Forest Shard (#002629), border radius 14px, no box shadow. Padding is internal to content, not intrinsic to the card background.

### Standard Card (Espresso Chip)

**Role:** Content container

Background color Espresso Chip (#291900), border radius 14px, no box shadow. Padding is internal to content, not intrinsic to the card background.

### Standard Card (Hot Pink)

**Role:** Content container

Background color Hot Pink (#e894ff), border radius 14px, no box shadow. Padding is internal to content, not intrinsic to the card background.

### Sound Toggle (Outline)

**Role:** Toggle button for sound

Background transparent, border is Deep Plum with 1px width. Inside, there's a circular element with a dot. Border radius appears to be fully rounded or pill-shaped to differentiate it from other UI elements.

## Do's and Don'ts

### Do

- Prioritize Druk Condensed Super Desktop for all headlines and marketing text, leveraging its condensed forms and ultra-heavy weights for maximum impact.
- Use Royal Plum (#23002b) as the dominant background color for most sections, establishing the primary visual identity.
- Accent interactive elements and key information with Hot Pink (#e894ff) for high visibility and vibrant contrast.
- Maintain a tight, modern aesthetic by applying -0.022em letter spacing to Neue Montreal text.
- Apply 14px border radius to all card-like containers, establishing a consistent subtle softness against the generally sharp aesthetic.
- Ensure textual contrast: use Pure White (#ffffff) text on Royal Plum (#23002b) backgrounds and Ink Black (#121212) on Pure White (#ffffff) sections.
- Utilize specific background colors (Forest Shard #002629, Espresso Chip #291900) for distinct content blocks or cards to create visual segmentation without relying on shadows.

### Don't

- Avoid using box shadows for elevation; define hierarchy and distinction purely through color and border radius variations.
- Do not introduce soft, pasty, or muted colors; maintain the high vibrance and contrast of the established palette.
- Refrain from using rounded borders on buttons or primary CTA elements; maintain sharp, rectangular framing.
- Do not break up sections with subtle dividers or thin lines; instead, use full-bleed background color changes between content blocks.
- Avoid generic system fonts for prominent text; Neue Montreal and Druk Condensed Super Desktop define the typographic identity.
- Do not use letter spacing values for Druk Condensed Super Desktop below 0.005em, as this will hinder readability.

## Imagery

The site's visual language is minimal but impactful, focusing on outlined vector graphics. These are primarily monochrome human silhouettes, acting as abstract representations of 'champions.' They are used decoratively and iconographically rather than photographically or illustratively. The treatment is clean and isolated, providing visual cues without adding photographic noise. The density is low, making the typography and color the primary visual drivers, with icons serving as supporting visual metaphor.

## Layout

The page primarily employs a full-bleed layout, where background colors extend to the edges of the viewport. Content appears to be centered within this full-bleed canvas. The hero section is characterized by massive, centered display typography (Druk Condensed Super Desktop) over a Royal Plum background, creating an immediate, bold statement. Sections are defined by alternating full-bleed background colors (e.g., Royal Plum, then a lighter color in the secondary screenshot), creating a rhythmic flow down the page without explicit dividers. Content arrangement within these sections is fluid, often featuring large stacked text blocks. There's a subtle grid for some feature blocks, such as the colored cards for Forest Shard, Espresso Chip, and Hot Pink, which have a 14px border radius but no padding on the card itself, suggesting padding is applied to internal content.

## Similar Brands

- **Awwwards-winning portfolio sites** — Bold, custom typography as the primary visual element on a dark, chromatic background, with vivid accent colors.
- **Web3/Crypto landing pages** — Combination of deep purple/black with electric pink/green accents and strong, condensed typography for a cutting-edge feel.
- **Athletic apparel brands (certain campaigns)** — Energetic color palette and punchy, declarative type evoke a sense of competition and high performance.
- **Digital art/event platforms** — The use of strong, saturated colors on a dark background, minimal imagery, and heavy typography for a 'digital statement' aesthetic.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-royal-plum: #23002b;
  --color-hot-pink: #e894ff;
  --color-neon-green: #93ffe4;
  --color-sunburst-orange: #ffac47;
  --color-forest-shard: #002629;
  --color-espresso-chip: #291900;
  --color-ink-black: #121212;
  --color-pure-white: #ffffff;
  --color-graphite: #333333;
  --color-deep-plum: #db99f7;
  --font-druk-condensed-super-desktop: 'Druk Condensed Super Desktop', Anton;
  --font-neue-montreal: 'Neue Montreal', Inter;
  --font-arial: 'Arial', Arial;
  --text-heading-sm: 24px;
  --leading-heading-sm: 0.85;
  --text-heading: 44px;
  --leading-heading: 0.85;
  --tracking-heading: 0.005px;
  --text-heading-lg: 58px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.48px;
  --text-display: 317px;
  --leading-display: 0.78;
  --tracking-display: 0.008px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-160: 160px;
  --spacing-192: 192px;
  --radius-cards: 14px;
  --radius-buttons: 0px;
  --radius-default: 6px;
}
```

### Tailwind v4

```css
@theme {
  --color-royal-plum: #23002b;
  --color-hot-pink: #e894ff;
  --color-neon-green: #93ffe4;
  --color-sunburst-orange: #ffac47;
  --color-forest-shard: #002629;
  --color-espresso-chip: #291900;
  --color-ink-black: #121212;
  --color-pure-white: #ffffff;
  --color-graphite: #333333;
  --color-deep-plum: #db99f7;
  --font-druk-condensed-super-desktop: 'Druk Condensed Super Desktop', Anton;
  --font-neue-montreal: 'Neue Montreal', Inter;
  --font-arial: 'Arial', Arial;
  --text-heading-sm: 24px;
  --leading-heading-sm: 0.85;
  --text-heading: 44px;
  --leading-heading: 0.85;
  --tracking-heading: 0.005px;
  --text-heading-lg: 58px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.48px;
  --text-display: 317px;
  --leading-display: 0.78;
  --tracking-display: 0.008px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-160: 160px;
  --spacing-192: 192px;
  --radius-cards: 14px;
  --radius-buttons: 0px;
  --radius-default: 6px;
}
```
