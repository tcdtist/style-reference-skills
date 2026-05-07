---
version: alpha
name: "SICK AGENCY"
description: "SICK AGENCY embodies a raw, high-contrast, and somewhat chaotic energy. It leverages a vibrant, almost aggressive color palette of fiery orange, electric yellow, and shocking blue against stark black and white for maximum visual impact. Typography is bold and unconventional, ranging from tightly packed, heavy display faces to a more understated body text. The system embraces non-standard shapes and circular motifs, creating a sense of playful disruption rather than traditional corporate polish."
theme: "dark"
industry: "agency"
source_url: "https://sick.agency"
refero_style_id: "9ff03bd9-2ce0-474c-8c73-1905dbacc23b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518022192-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777518022192-thumb.jpg"
extracted_at: "2026-04-30T03:01:06.842Z"
---

# SICK AGENCY — Style Reference

> Neon Pop Art poster

**Theme:** dark

**Industry:** agency

SICK AGENCY embodies a raw, high-contrast, and somewhat chaotic energy. It leverages a vibrant, almost aggressive color palette of fiery orange, electric yellow, and shocking blue against stark black and white for maximum visual impact. Typography is bold and unconventional, ranging from tightly packed, heavy display faces to a more understated body text. The system embraces non-standard shapes and circular motifs, creating a sense of playful disruption rather than traditional corporate polish.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Fiery Orange | #ff4e27 | `--color-fiery-orange` | Page background, significant accent borders, minor text elements and icons — creates a warm, high-energy canvas |
| Electric Yellow | #ffc700 | `--color-electric-yellow` | Prominent headings and display text, interactive button backgrounds, decorative borders — provides high contrast and a sense of urgent highlight |
| Shocking Blue | #0029ff | `--color-shocking-blue` | Primary action button backgrounds, accent borders — a distinct, high-saturation color that commands attention for interactive elements |
| Deep Crimson | #4d170c | `--color-deep-crimson` | Input borders — a muted, almost-black red for subtle framing in form elements |
| Abyss | #000000 | `--color-abyss` | Primary text, prominent borders, illustrative fills — provides a grounding, high-contrast element against the vivid brand colors |
| Pure Canvas | #ffffff | `--color-pure-canvas` | Button text, secondary text, illustrative fills and strokes — offers stark contrast against the dark and chromatic backgrounds |

## Tokens — Typography

### Morganite

- **Token:** `--font-morganite`
- **Substitute:** Anton, Impact
- **Weights:** 900
- **Sizes:** 229px
- **Line heights:** 0.70
- **Role:** Super-display headings – immense size and bold weight create an almost sculptural text element rather than just words.

### Thunder

- **Token:** `--font-thunder`
- **Substitute:** Bebas Neue, League Gothic
- **Weights:** 300
- **Sizes:** 122px
- **Line heights:** normal
- **Letter spacing:** normal
- **Role:** Display headings – large and light, used for impactful, sparse statements where the form of the text is as important as the content.

### Sentient

- **Token:** `--font-sentient`
- **Substitute:** Inter, Montserrat
- **Weights:** 400
- **Sizes:** 12px, 16px, 24px
- **Line heights:** 1.10, 1.15, 1.33, 1.44, 2.25
- **Letter spacing:** -0.0200em, -0.0150em, -0.0100em
- **Role:** Body text, buttons, icons, and links – a versatile, highly tracked sans-serif that maintains readability despite dense layout.

### Times

- **Token:** `--font-times`
- **Substitute:** Times New Roman
- **Weights:** 400
- **Sizes:** 10px
- **Line heights:** 1.15
- **Letter spacing:** normal
- **Role:** Fine print, small links, and icon labels – provides a classic, compact counterpoint to the dominant display typography.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.15 | — | `--text-caption` |
| body | 16px | 1.15 | -0.24px | `--text-body` |
| subheading | 24px | 1.33 | -0.24px | `--text-subheading` |
| heading | 122px | 1 | — | `--text-heading` |
| display | 229px | 0.7 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-172 | 172px | `--spacing-172` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 999px |
| icons | 999px |
| buttons | 999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 50px |
| cardPadding | 16px |
| elementGap | 5px |

## Components

### Primary Action Button

**Role:** Interactive element

