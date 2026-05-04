---
version: alpha
name: Green Angel Syndicate
description: Green Angel Syndicate employs a clear, confident aesthetic blending corporate professionalism with a vibrant, eco-conscious identity. A crisp white canvas serves as the backdrop for substantial, dark typography, ensuring high readability. The brand's commitment is articulated through a distinctive teal accent color that highlights key actions and investment opportunities, with a playful pink used for sub-brand elements. Layouts are spacious and structured, using subtle elevation to differentiate content blocks while maintaining an overall light and airy feel.
colors:
  canvas-white: "#ffffff"
  deep-slate: "#1e293b"
  teal-accent: "#0f766e"
  ink-wash: "#171730"
  blush-pink: "#ec4899"
  subtle-gray: "#475569"
  border-grey: "#767676"
  dark-teal-footer: "#115e59"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.22px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -0.64px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -1.68px
spacing:
  cardRadius: 16px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 40px
components:
  primary-action-button:
    role: Main call-to-action for user interactions.
  ghost-navigation-link:
    role: Standard navigation and text links.
  detailed-feature-card:
    role: Displays key information or offers in a structured block.
  elevated-content-card:
    role: Highlights important content or form fields with more visual emphasis.
  informational-card:
    role: Simple containers for grouped content without strong visual emphasis.
  form-input-field:
    role: Standard input for user data.
---

## Overview

**North Star:** White canvas, teal commitment

Green Angel Syndicate employs a clear, confident aesthetic blending corporate professionalism with a vibrant, eco-conscious identity. A crisp white canvas serves as the backdrop for substantial, dark typography, ensuring high readability. The brand's commitment is articulated through a distinctive teal accent color that highlights key actions and investment opportunities, with a playful pink used for sub-brand elements. Layouts are spacious and structured, using subtle elevation to differentiate content blocks while maintaining an overall light and airy feel.

### Do's

- Prioritize Canvas White (#ffffff) for all main content backgrounds to maintain a clean, open feel.
- Use Deep Slate (#1e293b) for all primary text and main headings to ensure readability and authority.
- Apply Teal Accent (#0f766e) exclusively for primary call-to-action buttons and critical brand emphasis.
- Utilize Inter font consistently across all text elements, relying on weight and size variations for hierarchy.
- Implement a 6px border-radius for all interactive elements like buttons for a consistent soft touch.
- Maintain a comfortable density with 8px element gaps and 16px card padding for internal component spacing.
- Employ the subtle shadow rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px for most cards, reserving the stronger rgba(96, 97, 98, 0.15) 0px 4px 16px 0px for elevated, focused elements.

### Don'ts

- Do not introduce new typefaces; rely solely on Inter's weights and sizes.
- Avoid using Teal Accent (#0f766e) for decorative purposes or extensive text; it is reserved for key actions.
- Refrain from heavy, solid backgrounds within content sections; maintain Canvas White (#ffffff) as the dominant background.
- Do not use dark text colors against dark backgrounds; ensure high contrast ratios (e.g., #1e293b on #ffffff).
- Avoid arbitrary border-radii; adhere to 6px for buttons, 16px for most cards, and 52px for tags.
- Do not deviate from the established spacing system; use 8px or multiples for consistent rhythm.
- Do not use highly saturated colors for text or backgrounds unless it's the specified Blush Pink (#ec4899) accent for specific highlights.

### Layout

The page primarily uses a max-width contained layout, approximately 1200px, centered on the screen. The hero section is full-width with a generous pink-tinted background, featuring a prominent, centered headline and a left-aligned descriptive paragraph. Content sections below often follow a three-column card grid pattern for features or alternating text-left/image-right blocks. Vertical spacing between sections is generous, ensuring comfortable readability and breathing room. A sticky header with minimal navigation is present at the top, and the footer is a distinct dark teal block with copyright information and secondary links.

### Imagery

The imagery focuses on a mix of authentic, often slightly desaturated, photography depicting people in professional settings (collaborating, meeting) and natural landscapes with an environmental focus (snow-capped mountains). These are typically contained within rectangular frames, sometimes with subtle rounded corners, and are used to convey both human connection and the environmental mission. Icons are simple, outlined, and monochromatic, used sparingly for quantitative metrics and visual reinforcement.
