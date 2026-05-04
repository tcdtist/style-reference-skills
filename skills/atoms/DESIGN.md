---
version: alpha
name: Atoms
description: This design system feels like a friendly, efficient digital workshop. It skillfully blends utility with approachable charm through its use of a clean, high-contrast palette predominantly featuring white and deep black text. The signature playful elements include the 'Atoms Blue' primary accent, soft rounded corners on interactive elements and cards, and a subtle card elevation that adds visual depth without distracting. This balance creates an experience that is both professional and inviting, hinting at complex technology made simple.
colors:
  page-canvas: "#ffffff"
  deep-graphite: "#0d0d0d"
  ghost-gray: "#e5e7eb"
  subtle-ash: "#f6f6f6"
  medium-gray: "#767676"
  dark-gray: "#3c3c3c"
  atoms-blue: "#4267ff"
  action-blue: "#425ce1"
  palette-purple: "#b88ade"
  palette-red: "#ff7fa7"
  palette-orange: "#ffba6c"
  palette-green: "#2dbb5c"
  sky-gradient: "#427fa5"
  dreamscape-gradient: "#d2b9ff"
  horizon-gradient: "#5f7bf4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.44
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.17
spacing:
  cardRadius: 24px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 48px
components:
  build-type-selector-prompt-input-with-category-tags:
    role: 
  template-gallery-with-tab-filter:
    role: 
  testimonial-cards-grid:
    role: 
  primary-filled-button:
    role: Call to action
  secondary-ghost-button:
    role: Secondary action or navigation
  navigation-link-button:
    role: Top navigation
  filter-tag-button:
    role: Content filtering
  elevated-content-card:
    role: Showcasing key content or testimonials
  template-preview-card:
    role: Displaying template screenshots
  feature-highlight-card:
    role: Highlighting specific features or user-generated content
  text-input-default:
    role: User text input
  text-input-placeholder:
    role: User text input with placeholder
---

## Overview

**North Star:** Clean blueprint with friendly edges and a vibrant blue accent.

This design system feels like a friendly, efficient digital workshop. It skillfully blends utility with approachable charm through its use of a clean, high-contrast palette predominantly featuring white and deep black text. The signature playful elements include the 'Atoms Blue' primary accent, soft rounded corners on interactive elements and cards, and a subtle card elevation that adds visual depth without distracting. This balance creates an experience that is both professional and inviting, hinting at complex technology made simple.

### Do's

- Use IBM Plex Sans for all text elements unless a specific distinction for display headings is required, reserving IBM Plex Serif for `display` role.
- Apply Atoms Blue (#4267ff) exclusively for primary CTAs and key interactive elements, maintaining its impact.
- Ensure all buttons and badges utilize a 9999px border radius for a consistent, soft-edged interaction point.
- Maintain a clear visual hierarchy by using Deep Graphite (#0d0d0d) for primary headings and important text, and Medium Gray (#767676) for secondary information.
- Use the specific card shadow (rgba(13, 13, 13, 0.08) 0px 8px 24px -4px, rgba(13, 13, 13, 0.04) 0px 4px 4px 0px) to give elements subtle elevation and visual distinction.

### Don'ts

- Do not introduce new typefaces; rely on IBM Plex Sans and IBM Plex Serif for all typographic needs.
- Avoid using saturated colors as background for large content areas; reserve them for accents and specific gradients.
- Do not vary the border radius on interactive buttons; always use 9999px for consistent affordance.
- Refrain from adding heavy borders or strong dropshadows to elements other than the defined card variant; maintain a light and airy feel.
- Do not deviate from the established spacing scale (multiples of 4px and 8px) to maintain a harmonious layout density.

### Layout

The site employs a max-width contained layout, with content typically centered within a clear canvas. The hero section features a centered headline and subtext, with a prominent input field and a row of playful character illustrations above. Subsequent sections often alternate between large visual elements (like product screenshots) and centered explanatory text. There is a strong use of card grids (e.g., 3-column) for showcasing templates and testimonials, adding structure and scannability. Vertical spacing between sections is generous and consistent, creating a breathable visual rhythm. Navigation is a sticky top bar, providing persistent access to key links and calls to action.

### Imagery

The visual language focuses on friendly, almost emoji-like character illustrations for thematic elements, hinting at AI personalities. For product showcases, clean, contained screenshots of UI are employed. The overall style is playful and inviting, using a palette of varied, bright, solid colors for these illustrations, often arranged in rows or clusters. There is a sense of abstraction mixed with clear product representation, avoiding lifestyle photography. Icons are generally filled and monochromatic, consistent with the Deep Graphite text color.
