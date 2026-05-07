---
version: alpha
name: "Epidemicsound"
description: "This design system presents a clean, approachable aesthetic with a strong emphasis on content, rather than heavy ornamentation. Subtle background color shifts create visual segmentation, preventing the flat UI from feeling stark. Type takes center stage, particularly the custom 'Sebenta Font' for headlines, which adds a distinct, sophisticated character, contrasting the straightforward 'Inter' for body copy. Playful, high-contrast accent colors are used sparingly to draw attention to key interactive elements and promotions, injecting vibrancy into an otherwise restrained palette."
theme: "light"
industry: "media"
source_url: "https://epidemicsound.com"
refero_style_id: "d1f5ece3-ec6c-467d-8a59-51ee259cc023"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775943813273-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775943813273-thumb.jpg"
extracted_at: "2026-04-11T21:43:52.978Z"
---

# Epidemicsound — Style Reference

> Crisp Paper, Bold Ink. Like a freshly printed document with critical information highlighted in vibrant markers.

**Theme:** light

**Industry:** media

This design system presents a clean, approachable aesthetic with a strong emphasis on content, rather than heavy ornamentation. Subtle background color shifts create visual segmentation, preventing the flat UI from feeling stark. Type takes center stage, particularly the custom 'Sebenta Font' for headlines, which adds a distinct, sophisticated character, contrasting the straightforward 'Inter' for body copy. Playful, high-contrast accent colors are used sparingly to draw attention to key interactive elements and promotions, injecting vibrancy into an otherwise restrained palette.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, button backgrounds, navigation elements, key iconography – provides strong contrast against light surfaces. |
| Cloud White | #ffffff | `--color-cloud-white` | Page backgrounds, card surfaces, inverted text for dark buttons. |
| Paper Gray | #f1f0eb | `--color-paper-gray` | Body background, sections, hero background – acts as a subtle off-white base. |
| Ash Gray | #efefef | `--color-ash-gray` | Button backgrounds, subtle dividers – a very light gray for interactive elements. |
| Storm Gray | #60605 | `--color-storm-gray` | Secondary text, link text, body copy on lighter backgrounds – provides readability without harshness. |
| Light Steel | #cfd6e5 | `--color-light-steel` | Image backgrounds, card backgrounds, subtle UI element backgrounds – a cool, desaturated gray. |
| Rose Pop | #ff82c2 | `--color-rose-pop` | Promotional banners, card highlights, attention-grabbing links – a vivid, high-chroma pink to inject energy. |
| Electric Blue | #20afff | `--color-electric-blue` | Interactive elements, links, occasional highlights – a vibrant blue that directs user attention. |
| Lemon Zest | #ffda40 | `--color-lemon-zest` | Occasional highlights, secondary promotional elements – adds a bright, energetic touch. |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 600, 700
- **Sizes:** 10px, 12px, 14px, 16px, 18px, 24px
- **Line heights:** 1.00, 1.15, 1.33, 1.50, 1.56, 1.60, 1.71
- **Letter spacing:** 0.1000em
- **Role:** Body text, navigation items, buttons, captions, small labels – a highly readable, versatile workhorse font for all functional text. The consistent positive letter-spacing adds an open, informal feel.

### sebentaFont

- **Token:** `--font-sebentafont`
- **Substitute:** Georgia, serif
- **Weights:** 500
- **Sizes:** 20px, 24px, 32px, 40px, 48px, 64px, 80px, 128px
- **Line heights:** 1.00, 1.06, 1.13, 1.20, 1.25
- **Letter spacing:** -0.04, -0.03, -0.02
- **Role:** Display and headline text – this custom font with its distinctive serifs provides a sophisticated, editorial counterpoint to Inter. The consistent negative letter-spacing for large sizes makes headlines feel tightly composed.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | 0.1px | `--text-caption` |
| body | 14px | 1.71 | 0.1px | `--text-body` |
| heading | 20px | 1.25 | -0.04px | `--text-heading` |
| heading-lg | 48px | 1.2 | -0.03px | `--text-heading-lg` |
| display | 80px | 1.06 | -0.04px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-57 | 57px | `--spacing-57` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-105 | 105px | `--spacing-105` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-240 | 240px | `--spacing-240` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| badges | 9999px |
| buttons | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 40px |
| elementGap | 8px |

## Components

### CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Promotional Highlight Card (Studio Feature)

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### FAQ Accordion

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button (Dark)

**Role:** Call to action

