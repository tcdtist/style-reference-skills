---
version: alpha
name: "School"
description: "This design system evokes a digital scrapbook or a quirky desktop environment, blending structured content with playful, almost childlike elements. The visual language is defined by a gridded card layout, each card a slightly rounded container. Eclectic color accents, often within illustrations or as background highlights, punctuate a predominantly neutral gray canvas. IBM Plex Mono's technical precision paired with Helvetica's classic readability creates a subtle tension, mirroring the creative studio's 'conceptual yet practical' ethos."
theme: "light"
industry: "other"
source_url: "https://schoooool.com"
refero_style_id: "a521abb9-d84b-4870-b5a8-363be7c3f94a"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926336587-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926336587-thumb.jpg"
extracted_at: "2026-04-11T16:52:37.145Z"
---

# School — Style Reference

> Digital scrapbook on a gray desktop.

**Theme:** light

**Industry:** other

This design system evokes a digital scrapbook or a quirky desktop environment, blending structured content with playful, almost childlike elements. The visual language is defined by a gridded card layout, each card a slightly rounded container. Eclectic color accents, often within illustrations or as background highlights, punctuate a predominantly neutral gray canvas. IBM Plex Mono's technical precision paired with Helvetica's classic readability creates a subtle tension, mirroring the creative studio's 'conceptual yet practical' ethos.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink | #303030 | `--color-ink` | Primary text, headings, icons, borders, input text. |
| Paper White | #FFFFFF | `--color-paper-white` | Selected text, card background within certain contexts, heading overlay. |
| Desktop Gray | #F2F2F2 | `--color-desktop-gray` | Page background; the primary canvas for all content. |
| Card Surface | #DBDBDB | `--color-card-surface` | Background for most content cards, providing a raised appearance against Desktop Gray. |
| Input Fill | #EDEDED | `--color-input-fill` | Background for input fields, offering a slightly darker, recessed feel than Card Surface. |
| Border Grey | #808080 | `--color-border-grey` | Subtle borders and shadow elements, differentiating interactive states and structural lines. |
| Badge Base | #C2C2C2 | `--color-badge-base` | Background for secondary badges, providing a low-contrast anchor. |
| Attention Yellow | #F9F5A2 | `--color-attention-yellow` | Highlight and accent for specific text, like 'your' in headings, adding a playful, emphasizing warmth. |
| Sky Blue | #648FE0 | `--color-sky-blue` | Background for certain cards or visual elements, introducing a cool, digital hue. |
| Blush Sand | #E2CEB8 | `--color-blush-sand` | Background for conversational elements or unique cards, adding a soft, warm undertone. |
| Desert Peach | #FDCEB1 | `--color-desert-peach` | Another warm, earthy background accent, often used for smaller content blocks. |
| System Blue | #0064E2 | `--color-system-blue` | Primary interactive color, used sparingly for selected states and active indicators. |
| Alert Red | #F4625D | `--color-alert-red` | Stroke color for error states or warnings. |

## Tokens — Typography

### IBM Plex Mono

- **Token:** `--font-ibm-plex-mono`
- **Substitute:** monospace
- **Weights:** 400
- **Sizes:** 11px, 14px, 16px, 18px, 25px, 43px
- **Line heights:** 1.40
- **Role:** Primary content font for body text, links, smaller headings, badges, and image captions. Its monospace nature grounds the design in a technical, almost code-like aesthetic, offering a contrast to the organic content.

### Helvetica

- **Token:** `--font-helvetica`
- **Substitute:** sans-serif
- **Weights:** 300, 400, 700
- **Sizes:** 11px, 18px, 44px
- **Line heights:** 1.40
- **Role:** Used for prominent headlines and main titles. The lighter weight 300 for display sizes adds an unexpected elegance, preventing the headlines from shouting, while weight 700 provides clear emphasis on key information.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.4 | — | `--text-caption` |
| body-sm | 14px | 1.4 | — | `--text-body-sm` |
| body | 16px | 1.4 | — | `--text-body` |
| subheading | 18px | 1.4 | — | `--text-subheading` |
| heading | 25px | 1.4 | — | `--text-heading` |
| heading-lg | 43px | 1.4 | — | `--text-heading-lg` |

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
| spacing-15 | 15px | `--spacing-15` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 10px |
| images | 10px |
| inputs | 25px |
| buttons | 20px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.16) 0px 3px 6px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.18) 0px 1px 4px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 12px |
| elementGap | 8px |

## Components

### Featured Project Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Your Button — Clock Widget

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Hero Headline with Highlight + Contact Badges

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Card

**Role:** Container for distinct content blocks.

Background #DBDBDB (Card Surface), border-radius 10px, box-shadow rgba(0, 0, 0, 0.16) 0px 3px 6px 0px. Internal padding generally 8px or 12px, creating consistent breathing room.

### Badge (Secondary)

**Role:** Categorization and meta-information.

Background #C2C2C2 (Badge Base), text Ink (#303030), border-radius 20px (full pill shape), padding 4px 12px. Uses IBM Plex Mono, 400 weight.

### Large Input Field

**Role:** Text input areas.

Background #EDEDED (Input Fill), text Ink (#303030), border-top 1px solid Ink (#303030), border-radius 25px. Minimal padding around text: 1px top/bottom, 2px left/right. Uses IBM Plex Mono.

### Headline Highlight

**Role:** Emphasizing specific words within a headline.

