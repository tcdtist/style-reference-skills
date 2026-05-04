---
version: alpha
name: Acolorbright
description: Acolorbright employs a sophisticated, minimalist aesthetic, using a clean, monochromatic canvas to highlight content and imagery. Typography is precise and confidently understated, defining hierarchy through size and nuanced weight rather than color. Interactive elements are sparse but clearly defined, often using soft borders and subtle background shifts to indicate affordance. The overall impression is one of grounded professionalism and clarity, with design choices geared towards content presentation and subtle interaction rather than overt brand expression through color.
colors:
  ink: "#1a1a1a"
  charcoal-mist: "#666666"
  ash-gray: "#999999"
  cloud-white: "#f2f2f2"
  paper-white: "#ffffff"
  pure-black: "#000000"
  silver-tone: "#e6e6e6"
  deep-graphite: "#262626"
  vivid-violet: "#6a0dad"
  lush-green: "#a3ff00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.25
    letterSpacing: -0.12px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.24px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.15
    letterSpacing: -0.4px
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 16px
  sectionGap: 64px
components:
  ghost-button:
    role: Secondary action button for low-priority interactions.
  filled-button-dark:
    role: Primary action button for important interactions.
  feature-card:
    role: Container for showcasing projects or service areas.
  case-study-thumbnail:
    role: Visual link to detailed case studies within grids.
  service-section-header:
    role: Numbered heading for main content sections.
---

## Overview

**North Star:** Gallery Canvas

Acolorbright employs a sophisticated, minimalist aesthetic, using a clean, monochromatic canvas to highlight content and imagery. Typography is precise and confidently understated, defining hierarchy through size and nuanced weight rather than color. Interactive elements are sparse but clearly defined, often using soft borders and subtle background shifts to indicate affordance. The overall impression is one of grounded professionalism and clarity, with design choices geared towards content presentation and subtle interaction rather than overt brand expression through color.

### Do's

- Use RiformaLLWeb at weight 400 for all text, varying size for hierarchy and setting letter-spacing to -0.01em.
- Maintain a monochromatic palette with Paper White (#ffffff) as the dominant background and Ink (#1a1a1a) for primary text.
- Apply 12px border radius to all images and larger content cards, and 8px to buttons and small list items.
- Utilize Charcoal Mist (#666666) for secondary text and subtle background fills to introduce visual depth without strong contrast.
- Employ Deep Graphite (#262626) for filled buttons when a clear, direct action is needed.
- Structure page content using a consistent 64px vertical gap between main sections.
- Ensure interactive elements are clearly delineated through subtle borders with Silver Tone (#e6e6e6) or background shifts to Deep Graphite (#262626).

### Don'ts

- Avoid introducing additional saturated colors beyond Vivid Violet (#6a0dad) and Lush Green (#a3ff00) as they are reserved for specific brand elements and imagery.
- Do not use heavy shadows or gradients; rely on flat surfaces, clear typography, and subtle borders for hierarchy.
- Refrain from using varied font weights; RiformaLLWeb 400 is the only typeface weight permitted.
- Do not break the clear vertical rhythm of 64px section spacing with arbitrary gaps.
- Avoid overly bold or aggressive calls to action; buttons should be understated but functionally clear.
- Do not use fully justified text; left-align content for a clean reading experience.
- Avoid making content elements look like primary actions when they are not; reserve button styling for explicit interactive elements.
