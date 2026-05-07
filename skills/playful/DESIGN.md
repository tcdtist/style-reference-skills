---
version: alpha
name: "Playful"
description: "Playful adopts a vibrant yet refined aesthetic with a spacious layout that emphasizes content clarity. Backgrounds feature subtle gradients, creating soft washes of color. Typography is predominantly dark and compact, giving a serious counterpoint to the playful accent colors. Interactive elements utilize a vivid pink, contrasting against a canvas dominated by off-white, imparting an energetic yet sophisticated feel."
theme: "light"
industry: "productivity"
source_url: "https://playful.software"
refero_style_id: "f93ac72e-73b2-4b2c-80eb-351ddfa56f4d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518617395-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518617395-thumb.jpg"
extracted_at: "2026-04-30T03:10:35.262Z"
---

# Playful — Style Reference

> Gradient Playground

**Theme:** light

**Industry:** productivity

Playful adopts a vibrant yet refined aesthetic with a spacious layout that emphasizes content clarity. Backgrounds feature subtle gradients, creating soft washes of color. Typography is predominantly dark and compact, giving a serious counterpoint to the playful accent colors. Interactive elements utilize a vivid pink, contrasting against a canvas dominated by off-white, imparting an energetic yet sophisticated feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #0f172a | `--color-midnight-ink` | Primary text, deep neutrals for icons and borders. This near-black provides strong contrast against light surfaces |
| Vivacious Pink | #ff2e95 | `--color-vivacious-pink` | CTA buttons, accented links, and vibrant highlights — this vivid pink defines primary interactivity and branded elements |
| Frost Canvas | #f6f2ee | `--color-frost-canvas` | Primary page background, footer background, and subtle secondary button backgrounds. It provides a warm, soft base; Hero section and key visual backgrounds – a soft, multi-hued gradient establishing a playful and spacious atmosphere |
| Pitch Black | #000000 | `--color-pitch-black` | Deepest text for headlines and critical user interface elements, providing absolute contrast. Also used for dark component backgrounds and shadows |
| Deep Graphite | #111111 | `--color-deep-graphite` | Card backgrounds, section headers, and dark surface accents |
| Coal Text | #202126 | `--color-coal-text` | Headline text for secondary sections |
| Pale Ash | #e8e5e0 | `--color-pale-ash` | Subtle borders and dividers, providing visual structure without harsh lines |
| Cloud White | #ffffff | `--color-cloud-white` | Input fields, content backgrounds within cards, and for text on dark backgrounds |
| Slate Gray | #414040 | `--color-slate-gray` | Input field text, placeholder text, and muted body copy |
| Light Taupe | #e2dcd6 | `--color-light-taupe` | Delicate borders and secondary structural elements |
| Light Graphite | #353535 | `--color-light-graphite` | Darkest background for subtle overlays or components |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 600, 700, 900
- **Sizes:** 14px, 16px, 18px, 26px, 30px, 70px, 79px
- **Line heights:** 1.00, 1.15, 1.19, 1.20, 1.23, 1.33, 1.70
- **Letter spacing:** -0.002
- **Role:** The primary typeface for all text. Its weights are used for impactful headlines at larger sizes and for clear, concise body text. The tight letter spacing for display sizes gives it a modern, compact feel.

### Arial

- **Token:** `--font-arial`
- **Substitute:** Helvetica Neue, Helvetica, sans-serif
- **Weights:** 400, 600, 700
- **Sizes:** 13px, 15px, 16px, 20px
- **Line heights:** 1.20, 1.40
- **Role:** Used for accessibility-focused elements like button labels and form inputs, providing robust legibility.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.4 | 0px | `--text-caption` |
| body | 16px | 1.2 | -0.002px | `--text-body` |
| subheading | 26px | 1.33 | -0.002px | `--text-subheading` |
| heading-sm | 30px | 1.23 | -0.002px | `--text-heading-sm` |
| heading | 70px | 1.15 | -0.002px | `--text-heading` |
| display | 79px | 1 | -0.002px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-117 | 117px | `--spacing-117` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-180 | 180px | `--spacing-180` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 999px |
| cards | 44px |
| images | 16px |
| buttons | 99px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.22) 0px 32px 80px 0px, rgba(0, 0, 0, 0.08) 0px 2px 8px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1500px |
| sectionGap | 113px |
| cardPadding | 12px |
| elementGap | 10px |

## Components

### Ghost Button

**Role:** Navigational or secondary actions where visual weight should be minimal.

Transparent background, 'Midnight Ink' (0f172a) text, no border or explicit radius. Padding: 12px vertical, 32px horizontal.

### Primary Action Button

**Role:** Main calls to action.

Filled with 'Vivacious Pink' (ff2e95), 'Frost Canvas' (f6f2ee) text, 99px border-radius, giving it a pill shape. Padding: 14px vertical, 24px horizontal. Arial 600 at 15px.

### Circular Secondary Button

**Role:** Icon-only or small, focused interactive elements.

Filled with 'Frost Canvas' (f6f2ee), 'Vivacious Pink' (ff2e95) text, 50% border-radius for a perfect circle. No padding specified (implied from 0px values).

### Feature Card

**Role:** Displaying product features or content blocks.

Background 'Deep Graphite' (111111), 44px border-radius. Shadow: rgba(0, 0, 0, 0.22) 0px 32px 80px 0px, rgba(0, 0, 0, 0.08) 0px 2px 8px 0px.

### Input Field

**Role:** Collecting user data.

Transparent background, 'Slate Gray' (414040) text, 'Slate Gray' (414040) border. No explicit border-radius (implied from 0px values). Arial 400 at 16px.

## Do's and Don'ts

### Do

