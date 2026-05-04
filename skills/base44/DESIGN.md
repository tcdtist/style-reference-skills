---
version: alpha
name: Base44
description: The Base44 design system feels like a softly lit, expansive workspace, where ideas emerge clearly against a gentle, optimistic backdrop. Pastel gradients and a predominant off-white canvas create an airy, unburdened atmosphere. Subtle dark gray text and muted interactive elements ensure focus remains on content creation, while distinct, vibrant accents like lime green and vivid orange are used sparingly for key actions, adding a precise, almost signal-like pop of functionality. Rounded corners on interactive components juxtapose with the generally crisp, unadorned typography, softening the technical edge of an AI platform.
colors:
  canvas-pearl: "#faf9f7"
  snowdrift-white: "#ffffff"
  ink-black: "#000000"
  graphite-text: "#232529"
  slate-gray: "#324158"
  stone-whisper: "#696f7b"
  e6e6e6: "#e6e6e6"
  ash-border: "#cfcfcf"
  lime-spritz: "#ade900"
  light-lime: "#ebffb1"
  sunset-orange: "#d8723c"
  blazing-orange: "#ff631f"
  sky-dream-gradient: "#F2F1ED"
  warm-horizon-gradient: "#FBFBFB"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: 0.1px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.07
spacing:
  cardRadius: 7.42183px
  buttonRadius: 999px
  elementGap: 10px
  sectionGap: 45px
components:
  hero-input-with-suggestion-pills:
    role: 
  feature-section-card:
    role: 
  button-group-cta-variants:
    role: 
  primary-navigation-link:
    role: Interactive element
  header-cta-button:
    role: Primary Call to Action
  ghost-button:
    role: Secondary action
  feature-card:
    role: Content container
  input-field:
    role: Data entry
  suggestion-pill-button:
    role: Interactive filter/suggestion
  new-feature-tag:
    role: Informational label
  toggle-switch:
    role: Binary control
  text-input-button:
    role: Secondary Call to Action
  modal-card:
    role: Overlay content
---

## Overview

**North Star:** Softly Lit Gradient Canvas

The Base44 design system feels like a softly lit, expansive workspace, where ideas emerge clearly against a gentle, optimistic backdrop. Pastel gradients and a predominant off-white canvas create an airy, unburdened atmosphere. Subtle dark gray text and muted interactive elements ensure focus remains on content creation, while distinct, vibrant accents like lime green and vivid orange are used sparingly for key actions, adding a precise, almost signal-like pop of functionality. Rounded corners on interactive components juxtapose with the generally crisp, unadorned typography, softening the technical edge of an AI platform.

### Do's

- Use Canvas Pearl #faf9f7 for primary page backgrounds to maintain an airy feel.
- Apply Snowdrift White #ffffff for card surfaces and interactive elements to create soft contrast and elevation against the canvas.
- Reserve Ink Black #000000 for primary text and headings, ensuring high readability.
- Implement Ghost Button styling with a 1px Ash Border #cfcfcf and 999px border-radius for secondary actions.
- Utilize Lime Spritz #ade900 for CTA button borders and key interactive indicators, contrasting with the soft neutrals.
- Maintain a comfortable information density using an average elementGap of 10px and sectionGap of 45px.
- Employ the 999px border-radius for all primary buttons and tags to deliver a consistent, rounded interactive experience.

### Don'ts

- Avoid using saturated background colors for large sections; gradients should remain pastel and subtle.
- Do not use dark text colors on anything but light backgrounds to preserve contrast and system aesthetic.
- Do not introduce sharp corners on interactive elements; prefer soft rounding (999px or 9.89577px) for buttons and inputs.
- Do not apply prominent box shadows for elevation; rely on subtle background color shifts or the single rgba(34, 40, 42, 0.04) 0px 3px 10px 0px for modals.
- Avoid introducing additional vivid colors outside of Lime Spritz #ade900 and Sunset Orange #d8723c to maintain focused accents.
- Do not break the established type scale; ensure all text adheres to defined sizes, weights, and line heights for consistent rhythm.
- Avoid using complex or busy background imagery; prefer soft gradients or solid colors that allow UI elements to stand out.

### Layout

The page model is a full-bleed background, with content constrained to a central max-width (unspecified in data but implied by content alignment). The hero section features a full-viewport gradient background with a centered headline and a primary input pattern, creating an immediate focal point. Section rhythm alternates between full-bleed gradient backgrounds and solid Canvas Pearl #faf9f7 sections, clearly delineating content blocks. Content arrangement often uses centered stacks for headlines and subtext, followed by symmetrical grid layouts for suggestions or feature cards. The main navigation is a sticky top bar with text links and a distinct green pill button for the main CTA. The overall density is spacious, ensuring ample breathing room around elements.

### Imagery

The site largely avoids traditional photography, instead relying on UI-as-imagery presentation and abstract graphics. Product screenshots are contained within device outlines or soft-edged cards, maintaining a pristine, focused view. Icons are primarily subtle outlines (stroke-based) in Ink Black or Graphite Text, occasionally filled with a brand accent color. Decorative graphics utilize soft, multi-color gradients for atmospheric branding, never overlapping content but often serving as full-bleed background elements. Imagery is explanatory or decorative, never serving as social proof or lifestyle elements. The density is image-light, text-dominant, with visual weight primarily in UI demonstrations.
