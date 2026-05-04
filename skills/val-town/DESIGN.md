---
version: alpha
name: Val Town
description: Val Town presents a precise yet playful technical aesthetic, balancing a stark white background and deep charcoals with a lively array of vivid blues and pinks. Clean, structured layouts punctuated by subtle shadows create clear informational hierarchy without feeling heavy. The system leverages a dual-font strategy: a modern sans-serif for broad content and a monospaced font for code, underscoring its developer-centric focus.
colors:
  white-canvas: "#ffffff"
  ghost-gray: "#f1f5f9"
  steel-gray: "#e2e8f0"
  cadet-blue: "#cad5e2"
  charcoal-text: "#000000"
  charcoal-ui: "#314158"
  dark-slate: "#45556c"
  deep-midnight: "#1d293d"
  smoke-gray: "#62748"
  faded-stone: "#99a1af"
  cerulean-sky: "#00bcff"
  azure-glow: "#53eafd"
  electric-pink: "#ed6aff"
  royal-purple: "#8e51ff"
  vivid-blue: "#74d4ff"
  deep-ocean: "#104e64"
  lagoon-mist: "#cefafe"
  lime-green: "#00c950"
  magenta-flash: "#e12afb"
  vibrant-cyan: "#00a6f4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 1.6px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.45px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.43
    letterSpacing: -0.6px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.33
    letterSpacing: -0.9px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.25
    letterSpacing: -1.2px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.2
    letterSpacing: -1.5px
spacing:
  cardRadius: 8px, 12px
  buttonRadius: 8px, 12px
  elementGap: 4px
  sectionGap: 48px
components:
  blog-post-alert-banner:
    role: 
  cta-button-group:
    role: 
  testimonial-cards:
    role: 
  primary-navigation-link:
    role: Interactive element
  primary-cta-button:
    role: Call to action
  secondary-outline-button:
    role: Secondary action
  ghost-button-compact:
    role: Tertiary action, small interactive
  blog-post-alert-banner:
    role: Informational banner
  code-snippet-card:
    role: Code display
  feature-card:
    role: Product feature showcase
  testimonial-card-dark:
    role: Social proof display
  quotation-block:
    role: Pull quote
---

## Overview

**North Star:** Crisp developer console

Val Town presents a precise yet playful technical aesthetic, balancing a stark white background and deep charcoals with a lively array of vivid blues and pinks. Clean, structured layouts punctuated by subtle shadows create clear informational hierarchy without feeling heavy. The system leverages a dual-font strategy: a modern sans-serif for broad content and a monospaced font for code, underscoring its developer-centric focus.

### Do's

- Use IBM Plex Sans for all user-facing content, reserving iA Writer Mono exclusively for code snippets and technical examples.
- Apply Charcoal Text (#000000) or Charcoal UI (#314158) for primary text on White Canvas (#ffffff) backgrounds to maintain AAA contrast.
- Utilize Cerulean Sky (#00bcff) as the default background for primary call-to-action buttons, with White Canvas text.
- Implement 12px border radius for primary and secondary buttons, and testimonial cards, contrasting with the general 8px radius for most UI elements.
- Employ the specific alert banner style (Lagoon Mist background #cefafe, Azure Glow border #53eafd) for all informational alerts.
- Maintain consistent section spacing with 48px vertical gaps between major content blocks.
- Use subtle shadows `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px` for elevated components like code snippet cards, avoiding excessive depth.

### Don'ts

- Do not use iA Writer Mono for general UI text or marketing copy; it is strictly for technical content.
- Avoid using highly saturated brand/accent colors as text on light backgrounds, except Electric Pink (#ed6aff) for specific highlights like 'We're hiring!'.
- Do not introduce new border radii beyond 4px, 8px, or 12px.
- Refrain from using strong, colorful box-shadows; stick to the specified subtle gray shadow for elevation.
- Do not vary the letter-spacing for iA Writer Mono; it should always be 'normal' to preserve its monospaced appearance.
- Avoid mixing light text directly on subtle Ghost Gray (#f1f5f9) backgrounds; rely on Charcoal Text or Charcoal UI for sufficient contrast.
- Do not use gradients; the design relies on solid colors and subtle color shifts for depth.

### Layout

The site uses a max-width contained layout, with content centered within a visible constraint, likely around 1200-1400px, though a specific max-width is not defined. The hero section features a prominent, centered headline and subtext over the White Canvas background, flanked by primary (Cerulean Sky) and secondary (Ghost Gray) CTA buttons. Sections generally follow a simple vertical stack, with consistent 48px gaps. Some sections use a two-column or three-column grid, particularly for feature overviews and testimonial cards. The content arrangement is typically text-heavy on the left with supporting visual elements (code snippets, icons, small cards) on the right, or centered stacked content. Navigation is a sticky top bar with clearly defined links. The overall density is comfortable, providing sufficient white space for readability.

### Imagery

The visual language is UI-dominant, with a strong emphasis on product screenshots and code snippets. Photography is absent. Illustrations are simple, two-dimensional icons, often monochromatic or subtly tinted with brand blues and teals, serving to clarify concepts rather than decorate. Product screenshots feature clean, rectangular code editor interfaces (`main.tsx`) or API response examples (`Hello!`), presented with subtle elevation shadows. Icons are minimal, outlined, and monochromatic, consistent with the overall technical UI. Imagery is primarily explanatory, showing the product in action rather than atmospheric or abstract representations. Density is moderate, with images typically contained within cards or as small inline elements, supporting text rather than dominating sections.
