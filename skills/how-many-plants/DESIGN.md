---
version: alpha
name: How Many Plants
description: How Many Plants utilizes a playful, illustrative aesthetic reminiscent of an artisanal zine or handcrafted journal. The visual system combines a creamy off-white canvas with deep charcoal text and bold, earthy chartreuse accents. Strong, graphic outlines define components and illustrations, imparting a clean yet distinctly analog feel. Typography mixes a custom display serif for headlines with a typewriter-style sans-serif, enhancing the bespoke and approachable mood. The design emphasizes spaciousness, using generous padding and margin to give elements room to breathe.
colors:
  canvas-cream: "#f9f5f1"
  inkwell-black: "#222222"
  sprout-green: "#bfb33b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.43
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 0.89
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 16px
  sectionGap: 32px
components:
  primary-ghost-button:
    role: Main call-to-action button for a planted, vintage feel
  navigation-link:
    role: Site navigation and sub-navigation
  search-input:
    role: Site-wide search functionality
  text-outline-button:
    role: Secondary action or category filter
  illustrative-shelf:
    role: Decorative background element with layered content
---

## Overview

**North Star:** Artisanal plant journal

How Many Plants utilizes a playful, illustrative aesthetic reminiscent of an artisanal zine or handcrafted journal. The visual system combines a creamy off-white canvas with deep charcoal text and bold, earthy chartreuse accents. Strong, graphic outlines define components and illustrations, imparting a clean yet distinctly analog feel. Typography mixes a custom display serif for headlines with a typewriter-style sans-serif, enhancing the bespoke and approachable mood. The design emphasizes spaciousness, using generous padding and margin to give elements room to breathe.

### Do's

- Use Canvas Cream (#f9f5f1) as the primary page background for a warm, inviting base.
- Apply Inkwell Black (#222222) for all primary text, headings, and essential borders to ensure strong contrast and graphic definition.
- Accent key interactive elements and illustrative outlines with Sprout Green (#bfb33b), particularly as an offset shadow under buttons.
- Employ Chromatica for all headings and navigation using its defined sizes for a custom editorial feel, embracing its tight line heights at larger sizes.
- Use Hellenictypewriter for body text, button labels, and input fields to convey a handcrafted, accessible tone.
- Maintain a spacious rhythm with 32px vertical section gaps and 16px horizontal element gaps.
- Utilize 0px border-radius consistently across all components (buttons, inputs, cards) to maintain a crisp, hard-edged aesthetic.

### Don'ts

- Avoid using gradients; the design relies on solid colors and graphic outlines.
- Do not introduce rounded corners; maintain the consistent 0px border-radius.
- Refrain from drop shadows or soft elevation effects; prefer bold, offset box-shadows in Sprout Green for a distinct graphic accent.
- Do not deviate from the two primary fonts; their interplay is crucial to the brand's identity.
- Avoid tight, cramped layouts; prioritize spaciousness and generous padding in all components.
- Do not use highly saturated or vivid colors beyond Sprout Green; the palette is intentionally restrained to foster a calming, natural atmosphere.
- Never use `rgba(0,0,0,0)` or transparent for background elements unless specifically for a ghost button; visible surfaces should always resolve to Canvas Cream.
