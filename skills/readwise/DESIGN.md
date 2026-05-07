---
version: alpha
name: "Readwise"
description: "This design evokes the feel of a diligent academic workspace – focused and organized, with clear visual cues to guide attention. The use of a brand-specific blue for interactive elements cuts through the otherwise muted, almost off-white background and near-black text, signaling action without being overly aggressive. Highlights and key phrases stand out with a soft, muted yellow background, mimicking physical highlighters, creating a direct visual reference to core product functionality. The interplay of a custom serif font for display text against a highly legible sans-serif for body content establishes a serious yet approachable scholarly tone."
theme: "light"
industry: "productivity"
source_url: "https://readwise.io"
refero_style_id: "34c8dbee-f5d9-4495-a0e0-a25c6ca4b95b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924685216-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924685216-thumb.jpg"
extracted_at: "2026-04-11T16:24:59.976Z"
---

# Readwise — Style Reference

> Scholarly Workspace Blueprint. It feels like an organized desk with a clear task list.

**Theme:** light

**Industry:** productivity

This design evokes the feel of a diligent academic workspace – focused and organized, with clear visual cues to guide attention. The use of a brand-specific blue for interactive elements cuts through the otherwise muted, almost off-white background and near-black text, signaling action without being overly aggressive. Highlights and key phrases stand out with a soft, muted yellow background, mimicking physical highlighters, creating a direct visual reference to core product functionality. The interplay of a custom serif font for display text against a highly legible sans-serif for body content establishes a serious yet approachable scholarly tone.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #1f1f1f | `--color-midnight-ink` | Primary text color for accessibility, dark backgrounds on specific elements. |
| Page Canvas | #ffffff | `--color-page-canvas` | Dominant background color for pages and cards. |
| Ash Cloud | #f1f5f8 | `--color-ash-cloud` | Subtle background for alternating sections or distinct content blocks. |
| Highlight Yellow | #fff7ca | `--color-highlight-yellow` | Used for emphasized text backgrounds, visually representing highlighting functionality. |
| Action Blue | #478cd0 | `--color-action-blue` | Primary interactive color for buttons, links, and active states. |
| Status Orange | #fb9100 | `--color-status-orange` | Small accent for badges or secondary indicators, often associated with a 'new' status. |
| Sky Gradient | #7496f7 | `--color-sky-gradient` | Background for specific visual elements, providing a soft depth. |

## Tokens — Typography

### Mulish

- **Token:** `--font-mulish`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 600, 700, 800
- **Sizes:** 11px, 14px, 16px, 18px, 22px
- **Line heights:** 1.09, 1.25, 1.50
- **Letter spacing:** -0.0200em
- **Role:** Primary sans-serif font for all body text, navigation, and button labels; its consistent letter-spacing across weights maintains high legibility.

### Charter

- **Token:** `--font-charter`
- **Substitute:** serif
- **Weights:** 400, 600
- **Sizes:** 22px, 29px, 50px
- **Line heights:** 1.00, 1.13, 1.25
- **Role:** Serif font reserved for headlines and emphasized text; its distinctive character brings gravitas and a classic, academic feel to display typography.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.5 | -0.44px | `--text-caption` |
| body-sm | 14px | 1.5 | -0.28px | `--text-body-sm` |
| body | 16px | 1.5 | -0.32px | `--text-body` |
| subheading | 18px | 1.25 | -0.36px | `--text-subheading` |
| heading | 22px | 1.13 | -0.44px | `--text-heading` |
| heading-lg | 29px | 1.13 | — | `--text-heading-lg` |
| display | 50px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-123 | 123px | `--spacing-123` |
| spacing-147 | 147px | `--spacing-147` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 10px |
| buttons | 10px |
| navItems | 16px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1440px |
| sectionGap | 30-35px |
| cardPadding | 12px |
| elementGap | 5-24px |

## Components

### Primary CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### How Readwise Works — Feature Steps

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### User Testimonial Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button

**Role:** Interactive element

