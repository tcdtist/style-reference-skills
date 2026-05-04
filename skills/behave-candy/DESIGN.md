---
version: alpha
name: BEHAVE Candy
description: BEHAVE Candy uses a playful, high-energy visual system. Vivid violet and bright lime green dominate, creating a bold, almost confectionery palette. Typography is robust and direct, set against ample background space. Components are clean and border-centric, often outlined in the brand's signature blue, maintaining a light, airy feel despite the strong color presence. The overall impression is fun, youthful, and direct.
colors:
  ultraviolet: "#061fff"
  key-lime: "#d3ff56"
  lilac-mist: "#efe5ff"
  soft-plum: "#ceb3ff"
  lavender-haze: "#dfceff"
  pure-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.18px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.21px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.24px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
    letterSpacing: -0.27px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
    letterSpacing: -0.33px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 53px
    lineHeight: 1.1
    letterSpacing: -0.795px
  display:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 1
    letterSpacing: -1.29px
spacing:
  cardRadius: 20px
  buttonRadius: 6.95px
  elementGap: 20px
components:
  primary-action-button:
    role: Key Call-to-Action
  ghost-button:
    role: Secondary or Navigational Action
  pill-button:
    role: Categorization or Tag
  reverse-primary-button:
    role: Highlighted Action on Dark Background
  standard-content-card:
    role: Content Grouping
  hero-section-card:
    role: Promotional Content
  text-input-field:
    role: Data Entry
---

## Overview

**North Star:** Vivid candy wrapper

BEHAVE Candy uses a playful, high-energy visual system. Vivid violet and bright lime green dominate, creating a bold, almost confectionery palette. Typography is robust and direct, set against ample background space. Components are clean and border-centric, often outlined in the brand's signature blue, maintaining a light, airy feel despite the strong color presence. The overall impression is fun, youthful, and direct.

### Do's

- Always use Ultraviolet (#061fff) for primary text and interactive elements to maintain brand vibrancy.
- Utilize Key Lime (#d3ff56) exclusively for primary call-to-action backgrounds and highlight states, ensuring high contrast and immediate recognition.
- Employ Lilac Mist (#efe5ff) for main page and section backgrounds to establish a soft, airy canvas.
- Apply a 6.95px border-radius to all interactive form elements and most buttons for a consistent rounded aesthetic.
- Maintain generous element spacing of 20px for clear separation and visual breathing room between components.
- Structure primary content areas with a default card padding of 30px to frame information effectively.
- Ensure all type uses the 'Good Sans' family, leveraging its custom character and available weights for specific hierarchy.

### Don'ts

- Avoid using Key Lime (#d3ff56) for general text or borders, as its high saturation is reserved for primary actions.
- Do not introduce new grayscale tones; rely on Pure White (#ffffff) and the Lilac Mist (#efe5ff) as the primary neutral canvas.
- Refrain from using hard-edged designs; rounded corners with 6.95px, 20px, or 25px radii are a defining characteristic.
- Do not clutter layouts; maintain the spacious feel by adhering to the established 20px element gap and 30px card padding.
- Do not use dark backgrounds for large content blocks; the brand identity is built on a light, pastel canvas.
- Avoid generic system fonts; the custom 'Good Sans' family is critical for brand personality.
- Do not allow text to appear in colors that fail AA accessibility contrast ratios against its background, particularly Ultraviolet on lighter neutrals.
