---
version: alpha
name: "Promova"
description: "Promova's visual identity balances playful, almost illustrative color blocks with grounded, sharp typography. The use of a custom display font with wide characters and prominent Manrope for body text creates a distinctly readable and approachable feel, while the generous rounded corners on cards and buttons soften the overall aesthetic. Occasional bright, muted color panels are layered behind content, adding a sense of depth and energetic contrast against the otherwise neutral black-and-white core."
theme: "dark"
industry: "other"
source_url: "https://promova.com"
refero_style_id: "dae5e893-ca18-44c3-8f83-358cb52af237"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933101837-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933101837-thumb.jpg"
extracted_at: "2026-04-11T18:45:18.460Z"
---

# Promova — Style Reference

> layered pastel blocks on a dark canvas

**Theme:** dark

**Industry:** other

Promova's visual identity balances playful, almost illustrative color blocks with grounded, sharp typography. The use of a custom display font with wide characters and prominent Manrope for body text creates a distinctly readable and approachable feel, while the generous rounded corners on cards and buttons soften the overall aesthetic. Occasional bright, muted color panels are layered behind content, adding a sense of depth and energetic contrast against the otherwise neutral black-and-white core.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, button backgrounds, general UI elements. The foundational dark color for text and interactive components. |
| Cloud White | #ffffff | `--color-cloud-white` | Content backgrounds, button text. Provides strong contrast against Midnight Ink for readability. |
| Pebble Gray | #595959 | `--color-pebble-gray` | Secondary text and subtle borders. Used for less prominent content to reduce visual hierarchy. |
| Soft Mist | #f5f5f5 | `--color-soft-mist` | Light background sections, subtly contrasting with Cloud White. Provides slight visual separation in some areas. |
| Limoncello | #fff050 | `--color-limoncello` | Dynamic accents and interactive states. Its vividness draws attention as a hero accent. |
| Sky Haze | #eceeff | `--color-sky-haze` | Background panels and decorative blocks, contributing to the layered, playful aesthetic. |
| Misty Meadow | #f4f9e7 | `--color-misty-meadow` | Background panels and decorative blocks, adding a soft, natural accent. |
| Lavender Dream | #dfe3ff | `--color-lavender-dream` | Background panels and decorative blocks, creating gentle visual interest. |
| Periwinkle Charm | #bec8ff | `--color-periwinkle-charm` | Background panels and decorative blocks, a muted violet tone that adds depth without overwhelming. |

## Tokens — Typography

### Manrope

- **Token:** `--font-manrope`
- **Substitute:** system-ui
- **Weights:** 200, 400, 500, 700
- **Sizes:** 10px, 14px, 15px, 16px, 18px, 20px, 24px, 25px, 140px
- **Line heights:** 1.00, 1.20, 1.40, 1.42, 1.44, 1.50, 1.67
- **Letter spacing:** normal
- **Role:** Primary text font, used widely for body copy, navigation, buttons, and detailed information. Its geometric clarity ensures readability across all weights and sizes.

### Nekst

- **Token:** `--font-nekst`
- **Weights:** 400
- **Sizes:** 14px, 15px, 16px, 18px, 19px, 24px, 40px, 50px, 60px, 70px, 100px, 120px
- **Line heights:** 1.00, 1.20, 1.67
- **Letter spacing:** normal
- **Role:** Display font used primarily for prominent headings and titles. Its distinct character provides a strong brand voice and visual differentiation, especially at larger sizes where it demands attention.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 14px | 1.4 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| body-lg | 18px | 1.67 | — | `--text-body-lg` |
| subheading | 24px | 1.2 | — | `--text-subheading` |
| heading | 40px | 1 | — | `--text-heading` |
| heading-lg | 70px | 1 | — | `--text-heading-lg` |
| display | 120px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-110 | 110px | `--spacing-110` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-203 | 203px | `--spacing-203` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 30px |
| small | 4px |
| buttons | 20px |
| general | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 30px |
| elementGap | 10px |

## Components

### Promotional Modal Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group — Primary & Secondary

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### FAQ Accordion

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Secondary Outlined Button

**Role:** Secondary action button with border

Background: rgba(0,0,0,0). Text: #000000 (Midnight Ink). Border: #000000 (Midnight Ink). Padding: 20px all sides. Border Radius: 20px. Used for 'Sign Up' or other less prominent actions.

### Ghost Navigation Button

**Role:** Minimal navigation item or tertiary action

Background: rgba(0,0,0,0). Text: #000000 (Midnight Ink). Border: #000000 (Midnight Ink). Padding: 0px all sides. Border Radius: 0px. Used for navigation links or text-based actions.

### Abstract Background Panel

**Role:** Decorative background element

Backgrounds: varies between #eceeff (Sky Haze), #f4f9e7 (Misty Meadow), #dfe3ff (Lavender Dream), #bec8ff (Periwinkle Charm). Often full-bleed or large blocks. Border Radius: 30px. No shadows. These serve as a visual bed for content cards, adding color and depth.

