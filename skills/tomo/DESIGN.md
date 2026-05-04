---
version: alpha
name: TOMO
description: TOMO's design system is a collage-like, intentionally raw aesthetic, reminiscent of a zine or found-art compilation. It layers unconstrained imagery with stark, high-contrast typography and a simple, limited color palette focused on black, white, and a distinctive background tint. Visual elements often break traditional layout norms, appearing as cut-outs or overlapping pieces, eschewing typical component styling like consistent borders or backgrounds for a more deconstructed feel. The system prioritizes texture and visual surprise over smooth predictability, with text blocks often treated as separate, unaligned artifacts.
colors:
  ink-black: "#000000"
  canvas-white: "#ffffff"
  found-paper: "#eee2d4"
  button-gray: "#efefef"
  warning-red: "#ff6347"
spacing:
  elementGap: 13px
  sectionGap: 75px
components:
  standard-button:
    role: Default interactive button style.
  transparent-card:
    role: Container for content, often layered directly on the background.
  subtle-transparent-card:
    role: Used for slightly more pronounced content blocks that still maintain a lightweight feel.
  navigation-link-strip:
    role: Interactive text links for navigation or content categories.
---

## Overview

**North Star:** Deconstructed Collage Zine

TOMO's design system is a collage-like, intentionally raw aesthetic, reminiscent of a zine or found-art compilation. It layers unconstrained imagery with stark, high-contrast typography and a simple, limited color palette focused on black, white, and a distinctive background tint. Visual elements often break traditional layout norms, appearing as cut-outs or overlapping pieces, eschewing typical component styling like consistent borders or backgrounds for a more deconstructed feel. The system prioritizes texture and visual surprise over smooth predictability, with text blocks often treated as separate, unaligned artifacts.

### Do's

- Use Found Paper (#eee2d4) as the primary page background color to establish the warm, aged base.
- Employ Ink Black (#000000) for all primary text and critical UI borders for maximum contrast and graphic impact.
- Set all `border-radius` values to 0px to maintain the sharp, cut-out aesthetic; avoid rounded corners entirely.
- Utilize Recife font for headlines and prominent text, varying between 300 and 400 weights for subtle hierarchy at 26px or 32px size and 1.0-1.3 line height.
- Apply a 1px solid Ink Black (#000000) border to interactive elements and text blocks when a distinct visual separation or highlight is needed.
- Treat content sections less as structured blocks and more as overlapping or adjacent cutout elements, allowing for varied bottom padding values.
- Keep utilitarian buttons visually understated with Button Gray (#efefef) background and Ink Black (#000000) text and border.

### Don'ts

- Do not use any shadows for elevation; rely on overlaps, borders, and position for visual hierarchy.
- Avoid gradients anywhere in the UI; the system is built on solid color blocks and photographic textures.
- Do not introduce additional background or accent colors that deviate from the established neutral and single semantic red palette.
- Refrain from using consistent grid structures or even spacing across major content sections; embrace a deliberately 'unaligned' feel.
- Do not use letter-spacing other than 'normal' except where explicitly specified by type data.
- Avoid any visually 'smooth' or 'modern' components (e.g., pill buttons, soft shadows, subtle color ramps); prioritize a raw, artisanal feel.
- Do not use system fonts for prominent display text; adhere strictly to Recife for its distinct character.

### Layout

The page embraces a full-bleed, unconstrained layout, eschewing a fixed `pageMaxWidth` to allow visuals to extend to the edges. The hero section prominently features a very large, loosely centered typographic mark over the main background, with navigation items appearing as separate, displaced 'cut-out' text strips. Subsequent sections continue the collage pattern, with imagery and text blocks overlapping and appearing in an organic, non-grid-aligned fashion. There are no clear horizontal section dividers; vertical rhythm is established through varied bottom padding on content blocks, creating a dynamic, unpredictable flow. Navigation is presented as a series of distinct, rectangular text labels that float over content rather than a fixed bar.

### Imagery

The site utilizes a dense, maximalist collage approach, combining a wide array of high-quality, cut-out product photography (shrimp, strawberries, melons, rice cookers, crabs), street photography, and miscellaneous found objects (clamshells, bottle). Images are often irregularly shaped 'cut-outs' with raw edges, rather than contained frames. They aggressively overlap and layer to create a rich, chaotic texture. There is no consistent photographic style; product shots are crisp and isolated, while environmental shots are more contextual. The imagery serves as both decorative atmosphere and direct content, dominating visual space and creating an immersive, busy composition.
