---
version: alpha
name: "SIRUP 5th Anniversary Special Site"
description: "The SIRUP 5th Anniversary site presents a 'midnight command center' aesthetic, characterized by a deep black canvas punctuated by a single vibrant orange accent. Typography is a key identifier, mixing a system sans-serif for body text with several custom display fonts that feature wide letter-spacing. UI elements are dense and dark, with ghost buttons that blend into the background, hinting at interactive states through subtle borders and text color changes. The overall impression is one of intense focus and a strong, almost understated graphic sensibility."
theme: "dark"
industry: "media"
source_url: "https://sirup.online/5th"
refero_style_id: "31e063bd-7a86-4554-8a79-3635a6bb6d36"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512953229-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512953229-thumb.jpg"
extracted_at: "2026-04-30T01:36:15.477Z"
---

# SIRUP 5th Anniversary Special Site — Style Reference

> Midnight command center, high-contrast; functionality through dark surfaces and illuminated accents.

**Theme:** dark

**Industry:** media

The SIRUP 5th Anniversary site presents a 'midnight command center' aesthetic, characterized by a deep black canvas punctuated by a single vibrant orange accent. Typography is a key identifier, mixing a system sans-serif for body text with several custom display fonts that feature wide letter-spacing. UI elements are dense and dark, with ghost buttons that blend into the background, hinting at interactive states through subtle borders and text color changes. The overall impression is one of intense focus and a strong, almost understated graphic sensibility.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Canvas | #000000 | `--color-midnight-canvas` | Primary page background, component backgrounds, ghost button borders (neutral) |
| Ghost Fill Grey | #404040 | `--color-ghost-fill-grey` | Subtle ghost button background |
| Muted Ash | #666666 | `--color-muted-ash` | Secondary surface background, subtle dividers |
| White Frost | #ffffff | `--color-white-frost` | Primary text, prominent borders, icon fills, ghost button text |
| Smoke Gray | #e8e9ed | `--color-smoke-gray` | Subtle text, less prominent borders, tertiary surface backgrounds |
| Ignition Orange | #5a1501 | `--color-ignition-orange` | Distinctive background accent for special sections like navigation, content blocks — signifies emphasis or a change in atmosphere |
| Digital Violet | #4554ac | `--color-digital-violet` | Violet outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Action Violet | #5262be | `--color-action-violet` | Violet outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |

## Tokens — Typography

### Helvetica Neue

- **Token:** `--font-helvetica-neue`
- **Substitute:** Arial
- **Weights:** 400, 700
- **Sizes:** 16px, 32px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **OpenType features:** "palt"
- **Role:** General body text and subheadings. Its clean, utilitarian nature provides a stable base against the more decorative display fonts, ensuring readability in information-dense sections.

### Termina

- **Token:** `--font-termina`
- **Substitute:** Montserrat
- **Weights:** 200, 500, 600
- **Sizes:** 11px, 12px, 14px, 15px
- **Line heights:** 1.00, 1.13, 2.00
- **Letter spacing:** 0.1em
- **OpenType features:** "palt"
- **Role:** Secondary display font for headings and calls to action. Its wide letter-spacing creates a deliberate, almost typographic poster-like feel, establishing a distinct visual voice.

### source-han-sans-japanese

- **Token:** `--font-source-han-sans-japanese`
- **Substitute:** Noto Sans JP
- **Weights:** 400, 500, 700
- **Sizes:** 11px, 14px, 15px
- **Line heights:** 1.00, 2.15
- **Letter spacing:** 0.05em
- **OpenType features:** "palt"
- **Role:** Japanese body text and navigation. A critical component for conveying brand identity in bilingual contexts, ensuring consistent high-quality rendering of Japanese characters with a slightly expanded tracking.

### Glodok

