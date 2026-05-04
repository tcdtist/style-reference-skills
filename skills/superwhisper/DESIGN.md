---
version: alpha
name: Superwhisper
description: This design system evokes a 'celestial command center' feel, achieved through deep, gradient-rich dark backgrounds and high-contrast white typography. Vivid, almost neon-like accent colors emerge sparingly against the darkness, providing critical points of focus and interactivity. The primary visual tension arises from the interplay of vast, ethereal gradients and sharp, contained UI elements with precise 9px rounded corners and optional pill shapes for actions.
colors:
  midnight-eclipse: "#000000"
  starless-night: "#030719"
  twilight-ink: "#1C1D1F"
  ghostly-gray: "#E5E7EB"
  deep-ocean: "#001B33"
  frost: "#FFFFFF"
  ash-gray: "#333333"
  iron-gray: "#666666"
  slate-gray: "#70757C"
  pewter: "#999999"
  cloud: "#CCCCCC"
  electric-blue: "#0088FF"
  vivid-green: "#16C253"
  sunset-orange: "#E6714F"
  goldenrod: "#FFB764"
  magenta-burst: "#B855E7"
  sunshine-yellow: "#FFDD00"
  crimson-red: "#FF5252"
  teal-glow: "#1CECBb"
  fuchsia-flare: "#DD55e7"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.01px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.025px
  heading:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 1.2
    letterSpacing: -0.037px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.07
    letterSpacing: -0.05px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.06
    letterSpacing: -0.057px
spacing:
  elementGap: 16px
  sectionGap: 32px
components:
  primary-ghost-button:
    role: Call to action
  pill-download-button-light:
    role: Download action
  pill-download-button-dark:
    role: Download action
  navigation-link:
    role: Navigation element
  feature-card-gradient-bg:
    role: Content display
  standard-card-white-bg:
    role: Content display
  success-badge:
    role: Status indicator
  warning-badge:
    role: Status indicator
  form-input:
    role: Data entry
  header-download-button:
    role: Primary Navigation CTA
---

## Overview

**North Star:** Celestial Command Center: A dark, gradient-infused UI where sharp, functional elements glow with purpose against an expansive, cosmic void.

This design system evokes a 'celestial command center' feel, achieved through deep, gradient-rich dark backgrounds and high-contrast white typography. Vivid, almost neon-like accent colors emerge sparingly against the darkness, providing critical points of focus and interactivity. The primary visual tension arises from the interplay of vast, ethereal gradients and sharp, contained UI elements with precise 9px rounded corners and optional pill shapes for actions.

### Do's

- Prioritize `Midnight Eclipse` (#000000) for all page backgrounds when not using gradients, to maintain the dark theme.
- Use `Frost` (#FFFFFF) for all primary text on dark backgrounds and `Ghostly Gray` (#E5E7EB) for secondary text and borders.
- Apply `9px` border-radius as the default for most UI elements, especially interactive components and containers, and `9999px` for all pill-shaped buttons and tags.
- Utilize `Electric Blue` (#0088FF) as the primary accent color for all interactive states, active indicators, and prominent CTAs.
- Maintain `16px` as the default `elementGap` between closely related UI components and `32px` for `sectionGap` between distinct content blocks.
- Employ the Inter font family for all textual content, leveraging its range of weights from 300 to 700 to establish clear typographic hierarchy.
- When incorporating vivid gradients like `Nebula Horizon`, ensure text overlay is `Frost` (#FFFFFF) for optimal contrast and readability.

### Don'ts

- Avoid using `Electric Blue` (#0088FF) as a primary background color; reserve it strictly for accents and interactive elements.
- Do not introduce sharp corners on interactive elements; maintain `9px` or `9999px` radius for consistency.
- Refrain from using light backgrounds or `Frost` (#FFFFFF) as the default page canvas; it should only appear on purposefully elevated cards or specific content sections.
- Do not deviate from the Inter font family for headings and body text, unless for decorative elements using 'Flow Circular' as specified.
- Avoid generic, full-bleed images without context; imagery must be contained or integrate seamlessly into the gradient backgrounds.
- Do not use subtle shadows on dark backgrounds; if elevation needs a shadow, ensure it's a prominent, dark `rgba(0, 0, 0, 0.25)` or an inset white shadow to define edges.

### Layout

The page primarily uses a max-width contained layout, likely centered, against a full-bleed dark background or gradient. The hero section features a full-bleed gradient (`Nebula Horizon` or `Twilight Gradient`) with a large, centered headline and aligned call-to-action buttons. Content sections alternate between these deep gradient backgrounds and occasional `Frost` (#FFFFFF) cards, creating a rhythmic dark/light contrast. Information is often arranged in centered stacks or alternating 2-column text + image layouts. Feature sets are presented in grid structures, potentially 3 or 4 columns, with distinct card backgrounds. Spacing is comfortable, allowing elements to breathe. The navigation is a sticky top bar with left-aligned links and a prominent 'Download' button, maintaining presence across scrolls.

### Imagery

The visual language is characterized by abstract, ethereal gradient backgrounds that suggest cosmic or digital expanses. Interspersed are realistic or subtly stylized product screenshots (laptops, phones) which are often cropped and contained, emphasizing the software's integration into devices. Photography of people is minimal and high-contrast, using silhouettes against dark backgrounds to represent the user. Icons are primarily monochromatic, either `Frost` or `Ghostly Gray` fills with slight `Ghostly Gray` strokes, occasionally accented with `Electric Blue` or other brand colors. They appear mostly outlined, with a moderate stroke weight, and follow a general system icon style. Imagery serves both decorative atmosphere and explicit product demonstration, with a lower density of visual content than text-heavy sites but used strategically for impact. Visuals are typically contained, not full-bleed, and often integrate with the subtle blur/gloss effects.
