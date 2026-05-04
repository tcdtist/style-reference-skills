---
version: alpha
name: Essie Wine
description: Essie Wine cultivates a classic, understated visual identity through a sparse palette of off-whites, murky greens, and a singular, muted ochre. Its spacious, text-dominant layout employs a traditional serif for its primary messaging, harmoniously paired with a legible sans-serif for functional text. Components are minimalist, often appearing as subtle underlines or text-only elements, reflecting a design ethos of quiet sophistication rather than overt display. The overall aesthetic feels like a well-worn book or a vintage poster—timeless and unpretentious.
colors:
  inkwell: "#062d32"
  parchment: "#e9e9e2"
  white-linen: "#ffffff"
  old-gold: "#aa9e54"
  dusty-rose: "#c9a9b5"
  slate-grain: "#767676"
  deep-pewter: "#344b52"
  pitch-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.18
  body-sm:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.18
  body:
    fontFamily: "system-ui"
    fontSize: 49px
    lineHeight: 1.18
spacing:
  buttonRadius: 0px
  elementGap: 23px
  sectionGap: 136px
components:
  ghost-text-button:
    role: Default interactive element for navigation and actions.
  underlined-call-to-action:
    role: Semantic action for submissions or primary interactions.
  form-input-field:
    role: Standard input for user data collection.
  form-input-field-active:
    role: Active state for form inputs.
  content-section-old-gold:
    role: Distinct background for specific content blocks like forms.
  content-section-dusty-rose:
    role: Background for hero sections or footers.
---

## Overview

**North Star:** Vintage Bookplate Serenity — a quiet, reserved aesthetic like an aged paper with delicate script.

Essie Wine cultivates a classic, understated visual identity through a sparse palette of off-whites, murky greens, and a singular, muted ochre. Its spacious, text-dominant layout employs a traditional serif for its primary messaging, harmoniously paired with a legible sans-serif for functional text. Components are minimalist, often appearing as subtle underlines or text-only elements, reflecting a design ethos of quiet sophistication rather than overt display. The overall aesthetic feels like a well-worn book or a vintage poster—timeless and unpretentious.

### Do's

- Prioritize Elementa for all body text and small labels at 16px, weight 400, for practical legibility.
- Use Adobe Caslon Pro at 49px (weight 300) for major headings to establish a classic, refined tone.
- Implement Inkwell (#062d32) as the primary accent for active states, link underlines, and subtle borders.
- Maintain a monochromatic palette for most UI elements, reserving Old Gold (#aa9e54) and Dusty Rose (#c9a9b5) for distinct background sections.
- Apply 27px padding uniformly to all buttons for consistent visual weight.
- Ensure all interactive elements and underlines use `0px` radius for a sharp, traditional finish.
- Utilize white Linen (#ffffff) and Parchment (#e9e9e2) as the default canvas colors, switching based on content hierarchy or section distinction.

### Don'ts

- Avoid using saturated or bright colors beyond the defined Old Gold (#aa9e54) for any UI elements.
- Do not introduce sharp shadows or significant elevation; the design relies on flat, understated surfaces.
- Refrain from using any border radius on buttons, inputs, or interactive elements; all corners should be sharp 0px.
- Do not break the line-based input field style with filled backgrounds or alternative border treatments.
- Avoid crowding elements; ensure generous spacing (e.g., 23px element gap, 136px section gap) to maintain an airy, considered layout.
- Do not use highly decorative fonts or vary font weights beyond 300 and 400; stick to the defined Elementa, Adobe Caslon Pro, and BasicCommercial families.

### Layout

The page structure favors a max-width contained layout, though specific hero sections or illustrations can expand. The hero pattern features a centered, large-scale line illustration against a Dusty Rose (#c9a9b5) background, with minimal text, setting an immediate atmospheric tone. Section rhythm alternates between Parchment (#e9e9e2) and Old Gold (#aa9e54) backgrounds, sometimes introducing White Linen (#ffffff). Content is typically arranged in centered stacks or simple two-column layouts for text-dominant areas. There is ample white space and consistent vertical spacing (136px for sections), creating a feeling of spaciousness. Navigation is a minimalist top bar with ghost text links.

### Imagery

The visual language relies heavily on line illustrations, primarily monochrome (Inkwell #062d32 on pale backgrounds). These illustrations are detailed, depicting scenes with human figures and architectural elements, often in a whimsical, narrative style. They are generally contained compositions, not full-bleed, and serve a decorative and atmospheric role rather than explanatory. There are no photographs or product shots. Icons are simple, outlined, sharing the same stroke weight as the illustrations. Imagery plays a significant role in creating a specific, charming brand mood, complementing the text-heavy layout without overwhelming it.
