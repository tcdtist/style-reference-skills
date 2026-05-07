---
version: alpha
name: "Stripe"
description: "Stripe's design system evokes a digital command center on a clean canvas. It combines a serene white background with structured grid layouts and a single vibrant violet to highlight actions and key information. Subtle shadows provide soft elevation, preventing elements from feeling flat, while compact typography paired with highly descriptive gradients for hero sections and product showcases adds visual depth without clutter. The overall effect is one of quiet efficiency, where information is paramount, and interactions are clearly signposted."
theme: "light"
industry: "fintech"
source_url: "https://stripe.com"
refero_style_id: "48e5de76-05d5-4c4e-a269-c7c245b291ec"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777503329317-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777503329317-thumb.jpg"
extracted_at: "2026-04-29T22:55:51.920Z"
---

# Stripe — Style Reference

> Architectural blueprint on white marble.

**Theme:** light

**Industry:** fintech

Stripe's design system evokes a digital command center on a clean canvas. It combines a serene white background with structured grid layouts and a single vibrant violet to highlight actions and key information. Subtle shadows provide soft elevation, preventing elements from feeling flat, while compact typography paired with highly descriptive gradients for hero sections and product showcases adds visual depth without clutter. The overall effect is one of quiet efficiency, where information is paramount, and interactions are clearly signposted.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #061b31 | `--color-midnight-ink` | Primary text, critical headings, icons, primary button text for ghost buttons |
| Slate Blue | #50617a | `--color-slate-blue` | Secondary text, muted links, subtle borders, descriptive captions |
| Ghost Gray | #64748d | `--color-ghost-gray` | Tertiary text, placeholder text, inactive states, subtle dividers |
| Platinum White | #ffffff | `--color-platinum-white` | Page backgrounds, card surfaces, primary button text against dark backgrounds |
| Porcelain White | #f8fafd | `--color-porcelain-white` | Secondary card surfaces, subtle background variations |
| Powder Blue | #e5edf5 | `--color-powder-blue` | Background for secondary sections, light card backgrounds |
| Stone Gray | #d8d6df | `--color-stone-gray` | Horizontal rules, subtle borders, graphical elements |
| Deep Violet | #533afd | `--color-deep-violet` | Primary calls to action (buttons, links), active states, significant icons — establishes brand presence and emphasizes interaction |
| Washed Violet | #b9b9f9 | `--color-washed-violet` | Border for ghost buttons, subtle accents |
| Soft Violet | #8087ff | `--color-soft-violet` | Decorative icons, gradient highlights, sub-brand accents |
| Accent Green | #81b81a | `--color-accent-green` | Green outline accent for tags, dividers, and focused UI edges |
| Vibrant Orange | #ff6118 | `--color-vibrant-orange` | Orange outline accent for tags, dividers, and focused UI edges. |
| Sunburst Gradient | #ffbb00 | `--color-sunburst-gradient` | Decorative gradients in hero sections and product showcases, adding a dynamic, abstract visual element |
| Dreamy Gradient | #7f7dc8 | `--color-dreamy-gradient` | Abstract background graphics, product display panels, adding depth and a tech-centric feel |
| Fuchsia Glow Gradient | #ff2ede | `--color-fuchsia-glow-gradient` | Decorative illustration elements, feature highlights |

## Tokens — Typography

### sohne-var

- **Token:** `--font-sohne-var`
- **Substitute:** system-ui, sans-serif
- **Weights:** 300, 400
- **Sizes:** 8px, 9px, 10px, 11px, 12px, 14px, 16px, 18px, 20px, 22px, 26px, 32px, 34px, 44px, 48px, 56px
- **Line heights:** 0.80, 0.85, 1.00, 1.03, 1.07, 1.10, 1.12, 1.15, 1.20, 1.25, 1.30, 1.33, 1.40, 1.43, 1.45, 1.50
- **Letter spacing:** -0.0300em at 56px, -0.0250em at 48px, -0.0090em at 18px
- **OpenType features:** "ss01" on, "tnum"
- **Role:** The primary typeface for all content. Weight 300 is used for large, impactful headlines, creating a sense of understated authority rather than shouting. Weight 400 is standard for body text, ensuring clarity and readability. The 'ss01' feature provides alternative character forms, and 'tnum' ensures tabular figures align numerically.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.45 | 0.03px | `--text-caption` |
| body | 14px | 1.4 | 0.003px | `--text-body` |
| subheading | 18px | 1.25 | -0.009px | `--text-subheading` |
| heading-sm | 22px | 1.2 | -0.01px | `--text-heading-sm` |
| heading | 32px | 1.15 | -0.02px | `--text-heading` |
| heading-lg | 44px | 1.1 | -0.025px | `--text-heading-lg` |
| display | 56px | 1.07 | -0.03px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-270 | 270px | `--spacing-270` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 4px |
| cards | 6px |
| images | 4px |
| inputs | 4px |
| buttons | 4px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.2) 0px 0px 32px 8px | `--shadow-xl` |
| xl-2 | rgba(50, 50, 93, 0.12) 0px 16px 32px 0px | `--shadow-xl-2` |
| xl-3 | rgba(23, 23, 23, 0.08) 0px 15px 35px 0px | `--shadow-xl-3` |
| xl-4 | rgba(23, 23, 23, 0.06) 0px 3px 6px 0px | `--shadow-xl-4` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 12px |
| elementGap | 8px |

