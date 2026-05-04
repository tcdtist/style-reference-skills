---
version: alpha
name: Slush
description: Slush features a playful yet authoritative cryptocurrency aesthetic, combining bold, highly condensed typography for headlines with clean, functional sans-serif for UI. Its core visual identity is built around a light, almost ethereal, blue background accented with vibrant, cartoonish 3D elements and a surprising range of saturated utilitarian colors that appear mostly as fills in illustrations or card backgrounds. Buttons and interactive elements favor high-contrast black on white or transparent styles over solid brand color fills, maintaining a lightweight feel.
colors:
  sky-canvas: "#dceeff"
  ink: "#000000"
  paper: "#ffffff"
  pale-ash: "#e9e9e9"
  vivid-blue: "#4da2ff"
  vivid-green: "#55db9c"
  muted-violet: "#e9ccff"
  flame-orange: "#fb4903"
  golden-rod: "#ffd731"
  royal-purple: "#5c4ade"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.25
  body-sm:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.25
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
  body-lg:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.25
  display-sm:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.25
spacing:
  cardRadius: 40px
  buttonRadius: 40px
  elementGap: 4px
  sectionGap: 48px
components:
  primary-filled-button:
    role: Call to action button for key flows.
  ghost-button:
    role: Secondary action or navigation items.
  subtle-grey-button:
    role: Tertiary actions or subtle interactive elements.
  download-button-with-icon:
    role: Specific download actions for web or mobile.
  featured-content-card:
    role: Prominent information display.
  colored-background-card:
    role: Highlighting specific features or content blocks.
  tiny-circular-icon-background:
    role: Decorative or small interactive elements.
  top-navigation-link:
    role: Primary navigation items in the header.
---

## Overview

**North Star:** Playful crypto minimalism with an electric hum.

Slush features a playful yet authoritative cryptocurrency aesthetic, combining bold, highly condensed typography for headlines with clean, functional sans-serif for UI. Its core visual identity is built around a light, almost ethereal, blue background accented with vibrant, cartoonish 3D elements and a surprising range of saturated utilitarian colors that appear mostly as fills in illustrations or card backgrounds. Buttons and interactive elements favor high-contrast black on white or transparent styles over solid brand color fills, maintaining a lightweight feel.

### Do's

- Prioritize Lateral font for all prominent headlines and Aeonik Pro for all other text, meticulously applying their specific `letterSpacing` values.
- Use Sky Canvas (#dceeff) as the primary page background to establish the light, digital atmosphere.
- Apply a 40px border-radius for cards and buttons for a consistent rounded but not entirely soft aesthetic.
- Utilize Ink (#000000) when text needs high contrast against light backgrounds, and Paper (#ffffff) for text against dark backgrounds.
- Employ the full set of vibrant accent colors (Vivid Blue, Vivid Green, Muted Violet, Flame Orange, Golden Rod, Royal Purple) only as card backgrounds or in illustrations, not for primary UI elements like buttons or primary text.
- Maintain a comfortable density with element gaps typically at 4px, but be intentional with larger padding values for buttons (40px) or cards (48px to 165px).
- Design interactive elements with a default transparent background and neutral text/border, reserving solid fills for primary actions (Paper filled with Ink text).

### Don'ts

- Avoid using the vibrant accent colors directly for primary text or typical button fills; their role is for larger blocks or illustrations.
- Do not deviate from the specified letter-spacing for Aeonik Pro; it is crucial for its overall legibility and aesthetic.
- Do not introduce hard, sharp corners; all significant UI elements should adhere to the established border-radius tokens.
- Refrain from using drop shadows on cards or containers; the design relies on bold fills and borders for visual separation.
- Do not use generic system fonts as substitutes for Aeonik Pro or Lateral; find visually similar options if the custom fonts are unavailable.
- Avoid using the muted violet or violet colors for semantic warning or error states; they function as brand and accent colors.
- Do not use arbitrary spacing values; stick to the defined base unit and observed element/padding values.

### Layout

The page primarily uses a full-bleed layout on a light blue canvas. The hero section features a full-viewport splash of the organic 3D blue element, with the brand name 'Slush' in dominant, large-scale Lateral typography and a clear sub-headline. Content sections typically alternate between full-width content blocks and left-aligned text with visual elements (illustrations/cards) on the right. There's a strong emphasis on large, centered headlines, creating a monumental feel. Content arrangement often appears as centered stacks, sometimes with asymmetric floating elements. Navigation is a sticky top bar with ghost buttons and a prominent 'Launch App' button. The rhythm is open and spacious, using large vertical gaps between sections.

### Imagery

The site uses a combination of playful, abstract 3D elements and cartoonish illustrations. The 3D elements are organic, fluid shapes in vibrant blue, acting as a backdrop or flowing through the scene. Illustrations for elements like rockets, wallets, and coins are stylized with thick outlines and bold, blocky infills, often appearing as floating icons. Photography is absent. Imagery functions as decorative atmosphere and explanatory content, adding a whimsical and approachable layer to the technical subject. Image density is moderate, with visuals often taking large sections of the canvas, but interspersed with bold typography.
