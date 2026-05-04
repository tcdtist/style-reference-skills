---
version: alpha
name: Copy
description: This design system projects a high-tech, enterprise feel through its stark contrasts and precise typography. Dominant dark and vivid violet accents create a sense of digital sophistication, while a meticulous hierarchy of grays and precise spacing ensure clarity. The interplay of strong, weighted headlines against more muted body text establishes authority, characteristic of B2B SaaS platforms.
colors:
  midnight-ink: "#171717"
  cloud-burst: "#f6fafb"
  slate-echo: "#e4edf1"
  ash-veil: "#e2e8eb"
  graphite-tone: "#5d5d5d"
  violet-impulse: "#693edf"
  deep-space-violet: "#3b0d96"
  dawn-violet: "#c1b9f4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 2
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.57
    letterSpacing: -0.22px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.45
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.31
    letterSpacing: 0.26px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 1
    letterSpacing: -1.76px
spacing:
  buttonRadius: 4px
  elementGap: 16px
  sectionGap: 72px
components:
  gtm-ai-playbook-feature-card:
    role: 
  gtm-ai-platform-architecture-block:
    role: 
  hero-email-cta-with-process-steps:
    role: 
  login-button:
    role: Secondary call to action
  input-field:
    role: User data entry
  process-step:
    role: Sequential information display
  sub-navigation-button:
    role: Internal navigation
  tag-badge:
    role: Categorization label
  primary-navigation-link:
    role: Main site navigation
---

## Overview

**North Star:** Strategic blueprint on polished steel. Organized hierarchy and vibrant violet accents against a muted canvas.

This design system projects a high-tech, enterprise feel through its stark contrasts and precise typography. Dominant dark and vivid violet accents create a sense of digital sophistication, while a meticulous hierarchy of grays and precise spacing ensure clarity. The interplay of strong, weighted headlines against more muted body text establishes authority, characteristic of B2B SaaS platforms.

### Do's

- Use `Violet Impulse` (#693edf) exclusively for primary CTAs and active states.
- Apply `Midnight Ink` (#171717) for all primary text, ensuring maximum contrast against light backgrounds.
- Maintain 4px `radius` for all general UI elements like cards and secondary buttons.
- Ensure input fields use `Cloud Burst` (#f6fafb) background and `Slate Echo` (#e4edf1) borders for consistent form styling.
- Prioritize `ABC Normal` font for all display headings to leverage its distinctive letter spacing and authoritative presence.
- Implement -0.0200em letter spacing for `ABC Normal` headlines at 48px and larger sizes.

### Don'ts

- Do not use shadows for elevation; emphasize depth through varied background colors and precise spacing.
- Avoid using `Violet Impulse` (#693edf) for body text or non-interactive elements, to preserve its impact as an accent.
- Do not introduce additional border radii; consistently use 4px or 0px.
- Refrain from using `Inter` for major headlines. Its role is for functional and extended text.
- Do not deviate from the established spacing unit; use multiples of 4px for all padding and margins.
- Avoid introducing additional visual accents or graphical elements that compete with the brand's violet spectrum.

### Layout

The site employs a max-width contained layout, typically centered, with a default `sectionGap` of 72px creating ample vertical breathing room between content blocks. The hero section is full-bleed with a dark background and a central, large headline, immediately grounding the user. Most content sections alternate between text-left/image-right and image-left/text-right patterns, often within a 2-column grid. Feature lists are presented in 3-column card grids. The navigation is a sticky top bar, providing persistent access. The overall density is spacious, prioritizing readability and clear information hierarchy over packed content.

### Imagery

The site uses a combination of abstract, geometric illustrations and product screenshots. Illustrations are brand-colored (shades of violet) and appear to abstract complex processes into clear, interconnected visual pathways (e.g., the branching flow on the hero section). Product screenshots, when present implicitly via card examples, are tightly framed and seem to showcase UI elements rather than full contexts. The overall approach is to use visuals for conceptual explanation or function demonstration, not for emotional connection or lifestyle imagery. Icons are filled, mono-color (Midnight Ink or Violet Impulse) and appear simple and illustrative rather than highly detailed, reinforcing clarity and directness. Imagery density is low, making text and UI elements dominant.
