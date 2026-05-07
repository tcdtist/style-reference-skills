---
version: alpha
name: "HashiCorp"
description: "This system projects an aura of understated power and technical mastery, like a high-end server silently performing complex operations. Dark, expansive backgrounds (#0D0E12) provide an immersive canvas for crisp white typography (#EFEFF1), creating a high-contrast experience that is clear without being harsh. Strategic use of a vibrant blue (#2B89FF) and subtle internal gradients (#FF8791 to #F9B571, #6C81FF to #C08DFF) on data visualizations and interactive elements provides dynamic focal points against the deep, calm palette. Softly rounded corners (4px, 5px) on interactive elements add a subtle touch of approachability to an otherwise precise and rigorous aesthetic."
theme: "dark"
industry: "devtools"
source_url: "https://hashicorp.com"
refero_style_id: "834ce97f-61f2-4b12-bf5c-e9fad2544456"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923501573-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923501573-thumb.jpg"
extracted_at: "2026-04-11T16:05:25.988Z"
---

# HashiCorp — Style Reference

> Deep Space Command Center. A dark, expansive digital environment where critical data is precisely displayed and interactive elements glow with focused purpose.

**Theme:** dark

**Industry:** devtools

This system projects an aura of understated power and technical mastery, like a high-end server silently performing complex operations. Dark, expansive backgrounds (#0D0E12) provide an immersive canvas for crisp white typography (#EFEFF1), creating a high-contrast experience that is clear without being harsh. Strategic use of a vibrant blue (#2B89FF) and subtle internal gradients (#FF8791 to #F9B571, #6C81FF to #C08DFF) on data visualizations and interactive elements provides dynamic focal points against the deep, calm palette. Softly rounded corners (4px, 5px) on interactive elements add a subtle touch of approachability to an otherwise precise and rigorous aesthetic.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Core | #0D0E12 | `--color-midnight-core` | Global page background, primary dark surface for most elements. |
| Carbon Gray | #000000 | `--color-carbon-gray` | Border colors, text with less prominence than white, subtle button backgrounds. |
| Silver Text | #EFEFF1 | `--color-silver-text` | Primary text color for headlines and body copy on dark backgrounds. |
| Ash Accent | #B2B6BD | `--color-ash-accent` | Secondary text, input outlines, inactive icon color. |
| Slate Text | #D5D7DB | `--color-slate-text` | Tertiary text, navigation items, less prominent body copy. |
| Stone Gray | #656A76 | `--color-stone-gray` | Input placeholder text, subtle borders, descriptive secondary text. |
| Ghost Button | #3B3D45 | `--color-ghost-button` | Ghost button text and borders, less prominent icon colors. |
| Bright White | #FFFFFF | `--color-bright-white` | Active navigation backgrounds, primary button backgrounds. |
| Interactive Blue | #2B89FF | `--color-interactive-blue` | Primary interactive elements: links, CTA buttons, active states, indicators. |
| Link Blue | #2264D6 | `--color-link-blue` | High-prominence links, distinct from standard interactive blue for specific use cases. |
| Accent Purple | #42225B | `--color-accent-purple` | Badge backgrounds, used for specific categorization or highlighting. |
| Cosmic Violet Gradient | #6C81FF | `--color-cosmic-violet-gradient` | Header background, internal card element fills — creates a sense of depth and energy. |
| Sunset Peach Gradient | #FF8791 | `--color-sunset-peach-gradient` | Internal card element fills, data visualization elements — provides a warm, dynamic visual contrast. |

## Tokens — Typography

### system-ui

- **Token:** `--font-system-ui`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 13px, 14px, 15px, 16px, 17px
- **Line heights:** 1.14, 1.20, 1.35, 1.38, 1.50, 1.60, 1.63, 1.69, 1.71
- **Letter spacing:** 0
- **Role:** Default UI text, small body copy, navigation links, button labels. Its neutrality underpins the content-focused approach.

### Hashicorp Sans

- **Token:** `--font-hashicorp-sans`
- **Substitute:** Inter
- **Weights:** 600, 700
- **Sizes:** 13px, 17px, 19px, 26px, 34px, 42px, 52px, 82px
- **Line heights:** 1.17, 1.18, 1.19, 1.21, 1.35, 1.69
- **Letter spacing:** -0.0100em, 0.1000em
- **OpenType features:** 'kern'
- **Role:** Headlines and prominent marketing text. The tight letter spacing for larger sizes (-0.01em) provides a serious, professional edge, while looser spacing (0.10em) is used for specific uppercase treatments, creating a distinctive modern feel.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Helvetica Neue
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.20
- **Letter spacing:** 0
- **Role:** Input field text and some button text. A utilitarian font choice ensuring clarity in interactive forms.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.14 | — | `--text-caption` |
| body | 16px | 1.69 | — | `--text-body` |
| subheading | 19px | 1.19 | -0.19px | `--text-subheading` |
| heading | 34px | 1.21 | -0.34px | `--text-heading` |
| heading-lg | 42px | 1.19 | -0.42px | `--text-heading-lg` |
| display | 82px | 1.17 | -0.82px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-57 | 57px | `--spacing-57` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
| --- | --- |
| input | 5px |
| badges | 5px |
| buttons | 5px |
| default | 4px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(97, 104, 117, 0.05) 0px 1px 1px 0px, rgba(97, 104, 117, 0.05) 0px 2px 2px 0px | `--shadow-xl` |
| xl-2 | rgba(101, 106, 118, 0.05) 0px 1px 1px 0px, rgba(101, 106, 118, 0.05) 0px 2px 2px 0px | `--shadow-xl-2` |
| xl-3 | rgba(97, 104, 117, 0.1) 0px 1px 2px 1px inset | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 20px |
| elementGap | 12px |

## Components

### Announcement Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Resources Card List

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Button

**Role:** cta

Background: #FFF, Text: #3B3D45, Border: rgba(59, 61, 69, 0.4), Radius: 5px, Padding: 6px 11px.

### Secondary Button

**Role:** secondary cta

Background: #FFF, Text: #3B3D45, Border: #000, Radius: 4px, Padding: 8px 12px.

### Ghost Link Button

**Role:** tertiary action

Background: transparent, Text: #D5D7DB, Border: #D5D7DB, Radius: 5px, Padding: 0px.

### Interactive Link Button

**Role:** interactive link

Background: transparent, Text: #2B89FF, Border: #2B89FF, Radius: 5px, Padding: 0px.

### Main Input Field

**Role:** form input

Background: #0D0E12, Text: #EFEFF1, Placeholder: #656A76, Border: #616875, Radius: 5px, Padding: 11px 11px. Focus ring: rgba(97, 104, 117, 0.1) 0px 1px 2px 1px inset.

### Badge

**Role:** categorization, tag

Background: #42225B, Text: #EFEFF1, Radius: 5px, Padding: 3px 7px.

### Hero Message Tag

**Role:** hero decorative

Background: #42225B, Text: #EFEFF1, Radius: 5px, Padding: 3px 7px. Used to highlight specific content or series announcements.

### Gradient Cube Card

**Role:** featured content card

Background: transparent, Border-radius: 0px, No box shadow. Imagery inside contains Cosmic Violet and Sunset Peach gradients.

## Do's and Don'ts

### Do

- Use Midnight Core (#0D0E12) as the primary background color for all main content areas.
- Apply Inter (system-ui) for all body text at 16px weight 400 with a line-height of 1.69, in Silver Text (#EFEFF1).
- Employ Hashicorp Sans at 82px weight 700 with letter-spacing -0.01em for all main display headings.
- Reserve the Interactive Blue (#2B89FF) for all primary interactive elements like call-to-action buttons and active links.
- Ensure input fields use a 5px border-radius and a #616875 border, with #0D0E12 background.
- Maintain a clear visual hierarchy using high contrast typography: #EFEFF1 on #0D0E12, and #3B3D45 on #FFFFFF.
- Use 5px border radius consistently for all buttons and badges for a unified interactive element feel.

### Don't

- Do not use box shadows for general content cards; maintain a flat, layered surface aesthetic for non-interactive elements.
- Avoid introducing additional saturated colors outside of the defined Brand and Accent groups; keep the palette disciplined.
- Do not use generic system fonts for display headings; Hashicorp Sans with its unique letter-spacing is crucial for brand identity.
- Disperse or combine interactive blue (#2B89FF) with neutral gray text; it must stand out clearly as an action indicator.
- Do not deviate from the specified type scale and line-heights; optical adjustments for headings are baked into Hashicorp Sans letter-spacing.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Base Surface | #0D0E12 | Primary page background and foundational dark surface. |
| 1 | Elevated Component Surface | #000000 | Used for some button backgrounds and areas requiring slightly more depth against the base. |

## Elevation

- **Button:** `rgba(97, 104, 117, 0.05) 0px 1px 1px 0px, rgba(97, 104, 117, 0.05) 0px 2px 2px 0px`
- **Navigation Item:** `rgba(101, 106, 118, 0.05) 0px 1px 1px 0px, rgba(101, 106, 118, 0.05) 0px 2px 2px 0px`
- **Input Field Focus:** `rgba(97, 104, 117, 0.1) 0px 1px 2px 1px inset`

## Imagery

This site features a blend of abstract 3D renders and technical illustrations. The renders often depict glowing, geometric forms (like the prominent cube) set against dark, atmospheric backgrounds, serving as decorative and conceptual hero imagery. These visuals use the Cosmic Violet and Sunset Peach gradients. Product-focused illustrations are clean, often showing network diagrams or subtle interface elements. Imagery is typically contained within sections or cards, rarely full-bleed, but forms dynamic focal points. Iconography is clean, outlined, and monochromatic, primarily in Silver Text (#EFEFF1) or Ash Accent (#B2B6BD), switching to Interactive Blue (#2B89FF) for active states. The imagery's role is primarily atmospheric and explanatory, reinforcing the technical and sophisticated brand identity.

## Layout

The layout primarily uses a max-width contained grid for content, though the hero section extends full-bleed with a dark, atmospheric background and a centrally aligned headline. Sections alternate between purely dark backgrounds (#0D0E12) and sections with subtle gradient imagery. Content is typically arranged in clear, organized blocks, often featuring a half-width text column paired with a half-width visual element, or structured as multi-column card grids for features. Vertical spacing between sections is generous and consistent. The header features a top bar navigation that becomes sticky, providing access to primary links and CTAs. The overall feel is spacious and information-dense without being cluttered.

## Similar Brands

- **Vercel** — Similar dark mode UI with a strong emphasis on typographic contrast and a single, vibrant accent color for interactivity.
- **Stripe** — Shares the clean, precise aesthetic with subtle elevation and a focus on clarity through high-contrast text on dark backgrounds.
- **GitHub** — Employs a sophisticated dark theme with clear information hierarchy and a reserved use of accent colors to highlight key actions and data.
- **DigitalOcean** — Features a dark, technical interface with vibrant blue accents for interactive elements and a focus on developer tools and cloud infrastructure.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-core: #0D0E12;
  --color-carbon-gray: #000000;
  --color-silver-text: #EFEFF1;
  --color-ash-accent: #B2B6BD;
  --color-slate-text: #D5D7DB;
  --color-stone-gray: #656A76;
  --color-ghost-button: #3B3D45;
  --color-bright-white: #FFFFFF;
  --color-interactive-blue: #2B89FF;
  --color-link-blue: #2264D6;
  --color-accent-purple: #42225B;
  --color-cosmic-violet-gradient: #6C81FF;
  --color-sunset-peach-gradient: #FF8791;
  --font-system-ui: 'system-ui', Inter;
  --font-hashicorp-sans: 'Hashicorp Sans', Inter;
  --font-arial: 'Arial', Helvetica Neue;
  --text-caption: 13px;
  --leading-caption: 1.14;
  --text-body: 16px;
  --leading-body: 1.69;
  --text-subheading: 19px;
  --leading-subheading: 1.19;
  --tracking-subheading: -0.19px;
  --text-heading: 34px;
  --leading-heading: 1.21;
  --tracking-heading: -0.34px;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.19;
  --tracking-heading-lg: -0.42px;
  --text-display: 82px;
  --leading-display: 1.17;
  --tracking-display: -0.82px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-57: 57px;
  --spacing-64: 64px;
  --spacing-88: 88px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --radius-input: 5px;
  --radius-badges: 5px;
  --radius-buttons: 5px;
  --radius-default: 4px;
  --shadow-xl: rgba(97, 104, 117, 0.05) 0px 1px 1px 0px, rgba(97, 104, 117, 0.05) 0px 2px 2px 0px;
  --shadow-xl-2: rgba(101, 106, 118, 0.05) 0px 1px 1px 0px, rgba(101, 106, 118, 0.05) 0px 2px 2px 0px;
  --shadow-xl-3: rgba(97, 104, 117, 0.1) 0px 1px 2px 1px inset;
  --surface-base-surface: #0D0E12;
  --surface-elevated-component-surface: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-core: #0D0E12;
  --color-carbon-gray: #000000;
  --color-silver-text: #EFEFF1;
  --color-ash-accent: #B2B6BD;
  --color-slate-text: #D5D7DB;
  --color-stone-gray: #656A76;
  --color-ghost-button: #3B3D45;
  --color-bright-white: #FFFFFF;
  --color-interactive-blue: #2B89FF;
  --color-link-blue: #2264D6;
  --color-accent-purple: #42225B;
  --color-cosmic-violet-gradient: #6C81FF;
  --color-sunset-peach-gradient: #FF8791;
  --font-system-ui: 'system-ui', Inter;
  --font-hashicorp-sans: 'Hashicorp Sans', Inter;
  --font-arial: 'Arial', Helvetica Neue;
  --text-caption: 13px;
  --leading-caption: 1.14;
  --text-body: 16px;
  --leading-body: 1.69;
  --text-subheading: 19px;
  --leading-subheading: 1.19;
  --tracking-subheading: -0.19px;
  --text-heading: 34px;
  --leading-heading: 1.21;
  --tracking-heading: -0.34px;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.19;
  --tracking-heading-lg: -0.42px;
  --text-display: 82px;
  --leading-display: 1.17;
  --tracking-display: -0.82px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-57: 57px;
  --spacing-64: 64px;
  --spacing-88: 88px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --radius-input: 5px;
  --radius-badges: 5px;
  --radius-buttons: 5px;
  --radius-default: 4px;
  --shadow-xl: rgba(97, 104, 117, 0.05) 0px 1px 1px 0px, rgba(97, 104, 117, 0.05) 0px 2px 2px 0px;
  --shadow-xl-2: rgba(101, 106, 118, 0.05) 0px 1px 1px 0px, rgba(101, 106, 118, 0.05) 0px 2px 2px 0px;
  --shadow-xl-3: rgba(97, 104, 117, 0.1) 0px 1px 2px 1px inset;
  --surface-base-surface: #0D0E12;
  --surface-elevated-component-surface: #000000;
}
```
