---
version: alpha
name: "Letterboxd"
description: "Letterboxd employs a film-noir inspired aesthetic, using a deep, nearly monochromatic dark mode to provide a cinematic backdrop for film content. The visual hierarchy is built on subtle color shifts and varied text weights rather than strong contrast. A single vivid green accent is reserved for interactive elements, creating clear focal points against the muted palette, reminiscent of a discreetly lit movie theater screen where only key information is highlighted."
theme: "dark"
industry: "media"
source_url: "https://letterboxd.com"
refero_style_id: "d98dea0b-00a4-4c15-b4a9-d196e2c3e4b4"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924740124-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924740124-thumb.jpg"
extracted_at: "2026-04-11T16:26:03.591Z"
---

# Letterboxd — Style Reference

> Midnight Theater Screen

**Theme:** dark

**Industry:** media

Letterboxd employs a film-noir inspired aesthetic, using a deep, nearly monochromatic dark mode to provide a cinematic backdrop for film content. The visual hierarchy is built on subtle color shifts and varied text weights rather than strong contrast. A single vivid green accent is reserved for interactive elements, creating clear focal points against the muted palette, reminiscent of a discreetly lit movie theater screen where only key information is highlighted.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #14181c | `--color-midnight-ink` | Page backgrounds, large surfaces |
| Charcoal Canvas | #202830 | `--color-charcoal-canvas` | Card backgrounds, elevated sections, subtle dividers |
| Shadow Gray | #2c3440 | `--color-shadow-gray` | Panel dividers, subtle fills distinguishing UI elements |
| Ghostly Grey | #586370 | `--color-ghostly-grey` | Input borders, placeholder text, secondary text |
| Steel Text | #667788 | `--color-steel-text` | Body text, metadata, lower contrast links |
| Cloudburst Text | #778899 | `--color-cloudburst-text` | Links, icons, slightly higher contrast body text |
| Mist Text | #8899aa | `--color-mist-text` | Secondary headings, list items, higher contrast body text |
| Ash Text | #99aabb | `--color-ash-text` | Primary body text, main links, prominent metadata |
| Porcelain Text | #ddeeff | `--color-porcelain-text` | High-contrast body links, hover states |
| Whiteout | #ffffff | `--color-whiteout` | Headlines, high-prominence text, primary button text |
| Deep Ocean | #445566 | `--color-deep-ocean` | Subtle button backgrounds, distinct but muted interactive surfaces |
| Electric Green | #00ac1c | `--color-electric-green` | Primary call-to-action buttons, interactive elements — its vividness drives action |
| Vivid Green | #00e054 | `--color-vivid-green` | Link underlines, success states, subtle active indicators |
| Status Green | #00c030 | `--color-status-green` | Badges, progress indicators, reinforces positive status messages |
| Star Dust | #c8d4e0 | `--color-star-dust` | Button text in active/hover states, high-contrast text on darker buttons |
| Golden Star | #ff9933 | `--color-golden-star` | Rating icons, specific accent details in reviews or community feedback |

## Tokens — Typography

### GraphikWeb

- **Token:** `--font-graphikweb`
- **Substitute:** Inter
- **Weights:** 300, 400, 700
- **Sizes:** 10px, 11px, 12px, 13px, 14px, 15px, 16px, 17px, 18px, 24px, 26px
- **Line heights:** 1.00, 1.20, 1.23, 1.25, 1.31, 1.38, 1.50, 1.54, 1.75, 2.00
- **Letter spacing:** -0.075em at 26px, 0.083em at 10px
- **Role:** Primary sans-serif for UI elements, body text, and many headlines. Its geometric precision and wide range of weights provide both clarity and a structured feel, contrasting with the serif for display. Letter spacing is used subtly to tune readability at different sizes.

### TiemposTextWeb

- **Token:** `--font-tiempostextweb`
- **Substitute:** Source Serif Pro
- **Weights:** 400, 700
- **Sizes:** 15px, 22px
- **Line heights:** 1.20, 1.25, 1.67
- **Role:** Used for specific body text sections and embedded content. The serif brings a touch of editorial sophistication, differentiating longer-form content or curated descriptions from the more functional UI elements. Normal letter spacing keeps it highly readable.

### TiemposHeadlineWeb

- **Token:** `--font-tiemposheadlineweb`
- **Substitute:** Playfair Display
- **Weights:** 700
- **Sizes:** 36px
- **Line heights:** 1.33
- **Role:** Exclusive to main headlines. This bold serif acts as a display face, providing a strong, elegant visual identity, echoing the classic movie poster typography aesthetic. Normal letter spacing ensures legibility at large sizes.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | 0.83px | `--text-caption` |
| body | 15px | 1.5 | 0.083px | `--text-body` |
| heading | 24px | 1.25 | -0.075px | `--text-heading` |
| display | 36px | 1.33 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-37 | 37px | `--spacing-37` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-167 | 167px | `--spacing-167` |
| spacing-238 | 238px | `--spacing-238` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 12-15px |
| buttons | 3px |
| default | 3px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(221, 238, 255, 0.25) 0px 0px 0px 1px inset | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.25) 0px 1px 5px 0px, rgba(0, 0, 0, 0.35) 0px 1px 10px 0px | `--shadow-xl-2` |
| xl-3 | rgba(20, 24, 28, 0.125) 0px 0px 1px 1px inset | `--shadow-xl-3` |
| xl-4 | rgb(0, 0, 0) 2px 0px 7px 0px | `--shadow-xl-4` |
| xl-5 | rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset | `--shadow-xl-5` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 0px |
| elementGap | 4px |

