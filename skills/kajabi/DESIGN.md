---
version: alpha
name: Kajabi
description: Kajabi's design system is a high-contrast, modern aesthetic pairing deep, commanding neutrals with crisp white surfaces. Typography is the primary visual driver, featuring compact, confident sans-serif headlines and functional body text. Components are minimalist and structured, emphasizing clear information hierarchy over decorative flourishes, with sharp edges and subtle radius rounding maintaining a serious, professional tone.
colors:
  midnight-ink: "#0a0a0a"
  canvas-white: "#ffffff"
  charcoal-surface: "#1f1f1e"
  ash-gray: "#e9e8e7"
  slate-text: "#535250"
  silver-border: "#e0dedc"
  stone-accent: "#949189"
  green-accent: "#405b50"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.45
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.45
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.43
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.6px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -1.8px
spacing:
  elementGap: 8px
  sectionGap: 40px
components:
  primary-dark-button:
    role: Call-to-action button for initiating key actions.
  ghost-light-button:
    role: Secondary action or navigational link with low visual hierarchy.
  light-button:
    role: Positive action button where contrast is needed against a dark background.
  input-field:
    role: Standard input for user data entry.
  dark-card:
    role: Container for content within dark sections.
  transparent-content-card:
    role: A minimal, borderless grouping element often used for media or subtle content organization.
---

## Overview

**North Star:** Crisp monochrome command panel on a limitless white canvas.

Kajabi's design system is a high-contrast, modern aesthetic pairing deep, commanding neutrals with crisp white surfaces. Typography is the primary visual driver, featuring compact, confident sans-serif headlines and functional body text. Components are minimalist and structured, emphasizing clear information hierarchy over decorative flourishes, with sharp edges and subtle radius rounding maintaining a serious, professional tone.

### Do's

- Prioritize Haffer typography for all text elements, maintaining negative letter-spacing for larger sizes to achieve a compact aesthetic.
- Use Midnight Ink (#0a0a0a) for primary text and dark backgrounds, and Canvas White (#ffffff) for page backgrounds and light surfaces, establishing the strong monochrome base.
- Apply a 2px border-radius consistently to all interactive elements and contained components like buttons and image frames.
- Establish clear visual hierarchy using distinct solid borders, defaulting to 1px wide lines using Silver Border (#e0dedc) for subtle separation.
- Maintain generous section and element spacing to provide ample breathing room, adhering to 4px increments; use Element Gap (8px) for individual elements and Card Padding (20px) for internal card content.
- Utilize Charcoal Surface (#1f1f1e) for elevated cards or distinct sections to create depth without relying on shadows.

### Don'ts

- Avoid decorative gradients or strong chromatic colors; restrict accents to Green Accent (#405b50) in specific, minimal use cases.
- Do not deviate from the Haffer font family; custom system fonts are not part of this brand's identity.
- Do not use box-shadows for elevation; rely on background color changes or borders to differentiate layers.
- Never create rounded corners greater than 2px on interactive elements unless designing specific pill-shaped components at 15984px.
- Avoid dense, information-heavy blocks; always ensure ample white space around content and within components.
- Do not use generic system UI elements; all components should map to the specified visual tokens.

### Layout

The page primarily uses a max-width contained layout, though the hero section is full-bleed with a centered headline over a dark background. Sections alternate between light and dark themes, creating distinct visual blocks. Content is often arranged in symmetrical stacks or two-column layouts with text and visuals balanced. Card grids are used for features, showcasing clear divisions between items. Overall density is comfortable, ensuring sufficient negative space.

### Imagery

The visual language for imagery is primarily photography: portrait-style headshots of individuals, cropped tightly and presented within square or slightly rounded frames. Product shots are also used, often contained with clean backgrounds. All imagery serves an explanatory or social proof role, rather than decorative. Iconography is minimalist, outlined, and monochromatic, integrated seamlessly into the text, retaining a lightweight feel.

### Elevation

This design system deliberately avoids visible box-shadows. Elevation and hierarchy are conveyed through changes in background color (e.g., Charcoal Surface on Midnight Ink) and crisp, defined borders, maintaining a flat, modern aesthetic.
