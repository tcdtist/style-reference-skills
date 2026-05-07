---
version: alpha
name: "Rows"
description: "This system feels like a precise, functional workspace, prioritizing clarity and direct interaction. Nearly achromatic surfaces and text form a stark foundation, minimizing distraction and allowing content to take center stage. The single prominent use of a warm gradient accent, along with subtler pastel button backgrounds, injects a controlled energy, hinting at progress and reward against the otherwise restrained UI. Compact spacing, subtle rounded edges, and sharp typography contribute to an efficient and focused user experience."
theme: "light"
industry: "ai"
source_url: "https://rows.com"
refero_style_id: "8d4a4e15-31f1-4509-8d13-7746f85c20d7"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775922821195-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775922821195-thumb.jpg"
extracted_at: "2026-04-11T15:54:01.990Z"
---

# Rows — Style Reference

> Minimalist worksheet with warm accents

**Theme:** light

**Industry:** ai

This system feels like a precise, functional workspace, prioritizing clarity and direct interaction. Nearly achromatic surfaces and text form a stark foundation, minimizing distraction and allowing content to take center stage. The single prominent use of a warm gradient accent, along with subtler pastel button backgrounds, injects a controlled energy, hinting at progress and reward against the otherwise restrained UI. Compact spacing, subtle rounded edges, and sharp typography contribute to an efficient and focused user experience.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Carbon Black | #1a1a1a | `--color-carbon-black` | Primary text, headings, icons, borders, active element state outlines — provides strong contrast against white and light gray backgrounds, anchoring the visual hierarchy. |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, elevated surfaces — serves as the primary backdrop for all content. |
| Whisper Gray | #f7f7f7 | `--color-whisper-gray` | Subtle background for interactive elements and hover states — provides slight visual differentiation without introducing strong color. |
| Parchment Tan | #eaeaea | `--color-parchment-tan` | Background for inactive or secondary buttons, subtle borders — offers a soft, muted alternative to pure white. |
| Stone Gray | #e1e1e1 | `--color-stone-gray` | Default borders, dividers, subtle iconography — defines boundaries with a light, unintrusive touch. |
| Ash Gray | #989898 | `--color-ash-gray` | Placeholder text, secondary labels, inactive states — provides legibility without demanding attention. |
| Charcoal Gray | #6f6f6f | `--color-charcoal-gray` | Secondary text, disabled states, supporting body copy — offers a softer text color for less prominent information. |
| Zinc Gray | #c2c2c2 | `--color-zinc-gray` | Tertiary text, subtle hints — recedes into the background. |
| Muted Gold | #fff6d4 | `--color-muted-gold` | Background for suggestion tags/buttons — provides a very subtle, warm hint of interaction. |
| Sunset Gradient | #ffb84d | `--color-sunset-gradient` | Accented suggestion borders, visual indicator in an input field — draws attention with vivid warmth, signaling activity or key information. |

## Tokens — Typography

### Output Sans

- **Token:** `--font-output-sans`
- **Substitute:** Inter
- **Weights:** 400, 700
- **Sizes:** 10px, 14px, 18px, 24px
- **Line heights:** 1.00, 1.33, 1.43, 1.45
- **Letter spacing:** 0.008, 0.011, 0.014, 0.02, 0.021
- **Role:** The primary typeface for all text content, from captions to headings. Its clean, sans-serif lines at various weights ensure both readability and a modern, technical feel. A range of specified letter-spacing values fine-tunes visual density across different sizes.

### Output Sans

- **Token:** `--font-output-sans`
- **Substitute:** Inter
- **Weights:** 400, 700
- **Sizes:** 10px, 14px, 18px, 24px
- **Line heights:** 1.00, 1.33, 1.43, 1.45
- **Letter spacing:** -0.043
- **Role:** Used for prominent headings, such as 'Hi, what do you want to build?', this weight commands attention with its negative letter-spacing, giving it a tighter, more deliberate appearance, contrasting with the lighter text roles.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.43 | 0.021px | `--text-caption` |
| body | 14px | 1.43 | 0.011px | `--text-body` |
| subheading | 18px | 1.45 | 0.014px | `--text-subheading` |
| display | 24px | 1 | -0.043px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-52 | 52px | `--spacing-52` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 8px |
| default | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| elementGap | 4px |

