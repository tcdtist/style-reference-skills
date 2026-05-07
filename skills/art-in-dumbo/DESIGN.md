---
version: alpha
name: "Art In DUMBO"
description: "Art In DUMBO employs a high-contrast, text-dominant aesthetic that prioritizes content display with minimal visual adornment. Typography is bold and direct, setting a clear, editorial tone. A singular, vivid orange serves as a powerful accent color, appearing primarily in functional contexts, while an accompanying soft green provides a secondary, grounding chromatic element. The design favors sharp edges and flat surfaces, maintaining a clear separation between content blocks."
theme: "light"
industry: "media"
source_url: "https://artindumbo.com"
refero_style_id: "5d79f0c2-526e-4c37-b780-08404f60839b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520678846-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520678846-thumb.jpg"
extracted_at: "2026-04-30T03:44:58.639Z"
---

# Art In DUMBO — Style Reference

> Gallery Guidebook

**Theme:** light

**Industry:** media

Art In DUMBO employs a high-contrast, text-dominant aesthetic that prioritizes content display with minimal visual adornment. Typography is bold and direct, setting a clear, editorial tone. A singular, vivid orange serves as a powerful accent color, appearing primarily in functional contexts, while an accompanying soft green provides a secondary, grounding chromatic element. The design favors sharp edges and flat surfaces, maintaining a clear separation between content blocks.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Inkwell | #000000 | `--color-inkwell` | Primary text, borders, iconography |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, ghost button fills |
| Fog | #e5e3df | `--color-fog` | Subtle section backgrounds, alternate large surface base |
| Whisper Gray | #f1f2f2 | `--color-whisper-gray` | Input field backgrounds, subtle hover states, tertiary surfaces |
| Driftwood | #bdbdbd | `--color-driftwood` | Muted text, faint borders, secondary headings |
| Charcoal Accent | #828282 | `--color-charcoal-accent` | Medium-contrast borders, control outlines, and structural separators. Do not promote it to the primary CTA color |
| Shadow Tint | #b3b3b3 | `--color-shadow-tint` | Subtle shadow color for elevation |
| Gallery Orange | #ff7f41 | `--color-gallery-orange` | Orange outline accent for tags, dividers, and focused UI edges. |
| Beacon Green | #71cc98 | `--color-beacon-green` | Green action color for filled buttons, selected navigation states, and focused conversion moments |

## Tokens — Typography

### Helvetica N

- **Token:** `--font-helvetica-n`
- **Substitute:** Arial, Helvetica, sans-serif
- **Weights:** 500
- **Sizes:** 10px, 11px, 16px, 19px, 22px, 27px, 28px, 30px, 34px, 37px, 44px, 63px, 68px
- **Line heights:** 1.00, 1.05, 1.08, 1.09, 1.10, 1.15, 1.20, 1.27, 1.40, 1.50, 1.80
- **Letter spacing:** normal
- **Role:** Primary typeface for all content elements, headings, body text, and UI controls. Its single medium weight (500) contributes to the direct, no-nonsense tone, avoiding common typographic hierarchies that rely on extreme weight differences.

### Roboto

- **Token:** `--font-roboto`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500
- **Sizes:** 10px, 11px
- **Line heights:** 1.20, 1.40
- **Letter spacing:** normal
- **Role:** Used for smaller utility text such as button labels or secondary information where a slightly less formal feel is acceptable.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.4 | — | `--text-caption` |
| body | 16px | 1.2 | — | `--text-body` |
| subheading | 19px | 1.2 | — | `--text-subheading` |
| heading-sm | 22px | 1.15 | — | `--text-heading-sm` |
| heading | 27px | 1.09 | — | `--text-heading` |
| heading-lg | 30px | 1.08 | — | `--text-heading-lg` |
| display | 68px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-47 | 47px | `--spacing-47` |
| spacing-49 | 49px | `--spacing-49` |
| spacing-122 | 122px | `--spacing-122` |
| spacing-144 | 144px | `--spacing-144` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 50px |
| inputs | 2px |
| buttons | 2px |
| default | 2px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.3) 0px 1px 4px -1px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.25) 0px 0px 10px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 144px |
| cardPadding | 20px |
| elementGap | 20px |

