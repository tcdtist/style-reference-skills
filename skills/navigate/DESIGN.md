---
version: alpha
name: Navigate
description: Navigate employs a 'modern dark' aesthetic characterized by a dominant black canvas that grounds vivid, playful accent colors for interactive elements and decorative graphics. Typography is bold and confident, combining a precise sans-serif for body text with a dense, impactful sans-serif for headlines. Surfaces are either pure black or a light off-white, with a focus on rounded rectangular shapes for content containers, juxtaposed with abstract, often rounded, graphic elements that add an organic touch.
colors:
  midnight-abyss: "#141414"
  ghost-white: "#fdf9f0"
  lime-squeeze: "#c7ff69"
  amethyst-glow: "#7a78ff"
  sunset-orange: "#ff6d38"
  emerald-sprint: "#00a652"
  skybound-blue: "#478bff"
  golden-rod: "#ffc412"
  lavender-mist: "#ccccff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 0.85
    letterSpacing: 0.165px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1
    letterSpacing: 0.14px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 0.8
    letterSpacing: -0.44px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 0.9
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 165px
    lineHeight: 0.8
    letterSpacing: -6.6px
spacing:
  cardRadius: 43.2px
  buttonRadius: 25.146px
  elementGap: 18px
  sectionGap: 27px
components:
  primary-action-button:
    role: Interactive element
  ghost-border-button:
    role: Secondary action/button
  navigation-link:
    role: Navigation, inline interactive text
  info-card-solid-color:
    role: Content card
  faq-accordion-card:
    role: Content card for FAQs
  small-decorative-rounded-card:
    role: Decorative graphic container
---

## Overview

**North Star:** Neon Playroom

Navigate employs a 'modern dark' aesthetic characterized by a dominant black canvas that grounds vivid, playful accent colors for interactive elements and decorative graphics. Typography is bold and confident, combining a precise sans-serif for body text with a dense, impactful sans-serif for headlines. Surfaces are either pure black or a light off-white, with a focus on rounded rectangular shapes for content containers, juxtaposed with abstract, often rounded, graphic elements that add an organic touch.

### Do's

- Use Midnight Abyss (#141414) as the default background for sections, and Ghost White (#fdf9f0) for contrasting content areas.
- Apply Aeonik for all body text, navigation elements, and button labels, prioritizing weights 400 and 500 for readability.
- Reserve OldschoolGrotesk, weights 800 and 900, exclusively for display headlines and prominent section titles.
- Ensure all primary interactive elements are highlighted with Lime Squeeze (#c7ff69) for backgrounds or vibrant borders.
- Utilize highly rounded corners for cards (43.2px) and a pill shape for buttons (25.146px), contributing to the playful aesthetic.
- Implement consistent internal padding on cards (e.g., 55.8px top, 65.7px horizontal for large cards), creating ample breathing room.
- Maintain negative letter spacing for display typography (-0.020em to -0.040em) to enhance its compact, impactful presence.

### Don'ts

- Avoid using saturated accent colors (Amethyst Glow, Sunset Orange, Emerald Sprint, Skybound Blue, Golden Rod) for text or primary UI functions; reserve them for decorative graphics and distinct card backgrounds.
- Do not use generic square corners; adhere to the specified radii for buttons (25.146px) and cards (43.2px to 64.8px).
- Do not create new button styles; stick to the defined Primary Action Button (filled Lime Squeeze) or Ghost Border Button (outlined Midnight Abyss).
- Avoid breaking up the visual density of OldschoolGrotesk headlines with excessive word spacing or positive letter spacing.
- Do not introduce new color variants that are not Midnight Abyss, Ghost White, Lime Squeeze, or the defined accent colors.
- Do not use any shadows on cards or elements; the design relies on bold color blocks and borders for depth.
- Do not vary the border width of ghost elements; maintain a consistent 1.5px solid border.

### Layout

The page primarily uses a full-bleed layout on a Midnight Abyss background, contrasting with occasional full-width Ghost White or accent-colored sections. The hero features a centered headline with a subtext and a prominent primary action button. Section rhythm is created through alternating background colors and distinct content blocks. Content is typically arranged in centered stacks or alternating text-left/visual-right patterns. The 'features' or 'about' sections use a dynamic grouping of colored, rounded cards. Navigation is a sticky top bar with neutral links and a prominent Lime Squeeze primary action button.

### Imagery

The visual language focuses on abstract, geometric, and occasionally figurative illustrations with a playful, slightly irreverent tone. These graphics are often contained within highly rounded or irregularly shaped color blocks, using the full spectrum of accent colors (Amethyst Glow, Sunset Orange, Emerald Sprint, Skybound Blue, Golden Rod). Icon styles are filled, bold, and monochrome (either Midnight Abyss or Ghost White), complementing the overall vibrant color palette. Imagery serves a decorative and atmospheric role, adding energy and playfulness rather than strict explanatory content, and is high-density in certain sections.

### Elevation

This design system intentionally avoids traditional shadows. Depth and hierarchy are established through stark color contrasts, bold background colors, and variations in border radii and element sizing, rather than layering with subtle drop shadows.