## Components

### Primary CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Film Card Row

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Security Check Modal

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button

**Role:** Main call to action

backgroundColor: #00ac1c (Electric Green), color: #ffffff (Whiteout), borderRadius: 4px, padding: 0 24px (vertical alignment adjusted by line-height/flex for 0px padding)

### Secondary Ghost Button

**Role:** Alternative actions or secondary CTA

backgroundColor: rgba(0, 0, 0, 0) (transparent), color: #000000 (Blackout), borderRadius: 0px, padding: 30px 0 0 0. This button type is specifically used for text links that appear as buttons, with padding controlling their clickable/tap area.

### Standard Button

**Role:** General interactive buttons

backgroundColor: #445566 (Deep Ocean), color: #ffffff (Whiteout), borderRadius: 3px, padding: 16px 20px 18px 20px. BorderTopColor: #ffffff ensures a subtle white highlight on the top edge.

### Pill Button

**Role:** Filter tags, minor actions within lists

backgroundColor: #556677 (Deep Ocean - from component variants, interpreted), color: #c8d4e0 (Star Dust), borderRadius: 12px, padding: 0 12px. This pill shape is distinct from other buttons.

### Film Data Card

**Role:** Displaying film posters and metadata (e.g., in listings like 'Just Reviewed...')

backgroundColor: rgba(0, 0, 0, 0) (transparent), borderRadius: 0px, boxShadow: none, paddingBottom: 20px. These cards are minimal, relying on image content for structure not borders/backgrounds.

### Search Input Field

**Role:** Site-wide search functionality

backgroundColor: rgba(255, 255, 255, 0.25) (semi-transparent white overlay), color: #586370 (Ghostly Grey - placeholder), border: 1px solid #586370 (Ghostly Grey), borderRadius: 15px, padding: 6px 30px 6px 10px. The rounded pill shape is unique for inputs.

### Status Badge

**Role:** Indicating specific states or categories

backgroundColor: #00c030 (Status Green), color: #ffffff (Whiteout), borderRadius: 2px, padding: 3px 4px 2px 4px. Compact and high-contrast for immediate visibility.

### Modal Overlay

**Role:** For displaying critical alerts or secondary content

Modal has background #2c3440 (Shadow Gray) with a slight shadow, and a semi-transparent dark backdrop overlaying the main content. Text uses typical neutral colors like #99aabb (Ash Text) and #ffffff (Whiteout).

## Do's and Don'ts

### Do

