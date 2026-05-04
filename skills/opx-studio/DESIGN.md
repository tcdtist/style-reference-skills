---
version: alpha
name: OPX Studio
description: OPX Studio employs a high-contrast, minimalist dark aesthetic, making content feel bold and impactful. The design prioritizes stark text-heavy layouts on a deep black canvas, with subtle gray borders and accents to define interactive elements. Photography and visuals are given prominence within these dark sections, often full-bleed. Typography is confident and direct, relying on strong weights and generous letter-spacing to command attention.
colors:
  midnight: "#020202"
  void-black: "#000000"
  ghost-gray: "#292a2c"
  snow: "#ffffff"
  slate-mist: "#9b9b9b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.67
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.67
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.42
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.38
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.29
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.21
  display-lg:
    fontFamily: "system-ui"
    fontSize: 111px
    lineHeight: 1
spacing:
  cardRadius: 45px
  buttonRadius: 45px
  elementGap: 20px
  sectionGap: 100px
components:
  ghost-button:
    role: Outlined clickable element for secondary actions and case study links.
  navigation-link:
    role: Primary navigation item.
  footer-link:
    role: Informational links in the footer.
  content-card-headline:
    role: Headline for project previews.
---

## Overview

**North Star:** Deep night canvas

OPX Studio employs a high-contrast, minimalist dark aesthetic, making content feel bold and impactful. The design prioritizes stark text-heavy layouts on a deep black canvas, with subtle gray borders and accents to define interactive elements. Photography and visuals are given prominence within these dark sections, often full-bleed. Typography is confident and direct, relying on strong weights and generous letter-spacing to command attention.

### Do's

- Always use Midnight (#020202) for primary page backgrounds to maintain the dark canvas theme.
- Utilize Snow (#ffffff) for all main headings and primary body text to ensure maximum contrast.
- Apply Ghost Gray (#292a2c) to borders and secondary interactive elements for subtle definition.
- Implement a 45px border-radius for all interactive components like buttons and cards to preserve the soft, rounded aesthetic.
- Maintain generous vertical spacing with 100px between major sections to emphasize content segmentation.

### Don'ts

- Avoid introducing bright or saturated colors beyond imagery, as the system relies on a high-contrast achromatic palette.
- Do not use small line heights for display typography; maintain the defined line heights for OPX-Medium to ensure strong visual impact and clarity.
- Do not use box-shadows or elevation effects, as the system achieves visual depth through color contrast and spacing.
- Never use less than 20px of padding around content within confined elements.
- Do not vary from the specific text color choices for primary or secondary text; Snow and Slate Mist define the text hierarchy.

### Layout

The page primarily uses a max-width contained layout alternating with full-bleed sections for imagery. The hero section features a centered headline over a full-width background, setting a bold, direct tone. Content often arranges in two-column layouts, with text-left and visual-right, or stacked centered blocks. There's a subtle grid for project showcases, featuring 3-column cards. Vertical spacing between sections is consistently large, creating a spacious and intentional rhythm. Navigation is minimal, consisting of a sticky top bar with two main links.

### Imagery

The site uses high-quality, often full-bleed photography and product mockups. Imagery is typically well-lit against dark or neutral backgrounds, showcasing product UI or professional-looking scenes with a focus on human interaction. Visuals serve an explanatory or showcase role, often appearing as large blocks that break up the text. Icons are minimal, outlined, and monochromatic, integrated within the text for decorative accents or link indicators.
