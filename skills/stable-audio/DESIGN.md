---
version: alpha
name: Stable Audio
description: Stable Audio presents a playful and accessible aesthetic built on a foundation of warm, muted neutrals that evoke aged paper, punctuated by vibrant, almost neon, pops of color. This system employs gentle, rounded forms for interactive elements set against a backdrop of crisp, geometric content blocks. The primary contrast comes from a dark, near-black text on these soft backgrounds, giving it a friendly yet structured feel.
colors:
  midnight-ink: "#000000"
  charcoal-accent: "#27262b"
  clean-canvas: "#ffffff"
  parchment-base: "#f4f1ec"
  subtle-ash: "#e2e2e7"
  pale-earth: "#e5dfc8"
  muted-sage: "#c9d19c"
  desert-sand: "#d4c9b4"
  deep-plum: "#c4bae3"
  ocean-mist: "#9fc2c7"
  vivid-chartreuse: "#a0f32f"
  goldenrod-pop: "#e1ca46"
  sunset-orange: "#f9a916"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.71
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.71
    letterSpacing: -0.011px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.006px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.014px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
    letterSpacing: -0.015px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.15
    letterSpacing: -0.017px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -0.021px
spacing:
  cardRadius: 4px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 64px
components:
  primary-cta-card:
    role: 
  feature-toggle-pills-text-to-audio-section-card:
    role: 
  audio-track-history-list:
    role: 
  secondary-ghost-button:
    role: Less prominent actions
  navigation-button:
    role: Header navigation actions
  section-title-main:
    role: Hero and major section headings
  body-text:
    role: Paragraphs and descriptions
  minor-card:
    role: Information blocks, e.g., prompt details
  highlight-card-purple:
    role: Visually distinct content sections
  highlight-card-yellow:
    role: Highlighting unique features or categories
  image-placeholder:
    role: Visual representation for audio/music
---

## Overview

**North Star:** Warm parchment; vibrant neon bursts.

Stable Audio presents a playful and accessible aesthetic built on a foundation of warm, muted neutrals that evoke aged paper, punctuated by vibrant, almost neon, pops of color. This system employs gentle, rounded forms for interactive elements set against a backdrop of crisp, geometric content blocks. The primary contrast comes from a dark, near-black text on these soft backgrounds, giving it a friendly yet structured feel.

### Do's

- Use 'Parchment Base' (#f4f1ec) as the default page background.
- Apply 'Midnight Ink' (#000000) for all primary text elements, including headings and body copy.
- Utilize 'Sunset Orange' (#f9a916) exclusively for primary call-to-action buttons, paired with 'Midnight Ink' text.
- Implement a 9999px border-radius for all interactive buttons and input fields to maintain a soft, approachable feel.
- Maintain a 4px border-radius for static containers like cards and images.
- Employ the Inter typeface for all content, selecting weights 400 for body and 700 for headings, adjusting letter-spacing as per type scale.
- Separate major content sections using a `sectionGap` of 64px.

### Don'ts

- Do not use dark backgrounds for large content blocks; stick to the light, muted neutral palette.
- Avoid sharp corners on interactive elements; maintain the 9999px radius for buttons and form fields.
- Do not introduce new typefaces; Inter is the sole font allowed.
- Do not add additional drop shadows unless explicitly specified for an overlay; rely on background color changes for hierarchy.
- Avoid complex, multi-color gradients for backgrounds; stick to solid or subtly varying background colors.
- Do not introduce additional vivid accent colors beyond 'Sunset Orange', 'Vivid Chartreuse', and 'Goldenrod Pop' without explicit approval.

### Layout

The site employs a contained layout with a `pageMaxWidth` of 1764px, centrally aligned. The hero section presents as a split layout: a prominent headline on a 'Parchment Base' background on the left, balanced by an interactive content block on the right. Section rhythm is marked by alternating subtle background colors (e.g., 'Pale Earth', 'Deep Plum', 'Ocean Mist') creating distinct yet flowing content zones. Content arrangement frequently uses a 2-column pattern, with text on one side and a corresponding visual component (like an abstract graphic or product screenshot) on the other. Feature grids are present, likely 3-column. Spacing between sections is generous, lending a comfortable and breathable feel, rather than information-dense blocks. Navigation is a simple top bar with aligned 'Sign up' and 'Log in' buttons, appearing minimal and functional.

### Imagery

The visual language for imagery is characterized by minimalist, geometric abstract shapes acting as placeholders for audio content, frequently rendered in vivid brand colors like 'Vivid Chartreuse' (#a0f32f) or 'Goldenrod Pop' (#e1ca46). These abstract forms (often semi-circles) are contained within square or rectangular frames with a 4px border-radius, giving them a polished, almost 'album art' feel for UI elements. Product screenshots are clean and direct, showing the interface in action without heavy masking or stylized effects. Icons are simple, outlined, and monochromatic, typically in 'Midnight Ink' (#000000), serving a functional rather than decorative role. The overall density is balanced, with imagery serving as clear visual anchors in text-rich sections.
