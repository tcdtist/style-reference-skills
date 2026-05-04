---
version: alpha
name: INVERSA
description: This design system evokes a sense of stark, deliberate naturalism, like an aerial view of a verdant, wild landscape at dusk. The dominant color scheme consists of a muted dark background (#13140e) contrasted with a creamy almost-white (#f4f3e8), punctuated by infrequent, vivid lime-yellow accents (#ebfc72). The use of custom fonts, NB International Pro for headlines and JetBrains Mono for body text, creates a distinctive typographic voice that is both authoritative and technical. Limited rounded corners (3.6px) appear only on interactive elements like buttons, contributing to an overall grounded aesthetic.
colors:
  deep-forest: "#13140"
  creme-paper: "#f4f3e8"
  lime-accent: "#ebfc72"
  stone-grey: "#404040"
  muddy-banks: "#84837b"
  lime-gradient: "#ebfc72"
  inverse-lime-gradient: "#ebfc72"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.62
    letterSpacing: -0.48px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.48px
  subheading:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.06
    letterSpacing: -1.74px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.9
    letterSpacing: -2.16px
spacing:
  buttonRadius: 3.6px
  elementGap: 14px
  sectionGap: 59px
components:
  lime-cta-button-group:
    role: 
  stat-metric-block:
    role: 
  alert-notification-banner:
    role: 
  ghost-navigation-button:
    role: Primary navigation interaction
  dark-solid-button:
    role: Secondary action items
  lime-cta-button:
    role: Primary call-to-action
  input-field:
    role: User data entry
  main-heading:
    role: Section titles
  body-text:
    role: Paragraph content
  copyright-footer-text:
    role: Legal and informational text
---

## Overview

**North Star:** Wilderness at dusk

This design system evokes a sense of stark, deliberate naturalism, like an aerial view of a verdant, wild landscape at dusk. The dominant color scheme consists of a muted dark background (#13140e) contrasted with a creamy almost-white (#f4f3e8), punctuated by infrequent, vivid lime-yellow accents (#ebfc72). The use of custom fonts, NB International Pro for headlines and JetBrains Mono for body text, creates a distinctive typographic voice that is both authoritative and technical. Limited rounded corners (3.6px) appear only on interactive elements like buttons, contributing to an overall grounded aesthetic.

### Do's

- Prioritize Creme Paper (#f4f3e8) on Deep Forest (#13140e) for maximum contrast and legibility.
- Use NB International Pro for all major headings and navigation elements to maintain an authoritative tone.
- Apply JetBrains Mono for body text, button labels, and any code-like snippets to emphasize precision.
- Utilize Lime Accent (#ebfc72) exclusively for primary calls-to-action or critical interactive states to command attention.
- Maintain a consistent 3.6px border-radius for all interactive buttons and input fields that require rounding.
- Employ a base spacing unit of 14px for general element gaps and 59px for vertical section spacing.
- Ensure the page content never exceeds a max-width of 810px to keep text lines readable and layout contained.

### Don'ts

- Avoid using highly saturated colors other than Lime Accent (#ebfc72) to maintain the muted, naturalistic palette.
- Do not introduce extensive shadow effects; the design relies on stark color contrast and flat surfaces for depth.
- Refrain from using excessively large or decorative typefaces that deviate from NB International Pro or JetBrains Mono.
- Disperse rounded corners beyond buttons and specific inputs; most elements should adhere to sharp edges.
- Do not use generic system fonts; the custom typefaces are essential to the brand's visual identity.
- Avoid large blocks of text in weights lighter than 400 to ensure readability on the dark background.
- Do not create layouts that extend beyond the 810px max-width without a specific full-bleed background treatment.

### Layout

The page primarily utilizes a max-width contained layout, likely around 810px, centered on the screen, creating a focused reading experience. The hero section is a full-bleed visual with a dominant aerial photograph, overlaid with a large, centered headline and a distinct CTA. Subsequent sections follow a rhythm of consistent vertical spacing (approx. 59px). Content is arranged in clear, often single-column stacks with occasional text-adjacent visual elements on a dark background, establishing a very text-dominant, editorial feel. Navigation is a minimal top bar with 'INVERSA' branding on the left and a 'Menu' button on the right, unobtrusively integrated into the hero image.

### Imagery

The visual language is dominated by high-resolution, full-bleed aerial photography of natural landscapes (rivers, forests, geological formations). The images are treated with a slightly desaturated, moody filter that harmonizes with the dark UI, conveying a sense of scale and interconnectedness without being overly dramatic. Imagery primarily serves as a powerful atmospheric background, reinforcing the brand's connection to ecological themes. There are minimal visible icons, and those present are monochrome, typically Creme Paper (#f4f3e8) outlines against Deep Forest (#13140e), appearing precise and functional.
