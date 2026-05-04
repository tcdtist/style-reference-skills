---
version: alpha
name: Rogie King
description: Rogie's personal site uses a warm, vintage digital aesthetic. Information is presented through structured lists and subtly outlined elements on a light parchment-like background. Typography is compact and precise, with distinct color accents highlighting interactive elements and key information, creating a personal yet organized feel. Custom icon borders and subtle gradients add an expressive, handcrafted touch.
colors:
  parchment: "#ededed"
  graphite: "#101010"
  mist: "#666666"
  cloud: "#999999"
  ghost-white: "#ffffff"
  amber-dust: "#dabfa6"
  clay-ochre: "#cebfb1"
  forest-green: "#b9fd80"
  terracotta: "#895d36"
  deepwater-blue: "#00a2c2"
  firebrick-red: "#ed2720"
  blush-pink: "#f67777"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
spacing:
  elementGap: 8px
  sectionGap: 32px
components:
  project-list-item:
    role: Organized display of project entries with year details.
  segmented-input:
    role: Stylized input or tag with rounded corners for visual distinction.
  accent-outlined-link-deepwater-blue:
    role: Interactive text link, drawing attention with an outlined style.
  accent-outlined-link-firebrick-red:
    role: Interactive text link, drawing strong attention for sensitive or key terms.
  subtle-text-input:
    role: Neutral input field for standard data entry.
---

## Overview

**North Star:** Warm parchment memoir

Rogie's personal site uses a warm, vintage digital aesthetic. Information is presented through structured lists and subtly outlined elements on a light parchment-like background. Typography is compact and precise, with distinct color accents highlighting interactive elements and key information, creating a personal yet organized feel. Custom icon borders and subtle gradients add an expressive, handcrafted touch.

### Do's

- Use Parchment (#ededed) as the primary page background.
- Apply Graphite (#101010) for main headings and interactive text to ensure strong contrast.
- Emphasize critical links or terms with Firebrick Red (#ed2720) or Deepwater Blue (#00a2c2) using the 'isg' font and outlined style.
- Maintain comfortable line spacing with Inter at 1.45 for body text and 1.20 for lists and shorter content.
- Structure content within a 400px max-width container, centered on the page.
- Separate primary sections with a 32px vertical gap.
- Use 8px radius for interactive elements and 40px radius for input fields to differentiate their feel.

### Don'ts

- Avoid using highly saturated backgrounds for large content areas; reserve them for small accent callouts like Blush Pink (#f67777).
- Do not deviate from the Inter and isg font families; generic system fonts will conflict with the precise letter-spacing.
- Do not introduce complex, multi-level shadows; the singular soft inset shadow for inputs is the only significant elevation.
- Avoid large, uncontained images; all visuals should be tightly integrated, often with borders or within structured components.
- Do not create filled buttons or primary actions with backgrounds; interactive states are conveyed through text color changes and subtle borders.
- Do not use letter-spacing values other than 0.10em for Inter and isg fonts for consistency.

### Layout

The page model is contained, centered within a max-width of 400px, which creates a focused, column-like reading experience. The hero consists of a centered text block with a prominent headline and supporting paragraphs. Sections are generally stacked vertically with a consistent 32px gap, often featuring a main heading followed by structured lists or content blocks. There are no alternating light/dark bands; the background remains consistently Parchment. Content arrangement is primarily vertical stacking of text and lists, with some exceptions like the movie cover carousel. Grid usage is visible in the movie flick display, though specific column counts are implied by image arrangement rather than explicit data. The layout is comfortable and intentionally uncrowded, allowing each content block to breathe. Navigation is minimal, likely a sticky header not fully visible here.

### Imagery

Imagery is minimal and contextual, focused on clear, contained product shots or content previews (e.g., movie covers). Photography and illustrations are used as small, framed elements rather than full-bleed backgrounds. Corners are generally sharp, though some accent elements may feature rounded forms. Icons are typically monoline and subtle, often outlined in brand colors to provide functional cues without visual dominance. The role of imagery is primarily explanatory and decorative, providing visual breaks and context rather than leading the narrative. Visual density is text-dominant, with images serving as carefully placed punctuation.
