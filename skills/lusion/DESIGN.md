---
version: alpha
name: Lusion
description: This design system conjures a computational laboratory aesthetic, balancing stark functionality with precise, vivid accents. The dominant bright off-white surfaces provide a clean canvas for sharp black typography, creating a high-contrast, information-focused layout. Carefully placed vivid blue and lime green appear in interactive elements, like focused indicators or calls to action, injecting focused energy against the predominantly neutral backdrop. Subtle elevation and generous border radii on active components soften the underlying hard-edged forms, implying a blend of digital precision and user-friendly interaction.
colors:
  absolute-black: "#000000"
  canvas-white: "#ffffff"
  whisper-off-white: "#f0f1fa"
  storm-gray: "#2b2e3a"
  button-white: "#e4e6ef"
  dark-surface: "#121416"
  deep-space-blue: "#1a2ffb"
  electric-lime: "#c1ff00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.48px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.48px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.48px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.4
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 108px
    lineHeight: 0.9
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 144px
    lineHeight: 0.9
    letterSpacing: -0.48px
spacing:
  cardRadius: 15px
  buttonRadius: 87.5px
  elementGap: 13px
components:
  cta-button-group:
    role: 
  hero-tagline-with-scroll-bar:
    role: 
  contact-form-input-card:
    role: 
  primary-action-button:
    role: Primary Call to Action
  secondary-action-button:
    role: Secondary Call to Action
  tertiary-button:
    role: Further Actions / Navigation
  text-input-active:
    role: User input fields
  interactive-card-container:
    role: Content grouping
---

## Overview

**North Star:** Computational Laboratory Blueprint — high-contrast text on bright surfaces, accented by vivid blue and lime green.

This design system conjures a computational laboratory aesthetic, balancing stark functionality with precise, vivid accents. The dominant bright off-white surfaces provide a clean canvas for sharp black typography, creating a high-contrast, information-focused layout. Carefully placed vivid blue and lime green appear in interactive elements, like focused indicators or calls to action, injecting focused energy against the predominantly neutral backdrop. Subtle elevation and generous border radii on active components soften the underlying hard-edged forms, implying a blend of digital precision and user-friendly interaction.

### Do's

- Prioritize 'Absolute Black' (#000000) for all primary body text, headings, and critical UI labels.
- Use 'Canvas White' (#ffffff) as the default background for main content areas and cards, creating a bright, spacious canvas.
- Apply 'Deep Space Blue' (#1a2ffb) as the primary accent color, specifically for interactive elements, links, and focused states.
- Ensure all buttons use an 87.5px border-radius unless specified, maintaining a soft, pill-like form.
- Utilize Aeonik at `weight: 500` for headings and important UI labels, combined with a negative letter-spacing for a modern, compact feel.
- Enforce a base padding unit of 16px around interactive elements like buttons and 25px for inputs to ensure ample breathing room.
- Introduce 'Whisper Off-White' (#f0f1fa) specifically for less prominent interactive elements or background differentiation in forms.

### Don'ts

- Avoid using multiple accent colors in close proximity; 'Deep Space Blue' and 'Electric Lime' should be used sparingly and distinctly.
- Do not deviate from the specified negative letter-spacing for Aeonik, as it is a core characteristic of the typographic identity.
- Do not use sharp corners for interactive elements; maintain the consistent application of generous border radii for buttons and inputs.
- Avoid generic or default shadow values; use the specified shadow `rgba(0, 0, 0, 0.04) 0px 6px 10px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px` for subtle elevation.
- Do not introduce highly saturated primary colors beyond 'Deep Space Blue' and 'Electric Lime' without specific justification.
- Avoid dense information blocks; maintain generous inter-element and inter-section spacing, aligning with the spacious density.

### Layout

The site uses a max-width contained layout, not full-bleed, with ample horizontal padding visible through the main content area. The hero section features 3D abstract graphics centrally aligned, framed by a card-like container with rounded corners. The overall section rhythm appears to alternate between bright white backgrounds for textual content and darker backgrounds for visual elements. Content arrangement leans towards centered stacks for headlines and calls to action, with text and potentially visuals arranged in a balanced, open manner. Navigation is a top bar with clear 'LET'S TALK' and 'MENU' buttons, maintaining ample space.

### Imagery

The site uses hero section imagery dominated by 3D abstract renders: interlocking shapes in white, black, and 'Deep Space Blue' against a dark background. These are contained within a main content area, with rounded corners (15px radius) rather than full-bleed. The role of these visuals is primarily decorative atmosphere and brand showcase, indicating expertise in 3D and interactive storytelling, rather than explanatory content. Image density is high in the hero, but otherwise the site appears to be text-dominant.
