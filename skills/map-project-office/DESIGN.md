---
version: alpha
name: map project office
description: Map Project Office conveys a minimalist, stark presence through its high-contrast monochrome design. The visual system emphasizes large, bold typography as the dominant design element, often serving as primary navigation or key content. Surfaces are uniformly white or near-black, with subtle gray cues indicating interactive elements or secondary information. The overall aesthetic is one of restrained impact, prioritizing legibility and functional clarity within a sculptural, type-focused environment.
colors:
  canvas-white: "#ffffff"
  ink-black: "#0a0101"
  muted-ash: "#393939"
  subtle-gray: "#767676"
spacing:
  elementGap: 16px
  sectionGap: 160px
components:
  primary-navigation-link:
    role: Top-level navigation items
  ghost-bordered-link:
    role: Secondary interactive elements, often found in footers or supplemental navigation.
  hero-headline:
    role: Dominant textual element on the home page or major sections.
  muted-text-button:
    role: Interactive controls with lower prominence, like 'pause'/'unmute'.
---

## Overview

**North Star:** Type-driven monochrome canvas. A high-contrast display of minimal elements on a vast, unadorned surface, where typography commands attention.

Map Project Office conveys a minimalist, stark presence through its high-contrast monochrome design. The visual system emphasizes large, bold typography as the dominant design element, often serving as primary navigation or key content. Surfaces are uniformly white or near-black, with subtle gray cues indicating interactive elements or secondary information. The overall aesthetic is one of restrained impact, prioritizing legibility and functional clarity within a sculptural, type-focused environment.

### Do's

- Prioritize typography as the primary visual element, using MapSans-Bold for impact and MapFono-Regular for clarity.
- Maintain a stark, high-contrast aesthetic with Canvas White for backgrounds and Ink Black for primary text and outlines.
- Use Muted Ash (#393939) exclusively for secondary heading text to provide a subtle reduction in visual weight.
- Apply Subtle Gray (#767676) sparingly for tertiary UI elements and low-priority text, ensuring it is always legible against Canvas White backgrounds.
- Employ a generous section gap of 160px to create ample visual breathing room between major content blocks.
- Utilize Ink Black as the border for active or interactive ghost elements to subtly define their interactive nature.
- Keep all corners sharp with a 0px radius, reinforcing a precise and unadorned aesthetic.

### Don'ts

- Avoid introducing any saturated colors for branding or interface elements; color is reserved for content, not UI.
- Do not use box shadows or other elevation cues; the design relies on flat planes and stark contrast for visual hierarchy.
- Refrain from using gradients anywhere in the interface; the system is built on solid, uniform color fields.
- Do not use generic system fonts; always implement MapSans-Bold and MapFono-Regular for consistent brand identity.
- Avoid dense information layouts; prioritize white space and minimalist compositions.
- Do not use rounded corners on any UI elements; maintain sharp, defined edges.
- Do not use filled buttons; interactive elements should be text-only or ghosted with subtle borders.

### Layout

The page primarily uses a full-bleed layout, where content stretches the full width of the viewport, particularly for large textual elements. There is no explicit max-width containment at a page level. The hero pattern features large, centered headlines, often a single word or short phrase, dominating the initial view. Section rhythm is driven by generous vertical spacing (160px section gap) and the alternating starkness of large text blocks and embedded content like video. Content arrangement tends to be centered stacks for headings and navigation, with visual elements like videos centrally placed. There is no apparent grid usage for multi-column layouts given the current data, emphasizing a linear, single-column content flow. Navigation consists of a minimal top-right text menu, with primary navigation often integrated into the main page content as large, interactive text links.

### Imagery

The visual language focuses on product screenshots and occasional abstract graphics, treated with a minimalist, often isolated approach. Photography appears to be tight crops of products on solid backgrounds, devoid of lifestyle context. Illustrations are simple and functional, serving explanatory rather than decorative roles. Icons are minimalist and outlined. Imagery primarily serves to showcase products directly or to support technical explanations, rather than creating an atmosphere. The overall density of imagery is low, with text and typography dominating the visual space.
