---
version: alpha
name: Max Yinger
description: This design system evokes a sense of digital craftsmanship, like a custom-built terminal for a specialized task. The aesthetic leans into a high-contrast dark theme with stark white, monospace-inspired typography, creating an atmosphere of precision and focused utility. Punctuation marks and symbols are used as visual elements, giving the textual content a coded, programmatic feel. Slight rounding on interactive elements prevents harshness, while the overall minimal approach keeps the focus on core information and interactive 3D elements.
colors:
  basalt-black: "#12130f"
  quartz-white: "#e4dfda"
  flint-gray: "#3c3c38"
spacing:
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 64px
components:
  social-link-pills:
    role: 
  local-time-bio-block:
    role: 
  stats-metadata-badge-row:
    role: 
  pill-ghost-button:
    role: Interactive elements, external links.
---

## Overview

**North Star:** Terminal aesthetic, crafted in code.

This design system evokes a sense of digital craftsmanship, like a custom-built terminal for a specialized task. The aesthetic leans into a high-contrast dark theme with stark white, monospace-inspired typography, creating an atmosphere of precision and focused utility. Punctuation marks and symbols are used as visual elements, giving the textual content a coded, programmatic feel. Slight rounding on interactive elements prevents harshness, while the overall minimal approach keeps the focus on core information and interactive 3D elements.

### Do's

- Prioritize `Quartz White` (#e4dfda) for all primary text content against `Basalt Black` (#12130f) backgrounds to maintain high contrast.
- Use `Inline VF` (or 'IBM Plex Mono') at 80px, weight 400, for primary display headings, without letter-spacing adjustments.
- Apply 9999px border-radius to all interactive buttons for a consistent pill shape.
- Utilize Arbeit Technik (or 'JetBrains Mono') for body text and labels, with a -0.05em letter-spacing at 12px.
- Maintain a compact spacing rhythm, using multiples of 4px for element gaps and button padding.
- When introducing subtle borders, use 1px `Flint Gray` (#3c3c38) for minimal visual separation.

### Don'ts

- Avoid using highly saturated colors; the system relies on achromatic tones and subtle accents.
- Do not deviate from the established font families; custom fonts 'Inline VF', 'Arbeit Contrast', and 'Arbeit Technik' are core to the brand identity.
- Do not use generic square corners for interactive elements; buttons require a 9999px radius.
- Do not introduce heavy box-shadows or complex elevation; the design's depth comes from content arrangement and subtle background changes.
- Do not vary line-height aggressively; stick to the specified 0.80 for display, 1.13-1.25 for headings/body.
- Do not add extra padding around sections beyond the 64px `sectionGap` unless for specific content needs, to preserve density.

### Layout

The page is a full-bleed dark canvas with content largely left-aligned and centrally focused. There is no explicit max-width for the main content block, giving a spacious, open feel. The hero section prominently features a large, interactive 3D graphic. Text is structured in distinct blocks with generous vertical spacing (64px `sectionGap`). Social links are stacked vertically on the right, providing a clear access point. The layout gives ample breathing room, highlighting individual content elements rather than dense information.

### Imagery

The site uses stylized 3D rendered abstract blocks in a soft pink hue, which serve as decorative elements. These blocks are positioned interactively, suggesting a focus on real-time 3D and interaction. They are contained and isolated, not bleeding into the UI, acting as dynamic decorative accents rather than content-carrying visuals. The style is geometric and polished, with a soft, almost glassy texture, contrasting with the stark typography. Icons appear minimal if at all, limited to social media links which are purely text-based within pill buttons.
