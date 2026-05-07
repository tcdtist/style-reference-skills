---
version: alpha
name: "Tailscale"
description: "Tailscale's design system uses a technical and understated aesthetic, built on a foundation of neutral grays and whites. Typography is compact and precise, maintaining clarity in dense information displays. Components are lightweight, favoring subtle borders and soft shadows over heavy fills or strong visual ornaments, contributing to an overall sense of efficiency and focus, punctuated by a single vibrant red accent color for critical actions."
theme: "light"
industry: "devtools"
source_url: "https://tailscale.com"
refero_style_id: "5b679fb6-8d53-402d-a77b-c88bfb397623"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509908505-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509908505-thumb.jpg"
extracted_at: "2026-04-30T00:45:36.295Z"
---

# Tailscale — Style Reference

> Architectural technical blueprint.

**Theme:** light

**Industry:** devtools

Tailscale's design system uses a technical and understated aesthetic, built on a foundation of neutral grays and whites. Typography is compact and precise, maintaining clarity in dense information displays. Components are lightweight, favoring subtle borders and soft shadows over heavy fills or strong visual ornaments, contributing to an overall sense of efficiency and focus, punctuated by a single vibrant red accent color for critical actions.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Inkwell | #181717 | `--color-inkwell` | Primary text, headers, strong borders, dark surface elements |
| Paper White | #ffffff | `--color-paper-white` | Page backgrounds, card surfaces, ghost button backgrounds, default icon fills |
| Ghost Gray | #eeebea | `--color-ghost-gray` | Subtle borders, secondary card backgrounds, muted backgrounds |
| Carbon Gray | #2e2d2d | `--color-carbon-gray` | Secondary text, content backgrounds, button text on light backgrounds |
| Shadow Tint | #bdbcbb | `--color-shadow-tint` | Subtle shadow base color, divider lines |
| Parchment | #f7f5f4 | `--color-parchment` | Hover states for light surfaces, subtle background shifts |
| Deep Plum | #575555 | `--color-deep-plum` | Muted text, tertiary borders, less prominent icons |
| Ash Charcoal | #232222 | `--color-ash-charcoal` | Pressed states for dark buttons, darker borders |
| Impact Red | #d04841 | `--color-impact-red` | Red action color for filled buttons, selected navigation states, and focused conversion moments |
| Deep Sky Gradient | #5a82de | `--color-deep-sky-gradient` | Decorative background gradient used sparingly for visual interest |
| Backdrop Shadow | #000000 | `--color-backdrop-shadow` | Deepest shadow tint, overlay backdrops |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 300, 400, 500, 600
- **Sizes:** 12px, 14px, 16px, 20px, 32px, 48px, 64px
- **Line heights:** 1.20, 1.43, 1.50
- **Letter spacing:** -0.0300em at 64px, -0.0200em at 48px, -0.0100em at 32px, normal at 16px and below
- **Role:** Primary typeface for all UI elements, body text, headlines, and captions. Its compact nature supports information density without sacrificing legibility.

### MDIO

- **Token:** `--font-mdio`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 20px
- **Line heights:** 1.20, 1.50
- **Letter spacing:** 0.0430em at 20px, 0.0500em at 14px
- **Role:** Used for specific secondary navigation or stylized text, providing a slightly more structured feel with increased letter-spacing.

### Arial

- **Token:** `--font-arial`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 600, 700
- **Sizes:** 14px, 16px
- **Line heights:** 1.50
- **Letter spacing:** -0.0110em at 16px, -0.0100em at 14px
- **Role:** A fallback typeface for specific body text or legacy components, favoring slightly tighter letter spacing for efficiency.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.43 | 0px | `--text-caption` |
| body-sm | 14px | 1.43 | 0px | `--text-body-sm` |
| body | 16px | 1.5 | 0px | `--text-body` |
| subheading | 20px | 1.2 | -0.2px | `--text-subheading` |
| heading | 32px | 1.2 | -0.32px | `--text-heading` |
| heading-lg | 48px | 1.2 | -0.96px | `--text-heading-lg` |
| display | 64px | 1.2 | -1.92px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-77 | 77px | `--spacing-77` |
| spacing-84 | 84px | `--spacing-84` |
| spacing-102 | 102px | `--spacing-102` |
| spacing-168 | 168px | `--spacing-168` |
| spacing-233 | 233px | `--spacing-233` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 9999px |
| cards | 16px |
| buttons | 8px |
| hero-card | 32px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(24, 23, 23, 0.02) 0px 4px 8px 0px | `--shadow-xl` |
| xl-2 | rgba(24, 23, 23, 0.16) 0px 4px 16px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 12px |
| elementGap | 12px |

