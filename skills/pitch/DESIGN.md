---
version: alpha
name: Pitch
description: Pitch embodies an 'energetic professional' mood, achieved through a vibrant violet spectrum contrasted with clean whites and subtle grays. The hero section bursts with rich gradients, while content sections maintain clarity with ample negative space. A blend of sharp geometric forms and soft, rounded elements creates a dynamic yet approachable feel, balancing technical precision with modern friendliness. Custom typography provides distinct voices for headlines and body text, contributing to an overall sense of refined dynamism.
colors:
  pitch-violet: "#8d49f7"
  deep-violet: "#6b53ff"
  midnight-graphite: "#1e1d28"
  action-yellow: "#ffd02c"
  faded-shadow: "#b5b3cd"
  medium-gray: "#3f4250"
  button-gray: "#6f7387"
  bright-violet: "#586ee0"
  dark-violet-text: "#371789"
  sunset-orange: "#ffa000"
  sky-blue: "#81d4fa"
  rich-dark: "#2b2a35"
  pure-white: "#ffffff"
  canvas-faint: "#f0eff4"
  border-light-gray: "#dddfe5"
  mid-tone-border: "#cfcfd0"
  coal-black: "#000000"
  faint-shadow-gray: "#95959a"
  hero-gradient-purple: "#5318eb"
  light-gradient-overlay: "#e4cfff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.2
    letterSpacing: 0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
    letterSpacing: 0.1px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.4
    letterSpacing: 0.1px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.3
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.1
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -0.02px
spacing:
  cardRadius: 26px
  buttonRadius: 20px
  elementGap: 20px
  sectionGap: 40px
components:
  primary-button:
    role: Action
  ghost-button:
    role: Action
  inline-text-button:
    role: Navigation/Action
  navigation-button:
    role: Navigation
  feature-card:
    role: Display
  badge-default:
    role: Information
  violet-tag-badge:
    role: Information/Categorization
  hero-headline:
    role: Display
  input-field:
    role: Form Element
  rounded-icon-button:
    role: Action
---

## Overview

**North Star:** Vibrant Violet Gradient Canvas

Pitch embodies an 'energetic professional' mood, achieved through a vibrant violet spectrum contrasted with clean whites and subtle grays. The hero section bursts with rich gradients, while content sections maintain clarity with ample negative space. A blend of sharp geometric forms and soft, rounded elements creates a dynamic yet approachable feel, balancing technical precision with modern friendliness. Custom typography provides distinct voices for headlines and body text, contributing to an overall sense of refined dynamism.

### Do's

- Prioritize Deep Violet (#6b53ff) for all primary interactive elements and brand accents.
- Use Eina01 for all body text, UI labels, and secondary information, maintaining consistency at weights 400-600.
- Apply Mark Pro 700 or 800 for all headlines and subheadings to maintain the brand's bold typographic voice.
- Utilize 26px border-radius for all primary display cards, and 20px for buttons and badges to enforce soft geometry.
- Implement Canvas Faint (#f0eff4) as the default page background to provide a consistent light theme base.
- Space elements with a default 20px elementGap, and content cards with 20px internal padding for comfortable density.
- Apply the Hero Gradient Purple to full-width hero sections to create visual impact and reinforce brand identity.

### Don'ts

- Avoid using raw black (#000000) for body text; use Rich Dark (#2b2a35) or Midnight Graphite (#1e1d28) for softer contrast.
- Do not introduce new border-radius values beyond 3px, 6px, 10px, 16px, 20px, 26px, 56px to preserve shape consistency.
- Avoid using highly saturated colors for large text blocks; reserve them for accents and interactive elements.
- Do not deviate from Eina01 and Mark Pro font families; avoid using system default fonts unless for accessibility fallbacks.
- Refrain from adding arbitrary shadows; restrict shadow usage to the specified values and contexts for deliberate depth.
- Avoid tight spacing; maintain comfort and legibility by adhering to 20px element gaps and section separations.
- Do not use multiple accent colors simultaneously in proximity; allow Pitch Violet and specific accents (like Action Yellow) to stand out.

### Layout

The page uses a maximum content width centered model, subtly implied by generous side padding on most sections. The hero section is a full-bleed, vibrant gradient background with centered, prominent headline and call-to-action. Content sections alternate between the Canvas Faint background and occasional gradient overlays. There's a consistent vertical rhythm created by explicit section gaps. Content is arranged using a mix of centered stacks for headlines and subtext, and alternating text-left/image-right or text-right/image-left for feature sections. A clear grid structure appears for displaying cards and badges, often in 3-column layouts where applicable. The layout prioritizes spaciousness, using ample negative space around content blocks. Navigation is a sticky top bar with a left-aligned logo and right-aligned actions (login, sign up).

### Imagery

The visual language primarily uses abstract 3D renders with soft, organic shapes and occasional product screenshots. The 3D elements, often in shades of violet and gray, are used decoratively to add a sense of depth and modernity, frequently appearing as background accents or overlapping UI elements. Product screenshots are contained within UI frameworks, highlighting features, and are treated with sharp edges, contrasting the softer 3D elements. Icons are filled, predominantly in Pitch Violet or white, with a consistent, moderate stroke weight, serving an explanatory and navigational role. The overall density is balanced, allowing imagery to complement text without overwhelming it.