## Do's and Don'ts

### Do

- Use Manrope for all body text and descriptions at various weights, ensuring crisp legibility.
- Apply Nekst font specifically for large headings and display text to deliver brand identity.
- Maintain a clear visual hierarchy by using #000000 (Midnight Ink) for primary text and #595959 (Pebble Gray) for secondary information.
- Implement a 30px border-radius on cards, 20px on prominent buttons to maintain a soft, approachable aesthetic.
- Utilize #fff050 (Limoncello) sparingly for key interactive elements or highlights to draw attention.
- Structure page sections with padding that results in 40px vertical gaps between major content blocks.

### Don't

- Avoid using shadows for elevation; instead, create depth through background color layering and contrasting panels.
- Do not deviate from the Manrope and Nekst font families; avoid mixing in other typefaces.
- Refrain from using overly saturated colors outside of the defined accent palette.
- Do not use generic square corners on content cards or primary buttons; maintain the specified rounded radii.
- Avoid tight spacing; ensure comfortable 'elementGap' of at least 10px between interactive elements and textual content.
- Do not use #000000 (Midnight Ink) on a #595959 (Pebble Gray) background, as it fails AAA contrast.

## Imagery

The site uses a combination of tight product screenshots, profile-style circular headshots, and abstract illustrative background graphics. Product shots of phones are clean, isolated, and often displayed at an angle, focusing purely on the UI. Photography of individuals is contained within circular masks, implying a focus on people and community without full-bleed lifestyle images. Abstract graphic panels in muted pastel tones (#eceeff, #f4f9e7, #dfe3ff, #bec8ff) serve as decorative backgrounds, often layered behind content cards, contributing to a soft, inviting atmosphere. The overall density is balanced, allowing imagery to complement text rather than dominate, primarily serving as decorative context or product showcasing.

## Layout

The layout is primarily full-bleed, with content sections extending to the edges of the viewport before narrowing to a comfortable reading width internally for text blocks. The hero section often features large, impactful headings using the custom 'Nekst' font over a colored background or abstract graphic. Sections often alternate between dark and light background themes, achieved by large, rounded-corner background panels of muted colors. Content is typically arranged in centered stacks or two-column layouts (text left, image/graphic right). Vertical spacing between sections is generous (approximately 40px), creating clear visual breaks. The navigation is a sticky top bar with prominent 'GET STARTED' and 'Sign Up' buttons.

## Similar Brands

- **Babbel** — Educational platform with a direct, approachable UI and clear call-to-actions.
- **Duolingo** — Language learning app with playful elements and focus on user engagement, similar use of rounded shapes.
- **Headspace** — Use of rounded, soft geometric shapes and a calming color palette that feels inviting for a learning/wellness app.
- **Calm** — Similar application of muted accents and rounded form factors on a darker base, creating a peaceful user experience.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-cloud-white: #ffffff;
  --color-pebble-gray: #595959;
  --color-soft-mist: #f5f5f5;
  --color-limoncello: #fff050;
  --color-sky-haze: #eceeff;
  --color-misty-meadow: #f4f9e7;
  --color-lavender-dream: #dfe3ff;
  --color-periwinkle-charm: #bec8ff;
  --font-manrope: 'Manrope', system-ui;
  --font-nekst: 'Nekst', ui-sans-serif, system-ui, sans-serif;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-body-lg: 18px;
  --leading-body-lg: 1.67;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --text-heading: 40px;
  --leading-heading: 1;
  --text-heading-lg: 70px;
  --leading-heading-lg: 1;
  --text-display: 120px;
  --leading-display: 1;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-27: 27px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-110: 110px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --spacing-203: 203px;
  --radius-cards: 30px;
  --radius-small: 4px;
  --radius-buttons: 20px;
  --radius-general: 10px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-cloud-white: #ffffff;
  --color-pebble-gray: #595959;
  --color-soft-mist: #f5f5f5;
  --color-limoncello: #fff050;
  --color-sky-haze: #eceeff;
  --color-misty-meadow: #f4f9e7;
  --color-lavender-dream: #dfe3ff;
  --color-periwinkle-charm: #bec8ff;
  --font-manrope: 'Manrope', system-ui;
  --font-nekst: 'Nekst', ui-sans-serif, system-ui, sans-serif;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-body-lg: 18px;
  --leading-body-lg: 1.67;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --text-heading: 40px;
  --leading-heading: 1;
  --text-heading-lg: 70px;
  --leading-heading-lg: 1;
  --text-display: 120px;
  --leading-display: 1;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-27: 27px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-110: 110px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --spacing-203: 203px;
  --radius-cards: 30px;
  --radius-small: 4px;
  --radius-buttons: 20px;
  --radius-general: 10px;
}
```
