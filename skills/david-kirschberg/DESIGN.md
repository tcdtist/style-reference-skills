---
version: alpha
name: "David Kirschberg"
description: "Kirschberg employs a sparse, high-contrast dark mode aesthetic, reminiscent of a command-line interface. The design prioritizes content with minimal chrome, using stark white typography against deep charcoal backgrounds. Surface differentiation is achieved through subtle shifts in background tone and rounded containers, rather than heavy shadows. The overall impression is one of restrained confidence and directness."
theme: "dark"
industry: "design"
source_url: "https://kirschberg.co.nz"
refero_style_id: "004f4856-4b01-4c23-a9fb-866303d5013b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514390721-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514390721-thumb.jpg"
extracted_at: "2026-04-30T02:00:06.739Z"
---

# David Kirschberg — Style Reference

> Minimalist Dark Canvas — bold text on deep charcoal.

**Theme:** dark

**Industry:** design

Kirschberg employs a sparse, high-contrast dark mode aesthetic, reminiscent of a command-line interface. The design prioritizes content with minimal chrome, using stark white typography against deep charcoal backgrounds. Surface differentiation is achieved through subtle shifts in background tone and rounded containers, rather than heavy shadows. The overall impression is one of restrained confidence and directness.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Core | #181818 | `--color-midnight-core` | Page backgrounds, primary container backgrounds |
| Frost White | #fafafa | `--color-frost-white` | Primary text, active button borders, accent strokes |
| Slate Surface | #262626 | `--color-slate-surface` | Elevated card backgrounds, distinct interface panels |
| Ash Muted | #a3a3a3 | `--color-ash-muted` | Secondary text, helper text, inactive elements |
| Ghost Border | #ffffff14 | `--color-ghost-border` | Subtle hair-thin borders for separating content without strong visual breaks |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 16px, 17px
- **Line heights:** 1.18, 1.29, 1.50
- **Letter spacing:** -0.0090em
- **Role:** Body text, button labels, navigation links, and descriptive content. Its standard weight provides legibility against the dark background.

### twkLausanne

- **Token:** `--font-twklausanne`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 32px
- **Line heights:** 1.10
- **Letter spacing:** -0.0400em
- **Role:** Primary headings. Its broad letter-spacing and substantial size give it a commanding presence that anchors sections.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-45 | 45px | `--spacing-45` |

### Border Radius

| Element | Value |
| --- | --- |
| default | 16px |
| surfaces | 24px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 45px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Ghost Button

**Role:** Interactive elements with minimal visual weight.

Background transparent (rgba(0, 0, 0, 0)), text and border in Frost White (#fafafa). Padding 4px on all sides. Radius 0px. Used for navigation and primary content links.

### Work Item Card

**Role:** Cards for showcasing portfolio pieces.

Background is Midnight Core (#181818). Rounded corners at 24px create a soft, contained feel. Text uses Inter 16px Frost White (#fafafa) for titles and Ash Muted (#a3a3a3) for descriptions.

### Navigation Bar

**Role:** Sticky header for site navigation.

Background in Midnight Core (#181818), with a top padding of 16px and bottom padding of 16px. Contains a Ghost Button for the brand name and a hamburger icon for menu.

## Do's and Don'ts

### Do

- Prioritize Frost White (#fafafa) for all primary text and active states against dark backgrounds.
- Use Midnight Core (#181818) as the default background for pages and main content blocks.
- Elevate content visually by applying Slate Surface (#262626) for distinct cards or panels.
- Utilize 'twkLausanne' at 32px with -0.0400em letter-spacing for all significant headings to establish brand presence.
- Apply a generous border-radius of 24px to main surface containers for a soft, modern shape.
- Ensure a horizontal element gap of 8px for consistent spacing between interactive elements or grid items.
- Maintain a clear vertical rhythm with section gaps of 45px between major content blocks.

### Don't

- Avoid the use of strong accent colors; the system relies on high-contrast neutrals.
- Do not introduce visible drop shadows; surface changes are conveyed via background color shifts.
- Refrain from using bold or heavy font weights; Inter 400 and twkLausanne 400 are the established textual weights.
- Do not use rectangular or sharp-edged components; all primary containers should feature a minimum 16px radius.
- Avoid cluttering backgrounds with patterns or textures; surfaces should remain flat and monochromatic.
- Do not deviate from the established letter-spacing values like -0.0400em for headings; they are critical for the typographic identity.
- Avoid tight vertical spacing in sections; ensure adequate 45px separation between content blocks.

## Imagery

This site features a mix of abstract digital illustrations and product screenshots. The illustrations are vibrant, organic, and utilize a high-contrast color palette, standing out against the dark UI. Product screenshots are typically centered or contained within card-like structures. Icons, when present, are minimal and serve functional navigation purposes. Imagery serves primarily as decorative atmosphere and to showcase work, occupying significant visual space within structured grid layouts.

## Similar Brands

- **Linear** — Uses a dark theme with high-contrast text and minimal UI elements, focusing on content.
- **Github** — Offers a dark mode with similar deep charcoal neutrals and strong text contrast, emphasizing code and content.
- **Blinkist** — Features a clean, typography-focused dark mode with subtle background variations for surface distinction.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-core: #181818;
  --color-frost-white: #fafafa;
  --color-slate-surface: #262626;
  --color-ash-muted: #a3a3a3;
  --color-ghost-border: #ffffff14;
  --font-inter: 'Inter', system-ui;
  --font-twklausanne: 'twkLausanne', Arial;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-45: 45px;
  --radius-default: 16px;
  --radius-surfaces: 24px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-core: #181818;
  --color-frost-white: #fafafa;
  --color-slate-surface: #262626;
  --color-ash-muted: #a3a3a3;
  --color-ghost-border: #ffffff14;
  --font-inter: 'Inter', system-ui;
  --font-twklausanne: 'twkLausanne', Arial;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-45: 45px;
  --radius-default: 16px;
  --radius-surfaces: 24px;
}
```
