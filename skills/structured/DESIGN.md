---
version: alpha
name: "Structured"
description: "Structured presents a brand identity rooted in classical artistry, juxtaposing vintage-inspired illustrations with modern, refined typography. The visual system features large, serif headlines that command attention but are carefully tracked for legibility, paired with compact, utilitarian sans-serif body text. A largely achromatic palette of muted greys and blacks provides a sophisticated backdrop, allowing the rich, painterly imagery to provide the primary visual interest. Surfaces are flat and borderless, emphasizing the content within a contained, almost gallery-like presentation."
theme: "light"
industry: "fintech"
source_url: "https://structured.money"
refero_style_id: "6c0b77d3-71f9-469d-98aa-4ce1d6d76ac8"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508276565-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508276565-thumb.jpg"
extracted_at: "2026-04-30T00:18:17.848Z"
---

# Structured — Style Reference

> Classical art gallery

**Theme:** light

**Industry:** fintech

Structured presents a brand identity rooted in classical artistry, juxtaposing vintage-inspired illustrations with modern, refined typography. The visual system features large, serif headlines that command attention but are carefully tracked for legibility, paired with compact, utilitarian sans-serif body text. A largely achromatic palette of muted greys and blacks provides a sophisticated backdrop, allowing the rich, painterly imagery to provide the primary visual interest. Surfaces are flat and borderless, emphasizing the content within a contained, almost gallery-like presentation.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Greige Canvas | #ebebeb | `--color-greige-canvas` | Page background, footer background, primary large surface background |
| Black Ink | #000000 | `--color-black-ink` | Primary text, heading text, critical UI elements, background for elevated modals, outlined button borders |
| Off-White Text | #dfdcd5 | `--color-off-white-text` | Secondary text on dark backgrounds, ghost button text on dark backgrounds |
| Slate Surface | #c4c3b6 | `--color-slate-surface` | Card backgrounds, section dividers, other background layers |
| Smoke Grey | #e7e5e4 | `--color-smoke-grey` | Subtle border colors, background for subtle secondary sections |
| Warm Accent Grey | #595855 | `--color-warm-accent-grey` | Icon fills, subtle background accents |
| White Highlight | #ffffff | `--color-white-highlight` | Tertiary text on very dark backgrounds, subtle border elements |
| Midtone Image Grey | #808080 | `--color-midtone-image-grey` | Placeholder backgrounds for imagery |

## Tokens — Typography

### Davinci

