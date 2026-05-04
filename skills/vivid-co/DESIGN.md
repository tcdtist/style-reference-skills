---
version: alpha
name: Vivid+Co
description: Vivid+Co employs a command-center dark theme, focusing on high contrast and dramatic impact. Large, confident typography dominates the layout, using subtle letter-spacing adjustments to control visual flow. The absence of strong chromatic accents outside of a single, muted gray for functional elements keeps the aesthetic clean and focused, punctuated by the refractive visuals. Components are minimalist, relying on precise typography and ghost-like interactive states rather than heavy fills or shadows.
colors:
  canvas-ink: "#000000"
  refined-white: "#fffdf9"
  stonewash-gray: "#6f879c"
  outline-gray: "#403f3f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.28px
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.5
    letterSpacing: 0.17px
  subheading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.24
    letterSpacing: 0.32px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.17
    letterSpacing: 0.36px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.13
    letterSpacing: -0.56px
  display:
    fontFamily: "system-ui"
    fontSize: 136px
    lineHeight: 1
    letterSpacing: -2.72px
spacing:
  cardRadius: 15px
  elementGap: 7px
  sectionGap: 108px
components:
  navigation-link-active:
    role: Primary navigation item, active state
  navigation-link-default:
    role: Primary navigation item, default state
  ghost-button-primary-action:
    role: Call-to-action button, outlined style
  text-button-subtle:
    role: Secondary action or categorized link
  feature-card:
    role: Container for content blocks
---

## Overview

**North Star:** Midnight refractography. A dark, expansive canvas lit by precise typography and spectral light refractions.

Vivid+Co employs a command-center dark theme, focusing on high contrast and dramatic impact. Large, confident typography dominates the layout, using subtle letter-spacing adjustments to control visual flow. The absence of strong chromatic accents outside of a single, muted gray for functional elements keeps the aesthetic clean and focused, punctuated by the refractive visuals. Components are minimalist, relying on precise typography and ghost-like interactive states rather than heavy fills or shadows.

### Do's

- Prioritize Canvas Ink (#000000) for all main backgrounds to maintain the dark, dramatic aesthetic.
- Use Refined White (#fffdf9) exclusively for primary text and high-visibility interactive elements like navigation.
- Apply Stonewash Gray (#6f879c) for ghost button borders and subtle text, reserving it for functional yet understated elements.
- Utilize Neue Montreal universally across all text, carefully applying its range of weights and the corresponding letter-spacing tokens for visual hierarchy.
- Maintain the 0px border-radius for buttons and most structural elements to uphold a sharp, angular design language, only using 15px for distinct card-like containers and 5px for very specific interactive elements.
- Ensure large headlines employ negative letter-spacing (-0.0200em at 136px, -0.0100em at 56px) for a tight, impactful appearance.
- Implement motion with `ease` timing functions and durations of `0.5s` for smooth visual transitions, particularly for `transform` and `opacity` properties.

### Don'ts

- Do not introduce additional saturated colors; maintain the monochrome palette with Stonewash Gray as the only chromatic accent.
- Avoid box-shadows or significant elevation; the design relies on flat surfaces and high contrast for definition.
- Do not use generic system fonts; Neue Montreal is critical for brand personality.
- Don't use large positive letter-spacing for headlines; it will diminish the brand's distinct tight typographic style.
- Avoid visual dividers between content sections; rely on generous vertical spacing (`108px` section gap) to separate content blocks.
- Do not vary border radii arbitrarily; stick to 0px, 5px, or 15px as specified for their respective contexts.
- Do not add heavy background fills to buttons; they should remain ghost-like or text-only to preserve the lightweight feel.

### Layout

The page operates on a full-bleed model with content primarily centered, featuring a maximum width for body text but allowing hero sections and atmospheric graphics to extend edge-to-edge. The hero section is a full-viewport dark background with large, centered headlines and associated body text. Vertical rhythm is established through significant section gaps of `108px`. Content often appears in alternating single-column centered stacks or implied two-column text+visual arrangements without explicit grid lines. The navigation is a fixed top bar with minimalist links.

### Imagery

The site uses abstract, photorealistic 3D renders of translucent, refractive geometric objects (cubes) as its primary visual motif. These visuals are full-bleed on a dark background, often with lens flare effects, creating spectral light and color shifts within the objects themselves, but not introducing broader chromatic elements into the UI. Imagery serves a decorative, atmospheric role, representing complexity and precision without being literal. Icons are minimalist, typically white outlines or fills, maintaining the high-contrast monochromatic UI.
