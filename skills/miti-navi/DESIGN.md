---
version: alpha
name: Miti Navi
description: Miti Navi establishes a refined, classic maritime aesthetic through a muted, near-monochromatic palette dominated by warm beige-gray and deep charcoal. Seriffed headlines juxtapose with monospace utility type, suggesting a balance of heritage and precision. The overall impression is one of understatement and quality, with functional elements subtly framed rather than aggressively highlighted. Surfaces are flat and unadorned, allowing typography and imagery to convey richness.
colors:
  parchment: "#e6dece"
  deep-charcoal: "#000e13"
  ebony: "#232323"
  linen: "#999999"
  amber-glaze: "#ffdead"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 16px
  sectionGap: 30px
components:
  primary-navigation-link:
    role: Top-level navigation items
  filled-button-deep-charcoal:
    role: Call to action for primary actions like 'Brochure MITI One'
  outlined-link-amber-glaze:
    role: Distinguished interactive links, often for social media or legal pages
  ghost-card:
    role: Content containers with no visual boundaries
---

## Overview

**North Star:** Nautical parchment and polished brass.

Miti Navi establishes a refined, classic maritime aesthetic through a muted, near-monochromatic palette dominated by warm beige-gray and deep charcoal. Seriffed headlines juxtapose with monospace utility type, suggesting a balance of heritage and precision. The overall impression is one of understatement and quality, with functional elements subtly framed rather than aggressively highlighted. Surfaces are flat and unadorned, allowing typography and imagery to convey richness.

### Do's

- Use Parchment (#e6dece) for primary page backgrounds to maintain a warm, inviting canvas.
- Apply Deep Charcoal (#000e13) for primary text and filled button backgrounds, providing strong contrast and visual weight.
- Reserve Voyage (400) for hero-level headlines and GTSectraDisplay (400) for sub-headlines, emphasizing a classic, elegant tone.
- Employ GT Pressura Mono (400) for all body text, navigation, and functional UI elements to ensure legibility and a consistent modern-classic contrast.
- Use Amber Glaze (#ffdead) strictly for outlined link borders or subtle interactive accents, making it the only chromatic element for gentle emphasis.
- Maintain 0px border-radius for all components like buttons and cards, reinforcing a rigid, structured aesthetic.
- Structure page content within a maximum width of 1320px, maintaining generous side margins on wider screens.

### Don'ts

- Avoid using bright or vivid colors; the design system limits chromatic accents to a single muted Amber Glaze.
- Do not introduce rounded corners; all elements should adhere to the 0px border-radius for a consistent aesthetic.
- Do not add drop shadows or significant elevation; surfaces should remain flat to preserve the understated, clean look.
- Avoid generic sans-serif fonts; stick to the specified classic serifs and monospace for distinct typographic roles.
- Do not deviate from the established letter-spacing for GT Pressura Mono and Times; specific tracking is key to their visual identity.
- Do not use gradients; the system relies on solid color blocks and photographic imagery.
- Avoid excessive use of icons or complex illustrations that might distract from the minimalist, photographic focus.

### Layout

The page primarily uses a max-width contained layout of 1320px, with content centered. The hero section often features a full-bleed image with prominent, centered headline text styled with Voyage font. Sections flow with consistent vertical spacing (sectionGap 30px), featuring a mixture of centered text blocks and potentially alternating text-left/image-right or image-left/text-right compositions, although detailed section structure for that is not visible in the provided data. Navigation is a minimal top bar, with a unique vertical 'Brochure MITI One' button aligned to the right edge and angled.

### Imagery

The site heavily features high-quality, full-bleed photography of luxury sailboats on open water, often with deep blue skies or serene coastlines. Images are treated realistically, without stylized filters, conveying a sense of adventure, luxury, and tranquility. There's an absence of other graphic elements like illustrations or abstract shapes, emphasizing the product and its natural environment. Imagery serves as the primary visual interest and often dictates section backgrounds.
