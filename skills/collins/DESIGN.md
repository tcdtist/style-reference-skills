---
version: alpha
name: COLLINS
description: COLLINS employs a minimalist, sophisticated aesthetic, utilizing a pale canvas and precise typography to convey authority and restraint. The visual identity emphasizes clarity with high-contrast text and a deliberate absence of busy elements. Subtle interaction cues and carefully defined spacing create a sense of calm composure, allowing content to take precedence. The system avoids vibrant colors, relying instead on a refined neutral palette for impact.
colors:
  canvas-parchment: "#f8f8f7"
  absolute-white: "#ffffff"
  deep-onyx: "#140700"
  pewter-accent: "#cccccc"
  slate-echo: "#5e5855"
  shadowed-steel: "#514c49"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1
    letterSpacing: -0.58px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: -0.21px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.05
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.05
    letterSpacing: -0.28px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.05
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.05
    letterSpacing: -1.44px
spacing:
  cardRadius: 16px
  buttonRadius: 96px
  elementGap: 16px
  sectionGap: 64px
components:
  primary-filled-button:
    role: Call to action for key interactions.
  ghost-border-button:
    role: Secondary call to action, navigation items.
  hero-ghost-button:
    role: Calls to action within prominent dark sections.
  programs-card-plain:
    role: Structural container for program listings or similar content.
  programs-card-rounded:
    role: Structural container with soft corners for related content blocks.
  text-input:
    role: Single-line text entry fields.
---

## Overview

**North Star:** Architectural parchment and chiseled stone

COLLINS employs a minimalist, sophisticated aesthetic, utilizing a pale canvas and precise typography to convey authority and restraint. The visual identity emphasizes clarity with high-contrast text and a deliberate absence of busy elements. Subtle interaction cues and carefully defined spacing create a sense of calm composure, allowing content to take precedence. The system avoids vibrant colors, relying instead on a refined neutral palette for impact.

### Do's

- Prioritize Deep Onyx (#140700) for all primary text and calls to action against Canvas Parchment (#f8f8f7) backgrounds to ensure high contrast and brand coherence.
- Use Portrait Text 400 at 72px for hero headings to establish a commanding, yet refined textual presence with -1.44px letter spacing.
- Maintain a highly achromatic palette, reserving the subtle brown tint of Deep Onyx (#140700) as the most saturated element.
- Employ Graphik 400 with its characteristic tight letter spacing for body text and interactive elements to convey modern precision.
- Utilize 96px border-radius consistently for primary filled buttons and 0px for ghost/outlined buttons to define interaction types.
- Apply 16px border-radius to card-like elements or content containers where a softer edge is desired, contrasting with the generally sharp aesthetic.
- Ensure all interactive text elements use either Deep Onyx (#140700) for active states or Absolute White (#ffffff) in dark contexts, maintaining strong readability.

### Don'ts

- Avoid introducing additional chromatic colors; the visual system is built on a precise neutral and near-black palette.
- Do not use generic sans-serif fonts for headings; Portrait Text and Times are critical for the brand's sophisticated voice.
- Steer clear of heavy drop shadows or strong gradients; the system relies on flat surfaces and high-contrast typography for visual depth.
- Do not deviate from the established tight letter spacing for Graphik and Portrait Text; it's a signature characteristic of the typography.
- Avoid overly generous padding or wide element gaps that would disrupt the comfortable but precise density of the layout.
- Do not round corners on elements intended to be sharp and austere, such as the ghost buttons and form inputs with zero radius.
- Never use light text on light backgrounds or dark text on dark backgrounds without ensuring WCAG AAA contrast levels, particularly with the subtle off-white tones.

### Layout

The page primarily uses a max-width contained layout, centering content within a generous whitespace on a Canvas Parchment background. The hero section features a centered, impactful headline against the same background, followed by a full-width visual banner or video with a 16px border-radius, acting as a visual break. Content sections maintain consistent vertical spacing (64px section gap) and often feature simple stacked content, or alternating horizontal arrangements of text and implied visual content (like program listings). Navigation is a sticky top bar with minimal branding and interactive elements. The site favors large, isolated blocks of content over dense grids.

### Imagery

The imagery is sparse and impactful. Photography, when used, tends to be full-bleed, conceptual, and often dark and moody with a clear focal point, appearing within masked, rounded containers that soften the otherwise sharp UI. There are no illustrations. Icons are minimal, typically monochrome and filled, serving as subtle navigational or decorative elements (e.g., hamburger menu, arrows). The overall density is text-dominant, allowing the few high-impact visual elements to stand out, primarily for atmospheric or product showcase purposes without literal depiction.
