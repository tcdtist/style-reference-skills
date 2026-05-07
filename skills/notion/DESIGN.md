---
version: alpha
name: "Notion"
description: "Notion's visual style evokes a deep-space command center, merging functionality with an ethereal atmosphere. Dark, often indigo-tinted, backgrounds provide a canvas against which interface elements glow with a distinct, often cool-toned vibrancy. Thoughtful use of subtle shadows and translucency creates an impression of layered depth and sophisticated tooling, without overt skeuomorphism."
theme: "dark"
industry: "saas"
source_url: "https://www.notion.com"
refero_style_id: "f58e99d1-940d-4254-8822-5d856bba6505"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777421776475-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777421776475-thumb.jpg"
extracted_at: "2026-04-29T00:16:39.889Z"
---

# Notion — Style Reference

> Deep-space command center

**Theme:** dark

**Industry:** saas

Notion's visual style evokes a deep-space command center, merging functionality with an ethereal atmosphere. Dark, often indigo-tinted, backgrounds provide a canvas against which interface elements glow with a distinct, often cool-toned vibrancy. Thoughtful use of subtle shadows and translucency creates an impression of layered depth and sophisticated tooling, without overt skeuomorphism.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Abyss | #000000 | `--color-midnight-abyss` | Page background, primary text, prominent borders, icon fills. |
| Ghostly Gray | #0b0b0b | `--color-ghostly-gray` | Secondary text on light backgrounds, subtle borders, card backgrounds that are slightly off pure black. |
| Canvas White | #ffffff | `--color-canvas-white` | Text on dark backgrounds, primary card surfaces, interactive elements like button text. |
| Mist Gray | #f6f5f4 | `--color-mist-gray` | Observed in other borderColor, nav borderColor, other color. Extracted usage does not support a distinct primary control color. |
| Slate Text | #615d59 | `--color-slate-text` | Muted body text, secondary icon colors, functional interface elements. |
| Dim Gray | #a39e98 | `--color-dim-gray` | Placeholder text, even more muted body text, tertiary icon fills. |
| Iron Border | #dddddd | `--color-iron-border` | Input element borders in light contexts. |
| Deep Space Violet | #02093a | `--color-deep-space-violet` | Dark card backgrounds, embedded app frames, main hero background. |
| Cosmic Blue | #455dd3 | `--color-cosmic-blue` | Primary action buttons, active navigation states – a deep, vivid blue signifying interaction. |
| Link Ocean | #0075de | `--color-link-ocean` | Interactive text links, outlined button borders – a bright, active blue for clickability. |
| Sky Glint | #62aef0 | `--color-sky-glint` | Highlight accents in headings and decorative shapes, often alongside text for emphasis. |
| Pixel Blush | #f77463 | `--color-pixel-blush` | Decorative background accents, highlighting specific content blocks. |
| Mint Glitch | #2a9d99 | `--color-mint-glitch` | Decorative background accents. |
| Sunflare | #ffc950 | `--color-sunflare` | Decorative background accents. |
| Orange Boost | #ff8a33 | `--color-orange-boost` | Decorative background accents. |
| Magenta Spark | #ff83dd | `--color-magenta-spark` | Decorative background accents. |
| Purple Haze | #ad6ded | `--color-purple-haze` | Decorative background accents. |
| Blue Notification | #097fe8 | `--color-blue-notification` | Informational badge backgrounds and text in light contexts, specific heading highlights. |
| Info Tint | #f2f9ff | `--color-info-tint` | Light background for informational badges. |

## Tokens — Typography

### NotionInter

- **Token:** `--font-notioninter`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 15px, 16px, 20px, 22px, 24px, 26px, 40px, 42px, 54px, 64px
- **Line heights:** 0.83, 1.00, 1.04, 1.14, 1.20, 1.23, 1.27, 1.33, 1.35, 1.40, 1.43, 1.50
- **Letter spacing:** -0.0360em, -0.0350em, -0.0330em, -0.0240em, -0.0110em, -0.0060em, 0.0100em
- **OpenType features:** "lnum" on, "locl" 0
- **Role:** The primary typeface for all UI elements and body text. Its range of weights and precise tracking controls support both compact information display and commanding headlines. The number and locale features ensure consistent numerical presentation.

