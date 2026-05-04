---
version: alpha
name: Everafter
description: EverAfter projects a refined, intelligent digital environment using a deep violet primary color accented by vibrant, almost neon, hues. Typography is a confident mix of a distinctive serif for headings and a clean sans-serif for body text, establishing an authoritative yet approachable tone. Surfaces are predominantly light and spacious, juxtaposed with the dramatic dark hero sections, creating clear visual hierarchy and drawing attention to key AI product features. Interaction elements are clearly defined with ample padding and generously rounded corners, suggesting a user-friendly, modern experience.
colors:
  midnight-orchid: "#221437"
  astral-purple: "#2a1244"
  electric-violet: "#793cfb"
  rose-bloom: "#ff7aba"
  sunshine-yellow: "#ffd633"
  deep-teal: "#205779"
  canvas-white: "#ffffff"
  ghost-marble: "#f8f5ff"
  ash-outline: "#e2e2e2"
  smoke-gray: "#333333"
  graphite: "#000000"
  soft-shadow-blue: "#daebf58c"
  hero-gradient: "#e7cae4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.68px
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.2
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.15
    letterSpacing: -0.95px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.15
    letterSpacing: -1.06px
spacing:
  cardRadius: 24px
  buttonRadius: 999px
  elementGap: 8px
  sectionGap: 186px
components:
  primary-action-button:
    role: Main call to action, highlighted with the brand's Electric Violet.
  ghost-button-brand-focus:
    role: Secondary action button, uses brand text/border against transparent background for less emphasis.
  ghost-button-neutral-text:
    role: Least emphasized action, often for navigation or tertiary actions.
  default-card:
    role: Standard content containers for features, testimonials, or data displays.
  product-interface-input:
    role: User input fields within forms or interface controls.
  accent-tag-rose-bloom:
    role: Small, decorative tags or status indicators.
  accent-tag-sunshine-yellow:
    role: Small, decorative tags or status indicators.
---

## Overview

**North Star:** Violet Gradient Command Center – a luminous digital workspace with shimmering accents.

EverAfter projects a refined, intelligent digital environment using a deep violet primary color accented by vibrant, almost neon, hues. Typography is a confident mix of a distinctive serif for headings and a clean sans-serif for body text, establishing an authoritative yet approachable tone. Surfaces are predominantly light and spacious, juxtaposed with the dramatic dark hero sections, creating clear visual hierarchy and drawing attention to key AI product features. Interaction elements are clearly defined with ample padding and generously rounded corners, suggesting a user-friendly, modern experience.

### Do's

- Use Moret font for all headlines, applying `letterSpacing: -0.0190em` consistently for high impact.
- Apply Electric Violet (#793cfb) only for primary interactive elements, reserving its vividness for key actions.
- Ensure all buttons and inputs have a 999px border-radius, creating a soft, approachable pill-shaped appearance.
- Maintain a clear visual hierarchy by using Midnight Orchid (#221437) for primary text and Canvas White (#ffffff) for page backgrounds in light sections.
- Separate sections with a minimum of 186px vertical spacing, and content blocks with 42px internal card padding to ensure readability and spaciousness.
- Utilize Ghost Marble (#f8f5ff) as a subtle background for secondary content sections or slightly elevated interface elements to add depth without heaviness.
- Apply the Hero Gradient (linear gradient from #e7cae4 to #f8f5ff) specifically for prominent banner areas and large hero sections to build visual drama.

### Don'ts

- Do not use saturated colors on anything other than accent tags or primary calls to action; maintain a mostly neutral palette for content.
- Avoid applying heavy drop shadows; the system favors subtle elevation cues like background color changes or faint shadow tints.
- Do not deviate from the established border radii; the combination of 999px for interactive elements and 24px for cards is a signature element.
- Refrain from tight spacing; an ample use of a minimum 8px element gap and much larger section gaps defines the spacious aesthetic.
- Do not mix Moret with other serif typefaces; stick to Moret for display and Inter for body copy.
- Avoid using any black (#000000) for body text; it's reserved for specific graphic elements or very large, impactful text against light backgrounds.
- Do not introduce new border styles; the design primarily uses subtle 1px solid borders or relies on background contrast for separation.

### Layout

The page primarily uses a max-width contained layout of 1440px, with content centered. The hero section often features a full-bleed dark background with a dramatic gradient, hosting a large, centered headline and calls to action. Subsequent sections alternate between light (#f8f5ff) and dark (#221437) backgrounds, creating a clear visual rhythm. Content is arranged in a fluid text-left/visual-right pattern, or centered stacks. Card grids are used for features and testimonials, typically in a 3-column layout. The overall density is spacious, with significant vertical padding between sections (186px) to give elements room to breathe. Navigation is a consistent top bar that remains visible, featuring clear product categories and prominent 'Log In' and 'Get a demo' actions.

### Imagery

Imagery primarily consists of product screenshots featuring clean, modern UI designs, often placed within a device mockup on a plain or subtly gradient background. These are explanatory and product-focused, showcasing the software's functionality rather than lifestyle. Abstract, geometric illustrations with a distinct visual style (e.g., mazes, data visualizations) are used decoratively to explain complex concepts. Icons are generally filled and monochromatic, supporting quick visual cues. Imagery plays a significant role in conveying information and product value, occupying substantial visual space, especially in the hero and feature sections, but always with a contained, structured presentation rather than full-bleed.
