---
version: alpha
name: "Fresha"
description: "Fresha uses an expansive, bright self-care marketplace aesthetic with a clear information hierarchy. A luminous radial gradient forms a soft, inviting backdrop, contrasting with sharp black typography and vivid accent colors. Interactive elements are clearly defined by rounded borders and specific color usage, while a subtle surface elevation emphasizes key content. The layout maintains a spacious feel with compact, grouped content, creating an efficient and user-friendly experience."
theme: "light"
industry: "productivity"
source_url: "https://www.fresha.com"
refero_style_id: "066625ba-0d8d-472e-8240-4026ed7bb94e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510305969-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510305969-thumb.jpg"
extracted_at: "2026-04-30T00:52:08.546Z"
---

# Fresha — Style Reference

> Luminous radial gradient

**Theme:** light

**Industry:** productivity

Fresha uses an expansive, bright self-care marketplace aesthetic with a clear information hierarchy. A luminous radial gradient forms a soft, inviting backdrop, contrasting with sharp black typography and vivid accent colors. Interactive elements are clearly defined by rounded borders and specific color usage, while a subtle surface elevation emphasizes key content. The layout maintains a spacious feel with compact, grouped content, creating an efficient and user-friendly experience.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #0d0d0d | `--color-midnight-ink` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Canvas White | #ffffff | `--color-canvas-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Cloud Gray | #f2f2f2 | `--color-cloud-gray` | Secondary card backgrounds, subtle section dividers — provides a gentle visual separation from the main canvas |
| Muted Stone | #767676 | `--color-muted-stone` | Muted body text, secondary descriptions, helper text — balances readability with less emphasis than primary text |
| Silver Mist | #d3d3d3 | `--color-silver-mist` | Divider lines, subtle input borders, inactive elements — provides a delicate structural definition |
| Mercury Stroke | #e5e5e5 | `--color-mercury-stroke` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Sunset Gold | #ffc00a | `--color-sunset-gold` | Yellow decorative accent for icons, marks, and small graphic details. Do not promote it to the primary CTA color |
| Violet Impulse | #6950f3 | `--color-violet-impulse` | Outlined action buttons, active link states, small functional icons — signals interactivity and importance with a distinct, vivid hue |
| Self-Care Glow | #ef6997 | `--color-self-care-glow` | Hero background gradient start — an inviting, soft, and vibrant backdrop to the primary service offering |

## Tokens — Typography

### RoobertPRO

- **Token:** `--font-roobertpro`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 15px, 16px, 17px, 20px, 24px, 28px, 40px, 64px, 96px
- **Line heights:** 1.00, 1.06, 1.10, 1.15, 1.17, 1.20, 1.29, 1.33, 1.40, 1.41
- **Letter spacing:** normal
- **Role:** All textual content — its geometric clarity provides a modern, functional voice across headings, body text, and interactive elements. The variety of weights supports a clear typographic hierarchy.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 15px | 1.41 | — | `--text-caption` |
| subheading | 20px | 1.29 | — | `--text-subheading` |
| heading | 24px | 1.25 | — | `--text-heading` |
| heading-lg | 28px | 1.17 | — | `--text-heading-lg` |
| display | 40px | 1.15 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-191 | 191px | `--spacing-191` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 999px |
| cards | 8px |
| inputs | 999px |
| buttons | 999px |
| default | 8px |
| largeCards | 12px |
| smallElements | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 32px |
| elementGap | 8px |

## Components

### Navigation Link

**Role:** Main navigation and utility links in header/footer.