## Components

### Ghost Text Button

**Role:** Interactive text links and navigation items that visually blend into the background.

Background: transparent, Text: Inkwell (#000000), Border: none, Radius: 0px, Padding: 0px.

### Clear Text Button

**Role:** Interactive elements on Canvas White backgrounds that maintain a text-only appearance.

Background: Canvas White (#ffffff), Text: Inkwell (#000000), Border: none, Radius: 0px, Padding: 0px.

### Circular Utility Button

**Role:** Small, functional buttons often used for icons or minimal controls.

Background: Canvas White (#ffffff), Text: Inkwell (#000000), Border: none, Radius: 50% (circular), Padding: 0px.

### Beacon Green Button

**Role:** Primary action button, visually prominent and signaling an important interaction.

Background: Beacon Green (#71cc98), Text: Inkwell (#000000), Border: none, Radius: 2px, Padding: 0px. Used for 'Map & Directory'.

### Content Card

**Role:** Container for event listings or feature sections, visually defined by content rather than a strong border/shadow.

Background: transparent, Radius: 0px, No box shadow, Padding: 47px top, 20px right, 20px bottom, 20px left.

### Accent Card - Beacon Green

**Role:** Highlights specific content blocks with a distinct background color.

Background: Beacon Green (#71cc98), Radius: 50px, No box shadow, Padding: 0px.

### Accent Card - Gallery Orange

**Role:** Highlights specific content blocks with a distinct background color.

Background: Gallery Orange (#ff7f41), Radius: 50px, No box shadow, Padding: 0px.

### Email Input

**Role:** Standard input field for user text entry.

Background: Whisper Gray (#f1f2f2), Text: Inkwell (#000000), Border: Inkwell (#000000), Radius: 2px, Padding: 14.5px vertical, 29px left, 0px right. No placeholder style detected.

## Do's and Don'ts

### Do

- Always use the Helvetica N typeface at weight 500 for all primary content, headlines, and UI elements to maintain a consistent editorial voice.
- Utilize Canvas White (#ffffff) as the default background for most content and Inkwell (#000000) for all primary text to ensure high contrast and readability.
- Apply Gallery Orange (#ff7f41) sparingly as a functional highlight for critical information or states like 'Closing Soon'.
- Employ Beacon Green (#71cc98) specifically for primary action buttons, such as 'Map & Directory', to guide user interaction.
- Maintain sharp, 0px border radii for general content cards and layout blocks to reinforce the graphic, editorial aesthetic.
- Use a minimum element spacing of 20px and a section gap of 144px to create a comfortable, uncluttered reading experience.
- Prefer text-only or ghost button styles over filled buttons, unless explicitly using Beacon Green for a primary call to action.

### Don't

- Avoid using multiple font weights within a single typographic element; Helvetica N 500 is sufficient for most hierarchical needs.
- Do not introduce additional saturated colors beyond Gallery Orange (#ff7f41) and Beacon Green (#71cc98) without specific functional justification.
- Never add significant box shadows or decorative gradients to interface elements, as the design prioritizes flat surfaces.
- Resist rounding corners on cards or major content blocks, reserving the 50px radius exclusively for specific accent cards and pill-shaped utilities.
- Do not use generic gray buttons or actions where a clear Beacon Green (#71cc98) action is needed; primary actions should stand out.
- Avoid dense or cluttered layouts; maintain ample whitespace and comfortable element spacing like 20px to ensure content breathability.
- Do not use subtle or low-contrast text colors for essential information; Inkwell (#000000) and Canvas White (#ffffff) are fundamental to readability.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Canvas White | #ffffff | Base page background and default card surfaces. |
| 2 | Whisper Gray | #f1f2f2 | Subtle input backgrounds and secondary content blocks. |
| 3 | Fog | #e5e3df | Large, alternate section backgrounds to break visual monotony. |

## Elevation

- **Button:** `rgba(0, 0, 0, 0.25) 0px 0px 10px 0px`
- **Button (subtle):** `rgba(0, 0, 0, 0.3) 0px 1px 4px -1px`

## Imagery

The site uses a mix of high-quality, candid photography featuring people in art-related settings, like studios or galleries. Images are treated naturally, with realistic lighting and color, serving to establish a welcoming atmosphere rather than as product showcases. Iconic typography ('ART IN DUMBO') is boxed in white against some imagery, functioning as a brand overlay. There is limited use of simple, descriptive icons, which appear as filled monochromatic shapes (Inkwell #000000) or outlined elements.

## Layout

The page primarily uses a max-width contained layout, with content centered. The hero section often features a full-bleed photographic background with the brand name as a prominent overlay. Section rhythm is driven by distinct content blocks, with some alternating background colors (Canvas White #ffffff and Fog #e5e3df) to delineate sections. Content is often presented in a clear, single-column stack, but also utilizes list-like structures and two-column layouts for event or exhibition details. Navigation is a simple top bar, with a prominent 'Map & Directory' button fixed to the bottom right of the viewport.

## Similar Brands

- **AIGA (American Institute of Graphic Arts)** — High-contrast typography, content-forward editorial layout, and minimal use of color for functional emphasis.
- **The Shed** — Focus on bold, almost blocky typography against plentiful white space, with limited but effective accent colors.
- **Artsy** — A clean, gallery-like aesthetic that prioritizes visual art pieces and uses a restrained UI to frame content.
- **MOMA (Museum of Modern Art)** — Direct, functional UI with high contrast, minimal decorative elements, and typography as a key design component.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-inkwell: #000000;
  --color-canvas-white: #ffffff;
  --color-fog: #e5e3df;
  --color-whisper-gray: #f1f2f2;
  --color-driftwood: #bdbdbd;
  --color-charcoal-accent: #828282;
  --color-shadow-tint: #b3b3b3;
  --color-gallery-orange: #ff7f41;
  --color-beacon-green: #71cc98;
  --font-helvetica-n: 'Helvetica N', Arial, Helvetica, sans-serif;
  --font-roboto: 'Roboto', system-ui, sans-serif;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 19px;
  --leading-subheading: 1.2;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.15;
  --text-heading: 27px;
  --leading-heading: 1.09;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.08;
  --text-display: 68px;
  --leading-display: 1;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-44: 44px;
  --spacing-46: 46px;
  --spacing-47: 47px;
  --spacing-49: 49px;
  --spacing-122: 122px;
  --spacing-144: 144px;
  --radius-pill: 50px;
  --radius-inputs: 2px;
  --radius-buttons: 2px;
  --radius-default: 2px;
  --shadow-xl: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
  --shadow-xl-2: rgba(0, 0, 0, 0.25) 0px 0px 10px 0px;
  --surface-canvas-white: #ffffff;
  --surface-whisper-gray: #f1f2f2;
  --surface-fog: #e5e3df;
}
```

### Tailwind v4

```css
@theme {
  --color-inkwell: #000000;
  --color-canvas-white: #ffffff;
  --color-fog: #e5e3df;
  --color-whisper-gray: #f1f2f2;
  --color-driftwood: #bdbdbd;
  --color-charcoal-accent: #828282;
  --color-shadow-tint: #b3b3b3;
  --color-gallery-orange: #ff7f41;
  --color-beacon-green: #71cc98;
  --font-helvetica-n: 'Helvetica N', Arial, Helvetica, sans-serif;
  --font-roboto: 'Roboto', system-ui, sans-serif;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 19px;
  --leading-subheading: 1.2;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.15;
  --text-heading: 27px;
  --leading-heading: 1.09;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.08;
  --text-display: 68px;
  --leading-display: 1;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-27: 27px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-44: 44px;
  --spacing-46: 46px;
  --spacing-47: 47px;
  --spacing-49: 49px;
  --spacing-122: 122px;
  --spacing-144: 144px;
  --radius-pill: 50px;
  --radius-inputs: 2px;
  --radius-buttons: 2px;
  --radius-default: 2px;
  --shadow-xl: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
  --shadow-xl-2: rgba(0, 0, 0, 0.25) 0px 0px 10px 0px;
  --surface-canvas-white: #ffffff;
  --surface-whisper-gray: #f1f2f2;
  --surface-fog: #e5e3df;
}
```
