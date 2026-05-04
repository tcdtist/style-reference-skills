---
version: alpha
name: User Interviews
description: User Interviews employs a crisp, clear, and confident interface, building on a foundation of clean neutrals and a distinctive teal accent. Layouts are spacious, prioritizing readability and direct interaction. Typography balances approachability with clarity, while a preference for rounded, organic shapes softens the overall structure, creating a friendly yet authoritative digital workspace. Interactive elements are clearly defined through color and shape, maintaining a focus on user flow.
colors:
  canvas-ice: "#f2f8f7"
  polar-white: "#ffffff"
  inkwell-black: "#000000"
  slate-gray: "#283338"
  cloud-frost: "#e4f0f1"
  misty-teal: "#cae1e2"
  oceanic-teal: "#1c5d5f"
  deep-teal: "#0e4749"
  emerald-green: "#156152"
  berry-blush: "#d6aec1"
  deep-berry: "#662344"
  sky-blue: "#a2cbcd"
  deep-sapphire: "#16325a"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.516px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.57
    letterSpacing: -0.126px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.44
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.24px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.2
    letterSpacing: -0.44px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.16
    letterSpacing: -0.64px
spacing:
  buttonRadius: 48px
  elementGap: 8px
  sectionGap: 88px
components:
  primary-filled-button-oceanic-teal:
    role: Main call-to-action.
  secondary-filled-button-emerald-green:
    role: Alternative call-to-action, active state for related actions.
  ghost-button-inkwell-black:
    role: Subtle calls to action or navigation links.
  outlined-tag-button-sky-blue:
    role: Filter tags or categorization buttons.
  outlined-tag-button-berry-blush:
    role: Alternative tag style, secondary filter options.
  navigation-link:
    role: Primary navigation items within the header.
  info-banner:
    role: Prominent informational messages or announcements.
---

## Overview

**North Star:** Teal-accented architectural blueprint on pristine parchment.

User Interviews employs a crisp, clear, and confident interface, building on a foundation of clean neutrals and a distinctive teal accent. Layouts are spacious, prioritizing readability and direct interaction. Typography balances approachability with clarity, while a preference for rounded, organic shapes softens the overall structure, creating a friendly yet authoritative digital workspace. Interactive elements are clearly defined through color and shape, maintaining a focus on user flow.

### Do's

- Prioritize Canvas Ice (#f2f8f7) for primary page backgrounds to maintain an open and airy feel.
- Use Oceanic Teal (#1c5d5f) for all primary calls-to-action, ensuring visual prominence and consistency.
- Apply rounded corners generously: 48px for most buttons and 88px for larger interactive areas or cards for a friendly, organic aesthetic.
- Employ `p22-mackinac-pro` (serif) for all main headings (H1-H3) and `sofia-pro` (sans-serif) for body text and UI elements to establish clear typographic hierarchy.
- Maintain generous vertical spacing between sections, aiming for a minimum of 88px to prevent visual clutter and provide comfortable reading breaks.

### Don'ts

- Avoid deviating from the defined primary (Oceanic Teal) and secondary (Emerald Green) button colors for main actions; do not introduce new saturated hues.
- Do not use sharp corners; the system's aesthetic relies on significant radius values for all interactive and card-like components.
- Refrain from using `IBM Plex Mono` for general body text or headings; reserve it strictly for data, code, or technical information.
- Do not use dark backgrounds for entire page sections unless leveraging an accent color from the `accent` group, maintaining the light theme's dominance.
- Avoid over-emphasizing every link or interactive element with a border; ghost buttons with Inkwell Black outlines or subtle Deep Teal underlinings are preferred for secondary actions.

### Layout

The page primarily follows a max-width contained layout, likely around 1200px, centering content for readability. The hero section is a full-width experience, featuring a prominent, centered headline over a playful background illustration. Subsequent sections alternate between light backgrounds (Canvas Ice) and occasionally subtle shifts (Cloud Frost). Content is often arranged in 2-column text + image layouts, or centered stacks for stronger statements. Feature sets are presented in multi-column card grids. Vertical rhythm is established through consistent section gaps (around 88px), creating distinct content blocks. The navigation is a sticky top bar with a clear brand logo on the left and prominent 'Sign Up' and 'Sign In' buttons on the right.

### Imagery

The site uses a clean, line-art illustration style, predominantly monochromatic (Inkwell Black strokes) with subtle color accents like Oceanic Teal or Emerald Green fills. The illustrations are organic and whimsical, depicting diverse individuals interacting with technology or in research settings, often contained within soft, rounded shapes or appearing as playful background elements. Photography is minimal, typically headshots of individuals within testimonial or team contexts. Icons are outlined, simple, and functional, maintaining a light stroke weight. Imagery primarily serves to enhance the brand's friendly and accessible atmosphere, explaining concepts through visual narrative and adding personality without overwhelming the UI.
