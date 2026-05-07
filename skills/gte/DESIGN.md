---
version: alpha
name: "GTE"
description: "GTE embodies a stark, high-contrast digital trading floor: deep backgrounds meet bright surfaces and crisp typography. A single vibrant orange accent serves as the primary call to action, cutting through the monochrome with functional urgency. The design prioritizes clear information hierarchy and lightweight components, reflecting efficiency and speed without heavy ornamentation."
theme: "mixed"
industry: "fintech"
source_url: "https://www.gte.xyz"
refero_style_id: "5d273906-0110-48cf-99cd-63a72eb9c586"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508598341-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508598341-thumb.jpg"
extracted_at: "2026-04-30T00:23:43.987Z"
---

# GTE — Style Reference

> High-contrast digital trading floor.

**Theme:** mixed

**Industry:** fintech

GTE embodies a stark, high-contrast digital trading floor: deep backgrounds meet bright surfaces and crisp typography. A single vibrant orange accent serves as the primary call to action, cutting through the monochrome with functional urgency. The design prioritizes clear information hierarchy and lightweight components, reflecting efficiency and speed without heavy ornamentation.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Carbon | #09090b | `--color-carbon` | Deep background for dark sections, card surfaces, and primary text in light-on-dark contexts |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text color in light mode, prominent borders, and icons |
| Ash | #18181b | `--color-ash` | Secondary dark card surfaces and subtle borders in dark mode |
| Polar White | #ffffff | `--color-polar-white` | Primary page canvas for light sections, text on dark backgrounds, and active state highlights |
| Fog | #ebebeb | `--color-fog` | Subtle light card surfaces and elevated sections in light mode |
| Parchment | #e5e7eb | `--color-parchment` | Secondary light card backgrounds and subtle divider fill colors |
| Steel | #71717a | `--color-steel` | Muted helper text and subtle borders in light mode |
| Stone Grey | #a1a1aa | `--color-stone-grey` | Muted text, placeholder text, and inactive icon fills |
| Ghost | #d4d4d8 | `--color-ghost` | Lightest background for dividers or subtle UI elements in light mode |
| Turbo Orange | #ff7817 | `--color-turbo-orange` | Primary call-to-action button background, interactive accents, and functional highlights. Its vivid presence signals action and importance |

## Tokens — Typography

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Role:** Smallest UI labels and utility text, defaulting to system sans-serif for optimal legibility at compact sizes.

### Ogg Text Light

- **Token:** `--font-ogg-text-light`
- **Substitute:** serif system font
- **Weights:** 300, 400
- **Sizes:** 28px, 40px, 80px
- **Line heights:** 0.95, 1.00, 1.10, 1.20
- **Letter spacing:** -0.02em
- **OpenType features:** "blwf", "cv03", "cv04", "cv09", "cv11"
- **Role:** Display and large headings. The light weight and calligraphic features ('blwf', 'cv03', 'cv04', 'cv09', 'cv11') convey a refined, authoritative tone, balancing the technical subject matter with an artisanal feel.

### PP Supply Mono

- **Token:** `--font-pp-supply-mono`
- **Substitute:** monospace system font
- **Weights:** 400
- **Sizes:** 18px
- **Line heights:** 1.20
- **Letter spacing:** -0.04em
- **Role:** Subheadings, navigational links, and emphasized body text. Its monospaced nature evokes a programmatic, precise feel, reinforcing the core product identity.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px, 18px
- **Line heights:** 1.00, 1.20, 1.30
- **Letter spacing:** -0.0200em
- **Role:** Body copy, input fields, and smaller informational text. Its clean, utilitarian nature ensures readability for dense information.

### PP Supply Mono Regular

- **Token:** `--font-pp-supply-mono-regular`
- **Weights:** 400
- **Sizes:** 14px, 16px
- **Line heights:** 1, 1.2, 1.4
- **Letter spacing:** -0.04, -0.02
- **Role:** PP Supply Mono Regular — detected in extracted data but not described by AI

### PP Supply Mono Medium

