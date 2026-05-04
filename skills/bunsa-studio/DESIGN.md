---
version: alpha
name: Bunsa Studio
description: Bunsa Studio employs a 'sun-drenched architectural drafting' aesthetic, primarily using a stark achromatic palette of crisp white and deep black. A single, vibrant blue serves as the sole accent, appearing as sharp-edged navigation elements and subtle interactive cues. Typography is minimal and bold, favoring strong contrasts. The overall impression is one of confident restraint, with design elements serving a clear functional purpose rather than decorative flourish.
colors:
  canvas-white: "#fcfaf7"
  midnight-black: "#000000"
  electric-blue: "#0b0bca"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.1
    letterSpacing: 0px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 4px
  sectionGap: 160px
components:
  ghost-accent-button:
    role: Primary interactive element for navigation and actions.
  headline-section:
    role: Project titles and major content headings.
  text-link:
    role: Navigation items and inline references.
---

## Overview

**North Star:** Sun-drenched architectural drafting

Bunsa Studio employs a 'sun-drenched architectural drafting' aesthetic, primarily using a stark achromatic palette of crisp white and deep black. A single, vibrant blue serves as the sole accent, appearing as sharp-edged navigation elements and subtle interactive cues. Typography is minimal and bold, favoring strong contrasts. The overall impression is one of confident restraint, with design elements serving a clear functional purpose rather than decorative flourish.

### Do's

- Prioritize Canvas White (#fcfaf7) as the dominant background color for all page sections.
- Use Midnight Black (#000000) for all primary text content to ensure maximum contrast.
- Reserve Electric Blue (#0b0bca) exclusively for interactive elements like buttons, links, and subtle icon accents.
- Maintain a sharp, unrounded aesthetic by using a 0px border-radius for all interactive components and containers.
- Employ the Ghost Accent Button style for all primary actions: Electric Blue text, Electric Blue border, and no background fill.
- Utilize HelveticaNowDisplay in varied weights (400, 700) and sizes (20px, 60px) for all text elements to establish hierarchy.
- Implement generous vertical spacing between major sections, with a default section gap of 160px.

### Don'ts

- Avoid using any colors other than Canvas White, Midnight Black, and Electric Blue in the interface, except within imagery or content.
- Do not use filled buttons as primary actions; always favor the outlined/ghost style with Electric Blue.
- Resist adding any shadow effects or elevation; the design system relies on flat surfaces and high contrast.
- Never introduce rounded corners on any UI element; all shapes should be angular and sharp.
- Do not vary line-height unless explicitly specified for a text size; usually, 1.1 for large headings and 1.3 for body text.
- Avoid decorative gradients or background images in UI elements; maintain a clean, flat aesthetic.
- Do not introduce extensive padding within UI elements; apply minimal padding to controls like 5px on buttons.

### Layout

The page structure is dominated by full-bleed imagery that often extends across the viewport. Content appears to be centered within these large visual blocks, with text overlaid directly on images or occupying transparent regions. Navigation is a persistent header, featuring a distinct, small Electric Blue dot on the left and the studio name on the right, both fixed. Sections appear to transition seamlessly with large full-width image blocks introducing new project content, often with a large, centered headline directly on the image. Vertical spacing between content blocks and sections is very generous.

### Imagery

The site primarily uses high-quality, full-bleed photography of interior design projects. Imagery is presented without internal borders or rounded corners, often serving as a background for textual overlays. There are no illustrations or abstract graphics; the focus is entirely on showcasing finished spaces. Images are rich in color and detail, capturing natural light within designed environments, contrasting with the stark UI elements. Icons are minimal, likely monochromatic, and used functionally for navigation points.
