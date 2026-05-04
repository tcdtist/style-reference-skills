---
version: alpha
name: Lightdash
description: Lightdash employs a precise, tech-forward aesthetic using a monochromatic palette punctuated by a single vibrant accent. Typography is a key identifier, balancing strong, impactful sans-serif headlines with clean, readable body text. Components favor soft curves and subtle elevation, appearing lightweight yet defined, maintaining a sense of digital clarity and focused productivity. The overall design feels robust and intelligent, reflecting its AI/BI platform nature.
colors:
  midnight-ink: "#1a1b25"
  charcoal-slate: "#272835"
  deep-indigo: "#36394a"
  steel-gray: "#666d80"
  cloud-gray: "#818898"
  stone-wash: "#a4abb8"
  off-white: "#f8fafb"
  canvas-white: "#ffffff"
  lava-cloud: "#eceff3"
  ghost-fill: "#f6f8fa"
  electric-violet: "#5e4cff"
  lavender-mist: "#dfdbff"
  pixel-purple: "#c8ccf3"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
    letterSpacing: -0.01px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.14
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.025px
  display:
    fontFamily: "system-ui"
    fontSize: 76px
    lineHeight: 0.9
    letterSpacing: -0.025px
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 40-64px
components:
  primary-action-button:
    role: Call to action.
  secondary-ghost-button:
    role: Secondary action or subtle interaction.
  tertiary-filled-button:
    role: Informational actions or less prominent calls to action.
  interactive-chip-button:
    role: Filter chips or toggleable options.
  elevated-feature-card:
    role: Showcasing product features or key information.
  simple-information-card:
    role: Containing lists, text, or less emphasized content.
  segmented-control-item:
    role: Selectable options within a group.
  dark-input-field:
    role: User input for forms in a dark context.
---

## Overview

**North Star:** Codebase blueprint on frosted glass

Lightdash employs a precise, tech-forward aesthetic using a monochromatic palette punctuated by a single vibrant accent. Typography is a key identifier, balancing strong, impactful sans-serif headlines with clean, readable body text. Components favor soft curves and subtle elevation, appearing lightweight yet defined, maintaining a sense of digital clarity and focused productivity. The overall design feels robust and intelligent, reflecting its AI/BI platform nature.

### Do's

- Use Electric Violet (#5e4cff) exclusively for primary calls-to-action and critical interactive highlights.
- Apply Britti Sans Trial Semibold for all primary headings, using the specified letter-spacing for each size.
- Maintain a clear visual hierarchy by limiting saturated colors to Electric Violet and its softer accent tints.
- Utilize Canvas White (#ffffff) as the dominant page background and primary card surfaces for visual breathability.
- Implement 8px border-radius for all buttons and 12px for cards to maintain consistent soft-edged elements.
- Differentiate UI surfaces using Charcoal Slate (#272835) for darker elements and Lava Cloud (#eceff3) for subtle background variations.
- Employ IBM Plex Mono for all code blocks or technical data displays to ensure typographic distinction and readability.

### Don'ts

- Do not introduce new saturated hues outside of the established Electric Violet and its related accent shades.
- Avoid using drop shadows on functional UI elements unless it's a card from the 'Elevated Feature Card' component.
- Do not vary letter-spacing for Britti Sans headlines from the specified -0.025em for large sizes and -0.020em for smaller sizes.
- Never use generic system fonts for branding or primary content where Britti Sans or Inter are specified.
- Do not use Electric Violet (#5e4cff) for body text or large blocks of content; it is reserved for action and accent.
- Avoid excessive use of very dark backgrounds; the system leans heavily on light mode with dark neutral accents.
- Do not apply large, rounded corners (e.g., 20px) to anything other than the specific Elevated Feature Card and pill-shaped elements.

### Layout

The page adheres to a max-width contained layout with content centered, though specific sections may break this for full-bleed effects. The hero section features a prominent headline centered over a nuanced background of dark neutrals and pixelated violet accents. Section rhythm is primarily defined by consistent vertical spacing, creating breathing room, and alternating background colors (Canvas White vs. Lava Cloud) to delineate content blocks. Content arrangement often utilizes two-column layouts with text-left/image-right or centered stacks. Navigation is a sticky top bar, providing persistent access to key links.

### Imagery

Imagery treatment is primarily focused on abstract, pixelated backgrounds and product UI screenshots. The pixelated patterns, often in shades of violet or dark grays (Pixel Purple #c8ccf3), provide a technical, data-driven atmosphere. Product screenshots feature clean, contained UI elements on dark backgrounds, often with simple, illustrative icons. Icons are predominantly outlined, thin stroke weight, maintaining the minimalist and precise aesthetic. The visual density is balanced, allowing prominent text to lead, with imagery serving as supportive illustration or product showcase rather than decorative flourish for its own sake.