### Lyon Text

- **Token:** `--font-lyon-text`
- **Substitute:** Georgia
- **Weights:** 400
- **Sizes:** 32px
- **Line heights:** 1.25
- **Letter spacing:** normal
- **Role:** A serif typeface used sparingly for specific headings, providing a contrasting, authoritative editorial feel against the more technical NotionInter without overpowering it.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.43 | 0.1px | `--text-caption` |
| body-sm | 14px | 1.43 | 0.1px | `--text-body-sm` |
| body-lg | 16px | 1.35 | 0.1px | `--text-body-lg` |
| subheading | 20px | 1.33 | -0.22px | `--text-subheading` |
| heading | 24px | 1.27 | -0.36px | `--text-heading` |
| heading-lg | 26px | 1.23 | -0.36px | `--text-heading-lg` |
| display-sm | 40px | 1.2 | -0.44px | `--text-display-sm` |
| display | 54px | 1.04 | -0.66px | `--text-display` |
| display-lg | 64px | 0.83 | -0.44px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
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
| spacing-34 | 34px | `--spacing-34` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-92 | 92px | `--spacing-92` |
| spacing-106 | 106px | `--spacing-106` |
| spacing-121 | 121px | `--spacing-121` |
| spacing-125 | 125px | `--spacing-125` |
| spacing-180 | 180px | `--spacing-180` |
| spacing-186 | 186px | `--spacing-186` |
| spacing-316 | 316px | `--spacing-316` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| badges | 9999px |
| inputs | 4px |
| buttons | 8px |
| default | 12px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.01) 0px 1px 3px 0px, rgba(0, 0, 0, 0.02) 0px 3px 7px 0px, rgba(0, 0, 0, 0.02) 0px 7px 15px 0px, rgba(0, 0, 0, 0.04) 0px 14px 28px 0px, rgba(0, 0, 0, 0.05) 0px 23px 52px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 32px |
| cardPadding | 24px |
| elementGap | 24px |

## Components

### Nav Header Button

**Role:** Navigation, utility

Ghost button with Canvas White text on transparent background, 8px border-radius, 6px vertical padding, 15px horizontal padding. On hover, the text color changes or subtle background appears.

### Product Feature Card

**Role:** Content container

