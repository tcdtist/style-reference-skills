---
version: alpha
name: "Vimeo"
description: "Vimeo's design system evokes a digital atelier: functional, content-focused, and subtly expressive. A dominant dark gray canvas anchors the experience, punctuated by a vivid, cool teal accent that signifies interactivity and brand presence. Typography is compact and precise, establishing clear hierarchy without visual fanfare. Components are lightweight with softened corners, relying on shifts in neutral tones rather than heavy shadows or borders."
theme: "light"
industry: "media"
source_url: "https://vimeo.com"
refero_style_id: "be6c7488-9cea-43db-bb28-2606f53ade14"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510459753-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510459753-thumb.jpg"
extracted_at: "2026-04-30T00:54:54.162Z"
---

# Vimeo — Style Reference

> Digital Atelier

**Theme:** light

**Industry:** media

Vimeo's design system evokes a digital atelier: functional, content-focused, and subtly expressive. A dominant dark gray canvas anchors the experience, punctuated by a vivid, cool teal accent that signifies interactivity and brand presence. Typography is compact and precise, establishing clear hierarchy without visual fanfare. Components are lightweight with softened corners, relying on shifts in neutral tones rather than heavy shadows or borders.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Graphite | #141a20 | `--color-midnight-graphite` | Primary background, dark card surfaces, primary text for dark sections |
| Cloud Canvas | #fafcfd | `--color-cloud-canvas` | Page background, light card surfaces, secondary text for dark sections |
| Ash Gray | #23313b | `--color-ash-gray` | Muted text, subheadings, soft borders, footer text and backgrounds |
| Steel Gray | #3d4751 | `--color-steel-gray` | Body text, interactive link borders, subtle icon fills |
| Slate Blue | #4c5864 | `--color-slate-blue` | Navigation text, secondary body copy, disabled button text |
| Light Mist | #dfe4ea | `--color-light-mist` | Subtle background for UI elements, hover states on neutral surfaces |
| Cosmic Teal | #17d5ff | `--color-cosmic-teal` | Primary action buttons, active navigation indicators, badges, brand accents |
| Deep Teal | #13b1d4 | `--color-deep-teal` | Hover state for Cosmic Teal elements, deeper brand accents |
| Overlay Shadow | #000000 | `--color-overlay-shadow` | Text on very light backgrounds, specific button borders and icon fills |

## Tokens — Typography

### ABCRepro

- **Token:** `--font-abcrepro`
- **Substitute:** Inter
- **Weights:** 400, 500, 700
- **Sizes:** 10px, 12px, 13px, 14px, 16px, 18px, 19px, 20px, 24px, 32px, 40px, 72px
- **Line heights:** 1.00, 1.10, 1.14, 1.20, 1.30, 1.35, 1.40, 1.58
- **Letter spacing:** -0.0500em at 72px, -0.0400em at 40px, -0.0360em at 32px, -0.0300em at 24px and below
- **OpenType features:** "lnum" on
- **Role:** Primary typeface for all UI text, headings, and body copy. Its range of weights and optical sizing provides both headline impact and legibility for dense information.

### ABCReproMono

- **Token:** `--font-abcrepromono`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00
- **Letter spacing:** -0.0300em
- **OpenType features:** "lnum" on
- **Role:** Monospace typeface used sparingly for specific data displays or code snippets where character alignment is critical.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.4 | -0.03px | `--text-caption` |
| body | 14px | 1.4 | -0.03px | `--text-body` |
| subheading | 18px | 1.35 | -0.03px | `--text-subheading` |
| heading-sm | 24px | 1.2 | -0.03px | `--text-heading-sm` |
| heading | 32px | 1.14 | -0.036px | `--text-heading` |
| heading-lg | 40px | 1.1 | -0.04px | `--text-heading-lg` |
| display | 72px | 1 | -0.05px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-59 | 59px | `--spacing-59` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 9999px |
| cards | 12px |
| badges | 16px |
| inputs | 0px |
| buttons | 12px |
| default | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgb(85, 85, 85) 0px 0px 0px 10000px | `--shadow-xl` |
| xl-2 | rgb(34, 51, 34) 0px 0px 0px 10000px | `--shadow-xl-2` |
| xl-3 | rgb(17, 17, 17) 0px 0px 0px 10000px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 56px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Primary Action Button

**Role:** High-emphasis interactive element

