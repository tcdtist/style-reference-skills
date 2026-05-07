---
version: alpha
name: "Sana Agents"
description: "This design system projects a clean, authoritative presence through a stark black-on-white palette, punctuated by a single vibrant accent. The large, elegant serif headlines create a sense of established gravitas, while the rounded corners and vibrant lime green call-to-action offer a touch of approachable modernism. This creates a balanced aesthetic where seriousness meets accessible innovation, making complex AI feel intuitive."
theme: "light"
industry: "ai"
source_url: "https://sana.ai"
refero_style_id: "5bfbe8b0-de0e-470f-b130-929f50437160"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932624961-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932624961-thumb.jpg"
extracted_at: "2026-04-11T18:37:23.190Z"
---

# Sana Agents — Style Reference

> Architectural blueprint on white marble.  Sharp, expansive white spaces frame meticulously placed elements, with occasional flashes of neon green illuminating key interactions.

**Theme:** light

**Industry:** ai

This design system projects a clean, authoritative presence through a stark black-on-white palette, punctuated by a single vibrant accent. The large, elegant serif headlines create a sense of established gravitas, while the rounded corners and vibrant lime green call-to-action offer a touch of approachable modernism. This creates a balanced aesthetic where seriousness meets accessible innovation, making complex AI feel intuitive.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Tarmac | #0a1217 | `--color-tarmac` | Primary text, dark backgrounds for feature cards, active states. This near-black serves as the dominant dark tone contrasting against the pervasive white background. |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, primary button backgrounds. Expansive and dominant, it provides a sense of spaciousness and clarity. |
| Limestone | #e4eff7 | `--color-limestone` | Subtle background for secondary sections or hover states on light elements, offering a minimal visual lift from Canvas White. |
| Jet Black | #000000 | `--color-jet-black` | Secondary text, specific interactive elements like input text. Used sparingly to ensure maximum contrast and legibility. |
| Cloud Gray | #85898b | `--color-cloud-gray` | Muted body text and secondary information, providing a softer contrast than Tarmac. |
| Steel Gray | #6c7174 | `--color-steel-gray` | Subtle text elements, navigational links, and less prominent headings, maintaining readability without overpowering. |
| Bio-Luminescent Green | #cdfe00 | `--color-bio-luminescent-green` | Primary call-to-action buttons, indicating action and drawing immediate attention with its vivid contrast against the neutral palette. |

## Tokens — Typography

### Sana Serif

- **Token:** `--font-sana-serif`
- **Substitute:** Playfair Display
- **Weights:** 400
- **Sizes:** 72px
- **Line heights:** 1.10
- **Letter spacing:** normal
- **Role:** Display headings. The single 72px size and serif face at weight 400 make a strong, non-shouting statement, conveying established authority.

### Sana Sans

- **Token:** `--font-sana-sans`
- **Substitute:** Inter
- **Weights:** 400, 450, 500
- **Sizes:** 13px, 14px, 16px, 20px
- **Line heights:** 1.20, 1.40, 1.43, 1.50
- **Letter spacing:** normal
- **OpenType features:** "lnum" on, "tnum" on
- **Role:** Body text, navigation, buttons, and most interactive elements. Its varied weights provide flexibility for hierarchy while maintaining a clean, modern feel across interface elements.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.4 | — | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.2 | — | `--text-subheading` |
| display | 72px | 1.1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-62 | 62px | `--spacing-62` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 9999px |
| input | 24px |
| buttons | 24px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1305px |
| sectionGap | 62px |
| elementGap | 8px |

## Components

### Product Cards — Sana Agents & Sana Learn

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Sign Up Form — Try for free with your work email

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group — Primary, Secondary & Outline variants

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Pill Outline Button

**Role:** Secondary action button, often for navigation or subtle interactions.

