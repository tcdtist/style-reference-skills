---
version: alpha
name: IDHEAL
description: IDHEAL presents a clean, academic aesthetic, characterized by a high-contrast black and white foundation. Typography is the primary visual element, conveying a sense of authority and clarity. Color accents are minimal and serve as functional highlights for links and borders, rather than broad decorative elements. The overall feel is one of directness and seriousness, with a compact density and structured content flow.
colors:
  ink-black: "#000000"
  canvas-white: "#ffffff"
  subtle-gray: "#e5e5e5"
  shadow-gray: "#cccccc"
  brick-red: "#bc5346"
  fuchsia-pink: "#ff00bc"
  moss-green: "#51633c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 105px
    lineHeight: 0.95
spacing:
  cardRadius: 0px
  buttonRadius: 15px
  elementGap: 10px
  sectionGap: 30px
components:
  circular-ghost-button:
    role: Tertiary action button, decorative element with text
  rounded-corner-ghost-button:
    role: Outlined button for secondary actions or links
  borderless-content-card:
    role: Container for content, particularly news items or listings
  navigation-link:
    role: Primary navigation items
  headline-link-with-accent:
    role: Clickable headlines, leading to detailed content
---

## Overview

**North Star:** Monochromatic academic blueprint

IDHEAL presents a clean, academic aesthetic, characterized by a high-contrast black and white foundation. Typography is the primary visual element, conveying a sense of authority and clarity. Color accents are minimal and serve as functional highlights for links and borders, rather than broad decorative elements. The overall feel is one of directness and seriousness, with a compact density and structured content flow.

### Do's

- Prioritize Ink Black text (#000000) on Canvas White (#ffffff) backgrounds for all primary content.
- Use Helvetica Neue LT Pro Medium for large headings to establish a serious and authoritative tone.
- Punctuate long text blocks or lists with the New Century Schoolbook LT Std serif font to introduce an academic aesthetic.
- Utilize Subtle Gray (#e5e5e5) for thin borders and light backgrounds to suggest content grouping without heavy visual division.
- Apply 15px border radius to buttons for a soft, approachable feel, unless explicitly requiring a circular (50% / 9999px) form.
- Employ Brick Red (#bc5346) and Fuchsia Pink (#ff00bc) sparingly as outline borders or text highlights for interactive elements, not as solid backgrounds.
- Maintain compact spacing, typically 10px for element gaps and 30px for section gaps, to create a dense, content-rich layout.

### Don'ts

- Avoid using solid chromatic backgrounds for interactive elements; prefer outlined or text-only buttons with Ink Black text.
- Do not introduce gradients; the system relies on flat colors and typography for visual hierarchy.
- Refrain from using heavily rounded corners for cards; they should mostly be 0px radius to maintain a stark, precise structure.
- Do not deviate from the core monochromatic color palette for large sections or backgrounds; color is reserved for functional accents.
- Avoid decorative imagery that competes with text; imagery should be minimal or serve a clear, illustrative purpose.
- Do not use overly expressive or casual typography; maintain a formal and academic tone through the selected sans-serif and serif pairings.
- Do not introduce complex shadow patterns; limit elevation to a subtle rgba(0, 0, 0, 0.2) 4px 2px 4px 0px or rgb(237, 237, 237) 2px -1px 6px 0px for discrete layering.

### Layout

The page primarily follows a centered, contained layout, though the hero section might be full-bleed. The hero consists of a prominent, potentially large type logo over an image, indicating a strong visual statement at the top. Sections exhibit a consistent vertical rhythm, with content blocks often appearing as clean, unbordered units or subtly bordered cards. Content is likely arranged in single or two-column structures for readability, avoiding complex multi-column grids except for potentially feature displays. Navigation is a sticky top bar, providing persistent access. The overall density is compact, making efficient use of vertical space with clear, but not exaggerated, separation between content blocks.

### Imagery

Imagery is minimal, focusing on large, uncropped photographs that serve as background elements or as distinct visual breaks. The treatment appears raw, without heavy masking or stylized effects, often presenting architectural or urban scenes. Icons, if present, are likely minimal, outlined, and monochromatic, aligning with the clean UI. The overall density suggests a text-dominant layout where images support the content rather than defining it. When images are used, they are typically large and used sparingly. The provided image shows realistic imagery with normal color treatment, not desaturated or highly stylized.
