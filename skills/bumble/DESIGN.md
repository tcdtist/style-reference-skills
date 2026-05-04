---
version: alpha
name: Bumble
description: Bumble's visual system evokes a playful confidence through its dominant bright yellow canvas and bold, heavy typography. Interaction is signaled by a shift from the signature brand yellow to crisp white and deep charcoal for actionable elements. Surfaces generally remain flat or minimally elevated with rounded corners, maintaining a light and open aesthetic that allows photographic content to take center stage.
colors:
  bumble-yellow: "#ffdb5b"
  amber-glow: "#fff386"
  charcoal-ink: "#202020"
  arctic-white: "#ffffff"
  deep-gray: "#3b3b3b"
  cloud-gray: "#f3f3f3"
  muted-stone: "#343333"
  subtle-slate: "#575656"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.25
    letterSpacing: 0.007px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: 0.012px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0.016px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.18
    letterSpacing: 0.018px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 49px
    lineHeight: 1.1
    letterSpacing: 0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1
    letterSpacing: 0.02px
spacing:
  cardRadius: 16px
  buttonRadius: 16px
  elementGap: 24px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Call to action.
  ghost-navigation-button:
    role: Secondary navigation or interactive text.
  subtle-background-button:
    role: Interactive elements with a softer visual presence.
  yellow-feature-card:
    role: Highlights key features or content areas.
  white-information-card:
    role: Displays content on a neutral background.
  pill-badge:
    role: Labels categories or attributes.
---

## Overview

**North Star:** sunny confident playground

Bumble's visual system evokes a playful confidence through its dominant bright yellow canvas and bold, heavy typography. Interaction is signaled by a shift from the signature brand yellow to crisp white and deep charcoal for actionable elements. Surfaces generally remain flat or minimally elevated with rounded corners, maintaining a light and open aesthetic that allows photographic content to take center stage.

### Do's

- Use Bumble Yellow (#ffdb5b) as the dominant background color for sections or cards to immediately establish brand identity.
- Apply Charcoal Ink (#202020) for all primary body text and headlines to ensure high contrast and readability.
- Prefer large type sizes (e.g., 68px, 49px) and heavier weights (500, 600, 700) for headlines with the BumbleSans typeface.
- Utilize 16px and 24px border radii for buttons and cards respectively, creating a soft, approachable feel.
- Ensure generous internal padding for interactive elements; buttons typically use 14px vertical and 24px horizontal padding.
- Maintain minimal elevation; shadows should be subtle, such as rgba(32, 32, 32, 0.12) 0px 1px 8px 0px, predominantly for cards.

### Don'ts

- Avoid using highly saturated colors other than Bumble Yellow or Amber Glow for major interface elements.
- Do not introduce strong, complex shadows, as the system favors a flatter, lighter aesthetic.
- Refrain from using thin body text weights that would visually conflict with the bold headline style.
- Do not deviate from the established rounded border radii for components; sharp corners are not part of this system.
- Avoid tight spacing around content; allow generous element and section gaps (e.g., 24px, 40px) to maintain an open feel.
- Do not use dark backgrounds for full sections unless a specific pattern (like the hero) dictates it, and even then, ensure a vibrant yellow accent or white text provides strong contrast.

### Layout

The page primarily employs a max-width contained layout, approximately 224px wide, centered on the screen, though the hero section breaks this constraint. The hero features a full-bleed vibrant Bumble Yellow background with large, centered brand typography and overlapping, angled photographic cards showcasing user profiles, creating a dynamic introduction. Subsequent sections alternate between vibrant yellow and clean white backgrounds, providing clear visual breaks. Content is often arranged in prominent centered stacks or two-column text-left/visual-right patterns. Navigation is handled by a sticky top bar with subtle ghost buttons and a prominent brand logo.

### Imagery

The site uses a mix of candid, lifestyle photography and product screenshots. Photography often features diverse individuals in engaging, active, and social scenarios, cropped and presented in a natural, unedited style within the UI. Product screenshots highlight the app interface directly, often placed within stylized device mockups or integrated into compositional elements like stacked, angled cards. Images are primarily contained within rounded card-like shapes or as background elements. Icons, though minimal, appear to be filled and monochrome, leveraging Charcoal Ink on Bumble Yellow.
