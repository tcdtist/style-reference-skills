---
version: alpha
name: PostNew
description: PostNew employs a dark-themed, highly compact visual system that prioritizes content over decorative UI. Deep charcoal backgrounds serve as a canvas for crisp white typography and minimal, unbordered components. The design maintains an atmospheric, theatrical aesthetic through its use of subtle blurring and a focus on raw imagery, allowing the content to define the mood. Interactive elements are sparse, using opacity shifts and a tight typographic hierarchy to convey function.
colors:
  pitch-black: "#000000"
  charcoal-canvas: "#1a1a1a"
  active-charcoal: "#242424"
  whisper-gray: "#fafafa"
  muted-interaction: "#5d5d5d"
  translucent-accent: "#2b2b2b99"
  mid-tone-transparency: "#3d3d3d99"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.13
    letterSpacing: -0.45px
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.15
    letterSpacing: -0.55px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 10px
  sectionGap: 50px
components:
  ghost-navigation-button:
    role: Primary navigation elements
  filled-navigation-button:
    role: Contextual navigation or utility buttons
---

## Overview

**North Star:** Midnight gallery showcase

PostNew employs a dark-themed, highly compact visual system that prioritizes content over decorative UI. Deep charcoal backgrounds serve as a canvas for crisp white typography and minimal, unbordered components. The design maintains an atmospheric, theatrical aesthetic through its use of subtle blurring and a focus on raw imagery, allowing the content to define the mood. Interactive elements are sparse, using opacity shifts and a tight typographic hierarchy to convey function.

### Do's

- Prioritize large, impactful imagery or video content, allowing it to dictate the mood and occupy significant visual space.
- Use Pitch Black (#000000) as the default text and border color for ghost components, ensuring high contrast against light surfaces or as an accent on dark.
- Apply Charcoal Canvas (#1a1a1a) for all primary page backgrounds, creating a consistent dark foundation.
- Maintain a compact density, using 10px for vertical and horizontal gaps between most elements.
- Set all interactive rectangular elements, like buttons and containers, to '0px' border-radius, enforcing a sharp, precise aesthetic.
- Employ ABC Diatype with its specific font feature settings and -0.025em letter-spacing for all primary headings and body copy, ensuring consistent brand typography.
- Use the Muted Interaction (#5d5d5d) background color for subtle interactive highlights or secondary links, indicating interactivity without strong visual emphasis.

### Don'ts

- Avoid using any border-radius greater than 0px; the system emphasizes sharp edges.
- Do not introduce colorful UI accents or vibrant primary action colors; maintain a monochromatic palette with subtle transparency for interaction.
- Refrain from using strong box-shadows or heavy elevation effects; depth is achieved primarily through surface shifts or content imagery itself.
- Do not deviate from the specified font families, weights, and letter-spacing for brand typography, especially ABC Diatype.
- Avoid large, prominent buttons with strong background fills unless utilizing the specific 'Filled Navigation Button' style.
- Do not use generic system fonts for prominent content text; always use ABC Diatype for body and heading roles.
- Avoid introducing significant padding or broad spacing for individual elements; maintain the compact density with 10px element gaps.

### Layout

The site employs a full-bleed layout strategy, particularly for its hero and main content sections, allowing imagery and motion to extend to the viewport edges. Content often appears in split-screen arrangements with distinct canvases, sometimes alternating. The hero pattern is dynamic, featuring large, immersive visuals often paired with bold, custom typography within the content itself. Vertical rhythm is established by section gaps of 50px, but within components, spacing is very compact. Navigation is minimal, consisting of a top-centered, semi-transparent bar with ghost text links and a subtle left-aligned utility bar. Content is generally centered or arranged in a text-left/visual-right pattern, adapting to the dynamic media.

### Imagery

The visual language predominantly features high-impact, full-bleed motion graphics and 3D renders that act as primary content. These visuals often have a hyper-realistic or abstract quality, using vibrant, sometimes surreal, colors in contrast to the muted UI. Imagery is central to the experience, often taking up entire screen sections or split views, rather than being contained within cards or frames. There are no consistent corner treatments; images are raw-edged, emphasizing their content. Icons are minimal, typically monochrome outlines, used sparingly for navigation or utility.
