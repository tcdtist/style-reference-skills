---
version: alpha
name: MasterClass
description: MasterClass employs a dark, cinematic UI, reminiscent of a premium streaming platform. Dominant blacks and deep charcoals create a sophisticated environment, allowing vibrant accents to punctuate interactive elements and brand moments. Typography is bold and confident, commanding attention within the high-contrast setting. Component surfaces are subtle, often inset, maintaining a flat aesthetic that emphasizes content and celebrity figures over overt ornamentation.
colors:
  pitch-black: "#000000"
  charcoal-canvas: "#222326"
  graphite-base: "#0d0d0e"
  deep-slate: "#272c33"
  subtle-ash: "#191c21"
  muted-stone: "#211d0d"
  iron-gray: "#43454c"
  silver-mist: "#9ea0a9"
  light-steel: "#d4d5d9"
  pure-white: "#ffffff"
  ghostly-gray: "#f4f4f5"
  action-raspberry: "#e32652"
  interactive-lime: "#dcff00"
  highlight-gold: "#eed37f"
  subtle-cadet: "#596170"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.45
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.45
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.45
  body-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.45
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.45
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
  display-sm:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.3
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 16px
  sectionGap: 64px
components:
  ghost-navigation-button:
    role: Navigation and secondary actions that need to remain subtle.
  icon-button-filled:
    role: Functional icons that require a background.
  navigation-tab-button:
    role: Top-level navigation items or filters.
  flat-interactive-input:
    role: Search bars and form fields.
  hero-checkbox-radio-button:
    role: Choices within hero sections.
  primary-action-button:
    role: High-priority calls to action.
  secondary-action-button:
    role: Prominent actions, but not primary conversion.
  content-feature-card:
    role: Containers for featured content with generous padding.
  visual-content-card:
    role: Cards for showcasing visual content (e.g., instructors, classes).
  informational-badge:
    role: Small, informative labels.
---

## Overview

**North Star:** Midnight Stage Presence

MasterClass employs a dark, cinematic UI, reminiscent of a premium streaming platform. Dominant blacks and deep charcoals create a sophisticated environment, allowing vibrant accents to punctuate interactive elements and brand moments. Typography is bold and confident, commanding attention within the high-contrast setting. Component surfaces are subtle, often inset, maintaining a flat aesthetic that emphasizes content and celebrity figures over overt ornamentation.

### Do's

- Prioritize Pitch Black (#000000) for large background areas and Charcoal Canvas (#222326) for primary surfaces to maintain the dark theme.
- Use Action Raspberry (#e32652) exclusively for primary calls to action, maintaining its vivid impact.
- All interactive elements will have a minimum border-radius of 4px, with important buttons using 8px.
- Utilize Sohne Schmal at 64px or 80px for monumental headings with tight negative letter-spacing for dramatic effect.
- Employ consistent 4px padding on badges and 16px horizontal padding for most buttons.
- Ensure input fields have a 1px #ffffff border and a 0px radius for a stark, integrated look.
- Use the inset box-shadow `rgb(148, 154, 164) 0px 0px 0px 2px inset` for selected or active body elements to indicate focus.

### Don'ts

- Do not introduce light backgrounds for core content sections; the system is strictly dark-mode dominant.
- Avoid using multiple chromatic colors close together; allow Action Raspberry (#e32652) to stand out as the primary accent.
- Do not use generic system fonts; always specify Sohne for body and most headings, Sohne Schmal or Ivar Display Condensed for display.
- Do not deviate from the established spacing scale (multiples of 4px) to maintain consistent density.
- Do not use standard button shadows; rely on inset borders or subtle color shifts for interaction states.
- Avoid large imagery with distracting backgrounds; prioritize portraits or product shots with minimal context.
- Do not use highly rounded corners (e.g., >20px) on main cards or primary buttons, as this clashes with the structured feel.

### Layout

The page primarily utilizes a max-width contained layout where content is centered, often with dynamic full-bleed hero sections. The hero frequently employs a dark background with a prominent, large headline and supporting text, flanked by high-impact instructor imagery. Sections alternate between full-width black backgrounds and slightly lighter charcoal surfaces, maintaining strong vertical rhythm with generous section gaps (64px). Content is arranged in alternating text-left/image-right patterns, centered stacks for feature declarations, and horizontal scrolling carousels or grids for content browsing. Navigation is a sticky top bar with a stark dark background, featuring minimalist text links and a prominent Action Raspberry call-to-action button.

### Imagery

The visual language is dominated by high-quality, often dramatic portrait photography of celebrity instructors. Images are typically tightly cropped, focusing on the individual's face or upper body, and serve a functional purpose of personalizing content rather than purely decorative. Photography is often full-bleed within sections or contained within cards with large radii (8px or 12px), creating a gallery-like feel. Iconography is minimalist, either outlined or filled, primarily in Pure White or Silver Mist, with occasional pops of Interactive Lime or Action Raspberry for status or interaction. There is a strong emphasis on product showcase – the instructors and their content are the primary visual elements.
