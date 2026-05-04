---
version: alpha
name: BlueYard Capital
description: BlueYard employs a subdued, almost ethereal visual language, combining soft, desaturated background gradients with sharp, low-contrast text. This creates a contemplative distance, positioning content as abstract concepts rather than immediate tasks. The color palette is driven by nuanced, muted accents primarily used for content categorization, lending a subtle, academic feeling to information blocks. Typography is spare and precise, reinforcing an impression of rigor and thoughtfulness, rather than bold proclamations.
colors:
  ink: "#090b11"
  graphite: "#3a3a3e"
  canvas-white: "#ffffff"
  pale-mist: "#b5b0b0"
  sunken-gold: "#ffcf9e"
  cloud-indigo: "#babfff"
  amethyst-haze: "#e3a2ef"
  sky-veil: "#bfe0f7"
  ocean-whisper: "#8ceae4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.36px
  body:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.5
    letterSpacing: -0.72px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -1.44px
  display:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1
    letterSpacing: -1.62px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 5px
  sectionGap: 60px
components:
  primary-navigation-button:
    role: The main menu toggle.
  text-only-button-ghost:
    role: Used for secondary actions or navigation links with minimal visual weight.
  content-card-default:
    role: A neutral container for various content blocks.
  content-card-canvas:
    role: A base card for information presentation.
  category-tag-sunken-gold:
    role: Categorization tag for content blocks.
  category-tag-amethyst-haze:
    role: Categorization tag for content blocks.
---

## Overview

**North Star:** Soft-focus intellectual ether.

BlueYard employs a subdued, almost ethereal visual language, combining soft, desaturated background gradients with sharp, low-contrast text. This creates a contemplative distance, positioning content as abstract concepts rather than immediate tasks. The color palette is driven by nuanced, muted accents primarily used for content categorization, lending a subtle, academic feeling to information blocks. Typography is spare and precise, reinforcing an impression of rigor and thoughtfulness, rather than bold proclamations.

### Do's

- Maintain zero border-radius for all interface elements and content cards to reinforce the crisp, structured appearance.
- Utilize Instrument Sans exclusively across all text elements, varying size and weight as defined in the typography section, to uphold typographic consistency.
- Employ the muted accent colors (#ffcf9, #babfff, #e3a2ef, #bfe0f7, #8ceae4) only for thematic content categorization, such as card backgrounds, avoiding their use for primary active states or calls to action.
- Prioritize transparent or white backgrounds for card elements, with `12px` padding where applicable, to maintain a light, airy feel.
- Ensure all primary headings use Instrument Sans at `48px` or `54px` with negative letter-spacing (`-1.44px` or `-1.62px`) for a precise, refined look.
- Structure page sections with a `60px` vertical gap, opting for seamless transitions or subtle background shifts instead of heavy dividers.
- Apply `:last-child { margin-bottom: 0 }` to avoid excessive trailing space within content blocks and carousels, promoting a tidy finish.

### Don'ts

- Do not introduce rounded corners; all elements must maintain `0px` border-radius.
- Avoid bold or highly saturated colors for calls to action or primary interactive states; maintain a neutral or ghost aesthetic for interactive elements.
- Refrain from using drop shadows or heavy elevation styles; surfaces should remain flat or rely on subtle background gradients for depth.
- Do not deviate from the Instrument Sans typeface or introduce additional font families.
- Do not use explicit borders on cards or primary content blocks unless it's a specific categorical indicator with a muted accent color.
- Avoid large, impactful hero images; prioritize abstract gradients or large typography in hero sections.
- Do not use letter-spacing: normal for headlines or display text; actively use negative letter-spacing for larger type sizes.

### Layout

The page primarily uses a full-bleed layout, stretching content edges to the viewport, particularly for the hero and section backgrounds. Content within these full-bleed sections is centrally aligned, featuring a large, centered headline over an abstract visual. Sections have a consistent vertical rhythm established by `60px` gaps. Content arrangements often involve a centered stack of information, with implicit grids for feature or portfolio items. Navigation is a minimal top-right hamburger icon, suggesting content focus over complex site structure.

### Imagery

Imagery is minimal and abstract, dominated by sophisticated 3D renders of spherical, ethereal objects with subtle glittering textures set against soft, gradient backgrounds. Photography is absent. Icons are typically simple, monochromatic, and have a thin stroke weight. The primary role of visuals is decorative atmosphere and conceptual framing rather than direct explanation or product demonstration. The density is image-light, with visual elements serving as large, soft focal points rather than numerous small details.
