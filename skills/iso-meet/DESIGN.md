---
version: alpha
name: ISO Meet
description: ISO Meet establishes a focused, minimalist aesthetic with a canvas of crisp whites and soft grays, punctuated by precise black typography. The layout emphasizes breathing room and clear functional separation, using soft card shadows for subtle hierarchy. Components lean towards understated, adaptive forms with generous padding, making the interface feel spacious and inviting. The visual system supports a 'work-focused yet approachable' atmosphere, with hints of gentle gradient accents as stylistic touches rather than dominant features.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  ghost-gray: "#f2f2f2"
  muted-stone: "#999999"
  outline-gray: "#cccccc"
  subtle-black: "#222222"
  placeholder-dusky: "#808080"
  lavender-mist-gradient: "#e5d7ff"
  mint-whisper-gradient: "#b3e2cf"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.12px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.21px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.67
    letterSpacing: -0.29px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.26px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: -0.36px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.12
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.12
    letterSpacing: -1.2px
spacing:
  cardRadius: 24px
  buttonRadius: 160px
  elementGap: 18px
  sectionGap: 48px
components:
  ghost-navigation-button:
    role: Primary navigation links and secondary actions
  pill-button:
    role: Call-to-action button for primary actions
  monochrome-filled-button:
    role: Important secondary actions or form submissions
  feature-card:
    role: Grouping related information or showcasing features
  input-field:
    role: Standard input for text or data entry
  information-badge:
    role: Categorization or short status labels
  elevated-content-card:
    role: Highlighting key information or interactive elements, like a tooltip or special offer.
---

## Overview

**North Star:** White canvas, crisp black ink

ISO Meet establishes a focused, minimalist aesthetic with a canvas of crisp whites and soft grays, punctuated by precise black typography. The layout emphasizes breathing room and clear functional separation, using soft card shadows for subtle hierarchy. Components lean towards understated, adaptive forms with generous padding, making the interface feel spacious and inviting. The visual system supports a 'work-focused yet approachable' atmosphere, with hints of gentle gradient accents as stylistic touches rather than dominant features.

### Do's

- Prioritize Canvas White (#ffffff) for all main backgrounds to maintain a clean, open feel.
- Use Ink Black (#000000) for primary text, headings, and interactive elements to ensure strong contrast and visual hierarchy.
- Apply Ghost Gray (#f2f2f2) consistently for secondary backgrounds such as input fields, badges, and background cards.
- Employ the Instrument Sans family for all general UI text and body content, reserving Instrument Serif for larger, impactful headlines (48px and 60px) only.
- Round all interactive elements and content containers generously. Use 80px for inputs, 160px for full-bleed buttons, 50px for badges, and 24px for cards.
- Maintain comfortable visual breathing room with 'elementGap' at 18px and 'cardPadding' at 40px to ensure a spacious layout.
- Use soft, subtle shadows like `rgba(13, 32, 47, 0.04) 0px 0px 14px 0px` for elevation, avoiding harsh or opaque shadow effects.
- Ensure letter-spacing is applied per the typography specification, particularly for headlines, to achieve the intended precision and feel.

### Don'ts

- Avoid using highly saturated colors. The palette is intentionally monochrome with accent gradients reserved for decorative or atmospheric purposes.
- Do not use heavy, dark shadows. Elevation should be subtle, created with low-opacity, diffused shadows.
- Do not mix Instrument Sans and Instrument Serif at similar font sizes or within the same paragraph; maintain clear roles for each typeface.
- Avoid tight spacing. Respect the generous 'elementGap' and 'cardPadding' to prevent a cramped or dense appearance.
- Do not introduce strong, visible borders or dividers. Borders should be hairline, transparent, or rely on background contrast.
- Refrain from using color to indicate states unless explicitly defined (e.g., success/error shades are not part of this system). Rely on opacity or border changes instead.
- Never override the letter-spacing values specified in the typography section, as they are crucial for the distinct feel of the headlines.

### Layout

The page adheres to a max-width 1328px centered container, providing a structured and spacious canvas. Hero sections often feature a split-screen or centered headline over an evocative background image. Content typically arranges in alternating text and visual sections, creating a dynamic yet balanced rhythm. Feature displays regularly use card grids (e.g., 3-column) with consistent vertical spacing between sections (sectionGap: 48px). The navigation is a minimalist top bar with ghost links, maintaining a light header footprint. The overall density feels comfortable and open, prioritizing clear information delivery over cramped layouts.

### Imagery

The site predominantly uses photography, with a focus on abstract or artfully composed shots featuring creative professionals in motion or thoughtful poses. Imagery often has a desaturated, slightly moody quality with soft lighting, avoiding overly vibrant colors. Images are typically contained within rounded containers or serve as atmospheric backgrounds rather than raw, full-bleed elements. Icons are minimal, outlined, and monochromatic, with a thin stroke weight that aligns with the overall refined aesthetic. The imagery serves to create an atmosphere of modern creativity and quiet professionalism.
