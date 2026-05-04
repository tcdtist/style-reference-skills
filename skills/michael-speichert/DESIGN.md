---
version: alpha
name: Michael Speichert
description: Michael Speichert's design system presents a stark, high-contrast experience, primarily leveraging monochromatic tones with an occasional deep indigo accent. Typography is central, using large, bold typefaces and precise letter-spacing to create focal points. The visual language emphasizes graphic impact over detailed imagery, with minimal adornment or complex components, focusing instead on strong textual communication.
colors:
  absolute-zero: "#000000"
  spectral-white: "#ffffff"
  midnight-indigo: "#4200ff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.5
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.06
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.06
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 170px
    lineHeight: 1
    letterSpacing: -0.03px
spacing:
  elementGap: 8px
  sectionGap: 50-60px
components:
  ghost-button:
    role: Interactive elements for navigation or secondary actions.
---

## Overview

**North Star:** Black canvas, typographic drama

Michael Speichert's design system presents a stark, high-contrast experience, primarily leveraging monochromatic tones with an occasional deep indigo accent. Typography is central, using large, bold typefaces and precise letter-spacing to create focal points. The visual language emphasizes graphic impact over detailed imagery, with minimal adornment or complex components, focusing instead on strong textual communication.

### Do's

- Prioritize text as the primary visual element; use typography to create hierarchy and visual interest.
- Maintain high contrast by pairing Spectral White (#ffffff) text with Absolute Zero (#000000) backgrounds.
- Use Plaid font for all prominent headlines and expressive text, with a fontWeight of 300.
- Apply negative letter-spacing for Plaid headlines as detected: -0.0300em at 170px, -0.0200em at 60px, -0.0100em at 54px.
- Utilize Midnight Indigo (#4200ff) sparingly as a background for sections requiring a distinct thematic shift.
- Ensure interactive elements like links and ghost buttons use Spectral White (#ffffff) text and borders on dark backgrounds.
- Use a default border-radius of 4px for any subtle container elements, but 0px for text links and buttons.

### Don'ts

- Avoid decorative imagery; if imagery is necessary, prioritize clean, functional representations or abstract graphics.
- Do not use complex shadow systems; elevation should be achieved through color shifts or typographic hierarchy.
- Refrain from using strong, saturated colors beyond Midnight Indigo; the palette is intentionally limited.
- Do not introduce rounded corners on primary interactive elements or text links; keep them sharp.
- Avoid dense, feature-heavy layouts; prioritize spaciousness and clear information architecture.
- Do not use default browser link styles; all links should adhere to Spectral White (#ffffff) text on dark backgrounds.
- Do not apply padding to ghost buttons; let the text content dictate sizing.

### Layout

The page primarily uses a full-bleed layout without a maximum content width, allowing textual elements to span the viewport or be intentionally constrained for visual impact. The hero section leverages large, rotated text directly on a black canvas to establish high-impact typographic drama. Sections typically follow a consistent vertical rhythm, with ample spacing (50-60px section gap) between blocks. Content arrangement is primarily stacked or uses a loose grid for client logos, centered or left-aligned. Navigation is minimal, implied through discrete text links.

### Imagery

The visual system relies heavily on typography as imagery. The few graphical elements are stark, high-contrast compositions of text on solid backgrounds. There are no photographs, illustrations, or product shots. Icons are not a prominent feature, and the overall density is text-dominant, with graphical elements (text itself) used for decorative atmosphere and branding.
