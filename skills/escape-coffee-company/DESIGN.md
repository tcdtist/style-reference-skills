---
version: alpha
name: Escape Coffee Company
description: Escape Coffee Company presents a rugged, textural commerce experience. High-contrast typography emphasizes bold statements, while a carefully curated achromatic palette allows rich product photography and content backgrounds to dominate. Interaction elements are minimal and integrated, often appearing as subtle outlines or text against dark neutral backgrounds, preserving a raw, authentic feel.
colors:
  canvas-white: "#f5f4f2"
  graphite-ink: "#151515"
  asphalt-black: "#000000"
  pale-stone: "#ebe9e6"
  fog-gray: "#929292"
  pure-white: "#ffffff"
  outline-gray: "#8a8a8a"
  subtle-border: "#e3e3e3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.35
    letterSpacing: 0.43px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: 0.44px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
    letterSpacing: 0.53px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.06
    letterSpacing: 0.51px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1
    letterSpacing: -0.5px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 0.85
    letterSpacing: -1.5px
  display:
    fontFamily: "system-ui"
    fontSize: 250px
    lineHeight: 0.85
    letterSpacing: -2px
spacing:
  cardRadius: 16px
  buttonRadius: 7px
  elementGap: 10px
  sectionGap: 40px
components:
  filled-primary-button:
    role: Interactive element
  ghost-button:
    role: Interactive element
  text-link-button:
    role: Interactive element
  circular-ghost-icon-button:
    role: Interactive element
  product-card:
    role: Display content
  standard-input-field:
    role: User input
  full-width-input-field:
    role: User input
---

## Overview

**North Star:** Raw Concrete Canvas — Bold typography and rich textures anchor a tactile, achromatic experience.

Escape Coffee Company presents a rugged, textural commerce experience. High-contrast typography emphasizes bold statements, while a carefully curated achromatic palette allows rich product photography and content backgrounds to dominate. Interaction elements are minimal and integrated, often appearing as subtle outlines or text against dark neutral backgrounds, preserving a raw, authentic feel.

### Do's

- Use Graphite Ink (#151515) for all primary text content to maintain strong contrast against lighter backgrounds.
- Apply Canvas White (#f5f4f2) as the default page background and for subtle UI element borders.
- Prioritize TWK Lausanne for all body copy and standard headings, adjusting weight and letter spacing according to the type scale for functional variation.
- Reserve Molitor for large, impactful headlines (e.g., hero sections) to create significant visual presence.
- Ensure all interactive elements, like buttons, maintain a minimum border-radius of 7px, with product cards using 16px, for subtle softening without appearing overly rounded.
- Utilize 10px as the standard element gap for arranging items within cards or small groupings.
- Employ the Ghost Button variant (transparent background, Graphite Ink border, no radius) for secondary actions or navigation links to maintain a light UI footprint.

### Don'ts

- Do not introduce new saturated colors; the palette is strictly achromatic with minimal, functional color accents for specific text states.
- Avoid applying heavy drop shadows; elevation is primarily achieved through background color shifts and subtle borders.
- Do not use Molitor or Garaje for body text; their distinct characteristics are intended for display and emphasis only.
- Refrain from using border-radii smaller than 3px or deviating from the established 7px (buttons), 10px (badges), 16px (cards), and 50% (circular) values.
- Do not use generic padding values; adhere to the 16px card padding and 10px element gap for consistent content density.
- Avoid dense, information-heavy sections; ensure comfortable spacing and visual breaks between content blocks.

### Layout

The site employs a primarily contained layout, utilizing a max-width for content sections, while the hero section breaks this with a full-bleed background image. The hero features a massive, split-word headline ('Go Against The Grain') overlaid directly onto the background, creating immediate impact. Sections generally flow with consistent vertical spacing, often alternating between visual styles (e.g., full-bleed image to white contained section). Content arrangement frequently uses left-aligned text with visual elements on the right, or centered stacks for product listings. There's an underlying grid for product display, likely 3-column, allowing for clear presentation of items. Density varies from image-heavy, spacious heroes to more compact product detail areas. Navigation consists of a sticky top bar and a thin, vertical sidebar on the right for utility links and a hamburger menu.

### Imagery

Imagery on Escape Coffee Company is characterized by raw, sometimes grunge-like, high-quality photography interwoven with product shots. The treatment is often full-bleed for hero sections, showing realistic textures like snow, grain, or misty landscapes, creating a mood. Product photography features tight crops of coffee bags or cups, often on contrasting surfaces. There are also detailed, almost blueprint-like illustrations on product packaging, which are abstract and functional. Icons are minimalist, outlined, and monochromatic, typically in Graphite Ink (#151515) or Pure White (#ffffff). Imagery plays a dual role: setting an atmospheric mood and clearly showcasing product details, dominating visual space in hero and collection sections.
