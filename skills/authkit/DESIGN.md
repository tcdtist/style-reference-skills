---
version: alpha
name: "Authkit"
description: "AuthKit's design evokes an 'internal dashboard' feel — polished and functional without being sterile. Dark, translucent surfaces glow with subtle inner shadows and a restrained use of soft, muted blues. The sharp contrast between the deep `Midnight Abyss` background and crisp white text, paired with a limited palette of nearly achromatic blues, creates a sense of digital precision. The deliberate mix of round (`Pill`) and subtly rounded (`Subtle`) corners on different elements adds a tactile quality to the otherwise sleek, high-tech aesthetic, hinting at user-friendliness within a complex system."
theme: "dark"
industry: "devtools"
source_url: "https://authkit.com"
refero_style_id: "e80231a2-e4d6-406a-a2c9-2e6109679690"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923220797-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923220797-thumb.jpg"
extracted_at: "2026-04-11T16:00:50.728Z"
---

# Authkit — Style Reference

> Midnight Command Center. Imagine a high-tech dashboard glowing softly in a dark room, with frosted glass elements reflecting subtle light.

**Theme:** dark

**Industry:** devtools

AuthKit's design evokes an 'internal dashboard' feel — polished and functional without being sterile. Dark, translucent surfaces glow with subtle inner shadows and a restrained use of soft, muted blues. The sharp contrast between the deep `Midnight Abyss` background and crisp white text, paired with a limited palette of nearly achromatic blues, creates a sense of digital precision. The deliberate mix of round (`Pill`) and subtly rounded (`Subtle`) corners on different elements adds a tactile quality to the otherwise sleek, high-tech aesthetic, hinting at user-friendliness within a complex system.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Abyss | #05060f | `--color-midnight-abyss` | Page backgrounds, elevated card backgrounds, deep shadows. |
| Ghost White | #ffffff | `--color-ghost-white` | Primary text for headings and high-contrast elements, icon fills. |
| Storm Gray | #2f343 | `--color-storm-gray` | Subtle shadows, secondary background for interactive states. |
| Comet | #d8ecf8 | `--color-comet` | Primary body text, prominent links, and headings; provides high readability against dark backgrounds. |
| Arctic Mist | #d1e4fa | `--color-arctic-mist` | Secondary body text, icon outlines, button text; a cool, muted off-white for softer emphasis. |
| Celestial Light | #b6d9fc | `--color-celestial-light` | Focus states for interactive elements, subtle highlights. |
| Azure Glow | #c7d3ea | `--color-azure-glow` | Less prominent body text, disabled states, and subtle borders; a desaturated blue-gray that recedes gracefully. |
| Slate Dew | #3f4959 | `--color-slate-dew` | Outline for informational badges and subtle accents. |
| Whisper Blue | #9da7ba | `--color-whisper-blue` | Placeholder text in inputs, less important body text. |
| Neon Violet | #663af3 | `--color-neon-violet` | Action buttons and primary interactive elements; a vibrant, focused color against the dark backdrop. |
| Interstellar Gray | #81899b | `--color-interstellar-gray` | Faint text color for small captions or secondary labels. |
| Twilight Gradient Overlay | #d8ecf8 | `--color-twilight-gradient-overlay` | Subtle background element for atmospheric effect, indicating light source. |
| System Highlight Border | #bacff7 | `--color-system-highlight-border` | Interactive element borders and inner glows, creating a subtle sci-fi effect. |

## Tokens — Typography

### Untitled Sans

- **Token:** `--font-untitled-sans`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 18px, 24px
- **Line heights:** 1.17, 1.20, 1.33, 1.43, 1.50, 2.29, 2.57
- **Letter spacing:** -0.01
- **Role:** Used for all general body text, form elements, button labels, and secondary information. The slight negative letter spacing creates a compact, refined feel.

### aeonikPro

- **Token:** `--font-aeonikpro`
- **Substitute:** Space Grotesk
- **Weights:** 400, 500
- **Sizes:** 28px, 44px, 48px
- **Line heights:** 1.14, 1.16, 1.17, 1.20
- **Letter spacing:** 0
- **Role:** Exclusively for prominent headings and display text. Its distinct, clean geometry defines the primary content hierarchy and brand voice, appearing slightly wider than Untitled Sans for visual contrast.

### dotDigital