Background: Midnight Ink (#000000), text: Cloud White (#ffffff). Padding: varies based on context (from 9.6px vertical, 24px horizontal to 0px). No border radius.

### Secondary Action Button (Light)

**Role:** Secondary action or navigation

Background: Ash Gray (#efefef), text: Midnight Ink (#000000). Padding: varies (from 9.6px vertical, 24px horizontal to 0px). No border radius.

### Ghost Button

**Role:** Tertiary action or navigational link

Transparent background, text: Midnight Ink (#000000). Padding: 0px. No border radius. Used for subtle actions like 'Contact sales'.

### Promotional Banner Button

**Role:** CTA within promotional banners

Background: rgba(207, 214, 229, 0.16) (Light Steel with transparency), text: Cloud White (#ffffff). Padding: 9.6px vertical, 24px horizontal. No border radius.

### Image Card (Transparent)

**Role:** Content container for images with overlaid text

Transparent background (rgba(0,0,0,0)). Padding: 0px top/right/left, 40px bottom. No border or shadow. Used for showcasing brand examples.

### Promotional Highlight Card (Rose Pop)

**Role:** Highlighting key features or promotions

Background: Rose Pop (#ff82c2). Padding: 16px top, 32px right, 16px bottom, 16px left. No border or shadow. Used for 'Studio' feature highlight.

### Image Background Card (Light Steel)

**Role:** Container for image-based content sections

Background: Light Steel (#cfd6e5). Padding: 0px. No border or shadow. Used to visually segment certain image-heavy sections.

### New Feature Badge

**Role:** Signaling new content or features

Background: Midnight Ink (#000000), text: Cloud White (#ffffff). Padding: 2px vertical, 6px horizontal. Radius: 9999px (full pill shape).

### Accordion Item

**Role:** Collapsible content sections, FAQs

Background: Paper Gray (#f1f0eb). No visible borders or shadows. Text: Midnight Ink (#000000). Padding seems to be around 16px vertical internally.

## Do's and Don'ts

### Do

- Use Midnight Ink (#000000) for all primary body text and headings to ensure high contrast.
- Apply Rose Pop (#ff82c2) sparingly for promotional banners and key feature highlights to create visual pop.
- Employ the 'sebentaFont' at weight 500 for all headlines 20px and above, maintaining negative letter spacing values (-0.02em to -0.04em) to achieve a sophisticated, distinctive look.
- Utilize Paper Gray (#f1f0eb) as the default page and section background color, varying it subtly for content blocks where more visual separation is needed.
- Buttons and cards must always have a 0px border radius, reinforcing the crisp, boxy aesthetic of the UI.
- Ensure all text set in 'Inter' maintains a positive letter spacing of 0.1000em for an open, airy feel.
- Maintain a minimum vertical spacing of 40px between major content sections on the page.

### Don't

- Do not use saturated brand colors for extensive text blocks; reserve them for accents and banners.
- Avoid using box shadows or gradients, as the system relies on flat colors and subtle background shifts for depth.
- Do not round corners on cards or buttons; maintain the explicit 0px border radius for a sharp, defined appearance.
- Do not substitute 'Inter' for 'sebentaFont' in headlines, as the custom font is crucial for brand identity.
- Avoid excessive use of the vivid accent colors simultaneously; typically, one strong accent color per section is sufficient to avoid visual clutter.

## Imagery

The visual language relies heavily on product-oriented photography and clean, unadorned UI. Photography is typically tightly cropped on a single subject or product, sometimes presented without much environmental context, or large landscape shots that evoke atmosphere. Images are often integrated directly into card backgrounds or full-width sections. There's a notable absence of illustrations or 3D renders. Icons are monochromatic, filled, and simplified, maintaining a functional, utilitarian role. The overall density is high with imagery, serving to showcase either the product in use or the 'sound' it represents, rather than just decorative elements.

## Layout

The page maintains a centered max-width layout, with some sections breaking out to full-bleed for visual impact, such as the initial dark hero banner that contrasts with the main content area. The hero includes a prominent centered headline over a light background. Content alternates between stacked text blocks, two-column layouts (often text adjacent to an image or product screenshot), and 3-column card grids for features and examples. A consistent vertical rhythm is established, primarily through the 'sectionGap', creating distinct, comfortable breathing room between content blocks. Navigation is a sticky top bar with clearly defined 'Log in' and 'Create free account' buttons.

## Similar Brands

- **Figma** — Both use a primary light theme with strong typographic hierarchy, high-contrast dark text, and flat, borderless UI elements for a clean, content-focused feel.
- **Linear** — Share a preference for a minimal, function-first aesthetic, utilizing subtle background color changes for separation instead of shadows, and relying on precise typography.
- **Canva** — Similar approach to using a clean, light base canvas with vibrant, high-chroma accent colors strategically placed to attract attention without overwhelming the design.
- **Stripe** — Features a strong, custom display typeface for headlines contrasted with a clear, functional sans-serif for body, coupled with a generally flat design approach and restrained use of color.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-cloud-white: #ffffff;
  --color-paper-gray: #f1f0eb;
  --color-ash-gray: #efefef;
  --color-storm-gray: #60605;
  --color-light-steel: #cfd6e5;
  --color-rose-pop: #ff82c2;
  --color-electric-blue: #20afff;
  --color-lemon-zest: #ffda40;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-sebentafont: 'sebentaFont', Georgia, serif;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.1px;
  --text-body: 14px;
  --leading-body: 1.71;
  --tracking-body: 0.1px;
  --text-heading: 20px;
  --leading-heading: 1.25;
  --tracking-heading: -0.04px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.03px;
  --text-display: 80px;
  --leading-display: 1.06;
  --tracking-display: -0.04px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-57: 57px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-105: 105px;
  --spacing-128: 128px;
  --spacing-144: 144px;
  --spacing-240: 240px;
  --radius-cards: 0px;
  --radius-badges: 9999px;
  --radius-buttons: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-cloud-white: #ffffff;
  --color-paper-gray: #f1f0eb;
  --color-ash-gray: #efefef;
  --color-storm-gray: #60605;
  --color-light-steel: #cfd6e5;
  --color-rose-pop: #ff82c2;
  --color-electric-blue: #20afff;
  --color-lemon-zest: #ffda40;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-sebentafont: 'sebentaFont', Georgia, serif;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.1px;
  --text-body: 14px;
  --leading-body: 1.71;
  --tracking-body: 0.1px;
  --text-heading: 20px;
  --leading-heading: 1.25;
  --tracking-heading: -0.04px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.03px;
  --text-display: 80px;
  --leading-display: 1.06;
  --tracking-display: -0.04px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-57: 57px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-105: 105px;
  --spacing-128: 128px;
  --spacing-144: 144px;
  --spacing-240: 240px;
  --radius-cards: 0px;
  --radius-badges: 9999px;
  --radius-buttons: 0px;
}
```
