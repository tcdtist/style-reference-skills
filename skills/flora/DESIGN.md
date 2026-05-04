---
version: alpha
name: FLORA
description: FLORA evokes a midnight command center atmosphere, blending stark functionality with subtle creative flair. It uses a predominantly dark theme with surfaces ranging from pure black to dark charcoal, accented by bright white text and subtle gray borders. Typography plays a central role, leveraging custom fonts with precise letter-spacing to create a crisp, almost whispered authority. Interactive elements are sparse, using ghost button styles and a singular vivid green accent for 'New' tags and hints of activation, maintaining a focus on content over heavy UI.
colors:
  absolute-zero: "#000000"
  deep-charcoal: "#191919"
  off-white: "#eeeeee"
  medium-gray: "#606060"
  light-gray: "#b4b4b4"
  ash-gray: "#7b7b7b"
  dark-charcoal-outline: "#303030"
  soft-gray: "#bfbfbf"
  onyx-faint: "#050505"
  vivid-green: "#71d083"
typography:
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.025px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.15
    letterSpacing: -0.03px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.1
    letterSpacing: -0.036px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.1
    letterSpacing: -0.03px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.1
    letterSpacing: -0.03px
spacing:
  cardRadius: 10px
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 48px
components:
  ghost-navigation-button:
    role: Navigational elements in the header and sub-menus.
  outlined-pill-button-dense:
    role: Compact secondary actions and filters.
  outlined-rounded-button-compact:
    role: Informational or tertiary actions.
  primary-cta-button:
    role: Main call to action, stand-alone buttons for key interactions.
  default-card:
    role: Content containers for features, showcases, or related information.
  elevated-card:
    role: Specialized cards requiring slightly more visual emphasis, like primary showcase items.
  text-input-underlined:
    role: User input fields that blend into the dark canvas.
  new-tag:
    role: Highlights new features or content.
---

## Overview

**North Star:** Midnight command center

FLORA evokes a midnight command center atmosphere, blending stark functionality with subtle creative flair. It uses a predominantly dark theme with surfaces ranging from pure black to dark charcoal, accented by bright white text and subtle gray borders. Typography plays a central role, leveraging custom fonts with precise letter-spacing to create a crisp, almost whispered authority. Interactive elements are sparse, using ghost button styles and a singular vivid green accent for 'New' tags and hints of activation, maintaining a focus on content over heavy UI.

### Do's

- Prioritize Absolute Zero (#000000) for page backgrounds and Deep Charcoal (#191919) for card surfaces to maintain the dominant dark theme.
- Use Off White (#eeeeee) for all primary text, headings, and essential UI elements for readability and high contrast.
- Apply Geist as the primary typeface for body text and interactive elements, leveraging its custom features for precise control like 'blwf', 'cv03', 'cv04', 'cv09', 'cv11'.
- Maintain a compact horizontal padding of 14px for buttons and 10px or 12px for interactive elements to create a dense, functional feel.
- Utilize a 9999px border-radius for all primary buttons and tags to create a distinct pill shape.
- Reserve Vivid Green (#71d083) exclusively for 'New' tags and subtle, functional accents, avoiding overuse to preserve its impact.
- Employ a base unit of 4px for all spacing decisions, creating a compact and consistent element distribution.

### Don'ts

- Avoid using bright or overly saturated colors for large surface areas; color should primarily serve as functional highlight or subtle accent.
- Do not introduce heavy box shadows or strong elevation effects; maintain the predominantly flat, dark aesthetic.
- Do not vary line-heights significantly for body text; keep type compact and precise.
- Never use generic sans-serif fonts where Geist is specified; the unique letter-spacing and features of Geist are integral to the brand identity.
- Avoid wide padding on cards or sections, as the design prioritizes a compact, information-dense layout.
- Do not use dark text colors on mid-tone gray backgrounds, as contrast will be insufficient for this dark theme.
- Do not use bold weights indiscriminately; the system mostly relies on lighter or regular weights, with specific heavier weights for structured data or distinct headings.

### Layout

The page primarily uses a max-width contained layout, likely around 1200px, but features full-bleed dark sections to establish depth. The hero section is a full-width dark canvas with a centered, large headline and prompt input, setting a focused, interactive tone. Section rhythm alternates between full-bleed dark zones and content sections that feature two or three-column card grids. Content is arranged in alternating text-left/visual-right patterns or as tightly packed card grids for features. Vertical spacing between sections is consistent but not overly generous, maintaining density. Navigation consists of a sticky top bar with ghost links, a primary CTA button, and a secondary outlined CTA, all compact.

### Imagery

The visual language is split between abstract generative graphics and tightly composed, often high-contrast product screenshots within dark UI frames. Photography, where present, is primarily product-focused or showcases creative outputs, often framed by the dark UI. Illustrations are minimal, leaning towards highly structured, geometric, or abstract forms that complement the AI theme. Icons are outlined, simple, and monochrome (Off White #eeeeee), emphasizing function over decoration. Images are typically contained within cards with rounded corners or integrated into the dark background, maintaining a high density of visual information.
