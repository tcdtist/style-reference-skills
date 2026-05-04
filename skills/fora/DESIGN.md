---
version: alpha
name: FORA
description: This design evokes a sense of playful architectural structure by organizing content into distinct, brightly colored blocks. The deliberate use of stark white and black typography against saturated, pastel-like backgrounds creates a high-contrast, graphic quality. Each large content area acts as a 'room' with its own color and function, where the delicate, custom serif wordmark provides an unexpected counterpoint to the bold, blocky layout and muted, modern sans-serif body text. This interplay between classical typography and contemporary, segmented color fields distinguishes the visual style.
colors:
  canvas-white: "#ffffff"
  deepest-ink: "#000000"
  terracotta-bold: "#a9553c"
  terracotta-muted: "#a04d35"
  lavender-haze: "#ddbdea"
  highlight-white: "#ffffff59"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.33
    letterSpacing: 0.36px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.53
    letterSpacing: 0.43px
  heading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.3
    letterSpacing: 0.46px
  display:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.17
    letterSpacing: 0.42px
spacing:
  buttonRadius: 0px (primary), 5px (secondary)
components:
  primary-action-block:
    role: 
  newsfeed-block:
    role: 
  subtle-tag-button-bottom-bar:
    role: 
  primary-action-block:
    role: Interactive content section
  secondary-action-block:
    role: Interactive content section
  ghost-link-button:
    role: Navigational link
  subtle-tag-button:
    role: Informational tag or filter
  newsfeed-item-card:
    role: Content preview
---

## Overview

**North Star:** Color-blocked gallery walls

This design evokes a sense of playful architectural structure by organizing content into distinct, brightly colored blocks. The deliberate use of stark white and black typography against saturated, pastel-like backgrounds creates a high-contrast, graphic quality. Each large content area acts as a 'room' with its own color and function, where the delicate, custom serif wordmark provides an unexpected counterpoint to the bold, blocky layout and muted, modern sans-serif body text. This interplay between classical typography and contemporary, segmented color fields distinguishes the visual style.

### Do's

- Always use Deepest Ink (#000000) for all text against Canvas White (#ffffff) or any chromatic background.
- Utilize Terracotta Bold (#a9553c) and Lavender Haze (#ddbdea) as solid, full-bleed background blocks to create distinct content zones.
- Apply 0px border radius for primary interactive content blocks to maintain a sharp, architectural feel.
- Use Theinhardt (400) for all body text at 15px with 1.33 lineHeight and 0.36px letterSpacing.
- Maintain a clear distinction between content blocks using stark color changes rather than shadows or borders.
- Employ the Subtle Tag Button style (background rgba(255, 255, 255, 0.35), 5px radius) for small, informational labels.
- Use 'Theinhardt Medium' (700 weight, 15px) for emphasizing text within paragraphs with 0.36px letterSpacing.

### Don'ts

- Avoid using multiple border radii values; stick to 0px for main blocks and 5px for small tags/elements.
- Do not introduce gradients; the design relies on solid, flat color fields for its visual impact.
- Refrain from using shadows or excessive depth effects; the aesthetic is flat and graphic.
- Do not deviate from the specified font families and weights; the custom Theinhardt typeface is integral to the brand's voice.
- Avoid decorative icons or complex illustrations that do not contribute directly to content communication. Emphasize type and color blocks.
- Do not use highly saturated or vivid colors outside of the defined brand and accent palette for main content blocks.
- Avoid padding within primary interaction blocks that isn't either 25px or 30px as designated for visual consistency.

### Layout

The page primarily utilizes a full-bleed grid layout with no discernible pageMaxWidth. It's structured as a series of vertically stacked, alternating horizontal color blocks, each block serving as a distinct content section. The hero appears to be a two-column or multi-column arrangement of these blocks, featuring a large, stylized wordmark on white adjacent to a solid color block with text. Subsequent sections follow a similar pattern, creating a mosaic-like effect. Content within these blocks is often left-aligned or centered, creating a strong visual hierarchy through the block structure itself. There are instances of small elements like circular 'bullet' points (9999px radius) for emphasis. Navigation is a simple bottom bar with ghost links, consistent with the minimal aesthetic.

### Imagery

The site uses a mix of photography and stylized abstract visuals. Photography, when present (e.g., 'Meet our Team'), tends to be bright and clear, often with a soft-focus background or natural lighting. Other visuals appear to be artistic compositions of objects (e.g., 'Our Projects'), resembling still-life paintings with muted colors and interesting shadow play, suggesting a creative and design-oriented approach. Images are contained within their color blocks, often with raw, un-masked rectangular edges, blending seamlessly into the blocky layout. There are also small, contained product screenshots/person images embedded within text blocks, acting as visual anchors for content. The density is moderate; images are used intentionally to break up text and color fields.
