---
version: alpha
name: Tatem
description: Tatem's design offers a sophisticated and focused dark-mode experience, reminiscent of a command line interface or focused developer tool. Its visual atmosphere is calm, quiet, and highly systematic. The primary visual impression is created by a clean, neutral dark background punctuated by purposeful text and subtle interactive elements. Very sparing use of color, primarily for status or accent in a muted blue, maintains serious functionality while avoiding distraction. The design prioritizes readability and information hierarchy through careful typographic sizing and achromatic value contrasts.
colors:
  twilight-ink: "#000000"
  polar-white: "#ffffff"
  pewter-mist: "#919191"
  silver-tone: "#b5b5b5"
  obsidian-grey: "#606060"
  charcoal-black: "#3b3b3b"
  mist-grey: "#c2c2c2"
  cerulean-accent: "#007eed"
  sky-gradient: "#5a7694"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
    letterSpacing: -0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.1px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.14px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -0.28px
spacing:
  elementGap: 8px
  sectionGap: 28px
components:
  cta-button-group:
    role: 
  feature-section-split-inbox:
    role: 
  keyboard-shortcuts-section:
    role: 
  primary-ghost-button:
    role: Call to action, navigation items.
  navigation-link-button:
    role: Secondary actions, internal navigation.
  accent-label:
    role: Categorization, status indicators.
  section-divider:
    role: Visual separation between content blocks.
---

## Overview

**North Star:** Midnight Terminal, cool and precise. This visual evokes a dark, command-line interface with subtle interactive glows.

Tatem's design offers a sophisticated and focused dark-mode experience, reminiscent of a command line interface or focused developer tool. Its visual atmosphere is calm, quiet, and highly systematic. The primary visual impression is created by a clean, neutral dark background punctuated by purposeful text and subtle interactive elements. Very sparing use of color, primarily for status or accent in a muted blue, maintains serious functionality while avoiding distraction. The design prioritizes readability and information hierarchy through careful typographic sizing and achromatic value contrasts.

### Do's

- Use Inter weight 400 for all text to maintain visual consistency and clarity.
- Apply Twilight Ink (#000000) for primary page backgrounds, anchoring the dark theme.
- Use Polar White (#ffffff) for primary headlines and significant UI text against dark backgrounds.
- Utilize Cerulean Accent (#007eed) exclusively for interactive elements like links and active states to signal interactivity.
- Maintain a primary border radius of 6px for most interactive elements and a larger 8px for buttons, with 16px for unique hero elements.
- Employ a base spacing unit of 8px for element gaps and 28px for vertical section separation.
- Integrate the Sky Gradient (linear-gradient(rgb(90, 118, 148), rgb(171, 183, 181))) for large, atmospheric hero backgrounds.

### Don'ts

- Avoid introducing additional saturated colors beyond the established Cerulean Accent and its subtle variations to maintain the focused atmosphere.
- Do not use heavy shadows or artificial light sources; rely on value contrast and subtle borders for depth.
- Do not vary font weights or families; Inter 400 is the only typeface for this system.
- Avoid busy backgrounds or textures in content areas; stick to solid dark neutrals or the approved gradient.
- Do not use overly expressive or decorative typography; the system prioritizes functional readability.
- Steer clear of radii smaller than 6px for interactive components, and avoid overly sharp, unrounded edges where a softer form is intended.

### Layout

The page primarily uses a full-bleed layout for background elements, with content contained within implied horizontal margins, giving it an expansive feel. The hero section is full-bleed with the Sky Gradient background, featuring a centered headline and button group over the abstract product visual. Subsequent sections mostly alternate between full-width black backgrounds and contained content. Content arrangement is primarily stacked, with some sections using a text-left/visual-right pattern, maintaining relatively even vertical spacing. There are no obvious grid patterns beyond simple stacked blocks. The navigation is a sticky top bar, minimal and semi-transparent on the hero, becoming opaque black on scroll, emphasizing content over persistent chrome.

### Imagery

The site uses a mix of subtle product illustrations and abstract, atmospheric graphics. The hero section features a stylized, translucent rendering of an email interface, presented in an isometric, floating perspective within the Sky Gradient. Further down, product illustrations, such as the keyboard visual, are flat, monochromatic, and contained within subtly rounded dark shapes. These visuals are explanatory rather than decorative, showcasing product features with a clean, almost diagrammatic quality. Icons are minimal, outlined, and monochromatic, primarily using Pewter Mist (#919191), serving a functional role without visual excess. The overall density of imagery is low, with text remaining dominant.
