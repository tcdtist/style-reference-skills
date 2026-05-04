---
version: alpha
name: Little Troop
description: Little Troop sculpts a playful yet authoritative visual identity through stark monochrome contrast and oversized, almost cartoonish, typographic gestures. Surfaces are a crisp white canvas, against which dense, rounded blocks of content float. The system uses a limited color palette to emphasize form and content, with visual interest created through unexpected scale shifts and exaggerated shapes, lending a whimsical but professional feel.
colors:
  inkwell: "#000000"
  canvas-white: "#ffffff"
  ocean-mist: "#8bc3bd"
  sunset-ember: "#e78f40"
spacing:
  elementGap: 20px
  sectionGap: 100px
components:
  navigation-link:
    role: Header and footer navigation elements, work item links.
  project-index-card:
    role: Container for individual work project previews.
  filter-toggle-button:
    role: Used for filtering content, specifically on the Project Index.
  filter-checkbox:
    role: Interactive element to select filter criteria.
---

## Overview

**North Star:** monochrome playful sculpture

Little Troop sculpts a playful yet authoritative visual identity through stark monochrome contrast and oversized, almost cartoonish, typographic gestures. Surfaces are a crisp white canvas, against which dense, rounded blocks of content float. The system uses a limited color palette to emphasize form and content, with visual interest created through unexpected scale shifts and exaggerated shapes, lending a whimsical but professional feel.

### Do's

- Use Canvas White (#ffffff) as the dominant background for all pages and primary content containers.
- Employ Inkwell (#000000) for all primary text, borders, and main decorative outlines to maintain high contrast.
- Apply a 50px border-radius to any background panels or interactive elements that should appear as distinct, soft-edged shapes.
- Use Arial Narrow for body text and navigation, adjusting line height as needed between 0.86 and 1.14 based on context.
- Reserve Times Now (weight 250, 76px, letter-spacing -0.066em) for impactful display headings, emphasizing its unique character.
- Maintain generous negative space with a 100px section gap between major content blocks to ensure breathing room.
- Introduce Ocean Mist (#8bc3bd) or Sunset Ember (#e78f4e) sparingly for subtle accents or hover states to highlight interaction.

### Don'ts

- Avoid introducing additional saturated colors beyond specified accents to preserve the monochrome focus.
- Do not use heavy box shadows or overly complex gradients; the design relies on flat planes and subtle elevation changes.
- Do not vary border-radius for non-container elements; the 50px radius is a signature shape.
- Avoid dense, text-heavy blocks; break content into manageable, visually distinct units.
- Do not use bold or heavy weights for Times Now; its personality comes from its light 250 weight combined with tight tracking.
- Do not use generic system fonts for display text; Times Now defines a core part of the brand's typographic identity.
- Avoid decorative imagery that conflicts with the clean, bold, typography-driven aesthetic; use clear product captures or abstract forms.

### Layout

The page maintains a full-bleed layout, using a max-width approach for content containment. The initial hero section often features a distorted or spherical graphic, creating an immediate, abstract visual impact. Content sections are vertically stacked with a consistent 100px gap, using a flexible grid that can accommodate single large hero elements or multiple smaller 'card' items. The Project Index utilizes a dynamic, responsive grid of ghost cards, each implicitly defined by its rounded outline or contained content, rather than explicit borders. Navigation is presented minimally in a fixed header, with a large footer section. The overall density is comfortable, with ample whitespace provided by the Canvas White background.

### Imagery

This system primarily uses product screenshots and brand identity artwork, often presented within rounded, contained shapes or as part of a larger, abstract layout. Imagery is typically high-fidelity and product-focused, rather than lifestyle or stock photography. Icons, when present (e.g., filter checkboxes), are simple, outlined, and monochromatic, aligning with the minimal aesthetic. The role of imagery is to showcase design work or provide functional context, maintaining a text-dominant to image-balanced density, often with images deeply integrated into the layout rather than merely decorative.
