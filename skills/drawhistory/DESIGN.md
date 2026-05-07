---
version: alpha
name: "DrawHistory"
description: "DrawHistory utilizes a subdued, grounded aesthetic with a primary focus on dark text on light, almost parchment-like backgrounds. The visual system balances strong typographic hierarchy with soft, substantial UI elements. A distinctive palette of desaturated 'earthy' neutrals and a single vivid orange accent punctuates functional elements without overwhelming the calm, editorial feel. Components are notably chunky, with generous padding and rounded corners, creating a sense of weight and importance."
theme: "light"
industry: "agency"
source_url: "https://drawhistory.com"
refero_style_id: "25246b10-83a4-4f51-a411-cf85503b94a8"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512399677-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512399677-thumb.jpg"
extracted_at: "2026-04-30T01:27:02.472Z"
---

# DrawHistory — Style Reference

> Warm parchment manifesto

**Theme:** light

**Industry:** agency

DrawHistory utilizes a subdued, grounded aesthetic with a primary focus on dark text on light, almost parchment-like backgrounds. The visual system balances strong typographic hierarchy with soft, substantial UI elements. A distinctive palette of desaturated 'earthy' neutrals and a single vivid orange accent punctuates functional elements without overwhelming the calm, editorial feel. Components are notably chunky, with generous padding and rounded corners, creating a sense of weight and importance.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Parchment | #e5e7eb | `--color-canvas-parchment` | Primary page backgrounds, subtle borders, and muted divider lines |
| Near Black | #000000 | `--color-near-black` | Primary headings, body text, and icon fills on light surfaces. Do not promote it to the primary CTA color |
| Onyx Card | #1d1d1b | `--color-onyx-card` | Background for elevated card surfaces, providing a deep contrast to text |
| Sage Dark | #3d3b2f | `--color-sage-dark` | Background for prominent card surfaces, icon strokes, and button backgrounds |
| Paper White | #ffffff | `--color-paper-white` | Inverse text for dark backgrounds, button text, and icon fills on dark surfaces |
| Wet Sand | #e1d3c7 | `--color-wet-sand` | Subtle background for specific sections or elements, adding warmth to the neutral palette |
| Steel Gray | #999999 | `--color-steel-gray` | Decorative borders or secondary, less prominent UI outlines |
| Fog Input | #b3b3b3 | `--color-fog-input` | Default input borders and subtle background shades |
| Pale Clay | #faf6f3 | `--color-pale-clay` | Very light borders and occasional body text, complementing the parchment canvas |
| Flame Orange | #ff6714 | `--color-flame-orange` | Small, vivid accent for attention-grabbing elements or indicators, contrasting sharply with the subdued neutrals |

## Tokens — Typography

### Eloquia Text

- **Token:** `--font-eloquia-text`
- **Substitute:** Source Serif Pro
- **Weights:** 300, 400
- **Sizes:** 14px, 16px, 18px, 20px, 22px, 35px, 36px, 40px, 44px, 55px, 100px, 104px
- **Line heights:** 0.95, 1.00, 1.09, 1.10, 1.11, 1.13, 1.14, 1.18, 1.40, 1.43, 1.50, 1.56
- **Letter spacing:** -0.0500em at 104px, -0.0300em at 55px, -0.0250em at 44px, -0.0180em at 40px, -0.0090em at 36px, normal for smaller sizes
- **Role:** Primary brand typeface for all headings, body text, and interactive elements. Its versatility across weights and generous line heights supports a comfortable reading experience for content and strong impact for headlines.

### Roboto Mono

