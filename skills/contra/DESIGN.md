---
version: alpha
name: Contra
description: Contra embraces a sleek, desaturated design language with crisp typography and subtle interactions. The interface prioritizes clear content hierarchy on a largely achromatic canvas, punctuated by a deep slate gray for primary actions and occasional, carefully placed pops of vivid color within content modules. Component surfaces typically feature soft, rounded edges and minimal elevation, fostering a sense of approachability and digital craftsmanship.
colors:
  canvas-white: "#ffffff"
  midnight-slate: "#222834"
  ash-gray: "#14171f"
  phantom-gray: "#677084"
  silver-pine: "#9ba2b0"
  porcelain: "#e5e7eb"
  ghost-white: "#f5f6f9"
  charcoal-black: "#000000"
  cloud-gray: "#d0d4dc"
  contra-violet: "#6a57e3"
  blush-pink: "#45192f"
  electric-pink: "#cd74dd"
  coral-red: "#ff5a5e"
  lavender-mist: "#ddd8ff"
  lime-zest: "#f0fb96"
  ocean-spectrum: "#cdefd0"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.14px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.39
    letterSpacing: 0.04px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.24px
  display:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 0.88
    letterSpacing: -0.58px
spacing:
  cardRadius: 16px
  buttonRadius: 24px
  elementGap: 4px
  sectionGap: 65px
components:
  filled-primary-button:
    role: Calls to action, form submissions.
  ghost-button:
    role: Secondary actions, filtering, navigation.
  outlined-input-field:
    role: User input for forms, search bars.
  compact-filter-button:
    role: Filtering and categorization within content sections.
  content-card-featured:
    role: Displaying articles, projects, or featured content.
  branded-content-card:
    role: Showcasing specific branded content with unique backgrounds.
  navigation-link:
    role: Primary site navigation in the header and footer.
---

## Overview

**North Star:** Frosted glass on dark slate; a refined digital workspace.

Contra embraces a sleek, desaturated design language with crisp typography and subtle interactions. The interface prioritizes clear content hierarchy on a largely achromatic canvas, punctuated by a deep slate gray for primary actions and occasional, carefully placed pops of vivid color within content modules. Component surfaces typically feature soft, rounded edges and minimal elevation, fostering a sense of approachability and digital craftsmanship.

### Do's

- Use Midnight Slate (#222834) exclusively for filled primary buttons and the most prominent text on light backgrounds.
- Apply Canvas White (#ffffff) for all main page backgrounds and component surfaces to maintain a pristine aesthetic.
- Employ GT Standard L 58px with letter-spacing -0.58px for all main section headlines, giving them a distinct condensed aggression.
- Prioritize 24px border-radius for all interactive buttons and 16px for content cards to unify the component curvature.
- Maintain a clear visual hierarchy by limiting saturated colors to decorative content cards and subtle functional accents, keeping core UI achromatic.
- Utilize Phantom Gray (#677084) for secondary text, labels, and hair-thin dividers to preserve visual lightness.
- Ensure input fields have sharp, 0px radius borders in Charcoal Black (#000000) for a precise, functional appearance.

### Don'ts

- Do not use highly saturated colors for button backgrounds or primary text unless it’s a specific branded content block.
- Avoid heavy shadows or gradients on core UI elements; elevation should be minimal and primarily achieved with the provided soft shadows.
- Do not use default system fonts; always specify GT Standard M or L, or their designated substitutes.
- Refrain from using more than two distinct text sizes within a single component to prevent visual clutter.
- Do not introduce new border radii beyond the defined 24px, 16px, 10px, 4px, 32px, 40px, and 50% for consistency.
- Never use less than 4px element spacing; maintain a minimum of 4px between adjacent elements.
- Do not apply excessive padding; adhere to the 12px card padding and ensure button padding is symmetrical from the center.

### Layout

The page maintains a centered max-width layout for most content, with a full-bleed hero section at the top featuring a subtle gradient background and centered headline. Content sections follow a consistent vertical rhythm, often alternating between a single-column block and a multi-column (e.g., 4-column) grid of content cards. Navigation is handled by a sticky top bar. Content arrangement often features text-dominant sections followed by image-rich grids. The overall density is balanced, allowing breathing room between sections while presenting information in a structured, digestible manner.

### Imagery

The site uses a mixture of diverse imagery: product screenshots, abstract graphics, and some lifestyle/candid photography within content modules. Product screenshots are typically contained and framed, often with contextual UI elements. Abstract graphics are used decoratively, integrating with the card backgrounds. Photography, when present, is diverse in style but generally contained within card components rather than full-bleed heroes. Icons are minimalist, primarily outlined or filled in achromatic tones. Imagery is utilized both for decorative atmosphere and to showcase creative work, but doesn't dominate page density; text remains a strong focus.
