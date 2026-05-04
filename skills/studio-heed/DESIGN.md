---
version: alpha
name: Studio HEED
description: Studio HEED employs a high-contrast dark aesthetic that feels like a refined digital gallery. Dominant dark backdrops are punctuated by crisp white typography and subtle gray surfaces, creating a strong sense of depth and focus on visual content. The system uses a singular, distinct violet accent for functional elements and occasionally as a card background, offering a cool, modern counterpoint to the monochromatic base. Components are minimalistic, with soft, rounded corners and no heavy shadows or borders, maintaining the clean, unobtrusive feel.
colors:
  obsidian: "#000000"
  ghost-white: "#ffffff"
  pale-stone: "#c2c1bf"
  deep-violet: "#00174f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
spacing:
  cardRadius: 5px
  elementGap: 14px
  sectionGap: 48px
components:
  image-project-card-dark:
    role: Case study thumbnail in a grid
  image-project-card-light:
    role: Case study thumbnail in a grid
  image-project-card-violet-accent:
    role: Case study thumbnail in a grid, highlighting a project
  text-link-header-nav:
    role: Primary navigation and prominent header links
  badge-text-tag:
    role: Categorization tag for project cards
---

## Overview

**North Star:** Gallery Grid on Obsidian

Studio HEED employs a high-contrast dark aesthetic that feels like a refined digital gallery. Dominant dark backdrops are punctuated by crisp white typography and subtle gray surfaces, creating a strong sense of depth and focus on visual content. The system uses a singular, distinct violet accent for functional elements and occasionally as a card background, offering a cool, modern counterpoint to the monochromatic base. Components are minimalistic, with soft, rounded corners and no heavy shadows or borders, maintaining the clean, unobtrusive feel.

### Do's

- Prioritize Obsidian (#000000) as the primary background for most sections to maintain a high-contrast dark aesthetic.
- Use Ghost White (#ffffff) for all primary text elements, including body, links, and headings, ensuring maximum legibility against dark backgrounds.
- Apply Suisse Intl, weight 600, across all text, varying only in size (12px, 14px) and line height (1.4) to establish a consistent, confident typographic voice.
- Maintain a uniform border-radius of 5px for all card-like components and images to promote a soft, cohesive visual language.
- Utilize Pale Stone (#c2c1bf) and Deep Violet (#00174f) as distinct background colors for cards to create visual variety and emphasize certain content without introducing complex patterns or shadows.
- Ensure generous element spacing, particularly 14px for internal link groups, to preserve readability and prevent visual clutter.
- Employ direct, minimal text links without background fills for interactive elements, relying on Ghost White (#ffffff) text and subtle underlines for interaction states.

### Don'ts

- Avoid using drop shadows or complex gradients on components. The design relies on flat surfaces and color contrast for visual hierarchy.
- Do not introduce additional saturated colors beyond Deep Violet (#00174f); restrict accent usage to this specific hue to maintain visual restraint.
- Refrain from using thin font weights; the system's character is built on the robust weight 600 of Suisse Intl.
- Avoid decorative borders or heavy strokes around components; rely on background color changes for distinction.
- Do not break the dark theme with large, light-colored sections unless justified by specific content, as the system thrives on its high-contrast dark mode.
- Do not use generic system fonts; Suisse Intl is integral to the brand's unique typographic identity.
- Avoid dense packing of elements; maintain a comfortable density with ample negative space around components, especially with an element gap of 14px.

### Layout

The page structure adopts a full-bleed layout which dynamically scales, though individual content sections and text blocks appear to be subtly contained. The hero area is implicit, showcasing the studio name and description. The primary visual pattern is a responsive grid of project cards, typically displaying images and minimal text labels below. The vertical rhythm is comfortable, with significant white space between the header and the main content grid. Navigation is minimal and positioned at the top left, while contact information and language selectors are at the top right, creating a balanced and easily digestible header experience.

### Imagery

The visual language predominantly features high-quality product photography and bespoke illustrations, presented within project cards. Photography is often tightly cropped and product-focused, showcasing details without much contextual environment. Illustrations are simple, linear, and occasionally monochromatic. The imagery serves to showcase the studio's portfolio, presented in a gallery-like grid. Images are contained within defined card boundaries with a subtle 5px border-radius, maintaining a clean perimeter. There's an overall impression of visual clarity and directness, with a strong emphasis on the work itself.
