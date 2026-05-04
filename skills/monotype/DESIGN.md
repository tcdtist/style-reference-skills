---
version: alpha
name: Monotype.
description: Monotype's design language is an exercise in restrained professionalism, echoing the foundational nature of typography itself. It uses a pristine white canvas contrasted with deep, dark grays and a singular vivid blue accent for interactive elements. Typography is precise and utilitarian, with compact line spacing and subtle letter-spacing adjustments, prioritizing clarity and authority. Components are lightweight, featuring soft cards, ghost controls, and minimal elevation, allowing content to take precedence without visual clutter.
colors:
  midnight-graphite: "#1e242c"
  ocean-blue: "#1a73e8"
  pewter-slate: "#576579"
  pure-white: "#ffffff"
  light-fog: "#e7eaee"
  silver-dust: "#cfd5dd"
  ash-grey: "#dbdfe5"
typography:
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 57px
    lineHeight: 1.12
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 16px
  sectionGap: 104px
components:
  primary-action-button:
    role: Main call to action.
  navigation-button-dark:
    role: Primary navigation item, especially in header.
  ghost-button-muted:
    role: Secondary or auxiliary actions, often text-only.
  ghost-button-dark:
    role: Text-based navigation or subtle interactive elements.
  resource-card:
    role: Content presentation for articles and resources.
  tag-badge:
    role: Categorization labels.
  search-input:
    role: Global search functionality.
---

## Overview

**North Star:** Type Foundry Blueprint: precision on a clean canvas

Monotype's design language is an exercise in restrained professionalism, echoing the foundational nature of typography itself. It uses a pristine white canvas contrasted with deep, dark grays and a singular vivid blue accent for interactive elements. Typography is precise and utilitarian, with compact line spacing and subtle letter-spacing adjustments, prioritizing clarity and authority. Components are lightweight, featuring soft cards, ghost controls, and minimal elevation, allowing content to take precedence without visual clutter.

### Do's

- Use Midnight Graphite (#1e242c) for primary text and headings for maximum contrast on white backgrounds.
- Apply Ocean Blue (#1a73e8) exclusively for primary interactive elements like call-to-action buttons.
- Maintain 8px border-radius for all buttons and cards, and 16px for image containers for visual consistency.
- Utilize HelveticaNowMTTextRegular for body text, ensuring a lineHeight of 1.5, to prioritize readability and a professional appearance.
- Separate content sections with a sectionGap of 104px to provide ample breathing room between major informational blocks.
- Employ the subtle shadow style rgba(55, 73, 81, 0.12) 0px 112px 228px 0px for cards to provide a delicate sense of elevation without being distracting.
- Ensure letterSpacing for emphasized text (HelveticaNowMTTextBold) is -0.0200em to achieve a tighter, more refined typographic appearance.

### Don'ts

- Avoid using highly saturated colors for backgrounds or large decorative elements; color is reserved for functional accents.
- Do not deviate from the established 8px and 16px border radii to maintain the subtle soft-edged aesthetic.
- Refrain from using strong, dark shadows for default elements; elevation is minimal and suggests slight lift rather than significant depth.
- Do not use generic system sans-serif fonts where custom ones are specified; the exact typeface contributes significantly to brand identity.
- Avoid excessive element decorations or heavy borders; surfaces should remain clean and uncluttered.
- Do not introduce additional semantic colors (e.g., green for success, red for error) without explicit integration, as the palette is highly controlled.
- Eschew dramatic or flamboyant animations; motion should be subtle, with `ease` timing functions, to maintain an efficient and professional feel.

### Layout

The page maintains a max-width contained layout, centering content within a flexible boundary. The hero section features a full-bleed dark banner with a prominent centered headline, followed by white sections. Content flow is primarily vertical, with consistent section gaps of 104px, creating a spacious and breathable rhythm. Interior content often alternates between text and image blocks, sometimes in two-column arrangements. A 3-column grid structure is used for displaying resource cards. Navigation consists of a sticky top bar with a primary 'Speak to sales' button, alongside a secondary header with more detailed navigation items and a search input.

### Imagery

The site predominantly uses diverse product and brand-specific imagery, ranging from illustrative graphics with geometric forms to high-quality photography. Imagery generally features contained, sometimes rounded (16px radius) elements, rather than full-bleed compositions. There is a mix of abstract concepts, typography in use, and occasionally product-focused shots. Icons are simple, outlined, and monochromatic, typically in Midnight Graphite, serving an explanatory or decorative role rather than being heavily visual. Overall, imagery supports content and brand identity without overwhelming the clean UI, maintaining a text-dominant density.
