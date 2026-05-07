---
version: alpha
name: "Zed"
description: "Zed's visual design evokes the quiet confidence of precision engineering, much like a well-crafted mechanical keyboard. A primary palette of cool blues and grays, accented by vibrant UI indicators, creates a focused, high-performance atmosphere. The interplay of crisp, small typography and generous negative space ensures clarity, allowing the powerful functionality of the editor to take center stage."
theme: "light"
industry: "devtools"
source_url: "https://zed.dev"
refero_style_id: "a541789c-36e7-45a4-9d1d-143921a82a8b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923018209-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923018209-thumb.jpg"
extracted_at: "2026-04-11T15:57:24.708Z"
---

# Zed — Style Reference

> precision-engineered dark mode text editor

**Theme:** light

**Industry:** devtools

Zed's visual design evokes the quiet confidence of precision engineering, much like a well-crafted mechanical keyboard. A primary palette of cool blues and grays, accented by vibrant UI indicators, creates a focused, high-performance atmosphere. The interplay of crisp, small typography and generous negative space ensures clarity, allowing the powerful functionality of the editor to take center stage.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Blue | #1348dc | `--color-midnight-blue` | Primary brand color for prominent headings, active links, and key interactive elements. Conveys a sense of depth and authority. |
| Sky Blue | #2b7fff | `--color-sky-blue` | Illustrative fill and stroke color, often seen in abstract graphics or larger UI elements. Provides a brighter contrast to Midnight Blue. |
| Deep Harbor | #464b57 | `--color-deep-harbor` | Dark primary text, button text on lighter backgrounds, and subtle borders. Forms the backbone of the typographic hierarchy. |
| Iceberg Blue | #8ec5ff | `--color-iceberg-blue` | Button states, secondary accents, and illustrative fills. Provides a lighter, more interactive shade of blue. |
| Pale Arctic | #bedbff | `--color-pale-arctic` | Subtle borders and background tints for UI elements, offering a very light blue accent. |
| Cerulean Haze | #74ade8 | `--color-cerulean-haze` | Secondary text in body, icons, and less prominent interactive states. A mid-tone blue that supports the primary brand colors. |
| Carbon Gray | #5d636f | `--color-carbon-gray` | Subtle text, navigation items, and icon strokes. A darker gray for less prominent semantic information. |
| Pine Green | #a1c181 | `--color-pine-green` | Semantic positive indicators and specific body text highlights. Infrequent use provides impact. |
| Rosewood Red | #d07277 | `--color-rosewood-red` | Semantic warning or error indicators, and selected body text elements. Offers a warm contrast. |
| Golden Ochre | #dec184 | `--color-golden-ochre` | Amber accents for specific body text, icons, warning states, and occasional backgrounds. Reserved for highlights. |
| Page Background | #e5e7eb | `--color-page-background` | Default page background. A very light, almost achromatic off-white providing a clean canvas. |
| Off-Black Text | #3a3d43 | `--color-off-black-text` | Primary body text color throughout the site. Provides clear contrast against lighter backgrounds. |
| Medium Gray | #b2b5bb | `--color-medium-gray` | Secondary text, subtle borders, and less prominent buttons. A mid-tone gray for supporting information. |
| Light Gray Border | #cccfd3 | `--color-light-gray-border` | Subtle borders, dividers, and background tints for UI elements. Creates clear separation without harsh lines. |
| White Surface | #ffffff | `--color-white-surface` | Card backgrounds, elevated UI surfaces, and some button fills. Provides maximum contrast and a clean modern feel. |
| Dark Editor Surface | #282c33 | `--color-dark-editor-surface` | Dark mode background for the embedded code editor. A very dark, almost black surface. |
| Input Background | #f4f4f2 | `--color-input-background` | Subtle background for input fields, providing slight differentiation from the page background. |
| Dark Modal Background | #2f343 | `--color-dark-modal-background` | Darker background for prominent interactive elements, like a modal or specific button states. |
| Accent Blue Shadow | #053794 | `--color-accent-blue-shadow` | Shadow color for subtle elevation, indicating interactive elements like navigation items. A darker, desaturated blue. |

## Tokens — Typography

### Writer

- **Token:** `--font-writer`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 10px, 11px, 12px, 13px, 14px, 16px
- **Line heights:** 1.10, 1.33, 1.43, 1.50, 1.71
- **Letter spacing:** -0.0250em
- **Role:** The primary font for body text, button labels, and general UI elements. Its relatively tight letter-spacing at all sizes enhances readability for dense code-editor-like content.

