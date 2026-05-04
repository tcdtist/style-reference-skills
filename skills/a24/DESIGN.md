---
version: alpha
name: A24
description: A24’s visual design is a stark, high-contrast exploration of cinematic black and white. It features an almost entirely achromatic palette, punctuated by bold, unapologetic typography that dictates hierarchy through size and placement rather than color. Layouts are spacious, almost sparse, creating a gallery-like feel where content commands attention. Interactive elements are minimal, often border-only or ghost-like, preserving the strong monochromatic aesthetic.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  fog: "#eeeeee"
  graphite: "#888888"
  ash-gray: "#cacaca"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.07
    letterSpacing: -0.009px
  display:
    fontFamily: "system-ui"
    fontSize: 74px
    lineHeight: 0.92
    letterSpacing: -0.04px
spacing:
  elementGap: 9px
  sectionGap: 96px
components:
  ghost-button-light-theme:
    role: Interactive element (e.g., 'Shop Now', 'Listen Now')
  ghost-button-dark-theme:
    role: Interactive element (e.g., 'Shop Now', 'Listen Now')
  newsletter-modal-input:
    role: Email input field within modals
  newsletter-modal-button:
    role: Submit button for newsletter signup
  navigation-link-primary:
    role: Main navigation items
  navigation-link-muted:
    role: Secondary navigation items or footer links
  modal-overlay:
    role: Background for pop-up modals
---

## Overview

**North Star:** Monochromatic cinematic gallery.

A24’s visual design is a stark, high-contrast exploration of cinematic black and white. It features an almost entirely achromatic palette, punctuated by bold, unapologetic typography that dictates hierarchy through size and placement rather than color. Layouts are spacious, almost sparse, creating a gallery-like feel where content commands attention. Interactive elements are minimal, often border-only or ghost-like, preserving the strong monochromatic aesthetic.

### Do's

- Use Midnight Ink (#000000) as the primary text color on light backgrounds and Canvas White (#FFFFFF) for text on dark backgrounds to ensure high contrast.
- Apply NB International Web at weight 400 for all body copy and standard UI text, reserving weight 500 for bolder headings and key callouts.
- Maintain a 0px border-radius across all interactive elements, containers, and images to enforce a sharp, deliberate aesthetic.
- Utilize Ghost Buttons (transparent background, text matching its border color) for all primary actions, distinguishing them with text color and subtle borders rather than solid fills.
- Employ consistent vertical spacing of 96px for main section separation, establishing a clear rhythm and generous breathing room between content blocks.
- Prioritize text and bold typography as the primary means of conveying visual hierarchy; avoid decorative elements or heavy gradients.
- Use NB International Mono Web 15px with -0.0650em letter spacing for any stylized metadata or specific emphasis where a precise, technical tone is needed.

### Don'ts

- Do not introduce saturated colors; the palette is strictly achromatic with black, white, and a range of grays.
- Avoid using box-shadows or other elevation techniques; the design relies on flat surfaces and high contrast for definition.
- Do not use default browser link styling; all links should be explicitly styled with NB International Web and only reveal an underline on hover/focus.
- Do not introduce rounded corners; all elements should adhere to the strict 0px border-radius.
- Avoid excessive imagery; when images are used, they should be high-contrast, often black and white, and serve a functional or editorial purpose within the gallery-like layout.
- Do not add heavy borders or background fills to buttons; maintain the ghost button aesthetic.
- Avoid centered text blocks for large content sections; prefer left-aligned typography for readability and structured presentation.

### Layout

The page primarily uses a max-width contained layout, though some sections, particularly on dark backgrounds, appear full-bleed. The hero pattern often involves a centered headline over a dark background or a split text+visual approach. Section rhythm is driven by alternating light (#eeeeee) and dark (#000000) bands, creating a distinct visual flow. Content is arranged in flexible patterns, including centered stacks for headlines and calls to action, as well as alternating text-left/image-right compositions. The absence of heavy grids creates a spacious, almost architectural feel. Navigation is handled by a minimal sticky top header with a hamburger menu for more options, reinforcing the clean, uncluttered aesthetic.

### Imagery

Imagery treatment varies. On light backgrounds, product shots often appear as contained, slightly offset elements. For editorials or film promotion, imagery can be full-bleed, high-contrast, black and white photography. There are no consistent rounded corners or masking; images are presented with sharp, raw edges. Icons are typically minimalist, outlined, and monochromatic, with a thin stroke weight. Imagery primarily serves to showcase products, present film stills or talent, and establish an editorial atmosphere, often functioning as large, impactful visual breaks between text-heavy sections. The density is moderate, allowing visuals to occupy significant space without overwhelming the text.

### Elevation

The design intentionally avoids shadows. Surfaces are defined by stark contrasts between black, white, and gray backgrounds, relying on clean edges and distinct background color shifts to delineate content blocks and interactive elements. This creates a flat, graphic, and architectural aesthetic.
