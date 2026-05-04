---
version: alpha
name: Fielddaysound
description: Fielddaysound's visual identity feels like a minimalist gallery space at midnight – stark, confident, and punctuated by unexpected vibrancy. The dominant deep charcoal (#131313) paired with bright magenta accent (#fb5eff) establishes a high-contrast, almost electric atmosphere without relying on full black. Typography is oversized and deliberately sparse, creating a sense of dramatic scale, while subtle spacing and lack of overt decoration prioritize content as art.
colors:
  deep-charcoal: "#131313"
  pure-black: "#000000"
  canvas-white: "#ffffff"
  soft-gray: "#edece8"
  electric-magenta: "#fb5eff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 180px
    lineHeight: 1.79
  display-lg:
    fontFamily: "system-ui"
    fontSize: 190px
    lineHeight: 1.89
spacing:
  elementGap: 40px
components:
  display-stat-block:
    role: 
  event-info-card:
    role: 
  navigation-bar:
    role: 
  navigation-link:
    role: Primary navigation
  content-block:
    role: Information container
---

## Overview

**North Star:** Midnight Gallery with Magenta Jolt. The design feels like a curated visual experience, where every element is intentional and holds its space.

Fielddaysound's visual identity feels like a minimalist gallery space at midnight – stark, confident, and punctuated by unexpected vibrancy. The dominant deep charcoal (#131313) paired with bright magenta accent (#fb5eff) establishes a high-contrast, almost electric atmosphere without relying on full black. Typography is oversized and deliberately sparse, creating a sense of dramatic scale, while subtle spacing and lack of overt decoration prioritize content as art.

### Do's

- Use Electric Magenta (#fb5eff) exclusively for key interactive elements or dramatic headline accents to maintain its impact.
- Prioritize 'Tusker' font weight 100 for all display-level text, embracing its ultra-light, oversized aesthetic at 50px, 180px, or 190px.
- Maintain high contrast by pairing Deep Charcoal (#131313) with Canvas White (#ffffff) or Electric Magenta (#fb5eff) for text and backgrounds.
- Employ Soft Gray (#edece8) as a subtle background option for sections requiring less extreme contrast than Canvas White.
- Apply generous vertical spacing between content blocks, with `sectionGap` at least 100px, to create a sense of spaciousness and deliberate presentation.
- Use 'Montreal-Medium' 14px for all primary body text and navigation to ensure consistent readability.
- Use 40px for `elementGap` for internal horizontal spacing, such as between navigational items.

### Don'ts

- Do not introduce additional saturated colors beyond Electric Magenta (#fb5eff); maintain the strict two-color accent palette.
- Avoid using multiple font weights or styles within body text; stick to 'Montreal-Medium' 400 for primary content.
- Do not use smaller font sizes for 'Tusker'; its impact relies on its dramatic scale at display sizes.
- Do not use borders or drop shadows on cards or elements; rely on background color changes for visual separation.
- Avoid generic, full-bleed photography; imagery should be sparse, high-contrast, or monochromatic, aligning with the stark visual theme.
- Do not clutter layouts; keep information concise and well-spaced, treating each content block with curated attention.
- Do not use subtle variations of grays; stick to the defined Deep Charcoal (#131313), Pure Black (#000000), Canvas White (#ffffff), and Soft Gray (#edece8).

### Layout

The page primarily uses a full-bleed dark background (Deep Charcoal #131313) with no explicit `pageMaxWidth`, creating an immersive experience. The hero sections are often dominated by large-scale typography or strong graphic elements over a dark field. Content is structured in vertically stacked blocks, with generous `sectionGap` (at least 100px) between them. Text and visual elements are centered or carefully aligned, preferring strong singular statements over dense informational layouts. There's a noticeable lack of complex grid systems; elements are typically presented in focused, uncrowded arrangements. Navigation appears to be a minimal top bar, blending into the dark theme.

### Imagery

Visuals are characterized by stark, high-contrast photography or abstract graphics, often desaturated or darkened significantly with Deep Charcoal (#131313) overlays. When present, images are carefully integrated into the dark background, maintaining the overall sophisticated, minimal aesthetic. There's an absence of lifestyle photography; instead, imagery appears more conceptual or product-focused and rarely features soft edges or organic textures. Icons are likely monochromatic, bold, and minimal, contributing to the graphic quality of the UI. The density of imagery is low, with visuals serving as impactful statements rather than constant accompaniment.
