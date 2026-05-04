---
version: alpha
name: MEDIOCRE
description: MEDIOCRE embraces a gritty, high-contrast digital street art aesthetic, using a stark lime green canvas as a vibrant backdrop for red graffiti-style typography. The design is intentionally raw and visually assertive, reflecting a 'no-frills' counter-culture attitude. Text elements rely on bold, condensed gothic forms with distinctive character spacing, creating visual tension against the uniform background. The system is deliberately minimal in its componentry, focusing instead on impactful typography and color contrast.
colors:
  graffiti-red: "#c20000"
  electric-green: "#26ff00"
  faded-grid: "#d9d9d9"
spacing:
  elementGap: 8px
  sectionGap: 150px
---

## Overview

**North Star:** digital street art

MEDIOCRE embraces a gritty, high-contrast digital street art aesthetic, using a stark lime green canvas as a vibrant backdrop for red graffiti-style typography. The design is intentionally raw and visually assertive, reflecting a 'no-frills' counter-culture attitude. Text elements rely on bold, condensed gothic forms with distinctive character spacing, creating visual tension against the uniform background. The system is deliberately minimal in its componentry, focusing instead on impactful typography and color contrast.

### Do's

- Use Electric Green (#26ff00) as the primary background for all major page sections and the canvas itself.
- Apply Graffiti Red (#c20000) for all primary text elements, headlines, and interactive link/ghost button borders to maintain high contrast and visual energy.
- Prioritize MAELSTROM font (or Bebas Neue) at 47px or 50px for all page-level headlines with a letter spacing of -0.0100em.
- Utilize Victor font (or IBM Plex Sans Condensed) with weight 700 at 14px for navigational links and all-caps utility text.
- Maintain a section gap of 150px to create distinct visual divisions between content blocks, even if content is minimal.
- Ensure all interactive ghost buttons or links use a 1px Graffiti Red (#c20000) border, rather than a filled background.
- Implement the 'hue-spin' named animation for decorative elements that require dynamic color shifts, lasting 120s with an 'ease' timing function.

### Don'ts

- Avoid softened corners; all UI elements should maintain sharp, 0px border radii.
- Do not introduce additional colors beyond Graffiti Red, Electric Green, and Faded Grid without strong functional justification—the system thrives on its limited palette.
- Do not use drop shadows or elevation effects; the design language is flat and direct, except for specified 'drop-shadow(rgb(33, 219, 1) 5px 5px 0px)' filter for unique elements.
- Do not use generic text colors like black or white; all text should be either Graffiti Red or Faded Grid to adhere to the brand palette.
- Avoid using standard button fills; prefer ghost buttons with strong red borders for interactive elements.
- Do not vary line heights excessively; adhere to 1.25 for body text and 1.00 for small utility text to maintain visual consistency.

### Layout

The page exhibits a full-bleed layout, where the Electric Green canvas extends edge-to-edge. The hero section features large, centered graffiti typography, serving as the dominant visual element. Content is primarily arranged in centered stacks, with strong vertical rhythm established by the 150px section gaps. Subtle vertical Faded Grid lines appear as a background grid, occasionally interrupted by the central imagery. Navigation is minimal, limited to corner text links, with no sticky header or complex menus, reinforcing the stark, direct aesthetic.

### Imagery

The site's primary imagery is dense, tag-style graffiti text in Graffiti Red on an Electric Green background. Imagery serves as a central decorative and branding element, rather than illustrative or product-focused. The treatment is full-bleed, occupying significant visual space. The style is raw and aggressive, with abstract forms dominating. There are no outlined or filled icons, nor photography or 3D renders; the visual language is purely graphic and type-driven.
