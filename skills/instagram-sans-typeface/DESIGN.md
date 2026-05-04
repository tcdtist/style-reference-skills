---
version: alpha
name: Instagram Sans Typeface
description: Instagram's brand style is a high-contrast, playful expression embracing its custom typeface, Instagram Sans. The visual system revolves around vivid fuchsia and violet hues, juxtaposed with crisp black and white. Layouts are spacious, featuring strong typographic statements and graphic elements with subtle rounded corners, creating an energetic and modern feel without relying on complex shadows or textures. Color primarily functions as a bold brand identifier and a backdrop for clean, legible text.
colors:
  fuchsia-burst: "#f689ff"
  violet-dream: "#385898"
  licorice-ink: "#1c1e21"
  achromatic-black: "#000000"
  canvas-white: "#ffffff"
  silver-whisper: "#cccccc"
  gradient-sunset: "#ff0169"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.05
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1.05
    letterSpacing: 0px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 121px
    lineHeight: 1.05
    letterSpacing: -0.02px
  display-md:
    fontFamily: "system-ui"
    fontSize: 224px
    lineHeight: 1.05
    letterSpacing: -0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 389px
    lineHeight: 1
    letterSpacing: -0.035px
spacing:
  cardRadius: 16px
  elementGap: 24px
  sectionGap: 64px
components:
  text-only-button-ghost:
    role: Interactive element for navigation or secondary actions, appearing as plain text that darkens on hover.
  filled-white-call-to-action:
    role: Primary action button, providing strong visual emphasis without heavy branding color.
  minimal-input-field:
    role: Form input elements for collecting user data, designed to be unobtrusive.
  hero-headline:
    role: Large, impactful text for hero sections, defining page presence.
  feature-card:
    role: Container for showcasing key features or content blocks.
---

## Overview

**North Star:** Vibrant typographic canvas.

Instagram's brand style is a high-contrast, playful expression embracing its custom typeface, Instagram Sans. The visual system revolves around vivid fuchsia and violet hues, juxtaposed with crisp black and white. Layouts are spacious, featuring strong typographic statements and graphic elements with subtle rounded corners, creating an energetic and modern feel without relying on complex shadows or textures. Color primarily functions as a bold brand identifier and a backdrop for clean, legible text.

### Do's

- Use 'Fuchsia Burst' (#f689ff) primarily as a background color or for large graphic fills to define sections.
- Apply 'Licorice Ink' (#1c1e21) for all body text and prominent headings on light canvases, ensuring high contrast.
- Utilize Instagram Sans for all textual content, adjusting letter-spacing according to size to maintain legibility and brand character (e.g., -0.035em for very large sizes).
- Maintain generous spacing, with section gaps typically at `64px` and element gaps at `24px` for readability and visual breathing room.
- Employ 'Violet Dream' (#385898) for interactive link text and subtle outlined interactive states, providing a consistent accent.
- Use a default border radius of `3px` for most components, but `16px` for cards to create distinct content blocks.
- Incorporate the 'Gradient Sunset' linear gradient for decorative brand elements and iconography where a full visual spectrum is desired.

### Don'ts

- Avoid using multiple chromatic colors for primary UI elements; reserve 'Fuchsia Burst' and 'Violet Dream' for specific brand or interactive accents.
- Do not introduce heavy shadows or complex elevation; the system relies on bold color blocks and typography for visual hierarchy.
- Refrain from using generic system fonts when Instagram Sans is available; the custom typeface is a core brand identity element.
- Do not deviate from the established letter-spacing values for Instagram Sans at various sizes; they are critical for its distinct appearance.
- Avoid tight padding or element spacing; the spacious density is a key characteristic of the design language.
- Do not use subtle, desaturated colors for backgrounds or primary text; the system thrives on high-contrast, vivid pairings.
- Do not apply large, inconsistent border radii; adhere to `3px` for most UI elements and `16px` for cards.

### Layout

The page exhibits a full-bleed layout alternating between large, horizontally split sections. The hero showcases a prominent, centered headline over a split background of 'Fuchsia Burst' and 'Violet Dream'. Subsequent sections utilize a maximum-width contained content area for text, always centered. Vertical rhythm is established through consistent `64px` section gaps. Content arrangement primarily consists of text blocks either left-aligned or centered within these contained areas, often juxtaposed with large graphic elements. The navigation is a minimal top bar.

### Imagery

The visual language focuses on typographic displays and illustrative vector graphics. Imagery is predominantly abstract, focusing on the deconstructed elements of the Instagram Sans typeface itself or the brand's iconic glyph. When photography is present, it's minimal and serves as a backdrop. There is heavy use of line art and vector fills in brand colors for icons and illustrative elements. The density is image-light, with visual space dominated by large typography and color blocks. The icons tend to be filled rather than outlined, maintaining a solid, confident presence.
