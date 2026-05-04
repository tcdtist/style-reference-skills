---
version: alpha
name: Midday
description: Midday uses a minimalist, content-focused visual language with a strong emphasis on readability and clean information architecture. The design balances crisp sans-serif with a commanding serif for headlines, all within an open, achromatic canvas. Subtle borders and ghost-like components keep the interface feeling lightweight and direct, with a monochromatic palette reinforcing a sense of serious utility and precision.
colors:
  canvas-white: "#ffffff"
  ink-black: "#121212"
  ash-gray: "#dbdad7"
  deep-graphite: "#18181b"
  cool-gray-mist: "#e6e4e0"
  muted-stone: "#616161"
  success-green: "#4caf50"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.5px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.56
    letterSpacing: 0.25px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: 0.25px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.25px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -1.2px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -1.8px
spacing:
  cardRadius: 0px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 24px
components:
  pill-button-default:
    role: Default interactive button
  solid-button-primary:
    role: Primary call to action button
  ghost-button:
    role: Ghost-style button for secondary actions or toggles
  integration-card-variant:
    role: Card for displaying tool integrations
  feature-card:
    role: Information card for features or pricing
  badge-introducing:
    role: Informational badge for new features
---

## Overview

**North Star:** Achromatic ledger, crisp yet silent

Midday uses a minimalist, content-focused visual language with a strong emphasis on readability and clean information architecture. The design balances crisp sans-serif with a commanding serif for headlines, all within an open, achromatic canvas. Subtle borders and ghost-like components keep the interface feeling lightweight and direct, with a monochromatic palette reinforcing a sense of serious utility and precision.

### Do's

- Use Hedvig Letters Sans at weight 400 for all body text and UI elements, with Ink Black (#121212) as the default text color.
- Apply Hedvig Letters Serif at weight 400 and letter-spacing -0.0250em for main headings and display text, using Ink Black (#121212).
- Define all structural boundaries with a 1px solid Ash Gray (#dbdad7) border to maintain a lightweight, precise aesthetic.
- Utilize Canvas White (#ffffff) as the dominant background for all primary content surfaces and page canvas.
- Form primary action buttons with a solid Deep Graphite (#18181b) background and Canvas White (#ffffff) text, always with a 0px border-radius.
- Ensure all interactive elements and badges with a soft, secondary role use a 9999px radii, contrasting with the sharp corners of content cards.
- Maintain a clear visual hierarchy by applying Muted Stone (#616161) for secondary text and helper elements.

### Don'ts

- Avoid using box-shadows; visible elevation is created through subtle background color changes or strong typographic hierarchy instead.
- Do not introduce additional chromatic colors beyond Success Green (#4caf50), reserving it exclusively for semantic indicators and data accents.
- Never use rounded corners on content cards or panels; maintain the sharp, square aesthetic (0px radius) for all informational containers.
- Do not vary line-height unless explicitly defined by the type scale; follow the specified line-heights for each font size to maintain vertical rhythm.
- Avoid using bold weights for body text; rely on color contrast and spacing for emphasis within paragraphs.
- Do not use gradients for backgrounds or components; the system relies on flat colors and subtle textural variation.
- Refrain from using decorative imagery or full-bleed photography that breaks the clean, high-key achromatic canvas.

### Layout

The page adheres to a max-width 1280px, center-aligned layout, creating a contained and structured experience. The hero section features a prominent, centered headline with supporting text, followed by a dark primary action button against the white canvas. Section rhythm is primarily created through consistent vertical spacing (sectionGap 24px) rather than alternating background colors. Content is often arranged in centered stacks or simple grids, such as 3-column feature/pricing cards or alternating text+icon blocks. Navigation is a minimalist top bar with ghost-like links and a 'Sign in' call to action, maintaining a light footprint.

### Imagery

The visual language predominantly features clean, small, outline-style icons with a clear, functional purpose, often rendered in Ink Black. Product screenshots are contained within card-like structures, showcasing UI elements against the site's achromatic background. No large-scale marketing photography or complex illustrations are present, reinforcing a functional, content-first approach. Visuals serve to explain or denote, not to decorate.
