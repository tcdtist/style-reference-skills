---
version: alpha
name: SBS Town
description: SBS Town immerses users in a dark, neon-lit digital cityscape. The visual style is characterized by a luminous, futuristic aesthetic where dark surfaces are punctuated by vibrant, glowing accents. Typography is compact and precise, appearing as labels or annotations within the immersive 3D environment. The interface itself is minimal, primarily leveraging the interactive 3D scene, with UI elements serving as functional overlays rather than dominant structural components.
colors:
  midnight-void: "#111111"
  ghost-marble: "#ffffff"
  cyber-glow-pink: "#ff00d9"
  aqua-beam: "#00f0ff"
  voltage-yellow: "#fafa00"
  infrared-red: "#f0445d"
spacing:
  buttonRadius: 100px
  elementGap: 5px
  sectionGap: 43px
components:
  kickoff-tag-button:
    role: Primary interactive element within the 3D map
  label-tag:
    role: Informational labels within the 3D map
  map-overlay-icon:
    role: Actionable icons for navigation and information
---

## Overview

**North Star:** Neon Cyberpunk Metropolis

SBS Town immerses users in a dark, neon-lit digital cityscape. The visual style is characterized by a luminous, futuristic aesthetic where dark surfaces are punctuated by vibrant, glowing accents. Typography is compact and precise, appearing as labels or annotations within the immersive 3D environment. The interface itself is minimal, primarily leveraging the interactive 3D scene, with UI elements serving as functional overlays rather than dominant structural components.

### Do's

- Prioritize 'Midnight Void' (#111111) for all core background and surface elements to establish the dark theme.
- Use 'Ghost Marble' (#ffffff) for primary text and iconic elements to ensure legibility against dark backgrounds.
- Apply 'Cyber Glow Pink' and 'Aqua Beam' as primary accent colors for interactive states and decorative lighting within the 3D environment.
- Render all interactive buttons and labels as pill-shaped elements using a 100px border-radius.
- Maintain a clear visual hierarchy by using the Circular 400 font at 16px for all interface text.
- Leverage the 'Warning Amber' (#ff7c24) and 'Infrared Red' (#f0445d) for semantic tags and call-outs within the immersive city map.
- Employ 5px/20px padding (vertical/horizontal) for all small interactive elements like tags and buttons.

### Don'ts

- Avoid using saturated background colors; all large surface areas should remain deep, dark neutrals to preserve the immersive cyberpunk aesthetic.
- Do not introduce heavy shadows or strong elevation effects, as the visual style relies on glowing accents rather than traditional depth.
- Do not deviate from the Circular font family or its 16px, 400 weight for UI text; consistency is key for legibility in this environment.
- Do not use subtle border radii; all rounded elements must commit to the 100px value for a distinct pill shape.
- Avoid generic, non-glowing accent colors; all accent colors must have a luminous, high-contrast quality.
- Do not use large, blocky UI components; maintain a lightweight, ethereal presence for interface elements.
- Avoid dense text blocks; all text should be concise, functional, and integrated as labels or annotations.

### Layout

The page employs a full-bleed layout, where the primary visual is a dynamic 3D rendered cityscape that fills the entire viewport. There is no traditional page width constraint. The hero pattern is the immersive 3D scene itself. Content is arranged as minimal, floating UI overlays and tags (like 'Kickoff' or 'Revolutionary') directly integrated into the 3D environment, strategically placed to highlight points of interest. Navigation elements, such as the 'Map' icon or 'Show me around' button, are subtly positioned in the corners, maintaining a high level of visual breathing room for the central 3D experience. There are no clear sections or grids in a traditional sense, rather an interactive map with annotated features.

### Imagery

The site primarily uses 3D renders of a futuristic cityscape, imbued with a distinct cyberpunk aesthetic. The imagery is highly dimensional, depicting detailed buildings, glowing pathways, and abstract geometric icons (like the 'SBS' logo and colored cubes) that serve as key points of interest. Lighting is dark and moody, with prominent neon accents in 'Aqua Beam', 'Cyber Glow Pink', and 'Voltage Yellow' that define outlines and interactive elements. Imagery is central to the experience; the UI overlays are minimal, acting as functional annotations within the full-bleed, immersive 3D scene. Icons are simple, filled shapes that maintain the glow-in-the-dark visual language.
