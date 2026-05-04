---
version: alpha
name: SAPGOODENERGY
description: SAPGOODENERGY uses a high-contrast athletic minimalism: stark black typography on vast white canvases, punctuated by a single vibrant orange accent. The design leans into raw energy, with strong sans-serifs and a focus on essential information. Large, generous spacing emphasizes content and creates a focused, almost clinical, presentation. Elements are clean-edged, with soft rounded corners on interactive components providing a subtle human touch.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  alabaster: "#fffffb"
  ash-grey: "#e7e7e7"
  graphite: "#303030"
  pewter: "#c0c0c0"
  slate: "#707070"
  energy-burst-orange: "#ff7840"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.6
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.11
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -0.672px
spacing:
  cardRadius: 18px
  buttonRadius: 7px
  elementGap: 4px
  sectionGap: 100px
components:
  primary-action-button:
    role: Filled button
  secondary-ghost-button:
    role: Outlined/ghost button
  tertiary-ghost-button:
    role: Outlined/ghost button (muted)
  callout-card:
    role: Informational card with soft background
  content-card:
    role: Container card
  text-input-with-placeholder:
    role: Form input field
  adhesion-banner:
    role: Sticky promotional banner
---

## Overview

**North Star:** Athletic Minimalism: black ink on white canvas, with bursts of energetic orange.

SAPGOODENERGY uses a high-contrast athletic minimalism: stark black typography on vast white canvases, punctuated by a single vibrant orange accent. The design leans into raw energy, with strong sans-serifs and a focus on essential information. Large, generous spacing emphasizes content and creates a focused, almost clinical, presentation. Elements are clean-edged, with soft rounded corners on interactive components providing a subtle human touch.

### Do's

- Prioritize 'Midnight Ink' (#000000) for all primary text and calls to action on 'Canvas White' (#ffffff) backgrounds.
- Use 'Energy Burst Orange' (#ff7840) exclusively for primary action elements like CTA buttons and key highlights.
- Employ a 7px border-radius for all interactive elements like buttons and input fields.
- Maintain generous horizontal padding (e.g., 32px) around primary buttons to give them breathing room.
- Utilize 'Ash Grey' (#e7e7e7) and 'Alabaster' (oklab blend) for background surfaces that need to subtly stand out from 'Canvas White' (#ffffff).
- Apply tighter letter-spacing (-0.05em, -0.04em) to large 'Helvetica Neue LT Std' headlines to create a dense, impactful visual.
- Ensure consistent spacing for inner card content with 24px top, 21px left/right, and 30px bottom for Callout Cards.

### Don'ts

- Avoid introducing new chromatic colors; 'Energy Burst Orange' (#ff7840) is the sole accent.
- Do not use gradients; the system relies on solid colors for clear, direct communication.
- Do not use overly decorative elements; keep the aesthetic clean and functional.
- Avoid small text sizes for 'Helvetica Neue LT Std'; reserve it for impactful headlines and buttons.
- Do not vary border-radius significantly; adhere to 7px for interactive elements and 18px for larger containers.
- Avoid crowded layouts; prioritize ample white space between sections and elements.
- Do not mix font families within a single element where one family would suffice; leverage weight variations within GT Pressura LC Standard and Helvetica Neue LT Std.
