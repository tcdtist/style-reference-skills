---
version: alpha
name: Superpower
description: Superpower's health intelligence brand is built on a high-contrast palette of an almost-black charcoal and stark white, punctuated by a vivid, energetic vermillion. Monochromatic typography by NB International Pro, paired with generous letter-spacing, projects a precise, almost clinical authority, while pill-shaped buttons introduce a surprising soft, approachable counterpoint. This creates a refined yet dynamic aesthetic, balancing technical exactitude with user-friendly optimism.
colors:
  charcoal-black: "#18181b"
  pure-white: "#ffffff"
  warm-gray: "#71717a"
  light-gray: "#e4e4e7"
  whisper-gray: "#f4f4f5"
  vermillion-accent: "#fc5f2b"
  sunset-gradient: "#fc5f2b"
  soft-vermillion: "#feaf95"
  canary-yellow: "#ffdd61"
  sky-blue: "#42a5f5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: -0.132px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
    letterSpacing: -0.225px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.4
    letterSpacing: -0.266px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.4
    letterSpacing: -0.308px
  heading:
    fontFamily: "system-ui"
    fontSize: 37px
    lineHeight: 1.25
    letterSpacing: -0.37px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.2
    letterSpacing: -0.36px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.06
    letterSpacing: -0.3px
spacing:
  cardRadius: 16px
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 64-96px
components:
  pricing-card-superpower-membership:
    role: 
  button-group-primary-secondary-ghost:
    role: 
  stat-feature-blocks-health-intelligence:
    role: 
  primary-call-to-action-button:
    role: Button
  secondary-outline-button:
    role: Button
  ghost-button-dark-background:
    role: Button
  ghost-button-light-background:
    role: Button
  default-card:
    role: Card
  membership-detail-card:
    role: Card
  image-wrapper-card:
    role: Card
  section-navigation-link:
    role: Navigation
  floating-chat-widget-trigger:
    role: Button
---

## Overview

**North Star:** Clinical precision, vibrant pulse. A highly legible monochrome foundation with a single, sharp burst of color highlighting interaction.

Superpower's health intelligence brand is built on a high-contrast palette of an almost-black charcoal and stark white, punctuated by a vivid, energetic vermillion. Monochromatic typography by NB International Pro, paired with generous letter-spacing, projects a precise, almost clinical authority, while pill-shaped buttons introduce a surprising soft, approachable counterpoint. This creates a refined yet dynamic aesthetic, balancing technical exactitude with user-friendly optimism.

### Do's

- Use Charcoal Black (#18181b) for all primary typographic elements and major UI components to maintain high contrast and sophistication.
- Apply Vermillion Accent (#fc5f2b) exclusively to primary calls-to-action and active navigation states to ensure focus and energy.
- Employ the Nb international pro webfont with significant negative letter-spacing for all headlines (e.g., -0.37px at 37px) to achieve a precise, condensed appearance.
- Maintain a clear visual hierarchy by differentiating primary (pill-shaped Vermillion Accent), secondary (white outlined), and tertiary (ghost, transparent) button styles.
- Ensure all interactive elements, particularly buttons, feature a 9999px border-radius for the distinctive pill shape, softening the otherwise crisp UI.
- Use Pure White (#ffffff) as the dominant page background to create an expansive, clean canvas for content presentation.
- Utilize a subtle shadow (rgba(0, 0, 0, 0.05) 0px 2px 2px 0px) for elevated cards on main content areas to provide soft depth.

### Don'ts

- Do not use multiple accent colors simultaneously; the visual system relies on Vermillion Accent (#fc5f2b) for primary emphasis.
- Avoid using flat, square buttons; all primary and secondary buttons must adhere to the 9999px pill-shaped radius.
- Do not introduce strong, chromatic backgrounds other than the defined brand colors; the system heavily relies on a neutral gray progression.
- Refrain from using thin, decorative borders that are not part of the established Light Gray (#e4e4e7) or Charcoal Black (#18181b) border palette.
- Do not vary line-height significantly from the established scale; maintaining the precise vertical rhythm is key for legibility and visual consistency.
- Avoid generic drop shadows; use the specific, subtle card shadow (rgba(0, 0, 0, 0.05) 0px 2px 2px 0px) to maintain a light, clean aesthetic.

### Layout

The site employs a max-width contained layout rather than full-bleed for most content, centered on the screen. The initial hero section is a full-bleed dark photographic background with centered, large white typography, creating an immediate, impactful statement. Subsequent sections primarily feature a clean white background, with content often arranged in two-column layouts (text left, image right, or vice versa), maintaining consistent vertical spacing between sections. Content blocks are visually distinct, often using the defined card styles to group information. A sticky top navigation bar provides consistent access, and a fixed chat widget trigger anchors the bottom right.

### Imagery

The visual language relies heavily on evocative, full-bleed photography, often featuring individuals with determined expressions, implicitly connected to health and vitality. Images typically use shallow depth of field and dramatic lighting (often dark, moody with subtle blue/orange tones) to create an aspirational, slightly mysterious atmosphere. This is offset by clean, tight product shots of membership cards, often with an abstract, organic pattern and rendered with gradients, grounding the aspirational mood in tangible product. Icons are monochromatic, simple, and functional, primarily in Charcoal Black or Pure White, serving a supportive explanatory role.
