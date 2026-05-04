---
version: alpha
name: SOMETHI𝔑G ELSE
description: SOMETHING ELSE operates with a minimalist graphic studio aesthetic: stark white planes provide an infinite canvas for precise typography and monochromatic design elements. The visual system emphasizes negative space, allowing content to breathe with high contrast and intentional visual pauses. Typography serves as the primary decorative and informational element, with a distinctive serif for branding titles and a clean sans-serif for functional UI. The overall impression is one of restrained confidence and clarity, prioritizing content over elaborate UI components.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
spacing:
  elementGap: 13px
  sectionGap: 48px
components:
  navigation-link:
    role: Top-level navigation and footer links
  block-content-wrapper:
    role: Primary container for imagery and textual content
  title-subtitle-stack:
    role: Brand and project identity displayed prominently
  project-description-text:
    role: Detailed textual descriptions for portfolio items
  footer-contact-link:
    role: Email contact address in the footer
---

## Overview

**North Star:** Gallery Wall Clarity — sharp, focused elements on an austere white surface, with text as art.

SOMETHING ELSE operates with a minimalist graphic studio aesthetic: stark white planes provide an infinite canvas for precise typography and monochromatic design elements. The visual system emphasizes negative space, allowing content to breathe with high contrast and intentional visual pauses. Typography serves as the primary decorative and informational element, with a distinctive serif for branding titles and a clean sans-serif for functional UI. The overall impression is one of restrained confidence and clarity, prioritizing content over elaborate UI components.

### Do's

- Prioritize Canvas White (#ffffff) as the dominant background, ensuring ample negative space around all elements.
- Use Ink Black (#000000) for all primary text and UI borders to maintain high contrast and graphic clarity.
- Employ 'Self Modern Book' (or Lora) for all descriptive text, captions, and brand-specific titles at 13px with varying line heights (1.6 to 1.8).
- Apply '-apple-system' (or Inter) for all functional UI elements, navigation, and sparse system text at 15px, weight 400.
- Maintain a clear pageMaxWidth of 1200px for central content, framing it with generous side margins.
- Use an elementGap of 13px for subtle spacing between related items within a block and 19px for internal padding of content sections.
- Avoid decorative borders or shadows on content blocks; elevation is created through spacing and content framing.

### Don'ts

- Do not introduce additional saturated colors; the palette is strictly achromatic to maintain a graphic, gallery-like feel.
- Do not use heavy shadows or gradients; the design relies on flat surfaces and high contrast, not dimensional realism.
- Avoid dense, wall-to-wall layouts; negative space is a key component of visual rhythm.
- Do not use generic system fonts for prominent display text that should have character; embrace the serif 'Self Modern Book' for personality.
- Do not deviate from the defined letter spacing for display texts, which is 'normal', indicating no custom tracking.
- Avoid varying border radii; all corners should remain sharp and angular (0px radius) to reinforce the graphic aesthetic.

### Layout

The page adheres to a centered, max-width contained layout (approximately 1200px) with generous white space on either side. The header is minimal, featuring the brand name and navigation links in opposing corners. Content sections, such as project showcases, appear as large, self-contained blocks centered on the page. Each project block typically comprises a large image or graphic composition followed by a concise textual description. There's a consistent vertical rhythm of spacing between the primary content blocks and the footer, creating distinct visual pauses. The footer is also minimal, containing only copyright information and contact links, mirroring the sparse header.

### Imagery

The site's visual language is dominated by contained, focused graphic compositions or singular pieces of creative work. Imagery takes the form of artwork or branding examples, always presented within defined bounding boxes on a white canvas. There is an absence of lifestyle photography or complex illustrations; the imagery itself is the content, acting as a visual artifact. Icons are minimal, represented by simple single-color symbols (e.g. '@' for contact). The role of imagery is primarily to showcase portfolio work, serving as the central focus of each project entry. Visually, it is balanced, allowing the work to speak for itself without heavy surrounding graphics.
