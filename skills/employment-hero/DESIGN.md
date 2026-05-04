---
version: alpha
name: Employment Hero
description: Employment Hero employs a vibrant, confident design language using a clean white canvas offset by a dominant, vivid violet. Typography is bold and assertive for headlines, while functional elements remain crisp and legible. Components exhibit softer, rounded edges for approachability, and subtle background tints introduce visual segmentation without heavy dividers, creating a sense of clarity and focused information presentation.
colors:
  violet-empress: "#7622d7"
  lavender-mist: "#e6d5fe"
  deep-violet: "#460078"
  cybernetic-green: "#94e022"
  obsidian: "#000000"
  ghost-white: "#ffffff"
  whisper-lilac: "#f9f5ff"
  near-black: "#121214"
  silver-thread: "#e4e4e7"
  stone-gray: "#71717a"
  cloud-gray: "#a9a9b2"
  dark-charcoal: "#27272a"
  ai-gradient: "#9a58fc"
  region-banner: "#f0e6fa"
  info-banner: "#280541"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.55
    letterSpacing: -0.002px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.14
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.14
    letterSpacing: -0.002px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.14
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.1
    letterSpacing: -0.006px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.06
    letterSpacing: -0.008px
spacing:
  cardRadius: 12px
  buttonRadius: 32px
  elementGap: 4px
  sectionGap: 32px
components:
  primary-action-button:
    role: Main call-to-action throughout the site.
  ghost-action-button-white:
    role: Secondary calls-to-action on dark backgrounds.
  outlined-action-button:
    role: Secondary calls-to-action on light backgrounds.
  region-selector-button:
    role: Small, outlined button for changing region.
  clean-card:
    role: Content container without visual hierarchy.
  elevated-card:
    role: Standard content container to highlight information.
  soft-tint-card:
    role: Segmented content areas for features or categories.
  minimal-input-field:
    role: Text input fields for forms.
  bordered-input-field:
    role: Standard input fields for user data.
  gradient-ai-badge:
    role: Visual indicator for AI-driven features.
---

## Overview

**North Star:** Vivid violet productivity canvas

Employment Hero employs a vibrant, confident design language using a clean white canvas offset by a dominant, vivid violet. Typography is bold and assertive for headlines, while functional elements remain crisp and legible. Components exhibit softer, rounded edges for approachability, and subtle background tints introduce visual segmentation without heavy dividers, creating a sense of clarity and focused information presentation.

### Do's

- Prioritize Violet Empress (#7622d7) for all primary calls-to-action and critical interactive elements.
- Use Saiga for all display and large headlines, applying tight letter-spacing for visual impact.
- Utilize DM Sans (weights 400-600) for all body text, subheadings, and interface components, preferring normal letter-spacing for legibility.
- Apply a 32px border-radius to all primary buttons for a soft, approachable feel.
- Separate content sections with subtle Whisper Lilac (#f9f5ff) background fills or by increasing vertical spacing using a 32px sectionGap.
- For all text, ensure sufficient contrast by pairing with Obsidian (#000000) for headlines and Near Black (#121214) for body copy on light backgrounds.
- Employ the AI Gradient for decorative elements such as badges or subtle background washes, to reinforce the brand's AI theme.

### Don'ts

- Avoid generic system fonts for prominent headlines; Saiga is a key brand identifier.
- Do not use harsh, square corners; adhere to the established radii of 8px for general elements, 12px for cards, and 32px for buttons.
- Refrain from introducing new accent colors outside of Violet Empress (#7622d7) or Cybernetic Green (#94e022).
- Avoid heavy drop shadows or glows; the design system favors clean, flat surfaces and subtle background tints for hierarchy.
- Do not use small text sizes (below 14px DM Sans) for critical information; prioritize readability over density.
- Do not use black backgrounds except for specific, deeply intentional hero sections or banners where Deep Violet or Info Banner colors are preferred.
- Do not deviate from the defined spacing scale; maintain comfortable density with elementGap at 4px and cardPadding at 24px.