- **Token:** `--font-roboto-mono`
- **Substitute:** Space Mono
- **Weights:** 400
- **Sizes:** 14px, 15px, 16px
- **Line heights:** 1.25, 1.33, 1.43, 1.50
- **Letter spacing:** normal
- **Role:** Used for specific contextual elements like timestamps or code snippets, providing a technical, distinct contrast to the primary typeface.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.5 | 0px | `--text-caption` |
| body-sm | 16px | 1.43 | 0px | `--text-body-sm` |
| body | 18px | 1.43 | 0px | `--text-body` |
| subheading | 20px | 1.4 | 0px | `--text-subheading` |
| heading-sm | 22px | 1.14 | 0px | `--text-heading-sm` |
| heading | 35px | 1.13 | -0.315px | `--text-heading` |
| heading-lg | 40px | 1.1 | -0.72px | `--text-heading-lg` |
| display | 104px | 0.95 | -5.2px | `--text-display` |

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
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-224 | 224px | `--spacing-224` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 16px |
| images | 16px |
| buttons | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 80px |
| cardPadding | 40px |
| elementGap | 8px |

## Components

### Ghost Navigation Link

**Role:** Primary navigation links and subtle inline calls to action.

Transparent background, Near Black text, no border. Appears as pure text link within layouts.

### Standard Button

**Role:** General action buttons, such as 'Read More' or 'Learn More'.

Background #000000, white text, 8px radius, 8px vertical padding, 12px horizontal padding. Delivers a clear, understated call to action.

### Dark Card Button

**Role:** Buttons within Sage Dark colored cards, offering a distinct visual cue.