Transparent background (rgba(0, 0, 0, 0)), Tarmac text (#0a1217), Tarmac 1px border, 9999px border-radius, 10px padding.

### Dark Filled Button

**Role:** Primary action button within dark contexts or for prominent interactions.

Tarmac background (#0a1217), Canvas White text (#ffffff), 24px border-radius, 8px 16px padding.

### Light Filled Button

**Role:** Secondary action button in light contexts or for less prominent interactions.

Canvas White background (#ffffff), Tarmac text (#0a1217), 24px border-radius, 8px 16px padding.

### Feature Card

**Role:** Container for introducing product features, often in a grid.

Transparent background (rgba(0, 0, 0, 0)), 0px border-radius, no box-shadow, 24px 32px padding.

### Form Input Field

**Role:** Standard user input field for text.

Canvas White background (#ffffff), Jet Black text (#000000), light Tarmac border (rgba(10, 18, 23, 0.15)), 24px border-radius, 8px 18px padding.

## Do's and Don'ts

### Do

- Use Sana Serif for display headlines at 72px, weight 400, to establish authority.
- Apply Tarmac (#0a1217) for primary text and dark surface backgrounds to maintain strong contrast.
- Utilize Bio-Luminescent Green (#cdfe00) exclusively for primary call-to-action buttons, drawing clear attention.
- Employ 24px border-radius for all primary buttons and input fields to ensure a consistent contemporary feel.
- Maintain a clear page structure with 62px vertical spacing between major sections.
- Use Sana Sans (lnum, tnum) across all body text, navigation, and interactive elements for numeral consistency and legibility.
- Ensure all interactive elements have sufficient padding: 8px 16px for buttons, 8px 18px for inputs.

### Don't

- Do not use highly saturated colors other than Bio-Luminescent Green (#cdfe00); the palette is intentionally restrained.
- Avoid decorative shadows or complex gradients; the aesthetic is flat and crisp.
- Do not introduce additional font families; Sana Serif and Sana Sans are the only approved typefaces.
- Do not deviate from the established border radii; 24px and 9999px are the only sanctioned options for interactive elements.
- Do not vary paragraph line-height aggressively; keep it within the 1.2-1.5 range to maintain reading comfort.
- Avoid using Jet Black (#000000) for large blocks of text; reserve it for specific accents or input fields.
- Do not use small padding values; minimum 8px padding ensures adequate tap targets and visual breathing room.

## Imagery

This site features a blend of product screenshots and abstract graphic elements. Product shots are typically tight crops showcasing hands interacting with devices, often with a dark, monochromatic background. The treatment is full-bleed within card components, featuring rounded corners (24px) that soften the edges. Abstract elements are geometric, often in saturated tones (like blue or purple) within a device screen context, serving to illustrate the UI without being literal. The overall role of imagery is to demonstrate product functionality and create a sense of direct engagement, balancing technical detail with a clean, aspirational feel. Image density is moderate, used effectively within feature sections rather than as decorative full-bleed hero backgrounds.

## Layout

The layout is primarily a max-width contained design at 1305px, centered on the page. The hero features a large, centered Sana Serif headline over a white background. Sections alternate between full-width white backgrounds and contained white space. Content is arranged using a mix of centered stacks (for headings and forms) and a prominent two-column grid for product features, where text is often paired with a product showcase card. Vertical spacing between sections is generous at 62px, giving elements ample breathing room. The navigation is a minimalist top bar, right-aligned with interactive links and a prominent 'Sign in' button.

## Similar Brands

- **OpenAI** — Similar use of dark card elements on a light background, and a clean, high-tech aesthetic.
- **Notion** — Emphasizes white space, minimalist typography, and a clear, functional UI, with distinct use of a specific sans-serif.
- **Linear** — Combines a dark/light theme, sharp typographic hierarchy, and a restrained color palette focusing on functional clarity.
- **Replit** — Similar product card structures and the use of contrasting background colors for distinct product sections.
- **Supabase** — Clean, developer-focused aesthetic with prominent use of specific display fonts and a limited action color palette.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-tarmac: #0a1217;
  --color-canvas-white: #ffffff;
  --color-limestone: #e4eff7;
  --color-jet-black: #000000;
  --color-cloud-gray: #85898b;
  --color-steel-gray: #6c7174;
  --color-bio-luminescent-green: #cdfe00;
  --font-sana-serif: 'Sana Serif', Playfair Display;
  --font-sana-sans: 'Sana Sans', Inter;
  --text-caption: 13px;
  --leading-caption: 1.4;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --text-display: 72px;
  --leading-display: 1.1;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-32: 32px;
  --spacing-62: 62px;
  --radius-pill: 9999px;
  --radius-input: 24px;
  --radius-buttons: 24px;
}
```

### Tailwind v4

```css
@theme {
  --color-tarmac: #0a1217;
  --color-canvas-white: #ffffff;
  --color-limestone: #e4eff7;
  --color-jet-black: #000000;
  --color-cloud-gray: #85898b;
  --color-steel-gray: #6c7174;
  --color-bio-luminescent-green: #cdfe00;
  --font-sana-serif: 'Sana Serif', Playfair Display;
  --font-sana-sans: 'Sana Sans', Inter;
  --text-caption: 13px;
  --leading-caption: 1.4;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --text-display: 72px;
  --leading-display: 1.1;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-32: 32px;
  --spacing-62: 62px;
  --radius-pill: 9999px;
  --radius-input: 24px;
  --radius-buttons: 24px;
}
```
