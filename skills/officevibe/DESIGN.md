---
version: alpha
name: Officevibe
description: This design system feels like a modern corporate solution, balancing trust with approachability. A deep, almost inky violet (`Boardroom Navy`) provides a stable foundation, contrasted by a vibrant, electric blue (`Brand Electric`) that visually energizes interactive elements. The interplay between the sans-serif clarity of Inter and the distinctive, slightly calligraphic AbcFavoritvariable for headings, alongside the unexpected Martinaplantijn script for accent headlines, creates a sophisticated yet human touch. The prevalent use of generous rounded corners (100px for buttons) against sharp content blocks softens the enterprise feel, making complex data feel more accessible.
colors:
  boardroom-navy: "#0c1754"
  brand-electric: "#2545ff"
  lilac-accent: "#d9d4ff"
  feedback-yellow: "#ffc13a"
  soft-off-white: "#f9f8f6"
  pure-white: "#ffffff"
  pitch-black: "#171417"
  medium-gray: "#222222"
  light-cool-gray: "#eaebf8"
  input-border-gray: "#cccccc"
  accent-orange: "#ff5b22"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -0.64px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -2px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -2.4px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -3.2px
spacing:
  cardRadius: 16px
  buttonRadius: 100px
  elementGap: 8px
  sectionGap: 64px
components:
  primary-ghost-button-group:
    role: 
  ai-chat-widget:
    role: 
  faq-accordion:
    role: 
  primary-cta-button:
    role: Main interactive button
  ghost-button-primary-brand:
    role: Secondary call-to-action
  ghost-button-dark-neutral:
    role: Navigation or less prominent actions
  ghost-button-light-neutral:
    role: Navigation or less prominent actions on dark backgrounds
  feature-card:
    role: Content display block
  informative-badge:
    role: Categorization or status indicator
  input-field-footer:
    role: Footer email subscription input
---

## Overview

**North Star:** Electric Data Flow; a structured, approachable canvas where sharp insights meet soft edges.

This design system feels like a modern corporate solution, balancing trust with approachability. A deep, almost inky violet (`Boardroom Navy`) provides a stable foundation, contrasted by a vibrant, electric blue (`Brand Electric`) that visually energizes interactive elements. The interplay between the sans-serif clarity of Inter and the distinctive, slightly calligraphic AbcFavoritvariable for headings, alongside the unexpected Martinaplantijn script for accent headlines, creates a sophisticated yet human touch. The prevalent use of generous rounded corners (100px for buttons) against sharp content blocks softens the enterprise feel, making complex data feel more accessible.

### Do's

- Do use Brand Electric (#2545ff) exclusively for primary interactive elements like main CTA buttons and active navigation states.
- Do ensure all buttons employ a 100px border-radius for their signature pill shape, unless specifically a ghost button variant.
- Do use Abcfavoritvariable for prominent headings, applying negative letter-spacing for larger sizes (-0.05em at 40px and above).
- Do employ Soft Off-White (#f9f8f6) as the primary page background color to establish a soft, approachable base.
- Do ensure body text uses Inter 400 at 16px, in Pitch Black (#171417) for maximal readability against light backgrounds.
- Do use Martinaplantijn 400 for accentuating specific words or phrases within larger headings, providing a unique calligraphic touch.
- Do maintain a consistent vertical spacing of 64px between major sections on the page.

### Don'ts

- Don't use Brand Electric (#2545ff) for static text or non-interactive decorative elements.
- Don't introduce additional curved shapes; large 100px radii for buttons and 16px for cards are the system's defined roundedness.
- Don't use bold weights for Inter in headlines; only Abcfavoritvariable or Martinaplantijn should carry headline prominence.
- Don't embed images with strong, distracting background colors; favor clean product shots or highly stylized UI illustrations.
- Don't use hard shadows for elevation; rely on background color changes or subtle outlines for depth.
- Don't clutter layouts; prioritize generous white space with a base element gap of 8px and larger gaps for content sections.
- Don't use any other blues for brand elements other than Boardroom Navy (#0c1754) and Brand Electric (#2545ff).

### Layout

The page adheres to a mostly max-width contained model, centered on the screen, with sections flowing vertically. The hero section is a split-screen pattern, featuring a large headline and CTA on the left, balanced by a prominent product UI illustration on the right. Content sections generally maintain a consistent vertical rhythm of 64px spacing, often alternating between text-left/image-right and image-left/text-right arrangements. The footer is full-bleed with Boardroom Navy. Input fields are subtle, seamlessly integrated into the design. Card grids are not explicitly present, but data visualizations within product screenshots suggest a structured arrangement of content. The navigation is a classic top bar with a primary CTA button, sticky on scroll.

### Imagery

Imagery primarily consists of highly stylized, almost abstract product screenshots and UI diagrams, often featuring gradients and subtle 3D depth, contained within clean, rounded-corner elements, or floating freely. Data visualizations are a key visual element. There's a notable absence of lifestyle photography. Icons are filled, modern, and typically monochromatic, using either Pitch Black or occasionally Brand Electric. The visuals serve to explain complex concepts and data flow, acting as both decorative and explanatory content, occupying significant visual space in harmonious asymmetry.