## Components

### Search Input Field

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Quick Action Category Buttons

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Footer Link Bar with Start from Blank CTA

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Link

**Role:** Top right navigation items like 'Log in' and 'Free sign up'.

Text in Carbon Black (#1a1a1a), no background or border, `Output Sans` weight 400, size 14px, lineHeight 1.43, letterSpacing 0.011em.

### Primary Page Title

**Role:** Main heading that frames the interaction, e.g., 'Hi, what do you want to build?'.

Text in Carbon Black (#1a1a1a), `Output Sans` weight 700, size 24px, lineHeight 1.00, letterSpacing -0.043em.

### Search Input Field

**Role:** The primary interactive input area for user queries or commands.

Background is Canvas White (#ffffff), text is Carbon Black (#1a1a1a). Border is 1px solid Sunset Gradient on hover/focus. Placeholder text is Ash Gray (#989898). Padding is inferred 6px vertical and 8px horizontal, with a 4px radius.

### Default Action Button

**Role:** General interactive buttons for common actions.

Transparent background, Carbon Black (#1a1a1a) text, `Output Sans` weight 400, size 14px, lineHeight 1.43, letterSpacing 0.011em. No border and 0px padding is observed for these general context buttons.

### Category Button (Subtle)

**Role:** Buttons for filtering or categorizing content, often grouped.

Text is Carbon Black (#1a1a1a), transparent background. Border is 1px solid Parchment Tan (#eaeaea), radius 8px, padding 6px vertical, 8px horizontal. `Output Sans` weight 400, size 14px, lineHeight 1.43, letterSpacing 0.011em.

### Category Button (Filled)

**Role:** Highly prominent category or suggestion buttons.

Background is Whisper Gray (#f7f7f7), text is Carbon Black (#1a1a1a). Border is 1px solid Stone Gray (#e1e1e1), radius 0px, no padding. `Output Sans` weight 400, likely size 14px.

### Suggestion Tag

**Role:** Small, interactive tags suggesting popular or common items.

Background is Muted Gold (#fff6d4), text is Carbon Black (#1a1a1a) at 54% opacity. Radius 4px, no padding. `Output Sans` weight 400, size 14px, lineHeight 1.43, letterSpacing 0.011em. Border is a 1px solid Sunset Gradient.

### Footer Link

**Role:** Navigation links found in the footer, less prominent than primary navigation.

Text is Charcoal Gray (#6f6f6f), `Output Sans` weight 400, size 14px, lineHeight 1.43. No unique styling beyond color, suggesting a functional role.

## Do's and Don'ts

### Do

- Prioritize Canvas White (#ffffff) as the dominant background color for main content areas.
- Use Carbon Black (#1a1a1a) for all primary text, headings, and critical UI elements to ensure high contrast and readability.
- Apply `Output Sans` at weight 700 with letter-spacing -0.043em for all main headings (24px) to create a distinct, tight visual expression.
- Utilize a 8px border-radius for interactive buttons and key UI containers, and 4px for smaller interactive elements like tags.
- Employ the Sunset Gradient (linear-gradient(rgb(255, 84, 56) 0%, rgb(255, 199, 0) 100%)) sparingly for highlight borders on interactive elements, like the search input or suggestion tags.
- Maintain compact spacing, typically 4px for element gaps and 24px for section gaps, to foster an information-dense yet organized layout.
- Use Muted Gold (#fff6d4) for background fills of suggestions or tags to softly indicate potential actions without being overly assertive.

### Don't

- Avoid using highly saturated, non-semantic colors for anything other than specific accent highlights like the Sunset Gradient.
- Do not deviate from the `Output Sans` typeface for any UI text, as its consistent application defines the system's typographic identity.
- Refrain from using strong shadows or complex elevation; UI depth is primarily achieved through subtle background color changes (e.g., Whisper Gray #f7f7f7) and borders (e.g., Stone Gray #e1e1e1).
- Do not use dark backgrounds for main content areas; the system is built on a light theme with high contrast text.
- Avoid excessive line-heights or loose letter-spacing, particularly for headlines, to preserve the system's crisp and condensed feel.
- Do not use generic, unbranded icon sets; rely on the existing simple, mono-color icon style for consistency.

## Imagery

The visual language for imagery is primarily functional and iconography-based. Small, simple, mono-color icons, often in Carbon Black (#1a1a1a) or Ash Gray (#989898), are used to denote functionality (e.g., 'PDF & Image', 'CSV/XLSX') rather than decorative purposes. There's an absence of large-scale photography or complex illustrations, reinforcing the UI-dominant, tool-like nature of the design. The visual information is conveyed through direct UI elements rather than abstract or lifestyle visuals. Icons are outlined, conveying clarity without heavy fills.

## Layout

The page adheres to a centered, constrained layout with a suggested max-width hinted by element clusters around 320px, although the overall canvas is full-bleed. The hero section presents a centered headline over a white background, immediately drawing focus. Content is arranged in stacked blocks, with functional categories (Import, Marketing Dashboard) presented in a grid-like fashion with compact, aligned buttons. Section rhythm is consistent, separated by vertical spacing, not visual dividers. There are no alternating light/dark bands or complex content arrangements. Navigation is a simple top-right bar with minimal links. The layout emphasizes density and direct interaction, making content easily scannable and functional choices readily available.

## Similar Brands

- **Airtable** — Shares a clean, grid-based, functional UI with a focus on data and input rather than elaborate visuals. Strong typography and clear interactive elements.
- **Notion** — Employs a white canvas, high-contrast text, and a strong reliance on a single sans-serif typeface to create a productive, minimalist workspace. Subtle interactive element styling.
- **Linear** — Features a direct, unadorned UI with a largely achromatic palette, emphasizing content and speed. Interactive elements are clearly defined with subtle borders and fills.
- **Google Workspace (Docs/Sheets)** — Exhibits a similar 'worksheet' aesthetic with a dominant white background, clear typography, and minimalist UI components, prioritizing content creation and interaction.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-carbon-black: #1a1a1a;
  --color-canvas-white: #ffffff;
  --color-whisper-gray: #f7f7f7;
  --color-parchment-tan: #eaeaea;
  --color-stone-gray: #e1e1e1;
  --color-ash-gray: #989898;
  --color-charcoal-gray: #6f6f6f;
  --color-zinc-gray: #c2c2c2;
  --color-muted-gold: #fff6d4;
  --color-sunset-gradient: #ffb84d;
  --font-output-sans: 'Output Sans', Inter;
  --font-output-sans: 'Output Sans', Inter;
  --text-caption: 10px;
  --leading-caption: 1.43;
  --tracking-caption: 0.021px;
  --text-body: 14px;
  --leading-body: 1.43;
  --tracking-body: 0.011px;
  --text-subheading: 18px;
  --leading-subheading: 1.45;
  --tracking-subheading: 0.014px;
  --text-display: 24px;
  --leading-display: 1;
  --tracking-display: -0.043px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-44: 44px;
  --spacing-52: 52px;
  --radius-buttons: 8px;
  --radius-default: 4px;
}
```

### Tailwind v4

```css
@theme {
  --color-carbon-black: #1a1a1a;
  --color-canvas-white: #ffffff;
  --color-whisper-gray: #f7f7f7;
  --color-parchment-tan: #eaeaea;
  --color-stone-gray: #e1e1e1;
  --color-ash-gray: #989898;
  --color-charcoal-gray: #6f6f6f;
  --color-zinc-gray: #c2c2c2;
  --color-muted-gold: #fff6d4;
  --color-sunset-gradient: #ffb84d;
  --font-output-sans: 'Output Sans', Inter;
  --font-output-sans: 'Output Sans', Inter;
  --text-caption: 10px;
  --leading-caption: 1.43;
  --tracking-caption: 0.021px;
  --text-body: 14px;
  --leading-body: 1.43;
  --tracking-body: 0.011px;
  --text-subheading: 18px;
  --leading-subheading: 1.45;
  --tracking-subheading: 0.014px;
  --text-display: 24px;
  --leading-display: 1;
  --tracking-display: -0.043px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-44: 44px;
  --spacing-52: 52px;
  --radius-buttons: 8px;
  --radius-default: 4px;
}
```
