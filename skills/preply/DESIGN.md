---
version: alpha
name: "Preply"
description: "This system feels like a vibrant, welcoming learning space, merging playful energy with professional clarity. The dominant 'Tutor Pink' background of the hero immediately signals a dynamic, approachable brand. Typography uses a distinctive contrast: the custom 'Platform' font for headlines with tight letter spacing creates punchy, impactful statements, while 'Figtree' provides warm, readable body copy. Subtle 4px and 8px radii are used sparingly on functional elements, maintaining a crisp aesthetic."
theme: "light"
industry: "other"
source_url: "https://preply.com"
refero_style_id: "476fea7c-d578-4625-b9e6-36e95faa6ca4"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933091053-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933091053-thumb.jpg"
extracted_at: "2026-04-11T18:45:13.422Z"
---

# Preply — Style Reference

> Vibrant Tutorial Pop: a playful pink canvas with bold, inviting type.

**Theme:** light

**Industry:** other

This system feels like a vibrant, welcoming learning space, merging playful energy with professional clarity. The dominant 'Tutor Pink' background of the hero immediately signals a dynamic, approachable brand. Typography uses a distinctive contrast: the custom 'Platform' font for headlines with tight letter spacing creates punchy, impactful statements, while 'Figtree' provides warm, readable body copy. Subtle 4px and 8px radii are used sparingly on functional elements, maintaining a crisp aesthetic.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Blackboard Ink | #121117 | `--color-blackboard-ink` | Primary text, darkest background for footer, navigation elements. |
| Paper White | #ffffff | `--color-paper-white` | Page backgrounds, card surfaces, secondary text on dark backgrounds. |
| Pale Canvas | #f4f4f8 | `--color-pale-canvas` | Subtle background sections to provide visual separation. |
| Outline Gray | #dcdce5 | `--color-outline-gray` | Button borders, input borders — a light, subtle separator. |
| Graphite | #4d4c5c | `--color-graphite` | Secondary text, icons, borders, providing contrast to white without being stark black. |
| Tutor Pink | #ff7aac | `--color-tutor-pink` | Hero section background, highlighting the brand's energetic and inviting approach. |
| Progress Teal | #3ddabe | `--color-progress-teal` | Accent for progress indicators or secondary call-to-actions, signaling growth. |
| Highlight Yellow | #ffdf3d | `--color-highlight-yellow` | Accents, borders, drawing attention with its vivid contrast. |
| Action Blue | #2885fd | `--color-action-blue` | Interactive elements, links, and primary call-to-actions, standing out distinctly. |
| Light Blue | #99c5ff | `--color-light-blue` | Background for certain buttons or subtle interactive states. |

## Tokens — Typography

### Platform

- **Token:** `--font-platform`
- **Substitute:** Montserrat
- **Weights:** 400, 600, 700
- **Sizes:** 14px, 16px, 20px, 24px, 32px, 48px, 64px, 96px
- **Line heights:** 1.00, 1.06, 1.08, 1.13, 1.20, 1.33, 1.50
- **Letter spacing:** -0.005em at 96px, 0.017em at 14px
- **Role:** Headlines and emphasis text. The tight letter-spacing (-0.005em) at larger sizes makes headings feel compact and assertive.

### Figtree

