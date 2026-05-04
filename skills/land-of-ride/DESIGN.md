---
version: alpha
name: Land of Ride
description: Land of Ride evokes an adventurous, editorial spirit with a high-contrast dark theme punctuated by vivid, energetic accents. Typography is a rich blend of elegant serifs for headlines and navigation, grounded by clear sans-serifs for body text, creating a layered, magazine-like feel. Components are lean and functional, often using ghost styling and thin borders, allowing striking photography to take center stage. The interplay of deep blacks and sharp whites with a spectrum of dynamic colors makes interactive elements feel distinct and alive.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  ash-gray: "#f5f5f5"
  ghostly-mist: "#eee7e7"
  placeholder-gray: "#767676"
  flamingo-pink: "#ffc2f7"
  sunset-orange: "#ec542d"
  goldenrod: "#ebb70b"
  passion-red: "#fe5c5d"
  blaze-orange: "#f77408"
  ocean-blue: "#0b50b8"
  forest-sage: "#8c988b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
    letterSpacing: 0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
    letterSpacing: -0.44px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
    letterSpacing: 0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.9
    letterSpacing: -1.44px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 77px
    lineHeight: 0.8
    letterSpacing: -2.31px
  display:
    fontFamily: "system-ui"
    fontSize: 154px
    lineHeight: 1
spacing:
  buttonRadius: 0px
  elementGap: 22px
  sectionGap: 115px
components:
  ghost-button-inverse:
    role: Primary action button on dark backgrounds
  ghost-button-default:
    role: Primary action button on light backgrounds
  pill-button-light:
    role: Secondary action button for filtering or specific selections
  standard-input-light:
    role: Text input field on light backgrounds
  standard-input-dark:
    role: Text input field on dark backgrounds
  filled-input-light:
    role: Text input field with clear background on light themes
  accent-badge:
    role: Highlighting tags or categories
---

## Overview

**North Star:** Editorial adventurer's journal

Land of Ride evokes an adventurous, editorial spirit with a high-contrast dark theme punctuated by vivid, energetic accents. Typography is a rich blend of elegant serifs for headlines and navigation, grounded by clear sans-serifs for body text, creating a layered, magazine-like feel. Components are lean and functional, often using ghost styling and thin borders, allowing striking photography to take center stage. The interplay of deep blacks and sharp whites with a spectrum of dynamic colors makes interactive elements feel distinct and alive.

### Do's

- Prioritize photography as the leading visual element, treating text as an overlay or complementary detail.
- Use 'Midnight Ink' (#000000) for distinct section backgrounds to create high contrast with 'Canvas White' (#ffffff) content.
- Apply 'Garamond' or 'Sequel' for large, impactful headlines, ensuring generous vertical spacing around them.
- Utilize ghost buttons with either 'Midnight Ink' (#000000) or 'Canvas White' (#ffffff) borders and text for all primary actions.
- Employ the 'Sunset Orange' (#ec542d) for badges and error states to bring a consistent, vivid call to attention.
- Maintain a 0px border radius for most interactive elements and inputs, preserving a crisp, structured aesthetic.
- Use 'Ash Gray' (#f5f5f5) as a subtle background distinction for secondary content blocks within light themes.

### Don'ts

- Avoid using filled primary buttons; stick to ghost outlines to keep attention on imagery and content.
- Do not introduce additional decorative gradients; the system relies on solid colors and high-contrast photography.
- Refrain from using strong shadows on general elements; reserve for subtle elevation of navigation or specific actions.
- Do not clump content; prioritize generous 'elementGap' (22px) and 'sectionGap' (115px) for a spacious feel.
- Avoid mixing display fonts excessively on a single screen; ensure a clear hierarchy with 1-2 primary display choices and 1-2 functional families.
- Do not use highly saturated colors for large text blocks; they are reserved for accents and small functional elements.
- Never compromise on high text contrast; always ensure 'Midnight Ink' (#000000) on 'Canvas White' (#ffffff) or vice versa for optimal readability.

### Layout

The page primarily uses a full-bleed layout for hero sections, often with captivating imagery. Content sections are typically max-width constrained, creating a focused reading area on wide screens, but the overall page model uses both full-bleed and contained sections fluidly. The hero pattern displays a large image with text overlaid at the center. Section rhythm alternates between text-dominant blocks and image-heavy showcases. Content is often arranged in grid formats for community content, typically 3-4 columns of image-text pairs. A standard top navigation bar (often transparent over the hero, then sticky) is present, with secondary navigation sometimes appearing as stacked links. The layout is spacious, with considerable breathing room between elements and sections.

### Imagery

The site uses high-quality, full-bleed photography featuring extreme sports (surf, ski, snowboard, motorbike) and vast landscapes. Images are often raw and natural, with vibrant colors emphasizing the adventure. They serve as atmospheric backdrops and aspirational content rather than product showcases. There's a strong focus on action shots and scenic views. Icons, when present, are minimal and conceptual, lacking distinct stroke weight in the provided context (no specific icon data). The density is image-heavy, with photography often occupying large viewport areas, creating an immersive experience.