Filled button with 'Action Blue' background (#478cd0), 'Page Canvas' text (#ffffff), 10px border-radius, and generous padding (8px vertical, 18px horizontal). Uses Mulish font.

### Navigation Link

**Role:** Navigation

Text links appearing in the top navigation bar, using Mulish font at 14px size. Color is 'Midnight Ink' #1f1f1f, occasionally 'Action Blue' #478cd0 for active states. Some have a 10px or 16px radius for interactive elements.

### Highlighted Text Block

**Role:** Emphasis

Body text with a 'Highlight Yellow' background (#fff7ca), drawing attention to key phrases or product features in the same way a physical highlighter works.

### Hero Headline

**Role:** Display

Large, prominent text using Charter font, typically at 50px size and 600 weight, in 'Midnight Ink' (#1f1f1f), commanding attention on initial page load.

### Feature Icon Block

**Role:** Information display

Small icons typically associated with a description, using a 'Sky Gradient' background for visual distinctiveness.

## Do's and Don'ts

### Do

- Use 'Action Blue' (#478cd0) exclusively for primary call-to-actions and interactive elements to maintain focus.
- Apply Charter font only for headlines (22px, 29px, 50px) to preserve its distinct visual impact.
- Maintain a 10px border-radius for all primary buttons and card-like elements to ensure visual consistency.
- Ensure ample vertical spacing between sections, leveraging 30px or 35px, to create a comfortable reading density.
- Utilize 'Highlight Yellow' (#fff7ca) only for subtle background emphasis on text, mimicking physical highlighting.

### Don't

- Do not use highly saturated colors for large background areas; stick to 'Page Canvas' (#ffffff) and 'Ash Cloud' (#f1f5f8).
- Avoid using Mulish for display headlines; reserve Charter for this purpose.
- Do not vary border-radius for interactive buttons; always use 10px.
- Do not introduce new color gradients; use `Sky Gradient` only where specifically defined.
- Do not apply excessive letter-spacing to Mulish; maintain its default -0.0200em.

## Imagery

The site's imagery is primarily product-focused, featuring crisp screenshots of the Readwise application running on laptops and mobile devices. These are meticulously presented on white backgrounds, often slightly angled, emphasizing clarity and functionality. Icons are simple, filled, and occasionally two-toned (white on blue/orange) or line-art in 'Midnight Ink' to explain features. The overall treatment is literal and explanatory, serving to showcase the product's interface and capabilities rather than evoke an emotional response. Visual density is moderate, breaking up text blocks with relevant interface displays.

## Layout

The page adopts a max-width centered layout, with a `pageMaxWidth` of 1440px providing containment. The hero section is full-bleed white, featuring a prominent centered headline, subtext, and a central product visual composed of device mockups. Sections maintain a consistent vertical rhythm, primarily defined by the 30-35px `sectionGap`. Content is often presented in centered stacks or simple two-column arrangements (text alongside mockups). Navigation is a sticky top bar with minimal items and a clear 'Sign In' call to action. The overall density is comfortable, allowing text and visuals to breathe without feeling sparse.

## Similar Brands

- **Instapaper** — Focus on reading, highlighting, and information consumption with a clean, text-centric interface.
- **Notion** — Productivity tool with a clean, functional aesthetic and emphasis on clear content structure.
- **Pocket** — Content aggregation and reading experience with a white background and strong emphasis on text legibility.
- **Evernote** — Note-taking app with a clear organization system and functional UI over heavy visual flair.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #1f1f1f;
  --color-page-canvas: #ffffff;
  --color-ash-cloud: #f1f5f8;
  --color-highlight-yellow: #fff7ca;
  --color-action-blue: #478cd0;
  --color-status-orange: #fb9100;
  --color-sky-gradient: #7496f7;
  --font-mulish: 'Mulish', system-ui, sans-serif;
  --font-charter: 'Charter', serif;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --tracking-caption: -0.44px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.36px;
  --text-heading: 22px;
  --leading-heading: 1.13;
  --tracking-heading: -0.44px;
  --text-heading-lg: 29px;
  --leading-heading-lg: 1.13;
  --text-display: 50px;
  --leading-display: 1;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-123: 123px;
  --spacing-147: 147px;
  --radius-cards: 10px;
  --radius-buttons: 10px;
  --radius-navitems: 16px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #1f1f1f;
  --color-page-canvas: #ffffff;
  --color-ash-cloud: #f1f5f8;
  --color-highlight-yellow: #fff7ca;
  --color-action-blue: #478cd0;
  --color-status-orange: #fb9100;
  --color-sky-gradient: #7496f7;
  --font-mulish: 'Mulish', system-ui, sans-serif;
  --font-charter: 'Charter', serif;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --tracking-caption: -0.44px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.28px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.32px;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.36px;
  --text-heading: 22px;
  --leading-heading: 1.13;
  --tracking-heading: -0.44px;
  --text-heading-lg: 29px;
  --leading-heading-lg: 1.13;
  --text-display: 50px;
  --leading-display: 1;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-123: 123px;
  --spacing-147: 147px;
  --radius-cards: 10px;
  --radius-buttons: 10px;
  --radius-navitems: 16px;
}
```