## Components

### Primary Filled Button

**Role:** Main call to action.

Background: Deep Violet (#533afd), Text: Platinum White (#ffffff), Border: 4px radius, Padding: 15.5px vertical, 24px horizontal. Sohne-var weight 400.

### Ghost Button

**Role:** Secondary action. Low visual hierarchy.

Background: transparent, Text: Midnight Ink (#061b31), Border: 0px, Padding: 12px vertical, 0px horizontal. Sohne-var weight 400.

### Outlined Button

**Role:** Tertiary action.

Background: transparent, Text: Deep Violet (#533afd), Border: Washed Violet (#b9b9f9), 4px radius, Padding: 14.5px vertical, 24px horizontal. Sohne-var weight 400.

### Default Card

**Role:** Content container for features and information.

Background: Powder Blue (#e5edf5), Border: none, 6px radius, Padding: 12px.

### Feature Card

**Role:** Highlighting key features or product aspects.

Background: Porcelain White (#f8fafd), Border: none, 6px radius, Box Shadow: rgba(0, 0, 0, 0.2) 0px 0px 32px 8px. Padding: 12px.

### Primary Navigation Link

**Role:** Top-level navigation item.

Text: Midnight Ink (#061b31), Underline: none on hover, Padding: 0px.

## Do's and Don'ts

### Do

- Use Platinum White (#ffffff) as the default page background for most sections.
- Apply Deep Violet (#533afd) specifically for primary interactive elements, ensuring strong visual call to action.
- Employ sohne-var weight 300 for all display and large heading typography to maintain a refined, impactful presence.
- Keep card surfaces subtle, using Powder Blue (#e5edf5) or Porcelain White (#f8fafd) with soft 6px rounded corners.
- Utilize -0.0300em letter-spacing for large text (56px) to maintain a cohesive, modern typographic aesthetic.
- Implement radial and linear gradients for hero banners and product showcases to add dynamic visual interest without overwhelming the UI.
- Maintain a clear elementGap of 8px for logical grouping of related UI elements.

### Don't

- Do not use saturated colors for large areas or text unless they are part of a decorative gradient or a specific accent.
- Avoid using hard, sharp shadows; prefer soft, diffused shadows like rgba(0, 0, 0, 0.2) 0px 0px 32px 8px for elevation.
- Do not introduce new font families; sohne-var is the sole typeface for all typographic needs.
- Refrain from using border radii other than 4px and 6px for interactive components and cards, respectively.
- Do not use generic blue for links or buttons; Deep Violet (#533afd) is the designated action color.
- Avoid high-contrast, bold headlines; the system relies on lighter weights (300, 400) even for large text.
- Do not vary line heights significantly from the established typographic scale; ensure dense, compact text blocks for body copy and tighter leads for headlines.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Platinum White | #ffffff | Primary page background and base canvas. |
| 1 | Porcelain White | #f8fafd | Slightly elevated secondary surfaces, light card backgrounds. |
| 2 | Powder Blue | #e5edf5 | Backgrounds for alternating sections or distinct content blocks. |

## Elevation

- **Feature Card:** `rgba(0, 0, 0, 0.2) 0px 0px 32px 8px`
- **Hovered Card:** `rgba(50, 50, 93, 0.12) 0px 16px 32px 0px`

## Imagery

The site uses a combination of abstract, vibrant gradients for hero sections and product showcases (e.g., radial-gradient using Deep Violet, pinks, and light blues), and clean, contained product screenshots that are often presented within device mockups. For illustrative purposes, icons are outlined or filled with brand colors, maintaining a minimal yet functional aesthetic. Imagery serves primarily as decorative atmosphere and product showcase, with a lesser emphasis on photography, emphasizing a more technical and abstract visual story.

## Layout

The page primarily uses a max-width contained layout, though the hero section often employs full-bleed vibrant gradients to establish a dynamic visual anchor. Sections exhibit a comfortable vertical rhythm, with consistent spacing and a blend of centered content stacks and alternating text-left/image-right arrangements. Feature sets are often presented in multi-column card grids, supporting compact information delivery. Navigation is handled by a sticky top bar with clearly defined interactive elements.

## Similar Brands

- **Linear** — Shares a sophisticated, modern aesthetic with minimal color, strong typography, and subtle UI elements.
- **Figma** — Utilizes a clean white workspace, subtle gray scale, and a vibrant primary accent color for actions.
- **Vercel** — Combines a technical, precise feel with thoughtful spacing, restrained color usage, and abstract background graphics.
- **Notion** — Employs a content-first approach with a high-contrast text palette, clean surfaces, and minimal decorative elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #061b31;
  --color-slate-blue: #50617a;
  --color-ghost-gray: #64748d;
  --color-platinum-white: #ffffff;
  --color-porcelain-white: #f8fafd;
  --color-powder-blue: #e5edf5;
  --color-stone-gray: #d8d6df;
  --color-deep-violet: #533afd;
  --color-washed-violet: #b9b9f9;
  --color-soft-violet: #8087ff;
  --color-accent-green: #81b81a;
  --color-vibrant-orange: #ff6118;
  --color-sunburst-gradient: #ffbb00;
  --color-dreamy-gradient: #7f7dc8;
  --color-fuchsia-glow-gradient: #ff2ede;
  --font-sohne-var: 'sohne-var', system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.45;
  --tracking-caption: 0.03px;
  --text-body: 14px;
  --leading-body: 1.4;
  --tracking-body: 0.003px;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.009px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.01px;
  --text-heading: 32px;
  --leading-heading: 1.15;
  --tracking-heading: -0.02px;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.025px;
  --text-display: 56px;
  --leading-display: 1.07;
  --tracking-display: -0.03px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-270: 270px;
  --radius-tags: 4px;
  --radius-cards: 6px;
  --radius-images: 4px;
  --radius-inputs: 4px;
  --radius-buttons: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.2) 0px 0px 32px 8px;
  --shadow-xl-2: rgba(50, 50, 93, 0.12) 0px 16px 32px 0px;
  --shadow-xl-3: rgba(23, 23, 23, 0.08) 0px 15px 35px 0px;
  --shadow-xl-4: rgba(23, 23, 23, 0.06) 0px 3px 6px 0px;
  --surface-platinum-white: #ffffff;
  --surface-porcelain-white: #f8fafd;
  --surface-powder-blue: #e5edf5;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #061b31;
  --color-slate-blue: #50617a;
  --color-ghost-gray: #64748d;
  --color-platinum-white: #ffffff;
  --color-porcelain-white: #f8fafd;
  --color-powder-blue: #e5edf5;
  --color-stone-gray: #d8d6df;
  --color-deep-violet: #533afd;
  --color-washed-violet: #b9b9f9;
  --color-soft-violet: #8087ff;
  --color-accent-green: #81b81a;
  --color-vibrant-orange: #ff6118;
  --color-sunburst-gradient: #ffbb00;
  --color-dreamy-gradient: #7f7dc8;
  --color-fuchsia-glow-gradient: #ff2ede;
  --font-sohne-var: 'sohne-var', system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.45;
  --tracking-caption: 0.03px;
  --text-body: 14px;
  --leading-body: 1.4;
  --tracking-body: 0.003px;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.009px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.01px;
  --text-heading: 32px;
  --leading-heading: 1.15;
  --tracking-heading: -0.02px;
  --text-heading-lg: 44px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.025px;
  --text-display: 56px;
  --leading-display: 1.07;
  --tracking-display: -0.03px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-270: 270px;
  --radius-tags: 4px;
  --radius-cards: 6px;
  --radius-images: 4px;
  --radius-inputs: 4px;
  --radius-buttons: 4px;
  --shadow-xl: rgba(0, 0, 0, 0.2) 0px 0px 32px 8px;
  --shadow-xl-2: rgba(50, 50, 93, 0.12) 0px 16px 32px 0px;
  --shadow-xl-3: rgba(23, 23, 23, 0.08) 0px 15px 35px 0px;
  --shadow-xl-4: rgba(23, 23, 23, 0.06) 0px 3px 6px 0px;
  --surface-platinum-white: #ffffff;
  --surface-porcelain-white: #f8fafd;
  --surface-powder-blue: #e5edf5;
}
```
