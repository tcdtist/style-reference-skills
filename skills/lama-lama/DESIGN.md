---
version: alpha
name: Lama Lama
description: Lama Lama employs a dark mode aesthetic with a rich, immersive character, balancing deep charcoal backgrounds with luminous, near-white typography for high contrast. The visual system is defined by its understated UI elements, which often surface through subtle borders rather than solid fills, allowing content such as photography and video to dominate. Typography is compact and precise, maintaining clarity within the spacious, uncrowded layouts. Components are minimal, relying on rounded corners and ghost-like interactions to suggest functionality without visual clutter.
colors:
  deep-charcoal: "#111314"
  polar-mist: "#d7f3f5"
  void-black: "#020203"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.22
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.06
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 0.86
  display:
    fontFamily: "system-ui"
    fontSize: 134px
    lineHeight: 0.86
spacing:
  cardRadius: 15px
  buttonRadius: 8px
  elementGap: 8-10px
  sectionGap: 60-80px
components:
  ghost-action-button:
    role: Primary interactive control for calls to action or navigation.
  feature-card:
    role: Container for project highlights or content blocks.
  navigation-link:
    role: Interactive text link within headers and footers.
  hero-headline:
    role: Prominent headline for introductory sections.
  play-showreel-button:
    role: Specific action button for media playback.
---

## Overview

**North Star:** Midnight theater with luminous text

Lama Lama employs a dark mode aesthetic with a rich, immersive character, balancing deep charcoal backgrounds with luminous, near-white typography for high contrast. The visual system is defined by its understated UI elements, which often surface through subtle borders rather than solid fills, allowing content such as photography and video to dominate. Typography is compact and precise, maintaining clarity within the spacious, uncrowded layouts. Components are minimal, relying on rounded corners and ghost-like interactions to suggest functionality without visual clutter.

### Do's

- Prioritize Deep Charcoal (#111314) and Void Black (#020203) for backgrounds, establishing a dark, immersive canvas.
- Use Polar Mist (#d7f3f5) for all primary text, ghost button borders, and interactive accents to ensure high contrast.
- Apply SuisseIntl font consistently across all text elements, leveraging its varying weights for typographic hierarchy.
- Maintain a spacious layout with section gaps of 60-80px to prevent visual clutter and allow content to breathe.
- When creating cards or interactive elements, use a 15px border-radius for a consistent soft-edged appearance.
- For all primary action buttons, employ the ghost style using Polar Mist (#d7f3f5) for text and border, with an 8px border-radius.

### Don'ts

- Avoid using bright or vivid colors for large background areas; reserve chromatic accents for subtle interactive states or small functional elements.
- Do not introduce heavy drop shadows or busy decorative elements that would disrupt the understated, contained aesthetic.
- Refrain from using bold typefaces for body text or subheadings; reserve heavier weights for high-impact headlines only.
- Do not deviate from the defined border radii; maintain 15px for card-like elements and 8px for buttons.
- Avoid tight spacing for content blocks or sections; maintain generous padding to uphold the design's comfortable density.
- Do not use black for text on a deep charcoal background; ensure sufficient contrast by using Polar Mist (#d7f3f5).

### Layout

The page uses a full-bleed layout on a dark canvas, primarily centered content sections within an implied max-width. The hero section features a centered headline over a video or prominent visual, with supporting text below. Subsequent sections often use split-pane layouts, presenting visuals on one side and text on the other, or a dynamic grid for featured projects. Vertical rhythm is established by consistent large section gaps (60-80px), creating a sense of spaciousness. Navigation is a minimalist top bar, with a persistent footer at the bottom containing utility links.

### Imagery

Imagery primarily features product/project videos and still photography presented within rounded containers. The treatment suggests a focus on the subject, often with a slight vignette or deep, rich tones that blend with the dark background. Photography is mostly product-focused or environmental, avoiding overt lifestyle shots. Small illustrative icons are outlined and monochrome, matching the Polar Mist (#d7f3f5) accent color. Imagery generally serves to showcase work and provide atmospheric context, while maintaining a balanced density with text.
