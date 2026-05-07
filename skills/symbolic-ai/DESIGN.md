---
version: alpha
name: "Symbolic.ai"
description: "Symbolic.ai presents a minimalist canvas, emphasizing content clarity through high contrast typography and subtle, paper-like surface treatments. The primary visual distinction comes from the interplay of a warm off-white background with crisp dark text, occasionally punctuated by a single vibrant red accent. Components echo this ethos with soft, organic shapes and understated shadows, simulating physical objects resting on a textured page. The overall impression is one of calm, focused utility with a hint of analog charm."
theme: "light"
industry: "ai"
source_url: "https://symbolic.ai"
refero_style_id: "694723e9-0df7-4b9f-ba07-83fc598532d6"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508279174-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777508279174-thumb.jpg"
extracted_at: "2026-04-30T00:18:51.190Z"
---

# Symbolic.ai — Style Reference

> Paper-white canvas, ink-on-page UI.

**Theme:** light

**Industry:** ai

Symbolic.ai presents a minimalist canvas, emphasizing content clarity through high contrast typography and subtle, paper-like surface treatments. The primary visual distinction comes from the interplay of a warm off-white background with crisp dark text, occasionally punctuated by a single vibrant red accent. Components echo this ethos with soft, organic shapes and understated shadows, simulating physical objects resting on a textured page. The overall impression is one of calm, focused utility with a hint of analog charm.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Parchment | #fdfcf5 | `--color-canvas-parchment` | Page background — a warm, off-white tone that mimics natural paper |
| Paper White | #ffffff | `--color-paper-white` | Card backgrounds, secondary surfaces, and embedded UI elements, offering a lighter contrast against the main canvas |
| Ink Black | #000000 | `--color-ink-black` | Primary text, headings, icons, and filled button backgrounds, providing strong legibility against light surfaces |
| Charcoal Grey | #4c4c4a | `--color-charcoal-grey` | Subtle text like helper text, link underlines, and secondary borders, creating softer contrast |
| Mid Grey | #7f7e7b | `--color-mid-grey` | Muted details, tertiary text, and placeholder states |
| Faded Stone | #d5d0b8 | `--color-faded-stone` | Subtle box shadows and outlined card borders, evoking a soft, tactile presence |
| Accent Red | #f42c2b | `--color-accent-red` | Distinctive brand accent for specific card backgrounds and decorative highlight elements, drawing attention with urgency |
| Electric Violet | #6938ef | `--color-electric-violet` | Violet outline accent for tags, dividers, and focused UI edges |
| Subtle Teal | #10756a | `--color-subtle-teal` | Decorative details and occasional background fills for specific UI components, offering a cool contrast to the warm neutrals |

## Tokens — Typography

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Role:** Default system font for basic UI elements and small text where a custom font is not explicitly defined, ensuring broad compatibility.

### Open Runde

- **Token:** `--font-open-runde`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700, 900
- **Sizes:** 12px, 14px, 16px
- **Line heights:** 1.50, 1.60, 1.63, 1.71
- **OpenType features:** "blwf", "cv03", "cv04", "cv09", "cv11"
- **Role:** Body text and supporting information. Its readability and classic appearance ground the informational aspects of the interface.

### Open Runde

- **Token:** `--font-open-runde`
- **Substitute:** Inter SemiBold
- **OpenType features:** "blwf", "cv03", "cv04", "cv09", "cv11"
- **Role:** Subheadings and section titles that require a subtle emphasis without overpowering the content.

### Suisse Works Book

- **Token:** `--font-suisse-works-book`
- **Substitute:** Lora
- **Weights:** 450
- **Sizes:** 28px, 36px, 58px
- **Line heights:** 1.31, 1.50
- **OpenType features:** "blwf", "cv03", "cv04", "cv09", "cv11"
- **Role:** Primary headings, capturing attention with a distinctive, slightly condensed style. The medium weight provides refinement.

### Geist Mono

