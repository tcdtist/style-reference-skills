---
version: alpha
name: Squarespace
description: Squarespace embodies a refined, editorial aesthetic with a stark contrast between a dominant dark mode hero and a light canvas for content. Typography relies on a precise, custom sans-serif with subtle letter-spacing variations to convey authority. Components are understated, often ghost-like or subtly outlined, emphasizing content over heavy ornamentation. The system prioritizes functional clarity and a premium, minimalist feel.
colors:
  absolute-zero: "#000000"
  canvas-white: "#ffffff"
  graphite: "#2f2f2f"
  silver-mist: "#898989"
  light-gray: "#dddddd"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body-lg:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1
    letterSpacing: -0.52px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -0.4px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.93
    letterSpacing: -0.64px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.93
    letterSpacing: -0.72px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 12px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Main call-to-action button for initiating key user flows.
  ghost-button:
    role: Subtle, secondary action button, often used in navigation or alongside a primary button.
  pill-button:
    role: Decorative or categorized action, such as tags or filter buttons.
  dark-card:
    role: Content container for featured sections against a light background.
  default-card:
    role: Standard content container, visually distinct through a soft radius.
  outline-large-button:
    role: Alternative call-to-action with a larger, more pronounced border.
  white-text-input:
    role: Input fields used primarily on dark backgrounds.
---

## Overview

**North Star:** Editorial White-glove Service

Squarespace embodies a refined, editorial aesthetic with a stark contrast between a dominant dark mode hero and a light canvas for content. Typography relies on a precise, custom sans-serif with subtle letter-spacing variations to convey authority. Components are understated, often ghost-like or subtly outlined, emphasizing content over heavy ornamentation. The system prioritizes functional clarity and a premium, minimalist feel.

### Do's

- Use Absolute Zero (#000000) as the default background for hero sections and footer areas to establish a premium, high-contrast feel.
- Apply Clarkson font consistently for all text, varying weights (300, 400, 500) and sizes according to the type scale to maintain stylistic unity.
- Utilize 8px border radius for all cards, standard buttons, and input fields to ensure a subtle, consistent softness.
- Implement a 100px border radius for pill-shaped elements like tags or category buttons.
- Maintain 12px as the standard `elementGap` for horizontal and vertical spacing between small elements.
- Reserve Graphite (#2f2f2f) for primary actions, ensuring its distinction against the black and white palette.
- Ensure headings use negative letter-spacing from Clarkson font (-0.06em to -0.001em depending on size) to create a tight, editorial look.

### Don'ts

- Avoid using bright or overly saturated colors, as the palette is largely monochromatic with controlled accents.
- Do not use heavy shadows or deep elevation for components; surfaces should remain flat or subtly defined with borders.
- Do not introduce new font families; the system relies on Clarkson and Clarkson Serif for all typographic needs.
- Avoid arbitrary border radii; stick to 8px, 100px, 3px, and 30px as defined by the system for specific components.
- Do not use generic padding values; adhere to the specified spacing tokens like 12px, 16px, 24px, and 40px.
- Refrain from using color to indicate states (success/error) unless explicitly defined; rely on text and icons for such feedback.
- Do not break the light content / dark hero pattern; this contrast is central to the visual identity.

### Layout

The page structure heavily employs a full-bleed layout for hero sections, transitioning to a maximum-width contained layout (approximately 1200px) for most content sections. The hero typically features a dramatic background image with centered, large typography. Section rhythm alternates between full-bleed dark blocks and contained white sections, creating distinct visual breaks. Content is predominantly arranged in centered stacks or two-column layouts where text and visuals alternate. Feature sections often use a grid of cards, maintaining an overall spacious yet dense presentation. The navigation is a fixed top bar on dark backgrounds, becoming a fixed, visually neutral bar on light sections.

### Imagery

The site uses a mix of high-quality photography and stylized product illustrations. Photography is generally moody and rich, often appearing as full-bleed background imagery with a dark overlay, framing content. Product illustrations are minimal, often 3D renders or abstract shapes, rendered in a subdued, almost monochromatic palette, designed to integrate seamlessly with the UI rather than stand out. Icons are simple, monochrome outlines, used functionally for navigation and features, maintaining a lightweight feel. Imagery serves to establish atmosphere and showcase elegant product usage, rather than being purely decorative.
