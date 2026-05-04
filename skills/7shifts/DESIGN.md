---
version: alpha
name: 7shifts
description: 7shifts employs a functional and approachable design system, combining a crisp white and dark gray achromatic base with a singular vivid blue accent for key interactions. Typography provides clear hierarchy, with a custom `Regular` font family for all content up to large headlines. Components are lightweight and often borderless, emphasizing content over chrome, while subtle rounding creates a friendly, modern feel across cards and buttons. The system balances directness with a degree of visual softness.
colors:
  canvas-white: "#ffffff"
  blueprint-blue: "#4570ff"
  ink-black: "#000000"
  divider-gray: "#e5e7eb"
  whisper-white: "#f1f0ec"
  muted-text-gray: "#6e6d6c"
  soft-orange-highlight: "#ff6808"
  spring-green: "#c6ff94"
  lavender-mist: "#ebdcff"
  sky-blue-light: "#d6e0ff"
  midnight-forest: "#244f47"
  deep-plum: "#c293f1"
  rich-indigo: "#193f78"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.28px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.45px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.33
    letterSpacing: -1.08px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.11
    letterSpacing: -3.2px
spacing:
  cardRadius: 20px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 24px
components:
  primary-call-to-action-button:
    role: High-priority action trigger
  ghost-navigation-button:
    role: Secondary navigation and internal links within headers.
  white-pill-button:
    role: General secondary action or tag.
  whisper-white-tag-button:
    role: Informational tags or filter options.
  standard-card:
    role: Content grouping, feature display, informational blocks.
  dark-overlay-card:
    role: Elevated content overlay or feature block on dark backgrounds.
  full-width-dark-feature-panel:
    role: Hero section content, prominent feature showcase.
  frosted-glass-card:
    role: Background for overlaid content, subtle visual interest.
---

## Overview

**North Star:** Crisp Utility, Rounded Edges

7shifts employs a functional and approachable design system, combining a crisp white and dark gray achromatic base with a singular vivid blue accent for key interactions. Typography provides clear hierarchy, with a custom `Regular` font family for all content up to large headlines. Components are lightweight and often borderless, emphasizing content over chrome, while subtle rounding creates a friendly, modern feel across cards and buttons. The system balances directness with a degree of visual softness.

### Do's

- Prioritize Blueprint Blue (#4570ff) for all primary calls-to-action to establish a consistent interactive focal point.
- Apply 9999px border-radius to all buttons for a friendly, pill-shaped aesthetic.
- Use Ink Black (#000000) for primary headlines and Canvas White (#ffffff) for card backgrounds, maintaining high contrast.
- Employ Divider Gray (#e5e7eb) for all hairline borders and subtle visual separations within components and between sections.
- Maintain a clear visual hierarchy with 'Regular' for body copy and 'Medium' for button text and subheadings.
- Utilize 20px border-radius for all standard cards to reinforce the consistent soft-edged design language.
- Implement the fixed vertical element gap of 8px when arranging discrete UI elements within components or sections.

### Don'ts

- Avoid using multiple vivid accent colors simultaneously; limit to Blueprint Blue for primary actions and occasional Soft Orange Highlight (#ff6808) for secondary emphasis.
- Do not introduce hard, sharp corners; use the established radii of 20px, 40px, or 9999px where appropriate.
- Refrain from using strong box-shadows or drop shadows; the system relies on flat surfaces and minimal elevation.
- Do not deviate from the 'Regular' and 'Medium' font families for core UI text; 'Nanum Pen Script' is reserved for highly decorative titles.
- Avoid using primary text in any color other than Ink Black (#000000) on light backgrounds or Canvas White (#ffffff) on dark backgrounds.
- Do not use overly complex gradients; the system favors solid colors and subtle accent washes.
- Avoid dense, information-heavy blocks; ensure generous padding (28px minimum for cards) and vertical spacing between elements.

### Layout

The page primarily uses a contained layout model, with content centered within a maximum width (implied, not explicitly stated as it's null, but visually constrained). The hero section typically features a large, centered headline over a white background, occasionally transitioning to a full-bleed dark feature panel at the bottom of the hero area. Section rhythm is driven by alternating background colors, moving between Canvas White (#ffffff) and Whisper White (#f1f0ec), punctuated by occasional full-bleed dark sections (Ink Black #000000) or colorful accent sections (e.g. Spring Green or Lavender Mist cards). Content is often arranged in symmetrical stacks or two-column text-left/image-right patterns. Card grids are utilized for features, maintaining consistent spacing. The navigation is a sticky top bar, containing text links, a primary CTA button, and a secondary login button.

### Imagery

The imagery style is a mix of product screenshots, often presented within mock UI frames, and abstract flat graphic illustrations for decorative purposes. Product screenshots are typically sharp, clear, and focused on showing the interface without distracting backgrounds. Illustrations are primarily flat, organic shapes, relying on brand colors (like Spring Green, Lavender Mist, and Sky Blue Light) to add a modern, soft visual texture. Icons are filled, with a consistent stroke weight where outlines exist, and are monochromatic in Ink Black or Canvas White, or tinted with Blueprint Blue for interactive states. Imagery primarily serves to explain or enhance content, acting as visual support and product showcases rather than decorative atmosphere. Density is moderate; imagery is used to break up text-heavy sections or highlight features.
