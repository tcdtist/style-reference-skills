---
version: alpha
name: Spécialiste Belge
description: Misuko's design system evokes a calm, natural modernity, reminiscent of bespoke packaging. It builds on a stark light canvas with rich dark typography, punctuated by a recessive, earthy accent color. The visual identity emphasizes spaciousness and precise detailing, using subtle textural shifts in backgrounds and minimal borders to define discrete content blocks without heavy visual weight. Components are designed for clarity and understated presence, allowing content and product imagery to take precedence.
colors:
  canvas-almond: "#fcf9ee"
  soft-vanilla: "#f2efe3"
  deep-licorice: "#000000"
  light-pebble: "#bcbab2"
  charcoal-gray: "#6a6965"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.79
    letterSpacing: -0.28px
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.36
    letterSpacing: -0.5px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.66px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.12
    letterSpacing: -0.73px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.97
    letterSpacing: -1.73px
spacing:
  elementGap: 17px
  sectionGap: 20px
components:
  ghost-button:
    role: Interactive element
  outlined-call-to-action-button:
    role: Primary interactive element
  content-card:
    role: Information grouping and display
  informational-card-padded:
    role: Detailed content display
  text-input-field:
    role: User data entry
  rounded-action-link:
    role: Inline navigation or primary call to action
---

## Overview

**North Star:** Organic minimalism, gentle contrast.

Misuko's design system evokes a calm, natural modernity, reminiscent of bespoke packaging. It builds on a stark light canvas with rich dark typography, punctuated by a recessive, earthy accent color. The visual identity emphasizes spaciousness and precise detailing, using subtle textural shifts in backgrounds and minimal borders to define discrete content blocks without heavy visual weight. Components are designed for clarity and understated presence, allowing content and product imagery to take precedence.

### Do's

- Prioritize text content against Canvas Almond (#fcf9ee) or Soft Vanilla (#f2efe3) backgrounds to ensure high readability.
- Use Beausite font family with specified `font-feature-settings` for all text elements to maintain brand distinctiveness.
- Define content sections primarily through subtle background color shifts between Canvas Almond (#fcf9ee) and Soft Vanilla (#f2efe3), rather than heavy borders or shadows.
- Apply Deep Licorice (#000000) for all primary text, headings, and outlines of interactive elements to maintain high contrast and clarity.
- Maintain generous spacing, with 17px for `elementGap` and 34px for `cardPadding`, creating an open and airy feel.
- Utilize Charcoal Gray (#6a6965) for all secondary and tertiary information to create a visual hierarchy without visual clutter.
- All interactive links that convey an action should have a 20px border-radius to adopt the signature rounded pill shape.

### Don'ts

- Avoid using bold, saturated colors for backgrounds or large areas; confine color to subtle accents or imagery.
- Do not introduce strong drop shadows; the system relies on minimal elevation and background shifts.
- Do not deviate from the Beausite typeface or its specific font feature settings; it is critical to brand identity.
- Avoid tight element spacing; the 'comfortable' density is a core characteristic of the layout.
- Do not use generic system fonts; the custom 'Beausite' font is a cornerstone of the visual style.
- Do not use square or rectangular buttons or links for primary actions; the 20px `border-radius` is a key brand identifier for interactive elements.

### Layout

The page maintains a centered max-width content area, ensuring readability and visual focus. The hero section is a split layout with text on the left and full-bleed imagery on the right. Content sections generally follow a consistent vertical rhythm with comfortable spacing, often alternating between left-aligned text blocks and right-aligned visuals or feature lists. A prominent pattern includes 3-column card grids for features, all with consistent padding. The navigation is a sticky top bar, minimally interrupting the content flow.

### Imagery

The site primarily uses product photography and lifestyle imagery, often featuring food and drink. Photography is generally high-key with soft lighting, sometimes on plain white or desaturated backgrounds (like the cardboard boxes). Product imagery is tightly cropped, showcasing the items without excessive context. Small decorative icons are largely line-based with a thin stroke, typically rendered in Deep Licorice outlines or using the brand's primary text color to integrate seamlessly with the UI, serving an explanatory role rather than a heavy decorative one. Density of imagery is moderate, balancing descriptive visuals with ample negative space.
