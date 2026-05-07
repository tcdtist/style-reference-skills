---
version: alpha
name: "Savee"
description: "Savee marries stark minimalism with playful accents, creating a high-contrast digital canvas for creative inspiration. The deep, inky black surfaces juxtaposed with crisp white typography establish immediate visual impact. A single, vibrant violet accent color is reserved exclusively for interactive elements like buttons, injecting energy into an otherwise monochrome environment, while generously rounded pill shapes add a soft, approachable counterpoint to the sharp text."
theme: "dark"
industry: "design"
source_url: "https://savee.it"
refero_style_id: "c6d8490d-e3f2-45c8-aebf-fe5f11daf116"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923983565-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923983565-thumb.jpg"
extracted_at: "2026-04-11T16:13:23.617Z"
---

# Savee — Style Reference

> Inked Canvas, Violet Spark. A high-contrast space where inspiration pops against deep monochrome.

**Theme:** dark

**Industry:** design

Savee marries stark minimalism with playful accents, creating a high-contrast digital canvas for creative inspiration. The deep, inky black surfaces juxtaposed with crisp white typography establish immediate visual impact. A single, vibrant violet accent color is reserved exclusively for interactive elements like buttons, injecting energy into an otherwise monochrome environment, while generously rounded pill shapes add a soft, approachable counterpoint to the sharp text.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #050505 | `--color-midnight-ink` | Primary background for pages and prominent sections. Text color for secondary content on light backgrounds. |
| Ghost White | #fdfdfd | `--color-ghost-white` | Primary text color on dark backgrounds, button text, and main surface colors for light components. |
| Parchment | #e5e5e5 | `--color-parchment` | Subtle borders and dividers for UI elements, providing delicate separation against lighter backgrounds. |
| Slate Mist | #d4d4d4 | `--color-slate-mist` | Secondary text color, often used for lighter body copy or subtle links on dark backgrounds. |
| Graphite | #151515 | `--color-graphite` | Tertiary background color for subtle differentiation of sections or components within the dark theme. |
| Deep Ash | #2f2f2f | `--color-deep-ash` | Darker borders, adding definition to interactive elements or subtle containers within the dark theme. |
| Stone Gray | #a3a3a3 | `--color-stone-gray` | Iconography and less prominent textual elements, offering softness compared to pure white text. |
| Cadet Grey | #737373 | `--color-cadet-grey` | Subtler text, often for secondary links or descriptive captions, ensuring low visual hierarchy. |
| Ebony | #1e1e1 | `--color-ebony` | Infrequent background for minor elements or hover states, deepening the dark theme without full black. |
| Cool Violet | #1500ff | `--color-cool-violet` | Primary call-to-action buttons and active interactive states — the single energetic counterpoint. |

## Tokens — Typography

### Savee Font

- **Token:** `--font-savee-font`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 13px, 14px, 16px, 18px
- **Line heights:** 1.38, 1.29, 1.25, 1.23
- **Letter spacing:** 0.0150em, 0.0100em
- **Role:** Body copy and standard UI elements. Features carefully managed letter-spacing even at smaller sizes to maintain clarity in high-contrast setting.

### Savee Font

