---
version: alpha
name: "ClassPass"
description: "This design system feels energetic and clear, like a fitness studio bathed in natural light with sharp accents. The bright blue calls attention to interactive elements, contrasting with a clean, predominantly achromatic background. Rounded corners and generous spacing soften the overall feeling, making the diverse offerings appear approachable and user-friendly, rather than overwhelming."
theme: "light"
industry: "other"
source_url: "https://classpass.com"
refero_style_id: "5596b7f9-09aa-4073-b283-4731425896e1"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932939184-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932939184-thumb.jpg"
extracted_at: "2026-04-11T18:42:38.505Z"
---

# ClassPass — Style Reference

> sunny fitness studio

**Theme:** light

**Industry:** other

This design system feels energetic and clear, like a fitness studio bathed in natural light with sharp accents. The bright blue calls attention to interactive elements, contrasting with a clean, predominantly achromatic background. Rounded corners and generous spacing soften the overall feeling, making the diverse offerings appear approachable and user-friendly, rather than overwhelming.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, critical UI elements, dark backgrounds for emphasis. |
| Cloud White | #ffffff | `--color-cloud-white` | Page backgrounds, card surfaces, primary inverse text. |
| Steel Gray | #676767 | `--color-steel-gray` | Secondary text, subtle borders, less emphasized body copy. |
| Deep Graphite | #111111 | `--color-deep-graphite` | Body copy on light backgrounds, providing strong contrast. |
| Sky Blue | #0055ff | `--color-sky-blue` | CTA buttons, interactive components, active states, links — signaling action and primary brand presence. |
| Sunshine Yellow | #fce172 | `--color-sunshine-yellow` | Promotional banners, highlight sections — a warm, inviting accent. |

## Tokens — Typography

### norms

- **Token:** `--font-norms`
- **Substitute:** Inter, Arial
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px, 18px, 36px
- **Line heights:** 1.00, 1.11, 1.33, 1.40, 1.43, 1.50
- **Letter spacing:** normal
- **Role:** Used for nearly all text, including body copy, links, navigation, buttons, and most headings. Its versatility makes it the staple for information delivery.

### circuit

- **Token:** `--font-circuit`
- **Substitute:** Montserrat, Georgia
- **Weights:** 400
- **Sizes:** 42px
- **Line heights:** 1.05
- **Letter spacing:** normal
- **Role:** Reserved for prominent headlines, offering a distinct visual voice for key messaging.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.43 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.33 | — | `--text-subheading` |
| heading | 36px | 1.11 | — | `--text-heading` |
| display | 42px | 1.05 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-49 | 49px | `--spacing-49` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-199 | 199px | `--spacing-199` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 9999px |
| cards | 20px |
| buttons | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 56-64px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Hero Modal Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Promotional Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Secondary Call to Action Button

**Role:** CTA button

