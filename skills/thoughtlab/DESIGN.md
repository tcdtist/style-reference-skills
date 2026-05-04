---
version: alpha
name: ThoughtLab
description: ThoughtLab's design system evokes a dark, cerebral command center. Bold typography punches through deep black backgrounds, while a singular vibrant red accent highlights critical calls-to-action. The spatial experience is generous, allowing components to breathe within wide page margins, contributing to an atmosphere of focused, high-stakes digital experience.
colors:
  midnight-black: "#000000"
  stone-grey: "#4c4c4c"
  ghost-white: "#cccccc"
  snow-drift: "#ffffff"
  action-red: "#fc1c46"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: -0.009px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
    letterSpacing: -0.009px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.15
    letterSpacing: -0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.96
    letterSpacing: -0.067px
  display:
    fontFamily: "system-ui"
    fontSize: 198px
    lineHeight: 0.92
    letterSpacing: -0.067px
spacing:
  buttonRadius: 9999px
  elementGap: 9px
  sectionGap: 65px
components:
  primary-action-button:
    role: Main call-to-action.
  ghost-nav-link:
    role: Header and navigation links.
  text-input:
    role: Standard input fields.
  content-card:
    role: Information grouping.
---

## Overview

**North Star:** Midnight Command Center

ThoughtLab's design system evokes a dark, cerebral command center. Bold typography punches through deep black backgrounds, while a singular vibrant red accent highlights critical calls-to-action. The spatial experience is generous, allowing components to breathe within wide page margins, contributing to an atmosphere of focused, high-stakes digital experience.

### Do's

- Use Midnight Black (#000000) as the primary background color for all main sections and canvases.
- Apply Action Red (#fc1c46) exclusively for primary action buttons, ensuring a visible contrast and clear hierarchy.
- Implement the sui font family with a letter-spacing of -0.0670em for all 'display' and 'heading-lg' roles to maintain a tight, impactful visual.
- Utilize a full pill radius of 9999px for all buttons to reinforce a consistent, distinctive shape.
- Maintain generous vertical spacing between sections, defaulting to 65px as a section gap to create an open and spacious feel.
- Employ Ghost White (#cccccc) for primary text elements against dark backgrounds.
- Employ transparent cards with no visible borders or shadows to maintain flat product surfaces.

### Don'ts

- Do not use accent colors for descriptive text or non-interactive elements; reserve them for direct action.
- Avoid applying heavy shadows or complex elevation to components, as the system favors a flat, minimalist aesthetic.
- Do not vary border radii across buttons; all interactive buttons should adhere to the 9999px pill shape.
- Do not use letter-spacing on small body text unless explicitly defined in the type scale to avoid readability issues.
- Do not introduce additional bold text weights beyond 700; the system relies on lighter weights for authority.
- Avoid adding unnecessary decorative borders or fills to cards; they should maintain a transparent, subtle presence.
- Do not use tight spatial arrangements; ensure all elements have sufficient breathing room guided by the 9px element gap.

### Layout

The page employs a full-bleed dark background with a max-width content container, likely around 1200px, but it's not explicitly fixed, allowing for flexibility. The hero section is full-bleed, featuring large, centered headlines over an abstract 3D graphic. Content beneath the hero generally follows a spacious, centered vertical stack with generous section gaps. The navigation is a minimalist top bar with a clear 'Contact Us' primary action button on the right and a hamburger menu icon.

### Imagery

The imagery primarily features abstract, organic 3D rendered forms with luminous, iridescent edges, positioned centrally as a visual anchor. These graphics are contained and serve a decorative, atmospheric role rather than explanatory content. There are minimal other images; the focus is on UI and text, making the 3D element a powerful, singular visual statement.
