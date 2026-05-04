---
version: alpha
name: Mr. Pops
description: Mr. Pops projects a playful, premium, indulgent atmosphere through its high-contrast aesthetic. It pairs bold, whimsical typography with a dominant, vivid red accent, creating a sense of energetic fun. Surfaces are generally clean and light, ensuring the vibrant brand color truly pops. The design prioritizes visual impact and direct engagement rather than complex UI elements or subtle hierarchies.
colors:
  snow: "#ffffff"
  licorice: "#000000"
  candy-apple: "#b00e2f"
  nude-peach: "#fee5ca"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.15
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: 0.05px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
    letterSpacing: 0.05px
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 0.9
    letterSpacing: 0.05px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.75
    letterSpacing: 0.05px
  display:
    fontFamily: "system-ui"
    fontSize: 144px
    lineHeight: 0.75
    letterSpacing: 0.05px
spacing:
  buttonRadius: 50%
  elementGap: 10px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Call to action button for core tasks
  secondary-ghost-button:
    role: Alternative actions or navigation elements
  navigation-menu-button:
    role: Toggle for site navigation
  form-input-field:
    role: User input fields for forms
  circular-callout-button:
    role: Small interactive circular elements, often for quantity or selection
---

## Overview

**North Star:** Playful Indulgence on a White Canvas

Mr. Pops projects a playful, premium, indulgent atmosphere through its high-contrast aesthetic. It pairs bold, whimsical typography with a dominant, vivid red accent, creating a sense of energetic fun. Surfaces are generally clean and light, ensuring the vibrant brand color truly pops. The design prioritizes visual impact and direct engagement rather than complex UI elements or subtle hierarchies.

### Do's

- Use Candy Apple (#b00e2f) strictly for primary actions, critical highlights, and brand accents to maintain its impact.
- Pair Cervo for all headings with HelveticaNeueCyr for body text to leverage the contrast between decorative and legible typography.
- Implement letter-spacing of 0.0500em for all Cervo text sizes to maintain its distinct character.
- Apply 50% border-radius to all primary action buttons for a consistent pill shape.
- Maintain a spacious density with at least 40px section gaps and 10px element gaps to allow visual breathing room.
- Prioritize high-contrast text-on-background combinations, using Licorice (#000000) on Snow (#ffffff) or Nude Peach (#fee5ca), and Snow on Candy Apple (#b00e2f).

### Don'ts

- Do not introduce new primary brand colors; restrict the palette to Snow, Licorice, Candy Apple, and Nude Peach.
- Avoid using Cervo for body text or any functional text, as its decorative nature reduces readability in smaller sizes.
- Do not use subtle background gradients or complex shadows; aim for flat, defined surfaces.
- Do not apply padding or margins that significantly break the established 10px base element gap, 30px card padding, or 40px section gap.
- Avoid mixed-case headings when using Cervo; stick to the dominant all-caps or title-case style for visual consistency.
- Do not use rectangular buttons with sharp corners for primary actions; reserve that for ghost/secondary buttons if necessary.

### Layout

The page structure is full-bleed, with content dynamically layered over large hero images. Sections typically stack vertically, maintaining consistent vertical spacing derived from sectionGap. Content within sections varies; the hero presents large, centered, and left-aligned display typography over an image. Other sections feature combinations of headings with short descriptive text. Layout density is spacious, allowing images and large text to command attention. Navigation is a minimal top-right bar with icon-only and ghost buttons.

### Imagery

The site uses photography as its primary imagery. These are high-key, likely full-bleed product shots showing ice creams, often held by people, emphasizing indulgence and the product experience. They are not contained by frames or masks, blending into the background or acting as the dominant visual. The treatment is vibrant and rich, focusing on the product's appealing textures and colors.
