---
version: alpha
name: "Grafbase"
description: "Grafbase deploys a precise, engineering-focused aesthetic, balancing stark black and white contrasts with subtle, nuanced grays to create an information-dense yet navigable interface. A single vibrant teal-green gradient acts as a beacon for critical calls to action, injecting a dynamic energy into an otherwise composed presentation. The design leverages a tight Inter type scale and generous padding to ensure clarity and hierarchy, making complex API governance feel structured and approachable."
theme: "light"
industry: "devtools"
source_url: "https://grafbase.com"
refero_style_id: "1c1d3939-8d82-4907-aa3c-c9b2fcfbab4f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923502160-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923502160-thumb.jpg"
extracted_at: "2026-04-11T16:05:23.106Z"
---

# Grafbase — Style Reference

> Architectural blueprint on white marble.  The interface feels like a meticulously drafted technical diagram, laid out on a clean, bright surface.

**Theme:** light

**Industry:** devtools

Grafbase deploys a precise, engineering-focused aesthetic, balancing stark black and white contrasts with subtle, nuanced grays to create an information-dense yet navigable interface. A single vibrant teal-green gradient acts as a beacon for critical calls to action, injecting a dynamic energy into an otherwise composed presentation. The design leverages a tight Inter type scale and generous padding to ensure clarity and hierarchy, making complex API governance feel structured and approachable.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #1b1b1b | `--color-midnight-ink` | Primary text, prominent icons, button text on light backgrounds, strong borders. |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, button text on dark backgrounds. |
| Cloud Gray | #eaeaea | `--color-cloud-gray` | Secondary button backgrounds, section dividers, subtle background accents. |
| Slate Text | #60646c | `--color-slate-text` | Secondary text, placeholder text, descriptive labels. |
| Ash Gray | #7c7c7c | `--color-ash-gray` | Tertiary text, less prominent UI elements. |
| Cloud Border | #e0e1e6 | `--color-cloud-border` | Subtle borders for inputs and cards. |
| System Mint | #8dc63f | `--color-system-mint` | Accent for certain icons and illustrations. |
| System Sky | #27aae1 | `--color-system-sky` | Accent for certain icons and illustrations. |
| Plasma Teal Gradient | #19a05f | `--color-plasma-teal-gradient` | Call-to-action buttons, active states, key visual indicators for urgency and interaction. |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 600, 700
- **Sizes:** 13px, 14px, 16px, 20px, 24px, 40px, 90px
- **Line heights:** 1.00, 1.10, 1.43, 1.50, 2.00
- **Letter spacing:** -0.7px at 90px, -0.5px at 40px, normal at smaller sizes
- **Role:** All primary text, headings, body copy, navigation, buttons. The negative letter spacing at display sizes contributes to a crisp, compact headline appearance.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| button | 16px | 1.5 | — | `--text-button` |
| subheading | 20px | 1.5 | — | `--text-subheading` |
| heading | 24px | 1.1 | -0.5px | `--text-heading` |
| heading-lg | 40px | 1.1 | -1px | `--text-heading-lg` |
| display | 90px | 1 | -4.5px | `--text-display` |

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
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-163 | 163px | `--spacing-163` |

### Border Radius

| Element | Value |
| --- | --- |
| misc | 20px |
| cards | 12px |
| buttons | 6px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.15) 0px 4px 20px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Announcement Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Comparison Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button

**Role:** Call to action