- **Token:** `--font-dotdigital`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 15px
- **Line heights:** 1.20
- **Letter spacing:** 0.1
- **OpenType features:** "tnum"
- **Role:** Used for specific, small informational text. The `tnum` font feature setting ensures consistent monospaced numbers, ideal for technical details or data display.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | -0.01px | `--text-caption` |
| body | 14px | 1.5 | -0.01px | `--text-body` |
| body-lg | 16px | 1.5 | -0.01px | `--text-body-lg` |
| subheading | 18px | 1.43 | -0.01px | `--text-subheading` |
| heading | 24px | 1.33 | -0.01px | `--text-heading` |
| heading-lg | 28px | 1.2 | 0px | `--text-heading-lg` |
| display | 44px | 1.16 | 0px | `--text-display` |
| display-xl | 48px | 1.14 | 0px | `--text-display-xl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-86 | 86px | `--spacing-86` |
| spacing-98 | 98px | `--spacing-98` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-182 | 182px | `--spacing-182` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-207 | 207px | `--spacing-207` |
| spacing-234 | 234px | `--spacing-234` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 999px |
| cards | 12-16px |
| badges | 6px |
| inputs | 2-4px |
| buttons | 999px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(186, 207, 247, 0.32) 0px 0px 6px 0px | `--shadow-xl` |
| xl-2 | rgba(238, 186, 247, 0.24) 0px 0px 12px 0px | `--shadow-xl-2` |
| xl-3 | rgba(186, 215, 247, 0.12) 0px 0px 0px 1px inset | `--shadow-xl-3` |
| xl-4 | rgba(199, 211, 234, 0.12) -0.5px 0.5px 1px 0px inset, rgba(186, 215, 247, 0.08) 0px 0px 96px 0px inset | `--shadow-xl-4` |
| xl-5 | rgba(186, 214, 247, 0.06) 0px 0px 0px 1px inset | `--shadow-xl-5` |
| xl-6 | rgba(199, 211, 234, 0.12) 0px 1px 1px 0px inset, rgba(199, 211, 234, 0.05) 0px 24px 48px 0px inset, rgba(6, 6, 14, 0.7) 0px 24px 32px 0px | `--shadow-xl-6` |
| xl-7 | rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset | `--shadow-xl-7` |
| xl-8 | rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset, rgba(0, 0, 0, 0.3) 0px 16px 32px 0px | `--shadow-xl-8` |
| xl-9 | rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset | `--shadow-xl-9` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Login Form Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Dark/Light Mode Toggle + Feature Badges

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Section Heading + Glassy Feature Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Pill Button

**Role:** Action

Ghost White text on a translucent background (rgba(186, 214, 247, 0.06)) with a subtle Ghost White border. Radius is `Pill` (999px) for a soft, approachable action element. Padding: 0px vertical, 16px horizontal. Background rgba(186, 214, 247, 0.06), text #ffffff, border color #ffffff.

### Secondary Outline Button

**Role:** Secondary action

Arctic Mist text on a transparent background with a subtle border (rgba(186, 215, 247, 0.12)). Radius is `Pill` (999px). Padding: 0px vertical, 16px horizontal. Text #d1e4fa, border color rgba(186, 215, 247, 0.12).

### Solid Primary Button

**Role:** Call to Action

White text on `Neon Violet` background (#663af3) with 0px padding and 6px border radius. Used for critical actions like 'Continue'.

### Glassy Feature Card

**Role:** Information Display

Transparent background (rgba(186, 214, 247, 0.03)) with `Subtle` (12px) border radius. Features a complex inner shadow: `rgba(199, 211, 234, 0.12) 0px 1px 1px 0px inset, rgba(199, 211, 234, 0.05) 0px 24px 48px 0px inset, rgba(6, 6, 14, 0.7) 0px 24px 32px 0px` to create a deep, frosted glass effect.

### Login Form Card

**Role:** Data Input Container

Near-black background (rgba(5, 6, 15, 0.97)) and `Subtle` (16px) border radius. Distinct inner shadows: `rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset, rgba(0, 0, 0, 0.3) 0px 16px 32px 0px` to suggest depth and a light source from above.

### Minimal Input Field

**Role:** Text Input

White text and Ghost White border on translucent background (rgba(199, 211, 234, 0.06)). Border radius varies from 2px to 4px. Padding: 0px vertical, 10px horizontal. Placeholder text uses `Whisper Blue` (#9da7ba).

### Status Badge

**Role:** Metatag / Categorization

Arctic Mist text on `Midnight Abyss` background, with `Subtle` (6px) border radius. Padding: 4px vertical, 8px horizontal. Text #d1e4fa, background #05060f.

### Icon Button

**Role:** Small interactive element

Transparent background with a subtle border matching `Secondary Outline Button` (rgba(186, 215, 247, 0.12)) and `Pill` (999px) border radius. Contains icons which are typically `Ghost White`.

## Do's and Don'ts

### Do

- Prioritize `Midnight Abyss` (#05060f) as the primary background color for all main page sections and large surface areas.
- Use `aeonikPro` (sub. Space Grotesk) for all marketing headlines (28-48px) and `Untitled Sans` (sub. Inter) for all body copy and UI elements (12-24px).
- Apply `Pill` (999px) radius to all primary and secondary action buttons, and `Subtle` (12-16px) radius to cards and containers.
- Employ the complex inner shadow `rgba(199, 211, 234, 0.12) 0px 1px 1px 0px inset, rgba(199, 211, 234, 0.05) 0px 24px 48px 0px inset, rgba(6, 6, 14, 0.7) 0px 24px 32px 0px` on elevated cards to create visual depth.
- Reserve `Neon Violet` (#663af3) exclusively for critical call-to-action buttons, maintaining its impact.
- Use subtle linear gradients for decorative elements, such as `linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(186, 215, 247, 0.12), rgba(0, 0, 0, 0))` for dividers or highlights.

### Don't

- Avoid using highly saturated, non-brand colors outside of the designated `Neon Violet` accent.
- Do not use generic drop shadows; instead, utilize the specified `inset` shadows and soft outer glows to achieve depth.
- Do not deviate from the specified font families; their visual distinction is core to the brand identity.
- Do not apply standard rectangular shapes to buttons; all interactive buttons should use `Pill` (999px) radius.
- Avoid using flat, opaque background colors for cards; instead, use translucent backgrounds with subtle inner shadows to maintain the 'frosted glass' effect.
- Do not use letter-spacing on display headings; `aeonikPro` should maintain `normal` letter spacing at larger sizes, while `Untitled Sans` uses a subtle negative spacing.

## Elevation

- **Glassy Feature Card:** `inset rgba(199, 211, 234, 0.12) 0px 1px 1px 0px, inset rgba(199, 211, 234, 0.05) 0px 24px 48px 0px, rgba(6, 6, 14, 0.7) 0px 24px 32px 0px`
- **Login Form Card:** `inset rgba(216, 236, 248, 0.2) 0px 1px 1px 0px, inset rgba(168, 216, 245, 0.06) 0px 24px 48px 0px, rgba(0, 0, 0, 0.3) 0px 16px 32px 0px`
- **Outline Button / Focus State:** `inset rgba(186, 215, 247, 0.12) 0px 0px 0px 1px`
- **Pill Button:** `inset rgba(186, 214, 247, 0.06) 0px 0px 0px 1px`
- **Icon Button Glow:** `rgba(186, 207, 247, 0.32) 0px 0px 6px 0px`
- **Accent Element Glow:** `rgba(238, 186, 247, 0.24) 0px 0px 12px 0px`

## Imagery

Minimalist and highly stylized. Photography is absent. Illustrations are abstract, geometric forms with subtle glows and transparent layers, often depicting UI components or data structures in a 'blueprint' or 'schematic' style against the dark background. Icons are simple, filled or outlined glyphs with high contrast, often set within softly rounded or pill-shaped containers. The imagery's role is primarily decorative atmosphere and conceptual explanation rather than literal depiction, with images sparsely used and serving as visual anchors in content sections. Overall density is text-dominant, allowing UI elements and graphics to 'breathe' in the dark space.

## Layout

The page uses a full-bleed dark background (`Midnight Abyss`) with content contained to a logical max-width. The hero section features a prominent, centered headline over a subtle background gradient and atmospheric glow. Sections follow a consistent top-to-bottom flow, with `sectionGap` providing generous vertical rhythm. Content often appears as centered stacks, sometimes with embedded UI components (like the login form) serving as visual focal points. Navigation is a simple, sticky top bar.

## Similar Brands

- **Vercel** — Dark-mode UI, subtle translucent elements, high-contrast typography, and a focus on developer tools and abstract visuals.
- **Linear** — Elegant dark theme, sharp typefaces for headings, subtle use of blue accents, and precise UI components with restrained shadows.
- **Radix UI** — Focus on highly polished, systematic UI components, often presented in dark themes with careful attention to lighting and translucency.
- **Stripe (Dashboard)** — Dark-themed interfaces for complex tools, subtle shadows creating depth, and a limited accent color palette for core actions.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-abyss: #05060f;
  --color-ghost-white: #ffffff;
  --color-storm-gray: #2f343;
  --color-comet: #d8ecf8;
  --color-arctic-mist: #d1e4fa;
  --color-celestial-light: #b6d9fc;
  --color-azure-glow: #c7d3ea;
  --color-slate-dew: #3f4959;
  --color-whisper-blue: #9da7ba;
  --color-neon-violet: #663af3;
  --color-interstellar-gray: #81899b;
  --color-twilight-gradient-overlay: #d8ecf8;
  --color-system-highlight-border: #bacff7;
  --font-untitled-sans: 'Untitled Sans', Inter;
  --font-aeonikpro: 'aeonikPro', Space Grotesk;
  --font-dotdigital: 'dotDigital', IBM Plex Mono;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.01px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: -0.01px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: -0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --tracking-subheading: -0.01px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.01px;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: 0px;
  --text-display: 44px;
  --leading-display: 1.16;
  --tracking-display: 0px;
  --text-display-xl: 48px;
  --leading-display-xl: 1.14;
  --tracking-display-xl: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-86: 86px;
  --spacing-98: 98px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-182: 182px;
  --spacing-200: 200px;
  --spacing-207: 207px;
  --spacing-234: 234px;
  --radius-pill: 999px;
  --radius-cards: 12-16px;
  --radius-badges: 6px;
  --radius-inputs: 2-4px;
  --radius-buttons: 999px;
  --shadow-xl: rgba(186, 207, 247, 0.32) 0px 0px 6px 0px;
  --shadow-xl-2: rgba(238, 186, 247, 0.24) 0px 0px 12px 0px;
  --shadow-xl-3: rgba(186, 215, 247, 0.12) 0px 0px 0px 1px inset;
  --shadow-xl-4: rgba(199, 211, 234, 0.12) -0.5px 0.5px 1px 0px inset, rgba(186, 215, 247, 0.08) 0px 0px 96px 0px inset;
  --shadow-xl-5: rgba(186, 214, 247, 0.06) 0px 0px 0px 1px inset;
  --shadow-xl-6: rgba(199, 211, 234, 0.12) 0px 1px 1px 0px inset, rgba(199, 211, 234, 0.05) 0px 24px 48px 0px inset, rgba(6, 6, 14, 0.7) 0px 24px 32px 0px;
  --shadow-xl-7: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  --shadow-xl-8: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset, rgba(0, 0, 0, 0.3) 0px 16px 32px 0px;
  --shadow-xl-9: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-abyss: #05060f;
  --color-ghost-white: #ffffff;
  --color-storm-gray: #2f343;
  --color-comet: #d8ecf8;
  --color-arctic-mist: #d1e4fa;
  --color-celestial-light: #b6d9fc;
  --color-azure-glow: #c7d3ea;
  --color-slate-dew: #3f4959;
  --color-whisper-blue: #9da7ba;
  --color-neon-violet: #663af3;
  --color-interstellar-gray: #81899b;
  --color-twilight-gradient-overlay: #d8ecf8;
  --color-system-highlight-border: #bacff7;
  --font-untitled-sans: 'Untitled Sans', Inter;
  --font-aeonikpro: 'aeonikPro', Space Grotesk;
  --font-dotdigital: 'dotDigital', IBM Plex Mono;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.01px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: -0.01px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: -0.01px;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --tracking-subheading: -0.01px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.01px;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: 0px;
  --text-display: 44px;
  --leading-display: 1.16;
  --tracking-display: 0px;
  --text-display-xl: 48px;
  --leading-display-xl: 1.14;
  --tracking-display-xl: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-86: 86px;
  --spacing-98: 98px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-182: 182px;
  --spacing-200: 200px;
  --spacing-207: 207px;
  --spacing-234: 234px;
  --radius-pill: 999px;
  --radius-cards: 12-16px;
  --radius-badges: 6px;
  --radius-inputs: 2-4px;
  --radius-buttons: 999px;
  --shadow-xl: rgba(186, 207, 247, 0.32) 0px 0px 6px 0px;
  --shadow-xl-2: rgba(238, 186, 247, 0.24) 0px 0px 12px 0px;
  --shadow-xl-3: rgba(186, 215, 247, 0.12) 0px 0px 0px 1px inset;
  --shadow-xl-4: rgba(199, 211, 234, 0.12) -0.5px 0.5px 1px 0px inset, rgba(186, 215, 247, 0.08) 0px 0px 96px 0px inset;
  --shadow-xl-5: rgba(186, 214, 247, 0.06) 0px 0px 0px 1px inset;
  --shadow-xl-6: rgba(199, 211, 234, 0.12) 0px 1px 1px 0px inset, rgba(199, 211, 234, 0.05) 0px 24px 48px 0px inset, rgba(6, 6, 14, 0.7) 0px 24px 32px 0px;
  --shadow-xl-7: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  --shadow-xl-8: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset, rgba(0, 0, 0, 0.3) 0px 16px 32px 0px;
  --shadow-xl-9: rgba(216, 236, 248, 0.2) 0px 1px 1px 0px inset, rgba(168, 216, 245, 0.06) 0px 24px 48px 0px inset;
}
```
