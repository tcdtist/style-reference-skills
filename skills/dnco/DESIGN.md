---
version: alpha
name: DNCO
description: DNCO uses a bold, high-contrast visual language reminiscent of abstract expressionism. Large-scale typography on stark backgrounds defines a significant portion of the primary messaging. The palette is intentionally minimal, relying on black, white, and a single light gray for structure, with interactivity indicated subtly through borders and hover states. Components are lightweight and direct, ensuring that content, especially large text, remains the focal point.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  concrete-gray: "#e5e7eb"
  muted-ash: "#a3a3a3"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.56
    letterSpacing: -0.4px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.45px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.33
    letterSpacing: -0.55px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -1.8px
spacing:
  buttonRadius: 9999px
  elementGap: 24px
  sectionGap: 24px
components:
  navigation-link:
    role: Main navigation and footer links
  filter-button-text-only:
    role: Category/filter selection
  outlined-filter-button:
    role: Categorization or filtering, visually separating options
  body-text-link:
    role: Contextual navigation or references within body content
  hero-headline:
    role: Page-level and major section headlines
  section-divider:
    role: Visual separation of content blocks
---

## Overview

**North Star:** Graphic exhibition space.

DNCO uses a bold, high-contrast visual language reminiscent of abstract expressionism. Large-scale typography on stark backgrounds defines a significant portion of the primary messaging. The palette is intentionally minimal, relying on black, white, and a single light gray for structure, with interactivity indicated subtly through borders and hover states. Components are lightweight and direct, ensuring that content, especially large text, remains the focal point.

### Do's

- Prioritize Neue Haas Unica Pro typography at 72px with -0.0250em letter-spacing for large headlines, utilizing Midnight Ink on Canvas White or vice versa for maximum impact.
- Use a purely achromatic palette of Midnight Ink (#000000), Canvas White (#ffffff), and Concrete Gray (#e5e7eb) for all UI elements to maintain a stark, graphic aesthetic.
- Employ Concrete Gray (#e5e7eb) for all subtle borders and dividers, typically at 1px thickness, to define boundaries without adding visual weight.
- Ensure interactive elements like buttons and navigation links transition with a duration of 0.3s and an `ease` timing function.
- Maintain minimal padding on interactive text elements (e.g., 0px for text-only buttons in the component variant example) to keep them lightweight.
- Use Muted Ash (#a3a3a3) exclusively for secondary or informational text, never for primary actions or main headings.
- Apply 9999px border-radius for all small, interactive elements like tags and navigation items, creating a 'pill' shape.

### Don'ts

- Do not introduce additional colors beyond Midnight Ink, Canvas White, Concrete Gray, and Muted Ash for functional UI elements.
- Avoid using drop shadows or complex gradients; the design relies on flat surfaces and high contrast.
- Do not deviate from the Neue Haas Unica Pro font family or its specified letter-spacing for any text content.
- Do not add heavy backgrounds or large fills to interactive elements; maintain a lightweight, often border-only or text-only approach.
- Do not vary font weights; consistency with 400 weight across all text is key to the system's character.
- Avoid excessive spacing between UI elements or sections; aim for a 'comfortable' density as defined by the elementGap and sectionGap.
- Do not use generic system default link colors; ensure all link text uses either Midnight Ink, Canvas White, or Muted Ash.

### Layout

The page model alternates between full-bleed sections and max-width contained sections, with a generally centered content approach. The hero uses a text-dominant, large-scale headline against a black background. Section rhythm is established by alternating Midnight Ink and Canvas White backgrounds, with concrete gray borders often serving as subtler dividers. Content is frequently arranged in a stacked, centered manner for headlines and subtext, and then transitions to a multi-column grid for project showcases where images are primary. Navigation is a minimal top-right bar on a white background, becoming white text on black in the hero.

### Imagery

The site uses product photography that is contained within rectangular frames, often full-bleed against sections of the page. The images are high-quality, often featuring people interacting with 'place brands' or architectural contexts, emphasizing lifestyle and experience. There's a mix of candid and staged photography, treated with natural colors, avoiding filters or heavy stylization. Imagery serves to showcase project examples and add visual richness without overwhelming the stark UI.