- **Token:** `--font-savee-font`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 21px, 24px, 30px, 36px, 60px, 96px
- **Line heights:** 1.13, 1.11, 1.00, 0.96
- **Letter spacing:** -0.0400em, -0.0200em, -0.0100em
- **Role:** Headlines and prominent display text. The weight 500 combined with tight letter-spacing (-0.04em for largest sizes) suggests a bold yet compact presence that doesn't shout, maintaining sophistication.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.38 | 0.015px | `--text-caption` |
| body | 16px | 1.25 | 0.01px | `--text-body` |
| subheading | 18px | 1.23 | 0.01px | `--text-subheading` |
| heading | 21px | 1.13 | -0.01px | `--text-heading` |
| heading-lg | 24px | 1.11 | -0.01px | `--text-heading-lg` |
| display-sm | 30px | 1 | -0.02px | `--text-display-sm` |
| display | 36px | 0.96 | -0.02px | `--text-display` |
| display-lg | 60px | 0.96 | -0.04px | `--text-display-lg` |
| display-xl | 96px | 0.96 | -0.04px | `--text-display-xl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-74 | 74px | `--spacing-74` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-110 | 110px | `--spacing-110` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-201 | 201px | `--spacing-201` |

### Border Radius

| Element | Value |
| --- | --- |
| avatars | 9999px |
| buttons | 9999px |
| general | 14px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| elementGap | 8px |

## Components

### Primary & Secondary Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Social Proof — Trusted Brands Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Highlight Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button

**Role:** Main call to action

Ghost White text on a Cool Violet (#1500ff) background. Pill-shaped (9999px radius). Padding: 16px vertical, 32px horizontal. Text is Savee Font 400 at 16px.

### Secondary Ghost Button

**Role:** Secondary call to action or navigation

Midnight Ink (#050505) text on a Ghost White (#fdfdfd) background, with a Parchment (#e5e5e5) border. Pill-shaped (9999px radius). Padding: 16px vertical, 24px horizontal. Text is Savee Font 400 at 16px.

### Navigation Link

**Role:** Top navigation and inline links

Ghost White (#fdfdfd) text for primary nav links, Slate Mist (#d4d4d4) for less prominent links, all Savee Font 400, 14px, with subtle letter-spacing of 0.01em. No underline by default.

### Hero Headline

**Role:** Primary page title

Savee Font 500 at 96px, line-height 0.96, letter-spacing -0.04em, in Ghost White (#fdfdfd) on Midnight Ink (#050505) background.

### Body Text Standard

**Role:** General paragraph text

Savee Font 400 at 18px, line-height 1.23, letter-spacing 0.01em, in Ghost White (#fdfdfd).

### Footer Section

**Role:** Global footer block

Utilizes Midnight Ink (#050505) background with Ghost White (#fdfdfd) or Slate Mist (#d4d4d4) for text. Features Deep Ash (#2f2f2f) for subtle internal borders. Margins of 64px from top to separate from main content.

## Do's and Don'ts

### Do

- Prioritize Midnight Ink (#050505) as the primary background color for all main sections and page canvas.
- Use Ghost White (#fdfdfd) for primary text on dark backgrounds to ensure maximum contrast and readability.
- Apply 9999px radius to all interactive elements like buttons and tags, establishing the signature pill shape.
- Reserve Cool Violet (#1500ff) exclusively for primary calls-to-action, ensuring its impactful presence.
- Utilize Savee Font 500 with negative letter-spacing for headlines (e.g., -0.04em at 96px) to maintain a refined, impactful visual density.
- Maintain a clear vertical rhythm with main section gaps at 64px and internal element gaps at 8px to ensure comfortable density.

### Don't

- Avoid using multiple vibrant accent colors; only Cool Violet (#1500ff) is permitted.
- Do not deviate from the high-contrast pairing of Ghost White (#fdfdfd) on Midnight Ink (#050505) for core content.
- Refrain from using traditional square or slightly rounded corners (e.g., 4px, 8px); choose between 14px or 9999px for distinct shapes.
- Do not use letter-spacing greater than 0.015em; typography maintains a consistently tight appearance.
- Avoid using drop shadows for elevation; depth is created purely through color contrast and layered surfaces.
- Do not introduce gradients; the aesthetic is strictly flat and monochromatic with a single, sharp accent.

## Imagery

This design primarily uses vector iconography and text-based logos for brand identity. Photography, illustrations, or product screenshots are notably absent from the core UI. When present (e.g., partner logos), they are monochrome and desaturated, often appearing in Ghost White against Midnight Ink, serving an atmospheric rather than explanatory role. The focus is on pure UI elements and typography, creating a dense, information-rich, and graphic-oriented visual experience that prioritizes content display over decorative visuals.

## Layout

The site uses a full-bleed layout, where the Midnight Ink (#050505) background extends across the entire viewport. Content is centrally aligned within this expansive canvas, establishing clear reading pathways. The hero section features a prominent, centered headline and subtext, immediately setting a direct and confident tone. Section spacing is consistent at 64px, creating a comfortable visual rhythm. Navigation is a minimalist top bar, sticky (implied by content overlapping), maintaining a clean focus. Content sections frequently use stacked, centered text blocks, reinforcing a direct, editorial feel. There is no visible grid for content arrangement, but large blocks of type are organized for impact.

## Similar Brands

- **Framer** — Shares a similar dark-mode aesthetic with high contrast typography and a focus on clean, minimal UI elements.
- **Superhuman** — Employs an ultra-minimalist dark interface with heavy emphasis on typography and sparse, impactful accent colors.
- **Linear** — Exhibits a similar commitment to precision, dark themes, and a restrained use of color to highlight functionality.
- **Arc Browser** — Features a strong dark UI, custom typography, and a deliberate, almost stark contrast for visual clarity.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #050505;
  --color-ghost-white: #fdfdfd;
  --color-parchment: #e5e5e5;
  --color-slate-mist: #d4d4d4;
  --color-graphite: #151515;
  --color-deep-ash: #2f2f2f;
  --color-stone-gray: #a3a3a3;
  --color-cadet-grey: #737373;
  --color-ebony: #1e1e1;
  --color-cool-violet: #1500ff;
  --font-savee-font: 'Savee Font', Inter;
  --font-savee-font: 'Savee Font', Inter;
  --text-caption: 13px;
  --leading-caption: 1.38;
  --tracking-caption: 0.015px;
  --text-body: 16px;
  --leading-body: 1.25;
  --tracking-body: 0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.23;
  --tracking-subheading: 0.01px;
  --text-heading: 21px;
  --leading-heading: 1.13;
  --tracking-heading: -0.01px;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.11;
  --tracking-heading-lg: -0.01px;
  --text-display-sm: 30px;
  --leading-display-sm: 1;
  --tracking-display-sm: -0.02px;
  --text-display: 36px;
  --leading-display: 0.96;
  --tracking-display: -0.02px;
  --text-display-lg: 60px;
  --leading-display-lg: 0.96;
  --tracking-display-lg: -0.04px;
  --text-display-xl: 96px;
  --leading-display-xl: 0.96;
  --tracking-display-xl: -0.04px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-74: 74px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-110: 110px;
  --spacing-128: 128px;
  --spacing-201: 201px;
  --radius-avatars: 9999px;
  --radius-buttons: 9999px;
  --radius-general: 14px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #050505;
  --color-ghost-white: #fdfdfd;
  --color-parchment: #e5e5e5;
  --color-slate-mist: #d4d4d4;
  --color-graphite: #151515;
  --color-deep-ash: #2f2f2f;
  --color-stone-gray: #a3a3a3;
  --color-cadet-grey: #737373;
  --color-ebony: #1e1e1;
  --color-cool-violet: #1500ff;
  --font-savee-font: 'Savee Font', Inter;
  --font-savee-font: 'Savee Font', Inter;
  --text-caption: 13px;
  --leading-caption: 1.38;
  --tracking-caption: 0.015px;
  --text-body: 16px;
  --leading-body: 1.25;
  --tracking-body: 0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.23;
  --tracking-subheading: 0.01px;
  --text-heading: 21px;
  --leading-heading: 1.13;
  --tracking-heading: -0.01px;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.11;
  --tracking-heading-lg: -0.01px;
  --text-display-sm: 30px;
  --leading-display-sm: 1;
  --tracking-display-sm: -0.02px;
  --text-display: 36px;
  --leading-display: 0.96;
  --tracking-display: -0.02px;
  --text-display-lg: 60px;
  --leading-display-lg: 0.96;
  --tracking-display-lg: -0.04px;
  --text-display-xl: 96px;
  --leading-display-xl: 0.96;
  --tracking-display-xl: -0.04px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-27: 27px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-74: 74px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-110: 110px;
  --spacing-128: 128px;
  --spacing-201: 201px;
  --radius-avatars: 9999px;
  --radius-buttons: 9999px;
  --radius-general: 14px;
}
```
