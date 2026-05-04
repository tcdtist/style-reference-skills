---
version: alpha
name: Wizz
description: Wizz embraces a bold, high-contrast dark theme with a vibrant fuchsia accent color that creates a playful, energetic atmosphere. Typography is a central element, using distinct custom sans-serif typefaces for sharp, impactful headlines and clear body text. Surfaces are mostly dark and flat, relying on the single accent color for primary actions and highlights, with subtle elevation for key interactive elements.
colors:
  midnight-void: "#000000"
  ghost-white: "#ffffff"
  steel-gray: "#dadada"
  ink-wash: "#444444"
  charcoal: "#292929"
  cloud-mist: "#eeeeee"
  wizz-fuchsia: "#ff3d9e"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.5px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 0.85
    letterSpacing: -1px
spacing:
  cardRadius: 12px
  buttonRadius: 12px
  elementGap: 10px
  sectionGap: 80px
components:
  primary-action-button:
    role: The main call to action button.
  ghost-header-button:
    role: Used for secondary actions in the header.
  nav-link:
    role: Standard navigation item with minimal styling.
  cookie-consent-card:
    role: Information panel for cookie settings.
  text-input-dark:
    role: Standard text input field in a dark context.
  text-input-light:
    role: Standard text input field in a light context.
---

## Overview

**North Star:** Fuchsia-powered dark mode

Wizz embraces a bold, high-contrast dark theme with a vibrant fuchsia accent color that creates a playful, energetic atmosphere. Typography is a central element, using distinct custom sans-serif typefaces for sharp, impactful headlines and clear body text. Surfaces are mostly dark and flat, relying on the single accent color for primary actions and highlights, with subtle elevation for key interactive elements.

### Do's

- Use Midnight Void (#000000) as the primary background for all major sections unless otherwise specified.
- Apply Wizz Fuchsia (#ff3d9e) for all primary calls to action, ensuring text color contrasts sufficiently.
- Utilize 12px border radius for all inputs, buttons, and cards to maintain a consistent soft, modern feel.
- Employ PolySans Median for all headings to leverage its distinct character, varying weights as needed for hierarchy.
- Maintain a clear visual hierarchy by contrasting Ghost White (#ffffff) for primary text on dark backgrounds and Midnight Void (#000000) for text on lighter neutral sections.
- Use a 999px border radius (pill shape) for all ghost buttons and small informational tags in the header.
- Apply Steel Gray (#dadada) for subtle dividers, borders, and muted supporting text.

### Don'ts

- Avoid generic system default colors; exclusively use colors from the defined palette.
- Do not use multiple accent colors; Wizz Fuchsia (#ff3d9e) is the sole vibrant accent for interactivity and brand highlighting.
- Do not introduce heavy shadows or gradients on elements; maintain a largely flat and sharp aesthetic with subtle elevation for key interactive components.
- Avoid using serif fonts or highly decorative typefaces; adhere strictly to the PolySans family and Inter for all textual content.
- Do not deviate from the established border radii for components; the varied but specific radii (12px, 999px, 24px) are a key part of the brand's visual identity.
- Do not use broad, full-width content sections; contain most content within a defined horizontal width for better readability and structure.
- Avoid overly bright or light backgrounds for main content areas; maintain the dark-mode aesthetic predominantly.

### Layout

The page primarily uses a full-bleed layout for background elements and a centered, contained content model for text and components, with an implicit max-width. The hero section often features a full-width gradient backdrop with a large, centered headline. Content sections alternate between visually distinct blocks, often presenting a two-column layout with text on one side and a visual (like a phone screenshot or user gallery) on the other. Vertical rhythm is established through consistent section gaps. Navigation is a sticky top bar with pill-shaped buttons and subtly styled links.

### Imagery

The site uses a mix of dark, immersive gradients for hero sections and UI surfaces (blending purple, orange, pink), contrasted with clean, product-focused photography featuring phone screens and diverse user profile images. Graphics are minimal, relying on simple icons (likely outlined, matching the site's generally sparse visual style). Imagery is primarily decorative atmosphere for the hero and expressive content for user representation, maintaining a high-contrast aesthetic against dark backgrounds.
