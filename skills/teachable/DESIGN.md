---
version: alpha
name: Teachable
description: Teachable employs a modern, self-assured design language centered on crisp typography and a functional, high-contrast palette. Black and white are dominant, providing a clean canvas for content, while a vibrant, almost neon yellow acts as the primary accent, signaling interactive elements and brand energy. The visual system balances strong display headlines with practical, legible body text. Cards and interactive elements use slightly rounded corners or full pills, creating a friendly yet professional feel.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  light-fog: "#f0f0f0"
  warm-gray: "#f5f5f5"
  ash-gray: "#a0a0a0"
  graphite: "#222222"
  electric-lime: "#e6ff32"
  deep-ocean: "#1c4774"
  amber-glow: "#fae6b6"
  cardinal-red: "#7f2a23"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.3
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 0.9
  display:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 0.9
spacing:
  cardRadius: 8.98px
  buttonRadius: 900px
  elementGap: 15px
  sectionGap: 64px
components:
  primary-action-button:
    role: Primary Call to Action
  secondary-ghost-button:
    role: Secondary Call to Action
  dark-filled-button:
    role: Navigation and secondary actions
  tertiary-light-button:
    role: Tertiary actions, less prominent links
  standard-content-card:
    role: Information grouping
  gray-background-card:
    role: Feature grouping or subtle distinction
  amber-badge:
    role: Highlighting tags or categories
  navigation-link:
    role: Top-level navigation items
---

## Overview

**North Star:** High-contrast digital chalkboard with a neon highlighter.

Teachable employs a modern, self-assured design language centered on crisp typography and a functional, high-contrast palette. Black and white are dominant, providing a clean canvas for content, while a vibrant, almost neon yellow acts as the primary accent, signaling interactive elements and brand energy. The visual system balances strong display headlines with practical, legible body text. Cards and interactive elements use slightly rounded corners or full pills, creating a friendly yet professional feel.

### Do's

- Use Electric Lime (#e6ff32) exclusively for primary calls to action or active states to maintain its high impact.
- Employ Ivyprestoheadline for all prominent headings, leveraging its unique character to establish brand voice at sizes 30px to 75px.
- Maintain high contrast ratios for all text against backgrounds, ensuring legibility with Midnight Ink (#000000) on Canvas White (#ffffff) or Light Fog (#f0f0f0).
- Apply a 900px radius to all buttons and prominent tags to achieve a consistent pill-shaped aesthetic.
- Utilize Peridotpenormvf for all body copy and functional UI text, keeping its weight at 400 for optimal readability.
- Distinguish content sections using subtle background shifts, such as Canvas White (#ffffff), Light Fog (#f0f0f0), and Warm Gray (#f5f5f5) for layering.
- Ensure interactive elements have clear visual feedback, often a 1px border of Midnight Ink (#000000) or Electric Lime (#e6ff32).

### Don'ts

- Do not use Electric Lime (#e6ff32) for decorative elements or non-interactive text; reserve its use for actionable items.
- Avoid applying heavy drop shadows; the design relies on flat surfaces and border definitions for depth.
- Do not introduce additional body fonts; Peridotpenormvf should handle all standard text to maintain typographic consistency.
- Refrain from using very dark backgrounds for main content areas; maintain the light theme with Canvas White (#ffffff) or Light Fog (#f0f0f0) as the dominant surfaces.
- Do not use highly saturated colors for large background areas; save saturation for brand accents like Electric Lime (#e6ff32).
- Avoid arbitrary border-radius values; stick to 8.98px for cards and 900px for buttons to maintain consistent shaping.
- Do not use excessive visual flourishes or gradients unless specifically indicated for a background accent; the core UI remains flat and functional.
