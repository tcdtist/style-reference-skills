---
version: alpha
name: Grain
description: Grain presents a dynamic, AI-first productivity workspace characterized by a bright, open canvas and micro-interactions of vivid green accents. Typography is compact and precise, utilizing a variable font for both confident headlines and crisp body text. Subtle shadows and rounded forms add a friendly, approachable polish to components, avoiding heavy elevation for a lightweight feel.
colors:
  canvas-white: "#fafafa"
  rich-black: "#000000"
  deep-graphite: "#313232"
  inkwell: "#141414"
  dusk-gray: "#707070"
  cloud-gray: "#f0f0f0"
  muted-stone: "#545454"
  silver-dust: "#c9c9c9"
  pewter: "#949494"
  pale-ash: "#d6d6d6"
  light-mist: "#e6e6e6"
  grain-green: "#009959"
  leafy-green-wash: "#00b96c"
  neon-green-accent: "#00ff95"
  sky-blue-accent: "#3de1ff"
  ambient-gradient: "#1ee592"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.6
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.14px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.25
    letterSpacing: 0px
spacing:
  cardRadius: 10px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 96px
components:
  primary-filled-button:
    role: Call to Action
  ghost-button:
    role: Secondary Action
  tertiary-minimal-button:
    role: Inline Action/Navigation
  accent-filled-button:
    role: Contextual Action
  feature-card:
    role: Content Grouping
  inset-shadow-card:
    role: Subtle Visual Separation
  pill-tag:
    role: Categorization/Meta-information
---

## Overview

**North Star:** Bright AI green, focused workflow.

Grain presents a dynamic, AI-first productivity workspace characterized by a bright, open canvas and micro-interactions of vivid green accents. Typography is compact and precise, utilizing a variable font for both confident headlines and crisp body text. Subtle shadows and rounded forms add a friendly, approachable polish to components, avoiding heavy elevation for a lightweight feel.

### Do's

- Prioritize 'Grain Green' (#009959) for all primary call-to-action backgrounds and active states to guide user interaction.
- Use 'Canvas White' (#fafafa) as the dominant background for most page sections and card surfaces to maintain a bright, open aesthetic.
- Apply Inter Variablefont for all body text and most headings; leverage its variable weights to achieve precise visual hierarchy and density.
- Maintain a comfortable rhythm with a 24px default card padding and 8px element gap for consistent content grouping.
- Employ consistent 10px border-radius for general components like cards, buttons, and icons, with specific 8px for primary buttons and 24px for pill-shaped tags.
- Utilize 'Rich Black' (#000000) for all primary body text and significant headlines to ensure strong contrast and readability against light backgrounds.
- Integrate the 'Ambient Gradient' where visual breaks or subtle section transitions are needed to add depth with branded color washes.

### Don'ts

- Avoid using multiple chromatic colors simultaneously; green accents should predominantly carry the brand's 'on' state.
- Do not introduce strong, opaque box-shadows on cards or surfaces; prefer subtle inset shadows or no shadows to keep components lightweight.
- Refrain from using bold or heavy weights for large display text; the system favors lighter weights like Inter 400-600, reserving Poppins 600 for specific headline impact.
- Do not deviate from the established border-radius values; consistency in rounded corners is crucial for the brand's approachable feel.
- Avoid using any color other than 'Grain Green' (#009959) for the primary call-to-action background, as this dilutes brand identity.
- Do not apply excessive letter-spacing on text; leverage negative tracking on larger text sizes for a compact, intentional look.
- Avoid full-bleed imagery unless explicitly specified for hero sections; most content should live within well-defined, contained areas.

### Layout

The site employs a max-width contained layout rather than full-bleed, with content centered. The hero section often features a split layout or a prominent visual element (like a product screenshot) on one side, balanced by text on the other, over a subtle background gradient. Sections generally feature consistent vertical spacing, often with alternating light and very light background shades creating a subtle rhythm. Content is arranged in alternating text-and-image blocks or compact multi-column card grids for features, maintaining a clear visual structure. Navigation is a standard top bar, sticky on scroll, with clear CTAs on the right.

### Imagery

Imagery style is product-focused, featuring clean product screenshots and UI elements often presented within rounded device mockups. Photography, when present, is secondary and often within product context (e.g., video call screenshots). Icons are primarily monochrome, outlined, and contribute to clarity rather than decoration. The overall density is balanced, allowing UI elements and text to dominate, with imagery serving explanatory or demonstrative roles.
