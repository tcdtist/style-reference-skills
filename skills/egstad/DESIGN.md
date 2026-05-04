---
version: alpha
name: Egstad
description: Egstad's design system embraces a bold, unadorned aesthetic with stark visual contrasts. A muted, warm off-white background serves as the canvas for heavy, densely tracked sans-serif typography, asserting presence through scale and weight rather than color. Interactive elements use a tactile, almost skeumorphic toggle-like appearance with rounded full-bleed radii, creating a sense of mechanical precision against the otherwise flat plane. The overall impression is one of grounded, deliberate clarity, using minimal color to focus attention on structure and text.
colors:
  canvas-parchment: "#e2e0d9"
  inkwell-black: "#252422"
  deepest-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.34
    letterSpacing: 0.24px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 59px
    lineHeight: 1.33
  display:
    fontFamily: "system-ui"
    fontSize: 399px
    lineHeight: 0.97
    letterSpacing: -22px
spacing:
  buttonRadius: 1440px
  elementGap: 16px
  sectionGap: 22px
components:
  navigation-tab-active:
    role: Primary navigation item, active state
  navigation-tab-inactive:
    role: Primary navigation item, inactive state
  navigation-link-outlined:
    role: Small, outlined navigation link
  large-typography-headline:
    role: Main heading text on hero sections
  body-text-section:
    role: Paragraphs of body content
---

## Overview

**North Star:** Type-first Brutalist

Egstad's design system embraces a bold, unadorned aesthetic with stark visual contrasts. A muted, warm off-white background serves as the canvas for heavy, densely tracked sans-serif typography, asserting presence through scale and weight rather than color. Interactive elements use a tactile, almost skeumorphic toggle-like appearance with rounded full-bleed radii, creating a sense of mechanical precision against the otherwise flat plane. The overall impression is one of grounded, deliberate clarity, using minimal color to focus attention on structure and text.

### Do's

- Prioritize text as the primary visual element, using large scale and distinct typefaces to convey meaning.
- Maintain high contrast between text (Inkwell Black) and background (Canvas Parchment) for all content.
- Use 1440px border radius consistently for all interactive elements and navigation items to create a 'pill' shape.
- Apply -0.055em letter spacing to display text (EG Metaphor 399px) to enhance its compactness and visual weight.
- Employ the Canvas Parchment background as the dominant canvas, allowing Inkwell Black typography and components to stand out.
- Utilize 4px solid Inkwell Black lines for expressive underlines or dividers, particularly under large headlines.

### Don'ts

- Avoid decorative gradients or shadows; the aesthetic relies on flat, high-contrast forms.
- Do not introduce additional color; the palette is strictly monochrome with a warm neutral base.
- Do not vary from the precise letter spacing applied to display and specialized navigation text (S85), as it is integral to their identity.
- Avoid complex layouts or highly nested elements; maintain a clean, open composition.
- Do not use Times New Roman for display elements; reserve it for secondary content where a classic feel is desired.

### Layout

The site employs a max-width contained layout, with content usually centered. The hero section features extremely large, full-width typography ('EGSTAD') which dominates the screen, often overlapping with the circular portrait. Sections maintain a consistent vertical rhythm, primarily defined by the spacing between large text blocks and smaller content groupings. Navigation consists of a static top bar with interactive 'pill' shaped buttons, appearing like a physical tab interface, and a secondary minimalist footer navigation. The overall density is spacious, emphasizing individual elements rather than overwhelming the user with information.

### Imagery

This site features very minimal imagery. When present, it appears as a singular, dominant, circular cropped portrait of a person, positioned in a way that visually interacts with text. There are no other visual elements like photography, illustrations, or product screenshots. The focus is entirely on typography and UI.
