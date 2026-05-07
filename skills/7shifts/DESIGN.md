---
version: alpha
name: "7shifts"
description: "7shifts employs a functional and approachable design system, combining a crisp white and dark gray achromatic base with a singular vivid blue accent for key interactions. Typography provides clear hierarchy, with a custom `Regular` font family for all content up to large headlines. Components are lightweight and often borderless, emphasizing content over chrome, while subtle rounding creates a friendly, modern feel across cards and buttons. The system balances directness with a degree of visual softness."
theme: "light"
industry: "saas"
source_url: "https://www.7shifts.com"
refero_style_id: "736830b5-90b1-47b0-99dd-d79454a0d22a"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509832474-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509832474-thumb.jpg"
extracted_at: "2026-04-30T00:44:25.304Z"
---

# 7shifts — Style Reference

> Crisp Utility, Rounded Edges

**Theme:** light

**Industry:** saas

7shifts employs a functional and approachable design system, combining a crisp white and dark gray achromatic base with a singular vivid blue accent for key interactions. Typography provides clear hierarchy, with a custom `Regular` font family for all content up to large headlines. Components are lightweight and often borderless, emphasizing content over chrome, while subtle rounding creates a friendly, modern feel across cards and buttons. The system balances directness with a degree of visual softness.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, dominant interactive elements text against blues |
| Blueprint Blue | #4570ff | `--color-blueprint-blue` | Primary Call-to-Action buttons, active states, decorative accents — a vivid, energetic blue that highlights key actions |
| Ink Black | #000000 | `--color-ink-black` | Primary text, prominent headlines, dark section backgrounds, card backgrounds |
| Divider Gray | #e5e7eb | `--color-divider-gray` | Hairline borders, subtle separators, inactive elements |
| Whisper White | #f1f0ec | `--color-whisper-white` | Subtle background for secondary sections, card backgrounds within white areas |
| Muted Text Gray | #6e6d6c | `--color-muted-text-gray` | Secondary body text, helper text, captions — provides contrast without competing with main headlines |
| Soft Orange Highlight | #ff6808 | `--color-soft-orange-highlight` | Outlined button borders (e.g. navigation tabs), occasional decorative fills, text underlines – a secondary accent for subtle emphasis |
| Spring Green | #c6ff94 | `--color-spring-green` | Green text accent for links, tags, and emphasized short phrases |
| Lavender Mist | #ebdcff | `--color-lavender-mist` | Decorative background of some cards, subtle highlight for secondary content blocks |
| Sky Blue Light | #d6e0ff | `--color-sky-blue-light` | Decorative background of some cards, subtle highlight for secondary content blocks |
| Midnight Forest | #244f47 | `--color-midnight-forest` | Dark card backgrounds (usually paired with light text) |
| Deep Plum | #c293f1 | `--color-deep-plum` | Dark card backgrounds (usually paired with light text) |
| Rich Indigo | #193f78 | `--color-rich-indigo` | Dark card backgrounds (usually paired with light text) |

## Tokens — Typography

### Regular

- **Token:** `--font-regular`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 11px, 12px, 14px, 16px, 18px, 36px, 64px
- **Line heights:** 1.00, 1.11, 1.14, 1.20, 1.30, 1.33, 1.38, 1.40, 1.50, 1.56
- **Letter spacing:** -0.0500em at 64px, -0.0300em at 36px, -0.0250em at 18px, -0.0220em at 16px, -0.0200em at 14px
- **Role:** Body text, navigation items, descriptive content, and primary headlines — a versatile, compact sans-serif that balances readability with a contemporary feel across all textual elements.

### Medium

- **Token:** `--font-medium`
- **Substitute:** Inter
- **Weights:** 500
- **Sizes:** 11px, 12px, 14px, 16px, 18px, 24px, 28px, 36px, 40px, 48px, 64px, 120px, 150px
- **Line heights:** 0.75, 0.90, 0.93, 1.00, 1.10, 1.11, 1.33, 1.40, 1.43, 1.50
- **Letter spacing:** -0.0300em at 150px, -0.0200em at 48px, -0.0180em at 24px, -0.0120em at 18px
- **Role:** Call-to-action text, sub-headings, and emphasized content — providing subtle weight distinction for prominence without heavy boldness.

### Nanum Pen Script

- **Token:** `--font-nanum-pen-script`
- **Substitute:** Kalam
- **Weights:** 400, 500
- **Sizes:** 28px, 30px
- **Line heights:** 1.00, 1.50
- **Letter spacing:** -0.0300em at 30px
- **Role:** Decorative headlines and accent text — a handwritten script that adds a personal, informal touch to selected titles.

### Bold

