---
version: alpha
name: "Agence Foudre"
description: "Agence Foudre's design system is a bold, energetic playground, where bright, contrasting colors and chunky typography create a dynamic, youthful appeal. The juxtaposition of a vivacious pink and a deep forest green is the core of its identity, creating a vibrant tension. Typography, especially the heavy, impactful Beni font, is treated as a primary visual element, often fading or interacting with the background, reinforcing a playful, almost rebellious mood. This is a system that uses color and expressive type to make a statement, rather than relying on complex layouts or shadows."
theme: "light"
industry: "agency"
source_url: "https://www.agencefoudre.com"
refero_style_id: "c1534c74-f7b8-44de-a913-586d0f78fb08"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776008642265-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776008642265-thumb.jpg"
extracted_at: "2026-04-12T15:44:20.726Z"
---

# Agence Foudre — Style Reference

> Vibrant Pink Playground — heavy type dances on a clean white stage, punctuated by electric color accents.

**Theme:** light

**Industry:** agency

Agence Foudre's design system is a bold, energetic playground, where bright, contrasting colors and chunky typography create a dynamic, youthful appeal. The juxtaposition of a vivacious pink and a deep forest green is the core of its identity, creating a vibrant tension. Typography, especially the heavy, impactful Beni font, is treated as a primary visual element, often fading or interacting with the background, reinforcing a playful, almost rebellious mood. This is a system that uses color and expressive type to make a statement, rather than relying on complex layouts or shadows.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Pale Canvas | #fff8f6 | `--color-pale-canvas` | Page backgrounds, body text in specific contexts, button text against strong colors. |
| Deep Forest | #00522d | `--color-deep-forest` | Primary text, interactive elements, button background in specific contexts — provides grounding contrast to the vibrant pink. |
| Foudre Pink | #db3c8a | `--color-foudre-pink` | Key branding color for headlines, badges, and prominent interactive elements — injects energy and distinctiveness. It's the primary accent. |
| Ash Whisper | #fce5df | `--color-ash-whisper` | Subtle background for badges and secondary text elements, a lighter pinkish-gray that softens areas without losing brand warmth. |
| Bubblegum Blush | #f29ebd | `--color-bubblegum-blush` | Softer background for buttons and decorative elements, maintaining the energetic pink theme but with less intensity. |
| Slate Tint | #d1cfe4 | `--color-slate-tint` | Rarely used for headings or secondary text, a cool gray providing a hint of contrast to the warm palette. |
| Midnight Ink | #000000 | `--color-midnight-ink` | Used for utility text, icons, and some card elements — provides maximum contrast against lighter backgrounds. |

## Tokens — Typography

### Clash Grotesk

- **Token:** `--font-clash-grotesk`
- **Substitute:** Inter
- **Weights:** 400, 500, 700
- **Sizes:** 10px, 12px, 13px, 14px, 16px, 20px, 24px, 30px
- **Line heights:** 0.85, 1.20
- **Letter spacing:** normal
- **Role:** The workhorse sans-serif for body text, links, buttons, and detailed information across the site. Its tight line-height of 0.85 indicates a compact, modern aesthetic for smaller text, sometimes used in titles as well.

### Beni

- **Token:** `--font-beni`
- **Substitute:** Bebas Neue
- **Weights:** 900
- **Sizes:** 46px, 80px, 94px, 130px, 230px
- **Line heights:** 0.70
- **Letter spacing:** normal
- **Role:** The signature display font for all major headlines and brand statements. Its extreme weight and tight line-height are central to the brand's bold, impactful voice, making text a primary visual element rather than merely carrying information.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 0.85 | — | `--text-caption` |
| body | 14px | 0.85 | — | `--text-body` |
| subheading | 20px | 0.85 | — | `--text-subheading` |
| heading | 30px | 0.85 | — | `--text-heading` |
| heading-lg | 46px | 0.7 | — | `--text-heading-lg` |
| display | 230px | 0.7 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-78 | 78px | `--spacing-78` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-149 | 149px | `--spacing-149` |
| spacing-161 | 161px | `--spacing-161` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 20px |
| badges | 10px |
| buttons | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 60-120px |
| cardPadding | 30-60px |
| elementGap | 10-20px |

## Components

### Brand Statement Headline Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Service Cards — Foudre Pink & Deep Forest

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Badge Collection & CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Ghost Button

**Role:** Navigation, secondary actions

