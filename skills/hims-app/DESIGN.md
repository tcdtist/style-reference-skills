---
version: alpha
name: Hims App
description: The Hims App design system projects a clean, spacious, and subtly playful aesthetic. A generous use of white space and large, rounded corner elements creates an open, approachable feel. Typography is dominant, with large, bold headings drawing attention, while a single vivid violet provides a consistent brand accent. Shadows are soft and diffuse, adding a gentle sense of depth without harsh contrasts, framing content on the bright canvas.
colors:
  app-brand-violet: "#5d48db"
  canvas-white: "#ffffff"
  ink-black: "#000000"
  subtle-gray: "#f0f0f0"
  deep-charcoal: "#2e2e2e"
  border-light-gray: "#e0e0e0"
  muted-text-gray: "#8f8f8f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.16px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.33
    letterSpacing: -0.19px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: -0.22px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.24px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.15
    letterSpacing: -0.29px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -0.38px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 1.04
    letterSpacing: -0.47px
  display:
    fontFamily: "system-ui"
    fontSize: 81px
    lineHeight: 1
    letterSpacing: -0.97px
spacing:
  cardRadius: 45px
  elementGap: 20px
  sectionGap: 90px
components:
  primary-header:
    role: Top navigation bar
  download-now-button:
    role: Primary Call to Action in header
  hero-section-card:
    role: Prominent content container for hero sections
  feature-section-heading:
    role: Large, descriptive titles for major sections
  informational-card:
    role: General purpose content container
  list-item-with-subtle-gray-background:
    role: Standard list item for structured content
---

## Overview

**North Star:** Rounded digital canvas.

The Hims App design system projects a clean, spacious, and subtly playful aesthetic. A generous use of white space and large, rounded corner elements creates an open, approachable feel. Typography is dominant, with large, bold headings drawing attention, while a single vivid violet provides a consistent brand accent. Shadows are soft and diffuse, adding a gentle sense of depth without harsh contrasts, framing content on the bright canvas.

### Do's

- Always use Canvas White (#ffffff) as the primary background for all UI elements to maintain a spacious and clinical aesthetic.
- Apply App Brand Violet (#5d48db) sparingly, primarily for high-impact headings and key brand identifiers where a vibrant accent is desired.
- Utilize large border radii, specifically 45px for cards and 52px for interactive elements in the header, to promote a soft, approachable feel.
- Employ Sofia font for all text content, selecting weights 400 or 500 depending on hierarchy, and meticulously adjust letter-spacing as per the type scale.
- Introduce depth and hierarchy through soft, diffuse shadows like rgba(0, 0, 0, 0.12) 0px 27px 104px 0px for prominent cards, rather than hard lines or strong gradients.
- Maintain generous sectionGap of 90px and elementGap of 20px to ensure an uncluttered and spacious layout.
- Ensure all interactive elements, even ghost buttons, have a clearly defined shadow or border for discoverability.

### Don'ts

- Avoid using saturated background colors for primary content areas; stick to Canvas White or Subtle Gray to maintain visual lightness.
- Do not introduce sharp corners or small radii; the system's roundedness is a core visual identity.
- Refrain from heavy, opaque dividers or borders. Instead, use Border Light Gray (#e0e0e0) or Subtle Gray (#f0f0f0) backgrounds for visual separation.
- Do not apply bold or black text for every heading; utilize Deep Charcoal (#2e2e2e) for impactful but softer headings and Muted Text Gray (#8f8f8f) for secondary information.
- Avoid complex, multi-color gradient backgrounds on UI components; reserve gradients for large, atmospheric background elements if necessary, ensuring they are subtle.
- Do not use letter-spacing values tighter than -0.0570em for large display text or looser than default for body text.
- Do not cluster elements too closely; always respect the established elementGap of 20px and sectionGap of 90px.

### Layout

The page primarily employs a max-width contained layout, though the hero section often creates a sense of full-bleed through background gradients and centered elements on a Canvas White backdrop. The hero features a large, centered headline on a gradient background, followed by a prominently placed device mockup showcasing the app. Sections maintain a consistent vertical rhythm with a 90px sectionGap. Content is typically arranged in centered stacks or two-column text-left/image-right configurations. Call-to-action elements like the 'Download now' button are consistently placed in the top right of the sticky header. The composition feels spacious and organized, prioritizing legible content delivery.

### Imagery

The visual language for imagery is characterized by product screenshots within device mockups (specifically phones), often held by hands with diverse skin tones. These images serve a product showcase and explanatory role. Abstract and atmospheric gradients are used in the background to provide mood without distracting from the central product. Icons are filled, bold, and black, representing objects or concepts directly without extraneous detail, emphasizing clear communication. Imagery is contained within rounded frames or device screens, emphasizing integration rather than raw, full-bleed visuals. Visuals are dominant within sections, balancing text-heavy areas.