- Always use a generous `sectionGap` of 113px to maintain spaciousness between primary content blocks.
- Apply `border-radius: 44px` to article cards and larger UI containers to soften surfaces and align with the playful aesthetic.
- Utilize 'Vivacious Pink' (#ff2e95) exclusively for primary calls to action, active navigation states, and key interactive highlights.
- Ensure all primary headings use Inter font with `letter-spacing: -0.002em` to achieve a compact, signature appearance.
- Prioritize 'Frost Canvas' (#f6f2ee) for main page backgrounds to maintain a light and airy feel.
- Employ the dual shadow `rgba(0, 0, 0, 0.22) 0px 32px 80px 0px, rgba(0, 0, 0, 0.08) 0px 2px 8px 0px` for elevated cards.
- Use 'Midnight Ink' (#0f172a) for body text and secondary element borders for strong contrast and clarity.

### Don't

- Do not use dark backgrounds for sections that contain extensive body copy; maintain a light background to preserve readability.
- Avoid arbitrary border radii; stick to the established system tokens: 44px for cards, 99px for buttons, 16px for images.
- Never introduce new chromatic colors outside of 'Vivacious Pink' (#ff2e95) and the brand gradient for UI elements.
- Do not use a default system font for any body text or headings; 'Inter' is paramount for brand identity.
- Avoid dense, information-heavy blocks without sufficient padding or `elementGap` of at least 10px.
- Do not add any additional box-shadows to elements other than cards; rely on the subtle elevation provided by background color differences.

## Elevation

- **Feature Card:** `rgba(0, 0, 0, 0.22) 0px 32px 80px 0px, rgba(0, 0, 0, 0.08) 0px 2px 8px 0px`

## Imagery

The site uses a mix of playful, graphic-style illustrations for app icons and abstract, colorful gradients as hero and background elements. App icons are displayed as contained, rounded-corner elements, sometimes overlapping, showcasing a product-focused content. There are also simple, functional icons (like chevron arrows) that are outlined, and monochrome 'Midnight Ink' or 'Slate Gray'. Imagery serves primarily as decorative atmosphere and product showcase, with a medium density relative to text.

## Layout

The page adheres to a max-width of 1500px, centered on the screen. The hero section is full-bleed with a top custom gradient background, featuring a large, centered headline, subtext, and an input/button pair. Subsequent sections maintain consistent vertical spacing of 113px and alternate between centered text blocks and grids of feature cards. Navigation is a minimal top bar. Overall, the layout is spacious, allowing content to breathe.

## Similar Brands

- **Figma** — Clean, spacious UI with strong typography and a single vibrant accent color for interactivity.
- **Linear** — Minimalist aesthetic with focus on subtle shadows/borders for cards and interaction, strong typographic hierarchy.
- **Notion** — Understated design, heavy reliance on grayscale neutrals, and a precise type system to convey functionality and content.
- **Stripe** — Elegant visual design with careful use of gradients, clean typography, and a restrained color palette where accents stand out.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #0f172a;
  --color-vivacious-pink: #ff2e95;
  --color-frost-canvas: #f6f2ee;
  --color-pitch-black: #000000;
  --color-deep-graphite: #111111;
  --color-coal-text: #202126;
  --color-pale-ash: #e8e5e0;
  --color-cloud-white: #ffffff;
  --color-slate-gray: #414040;
  --color-light-taupe: #e2dcd6;
  --color-light-graphite: #353535;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-arial: 'Arial', Helvetica Neue, Helvetica, sans-serif;
  --text-caption: 13px;
  --leading-caption: 1.4;
  --tracking-caption: 0px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.002px;
  --text-subheading: 26px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.002px;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.23;
  --tracking-heading-sm: -0.002px;
  --text-heading: 70px;
  --leading-heading: 1.15;
  --tracking-heading: -0.002px;
  --text-display: 79px;
  --leading-display: 1;
  --tracking-display: -0.002px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-113: 113px;
  --spacing-117: 117px;
  --spacing-160: 160px;
  --spacing-180: 180px;
  --radius-tags: 999px;
  --radius-cards: 44px;
  --radius-images: 16px;
  --radius-buttons: 99px;
  --shadow-xl: rgba(0, 0, 0, 0.22) 0px 32px 80px 0px, rgba(0, 0, 0, 0.08) 0px 2px 8px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #0f172a;
  --color-vivacious-pink: #ff2e95;
  --color-frost-canvas: #f6f2ee;
  --color-pitch-black: #000000;
  --color-deep-graphite: #111111;
  --color-coal-text: #202126;
  --color-pale-ash: #e8e5e0;
  --color-cloud-white: #ffffff;
  --color-slate-gray: #414040;
  --color-light-taupe: #e2dcd6;
  --color-light-graphite: #353535;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-arial: 'Arial', Helvetica Neue, Helvetica, sans-serif;
  --text-caption: 13px;
  --leading-caption: 1.4;
  --tracking-caption: 0px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.002px;
  --text-subheading: 26px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.002px;
  --text-heading-sm: 30px;
  --leading-heading-sm: 1.23;
  --tracking-heading-sm: -0.002px;
  --text-heading: 70px;
  --leading-heading: 1.15;
  --tracking-heading: -0.002px;
  --text-display: 79px;
  --leading-display: 1;
  --tracking-display: -0.002px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-60: 60px;
  --spacing-80: 80px;
  --spacing-90: 90px;
  --spacing-113: 113px;
  --spacing-117: 117px;
  --spacing-160: 160px;
  --spacing-180: 180px;
  --radius-tags: 999px;
  --radius-cards: 44px;
  --radius-images: 16px;
  --radius-buttons: 99px;
  --shadow-xl: rgba(0, 0, 0, 0.22) 0px 32px 80px 0px, rgba(0, 0, 0, 0.08) 0px 2px 8px 0px;
}
```
