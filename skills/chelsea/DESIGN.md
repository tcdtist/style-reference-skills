---
version: alpha
name: CHELSEA
description: Chelsea evokes a stark, filmic mood with a dark canvas and luminous text-based navigation. Typography is the primary visual element, given weight and presence through color and generous spacing. A single vivid blue accent color is reserved for interactive elements, creating points of distinct focus against the monochromatic backdrop. Components are minimal and flat, emphasizing content over decorative chrome, with an overall impression of focused elegance.
colors:
  midnight-ink: "#000000"
  ash-gray: "#1f2937"
  ghost-white: "#f4efe9"
  polar-white: "#ffffff"
  pavement-gray: "#e5e7eb"
  electric-blue: "#4490ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.15
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.15
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.15
  body-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.15
spacing:
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 96px
components:
  navigation-link:
    role: Main navigation items and sub-navigation lists.
  pill-accent-button:
    role: Primary action button that stands out.
  ghost-border-button:
    role: Secondary action or categorized filters.
  text-list-item:
    role: Displaying team members or project names in a list.
---

## Overview

**North Star:** Cinematic Night Canvas — light through shadow.

Chelsea evokes a stark, filmic mood with a dark canvas and luminous text-based navigation. Typography is the primary visual element, given weight and presence through color and generous spacing. A single vivid blue accent color is reserved for interactive elements, creating points of distinct focus against the monochromatic backdrop. Components are minimal and flat, emphasizing content over decorative chrome, with an overall impression of focused elegance.

### Do's

- Always use Midnight Ink (#000000) as the canvas background for new pages to maintain the dark theme.
- Reserve Electric Blue (#4490ff) exclusively for interactive elements and state indicators, never for decorative purposes.
- Prioritize Neue Haas Unica Pro for all text, varying weight (400, 700) and size (12-48px) to establish hierarchy.
- Apply a 9999px border radius for all pill-shaped buttons and interactive elements requiring a soft, rounded aesthetic.
- Utilize Ash Gray (#1f2937) for subtle borders and secondary information, maintaining visual quietness.
- Implement a compact density with 8px as the default element spacing in components and layouts.
- Ensure primary text is Ghost White (#f4efe9) against the dark background for optimal contrast.

### Don'ts

- Do not introduce new vibrant colors outside of the defined Electric Blue; maintain a monochrome palette with strategic accents.
- Avoid heavy shadows or gradients; components should remain flat and minimalist to align with the stark aesthetic.
- Do not use generic system fonts; Neue Haas Unica Pro is critical for brand identity.
- Do not apply large, decorative border radii to elements other than specific buttons/links with the 9999px radius.
- Avoid overly dense layouts; use 96px for section gaps to ensure generous breathing room horizontally and vertically.
- Do not use Electric Blue for non-interactive text or static elements.
- Avoid changing the default 1px border thickness for dividers unless explicitly specified for a unique component.

### Layout

The page primarily employs a full-bleed layout, particularly for the hero section, embedding video or photography as the dominant visual. Content sections maintain a contained, centered structure with text blocks. The header is a minimal, top-bar navigation that remains sticky, featuring text links that highlight subtly. Section rhythm is often seamless, blending content over continuous dark backgrounds rather than distinct bands, punctuated by generous vertical spacing (96px). Content arrangement is text-dominant with clear, left-aligned typography.

### Imagery

The site uses video and photography prominently, treated with a cinematic, high-contrast, and often low-key aesthetic that suits the film production context. Product shots, when present, are full-bleed capturing an immersive experience. There is no usage of abstract graphics or highly stylized illustrations; the focus is on realistic, high-quality visual content. Icons are minimal, likely grayscale or the accent blue, and purely functional. Imagery is dominant, often replacing the background, creating an image-rich experience.
