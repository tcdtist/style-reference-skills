---
version: alpha
name: "Superr"
description: "Superr opts for a youthful, playful aesthetic, resembling a child's notebook brought to life. A warm, off-white canvas sets a friendly, approachable tone, punctuated by vibrant, primary-school-inspired colors for text highlights and playful borders. Typography leans into a handwritten, slightly uneven feel for headings, offset by a clean sans-serif for body copy. Components are light, favoring subtle shadows and rounded corners to maintain a soft, tactile presence, echoing the physical world of a notebook."
theme: "light"
industry: "productivity"
source_url: "https://www.superr.ai"
refero_style_id: "cfd0fec1-f25a-4b9b-9bd0-d5b66960f2f2"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508079543-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508079543-thumb.jpg"
extracted_at: "2026-04-30T00:15:05.113Z"
---

# Superr — Style Reference

> Child's Animated Sketchbook. This system feels like looking into a favorite, well-loved school notebook where every element has personality.

**Theme:** light

**Industry:** productivity

Superr opts for a youthful, playful aesthetic, resembling a child's notebook brought to life. A warm, off-white canvas sets a friendly, approachable tone, punctuated by vibrant, primary-school-inspired colors for text highlights and playful borders. Typography leans into a handwritten, slightly uneven feel for headings, offset by a clean sans-serif for body copy. Components are light, favoring subtle shadows and rounded corners to maintain a soft, tactile presence, echoing the physical world of a notebook.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Parchment | #fdfbf9 | `--color-canvas-parchment` | Page background, primary surface for cards and buttons, providing a warm, inviting canvas |
| Deep Graphite | #171717 | `--color-deep-graphite` | Primary text, button borders, and accent strokes – forming the core dark contrast against the light canvas |
| Soft Black | #2b1a07 | `--color-soft-black` | Secondary text, muted headings, and subtle borders, slightly softer than Deep Graphite |
| Jet Black | #000000 | `--color-jet-black` | Boldest headings and critical text elements, used sparingly for absolute contrast |
| Warm Gray Shadow | #bebcbb | `--color-warm-gray-shadow` | Supporting neutral for secondary UI, dividers, and muted labels. Do not promote it to the primary CTA color |
| Cheeky Orange | #ff6f1e | `--color-cheeky-orange` | Decorative background accents, footer background — a bold, energetic burst |
| Playful Red | #ce500a | `--color-playful-red` | Highlight text, decorative borders – adding a vibrant, attention-grabbing spark |
| Sky Blue | #3b82f6 | `--color-sky-blue` | Highlight text, decorative borders – a bright, clear accent color evoking creativity |
| Bubblegum Pink | #ff66cf | `--color-bubblegum-pink` | Highlight text, decorative borders – lending a whimsical, friendly touch |
| Grass Green | #22c55e | `--color-grass-green` | Highlight text, decorative borders – a fresh, positive accent |

## Tokens — Typography

### gelica

- **Token:** `--font-gelica`
- **Substitute:** Comic Sans MS (as a last resort), or a custom script font like 'Caveat' or 'Gochi Hand' if 'gelica' is unavailable.
- **Weights:** 400, 500, 600
- **Sizes:** 16px, 20px, 24px, 28px, 32px, 36px, 40px, 46px, 104px
- **Line heights:** 1.08, 1.20, 1.40, 1.50
- **Letter spacing:** normal
- **Role:** Primary display font, used for all headings, prominent calls to action, and any text needing a distinct, hand-drawn character. Its slightly uneven baseline and friendly weight convey a youthful, non-corporate voice.

### Geist

