---
version: alpha
name: Champions4good
description: This design system conjures a vibrant, high-energy atmosphere through its daring color palette and bold typography. A deep, almost regal purple dominates as the primary background, punctuated by electric pink and sharp neon green accents. Type is a declarative, almost industrial statement, mixing a condensed, extra-bold display font with a more understated sans-serif for body text, creating a strong contrast between commanding headlines and informational support. Rectangular shapes are favored, with only subtle rounding, reinforcing a sense of precise, deliberate construction.
colors:
  royal-plum: "#23002b"
  hot-pink: "#e894ff"
  neon-green: "#93ffe4"
  sunburst-orange: "#ffac47"
  forest-shard: "#002629"
  espresso-chip: "#291900"
  ink-black: "#121212"
  pure-white: "#ffffff"
  graphite: "#333333"
  deep-plum: "#db99f7"
typography:
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 0.85
  heading:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 0.85
    letterSpacing: 0.005px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.1
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 317px
    lineHeight: 0.78
    letterSpacing: 0.008px
spacing:
  cardRadius: 14px
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 40px
components:
  join-cta-button-group:
    role: 
  feature-cards-triptych:
    role: 
  sound-toggle-navigation-pills:
    role: 
  ghost-navigation-link:
    role: Primary navigation links
  hero-text-button:
    role: Call to action in hero
  standard-card-forest-green:
    role: Content container
  standard-card-espresso-chip:
    role: Content container
  standard-card-hot-pink:
    role: Content container
  sound-toggle-outline:
    role: Toggle button for sound
---

## Overview

**North Star:** Electric purple, condensed statements. A punchy, digital-neon aesthetic on a dark, rich canvas.

This design system conjures a vibrant, high-energy atmosphere through its daring color palette and bold typography. A deep, almost regal purple dominates as the primary background, punctuated by electric pink and sharp neon green accents. Type is a declarative, almost industrial statement, mixing a condensed, extra-bold display font with a more understated sans-serif for body text, creating a strong contrast between commanding headlines and informational support. Rectangular shapes are favored, with only subtle rounding, reinforcing a sense of precise, deliberate construction.

### Do's

- Prioritize Druk Condensed Super Desktop for all headlines and marketing text, leveraging its condensed forms and ultra-heavy weights for maximum impact.
- Use Royal Plum (#23002b) as the dominant background color for most sections, establishing the primary visual identity.
- Accent interactive elements and key information with Hot Pink (#e894ff) for high visibility and vibrant contrast.
- Maintain a tight, modern aesthetic by applying -0.022em letter spacing to Neue Montreal text.
- Apply 14px border radius to all card-like containers, establishing a consistent subtle softness against the generally sharp aesthetic.
- Ensure textual contrast: use Pure White (#ffffff) text on Royal Plum (#23002b) backgrounds and Ink Black (#121212) on Pure White (#ffffff) sections.
- Utilize specific background colors (Forest Shard #002629, Espresso Chip #291900) for distinct content blocks or cards to create visual segmentation without relying on shadows.

### Don'ts

- Avoid using box shadows for elevation; define hierarchy and distinction purely through color and border radius variations.
- Do not introduce soft, pasty, or muted colors; maintain the high vibrance and contrast of the established palette.
- Refrain from using rounded borders on buttons or primary CTA elements; maintain sharp, rectangular framing.
- Do not break up sections with subtle dividers or thin lines; instead, use full-bleed background color changes between content blocks.
- Avoid generic system fonts for prominent text; Neue Montreal and Druk Condensed Super Desktop define the typographic identity.
- Do not use letter spacing values for Druk Condensed Super Desktop below 0.005em, as this will hinder readability.

### Layout

The page primarily employs a full-bleed layout, where background colors extend to the edges of the viewport. Content appears to be centered within this full-bleed canvas. The hero section is characterized by massive, centered display typography (Druk Condensed Super Desktop) over a Royal Plum background, creating an immediate, bold statement. Sections are defined by alternating full-bleed background colors (e.g., Royal Plum, then a lighter color in the secondary screenshot), creating a rhythmic flow down the page without explicit dividers. Content arrangement within these sections is fluid, often featuring large stacked text blocks. There's a subtle grid for some feature blocks, such as the colored cards for Forest Shard, Espresso Chip, and Hot Pink, which have a 14px border radius but no padding on the card itself, suggesting padding is applied to internal content.

### Imagery

The site's visual language is minimal but impactful, focusing on outlined vector graphics. These are primarily monochrome human silhouettes, acting as abstract representations of 'champions.' They are used decoratively and iconographically rather than photographically or illustratively. The treatment is clean and isolated, providing visual cues without adding photographic noise. The density is low, making the typography and color the primary visual drivers, with icons serving as supporting visual metaphor.