- **Token:** `--font-figtree`
- **Substitute:** Inter
- **Weights:** 400, 600
- **Sizes:** 12px, 13px, 14px, 16px, 18px, 20px
- **Line heights:** 1.00, 1.14, 1.20, 1.33, 1.40, 1.43, 1.50, 1.71
- **Letter spacing:** -0.005em at 13px, 0.012em at 12px
- **Role:** Body copy, link text, secondary navigation, and button labels. Provides high legibility for smaller text with a neutral, friendly character.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.43 | 0.144px | `--text-caption` |
| body | 14px | 1.4 | 0px | `--text-body` |
| body-lg | 16px | 1.5 | 0px | `--text-body-lg` |
| subheading | 20px | 1.33 | 0px | `--text-subheading` |
| heading | 24px | 1.08 | 0px | `--text-heading` |
| heading-lg | 32px | 1.13 | 0px | `--text-heading-lg` |
| display | 48px | 1.06 | 0px | `--text-display` |
| display-xl | 64px | 1 | 0px | `--text-display-xl` |
| display-xxl | 96px | 1 | -0.48px | `--text-display-xxl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-57 | 57px | `--spacing-57` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 8px |
| cards | 4px |
| buttons | 4px |
| default | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |

## Components

### Stats Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Language Tutor Card Grid

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Announcement Banner + CTA Button

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** Primary Call to Action

Black text on a white background, with a subtle border for definition. `background: #ffffff`, `color: #0000ee` (browser default link color, but text is #121117 as observed in content), `border: 1px solid #dcdce5`, `border-radius: 4px`, `padding: 0px 24px`.

### Ghost Button

**Role:** Secondary Action

Transparent background with Blackboard Ink text and border. `background: rgba(0, 0, 0, 0)`, `color: #121117`, `border: 1px solid #121117`, `border-radius: 0px`, `padding: 0px 4px 0px 16px`.

### Rounded Ghost Button

**Role:** Tertiary or Filter Action

Transparent background with Blackboard Ink text, slightly rounded. `background: rgba(0, 0, 0, 0)`, `color: #121117`, `border: none` typically, `border-radius: 8px`, `padding: 6px 24px`.

### Text Link Button

**Role:** Inline Action

Unstyled text link that functions as a button. `background: rgba(0, 0, 0, 0)`, `color: #000000`, `border: none`, `border-radius: 0px`, `padding: 0px`.

### Basic Card

**Role:** Content Grouping

White background, sharp edges, no shadow. `background: #ffffff`, `border-radius: 4px`, `box-shadow: none`, `padding: 32px`.

### Language Selector Item

**Role:** Filter Item

Bordered element often containing text and icon indicating selection. `background: rgba(0, 0, 0, 0)`, `border-radius: 0px`, `box-shadow: none`, `padding: 0px`.

### Footer Link Block

**Role:** Informational Grouping

Transparent background, no radius or shadow, used in information-dense footer columns. `background: rgba(0, 0, 0, 0)`, `border-radius: 0px`, `box-shadow: none`, `padding: 0px`.

## Do's and Don'ts

### Do

