---
version: alpha
name: Extract
description: Extract's design system channels a confident, editorial aesthetic built on stark black and white contrasts, punctuated by a soft, muted green and rich, natural photography. Typography features bold, custom display fonts for headlines alongside a robust sans-serif for body text, creating a strong sense of visual hierarchy. Components are minimal and grounded in stark geometric shapes, often appearing as ghost outlines or solid blocks, avoiding heavy shadows or intricate decorations to maintain clarity and directness.
colors:
  canvas-white: "#ffffff"
  ink-black: "#070707"
  accent-green: "#e7feda"
typography:
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.4
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.25
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.25
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.25
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 104px
    lineHeight: 1.5
    letterSpacing: 0px
spacing:
  cardRadius: 9.27273px
  buttonRadius: 4.63636px
  elementGap: 19px
  sectionGap: 59px
components:
  solid-navigation-button:
    role: Primary navigation item or active state.
  outlined-navigation-button:
    role: Secondary navigation items or inactive states.
  project-card:
    role: Container for individual project showcases.
  newsletter-input-field:
    role: Email subscription input.
  newsletter-submit-button:
    role: Call to action for newsletter subscription.
---

## Overview

**North Star:** Monochrome Editorial Canvas — grounded in bold typography and rich imagery.

Extract's design system channels a confident, editorial aesthetic built on stark black and white contrasts, punctuated by a soft, muted green and rich, natural photography. Typography features bold, custom display fonts for headlines alongside a robust sans-serif for body text, creating a strong sense of visual hierarchy. Components are minimal and grounded in stark geometric shapes, often appearing as ghost outlines or solid blocks, avoiding heavy shadows or intricate decorations to maintain clarity and directness.

### Do's

- Use Feature Deck font (weight 400) for all primary headings (44px, 104px) to establish a strong, impactful visual.
- Maintain a clear monochrome base with Canvas White (#ffffff) for backgrounds and Ink Black (#070707) for text, components, and borders.
- Apply Accent Green (#e7feda) sparingly as a muted background color for distinct sections or footers, never for interactive elements.
- Utilize ABC Diatype (weights 400, 700) for all body text, navigation items, and secondary headings, ensuring readability across various contexts.
- Implement border radii of 9.27273px for cards and images, and 4.63636px for buttons and input fields to maintain a consistent geometric style.
- Employ ghost button styles (Ink Black border, Canvas White background, Ink Black text) for secondary actions or outlined navigation.
- Prioritize natural, rich photography for project showcases, ensuring images are either contained within Ink Black cards or presented against Canvas White backgrounds.

### Don'ts

- Avoid using drop shadows or complex gradients; the system relies on flat surfaces and strong contrasts for visual hierarchy.
- Do not introduce additional chromatic colors beyond Accent Green (#e7feda) for UI elements; maintain the strict monochrome and subtle accent palette.
- Do not deviate from the specified font sizes and line heights for Feature Deck and ABC Diatype to preserve the distinct typographic rhythm.
- Do not use Accent Green (#e7feda) for text or primary interactive elements; its role is purely for background segmentation.
- Avoid cluttered layouts; use Element Gap (19px) to provide ample breathing room between elements and Section Gap (59px) between major content blocks.
- Do not apply standard, uniform border radii to all elements; distinguish between card/image radii (9.27273px) and button/input radii (4.63636px).

### Layout

The site employs a contained layout with no explicit `pageMaxWidth` detected, suggesting content adapts to available width while maintaining comfortable margins. The hero section features a large, impactful display text centered over a contextual image or flat background. Section rhythm is established through alternating Canvas White and Accent Green backgrounds, creating clear visual breaks. Content is often presented in a two-column layout with imagery accompanying text, or in multi-column card grids for project showcases. Navigation is minimal, often appearing as floating, self-contained interactive components rather than a fixed header.

### Imagery

The site heavily features high-quality, product-focused or editorial photography, often cropped tightly or presented within a clean layout. Images are typically raw, natural, and realistic, avoiding heavy filtering or stylized effects. Photography serves both decorative and explanatory roles, showcasing design projects in context or as standalone artistic elements. Icons, when present, appear to be outlined and monochromatic, complementing the brand's minimalist aesthetic. Imagery occupies significant visual space, often as hero backgrounds or within detailed project grid items.
