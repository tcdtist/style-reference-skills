---
version: alpha
name: Waabi
description: Waabi operates on a robust, authoritative visual language, characterized by stark contrasts between light and dark surfaces and bold, compact typography. A single vibrant magenta provides functional accents, drawing attention to calls-to-action and active states against the predominantly monochromatic palette. Components are designed for clarity and impact, with generous rounded corners hinting at a friendly usability layer beneath the serious brand posture. The overall impression is one of confident, high-tech efficiency.
colors:
  midnight-graphite: "#191818"
  canvas-white: "#ffffff"
  cloud-gray: "#e8e6e3"
  silver-pine: "#808080"
  soft-fog: "#8c8b8b"
  steel-light: "#cccccc"
  muted-stone: "#d1d5dc"
  accent-magenta: "#ff2c6b"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
    letterSpacing: 0.15px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.6px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.25
    letterSpacing: -1.2px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.2
    letterSpacing: -2.4px
  display:
    fontFamily: "system-ui"
    fontSize: 150px
    lineHeight: 0.85
    letterSpacing: -7.2px
spacing:
  cardRadius: 12px
  buttonRadius: 50px
  elementGap: 16px
  sectionGap: 96px
components:
  primary-action-button:
    role: Main CTA for key actions
  ghost-button-light-text:
    role: Secondary action on dark backgrounds
  ghost-button-dark-text:
    role: Secondary action on light backgrounds
  link-button:
    role: Tertiary action for navigation or emphasis
  neutral-card-light:
    role: Content container on light backgrounds
  neutral-card-dark:
    role: Content container on dark backgrounds
  muted-card:
    role: Subtle content container on light backgrounds
---

## Overview

**North Star:** monochromatic impact with magenta precision

Waabi operates on a robust, authoritative visual language, characterized by stark contrasts between light and dark surfaces and bold, compact typography. A single vibrant magenta provides functional accents, drawing attention to calls-to-action and active states against the predominantly monochromatic palette. Components are designed for clarity and impact, with generous rounded corners hinting at a friendly usability layer beneath the serious brand posture. The overall impression is one of confident, high-tech efficiency.

### Do's

- Always use a 12px border-radius for all content cards to maintain a consistent soft edge.
- Apply Accent Magenta (#ff2c6b) exclusively for primary calls-to-action or critical active states.
- Prioritize large, compact 'Zagma' typography for headlines, using its negative letter-spacing for visual density.
- Utilize Cloud Gray (#e8e6e3) and Canvas White (#ffffff) as the primary alternating background surfaces for section differentiation.
- Ensure interactive elements like buttons have a 50px border-radius, creating a distinct pill shape.
- Break up large content sections with a sectionGap of 96px for ample breathing room.
- Use NeueHaas for all body text and UI labels, ensuring letter-spacing of 0.01em or 0.02em for legibility.

### Don'ts

- Do not introduce new vibrant colors outside of Accent Magenta (#ff2c6b); maintain the strict monochromatic palette.
- Avoid excessive use of drop shadows; the design relies on bold color blocks and border-radius for visual separation.
- Refrain from using long line lengths for body text; keep text blocks concise to maintain readability with NeueHaas.
- Do not deviate from the established type scale; maintain the precise sizes and letter-spacing for Zagma and NeueHaas.
- Avoid small, subtle changes in neutral tones for background; use the defined Cloud Gray, Canvas White, Midnight Graphite, and Muted Stone for clear surface distinction.
- Do not use generic square corners; aim for the established soft radii on all containers and interactive elements.
- Never use text as the primary call-to-action unless it is a defined Link Button with appropriate padding and transparent background.

### Layout

The page maintains a centered, max-width layout, typically around 1200px. The hero section often features a large, impactful Zagma headline against a clean background. Sections alternate between Canvas White and Cloud Gray or Midnight Graphite, creating clear visual segmentation with a consistent vertical rhythm of 96px section gaps. Content is arranged in alternating text-left/image-right or vertical stacks, often utilizing 2-column or 3-column card grids for features and insights. Navigation is a sticky top bar with a centralized logo and right-aligned links. The overall density is comfortable, with generous white space around elements.

### Imagery

Photography features tight product crops of trucks for self-driving technology or abstract, graphic representations of digital systems. Images are usually contained within cards or masked shapes, never full-bleed. Illustrations are minimal, predominantly flat, geometric, and often outlined, using the brand's monochromatic colors or Accent Magenta. Icons are outlined, simple, and monochrome, often appearing as subtle functional elements. Imagery serves to showcase technology and provide visual context in a clean, contained manner rather than decorative atmosphere, often presented against stark white or dark backgrounds.
