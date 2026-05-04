---
version: alpha
name: Locomotive
description: This system projects an aura of intellectual rigor and understated luxury, using stark achromatic contrasts and precise typography. The visual mood is serious and art-directed, prioritizing content and a sense of curated exclusivity over overt flair. The absence of traditional buttons, shadows, or rounded corners emphasizes a flat, print-like aesthetic where content is king and interactive elements are subtly integrated into the typographic flow.
colors:
  pitch-black: "#000000"
  canvas-white: "#ffffff"
spacing:
  sectionGap: 150px
components:
  article-list:
    role: 
  work-card-seven-years:
    role: 
  hero-brand-badge:
    role: 
  navigation-link:
    role: Interactive text link
  ghost-button:
    role: Call to action with minimal visual footprint
  text-only-card:
    role: Content container for articles or items
  section-divider:
    role: Visual separation between content blocks
  headline-section:
    role: Prominent page titles or section headers
  article-list-item:
    role: Entry in a textual list of content
---

## Overview

**North Star:** monochrome editorial manifesto – where stark blocks of content meet fluid, almost invisible interactions.

This system projects an aura of intellectual rigor and understated luxury, using stark achromatic contrasts and precise typography. The visual mood is serious and art-directed, prioritizing content and a sense of curated exclusivity over overt flair. The absence of traditional buttons, shadows, or rounded corners emphasizes a flat, print-like aesthetic where content is king and interactive elements are subtly integrated into the typographic flow.

### Do's

- Prioritize text content by using HelveticaNowDisplay 400 for all functional text at 15px.
- Use LocomotiveNew 400 at 70px or 110px exclusively for prominent display headings, creating a strong editorial presence.
- Maintain an achromatic palette using only Pitch Black (#000000) and Canvas White (#ffffff) for all UI elements and text.
- Separate major content sections using a generous vertical padding of 150px, establishing a spacious layout.
- Design all interactive elements as text-based, without explicit button containers, borders, or background fills, relying solely on hover states and cursor changes for affordance.

### Don'ts

- Do not introduce any color other than Pitch Black (#000000) and Canvas White (#ffffff) into the primary UI.
- Avoid using box-shadows or any form of elevation for UI elements; maintain a flat, print-like aesthetic.
- Do not use border-radius; all corners should be sharp and 0px.
- Do not deviate from the specified font families; avoid system fonts or other custom typefaces.
- Never add explicit padding or background colors to buttons; let them exist purely as interactive text.

### Layout

The page primarily employs a max-width contained model for most content, implicitly centered. The hero section, however, is full-bleed, using a dramatic background image with centered, large typographic headlines. A strong vertical rhythm is established by generous section gaps (150px). Content is often arranged in large textual blocks or two-column layouts where text is juxtaposed with either negative space or a precisely placed image. Navigation is a simple top bar with a 'Let's talk' link, alongside a minimal footer. The site is text-dominant with key visuals dropped in strategically, giving a very spacious, almost sparse, feel.

### Imagery

The visual language is impactful and sparse. Hero sections feature high-contrast, moody photography with dramatic lighting and often a single muted color cast (e.g., the red-tinted image in the hero). Subsequent sections are text-heavy, with product/object photography (like the ring image) presented as isolated, high-fidelity crops on a black background, emphasizing the object's detail. Visuals are treated as art pieces within the layout, full-bleed at the top, or precisely contained for product showcases, never overlapping or masked with soft edges. Icons are kept to a minimum, likely outlined mono-color for navigational accents. The density is heavily text-dominant, with images serving as focal points rather than decorative elements.
