---
version: alpha
name: WOUQ
description: WOUQ employs a minimalist light theme with high contrast typography and ample whitespace. The design emphasizes content through a stark juxtaposition of black text on white backgrounds, occasionally softened by subtle light gray interactive states. Custom typography lends a distinctive character, maintaining readability while providing visual interest, particularly in navigation and large text blocks. Components are border-defined and largely achromatic, allowing content and occasional imagery to provide color and visual depth.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.67
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.11
spacing:
  cardRadius: 10px
  buttonRadius: 10px
  elementGap: 5px
  sectionGap: 75px
components:
  navigation-link:
    role: Interactive navigation items in the header
  hero-headline:
    role: Primary heading for the initial screen
  project-card:
    role: Clickable cards displaying project previews
---

## Overview

**North Star:** monochromatic gallery, etched edges

WOUQ employs a minimalist light theme with high contrast typography and ample whitespace. The design emphasizes content through a stark juxtaposition of black text on white backgrounds, occasionally softened by subtle light gray interactive states. Custom typography lends a distinctive character, maintaining readability while providing visual interest, particularly in navigation and large text blocks. Components are border-defined and largely achromatic, allowing content and occasional imagery to provide color and visual depth.

### Do's

- Use Canvas White (#ffffff) as the primary background color for all main sections and components.
- Employ Midnight Ink (#000000) for all primary text, headings, and interactive elements to maintain high contrast and clarity.
- Apply ESAllianz-Light at 45px with a 1.11 lineHeight for all major headlines to convey an airy, sophisticated tone.
- Implement a 10px border-radius consistently for all card-like elements and interactive components.
- Maintain generous vertical spacing between sections (75px) to support the spacious feel of the design.

### Don'ts

- Avoid introducing additional chromatic colors; the palette is strictly monochrome.
- Do not use heavy shadows or gradients; flat surfaces and subtle borders define elevation.
- Never deviate from the specified Open Sans or ESAllianz font families for any UI text.
- Do not overcrowd content; utilize the 1460px max-width and generous padding (25-30px) to ensure ample whitespace.
- Avoid bold or ultra-heavy font weights; the design relies on lighter weights for its distinctive character.

### Layout

The page adheres to a max-width of 1460px, centrally aligned. The hero section prominently features a large headline centered over a full-width abstract image. Subsequent sections arrange content in a grid-like fashion, showcasing projects with prominent image blocks and accompanying titles. There is a consistent vertical rhythm with significant spacing (75px) between sections, creating a spacious and unhurried browsing experience. Navigation is a minimal top bar, sticky or otherwise. Project links appear in a multi-column grid, often two or three columns wide, without visual dividers between projects.

### Imagery

This design utilizes a mix of abstract and product-focused photography and high-quality product renders. Imagery is typically contained within rectangular frames, sometimes with subtle rounded corners (10px). Photography leans towards high-key or product-focused shots, often with a clean, de-saturated aesthetic allowing product forms and textures to be the focal point. Icons are minimal, likely outlined, and monochromatic, used sparingly for navigation or functional cues. The density is moderate to high, with large images being central to project showcases.
