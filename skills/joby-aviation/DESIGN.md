---
version: alpha
name: Joby Aviation
description: Joby Aviation's visual system evokes a sense of aspirational flight and advanced technology. The primary design language pairs deep, saturated blues with stark white typography, creating a high-contrast, almost nocturnal-but-optimistic feel. Large, asymmetric rounded forms in backgrounds and card elements suggest fluidity and motion, while the overall spaciousness and minimal use of decorative elements keep the focus on the product's promise.
colors:
  midnight-ink: "#0e1620"
  cloud-whisper: "#f5f4df"
  skybound-blue: "#007ae5"
  cosmic-violet: "#1c3f99"
  sunset-orange: "#eb6110"
  horizon-blue: "#083e6f"
  pale-peach: "#ffd9c9"
  shadow-grey: "#abab9c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
    letterSpacing: -0.03px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.3
    letterSpacing: -0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.01px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.05
    letterSpacing: -0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.05
    letterSpacing: -0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.05
    letterSpacing: -0.03px
spacing:
  cardRadius: 16px
  elementGap: 8px
  sectionGap: 113px
components:
  ghost-navigation-button-light-text:
    role: Interactive element for navigation or secondary actions, appearing on dark backgrounds.
  ghost-navigation-button-dark-text:
    role: Interactive element for navigation or secondary actions, appearing on light backgrounds.
  feature-card-blue-bg:
    role: Container for showcasing features or information, using the primary brand blue.
  hero-section-card:
    role: Prominent card used in hero sections, often with asymmetric rounded corners.
  ghost-input:
    role: Input field for user entry, designed for dark backgrounds.
  context-badge:
    role: Small informational or labeling element.
---

## Overview

**North Star:** Skyward Glide

Joby Aviation's visual system evokes a sense of aspirational flight and advanced technology. The primary design language pairs deep, saturated blues with stark white typography, creating a high-contrast, almost nocturnal-but-optimistic feel. Large, asymmetric rounded forms in backgrounds and card elements suggest fluidity and motion, while the overall spaciousness and minimal use of decorative elements keep the focus on the product's promise.

### Do's

- Always use Midnight Ink (#0e1620) for primary text on light backgrounds and Cloud Whisper (#f5f4df) for text on dark/brand backgrounds to maintain high contrast (16.4:1 AAA on Cloud Whisper).
- Employ JobyDisplay for all headings and JobyText for body copy, adjusting letter-spacing per size: tighter for display text (-0.0300em) and slightly looser for body text (-0.0100em).
- Utilize Skybound Blue (#007ae5) as the primary background color for immersive sections, conveying the brand's core identity.
- Apply 16px border-radius to standard cards and 160px 160px 0px 0px for distinctive, flowing card shapes in prominent areas.
- Maintain a spacious layout with a consistent elementGap of 8px and a sectionGap of approximately 113px for clear content separation.
- Use Horizon Blue (#083e6f) as the border color for outlined ghost buttons on light backgrounds, ensuring brand-aligned interactivity.
- Integrate expressive motion with ease timing and 0.4s duration for transitions like transform, visibility, and opacity to enhance perceived responsiveness.

### Don'ts

- Avoid using highly saturated colors for large text blocks; reserve them for accents or backgrounds.
- Do not use box-shadows on elements not explicitly defined with one; maintain a generally flat aesthetic unless an element needs distinct visual elevation (like the Feature Card's rgba(0, 0, 0, 0.3) 0px 16px 47.6px 0px).
- Do not deviate from the established font families and their respective weights; consistency is key to brand recognition.
- Refrain from tight spacing between content blocks or elements; maintain the spacious feel with the established elementGap and sectionGap values.
- Do not use generic system font Arial unless it's for specific, small utility components where JobyText doesn't fit the specified size range.
- Avoid arbitrary border radii; stick to the defined 16px, 8px, 160px, or 147.6px values for visual consistency and brand recognition.
- Never use primary brand colors like Skybound Blue or Cosmic Violet for primary action text or borders. Interactivity for primary actions is conveyed through ghost buttons with specific text/border colors (e.g., Cloud Whisper or Horizon Blue).

### Layout

The page primarily utilizes a full-bleed layout, where background imagery and brand colors extend to the viewport edges, especially in the hero section. Content is typically centered within this full-bleed context. The hero section features a dramatic, large-scale image with a prominent, centered headline. Subsequent sections exhibit consistent vertical spacing, often switching between full-bleed brand color backgrounds (Skybound Blue) and white content areas. A loose, implicit grid is used for feature presentation, combining text and visuals. Navigation consists of a sticky top bar with minimal links.

### Imagery

The visual language predominantly features high-contrast, moody photography showcasing an individual looking out of an aircraft window at a city skyline, emphasizing aspiration and cutting-edge travel. Imagery is often full-bleed or large-scale, providing an immersive experience. Product shots are not explicitly shown but implied. Iconography is minimal and appears as stroke-based and monochromatic, consistent with the overall clean UI. Imagery serves a decorative and atmospheric role, setting the brand's aspirational tone rather than explaining specific features.