## Components

### Pill Button

**Role:** Rounded button for secondary actions or tags.

Background: Paper White (#ffffff), Text: Carbon Gray (#2e2d2d), Border: Ghost Gray (#eeebea), Radius: 9999px. Padding: 0px vertical, 18px horizontal.

### Default Button

**Role:** Standard button for general actions.

Background: Inkwell (#181717), Text: Paper White (#ffffff), Border: Inkwell (#181717), Radius: 8px. Padding: 10px vertical, 12px horizontal.

### Outlined Button

**Role:** Secondary action button with a defined border.

Background: rgba(0, 0, 0, 0), Text: Inkwell (#181717), Border: Inkwell (#181717), Radius: 8px. Padding: 10px vertical, 12px horizontal.

### Call to Action Button

**Role:** Prominent button for primary user actions.

Background: Impact Red (#d04841), Text: Paper White (#ffffff), Border: Impact Red (#d04841), Radius: 8px. Padding: 0px vertical, 12px horizontal. Text uses Inter weight 600.

### Feature Card

**Role:** Information container for individual features or content blocks.

Background: Paper White (#ffffff), Radius: 16px, Shadow: rgba(24, 23, 23, 0.02) 0px 4px 8px 0px. Padding: 32px.

### Hero Information Card

**Role:** Enlarged card within hero sections, often for key information.

Background: Paper White (#ffffff), Radius: 32px, Shadow: rgba(24, 23, 23, 0.02) 0px 4px 8px 0px. Padding: 64px.

### Dark Content Card

**Role:** Card variant for displaying content on a dark background.

Background: Carbon Gray (#2e2d2d), Radius: 32px, No Shadow. Padding: 64px vertical, 48px horizontal.

### Navigation Link

**Role:** Interactive text link for navigation menus.

Text: Inkwell (#181717), No explicit background or border. Text uses Inter weight 500 at 16px, letter-spacing -0.16px.

### Privacy Consent Banner

**Role:** Persistent notification at the bottom of the page.

Background: Paper White (#ffffff), Text: Inkwell (#181717), Border: Inkwell (#181717) 1px solid. Functions as an overlay with backdrop rgba(0,0,0,0.24).

## Do's and Don'ts

### Do

- Use Inkwell (#181717) for all primary body text and main headings to ensure strong contrast.
- Apply Ghost Gray (#eeebea) for subtle visual separation, such as thin borders or as a background for secondary surfaces.
- Reserve Impact Red (#d04841) exclusively for primary call-to-action buttons and essential brand accents.
- Prioritize Inter at compact sizes (12-16px) with normal letter-spacing for denser information, such as body text or navigation items.
- Maintain a default border-radius of 8px for most interactive elements and 16px for cards and larger containers.
- Employ the subtle shadow rgba(24, 23, 23, 0.02) 0px 4px 8px 0px for cards and elevated components to provide minimal depth.
- Utilize 12px for consistent internal spacing within components and between closely related elements.

### Don't

- Do not introduce new vibrant colors outside of the defined Impact Red (#d04841) to maintain the restrained aesthetic.
- Avoid heavy drop shadows or strong gradients on common UI elements; elevation should be subtle.
- Refrain from using Arial for new components or primary text. Inter is the canonical typeface.
- Do not deviate from the established radius values; a consistent 8px for buttons and 16px for cards is key.
- Do not use highly saturated primary colors for text or backgrounds unless it’s the Impact Red (#d04841) for a CTA.
- Avoid large letter-spacing for body text; only use MDIO with increased letter-spacing for specific stylized elements.
- Do not use dark backgrounds for full sections; the primary theme is light with occasional dark cards.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Canvas | #eeebea | Primary background for the entire page. |
| 1 | Card Surface | #ffffff | Background for cards, modules, and other distinct content blocks. |
| 2 | Accent Surface | #f7f5f4 | Used for subtle background differentiation or hover states on lighter surfaces. |

## Elevation

- **Card:** `rgba(24, 23, 23, 0.02) 0px 4px 8px 0px`
- **Elevated Component:** `rgba(24, 23, 23, 0.16) 0px 4px 16px 0px`

## Imagery

The visual language focuses on clear product communication. Imagery includes precise product screenshots and abstract vector icons, typically rendered in monochromatic tones or with subtle brand color accents. Photography is minimal, almost absent, favoring a direct, UI-centric presentation. Icons are outlined or filled with a medium stroke weight and are primarily functional and descriptive, not decorative. Imagery supports technical explanations rather than creating atmosphere.

## Layout

The page primarily uses a max-width contained layout, approximately 1200px wide, centered within the browser. The hero section often features a large, centered headline over a light background, sometimes paired with a dark card containing contextual information. Section rhythm is driven by consistent vertical spacing (sectionGap of 24px) between content blocks, with alternating light and very occasional dark surface treatments creating visual breaks. Content is arranged in alternating text-left/image-right patterns or multi-column card grids (e.g., 3-column features). The navigation is a sticky top bar, providing an always-available global menu.

## Similar Brands

- **Figma** — Monochromatic interface with a strong, single accent color and compact typography.
- **Linear** — Focus on high information density, crisp typography, and minimal, yet effective use of elevation.
- **Notion** — White space dominant layouts, system-like typography, and subtle functional elements for productivity.
- **Vercel** — Clean, technical aesthetic with strong neutral palette, subtle shadows, and functional accent colors.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-inkwell: #181717;
  --color-paper-white: #ffffff;
  --color-ghost-gray: #eeebea;
  --color-carbon-gray: #2e2d2d;
  --color-shadow-tint: #bdbcbb;
  --color-parchment: #f7f5f4;
  --color-deep-plum: #575555;
  --color-ash-charcoal: #232222;
  --color-impact-red: #d04841;
  --color-deep-sky-gradient: #5a82de;
  --color-backdrop-shadow: #000000;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-mdio: 'MDIO', Inter, system-ui, sans-serif;
  --font-arial: 'Arial', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.43;
  --tracking-caption: 0px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.2px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.32px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.96px;
  --text-display: 64px;
  --leading-display: 1.2;
  --tracking-display: -1.92px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-77: 77px;
  --spacing-84: 84px;
  --spacing-102: 102px;
  --spacing-168: 168px;
  --spacing-233: 233px;
  --radius-tags: 9999px;
  --radius-cards: 16px;
  --radius-buttons: 8px;
  --radius-hero-card: 32px;
  --shadow-xl: rgba(24, 23, 23, 0.02) 0px 4px 8px 0px;
  --shadow-xl-2: rgba(24, 23, 23, 0.16) 0px 4px 16px 0px;
  --surface-page-canvas: #eeebea;
  --surface-card-surface: #ffffff;
  --surface-accent-surface: #f7f5f4;
}
```

### Tailwind v4

```css
@theme {
  --color-inkwell: #181717;
  --color-paper-white: #ffffff;
  --color-ghost-gray: #eeebea;
  --color-carbon-gray: #2e2d2d;
  --color-shadow-tint: #bdbcbb;
  --color-parchment: #f7f5f4;
  --color-deep-plum: #575555;
  --color-ash-charcoal: #232222;
  --color-impact-red: #d04841;
  --color-deep-sky-gradient: #5a82de;
  --color-backdrop-shadow: #000000;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-mdio: 'MDIO', Inter, system-ui, sans-serif;
  --font-arial: 'Arial', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.43;
  --tracking-caption: 0px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.2px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.32px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.96px;
  --text-display: 64px;
  --leading-display: 1.2;
  --tracking-display: -1.92px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-77: 77px;
  --spacing-84: 84px;
  --spacing-102: 102px;
  --spacing-168: 168px;
  --spacing-233: 233px;
  --radius-tags: 9999px;
  --radius-cards: 16px;
  --radius-buttons: 8px;
  --radius-hero-card: 32px;
  --shadow-xl: rgba(24, 23, 23, 0.02) 0px 4px 8px 0px;
  --shadow-xl-2: rgba(24, 23, 23, 0.16) 0px 4px 16px 0px;
  --surface-page-canvas: #eeebea;
  --surface-card-surface: #ffffff;
  --surface-accent-surface: #f7f5f4;
}
```
