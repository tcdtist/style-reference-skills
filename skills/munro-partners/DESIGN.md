---
version: alpha
name: Munro Partners
description: Munro Partners employs a restrained, earthy aesthetic with a foundation of muted neutrals and precise typography. The design emphasizes content clarity over decorative elements, using subtle borders and a limited palette of vivid accent colors to highlight key information and calls to action. Visual weight is maintained through considered spacing and thin lines, creating a sense of understated authority. The overall tone is grounded and professional, reflecting a financial institution's identity.
colors:
  peat-ink: "#3f322a"
  oat-canvas: "#fff9ee"
  silver-clay: "#c5bdb3"
  winter-marble: "#ffffff"
  whisper-gray: "#e5e5e5"
  stone-dust: "#b3aea7"
  forest-teal: "#004e4e"
  amethyst-glow: "#a56eff"
  berry-shadow: "#560e4b"
  sky-glaze: "#bfebfe"
  ocean-blue: "#3074f9"
  honey-gold: "#c67700"
  sunshine-burst: "#feed5a"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.18px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.09
    letterSpacing: 0.374px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.05
    letterSpacing: 0.36px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.13
    letterSpacing: 0.39px
  display:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 0.75
    letterSpacing: 0.544px
spacing:
  cardRadius: 0px
  buttonRadius: 2px
  elementGap: 20px
  sectionGap: 40px
components:
  ghost-outline-button:
    role: Secondary action button, 'See more' prompts
  primary-action-button:
    role: Main call-to-action button
  accent-button-amethyst:
    role: Specific action button, highlighted features
  white-nav-button:
    role: Navigation, 'Skip to content' calls to action.
  information-input-field:
    role: User input fields.
  highlighted-input-field-sky-glaze:
    role: Activated or emphasized input fields.
  search-input-field:
    role: Search bars with a focused context.
  form-input-field-oat-warm:
    role: Standard form input fields.
  muted-badge:
    role: Tags, categories, subtle labels.
---

## Overview

**North Star:** earthy minimalist canvas

Munro Partners employs a restrained, earthy aesthetic with a foundation of muted neutrals and precise typography. The design emphasizes content clarity over decorative elements, using subtle borders and a limited palette of vivid accent colors to highlight key information and calls to action. Visual weight is maintained through considered spacing and thin lines, creating a sense of understated authority. The overall tone is grounded and professional, reflecting a financial institution's identity.

### Do's

- Use Peat Ink (#3f322a) for all primary body text and headings.
- Maintain Oat Canvas (#fff9ee) as the dominant background color for content sections.
- Apply 2px border radius for all buttons and badges, reserving 0px for interactive list items.
- Utilize Forest Teal (#004e4e) exclusively for the primary call-to-action button background.
- Implement thin borders (1px) in Silver Clay (#c5bdb3) for subtle content division.
- Ensure generous vertical spacing between sections, using sectionGap of 40px as a minimum.
- Employ the neue-haas-grotesk-display font for headings and most UI elements, using its specific letter spacing values for each size.

### Don'ts

- Avoid using multiple vivid accent colors within a single visual area; use them sparingly to highlight specific actions.
- Do not introduce strong shadows or elevation; maintain a flat, clean aesthetic.
- Refrain from using any additional colors beyond the defined palette to preserve the muted brand identity.
- Do not use highly decorative gradients; stick to solid color fills for backgrounds and components.
- Avoid large, impactful imagery beyond the hero section; keep images contained and functional.
- Do not deviate from the defined border radii; maintain 2px for small interactives and 0px for cards/lists unless specifically noted.
- Do not use overly complex or busy layout grids; opt for clean, aligned blocks of content.

### Layout

The page structure is full-bleed for the initial hero section, with a dominant max-width 1200px contained layout for subsequent content. The hero features a large background image with a centered headline in white. Content sections below often alternate between text-dominant blocks and split sections with text and visual elements (like video cards) arranged in a balanced two-column format. The vertical rhythm is comfortable, with consistent section gaps creating clear separation. Navigation is handled by a minimal top bar with a 'MENU' hamburger icon, and the brand name 'MUNRO' consistently positioned on the right.

### Imagery

The site primarily uses high-quality, atmospheric landscape photography, often in full-bleed hero sections, to convey a sense of journey and growth. Product-specific imagery features contained videos or subtle abstract graphics. Icons are minimal, outlined, and monochromatic, used functionally rather than decoratively. The imagery serves to create an inviting atmosphere and contextualize concepts rather than being purely illustrative or product-focused. Image density is low in content areas, with text dominating.
