---
version: alpha
name: Magnetism
description: Magnetism presents a stark, high-contrast aesthetic reminiscent of an editorial spread. Its theme is dark with light gray typography and hairline borders, creating a sophisticated tension. The layout is structured yet fluid, with large, impactful imagery anchoring blocks of stark typography. Components are minimal, often ghosted or outlined, allowing content and photography to dominate the visual field.
colors:
  rich-black: "#222222"
  night-canvas: "#000000"
  silver-mist: "#e5e7eb"
  graphite: "#343434"
  cool-steel: "#dbdbdb"
  pale-ash: "#cccccc"
  muted-gray: "#aaaaaa"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 2
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 2
spacing:
  elementGap: 12px
  sectionGap: 32px
components:
  navigation-link:
    role: Primary navigation element
  works-section-header:
    role: Section title and interactive link
  project-card:
    role: Showcase individual projects or campaigns
  hairline-divider:
    role: Visual separator for content blocks
  muted-text-link:
    role: Secondary and footer navigation links
---

## Overview

**North Star:** High-fashion editorial canvas

Magnetism presents a stark, high-contrast aesthetic reminiscent of an editorial spread. Its theme is dark with light gray typography and hairline borders, creating a sophisticated tension. The layout is structured yet fluid, with large, impactful imagery anchoring blocks of stark typography. Components are minimal, often ghosted or outlined, allowing content and photography to dominate the visual field.

### Do's

- Prioritize Silver Mist (#e5e7eb) for all primary text on dark backgrounds to maintain high contrast and the signature aesthetic.
- Use TT Hoves Pro Trial with varied letter spacing (e.g., 0.1000em for smaller text, normal for headlines) to establish a distinct typographic rhythm.
- Define UI elements through hairline borders (1px solid #e5e7eb) rather than heavy fills or shadows.
- Maintain a spacious content-empty border around page elements, allowing visuals to breathe.
- Employ the 0px border-radius system-wide for a sharp, angular component aesthetic.
- Ensure large, impactful imagery dominates sections, often full-bleed, with minimal surrounding UI elements.

### Don'ts

- Avoid using box-shadows or elevation effects; the design relies on flat surfaces and borders for depth.
- Do not deviate from the achromatic color palette; saturated or bright colors are reserved for content imagery only.
- Do not introduce rounded corners on any UI elements; all corners should be sharp 0px radius.
- Refrain from using heavy fills for buttons or interactive elements; prefer ghosted or outlined styles.
- Avoid dense UIs; prioritize ample negative space and large content blocks over compact information displays.

### Layout

The page uses a full-bleed model, with content stretching to the viewport edges, but internal content is implicitly centered, giving the impression of a wide, unconstrained canvas. The hero is a full-bleed image with centered, large-format typography overlaying it. Section rhythm is driven by alternating large image blocks, often with left-aligned or centered text overlays. Content arrangement is primarily a single column for large hero sections, transitioning to two columns for work showcases where image and text exist side-by-side. The density is spacious, ensuring significant breathing room around visual and typographic elements. Navigation is a minimal sticky header with text links.

### Imagery

The site heavily relies on high-quality, full-bleed photography and art-directed product shots. These images are the primary visual content, often occupying significant screen real estate. The treatment is often full-bleed with sharp, raw edges, integrating directly into the layout without frames or masks. Photography ranges from vibrant, richly colored lifestyle and product shots to more subdued, artistic compositions, occasionally featuring strong blues. It serves primarily as product showcase and mood-setting atmosphere, creating a visually rich and distinctive brand identity.