Filled with Cosmic Teal (#17d5ff) background and Midnight Graphite (#141a20) text, using a 12px border-radius, 12px vertical padding on 16px horizontal padding. Prominently guides user action.

### Ghost Button

**Role:** Secondary action or navigation

Transparent background with Midnight Graphite (#141a20) text and border, using a 12px border-radius, 12px vertical padding on 16px horizontal padding. Offers interaction without demanding primary attention.

### Text Link Button

**Role:** Tertiary action or inline navigation

No explicit background or border. Uses Midnight Graphite (#141a20) text with 8px horizontal padding. Appears as a simple text link that is subtly interactive.

### Transparent Card

**Role:** Informational grouping on hero/dark sections.

Semi-transparent background at rgba(255, 255, 255, 0.6) with 12px border-radius and 24px padding. Used for containing content over larger background imagery.

### Light Surface Card

**Role:** Default informational grouping on light sections.

Solid Cloud Canvas (#fafcfd) background, 0px border-radius, with 56px top and bottom padding. Used for large content blocks.

### Dark Surface Card

**Role:** Default informational grouping on dark sections.

Solid Midnight Graphite (#141a20) background, 0px border-radius, with 56px top and bottom padding. Used for large content blocks.

### New Feature Badge

**Role:** Indicator for new features/content.

Cosmic Teal (#17d5ff) background with Deep Teal (#13b1d4) color text, 4px border-radius and minimal padding (1.5px vertical, 4px horizontal).

### Nav Button

**Role:** Top-level navigation item

Transparent background with Midnight Graphite (#000000) text and 8px padding. Used in the main navigation bar.

## Do's and Don'ts

### Do

- Use Cosmic Teal (#17d5ff) for primary call-to-action buttons to ensure immediate visibility and signify interactive elements.
- Employ Midnight Graphite (#141a20) as the default text color on light backgrounds and Cloud Canvas (#fafcfd) for text on dark backgrounds to ensure high contrast.
- Apply ABCRepro with a letter-spacing of -0.0500em to all display-level headings (72px) to enhance visual density and distinctiveness.
- Maintain a compact element spacing of 8px (elementGap) between inline components and form elements to create a dense, functional interface.
- Round corners of interactive elements such as buttons and cards to 12px, creating a friendly and approachable feel.
- Utilize Cloud Canvas (#fafcfd) as the universal base background for default page sections and light content areas.
- Ensure all numbers use the "lnum" font feature setting for consistent monospaced tabular figures.

### Don't

- Avoid using saturated colors other than Cosmic Teal or Deep Teal for primary interactive elements; color should primarily be used for brand distinction, not excessive decoration.
- Do not introduce heavy shadows or strong borders for cards; rely on shifts in background tone (e.g., Midnight Graphite, Cloud Canvas, Light Mist) or subtle transparency to define surface layers.
- Refrain from using more than two levels of text hierarchy within a single content block to prevent overwhelming the user; prioritize clarity with body, subheading, and heading roles.
- Do not use letter-spacing values more open than -0.0300em for body text; the system maintains a compact, precise typographic rhythm.
- Avoid arbitrary border radii; adhere to the 12px for cards and buttons, 16px for large badges, and 8px for smaller interactive elements.
- Do not use pure white (#FFFFFF) or pure black (#000000) for primary canvas or text unless specifically for contrast in isolated components (e.g., specific icons); always favor the nuanced neutrals like Cloud Canvas and Midnight Graphite.
- Do not create hero sections that are full-bleed white backgrounds; hero sections should leverage background imagery or dark neutral tones with strong typography.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Cloud Canvas | #fafcfd | Primary page background, base for light sections. |
| 1 | Midnight Graphite | #141a20 | Primary background for dark sections, elevated card surfaces within dark contexts. |
| 2 | Transparent Overlay | #ffffff99 | Informational cards or overlays on image-heavy backgrounds. |
| 3 | Light Mist | #dfe4ea | Subtle UI elements, neutral component backgrounds, hover states. |

## Elevation

- **Shadow 1:** `rgb(85, 85, 85) 0px 0px 0px 10000px`
- **Shadow 2:** `rgb(34, 51, 34) 0px 0px 0px 10000px`
- **Shadow 3:** `rgb(17, 17, 17) 0px 0px 0px 10000px`

## Imagery

The imagery strategy features high-resolution photography primarily focused on human interaction with digital devices, specifically hands typing on keyboards or using cameras. Product screenshots are integrated contextually. All visuals are contained within the layout, often appearing as large background elements in hero sections with dark overlays. There is an absence of abstract illustrations or 3D renders. Icons are minimal, predominantly line-based, and monochrome, integrating seamlessly into the UI rather than asserting strong visual identity.

## Layout

The page primarily uses a max-width contained layout, centering content at approximately 1200px. The hero section breaks this containment by featuring a full-bleed dark background with a large, centered headline and subtext. Sections alternate between light (Cloud Canvas) and dark (Midnight Graphite) backgrounds, creating a distinct vertical rhythm. Content is generally arranged in centered stacks or two-column text-left/image-right patterns, with emphasis on clear visual hierarchy. Spacing between sections is generous, around 56px. Navigation is a sticky top bar with minimal styling.

## Similar Brands

- **loom.com** — Shares a similar light background, compact typography, and a single vibrant blue accent color for primary actions.
- **webflow.com** — Employs a clean, feature-focused layout with alternating light and dark sections and a controlled use of brand color for interactive elements.
- **discord.com** — Exhibits a dark-dominant UI with a single vivid accent color to highlight interactive elements and brand identity.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-graphite: #141a20;
  --color-cloud-canvas: #fafcfd;
  --color-ash-gray: #23313b;
  --color-steel-gray: #3d4751;
  --color-slate-blue: #4c5864;
  --color-light-mist: #dfe4ea;
  --color-cosmic-teal: #17d5ff;
  --color-deep-teal: #13b1d4;
  --color-overlay-shadow: #000000;
  --font-abcrepro: 'ABCRepro', Inter;
  --font-abcrepromono: 'ABCReproMono', Space Mono;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: -0.03px;
  --text-body: 14px;
  --leading-body: 1.4;
  --tracking-body: -0.03px;
  --text-subheading: 18px;
  --leading-subheading: 1.35;
  --tracking-subheading: -0.03px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.03px;
  --text-heading: 32px;
  --leading-heading: 1.14;
  --tracking-heading: -0.036px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.04px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -0.05px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-59: 59px;
  --spacing-60: 60px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --radius-pill: 9999px;
  --radius-cards: 12px;
  --radius-badges: 16px;
  --radius-inputs: 0px;
  --radius-buttons: 12px;
  --radius-default: 8px;
  --shadow-xl: rgb(85, 85, 85) 0px 0px 0px 10000px;
  --shadow-xl-2: rgb(34, 51, 34) 0px 0px 0px 10000px;
  --shadow-xl-3: rgb(17, 17, 17) 0px 0px 0px 10000px;
  --surface-cloud-canvas: #fafcfd;
  --surface-midnight-graphite: #141a20;
  --surface-transparent-overlay: #ffffff99;
  --surface-light-mist: #dfe4ea;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-graphite: #141a20;
  --color-cloud-canvas: #fafcfd;
  --color-ash-gray: #23313b;
  --color-steel-gray: #3d4751;
  --color-slate-blue: #4c5864;
  --color-light-mist: #dfe4ea;
  --color-cosmic-teal: #17d5ff;
  --color-deep-teal: #13b1d4;
  --color-overlay-shadow: #000000;
  --font-abcrepro: 'ABCRepro', Inter;
  --font-abcrepromono: 'ABCReproMono', Space Mono;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: -0.03px;
  --text-body: 14px;
  --leading-body: 1.4;
  --tracking-body: -0.03px;
  --text-subheading: 18px;
  --leading-subheading: 1.35;
  --tracking-subheading: -0.03px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.03px;
  --text-heading: 32px;
  --leading-heading: 1.14;
  --tracking-heading: -0.036px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.04px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -0.05px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-59: 59px;
  --spacing-60: 60px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --radius-pill: 9999px;
  --radius-cards: 12px;
  --radius-badges: 16px;
  --radius-inputs: 0px;
  --radius-buttons: 12px;
  --radius-default: 8px;
  --shadow-xl: rgb(85, 85, 85) 0px 0px 0px 10000px;
  --shadow-xl-2: rgb(34, 51, 34) 0px 0px 0px 10000px;
  --shadow-xl-3: rgb(17, 17, 17) 0px 0px 0px 10000px;
  --surface-cloud-canvas: #fafcfd;
  --surface-midnight-graphite: #141a20;
  --surface-transparent-overlay: #ffffff99;
  --surface-light-mist: #dfe4ea;
}
```
