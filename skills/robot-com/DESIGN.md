---
version: alpha
name: "robot.com"
description: "robot.com employs a stark, high-contrast visual system that balances industrial-grade clarity with surprising moments of digital vibrancy. A predominantly achromatic palette of deep grays, crisp whites, and a single vivid yellow accent creates a no-nonsense, functional aesthetic. Typography is confident and compact, establishing an authoritative voice, while components feature generous rounded corners for approachability."
theme: "light"
industry: "ai"
source_url: "https://www.robot.com"
refero_style_id: "30dfffb4-ff6d-4128-b3e5-39046ba258f0"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508148190-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508148190-thumb.jpg"
extracted_at: "2026-04-30T00:16:16.942Z"
---

# robot.com — Style Reference

> Industrial clarity, digital spark.

**Theme:** light

**Industry:** ai

robot.com employs a stark, high-contrast visual system that balances industrial-grade clarity with surprising moments of digital vibrancy. A predominantly achromatic palette of deep grays, crisp whites, and a single vivid yellow accent creates a no-nonsense, functional aesthetic. Typography is confident and compact, establishing an authoritative voice, while components feature generous rounded corners for approachability.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Graphite | #262626 | `--color-midnight-graphite` | Primary text, deep surface backgrounds, strong borders — establishing a foundation of dark, serious tones |
| Pure Canvas | #ffffff | `--color-pure-canvas` | Page backgrounds, primary surface areas, crisp text on dark elements, clean borders |
| Buttered Toast | #f8f6f3 | `--color-buttered-toast` | Secondary surface backgrounds, subtle card fills, accent borders in lighter sections |
| Deepest Ink | #000000 | `--color-deepest-ink` | Solid button fills for ghost and secondary actions, SVG fills, ensuring maximum contrast |
| Subtle Gray | #727272 | `--color-subtle-gray` | Muted body text, helper text, subtle inactive borders |
| Card Shadow | #2d2d2d | `--color-card-shadow` | Slightly elevated card backgrounds, adding a subtle visual distinction atop darker surfaces |
| Dusty Lead | #8f8e8d | `--color-dusty-lead` | Fine print text, date/metadata fields, discreet decorative lines |
| Robot Yellow | #fff65d | `--color-robot-yellow` | Primary action backgrounds, highlight elements, card backgrounds — a powerful, vivid accent against neutrals |

## Tokens — Typography

### Yellix

- **Token:** `--font-yellix`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 10px, 12px, 14px, 15px, 16px, 18px, 24px, 32px, 38px, 41px, 52px, 72px, 100px
- **Line heights:** 0.96, 1.00, 1.06, 1.10, 1.16, 1.22, 1.25
- **Letter spacing:** -0.214em at 100px, -0.030em at 72px, -0.025em at 52px, -0.020em at 41px, -0.010em at 38px, normal at 14px and below.
- **OpenType features:** "ss01" on, "salt"
- **Role:** All textual content, from headlines to body copy and interface elements. Its compressed form factor and precise letter spacing (especially for larger sizes) contribute to the compact, authoritative feel, reinforcing a modern, technical brand identity. The 'ss01' and 'salt' features indicate specialized glyph treatments for a unique character.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.25 | — | `--text-caption` |
| body | 14px | 1.25 | — | `--text-body` |
| subheading | 18px | 1.25 | — | `--text-subheading` |
| heading-sm | 24px | 1.22 | — | `--text-heading-sm` |
| heading | 32px | 1.25 | — | `--text-heading` |
| heading-lg | 38px | 1.16 | -0.38px | `--text-heading-lg` |
| display | 100px | 0.96 | -21.4px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-173 | 173px | `--spacing-173` |
| spacing-300 | 300px | `--spacing-300` |

### Border Radius

| Element | Value |
| --- | --- |
| tag | 9999px |
| buttons | 30px |
| default | 24px |
| navItem | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 173px |
| cardPadding | 24px |
| elementGap | 4px |

## Components

### Primary Action Button

**Role:** Main call to action

