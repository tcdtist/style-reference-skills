---
version: alpha
name: "Patreon"
description: "Patreon leverages a canvas of real-world photography and a muted palette to ground its brand in authentic creator stories, overlaid with a clean, functional UI. Strong, confident typography paired with rounded components creates a friendly yet authoritative tone. The design prioritizes clear content presentation, with color used sparingly to highlight interactive elements and brand identity, rather than for decorative excess. It balances a feeling of welcoming accessibility with structural clarity."
theme: "light"
industry: "saas"
source_url: "https://www.patreon.com"
refero_style_id: "bb94375b-cf09-47d4-a2e3-7b332b2c9216"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509921659-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509921659-thumb.jpg"
extracted_at: "2026-04-30T00:45:47.439Z"
---

# Patreon — Style Reference

> Authentic creator stories on a clean stage.

**Theme:** light

**Industry:** saas

Patreon leverages a canvas of real-world photography and a muted palette to ground its brand in authentic creator stories, overlaid with a clean, functional UI. Strong, confident typography paired with rounded components creates a friendly yet authoritative tone. The design prioritizes clear content presentation, with color used sparingly to highlight interactive elements and brand identity, rather than for decorative excess. It balances a feeling of welcoming accessibility with structural clarity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink | #000000 | `--color-ink` | Primary text, critical buttons, primary navigation elements, footer background — creates strong contrast and a confident presence |
| Canvas | #ffffff | `--color-canvas` | Page backgrounds, card surfaces, ghost button text and borders — provides a clean, bright foundation |
| Iron | #1a1a1a | `--color-iron` | Neutral form states, badge text, and quiet UI feedback where color should stay understated. Do not promote it to the primary CTA color |
| Silver Thread | #959595 | `--color-silver-thread` | Muted helper text, disabled states, subtle indications — a soft gray that recedes visually |
| Sky Blue | #5fc1f1 | `--color-sky-blue` | Decorative highlights, accent icons, informational states – a light, active blue |
| Vivid Pink | #f15ff1 | `--color-vivid-pink` | Secondary brand accent, decorative elements — a bright, playful pink |

## Tokens — Typography

### Oracle

- **Token:** `--font-oracle`
- **Substitute:** Inter
- **Weights:** 250, 300, 350, 400, 500
- **Sizes:** 8px, 14px, 15px, 22px, 26px, 27px, 39px, 54px, 128px, 188px
- **Line heights:** 0.87, 0.98, 1.00, 1.10, 1.20, 1.50
- **Letter spacing:** -0.0600em, -0.0550em, -0.0400em, -0.0230em, -0.0200em, -0.0180em, 0.0200em
- **Role:** Primary typeface for all headings, body text, and UI elements. Its custom nature and extensive weights create a distinct brand voice.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 14px | 1.5 | -0.28px | `--text-body-sm` |
| subheading | 22px | 1.2 | -0.48px | `--text-subheading` |
| heading-sm | 26px | 1.2 | -0.52px | `--text-heading-sm` |
| heading | 39px | 1.1 | -0.78px | `--text-heading` |
| heading-lg | 54px | 1.1 | -0.97px | `--text-heading-lg` |
| display | 128px | 0.98 | -2.3px | `--text-display` |
| display-lg | 188px | 0.87 | -3.38px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-53 | 53px | `--spacing-53` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-105 | 105px | `--spacing-105` |
| spacing-117 | 117px | `--spacing-117` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-159 | 159px | `--spacing-159` |
| spacing-173 | 173px | `--spacing-173` |
| spacing-209 | 209px | `--spacing-209` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 37.5px |
| cards | 30px |
| inputs | 45px |
| buttons | 30px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 38px |
| cardPadding | 14px |
| elementGap | 7px |

## Components

### Primary Filled Button

**Role:** Main call-to-action button, conveying confidence and directness.

