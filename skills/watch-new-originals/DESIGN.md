---
version: alpha
name: Watch new Originals
description: Disney+ maintains a 'midnight command center' aesthetic, designed for content consumption. It features a predominantly dark background with contrasting light typography to highlight content. Functional elements are often subtle until interaction, utilizing a vibrant blue for calls to action, drawing attention against the otherwise subdued palette. The visual system is defined by its strong reliance on dark surfaces, minimal borders, and a focus on content presentation.
colors:
  deep-midnight: "#040714"
  cool-graphite: "#282a36"
  sky-blue: "#33ddff"
  electric-teal: "#02d6e8"
  text-dark: "#02172a"
  muted-silver: "#e5e7eb"
  light-gray: "#c0c0c0"
  off-white: "#fafafa"
  deep-space: "#0e0b14"
  ghost-gray: "#b7b8bd"
  accent-gray: "#1e1f24"
  button-dark-text: "#17171c"
  faint-border: "#6f717b"
  canvas-blue-black: "#010104"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.3px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0.35px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.38
    letterSpacing: 0.4px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.38
    letterSpacing: 0.45px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: 0.5px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: 0.7px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: 1px
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 24px
components:
  ghost-button:
    role: Navigation, secondary actions, in-content links
  primary-action-button:
    role: Main calls to action, form submissions
  signup-cta-button:
    role: Specific call to action, usually in hero or signup forms.
  default-card:
    role: Content presentation, media cards.
  black-background-card:
    role: Emphasized content cards, often for media previews.
  email-input-field:
    role: User input for email addresses.
  ghost-badge:
    role: Content metadata, labels
---

## Overview

**North Star:** Midnight Command Center: Dark, immersive interfaces punctuated by vivid interactive highlights.

Disney+ maintains a 'midnight command center' aesthetic, designed for content consumption. It features a predominantly dark background with contrasting light typography to highlight content. Functional elements are often subtle until interaction, utilizing a vibrant blue for calls to action, drawing attention against the otherwise subdued palette. The visual system is defined by its strong reliance on dark surfaces, minimal borders, and a focus on content presentation.

### Do's

- Use 'Deep Midnight' (#040714) as the base background for most full-bleed sections to maintain immersion.
- Apply 'Sky Blue' (#33ddff) for primary interactive elements, ensuring high contrast against dark backgrounds.
- Maintain a comfortable density with an 'elementGap' of '8px' for most inline spacing between UI elements.
- Ensure all text, especially headlines, uses the Inspire typeface with a consistent '0.0250em' letter-spacing.
- Define card and button corners with '12px' and '8px' border-radius respectively, using the specified tokens.
- Prioritize high contrast for text: 'Off-White' (#fafafa) on 'Deep Midnight' (#040714) or 'Cool Graphite' (#282a36).
- Use 'Muted Silver' (#e5e7eb) for subtle UI borders, outlines, and dividers to articulate structure without distraction.

### Don'ts

- Do not introduce light backgrounds for main content areas; maintain the dark theme for immersion.
- Avoid using highly saturated colors for large areas or decorative elements; reserve vibrancy for functional accents.
- Do not deviate from the established border radii; maintain '12px' for cards and '8px' for interactive controls.
- Do not add prominent shadows or elevation unless specifically called for by a component; the system relies on flat surfaces.
- Refrain from using generic sans-serif fonts; the Inspire typeface is critical for brand recognition.
- Do not use overly dense layouts; maintain a 'comfortable' spacing with '24px' section gaps.
- Avoid decorative gradients; the system uses solid colors for background and accents.

### Layout

The page primarily uses a max-width contained layout in its main content areas, set against a full-bleed dark background. The hero section often features content previews or a signup form centered over a blurred background of media. Section rhythm is driven by consistent vertical spacing of '24px' between content blocks. Content is arranged in flexible grids for media display and alternating text-left/visual-right patterns for feature descriptions. Navigation is a sticky top bar, minimally styled with 'Canvas Blue Black' background and 'Off-White' text.

### Imagery

This system primarily uses product-focused imagery, specifically movie posters and show thumbnails, which are presented as contained elements within a grid. These are generally full-color, cinematic stills or stylized artwork, with minimal alteration. The iconography is typically simple, often white or light gray outlines or fills, serving functional roles rather than decorative. Image density is high in content sections, where visuals are the primary draw, while informational sections remain text-dominant.
