---
version: alpha
name: "Neon"
description: "The design feels like a high-end server room after dark — a pure black void where information glows. A strict monochrome palette of pure black (#000000) and white (#ffffff) creates maximum contrast, ensuring text and UI are starkly legible. All visual energy comes from a single, electric green (#34d59a) that mimics terminal output and data visualizations, used exclusively for accents and decorative, code-like background graphics. The system achieves depth not with shadows but with subtle, layered near-black surfaces. A unique tension exists between the pill-shaped buttons and the sharp, 4px corners of all other UI containers."
theme: "dark"
industry: "devtools"
source_url: "https://neon.tech"
refero_style_id: "cc38369a-41e3-4bcd-b619-230ccffe7e8e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929029950-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775929029950-thumb.jpg"
extracted_at: "2026-04-11T17:38:19.074Z"
---

# Neon — Style Reference

> Server Room After Dark. A deep black environment where data and interactions are the only sources of light.

**Theme:** dark

**Industry:** devtools

The design feels like a high-end server room after dark — a pure black void where information glows. A strict monochrome palette of pure black (#000000) and white (#ffffff) creates maximum contrast, ensuring text and UI are starkly legible. All visual energy comes from a single, electric green (#34d59a) that mimics terminal output and data visualizations, used exclusively for accents and decorative, code-like background graphics. The system achieves depth not with shadows but with subtle, layered near-black surfaces. A unique tension exists between the pill-shaped buttons and the sharp, 4px corners of all other UI containers.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Neon Glow | #34d59a | `--color-neon-glow` | Key brand accent, active state indicators, data visualizations — injects a vibrant, code-like energy. |
| Neon Muted | #285d49 | `--color-neon-muted` | Subtle background tones in visualizations, less prominent brand elements. |
| Scanline Fade | #39a57d | `--color-scanline-fade` | Special effect for highlighting code or UI elements, mimicking a terminal scanline. |
| System Warning | #ff3621 | `--color-system-warning` | Used sparingly for icons or highlights requiring urgent attention. |
| Whiteout | #ffffff | `--color-whiteout` | Primary text, primary CTA button backgrounds, icons. |
| Ash | #797d86 | `--color-ash` | Secondary text, descriptive copy, inactive navigation links. |
| Pewter | #94979 | `--color-pewter` | Tertiary text, metadata, placeholder text. |
| Cloud | #c9cbcf | `--color-cloud` | Hover states on dark elements, subtle highlights. |
| Graphite Light | #303236 | `--color-graphite-light` | Borders, dividers, subtle UI structure. |
| Graphite | #242628 | `--color-graphite` | Secondary surfaces floating on the background. |
| Graphite Deep | #151617 | `--color-graphite-deep` | Card backgrounds, code block surfaces. |
| Depth | #0a0a0b | `--color-depth` | The darkest surface color before pure black, for subtle elevation. |
| Blackout | #000000 | `--color-blackout` | The absolute page background. |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 10px, 12px, 13px, 14px, 15px, 16px, 18px, 20px, 24px, 28px, 32px, 40px, 44px, 48px, 60px, 80px
- **Line heights:** 1.00, 1.13, 1.25, 1.38, 1.50
- **Letter spacing:** Tight negative tracking on all display and heading sizes (-3.2px at 80px, -1.2px at 48px), becoming normal at body copy sizes.
- **Role:** Headlines and primary marketing copy. Its clean, neutral geometry provides high readability, contrasting with the more stylized monospaced font.

### GeistMono

- **Token:** `--font-geistmono`
- **Substitute:** Fira Code, Source Code Pro
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 14px, 16px, 18px, 20px
- **Line heights:** 1.00, 1.13, 1.38, 1.50, 1.65
- **Letter spacing:** Slight negative tracking enhances density in UI contexts (-0.7px at 14px, -0.43px at 16px).
- **Role:** Code snippets, UI labels, and data displays. Its monospaced form adds a technical, typewriter-like precision, reinforcing the developer-centric identity.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | -0.7px | `--text-caption` |
| body-sm | 14px | 1.5 | -0.7px | `--text-body-sm` |
| body | 16px | 1.5 | -0.43px | `--text-body` |
| subheading | 18px | 1.38 | -0.36px | `--text-subheading` |
| heading-sm | 24px | 1.25 | -0.24px | `--text-heading-sm` |
| heading | 32px | 1.25 | -0.64px | `--text-heading` |
| heading-lg | 48px | 1.13 | -1.2px | `--text-heading-lg` |
| display | 80px | 1 | -3.2px | `--text-display` |

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
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-92 | 92px | `--spacing-92` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-168 | 168px | `--spacing-168` |
| spacing-195 | 195px | `--spacing-195` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-240 | 240px | `--spacing-240` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 4px |
| inputs | 4px |
| buttons | 9999px |
| containers | 4px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.4) 0px 8px 20px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 96-128px |
| cardPadding | 24px |
| elementGap | 8-16px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Terminal Code Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Navigation List

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Pill Button

**Role:** The main call-to-action, e.g., 'Get started', 'Sign up'.