Text in Midnight Ink (#0d0d0d) at 16px RoobertPRO weight 400. Hover/active states use Violet Impulse (#6950f3) text color or a bottom border of E5E5E5.

### Primary Search Input

**Role:** Main search bar for services and locations.

Full-width field with text set at 16px RoobertPRO weight 400 in Midnight Ink (#0d0d0d). Uses a 999px border-radius, a thin 1px border of Silver Mist (#d3d3d3) and 2px of horizontal padding.

### Search Button

**Role:** Dedicated action button for initiating a search.

Filled background in Midnight Ink (#0d0d0d) with Canvas White (#ffffff) text at 16px RoobertPRO weight 400. Has a 999px border-radius and 12px vertical padding.

### Ghost Header Button

**Role:** Secondary action button in the header, e.g., 'Log in' or 'Menu'.

Transparent background with Midnight Ink (#0d0d0d) text at 16px RoobertPRO weight 400. Uses a 999px border-radius and minimal padding (0px).

### Outlined Call to Action Button

**Role:** Prominent, interactive buttons that suggest a primary action, like 'Get the app'.

Transparent background, Violet Impulse (#6950f3) text and 1px border. Uses 999px border-radius and 12px vertical padding where visible.

### Product Thumbnail Card

**Role:** Display individual service providers with imagery and condensed info.

Transparent background with 12px border-radius. Contains an image with an 8px border-radius. Titles are in Midnight Ink (#0d0d0d) and descriptions in Muted Stone (#767676).

### Information Card

**Role:** Standalone informational blocks or larger content groupings.

Cloud Gray (#f2f2f2) background with 8px border-radius. Features generous 32px padding on all sides. Text is in Midnight Ink (#0d0d0d) for headings and Muted Stone (#767676) for body content.

## Do's and Don'ts

### Do

- Use Midnight Ink (#0d0d0d) for all primary text and main headings to ensure strong contrast and readability.
- Apply Canvas White (#ffffff) as the default page background and for filled interactive elements.
- Reserve Violet Impulse (#6950f3) for outlined call-to-action buttons and active link states.
- Utilize Cloud Gray (#f2f2f2) for secondary content cards and subtle background variations in sections.
- Implement a 999px border-radius for all primary buttons, search inputs, and navigational elements to maintain a uniformly rounded aesthetic.
- Ensure all textual content uses the RoobertPRO font family in appropriate weights for hierarchy.
- Maintain a clear elementGap of 8px between discrete UI elements for consistent visual rhythm.

### Don't

- Avoid using Sunset Gold (#ffc00a) as an interaction color; it is reserved for decorative accents and ratings.
- Do not introduce sharp corners; all significant UI containers and interactive elements should use 8px, 12px, or 999px border-radii.
- Do not use dark backgrounds for main content sections; the system is designed around a light theme with bright surfaces.
- Avoid excessive shadow usage; rely on distinct background colors and minimal borders for element separation.
- Do not use decorative gradients on functional UI components; stick to solid colors for clarity.
- Refrain from altering the letter-spacing of RoobertPRO text; maintain 'normal' tracking for all content.
- Do not use more than two levels of text color in a single component to avoid visual clutter; primarily use Midnight Ink (#0d0d0d) and Muted Stone (#767676).

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Canvas | #ffffff | Primary page background, base surface for content. |
| 1 | Subtle Card | #f2f2f2 | Elevated card backgrounds, distinct content blocks. |
| 2 | Interactive Overlays | #0d0d0d | Filled interactive elements like search buttons, providing strong contrast. |

## Imagery

The site predominantly uses high-quality product photography (salons, spas, services) within contained, rectangular frames with either 8px or 12px rounded corners. These images serve as explanatory content and are crucial for showcasing services. Small, functional icons are outlined and monochromatic, primarily in Midnight Ink (#0d0d0d), serving as visual cues. Product screenshots are realistic and shown within device mockups. The overall imagery is content-heavy, directly illustrating the services offered, rather than relying on abstract graphics or lifestyle photography.

## Layout

The page uses a maximum-width contained layout, with a prominent full-width hero section that features a radial gradient background and a centered headline. Content sections below the hero alternate between full-width blocks (like the 'Download the app' section) and multi-column grids for recommended services. Vertical spacing between logical sections is consistently 24px. The main navigation is a sticky top bar, providing persistent access. Content is generally grouped into compact, repeating cards, creating an information-dense yet scannable layout.

## Similar Brands

- **Mindbody** — Service marketplace with a clean, light UI and focus on booking.
- **ClassPass** — Centralized platform for wellness services with clear categorization and discovery.
- **Booking.com** — Information-dense cards and search-driven interface for local services/stays.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #0d0d0d;
  --color-canvas-white: #ffffff;
  --color-cloud-gray: #f2f2f2;
  --color-muted-stone: #767676;
  --color-silver-mist: #d3d3d3;
  --color-mercury-stroke: #e5e5e5;
  --color-sunset-gold: #ffc00a;
  --color-violet-impulse: #6950f3;
  --color-self-care-glow: #ef6997;
  --font-roobertpro: 'RoobertPRO', Inter;
  --text-caption: 15px;
  --leading-caption: 1.41;
  --text-subheading: 20px;
  --leading-subheading: 1.29;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.17;
  --text-display: 40px;
  --leading-display: 1.15;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-113: 113px;
  --spacing-191: 191px;
  --radius-tags: 999px;
  --radius-cards: 8px;
  --radius-inputs: 999px;
  --radius-buttons: 999px;
  --radius-default: 8px;
  --radius-largecards: 12px;
  --radius-smallelements: 4px;
  --surface-page-canvas: #ffffff;
  --surface-subtle-card: #f2f2f2;
  --surface-interactive-overlays: #0d0d0d;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #0d0d0d;
  --color-canvas-white: #ffffff;
  --color-cloud-gray: #f2f2f2;
  --color-muted-stone: #767676;
  --color-silver-mist: #d3d3d3;
  --color-mercury-stroke: #e5e5e5;
  --color-sunset-gold: #ffc00a;
  --color-violet-impulse: #6950f3;
  --color-self-care-glow: #ef6997;
  --font-roobertpro: 'RoobertPRO', Inter;
  --text-caption: 15px;
  --leading-caption: 1.41;
  --text-subheading: 20px;
  --leading-subheading: 1.29;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.17;
  --text-display: 40px;
  --leading-display: 1.15;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-113: 113px;
  --spacing-191: 191px;
  --radius-tags: 999px;
  --radius-cards: 8px;
  --radius-inputs: 999px;
  --radius-buttons: 999px;
  --radius-default: 8px;
  --radius-largecards: 12px;
  --radius-smallelements: 4px;
  --surface-page-canvas: #ffffff;
  --surface-subtle-card: #f2f2f2;
  --surface-interactive-overlays: #0d0d0d;
}
```
