---
version: alpha
name: Campsite
description: Campsite presents a pragmatic, focused aesthetic, prioritizing content clarity over visual embellishment. A mostly grayscale palette punctuated by sparse, functional pops of color guides attention without distraction. Typography is both compact and airy, creating easily scannable information blocks. The overall effect is one of quiet efficiency, like a well-organized office stripped of excess.
colors:
  ink: "#171717"
  canvas: "#ffffff"
  fog: "#f5f5f5"
  steel: "#a3a3a3"
  graystone: "#737373"
  ember: "#451a03"
  lagoon: "#3b82f6"
  success-green: "#22c55"
  warning-red: "#ef4444"
  pale-yellow: "#fef3c7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.25px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.33
    letterSpacing: -0.374px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.2
    letterSpacing: -0.522px
  display:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1
    letterSpacing: -1.8px
spacing:
  cardRadius: 8px
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 72px
components:
  announcement-banners:
    role: 
  post-feed-card:
    role: 
  testimonial-block:
    role: 
  primary-navigation-button-text:
    role: Interactive element
  secondary-action-button-filled:
    role: Interactive element
  call-to-action-button-green:
    role: Interactive element
  icon-button-ghost:
    role: Interactive element
  homepage-headline:
    role: Display Text
  section-heading:
    role: Heading Text
  info-banner-notice:
    role: Status/Alert
  notification-tag-red:
    role: Status/Alert
  ui-card:
    role: Content Container
  input-field:
    role: Interactive Input
---

## Overview

**North Star:** Desktop OS window pane, minimalist and functional.

Campsite presents a pragmatic, focused aesthetic, prioritizing content clarity over visual embellishment. A mostly grayscale palette punctuated by sparse, functional pops of color guides attention without distraction. Typography is both compact and airy, creating easily scannable information blocks. The overall effect is one of quiet efficiency, like a well-organized office stripped of excess.

### Do's

- Use Ink (#171717) for all primary body text and headlines to maintain directness.
- Apply 9999px border-radius to all action buttons for a consistent soft, pill-like appearance.
- Employ Lagoon (#3b82f6) exclusively for primary interactive states and link hovers to signal interactivity clearly.
- Maintain a clear visual hierarchy by utilizing Inter at weight 600 for all headings (29px and 58px) and weight 400 for body text.
- Separate content sections with at least 72px vertical spacing to ensure ample breathing room and prevent visual clutter.
- Design all content containers (cards, modals) with 8px border radius and the soft elevation shadow (rgba(0, 0, 0, 0.05) 0px 3px 6px -3px) to imply depth without heavy shadows.

### Don'ts

- Do not introduce strong chromatic colors other than Ember (#451a03), Lagoon (#3b82f6), Success Green (#22c55e), and Warning Red (#ef4444) to maintain the muted, focused palette.
- Avoid using multiple border-radius values on elements of the same type; stick to 9999px for buttons, 8px for cards, and 4px for inputs.
- Do not use letter spacing greater than normal for text smaller than 16px; tighter spacing is reserved for display sizes.
- Do not use heavy, dark shadows; the subtle rgba(0, 0, 0, 0.05) 0px 3px 6px -3px shadow is the specified elevation style.
- Avoid decorative gradients or background images; the design emphasizes clean surfaces and content focus.
- Do not use generic system default blue for links; ensure all links use Ink (#171717) with subtle underline or context-specific styling.

### Layout

The page maintains a centered, max-width layout for content, which contrasts with the full-bleed hero section. The hero prominently features a large, centered headline over a background that combines a product screenshot (UI mockups) with an abstract, energetic gradient. Subsequent sections employ a consistent alternating pattern of text on the left and visual elements (product screenshots, further UI mockups) on the right, or vice versa. Vertical rhythm is established through generous and consistent section gaps (around 72px). Content density within sections is moderate, with ample whitespace around text blocks and UI components, promoting readability. Navigation is a simple top bar with text links and a 'ghost' style button on the far right.

### Imagery

This site predominantly uses product screenshots and UI mockups presented within realistic browser/OS frames, giving a 'software-in-use' authenticity. Photography is minimal, appearing primarily as small profile pictures. Illustrations are abstract and appear in the background of the hero section, an energetic splash of orange and white that provides a counterpoint to the otherwise orderly UI elements. Icons are filled, monochrome (Ink), and consistently clean-lined. The overall role of imagery is explanatory and functional, showcasing the product directly rather than relying on abstract concepts or lifestyle visuals; the abstract hero gradient is the only concession to mood, pulling from energetic, primary colors and making it distinct.