- **Token:** `--font-bold`
- **Substitute:** Inter
- **Weights:** 700
- **Sizes:** 14px
- **Line heights:** 1.14
- **Letter spacing:** 0.0250em at 14px
- **Role:** Strong emphasis on small-form headings or labels — used sparingly for high impact within compact UI elements.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.5 | 0px | `--text-caption` |
| body | 14px | 1.5 | -0.28px | `--text-body` |
| heading-sm | 18px | 1.33 | -0.45px | `--text-heading-sm` |
| heading | 36px | 1.33 | -1.08px | `--text-heading` |
| heading-lg | 48px | 1.1 | -0.96px | `--text-heading-lg` |
| display | 64px | 1.11 | -3.2px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-83 | 83px | `--spacing-83` |
| spacing-92 | 92px | `--spacing-92` |
| spacing-93 | 93px | `--spacing-93` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-123 | 123px | `--spacing-123` |
| spacing-133 | 133px | `--spacing-133` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-172 | 172px | `--spacing-172` |
| spacing-175 | 175px | `--spacing-175` |
| spacing-233 | 233px | `--spacing-233` |
| spacing-253 | 253px | `--spacing-253` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 20px |
| icons | 8px |
| buttons | 9999px |
| general | 12px |
| headerTabs | 16px |
| largeElements | 40px |
| emphasizedCard | 24px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 28px |
| elementGap | 8px |

## Components

### Primary Call-to-Action Button

**Role:** High-priority action trigger