- **Token:** `--font-geist`
- **Substitute:** Inter, Figtree, or General Sans.
- **Weights:** 400, 500
- **Sizes:** 18px, 20px, 32px
- **Line heights:** 1.50
- **Letter spacing:** normal
- **Role:** Functional text, used for body copy, navigation, and secondary information. This modern sans-serif provides clarity and legibility, grounding the playful display font with professional readability.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 16px | 1.5 | 0px | `--text-caption` |
| body | 18px | 1.5 | 0px | `--text-body` |
| subheading | 20px | 1.5 | 0px | `--text-subheading` |
| heading-sm | 32px | 1.2 | 0px | `--text-heading-sm` |
| heading | 46px | 1.2 | 0px | `--text-heading` |
| display | 104px | 1.08 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-85 | 85px | `--spacing-85` |
| spacing-89 | 89px | `--spacing-89` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-116 | 116px | `--spacing-116` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 56px |
| cards | 12px |
| avatar | 9999px |
| fields | 8px |
| buttons | 20px |
| default | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.06) 0px 2px 20px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.25) 0px 1px 2px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 32px |
| elementGap | 12px |

## Components

### Ghost Button

**Role:** Interactive element, secondary action

Text-only button for secondary actions or links that require less emphasis. No background color, Deep Graphite text, and a bottom border in Deep Graphite. Padding is minimal (4px top/bottom, 4px right/left). Uses gelica font, 20px, weight 400.

### Pill Ghost Button

**Role:** Call to action, primary interaction

Primary call to action button, appearing as a pill-shaped outline. Canvas Parchment background with Deep Graphite text. Border is a 1px solid Deep Graphite. Rounded with a 20px radius. Has a subtle shadow rgba(0,0,0,0.25) 0px 1px 2px 0px. Uses 4px vertical and 28px horizontal padding, with gelica font, 20px, weight 400.

### Elevated Card

**Role:** Content container, feature display

Used for grouping related content, such as features or testimonials. Canvas Parchment background with 12px border radius. Features a soft, distant shadow: rgba(0, 0, 0, 0.06) 0px 2px 20px 0px. Internal padding is 24px top, 0px horizontal, 16px bottom.

### Navigation Link

**Role:** Primary navigation item

Links within the header or footer navigation. Uses Geist font at 18px, weight 400, in Deep Graphite. Underlined on hover or active state with a 1px Canvas Parchment border top, and a 2px Deep Graphite border bottom when hover/active. Minimal padding.

## Do's and Don'ts

### Do

