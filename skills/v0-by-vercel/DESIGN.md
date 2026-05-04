---
version: alpha
name: v0 by Vercel
description: The design feels like a functional schematic on a stark white drafting table. Its nearly monochrome palette — #FFFFFF, #FAFAFA, #EAEAEA, #171717 — creates a utility-first atmosphere where user input is the only source of color. Typography is the main architectural element; a custom sans-serif is used everywhere, with tight negative letter-spacing at large sizes creating dense, impactful headlines. The UI is built from simple primitives: solid black CTAs with an 8px radius and subtly bordered white chips, distinguishing primary commands from secondary suggestions.
colors:
  paper-white: "#ffffff"
  canvas: "#fafafa"
  line: "#eaeaea"
  subtext: "#666666"
  icon: "#7d7d7d"
  ink: "#171717"
  onyx: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.17
    letterSpacing: -1.28px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -2.88px
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 96px
components:
  main-prompt-input:
    role: 
  template-filter-pills:
    role: 
  button-group-action-hierarchy:
    role: 
  primary-cta-button:
    role: The main action on a page, like 'Sign Up'.
  ghost-navigation-link:
    role: Secondary navigation actions like 'Sign In'.
  prompt-suggestion-chip:
    role: Clickable suggestions below the main input.
  filter-pill-button:
    role: Filtering content categories like 'Landing Pages'.
  main-prompt-input:
    role: The primary interaction point for user queries.
  header-divider:
    role: Separates the sticky header from page content.
---

## Overview

**North Star:** A Machinist's Blueprint. Precision and function are paramount, with every element serving a clear purpose on a clean, technical surface.

The design feels like a functional schematic on a stark white drafting table. Its nearly monochrome palette — #FFFFFF, #FAFAFA, #EAEAEA, #171717 — creates a utility-first atmosphere where user input is the only source of color. Typography is the main architectural element; a custom sans-serif is used everywhere, with tight negative letter-spacing at large sizes creating dense, impactful headlines. The UI is built from simple primitives: solid black CTAs with an 8px radius and subtly bordered white chips, distinguishing primary commands from secondary suggestions.

### Do's

- Use GeistSans for all text, without exception.
- Apply aggressive negative letter-spacing to headings 24px and larger.
- Adhere strictly to the achromatic palette; all color comes from content, not chrome.
- Use 8px radius for buttons and 12px for cards and inputs.
- Use 1px solid #eaeaea for all visual dividers.
- Differentiate action hierarchy using fills and borders: solid for primary, bordered for secondary, text-only for tertiary.
- Maintain generous whitespace (min. 96px) between content sections.

### Don'ts

- Do not introduce any saturated colors to the UI chrome.
- Do not use system fonts or other brand fonts.
- Do not use shadows on interactive elements like buttons or inputs; reserve them for cards.
- Do not use any border-radius values other than 6px, 8px, 12px, or 9999px (for pills).
- Do not use gradients or background images.
- Do not use bold (700+) font weights; rely on 600 weight and size for emphasis.
- Do not create dense layouts; prioritize clarity and space.

### Layout

The layout is clean and centered within a generous max-width container (approx. 1440px). The header is full-width with a 1px bottom border. The hero area is a simple centered stack comprising a headline, a large input field, and suggestion chips. Body sections are separated by large vertical whitespace (~96px) on the Canvas (#fafafa) background, creating a spacious rhythm. Content grids, such as the 3-column template gallery, are the primary structure for displaying information.

### Imagery

This design uses no decorative imagery. Visuals are strictly confined to user-generated content previews within the Template Cards. These thumbnails are presented as raw, unstyled content inside a 12px rounded container. The page is UI-dominant, with imagery serving only to showcase product output, not to build atmosphere.
