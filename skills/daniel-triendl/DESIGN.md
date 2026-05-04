---
version: alpha
name: Daniel Triendl
description: The Daniel Triendl portfolio uses a stark, high-contrast aesthetic reminiscent of print media, built on a pure white canvas and almost exclusively black typography. Its visual identity is defined by a bold, unadorned structure where content takes precedence, eschewing soft gradients, rounded corners, or shadows for a direct, impactful presentation. Interactivity is subtle, highlighted by thin borders and text color changes rather than expressive fills. The system prioritizes clear communication, leveraging a precise and minimal set of visual rules to showcase vibrant illustration work with understated elegance.
colors:
  canvas-white: "#ffffff"
  midnight-black: "#000000"
  soft-gray: "#f2f2f2"
  muted-ash: "#9b9b9b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
    letterSpacing: -0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.21
    letterSpacing: -0.14px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.17
    letterSpacing: -0.14px
spacing:
  elementGap: 6px
components:
  gallery-item-card:
    role: Container for individual artwork previews.
  ghost-button:
    role: Interactive elements for navigation or secondary actions.
  navigation-link:
    role: Primary navigation items.
  floating-action-button-fab:
    role: Circular button for main actions on an artwork detail page (e.g. 'Work', 'About', 'Contact').
---

## Overview

**North Star:** Gallery wall of stark contrasts

The Daniel Triendl portfolio uses a stark, high-contrast aesthetic reminiscent of print media, built on a pure white canvas and almost exclusively black typography. Its visual identity is defined by a bold, unadorned structure where content takes precedence, eschewing soft gradients, rounded corners, or shadows for a direct, impactful presentation. Interactivity is subtle, highlighted by thin borders and text color changes rather than expressive fills. The system prioritizes clear communication, leveraging a precise and minimal set of visual rules to showcase vibrant illustration work with understated elegance.

### Do's

- Prioritize 'Canvas White' (#ffffff) for all main backgrounds and 'Midnight Black' (#000000) for primary text and interface elements to maintain high contrast.
- Use 'UniversalSans' weights 400 and 500 for most body copy and labels, and ‘Rza’ font for headings, adhering to the specified type scale: 10px (UniversalSans-500) for captions, 14px (UniversalSans-400) for body, and 24px (Rza) for headings.
- Apply precise letter-spacing: -0.0100em for 'Times' and 'UniversalSans' and -0.0060em for 'Rza' to maintain distinct typographic rhythm.
- Implement interactive elements like Ghost Buttons with transparent backgrounds and 'Midnight Black' borders or text for a subtle, print-like interaction.
- Utilize 'Soft Gray' (#f2f2f2) sparingly for secondary background areas or dividers, creating soft visual separation without introducing strong color.
- Use geometric shapes for navigation elements (e.g., circular floating action buttons with 48px radius) to introduce subtle design flair.
- Maintain a compact density with an 'elementGap' of '6px' to keep elements closely related within content blocks.

### Don'ts

- Avoid using shadows or excessive elevation; the design system largely relies on flat surfaces and high color contrast for visual depth, with only 'rgba(0,0,0,0.1) 0px 4px 4px 0px' permissible for specific navigation-related elements.
- Do not introduce strong accent colors. Color should be reserved for the artwork itself, maintaining achromaticity in the UI.
- Do not use rounded corners on main content cards; they should maintain a 0px radius for a sharp, gallery-like presentation.
- Avoid large horizontal or vertical padding on interactive elements like buttons; they generally have minimal to zero explicit padding, relying on their text content for sizing.
- Do not use gradient fills for UI elements, as the design system is explicitly flat and high-contrast.
- Do not add superfluous decorative elements; the UI is meant to be a neutral frame for the vibrant illustrations.
- Avoid heavy borders or solid fills for buttons; most interactive elements are ghost buttons with 'Midnight Black' text against a white background.

### Layout

The page uses a full-bleed, responsive grid system, without a fixed max-width for the main content. The hero section is a variable-height grid of illustrations, interspersed with text blocks. Content is arranged primarily as a dense, masonry-like grid of image cards, which reflows based on viewport width. Text sections (e.g., 'About' or 'Contact') are often centered or left-aligned within their column, maintaining a clean visual hierarchy. Navigation is minimal, consisting of a sticky top bar with text links and a 'Explore' / 'Index' toggle, and floating action buttons for contact/work on scroll.

### Imagery

The site primarily features illustrations. These are often vibrant, full-color, and range in style from bold, graphic art with strong outlines and flat fills to more detailed, whimsical narrative scenes. Illustrations are presented prominently, generally contained within card-like structures but without explicit borders or shadows that would detract from the artwork. They are the content, not decorative background. Icons, if present, are minimal line-art or filled shapes in 'Midnight Black'. There is a high density of imagery relative to text, making the site a visual gallery.
