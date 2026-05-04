---
version: alpha
name: Rains INT
description: Rains INT uses a refined monochrome aesthetic focused on clean surfaces and confident typography. The visual language emphasizes product and fashion photography, with UI elements acting as subtle guides. A primary black serves text and button backgrounds, contrasted with a nearly white background, while a unique yellow is reserved for high-impact headlines, creating a striking yet minimal brand statement. Components are lightweight with generous soft radii, allowing imagery and bold type to dominate the visual hierarchy.
colors:
  canvas-fog: "#efefef"
  midnight-ink: "#10100f"
  pure-arctic: "#ffffff"
  deep-graphite: "#26292a"
  bright-solar: "#fffb85"
  subtle-gray: "#b3b3b2"
  dark-button: "#40403f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.02
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
  display-sm:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
spacing:
  buttonRadius: 9999px
  elementGap: 16px
  sectionGap: 40px
components:
  filled-primary-button:
    role: Primary calls to action, prominent interactive elements.
  ghost-secondary-button:
    role: Secondary actions that need to de-emphasize visual weight.
  bare-navigation-link:
    role: Top-level navigation items and in-text links.
  transparent-dark-button:
    role: Alternative dark button with transparent background for subtle interaction.
---

## Overview

**North Star:** Monochromatic Canvas, Bold Interruption

Rains INT uses a refined monochrome aesthetic focused on clean surfaces and confident typography. The visual language emphasizes product and fashion photography, with UI elements acting as subtle guides. A primary black serves text and button backgrounds, contrasted with a nearly white background, while a unique yellow is reserved for high-impact headlines, creating a striking yet minimal brand statement. Components are lightweight with generous soft radii, allowing imagery and bold type to dominate the visual hierarchy.

### Do's

- Use Midnight Ink (#10100f) as the primary text color on Canvas Fog (#efefef) backgrounds for optimal contrast (contrast ratio 19.0:1 AAA).
- Apply Deep Graphite (#26292a) for primary action button backgrounds, ensuring text is Pure Arctic (#ffffff).
- Reserve Bright Solar (#fffb85) exclusively for high-impact display headlines to maintain its unique visual weight.
- Utilize 9999px border-radius generously on interactive elements like buttons and chips to create a soft, approachable feel.
- Maintain a comfortable density with a consistent element gap of 16px between most UI components.
- Use EuropaGroNr2SH at large sizes and higher weights (600, 700) for headlines and brand text to emphasize a bold, striking impression.
- Ensure hairline borders across the design use Canvas Fog (#efefef) for subtle structural definition.

### Don'ts

- Avoid using Bright Solar (#fffb85) for body text or small labels; its high contrast and light nature make it unsuitable for readability at small sizes.
- Do not introduce additional saturated colors; maintain the brand's monochromatic palette with Bright Solar as the only chromatic accent.
- Do not use sharp 0px border radii on buttons or interactive elements; the 9999px pill shape is a core brand identifier.
- Avoid heavy drop shadows or strong elevation; the design emphasizes flat surfaces with minimal depth.
- Do not deviate from the EuropaGroNr2SB and EuropaGroNr2SH font families; font consistency is crucial to the brand's aesthetic.
- Never use generic blue as a link color; standard links should default to Midnight Ink (#10100f) or Subtle Gray (#b3b3b2).

### Layout

The page primarily uses a full-bleed structure for hero sections, seamlessly integrating large-scale imagery and typography. Subsequent content sections alternate between full-width blocks and sections with a subtle max-width constraint for text-heavy areas. The section rhythm is primarily driven by consistent vertical spacing (40px). Content is arranged in a fluid manner, ranging from superimposed text over full-bleed images to simple adjacent blocks of text and visuals without a rigid grid. Navigation is a compact sticky header with text links, maintaining a minimal presence at the top.

### Imagery

The imagery features professional fashion photography with a focus on product and lifestyle, often presented in large-scale, sometimes full-bleed layouts. Models are styled in the brand's apparel, creating a contemporary, editorial feel. Products are frequently showcased in context, against minimalist backgrounds or urban settings. The photos have a slightly desaturated or muted color palette overall, allowing the UI elements and specific product colors to stand out. Icons are minimal, utilizing either the Midnight Ink or Pure Arctic tones for outlines or solid fills, maintaining a clean, utilitarian aesthetic.
