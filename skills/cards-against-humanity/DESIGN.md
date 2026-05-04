---
version: alpha
name: Cards Against Humanity
description: Cards Against Humanity Climate Catastrophe Pack projects an urgent, confrontational aesthetic: stark black and off-white surfaces, punctuated by a vibrant, almost aggressive red, and an eclectic, distressed display typography. The design leans into a deliberately unpolished, DIY feel, using basic geometric shapes, high-contrast text, and a loose rhythm of concentric circles and scattered warning icons. This visual system aims to grab attention and provoke, mirroring the brand's irreverent tone with bold, no-nonsense presentation.
colors:
  catastrophe-red: "#ff4034"
  pitch-black: "#000000"
  aged-paper: "#ebe4d8"
  charcoal-haze: "#c3bdb3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.29
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.27
  subheading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.29
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 202px
    lineHeight: 0.82
spacing:
  cardRadius: 2520px
  buttonRadius: 80px
  elementGap: 20px
  sectionGap: 30px
components:
  rounded-primary-button:
    role: Call to action
  elongated-primary-button:
    role: Large call to action
  pill-outline-button:
    role: Subtle action
  circular-card:
    role: Decorative content container
  input-field:
    role: User entry field
---

## Overview

**North Star:** Irreverent, Urgent Distress: High-contrast black and off-white with a jarring red accent, like a bold, distressed propaganda poster.

Cards Against Humanity Climate Catastrophe Pack projects an urgent, confrontational aesthetic: stark black and off-white surfaces, punctuated by a vibrant, almost aggressive red, and an eclectic, distressed display typography. The design leans into a deliberately unpolished, DIY feel, using basic geometric shapes, high-contrast text, and a loose rhythm of concentric circles and scattered warning icons. This visual system aims to grab attention and provoke, mirroring the brand's irreverent tone with bold, no-nonsense presentation.

### Do's

- Use Spektra for all headlines and impactful short text to leverage its unique character, prioritizing visual impact over conventional readability.
- Maintain a stark contrast by pairing Pitch Black (#000000) for backgrounds and text with Aged Paper (#ebe4d8) for supporting surfaces and inverted text.
- Implement Catastrophe Red (#ff4034) sparingly, primarily as an urgent accent for borders, interactive elements, or key text, emphasizing its high saturation.
- Apply extremely high border-radii (80px, 120px, 48px) to buttons to convey a playful, almost blob-like or pill aesthetic.
- Utilize Helvetica Neue LT for all body copy and instructional text, ensuring clarity and contrast against the expressive display font.
- Maintain a spacious rhythm between content blocks with a section gap of 30px to prevent visual clutter and allow design elements breathing room.

### Don'ts

- Avoid using gradients or subtle shadows, as the system relies on high contrast and flat surfaces, except for the subtle Charcoal Haze button shadow.
- Do not introduce additional color hues; restrict the palette strictly to Pitch Black, Aged Paper, and Catastrophe Red to maintain visual integrity.
- Refrain from complex component structures; components should be simple, high-contrast shapes, often with extreme roundedness.
- Do not use subtle spacing values; prefer clear, distinct gaps like 20px for elements and 30px for sections to reinforce the bold aesthetic.
- Avoid decorative imagery that dilutes the stark, graphic, and text-heavy nature of the design.
- Do not use traditional, corporate typography or unrounded shapes, which would contradict the brand's irreverent and distressed visual language.

### Layout

The page primarily uses a full-bleed layout, particularly for hero and atmospheric sections, allowing large graphic elements to span the full viewport width. Content sections are centrally aligned, but with a flexible max-width, allowing for long-form text blocks on an Aged Paper background. The hero section prominently features a centered, oversized headline (Spektra font) over a dark, graphically rich background. Section rhythm is irregular, creating an almost chaotic, collage-like feel, underscored by a dense, circular graphic pattern rather than consistent spacing. Content stacks are generally simple, centered text blocks, occasionally broken by decorative elements.

### Imagery

The site uses a mix of scattered, minimalistic, and somewhat distressed iconography/geometric shapes (concentric red circles, abstract warning symbols) for decorative atmosphere, rather than photography or complex illustrations. These are often outlined in Catastrophe Red. There's also striking, full-bleed imagery like the 'flames' graphic, which serves as a decorative, high-impact background element, purely for atmosphere. Imagery is dense in selective areas to create visual intensity, contrasting with text-dominant sections.
