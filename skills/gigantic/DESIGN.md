---
version: alpha
name: "Gigantic"
description: "Gigantic's design system pulses with a bold, high-contrast energy, centered on a dominant black and white palette punctuated by a single vivid red accent. Typography is oversized and impactful, often leaning into condensed and italicized forms to create a sense of dynamic urgency, balanced by generous spacing. The overall aesthetic is raw and direct, reminiscent of street art or bold industrial signage, with minimal decorative elements, focusing instead on stark visual statements."
theme: "light"
industry: "ecommerce"
source_url: "https://giganticcandy.com"
refero_style_id: "22e11001-8786-4af7-bdb9-f9419ce8ad1a"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519843555-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519843555-thumb.jpg"
extracted_at: "2026-04-30T03:31:02.812Z"
---

# Gigantic — Style Reference

> Raw Urban Energy: Oversized typography and high-contrast visuals on a clean backdrop evoke direct, impactful communication.

**Theme:** light

**Industry:** ecommerce

Gigantic's design system pulses with a bold, high-contrast energy, centered on a dominant black and white palette punctuated by a single vivid red accent. Typography is oversized and impactful, often leaning into condensed and italicized forms to create a sense of dynamic urgency, balanced by generous spacing. The overall aesthetic is raw and direct, reminiscent of street art or bold industrial signage, with minimal decorative elements, focusing instead on stark visual statements.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, product cards, general surface areas, button text on filled buttons |
| Asphalt Black | #231f20 | `--color-asphalt-black` | Primary text, button backgrounds, borders, navigation elements. Almost black, it provides strong contrast |
| Street Chalk | #f0ede7 | `--color-street-chalk` | Subtle background panels, muted text, decorative elements offering a slight visual break from pure white |
| Ink Black | #000000 | `--color-ink-black` | Body text, secondary button borders, icons, providing maximum contrast where needed |
| Flavor Burst Red | #ff634b | `--color-flavor-burst-red` | Orange outline accent for tags, dividers, and focused UI edges |

## Tokens — Typography

### neue-haas-grotesk-display

- **Token:** `--font-neue-haas-grotesk-display`
- **Substitute:** Inter
- **Weights:** 400, 450, 500, 700
- **Sizes:** 12px, 14px, 16px, 18px, 24px, 25px, 32px
- **Line heights:** 1.00, 1.20, 1.30, 1.44, 1.56, 1.70, 1.80
- **Letter spacing:** 0.0160em, 0.0250em, 0.0280em, 0.0310em, 0.0360em, 0.0440em, 0.0500em, 0.0570em, 0.0580em
- **Role:** All primary headings, body text, links, and UI elements. The condensed and impactful letterforms define the brand's direct communication style.

### GTStandard-M

- **Token:** `--font-gtstandard-m`
- **Substitute:** Roboto Mono
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.50
- **Letter spacing:** 0.0310em
- **Role:** Specialized decorative text treatments, often seen in custom graphics or specific callouts. Its distinct character adds a unique texture when used sparingly.

### Arial

- **Token:** `--font-arial`
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.2
- **Role:** Arial — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | 0.43px | `--text-caption` |
| body | 14px | 1.56 | 0.49px | `--text-body` |
| body-lg | 16px | 1.44 | 0.58px | `--text-body-lg` |
| subheading | 18px | 1.3 | 0.65px | `--text-subheading` |
| heading | 24px | 1.2 | 0.6px | `--text-heading` |
| display | 32px | 1 | 0.5px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-125 | 125px | `--spacing-125` |
| spacing-188 | 188px | `--spacing-188` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 32px |
| cardPadding | 30px |
| elementGap | 19px |

## Components

### Filled Primary Button

**Role:** Call to action

Solid Asphalt Black background, Canvas White text. No border-radius, creating a sharp, blocky feel. Padding of 30px on left/right and 0px on top/bottom. Often appears in conjunction with hero text or product listings.

### Text Link Button

**Role:** Secondary action

Ghost button with Asphalt Black text and a 1px Asphalt Black underline. No explicit padding, intended to blend into text while remaining interactive. Used for secondary actions like 'Shop Candy Deluxe'.

### Outlined Text Button

**Role:** Tertiary action

Ghost button with Ink Black text and a 1px Ink Black border. Features minimal 6px horizontal padding and 1px vertical padding, creating a compact, understated interactive element.

### Product Shop Buttons

**Role:** Product navigation action

Solid Asphalt Black background with Canvas White text, similar to the primary button but often smaller. Used for direct product interaction, like 'Shop Salty', 'Shop Crispy'. Features 0px border-radius and 30px horizontal padding.

### Utility Top Bar

**Role:** Informational banner

A thin band at the very top of the page with Asphalt Black background and Canvas White text for announcements (e.g., 'Free Shipping'). Full-width, minimal height.

## Do's and Don'ts

### Do

