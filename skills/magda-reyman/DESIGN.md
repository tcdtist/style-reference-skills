---
version: alpha
name: Magda Reyman
description: Magda Reyman's design system evokes a minimalist, high-contrast digital notebook. Typography is the primary visual element, eschewing colorful branding for stark black and white text against a soft, light gray canvas. Layout prioritizes clarity and directness, with a strong emphasis on content over decorative elements. Visual weight comes from precise typographic choices and close-cropped product imagery within iPhone mockups, suggesting a focus on functional, UI-centric design.
colors:
  canvas-fog: "#c0c0c0"
  surface-frost: "#ffffff"
  text-charcoal: "#090909"
  text-graphite: "#282828"
  text-ink: "#000000"
spacing:
  cardRadius: 0px
components:
  rectangular-card:
    role: Content container.
  circular-element:
    role: Decorative or functional elements with extreme curvature.
---

## Overview

**North Star:** High-contrast digital notebook.

Magda Reyman's design system evokes a minimalist, high-contrast digital notebook. Typography is the primary visual element, eschewing colorful branding for stark black and white text against a soft, light gray canvas. Layout prioritizes clarity and directness, with a strong emphasis on content over decorative elements. Visual weight comes from precise typographic choices and close-cropped product imagery within iPhone mockups, suggesting a focus on functional, UI-centric design.

### Do's

- Prioritize text as the primary visual communication tool, using Text Charcoal (#090909) on Surface Frost (#ffffff) or Canvas Fog (#c0c0c0) for high contrast.
- Use a 0px border-radius for main content cards and containers to maintain a sharp, angular aesthetic.
- Apply 162px border-radius to create distinctly circular or pill-shaped decorative elements for contrast.
- Maintain a compact density, allowing typography to breathe without excessive white space around text blocks; use 1px or 16px vertical padding where defined.
- Utilize 'custom_30190' with its precise 0.0250em letter-spacing for all headings and emphasis to establish a consistent, technical tone.
- Keep backgrounds and surfaces in the achromatic neutral palette (Canvas Fog, Surface Frost) to keep the focus on content and typography.
- Ensure all text, especially links, is in Text Charcoal (#090909) for optimal readability and a consistent dark-on-light appearance.

### Don'ts

- Do not introduce color into primary UI elements such as backgrounds, buttons, or navigation; reserve color strictly for content if at all.
- Avoid decorative shadows or complex gradients on UI components; elevation is achieved through distinct color surfaces or sharp typographic hierarchy.
- Do not use generic system fonts for prominent headings or body text where a custom font is specified; the precise letter-spacing of 'custom_30190' is key.
- Refrain from varying border-radius widely; stick to 0px for main containers and 162px for specialty circular elements.
- Do not embed imagery haphazardly; product screenshots should be tightly contained and presented cleanly, as seen in the iPhone mockups.
- Avoid large, sparse sections; content should feel intentional and dense, with tight vertical rhythm.
- Do not use multiple font families for similar purposes; the typographic system is minimal and direct.

### Layout

The page uses a full-bleed model without a defined `pageMaxWidth`, creating expansive, content-first sections. The hero section features centered, strong typographic statements on the light gray background. Content often arranges in alternating text and visual blocks, with text-dominant areas and specific product displays embedded within the flow. Vertical spacing is consistent but compact, focusing on direct communication rather than spacious visual breaks. Navigation is a minimal top bar.

### Imagery

Imagery consists primarily of clean, contained product screenshots (specifically, app interfaces within iPhone mockups) without external context or lifestyle elements. They are used as illustrative content, not decorative atmosphere, and are tightly integrated into the UI. Icons are typically solid and monochromatic, used functionally.
