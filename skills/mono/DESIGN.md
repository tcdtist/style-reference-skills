---
version: alpha
name: mono
description: MONO X7 employs a stark, almost architectural aesthetic, reminiscent of an artist's canvas or technical drawing. The visual system is dominated by high contrast black text and lines on a pristine white background, often utilizing a grid-like structure. Typography is precise and highly customized, with distinct weight and letter-spacing variations that dictate hierarchy through subtle means. Interactions are signaled not with color, but by the presence or absence of thin, sharp borders, giving components a planar rather than volumetric feel.
colors:
  canvas-white: "#ffffff"
  ink-black: "#292929"
  deep-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.18
    letterSpacing: 1.2px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.27
    letterSpacing: -0.5px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.64px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.34
    letterSpacing: -0.8px
  display:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.34
    letterSpacing: -0.86px
spacing:
  elementGap: 8px
  sectionGap: 40px
components:
  outline-button:
    role: Primary and secondary actions with minimal visual weight.
  minimal-input-field:
    role: Standard text input fields.
  navigation-link:
    role: Top-level navigation items and language selectors.
  section-heading:
    role: Major content section titles.
---

## Overview

**North Star:** Architectural grid on white

MONO X7 employs a stark, almost architectural aesthetic, reminiscent of an artist's canvas or technical drawing. The visual system is dominated by high contrast black text and lines on a pristine white background, often utilizing a grid-like structure. Typography is precise and highly customized, with distinct weight and letter-spacing variations that dictate hierarchy through subtle means. Interactions are signaled not with color, but by the presence or absence of thin, sharp borders, giving components a planar rather than volumetric feel.

### Do's

- Maintain a clear, high-contrast between Ink Black (#292929) text/lines and Canvas White (#ffffff) backgrounds.
- Utilize 0px border-radius for all interactive elements and containers to maintain the precise, angular aesthetic.
- Apply positive letter-spacing (0.1em or 0.2em) from S-Condensed for navigation, tags, and small labels to distinguish them from body text.
- Use thin (1px) Ink Black (#292929) borders as the primary visual cue for interactive elements and content divisions.
- Structure layouts using visible grid lines or strong horizontal/vertical divisions rather than relying on card elevation or soft shadows.
- Emphasize content hierarchy through variations in font-family, weight, and letter-spacing rather than relying on color or large size differences.
- For buttons, use transparent backgrounds with Ink Black (#292929) text and borders, with 0px vertical padding and 20px horizontal padding.

### Don'ts

- Avoid using any color other than Ink Black (#292929), Deep Black (#000000), or Canvas White (#ffffff) for primary UI elements.
- Do not introduce rounded corners or soft shadows; all elements should adhere to a sharp, planar aesthetic.
- Do not use generic system fonts for headings or key interface elements; always select from the specified custom typography. 
- Avoid large and complex hero components; opt for minimal, high-contrast textual statements or product visuals on a Canvas White (#ffffff) background.
- Do not use subtle gray text for functional elements; all text, save for contextual accents, should be Ink Black for maximum impact.
- Do not use excessive padding or element gaps; maintain an efficient information density with 8px as a common element gap and 20px for card padding.
- Do not design buttons with solid background fills; all buttons should be ghosted or outlined.

### Layout

The page uses a full-bleed layout, particularly for the main canvas, but frequently employs strong vertical and horizontal dividers to create distinct, modular content blocks. The hero section often features a large, singular product image or graphic, sometimes with overlay text, defining a clear focal point. Content progresses with a mix of stacked, centered headlines and text blocks, alongside two-column layouts where text and visuals alternate. A strong underlying grid is evident, with elements often snapping to these implicit lines. Vertical rhythm is established through consistent spacing, and sections can alternate between pure white and light gray backgrounds for differentiation. Navigation is minimalist, adhering to a fixed top bar on larger screens with simple text links.

### Imagery

Imagery primarily consists of product photography, abstract graphics, and occasional textual illustrations. Product photos are tight crops, often showcasing the hardware in an abstract or deconstructed manner, with a heavy emphasis on geometric patterns and technical diagrams. Illustrations are abstract, using a monochromatic palette to match the UI, with strong geometric shapes, dots, and lines (e.g., printed circuit board patterns). Icons are minimalist, outlined, and monochromatic, with a fine stroke weight. The role of imagery is primarily decorative atmosphere and product showcase, with a relatively low density compared to text-heavy sections. Images are typically contained within defined areas, often bordered by the same thin black lines as other UI elements.
