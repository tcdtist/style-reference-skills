---
version: alpha
name: Hugo & Marie
description: Hugo & Marie operates with a refined, understated aesthetic characterized by stark monochrome typography and a deliberately sparse, almost gallery-like layout. Clean, unadorned surfaces provide a neutral canvas for striking visual content, while subtle hints of interactivity appear as ghost buttons and hairline borders. The system prioritizes clarity and a sense of curated space, allowing the visual work to take center stage.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  graphite: "#0a0a0a"
  ash-gray: "#b3b3b3"
  silver-mist: "#cccccc"
  input-border-gray: "#767676"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 17
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 23
    letterSpacing: 0.128px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 23
    letterSpacing: 0.16px
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 22
    letterSpacing: 0.44px
  display:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 95
    letterSpacing: -10px
spacing:
  elementGap: 5px
  sectionGap: 90px
components:
  ghost-text-button:
    role: Interactive element, navigation
  pill-badge-light-text:
    role: Categorization, status indicator
  pill-badge-gray-border:
    role: Categorization, status indicator
  text-input-dark:
    role: Data entry
  text-input-light:
    role: Data entry
---

## Overview

**North Star:** Gallery Grid on Canvas

Hugo & Marie operates with a refined, understated aesthetic characterized by stark monochrome typography and a deliberately sparse, almost gallery-like layout. Clean, unadorned surfaces provide a neutral canvas for striking visual content, while subtle hints of interactivity appear as ghost buttons and hairline borders. The system prioritizes clarity and a sense of curated space, allowing the visual work to take center stage.

### Do's

- Use `Canvas White` (#ffffff) for all main page and card backgrounds to maintain a clean, expansive feel.
- Employ `saol-display` weight 100 at 100px with -10px letter-spacing for primary headlines to create a striking, elegant visual statement.
- Structure content with ample white space, using `sectionGap` of 90px between major content blocks.
- Maintain a monochromatic palette with only `Ink Black`, `Graphite`, `Ash Gray`, `Silver Mist`, and `Input Border Gray` for UI elements.
- Apply `9999px` border-radius to all badges for a consistent pill shape.
- Prioritize text-based interactions; button backgrounds are typically transparent, with text and borders defining interactivity.
- Ensure input fields use explicit borders like `Input Border Gray` and `Canvas White` to define their boundaries distinctly from the minimalistic buttons.

### Don'ts

- Avoid using bright or saturated colors for backgrounds, primary text, or interactive elements; reserve accent for content visuals.
- Do not introduce heavy shadows or gradients on UI components, favoring flat surfaces and subtle borders.
- Refrain from using bold or heavy weights for `soehne` when styling headings; its primary use should be for body and navigation.
- Do not add additional padding to ghost buttons; they should remain as minimalist text links with an implied interactive zone.
- Avoid decorative iconography that is colorful or heavily outlined; icons should be monochromatic, using `Ink Black` or `Ash Gray`.
- Do not deviate from the defined `9999px` radius for badges; all interactive tags or status indicators should adopt this pill shape.

### Layout

The page exhibits a max-width contained model post-hero, with content sections having consistent vertical spacing. The hero features a full-bleed background image with a centered, large `saol-display` headline in `Canvas White` text. Subsequent sections primarily utilize a two-column layout, often with text on one side and an image or content block on the other, or a centered stacked arrangement. A consistent grid of four columns is used for displaying image thumbnails. The density is spacious, with significant padding and margin creating ample breathing room around elements. Navigation is a simple top bar, typically fixed or ghosted over the hero, with minimalist text links.

### Imagery

This site predominantly features striking, high-fidelity photography of human subjects or abstract, art-focused compositions. Imagery is often full-bleed or large-scale, acting as a dramatic backdrop or hero element. When not full-bleed, images are typically presented in a clean grid layout with sharp, unrounded edges. The treatment emphasizes the visual impact of the content, often using monochrome or desaturated palettes, with occasional vibrant but confined bursts of color (e.g., iridescent skin tones, abstract art pieces). Icons are outlined and monochromatic, acting as minimal UI elements rather than detailed graphics. The overall role of imagery is decorative atmosphere and product showcase, leaning heavily into a gallery-like presentation.