Outlined button with Cloud White background (rgba(0,0,0,0)), Sky Blue text (#0055ff), Sky Blue border (#0055ff), and a 'pill' shape (9999px border-radius). Padding is proportional to its primary counterpart.

### Ghost Header Button

**Role:** Header elements

Transparent background (rgba(0,0,0,0)), Midnight Ink text (#000000), no border, 0px border-radius. Used for header navigation and secondary actions. 16px horizontal padding.

### Inverse Ghost Header Button

**Role:** Header elements

Transparent background (rgba(0,0,0,0)), Cloud White text (#ffffff), no border, 0px border-radius. Used for header navigation in contexts with dark backgrounds. 16px horizontal padding.

### Modal Card

**Role:** Dialog, overlay

Cloud White background (#ffffff) with 20px border-radius, creating soft, welcoming pop-ups. Typically centered, with deep graphite body text and primary headlines. Generous internal padding (24-40px horizontal, 56px vertical) creating ample breathing room for content.

## Do's and Don'ts

### Do

- Prioritize Sky Blue (#0055ff) for all primary interactive elements like buttons and active navigation states.
- Use a 9999px border-radius for all primary and secondary buttons to maintain the 'pill' aesthetic.
- Apply 20px border-radius for larger card-like components to soften their appearance.
- Ensure headings use 'circuit' font at 42px/1.05 for primary messages, with 'norms' font for all other text sizes.
- Maintain high contrast text with Midnight Ink (#000000) or Deep Graphite (#111111) on white backgrounds or Cloud White (#ffffff) on Sky Blue.
- Utilize 8px as the base unit for all minor spacing, building up to 16px, 24px, and 40px for larger internal element separation.
- Use `Sunshine Yellow (#fce172)` exclusively for banner-type announcements to capture immediate attention.

### Don't

- Do not introduce new color hues; stick to Sky Blue, Sunshine Yellow, and the established neutrals.
- Avoid using square buttons or applying radii other than 9999px for interactive elements.
- Do not use 'circuit' font for body text or small labels; it is reserved for prominent headings.
- Avoid subtle contrast text on white backgrounds; always use Midnight Ink or Deep Graphite to ensure readability.
- Do not deviate from the established padding values; consistent spacing is key for visual harmony.
- Do not use shadows for elevation except where explicitly defined; depth is primarily created through background surfaces.
- Do not use background images directly on content cards; instead, feature photography as a mosaic behind UI elements.

## Imagery

The site uses a dense, mosaic-like grid of high-quality, vibrant photography, exclusively featuring people engaged in fitness, wellness, and beauty activities. The images are full-bleed within their grid cells, uncropped or minimally cropped, and appear to be lifestyle shots rather than overly staged product placements. They are used decoratively to establish an energetic, aspirational atmosphere, occupying significant visual space relative to text. There are no illustrations or abstract graphics; the visual language is purely photographic, showcasing real people in real activities.

## Layout

The overall page is a max-width contained layout, though the underlying background (a photographic mosaic) often extends full-bleed. The hero section features a prominent white modal overlay centered over the photographic grid, providing a clear call to action. Content sections primarily follow a stacked, centered approach within the modal, or a more dynamic grid of images on the main page. Navigation is a consistent top bar that remains static at 64px height. The density is relatively high due to the constant presence of imagery, but text is kept concise and well-spaced within its containers.

## Similar Brands

- **Peloton** — Shares a focus on energetic photography of people engaged in fitness against a clean UI, using strong primary colors as accents.
- **Nike** — Similar use of dynamic, aspirational photography as a core visual element, paired with bold typography and a clear, functional interface.
- **Airbnb Experiences** — Employs a grid of high-quality activity-focused photography with an overlayed, friendly UI and a bright, inviting color palette for engagement.
- **Apple Fitness+** — Combines a clean, light interface with vibrant, full-screen imagery of active individuals to create an engaging, aspirational experience.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-cloud-white: #ffffff;
  --color-steel-gray: #676767;
  --color-deep-graphite: #111111;
  --color-sky-blue: #0055ff;
  --color-sunshine-yellow: #fce172;
  --font-norms: 'norms', Inter, Arial;
  --font-circuit: 'circuit', Montserrat, Georgia;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --text-heading: 36px;
  --leading-heading: 1.11;
  --text-display: 42px;
  --leading-display: 1.05;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-49: 49px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-100: 100px;
  --spacing-199: 199px;
  --radius-tags: 9999px;
  --radius-cards: 20px;
  --radius-buttons: 9999px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-cloud-white: #ffffff;
  --color-steel-gray: #676767;
  --color-deep-graphite: #111111;
  --color-sky-blue: #0055ff;
  --color-sunshine-yellow: #fce172;
  --font-norms: 'norms', Inter, Arial;
  --font-circuit: 'circuit', Montserrat, Georgia;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --text-heading: 36px;
  --leading-heading: 1.11;
  --text-display: 42px;
  --leading-display: 1.05;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-49: 49px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-70: 70px;
  --spacing-100: 100px;
  --spacing-199: 199px;
  --radius-tags: 9999px;
  --radius-cards: 20px;
  --radius-buttons: 9999px;
}
```
