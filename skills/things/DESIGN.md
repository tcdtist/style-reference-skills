---
version: alpha
name: Things
description: This design system evokes a sense of calm efficiency, like a meticulously organized desktop with clean lines and subtle visual cues. The primary visual identity is built around shades of cool gray and a vibrant, yet restrained, blue. High contrast text on light backgrounds prioritizes readability, while carefully applied rounded corners and a singular, subtle shadow provide a touch of visual softness without compromising the overall crispness. The experience feels grounded and clear, guiding the user with precision.
colors:
  midnight-ink: "#303336"
  charcoal-text: "#44474b"
  storm-gray: "#55606"
  subtle-ash: "#838b96"
  silver-mist: "#9299a4"
  off-white-canvas: "#ffffff"
  cloud-gray: "#f2f5f7"
  frost-border: "#dfe3e8"
  ocean-blue: "#2576eb"
  sky-link-blue: "#5c9cf5"
  action-button-blue: "#4f91fb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.35
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
spacing:
  cardRadius: 18px
  buttonRadius: 6px
  elementGap: 4-14px
  sectionGap: 48px
components:
  watch-introduction-video-button:
    role: 
  simply-powerful-section-card:
    role: 
  app-sidebar-navigation-card:
    role: 
  primary-action-button:
    role: Call to action.
  section-separator-card:
    role: Organizing content blocks.
  default-card:
    role: General content display.
  text-input-field:
    role: User data input.
  navigation-link:
    role: Top navigation.
  watch-video-button:
    role: Auxiliary action, media launch.
---

## Overview

**North Star:** organized desktop, clean and bright

This design system evokes a sense of calm efficiency, like a meticulously organized desktop with clean lines and subtle visual cues. The primary visual identity is built around shades of cool gray and a vibrant, yet restrained, blue. High contrast text on light backgrounds prioritizes readability, while carefully applied rounded corners and a singular, subtle shadow provide a touch of visual softness without compromising the overall crispness. The experience feels grounded and clear, guiding the user with precision.

### Do's

- Use Midnight Ink (#303336) for all primary headings and major text elements to maintain high contrast and visual weight.
- Apply Cloud Gray (#f2f5f7) as a background for distinct content sections or cards to create clear visual separation.
- Reserve Ocean Blue (#2576eb) for critical interactive elements like active links, primary icons, and CTA text to guide user focus.
- Use a consistent border-radius of 6px for all functional elements like buttons and input fields to ensure a cohesive interactive experience.
- Ensure generous vertical spacing between sections, using multiples of the 12px token to establish a comfortable content density.

### Don'ts

- Do not introduce new color hues; strictly adhere to the defined grays and blues to preserve the system’s crisp and minimalist aesthetic.
- Avoid arbitrary border-radii; use 3px for icons, 6px for buttons/inputs, and 18px for cards, and 12.8px for select larger elements.
- Do not use box-shadows liberally; limit to the subtle rgba(0, 0, 0, 0.1) 0px 2px 8px 0px for single-level elevation.
- Do not vary font families; maintain the system's reliance on ui-sans-serif for all text to ensure consistent typography and OS integration.
- Avoid dense packing of content; ensure minimum element gaps of 4px and significant section gaps with 48px to allow content to breathe.

### Layout

The page adheres to a centered maximum-width model of 900px, providing ample negative space on wider screens. The hero section features a large, centered product icon above a headline and subtext, followed by a video link, establishing a clear hierarchy. Subsequent sections alternate between text-heavy descriptions and product screenshots, often in a stacked, centered arrangement. The overall section rhythm is consistent, separated by substantial vertical spacing (approximately 48px), creating a sense of calm and clarity. Navigation is a simple top bar with minimal links, complementing the uncluttered feel.

### Imagery

The visual language consists primarily of highly polished, dimensional 3D app icons and product screenshots. These visuals are meticulously crafted, featuring a subtle gloss and depth that convey precision and quality. Photography is absent; instead, product screenshots showcase the UI in-situ on devices like Macs and iPhones, often with a slightly angled perspective. Illustrations are used sparingly, for instance, a small, multi-colored abstract graphic for 'Simply Powerful' — these are flat, geometric, and isolated, acting as decorative flourishes rather than primary content. The imagery's role is to explicitly showcase the product and its interface, emphasizing functionality and aesthetic quality.

### Elevation

Elevation is used sparingly and subtly, providing just enough visual separation to indicate a raised element without heavy shadows. The primary technique involves a soft, diffused shadow to gently lift content, maintaining the design's overall lightness and crispness rather than creating deep spatial depth.
