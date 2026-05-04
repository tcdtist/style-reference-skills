---
version: alpha
name: Slab
description: Slab's design system feels like a warm, engaging knowledge hub, balancing a serious intent with inviting visual cues. The predominant use of varied neutrals provides clarity and structure, offset by a rich, deep berry background in the hero, creating an immediate sense of depth and distinction. Strategic pops of vivid red and blue for CTAs act as clear beacons against the otherwise subdued palette. Custom fonts with precise letter-spacing contribute to a distinguished readability, ensuring information feels approachable yet authoritative.
colors:
  berry-ink: "#42022"
  slab-red: "#ff4143"
  slab-blue: "#4285f4"
  muted-cyan: "#00d5a0"
  muted-violet: "#253858"
  vivid-blue: "#0061ff"
  sky-blue: "#50c5dc"
  crisp-white: "#ffffff"
  near-black: "#000000"
  slate-gray: "#455360"
  ash-gray: "#939598"
  border-gray: "#e0e0e0"
  off-white: "#f1f1f1"
  berry-gradient-left: "#42022"
  berry-gradient-right: "#42022"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.27px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
    letterSpacing: 0.3px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
    letterSpacing: 0.33px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0.4px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.14
    letterSpacing: -0.8px
  display:
    fontFamily: "system-ui"
    fontSize: 53px
    lineHeight: 1
    letterSpacing: -1px
spacing:
  cardRadius: 6px
  buttonRadius: 6px
  elementGap: 8-24px
  sectionGap: 40-64px
components:
  sign-up-form-block:
    role: 
  feature-section-create:
    role: 
  organize-feature-card:
    role: 
  primary-action-button:
    role: Call to action
  google-sign-up-button:
    role: Social login
  ghost-button:
    role: Secondary action
  minimal-link-button:
    role: Tertiary action/text link
  text-input-field:
    role: Data entry
  ghost-badge:
    role: Informational label
---

## Overview

**North Star:** Warm knowledge hub behind a berry curtain. The UI feels like an organized library where key information is highlighted by vibrant accents.

Slab's design system feels like a warm, engaging knowledge hub, balancing a serious intent with inviting visual cues. The predominant use of varied neutrals provides clarity and structure, offset by a rich, deep berry background in the hero, creating an immediate sense of depth and distinction. Strategic pops of vivid red and blue for CTAs act as clear beacons against the otherwise subdued palette. Custom fonts with precise letter-spacing contribute to a distinguished readability, ensuring information feels approachable yet authoritative.

### Do's

- Use Whitney for all body text, UI elements, and secondary headings, ensuring slightly tracked letter-spacing.
- Apply Sentinel with significant negative letter-spacing for all primary headlines (display and display-sm) to achieve a compact, elegant look.
- Prioritize Slab Red (#ff4143) for primary call-to-action buttons, reserving Slab Blue (#4285f4) for specific integration buttons like 'Sign up with Google'.
- Implement 6px border-radius consistently for all buttons and input fields to maintain a soft, unified aesthetic.
- Offset sections with varying background colors like Berry Ink (#42022e) and Crisp White (#ffffff) to create clear visual separation.
- Utilize a baseline of 16px as the primary body text size with a line-height of 1.5, establishing comfortable readability.
- Employ the neutral progression of Near Black (#000000) for primary text, Slate Gray (#455360) for secondary, and Ash Gray (#939598) for tertiary information.

### Don'ts

- Do not use generic, default blue for links; instead, use Slate Gray (#455360) for text links and Slab Red (#ff4143) or Slab Blue (#4285f4) for button interactions.
- Avoid excessive shadow or elevation; rely on color and spacing to create depth and hierarchy.
- Do not vary border-radius indiscriminately; stick to 6px for interactive elements and inputs.
- Keep headlines concise, leveraging the Sentinel typeface's distinct character to command attention without excessive length.
- Refrain from introducing new vivid colors outside the defined brand and accent palette to maintain visual clarity.
- Do not use plain, linear text blocks for feature descriptions; integrate relevant imagery or icons alongside text to enhance comprehension.

### Layout

The page alternates between a full-bleed, deep berry hero section with centered content and contained white sections. The hero features a large, centered headline and subtext, flanked by form elements. Subsequent sections typically employ a two-column layout, alternating between image-left/text-right and text-left/image-right, creating a rhythmic visual flow. Content blocks within these sections are usually stacked vertically. There's a consistent vertical spacing between major sections, contributing to a spacious feel. The maximum content width appears to be constrained within a comfortable reading measure, ensuring readability without being overly narrow. The navigation is a sticky top bar.

### Imagery

The visual language primarily uses product screenshots and abstract, geometric illustrations. Product screenshots are contained within a clean device-like frame, often showcasing UI elements with color highlights. Illustrations are flat, abstract shapes in a muted brand palette of blues, greens, oranges, and purples, sometimes overlapping or featuring organic, blob-like contours. These serve a decorative and explanatory role, indicating concepts like collaboration or organization. Icons are filled and monochrome, matching the Slate Gray text. The density is moderate, with images playing a crucial supporting role to text, breaking up content without overwhelming it.