Background Sage Dark (#3d3b2f), Near Black text, 16px border-radius, 40px padding on all sides. Used for important interactions on darker surfaces.

### Onyx Card Button

**Role:** Buttons within Onyx Card colored cards, ensuring visibility.

Background Onyx Card (#1d1d1b), Near Black text, 16px border-radius, 40px padding on all sides. Similar to the Dark Card Button but for the deepest card background.

### Card Surface - Default

**Role:** Generic display panels for content, often used without internal padding for media.

Transparent background, 0px border-radius, no shadow. Designed for flexible content presentation where visual separation is minimal.

### Card Surface - Elevated

**Role:** Prominent content blocks that require optical separation and visual weight.

Background Sage Dark (#3d3b2f) or Onyx Card (#1d1d1b), 16px border-radius, 40px internal padding. Creates a substantial, deliberate content container.

### Text Input

**Role:** Standard user input fields.

Paper White background, Near Black text, Fog Input (#b3b3b3) border with 0px radius, 8px vertical padding. Provides a clean and functional input area.

## Do's and Don'ts

### Do

- Prioritize Eloquia Text for all text content, selecting weights 300 or 400 to achieve a calm, editorial feel.
- Use Canvas Parchment (#e5e7eb) as the dominant background color for most sections, establishing a foundational light tone.
- Apply 16px border-radius to card elements and images for a consistent soft, chunky aesthetic.
- Utilize 40px internal padding for cards or prominent blocks to ensure generous content separation and visual weight.
- Employ Near Black (#000000) for all primary text and headings against lighter backgrounds for maximum contrast.
- Introduce Flame Orange (#ff6714) sparingly, primarily for small, functional accents like status indicators or emphasis rather than large blocks of color.
- Maintain a clear visual hierarchy by varying type sizes from the Eloquia Text profile, using larger sizes with tighter line heights for headings and smaller sizes with greater line heights for body text.

### Don't

- Avoid excessive use of highly saturated colors; the palette focuses on desaturated neutrals with a single accent.
- Do not deviate from the established border radii of 16px for cards and 8px for buttons; this defines the component's substance.
- Refrain from thin or ghosted interface elements; components should feel substantial with generous padding and clear backgrounds.
- Do not introduce additional font families beyond Eloquia Text and Roboto Mono, or deviate from their specified weights and sizes.
- Avoid complex shadow effects; the system relies on backgroundColor changes and generous spacing for visual separation instead of elevation.
- Do not use small padding values; elements need breathing room, favoring 8px as a minimum for small gaps and 40px for component padding.
- Do not use full-width text blocks, ensure content is contained within a comfortable reading measure, typically allowing for generous horizontal spacing.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Parchment | #e5e7eb | Base page background, light and airy foundation. |
| 1 | Wet Sand | #e1d3c7 | Subtle background for specific content sections, providing a slight warmth and visual rhythm. |
| 2 | Sage Dark | #3d3b2f | Elevated card surfaces, creating a heavy, grounded visual block for key information. |
| 3 | Onyx Card | #1d1d1b | Deepest card background, used for maximum contrast against white text in specific contexts. |

## Imagery

Imagery largely consists of tight product crops, specific brand logos, and occasional professional, staged photography of individuals, treated with a natural color palette. Images are typically contained within card-like structures with 16px rounded corners, often serving as a focal point within content blocks. The imagery is explanatory and supportive, enhancing content without being purely decorative.Icons are simple, often outlined, with a medium stroke weight, in either Near Black or Paper White.

## Layout

The page primarily employs a max-width contained layout, with significant horizontal padding creating a framed effect. Sections feature a strong vertical rhythm, often separating content blocks with generous white space or subtle background color changes (e.g., from Canvas Parchment to Wet Sand). Content arrangement often alternates between full-width content stacks, and two-column layouts where text and imagery are paired. There's a particular emphasis on chunky content cards, frequently centered, serving as key interaction points. The navigation is a top bar, with ghost-style links.

## Similar Brands

- **The Business of Fashion** — Heavy, editorial-style typography on light backgrounds with generous spacing to create a sense of gravitas.
- **AIGA Eye on Design** — Use of oversized headlines with tight line-heights and a commitment to distinct, often muted color palettes for content.
- **Frank Body** — Chunky, rounded buttons and cards combined with a light, soft background palette to create a friendly yet substantial feel.
- **Squarespace (older themes)** — Emphasis on large, impactful imagery, clear modular content blocks, and a clean typographic hierarchy with ample white space.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-parchment: #e5e7eb;
  --color-near-black: #000000;
  --color-onyx-card: #1d1d1b;
  --color-sage-dark: #3d3b2f;
  --color-paper-white: #ffffff;
  --color-wet-sand: #e1d3c7;
  --color-steel-gray: #999999;
  --color-fog-input: #b3b3b3;
  --color-pale-clay: #faf6f3;
  --color-flame-orange: #ff6714;
  --font-eloquia-text: 'Eloquia Text', Source Serif Pro;
  --font-roboto-mono: 'Roboto Mono', Space Mono;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: 0px;
  --text-body: 18px;
  --leading-body: 1.43;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.14;
  --tracking-heading-sm: 0px;
  --text-heading: 35px;
  --leading-heading: 1.13;
  --tracking-heading: -0.315px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.72px;
  --text-display: 104px;
  --leading-display: 0.95;
  --tracking-display: -5.2px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-112: 112px;
  --spacing-144: 144px;
  --spacing-224: 224px;
  --radius-cards: 16px;
  --radius-images: 16px;
  --radius-buttons: 8px;
  --surface-canvas-parchment: #e5e7eb;
  --surface-wet-sand: #e1d3c7;
  --surface-sage-dark: #3d3b2f;
  --surface-onyx-card: #1d1d1b;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-parchment: #e5e7eb;
  --color-near-black: #000000;
  --color-onyx-card: #1d1d1b;
  --color-sage-dark: #3d3b2f;
  --color-paper-white: #ffffff;
  --color-wet-sand: #e1d3c7;
  --color-steel-gray: #999999;
  --color-fog-input: #b3b3b3;
  --color-pale-clay: #faf6f3;
  --color-flame-orange: #ff6714;
  --font-eloquia-text: 'Eloquia Text', Source Serif Pro;
  --font-roboto-mono: 'Roboto Mono', Space Mono;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: 0px;
  --text-body: 18px;
  --leading-body: 1.43;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.14;
  --tracking-heading-sm: 0px;
  --text-heading: 35px;
  --leading-heading: 1.13;
  --tracking-heading: -0.315px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.72px;
  --text-display: 104px;
  --leading-display: 0.95;
  --tracking-display: -5.2px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-58: 58px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-112: 112px;
  --spacing-144: 144px;
  --spacing-224: 224px;
  --radius-cards: 16px;
  --radius-images: 16px;
  --radius-buttons: 8px;
  --surface-canvas-parchment: #e5e7eb;
  --surface-wet-sand: #e1d3c7;
  --surface-sage-dark: #3d3b2f;
  --surface-onyx-card: #1d1d1b;
}
```
