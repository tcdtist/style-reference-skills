---
version: alpha
name: Walden
description: Walden cultivates a serene, contemplative aesthetic, grounding product presentation in an almost stark, naturalistic minimalism. The visual language centers on muted, earthy neutrals with high contrast for text, creating a sense of understated luxury. Typography is functional and refined, ensuring clarity while blending into the quiet composition. Components are lightweight and largely border-driven, minimizing visual noise to allow product imagery and natural backgrounds to dominate.
colors:
  forest-shadow: "#3f3f3f"
  canvas-white: "#ffffff"
  earth-stone: "#d3cec5"
  true-black: "#030302"
  muted-grey: "#686867"
  light-stone: "#acacac"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.1
spacing:
  cardRadius: 16px
  buttonRadius: 2px
  elementGap: 12px
  sectionGap: 64px
components:
  ghost-navigation-button-light:
    role: Navigation links and secondary actions within light UI sections.
  contained-footer-button:
    role: Interactive elements within the footer or compact UI sections.
  filled-primary-button:
    role: Main calls to action requiring emphasis.
  outlined-text-link:
    role: Links and actions in text-heavy areas, often within product details.
  search-input-field:
    role: Text input areas for search or forms.
---

## Overview

**North Star:** Forest floor stillness

Walden cultivates a serene, contemplative aesthetic, grounding product presentation in an almost stark, naturalistic minimalism. The visual language centers on muted, earthy neutrals with high contrast for text, creating a sense of understated luxury. Typography is functional and refined, ensuring clarity while blending into the quiet composition. Components are lightweight and largely border-driven, minimizing visual noise to allow product imagery and natural backgrounds to dominate.

### Do's

- Prioritize product imagery and natural backgrounds; frame them as the primary visual focus.
- Use Forest Shadow (#3f3f3f) for primary text and Canvas White (#ffffff) for backgrounds to maintain a high contrast, minimal reading experience.
- Apply True Black (#030302) as the background for primary action buttons or as a strong border for interactive elements.
- Maintain minimal border radii: 2px for buttons and 16px for cards, reinforcing a subtle, structured aesthetic.
- Ensure generous vertical spacing between sections, using the sectionGap of '64px' to create a breathable layout.
- Utilize 1px borders in Earth Stone (#d3cec5) or True Black (#030302) for UI separation rather than heavy shadows or fills.
- Use Graphik (sans-serif) for all primary text content; reserve Geist and GTStandard-M for specific utility or decorative instances.

### Don'ts

- Avoid vivid or highly saturated colors for UI elements; color should be sparingly applied and mostly achromatic.
- Do not use heavy drop shadows or complex gradients; rely on subtle inset shadows and single-color fills.
- Do not introduce decorative elements that distract from product photography or natural imagery.
- Avoid dense, information-heavy blocks of text; break content into manageable, well-spaced segments.
- Do not use generic system fonts; stick to Graphik, Geist, and GTStandard-M to preserve brand distinctiveness.
- Avoid radius values outside of 2px for buttons and 16px for larger cards.
- Do not introduce gratuitous motion or animations; transitions should be subtle and functional.

### Layout

The page model is full-bleed, allowing large-scale imagery to extend to the viewport edges, creating an immersive experience. The hero sections feature large, atmospheric photography with centered text overlays for headings and calls to action. Section rhythm is predominantly defined by large photographic blocks alternating fluidly, connected by minimal UI. Content arrangement often juxtaposes large hero images with smaller, descriptive text blocks or product grids. Navigation is a persistent, minimal top bar with left-aligned brand and right-aligned utility links, maintaining overall content visibility.

### Imagery

The visual language for imagery is characterized by high-quality, deliberately composed product photography set within natural, minimalist environments (forests, mossy landscapes, raw wood). Photography often features products isolated or in serene contexts, emphasizing their form and materiality. Treatment is typically full-bleed or large-scale, dominating sections of the page. There are also stark product shots on clean, abstract backgrounds. Icons, when present, are simple, outlined, and monochromatic, used for functional navigation cues. The density is image-heavy, with large visuals serving as atmosphere and product showcase, allowing text to act as supporting detail.
