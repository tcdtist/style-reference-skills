---
version: alpha
name: Augen Pro
description: This system projects an aura of understated precision and future-forward serenity, akin to a meticulously designed piece of advanced technology. The stark, high-contrast monochrome palette of near-black text on near-white surfaces emphasizes product clarity and intellectual rigor. A singular vivid blue accent hue is reserved exclusively for interactive elements, guiding user focus with subtle distinction rather than overt visual noise. Minimalist typography, combining readability with a touch of modern sophistication, reinforces a sense of controlled innovation.
colors:
  midnight-ink: "#0f1012"
  ghost-white: "#f2f2f4"
  canvas: "#fdfdfd"
  skyline-gray: "#868788"
  slate-comment: "#8f8f8f"
  deep-graphite: "#020201"
  future-blue: "#0071e3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
    letterSpacing: -0.2px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.36px
  display:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.2
    letterSpacing: -0.54px
spacing:
  buttonRadius: 10px
  elementGap: 6px
  sectionGap: 94px
components:
  explore-tag-pills:
    role: 
  announcement-banner:
    role: 
  progress-section-card:
    role: 
  ghost-button:
    role: Call to action with minimal visual emphasis
  pill-tag-button:
    role: Top navigation and filtering options
  search-input-button:
    role: Primary search trigger in header
  nav-link:
    role: Primary navigation links
---

## Overview

**North Star:** Architectural Blueprint on White Marble. Every element is immaculately placed against a pristine, bright background, creating a sense of technical elegance.

This system projects an aura of understated precision and future-forward serenity, akin to a meticulously designed piece of advanced technology. The stark, high-contrast monochrome palette of near-black text on near-white surfaces emphasizes product clarity and intellectual rigor. A singular vivid blue accent hue is reserved exclusively for interactive elements, guiding user focus with subtle distinction rather than overt visual noise. Minimalist typography, combining readability with a touch of modern sophistication, reinforces a sense of controlled innovation.

### Do's

- Use Ghost White (#f2f2f4) as the primary background for most sections to maintain a bright, expansive canvas.
- Reserve Future Blue (#0071e3) strictly for interactive states, links, and primary call-to-action elements.
- Apply PP Neue Montreal weight 350 for headlines and larger text where a lighter, more refined feel is desired.
- Implement a default letter-spacing of -0.0200em for all PP Neue Montreal text to ensure a tight, modern aesthetic.
- Utilize 10px border radius for contained interactive elements like navigation tags, providing a soft touch consistent with the Pill Tag Button.
- Employ a base spacing of 6px for element gaps to maintain visual separation without clutter.
- Ensure section padding consistently uses the larger `sectionGap` of 94px to create generous vertical breathing room.

### Don'ts

- Avoid using chromatic colors other than Future Blue (#0071e3) to maintain the minimalist and precise aesthetic.
- Do not introduce strong drop shadows; the design relies on stark contrast and subtle background shifts for hierarchy.
- Do not vary body text weights or families; all continuous text should adhere to PP Neue Montreal weight 400 for consistency.
- Refrain from using excessively large or bold typography; the system prioritizes restraint and clarity over visual shouting.
- Avoid cluttering layouts; adhere to spacious element gaps and section padding to preserve an uncluttered, architectural feel.
- Do not use heavily saturated imagery or illustrations; imagery should align with the sparse, sophisticated visual tone.

### Layout

The overarching layout is full-bleed, but with content primarily centered within an implied maximum width, creating a spacious and balanced feel. The hero section features a large, dramatic central image on a full-viewport white background, with minimal, centered text overlays. Subsequent sections alternate between light and dark backgrounds (Ghost White and near-black), providing clear visual segmentation. Content arrangement often utilizes a centered stack or simple two-column structures with ample negative space. Navigation is a sticky top bar with subtly styled pill buttons, reinforcing functional precision.

### Imagery

The site uses a singular, striking hero image: a spectral, almost glowing human profile desaturated and soft-focused, emerging from a pure white background. This treatment positions the human element within a high-tech context, emphasizing 'humanware'. Beyond the hero, imagery is sparse, consisting primarily of minimalist icons, often in Midnight Ink or Future Blue, and implied product visuals that integrate seamlessly with the UI, rather than standalone photographs or complex illustrations. The focus is on abstraction and integration, not literal representation or decorative elements.