A filled button with a 'Shocking Blue' (#0029ff) background and 'Pure Canvas' (#ffffff) text, utilizing a full pill (999px) border radius. Padding is minimal at 5px top, 1px bottom, and 6px horizontal.

### Accent Highlight Button

**Role:** Interactive element

A filled button with an 'Electric Yellow' (#ffc700) background and 'Abyss' (#000000) text, with a 'Fiery Orange' (#ff4e27) border. It features a full pill (999px) border radius with no explicit padding, relying on content for sizing.

### Ghost Accent Button

**Role:** Interactive element

A transparent button with 'Pure Canvas' (#ffffff) text and a 'Fiery Orange' (#ff4e27) border. It uses a full pill (999px) border radius, with padding of 5px top, 1px bottom, and 6px horizontal.

### Underlined Text Input

**Role:** Form element

A transparent input field with 'Fiery Orange' (#ff4e27) text and a 'Deep Crimson' (#4d170c) bottom border. It has a 0px border radius and generous vertical padding (16px top and bottom) with 0px horizontal padding.

## Do's and Don'ts

### Do

- Use 'Fiery Orange' (#ff4e27) as the dominant background for sections or the entire page to establish the high-energy brand presence.
- Apply 'Electric Yellow' (#ffc700) liberally for main headlines, display text, and high-visibility interactive elements to create strong visual anchors.
- Reserve 'Shocking Blue' (#0029ff) exclusively for primary calls to action or critical interactive states to maximize its impact and distinction.
- Set headlines using 'Thunder' or 'Morganite' families to their maximum available size, embracing the almost architectural scale of the typography.
- Utilize a 999px border radius for all buttons, tags, and small interactive elements to maintain a distinct, rounded, almost pill-like aesthetic.
- Incorporate Sentient font with its tight letter-spacing (-0.0200em to -0.0100em) for body text and labels to maintain a compact, detailed look.
- Employ the 5px element gap for all inline and block spacing to ensure elements feel connected but not cramped.

### Don't

- Avoid using soft, desaturated colors; the system thrives on vivid, high-chroma contrasts.
- Do not use subtle shadows or gradients for elevation; opt for flat, bold color blocks and hard outlines.
- Refrain from using conventional sans-serif fonts for display texts; leverage the unique character of 'Morganite' and 'Thunder'.
- Do not introduce square or minimally rounded corners for interactive elements; all buttons and tags must use a 999px radius.
- Avoid excessive whitespace; the design is dense and dynamic, preferring tightly packed, high-impact visuals.
- Do not rely solely on default text colors; always ensure text is either 'Abyss' (#000000) or 'Pure Canvas' (#ffffff) for maximum contrast against colored backgrounds.
- Do not dilute the brand's graphic, often chaotic style with conventional grid-based arrangements for hero sections; embrace bold, asymmetric compositions.

## Imagery

The visual language is graphic and abstract, almost resembling pop art or street art. It heavily utilizes flat, vibrant color blocks. Illustrations consist of abstract, often organic or gear-like shapes, sometimes outlined in a contrasting color. Icons are simple, outlined, and monochromatic, often contained within a vivid colored circle or pill shape. Photography is notably absent, ensuring that the UI and custom graphics are the sole visual focus. Its role is primarily decorative atmosphere and brand identity showcase, rather than explanatory content. The density is image-heavy in decorative sections, but functional content uses text-dominant blocks. Overlapping elements and non-standard shapes are common, creating a sense of dynamic composition.

## Layout

The page exhibits a full-bleed, dynamic layout that appears to largely ignore a fixed max-width, allowing sections to extend to the edges of the viewport. The hero section is a full-bleed block of 'Fiery Orange' (#ff4e27) with oversized, graphically treated headlines. Section rhythm is driven by these large, colorful blocks and distinct horizontal lines which divide content areas. Content is arranged in an unconventional, broken grid, with large typographic elements often running vertically and horizontally, creating an almost collage-like effect. Text blocks are contained, but often positioned against these larger graphic elements. Grid usage is loose, more about visual hierarchy and impact than strict alignment. The density is on the denser side, with elements often overlapping or butting up against each other. Navigation is not immediately visible in the provided screenshot but implied to be minimal given the page content.

## Similar Brands

- **Huge Inc.** — Aggressive, oversized typography and bold color blocking for a digital agency.
- **Kilo Kish (website)** — Uses vivid, clashing colors and unconventional graphic elements/text layout.
- **Active Theory** — High-impact, experimental layouts with strong typographic focus and vibrant color accents.
- **The Brand Father** — Employs a similar maximalist, graphic-heavy approach with stark color contrasts.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-fiery-orange: #ff4e27;
  --color-electric-yellow: #ffc700;
  --color-shocking-blue: #0029ff;
  --color-deep-crimson: #4d170c;
  --color-abyss: #000000;
  --color-pure-canvas: #ffffff;
  --font-morganite: 'Morganite', Anton, Impact;
  --font-thunder: 'Thunder', Bebas Neue, League Gothic;
  --font-sentient: 'Sentient', Inter, Montserrat;
  --font-times: 'Times', Times New Roman;
  --text-caption: 10px;
  --leading-caption: 1.15;
  --text-body: 16px;
  --leading-body: 1.15;
  --tracking-body: -0.24px;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.24px;
  --text-heading: 122px;
  --leading-heading: 1;
  --text-display: 229px;
  --leading-display: 0.7;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-50: 50px;
  --spacing-172: 172px;
  --radius-tags: 999px;
  --radius-icons: 999px;
  --radius-buttons: 999px;
}
```

### Tailwind v4

```css
@theme {
  --color-fiery-orange: #ff4e27;
  --color-electric-yellow: #ffc700;
  --color-shocking-blue: #0029ff;
  --color-deep-crimson: #4d170c;
  --color-abyss: #000000;
  --color-pure-canvas: #ffffff;
  --font-morganite: 'Morganite', Anton, Impact;
  --font-thunder: 'Thunder', Bebas Neue, League Gothic;
  --font-sentient: 'Sentient', Inter, Montserrat;
  --font-times: 'Times', Times New Roman;
  --text-caption: 10px;
  --leading-caption: 1.15;
  --text-body: 16px;
  --leading-body: 1.15;
  --tracking-body: -0.24px;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.24px;
  --text-heading: 122px;
  --leading-heading: 1;
  --text-display: 229px;
  --leading-display: 0.7;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-50: 50px;
  --spacing-172: 172px;
  --radius-tags: 999px;
  --radius-icons: 999px;
  --radius-buttons: 999px;
}
```