A pill-shaped button with a Whiteout (#ffffff) background and Graphite Deep (#151617) text. Uses Inter font. Padding is H: 28px, V: 12px. Radius is 9999px.

### Ghost Pill Button

**Role:** Secondary actions, e.g., 'Read the docs', 'Log in'.

A pill-shaped button with a transparent background, Whiteout (#ffffff) text, and a 1px solid border in Graphite Light (#303236). Uses Inter font. Padding is H: 18px, V: 12px. Radius is 9999px.

### Feature List Item

**Role:** Bulleted items in feature sections.

Whiteout (#ffffff) text using Inter. Preceded by a small dot or icon colored with Neon Glow (#34d59a).

### Navigation Link

**Role:** Links in the main site header.

Text in Ash (#797d86) using Inter font. On hover or active state, text becomes Whiteout (#ffffff).

### Tag Badge

**Role:** Small informational tags, like 'A DATABRICKS COMPANY'.

Small, all-caps text using GeistMono in Ash (#797d86) or a similar gray. Often preceded by a Neon Glow (#34d59a) icon or symbol.

### Announcement Bar

**Role:** A persistent top bar for site-wide announcements.

Full-width bar with a Blackout (#000000) background. Text uses Inter font in a legible color like Whiteout (#ffffff) or Neon Glow (#34d59a).

### Logo Bar

**Role:** A section displaying logos of partner or client companies.

A row of logos rendered in a monochrome Ash (#797d86) or Pewter (#94979e) color on a Blackout (#000000) background.

## Do's and Don'ts

### Do

- Use pure Blackout (#000000) for all main section backgrounds.
- Reserve Neon Glow (#34d59a) for interactive highlights, data visualizations, and small decorative accents only.
- Employ the Whiteout (#ffffff) pill button for all primary calls-to-action.
- Use GeistMono for all code snippets, terminal simulations, and compact UI labels.
- Apply tight negative letter-spacing (-1.2px or more) to all headlines 48px and larger.
- Achieve depth by layering near-black surfaces (e.g., #151617 on #000000), not with box-shadows.
- Maintain a strict dichotomy of shapes: 9999px radius for buttons, 4px for all other containers.

### Don't

- Don't use gradients or background colors on main page sections.
- Don't use traditional box-shadows for elevation.
- Don't use Neon Glow (#34d59a) for body copy or headlines.
- Don't use saturated colors other than the primary brand green and the occasional red alert accent.
- Don't mix Inter and GeistMono within the same sentence or headline.
- Don't use rounded corners larger than 4px on cards, code blocks, or input fields.
- Don't create buttons that aren't pill-shaped.

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.4) 0px 8px 20px 0px`

## Imagery

Visuals are exclusively abstract, generative graphics resembling data streams, server activity, or glitch art. Composed of thin vertical lines in Neon Glow (#34d59a) and other muted tones, they serve as atmospheric backdrops rather than informational content. Product visuals are limited to stylized screenshots of terminal windows and code blocks, treated as UI components. Photography and traditional illustrations are absent. This text-and-abstract-graphic approach creates a purely digital, code-native environment.

## Layout

The page structure is full-bleed black, creating an immersive, infinite canvas. A centered headline over an abstract data-viz graphic defines the hero. Below the hero, content is organized within a centered max-width container (approx. 1200px), creating focus. Sections flow seamlessly into one another without visual dividers, relying on generous vertical spacing (96-128px) to create rhythm. Content is arranged in simple, symmetrical layouts: centered stacks for headlines, two-column grids for feature lists, and multi-column grids for logos. A sticky header provides persistent navigation.

## Similar Brands

- **Vercel** — Identical developer focus with a black/white monochrome palette, single accent color, and use of Inter font.
- **Linear** — Shares a pristine, high-contrast dark UI, minimalist aesthetic, and sharp focus on typography.
- **GitHub** — Similar dark-mode theming, developer-centric tooling aesthetic, and heavy reliance on monospaced fonts for identity.
- **Replit** — Also uses a dark, code-focused environment with vibrant color accents to appeal to a developer audience.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-neon-glow: #34d59a;
  --color-neon-muted: #285d49;
  --color-scanline-fade: #39a57d;
  --color-system-warning: #ff3621;
  --color-whiteout: #ffffff;
  --color-ash: #797d86;
  --color-pewter: #94979;
  --color-cloud: #c9cbcf;
  --color-graphite-light: #303236;
  --color-graphite: #242628;
  --color-graphite-deep: #151617;
  --color-depth: #0a0a0b;
  --color-blackout: #000000;
  --font-inter: 'Inter', Inter;
  --font-geistmono: 'GeistMono', Fira Code, Source Code Pro;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.7px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.7px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.43px;
  --text-subheading: 18px;
  --leading-subheading: 1.38;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.64px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -1.2px;
  --text-display: 80px;
  --leading-display: 1;
  --tracking-display: -3.2px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-92: 92px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-168: 168px;
  --spacing-195: 195px;
  --spacing-200: 200px;
  --spacing-240: 240px;
  --radius-cards: 4px;
  --radius-inputs: 4px;
  --radius-buttons: 9999px;
  --radius-containers: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.4) 0px 8px 20px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-neon-glow: #34d59a;
  --color-neon-muted: #285d49;
  --color-scanline-fade: #39a57d;
  --color-system-warning: #ff3621;
  --color-whiteout: #ffffff;
  --color-ash: #797d86;
  --color-pewter: #94979;
  --color-cloud: #c9cbcf;
  --color-graphite-light: #303236;
  --color-graphite: #242628;
  --color-graphite-deep: #151617;
  --color-depth: #0a0a0b;
  --color-blackout: #000000;
  --font-inter: 'Inter', Inter;
  --font-geistmono: 'GeistMono', Fira Code, Source Code Pro;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.7px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.7px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.43px;
  --text-subheading: 18px;
  --leading-subheading: 1.38;
  --tracking-subheading: -0.36px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.64px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -1.2px;
  --text-display: 80px;
  --leading-display: 1;
  --tracking-display: -3.2px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-92: 92px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-168: 168px;
  --spacing-195: 195px;
  --spacing-200: 200px;
  --spacing-240: 240px;
  --radius-cards: 4px;
  --radius-inputs: 4px;
  --radius-buttons: 9999px;
  --radius-containers: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.4) 0px 8px 20px 0px;
}
```
