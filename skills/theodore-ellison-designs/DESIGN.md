---
version: alpha
name: Theodore Ellison Designs
description: Theodore Ellison Designs evokes a historical, handcrafted luxury. Its visual style combines the warmth of natural materials with a sparse, deliberate layout. Typography utilizes a bespoke font with subtle letter-spacing for headlines and body text, maintaining an airy, refined feel. A muted chromatic palette, anchored by deep, earthy tones, defines backgrounds and highlights, allowing glass and light to become the true focal points. Components are minimal, often border-only or filled with soft, desaturated colors, emphasizing texture and form over bold graphics.
colors:
  mahogany-wood: "#413128"
  desert-clay: "#d6926b"
  forest-moss: "#3c4531"
  ocean-slate: "#38506c"
  lavender-mist: "#afa5b4"
  charcoal-black: "#272729"
  almond-canvas: "#fdfcf2"
  stonewash-gray: "#cfcfcf"
  pure-white: "#ffffff"
  pale-sand: "#f2ede1"
  muted-text: "#777777"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 20px
  sectionGap: 180px
components:
  ghost-navigation-button:
    role: Primary navigation links and interactive elements within headers/footers.
  outlined-call-to-action-button:
    role: Prominent calls to action, drawing attention through contrast.
  filled-neutral-button:
    role: Secondary actions or less prominent interactive elements.
  section-divider-card:
    role: Modular content blocks that visually separate information.
  text-input-outlined:
    role: Form fields for user data entry.
---

## Overview

**North Star:** Warm earth-tones, artisan typography

Theodore Ellison Designs evokes a historical, handcrafted luxury. Its visual style combines the warmth of natural materials with a sparse, deliberate layout. Typography utilizes a bespoke font with subtle letter-spacing for headlines and body text, maintaining an airy, refined feel. A muted chromatic palette, anchored by deep, earthy tones, defines backgrounds and highlights, allowing glass and light to become the true focal points. Components are minimal, often border-only or filled with soft, desaturated colors, emphasizing texture and form over bold graphics.

### Do's

- Prioritize a maximalist approach to imagery, letting the visual assets command attention.
- Maintain zero border-radius on all interactive elements and content containers for a sharp, architectural feel.
- Use Almond Canvas (#fdfcf2) as the default background for interactive components to provide a soft contrast.
- Employ the ModernEra Mono font for all secondary and functional text elements, utilizing its tight -0.0070em letter-spacing.
- Structure page sections with distinct background colors like Desert Clay (#d6926b) and Pale Sand (#f2ede1) to create visual rhythm.
- Use Charcoal Black (#272729) for primary text and border outlines to maintain strong contrast and definition.
- Ensure generous top and bottom padding of 180px for major sections to create breathing room and gravitas.

### Don'ts

- Avoid using drop shadows for elevation; instead, use subtle background color changes or inset shadows for depth.
- Do not introduce rounded corners on any UI elements; the system explicitly uses sharp 0px radii.
- Refrain from using strong, vivid primary colors for backgrounds; the palette relies on muted, earthy tones.
- Do not deviate from the ModernEra and ModernEra Mono font families; there are no other approved typefaces.
- Avoid dense, clustered layouts; content should feel spacious with ample negative space around elements.
- Do not use generic system UI elements; components must reflect the custom, minimalist styling with specific colors and radii.
- Do not apply `normal` letter-spacing to ModernEra Mono font; it should always carry the defined negative tracking.

### Layout

The page primarily uses a contained layout with some full-bleed sections. The hero section can be full-bleed with a prominent visual that takes up the entire viewport, featuring centered branding. Subsequent sections alternate between full-width color blocks and content blocks limited by an implicit max-width, maintaining comfortable internal padding. Content often arranges in dual-column structures (text-left/image-right or vice versa) or centered stacks. Vertical rhythm is established through generous and consistent section gaps of 180px between major blocks, creating a spacious and unhurried browsing experience. The navigation is a minimal top bar, with prominent branding and subtle ghost buttons on the right.

### Imagery

Photography is paramount, often showcasing glasswork and interiors. Images tend to be full-bleed or large, emphasizing texture and light interaction as they would 'in situ'. There's a mix of detailed product shots and atmospheric context shots that capture mood and environment. Photography for products is direct and bright, highlighting the material. Illustrations are minimalist line-art for logos and icons, providing a clean, geometric contrast to the organic nature of the glass. Icons (visible in the header logo) are outlined with a fine stroke weight, maintaining a delicate, architectural feel. Imagery primarily serves to showcase the product and evoke a sense of crafted quality, occupying significant visual space.
