---
version: alpha
name: Immersive Garden
description: This design system evokes the delicate, architectural quality of a bas-relief sculpture, where details whisper rather than shout. The entire page functions as a single, subtly textured canvas of near-white, with form and depth communicated through the negative space and the gentle play of light and shadow, not distinct color blocks. Typography is precise and understated, acting as fine etchings on the surface, allowing the sculptural elements to dominate and define the brand's aesthetic of immersive, artistic digital experiences.
colors:
  canvas-white: "#ffffff"
  etched-graphite: "#030303"
  ink-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.1
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.1
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
spacing:
  elementGap: 5px
  sectionGap: 40px
components:
  hero-headline-block:
    role: 
  brand-identity-navigation-bar:
    role: 
  call-to-action-scroll-indicator-bar:
    role: 
  primary-navigation-link:
    role: Top-right navigation item
  logo:
    role: Brand identity
  call-to-action-link:
    role: Initiating user interaction
  hero-headline:
    role: Main page title
  scroll-down-indicator:
    role: User guidance
---

## Overview

**North Star:** Bas-relief on white marble — a singular textured surface sculpted with light and shadow.

This design system evokes the delicate, architectural quality of a bas-relief sculpture, where details whisper rather than shout. The entire page functions as a single, subtly textured canvas of near-white, with form and depth communicated through the negative space and the gentle play of light and shadow, not distinct color blocks. Typography is precise and understated, acting as fine etchings on the surface, allowing the sculptural elements to dominate and define the brand's aesthetic of immersive, artistic digital experiences.

### Do's

- Prioritize 'Canvas White' (#ffffff) as the primary background for all major sections and surfaces, maintaining the single-canvas aesthetic.
- Use PSTimes at 28px, weight 400 for primary headings to establish a refined tone.
- Employ Helvetica Neue at 12px or 14px, weight 400 for all navigation, labels, and secondary information to maintain a crisp, minimal hierarchy.
- Utilize 'Etched Graphite' (#030303) for all primary text and interactive elements.
- Maintain generous spacing with a general `elementGap` of 5px and `cardPadding` of 40px to enhance the sense of space and visual quietude.

### Don'ts

- Do not introduce highly saturated or brightly colored elements; the system relies on achromatic tones and subtle relief.
- Avoid strong box-shadows or distinct borders that would disrupt the singular, textured surface feel of the design.
- Refrain from using bold or heavy font weights; the typography is designed to be understated and delicate.
- Do not use highly contrasting backgrounds or text colors beyond 'Canvas White' (#ffffff) and 'Etched Graphite' (#030303) / 'Ink Black' (#000000).
- Avoid creating traditional button styles with solid fills or strong outlines. Interactive elements should be indicated primarily through text and subtle hover effects if any.

### Layout

The page maintains a full-bleed layout, using the entire viewport as a single, uniform textured canvas. There is no `pageMaxWidth`, creating an expansive, borderless experience. The hero section is characterized by a centered headline over the minimalist, sculptural background. Subsequent sections follow a consistent vertical rhythm, separated implicitly by the continuous background canvas and explicit content blocks that are spatially separated, rather than by alternating background colors. Content arrangement is typically centered or subtly offset, emphasizing negative space. There are hints of a fluid grid for content organization, allowing elements to breathe within the vast, singular background. Navigation is minimal, confined to a 'About' link in the top-right and a logo in the top-left, reinforcing the content-first, art-gallery feel.

### Imagery

The site employs a distinctive sculptural bas-relief style for its visuals, appearing embedded directly into the 'Canvas White' background. These are not photography or illustrations in the traditional sense, but rather rendered forms that create depth and shadow as if carved from the page itself. The treatment is full-bleed, seamlessly integrating with the background without any borders or masking, providing an immersive, tactile quality. Their role is primarily artistic and atmospheric, defining the brand's 'immersive' identity without relying on literal product showcases or lifestyle photography. The density is moderate, with these abstract forms occupying significant visual space to establish mood.

### Elevation

This design system intentionally avoids traditional elevation cues like drop shadows or distinct background layers. The sense of depth and separation is achieved through the subtle, sculptural bas-relief elements within the primary 'Canvas White' background, creating visual interest through texture and perceived sculpted forms rather than layered UI components. Elements appear to be etched into or subtly raised from the single surface.
