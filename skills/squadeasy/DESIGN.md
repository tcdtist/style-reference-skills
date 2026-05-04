---
version: alpha
name: SquadEasy
description: SquadEasy's design system evokes a playful, high-contrast digital environment. It uses bold, unadorned typography set against vibrant, geometric color blocks and photo cutouts. The layout is dynamic, featuring angled visual elements and prominent typography to create a sense of directness and energy. Color is employed in large, flat regions and as vivid accents, while component styling is typically crisp with generous radii, prioritizing impact over subtle detail.
colors:
  amber-canvas: "#e1c19e"
  deep-violet: "#adabff"
  electric-lime: "#e4ff60"
  sky-blue: "#7fb6e6"
  hot-pink: "#ea5da3"
  forest-green: "#6fb853"
  absolute-black: "#000000"
  pure-white: "#ffffff"
  soft-gray: "#f6f6f6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
    letterSpacing: -0.252px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.21
    letterSpacing: -0.252px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -0.256px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.252px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
    letterSpacing: -0.242px
  heading:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.05
    letterSpacing: -1.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -1.4px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.87
    letterSpacing: -2.88px
spacing:
  cardRadius: 0px
  buttonRadius: 100px
  elementGap: 16px
  sectionGap: 100px
components:
  text-link-button:
    role: Navigation and secondary actions.
  pill-ghost-button-black:
    role: Outlined secondary actions.
  pill-ghost-button-white:
    role: Outlined secondary actions on dark backgrounds.
  pill-filled-button-black:
    role: Primary action within a neutral context.
  pill-filled-button-electric-lime:
    role: Prominent calls to action.
  info-card-squared:
    role: Content presentation with a distinctive background.
---

## Overview

**North Star:** Playful block playground

SquadEasy's design system evokes a playful, high-contrast digital environment. It uses bold, unadorned typography set against vibrant, geometric color blocks and photo cutouts. The layout is dynamic, featuring angled visual elements and prominent typography to create a sense of directness and energy. Color is employed in large, flat regions and as vivid accents, while component styling is typically crisp with generous radii, prioritizing impact over subtle detail.

### Do's

- Always use 'Absolute Black' (#000000) for primary text on light backgrounds and 'Pure White' (#ffffff) on dark backgrounds.
- Apply a 100px border radius to all interactive buttons for a consistent, soft pill shape.
- Use 'Electric Lime' (#e4ff60) specifically for primary call-to-action button backgrounds.
- Employ 'Deep Violet' (#adabff) for prominent content cards to differentiate them from the main canvas.
- Layer large, angled photographic cutouts to create a dynamic and energetic visual composition.
- Utilize 'Black' font family at large sizes for headlines (50-220px) with tight line heights to ensure a commanding presence.
- Maintain a comfortable density with a base spacing unit of 4px and elemental gaps around 16px.

### Don'ts

- Do not use generic gray tones for primary interactive elements; always use chromatic colors for emphasis.
- Avoid subtle shadows or gradients on component surfaces; stick to flat, vibrant color blocks or crisp borders.
- Do not use small, delicate fonts for headlines; always leverage the 'Black' font family for impact.
- Never use square corners for buttons; always apply the 100px border radius for a distinct visual identity.
- Do not place images in simple, contained boxes; allow them to break out of their bounds or appear dynamically angled.
- Avoid highly ornate or complex typography; the system favors bold, direct, and efficient typefaces.
- Do not introduce additional background colors outside of the defined 'Amber Canvas', 'Deep Violet', 'Electric Lime', and 'Soft Gray' for major sections.

### Layout

The page primarily uses a full-bleed layout for background color blocks and hero sections, with text content often centered or presented in two-column arrangements. The hero features a bold, centered headline overlaying the 'Amber Canvas' background with dynamic, angled photo cutouts. Sections alternate between solid color backgrounds (like 'Amber Canvas' and 'Deep Violet') with strong vertical spacing provided by a section gap of 100px. Content blocks, such as testimonial cards, often use a grid-like structure. Elements within sections generally maintain a max-width for readability, but the backgrounds extend full-width. Navigation is a sticky top bar with a centered logo, text links, and a prominent pill-shaped CTA button.

### Imagery

Imagery primarily consists of high-contrast, candid lifestyle photography featuring diverse individuals, often cropped tightly and presented as angled, unmasked cutouts. These images are used decoratively to add a human element and dynamic energy, frequently layered over solid color blocks. Icons are minimal, utilizing bold strokes or fills in black or accent colors. Product screenshots are contained within device mockups, maintaining a clean, focused presentation.
