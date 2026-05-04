---
version: alpha
name: ON.energy
description: This system evokes a technical, industrial luxury with its stark achromatic palette punctuated by a single vibrant yellow. The dark background (#202020 or #000000) serves as a canvas for precise typography, predominantly the custom Univers Next Pro, often rendered in negative letter-spacing for a sophisticated, whispered delivery. Rounded corners are selectively applied, with the default being 6px, but larger curves for specific button styles introduce a subtle tension, softening otherwise rigid industrial forms.
colors:
  midnight-steel: "#000000"
  data-center-graphite: "#202020"
  industrial-silver: "#afafaf"
  screen-white: "#eeeeee"
  electric-yellow: "#fff313"
  asphalt-gray: "#4b4b4b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.38
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.13
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -2.56px
spacing:
  cardRadius: 9px
  buttonRadius: 6px
  elementGap: 16px
  sectionGap: 64px
components:
  electric-cta-button-group:
    role: 
  discover-ai-ups-overlay-card:
    role: 
  latest-news-cards:
    role: 
  dark-ghost-button:
    role: Secondary interactive elements within dark sections.
  electric-cta-button:
    role: Primary calls to action.
  accent-pill-button:
    role: Subtle interactive elements, often within hero or image overlays.
  outline-accent-button:
    role: Navigation or tertiary actions, particularly on lighter backgrounds.
  news-list-item:
    role: Informational cards within news feeds.
  image-card:
    role: Content presentation with imagery.
  header-navigation-item:
    role: Top-level site navigation links.
---

## Overview

**North Star:** Industrial Luxe on a Dark Stage. The UI feels like a high-tech data center interior, where essential information is presented with precision and a focused burst of energy.

This system evokes a technical, industrial luxury with its stark achromatic palette punctuated by a single vibrant yellow. The dark background (#202020 or #000000) serves as a canvas for precise typography, predominantly the custom Univers Next Pro, often rendered in negative letter-spacing for a sophisticated, whispered delivery. Rounded corners are selectively applied, with the default being 6px, but larger curves for specific button styles introduce a subtle tension, softening otherwise rigid industrial forms.

### Do's

- Use Electric Yellow (#fff313) exclusively for primary CTAs and active states.
- Apply Univers Next Pro weight 300 with negative letter-spacing for all significant headlines to achieve a whispered authority.
- Maintain a default border-radius of 6px for most interactive elements and a 9px radius for image cards.
- Layer backgrounds using Midnight Steel (#000000) and Data Center Graphite (#202020) to create depth without shadows, like nested panels.
- Ensure high contrast text (#eeeeee or #000000) against background colors, adhering to AAA accessibility standards.
- Use System 4px as the base unit for all dimensional measurements, ensuring consistent spacing multiples.

### Don'ts

- Do not introduce new vibrant colors outside of the defined Electric Yellow; maintain the stark achromatic palette.
- Avoid using drop shadows for elevation; rely on background layering and subtle borders for perceived depth.
- Do not use highly decorative or script fonts; stick to Univers Next Pro to maintain the technical, precise aesthetic.
- Never use positive letter spacing; the brand's typographic signature relies on condensing character forms.
- Do not apply large, soft gradients; the system prefers solid, well-defined color blocks and sharp lines.
- Avoid generic stock photography; imagery should be technical, product-focused, or abstract, aligning with the industrial feel.

### Layout

The page uses a mixed layout approach, beginning with a full-bleed dark hero section featuring a centered headline over a large product image. Subsequent sections alternate between full-width dark backgrounds and lighter #eeeeee sections. Content is primarily centered within a 1350px max-width container, often featuring side-by-side text and visuals (text-left/image-right alternating). Vertical spacing between sections is generous (64px). Navigation is a fixed top bar on a dark background, featuring subtle interactive states. The rhythm is highly structured, almost architectural, creating a sense of order and high performance.

### Imagery

Imagery primarily consists of tight product photography presented with industrial precision, showcasing high-tech hardware or abstract representations of energy flow. There is a strong emphasis on product shots of machinery. Photography is often presented in a muted, desaturated palette or integrated almost as textures within the dark UI. Corner radii on image cards are subtle (9px). Icons are minimalist and outlined, supporting the technical atmosphere without adding visual clutter. The overall density of imagery is balanced with text, serving to explain or showcase rather than purely decorate.
