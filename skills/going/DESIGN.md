---
version: alpha
name: Going™
description: Going employs a vibrant and energetic design system, using a warm lime green as an expansive canvas, punctuated by deep teal text and a striking violet accent for primary actions. The aesthetic feels playful yet authoritative, with soft, rounded corners and sparse, subtle card shadows. Typography is confident and direct, maintaining legibility against varied backgrounds. The overall impression is one of approachable dynamism, steering clear of corporate sterility.
colors:
  canvas-lime: "#d7ffc2"
  teal-ink: "#004449"
  action-violet: "#483cff"
  highlight-green: "#0bff80"
  pitch-black: "#000000"
  paper-white: "#fffef0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.02px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: 0.02px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: 0.02px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.17
    letterSpacing: 0.06px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.15
    letterSpacing: 0.06px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.14
    letterSpacing: 0.06px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.1
    letterSpacing: 0.1px
spacing:
  cardRadius: 24px
  buttonRadius: 900px
  elementGap: 16px
  sectionGap: 80px
components:
  primary-action-button:
    role: Call to action
  outlined-navigation-button:
    role: Secondary action / Navigation
  lime-accent-button:
    role: Tertiary action / Decorative
  content-card:
    role: Content container
  rating-badge:
    role: Social proof / Endorsement
---

## Overview

**North Star:** energetic journey on lime

Going employs a vibrant and energetic design system, using a warm lime green as an expansive canvas, punctuated by deep teal text and a striking violet accent for primary actions. The aesthetic feels playful yet authoritative, with soft, rounded corners and sparse, subtle card shadows. Typography is confident and direct, maintaining legibility against varied backgrounds. The overall impression is one of approachable dynamism, steering clear of corporate sterility.

### Do's

- Prioritize 'Canvas Lime' (#d7ffc2) as the primary background for full sections and content cards to establish the brand's energetic foundation.
- Use 'Action Violet' (#483cff) exclusively for primary call-to-action buttons, ensuring high visual impact and clear user intent.
- Apply a 900px border radius to all interactive buttons and small tags or badges to maintain a soft, approachable, and consistent pill-like shape.
- Set the main body and link text in 'Teal Ink' (#004449) for optimal readability against both 'Canvas Lime' and 'Paper White' backgrounds.
- Maintain a spacious feel by using a section gap of 80px between major content blocks.
- Utilize PP Mori in varying weights (400, 475, 600, 700) to create a clear typographic hierarchy, from subtle body text to bold headlines, adhering to the specified letter-spacing for each size.
- Incorporate a subtle shadow (rgba(0, 0, 0, 0.04) 0px 2px 8px 0px) on 'Content Cards' to provide a gentle lift without heavy visual weight.

### Don'ts

- Do not introduce additional background or accent colors that deviate from the established palette of 'Canvas Lime', 'Teal Ink', 'Action Violet', and 'Highlight Green'.
- Avoid sharp corners; all primary UI elements (buttons, cards) should reflect the generous 900px or 24px radii.
- Do not use multiple, heavy shadows or complex gradients unless explicitly defined in the system; stick to the single, subtle card shadow for elevation.
- Refrain from using bold type for conversational body text; reserve higher weights for headings and emphasized elements only.
- Do not deviate from the established 16px element gap and 32px card padding, to maintain the brand's consistent spaciousness.
- Do not use 'Highlight Green' (#0bff80) as a functional UI element; it is reserved for decorative headline accents.
- Avoid primary actions that are not 'Action Violet' filled buttons; secondary actions can be outlined or lime-accented, but the main CTA is distinct.
