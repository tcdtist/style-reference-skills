---
version: alpha
name: Replicate
description: Replicate offers a dynamic and playful interface that contrasts with its technical subject matter. A vibrant pink-red-yellow gradient serves as a high-energy backdrop, reminiscent of digital signal pathways, while the primary content remains crisp and legible on white and dark gray surfaces. The design balances a bold, almost disruptive hero with a structured, informative presentation lower down the page, using rounded forms sparingly but deliberately to soften areas of interaction amidst sharp-cornered content blocks.
colors:
  absolute-zero: "#202020"
  alabaster: "#ffffff"
  graphite: "#646464"
  silver-mist: "#bfbfbf"
  whisper-white: "#f9f9f9"
  outline-gray: "#d9d9d9"
  blackhole: "#000000"
  cosmic-candy: "#ea2804"
  deep-space-blue: "#032f62"
  sunset-burst: "#dd4425"
  data-bloom-gradient: "#ff6bfc"
  api-success-green: "#2b9a66"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.35px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.4px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.45px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -1.2px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -1.8px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 128px
    lineHeight: 1
    letterSpacing: -3.2px
spacing:
  cardRadius: 0px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 48px
components:
  category-filter-pills:
    role: 
  model-cards-grid:
    role: 
  code-block-with-tabs:
    role: 
  primary-filled-button:
    role: Call to action.
  standard-ghost-button:
    role: Secondary navigation and non-critical actions.
  pill-accent-button:
    role: Highlighting specific features or actions.
  large-search-input-hero:
    role: Prominent site-wide search/query.
  code-block-input:
    role: Interactive code editor or display.
  success-badge:
    role: Indicating successful status or 'Official' tags.
  model-card-small:
    role: Displaying individual ML models.
  navigation-link:
    role: Header navigation and secondary links.
---

## Overview

**North Star:** Neon Gradient Playground. The site feels like an interactive playground built on a fluctuating neon energy field.

Replicate offers a dynamic and playful interface that contrasts with its technical subject matter. A vibrant pink-red-yellow gradient serves as a high-energy backdrop, reminiscent of digital signal pathways, while the primary content remains crisp and legible on white and dark gray surfaces. The design balances a bold, almost disruptive hero with a structured, informative presentation lower down the page, using rounded forms sparingly but deliberately to soften areas of interaction amidst sharp-cornered content blocks.

### Do's

- Apply the Data Bloom Gradient (`linear-gradient(to right bottom, rgb(255, 107, 252), rgb(234, 40, 4), rgb(246, 244, 127))`) for all new hero sections and large marketing blocks to maintain visual brand identity.
- Use Absolute Zero (#202020) for primary body text, headings, and bold calls to action on light backgrounds, ensuring high contrast.
- Construct buttons with a 0px border-radius unless they are specifically 'pill' style (9999px radius), creating a mix of sharp and soft forms.
- Utilize 'rb-freigeist-neue' with -0.0250em letter-spacing for all significant headings (H1-H3) to impart a distinct, modern, and compact appearance.
- Implement `jetbrains-mono` for all code examples, technical labels, and console-like outputs to clearly delineate them from editorial content, using its default sizing.
- Maintain a default card padding of 16px to ensure consistent content density within information blocks.
- Employ the Pill Accent Button (`backgroundColor=rgba(0, 0, 0, 0.3), color=rgba(255, 255, 255, 0.9), borderRadius=9999px, paddingTop=2px, paddingRight=10px, paddingBottom=2px, paddingLeft=10px`) for secondary, context-specific actions within dynamic areas or code blocks.

### Don'ts

- Avoid using generic blue for interactive elements; instead, leverage Cosmic Candy (#ea2804) for primary links and accents.
- Do not introduce heavy shadows or complex elevations; stick to the minimal boxShadow (`rgb(228, 199, 103) 0px 1px 2px 0px`) for subtle visual lift.
- Refrain from using rounded corners on standard content cards or generic inputs; these should generally maintain a 0px border-radius.
- Do not deviate from the specified negative letter-spacing for 'basier-square' and 'rb-freigeist-neue'; it is a key typographic characteristic.
- Avoid decorative imagery or large graphics that distract from the UI elements; primary focus is on functionality and code.
- Do not use dark backgrounds for major content sections below the hero; these should primarily be Alabaster (#ffffff) or Whisper White (#f9f9f9).
- Never replace 'jetbrains-mono' with a proportional font for code snippets; monospace is essential for code readability.

### Layout

The site employs a mixed layout strategy: the hero section is full-bleed, dominated by a vibrant, energetic gradient background and a prominent centered headline. Below the hero, the layout transitions to a max-width contained area, centered on the page for readability. Section rhythm is varied; some sections have large vertical gaps, while others are more compact, presenting interactive elements like model cards in a loose grid. Content arrangement frequently uses 2-column structures, with code blocks often appearing next to descriptive text. A distinctive feature is the horizontal scrolling carousel of model categories and a 3-column implicit card grid for showcasing individual AI models, giving a dense, explorable feel. The navigation is a sticky top bar, providing persistent access across the site.

### Imagery

The visual language is split between functional UI elements and captivating, almost surreal product examples. Product imagery consists of tight, decontextualized crops (like the banana chair) that are both whimsical and illustrative of AI capabilities. Icons are primarily monochrome, outlining crucial functions without adding visual noise. Visuals serve an explanatory role, showcasing the creative outputs of AI models rather than being decorative or lifestyle-oriented. Density is image-moderate: product examples are interspersed to break up text and code, but text remains dominant in information-heavy sections. Treatment is generally contained, sharp-edged, and presented within clean borders, contrasting with the fluid background gradient.
