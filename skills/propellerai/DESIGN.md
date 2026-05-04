---
version: alpha
name: PropellerAi
description: PropellerAi's design system is a study in minimalist clarity, featuring expansive white space and carefully considered neutral tones. The aesthetic is light, airy, and functional, with subtle shadows and rounded corners providing a sense of approachability without sacrificing professionalism. Typography is highly readable, serving to organize content with measured precision. The system emphasizes clear hierarchies through achromatic contrast and soft visual layering.
colors:
  canvas: "#ffffff"
  deep-graphite: "#111827"
  dark-slate: "#1f2937"
  light-fog: "#e5e7eb"
  near-white: "#eff1f3"
  silver-pine: "#d1d5db"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.63
spacing:
  cardRadius: 16px
  buttonRadius: 12px
  elementGap: 12px
  sectionGap: 48px
components:
  microsoft-sign-in-button:
    role: Primary authentication action.
  login-input-card:
    role: Container for forms and interactive elements, typically centered on the page.
  text-input-placeholder:
    role: Standard input field for user entry.
---

## Overview

**North Star:** White canvas, floating cards

PropellerAi's design system is a study in minimalist clarity, featuring expansive white space and carefully considered neutral tones. The aesthetic is light, airy, and functional, with subtle shadows and rounded corners providing a sense of approachability without sacrificing professionalism. Typography is highly readable, serving to organize content with measured precision. The system emphasizes clear hierarchies through achromatic contrast and soft visual layering.

### Do's

- Prioritize 'Canvas' (#ffffff) for all main backgrounds and surfaces to maintain a clean, expansive feel.
- Use 'Deep Graphite' (#111827) for primary heading and body text, ensuring high contrast and immediate readability.
- Apply 'Dark Slate' (#1f2937) for secondary text elements, button labels, and icons.
- Utilize Inter font consistently across all text elements; vary weights (400, 500) and sizes (12px, 14px, 16px) for hierarchy.
- Implement soft, rounded corners: 16px for cards and 12px for interactive elements like buttons.
- Employ the card shadow (rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px) to subtly elevate containers.
- Adhere to a 32px padding for cards and 12px base spacing between elements for a spacious layout.

### Don'ts

- Avoid vivid or highly saturated colors for functional UI elements; color should be reserved for brand accents only when explicitly defined.
- Do not introduce strong, dark backgrounds; the system relies on a light theme for its core identity.
- Refrain from sharp corners or harsh geometric shapes; the visual language emphasizes softness and approachability.
- Do not use heavy, opaque borders or dividers; opt for subtle 'Light Fog' (#e5e7eb) or 'Silver Pine' (#d1d5db) treatments.
- Avoid dense information blocks; maintain ample white space and consistent padding.
- Do not use decorative gradients; the system prioritizes flat colors and subtle shadows for depth.
- Do not use custom fonts outside of Inter; font consistency is key to the system's clean aesthetic.

### Layout

The page model is a full-bleed light surface, with content centered. The hero area (as seen in the login screen) places the primary content card centrally, emphasizing minimal distraction. Section rhythm is dictated by clear vertical spacing, with a base 'sectionGap' of 48px, creating a spacious feel. Content arrangement defaults to centered stacks, using cards as primary content containers. No complex grid usage or multi-column layouts were observed, reinforcing a focused, single-purpose interaction.

### Imagery

No complex imagery was detected; the system relies heavily on pure UI elements. The logo itself uses crisp, monochromatic icons. If icons are introduced, they should be similarly clean, outlined, or subtly filled, with a light default stroke weight.
