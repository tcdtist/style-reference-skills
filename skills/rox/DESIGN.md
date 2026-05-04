---
version: alpha
name: Rox
description: Rox exudes a focused, data-driven clarity, presenting complex financial automation with understated confidence. The design leverages a monochrome palette with strategic pops of a vibrant blue and a scattered, almost playful set of bright accent colors in secondary elements. Dominating the visual landscape is a unique pairing of a classic serif display font for impactful headlines and a clean, modern sans-serif for body text, creating a formal yet approachable feel. The near-achromatic backgrounds and lack of strong shadows contribute to a flat, spacious interface, elevating content through thoughtful typography rather than heavy visual effects. A subtle brand blue is employed sparingly, primarily to highlight interactive elements, guiding user attention with precision.
colors:
  page-canvas: "#f5f5f4"
  surface-white: "#ffffff"
  blueprint-blue: "#0b64e9"
  text-primary: "#0c0a09"
  text-secondary: "#1c1917"
  text-muted: "#a6a09b"
  text-subtle: "#57534d"
  subtle-gray: "#ececea"
  border-light: "#f0efef"
  disabled-gray: "#d4d2d1"
  status-red: "#f24149"
  status-orange: "#f97006"
  status-yellow: "#f9b703"
  status-violet: "#6b4aff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.3
    letterSpacing: -0.03px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.3
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
    letterSpacing: -0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.02px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: -0.02px
  hero-headline-1:
    fontFamily: "system-ui"
    fontSize: 106px
    lineHeight: 0.8
  hero-headline-2:
    fontFamily: "system-ui"
    fontSize: 183px
    lineHeight: 0.8
spacing:
  buttonRadius: 8px
  elementGap: 4-16px
components:
  workflow-tab-bar:
    role: 
  outbound-agent-dashboard-card:
    role: 
  cta-button-group-with-announcement-badge:
    role: 
  primary-filled-button:
    role: Interactive element
  secondary-outlined-button:
    role: Interactive element
  text-link:
    role: Navigation/Interactive text
  header-navigation-item:
    role: Global Navigation
  display-headline-the-grand-statement:
    role: Hero content
  card-container:
    role: Content grouping
  status-tag:
    role: Categorization/Label
---

## Overview

**North Star:** Analytical Blueprint on Pure White. An interface that feels like a meticulously charted course on a pristine, well-lit canvas.

Rox exudes a focused, data-driven clarity, presenting complex financial automation with understated confidence. The design leverages a monochrome palette with strategic pops of a vibrant blue and a scattered, almost playful set of bright accent colors in secondary elements. Dominating the visual landscape is a unique pairing of a classic serif display font for impactful headlines and a clean, modern sans-serif for body text, creating a formal yet approachable feel. The near-achromatic backgrounds and lack of strong shadows contribute to a flat, spacious interface, elevating content through thoughtful typography rather than heavy visual effects. A subtle brand blue is employed sparingly, primarily to highlight interactive elements, guiding user attention with precision.

### Do's

- Use 'FH Total Display Regular' solely for hero-level headlines (106px, 183px) to establish brand gravitas; reserve serif usage for maximum impact.
- Apply 'Blueprint Blue' (#0b64e9) exclusively for primary calls-to-action and active states to maintain clear visual hierarchy.
- Employ the '#f5f5f4' 'Page Canvas' for all primary page backgrounds to ensure an expansive, clean aesthetic.
- Utilize Geist font with a -0.02em letter-spacing for all body text and subheadings to maintain the distinct digital typography.
- Standardize on 6px default radii for all general elements and 8px for buttons, except for pill shapes which use 100px.
- Always use 'Text Primary' (#0c0a09) for main body copy and 'Text Secondary' (#1c1917) for sub-content on light backgrounds for optimal contrast.

### Don'ts

- Do not use multiple saturated colors for primary interactive elements; Blueprint Blue (#0b64e9) serves as the singular brand identifier.
- Avoid strong, heavy drop shadows; instead, use subtle shadows like rgba(0, 0, 0, 0.06) 0px 2px 4px 0px for minimal elevation.
- Do not use generic system fonts for prominent headings; FH Total Display Regular is reserved for brand distinction.
- Refrain from using color to signify hierarchy on text elements; instead, rely on font weights, sizes, and the specified neutral color scale (Text Primary, Secondary, Muted).
- Do not introduce new border radii beyond 1px, 6px, 8px, 12px, 16px, 20px, 30px, 36px, and 100px to maintain consistent geometric rhythm.

### Layout

The page primarily uses a max-width contained layout, likely centered, though specific max-width is not defined. The hero section features a prominent, centered display headline over a clean 'Page Canvas' background. Sections are generally vertically stacked with visible spacing, creating a spacious feel. Content arrangement often appears as a centered stack or a simple column with text-heavy information. There are instances of multi-column arrangements, such as a feature list or a card grid, but the overall presentation emphasizes clear, uncongested blocks of information. The navigation is a standard top bar, sticky or otherwise. The second screenshot shows a contained application UI with tabs and internal card-like structures, indicating an application-like interface.

### Imagery

The visual language is primarily UI-focused, featuring crisp product screenshots and abstract, geometric graphics. Product screenshots are typically contained within device mockups or simple rectangular frames, presenting the software functionality clearly. There's an absence of traditional photography or complex illustrations. Iconography is minimalist, outlined or filled in monochrome or brand blue, serving mostly as functional cues. The density of imagery is balanced, supporting the textual content rather than dominating it, aiming for explanatory clarity over decorative atmosphere. There are small, scattered instances of vivid color (yellow, red, orange, violet) used in elements that appear as status indicators or small data points, implying a data visualization or tagging purpose.