### Zed Mono

- **Token:** `--font-zed-mono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 10px, 11px, 12px, 24px
- **Line heights:** 1.33, 1.50, 1.67, 2.00
- **Letter spacing:** 0.0500em
- **Role:** A monospaced font used for code blocks, input fields, and specific technical UI elements. Its wider letter-spacing provides clear distinction from the main body text, mimicking a terminal or editor environment.

### Plex Serif

- **Token:** `--font-plex-serif`
- **Substitute:** IBM Plex Serif
- **Weights:** 340, 400
- **Sizes:** 13px, 14px, 15px, 17px, 26px, 48px
- **Line heights:** 1.10, 1.20, 1.25, 1.43, 1.50
- **Letter spacing:** -0.0200em
- **Role:** Primarily used for page headings and subheadings. The delicate weight 340 for larger sizes provides an elegant, approachable feel contrasting with the functional monospaced and sans-serif fonts, softening the overall technical aesthetic.

### ui-monospace

- **Token:** `--font-ui-monospace`
- **Substitute:** Menlo
- **Weights:** 400, 700
- **Sizes:** 11px, 12px
- **Line heights:** 1.00, 1.33, 1.43
- **Letter spacing:** -0.0320em
- **Role:** System monospaced font used for specific navigation or technical context where compact, crisp text is required. Its very tight letter-spacing prioritizes information density.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.1 | -0.25px | `--text-caption` |
| heading | 26px | 1.25 | -0.52px | `--text-heading` |
| display | 48px | 1.1 | -0.96px | `--text-display` |

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
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-224 | 224px | `--spacing-224` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 2px |
| buttons | 2px |
| default | 2px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(111, 123, 144, 0.1) 0px -2px 0px 0px inset | `--shadow-xl` |
| xl-2 | rgba(111, 123, 144, 0.05) 0px -2px 0px 0px inset | `--shadow-xl-2` |
| xl-3 | rgb(5, 55, 148) 0px -2px 0px 0px inset, rgb(230, 239, 254) 0px 1px 3px 0px | `--shadow-xl-3` |
| xl-4 | rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px | `--shadow-xl-4` |
| xl-5 | rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px | `--shadow-xl-5` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Stat Block — Open Source Metrics

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Link

**Role:** Interactive element in the main header.

Text in Writer font, weight 400, color Off-Black Text (#3a3d43). On hover, it shows a subtle bottom border or background change, occasionally with a box-shadow of rgb(5, 55, 148) 0px -2px 0px 0px inset, rgb(230, 239, 254) 0px 1px 3px 0px for active states.

### Secondary Ghost Button

**Role:** Subtle call to action or supplementary action.

Text color rgb(0, 0, 0), no background, no border, with 4px border-radius. Padding of 0px top/bottom, 8px right, 10px left. Very subtle, almost link-like.

### Brand Secondary Button (Light)

**Role:** Prominent but not primary action.

Background color oklab(0.999994 0.0000455677 0.0000200868 / 0.6) (essentially a very light, desaturated blue), text color oklch(0.359228 0.010478 262.86) (a deep indigo-gray). 4px border-radius, 10px padding all around. Has a subtle oklch(0.852786 0.00594737 262.86) (light indigo-gray) top border.

### Dark Code Block Button

**Role:** Interactive elements within the dark-themed code editor preview.

Background color rgb(46, 52, 62) (a dark slate), text color rgb(220, 224, 229) (a light gray). 2px border-radius, no padding defined, indicating tight internal spacing or inherited context. Has a rgb(70, 75, 87) border.

### Navigation Context Button (Dark Text)

**Role:** Navigation or contextual actions within a darker UI section.

No background, text color rgb(220, 224, 229) (light gray). No border or padding, often takes on the appearance of a focused textual element within an interactive zone with a oklch(0.928 0.006 264.531) (pale indigo-gray) border.

### Code Input Field

**Role:** Used for user input in code-related contexts.

Transparent background, text color rgb(220, 224, 229) (light gray), no border. 0px border-radius, and 4px padding on all sides. Uses Zed Mono font for input.

### Feature Card

**Role:** Showcasing individual product features.

Card background is White Surface (#ffffff), with text in Off-Black Text (#3a3d43). Padding of 16px to 24px and a 2px border-radius. Features a subtle inset shadow rgba(111, 123, 144, 0.05) 0px -2px 0px 0px for visual depth. The content within has tight spacing, typically 6px row gap.

### Code Editor Frame

**Role:** Visual container for the embedded code editor preview.

Background color Dark Editor Surface (#282c33). Features box-shadow rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px for a distinct elevated appearance. Interior content uses Zed Mono typography.

## Do's and Don'ts

### Do

- Use Midnight Blue (#1348dc) for all primary calls to action, prominent links, and main interactive button states.
- Employ the 2px border-radius consistently across all interactive elements, cards, and image containers, giving a subtle but unified crispness.
- Maintain a clear visual hierarchy by utilizing Plex Serif weight 340 for major headings and Writer weight 400 for all body text.
- Apply specific letter-spacing: -0.0250em for Writer font to optimize readability for dense UI, and 0.0500em for Zed Mono to distinguish code/technical text.
- Use Page Background (#e5e7eb) as the canvas for most content sections, ensuring a clean and bright base.
- Incorporate subtle inset box-shadows (e.g., rgba(111, 123, 144, 0.1) 0px -2px 0px 0px inset) on interactive elements or cards to create depth without heavy drop shadows.
- Limit the use of saturated colors like Pine Green (#a1c181), Rosewood Red (#d07277), and Golden Ochre (#dec184) to semantic indicators or specific highlights to maximize their impact.

### Don't

- Do not introduce strong drop shadows; rely on the subtle inset shadows or lighter elevated box-shadows.
- Avoid large, ornate typography. The design prioritizes small, precise text with generous line heights over oversized headlines.
- Do not use generic system fonts where custom fonts Writer, Zed Mono, or Plex Serif are specified, as their unique letter-spacing and weights are crucial to the brand identity.
- Refrain from using heavily saturated background colors for content sections; stick to the neutral scale and slight blue tints.
- Do not apply rounded corners greater than 2px to general UI elements, as this contradicts the overall crisp, engineered aesthetic.
- Avoid cluttering layouts with excessive elements; maintain generous elementGap (6px, 10px, 12px) and sectionGap (64px) for clear information separation.
- Do not use more than two saturated brand colors prominently in any single view, to keep the focus on clarity and code editor aesthetic.

## Elevation

- **Shadow 1:** `rgba(111, 123, 144, 0.1) 0px -2px 0px 0px inset`
- **Shadow 2:** `rgba(111, 123, 144, 0.05) 0px -2px 0px 0px inset`
- **Shadow 3:** `rgb(5, 55, 148) 0px -2px 0px 0px inset, rgb(230, 239, 254) 0px 1px 3px 0px`
- **Shadow 4:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **Shadow 5:** `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`

## Imagery

The site's visual language is a blend of product screenshots, user avatars, and abstract, geometric line-art illustrations. Product screenshots are typically high-fidelity captures of the Zed editor in a dark mode theme, shown in context or isolated as compelling visuals. They are often full-bleed or centrally placed, occupying significant visual real estate to showcase the UI. User avatars are small, circular, and appear in grids to convey community and social proof. Abstract illustrations are sparse, utilize thin linework, and soft blue fills (e.g., Sky Blue #2b7fff), serving a decorative atmospheric role without distracting from the UI. There's a notable absence of lifestyle photography. The overall density is balanced, with imagery serving as key focal points amidst text-heavy sections, acting as explanatory content and product showcase.

## Layout

The page primarily uses a max-width contained layout, approximately 1200px, centered on a light Page Background (#e5e7eb). The hero section is centered with a prominent headline and call-to-action buttons. Content sections often alternate between wide, full-width blocks and narrower, centered content divisions. There's a consistent vertical rhythm, with sections separated by significant sectionGap (64px). Text-heavy sections frequently use a 2-column layout or a single centered column. Feature descriptions often employ a 3-column grid for overview. Embedded code editor previews are typically wide, visually striking blocks. The navigation is a sticky top bar with clearly defined interactive elements.

## Similar Brands

- **VS Code** — Developer tool with a focus on clean, functional UI, high contrast, and dark mode for code display, using minimal visual flourishes.
- **Linear** — SaaS product for developers/teams featuring a minimalist design, strong typography, and a refined use of small radius and subtle shadows on interactive elements.
- **Superhuman** — Productivity application with a clean, high-performance aesthetic, prioritizing information density and crisp typography with limited color accents.
- **Vercel** — DevOps platform with a strong emphasis on dark mode UI, precise spacing, and subtle blue/gray color palettes for technical content presentation.
- **Raycast** — Utility tool with an emphasis on speed and efficiency reflected in its UI, featuring a dark/light mode toggle with simple typography and minimal visual clutter, focusing on functional aesthetics.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-blue: #1348dc;
  --color-sky-blue: #2b7fff;
  --color-deep-harbor: #464b57;
  --color-iceberg-blue: #8ec5ff;
  --color-pale-arctic: #bedbff;
  --color-cerulean-haze: #74ade8;
  --color-carbon-gray: #5d636f;
  --color-pine-green: #a1c181;
  --color-rosewood-red: #d07277;
  --color-golden-ochre: #dec184;
  --color-page-background: #e5e7eb;
  --color-off-black-text: #3a3d43;
  --color-medium-gray: #b2b5bb;
  --color-light-gray-border: #cccfd3;
  --color-white-surface: #ffffff;
  --color-dark-editor-surface: #282c33;
  --color-input-background: #f4f4f2;
  --color-dark-modal-background: #2f343;
  --color-accent-blue-shadow: #053794;
  --font-writer: 'Writer', Inter;
  --font-zed-mono: 'Zed Mono', IBM Plex Mono;
  --font-plex-serif: 'Plex Serif', IBM Plex Serif;
  --font-ui-monospace: 'ui-monospace', Menlo;
  --text-caption: 10px;
  --leading-caption: 1.1;
  --tracking-caption: -0.25px;
  --text-heading: 26px;
  --leading-heading: 1.25;
  --tracking-heading: -0.52px;
  --text-display: 48px;
  --leading-display: 1.1;
  --tracking-display: -0.96px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-224: 224px;
  --radius-cards: 2px;
  --radius-buttons: 2px;
  --radius-default: 2px;
  --shadow-xl: rgba(111, 123, 144, 0.1) 0px -2px 0px 0px inset;
  --shadow-xl-2: rgba(111, 123, 144, 0.05) 0px -2px 0px 0px inset;
  --shadow-xl-3: rgb(5, 55, 148) 0px -2px 0px 0px inset, rgb(230, 239, 254) 0px 1px 3px 0px;
  --shadow-xl-4: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl-5: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-blue: #1348dc;
  --color-sky-blue: #2b7fff;
  --color-deep-harbor: #464b57;
  --color-iceberg-blue: #8ec5ff;
  --color-pale-arctic: #bedbff;
  --color-cerulean-haze: #74ade8;
  --color-carbon-gray: #5d636f;
  --color-pine-green: #a1c181;
  --color-rosewood-red: #d07277;
  --color-golden-ochre: #dec184;
  --color-page-background: #e5e7eb;
  --color-off-black-text: #3a3d43;
  --color-medium-gray: #b2b5bb;
  --color-light-gray-border: #cccfd3;
  --color-white-surface: #ffffff;
  --color-dark-editor-surface: #282c33;
  --color-input-background: #f4f4f2;
  --color-dark-modal-background: #2f343;
  --color-accent-blue-shadow: #053794;
  --font-writer: 'Writer', Inter;
  --font-zed-mono: 'Zed Mono', IBM Plex Mono;
  --font-plex-serif: 'Plex Serif', IBM Plex Serif;
  --font-ui-monospace: 'ui-monospace', Menlo;
  --text-caption: 10px;
  --leading-caption: 1.1;
  --tracking-caption: -0.25px;
  --text-heading: 26px;
  --leading-heading: 1.25;
  --tracking-heading: -0.52px;
  --text-display: 48px;
  --leading-display: 1.1;
  --tracking-display: -0.96px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-224: 224px;
  --radius-cards: 2px;
  --radius-buttons: 2px;
  --radius-default: 2px;
  --shadow-xl: rgba(111, 123, 144, 0.1) 0px -2px 0px 0px inset;
  --shadow-xl-2: rgba(111, 123, 144, 0.05) 0px -2px 0px 0px inset;
  --shadow-xl-3: rgb(5, 55, 148) 0px -2px 0px 0px inset, rgb(230, 239, 254) 0px 1px 3px 0px;
  --shadow-xl-4: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl-5: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
}
```
