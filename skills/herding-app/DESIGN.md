---
version: alpha
name: herding.app
description: This design system evokes a digital craftsman's workshop feel, with a muted dark palette and subtle elevation shifts creating a sense of depth and organization. The interplay of soft, almost invisible backgrounds with crisp white typography and geometric accents defines a precise yet approachable atmosphere. Rounded corners on interactive elements provide a gentle contrast to the otherwise stark, modular structure, hinting at user-friendliness within a powerful system.
colors:
  storm-slate: "#232320"
  deep-graphite: "#1c1c1a"
  ash-stone: "#2e2e2b"
  iron-oxide: "#35352f"
  zinc-gray: "#3e3e38"
  quartz-dust: "#45453"
  ghost-white: "#fffffe"
  silver-thread: "#a3a29c"
  whisper-gray: "#75746c"
  ember-white: "#fefeda0e"
  active-charcoal: "#7f7e77"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.56
    letterSpacing: -0.55px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: -0.7px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -1px
  heading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.12
    letterSpacing: -1.35px
  display:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.12
    letterSpacing: -2.25px
spacing:
  buttonRadius: 16px
  elementGap: 8px
  sectionGap: 48px
components:
  sign-up-log-in-button-group-with-cta:
    role: 
  how-it-works-steps-with-cta:
    role: 
  collect-content-types-feature-card:
    role: 
  primary-action-button:
    role: Interactive element
  text-link-button:
    role: Interactive element
  accent-call-to-action-button:
    role: Primary Call to Action
  pill-button:
    role: Contextual filter or tag
  information-card-level-1:
    role: Content container
  information-card-level-2:
    role: Nested content container
  feature-icon-card:
    role: Atomic feature display
---

## Overview

**North Star:** Graphite workshop under a soft spotlight. Surfaces are not black, but deep charcoal, illuminated by concentrated white text and a single vibrant highlight for interactive elements.

This design system evokes a digital craftsman's workshop feel, with a muted dark palette and subtle elevation shifts creating a sense of depth and organization. The interplay of soft, almost invisible backgrounds with crisp white typography and geometric accents defines a precise yet approachable atmosphere. Rounded corners on interactive elements provide a gentle contrast to the otherwise stark, modular structure, hinting at user-friendliness within a powerful system.

### Do's

- Use `Storm Slate` (#232320) as the foundational background for pages and large sections to ensure a consistent dark theme.
- Apply `Ghost White` (#fffffe) for all primary text, headings, and interactive elements to ensure readability against dark backgrounds.
- Maintain the Styrene font at weight 400 for all typography, adjusting size and line-height according to the type scale.
- Utilize 16px corner radius for most interactive buttons and 7.5px for content cards, establishing a consistent softening of rectangular forms.
- Apply `rgba(8, 9, 1, 0.08) 0px 56px 72px 0px inset` shadow for subtle internal depth on elevated card components.
- Employ `Ember White` (rgba(254, 254, 218, 0.055)) as a low-opacity background for secondary buttons, indicating interactivity without demanding attention.
- Use `9999px` radius exclusively for pill-shaped buttons and tags to create a distinctive, self-contained interactive element.

### Don'ts

- Do not introduce highly saturated colors for backgrounds or major UI elements; maintain the low-chroma dark palette.
- Avoid using drop shadows for elevation; rely on the subtle inset shadow and background color shifts (`Deep Graphite` vs `Ash Stone`) to indicate depth.
- Do not use multiple font families; all text must be Styrene 400.
- Avoid arbitrary padding or margin values; adhere strictly to the 4px base unit spacing scale (4px, 8px, 12px, 16px, 32px, 45px).
- Do not use pure black (#000000) for backgrounds; `Storm Slate` (#232320) is the darkest base color.
- Do not use plain rectangular buttons without corner radius; all interactive buttons should have at least 16px radius, or 9999px for pills.

### Layout

The layout is a max-width 1280px centered container, providing ample breathing room within the dark canvas. The hero section features a left-aligned, large headline, contrasted by right-aligned information cards. Content sections throughout the site are primarily modular, organized into distinct rectangular cards or panels. Grids are evident for feature displays (3-column) and interactive element arrangements. Vertical spacing between sections is generous (48px standard). The site employs a sticky top navigation bar with minimal elements, maintaining a focused user experience.

### Imagery

The visual language is dominantly UI and abstract. There are no photographs or complex illustrations. Product screenshots are contained within UI components, often at an angle, blending into the dark theme. Icons are monochromatic, filled `Ghost White` against dark backgrounds, with a clean, geometric style. The key visual element is a vibrant green-to-blue linear gradient used as a background or highlight in specific sections, providing a burst of digital energy against the muted dark interface. This gradient is treated as a contained accent, not a full-bleed element, emphasizing precision.

### Elevation

Elevation is achieved through subtle changes in background color and a primary 'inner shadow' approach, rather than traditional drop shadows. This creates a sense of depth and layered surfaces that feel integrated and precise, like components within a finely crafted instrument, without the visual weight of external shadows.
