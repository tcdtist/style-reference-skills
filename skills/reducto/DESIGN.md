---
version: alpha
name: "Reducto"
description: "Reducto embraces a clean, purposeful aesthetic, pairing high-contrast typography with a striking purple accent. The visual system features sharp edges and minimal elevation, emphasizing data clarity and directness. Monochrome interfaces are punctuated by a single vibrant brand color, creating focal points and guiding user interaction. Strong borders and subtle textural backgrounds provide structure without adding visual weight."
theme: "light"
industry: "ai"
source_url: "https://reducto.ai"
refero_style_id: "af55f85e-1c82-44c1-a8d0-32634bfa6296"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508693388-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508693388-thumb.jpg"
extracted_at: "2026-04-30T00:25:21.821Z"
---

# Reducto — Style Reference

> Crisp Data Canvas

**Theme:** light

**Industry:** ai

Reducto embraces a clean, purposeful aesthetic, pairing high-contrast typography with a striking purple accent. The visual system features sharp edges and minimal elevation, emphasizing data clarity and directness. Monochrome interfaces are punctuated by a single vibrant brand color, creating focal points and guiding user interaction. Strong borders and subtle textural backgrounds provide structure without adding visual weight.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ghostly Gray | #fafaf9 | `--color-ghostly-gray` | Page background, light surfaces, header background |
| Reducto Black | #292524 | `--color-reducto-black` | Strongest body text, primary headings, navigation links |
| Subtle Ash | #79716b | `--color-subtle-ash` | Muted body text, secondary navigation, icon strokes |
| Medium Gray | #57534d | `--color-medium-gray` | Body text in darker areas, bolder icon fills |
| Canvas White | #ffffff | `--color-canvas-white` | Interactive elements, content card backgrounds, selected text |
| Reducto Purple Dark | #310632 | `--color-reducto-purple-dark` | Deepest purple for key informational text, emphasized content |
| Reducto Purple Accent | #9d17a0 | `--color-reducto-purple-accent` | Primary action backgrounds, critical headings, active navigation elements. This is the brand's primary interactive color |
| Reducto Purple Border | #690f6b | `--color-reducto-purple-border` | Borders for primary action buttons, highlighting interactive elements |
| Whisper Lilac | #dcbffb | `--color-whisper-lilac` | Link color, hover states for text links, subtle accents |
| Sage Green | #718613 | `--color-sage-green` | Green text accent for links, tags, and emphasized short phrases |
| Sunburst Orange | #a2541b | `--color-sunburst-orange` | Orange text accent for links, tags, and emphasized short phrases |
| Ocean Blue | #2482db | `--color-ocean-blue` | Blue text accent for links, tags, and emphasized short phrases |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500
- **Sizes:** 14px, 15px, 16px, 17px, 18px, 20px, 24px
- **Line heights:** 1.33, 1.43, 1.50, 1.56, 1.60
- **Letter spacing:** normal
- **OpenType features:** "salt" on, "ss02" on
- **Role:** Primary UI font for body text, navigation, and button labels. Optimized for clarity and consistency across digital interfaces.

### reductoSerif

- **Token:** `--font-reductoserif`
- **Substitute:** serif
- **Weights:** 400, 470, 650
- **Sizes:** 16px, 24px, 32px, 64px, 80px, 136px
- **Line heights:** 0.74, 1.13, 1.25, 1.33, 1.50
- **Letter spacing:** -0.01em
- **Role:** Display font for 'hero' sections and impactful headlines. Its slight letter-spacing reduction gives it a more refined, precise appearance at large sizes.

### reductosans

- **Token:** `--font-reductosans`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500
- **Sizes:** 14px, 15px, 16px
- **Line heights:** 1.43, 1.50, 1.60
- **Letter spacing:** normal
- **Role:** Secondary sans-serif for annotations, small utility text, and supporting information. It complements Inter by providing a slightly different texture at smaller scales.

### Reddit Mono

- **Token:** `--font-reddit-mono`
- **Substitute:** monospace
- **Weights:** 400
- **Sizes:** 80px
- **Line heights:** 1.13
- **Letter spacing:** -0.03em
- **Role:** Distinct monospace font used for numerical display, particularly large statistics or code-like elements where horizontal alignment is key. The tight letter-spacing emphasizes its structured nature.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.5 | 0px | `--text-caption` |
| body | 16px | 1.5 | 0px | `--text-body` |
| subheading | 24px | 1.33 | -0.24px | `--text-subheading` |
| heading | 32px | 1.25 | -0.32px | `--text-heading` |
| heading-lg | 64px | 1.13 | -0.64px | `--text-heading-lg` |
| display | 136px | 0.74 | -1.36px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-117 | 117px | `--spacing-117` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-173 | 173px | `--spacing-173` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(255, 255, 255, 0.25) 0px -2px 0px 0px inset, rgba(255, 255, 255, 0.25) 0px 2px 0px 0px inset | `--shadow-xl` |
| xl-2 | rgba(255, 255, 255, 0.3) 0px -2px 0px 0px inset, rgba(255, 255, 255, 0.3) 0px 2px 0px 0px inset | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.05) 0px 1px 2px 0px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 24px |
| elementGap | 24px |

