---
version: alpha
name: Sigmaphoto
description: Sigma presents a sophisticated, high-contrast aesthetic emphasizing product photography against a mostly achromatic interface. Typography is reserved yet impactful, combining custom sans-serif and serif fonts for a classic yet modern feel. Visual hierarchy is achieved through stark black and white contrasts, with a single vivid blue for primary interactive elements, reserving color for action and brand emphasis. Components are sharp-edged and minimalist, reflecting precision and technical excellence.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  charcoal-gray: "#333333"
  cadet-blue: "#0048ff"
  cool-gray: "#707070"
  silver-mist: "#999999"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.2
    letterSpacing: -0.31px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
    letterSpacing: 0.005px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: 0.005px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: 0.001px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 1.25
    letterSpacing: 0.002px
spacing:
  elementGap: 16px
  sectionGap: 24px
components:
  ghost-button:
    role: Secondary action or discrete navigation trigger.
  solid-button-dark:
    role: Standard action button for primary or important actions.
  blue-circular-button:
    role: Distinctive interactive element, possibly for a specific function like an accessibility toggle.
  muted-ghost-button:
    role: An action button with lower visual emphasis, for less critical functions.
  standard-input-field:
    role: Form input element for text entry.
  header-navigation-link:
    role: Primary navigation item in the header.
---

## Overview

**North Star:** Precision engineered, high-contrast monochrome

Sigma presents a sophisticated, high-contrast aesthetic emphasizing product photography against a mostly achromatic interface. Typography is reserved yet impactful, combining custom sans-serif and serif fonts for a classic yet modern feel. Visual hierarchy is achieved through stark black and white contrasts, with a single vivid blue for primary interactive elements, reserving color for action and brand emphasis. Components are sharp-edged and minimalist, reflecting precision and technical excellence.

### Do's

- Prioritize high visual contrast between text (Ink Black #000000, Charcoal Gray #333333) and backgrounds (Canvas White #ffffff) for all informational elements.
- Use Cadet Blue (#0048ff) exclusively for primary interactive elements, ensuring it stands out against the achromatic palette.
- Maintain a border-radius of 0px for most buttons and visual containers to reinforce a precise, engineered aesthetic.
- Apply Sigma Serif head for all primary marketing headlines (sizes 48px, 88px) with their specified letter-spacing to convey impact.
- Use 1px borders sparingly for subtle separation, favoring hard edges and direct contrast over extensive use of outlines.
- Employ consistent 16px element gaps for spacing between distinct inline items, ensuring a comfortable data density.
- Ensure all input fields have a 1px border radius and a Cool Gray (#707070) border when not focused, signaling a slightly framed but clean input area.

### Don'ts

- Avoid using multiple chromatic colors; limit color accents strictly to Cadet Blue (#0048ff) for critical interaction.
- Do not use soft, rounded corners for primary UI components or buttons, as the system favors sharp, defined edges.
- Do not introduce extensive drop shadows or complex elevation schemes; rely on direct background changes and contrast for visual layering.
- Do not use highly decorative or script fonts; stick to the defined Sigma Sans and Sigma Serif families for all text.
- Avoid large, uncontained images; always ensure product photography is precisely cropped and presented against clear backgrounds.
- Do not create excessive visual noise with gradients or complex background patterns; keep surfaces clean and solid.
- Do not use overly large padding or element gaps that would reduce the sense of precision and density.

### Layout

The page primarily employs a max-width contained layout for content, but hero sections frequently use a full-bleed dark background with centered product imagery. There's a consistent vertical rhythm with sections clearly delineated by background color changes (white to dark). Content is often arranged in centered stacks for headlines and body text, emphasizing product information. Feature sections may use implicit grids for product display. A sticky top navigation bar remains present.

### Imagery

Imagery primarily features product photography: tight crops of lenses and cameras, often against dark, stark, or reflective monochrome backgrounds. The products are presented in high detail, well-lit, and isolated, emphasizing their form and precision. No lifestyle photography is used. Icons are monochromatic, either Ink Black (#000000) or Cool Gray (#707070), with a clean, outlined style. Imagery serves to showcase products as the central focus.