- **Token:** `--font-geist-mono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400, 600, 700
- **Sizes:** 14px
- **Line heights:** 1.71
- **OpenType features:** "blwf", "cv03", "cv04", "cv09", "cv11"
- **Role:** Monospaced text for code blocks, data displays, or distinct informational labels, signaling technical content.

### Suisse Works Medium

- **Token:** `--font-suisse-works-medium`
- **Substitute:** Lora Medium
- **Weights:** 500, 700
- **Sizes:** 20px
- **Line heights:** 1.30
- **OpenType features:** "blwf", "cv03", "cv04", "cv09", "cv11"
- **Role:** Section headlines, providing a strong but elegant presence, maintaining hierarchy below the main display headings.

### Grenze Gotisch

- **Token:** `--font-grenze-gotisch`
- **Substitute:** Josefin Sans
- **Weights:** 400, 700
- **Sizes:** 48px
- **Line heights:** 1.00
- **OpenType features:** "blwf", "cv03", "cv04", "cv09", "cv11"
- **Role:** Display text for impactful, large-scale typography, suggesting a crafted, editorial feel.

### Inter

- **Token:** `--font-inter`
- **Weights:** 700
- **Sizes:** 14px
- **Line heights:** 1.71
- **OpenType features:** "blwf", "cv03", "cv04", "cv09", "cv11"
- **Role:** Inter — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.63 | — | `--text-caption` |
| body-sm | 14px | 1.63 | — | `--text-body-sm` |
| body | 16px | 1.63 | — | `--text-body` |

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
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-116 | 116px | `--spacing-116` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 2000px |
| tags | 13px |
| cards | 24px |
| icons | 8px |
| buttons | 16px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(213, 208, 184, 0.4) 0px 2px 6px 0px | `--shadow-xl` |
| xl-2 | rgb(246, 246, 240) 0px 0px 0px 2px | `--shadow-xl-2` |
| xl-3 | rgba(213, 208, 184, 0.6) 0px 1px 2px 0px | `--shadow-xl-3` |
| xl-4 | rgba(213, 208, 184, 0.2) 0px 4px 12px 0px | `--shadow-xl-4` |
| xl-5 | rgba(213, 208, 184, 0.3) 0px 0px 0px 1px | `--shadow-xl-5` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 10px |

## Components

### Pill Button, Outlined

**Role:** Ghost buttons for secondary actions or navigation.

Rounded shape at 2000px radius, transparent background, with text color #000000 and 8px padding around content.

### Filled Button, Subtle Corners

**Role:** Primary Call-to-actions, signaling key user interactions.

Filled with #000000, text color #0000ee (browser default link color for buttons detected), with a 16px border-radius and 8px 20px padding.

### Elevated Card

**Role:** Content containers for features, articles, or testimonials.

White background #ffffff, 24px border-radius, with a soft shadow rgba(213, 208, 184, 0.4) 0px 2px 6px 0px, and 20px padding.

### Subtle Border Card

**Role:** Informational panels or meta-content displays with low prominence.

Background rgba(213, 208, 184, 0.1), 8px border-radius, with a faint border shadow rgba(213, 208, 184, 0.3) 0px 0px 0px 1px. No internal padding.

### Accent Red Card

**Role:** Highlight cards for urgent messages or prominent features.

Background in Accent Red #f42c2b, with a highly rounded left edge at 11429px, sharp right edge, and no shadow or padding.

### Image Card

**Role:** Cards designed to feature images or visual content predominantly.

White background #ffffff, organic/irregular border-radius (6.86% / 15.38% from raw data), soft shadow rgba(213, 208, 184, 0.4) 0px 2px 6px 0px, content padded 20px 20px 24px 20px.

## Do's and Don'ts

### Do

- Use Canvas Parchment #fdfcf5 as the dominant background color for most page sections, simulating a textured paper feel.
- Apply Ink Black #000000 for all primary text and headings, maintaining high contrast and legibility.
- For interactive elements, default to Pill Button, Outlined, or Filled Button, Subtle Corners, reserving Accent Red #f42c2b for impactful, specific calls to attention.
- Ensure all cards use soft, subtle shadows with Faded Stone #d5d0b8 as the primary shadow color, creating a floating-paper effect.
- Maintain a clear hierarchy in headings using Suisse Works Book for display and main headings, and Open Runde for subheadings and body text.
- Utilize Geist Mono for any code snippets or technical representations to visually segment developer-oriented content.
- Apply 24px border-radius to main content cards and 16px for buttons, contributing to the soft, friendly aesthetic.

### Don't

- Avoid using harsh, strong shadows; rely instead on the subtle Faded Stone #d5d0b8 variants.
- Do not introduce new saturated primary colors; limit the use of vivid hues to Accent Red #f42c2b and Electric Violet #6938ef for specific functional highlights.
- Do not use system default blue text for links or buttons unless it's a specific button type that is already using it as its text color (as is the case with some button variants observed); instead, use Ink Black #000000 or Charcoal Grey #4c4c4a.
- Do not use sharp, right-angled corners for interactive elements or primary content containers; maintain the soft, rounded aesthetic.
- Avoid overly dense layouts; leverage the sectionGap of '40px' and cardPadding of '20px' to provide ample whitespace.
- Do not use dark backgrounds for main content sections; the system is designed for a light theme with paper-like surfaces.
- Do not deviate from the specified font families; their unique characteristics are central to the brand's typographic identity.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Parchment | #fdfcf5 | The primary page background, a warm off-white. |
| 1 | Paper White | #ffffff | Base layer for cards and embedded components, slightly brighter than the canvas. |
| 2 | Subtle Border Card Background | #d5d0b8 | A very light, near-transparent background for less prominent cards, suggesting a layer below Paper White. |

## Elevation

- **Shadow 1:** `rgba(213, 208, 184, 0.4) 0px 2px 6px 0px`
- **Shadow 2:** `rgb(246, 246, 240) 0px 0px 0px 2px`
- **Shadow 3:** `rgba(213, 208, 184, 0.6) 0px 1px 2px 0px`
- **Shadow 4:** `rgba(213, 208, 184, 0.2) 0px 4px 12px 0px`
- **Shadow 5:** `rgba(213, 208, 184, 0.3) 0px 0px 0px 1px`

## Imagery

The visual language predominantly features abstract, paper-like product screenshots and UI snippets, often layered and appearing to peel or fold, creating a tactile, analog feel. Icons are typically outlined or simple filled shapes, in monochrome or a single accent color like Electric Violet and Subtle Teal, maintaining a clean, functional aesthetic. Imagery serves primarily to explain product functionality and illustrate processes rather than decorative atmosphere, often showing text content within the simulated paper environment. Density is text-dominant, with visuals supporting and enriching the information.

## Layout

The page primarily uses a full-bleed layout for the overall background, with core content constrained to a max-width container, though the explicit pageMaxWidth cannot be confidently determined from the data. The hero section features a centered headline over the Canvas Parchment background. Section rhythm is dictated by consistent vertical spacing of 40px, with alternating background textures and card treatments rather than stark color blocks. Content arrangement often appears as centered stacks or grid-based displays (implied by card variants), showcasing product UI within overlaid card components. Navigation is a simple top bar with text links and a 'Sign up' button, sticky at the top.

## Similar Brands

- **Notion** — Shares a clean, light canvas aesthetic with minimal borders and subtle shadows, focusing on content density and typographic hierarchy.
- **Substack** — Employs a 'paper-like' design with high contrast ink-on-page typography and understated UI elements for a focused reading experience.
- **Linear** — Features a strong emphasis on typographic hierarchy, subtle surface changes, and a restrained color palette where accents are functional rather than decorative.
- **Readwise Reader** — Uses a warm, off-white background and high-contrast text to create a comfortable reading environment, similar to the textual focus of Symbolic.ai.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-parchment: #fdfcf5;
  --color-paper-white: #ffffff;
  --color-ink-black: #000000;
  --color-charcoal-grey: #4c4c4a;
  --color-mid-grey: #7f7e7b;
  --color-faded-stone: #d5d0b8;
  --color-accent-red: #f42c2b;
  --color-electric-violet: #6938ef;
  --color-subtle-teal: #10756a;
  --font-sans-serif: 'sans-serif', system-ui;
  --font-open-runde: 'Open Runde', Inter;
  --font-open-runde: 'Open Runde', Inter SemiBold;
  --font-suisse-works-book: 'Suisse Works Book', Lora;
  --font-geist-mono: 'Geist Mono', IBM Plex Mono;
  --font-suisse-works-medium: 'Suisse Works Medium', Lora Medium;
  --font-grenze-gotisch: 'Grenze Gotisch', Josefin Sans;
  --font-inter: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.63;
  --text-body-sm: 14px;
  --leading-body-sm: 1.63;
  --text-body: 16px;
  --leading-body: 1.63;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-52: 52px;
  --spacing-68: 68px;
  --spacing-100: 100px;
  --spacing-116: 116px;
  --radius-pill: 2000px;
  --radius-tags: 13px;
  --radius-cards: 24px;
  --radius-icons: 8px;
  --radius-buttons: 16px;
  --shadow-xl: rgba(213, 208, 184, 0.4) 0px 2px 6px 0px;
  --shadow-xl-2: rgb(246, 246, 240) 0px 0px 0px 2px;
  --shadow-xl-3: rgba(213, 208, 184, 0.6) 0px 1px 2px 0px;
  --shadow-xl-4: rgba(213, 208, 184, 0.2) 0px 4px 12px 0px;
  --shadow-xl-5: rgba(213, 208, 184, 0.3) 0px 0px 0px 1px;
  --surface-canvas-parchment: #fdfcf5;
  --surface-paper-white: #ffffff;
  --surface-subtle-border-card-background: #d5d0b8;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-parchment: #fdfcf5;
  --color-paper-white: #ffffff;
  --color-ink-black: #000000;
  --color-charcoal-grey: #4c4c4a;
  --color-mid-grey: #7f7e7b;
  --color-faded-stone: #d5d0b8;
  --color-accent-red: #f42c2b;
  --color-electric-violet: #6938ef;
  --color-subtle-teal: #10756a;
  --font-sans-serif: 'sans-serif', system-ui;
  --font-open-runde: 'Open Runde', Inter;
  --font-open-runde: 'Open Runde', Inter SemiBold;
  --font-suisse-works-book: 'Suisse Works Book', Lora;
  --font-geist-mono: 'Geist Mono', IBM Plex Mono;
  --font-suisse-works-medium: 'Suisse Works Medium', Lora Medium;
  --font-grenze-gotisch: 'Grenze Gotisch', Josefin Sans;
  --font-inter: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.63;
  --text-body-sm: 14px;
  --leading-body-sm: 1.63;
  --text-body: 16px;
  --leading-body: 1.63;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-52: 52px;
  --spacing-68: 68px;
  --spacing-100: 100px;
  --spacing-116: 116px;
  --radius-pill: 2000px;
  --radius-tags: 13px;
  --radius-cards: 24px;
  --radius-icons: 8px;
  --radius-buttons: 16px;
  --shadow-xl: rgba(213, 208, 184, 0.4) 0px 2px 6px 0px;
  --shadow-xl-2: rgb(246, 246, 240) 0px 0px 0px 2px;
  --shadow-xl-3: rgba(213, 208, 184, 0.6) 0px 1px 2px 0px;
  --shadow-xl-4: rgba(213, 208, 184, 0.2) 0px 4px 12px 0px;
  --shadow-xl-5: rgba(213, 208, 184, 0.3) 0px 0px 0px 1px;
  --surface-canvas-parchment: #fdfcf5;
  --surface-paper-white: #ffffff;
  --surface-subtle-border-card-background: #d5d0b8;
}
```
