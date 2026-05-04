---
version: alpha
name: Ballpark
description: Ballpark's design conveys a sense of confident authority through its stark visual contrasts and structured layout. The interplay of deep, near-black text and crisp white backgrounds, punctuated by a single vibrant "Rocket Red" accent, creates a focused, high-contrast experience, much like an advanced research instrument. The generous use of space, especially around core content and within card structures, emphasizes clarity and reduces cognitive load, allowing complex information to be easily digestible. Distinctive rounded forms—from the extra-large button radii to the subtle card curves—soften the otherwise sharp edges, balancing precision with approachability.
colors:
  pitch-black: "#000000"
  ghost-white: "#ffffff"
  ash-gray: "#f9fafb"
  graphite: "#111827"
  slate-blue: "#4b5563"
  medium-gray: "#374151"
  light-gray: "#6b7280"
  border-gray: "#e5e7eb"
  rocket-red: "#fc4a2b"
  passion-red: "#e11d48"
  sunset-orange: "#f97316"
  coral-glow: "#ffac9"
  pale-peach: "#ffe5e0"
  success-green: "#15803d"
  warning-yellow: "#f59e0b"
  pill-button-gradient: "#f87171"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: 0.5px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
    letterSpacing: -0.14px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1
    letterSpacing: -1.47px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1
    letterSpacing: -3.36px
spacing:
  cardRadius: 10px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 64-96px
components:
  announcement-banner:
    role: 
  pill-selector-research-type-tabs:
    role: 
  testimonial-card:
    role: 
  navigation-link:
    role: Primary navigation in header
  secondary-ghost-button:
    role: Tertiary actions, secondary calls to attention
  feature-card:
    role: Showcasing features or testimonials
  header-brand-link:
    role: Brand logo in header
  tertiary-callout-button:
    role: Informational or less prominent calls to action
---

## Overview

**North Star:** High-contrast research tool; like a scientific dashboard with a single, urgent indicator light.

Ballpark's design conveys a sense of confident authority through its stark visual contrasts and structured layout. The interplay of deep, near-black text and crisp white backgrounds, punctuated by a single vibrant "Rocket Red" accent, creates a focused, high-contrast experience, much like an advanced research instrument. The generous use of space, especially around core content and within card structures, emphasizes clarity and reduces cognitive load, allowing complex information to be easily digestible. Distinctive rounded forms—from the extra-large button radii to the subtle card curves—soften the otherwise sharp edges, balancing precision with approachability.

### Do's

- Prioritize high contrast between text and background using Pitch Black (#000000) or Graphite (#111827) on Ghost White (#ffffff) or Ash Gray (#f9fafb).
- Use Rocket Red (#fc4a2b) exclusively for primary call-to-action buttons and essential active states to maintain its impact.
- Apply a 9999px radius for all pill-shaped elements (buttons, tags, filters) and use 6px for standard buttons and inputs.
- Employ the Inter Display font with specific font features ('cv06', 'cv13') for all display-level headlines (42px and above) to achieve its distinct character.
- Maintain generous padding around content blocks and within components, targeting 14-24px for card padding and 8px as a base element gap.
- Utilize the shadow `rgba(0, 0, 0, 0.1) 0px 6px 9px 0px, rgba(75, 85, 99, 0.2) 0px 0px 0px 1px` for all elevated cards and containers to create a consistent lifted appearance.
- Ensure letter-spacing is applied as specified in the typography for Inter and Inter Display, especially the negative values for larger headlines, to optimize visual density.

### Don'ts

- Do not introduce new primary accent colors; restrict vibrant accents to Rocket Red (#fc4a2b) and its derivatives.
- Avoid using multiple shadows on a single element; stick to the defined shadow styles for cards to prevent visual clutter.
- Do not deviate from the specified font features for Inter and Inter Display, as they are integral to the brand's typographic identity.
- Refrain from using radii smaller than 6px or larger than 10px (except for 9999px pills) to maintain shape consistency.
- Do not use generic system sans-serif for body or heading text; always use 'Inter' for its consistent, readable structure.
- Avoid excessive use of bold text in body copy; reserve weights 600-700 for headings, subheadings, and key UI labels only.

### Layout

The page maintains a centered, max-width layout, effectively creating a content-focused experience within clear boundaries. The hero section is characterized by a centered, bold headline over a white background, occasionally featuring subtle background elements or abstract graphics. Sections generally alternate between centered text stacks and two-column layouts pairing text with images or product illustrations, creating a balanced rhythm. A prominent feature is the use of card grids (often 3-column) for displaying multiple features or testimonials, ensuring content is visually digestible. Navigation is a sticky top bar with a clear brand logo and primary actions. Generous vertical spacing between sections creates breathing room and allows each section to convey a distinct message without visual overlap.

### Imagery

This design primarily uses product screenshots and abstract, organic vector graphics that appear to be illustrations. Photography, when present in testimonials, is framed within rounded containers (16px radius) and sometimes features a subtle, brand-colored overlay (like the red Vodafone graphic). Product screenshots are often contained within structured cards, emphasizing functionality over aesthetic appeal. Illustrations are generally flat, geometric, and either filled with muted, abstract colors or outlines in brand colors like Rocket Red. Iconography is primarily outline-based with a medium stroke weight. The overall role of imagery is explanatory and supportive rather than purely decorative, providing visual context to features and testimonials. Image density is moderate, balanced with significant textual content and whitespace.
