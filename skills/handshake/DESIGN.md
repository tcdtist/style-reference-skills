---
version: alpha
name: Handshake
description: Handshake employs a dark, dynamic canvas lit by a vibrant, shifting gradient backdrop, creating a sense of energy and opportunity. Bold, blocky typography ensures high impact against this fluid background, while UI elements are purposefully minimal, often appearing as ghost outlines or subtle containers. The prominent use of a single vivid green accent ensures calls to action pop with urgency, contrasting sharply with the deep dark base.
colors:
  deep-space: "#000000"
  midnight-core: "#14151c"
  cosmic-gray: "#052326"
  stardust: "#ffffff"
  guidepost-green: "#d3fb52"
  muted-text: "#666666"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.1
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 0.85
  display:
    fontFamily: "system-ui"
    fontSize: 201px
    lineHeight: 0.8
    letterSpacing: -4.02px
spacing:
  cardRadius: 24px
  buttonRadius: 8px
  elementGap: 16px
  sectionGap: 24px
components:
  primary-ghost-button:
    role: Call to action variant
  navigation-ghost-button:
    role: Navigation and secondary actions
  primary-filled-button:
    role: High-priority, primary action.
  filter-tag:
    role: Interactive content categorization
  search-input:
    role: Primary form input for search queries.
  feature-card:
    role: Content grouping for features or testimonials.
---

## Overview

**North Star:** Shifting gradient nebula

Handshake employs a dark, dynamic canvas lit by a vibrant, shifting gradient backdrop, creating a sense of energy and opportunity. Bold, blocky typography ensures high impact against this fluid background, while UI elements are purposefully minimal, often appearing as ghost outlines or subtle containers. The prominent use of a single vivid green accent ensures calls to action pop with urgency, contrasting sharply with the deep dark base.

### Do's

- Use 'Stardust' #ffffff for all primary text content and 'Deep Space' #000000 for secondary text and sub-headings to maximize contrast against the dynamic backgrounds.
- Apply 'Guidepost Green' #d3fb52 strictly for primary calls-to-action like 'Sign up' and navigational highlights to draw immediate attention. Do not use for generic elements.
- Maintain a clear visual hierarchy using the large SansPlomb 201px heading specifically for page and section titles, with its tight letter-spacing of -0.0200em for impact.
- Round all interactive elements like buttons and primary inputs with 8px uniform radius, and larger content blocks (cards, main inputs) with 24px radius, unless a pill shape (9999px) is used for tags.
- Implement the radial gradient backgrounds for hero sections or prominent content areas to provide a dynamic, branded visual anchor, ensuring the 'Nebula Gradation' blends from 'Guidepost Green' #d3fb52 to blue.
- Use the Base Unit 8px for all spacing decisions, creating consistent element gaps of 16px horizontally and vertically, and section gaps of 24px.
- Employ ghost button styles (no background, white text, defined border) for secondary actions like 'Log In', making the primary 'Sign up' button stand out distinctly.

### Don'ts

- Do not introduce new vibrant colors outside of the 'Guidepost Green' #d3fb52 accent, or the blue component of the 'Nebula Gradation', to avoid diluting the brand's energetic yet focused palette.
- Avoid generic box shadows or heavy borders on background elements; components should breathe and appear lightweight against the fluid gradient.
- Do not deviate from the specified typefaces, especially SansPlomb for large headlines, as its distinct letter spacing and weight are critical for brand identity.
- Do not use subtle neutrals for critical calls-to-action; 'Guidepost Green' #d3fb52 is reserved for this purpose.
- Avoid excessive text density or complex multi-column layouts, sticking to a comfortable density with clear vertical rhythm and ample breathing room between elements.
- Do not create completely flat design elements. Even ghost buttons and inputs should retain a subtle border or background transparency as defined.
- Do not use generic system fonts for body or UI text; NoiGrotesk with its feature settings is fundamental to the brand's typographic tone.

### Layout

The page structure is full-bleed, with content centered but not strictly constrained by a fixed max-width, allowing the background gradients to stretch across the viewport. The hero section is characterized by a central, bold headline over a gradient background, followed by an input field. Sections are distinct but flow seamlessly, often with ample vertical spacing. Content is generally stacked centrally or in simple text-right/image-left type patterns, ensuring focus on typography and the dynamic backdrop. Navigation is a sticky top bar with ghost controls, and a prominent green primary action button.

### Imagery

The site uses minimal imagery, primarily focusing on abstract, atmospheric radial gradients as backgrounds. There are no photographs or complex illustrations. Icons are simple, outlined, and monochromatic, primarily using 'Stardust' #ffffff or 'Deep Space' #000000, serving purely functional roles like search or navigation prompts rather than decorative ones.
