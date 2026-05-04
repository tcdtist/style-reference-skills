---
version: alpha
name: Vanta
description: Vanta projects a refined, authoritative presence through a primarily achromatic palette accented by deep, vivid violets. Stark white backgrounds provide a sense of expansive clarity, acting as a clean canvas for content. Typography is precise and impactful, balancing a custom sans-serif for functional elements with a sophisticated serif for headlines. Components are lightweight and well-defined by subtle borders, emphasizing content over heavy ornamentation. Elevation is minimal, achieved through soft borders and contained interactions rather than prominent shadows.
colors:
  canvas-white: "#ffffff"
  background-snow: "#f7f8fa"
  cloud-gray: "#eaeaf1"
  border-fog: "#dfdfe9"
  muted-ash: "#9e9fb7"
  stone-gray: "#6d6e87"
  dark-charcoal: "#484960"
  midnight-ink: "#181822"
  deep-plum: "#260048"
  vanta-purple: "#5e05c4"
  royal-violet: "#8f47d5"
  misty-lavender: "#ddd6ff"
  sky-lavender: "#cdd2f8"
  warning-gold: "#ffbe0f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.6
    letterSpacing: -0.2px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.43
    letterSpacing: -0.4px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.35
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
    letterSpacing: -0.64px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.1
    letterSpacing: -0.714px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.1
    letterSpacing: -0.784px
spacing:
  cardRadius: 16px
  buttonRadius: 999px
  elementGap: 16px
  sectionGap: 32px
components:
  primary-filled-button:
    role: Call to action button for primary actions
  ghost-navigation-button:
    role: Secondary navigation or subtle actions
  outlined-input-field:
    role: Text input areas for forms
  elevated-content-card:
    role: Container for features or grouped information
  feature-highlight-card:
    role: Cards within hero section or for key features
  brand-chip-badge:
    role: Informational tags or status indicators
  warning-badge:
    role: Notification or status badge indicating a warning
---

## Overview

**North Star:** Regal Clarity on White Canvas

Vanta projects a refined, authoritative presence through a primarily achromatic palette accented by deep, vivid violets. Stark white backgrounds provide a sense of expansive clarity, acting as a clean canvas for content. Typography is precise and impactful, balancing a custom sans-serif for functional elements with a sophisticated serif for headlines. Components are lightweight and well-defined by subtle borders, emphasizing content over heavy ornamentation. Elevation is minimal, achieved through soft borders and contained interactions rather than prominent shadows.

### Do's

- Use Midnight Ink (#181822) for all primary body text and main headings to ensure strong contrast and readability.
- Apply Canvas White (#ffffff) as the default background for most content sections and interactive components.
- Utilize Vanta Purple (#5e05c4) exclusively for primary calls to action, such as 'Get a demo' buttons.
- Maintain a 999px border-radius for all interactive elements like buttons and input fields to ensure a consistent friendly, modern feel.
- Establish hierarchy in headings by using Reckless font, applying its smaller letter-spacing values (-0.0180em to -0.0120em) for larger sizes.
- Use Border Fog (#dfdfe9) or Muted Ash (#9e9fb7) for all hairline borders and subtle dividers.
- Prioritize Inter Variable for all functional text, maintaining -0.0020em letter-spacing for consistency.

### Don'ts

- Do not introduce strong shadows; rely on subtle borders or background color shifts for element separation.
- Avoid using highly saturated colors for large background areas; reserve them for accents and interactive elements.
- Do not deviate from the full-rounded (999px) radius for buttons and input fields; this is a signature shape.
- Never use Reckless font for body text or other small functional elements; it is reserved for headlines.
- Do not use generic blue for links or interactive elements; all brand interaction should use Royal Violet (#8f47d5) or Vanta Purple (#5e05c4).
- Avoid dense stacking of information; provide ample white space, leveraging Cloud Gray (#eaeaf1) or Background Snow (#f7f8fa) for breathing room.
- Do not use bright or vibrant photography; imagery should be understated, product-focused, or abstract to allow UI to dominate.

### Layout

The page uses a maximum-width contained layout rather than full-bleed, with content centered. The hero section is full-bleed but employs a lighter background tone (Misty Lavender) with a large, centered headline and a centered sign-up form. Sections alternate a subtle visual rhythm, primarily using Canvas White and Background Snow. Content is typically arranged in clear, symmetrical blocks, often with centered stacks for text and calls to action. Feature sections use a 3-column card grid. Vertical spacing between logical blocks is generous, providing a comfortable density. Navigation is a persistent top bar featuring a minimal logo, clear text links, and distinct 'Log in' (ghost) and 'Get a demo' (filled) buttons.

### Imagery

This site prominently features product screenshots and abstract, geometric illustrations. Product shots are typically contained within cards, showcasing clean UI with minimal surrounding context, emphasizing functionality. Illustrations are often flat or subtly dimensional, using muted brand colors or achromatic tones, serving as decorative accents or explanatory visuals. Icons are predominantly outlined, featuring a moderate stroke weight in either Midnight Ink or Royal Violet, providing clear visual cues without being heavy. Imagery serves as explanatory content, clarifying complex processes rather than creating mood. The overall density is balanced, with imagery carefully placed to break up text blocks without overwhelming the content.
