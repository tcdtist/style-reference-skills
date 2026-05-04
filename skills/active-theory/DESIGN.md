---
version: alpha
name: Active Theory
description: This design system evokes a 'digital void' aesthetic, combining deep, dark backgrounds with subtle luminous elements. The sparsity of color and reliance on grayscale with minimal violet accents creates an atmosphere of focused, almost melancholic, precision. Custom typography and specific rounded forms (500px pill buttons contrasting with 5px or 12px radii elsewhere) carve out a unique identity, suggesting advanced technology with a touch of crafted elegance.
colors:
  void-black: "#000000"
  ash-gray: "#4d4d4d"
  pure-white: "#ffffff"
  silver-mist: "#c6c6c6"
  subtle-violet: "#343755"
  highlight-violet: "#9cA5FF"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
spacing:
  cardRadius: 12px
  buttonRadius: 5px or 500px
components:
  cookie-consent-box:
    role: 
  button-group-ghost-primary-secondary:
    role: 
  navigation-bar-ghost-pill:
    role: 
  standard-ghost-button:
    role: Navigation and secondary actions
  primary-pill-button:
    role: Key calls to action
  secondary-pill-button:
    role: Alternative actions or dismissals
  cookie-consent-box:
    role: Informational overlay
  text-link-active:
    role: Navigation and clickable text
  text-link-inactive-secondary:
    role: Less prominent links or unvisited status
---

## Overview

**North Star:** Midnight Command Console. Deep, dark surfaces punctuated by precise, glowing UI elements.

This design system evokes a 'digital void' aesthetic, combining deep, dark backgrounds with subtle luminous elements. The sparsity of color and reliance on grayscale with minimal violet accents creates an atmosphere of focused, almost melancholic, precision. Custom typography and specific rounded forms (500px pill buttons contrasting with 5px or 12px radii elsewhere) carve out a unique identity, suggesting advanced technology with a touch of crafted elegance.

### Do's

- Prioritize Void Black (#000000) for all main backgrounds to maintain the dark, immersive aesthetic.
- Use Pure White (#ffffff) for primary text and controls, ensuring high contrast (AAA) against dark backgrounds.
- Apply nbarchitekt font at weight 400 for general UI text and 700 for headings, leveraging its unique character.
- Utilize 500px border radius for key interactive buttons (like 'Accept Cookies') to create a distinct pill shape.
- Employ the 5px border radius for `Standard Ghost Buttons` to subtly differentiate their interaction level from pill buttons.
- Allow a top border as a subtle interactive indicator for buttons, using rgba(255, 255, 255, 0.6) or rgba(255, 255, 255, 0.5).
- Maintain minimal padding variations (e.g., 1px vertical/6px horizontal and 4px vertical/18px horizontal) across button types for a controlled, compact feel.

### Don'ts

- Avoid using bright, saturated colors extensively; limit chromatic accents to Subtle Violet (#343755) and Highlight Violet (rgba(156, 165, 255, 0.333)).
- Do not introduce new font families beyond nbarchitekt, Arial, and Times to maintain typographic consistency.
- Refrain from using strong shadows or heavy gradients; focus on subtle luminescence and flat design elements.
- Do not deviate from the specified border radii (5px, 12px, 500px); these define the component's perceived softness or sharpness.
- Avoid large, uncontained images; instead, use abstract or technical visuals that blend into dark backgrounds.
- Do not overuse Pure White; reserve it for essential text and active states to preserve its visual impact.
- Do not use generic system default styling for interactive elements; custom button styles are critical to the brand identity.

### Layout

The site employs a full-bleed, dark canvas that extends to the edges of the viewport, creating an immersive, uncontained experience. The hero section is dominated by an abstract, luminous 3D graphic, centered vertically, with minimal UI elements (navigation, cookie consent) overlaid. Content appears to be presented sparsely and centrally, with elements spaced generously against the dark background. The navigation is a top-right, minimalist header, using subtle ghost buttons. The overall density is very low, prioritizing visual impact and a sense of 'space' as much as information delivery.

### Imagery

The visual language is abstract and evocative, entirely eschewing traditional photography or literal illustrations. Instead, it features 3D rendered, luminous abstract forms and particle effects, like glimmers of light and transparent, refractive objects. Imagery is always 'contained' within the dark canvas of the background, appearing to emit its own light. The effect is decorative and atmospheric, rather than explanatory, contributing to a sense of mystery and advanced technology. Icons, though not extensively present, would likely be outlined and mono-colored to blend with the minimalist UI.
