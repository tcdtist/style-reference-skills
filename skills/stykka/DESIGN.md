---
version: alpha
name: Stykka
description: Stykka's visual system evokes a sense of understated craftsmanship and natural permanence. It combines a restrained, almost monochromatic palette with a strong typographic presence and material-focused imagery. The design is airy and structured, using subtle layering and natural light to highlight content rather than bold colors or heavy UI elements. Typography varies between a clean sans-serif for main content and a distinctive monospaced font for key statements, creating an intentional rhythm.
colors:
  absolute-zero: "#000000"
  canvas-white: "#ffffff"
  ash-gray: "#f6f6f6"
  medium-gray: "#2e2e20"
  light-gray: "#c9c9c9"
  translucent-gray-lite: "#00000008"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: 0.23px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.294px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.25
    letterSpacing: -0.803px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.888px
  display:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.05
    letterSpacing: -1.2px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 1
    letterSpacing: -1.932px
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 10px
  sectionGap: 30px
components:
  ghost-primary-button:
    role: Call to action button for primary user actions, designed to integrate subtly into the layout.
  information-card:
    role: Container for showcasing features, testimonials, or short content blocks.
  navigation-link:
    role: Standard navigation item in header and footer.
---

## Overview

**North Star:** Architectural blueprint on white marble

Stykka's visual system evokes a sense of understated craftsmanship and natural permanence. It combines a restrained, almost monochromatic palette with a strong typographic presence and material-focused imagery. The design is airy and structured, using subtle layering and natural light to highlight content rather than bold colors or heavy UI elements. Typography varies between a clean sans-serif for main content and a distinctive monospaced font for key statements, creating an intentional rhythm.

### Do's

- Use Canvas White (#ffffff) as the primary background for all page sections unless an image or specific brand block dictates otherwise.
- Apply Absolute Zero (#000000) for all primary text content and main headings to maintain stark contrast and strong legibility.
- Ensure large headlines, particularly in hero sections, use Azeret Mono 400 with a wide letter spacing of -0.010em and a line height of 1.0.
- Group related UI elements with an element gap of 10px to maintain a slightly compact but clear arrangement.
- Implement a border-radius of 16px for all card-like containers, and 8px for buttons and interactive navigation elements.
- Use Ash Gray (#f6f6f6) sparingly for subtle background distinctions or low-prominence UI elements, such as card backgrounds that are not meant to pop.
- For ghost buttons, define text and border in Absolute Zero (#000000) with a transparent background, ensuring a subtle call to action.

### Don'ts

- Avoid using highly saturated colors for backgrounds or large UI areas; maintain a largely monochromatic base palette.
- Do not introduce strong box shadows or heavy elevation effects; the design relies on subtle background shifts and natural light.
- Do not deviate from the specified negative letter spacing for large type; it is a signature element of the typographic style.
- Do not use generic, unstyled links. All links should explicitly reference Absolute Zero for text, with optional border-bottom interaction states.
- Avoid arbitrary custom padding values for cards and buttons; stick to the defined 33px vertical / 24px horizontal for cards and 10px vertical / 36px horizontal for buttons.
- Do not introduce decorative gradients or complex overlays; keep surfaces and backgrounds clean and simple.
- Do not use system sans-serif for headlines or main body text; it is reserved for captions and minor functional text.

### Layout

The page uses a maximum content width, centered horizontally, alternating with full-bleed hero sections. The initial hero features a full-width background image with strong visual depth, overlaid with centered, large-scale typography. Subsequent sections follow a consistent vertical rhythm with clear spacing between content blocks. Content is primarily arranged in multi-column grids or alternating text-and-image layouts, often with text on the left and visuals on the right, or a 4-column card grid. The navigation is a sticky top bar with minimal links on the far left and right. Density is balanced, with generous white space around elements and sections.

### Imagery

The visual language is dominated by high-quality photography of wooden architectural spaces and kitchen interiors. Images are typically full-bleed or large blocks, featuring natural light and honest materiality. Product photography uses tight crops focusing on the crafted details of the kitchen elements. There's an absence of abstract graphics or illustrations, emphasizing real-world context and tangible quality. Icons are minimal, subtle, and monochromatic, primarily used for navigation or small functional elements. The density is image-heavy, serving as primary content rather than mere decoration.
