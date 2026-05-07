---
version: alpha
name: "MANNA"
description: "Manna Architects employs a subdued, earthy aesthetic that evokes natural materials and warm, muted tones. Text is primarily black against subtly tinted, soft backgrounds, giving a feeling of quiet elegance. Typography is precise and airy, favoring lighter weights and generous readability. The design system prioritizes large, impactful imagery and minimal, deliberate UI elements, suggesting a focus on visual content over interactive complexity."
theme: "light"
industry: "design"
source_url: "https://www.mannaarchitects.com"
refero_style_id: "d83fd0b1-afde-41ff-b970-c622bfed9f59"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517824191-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777517824191-thumb.jpg"
extracted_at: "2026-04-30T02:57:21.763Z"
---

# MANNA — Style Reference

> Earthy Gallery Canvas

**Theme:** light

**Industry:** design

Manna Architects employs a subdued, earthy aesthetic that evokes natural materials and warm, muted tones. Text is primarily black against subtly tinted, soft backgrounds, giving a feeling of quiet elegance. Typography is precise and airy, favoring lighter weights and generous readability. The design system prioritizes large, impactful imagery and minimal, deliberate UI elements, suggesting a focus on visual content over interactive complexity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Earthy Ochre | #af6446 | `--color-earthy-ochre` | Dominant background for visual sections and footers, creating a warm canvas for large imagery |
| Pale Linen | #f2edde | `--color-pale-linen` | Secondary background for footer elements or subtle surface variations, providing a softer contrast to text |
| Charcoal Ink | #000000 | `--color-charcoal-ink` | Primary text color for all content, headings, and links. Also used for hairline borders and content dividers |

## Tokens — Typography

### Scto Grotesk A

- **Token:** `--font-scto-grotesk-a`
- **Substitute:** Inter
- **Weights:** 300, 500
- **Sizes:** 14px, 60px
- **Line heights:** 1.29
- **Letter spacing:** normal
- **Role:** Headlines and prominent display text (60px, 500 weight) for brand impact, body text (14px, 300 weight) for spacious readability. The light 300 weight for body text gives a delicate, refined feel.

### Merlo

- **Token:** `--font-merlo`
- **Substitute:** Georgia
- **Weights:** 400
- **Sizes:** 16px, 26px
- **Line heights:** 1.23, 1.50
- **Letter spacing:** normal
- **Role:** Body copy and informational text, particularly for image captions and detailed descriptions. The consistent 400 weight maintains a straightforward, unobtrusive presence.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-40 | 40px | `--spacing-40` |

### Border Radius

| Element | Value |
| --- | --- |
| images | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 20px |
| elementGap | 10-20px |

## Components

### Image Card with Caption

**Role:** Primary content display for portfolio pieces or architectural photography.

Images are presented without rounded corners, relying on the 'Earthy Ochre' background as their implied container. A 'Merlo' 16px caption in 'Charcoal Ink' with 1.5 lineHeight is set with 10px `marginBottom` below the image. Padding around the image and caption is 20px, framing the visual content.

### Footer Section

**Role:** Global brand and contact information.

The footer uses a 'Pale Linen' background with 20px padding on all sides. Text links like 'About' and 'info@mannaarchitects.com' are in 'Charcoal Ink' using 'Scto Grotesk A' at 14px, 300 weight.

### Prominent Brand Heading

**Role:** Major section titles and brand identity.

Utilizes 'Scto Grotesk A' at 60px, weight 500, in 'Charcoal Ink'. This large, bold typography anchors content sections despite the overall light touch of the design.

## Do's and Don'ts

### Do

- Prioritize large, uncropped imagery as primary content, allowing them to fill available width and define sections.
- Use 'Earthy Ochre' (#af6446) as the primary background for content blocks and distinct page sections.
- Render all text, including headings, body, and links, in 'Charcoal Ink' (#000000).
- Apply 'Scto Grotesk A' (60px, 500 weight) for dominant headings and 'Merlo' (16px, 400 weight) for detailed captions and informational text.
- Maintain minimal spacing around images by using 10px `marginBottom` for captions, creating a tight visual grouping.
- Structure layouts with ample clear space, using 20px padding for content blocks to prevent visual clutter.

### Don't

- Avoid using highly saturated, vivid colors; stick to the muted, earthy palette provided.
- Do not introduce rounded corners for images or cards; maintain sharp, crisp edges for visual elements.
- Refrain from using strong drop shadows or complex elevation; the design relies on flat presentation and color contrast.
- Do not deviate from the specified font families or weights, as the typographic precision is a core brand element.
- Avoid excessive interactive elements or buttons; interaction should be secondary to content display.
- Do not use letter-spacing other than 'normal' for any text elements.

## Imagery

This system relies heavily on high-quality, full-bleed architectural photography and natural landscape imagery. Images are presented without borders or significant contained treatment, creating an immersive, gallery-like experience. The focus is on the object or scene, often with descriptive captions below. There are no apparent abstract graphics, illustrations, or complex icon systems; simplicity and realism dominate the visual language.

## Layout

The page primarily uses a full-bleed layout for imagery, with content sections appearing as large blocks or canvases. Text is typically centered or left-aligned beneath images. There is a strong vertical rhythm, with sections clearly delineated by shifts in background color (often 'Earthy Ochre'). The overall layout feels spacious and unconstrained, allowing visual content to breathe. Navigation is minimal, likely a simple header or footer with key links.

## Similar Brands

- **Norm Architects** — Similar reliance on natural tones, minimalist typography, and large-format architectural photography.
- **Studio McGee** — Shares a warm, inviting color palette with earthy neutrals and a focus on serene visual compositions.
- **The Future Kept** — Employs an understated visual style, using subtle background colors and clear, functional typography to highlight product photography.
- **Artless** — A similar emphasis on large, unadorned imagery and a quiet, content-focused presentation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-earthy-ochre: #af6446;
  --color-pale-linen: #f2edde;
  --color-charcoal-ink: #000000;
  --font-scto-grotesk-a: 'Scto Grotesk A', Inter;
  --font-merlo: 'Merlo', Georgia;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-40: 40px;
  --radius-images: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-earthy-ochre: #af6446;
  --color-pale-linen: #f2edde;
  --color-charcoal-ink: #000000;
  --font-scto-grotesk-a: 'Scto Grotesk A', Inter;
  --font-merlo: 'Merlo', Georgia;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-40: 40px;
  --radius-images: 0px;
}
```
