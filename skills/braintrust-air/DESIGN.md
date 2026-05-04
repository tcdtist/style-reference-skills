---
version: alpha
name: Braintrust AIR
description: Braintrust AIR evokes a 'Future-forward AI Workspace' aesthetic with a stark monochrome palette punctuated by a single vibrant accent. Layouts are spacious, utilizing ample whitespace to create a refined feel. Typography is precise and impactful, balancing boldness with understated elegance. Components maintain a light, often borderless appearance, suggesting functionality without heavy visual weight.
colors:
  midnight-ink: "#0e0e11"
  canvas-white: "#ffffff"
  slate-gray: "#353535"
  near-black: "#141417"
  ash-gray: "#1d1d1f"
  supporting-gray: "#666666"
  peach-halo: "#ffdad2"
  cosmic-gradient-hue: "#9370e9"
  plasma-gradient-hue: "#4167e9"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.7
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.54
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.39
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.33
    letterSpacing: -0.65px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.3
    letterSpacing: -0.54px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 49px
    lineHeight: 1.22
  display:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 1.15
    letterSpacing: -2.5px
spacing:
  cardRadius: 8px-24px
  buttonRadius: 100px
  elementGap: 16px
  sectionGap: 24px
components:
  filled-dark-button:
    role: Primary Call to Action
  outlined-ghost-button:
    role: Secondary/Alternative Action
  text-link-button:
    role: Tertiary/Low-Emphasis Action
  default-content-card:
    role: Informational Content Container
  soft-background-card:
    role: Subtly Elevated Content Container
  peach-accent-card:
    role: Highlight/Emphatic Content Box
  dark-elevated-card:
    role: Emphasized Dark Content Card
---

## Overview

**North Star:** Future-forward AI Workspace

Braintrust AIR evokes a 'Future-forward AI Workspace' aesthetic with a stark monochrome palette punctuated by a single vibrant accent. Layouts are spacious, utilizing ample whitespace to create a refined feel. Typography is precise and impactful, balancing boldness with understated elegance. Components maintain a light, often borderless appearance, suggesting functionality without heavy visual weight.

### Do's

- Use Midnight Ink (#0e0e11) as the primary text color on Canvas White (#ffffff) backgrounds, achieving AAA contrast.
- Apply `100px` border-radius to all filled buttons for a distinct pill shape.
- Ensure headings use Graphik with negative letter spacing, such as `-0.0250em` for larger sizes (100px, 26px) and `-0.0150em` for medium sizes (36px, 20px).
- Employ Peach Halo (#ffdad2) as a subtle background tint for sections or cards to introduce gentle variations without strong color.
- Maintain generous vertical spacing between sections, using a `24px` `sectionGap` as a baseline for comfort and visual separation.
- Utilize transparent backgrounds and `0px` border-radius for default body cards to emphasize content over container styling.
- Pair any gradients with a dominant hue (e.g., #9370e9 for Cosmic Gradient Hue, #4167e9 for Plasma Gradient Hue) for consistent color branding.
- Use Braintrust AIR's gradient as a full-bleed hero background, or as an accent for attention-grabbing elements, ensuring it spans the entire section to create visual impact.

### Don'ts

- Avoid using highly saturated colors for backgrounds or large text blocks; the system relies on a mostly achromatic pallet.
- Do not introduce strong box-shadows or heavy borders on cards; the system prefers subtle elevation or transparency.
- Refrain from using varied letter-spacing on small body text, as this system mostly applies tracking to headings or specific UI elements.
- Do not deviate from the `100px` button radius for primary actions, as it is a core identity element.
- Do not apply `2px solid` borders indiscriminately; it is used specifically by the existing component. Favor transparency or subtle background changes for separation.
- Avoid mixing Graphik with other sans-serif fonts beyond the specified Inter for specific callouts; stick to the core type family.
- Do not use generic gray values; always refer to the established neutral color tokens (e.g., Slate Gray, Ash Gray) for consistency.

### Layout

The page primarily uses a max-width contained layout, likely around `1200px`, with content centered. The hero section is full-bleed, featuring a large, centered headline over a subtle, abstract gradient background, setting an expansive tone. Following sections often alternate between dark and light backgrounds. Content arrangement frequently uses a 2-column layout, often with text on the left and a visual element or simplified product mockup on the right. Vertical rhythm is consistent, with `24px` section gaps providing clear separation between content blocks. Navigation is a sticky top bar, providing persistent access.

### Imagery

The site's imagery is characterized by a strong presence of abstract, subtle gradients in the hero sections, serving as decorative atmosphere rather than content explanation. Product UI appears as illustrative, simplified renderings or mockups, suggesting functionality. Icons are outlined, linear, and monochromatic or subtly tinted with soft, almost pastel-like muted tones for decorative flair, maintaining a lightweight feel. Imagery density is moderate, allowing text dominance in many sections while using visuals to break visual monotony or introduce brand personality.
