---
version: alpha
name: Surfshark
description: Surfshark's design system projects a dynamic, secure, and user-friendly online presence. It balances informative content with clear calls to action, leveraging high-contrast typography against clean achromatic surfaces. A vibrant red accent color signifies primary interactions, while a teal tone highlights key data points. Asymmetric large radii on cards and a distinct, rounded button style add a modern, approachable edge to the otherwise structured layout, creating an engaging yet trustworthy feel.
colors:
  midnight-ink: "#16191c"
  stormy-night: "#1e2327"
  deep-graphite: "#393e41"
  charcoal-grey: "#5b6065"
  light-grey: "#bfbfc0"
  silver-mist: "#dadadd"
  cloud-white: "#f9f9f9"
  pure-white: "#ffffff"
  primary-black: "#000000"
  shark-red: "#fa3556"
  ocean-teal: "#1ebfbf"
  harvest-gold: "#ffc200"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.71
    letterSpacing: 0.204px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.71
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.67
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.21
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.14
spacing:
  cardRadius: 48px
  buttonRadius: 12px
  elementGap: 4px
  sectionGap: 32px
components:
  primary-action-button:
    role: Critical call to action.
  accent-promotion-button:
    role: Highlighting special offers or deals.
  ghost-navigation-button:
    role: Secondary navigation or interactive elements.
  text-link-button:
    role: Minimal interactive elements without strong visual emphasis.
  dark-hero-card:
    role: Prominent information blocks on dark backgrounds.
  light-feature-card:
    role: Content presentation on light backgrounds.
  form-input-field:
    role: User input fields.
---

## Overview

**North Star:** Animated aquatic security

Surfshark's design system projects a dynamic, secure, and user-friendly online presence. It balances informative content with clear calls to action, leveraging high-contrast typography against clean achromatic surfaces. A vibrant red accent color signifies primary interactions, while a teal tone highlights key data points. Asymmetric large radii on cards and a distinct, rounded button style add a modern, approachable edge to the otherwise structured layout, creating an engaging yet trustworthy feel.

### Do's

- Use Shark Red (#fa3556) exclusively for primary calls to action to ensure visual hierarchy and prompt decisive interaction.
- Apply Inter font family with weights 400, 600, or 700. Do not use other weights.
- Utilize a 12px border-radius for all filled buttons to maintain a consistent friendly yet modern interaction style.
- Ensure headings use a generous line-height from the type scale values to improve readability and visual breathing room.
- Maintain high contrast (AAA minimum) for all text on background pairings, especially for critical information.
- Employ the 48px asymmetric radius (48px 0px 0px) for cards on the left edge of the screen, mirroring the brand's design language.
- Use Ocean Teal (#1ebfbf) specifically for highlighting key figures like prices or data points, not for interactive elements.

### Don'ts

- Do not use Harvest Gold (#ffc200) for primary action buttons; reserve it for distinct promotional banners or secondary accents.
- Avoid arbitrary border-radius values; always refer to the defined spacing.radius tokens (e.g., 48px for cards, 12px for buttons).
- Do not introduce new typefaces or weights outside of the specified Inter family and its defined weights.
- Refrain from using color for purely decorative purposes if it doesn't align with brand, accent, or semantic roles.
- Do not use the transparent Ghost Navigation Button style as a primary call to action, as it lacks sufficient visual weight.
- Do not stretch or distort imagery; maintain original aspect ratios and ensure crisp presentation.
- Avoid using a pageMaxWidth; the page content stretches fluidly, but sections may be contained internally.

### Layout

The page structure is full-bleed, adapting to the viewport width, with some sections containing content within a conceptual maximum width via internal left/right padding. The hero sections often feature large, impactful visuals on a dark background with centered, bold headlines. Subsequent sections alternate between light and dark themes, creating visual rhythm. Content is typically arranged in clear, stacked blocks or alternating text-left/image-right (or vice-versa) two-column layouts. Navigation is a persistent top bar featuring the brand logo, primary navigation links, and a prominent call-to-action button, ensuring constant access to key areas. Sections are generously spaced vertically, contributing to a comfortable density.

### Imagery

The visual language for imagery is a mix of high-quality product renders, dark-mode focused lifestyle photography, and clean, geometric line icons. Photography tends to be dark and moody with a warm glow, often showing individuals using devices in comfortable, ambient settings, emphasizing privacy and security. Product visuals are crisp and isolated, often placed within abstract or stylized contexts (like the jelly cake). Icons are outlined, conveying functionality without visual clutter, with occasional fills for emphasis. Imagery serves both decorative atmosphere within dark sections and explanatory content within light sections.