- Use Asphalt Black (#231f20) for all primary text and button backgrounds to ensure strong contrast against Canvas White (#ffffff).
- Apply 0px border-radius to all interactive elements, cards, and containers to maintain the blocky, direct aesthetic.
- Employ `neue-haas-grotesk-display` at large sizes (24px, 32px) and heavy weights (700) for headlines, with aggressive letter-spacing to create maximum impact.
- Introduce Flavor Burst Red (#ff634b) sparingly as an accent for brand elements, hover states, or small decorative graphic details.
- Maintain a clear visual hierarchy with generous vertical spacing (sectionGap 32px) between content blocks, balanced by a comfortable elementGap of 19px.
- Keep backgrounds predominantly Canvas White (#ffffff) or Street Chalk (#f0ede7), ensuring text remains highly legible.

### Don't

- Avoid using multiple chromatic colors; limit vibrant hues to the singular Flavor Burst Red (#ff634b) accent.
- Do not use subtle shadows or gradients; rely on stark color contrast and flat surfaces for visual hierarchy.
- Refrain from rounded corners or soft edges; all visual elements should adhere to sharp, angular forms dictated by 0px border-radius.
- Do not dilute headline impact with light weights or small sizes; prioritize bold, expansive typography for maximum presence.
- Avoid decorative imagery that clashes with the high-contrast, text-dominant, urban aesthetic. Product shots should be clean and direct.
- Do not introduce complex UI components or overlays; keep layouts direct and information presented upfront.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Canvas | #ffffff | The primary background for all page content. |
| 1 | Subtle Panel | #f0ede7 | Used for alternative background sections to gently break up visual flow, often for informational blocks. |
| 2 | Actionable Surface | #231f20 | Background for primary interactive elements like buttons, providing strong visual call to action. |

## Imagery

The site uses a combination of sharp product photography and bold, graphic illustrations. Product shots are clean, brightly lit, and often feature the product unwrapped or broken to showcase inner textures, set against pure white or subtly textured backgrounds. Illustrations are geometric and distressed (e.g., 'VARIETY BOX') or abstract, often using Ink Black with subtle texture. Icons are predominantly filled and blocky, adhering to the sharp-edged aesthetic. Imagery plays a dual role: directly showcasing product appeal and reinforcing the brand's impactful, slightly rugged visual identity. Density is balanced, with images occupying significant blocks but always complementary to large typographic statements rather than overwhelming them.

## Layout

The site uses a full-bleed page model, with content often centered but spanning the full width, especially for hero sections or full-page typographic statements. The hero features an immense, centered headline against a Street Chalk background, immediately setting a bold typographic tone. Sections alternate between a high-contrast white background and the subtle Street Chalk background, creating a rhythmic visual flow. Content arrangement is primarily centered stacks for headlines and subtext, transitioning to a distinct two-column layout for product descriptions (text-left/image-right, then reversed). Product listings typically utilize a 4-column grid. The layout prioritizes ample space around key elements, presenting information in impactful, self-contained blocks. Navigation is a sticky top bar with minimal links.

## Similar Brands

- **Oatly** — Bold, expressive, almost aggressive typographic style with stark color contrast and minimal imagery.
- **Magic Spoon Cereal** — Playful yet direct brand messaging with strong visual identity, often integrating oversized typography with product shots.
- **Brumate** — High-contrast product focus with a dark-on-light theme, emphasizing clean product presentation amidst bold textural elements.
- **Liquid Death** — Utilizes a raw, almost counter-culture aesthetic with high-impact typography and very limited, striking color accents.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-asphalt-black: #231f20;
  --color-street-chalk: #f0ede7;
  --color-ink-black: #000000;
  --color-flavor-burst-red: #ff634b;
  --font-neue-haas-grotesk-display: 'neue-haas-grotesk-display', Inter;
  --font-gtstandard-m: 'GTStandard-M', Roboto Mono;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: 0.43px;
  --text-body: 14px;
  --leading-body: 1.56;
  --tracking-body: 0.49px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.44;
  --tracking-body-lg: 0.58px;
  --text-subheading: 18px;
  --leading-subheading: 1.3;
  --tracking-subheading: 0.65px;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --tracking-heading: 0.6px;
  --text-display: 32px;
  --leading-display: 1;
  --tracking-display: 0.5px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-55: 55px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-125: 125px;
  --spacing-188: 188px;
  --radius-none: 0px;
  --surface-page-canvas: #ffffff;
  --surface-subtle-panel: #f0ede7;
  --surface-actionable-surface: #231f20;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-asphalt-black: #231f20;
  --color-street-chalk: #f0ede7;
  --color-ink-black: #000000;
  --color-flavor-burst-red: #ff634b;
  --font-neue-haas-grotesk-display: 'neue-haas-grotesk-display', Inter;
  --font-gtstandard-m: 'GTStandard-M', Roboto Mono;
  --font-arial: 'Arial', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: 0.43px;
  --text-body: 14px;
  --leading-body: 1.56;
  --tracking-body: 0.49px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.44;
  --tracking-body-lg: 0.58px;
  --text-subheading: 18px;
  --leading-subheading: 1.3;
  --tracking-subheading: 0.65px;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --tracking-heading: 0.6px;
  --text-display: 32px;
  --leading-display: 1;
  --tracking-display: 0.5px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-55: 55px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-125: 125px;
  --spacing-188: 188px;
  --radius-none: 0px;
  --surface-page-canvas: #ffffff;
  --surface-subtle-panel: #f0ede7;
  --surface-actionable-surface: #231f20;
}
```
