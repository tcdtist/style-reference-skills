---
version: alpha
name: Ayo
description: Lava's design system evokes a 'midnight command center behind frosted glass' aesthetic with its deeply saturated dark theme and vibrant, multi-hued gradients. Typography is bold and compact, contrasting against the dark surfaces, and often utilizes fine weights to convey a sophisticated tone. Components are sharp-edged yet rounded for a tactile feel, featuring prominent glow effects and a scarcity of true white, reserving it for core text elements.
colors:
  midnight-aura: "#000000"
  ash-slate: "#1f2023"
  carbon-gray: "#333333"
  storm-gray: "#383b40"
  white-frost: "#ffffff"
  vivid-pink: "#491363"
  neon-green: "#04fd8f"
  spectrum-gradient: "#0072ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.43
    letterSpacing: 0.286px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
    letterSpacing: 0.286px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 53px
    lineHeight: 1.05
    letterSpacing: 0.286px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: 0.286px
spacing:
  cardRadius: 20px
  buttonRadius: 200px
  elementGap: 5px
  sectionGap: 27px
components:
  primary-action-button:
    role: Main call-to-action button for initiating key user flows.
  standard-card:
    role: Container for content sections, often featuring media.
  floating-card-shadowed:
    role: Container for content, elevated with a pronounced shadow.
  compact-card:
    role: Small content blocks, typically without explicit top/side padding.
  header-navigation-item:
    role: Interactive elements within the main navigation bar.
---

## Overview

**North Star:** Midnight gradient glow

Lava's design system evokes a 'midnight command center behind frosted glass' aesthetic with its deeply saturated dark theme and vibrant, multi-hued gradients. Typography is bold and compact, contrasting against the dark surfaces, and often utilizes fine weights to convey a sophisticated tone. Components are sharp-edged yet rounded for a tactile feel, featuring prominent glow effects and a scarcity of true white, reserving it for core text elements.

### Do's

- Prioritize Midnight Aura (#000000) for all significant backgrounds and surface fills to maintain the dark theme.
- Use White Frost (#ffffff) exclusively for primary text and headings for maximum contrast against dark surfaces.
- Apply Spectrum Gradient (linear-gradient(45deg, #0072ff, #00d2e8 17%, #04fd8f 34%, #70fd6c 51%, #dae11 68%, #ff9346 85%, #ff62c6)) as a border for interactive elements and highlights to provide a signature brand cue.
- Maintain a 200px border-radius for all primary buttons to achieve a highly rounded, 'pill' shape.
- Utilize Neue Haas Unica with a 0.2860em letter spacing for most headings and substantial text blocks to enforce conciseness and character.
- Employ the 14px 14px 40px 0px shadow for cards that require significant visual elevation, with an opacity of 50-60%.
- Ensure generous padding on cards, specifically using 37px (top/right/left) and 44px (bottom) when content needs breathing room within the card.

### Don'ts

- Avoid using bright, full-saturation colors for large background areas; reserve them for accents, highlights, and gradients.
- Do not deviate from the predominantly dark theme; avoid light backgrounds except as direct content within media.
- Do not use generic square or slightly rounded corners for buttons; all buttons must use the 200px 'pill' radius.
- Refrain from using shadows on every element; reserve them only for cards needing explicit elevation in a dark environment.
- Do not use letter-spacing: normal for headlines where tight tracking is preferred; consistently apply the 0.2860em value for Neue Haas Unica where specified.
- Avoid using decorative fonts like Galada for body text or functional interface elements; it is reserved for specific brand elements.
- Do not introduce new border-radius values; stick to the established system of 20px for cards, 15px for images, and 200px for buttons.

### Layout

The page primarily uses a full-bleed black background but contains content within a responsive, likely max-width centered layout rather than edge-to-edge. The hero section is full-bleed black with a centered headline and circular hero imagery. Sections have a consistent vertical rhythm, with clear spacing between content blocks. Content arrangement often features centered stacks for headlines and calls to action, followed by multi-column grids (like the 3-column card grid for features). Navigation is a sticky top bar, minimally present with white icons against the full-bleed gradient. The layout manages to feel both spacious and information-dense, using the dark canvas to make content pop.

### Imagery

The visual language for imagery is characterized by tightly cropped, often circular or pill-shaped, photographs of diverse individuals or vibrant abstract graphics, which are typically contained within cards or act as focal points. Photography is dynamic and often involves high-contrast subjects. Product screenshots are contained within device outlines, which themselves often feature glowing gradient borders. Icons are minimal, outlined, or filled, and primarily monochrome or utilize the brand's accent colors. Imagery serves both decorative atmosphere and explicit product showcase, with a relatively high density of visual content that balances text-dominant sections.