- Use Canvas Parchment (#fdfbf9) as the dominant background color for all page sections and elevated surfaces.
- Apply the gelica font for all headings and prominent UI text (e.g., call to action buttons), embracing its playful, handwritten character.
- Employ rounded corners with a 12px radius for cards and containers, and a 20px radius for interactive elements like buttons.
- Introduce color selectively for emphasis, using Playful Red (#ce500a), Sky Blue (#3b82f6), Bubblegum Pink (#ff66cf), or Grass Green (#22c55e) for highlight text or decorative borders, never as primary backgrounds.
- Maintain comfortable spacing: 12px for small element gaps, 32px for card padding, and 64px for vertical section separation.
- Use a subtle soft shadow (rgba(0,0,0,0.06) 0px 2px 20px 0px) to give cards a gentle lift, avoiding heavy or stark elevation.
- For primary calls to action, use the Pill Ghost Button style with a Deep Graphite (#171717) stroke and text on the Canvas Parchment background.

### Don't

- Avoid using highly saturated brand colors as large background fills; they are intended for accents and highlights.
- Do not use sharp 0px corners on any UI elements; all corners should have some degree of rounding (minimum 2px).
- Refrain from heavy, multi-layered shadows; the design embraces a light, gentle elevation with a single, soft shadow.
- Do not use generic system fonts; always prioritize gelica for display and Geist for functional text.
- Avoid dense, information-heavy layouts; maintain ample white space and comfortable element spacing.
- Do not introduce strong, solid border colors unless they are part of a deliberate accent or interactive state (e.g. outline buttons).

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.06) 0px 2px 20px 0px`
- **Shadow 2:** `rgba(0, 0, 0, 0.25) 0px 1px 2px 0px`

## Imagery

Imagery primarily features stylized 3D product renders of SuperrBook notebooks with playful, illustrated stickers. The product shots are often cropped tightly or presented from an angle, showcasing the physical object with a sense of tactility. Illustrations are flat, geometric, and brand-colored, often appearing as small, whimsical floating elements or in sticker form on the product. Icons are mostly outlined, with a moderate stroke weight, carrying the brand's cheerful persona. The overall role of imagery is to be decorative and atmospheric, highlighting the product in an imaginative, content-rich way without overwhelming the UI, maintaining a text-dominant density.

## Layout

The page uses a full-bleed layout, allowing elements to span the entire viewport width, but content is often contained within an implicit central column, especially for text blocks. The hero section features a large, product illustration on the right, balanced by a significant headline and subtext on the left, creating an asymmetric but balanced composition. Sections follow a consistent vertical rhythm, often alternating between a main content block and a full-bleed decorative element (like the notebooks). Content is typically arranged in left-aligned stacks or two-column text-left/image-right patterns. There is no explicit grid for cards on the initial screen, but subsequent sections imply a flexible grid for features. Navigation is a minimal top-bar, sticky header design with a single interactive icon and a ghost button.

## Similar Brands

- **Notion** — Uses a similar warm off-white canvas, relies on a clean sans-serif for body text, and employs subtle shadows for component elevation.
- **Basecamp** — Employs a friendly, comfortable aesthetic with ample whitespace, a warm neutral background, and simple, approachable typography.
- **Paper by FiftyThree (old branding)** — Known for a skeuomorphic 'notebook' feel, natural textures, and a light, spacious layout that makes digital feel analogue and creative.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-parchment: #fdfbf9;
  --color-deep-graphite: #171717;
  --color-soft-black: #2b1a07;
  --color-jet-black: #000000;
  --color-warm-gray-shadow: #bebcbb;
  --color-cheeky-orange: #ff6f1e;
  --color-playful-red: #ce500a;
  --color-sky-blue: #3b82f6;
  --color-bubblegum-pink: #ff66cf;
  --color-grass-green: #22c55e;
  --font-gelica: 'gelica', Comic Sans MS (as a last resort), or a custom script font like 'Caveat' or 'Gochi Hand' if 'gelica' is unavailable.;
  --font-geist: 'Geist', Inter, Figtree, or General Sans.;
  --text-caption: 16px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 18px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --tracking-subheading: 0px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0px;
  --text-heading: 46px;
  --leading-heading: 1.2;
  --tracking-heading: 0px;
  --text-display: 104px;
  --leading-display: 1.08;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-85: 85px;
  --spacing-89: 89px;
  --spacing-90: 90px;
  --spacing-116: 116px;
  --radius-tags: 56px;
  --radius-cards: 12px;
  --radius-avatar: 9999px;
  --radius-fields: 8px;
  --radius-buttons: 20px;
  --radius-default: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.06) 0px 2px 20px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-parchment: #fdfbf9;
  --color-deep-graphite: #171717;
  --color-soft-black: #2b1a07;
  --color-jet-black: #000000;
  --color-warm-gray-shadow: #bebcbb;
  --color-cheeky-orange: #ff6f1e;
  --color-playful-red: #ce500a;
  --color-sky-blue: #3b82f6;
  --color-bubblegum-pink: #ff66cf;
  --color-grass-green: #22c55e;
  --font-gelica: 'gelica', Comic Sans MS (as a last resort), or a custom script font like 'Caveat' or 'Gochi Hand' if 'gelica' is unavailable.;
  --font-geist: 'Geist', Inter, Figtree, or General Sans.;
  --text-caption: 16px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 18px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --tracking-subheading: 0px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0px;
  --text-heading: 46px;
  --leading-heading: 1.2;
  --tracking-heading: 0px;
  --text-display: 104px;
  --leading-display: 1.08;
  --tracking-display: 0px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-85: 85px;
  --spacing-89: 89px;
  --spacing-90: 90px;
  --spacing-116: 116px;
  --radius-tags: 56px;
  --radius-cards: 12px;
  --radius-avatar: 9999px;
  --radius-fields: 8px;
  --radius-buttons: 20px;
  --radius-default: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.06) 0px 2px 20px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
}
```