Transparent background (rgba(255, 248, 246, 0.4)), 'Pale Canvas' text (#fff8f6). No border radius, minimal padding (0px). Primarily used for video controls or subtle navigation, appearing almost as text rather than a distinct button.

### Primary Circular Button (Foudre Pink)

**Role:** Interactive elements, menu toggles

Background 'Bubblegum Blush' (#f29ebd), text 'Deep Forest' (#00522d), 50% border radius for a perfect circle. Used for prominent circular icons or actions.

### Primary Circular Button (Pale Canvas)

**Role:** Interactive elements, menu toggles

Background 'Pale Canvas' (#fff8f6), text 'Deep Forest' (#00522d), 50% border radius for a perfect circle. Used for prominent circular icons or actions, offering a less saturated alternative to the pink version.

### Primary Filled Button

**Role:** Main calls to action

Background 'Bubblegum Blush' (#f29ebd), text 'Pale Canvas' (#fff8f6), 10px border radius, generous padding (20px). This is the most visually assertive button style.

### Transparent Card

**Role:** Informational blocks, content grouping

No background, 0px border radius, no shadow, no padding. Used when content needs subtle grouping without visual separation from the background.

### Rounded Transparent Card

**Role:** Informational blocks, decorative grouping

No background, 20px border radius, no shadow, no padding. Used for visually separating content areas with soft corners, often for functional groupings.

### Foudre Pink Content Card

**Role:** Highlighted content, service showcases

Background 'Foudre Pink' (#db3c8a), 25px border radius, no shadow, heavy padding (60px). Used for highly prominent content sections, often for showcasing key services.

### Deep Forest Content Card

**Role:** Highlighted content, service showcases

Background 'Deep Forest' (#00522d), 20px border radius, no shadow, generous padding (30px). Used for strong, contrasting content sections, often a direct counterpoint to Foudre Pink cards.

### Foudre Pink Badge

**Role:** Categorization, short labels

Background 'Foudre Pink' (#db3c8a), text 'Pale Canvas' (#fff8f6), 10px border radius, 12px padding. Visually distinct and draws attention to labels.

### Accent Badge

**Role:** Secondary categorization, subtle labels

Background 'Ash Whisper' (#fce5df), text 'Foudre Pink' (#db3c8a), 10px border radius, 7px vertical and 8px horizontal padding. A lighter, more understated badge.

## Do's and Don'ts

### Do

- Do use 'Foudre Pink' (#db3c8a) and 'Deep Forest' (#00522d) in high contrast for interactive elements or brand highlights to maintain energy.
- Do apply the `Beni` font, weight 900, at large sizes (46px-230px, lineHeight 0.7) for all primary headlines, treating it as a dynamic visual component.
- Do use 'Clash Grotesk' as the primary font for all body copy and UI elements, adhering to its compact 1.2 line-height for readability within UI components.
- Do apply 10px radius for buttons and badges, reserving 20px for cards and 25px for prominent content blocks.
- Do utilize minimal padding (0px) on ghost buttons to integrate them seamlessly into content like video controls.
- Do ensure a generous `sectionGap` of 60px to 120px between major content blocks to provide breathing room and emphasis.

### Don't

- Don't use 'Clash Grotesk' for primary headlines; its role is for detailed information, not brand-level impact.
- Don't introduce additional bright colors; the system relies on the impactful contrast between 'Foudre Pink' and 'Deep Forest'.
- Don't apply shadows or complex elevation; the design relies on bold color blocks and typography for hierarchy and visual interest.
- Don't use generic square buttons; all primary action buttons should either be circular (50% radius) or utilize a 10px radius with 'Bubblegum Blush' background.
- Don't vary the 0.7 line-height for `Beni` headings; it's a critical element of its impactful, stackable appearance.

## Imagery

The site's visual language is dominated by its typography and color, with imagery playing a secondary, often abstract role. When present, images are tightly integrated with text, sometimes serving as background for the bold 'Beni' headlines, giving them a 'ghosted' effect. Graphics are minimal, often just circular icons or very simple vector shapes, treated in either 'Foudre Pink' or 'Deep Forest'. There is no dominant photography style; the focus is on UI elements and expressive text.

## Similar Brands

- **AIGA** — Similar use of expressive, chunky typography as a primary visual element, often fading or interacting with backgrounds.
- **Femme & Fierce** — Shares a bold, feminine color palette centered around variants of pink, used with high contrast for impact.
- **Design by Women** — Employs strong, clean typography and a vibrant color accent against a largely neutral background to create a distinctive, energetic brand identity.
- **The Brand Identity** — Utilizes large-scale, custom typography as central visual components, often with unique treatments like transparency or animation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-pale-canvas: #fff8f6;
  --color-deep-forest: #00522d;
  --color-foudre-pink: #db3c8a;
  --color-ash-whisper: #fce5df;
  --color-bubblegum-blush: #f29ebd;
  --color-slate-tint: #d1cfe4;
  --color-midnight-ink: #000000;
  --font-clash-grotesk: 'Clash Grotesk', Inter;
  --font-beni: 'Beni', Bebas Neue;
  --text-caption: 10px;
  --leading-caption: 0.85;
  --text-body: 14px;
  --leading-body: 0.85;
  --text-subheading: 20px;
  --leading-subheading: 0.85;
  --text-heading: 30px;
  --leading-heading: 0.85;
  --text-heading-lg: 46px;
  --leading-heading-lg: 0.7;
  --text-display: 230px;
  --leading-display: 0.7;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-60: 60px;
  --spacing-78: 78px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --spacing-149: 149px;
  --spacing-161: 161px;
  --radius-cards: 20px;
  --radius-badges: 10px;
  --radius-buttons: 10px;
}
```

### Tailwind v4

```css
@theme {
  --color-pale-canvas: #fff8f6;
  --color-deep-forest: #00522d;
  --color-foudre-pink: #db3c8a;
  --color-ash-whisper: #fce5df;
  --color-bubblegum-blush: #f29ebd;
  --color-slate-tint: #d1cfe4;
  --color-midnight-ink: #000000;
  --font-clash-grotesk: 'Clash Grotesk', Inter;
  --font-beni: 'Beni', Bebas Neue;
  --text-caption: 10px;
  --leading-caption: 0.85;
  --text-body: 14px;
  --leading-body: 0.85;
  --text-subheading: 20px;
  --leading-subheading: 0.85;
  --text-heading: 30px;
  --leading-heading: 0.85;
  --text-heading-lg: 46px;
  --leading-heading-lg: 0.7;
  --text-display: 230px;
  --leading-display: 0.7;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-60: 60px;
  --spacing-78: 78px;
  --spacing-120: 120px;
  --spacing-140: 140px;
  --spacing-149: 149px;
  --spacing-161: 161px;
  --radius-cards: 20px;
  --radius-badges: 10px;
  --radius-buttons: 10px;
}
```
