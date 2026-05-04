---
version: alpha
name: iconwerk
description: The iconwerk system is a minimalist black and white canvas for showcasing custom icon design. It prioritizes clarity and directness through a largely monochrome palette, sparse text, and a loose, airy layout. Visual interest comes from the high-contrast presentation of icons and the generous use of rounded rectangles, creating a playful, object-focused atmosphere. The overall impression is one of curated simplicity, allowing the icons themselves to be the main protagonists.
colors:
  ink-black: "#000000"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.21
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.21
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.18
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.21
spacing:
  cardRadius: 28px
  buttonRadius: 28px
  elementGap: 5px
  sectionGap: 45px
components:
  icon-card:
    role: Container for individual icon examples
  contact-button:
    role: Primary call to action.
---

## Overview

**North Star:** Gallery of crisp forms

The iconwerk system is a minimalist black and white canvas for showcasing custom icon design. It prioritizes clarity and directness through a largely monochrome palette, sparse text, and a loose, airy layout. Visual interest comes from the high-contrast presentation of icons and the generous use of rounded rectangles, creating a playful, object-focused atmosphere. The overall impression is one of curated simplicity, allowing the icons themselves to be the main protagonists.

### Do's

- Prioritize extreme visual clarity with #000000 text and borders against white or near-white backgrounds.
- Apply a generous 28px border-radius consistently to all interactive elements, cards, and prominent shapes.
- Maintain ample whitespace; use 45px for vertical section separation and 5px as a base unit for smaller element spacing.
- Use Graphik (or Inter) for all headlines and emphasized text, leveraging weights 400 and 600.
- Employ `"liga"` font feature settings for Graphik to enable ligatures, enhancing typographic refinement.
- Keep chromatic elements to a minimum, using color only for specific icon examples or very deliberate brand accent in content areas.

### Don'ts

- Avoid using multiple colors for interface elements; stick to the monochrome palette for UI.
- Do not use sharp corners; the 28px radius is a signature visual element.
- Refrain from dense layouts; maintain a spacious feel with generous padding and margins.
- Do not introduce heavy shadows or complex elevation; the system relies on flat, high-contrast surfaces.
- Avoid decorative gradients for UI elements; their absence reinforces clarity.

### Layout

The page uses a full-bleed layout for its main content area, with elements often centered or aligned to a relatively subtle grid. The hero section is a simple introductory text block with a logo. The main content is composed of a prominent 2x2 or 3x2 grid of 'Icon Cards' that alternate between dark and light backgrounds, creating a checkerboard-like visual rhythm. Each card is self-contained. Vertical spacing between content blocks is generous, around 45px. Navigation consists of a minimal top-right floating 'contact' button with a subtle logo.

### Imagery

The site's imagery is primarily product-focused, showcasing various icon designs and product integrations. It features tight crops of actual product hardware (like remote controls, ovens) or abstract scenes (landscapes, wood textures) serving as backgrounds for overlaid icons. Icons themselves are presented either as simple outlines (often #000000 or a specific accent color) on solid backgrounds, or integrated into realistic product mockups. The style is detailed and realistic for product depictions, while icons are clean and graphic, often monochromatic. Icon style leans towards outlined with a consistent stroke weight. Imagery is used to contextualize and demonstrate the icons' versatility rather than for decorative atmosphere.