## Components

### Primary Action Button

**Role:** Filled button for primary calls to action.

Background: #9d17a0. Text: #ffffff. Border: #690f6b (subtle darker shade of purple). Padding: 12px vertical, 16px horizontal. Corners: 0px (sharp).

### Ghost Action Button

**Role:** Outlined button for secondary or tertiary actions.

Background: transparent. Text: #310632. Padding: 5px vertical, 0px horizontal. Corners: 0px (sharp).

### Navigation Link Button

**Role:** Small, ghost-like button for navigation items.

Background: #ffffff. Text: #292524. Border: None. Padding: 5px vertical, 0px horizontal. Corners: 0px (sharp).

### Outline Secondary Button

**Role:** Outlined button variant for less prominent actions, found in content areas.

Background: #ffffff. Text: #57534d. Border: 1px solid #d7ccc1. Padding: 12px vertical, 24px horizontal. Corners: 0px (sharp).

### Hero Headline

**Role:** Large, impactful display text for hero sections.

Font: reductoSerif, Weight: 400. Size: 136px (for largest). Letter-spacing: -0.01em. Color: #292524, with accent words in #310632. Line Height: 0.74.

### Feature Card

**Role:** Container for individual feature descriptions within a grid.

Background: #fafaf9. Border: 1px solid #e7e5e4. No visible standard padding, content likely uses element gaps. Corners: 0px (sharp).

### Brand Notification Bar

**Role:** Top-banner for important announcements.

Background: #9d17a0. Text: #dcbffb. Font: Inter, Weight: 400. Size: 14px. Padding: 4px vertical, 8px horizontal. Line Height: 1.5.

## Do's and Don'ts

### Do