Filled button with a vivid Robot Yellow background (#fff65d), text in Deepest Ink (#000000), and a large 30px border-radius, creating an approachable but striking interaction point.

### Ghost Action Button

**Role:** Secondary action or subtle navigation

Transparent background with a Pure Canvas (#ffffff) border and text, using a 24px border-radius. Padding is 19px vertical, 20px horizontal for a substantial but un-filled presence.

### Outline Text Button

**Role:** Tertiary navigation or interactive text

Completely transparent background, Pure Canvas (#ffffff) text and a thin 1px border. Border-radius is a sharp 4px, used for subtle inline actions.

### Dark Card

**Role:** Content container on light backgrounds

Uses Midnight Graphite (#262626) as background with a 24px border-radius and 24px padding. Text elements within are typically Pure Canvas.

### Light Card

**Role:** Content container on light backgrounds

Uses Buttered Toast (#f8f6f3) as background with a 24px border-radius and 24px padding. Text elements within are typically Midnight Graphite.

### Trustee Logo Card

**Role:** Container for partner logos

Uses Buttered Toast (#f8f6f3) background with a 24px border-radius, but no internal padding for logos, which are expected to manage their own spacing.

### Media Play Button

**Role:** Overlay for video content

Circular button with a 9999px border-radius (pill shape), a transparent background with 10% white overlay (rgba(255, 255, 255, 0.1)), and Pure Canvas (#ffffff) text and icons.

### Nav Dropdown

**Role:** Navigation menu item container

Transparent background, no border-radius. Items maintain a 5px right margin and 8px vertical padding for each link.

## Do's and Don'ts

### Do

- Use Midnight Graphite (#262626) for primary text and major background sections to maintain seriousness.
- Introduce Robot Yellow (#fff65d) solely for primary calls to action or key highlight elements to maximize impact and distinctiveness.
- Apply a 24px border-radius generously to cards and most interactive elements for a consistent, approachable softness.
- Implement the Yellix font with its custom negative letter-spacing for larger headlines to produce a compact, modern text block.
- Ensure generous use of Pure Canvas (#ffffff) as a page background and for text on dark surfaces to preserve high contrast and readability.
- Utilize 4px as the foundational unit for all internal element spacing, ensuring a dense but consistent layout.
- Employ the Pill Button radius (9999px) exclusively for small, distinct interactive elements like media controls or tags.

### Don't

- Do not use Robot Yellow (#fff65d) for decorative purposes or text that is not a primary action, to avoid diluting its impact.
- Avoid arbitrary border-radius values; stick to 24px for cards/buttons, 30px for primary buttons, 4px for fine details, and 9999px for pills.
- Do not introduce additional chromatic colors; the visual system relies on the interplay of neutrals and the single Robot Yellow accent.
- Never use generic system fonts; Yellix font is critical for branding, ensure 'ss01' and 'salt' features are enabled.
- Refrain from heavy drop shadows; the design system favors flat, high-contrast surfaces and minimal elevation.
- Do not use letter-spacing values other than those specified for Yellix, as tracking is a key aspect of its compact look.
- Avoid cluttering the layout; maintain a clear hierarchy with distinct backgrounds and spacing, reflecting the 'compact' density.

## Imagery

This design system uses a blend of product photography and abstract graphical elements. Product imagery features tight crops of robots, often against pure white or neutral gray backgrounds, emphasizing the object itself without lifestyle context. Illustrations appear to be filled, geometric, and monochrome, often using the brand's key neutrals. Icons are outlined, exhibiting a moderate stroke weight. The primary role of imagery is product showcase and explanatory content, presented with a high degree of visual density in some sections (e.g., logo grids) but otherwise balanced with text.

## Layout

The page structure is primarily max-width contained and centered, allowing for expansive hero sections that can be full-bleed video or large product renders. There's a clear section rhythm with alternating dark and light background bands for content blocks. Content arrangement often features two-column text-left/image-right or centered stacks. Card grids are prevalent for displaying features or partners. The density is generally compact, allowing information-rich blocks, but with consistent vertical spacing between sections. Navigation is a sticky top bar with a simple button for 'Talk to sales'.

## Similar Brands

- **Boston Dynamics** — High-tech robotics focus with stark imagery and functional UI.
- **OpenAI** — Minimalist aesthetic, strong typography, and a single accent color for highlighting key interactions.
- **Cruise Automation** — Emphasis on product showcase, with a clean interface and strong contrast, similar font characteristics.
- **Palantir** — Data-heavy, high-contrast interfaces with a serious, technical visual tone and compact type.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-graphite: #262626;
  --color-pure-canvas: #ffffff;
  --color-buttered-toast: #f8f6f3;
  --color-deepest-ink: #000000;
  --color-subtle-gray: #727272;
  --color-card-shadow: #2d2d2d;
  --color-dusty-lead: #8f8e8d;
  --color-robot-yellow: #fff65d;
  --font-yellix: 'Yellix', Inter;
  --text-caption: 10px;
  --leading-caption: 1.25;
  --text-body: 14px;
  --leading-body: 1.25;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.22;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --text-heading-lg: 38px;
  --leading-heading-lg: 1.16;
  --tracking-heading-lg: -0.38px;
  --text-display: 100px;
  --leading-display: 0.96;
  --tracking-display: -21.4px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-173: 173px;
  --spacing-300: 300px;
  --radius-tag: 9999px;
  --radius-buttons: 30px;
  --radius-default: 24px;
  --radius-navitem: 4px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-graphite: #262626;
  --color-pure-canvas: #ffffff;
  --color-buttered-toast: #f8f6f3;
  --color-deepest-ink: #000000;
  --color-subtle-gray: #727272;
  --color-card-shadow: #2d2d2d;
  --color-dusty-lead: #8f8e8d;
  --color-robot-yellow: #fff65d;
  --font-yellix: 'Yellix', Inter;
  --text-caption: 10px;
  --leading-caption: 1.25;
  --text-body: 14px;
  --leading-body: 1.25;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.22;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --text-heading-lg: 38px;
  --leading-heading-lg: 1.16;
  --tracking-heading-lg: -0.38px;
  --text-display: 100px;
  --leading-display: 0.96;
  --tracking-display: -21.4px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-173: 173px;
  --spacing-300: 300px;
  --radius-tag: 9999px;
  --radius-buttons: 30px;
  --radius-default: 24px;
  --radius-navitem: 4px;
}
```
