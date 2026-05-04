---
version: alpha
name: Duolingo
description: This design system feels like a vibrant, welcoming arcade where learning is a game. The dominant vivid green (#58cc02) and rounded forms, especially the 12px border-radius buttons, create a friendly, approachable atmosphere, softening the otherwise crisp text. Typographic hierarchy is clear with distinct weights and sizes for headings and body, often anchored by a deeper neutral (#4b4b4b and #3c3c3c) that provides stability to the lively greens and blues. A crisp white background allows the saturated brand colors and whimsical illustrations to pop, fostering a sense of fun and engagement.
colors:
  duolingo-green: "#58cc02"
  background-green-accent: "#d7ffb8"
  action-blue: "#1cb0f6"
  dark-heading-blue: "#042c60"
  deep-violet-accent: "#000437"
  shadowed-pine: "#3c3c3c"
  jet-black: "#000000"
  arctic-white: "#ffffff"
  cloud-gray: "#777777"
  charcoal-text: "#4b4b4b"
  muted-silver: "#afafaf"
  outline-green: "#a5ed6e"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.47
    letterSpacing: 0.053px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
    letterSpacing: 0.053px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.21
    letterSpacing: 0.053px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.33
    letterSpacing: 0.053px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.02px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.2
    letterSpacing: -0.02px
spacing:
  buttonRadius: 12px
  elementGap: 12px
  sectionGap: 101px
components:
  primary-action-button-filled:
    role: Main call to action
  secondary-action-button-outlined:
    role: Secondary call to action, alternative options
  ghost-button-neutral:
    role: Tertiary action, navigation
  muted-navigation-button:
    role: Language switcher, secondary navigation
  primary-headline:
    role: Page title, main section headings
  accent-headline:
    role: Highlighting key features or sections
  body-text-standard:
    role: Paragraphs, descriptive content
  muted-body-text:
    role: Secondary descriptions, fine print, meta information
  navigation-link:
    role: Global navigation items
  status-indicator:
    role: Small interactive or informational elements
---

## Overview

**North Star:** Playful Green Arcade

This design system feels like a vibrant, welcoming arcade where learning is a game. The dominant vivid green (#58cc02) and rounded forms, especially the 12px border-radius buttons, create a friendly, approachable atmosphere, softening the otherwise crisp text. Typographic hierarchy is clear with distinct weights and sizes for headings and body, often anchored by a deeper neutral (#4b4b4b and #3c3c3c) that provides stability to the lively greens and blues. A crisp white background allows the saturated brand colors and whimsical illustrations to pop, fostering a sense of fun and engagement.

### Do's

- Use `Duolingo Green` (#58cc02) for primary interactive elements and key accents to maintain brand recognition.
- Apply `12px` border-radius to all buttons and prominent interactive links for a consistent friendly aesthetic.
- Employ `feather` font with weight 700 and letter-spacing -0.020em for all display-level headings to ensure visual impact.
- Use `Arctic White` (#ffffff) as the primary page background color to allow vibrant brand elements to stand out.
- Ensure generous `elementGap` of `12px` and `sectionGap` of `101px` to create a comfortable, spacious layout.
- Use `outline Green` (#a5ed6e) for secondary actions that need to align with the brand's green while differentiating from the primary filled action.

### Don'ts

- Do not use `feather` font for body text or small UI elements; reserve it for large headings only.
- Avoid arbitrary color choices outside the defined palette, especially for interactive elements, to prevent dilution of brand identity.
- Do not use sharp corners on buttons or prominent interactive components; always apply a `12px` border-radius.
- Do not clutter sections; maintain the `12px` element gap and `101px` section gap for comfortable density.
- Avoid using `Action Blue` (#1cb0f6) as a filled button background; it is reserved for outlined buttons and links.
- Do not use `Muted Silver` (#afafaf) for main headings or primary calls to action; reserve it for subtle interactive elements.

### Layout

The page model is primarily full-bleed with content often centered or arranged in logical two-column (text + image) or three-column card grids. The hero section usually features a prominent illustration alongside a large, centered headline and primary action buttons. Sections maintain a consistent vertical rhythm, often alternating between a main content block and smaller, supportive elements. Content is frequently presented with text on one side and an illustrative graphic on the other, creating a dynamic visual flow. The navigation is a sticky top bar, containing the brand logo and language switcher. The layout is spacious with ample clear space around sections and elements.

### Imagery

The visual language is characterized by lively, whimsical 2D illustrations with distinct outlines and a vibrant color palette that closely mirrors the brand system's greens, blues, and other playful accents. These illustrations, featuring diverse characters and fantastical elements, are central to explaining concepts and adding a game-like atmosphere. They are typically contained within sections, sometimes overlapping text or elements, and serve mainly to add decorative atmosphere and explain content in a friendly, engaging way. Iconography is filled and colorful, matching the illustration style. The overall density is balanced, with illustrations occupying significant visual space alongside text blocks, creating a visually rich and engaging experience.