- Use Reducto Purple Accent (#9d17a0) sparingly and intentionally for primary interactive elements, such as buttons and active states, to create clear focal points.
- Maintain strict square edges (0px border-radius) for all interactive components and foundational elements like cards, adhering to the crisp aesthetic.
- Prioritize ReductoSerif for large, impactful headlines, leveraging its reduced letter-spacing (-0.01em) to convey a sense of precision.
- Structure layouts using strong visual borders like 1px solid #d7ccc1 or #e7e5e4 to define sections and separate content rather than relying on heavy shadows or background colors.
- Apply Reducto Black (#292524) for primary content text and headings, ensuring high contrast against light backgrounds.
- Utilize Inter for all functional UI text, ensuring readability and consistency across smaller text elements.
- Ensure all buttons use sharp 0px corners, reinforcing the precise and direct brand identity.

### Don't

- Avoid using multiple chromatic colors in close proximity; maintain a largely monochrome palette punctuated by the Reducto Purple Accent.
- Do not introduce rounded corners on primary components like buttons, cards, or input fields, as this conflicts with the sharp aesthetic.
- Refrain from heavy drop shadows or diffused elevation; rely on subtle inset shadows for interactive states or thin borders for separation.
- Do not use generic sans-serif fonts for main display text; always use reductoSerif for a distinct brand voice in headlines.
- Avoid large areas of saturated color that are not Reducto Purple Accent; color should serve a functional or highlight purpose.
- Do not clutter layouts with excessive elements; maintain comfortable density with explicit spacing tokens like 24px element gaps and 64px section gaps.
- Avoid using light text on light backgrounds or dark text on dark backgrounds without ensuring sufficient contrast (minimum AAA).

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Canvas | #fafaf9 | Dominant background for the entire application, providing a clean, bright foundation. |
| 1 | Content Card | #ffffff | Background for elevated content sections, cards, and interactive elements. Also serves as the secondary background. |
| 2 | Subtle Pattern | #f5f5f4 | Used for textural background elements or subtle section distinctions, creating minor visual separation. |

## Elevation

- **Shadow 1:** `rgba(255, 255, 255, 0.25) 0px -2px 0px 0px inset, rgba(255, 255, 255, 0.25) 0px 2px 0px 0px inset`
- **Shadow 2:** `rgba(255, 255, 255, 0.3) 0px -2px 0px 0px inset, rgba(255, 255, 255, 0.3) 0px 2px 0px 0px inset`
- **Shadow 3:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`

## Imagery

The visual language for imagery is primarily functional and illustrative. It features abstract, sparse dot-grid patterns and wireframe-style product renders, suggesting data structures and digital processes. These illustrations use simple lines and occasional brand-colored accents, never photographic. Icons are minimal, featuring thin strokes or solid fills, often monochrome with occasional use of spot accent colors (Sage Green, Sunburst Orange, Ocean Blue). Imagery serves to explain abstract concepts or showcase product functionality in a clean, technical context, often contained within defined sections rather than full-bleed.

## Layout

The page adheres to a max-width, center-aligned containment model, with content breaking into a full-bleed purple announcement bar at the very top. The hero section features a centered headline over a light background, followed by sections that alternate between centered stacks of text and visual elements, and multi-column card grids. Vertical rhythm is maintained by consistent section gaps. Navigation is a persistent top bar with a distinct call-to-action button, while internal navigation within content blocks appears as simple text links. The overall density is comfortable, balancing whitespace with structured information blocks.

## Similar Brands

- **Linear** — Monochrome UI with a single vibrant accent color used for interactive elements.
- **Stripe** — High-contrast typography, minimalist UI, and structured content blocks on a light canvas.
- **Vercel** — Focus on precise typography, sharp edges, and a clean, technical aesthetic for sophisticated SaaS products.
- **Replit** — Developer-focused design with emphasis on clean code-like typography and crisp UI elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ghostly-gray: #fafaf9;
  --color-reducto-black: #292524;
  --color-subtle-ash: #79716b;
  --color-medium-gray: #57534d;
  --color-canvas-white: #ffffff;
  --color-reducto-purple-dark: #310632;
  --color-reducto-purple-accent: #9d17a0;
  --color-reducto-purple-border: #690f6b;
  --color-whisper-lilac: #dcbffb;
  --color-sage-green: #718613;
  --color-sunburst-orange: #a2541b;
  --color-ocean-blue: #2482db;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-reductoserif: 'reductoSerif', serif;
  --font-reductosans: 'reductosans', system-ui, sans-serif;
  --font-reddit-mono: 'Reddit Mono', monospace;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.32px;
  --text-heading-lg: 64px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -0.64px;
  --text-display: 136px;
  --leading-display: 0.74;
  --tracking-display: -1.36px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-117: 117px;
  --spacing-120: 120px;
  --spacing-160: 160px;
  --spacing-173: 173px;
  --radius-none: 0px;
  --shadow-xl: rgba(255, 255, 255, 0.25) 0px -2px 0px 0px inset, rgba(255, 255, 255, 0.25) 0px 2px 0px 0px inset;
  --shadow-xl-2: rgba(255, 255, 255, 0.3) 0px -2px 0px 0px inset, rgba(255, 255, 255, 0.3) 0px 2px 0px 0px inset;
  --shadow-xl-3: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --surface-page-canvas: #fafaf9;
  --surface-content-card: #ffffff;
  --surface-subtle-pattern: #f5f5f4;
}
```

### Tailwind v4

```css
@theme {
  --color-ghostly-gray: #fafaf9;
  --color-reducto-black: #292524;
  --color-subtle-ash: #79716b;
  --color-medium-gray: #57534d;
  --color-canvas-white: #ffffff;
  --color-reducto-purple-dark: #310632;
  --color-reducto-purple-accent: #9d17a0;
  --color-reducto-purple-border: #690f6b;
  --color-whisper-lilac: #dcbffb;
  --color-sage-green: #718613;
  --color-sunburst-orange: #a2541b;
  --color-ocean-blue: #2482db;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-reductoserif: 'reductoSerif', serif;
  --font-reductosans: 'reductosans', system-ui, sans-serif;
  --font-reddit-mono: 'Reddit Mono', monospace;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: -0.32px;
  --text-heading-lg: 64px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -0.64px;
  --text-display: 136px;
  --leading-display: 0.74;
  --tracking-display: -1.36px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-117: 117px;
  --spacing-120: 120px;
  --spacing-160: 160px;
  --spacing-173: 173px;
  --radius-none: 0px;
  --shadow-xl: rgba(255, 255, 255, 0.25) 0px -2px 0px 0px inset, rgba(255, 255, 255, 0.25) 0px 2px 0px 0px inset;
  --shadow-xl-2: rgba(255, 255, 255, 0.3) 0px -2px 0px 0px inset, rgba(255, 255, 255, 0.3) 0px 2px 0px 0px inset;
  --shadow-xl-3: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --surface-page-canvas: #fafaf9;
  --surface-content-card: #ffffff;
  --surface-subtle-pattern: #f5f5f4;
}
```
