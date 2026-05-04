---
version: alpha
name: SpaceX
description: This system projects an aura of ambitious precision, like a mission control screen against the vastness of space. The stark black background, illuminated by near-white text and subtle, dark-gray interactive states, creates a sense of focused technological endeavor. Typography is paramount, with hyper-legible, widely-tracked sans-serifs conveying information with clarity and a deliberate, almost uniform weight.
colors:
  midnight-void: "#000000"
  lunar-dust: "#f0f0fa"
  obsidian-blend: "#00000080"
  starfield-gray: "#f0f0fa59"
  interstellar-gray: "#545457"
  cosmic-gray: "#404040"
  dark-overlay: "#000000cc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.09px
  button:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: 0.1px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: 0.02px
spacing:
  buttonRadius: 4px
  elementGap: 18px
  sectionGap: 60px
components:
  ghost-primary-button-group:
    role: 
  upcoming-launch-card:
    role: 
  mission-stat-block:
    role: 
  ghost-primary-button:
    role: Primary call to action.
  pill-accent-button:
    role: Secondary or alternative call to action, often for reservation or ordering.
  navigation-link:
    role: Top-level navigation items.
  body-text-block:
    role: Informational paragraphs.
  display-heading:
    role: Main page titles and prominent section headings.
---

## Overview

**North Star:** Deep Space Command. A minimalist, dark-mode interface designed for high-stakes, information-dense environments, where every pixel counts.

This system projects an aura of ambitious precision, like a mission control screen against the vastness of space. The stark black background, illuminated by near-white text and subtle, dark-gray interactive states, creates a sense of focused technological endeavor. Typography is paramount, with hyper-legible, widely-tracked sans-serifs conveying information with clarity and a deliberate, almost uniform weight.

### Do's

- Prioritize 'Midnight Void' (#000000) for backgrounds and 'Lunar Dust' (#f0f0fa) for primary text to maintain stark contrast.
- Use D-DIN for all body text, navigation, and buttons, with D-DIN-Bold exclusively for hero headings at 48px.
- Apply a 0.09em or 0.10em letter-spacing to D-DIN text to enforce a deliberate, spacious feel.
- Utilize 20px horizontal padding for most interactive elements and buttons, such as the Ghost Primary Button.
- Ensure all interactive buttons feature a 4px `radius` unless specifically designed as a 'Pill Accent Button' (32px radius).
- Employ `Obsidian Blend` (rgba(0, 0, 0, 0.5)) for backgrounds of primary action buttons, providing a subtle interactive layer.

### Don'ts

- Avoid using highly saturated colors; maintain a monochromatic palette with only a hint of transparent `Lunar Dust` for subtle accents.
- Do not deviate from the D-DIN font family for any text elements; custom fonts are a core identifier.
- Never use drop shadows or complex elevation schemes; depth is created through background changes and subtle borders.
- Do not use generic button styles; always apply either the 'Ghost Primary Button' or 'Pill Accent Button' specifications.
- Avoid tight letter-spacing for standard text; the liberal use of letter-spacing is a signature choice.
- Do not introduce gradients or complex background imagery in areas where text readability is paramount.

### Layout

The page model is primarily full-bleed, with content anchored to a `pageMaxWidth` that dynamically adjusts to the viewport, ensuring large dramatic visuals. The hero sections feature full-viewport background images/videos with centered or left-aligned 'Display Heading' text in 'Lunar Dust'. Sections are vertically stacked with significant `sectionGap` (60px), creating spacious breathing room. Content is often presented in a simple, centered stack or a two-column layout with text on one side and an image or video on the other. Navigation is a sticky top bar, minimal and unobtrusive, dissolving into text links only. The overall density is spacious, allowing visuals to take precedence.

### Imagery

The site uses high-resolution, full-bleed photography. Images feature dramatic celestial bodies (Mars, Earth), rocket launches, and advanced spacecraft. The treatment is realistic and often features dark, moody backdrops blending seamlessly with the site's 'Midnight Void' background. There is no masking or excessive graphic treatment; images are presented as raw, powerful, and central to the narrative. Icons are minimalist, outlined, and monochromatic ('Lunar Dust'), appearing only on functional interactive elements, not for decoration. The imagery serves as both atmosphere and direct product showcase, dominating sections to convey the scale and ambition of space exploration.
