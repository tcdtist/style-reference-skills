---
version: alpha
name: GEMINI
description: GEMINI projects a dark, futuristic aesthetic, emphasizing high-contrast monochrome UI elements against a dramatic, often gradient-infused background that showcases a central 3D rendered object. The design is deliberately spare, with bold, geometric typography acting as sparse, but impactful, information points. Interaction elements are almost entirely ghosted, relying on subtle borders and text color changes to indicate states, reinforcing the impression of a holographic interface rather than tangible physicality. Layouts are open and minimal, directing focus to the central visual showcase.
colors:
  void-black: "#000000"
  polar-white: "#ffffff"
  ghost-border: "#efefef"
  silver-mist-gradient: "#f2f5f8"
  sunset-peach-gradient: "#dbcbbd"
  crimson-blush-gradient: "#c83c43"
  twilight-orchid-gradient: "#c31a65"
  deep-indigo-gradient: "#9b9fc2"
  ocean-teal-gradient: "#20a481"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
spacing:
  elementGap: 5px
  sectionGap: 50px
components:
  nav-menu-item-ghost:
    role: Interactive element
  branded-header-logo:
    role: Brand identification
  badge-text-only:
    role: Categorization/Labeling
  color-swatch-selector:
    role: Color palette interaction
---

## Overview

**North Star:** Holographic display in a void: information gleams from deep shadow.

GEMINI projects a dark, futuristic aesthetic, emphasizing high-contrast monochrome UI elements against a dramatic, often gradient-infused background that showcases a central 3D rendered object. The design is deliberately spare, with bold, geometric typography acting as sparse, but impactful, information points. Interaction elements are almost entirely ghosted, relying on subtle borders and text color changes to indicate states, reinforcing the impression of a holographic interface rather than tangible physicality. Layouts are open and minimal, directing focus to the central visual showcase.

### Do's

- Use Void Black (#000000) as the foundational background for all primary content areas.
- Employ Ghost Border (#efefef) for all inactive text, subtle borders, and secondary UI elements, creating a sense of translucency.
- Apply Days One font (400 weight, 17px) for all prominent brand marks and labels.
- Utilize Zen Dots font (400 weight, 17px) for primary navigation items and interactive text, establishing a distinct digital-era feel.
- Maintain minimal spacing for interactive elements, using `elementGap` of 5px and small padding like 10px where necessary, to keep the layout compact.
- Round corners with a 3px radius on all small interactive elements and containers where subtle differentiation is needed.
- Incorporate the gradient color tokens sparingly, primarily as decorative accents or visual selection tools, never as primary UI backgrounds.

### Don'ts

- Avoid using saturated solid colors for primary interface elements; instead, rely on monochrome tones and subtle gradients.
- Do not introduce strong drop shadows or complex elevation; surfaces should appear flat or subtly layered, contributing to the holographic feel.
- Refrain from using bold type weights excessively; the design favors lighter weights and careful letter spacing to convey hierarchy.
- Do not use generic system fonts; custom fonts Days One and Zen Dots are key to brand identity.
- Avoid dense, information-heavy layouts; prioritize spaciousness and singular focal points.
- Do not use highly opaque backgrounds for interactive elements; transparency and ghosting are preferred.
- Do not break the compact density with large, arbitrary spacing values; adhere to the established elementGap and padding guidelines.

### Layout

The page primarily uses a full-bleed layout where the background and main visual content extend to the edges of the viewport. The hero section is dominated by the 3D rendered object, centered against a gradient background. Navigation elements (logo, menu items) are placed in the top corners, maintaining a minimalist, high-tech control panel aesthetic. Content beyond the hero appears in a similarly sparse manner, with text badges or labels placed strategically to complement the visual display. There is no traditional grid for content; elements are placed with a sense of deliberate emptiness, directing the eye toward the central visual.

### Imagery

This site features a single, dominant 3D rendered product (a concept car) centrally positioned. The rendering is sophisticated, with realistic textures and lighting, and is the primary visual focus. There are no secondary images, illustrations, or photography. The entire background is often a full-bleed, soft color gradient, creating an ethereal and atmospheric backdrop that frames the central object. Imagery is the content, not a decorative addition, and is often interactive (e.g., color selection for the car). Icons are minimal, represented by simple geometric shapes like a hollow square.