Background: Ink (#000000), text: Canvas (#ffffff); 30px border-radius; padding: 15px vertical, 21px horizontal.

### Ghost Button

**Role:** Secondary action or navigational link within a content block, visually recessive.

Background: transparent (rgba(0,0,0,0)), text: Canvas (#ffffff), border: 1px solid Iron (#1a1a1a); 30px border-radius; padding: 11.25px vertical, 18px horizontal.

### Mini Circular Button

**Role:** Icon-only or small, self-contained actions, often navigational or functional.

Background: Ink (#000000), text: Canvas (#ffffff); 50% border-radius (perfect circle); padding: 14.25px all around.

### Tag Button

**Role:** Categorization, filtering, or minor interactive elements.

Background: rgba(255, 255, 255, 0.16) (translucent white), text: Canvas (#ffffff); 37.5px border-radius; padding: 10.5px vertical, 21px horizontal.

### Feature Card

**Role:** Content container for features or testimonials, elevated on the Canvas background.

Background: Canvas (#ffffff), no shadow; 30px border-radius; padding: 52.5px top, 75px bottom, 30px horizontal.

### Search Input

**Role:** Allows users to query content without distracting visual weight.

Background: transparent (rgba(0, 0, 0, 0)), text color: Canvas (#ffffff), border: 1px solid Iron (#1a1a1a); 45px border-radius; no internal padding.

## Do's and Don'ts

### Do

- Use Oracle font family for all text elements, leveraging its custom weights for visual hierarchy.
- Apply Ink (#000000) for primary text and critical interactive button backgrounds.
- Ensure all buttons and cards have a minimum border-radius of 30px to maintain a soft, friendly aesthetic.
- Utilize Canvas (#ffffff) for page backgrounds and primary content surfaces to provide a crisp, clean base.
- Maintain comfortable spacing with a base unit of 4px; use 7px for element-level gaps and 14px for internal card padding.
- Emphasize the Sky Blue (#5fc1f1) accent color for functional indicators and non-critical highlights only.
- Integrate high-quality, authentic photography of creators as key visual elements where appropriate.

### Don't

- Avoid using multiple colors for text; primary text should be Ink (#000000) and secondary text Iron (#1a1a1a) or Silver Thread (#959595).
- Do not introduce square or sharp-cornered elements; all interactive and content containers should adhere to the established radii.
- Refrain from using strong shadows or gradients on primary UI elements, favoring flat and clean surfaces.
- Do not use accent colors as background for large sections or text blocks unless explicitly defined as a semantic state.
- Do not clutter layouts with too many disparate elements; prioritize clear hierarchy and ample whitespace.
- Avoid generic stock photography; all imagery should feel genuine and creator-focused.
- Do not use font weights below 300 for body text to maintain readability.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas | #ffffff | Base page background |
| 1 | Card Surface | #ffffff | Container cards and modular content blocks |

## Imagery

The visual language is dominated by authentic photography of diverse creators, not stock imagery. Photos are typically high-quality and often feature subjects engaged in their craft, establishing a connection with the audience. Images are generally featured full-bleed or contained in soft-edged frames. Iconography is minimalist, often monochrome (Ink or Canvas), using thin strokes. There's a high density of imagery, with photos often acting as primary visual anchors rather than mere decoration or product showcases.

## Layout

The page model is a full-bleed layout, particularly for hero sections, which often feature large, compelling creator photography that extends to the viewport edges. Content is generally organized into digestible blocks with consistent vertical spacing, often alternating between visual styles. Hero sections utilize centered headlines over background imagery or video. Subsequent sections typically employ a responsive grid, with alternating text-left/image-right compositions often observed. Navigation is a flexible top bar that can adapt to light or dark contexts, featuring ghost buttons and a prominent filled action button.

## Similar Brands

- **Substack** — Emphasizes creator independence, uses clean typography and photography with a focus on written content, and a clear call-to-action.
- **Gumroad** — Platform for creators, features product photography alongside UI, with a similar approach to clean layouts and prominent call-to-action buttons.
- **Linktree** — Focuses on personal branding and creator tools, using rounded UI elements and a focus on direct, functional design.
- **Medium** — Content-focused platform with strong typography, clean design, and a focus on author photography/avatars to build connection.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink: #000000;
  --color-canvas: #ffffff;
  --color-iron: #1a1a1a;
  --color-silver-thread: #959595;
  --color-sky-blue: #5fc1f1;
  --color-vivid-pink: #f15ff1;
  --font-oracle: 'Oracle', Inter;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.28px;
  --text-subheading: 22px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.48px;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.52px;
  --text-heading: 39px;
  --leading-heading: 1.1;
  --tracking-heading: -0.78px;
  --text-heading-lg: 54px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.97px;
  --text-display: 128px;
  --leading-display: 0.98;
  --tracking-display: -2.3px;
  --text-display-lg: 188px;
  --leading-display-lg: 0.87;
  --tracking-display-lg: -3.38px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-11: 11px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-27: 27px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-38: 38px;
  --spacing-45: 45px;
  --spacing-53: 53px;
  --spacing-54: 54px;
  --spacing-60: 60px;
  --spacing-75: 75px;
  --spacing-90: 90px;
  --spacing-105: 105px;
  --spacing-117: 117px;
  --spacing-120: 120px;
  --spacing-128: 128px;
  --spacing-150: 150px;
  --spacing-159: 159px;
  --spacing-173: 173px;
  --spacing-209: 209px;
  --radius-tags: 37.5px;
  --radius-cards: 30px;
  --radius-inputs: 45px;
  --radius-buttons: 30px;
  --surface-canvas: #ffffff;
  --surface-card-surface: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-ink: #000000;
  --color-canvas: #ffffff;
  --color-iron: #1a1a1a;
  --color-silver-thread: #959595;
  --color-sky-blue: #5fc1f1;
  --color-vivid-pink: #f15ff1;
  --font-oracle: 'Oracle', Inter;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.28px;
  --text-subheading: 22px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.48px;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.52px;
  --text-heading: 39px;
  --leading-heading: 1.1;
  --tracking-heading: -0.78px;
  --text-heading-lg: 54px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.97px;
  --text-display: 128px;
  --leading-display: 0.98;
  --tracking-display: -2.3px;
  --text-display-lg: 188px;
  --leading-display-lg: 0.87;
  --tracking-display-lg: -3.38px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-11: 11px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-27: 27px;
  --spacing-29: 29px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-38: 38px;
  --spacing-45: 45px;
  --spacing-53: 53px;
  --spacing-54: 54px;
  --spacing-60: 60px;
  --spacing-75: 75px;
  --spacing-90: 90px;
  --spacing-105: 105px;
  --spacing-117: 117px;
  --spacing-120: 120px;
  --spacing-128: 128px;
  --spacing-150: 150px;
  --spacing-159: 159px;
  --spacing-173: 173px;
  --spacing-209: 209px;
  --radius-tags: 37.5px;
  --radius-cards: 30px;
  --radius-inputs: 45px;
  --radius-buttons: 30px;
  --surface-canvas: #ffffff;
  --surface-card-surface: #ffffff;
}
```
