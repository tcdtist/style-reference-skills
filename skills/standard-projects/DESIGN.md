---
version: alpha
name: Standard Projects
description: Standard Projects employs a classic, content-focused visual style with strong typographic emphasis. It features a predominantly stark black-and-white canvas, using minimal surface elevation. A single, soft gray gradient provides subtle background shifts. Typography is the primary visual communicator, leveraging distinct font weights and sizes to establish hierarchy, complemented by a subtly rounded UI for controls that contrasts with the generally sharp, angular image presentation. The overall impression is one of confident, understated authority.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  charcoal-text: "#1a1a1a"
  fog-gray: "#f0f0f0"
  muted-gray: "#808080"
  pale-gray: "#c6c6c6"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: 0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.15
    letterSpacing: 0.2px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: 0.4px
spacing:
  cardRadius: 15px
  buttonRadius: 10px
  elementGap: 16px
  sectionGap: 32px
components:
  primary-action-button:
    role: Interactive element for key actions
  navigation-link:
    role: Primary site navigation items
  footer-navigation-bar:
    role: Sticky, contextual navigation
  ghost-badge:
    role: Categorization or subtle labeling
  project-card:
    role: Container for showcasing project visuals and titles
---

## Overview

**North Star:** Typographic Precision on White Canvas

Standard Projects employs a classic, content-focused visual style with strong typographic emphasis. It features a predominantly stark black-and-white canvas, using minimal surface elevation. A single, soft gray gradient provides subtle background shifts. Typography is the primary visual communicator, leveraging distinct font weights and sizes to establish hierarchy, complemented by a subtly rounded UI for controls that contrasts with the generally sharp, angular image presentation. The overall impression is one of confident, understated authority.

### Do's

- Prioritize FTAktual-Medium for all primary text, leveraging its consistent 0.01em letter-spacing for refined readability.
- Utilize Canvas White (#ffffff) as the dominant background color for clarity and a spacious feel.
- Employ Midnight Ink (#000000) for primary text and major interactive elements to ensure strong contrast and visual weight.
- Apply a 10px `border-radius` to all buttons and prominent navigation elements for a subtle, rounded friendliness.
- Maintain generous spacing: `32px` vertical `sectionGap` between major content blocks and `16px` `elementGap` horizontally/vertically for internal elements.
- Use Muted Gray (#808080) for all secondary and tertiary text to create a subtle hierarchy without harshness.
- Incorporate the 'Times' font only for specific decorative or branding text, ensuring its unique features (`ss01`, `ss03`) provide a stylistic counterpoint.

### Don'ts

- Avoid arbitrary use of multiple background colors; stick to Canvas White (#ffffff), Fog Gray (#f0f0f0), and Pale Gray (#c6c6c6) for surfaces.
- Do not introduce complex shadows or elevated components; the design system favors a flat, content-forward aesthetic.
- Refrain from using color to denote semantic states (e.g., green for success, red for error), as the system is achromatic-focused.
- Do not deviate from the specified `0.01em` letter-spacing for FTAktual-Medium to preserve its distinctive feel.
- Avoid adding strong borders to components unless they are specified for interactive elements like buttons or navigation to maintain visual lightness.
- Do not use type sizes outside the defined scale of 12px, 16px, 20px, 40px for FTAktual-Medium.
- Do not use `border-radius` values other than 0px, 10px, or 15px as these are the established design system values.

### Layout

The page maintains a full-width, full-bleed model, not confined by a `pageMaxWidth`. The hero section features a centered headline over a background that shifts between projects. Content is often arranged in a compact grid of visual project cards, typically showing a 3-column layout. Sections flow seamlessly with consistent vertical spacing of `32px` between major blocks, creating a spacious but continuous experience. Navigation is handled by a sticky footer bar, offering quick access to main sections.

### Imagery

The site predominantly uses product-focused photography and abstract graphics. Photography is often presented as clean, tight crops, sometimes against a white or neutral background, emphasizing the object without additional lifestyle context. Images appear within defined rectangular containers, maintaining sharp edges and isolated presentation. Icons, though not extensively visible, follow a monochrome, outlined style with consistent stroke weights. Imagery serves primarily as a decorative backdrop or as direct product showcases, forming a visually dominant element within a predominantly text-based layout with a balanced image-to-text density.
