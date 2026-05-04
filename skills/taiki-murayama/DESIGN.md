---
version: alpha
name: Taiki Murayama
description: Taiki Murayama's portfolio design evokes a tactile, high-contrast, 'digital-brutalism-meets-luxe' aesthetic. Sharp, often square visual elements are juxtaposed with a single, highly saturated 'cyber green' accent that signals interaction and focus. Typography leans towards expansive, confident sans-serifs, with some oversized headings creating an editorial, high-fashion feel. The overall presentation is sparse, leaving ample negative space, and prioritizing strong visual statements over dense information.
colors:
  canvas-white: "#ffffff"
  deep-graphite: "#0b0b0f"
  pure-black: "#000000"
  muted-silver: "#c6c5c2"
  pale-ash: "#efefef"
  cyber-green: "#42ff00"
  ghost-green: "#a1ff81"
spacing:
  cardRadius: 15px
  buttonRadius: 300px
  elementGap: 11px
  sectionGap: 79px
components:
  text-only-button:
    role: Navigational or secondary action button with a bottom border.
  pill-cyber-green-button:
    role: Primary call to action.
  ghost-portfolio-card:
    role: Showcasing individual portfolio pieces or larger content blocks without visual framing.
  elevated-portfolio-card:
    role: Used for specific content blocks that require a subtle background separation.
  navigation-link-highlight:
    role: Active state for navigation items.
---

## Overview

**North Star:** High-contrast digital brutalism.

Taiki Murayama's portfolio design evokes a tactile, high-contrast, 'digital-brutalism-meets-luxe' aesthetic. Sharp, often square visual elements are juxtaposed with a single, highly saturated 'cyber green' accent that signals interaction and focus. Typography leans towards expansive, confident sans-serifs, with some oversized headings creating an editorial, high-fashion feel. The overall presentation is sparse, leaving ample negative space, and prioritizing strong visual statements over dense information.

### Do's

- Prioritize Canvas White for page backgrounds with Deep Graphite/Pure Black for primary text to maintain high contrast.
- Use Cyber Green exclusively for primary interactive elements like buttons and active states to signal action and create visual punctuation.
- Apply 15px border-radius for cards and content blocks, and a tight 300px for pill-shaped buttons and tags.
- Utilize Helvetica Neue weights 400 for body text and navigation, ensuring -0.035em letter-spacing for 16px text and -0.020em for 28px text.
- Employ custom HelveticaNeue.tcc or FHPhemister-Bold.woff2 for large display headings (87px-109px) with negative letter-spacing (-40em relative to size) for maximal impact.
- Maintain a clear visual hierarchy by employing 1px Deep Graphite or Pure Black bottom borders on text-only buttons and interactive elements.
- Ensure generous negative space; the elementGap of 11px should be a minimum baseline for tight internal elements, with sectionGap of 79px for major content divisions.

### Don'ts

- Do not introduce additional saturated colors; Cyber Green should be the only vivid chromatic element for interaction.
- Avoid using box-shadows or significant elevation; prefer subtle background color changes or strong borders for visual hierarchy.
- Do not apply standard positive letter-spacing to large headlines; tight tracking (e.g., -4.36px for 109px text) is key to the aesthetic.
- Do not deviate from the specified border-radii; 15px for cards and 300px for buttons are signature elements.
- Do not clutter content areas; maintain the ample negative space and minimal information density.
- Avoid using Helvetica Neue for button text; use Poppins at 14px, weight 500 with letter-spacing 0.02em for these elements.

### Layout

The page uses a maximum-width contained layout with heavy emphasis on vertical stacking and generous white space. The hero section features a centered headline over a collection of floating portfolio images and product shots, creating a dynamic, almost scattered presentation. Content sections typically follow a consistent vertical rhythm with minimal visual dividers. Text-dominant sections are often left-aligned, showcasing large typography, while image sections employ an asymmetric, somewhat scattered grid approach where elements are positioned with intentional whitespace. Navigation is a minimalist top bar, anchored in place, providing clear but understated access to sections.

### Imagery

This site features a clean, product-focused imagery style. Primarily product crops and lifestyle shots are tightly contained within ghost cards, floating cleanly on the Canvas White background. Images are not full-bleed and often have raw, unmasked edges, contributing to a digital collage or 'moodboard' aesthetic. The treatment is direct and unadorned, allowing the content of the image to speak for itself without heavy styling. Icons, if present, are minimal outlined styles. The density is image-heavy in portfolio sections, using visuals as primary content showcases, balanced by text-dominant sections.