- Use Midnight Ink (#14181c) for main page backgrounds to maintain a dark, immersive theme.
- Prioritize GraphikWeb for all UI text and body copy using weights 300, 400, or 700 with precise letter-spacing adjustments.
- Reserve TiemposHeadlineWeb 700 at 36px for dominant page titles to establish a classic, editorial feel.
- Apply Electric Green (#00ac1c) exclusively to primary call-to-action buttons to ensure maximum emphasis and clarity for interactions.
- Maintain a tight corner radius of 3px for most interactive elements, reserving 12-15px for distinct pill shapes on inputs and filter tags.
- Structure content with minimal card padding (0px) and transparent backgrounds, allowing image content to define visual blocks.
- Utilize a shallow drop shadow rgba(0,0,0,0.25) 0px 1px 5px 0px, rgba(0,0,0,0.35) 0px 1px 10px 0px for elevated panels/modals, differentiating them from flat surfaces without harshness.

### Don't

- Avoid using highly saturated colors for anything other than specific interactive elements or brand accents; maintain the subdued neutral palette.
- Do not introduce strong outlines or heavy box shadows on cards; the design relies on subtle background shifts for hierarchy.
- Do not deviate from GraphikWeb for UI elements or TiemposHeadlineWeb for main titles; these choices are core to the brand's typographic identity.
- Refrain from using arbitrary large padding on cards; their structural presence is derived from their content, not artificial spacing.
- Do not soften edges unnecessarily; the default 3px radius is a deliberate choice for a balanced, contemporary look, with round pill shapes reserved for specific interactive components.
- Do not use black text on the Midnight Ink background; high-contrast white or light gray text is essential for readability.

## Elevation

- **Shadow 1:** `rgba(221, 238, 255, 0.25) 0px 0px 0px 1px inset`
- **Shadow 2:** `rgba(0, 0, 0, 0.25) 0px 1px 5px 0px, rgba(0, 0, 0, 0.35) 0px 1px 10px 0px`
- **Shadow 3:** `rgba(20, 24, 28, 0.125) 0px 0px 1px 1px inset`
- **Shadow 4:** `rgb(0, 0, 0) 2px 0px 7px 0px`
- **Shadow 5:** `rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset`

## Imagery

This site predominantly uses film posters and still images from movies, treated as primary content. Images are typically full-bleed within their content containers, with sharp, unmasked edges. There is no custom photography or illustration style. Product screenshots are rendered within device mockups when showcasing mobile features. Icons are filled and monochromatic, generally in the muted neutral palette or occasionally in the accent green, serving purely functional roles like navigation or status indicators. Image heavy, where visual content from films takes precedence in overall visual space.

## Layout

The layout primarily uses a full-bleed dark background (Midnight Ink) for the entire page, creating an immersive container. The hero section features a large, cinematic full-width film still with centered, prominent white typography for headlines and a single, vivid green CTA button at its base. Content is largely arranged in distinct vertical sections, often employing multi-column grids (e.g., 3-column for film posters, 2-column for text+featurettes). Sections maintain consistent vertical spacing. The navigation is a sticky top bar, minimally styled with gray text and a subtle search input, allowing the content below to dominate. Overall, the density is comfortable with ample breathing room, balancing large visual elements with concise text blocks.

## Similar Brands

- **IMDb** — Dark-mode interface with film poster grid layouts and emphasis on content imagery.
- **Spotify** — Dark background with a single dominant accent color for interaction, and a clear content-first approach.
- **VG247 (gaming news)** — Dark theme, prominent headlines, and editorial feel with distinct serif and sans-serif type pairing.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #14181c;
  --color-charcoal-canvas: #202830;
  --color-shadow-gray: #2c3440;
  --color-ghostly-grey: #586370;
  --color-steel-text: #667788;
  --color-cloudburst-text: #778899;
  --color-mist-text: #8899aa;
  --color-ash-text: #99aabb;
  --color-porcelain-text: #ddeeff;
  --color-whiteout: #ffffff;
  --color-deep-ocean: #445566;
  --color-electric-green: #00ac1c;
  --color-vivid-green: #00e054;
  --color-status-green: #00c030;
  --color-star-dust: #c8d4e0;
  --color-golden-star: #ff9933;
  --font-graphikweb: 'GraphikWeb', Inter;
  --font-tiempostextweb: 'TiemposTextWeb', Source Serif Pro;
  --font-tiemposheadlineweb: 'TiemposHeadlineWeb', Playfair Display;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.83px;
  --text-body: 15px;
  --leading-body: 1.5;
  --tracking-body: 0.083px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -0.075px;
  --text-display: 36px;
  --leading-display: 1.33;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-37: 37px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-65: 65px;
  --spacing-167: 167px;
  --spacing-238: 238px;
  --radius-pill: 12-15px;
  --radius-buttons: 3px;
  --radius-default: 3px;
  --shadow-xl: rgba(221, 238, 255, 0.25) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgba(0, 0, 0, 0.25) 0px 1px 5px 0px, rgba(0, 0, 0, 0.35) 0px 1px 10px 0px;
  --shadow-xl-3: rgba(20, 24, 28, 0.125) 0px 0px 1px 1px inset;
  --shadow-xl-4: rgb(0, 0, 0) 2px 0px 7px 0px;
  --shadow-xl-5: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #14181c;
  --color-charcoal-canvas: #202830;
  --color-shadow-gray: #2c3440;
  --color-ghostly-grey: #586370;
  --color-steel-text: #667788;
  --color-cloudburst-text: #778899;
  --color-mist-text: #8899aa;
  --color-ash-text: #99aabb;
  --color-porcelain-text: #ddeeff;
  --color-whiteout: #ffffff;
  --color-deep-ocean: #445566;
  --color-electric-green: #00ac1c;
  --color-vivid-green: #00e054;
  --color-status-green: #00c030;
  --color-star-dust: #c8d4e0;
  --color-golden-star: #ff9933;
  --font-graphikweb: 'GraphikWeb', Inter;
  --font-tiempostextweb: 'TiemposTextWeb', Source Serif Pro;
  --font-tiemposheadlineweb: 'TiemposHeadlineWeb', Playfair Display;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.83px;
  --text-body: 15px;
  --leading-body: 1.5;
  --tracking-body: 0.083px;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: -0.075px;
  --text-display: 36px;
  --leading-display: 1.33;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-37: 37px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-65: 65px;
  --spacing-167: 167px;
  --spacing-238: 238px;
  --radius-pill: 12-15px;
  --radius-buttons: 3px;
  --radius-default: 3px;
  --shadow-xl: rgba(221, 238, 255, 0.25) 0px 0px 0px 1px inset;
  --shadow-xl-2: rgba(0, 0, 0, 0.25) 0px 1px 5px 0px, rgba(0, 0, 0, 0.35) 0px 1px 10px 0px;
  --shadow-xl-3: rgba(20, 24, 28, 0.125) 0px 0px 1px 1px inset;
  --shadow-xl-4: rgb(0, 0, 0) 2px 0px 7px 0px;
  --shadow-xl-5: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset;
}
```