White background (#ffffff), 12px border-radius, no shadow, 24px padding on all sides. Used for showcasing product features and testimonials.

### Accent Block Card

**Role:** Decorative content housing

Deep Space Violet (#02093a) background, 12px border-radius, no shadow, 24px padding on all sides. Used for highlighting specific content with a dark, rich backdrop.

### Call to Action Button (Filled)

**Role:** Primary interaction

Cosmic Blue (#455dd3) background, Canvas White (#ffffff) text, 8px border-radius, 12px vertical padding, 16px horizontal padding.

### Call to Action Button (Outlined)

**Role:** Secondary interaction

Transparent background, Link Ocean (#0075de) text and border, 8px border-radius, 12px vertical padding, 16px horizontal padding. No distinct background color, uses Link Ocean for foreground and border for emphasis.

### Ghost Text Button

**Role:** Tertiary interaction

Transparent background, Muted Slate (#a39e98) text, 8px border-radius, 12px vertical padding, 16px horizontal padding. Used for less prominent actions.

### Pill Badge (Info)

**Role:** Informational tag

Info Tint (#f2f9ff) background, Blue Notification (#097fe8) text, 9999px border-radius, 4px vertical padding, 8px horizontal padding. Used for status indicators and new features.

### Text Input

**Role:** Form Element

Transparent background, Midnight Abyss (#000000) text (or equivalent dark text), Iron Border (#dddddd) border, 4px border-radius, 6px padding on all sides. Used in contexts like the internal document editor.

## Do's and Don'ts

### Do

- Prioritize NotionInter for all text elements, leveraging its variable weights for hierarchy and readability.
- Use Midnight Abyss (#000000) as the primary page background, establishing a dark theme foundation.
- Employ Cosmic Blue (#455dd3) for primary action buttons to clearly define interactive elements.
- Apply 12px border-radius to cards and larger content blocks to maintain a consistent soft edge.
- Utilize Ghostly Gray (#0b0b0b) for nested card backgrounds within the primary dark canvas to suggest depth.
- Use 24px for card padding and core element gaps to provide adequate breathing room between content.
- Reserve Lyon Text for distinctive section headlines to introduce an editorial contrast.

### Don't

- Avoid using bright, saturated colors for large background areas unless they are intentionally decorative and contained.
- Do not introduce sharp corners on cards or primary interface elements; adhere to the 12px or 8px standard radii.
- Refrain from using strong box-shadows; a subtle layered depth is preferred over pronounced elevation.
- Do not deviate from the established type scale and letter-spacing values to maintain typographic clarity and brand voice.
- Avoid using Link Ocean (#0075de) as a primary button fill; it is intended for outlined buttons and text links.
- Do not mix and match spacing units outside the 4px base unit and established tokens; consistency is key.
- Do not use generic system fonts, NotionInter and Lyon Text are critical for brand identity.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Midnight Abyss | #000000 | Primary page background and deepest UI layer. |
| 1 | Deep Space Violet | #02093a | Elevated card backgrounds, embedded content frames, and hero sections. |
| 2 | Ghostly Gray | #0b0b0b | Sub-surfaces within cards or slightly more elevated elements, like embedded app panes within the main UI. |

## Elevation

- **Card/Container:** `rgba(0, 0, 0, 0.01) 0px 1px 3px 0px, rgba(0, 0, 0, 0.02) 0px 3px 7px 0px, rgba(0, 0, 0, 0.02) 0px 7px 15px 0px, rgba(0, 0, 0, 0.04) 0px 14px 28px 0px, rgba(0, 0, 0, 0.05) 0px 23px 52px 0px`

## Imagery

The visual language combines clean product screenshots of the Notion application, often embedded or within device mockups, with abstract, organic line illustrations. These illustrations are typically single-color (like the vivid blue) or multicolored line art, featuring abstract shapes and friendly, geometric character-like elements. They serve a decorative and explanatory role, adding a playful yet sophisticated layer to the UI. Photography is sparse, often editorial or lifestyle shots, typically desaturated or muted and contained within cards. Icons are outlined, simple, and monochromatic, maintaining a functional aesthetic across the UI.

## Layout

The page primarily uses a max-width contained layout for content sections, set against a full-bleed dark background. The hero section is full-viewport, featuring a centered headline and subtext over the deep-space violet background, with an embedded product screenshot. Subsequent content sections alternate between white and dark panels, using consistent vertical spacing. Content within sections generally follows a two-column layout with text-left/image-right or vice-versa, or dynamic card grids (3-column) for features and testimonials. Navigation is a sticky top bar, providing persistent access while users scroll.

## Similar Brands

- **Linear** — Dark-themed UI with strong typographic hierarchy, focused on deep functionality and subtle visual cues rather than overt decoration.
- **Figma** — Emphasis on nested UI elements, varied dark surface colors to denote hierarchy, and crisp, functional typography.
- **Vercel** — Dark UI with a professional, tool-like feel, selective use of vivid accent colors, and strong visual separation of content blocks.
- **GitHub** — Similar dark mode experience focusing on code and technical content, using a restrained palette with functional highlights.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-abyss: #000000;
  --color-ghostly-gray: #0b0b0b;
  --color-canvas-white: #ffffff;
  --color-mist-gray: #f6f5f4;
  --color-slate-text: #615d59;
  --color-dim-gray: #a39e98;
  --color-iron-border: #dddddd;
  --color-deep-space-violet: #02093a;
  --color-cosmic-blue: #455dd3;
  --color-link-ocean: #0075de;
  --color-sky-glint: #62aef0;
  --color-pixel-blush: #f77463;
  --color-mint-glitch: #2a9d99;
  --color-sunflare: #ffc950;
  --color-orange-boost: #ff8a33;
  --color-magenta-spark: #ff83dd;
  --color-purple-haze: #ad6ded;
  --color-blue-notification: #097fe8;
  --color-info-tint: #f2f9ff;
  --font-notioninter: 'NotionInter', Inter;
  --font-lyon-text: 'Lyon Text', Georgia;
  --text-caption: 12px;
  --leading-caption: 1.43;
  --tracking-caption: 0.1px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: 0.1px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.35;
  --tracking-body-lg: 0.1px;
  --text-subheading: 20px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.22px;
  --text-heading: 24px;
  --leading-heading: 1.27;
  --tracking-heading: -0.36px;
  --text-heading-lg: 26px;
  --leading-heading-lg: 1.23;
  --tracking-heading-lg: -0.36px;
  --text-display-sm: 40px;
  --leading-display-sm: 1.2;
  --tracking-display-sm: -0.44px;
  --text-display: 54px;
  --leading-display: 1.04;
  --tracking-display: -0.66px;
  --text-display-lg: 64px;
  --leading-display-lg: 0.83;
  --tracking-display-lg: -0.44px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
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
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-92: 92px;
  --spacing-106: 106px;
  --spacing-121: 121px;
  --spacing-125: 125px;
  --spacing-180: 180px;
  --spacing-186: 186px;
  --spacing-316: 316px;
  --radius-cards: 12px;
  --radius-badges: 9999px;
  --radius-inputs: 4px;
  --radius-buttons: 8px;
  --radius-default: 12px;
  --shadow-xl: rgba(0, 0, 0, 0.01) 0px 1px 3px 0px, rgba(0, 0, 0, 0.02) 0px 3px 7px 0px, rgba(0, 0, 0, 0.02) 0px 7px 15px 0px, rgba(0, 0, 0, 0.04) 0px 14px 28px 0px, rgba(0, 0, 0, 0.05) 0px 23px 52px 0px;
  --surface-midnight-abyss: #000000;
  --surface-deep-space-violet: #02093a;
  --surface-ghostly-gray: #0b0b0b;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-abyss: #000000;
  --color-ghostly-gray: #0b0b0b;
  --color-canvas-white: #ffffff;
  --color-mist-gray: #f6f5f4;
  --color-slate-text: #615d59;
  --color-dim-gray: #a39e98;
  --color-iron-border: #dddddd;
  --color-deep-space-violet: #02093a;
  --color-cosmic-blue: #455dd3;
  --color-link-ocean: #0075de;
  --color-sky-glint: #62aef0;
  --color-pixel-blush: #f77463;
  --color-mint-glitch: #2a9d99;
  --color-sunflare: #ffc950;
  --color-orange-boost: #ff8a33;
  --color-magenta-spark: #ff83dd;
  --color-purple-haze: #ad6ded;
  --color-blue-notification: #097fe8;
  --color-info-tint: #f2f9ff;
  --font-notioninter: 'NotionInter', Inter;
  --font-lyon-text: 'Lyon Text', Georgia;
  --text-caption: 12px;
  --leading-caption: 1.43;
  --tracking-caption: 0.1px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: 0.1px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.35;
  --tracking-body-lg: 0.1px;
  --text-subheading: 20px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.22px;
  --text-heading: 24px;
  --leading-heading: 1.27;
  --tracking-heading: -0.36px;
  --text-heading-lg: 26px;
  --leading-heading-lg: 1.23;
  --tracking-heading-lg: -0.36px;
  --text-display-sm: 40px;
  --leading-display-sm: 1.2;
  --tracking-display-sm: -0.44px;
  --text-display: 54px;
  --leading-display: 1.04;
  --tracking-display: -0.66px;
  --text-display-lg: 64px;
  --leading-display-lg: 0.83;
  --tracking-display-lg: -0.44px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
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
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-92: 92px;
  --spacing-106: 106px;
  --spacing-121: 121px;
  --spacing-125: 125px;
  --spacing-180: 180px;
  --spacing-186: 186px;
  --spacing-316: 316px;
  --radius-cards: 12px;
  --radius-badges: 9999px;
  --radius-inputs: 4px;
  --radius-buttons: 8px;
  --radius-default: 12px;
  --shadow-xl: rgba(0, 0, 0, 0.01) 0px 1px 3px 0px, rgba(0, 0, 0, 0.02) 0px 3px 7px 0px, rgba(0, 0, 0, 0.02) 0px 7px 15px 0px, rgba(0, 0, 0, 0.04) 0px 14px 28px 0px, rgba(0, 0, 0, 0.05) 0px 23px 52px 0px;
  --surface-midnight-abyss: #000000;
  --surface-deep-space-violet: #02093a;
  --surface-ghostly-gray: #0b0b0b;
}
```
