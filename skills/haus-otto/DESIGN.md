---
version: alpha
name: Haus Otto
description: This system projects an aesthetic of stark minimalism and purposeful absence, like a gallery wall with a single, monumental exhibit. It leverages extreme contrast and sparse visual elements to emphasize a singular brand presence. The visual impact is created by the massive, centrally-aligned, uppercase sans-serif typography on an absolute white canvas, demanding full attention without clutter.
colors:
  absolute-white: "#ffffff"
  deep-black: "#000000"
  desert-ochre: "#af7653"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.15
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.16
  subheading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.23
  display:
    fontFamily: "system-ui"
    fontSize: 216px
    lineHeight: 1
    letterSpacing: -0.033px
spacing:
  buttonRadius: 0px
  elementGap: 4px
  sectionGap: 30px
components:
  cookie-consent-banner:
    role: 
  navigation-bar:
    role: 
  footer-meta-bar:
    role: 
  global-navigation-link:
    role: Primary site navigation
  main-display-headline:
    role: Brand identity, section titles
  cookie-consent-button-default:
    role: User interaction, consent actions
  cookie-consent-button-hover-inactive:
    role: User interaction, consent actions
  footer-link-meta-info:
    role: Secondary navigation and legal text
---

## Overview

**North Star:** Gallery Wall Monolith — A single, massive black typographic form commands attention against an expansive white background.

This system projects an aesthetic of stark minimalism and purposeful absence, like a gallery wall with a single, monumental exhibit. It leverages extreme contrast and sparse visual elements to emphasize a singular brand presence. The visual impact is created by the massive, centrally-aligned, uppercase sans-serif typography on an absolute white canvas, demanding full attention without clutter.

### Do's

- Prioritize extreme visual contrast: #000000 text on #ffffff backgrounds, or vice-versa, for all core content.
- Use Monument-Medium at a monumental scale (216px) with tight letter-spacing (-0.033em) for key brand or section headings, ensuring singular visual impact.
- Maintain a strict achromatic palette, introducing Desert Ochre (#af7653) only for minimal accentuation on extremely low-prominence elements.
- Employ the 4px base unit for all spacing, particularly in elemental gaps, using tokens like 3px, 4px, 5px, 8px, 12px, 20px, 30px.
- All interactive elements, including buttons, must appear as sharp, unrounded rectangles, reinforcing a precise and unembellished aesthetic.
- Implement the 13px Monument-Regular type for all body copy and navigation, maintaining consistency and an understated, informational tone.

### Don'ts

- Avoid decorative elements like shadows, gradients, or complex borders; the design relies on purity of form and stark contrast.
- Do not introduce additional saturated colors beyond the very limited use of Desert Ochre (#af7653); maintain the monochrome discipline.
- Never use rounded corners on any element; all shapes must be rectilinear, reflecting rigidity and structure.
- Refrain from using bold or heavy font weights; the visual weight is achieved through size and contrast, not typographic emphasis.
- Do not deviate from the specified tight letter-spacing for display typography or normal letter-spacing for body text; typographic precision is key.
- Avoid complex layouts or multi-column grids that would dilute the singular focus; prefer centered or directly aligned compositions.

### Layout

The page exhibits a full-bleed, unconstrained layout, meaning elements are not restricted by a maximum content width, though content generally appears centrally aligned or to the far edges. The hero section is dominated by a singularly massive, centered typographic element, covering most of the viewport. Section rhythm is sparse, primarily defined by vast expanses of white space separating minimal textual blocks. Content is arranged in stacked, centered blocks, with some elements (like cookie consent) pinned to the page bottom. Navigation is minimal, consisting of small text links at the top-left and bottom-right corners, not occupying a dedicated sticky header or sidebar.

### Imagery

The site uses no visible raster imagery or illustrations. Its visual language relies exclusively on typography and whitespace. The absence of images reinforces the stark, minimalist, and conceptual nature of the brand, directing focus entirely onto textual information and the brand's name as a monumental graphic element. Icons are also absent; interaction cues are purely textual (Yes, No, More, Year ↓).
