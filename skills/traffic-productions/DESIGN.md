---
version: alpha
name: Traffic Productions
description: This design system projects a raw, industrial efficiency, like a minimalist print workshop. Bold, condensed typography in Suisse (or a similar sans-serif) dominates the visual field, creating an assertive, no-nonsense tone. The stark black and white palette is punctured by a single, aggressive yellow accent, reminiscent of hazard tape or highlighting, which directs attention and provides visual adrenaline. Understated component styling, characterized by sharp angles and strong lines, reinforces the functional and direct approach.
colors:
  midnight-ink: "#151515"
  canvas-white: "#f3f3f3"
  highlight-yellow: "#fff824"
  pure-black: "#000000"
  faded-gray: "#e5e5e5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 14.04
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 20.88
    letterSpacing: -0.18px
  subheading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 30
    letterSpacing: -0.6px
  heading:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 50.76
    letterSpacing: -1.62px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 84px
    lineHeight: 74.04
    letterSpacing: -3.36px
  display:
    fontFamily: "system-ui"
    fontSize: 108px
    lineHeight: 95.04
    letterSpacing: -4.75px
spacing:
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 48px
components:
  cookie-bar:
    role: 
  about-section-non-agency-offer:
    role: 
  work-card-project-listing:
    role: 
  text-link-button:
    role: Basic navigation and call to action.
  pill-button:
    role: Primary action button, standing out with its distinctive shape.
  framed-box-button:
    role: Interactive elements with a strong visual presence, like the 'Cookies' banner or content cards.
  navigation-link:
    role: Main navigation items.
  cookie-bar:
    role: Legal compliance notification.
  section-divider:
    role: Visual separation between content blocks.
---

## Overview

**North Star:** Industrial Print Workshop: stark black, off-white, and sharp yellow accents on bold, condensed type.

This design system projects a raw, industrial efficiency, like a minimalist print workshop. Bold, condensed typography in Suisse (or a similar sans-serif) dominates the visual field, creating an assertive, no-nonsense tone. The stark black and white palette is punctured by a single, aggressive yellow accent, reminiscent of hazard tape or highlighting, which directs attention and provides visual adrenaline. Understated component styling, characterized by sharp angles and strong lines, reinforces the functional and direct approach.

### Do's

- Use Suisse (or a substitute with similar condensed, impactful qualities) for all typography.
- Maintain a stark, high-contrast palette with Midnight Ink (#151515) for text and Canvas White (#f3f3f3) for backgrounds.
- Reserve Highlight Yellow (#fff824) exclusively for active states, small accents, or critical interactive elements.
- Apply 0px border radius to all elements except explicitly pill-shaped buttons (9999px).
- Utilize fine lines (1px) in Midnight Ink (#151515) for borders and dividers to emphasize structure.
- Employ the aggressive letter-spacing and low line-height values defined in the typography section to create dense, impactful text blocks.

### Don'ts

- Do not introduce additional color accents or gradients, as they dilute the system's impact.
- Avoid soft shadows or subtle gradients; the design relies on flat colors and sharp distinctions.
- Do not use rounded corners unless it's a specific pill button; maintain a rectilinear aesthetic.
- Never use generic body text; all text should adhere to the Suisse font family and its specified weights/sizes.
- Do not use varied padding or margin values for similar components; adhere to the defined spacing tokens (e.g., 9px for component padding, 20px for larger element margins).
- Avoid complex layouts or overlapping elements; maintain a clean, grid-like structure with clear visual separation.

### Layout

The site employs a full-width layout, pushing content to the edges of the viewport, but features a strong underlying grid for content organization. The hero section is characterized by a large, centered, bold heading over a Canvas White background, occupying significant vertical space. Sections flow with consistent vertical spacing (approx. 48px `sectionGap`), often using thin rule lines and Highlight Yellow accents as visual dividers or separators. Content is typically arranged in clear, contained blocks, favoring a text-left/text-right or stacked approach, with visual tension created by the bold typography and strategic use of negative space. Navigation is a sticky top bar with minimal styling, emphasizing functionality. The layout is information-dense but meticulously structured, akin to a printed magazine.

### Imagery

The visual language is characterized by an absence of stock photography or complex illustrations. Instead, it relies on minimalist icons (black on white), carefully framed product/project samples, and abstract graphical elements like lines and arrows. When photography is present, it's typically within a contained frame, often monochrome (as seen in the 'House of Schwarzkopf' example), treated as an object within the design grid rather than a background element. The overall density of imagery is low, with text and graphical lines playing a more dominant role in conveying information and mood. Imagery serves an explanatory or showcase role for work, rather than decorative atmosphere.
