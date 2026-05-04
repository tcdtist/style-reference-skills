---
version: alpha
name: BitcoinOS
description: BitcoinOS projects a dark, futuristic command center aesthetic: deep charcoal canvases, stark white typography, and structural borders define its visual identity. Typography is oversized and confident, with a mix of condensed and expanded forms to create a distinct, almost monumental feel. Components are lightweight and often border-defined rather than filled, conveying a sense of precision and advanced technology. The overall impression is one of a high-tech interface, authoritative yet minimal.
colors:
  midnight-truffle: "#000000"
  digital-canvas: "#101010"
  ash-graphite: "#1a1a1a"
  slate-steel: "#272727"
  ghost-white: "#fffafa"
  muted-silver: "#bababa"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
    letterSpacing: 0.48px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.1
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.1
    letterSpacing: 0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 0.88
    letterSpacing: 0.64px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.8
  display:
    fontFamily: "system-ui"
    fontSize: 128px
    lineHeight: 0.8
spacing:
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 64px
components:
  ghost-button:
    role: Interactive elements with minimal visual footprint.
  outlined-button:
    role: Secondary action or navigation items.
  filled-primary-button:
    role: Main call to action.
  ghost-card:
    role: Structural container for content without visual background.
  standard-card:
    role: Content presentation with a clear visual boundary.
  dark-card:
    role: Content container for specific sections requiring a darker contrast.
  circular-card:
    role: Decorative or specific content cards with a rounded shape.
  text-input:
    role: User input fields.
  navigation-bar-item:
    role: Primary navigation links and sections.
---

## Overview

**North Star:** Dark Command Center

BitcoinOS projects a dark, futuristic command center aesthetic: deep charcoal canvases, stark white typography, and structural borders define its visual identity. Typography is oversized and confident, with a mix of condensed and expanded forms to create a distinct, almost monumental feel. Components are lightweight and often border-defined rather than filled, conveying a sense of precision and advanced technology. The overall impression is one of a high-tech interface, authoritative yet minimal.

### Do's

- Prioritize high contrast between text and background, using Ghost White (#fffafa) on Digital Canvas (#101010) or Midnight Truffle (#000000) on Ghost White for primary content.
- Use Review Condensed (900 weight, 72px or 128px) for all prominent headlines to convey authority and impact.
- Apply 16px border-radius as the default for most container elements like cards and images, with 8px for smaller interactive components like buttons.
- Utilize border-defined elements over solid fills for a lightweight, technical feel. For example, use Ghost Button with rgba(0,0,0,0) background and a Midnight Truffle (#000000) border.
- Maintain a clear vertical rhythm using 64px section gaps and 24px padding within content blocks.
- Employ the Slate Steel (#272727) as a background for secondary interactive components to subtly differentiate them from the main canvas.
- Use Midnight Truffle (#000000) and Ghost White (#fffafa) as the primary colors for borders and strokes to define structural elements.

### Don'ts

- Avoid using saturated or vibrant colors outside of specific, functional accents (if introduced later) to maintain the dark, industrial aesthetic.
- Do not deviate from the established font families and weights, especially for display typography, as it compromises the strong visual identity.
- Never introduce soft shadows or excessive elevation; the design leans into flat, distinct surfaces and sharp lines.
- Do not use generic padding values; stick to the 8px base unit and derived increments (16px, 24px, 64px) for consistent rhythm.
- Avoid decorative gradients or complex overlays that would detract from the stark, high-contrast visual language.
- Do not use small, light-weight typography for headings; ensure headings are always bold and impactful, using Review or Review Condensed.
- Do not use rounded corners larger than 16px on cards or main components, with the exception of specific decorative elements like the 48px or 100% radius examples.

### Layout

The page embraces a full-bleed layout for its hero and main sections, with content often centered within the dark canvas. The hero features a large, centered headline over an immersive abstract background. Section rhythm is primarily defined by consistent vertical spacing (64px) rather than alternating background colors, although subtle variations in dark neutrals exist. Content is frequently arranged in centered stacks or distinct blocks, with visual breaks created by strong typographic statements. Navigation consists of a minimalist sticky header with a hamburger menu for full navigation, and discrete vertical dot navigation along the right edge acting as prominent page anchors.

### Imagery

This design system primarily uses dark, moody abstract 3D renders and illustrative graphics embedded as backgrounds or within masked shapes. These visuals serve an atmospheric and conceptual role rather than directly showcasing products or people. When present, product-type imagery is tightly contained or stylized into geometric shapes. Icons are typically monolinear, white or transparent on dark, with moderate stroke weights. The overall density of imagery is balanced, providing visual interest without overwhelming the stark UI elements, and often creating a tunneling or portal-like effect.
