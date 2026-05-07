---
version: alpha
name: "Mike Matas"
description: "This design system projects an aura of understated intellectual authority, emphasizing content and clarity through a stark monochrome palette. The deliberate absence of color accents on the main page, combined with generous negative space, creates a calm, focused reading environment. Type is the primary visual element, meticulously sized and weighted to establish hierarchy and draw attention without visual noise, making every word feel considered and precise."
theme: "light"
industry: "agency"
source_url: "https://mikematas.com"
refero_style_id: "04f6cb02-de90-4d78-9c5f-0eb52f826484"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925531371-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925531371-thumb.jpg"
extracted_at: "2026-04-11T16:39:06.283Z"
---

# Mike Matas — Style Reference

> Minimalist textual canvas. Information presented with monastic simplicity against an expansive white background.

**Theme:** light

**Industry:** agency

This design system projects an aura of understated intellectual authority, emphasizing content and clarity through a stark monochrome palette. The deliberate absence of color accents on the main page, combined with generous negative space, creates a calm, focused reading environment. Type is the primary visual element, meticulously sized and weighted to establish hierarchy and draw attention without visual noise, making every word feel considered and precise.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #FFFFFF | `--color-canvas-white` | Page backgrounds, overall dominant background. Provides a pristine, high-contrast surface for text. |
| Ink Black | #000000 | `--color-ink-black` | Primary text, headings, icons, interactive elements. Represents the core informational content. |
| Muted Gray | #999999 | `--color-muted-gray` | Secondary text, subtle details, meta-information. Lowers the visual prominence without losing readability. |

## Tokens — Typography

### Lab Grotesque

- **Token:** `--font-lab-grotesque`
- **Substitute:** system-ui, sans-serif
- **Weights:** 100, 400, 600
- **Sizes:** 18px, 20px, 40px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** The sole typeface, spanning all content from body text to headlines. The use of a custom sans-serif with a prominent thin (100) weight for main branding sets a tone of quiet sophistication and technical precision.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-9 | 9px | `--spacing-9` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-63 | 63px | `--spacing-63` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-135 | 135px | `--spacing-135` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 900px |

## Components

### Project Card — California Plants

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Site Navigation Header

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Portfolio Project List

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Main Navigation Link

**Role:** Unadorned textual links for navigation.

Text in Ink Black (#000000), 18px Lab Grotesque, weight 400. No borders, no padding, 0px border radius. Purely text-based, relying on content for definition.

### Secondary Navigation Link

**Role:** Subtle links for 'About', 'Twitter', 'Instagram'.

Text in Muted Gray (#999999), 18px Lab Grotesque, weight 400. No borders, no padding, 0px border radius. Uses reduced contrast to de-emphasize.

### Body Text Block

**Role:** Paragraphs of body content.

Text Ink Black (#000000), 20px Lab Grotesque, weight 400, lineHeight 1.20. Standard paragraph spacing: 1px or 2px top margin for short elements, 9px or 36px for larger vertical separation based on context between blocks.

### Primary Heading

**Role:** Main title and section headings.

Text Ink Black (#000000), 40px Lab Grotesque, weight 600. Large size and increased weight establish primary hierarchy without visual embellishment.

### Secondary Heading

**Role:** Sub-headings or project titles.

Text Ink Black (#000000), 18px Lab Grotesque, weight 400. Differentiated from body text by being used in specific structural contexts like project listings.

### Project Metadata/Year Tag

**Role:** Contextual dates or brief descriptors alongside project titles.

Text Muted Gray (#999999), 18px Lab Grotesque, weight 400. Used for secondary information like years on portfolio items.

## Do's and Don'ts

### Do

- Prioritize text as the primary visual element; every textual unit should be considered and precise.
- Maintain a high-contrast ratio between Ink Black (#000000) text and Canvas White background.
- Use Lab Grotesque consistently across all type roles, adhering to specified weights and sizes.
- Employ generous negative space, particularly horizontal and vertical margins (72px, 36px), to create a sense of calm and focus.
- Use a 0px border-radius for all elements, maintaining crisp, sharp edges.
- Confine body and main content to a max-width of 900px, centered on the page.

### Don't

- Avoid decorative elements, borders, or background colors that detract from body copy or visual clarity.
- Do not introduce additional typefaces or weights beyond Lab Grotesque 100, 400, 600.
- Refrain from using shadows or gradients; depth is achieved primarily through spacing and content hierarchy.
- Do not use color for emphasis; use changes in type size, weight, or the Muted Gray (#999999) secondary color.
- Avoid unnecessary icons or imagery that don't directly convey essential information.
- Do not break the strict achromatic palette with any brand or accent colors on the main content page.

## Imagery

This site uses a 'product showcase' visual language for its primary content, featuring unmasked, crisp screenshots of digital interfaces presented within device mockups (laptops, phones). There is no lifestyle photography or custom illustration. Images are contained and serve to illustrate past work, rather than create atmosphere. Iconography (e.g., in the laptop UI) is minimal, line-based, and monochromatic, aligning with the overall reductive aesthetic. Density is image-light, focusing on key examples rather than visual abundance.

## Similar Brands

- **Apple's previous design guidelines for early macOS applications** — Emphasis on clear, functional typography over decorative elements, high-contrast monochrome UI, and generous whitespace for a focused experience.
- **Classic Dieter Rams product design principles** — The 'less but better' philosophy, where form follows function, leading to unembellished, highly functional, and durable aesthetics.
- **Early Google Search homepage** — Uncluttered interface, pure white background, minimal elements, and a focus on essential functionality and information access.
- **Some academic journals or research paper interfaces** — Prioritizes readability and serious content presentation over visual flair, using strict typography and layout for clarity.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #FFFFFF;
  --color-ink-black: #000000;
  --color-muted-gray: #999999;
  --font-lab-grotesque: 'Lab Grotesque', system-ui, sans-serif;
  --spacing-9: 9px;
  --spacing-25: 25px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-54: 54px;
  --spacing-63: 63px;
  --spacing-68: 68px;
  --spacing-72: 72px;
  --spacing-135: 135px;
  --radius-none: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #FFFFFF;
  --color-ink-black: #000000;
  --color-muted-gray: #999999;
  --font-lab-grotesque: 'Lab Grotesque', system-ui, sans-serif;
  --spacing-9: 9px;
  --spacing-25: 25px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-54: 54px;
  --spacing-63: 63px;
  --spacing-68: 68px;
  --spacing-72: 72px;
  --spacing-135: 135px;
  --radius-none: 0px;
}
```
