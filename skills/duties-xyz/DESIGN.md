---
version: alpha
name: Duties.xyz
description: This design feels like a stark, industrial space, where information is presented with an almost raw honesty. The heavy, irregular custom typefaces create a sense of directness, balanced by a clean paper-like background and compact, precise layouts. The visual language emphasizes functionality and impact over ornate aesthetics, making bold statements through strong typography and structured content.
colors:
  canvas: "#f1f0ee"
  inkwell: "#252525"
  pitch-black: "#000000"
  stone-wall: "#dbdad9"
  faded-mint: "#a7beb1"
  accent-blue: "#0000ee"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  display-sm:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.8
    letterSpacing: -0.067px
  display-md:
    fontFamily: "system-ui"
    fontSize: 128px
    lineHeight: 0.8
    letterSpacing: -0.067px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 180px
    lineHeight: 0.8
    letterSpacing: -0.06px
spacing:
  buttonRadius: 32px
  sectionGap: 40-60px
components:
  status-bar-duties-info-strip:
    role: 
  about-section-body-cta-button:
    role: 
  project-card-portfolio-item:
    role: 
  primary-action-button:
    role: Interactive element
  navigation-link:
    role: Navigation
  menu-trigger:
    role: Navigation
  sub-menu-item:
    role: Navigation
  intro-heading:
    role: Heading
  about-section-body:
    role: Body Text
  project-card:
    role: Content display
---

## Overview

**North Star:** Raw concrete with meticulous stenciling.

This design feels like a stark, industrial space, where information is presented with an almost raw honesty. The heavy, irregular custom typefaces create a sense of directness, balanced by a clean paper-like background and compact, precise layouts. The visual language emphasizes functionality and impact over ornate aesthetics, making bold statements through strong typography and structured content.

### Do's

- Use AS Therma Bold Condensed for all display-level headlines to enforce the 'brave' aesthetic, ensuring -0.06em letter spacing on larger sizes.
- Maintain a clear hierarchy using Pitch Black (#000000) for primary headings and Inkwell (#252525) for body text and secondary elements.
- Employ the 32px border radius for all interactive buttons and menu items to create visual consistency for actionable elements.
- Utilize Canvas (#f1f0ee) as the dominant page background to provide a clean, high-contrast base for all content.
- Apply `PP Neue Montreal Mono Medium` with its specific font features ('case', 'dlig', 'ss04', 'ss07', 'ss08', 'zero') for structured text and metadata to introduce a technical, precise feel.
- Use 10px or 20px horizontal padding consistently for element grouping and spacing within compact sections.

### Don'ts

- Avoid generic serif or highly decorative fonts that would dilute the brutalist-industrial feel of the display typography.
- Do not introduce strong chromatic colors beyond the Accent Blue for interactive elements, as it would disrupt the monochrome foundation.
- Do not use subtle shadows or gradients, as the design relies on stark contrast and flat surfaces for depth.
- Avoid soft, organic shapes; stick to sharp edges and predefined radii like 8px or 32px for purposeful geometric form.
- Do not break content out of the Canvas (#f1f0ee) or Stone Wall (#dbdad9) backgrounds with arbitrary colors.
- Do not use letter spacing greater than 'normal' for body text; only the display fonts should have negative letter spacing for effect.

### Layout

The page primarily follows a max-width contained model, centered on the Canvas (#f1f0ee) background. The hero section features a large, visually dominant headline (`AS Therma Bold Condensed`) stacked centrally or slightly offset. Content sections are compact, using a dense 'elementGap' driven flow, often with horizontal scrolling sections for portfolio items. There's a consistent vertical rhythm, but sections are differentiated more by content type and typography than by alternating background colors. Navigation is minimal, often integrated into the footer or revealed by a small 'Menu' button. The layout feels less like a traditional grid and more like carefully arranged boxes of information, providing a sense of constraint and precision.

### Imagery

The site predominantly uses product photography of tech accessories (phone cases) with a stark, almost scientific treatment — objects are isolated on neutral or abstract backgrounds, often with rocks or lunar-like surfaces, emphasizing their robust or technical nature. Illustrations, when present (like the pizza slices), are flat, playful, and outlined, offering a humanizing contrast to the otherwise functional aesthetic. Images are usually contained within rectangular frames with 8px or 12px corner radii, occasionally appearing full-bleed or with parallax-like independent motion. There's a clear emphasis on showcasing work and products directly, with imagery serving an explanatory or portfolio function rather than purely decorative.
