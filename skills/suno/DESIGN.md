---
version: alpha
name: Suno
description: Suno's design evokes a dark, pulsating club atmosphere, where digital magic happens. The expansive, low-contrast color palette, punctuated by fleeting, vivid neon accents, creates a sense of cutting-edge technology merging with artistic expression. Subtle dark gradients on backgrounds and elevated elements add depth without sharp divisions. White, bold typography against these dark canvases commands attention, establishing a stage for creative output.
colors:
  pitch-black: "#101012"
  void-black: "#17171a"
  ghost-white: "#f7f4ef"
  pure-white: "#ffffff"
  graphite: "#000000"
  ash-gray: "#c2c2c1"
  muted-steel: "#a3a3a3"
  sunset-yellow: "#f5d907"
  vivid-pink: "#fd429c"
  electric-green: "#02d95c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.78
  button:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.48px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.14
    letterSpacing: -1.44px
  display:
    fontFamily: "system-ui"
    fontSize: 140px
    lineHeight: 0.89
    letterSpacing: -3.64px
spacing:
  cardRadius: 12px
  buttonRadius: 6px
  elementGap: 4-16px
  sectionGap: 100-150px
components:
  music-prompt-input:
    role: 
  song-card:
    role: 
  button-group:
    role: 
  primary-ghost-button:
    role: Action button
  pill-ghost-button:
    role: Filter/Tag button
  primary-filled-button:
    role: Main CTA Button
  interactive-input-field:
    role: Text input
  create-action-button:
    role: Primary interactive button with gradient
  prompt-input-container:
    role: Input wrapper
---

## Overview

**North Star:** Dark studio, neon pulses. An expansive, dim canvas where vibrant light flickers to life.

Suno's design evokes a dark, pulsating club atmosphere, where digital magic happens. The expansive, low-contrast color palette, punctuated by fleeting, vivid neon accents, creates a sense of cutting-edge technology merging with artistic expression. Subtle dark gradients on backgrounds and elevated elements add depth without sharp divisions. White, bold typography against these dark canvases commands attention, establishing a stage for creative output.

### Do's

- Prioritize text legibility on dark backgrounds by using Ghost White (#F7F4EF) or Pure White (#FFFFFF) for body and headline text.
- Use Pitch Black (#101012) as the primary page background to maintain the dark, atmospheric tone across all sections.
- Employ the 6px border radius for all interactive elements like buttons and input containers to ensure a consistent, slightly softened aesthetic.
- Apply the gradient from Vivid Pink (#FD429C) to Sunset Yellow (#F5D907) exclusively for key 'Create' actions to highlight primary functionality.
- Maintain generous vertical spacing between sections (100-150px) to provide breathing room and prevent visual clutter on the dark canvas.
- Use Neue Montreal at a weight of 300 or 400 for most text, reserving 500 for emphasized elements, without overusing bolding.
- Ensure interactive elements like buttons have a minimum padding of 4px vertical and 8px horizontal, or 8px vertical and 16px horizontal for primary CTAs.

### Don'ts

- Avoid using bright, saturated colors for large background areas or extensive text blocks, as this will disrupt the intended dark and low-key aesthetic.
- Do not introduce hard shadows or strong elevation effects that could break the subtle, layered depth created by varying dark tones.
- Refrain from deviating from the established border radii; maintain 6px for buttons and 12px for cards/inputs.
- Do not use more than one distinct primary brand color in any single section to avoid visual competition and maintain focus on the content.
- Do not use generic system fonts; Neue Montreal is critical to the brand's typographic identity.
- Avoid excessive use of the Editorial New typeface; it is a decorative accent for specific headings, not a general body or UI font.
- Do not introduce stark white backgrounds for entire sections, as the design system is fundamentally dark-themed with occasional light elements for high contrast.

### Layout

The page primarily employs a full-bleed layout with content sections centered, but without a strict `pageMaxWidth` constraint, giving a sense of expansiveness. The hero section is full-bleed, featuring a dominant, centrally aligned headline on a dark, subtly textured gradient background, with interactive elements positioned below. Subsequent sections often feature a mix of centered stacked content and fluid arrangements of cards or media, sometimes flowing freely across the width. There's a subtle rhythm created by changes in background tint or the introduction of card-based content, rather than strong visual dividers. Navigation is handled by a minimal top bar with 'Sign In' and 'Sign Up' buttons.

### Imagery

The visual language for imagery is characterized by contained, slightly rounded media cards displaying diverse content such as album art or user-generated visualizers. These are often dark-toned or moody, showcasing a mix of abstract and human elements, implying artistic creation. The treatment involves a 12px border radius, with elements appearing in a somewhat scattered, dynamic arrangement rather than a rigid grid, reinforcing a creative, less formal atmosphere. The images serve a primarily functional and atmospheric role, decorating the dark interface and providing visual context to the AI-generated music tracks.
