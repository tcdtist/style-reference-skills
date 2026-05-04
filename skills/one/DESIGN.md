---
version: alpha
name: ONE
description: ONE embraces a stark, high-contrast aesthetic where rich black surfaces meet crisp monochrome typography. The visual experience is anchored by dynamic large-format video content, framed within softly rounded containers. Interaction elements are minimalist, appearing as ghost buttons with fine outlines in a near-white hue, creating a sense of understated command. The overall impression is one of sophisticated, content-driven minimalism.
colors:
  midnight-void: "#000000"
  ghost-outline: "#fbfbfa"
  muted-ash: "#bec0c5"
  skybound-blue: "#0075ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
spacing:
  cardRadius: 12px
  buttonRadius: 999px
  elementGap: 16px
  sectionGap: 96px
components:
  ghost-contact-button-light:
    role: Interactive element (primary)
  ghost-contact-button-dark:
    role: Interactive element (secondary)
  video-player-card:
    role: Content display
---

## Overview

**North Star:** Shadowbox cinematic frames

ONE embraces a stark, high-contrast aesthetic where rich black surfaces meet crisp monochrome typography. The visual experience is anchored by dynamic large-format video content, framed within softly rounded containers. Interaction elements are minimalist, appearing as ghost buttons with fine outlines in a near-white hue, creating a sense of understated command. The overall impression is one of sophisticated, content-driven minimalism.

### Do's

- Always use Midnight Void (#000000) as the dominant background color to maintain the dark, immersive feel.
- Frame primary visual content with a 12px border-radius, as seen in the Video Player Card component, for a consistent soft-edged presentation.
- Utilize Ghost Outline (#fbfbfa) exclusively for outlining interactive elements to preserve the minimalist aesthetic.
- Apply MagicUiPro with a -0.0100em letter-spacing to all text elements to establish a precise, uniform typographic voice.
- Maintain generous section spacing of 96px to create clear content separation and a spacious layout.
- Employ the 999px border-radius for all interactive buttons and tags to ensure a consistent pill-shaped form.
- Use Muted Ash (#bec0c5) for secondary text or subtle decorative lines to provide visual hierarchy without strong contrast.

### Don'ts

- Do not introduce strong accent colors in large blocks; color should act as functional punctuation, not primary decoration.
- Avoid heavy drop shadows or complex elevation; the design relies on flat surfaces and minimal depth.
- Do not deviate from the MagicUiPro font or its specified letter-spacing; it is central to the typographic identity.
- Refrain from using tight component and section spacing; the system prioritizes breathability and space.
- Do not use solid background buttons for primary calls to action; stick to ghost or outlined styles.
- Avoid sharp, un-rounded corners on significant content blocks like cards or media containers.
- Do not mix text colors for primary content; stick to Midnight Void (#000000) on light elements or Ghost Outline (#fbfbfa) on dark elements for readability.

### Layout

The page structure is full-bleed, with video content often spanning the entire viewport width, giving a sense of immersion. There is a strong emphasis on vertical stacking of content with generous section gaps of 96px, creating a spacious and unhurried rhythm. The header is minimal, featuring only a logo and a ghost contact button. Content is primarily centered or presented in balanced, often video-dominant, blocks. The text 'ONE is...' section showcases a distinct, multi-column grid for textual content, but maintains a wide, quiet layout.

### Imagery

This design system heavily features large-format video content or striking photography, typically presented in full-width or near full-width frames. Visuals are contained within soft 12px rounded rectangles, giving them a cinematic yet approachable feel. The focus is on the visual itself, often abstract or concept-driven, serving as atmospheric backdrops or direct content. Icons are minimal, outlined, and monochromatic, integrated seamlessly into the UI.
