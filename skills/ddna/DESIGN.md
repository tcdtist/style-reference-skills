---
version: alpha
name: ddna
description: DDNA employs a serene, naturally-toned aesthetic, using a dominant warm beige canvas and muted grays for text and accents. The design focuses on elegant simplicity with minimal UI elements that recede into the background, bringing attention to product imagery. Typography is understated yet precise, with subtle letter-spacing for refined readability. Components are largely borderless and transparent, emphasizing content over chrome, with the brand's unique identity conveyed through subtle visual details.
colors:
  parchment: "#dacabf"
  soft-stone: "#efe3dc"
  deep-slate: "#444242"
  muted-ash: "#595552"
  faded-quarry: "#938a83"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.5
spacing:
  elementGap: 20px
  sectionGap: 45px
components:
  ghost-button:
    role: Primary action button for 'Explore Collections'.
  navigation-link:
    role: Top navigation and footer links.
  transparent-card:
    role: Content containers for product listings or features.
---

## Overview

**North Star:** Warm parchment whispers

DDNA employs a serene, naturally-toned aesthetic, using a dominant warm beige canvas and muted grays for text and accents. The design focuses on elegant simplicity with minimal UI elements that recede into the background, bringing attention to product imagery. Typography is understated yet precise, with subtle letter-spacing for refined readability. Components are largely borderless and transparent, emphasizing content over chrome, with the brand's unique identity conveyed through subtle visual details.

### Do's

- Always use Parchment (#dacabf) as the default page background, only using Soft Stone (#efe3dc) for subtle content block variations.
- Apply Deep Slate (#444242) for all primary text and critical interactive elements to maintain high contrast with the canvas.
- Ensure all interactive elements, like buttons and links, are visually minimal, primarily relying on text color (#444242) for distinction.
- Utilize the Basis font with its characteristic letter-spacing (0.066em-0.099em) for all body copy and navigation items.
- Maintain a zero border-radius ('0px') system-wide for a stark, unsoftened aesthetic.
- Employ a spacious layout, adhering to a 45px section gap and a 20px element gap for generous breathing room.
- Treat all cards and content sections as transparent overlays, defined by their content and surrounding whitespace, rather than distinct visual containers.

### Don'ts

- Do not introduce rounded corners; curves are not present in the system.
- Avoid using strong, saturated colors; the palette is exclusively muted and achromatic.
- Do not add shadows or elevation effects; elements should appear flat against the background.
- Do not use heavy, filled buttons or call-to-actions; interactive elements are ghosted or text-based.
- Do not overcomplicate layouts with grids or complex visual hierarchies. Embrace simple, stacked, or binary arrangements.
- Never deviate from the specified letter-spacing for the Basis font; it's a signature typographic detail.
- Do not use dark backgrounds for full sections; the theme is consistently light, with warm, pale neutrals.

### Layout

The page maintains a full-bleed background of Parchment (#dacabf), with content typically centered within an implied maximum width. The hero section features a centered headline over the decorative 3D spheres. Sections are arranged with consistent vertical spacing (45px section gap), creating a seamless flow without distinct visual dividers. Content is often presented in a single, centered block, with text and 'ghost' links stacked. Navigation is a minimalist top bar with text links, receding into the background.

### Imagery

The site uses photography of jewelry, presented as tight crops on pure white or muted backgrounds, focusing directly on the product's form and detail without lifestyle context. Abstract 3D rendered spheres with iridescence are used decoratively, providing visual interest and a sense of preciousness or material depth, often floating over the main canvas. Iconography is minimal, primarily text-based or simple arrows, maintaining a clean, content-forward visual approach. The density is moderate, with imagery serving as hero elements and product showcases, balanced by ample white space.
