---
version: alpha
name: Arcade
description: Arcade presents a composed, polished aesthetic, prioritizing clarity and directness. The dominant whites and near-grayscale elements are punctuated by a single, vibrant blue, focusing attention and directing interaction. Subtle shadows build hierarchy and give a tactile quality to elements, making the UI feel grounded and precise. The generous use of rounded corners softens the otherwise direct typography, creating an accessible but authoritative tone.
colors:
  canvas-white: "#ffffff"
  whisper-gray: "#f9fafb"
  outline-ash: "#e5e7eb"
  graphite-text: "#111827"
  slate-text: "#4b5563"
  silver-text: "#374151"
  steel-accent: "#70747d"
  arcade-blue: "#2142e7"
  deep-blue-shadow: "#182fa5"
  dark-gradient-base: "#111827"
  blue-gradient-accent: "#2142e7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: -0.36px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.17
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.07
    letterSpacing: -1.6px
spacing:
  cardRadius: 16px
  buttonRadius: 12px
  elementGap: 8px
  sectionGap: 96px
components:
  hero-url-input-with-tab-selector:
    role: 
  team-tab-selector-with-feature-list:
    role: 
  cta-button-group:
    role: 
  secondary-outlined-button:
    role: Secondary Action
  ghost-button:
    role: Navigation & Tertiary Action
  action-input-field:
    role: User Input with Action
  text-input-field:
    role: Standard User Input
  header-navigation-link:
    role: Primary Navigation
  status-chip:
    role: Informational Badge
  feature-card:
    role: Content Grouping
---

## Overview

**North Star:** Crisp Blueprint on White Canvas. Clean surfaces frame sharp typography and a singular, vibrant blue, like a detailed architectural plan on a clear white sheet, accented by a distinct highlight.

Arcade presents a composed, polished aesthetic, prioritizing clarity and directness. The dominant whites and near-grayscale elements are punctuated by a single, vibrant blue, focusing attention and directing interaction. Subtle shadows build hierarchy and give a tactile quality to elements, making the UI feel grounded and precise. The generous use of rounded corners softens the otherwise direct typography, creating an accessible but authoritative tone.

### Do's

- Prioritize Inter font for all text elements, leveraging weights 400-700. Reserve Balig Script for highly decorative brand elements if necessary, ensuring it never competes with Inter for readability.
- Use Arctic White (#ffffff) as the base background for most sections, broken by Whisper Gray (#f9fafb) for subtle differentiation, making content feel spacious and clear.
- Apply Arcade Blue (#2142e7) exclusively to primary calls to action and active states, ensuring high visibility and clear user pathways.
- Utilize border radii of 12px for buttons and navigation items, and 16px for input fields and general components, creating a soft but not overly rounded aesthetic.
- Implement consistent letter spacing: -0.0250em for 64px, -0.0200em for 48px, -0.0150em for 40px, -0.0100em for 36px and 30px, and -0.0070em for 28px and 24px, optimizing legibility for larger text.
- Apply subtle elevation provided by rgba(17, 24, 39, 0.04) box shadows to interactive elements and cards, giving a sense of depth and hierarchy without being heavy.

### Don'ts

- Do not introduce new vibrant colors outside of the defined Arcade Blue (#2142e7) palette; maintain the controlled use of color to avoid visual clutter.
- Avoid using harsh, abrupt transitions or sharp angles. Leverage the established border radii (12px, 16px, 72px) to maintain the soft, approachable feel.
- Do not use dark backgrounds for general body text sections; preserve the light-themed composition for readability and a composed appearance.
- Refrain from excessive use of gradient backgrounds. Limit them to hero sections or distinct banners to maintain their impact.
- Do not deviate from the specified typography scale and letter spacing values. Inconsistent typography disrupts the visual rhythm and perceived quality.
- Avoid arbitrary padding values; stick to the defined spacing scale (4px, 8px, 10px, 12px, 16px, 24px, 32px, 40px, 48px), especially for component internal spacing.

### Layout

The site employs a centered, max-width layout (1304px) for most content, providing a sense of order and focus. The hero section breaks this somewhat, featuring a full-width background gradient contrasted with a centered text block and an interactive input field. Sections generally maintain a consistent vertical spacing of 96px, with alternating content arrangements: either text stacked with a visual below, or a two-column layout with text on one side and a product image/visual on the other, creating a clear and scannable rhythm. Navigation is a sticky top bar with branding, links, and prominent calls to action.

### Imagery

This site uses product screenshots and abstract gradients. Product screenshots are typically presented as contained UI shots, sometimes with a subtle glow or frame, without full-bleed integration. The abstract gradients are vibrant blue organic shapes, soft-edged and contained to specific background sections like the hero or decorative elements, creating a dynamic, modern feel without sharp graphical elements. Icons are filled, mono-color SVG in the Graphite Text (#111827) color, often appearing in feature lists or interactive elements.
