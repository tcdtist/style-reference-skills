---
version: alpha
name: "The Browser Company"
description: "The Browser Company's design system evokes a classic, literary feel through its sparse composition and refined typography. A warm, off-white canvas provides a tranquil backdrop for minimal, precisely placed text elements. The visual identity relies heavily on the nuanced interplay of diverse typefaces, with a primary blue accent reserved for subtle interactive cues."
theme: "light"
industry: "ai"
source_url: "https://thebrowser.company"
refero_style_id: "0e705758-1beb-49ba-a545-d675275027ec"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514456931-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514456931-thumb.jpg"
extracted_at: "2026-04-30T02:01:13.224Z"
---

# The Browser Company — Style Reference

> Vintage literary journal

**Theme:** light

**Industry:** ai

The Browser Company's design system evokes a classic, literary feel through its sparse composition and refined typography. A warm, off-white canvas provides a tranquil backdrop for minimal, precisely placed text elements. The visual identity relies heavily on the nuanced interplay of diverse typefaces, with a primary blue accent reserved for subtle interactive cues.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Parchment | #eeeee7 | `--color-parchment` | Page backgrounds, large canvas areas — a warm, inviting neutral that feels aged |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, borders, iconography, and subtle surface fills — providing sharp contrast against Parchment |
| Internet Blue | #0c50ff | `--color-internet-blue` | Violet wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |

## Tokens — Typography

### EB Garamond

- **Token:** `--font-eb-garamond`
- **Substitute:** EB Garamond
- **Weights:** 400
- **Sizes:** 28px
- **Line heights:** 1.20
- **Role:** Headlines and emphasis text — a classic serif that establishes a refined, traditional tone.

### IvarText

- **Token:** `--font-ivartext`
- **Substitute:** Tiempos Text
- **Weights:** 400
- **Sizes:** 9px, 10px
- **Line heights:** 1.50
- **Role:** Body text and less prominent content — a custom serif that contributes to the literary journal aesthetic with its elegant letterforms.

### ABCDiatypeMono

- **Token:** `--font-abcdiatypemono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 14px
- **Line heights:** 1.20
- **Letter spacing:** 0.15em
- **Role:** Monospaced text, navigation links, and functional labels — a custom monospace typeface for a technical, precise counterpoint to the serifs.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 14px | 1.2 | 1.5px | `--text-body` |
| heading | 28px | 1.2 | — | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-75 | 75px | `--spacing-75` |

### Border Radius

| Element | Value |
| --- | --- |
| buttons | 0px |
| default | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 10px |
| elementGap | 12px |

## Components

### Ghost Button

**Role:** Interactive element (e.g., navigation links, secondary actions)

Text in Midnight Ink (#000000) on a transparent background, with no border and no discernable padding. Typography uses ABCDiatypeMono at 14px, 0.15em letter-spacing. Interaction is indicated by text color or underline, not a filled background.

### Header Branding

**Role:** Primary brand identity display

Centered 'The Browser Company' logo in Midnight Ink (#000000), using custom icon and typography. It's often flanked by a main headline.

## Do's and Don'ts

### Do

- Prioritize generous vertical spacing, using values like 40px and 50px for section and large element separation.
- Use EB Garamond at 28px for primary headlines to convey a classic and composed tone.
- Apply ABCDiatypeMono 14px with 0.15em letter-spacing for all navigation and functional labels, maintaining distinct visual separation from body text.
- Employ Parchment (#eeeee7) as the dominant background color for most page areas and surfaces.
- Use Midnight Ink (#000000) for all primary text, borders, and iconography.
- Reserve Internet Blue (#0c50ff) for subtle accentuation of interactive elements or as a background for specific content blocks.
- Maintain a consistent 0px border-radius for all interactive and structural elements, favoring sharp, defined edges.

### Don't

- Avoid using multiple colors for text; primary text should consistently be Midnight Ink (#000000).
- Do not introduce heavy shadows or overt elevation; rely on spacing and typography for hierarchy.
- Do not deviate from the specified serif (EB Garamond, IvarText) and monospace (ABCDiatypeMono) font families; avoid sans-serif fonts.
- Do not apply large, rounded corners to any components; maintain the consistent 0px radius.
- Avoid dense information blocks; instead, use ample whitespace and conservative element spacing.
- Do not use Internet Blue (#0c50ff) as a primary button background; it is an accent, not a filled CTA.
- Do not use default browser link colors; all links should conform to Midnight Ink (#000000) with ABCDiatypeMono typography.

## Imagery

The site favors an 'icons-only' approach for symbolic elements like browser logos, rendered with a clean, outlined style in Midnight Ink. No photography or complex illustrations are present; the visual focus is entirely on typography and minimal graphic elements. Imagery is sparse, serving primarily as identifiers rather than decorative or explanatory content.

## Layout

The page implements a max-width contained layout with centered content. The hero area features a centered branding logo and headline. Sections below maintain consistent vertical spacing, often showcasing a centered stack of textual content and navigation. The overall density is spacious, providing significant breathing room between blocks of information. Navigation is minimal, presented as inline links or a simple ghost button structure.

## Similar Brands

- **Arc Browser** — Shares a similar minimal, text-dominant aesthetic with a preference for custom typography and subtle accent colors.
- **Readwise** — Employs an off-white background with strong typographic focus and a sparse layout for a 'reading' feel.
- **Substack** — Utilizes a clean, literary design with a strong emphasis on serif typography and a muted color palette.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-parchment: #eeeee7;
  --color-midnight-ink: #000000;
  --color-internet-blue: #0c50ff;
  --font-eb-garamond: 'EB Garamond', EB Garamond;
  --font-ivartext: 'IvarText', Tiempos Text;
  --font-abcdiatypemono: 'ABCDiatypeMono', IBM Plex Mono;
  --text-body: 14px;
  --leading-body: 1.2;
  --tracking-body: 1.5px;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-75: 75px;
  --radius-buttons: 0px;
  --radius-default: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-parchment: #eeeee7;
  --color-midnight-ink: #000000;
  --color-internet-blue: #0c50ff;
  --font-eb-garamond: 'EB Garamond', EB Garamond;
  --font-ivartext: 'IvarText', Tiempos Text;
  --font-abcdiatypemono: 'ABCDiatypeMono', IBM Plex Mono;
  --text-body: 14px;
  --leading-body: 1.2;
  --tracking-body: 1.5px;
  --text-heading: 28px;
  --leading-heading: 1.2;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-75: 75px;
  --radius-buttons: 0px;
  --radius-default: 0px;
}
```
