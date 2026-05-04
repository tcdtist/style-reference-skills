---
version: alpha
name: Superlist
description: Superlist employs a dark, almost theatrical, aesthetic with intense, contrasting colors to highlight interaction. The deep charcoal and muted violet backgrounds create a sophisticated stage, upon which vibrant pinks and oranges burst forth as calls to action and signifiers of activity. The interplay of strong, condensed headings and softer, spacious body text paired with generous spacing gives the design a comfortable yet decisive presence.
colors:
  deep-space: "#181824"
  charcoal-surface: "#26253b"
  nebula-gray: "#696f81"
  ghostly-grey: "#8e8da0"
  snow-drift: "#ffffff"
  stardust-white: "#f7f7ff"
  comet-tail-violet: "#535676"
  rocket-orange: "#ff4a36"
  flare-orange: "#ff3a26"
  galaxy-violet: "#9087ff"
  cosmic-pink: "#f866db"
  neon-pink: "#f739f7"
  asteroid-yellow: "#fbe74"
  plasma-green: "#22c55"
  electric-blue: "#2590f1"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.3
    letterSpacing: -0.168px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.08px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.216px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.1
    letterSpacing: -0.6px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.96px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 0.9
    letterSpacing: -1.4px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 0.95
    letterSpacing: -1.76px
spacing:
  cardRadius: 20px
  buttonRadius: 100px
  elementGap: 10px
  sectionGap: 64px
components:
  cta-button-group:
    role: 
  testimonial-cards:
    role: 
  cookie-consent-banner:
    role: 
  navigation-link:
    role: Header navigation items
  hero-section-headline:
    role: Prominent page titles
  feature-card:
    role: Content container for features or testimonials
---

## Overview

**North Star:** Dark Nebula with Neon Traces. A cosmic expanse of deep grays and violet, punctuated by sharp, vivid bursts of color that guide the eye.

Superlist employs a dark, almost theatrical, aesthetic with intense, contrasting colors to highlight interaction. The deep charcoal and muted violet backgrounds create a sophisticated stage, upon which vibrant pinks and oranges burst forth as calls to action and signifiers of activity. The interplay of strong, condensed headings and softer, spacious body text paired with generous spacing gives the design a comfortable yet decisive presence.

### Do's

- Use 'Rocket Orange' (#ff4a36) exclusively for primary calls to action, such as 'Sign up for free' buttons, maintaining its high impact across the site.
- Apply `20px` border-radius to all significant content cards and feature blocks, and `100px` for interactive elements like buttons and input fields, to balance visual softness with system precision.
- Employ the 'Deep Space' (#181824) for page backgrounds and 'Charcoal Surface' (#26253b) for elevated content containers to establish a clear visual hierarchy in the dark theme.
- Pair 'Haffer XH SemiBold' (600 weight) with 'Jersey 10' (400 weight) for large headlines, maintaining a -0.02em letter spacing for a signature condensed and bold statement.
- Utilize Inter font family for all body text in weights 400 and 500, with varying line heights (1.2-1.4) and subtle negative letter spacing (-0.02em, -0.012em, -0.005em) to ensure legibility and a refined feel.
- Maintain a comfortable '10px' as the default element spacing, scaling up to '64px' for section gaps, providing ample breathing room between content blocks.

### Don'ts

- Do not introduce new primary accent colors; restrict all vibrant highlights to the established 'Rocket Orange', 'Galaxy Violet', 'Cosmic Pink', 'Neon Pink', and 'Asteroid Yellow' palette.
- Avoid using multiple different font families for body text; stick to Inter, Blender Medium, and Satoshi as designated to prevent visual inconsistency.
- Do not deviate from the established border radii (`20px` for cards, `100px` for buttons/inputs); arbitrary rounding will disrupt the visual consistency.
- Do not use subtle, low-contrast shadows; only apply the `rgba(0, 0, 0, 0.08) 0px 10px 15px 0px` for clear elevation on dark backgrounds, or the `rgba(0,0,0,.1) 0 1px 1px 0, rgba(0,0,0,.05) 0 2px 4px 0, rgba(255,255,255,.45) 0 .5px 0 0 inset` for more complex UI components.
- Never use line heights greater than 1.5 for any text, especially headlines, to maintain the site's condensed and impactful typographic style.
- Do not use pure black (#000000) for text on a dark background; always prioritize the high-contrast 'Snow Drift' (#ffffff) or 'Stardust White' (#f7f7ff) for readability.
- Avoid full-width content; ensure main content areas are logically contained, implicitly aligning to a grid or maximum width, even if no explicit max-width is declared.

### Layout

The site uses a full-bleed layout for background elements, but content is generally contained within an implicit maximum width, giving a spacious feel without feeling confined. The hero section is full-viewport, featuring a large, centered headline over a dynamic, dark gradient background. Sections alternate between a dark 'Deep Space' (#181824) background and potentially a slightly lighter variant for feature blocks. Content is often presented in a single, centered stack, or in two-column layouts with text on one side and a product image or screenshot on the other, creating a clear visual flow. Testimonials are arranged in a dynamic, potentially uneven grid of cards. The navigation is a fixed top bar on a dark background, with prominent 'Sign In' and 'Sign up for free' actions.

### Imagery

This site features a blend of product screenshots, abstract gradient backgrounds, and minimal iconography. Product screenshots are typically shown within dark, rounded UI containers, often overlaid on gradient backdrops, emphasizing the application's functionality in context. The abstract graphics are vibrant, evolving gradients (like those in the hero section) that provide a dynamic, futuristic feel without being distracting. Icons are monochrome, often using 'Stardust White' (#f7f7ff) or 'Ghostly Grey' (#8e8da0) on dark surfaces, maintaining a consistent, clean pictogram style. Imagery serves to showcase the product directly or provide decorative atmosphere, sparingly used to balance visual interest with UI focus. Density is moderate, with images playing a primary role in hero sections and feature displays, but giving way to text-dominant layouts in deeper content.