Background is Plasma Teal Gradient, text is Canvas White (#ffffff). Radius is 6px. Padding: 14px vertical, 28px horizontal. Applies a shadow of rgba(0, 0, 0, 0.15) 0px 4px 20px 0px only on hover/active states.

### Secondary Ghost Button

**Role:** Alternative action

Transparent background, Midnight Ink (#1b1b1b) text and 1px border. No radius, instead it's an underline-like treatment. Padding: 0px vertical, 8px horizontal. Used for inline links or subtle actions.

### Secondary Filled Button

**Role:** Less prominent action

Background is Cloud Gray (#eaeaea), text is Midnight Ink (#1b1b1b). Radius is 6px. Padding: 14px vertical, 28px horizontal. Border color is Cloud Border (#e0e1e6).

### Circular Icon Button

**Role:** Navigation or small interactive elements

Background is Canvas White (#ffffff), text/icon is Slate Text (#60646c). Radius is 40px (50% for circular shape). Padding: 15px all around. Used for arrow navigation in galleries.

### Navigation Link

**Role:** Primary navigation links

Text is Midnight Ink (#1b1b1b) weight 500. Underlined on hover. Specific text size and line height according to typography scale for navigation (e.g., 16px, 1.5lh).

### Hero Headline

**Role:** Prominent page titles

Inter font, weight 700 at 90px size, line height 1.0, letter spacing -0.05em (-4.5px). Color is Midnight Ink (#1b1b1b). Dominates the initial view.

### Body Text Paragraph

**Role:** Standard informational text

Inter font, weight 400 at 16px size, line height 1.5. Color is Slate Text (#60646c) for descriptive content, Midnight Ink (#1b1b1b) for more prominent body text.

### Feature Card

**Role:** Showcasing product features or benefits

Canvas White (#ffffff) background. Radius is 12px. Padding is 24px inner. Contains a graphic, a headline (Inter 24px, 1.1lh, -0.025em letter spacing), and descriptive text (Inter 16px, 1.5lh).

## Do's and Don'ts

### Do

- Use Plasma Teal Gradient for all primary calls to action to ensure consistent visual prioritization.
- Apply Inter font with specific letter-spacing adjustments: -0.05em for 90px headings and -0.025em for 40px headings.
- Maintain a clear visual hierarchy by utilizing Midnight Ink (#1b1b1b) for main headings and interactive elements, and Slate Text (#60646c) for supporting text.
- Implement 6px border-radius for all interactive buttons and 12px for content cards to maintain a subtle sense of digital craftsmanship.
- Leverage the Canvas White (#ffffff) as the dominant page background, ensuring a clean and expansive feel for content.
- Ensure generous internal padding of 24px for all card-like components to provide ample breathing room for content.
- Prioritize explicit contrast pairings: #1b1b1b on #ffffff (17.2:1 AAA) and #1b1b1b on #eaeaea (14.3:1 AAA).

### Don't

- Do not introduce new vibrant chromatic colors beyond the established accent palette for illustrations and the brand gradient.
- Avoid using hard-edged rectangles without any radius; all major interactive elements and cards should use either 6px or 12px radii.
- Do not deviate from the Inter typeface; custom fonts are not part of this system.
- Refrain from heavy drop shadows; the only significant shadow is on interactive buttons during hover/active states.
- Do not use highly saturated colors for large background areas or extensive text, sticking to the neutral and accent palette for main UI.
- Avoid reducing vertical spacing below the 24px element gap between related components.
- Do not combine multiple gradients; the Plasma Teal Gradient is the sole approved gradient for brand identity.

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.15) 0px 4px 20px 0px`

## Imagery

The site's imagery is primarily composed of technical product screenshots embedded within clean, minimal UI mockups, and abstract geometric illustrations. Product screenshots are typically tight crops, showcasing specific functionality with a focus on data visualization (charts, code snippets). Illustrations are flat, two-dimensional, geometric, and often outlined, using the muted accent colors from the palette to define elements. Icons are outlined, with a moderate stroke weight, and monochromatic (using Midnight Ink or Slate Text). Imagery serves to explain complex technical concepts and showcase product capabilities directly, rather than create a mood. They are generally contained within white or light gray card-like segments, avoiding full-bleed applications. Density is balanced, with imagery typically accompanying text blocks to break up information.

## Layout

The layout follows a content-width container model, centered on the page, with a full-bleed top announcement banner. The hero section is a two-column split, with a large, left-aligned headline and supporting text occupying one half, and a product screenshot or interactive demo occupying the other. Sections alternate between a strong left-aligned headline with descriptive text, and a mix of single-column feature descriptions and 3-column card grids. Vertical rhythm is maintained through consistent `sectionGap` of 64px, creating spacious breaks between content blocks. Navigation is a sticky top bar with a left-aligned logo and right-aligned links and buttons.

## Similar Brands

- **Vercel** — Shares a precise, high-contrast, text-dominant aesthetic with subtle accent colors and clean product mockups.
- **Linear** — Similar approach to minimalist, functional design with strong typography, ample whitespace, and focused interactive elements.
- **Stripe (developer docs)** — Employs comparable information-dense but organized layouts, with clear hierarchy and functional, non-distracting visual elements.
- **Supabase** — A developer-focused tool with a clean, modern aesthetic, relying on strong typography and a limited, effective color palette for its UI.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #1b1b1b;
  --color-canvas-white: #ffffff;
  --color-cloud-gray: #eaeaea;
  --color-slate-text: #60646c;
  --color-ash-gray: #7c7c7c;
  --color-cloud-border: #e0e1e6;
  --color-system-mint: #8dc63f;
  --color-system-sky: #27aae1;
  --color-plasma-teal-gradient: #19a05f;
  --font-inter: 'Inter', system-ui, sans-serif;
  --text-button: 16px;
  --leading-button: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --text-heading: 24px;
  --leading-heading: 1.1;
  --tracking-heading: -0.5px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1px;
  --text-display: 90px;
  --leading-display: 1;
  --tracking-display: -4.5px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-128: 128px;
  --spacing-163: 163px;
  --radius-misc: 20px;
  --radius-cards: 12px;
  --radius-buttons: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.15) 0px 4px 20px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #1b1b1b;
  --color-canvas-white: #ffffff;
  --color-cloud-gray: #eaeaea;
  --color-slate-text: #60646c;
  --color-ash-gray: #7c7c7c;
  --color-cloud-border: #e0e1e6;
  --color-system-mint: #8dc63f;
  --color-system-sky: #27aae1;
  --color-plasma-teal-gradient: #19a05f;
  --font-inter: 'Inter', system-ui, sans-serif;
  --text-button: 16px;
  --leading-button: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.5;
  --text-heading: 24px;
  --leading-heading: 1.1;
  --tracking-heading: -0.5px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1px;
  --text-display: 90px;
  --leading-display: 1;
  --tracking-display: -4.5px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-128: 128px;
  --spacing-163: 163px;
  --radius-misc: 20px;
  --radius-cards: 12px;
  --radius-buttons: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.15) 0px 4px 20px 0px;
}
```
