---
version: alpha
name: AATHER
description: AATHER employs a refined, subdued aesthetic, prioritizing high-quality product photography over bold UI. The design uses nearly achromatic colors, with deep charcoal text on pristine white or nuanced off-white backgrounds, creating a sense of understated luxury. Typography leans towards delicate, thin weights, establishing a gentle, sophisticated voice. Components are minimal, often borderless or with subtle hairline outlines, ensuring the UI fades into the background, allowing content to take center stage.
colors:
  inkwell: "#000000"
  paper-white: "#ffffff"
  ghost-gray: "#e8e8e8"
  ash-gray: "#808080"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.35
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.35
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.35
spacing:
  buttonRadius: 2px
  elementGap: 10px
  sectionGap: 25px
components:
  ghost-button:
    role: Navigation links and secondary actions
  outlined-button:
    role: Call to action with minimal visual weight
  secondary-outlined-button:
    role: Subtle interactive elements
  product-card:
    role: Display individual products within a grid
  text-input-field:
    role: Forms and data entry
  top-navigation-link:
    role: Primary site navigation in header
---

## Overview

**North Star:** Whispered luxury on white linen. A visual system that emphasizes premium product through a muted, spacious, high-contrast, text-dominant interface.

AATHER employs a refined, subdued aesthetic, prioritizing high-quality product photography over bold UI. The design uses nearly achromatic colors, with deep charcoal text on pristine white or nuanced off-white backgrounds, creating a sense of understated luxury. Typography leans towards delicate, thin weights, establishing a gentle, sophisticated voice. Components are minimal, often borderless or with subtle hairline outlines, ensuring the UI fades into the background, allowing content to take center stage.

### Do's

- Prioritize product photography as the focal point, ensuring it is clean, well-lit, and isolated, often on neutral backdrops.
- Use Gestura Text Extra Light and Thin for headings and display text, embracing its delicate nature at 35px for prominent statements.
- Apply Untitled Sans for all functional UI text (body, navigation, buttons, forms), varying weights from 100 to 400, for clarity and sophistication.
- Maintain a high-contrast palette with Inkwell (#000000) for text and Paper White (#ffffff) for backgrounds, with Ash Gray (#808080) for secondary information.
- Keep components visually lightweight: prefer ghost buttons, thin borders (1px Inkwell or Ash Gray), and absent shadows to ensure content dominance.
- Use a base unit of 4px for all spacing decisions, particularly for minimal element gaps like 10px and section separators around 25px.
- Employ a subtle 2px border radius specifically for interactive elements like buttons and input fields to offer a soft, modern touch without being overly rounded.

### Don'ts

- Avoid using bold or heavy typography for headlines; the Brand's voice relies on lightness and restraint.
- Do not introduce strong accent colors or vivid hues; the palette is strictly achromatic and relies on subtle shifts in gray.
- Steer clear of pronounced shadows or heavy elevation styles; the design emphasizes flatness and a light, airy feel.
- Do not add excessive padding or prominent borders to cards; these should blend into the background as content containers.
- Do not use highly rounded corners (e.g., 8px or more); the maximum radius is 2px for specific interactive elements.
- Avoid busy or dense layouts; spaciousness is key to presenting products and content with an upscale feel.
- Do not use system-default link underlines or colors; all interactive text should follow the Inkwell color and subtle underline pattern.

### Layout

The page adheres to a full-bleed layout for hero sections, showcasing large product photography that spans the viewport width. Content sections below often follow a contained, centered structure with a consistent vertical rhythm of around 25px section gaps. Text and image arrangements vary but frequently present large, singular images followed by centered typographic statements. A flexible grid for product listings (implied by multiple product cards) maintains visual order. Navigation is a minimal top bar with 'Menu' and 'Shop' links, along with a 'Brand Name' (AATHER) centrally placed.

### Imagery

Imagery is almost exclusively high-key, product-focused photography. Products (like candles) are often isolated or tightly cropped, presented on neutral, often light beige or white backgrounds. When hands are present, they are part of a clean, minimalist composition. There are no illustrations or abstract graphics. Icons are minimal, outlined, and monochromatic (Inkwell). The imagery's role is primarily to showcase the physical product as hero, with a very high density relative to the UI, filling large sections of the screen.