Filled with Blueprint Blue (#4570ff), Canvas White (#ffffff) text, and a 9999px (pill-shaped) border-radius. Padding of 0px vertical and 16px horizontal. Uses 'Medium' font, 500 weight.

### Ghost Navigation Button

**Role:** Secondary navigation and internal links within headers.

Transparent background (rgba(0,0,0,0)), Ink Black (#000000) text, 20px border-radius, no vertical/horizontal padding for text-only appearance. Uses 'Regular' font.

### White Pill Button

**Role:** General secondary action or tag.

Canvas White (#ffffff) background, Ink Black (#000000) text, Divider Gray (#e5e7eb) border, 9999px border-radius. Padding 4px vertical, 10px horizontal. Uses 'Regular' font.

### Whisper White Tag Button

**Role:** Informational tags or filter options.

Whisper White (#f1f0ec) background, Ink Black (#000000) text, Divider Gray (#e5e7eb) border, 9999px border-radius. Padding 0px vertical, 16px horizontal. Uses 'Regular' font.

### Standard Card

**Role:** Content grouping, feature display, informational blocks.

Canvas White (#ffffff) background, 20px border-radius, no shadow. Padding 28px on all sides. Content is self-contained.

### Dark Overlay Card

**Role:** Elevated content overlay or feature block on dark backgrounds.

Ink Black (#000000) background, 20px border-radius (rounded bottom and left corners on some variants), no shadow. Padding 40px on all sides. Used often for featured content or comparisons.

### Full-Width Dark Feature Panel

**Role:** Hero section content, prominent feature showcase.

Ink Black (#000000) background, 40px border-radius (bottom corners only on some variants), no shadow. Top padding 60px; horizontal and bottom padding 0px to allow content to bleed. Often full-width background.

### Frosted Glass Card

**Role:** Background for overlaid content, subtle visual interest.

Semitransparent black (rgba(0,0,0,0.5)) background, 20px border-radius, no shadow. Padding 40px. Used for content that sits visually on top of imagery, allowing background to show through.

## Do's and Don'ts

### Do

- Prioritize Blueprint Blue (#4570ff) for all primary calls-to-action to establish a consistent interactive focal point.
- Apply 9999px border-radius to all buttons for a friendly, pill-shaped aesthetic.
- Use Ink Black (#000000) for primary headlines and Canvas White (#ffffff) for card backgrounds, maintaining high contrast.
- Employ Divider Gray (#e5e7eb) for all hairline borders and subtle visual separations within components and between sections.
- Maintain a clear visual hierarchy with 'Regular' for body copy and 'Medium' for button text and subheadings.
- Utilize 20px border-radius for all standard cards to reinforce the consistent soft-edged design language.
- Implement the fixed vertical element gap of 8px when arranging discrete UI elements within components or sections.

### Don't

- Avoid using multiple vivid accent colors simultaneously; limit to Blueprint Blue for primary actions and occasional Soft Orange Highlight (#ff6808) for secondary emphasis.
- Do not introduce hard, sharp corners; use the established radii of 20px, 40px, or 9999px where appropriate.
- Refrain from using strong box-shadows or drop shadows; the system relies on flat surfaces and minimal elevation.
- Do not deviate from the 'Regular' and 'Medium' font families for core UI text; 'Nanum Pen Script' is reserved for highly decorative titles.
- Avoid using primary text in any color other than Ink Black (#000000) on light backgrounds or Canvas White (#ffffff) on dark backgrounds.
- Do not use overly complex gradients; the system favors solid colors and subtle accent washes.
- Avoid dense, information-heavy blocks; ensure generous padding (28px minimum for cards) and vertical spacing between elements.

## Imagery

The imagery style is a mix of product screenshots, often presented within mock UI frames, and abstract flat graphic illustrations for decorative purposes. Product screenshots are typically sharp, clear, and focused on showing the interface without distracting backgrounds. Illustrations are primarily flat, organic shapes, relying on brand colors (like Spring Green, Lavender Mist, and Sky Blue Light) to add a modern, soft visual texture. Icons are filled, with a consistent stroke weight where outlines exist, and are monochromatic in Ink Black or Canvas White, or tinted with Blueprint Blue for interactive states. Imagery primarily serves to explain or enhance content, acting as visual support and product showcases rather than decorative atmosphere. Density is moderate; imagery is used to break up text-heavy sections or highlight features.

## Layout

The page primarily uses a contained layout model, with content centered within a maximum width (implied, not explicitly stated as it's null, but visually constrained). The hero section typically features a large, centered headline over a white background, occasionally transitioning to a full-bleed dark feature panel at the bottom of the hero area. Section rhythm is driven by alternating background colors, moving between Canvas White (#ffffff) and Whisper White (#f1f0ec), punctuated by occasional full-bleed dark sections (Ink Black #000000) or colorful accent sections (e.g. Spring Green or Lavender Mist cards). Content is often arranged in symmetrical stacks or two-column text-left/image-right patterns. Card grids are utilized for features, maintaining consistent spacing. The navigation is a sticky top bar, containing text links, a primary CTA button, and a secondary login button.

## Similar Brands

- **Calendly** — Shares a clean, light UI with a single dominant accent color for CTA buttons and interactive elements, paired with soft rounded corners.
- **Figma** — Similar approach to compact, functional sans-serif typography, using a limited color palette focused on a primary accent and strong neutrals for UI clarity.
- **Asana** — Employs an approachable, slightly rounded aesthetic for cards and buttons, a clear hierarchy with modern sans-serifs, and functional use of color accents on a mostly neutral canvas.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-blueprint-blue: #4570ff;
  --color-ink-black: #000000;
  --color-divider-gray: #e5e7eb;
  --color-whisper-white: #f1f0ec;
  --color-muted-text-gray: #6e6d6c;
  --color-soft-orange-highlight: #ff6808;
  --color-spring-green: #c6ff94;
  --color-lavender-mist: #ebdcff;
  --color-sky-blue-light: #d6e0ff;
  --color-midnight-forest: #244f47;
  --color-deep-plum: #c293f1;
  --color-rich-indigo: #193f78;
  --font-regular: 'Regular', Inter;
  --font-medium: 'Medium', Inter;
  --font-nanum-pen-script: 'Nanum Pen Script', Kalam;
  --font-bold: 'Bold', Inter;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: -0.28px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.45px;
  --text-heading: 36px;
  --leading-heading: 1.33;
  --tracking-heading: -1.08px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.96px;
  --text-display: 64px;
  --leading-display: 1.11;
  --tracking-display: -3.2px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-83: 83px;
  --spacing-92: 92px;
  --spacing-93: 93px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --spacing-123: 123px;
  --spacing-133: 133px;
  --spacing-150: 150px;
  --spacing-160: 160px;
  --spacing-172: 172px;
  --spacing-175: 175px;
  --spacing-233: 233px;
  --spacing-253: 253px;
  --radius-cards: 20px;
  --radius-icons: 8px;
  --radius-buttons: 9999px;
  --radius-general: 12px;
  --radius-headertabs: 16px;
  --radius-largeelements: 40px;
  --radius-emphasizedcard: 24px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-blueprint-blue: #4570ff;
  --color-ink-black: #000000;
  --color-divider-gray: #e5e7eb;
  --color-whisper-white: #f1f0ec;
  --color-muted-text-gray: #6e6d6c;
  --color-soft-orange-highlight: #ff6808;
  --color-spring-green: #c6ff94;
  --color-lavender-mist: #ebdcff;
  --color-sky-blue-light: #d6e0ff;
  --color-midnight-forest: #244f47;
  --color-deep-plum: #c293f1;
  --color-rich-indigo: #193f78;
  --font-regular: 'Regular', Inter;
  --font-medium: 'Medium', Inter;
  --font-nanum-pen-script: 'Nanum Pen Script', Kalam;
  --font-bold: 'Bold', Inter;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: -0.28px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.45px;
  --text-heading: 36px;
  --leading-heading: 1.33;
  --tracking-heading: -1.08px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.96px;
  --text-display: 64px;
  --leading-display: 1.11;
  --tracking-display: -3.2px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-83: 83px;
  --spacing-92: 92px;
  --spacing-93: 93px;
  --spacing-100: 100px;
  --spacing-113: 113px;
  --spacing-120: 120px;
  --spacing-123: 123px;
  --spacing-133: 133px;
  --spacing-150: 150px;
  --spacing-160: 160px;
  --spacing-172: 172px;
  --spacing-175: 175px;
  --spacing-233: 233px;
  --spacing-253: 253px;
  --radius-cards: 20px;
  --radius-icons: 8px;
  --radius-buttons: 9999px;
  --radius-general: 12px;
  --radius-headertabs: 16px;
  --radius-largeelements: 40px;
  --radius-emphasizedcard: 24px;
}
```