- **Token:** `--font-davinci`
- **Substitute:** Playfair Display or Lora (though Davinci's sharp serifs and specific tracking are key)
- **Weights:** 400, 500
- **Sizes:** 16px, 24px, 34px, 52px, 94px, 374px
- **Line heights:** 0.84, 1.00, 1.10, 1.33, 1.50
- **Letter spacing:** -0.0090em for large display text, -0.0050em for medium, -0.0010em for smaller sizes
- **Role:** Captivating serif headlines and titles. Its distinct character and spacing at large sizes provide a sense of established gravitas and artistic flair, contrasting with the utilitarian sans-serif for body copy.

### Helvetica Now

- **Token:** `--font-helvetica-now`
- **Substitute:** Inter or Helvetica Neue
- **Weights:** 400, 500
- **Sizes:** 9px, 12px, 15px, 16px, 22px, 24px, 26px, 43px
- **Line heights:** 1.25, 1.50
- **Letter spacing:** normal
- **Role:** Compact and precise sans-serif for all body text, navigation, and functional UI elements. It provides readability and a modern counterpoint to the decorative serif, handling dense information efficiently.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 16px | 1.1 | — | `--text-caption` |
| body-sm | 24px | 1.1 | — | `--text-body-sm` |
| body | 34px | 1.1 | — | `--text-body` |
| body-lg | 52px | 1.1 | — | `--text-body-lg` |
| heading-sm | 94px | 1.1 | — | `--text-heading-sm` |
| heading | 374px | 1.1 | — | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-46 | 46px | `--spacing-46` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-91 | 91px | `--spacing-91` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-102 | 102px | `--spacing-102` |
| spacing-130 | 130px | `--spacing-130` |
| spacing-163 | 163px | `--spacing-163` |
| spacing-168 | 168px | `--spacing-168` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-213 | 213px | `--spacing-213` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 9px |
| buttons | 0px |
| inlineElements | 2px |
| decorativeElements | 28.8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 25px |
| cardPadding | 18px |
| elementGap | 6px |

## Components

### Ghost Navigation Link

**Role:** Primary navigation elements in header/footer

Text only, no background or border. Uses Off-White Text (#dfdcd5) color on dark backgrounds, or Black Ink (#000000) on light backgrounds. No padding, 0px border-radius, Helvetica Now typeface. For example, 'Structured Points' link.

### Action Button Dark

**Role:** Call to action button, ghost style

Background is transparent (rgba(0, 0, 0, 0)), text color is Off-White Text (#dfdcd5). Has a 1px solid border in the same Off-White Text color. 0px border-radius. Helvetica Now typeface. Example: '+ -' button.

### Action Button Light

**Role:** Call to action button, ghost style for light backgrounds

Background is transparent (rgba(0, 0, 0, 0)), text and border color is Black Ink (#000000). 0px border-radius. Helvetica Now typeface. Example: 'Cookie Preferences' button.

### Subtle Action Tag

**Role:** Small, interactive information tags

Background is Black Ink (#000000), text is Off-White Text (#dfdcd5). Has a 9px border-radius and 32px vertical padding, 60px horizontal padding. Font is Helvetica Now. Example: 'mint maxBTC' button.

### Feature Card

**Role:** Display individual features or content blocks

Background is Slate Surface (#c4c3b6) with 0px border-radius and no box-shadow. Padding is 0px internally. Content within the card dictates spacing and layout. Used for the 'Real BTC yield' feature blocks.

### Feature Highlight Card

**Role:** Elevated card for prominent features

Background is Black Ink (#000000) with 9px border-radius and no box-shadow. Contains an internal padding of 32px vertical and 60px horizontal. Uses Off-White Text for content.

## Do's and Don'ts

### Do

- Use Davinci for all prominent headlines and titles, ensuring letter-spacing is precisely adjusted according to the scale: -0.0090em for largest, -0.0050em for medium, -0.0010em for smaller titles.
- Employ Helvetica Now for all body text, functional UI elements, and navigation links. Maintain its natural letter-spacing ('normal') for maximum readability.
- Maintain a primary achromatic palette using Greige Canvas (#ebebeb) for page backgrounds, Black Ink (#000000) for text, and Slate Surface (#c4c3b6) for card-like elements.
- Apply 0px border-radius to all interactive ghost buttons and 9px border-radius to subtle action tags for textural contrast.
- Utilize rich, classical illustrations as primary visual elements, framed against the muted UI to draw focus and provide brand character.
- Structure content with ample negative space. Prioritize an elementGap of 6px and cardPadding of 18px to maintain an open and organized feel.
- Ensure UI controls and interactive text (e.g., 'mint maxBTC') stand out by using Black Ink (#000000) text on light backgrounds or Off-White Text (#dfdcd5) on dark backgrounds, often with a matching border for ghost buttons.

### Don't

- Avoid using highly saturated or vibrant colors for primary UI elements; reserve these for imagery and content, if at all.
- Do not introduce sharp corners on major content cards; the system prefers 9px corner radius where appropriate for grouping content.
- Refrain from using heavy shadows or complex elevation; the design system leans towards flat interfaces and subtle visual hierarchy.
- Do not deviate from Davinci's or Helvetica Now's assigned roles; mixing their usage will undermine the established typographic contrast.
- Do not use generic, modern stock photography; visuals should align with the classical, painterly aesthetic of the illustrations.
- Avoid dense, information-heavy blocks of text without sufficient line-height; prioritize the established line-heights for legibility.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Greige Canvas | #ebebeb | Dominant page and footer background |
| 1 | Slate Surface | #c4c3b6 | Secondary background layer for cards and subtle content blocks |
| 2 | Black Ink Recess | #000000 | Background for visually distinct components like the 'mint maxBTC' button, creating a moment of focus |

## Imagery

The site heavily relies on classical, painterly illustrations. These images are often full-bleed or contained within circular masks, acting as a primary decorative and atmospheric element rather than strictly explanatory. They feature intricate detail, naturalistic lighting, and a subdued, earthy color palette, reminiscent of old master paintings. Photography is absent. Icons, when present, are minimal vector outlines, often incorporating a subtle geometric or abstract quality, designed not to compete with the rich illustrations.

## Layout

The page primarily uses a max-width contained layout, centered on the screen, though the top hero section appears full-bleed or very wide, bleeding into the edges of the browser with large background illustrations. The hero features a large, centered headline, setting a theatrical tone. Sections flow with consistent vertical spacing, often alternating between very dark and very light backgrounds. Content is frequently presented in a centered stack, but also utilizes a 3-column grid for feature articulation, where each column typically contains an illustration above a text block. Navigation is minimal, consisting of a top-right header for links.

## Similar Brands

- **Axiom Space** — Similar use of very large, elegant serif headlines with generous negative space and a clean, almost stark UI.
- **Unit.co** — Achromatic color scheme, compact sans-serif for functional text, and a focus on content presentation within frames.
- **Arc Browser** — Minimalist UI, a focus on typography as a primary visual element, and a preference for contained visual moments over busy interfaces.
- **Superhuman** — Emphasis on crisp typography, efficient use of space for information display, and a subdued color palette that highlights content.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-greige-canvas: #ebebeb;
  --color-black-ink: #000000;
  --color-off-white-text: #dfdcd5;
  --color-slate-surface: #c4c3b6;
  --color-smoke-grey: #e7e5e4;
  --color-warm-accent-grey: #595855;
  --color-white-highlight: #ffffff;
  --color-midtone-image-grey: #808080;
  --font-davinci: 'Davinci', Playfair Display or Lora (though Davinci's sharp serifs and specific tracking are key);
  --font-helvetica-now: 'Helvetica Now', Inter or Helvetica Neue;
  --text-caption: 16px;
  --leading-caption: 1.1;
  --text-body-sm: 24px;
  --leading-body-sm: 1.1;
  --text-body: 34px;
  --leading-body: 1.1;
  --text-body-lg: 52px;
  --leading-body-lg: 1.1;
  --text-heading-sm: 94px;
  --leading-heading-sm: 1.1;
  --text-heading: 374px;
  --leading-heading: 1.1;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-9: 9px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-46: 46px;
  --spacing-50: 50px;
  --spacing-52: 52px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-90: 90px;
  --spacing-91: 91px;
  --spacing-96: 96px;
  --spacing-102: 102px;
  --spacing-130: 130px;
  --spacing-163: 163px;
  --spacing-168: 168px;
  --spacing-200: 200px;
  --spacing-213: 213px;
  --radius-cards: 9px;
  --radius-buttons: 0px;
  --radius-inlineelements: 2px;
  --radius-decorativeelements: 28.8px;
  --surface-greige-canvas: #ebebeb;
  --surface-slate-surface: #c4c3b6;
  --surface-black-ink-recess: #000000;
}
```

### Tailwind v4

```css
@theme {
  --color-greige-canvas: #ebebeb;
  --color-black-ink: #000000;
  --color-off-white-text: #dfdcd5;
  --color-slate-surface: #c4c3b6;
  --color-smoke-grey: #e7e5e4;
  --color-warm-accent-grey: #595855;
  --color-white-highlight: #ffffff;
  --color-midtone-image-grey: #808080;
  --font-davinci: 'Davinci', Playfair Display or Lora (though Davinci's sharp serifs and specific tracking are key);
  --font-helvetica-now: 'Helvetica Now', Inter or Helvetica Neue;
  --text-caption: 16px;
  --leading-caption: 1.1;
  --text-body-sm: 24px;
  --leading-body-sm: 1.1;
  --text-body: 34px;
  --leading-body: 1.1;
  --text-body-lg: 52px;
  --leading-body-lg: 1.1;
  --text-heading-sm: 94px;
  --leading-heading-sm: 1.1;
  --text-heading: 374px;
  --leading-heading: 1.1;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-9: 9px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-46: 46px;
  --spacing-50: 50px;
  --spacing-52: 52px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-90: 90px;
  --spacing-91: 91px;
  --spacing-96: 96px;
  --spacing-102: 102px;
  --spacing-130: 130px;
  --spacing-163: 163px;
  --spacing-168: 168px;
  --spacing-200: 200px;
  --spacing-213: 213px;
  --radius-cards: 9px;
  --radius-buttons: 0px;
  --radius-inlineelements: 2px;
  --radius-decorativeelements: 28.8px;
  --surface-greige-canvas: #ebebeb;
  --surface-slate-surface: #c4c3b6;
  --surface-black-ink-recess: #000000;
}
```
