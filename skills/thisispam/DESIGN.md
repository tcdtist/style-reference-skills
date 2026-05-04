---
version: alpha
name: Thisispam
description: Thisispam uses a high-contrast, minimalist visual style featuring stark black and white elements set against a dominant, muted yellow canvas. Typography is compact and precise, often acting as a key visual element with its sharp weight and tightly tracked presentation. The design leverages strong lines and flat surfaces, with color appearing primarily as this signature background hue or as a hyper-minimal accent point, creating a sense of understated assertiveness and directness rather than decorative flourish.
colors:
  canvas-yellow: "#fff3b8"
  midnight-black: "#000000"
  paper-white: "#ffffff"
  input-pale-yellow: "#f1e4a4"
  accent-red: "#ff0000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.43
  body-lg:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 0.9
spacing:
  elementGap: 12px
  sectionGap: 24px
components:
  ghost-navigation-button:
    role: Primary site navigation and contextual actions where visual weight should be minimal.
  primary-canvas-button:
    role: Secondary action buttons, often appearing on the Canvas Yellow background.
  inverse-ghost-button:
    role: Buttons on dark backgrounds requiring a reversed text and outline color.
  input-field:
    role: Interactive text input fields.
  feature-card:
    role: Displaying project previews or feature blocks.
---

## Overview

**North Star:** Graphic Blueprint on Muted Yellow Canvas

Thisispam uses a high-contrast, minimalist visual style featuring stark black and white elements set against a dominant, muted yellow canvas. Typography is compact and precise, often acting as a key visual element with its sharp weight and tightly tracked presentation. The design leverages strong lines and flat surfaces, with color appearing primarily as this signature background hue or as a hyper-minimal accent point, creating a sense of understated assertiveness and directness rather than decorative flourish.

### Do's

- Use Midnight Black (#000000) for all primary body text and headings for maximum contrast.
- Implement Canvas Yellow (#fff3b8) as the dominant background color for most page sections, establishing the brand's unique atmosphere.
- Apply a 0px border-radius to almost all elements, reinforcing the design's sharp and unadorned aesthetic.
- Ensure generous vertical spacing between sections, primarily '24px', to provide breathing room and modularity to the layout.
- Utilize OT Neue Montreal for all headlines and navigation, leveraging its tight line height (0.9 to 1.2) for a compact and assertive appearance.
- Reserve Accent Red (#ff0000) for hyper-minimal decorative elements or specific active states, never for large blocks of color.
- Use ABC Diatype for all body copy and secondary text elements, maintaining clear legibility at smaller sizes with its default line heights.

### Don'ts

- Avoid using rounded corners; the system's identity is built on sharp, angular forms.
- Do not introduce gradients unless explicitly defined; surfaces are flat and monochrome.
- Refrain from using shadows or elevation; elements should live on a single plane or delineate through hard borders and color changes.
- Do not use overly decorative illustrations or imagery; visuals should be clean, product-focused, or abstract.
- Avoid mixing saturated colors; the palette is tightly controlled to Canvas Yellow, Midnight Black, Paper White, and a single Red accent.
- Do not use wide letter-spacing; typography is always compact and often normal or slightly negative.
- Do not vary line-height extensively; the established values for OT Neue Montreal and ABC Diatype are crucial for the system's precise feel.

### Layout

The page primarily uses a max-width contained layout, though some hero sections, notably the initial brand video, can be full-bleed. The hero pattern features large, centered, stark typography over a dynamic background. Sections alternate between Canvas Yellow and Midnight Black backgrounds, creating strong visual segmentation. Content arrangement frequently uses a centered stacked approach for headlines and calls to action, or a two-column grid for showcasing projects (image/mockup on one side, text/label on the other). Vertical rhythm is established through consistent '24px' section gaps. Navigation is a minimal top bar with discreet links and a hamburger icon, suggesting content focus over complex routing.

### Imagery

Imagery primarily consists of high-fidelity product mockups (phones/laptops showing websites) and carefully composed, often abstract or aesthetic, still-life photography. The treatment is direct and unadorned, often with raw edges and minimal masking, usually against a clean white or dark background. If photography is present, it tends to be crisp, high-contrast, and focused on texture or composition, acting as a backdrop or context rather than a narrative element. Icons are minimal, outlined, and monochromatic, inheriting the Midnight Black or Paper White palette with a medium stroke weight. Imagery acts as a showcase for product or an element of aesthetic atmosphere, rather than purely decorative content, and maintains a high density of visual information balanced with whitespace.