Background Attention Yellow (#F9F5A2), applied to text using Helvetica family. No padding or radius specifically, it's a inline text highlight.

### Image Card

**Role:** Displaying images with titles.

Image contained within a card with 10px radius, often featuring a subtle shadow rgba(0, 0, 0, 0.16) 0px 3px 6px 0px. Text is IBM Plex Mono 400 at 14px, Ink (#303030).

### Selected Tab Indicator

**Role:** Highlighting active navigation or selection.

Active state for navigation items, using System Blue (#0064E2) as a background for the 'Selected Work' badge, indicating current view.

## Do's and Don'ts

### Do

- Use Desktop Gray (#F2F2F2) as the default page background to establish the primary canvas.
- Apply Card Surface (#DBDBDB) and 10px border-radius to all primary content cards.
- Headlines should primarily use Helvetica, varying weights (300, 400, 700) and sizes (18px, 44px) for hierarchy.
- Body text and secondary information must use IBM Plex Mono, 400 weight, with varying sizes (11px, 14px, 16px).
- Employ Attention Yellow (#F9F5A2) as a background highlight for specific words or phrases to draw playful attention.
- All interactive input fields should have Input Fill (#EDEDED) background, a 1px Ink (#303030) top border, and 25px border-radius.
- Use 8px or 12px for internal padding within cards to ensure consistent element spacing.

### Don't

- Avoid generic button styles; prefer a pill shape (20px radius) for badges and inputs to maintain the system's character.
- Do not use highly saturated colors for large background areas; save vivid colors for illustrations or small, deliberate accents.
- Do not introduce new shadow styles; adhere to rgba(0, 0, 0, 0.16) 0px 3px 6px 0px for elevated cards.
- Refrain from using System Blue (#0064E2) as a general background or text color; reserve it for distinct interactive states.
- Do not use letter-spacing values other than 'normal' for either font; the expressive quality comes from font choice and weight variation.
- Avoid sharp corners on interactive or card elements; the system prefers soft rounding (10px, 20px, 25px).

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.16) 0px 3px 6px 0px`
- **Shadow 2:** `rgba(0, 0, 0, 0.18) 0px 1px 4px 0px`

## Imagery

The site uses a highly eclectic mix of visual content, creating a 'scrapbook' or 'mood board' feel. This includes surreal 3D character illustrations (e.g., the profile avatar), real-world product shots (e.g., weather icon), candid photography (e.g., people in top right, news snippets), pixel art, and graphic design samples. Images are often contained within cards with 10px rounded corners, sometimes with soft shadows. The treatment is varied; some images are tightly cropped, others feature a more artistic mask or full-bleed within their card. Role is primarily decorative and atmospheric, showcasing diverse creative outputs rather than a singular product, creating a dense, visually rich experience.

## Layout

The page adheres to a mostly full-bleed layout on Desktop Gray (#F2F2F2), but within this, content is structured as a dense, responsive grid of cards. There isn't a strict max-width; instead, cards adapt to available space. The hero section is characterized by a prominent left-aligned heading ('Hi J.S., School is (y)our creative studio.') often featuring a yellow highlight, accompanied by various smaller informational cards. Section rhythm is created by the grid of distinct cards, which vary in size and background color. Content arrangement is dynamic, with no fixed column structure beyond the cascading card layout. Navigation is minimal, a top-left 'Selected Work' badge acting as the primary entry point.

## Similar Brands

- **Bento.me** — Similar gridded, card-based layout with a mix of diverse content types and a personal feel.
- **Are.na** — Utilizes a clean, neutral-toned canvas for creative content aggregation, though with stricter visual hierarchy.
- **Figma's Community/Plugins pages** — Features a card-heavy layout on a light background, allowing individual components to display rich, varied visuals.
- **Notion** — Employs an extensive use of monospace font for body text and a card-like structure, though more utilitarian.
- **Brutalist Websites (early examples)** — Embraces a desktop-like aesthetic with unconventional content arrangements and mixes of typefaces, albeit with a more refined execution here.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink: #303030;
  --color-paper-white: #FFFFFF;
  --color-desktop-gray: #F2F2F2;
  --color-card-surface: #DBDBDB;
  --color-input-fill: #EDEDED;
  --color-border-grey: #808080;
  --color-badge-base: #C2C2C2;
  --color-attention-yellow: #F9F5A2;
  --color-sky-blue: #648FE0;
  --color-blush-sand: #E2CEB8;
  --color-desert-peach: #FDCEB1;
  --color-system-blue: #0064E2;
  --color-alert-red: #F4625D;
  --font-ibm-plex-mono: 'IBM Plex Mono', monospace;
  --font-helvetica: 'Helvetica', sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.4;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.4;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --text-heading: 25px;
  --leading-heading: 1.4;
  --text-heading-lg: 43px;
  --leading-heading-lg: 1.4;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --radius-cards: 10px;
  --radius-images: 10px;
  --radius-inputs: 25px;
  --radius-buttons: 20px;
  --shadow-xl: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.18) 0px 1px 4px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-ink: #303030;
  --color-paper-white: #FFFFFF;
  --color-desktop-gray: #F2F2F2;
  --color-card-surface: #DBDBDB;
  --color-input-fill: #EDEDED;
  --color-border-grey: #808080;
  --color-badge-base: #C2C2C2;
  --color-attention-yellow: #F9F5A2;
  --color-sky-blue: #648FE0;
  --color-blush-sand: #E2CEB8;
  --color-desert-peach: #FDCEB1;
  --color-system-blue: #0064E2;
  --color-alert-red: #F4625D;
  --font-ibm-plex-mono: 'IBM Plex Mono', monospace;
  --font-helvetica: 'Helvetica', sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.4;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.4;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --text-heading: 25px;
  --leading-heading: 1.4;
  --text-heading-lg: 43px;
  --leading-heading-lg: 1.4;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --radius-cards: 10px;
  --radius-images: 10px;
  --radius-inputs: 25px;
  --radius-buttons: 20px;
  --shadow-xl: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.18) 0px 1px 4px 0px;
}
```