- **Token:** `--font-pp-supply-mono-medium`
- **Weights:** 400, 500
- **Sizes:** 14px, 16px, 20px
- **Line heights:** 0.75, 1.1, 1.2, 1.4
- **Letter spacing:** -0.04, -0.02
- **Role:** PP Supply Mono Medium — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | — | `--text-caption` |
| body-sm | 14px | 1.2 | -0.48px | `--text-body-sm` |
| body | 16px | 1.2 | -0.32px | `--text-body` |
| body-lg | 18px | 1.2 | -0.36px | `--text-body-lg` |
| subheading | 20px | 1.4 | -0.4px | `--text-subheading` |
| heading | 28px | 1.2 | -0.56px | `--text-heading` |
| heading-lg | 40px | 1.1 | -0.8px | `--text-heading-lg` |
| display | 80px | 0.95 | -1.6px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-240 | 240px | `--spacing-240` |
| spacing-260 | 260px | `--spacing-260` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 600px |
| links | 56px |
| small | 4px |
| inputs | 8px |
| buttons | 8px |
| default | 12px |
| largerCards | 24px |
| cookieBanner | 28px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 16px |
| elementGap | 10px |

## Components

### Primary Action Button

**Role:** Call to action.

Filled button with Turbo Orange background (#ff7817) and Midnight Ink text (#000000). Features 8px border-radius and 16px horizontal padding. Text uses Inter font at 16px, weight 400.

### Dark Card (Level 1)

**Role:** Container for content.

Uses Carbon (#09090b) as background, with 12px border-radius. Inset white shadow: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset to denote interactivity/depth.

### Light Card (Level 1)

**Role:** Container for content.

Uses Fog (#ebebeb) as background, with 12px border-radius. No distinct shadow for elevation; relies on background color contrast.

### Dark Card (Level 2)

**Role:** Container for content, elevated.

Uses Ash (#18181b) as background, with 24px border-radius. No distinct shadow for elevation; relies on background color contrast.

### Cookie Banner Card

**Role:** System feedback or disclaimer.

Large, dark surface using Carbon (#09090b) with a prominent 28px border-radius. Acts as a modal or persistent footer element.

### Text Input (Dark)

**Role:** User input.

Translucent background rgba(255, 255, 255, 0.1) with Polar White (#ffffff) text and border. Features 8px border-radius and 10px padding.

### Accent Input (Orange Fill)

**Role:** Submit or action input.

Uses Turbo Orange (#ff7817) background with Carbon (#09090b) text and border. Features 8px border-radius and 10px padding.

### Feature Box (Light)

**Role:** Informational container.

Parchment (#e5e7eb) background with 12px border-radius. Serves as a muted background for illustrative content or feature descriptions.

## Do's and Don'ts

### Do

- Use Turbo Orange (#ff7817) exclusively for primary calls to action and critical interactive elements.
- Maintain a high contrast ratio between text and background, adhering to AAA accessibility standards where possible (e.g., Midnight Ink #000000 on Polar White #ffffff; Polar White #ffffff on Carbon #09090b).
- Apply 12px border-radius for most cards and default containers, with 8px for interactive elements like buttons and inputs, and 24px for visually distinct, larger cards.
- Utilize PP Supply Mono for headings and navigational elements to emphasize a technical, precise tone.
- Employ Polar White (#ffffff) and Carbon (#09090b) as dominant background colors, defining distinct light and dark sections or components.
- Keep element spacing consistent with increments of 10px and padding with 16px to maintain a compact yet readable density.
- Ensure large display headings use Ogg Text Light at weight 300 to create an atmosphere of restrained authority with unique typographic flourishes.

### Don't

- Avoid using multiple chromatic colors; limit accents strictly to Turbo Orange (#ff7817) unless for semantic status (e.g., success/error not present in data).
- Do not introduce heavy shadows or gradients on surfaces; rely on distinct background colors and subtle inset shadows (rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset) for depth.
- Refrain from using overly decorative or illustrative elements that detract from the stark, functional UI.
- Do not deviate from the established type scale; maintain consistent font families, weights, and letter spacing for their defined roles.
- Avoid large amounts of whitespace around content sections; the design favors a 'compact' density.
- Do not use generic sans-serif fonts where Ogg Text Light, PP Supply Mono, or Inter are specified, as they define the brand's unique typographic voice.
- Do not apply large, rounded corners globally; save specific larger radii for distinct components like cookie banners (28px) or pill shapes (600px).

## Elevation

- **Shadow 1:** `rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset`

## Imagery

The visual language combines abstract 3D renders with illustrative product screenshots. Photography is absent. Abstract graphics feature metallic or coin-like objects with a warm, amber glow against dark backgrounds, suggesting value and motion. These visuals are primarily decorative and atmospheric, full-bleed in hero sections. Product screenshots are contained within light cards, using a monochromatic outlined style for UI elements. Icons are minimal, either solid or outlined, typically monochromatic, with PP Supply Mono font often integrated into their design. The overall density is image-heavy in hero sections, transitioning to text-dominant with illustrative support in feature sections.

## Layout

The page primarily uses a full-bleed structure for hero sections, which feature a large, centered headline over an immersive visual, then transitions to a max-width contained layout (implied around 1200px based on content blocks). Sections alternate between dark backgrounds (Carbon #09090b) and light backgrounds (Polar White #ffffff or Parchment #e5e7eb) to create distinct visual rhythm. Content often arranges in two-column layouts, frequently with text on one side and a product illustration or card on the other. Card grids are used for presenting features. The navigation is a sticky top bar, minimal in its presence, with a strong Turbo Orange button for 'Launch App'.

## Similar Brands

- **Stripe** — Shared use of a clean, high-contrast UI with a single vibrant accent color against a largely monochrome palette for functional elements.
- **Linear** — Similar emphasis on compact information density, precise typography, and a functional aesthetic, often with alternating light and dark sections.
- **Coinbase** — Adoption of a distinct, premium monospaced font for code-like precision, and a focus on clarity through strong typographic hierarchy in a fintech context.
- **Vercel** — Utilization of dark-mode dominant UI patterns, crisp edges, and a strategic use of color for status and action rather than decoration.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-carbon: #09090b;
  --color-midnight-ink: #000000;
  --color-ash: #18181b;
  --color-polar-white: #ffffff;
  --color-fog: #ebebeb;
  --color-parchment: #e5e7eb;
  --color-steel: #71717a;
  --color-stone-grey: #a1a1aa;
  --color-ghost: #d4d4d8;
  --color-turbo-orange: #ff7817;
  --font-sans-serif: 'sans-serif', Arial;
  --font-ogg-text-light: 'Ogg Text Light', serif system font;
  --font-pp-supply-mono: 'PP Supply Mono', monospace system font;
  --font-inter: 'Inter', Inter;
  --font-pp-supply-mono-regular: 'PP Supply Mono Regular', ui-sans-serif, system-ui, sans-serif;
  --font-pp-supply-mono-medium: 'PP Supply Mono Medium', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.2;
  --tracking-body-sm: -0.48px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.32px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: -0.36px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.4px;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --tracking-heading: -0.56px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.8px;
  --text-display: 80px;
  --leading-display: 0.95;
  --tracking-display: -1.6px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-240: 240px;
  --spacing-260: 260px;
  --radius-pill: 600px;
  --radius-links: 56px;
  --radius-small: 4px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --radius-default: 12px;
  --radius-largercards: 24px;
  --radius-cookiebanner: 28px;
  --shadow-xl: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
```

### Tailwind v4

```css
@theme {
  --color-carbon: #09090b;
  --color-midnight-ink: #000000;
  --color-ash: #18181b;
  --color-polar-white: #ffffff;
  --color-fog: #ebebeb;
  --color-parchment: #e5e7eb;
  --color-steel: #71717a;
  --color-stone-grey: #a1a1aa;
  --color-ghost: #d4d4d8;
  --color-turbo-orange: #ff7817;
  --font-sans-serif: 'sans-serif', Arial;
  --font-ogg-text-light: 'Ogg Text Light', serif system font;
  --font-pp-supply-mono: 'PP Supply Mono', monospace system font;
  --font-inter: 'Inter', Inter;
  --font-pp-supply-mono-regular: 'PP Supply Mono Regular', ui-sans-serif, system-ui, sans-serif;
  --font-pp-supply-mono-medium: 'PP Supply Mono Medium', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.2;
  --tracking-body-sm: -0.48px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.32px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: -0.36px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.4px;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --tracking-heading: -0.56px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.8px;
  --text-display: 80px;
  --leading-display: 0.95;
  --tracking-display: -1.6px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-240: 240px;
  --spacing-260: 260px;
  --radius-pill: 600px;
  --radius-links: 56px;
  --radius-small: 4px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --radius-default: 12px;
  --radius-largercards: 24px;
  --radius-cookiebanner: 28px;
  --shadow-xl: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
```
