---
version: alpha
name: Andreas Antonsson
description: This design system conjures the atmosphere of a clandestine gallery at twilight, where stark, graphic information exists within the dramatic interplay of light and shadow, and hero imagery is presented like precious art under a spotlight. Typography drives much of the visual drama: a bold, wide-set serif announces key content with a theatrical flourish, while precise, functional sans-serif provides navigational clarity and textual detail. The overall impression is one of curated intensity, favoring strong visual statements over intricate details or soft transitions.
colors:
  void-black: "#000000"
  ghost-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.5
spacing:
  elementGap: 22px
components:
  project-card:
    role: 
  available-for-work-badge:
    role: 
  scroll-index-navigator:
    role: 
  navigation-link:
    role: Primary navigation elements in the header and footer.
  headline-project-title:
    role: Prominent, artistic titles for each project section.
  sub-heading-text:
    role: Descriptive text below main headlines or secondary information.
  body-text:
    role: General informative text, contextual details.
  invisible-link-button:
    role: Interactive elements with no visible background or border.
  circular-nav-button:
    role: Implicit interactive element for navigation (e.g., scroll indicator).
---

## Overview

**North Star:** Shadow Gallery, Spotlit Art. The website feels like stepping into a dark art gallery with carefully curated, dramatically lit pieces.

This design system conjures the atmosphere of a clandestine gallery at twilight, where stark, graphic information exists within the dramatic interplay of light and shadow, and hero imagery is presented like precious art under a spotlight. Typography drives much of the visual drama: a bold, wide-set serif announces key content with a theatrical flourish, while precise, functional sans-serif provides navigational clarity and textual detail. The overall impression is one of curated intensity, favoring strong visual statements over intricate details or soft transitions.

### Do's

- Do use Void Black (#000000) as the primary page background to contrast dramatically with content.
- Do use Ghost White (#ffffff) for all text and interactive elements to ensure high contrast and focal point.
- Do apply the Dahlia font at 144px weight 400 for all major project titles, emphasizing its wide, artistic character.
- Do use the Inter font for all navigational and body text, with 1.5 line-height for readability at smaller sizes.
- Do implement 9999px border-radius for any compact interactive tag that needs a pill-like shape.
- Do use no explicit padding or border for default interactive components like navigation links, letting text content define their visual footprint.

### Don'ts

- Don't introduce any background colors other than Void Black (#000000) or Ghost White (#ffffff) to maintain visual starkness.
- Don't use Inter for display headlines; reserve Dahlia for that specific, dramatic role.
- Don't apply shadows or elevated effects; achieve depth through bold typography and contrasting backgrounds.
- Don't use letter-spacing values other than normal for Inter font, maintaining its intended readability.
- Don't add borders to primary interactive elements; their clickable state is indicated by color contrast and inherent link styling.

### Layout

The page adopts a full-bleed, centered content model that maximizes visual impact. The overall layout is dark-themed, using a fixed Void Black background. The hero section for each project is a full-viewport image presented like a skewed artwork 'card' against this infinite black. Content sections, primarily for project titles and a sub-heading, are centrally stacked directly over these images. Navigation is a simple, high-contrast array of links (`Index`, `About`) in the top right. A minimal 'Available for work' area is anchored to the bottom left. The primary rhythm is a single-column, scrolling showcase of these dramatically presented projects, one after another, creating a sequential gallery experience.

### Imagery

The site uses photography as its primary visual medium, showcasing project work as full-bleed, high-resolution hero images. The images are presented at a slight, dramatic tilt, sometimes with subtle light rays filtering through, lending a cinematic and curated feel. They are contained within a defined viewport, acting as individual 'pieces' on the black canvas. No explicit masking or rounded corners are applied to the images; they retain sharp edges, focusing the attention on the content itself. The role of these visuals is primarily expressive and demonstrative, presenting the designer's work as artistic highlights, often with a moody or atmospheric treatment.