- **Token:** `--font-glodok`
- **Substitute:** Oswald
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00
- **Letter spacing:** 0.2em
- **OpenType features:** "palt"
- **Role:** Decorative accent text, potentially for labels or minor headings. Its extremely wide letter-spacing acts as a pure design element rather than a primary content vehicle, demanding attention through its sparse appearance.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.13 | — | `--text-caption` |
| body-sm | 12px | 1.13 | — | `--text-body-sm` |
| body | 14px | 1.13 | — | `--text-body` |
| body-lg | 15px | 1.13 | — | `--text-body-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-180 | 180px | `--spacing-180` |
| spacing-215 | 215px | `--spacing-215` |
| spacing-263 | 263px | `--spacing-263` |
| spacing-284 | 284px | `--spacing-284` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 27.5px |
| default | 2.5px |
| circular | 1440px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 75px |
| cardPadding | 18px |
| elementGap | 4px |

## Components

### Ghost Button (Text)

**Role:** Primary Call to Action, Navigation

Transparent background, 'White Frost' text (#ffffff), no visible border. Minimalist and blends into the dark canvas, relying on active states for discoverability. Uses Helvetica Neue, 16px.

### Ghost Button (Outlined)

**Role:** Secondary Call to Action, Interactive elements

Transparent background, 'White Frost' text (#ffffff), but featuring a 'Midnight Canvas' (black) border. This variant offers a slightly more defined presence while maintaining a 'ghost' aesthetic. Uses 27.5px border radius if observed.

### Circular Ghost Button

**Role:** Iconic Navigation, Close buttons

Transparent background, 'White Frost' text (#ffffff), 'Midnight Canvas' (black) border, with a fully circular shape (100% border-radius). Used for visually distinct, often icon-only interactions. The current example has no padding.

### Subtle Ghost Button (Filled)

**Role:** Tertiary Call to Action, Toggle states

Semi-transparent 'White Frost' (25% opacity) background, 'White Frost' text (#ffffff), rounded corners at 27.5px. Provides a low-contrast interactive element that is slightly more prominent than a pure ghost button.

### Navigation Bar

**Role:** Global Navigation, Announcements

Background can be 'Midnight Canvas' (#000000) or 'Ignition Orange' (#5a1501). Text primarily 'White Frost' (#ffffff) using Helvetica Neue at normal letter spacing. Contains links and announcements, often full-width.

### Text Content Block (Orange Accent)

**Role:** Highlight sections, Thematic dividers

Background set to 'Ignition Orange' (#5a1501) with 'White Frost' (#ffffff) text. Used to break up the dominant dark background and highlight specific content or periods, often seen in navigation or special feature blocks.

## Do's and Don'ts

### Do

- Always default to 'Midnight Canvas' (#000000) as the background for new sections.
- Use 'White Frost' (#ffffff) for all primary text and critical UI elements against dark backgrounds.
- Apply 'Ignition Orange' (#5a1501) sparingly for high-impact background sections or thematic content blocks, never for small interactive elements.
- Utilize a 27.5px border-radius for interactive buttons and forms to unify their appearance, except for fully circular elements, which use 1440px.
- Employ the 'Termina' font with 0.1em letter-spacing for major headings and display text to establish a distinct brand voice.
- Ensure interactive elements primarily use ghost or outlined styles, with solid fills reserved for subtle, secondary actions.
- Maintain a clear visual hierarchy by limiting prominent chromatic accents to 'Digital Violet' (#4554ac) for decorative purposes or 'Action Violet' (#5262be) for active text states.

### Don't

- Avoid using multiple saturated colors; color should be highly controlled and primarily achromatic with a single brand accent.
- Do not use '#e8e9ed' for primary text; it is reserved for subtle secondary text or background elements.
- Do not introduce new typefaces; only 'Helvetica Neue', 'Termina', 'source-han-sans-japanese', and 'Glodok' are permitted.
- Avoid heavy shadows or gradients; interfaces should feel flat and direct.
- Do not create filled buttons unless specifically using the 'Subtle Ghost Button (Filled)' variant with 25% white opacity.
- Refrain from using tight letter-spacing for 'Termina' or 'Glodok'; their identity is defined by open tracking.
- Do not use 'Ignition Orange' (#5a1501) for small text or icons directly interacting with content, as it functions best as a background accent.

## Imagery

This site features a 'no imagery, pure UI' approach. Visuals are entirely driven by typography, color blocks, and UI elements. The only visual content comes from small icons which appear to be monochrome or use the accent colors. There is a strong emphasis on stark, graphic presentation rather than photographic or illustrative content conveying mood or information.

## Layout

The page primarily follows a full-bleed layout, where sections extend to the edge of the viewport. Content within these sections is often centered, forming distinct vertical blocks. The hero section is full-bleed dark with centered text. Section rhythm is established through alternating background colors, particularly the prominent 'Ignition Orange' (#5a1501) blocks interspersed with the primary 'Midnight Canvas' (#000000) background. Content arrangement leans towards centered stacks for main information and vertically-oriented lists or grids, allowing abundant whitespace for emphasis. Navigation is primarily a sticky header with a compact, ghost-button style that integrates seamlessly into the dark background.

## Similar Brands

- **A-Trak** — Visual identity centered on a dark canvas, highly stylized typography, and sparse but impactful accent colors.
- **The Weeknd (Album Sites)** — Dark, moody aesthetic with specific color accents (often red/orange) and custom serif/display typography for a strong artistic brand.
- **Rostam** — Musician portfolio/info sites that prioritize high-contrast, minimalist design with a focus on powerful typography and carefully selected accent colors over heavy imagery.
- **HYPERBEAST** — Utilizes a dark theme with strong typographic treatments and curated splashes of color to highlight content, often with a compact information density.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-canvas: #000000;
  --color-ghost-fill-grey: #404040;
  --color-muted-ash: #666666;
  --color-white-frost: #ffffff;
  --color-smoke-gray: #e8e9ed;
  --color-ignition-orange: #5a1501;
  --color-digital-violet: #4554ac;
  --color-action-violet: #5262be;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --font-termina: 'Termina', Montserrat;
  --font-source-han-sans-japanese: 'source-han-sans-japanese', Noto Sans JP;
  --font-glodok: 'Glodok', Oswald;
  --text-caption: 11px;
  --leading-caption: 1.13;
  --text-body-sm: 12px;
  --leading-body-sm: 1.13;
  --text-body: 14px;
  --leading-body: 1.13;
  --text-body-lg: 15px;
  --leading-body-lg: 1.13;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-18: 18px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-60: 60px;
  --spacing-75: 75px;
  --spacing-150: 150px;
  --spacing-180: 180px;
  --spacing-215: 215px;
  --spacing-263: 263px;
  --spacing-284: 284px;
  --radius-buttons: 27.5px;
  --radius-default: 2.5px;
  --radius-circular: 1440px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-canvas: #000000;
  --color-ghost-fill-grey: #404040;
  --color-muted-ash: #666666;
  --color-white-frost: #ffffff;
  --color-smoke-gray: #e8e9ed;
  --color-ignition-orange: #5a1501;
  --color-digital-violet: #4554ac;
  --color-action-violet: #5262be;
  --font-helvetica-neue: 'Helvetica Neue', Arial;
  --font-termina: 'Termina', Montserrat;
  --font-source-han-sans-japanese: 'source-han-sans-japanese', Noto Sans JP;
  --font-glodok: 'Glodok', Oswald;
  --text-caption: 11px;
  --leading-caption: 1.13;
  --text-body-sm: 12px;
  --leading-body-sm: 1.13;
  --text-body: 14px;
  --leading-body: 1.13;
  --text-body-lg: 15px;
  --leading-body-lg: 1.13;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-18: 18px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-60: 60px;
  --spacing-75: 75px;
  --spacing-150: 150px;
  --spacing-180: 180px;
  --spacing-215: 215px;
  --spacing-263: 263px;
  --spacing-284: 284px;
  --radius-buttons: 27.5px;
  --radius-default: 2.5px;
  --radius-circular: 1440px;
}
```