- Use 'Tutor Pink' (#ff7aac) exclusively for hero backgrounds or significant brand statements.
- Apply 'Platform' font for all headings, using weights 600 or 700 with letter-spacing adjusted per size for visual impact.
- Maintain 'Figtree' font for all body text, links, and functional labels, typically at 400 weight for readability.
- Utilize 'Blackboard Ink' (#121117) for primary text and main navigation elements, ensuring strong contrast.
- Ensure interactive components like buttons and cards consistently use 4px or 8px border-radii for subtle softening.
- Use `padding: 0px 24px` for primary call-to-action buttons for consistent horizontal spacing.
- Employ 'Outline Gray' (#dcdce5) for subtle borders on interactive elements to provide definition without harshness.

### Don't

- Avoid using shadows on cards; the design relies on background color shifts and borders for separation.
- Do not deviate from the core color palette. Introducing new chromatic colors will dilute the brand identity.
- Do not use generic system fonts; 'Platform' and 'Figtree' are critical to the typographic brand.
- Avoid excessive rounding; limit border-radius to 4px or 8px on specific interactive elements, not general containers.
- Do not use letter-spacing on 'Figtree' body text that deviates from its inherent values, as this compromises legibility.
- Do not use `padding: 0px` for buttons, unless it is a pure text link button with no background.

## Imagery

The site uses a mix of lifestyle photography and playful, custom illustrations. Photography is generally bright and candid, depicting authentic interactions between tutors and learners. Illustrations, like the 'Progress Takes Two' graphic, are often brand-colored, featuring chunky, bold shapes with clear outlines and a slight 3D pop, conveying energy and approachability. Icons are line-based (outline style) and mono-color (often 'Graphite' #4d4c5c or 'Blackboard Ink' #121117), serving an explanatory and navigational role. The overall density is balanced, with imagery used strategically in hero sections and feature explanations without overwhelming content.

## Layout

The page primarily uses a max-width contained layout, typically with content centered within the browser. The hero section is a full-bleed block of 'Tutor Pink' with a large, left-aligned headline and a right-aligned lifestyle image. Content sections below often feature a clean, single-column stack, sometimes alternating with multi-column card grids for features or categories. There's a consistent vertical spacing model. The navigation is a sticky top bar, providing context and quick access, while the footer is dense, dark, and multi-column, providing comprehensive links.

## Similar Brands

- **Duolingo** — Shares a vibrant, playful color palette and distinct illustration style to make language learning engaging.
- **Udemy** — Employs clean, card-based layouts for course presentation and a clear, functional typographic hierarchy.
- **Coursera** — Uses a similar balance of bold headlines and approachable body text with a focus on clear pathways for learning.
- **Figma** — Has a strong typographic identity with custom fonts and uses subtle pops of color against a largely neutral UI for emphasis.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-blackboard-ink: #121117;
  --color-paper-white: #ffffff;
  --color-pale-canvas: #f4f4f8;
  --color-outline-gray: #dcdce5;
  --color-graphite: #4d4c5c;
  --color-tutor-pink: #ff7aac;
  --color-progress-teal: #3ddabe;
  --color-highlight-yellow: #ffdf3d;
  --color-action-blue: #2885fd;
  --color-light-blue: #99c5ff;
  --font-platform: 'Platform', Montserrat;
  --font-figtree: 'Figtree', Inter;
  --text-caption: 12px;
  --leading-caption: 1.43;
  --tracking-caption: 0.144px;
  --text-body: 14px;
  --leading-body: 1.4;
  --tracking-body: 0px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.33;
  --tracking-subheading: 0px;
  --text-heading: 24px;
  --leading-heading: 1.08;
  --tracking-heading: 0px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: 0px;
  --text-display: 48px;
  --leading-display: 1.06;
  --tracking-display: 0px;
  --text-display-xl: 64px;
  --leading-display-xl: 1;
  --tracking-display-xl: 0px;
  --text-display-xxl: 96px;
  --leading-display-xxl: 1;
  --tracking-display-xxl: -0.48px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-57: 57px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-160: 160px;
  --radius-tags: 8px;
  --radius-cards: 4px;
  --radius-buttons: 4px;
  --radius-default: 4px;
}
```

### Tailwind v4

```css
@theme {
  --color-blackboard-ink: #121117;
  --color-paper-white: #ffffff;
  --color-pale-canvas: #f4f4f8;
  --color-outline-gray: #dcdce5;
  --color-graphite: #4d4c5c;
  --color-tutor-pink: #ff7aac;
  --color-progress-teal: #3ddabe;
  --color-highlight-yellow: #ffdf3d;
  --color-action-blue: #2885fd;
  --color-light-blue: #99c5ff;
  --font-platform: 'Platform', Montserrat;
  --font-figtree: 'Figtree', Inter;
  --text-caption: 12px;
  --leading-caption: 1.43;
  --tracking-caption: 0.144px;
  --text-body: 14px;
  --leading-body: 1.4;
  --tracking-body: 0px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.33;
  --tracking-subheading: 0px;
  --text-heading: 24px;
  --leading-heading: 1.08;
  --tracking-heading: 0px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: 0px;
  --text-display: 48px;
  --leading-display: 1.06;
  --tracking-display: 0px;
  --text-display-xl: 64px;
  --leading-display-xl: 1;
  --tracking-display-xl: 0px;
  --text-display-xxl: 96px;
  --leading-display-xxl: 1;
  --tracking-display-xxl: -0.48px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-57: 57px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-160: 160px;
  --radius-tags: 8px;
  --radius-cards: 4px;
  --radius-buttons: 4px;
  --radius-default: 4px;
}
```
