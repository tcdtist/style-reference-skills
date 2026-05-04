---
version: alpha
name: Flying Papers
description: Flying Papers uses a vibrant, playful visual language with high-contrast color pairings and bold, expressive typography. The design emphasizes chunky, outlined elements and a distinct personality, favoring blocky shapes and thick borders over subtle gradients or shadows. Color is used to define graphic blocks and highlight key information, rather than for deep hierarchy or functional states. The overall impression is energetic and almost cartoonish.
colors:
  grape-soda: "#8584bd"
  lemon-drop: "#f4ed36"
  warm-dough: "#f9cc73"
  deep-plum: "#61609a"
  rose-blush: "#f8c1ba"
  sage-clay: "#b5c995"
  forest-floor: "#375027"
  orchid-bloom: "#ac4f98"
  crimson-pop: "#c94245"
  licorice-stick: "#000000"
  whipped-cream: "#f9f5f2"
  deep-charcoal: "#1a1a1a"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 0.8
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1
    letterSpacing: 0.36px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1
    letterSpacing: 0.4px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 0.9
    letterSpacing: 0.6px
  display-md:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 0.8
    letterSpacing: 2px
  display:
    fontFamily: "system-ui"
    fontSize: 341px
    lineHeight: 0.8
    letterSpacing: 6.82px
spacing:
  cardRadius: 6px
  buttonRadius: 0px
  elementGap: 17px
  sectionGap: 40px
components:
  primary-outlined-button:
    role: Main call-to-action button.
  secondary-outlined-button-neutral:
    role: Secondary action or ghost button.
  text-link-light:
    role: Interactive text link on dark backgrounds.
  text-link-dark:
    role: Interactive text link on light backgrounds.
  neutral-card:
    role: Basic content container.
  deep-plum-card:
    role: Prominent content card with brand color background.
  orchid-bloom-card:
    role: Accent content card to provide visual variation.
  crimson-pop-card:
    role: Highlight content card for emphasis.
---

## Overview

**North Star:** Punchy Pulp Comic

Flying Papers uses a vibrant, playful visual language with high-contrast color pairings and bold, expressive typography. The design emphasizes chunky, outlined elements and a distinct personality, favoring blocky shapes and thick borders over subtle gradients or shadows. Color is used to define graphic blocks and highlight key information, rather than for deep hierarchy or functional states. The overall impression is energetic and almost cartoonish.

### Do's

- Use Grape Soda (#8584bd) as the default background for full-page sections to uphold the brand's energetic foundation.
- Apply Lemon Drop (#f4ed36) exclusively for high-impact headlines and outlined calls-to-action, balancing its vividness with the background.
- Utilize ObviouslyVariable Bold for all headlines, employing letter-spacing 0.02em and scaling sizes to achieve visual dominance.
- Always apply a 3px solid border to interactive elements, preferring Lemon Drop (#f4ed36) for primary actions and Licorice Stick (#000000) for secondary options.
- Ensure all card elements have a border-radius of 6px, providing a subtle softness against otherwise sharp edges.
- Employ Licorice Stick (#000000) as the primary text color on light backgrounds and Lemon Drop (#f4ed36) or Whipped Cream (#f9f5f2) on dark backgrounds for accessibility.
- Maintain a default element gap of 17px and card padding of 17px for consistent visual breathing room within components.

### Don'ts

- Do not use generic system shadows or subtle gradients; the design relies on flat blocks and sharp contrasts for its personality.
- Avoid solid filled buttons for primary actions; prioritize the outlined button style with a 3px border in brand colors.
- Do not introduce new typefaces; restrict typography to ObviouslyVariable, DegularVariable, and bergen_monoregular as specified.
- Do not use neutral colors as primary accents; color should always convey energy and brand personality.
- Do not vary card radii; all cards should consistently use a 6px border-radius.
- Avoid dense, information-heavy layouts; sections should breathe with ample vertical and horizontal spacing.
- Do not use subtle color variations for hierarchy; use distinct chromatic colors or strong achromatic contrast for clear differentiation.

### Layout

The page employs a full-bleed layout for its main sections, with content often centered or using large, blocky elements. The hero section is dominated by a large, centered headline and a graphic element against a full-width brand background. Subsequent sections follow a consistent vertical rhythm, often featuring alternating background colors. Content is typically arranged in clear, stacked blocks or occasionally in two-column layouts. The presence of card variants suggests a grid-like arrangement for some content blocks, breaking up the full-width flow. Navigation is generally a minimal top bar, suggesting an informal approach, and the footer is clearly defined with a distinct background.

### Imagery

The site's imagery focuses on an almost cartoonish, often abstract, and slightly mischievous aesthetic. This is exemplified by the peering character on the hero screen. There's a strong preference for icons over photography and a visual language that feels illustrative and graphic, almost like a bold sticker or comic book art. Graphics are typically filled, not outlined, and utilize the brand's vivid color palette. They serve a decorative and brand-reinforcing role rather than providing literal product showcases or realistic context. Imagery density is moderate, with key graphics acting as focal points.
