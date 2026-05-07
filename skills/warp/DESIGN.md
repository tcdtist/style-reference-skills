---
version: alpha
name: "Warp"
description: "This design system conjures a high-tech command center feel, where dark surfaces meet crisp, focused information. The primary visual choice is the deeply desaturated dark background (#121212) contrasted with luminous white text (#FAFAFA), creating a sense of precision and low-light operations. Subtle uses of a muted violet (#CBB0F7) and an infrequent vivid green (#2ECC71) serve as functional indicators, akin to status lights on a console, reinforcing the industrial yet refined atmosphere. The almost exclusive use of the Matter font family, with its defined structure and variable weights, maintains a consistent technical aesthetic."
theme: "dark"
industry: "devtools"
source_url: "https://warp.dev"
refero_style_id: "d4c51049-58eb-404a-9fcb-f195928b1c99"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923168907-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923168907-thumb.jpg"
extracted_at: "2026-04-11T15:59:56.192Z"
---

# Warp — Style Reference

> Midnight Command Center. Deeply desaturated dark surfaces provide a stage for precise, luminous information, like a control panel in low light.

**Theme:** dark

**Industry:** devtools

This design system conjures a high-tech command center feel, where dark surfaces meet crisp, focused information. The primary visual choice is the deeply desaturated dark background (#121212) contrasted with luminous white text (#FAFAFA), creating a sense of precision and low-light operations. Subtle uses of a muted violet (#CBB0F7) and an infrequent vivid green (#2ECC71) serve as functional indicators, akin to status lights on a console, reinforcing the industrial yet refined atmosphere. The almost exclusive use of the Matter font family, with its defined structure and variable weights, maintains a consistent technical aesthetic.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Space | #000000 | `--color-deep-space` | Illustrations, icon fills, occasional text like legal disclaimers. Its absolute nature anchors contrasting elements. |
| Console Dark | #121212 | `--color-console-dark` | Primary page background, card surfaces, footer background — forms the foundational dark canvas. |
| Surface Dark | #1E1E1D | `--color-surface-dark` | Secondary background color for sections, providing a subtle differentiation from the main Console Dark without adding visual noise. |
| Ghost Gray | #868684 | `--color-ghost-gray` | Secondary body text, subtle labels, placeholder text. Quietly present without demanding attention. |
| Luminous White | #FAF9F6 | `--color-luminous-white` | Primary text color for headings and body content, providing maximum legibility against dark backgrounds. Also used for navigation items and prominent links. |
| Polar White | #FFFFFF | `--color-polar-white` | Text on interactive elements, highlighted text. Used sparingly to denote a higher level of importance or activeness. |
| Deep Gray | #333333 | `--color-deep-gray` | Text in darker contexts, specific button backgrounds, subtle borders. A robust dark grey for structural elements. |
| Storm Gray | #B4B4B2 | `--color-storm-gray` | Tertiary text, less prominent headlines, button borders. Lighter than Ghost Gray for slightly more emphasis. |
| Ash Gray | #A0A0A0 | `--color-ash-gray` | Similar to Storm Gray, used for less prominent headings and textual elements, contributing to the overall desaturated aesthetic. |
| Light Driftwood | #E3E2E0 | `--color-light-driftwood` | Used for very light text elements on darker backgrounds; offers a softer contrast than Luminous White or Polar White. |
| Twilight Gray | #40403F | `--color-twilight-gray` | Specific navigation and section backgrounds, providing a slightly warmer dark tone. |
| Eclipse Black | #080808 | `--color-eclipse-black` | Text on very light backgrounds, subtle shadows, reinforces the deep dark theme. |
| Crystal Silver | #EBEBEB | `--color-crystal-silver` | Occasional background element, notably in what appears to be a brand logo area, offering a stark light contrast. |
| Battleship Gray | #666469 | `--color-battleship-gray` | Minor text elements, specifically within navigation, for very low prominence. Its slight blue undertone is barely perceptible. |
| Agent Violet | #CBB0F7 | `--color-agent-violet` | Accent color for interactive elements like links, highlights, and status indicators. Its moderate saturation provides a subtle yet distinct point of visual interest against the dark neutrals. |
| Success Green | #2ECC71 | `--color-success-green` | Feedback or status indicators; its vivid hue ensures immediate recognition for positive states on dark backgrounds. |

## Tokens — Typography

### Matter

- **Token:** `--font-matter`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00, 1.20
- **Letter spacing:** -0.48, -0.32, -0.24, -0.14, -0.13, -0.12, 0.12, 0.24, 1.2, 2.4
- **Role:** Primary typeface for all headings and most body text. The tight line heights and varying letter spacing, especially negative values at larger sizes, create a dense, technical feel appropriate for a dev tool. The range of weights provides a strong hierarchy without introducing additional families.

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui
- **Weights:** 400, 500
- **Sizes:** 14px, 16px
- **Line heights:** 1.00, 1.20, 1.30, 1.38
- **Letter spacing:** -0.17, -0.14
- **Role:** Secondary sans-serif for supplemental information, fine print, and some body text where a slightly more open feel is desired compared to Matter.

### Geist Mono

- **Token:** `--font-geist-mono`
- **Substitute:** SF Mono, Fira Code
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00
- **Role:** Monospaced font used for code snippets, technical commands, and precise data representation, reinforcing the developer tool identity.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.4 | 0.12px | `--text-caption` |
| body | 14px | 1.38 | -0.17px | `--text-body` |
| heading-sm | 24px | 1.25 | -0.24px | `--text-heading-sm` |
| heading | 32px | 1.2 | -0.32px | `--text-heading` |
| heading-lg | 42px | 1.15 | -0.42px | `--text-heading-lg` |
| display | 56px | 1 | -0.48px | `--text-display` |

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
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 4px, 33.17px, 50px |
| default | 4px |
| components | 7px, 20px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 60px |
| elementGap | 8px |

## Components

### Product Cards — Warp Terminal & Oz

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Testimonial Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Announcement Banner + Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button

**Role:** Call to action for downloads or critical next steps.

Background: rgba(255, 255, 255, 0.1) (10% white overlay for subtle lift). Text: Agent Violet (#CBB0F7). Border: None. Border Radius: 33.17px (pill shape). Padding: 5px vertical, 10px horizontal. Employs a ghosted, almost ethereal look despite being a CTA, leveraging the brand accent.

### Secondary Ghost Button

**Role:** Less prominent interactive actions.

Background: rgba(255, 255, 255, 0.04) (4% white overlay). Text: Agent Violet (#CBB0F7). Border: None. Border Radius: 4px. Padding: 8px vertical, 12px horizontal. A more subdued version of the primary, hinting at interactiveness without strong visual dominance.

### Tertiary Dark Button

**Role:** Navigation items or filter buttons.

Background: #353534 (Deep Gray). Text: Storm Gray (#B4B4B2) or Polar White (#FFFFFF). Border: None. Border Radius: 4px. Padding: 8px vertical, 12px horizontal. A solid, functional button for less critical interactions, blending into the dark theme.

### Pill Status Button

**Role:** Informational tags or minor selections.

Background: #353534 (Deep Gray). Text: Ghost Gray (#AFACAC or #AFB0AC). Border: None. Border Radius: 50px (full pill). Padding: 10px all around. A highly rounded element for subtle visual cues or category selection, using a desaturated palette.

### Image Card Wrapper

**Role:** Containers for product screenshots or visual content.

Background: Console Dark (#121212) or Surface Dark (#1E1E1D). Border: None. Border Radius: 7px (softly rounded). Padding: Not explicitly defined, but visuals suggest moderate internal spacing. Contains the visual elements within the dark theme.

## Do's and Don'ts

### Do

- Use Console Dark (#121212) for primary backgrounds and Surface Dark (#1E1E1D) for secondary sections to create a sense of layered depth.
- Employ Luminous White (#FAF9F6) and Polar White (#FFFFFF) as primary text colors on all dark backgrounds for maximum readability.
- Apply Matter font with negative letter spacing for display headlines (e.g., Matter 56px with -0.04em, -0.48px) to achieve a precise, high-tech aesthetic.
- Utilize Agent Violet (#CBB0F7) exclusively for interactive elements and brand accents like links and primary buttons.
- Ensure buttons maintain varying radius profiles: 33.17px for primary actions, 4px for secondary, and 50px for pill-shaped status elements.
- Maintain a compact spacing density, utilizing 8px for element gaps and multiples of 5-14px for internal padding within components.

### Don't

- Avoid introducing additional saturated colors beyond Agent Violet (#CBB0F7) and Success Green (#2ECC71) to preserve the desaturated, focused environment.
- Do not use generic system fonts for prominent text; always prioritize Matter and Geist Mono for brand consistency.
- Resist using hard-edged rectangles for cards or buttons where a subtle radius (4px, 7px, or 33.17px) is intended, as it softens the technical aesthetic appropriately.
- Do not deviate from the tight line heights and letter spacing defined in the Matter font profiles; they are critical for the system's precise feel.
- Avoid large, open white spaces; the design emphasizes compact information blocks within dark, structured sections.
- Do not use box-shadows or significant elevation; depth is created through subtle background shifts rather than visual lifts.

## Similar Brands

- **GitHub** — Dark-themed UI with clean typography and a focus on code-related content, often using ghost buttons and subtle accents.
- **Linear** — Emphasis on precision and efficiency through a minimalist UI, tight typography, and sophisticated use of dark neutrals as primary surfaces.
- **Vercel** — Modern dark mode, high-contrast text, structured layouts and a restrained use of brand colors to highlight interactive elements, very common in developer tools interfaces.
- **Figma** — Clean, functional typography, dark-themed interface, and a direct approach to presenting complex UI elements within a developer-centric product.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-space: #000000;
  --color-console-dark: #121212;
  --color-surface-dark: #1E1E1D;
  --color-ghost-gray: #868684;
  --color-luminous-white: #FAF9F6;
  --color-polar-white: #FFFFFF;
  --color-deep-gray: #333333;
  --color-storm-gray: #B4B4B2;
  --color-ash-gray: #A0A0A0;
  --color-light-driftwood: #E3E2E0;
  --color-twilight-gray: #40403F;
  --color-eclipse-black: #080808;
  --color-crystal-silver: #EBEBEB;
  --color-battleship-gray: #666469;
  --color-agent-violet: #CBB0F7;
  --color-success-green: #2ECC71;
  --font-matter: 'Matter', Inter;
  --font-inter: 'Inter', system-ui;
  --font-geist-mono: 'Geist Mono', SF Mono, Fira Code;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: 0.12px;
  --text-body: 14px;
  --leading-body: 1.38;
  --tracking-body: -0.17px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.32px;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.15;
  --tracking-heading-lg: -0.42px;
  --text-display: 56px;
  --leading-display: 1;
  --tracking-display: -0.48px;
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
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-52: 52px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-120: 120px;
  --spacing-128: 128px;
  --radius-buttons: 4px, 33.17px, 50px;
  --radius-default: 4px;
  --radius-components: 7px, 20px;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-space: #000000;
  --color-console-dark: #121212;
  --color-surface-dark: #1E1E1D;
  --color-ghost-gray: #868684;
  --color-luminous-white: #FAF9F6;
  --color-polar-white: #FFFFFF;
  --color-deep-gray: #333333;
  --color-storm-gray: #B4B4B2;
  --color-ash-gray: #A0A0A0;
  --color-light-driftwood: #E3E2E0;
  --color-twilight-gray: #40403F;
  --color-eclipse-black: #080808;
  --color-crystal-silver: #EBEBEB;
  --color-battleship-gray: #666469;
  --color-agent-violet: #CBB0F7;
  --color-success-green: #2ECC71;
  --font-matter: 'Matter', Inter;
  --font-inter: 'Inter', system-ui;
  --font-geist-mono: 'Geist Mono', SF Mono, Fira Code;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: 0.12px;
  --text-body: 14px;
  --leading-body: 1.38;
  --tracking-body: -0.17px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.32px;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.15;
  --tracking-heading-lg: -0.42px;
  --text-display: 56px;
  --leading-display: 1;
  --tracking-display: -0.48px;
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
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-52: 52px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-120: 120px;
  --spacing-128: 128px;
  --radius-buttons: 4px, 33.17px, 50px;
  --radius-default: 4px;
  --radius-components: 7px, 20px;
}
```
