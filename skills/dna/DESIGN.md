---
version: alpha
name: DNA
description: DNA Capital employs a sophisticated, near-monochromatic dark theme, evoking a premium, data-driven identity. Typography is central, using a blend of refined serifs for impactful headlines and clean sans-serifs for legibility. A single vivid violet-blue gradient acts as a signature highlight, reserved for subtle decorative elements, icons, and progress indicators, creating a sense of precision and advanced technology. The overall design emphasizes spaciousness and understated confidence, with minimal use of borders and elevation to maintain a flat, contemporary feel.
colors:
  midnight-ink: "#070708"
  arctic-mist: "#ffffff"
  ghost-gray: "#8f8f93"
  deep-space-blue: "#1954ec"
  fading-nebula-gradient: "#423676"
typography:
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: 0.0018px
  heading:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.13
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.13
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.13
    letterSpacing: 0px
spacing:
  elementGap: 23px
  sectionGap: 59px
components:
  ghost-button:
    role: Minimal interactive button for secondary actions or navigation.
  icon-button-menu:
    role: Navigation toggle or action with a minimalist icon.
  text-link-with-underline:
    role: Inline navigation or reference links.
  scroll-indicator-button:
    role: Visual cue for page progression.
  small-badge:
    role: Informational marker or tag.
---

## Overview

**North Star:** Midnight data stream, whispered authority

DNA Capital employs a sophisticated, near-monochromatic dark theme, evoking a premium, data-driven identity. Typography is central, using a blend of refined serifs for impactful headlines and clean sans-serifs for legibility. A single vivid violet-blue gradient acts as a signature highlight, reserved for subtle decorative elements, icons, and progress indicators, creating a sense of precision and advanced technology. The overall design emphasizes spaciousness and understated confidence, with minimal use of borders and elevation to maintain a flat, contemporary feel.

### Do's

- Prioritize text hierarchy with Darius for headlines and Graphik for body, strictly adhering to their defined weights and letter spacing: Darius 300 for display, Graphik varying weights for functional text.
- Utilize Midnight Ink (#070708) as the primary background and Arctic Mist (#ffffff) for primary text for dominant contrast, ensuring high readability on dark surfaces.
- Employ Deep Space Blue (#1954ec) exclusively for brand accents, subtle decorative strokes, and abstract background elements, maintaining its role as a precise, tech-forward highlight.
- Maintain generous vertical spacing between sections, using a default of 59px to promote a spacious and unhurried reading experience.
- Implement small rounding of 4px radius only on interactive link elements, keeping other UI components with sharp, defined corners.
- Reserve background gradients (Cosmic Blue to Violet or Fading Nebula) for abstract hero sections or subtle content blocks to add depth and a technological atmosphere, linking them to key content.
- Use Ghost Gray (#8f8f93) for secondary informational text or subtle inactive states to reduce visual clutter and direct focus to primary content.

### Don'ts

- Avoid using highly saturated colors outside the defined brand accent (Deep Space Blue) to ensure the dark, sophisticated aesthetic is preserved.
- Do not introduce strong drop shadows or heavy borders on UI components; maintain a largely flat and modern appearance.
- Do not use Darius for body text or excessively small sizes; its light weight and serif nature are intended for impact and larger displays.
- Avoid tight element spacing; maintain an element gap of 23px and section gap of 59px to ensure content breathability.
- Do not use Arctic Mist (#ffffff) as a general background color, as the system is anchored in a dark theme.
- Do not introduce unnecessary rounded corners. Radii should be limited to 4px for specific interactive elements.
- Avoid generic system fonts where Graphik or Darius are specified; substitutes should only be used if the custom fonts are unavailable, to maintain brand distinctiveness.

### Layout

The page primarily uses a full-bleed layout, where background elements extend to the viewport edges, particularly in the hero and key section headers. Max-width content containers are implicitly present for text and core information, centering these blocks within the full-bleed background. The hero section prominently features a centered, large headline over an abstract gradient background. Section rhythm is driven by consistent vertical spacing (sectionGap of 59px), creating clear divisions between content blocks which alternate between a large headline and a two-column text layout. Content often follows a centered stack or a staggered text-left/text-right pattern for explanatory sections. Navigation is a minimalist top bar with a 'Menu' toggle on the right.

### Imagery

This site features abstract, glowing particulate wave formations, primarily in deep blues and purples, acting as atmospheric backgrounds rather than explicit content. These are likely 3D renders or sophisticated abstract graphics. The treatment is full-bleed, integrating seamlessly with the dark canvas to create a futuristic and data-driven mood. There is minimal use of photography or traditional illustrations, with the focus remaining on clean typography and abstract visual effects. Icons, where present, appear to be outlined and monochromatic, maintaining a minimalist stroke weight.
