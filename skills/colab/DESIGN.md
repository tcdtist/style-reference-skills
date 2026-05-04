---
version: alpha
name: Colab
description: Colab establishes a stark, high-contrast visual system where deep black is the canvas for crisp white typography and a vibrant accent red, creating a bold and theatrical presentation. The design leverages strong spatial separation with ample padding and minimalist components, emphasizing content through scale and isolation rather than embellishment. Typography is distinct, guiding the eye with a custom sans-serif that retains a unique character within a largely monochromatic palette. Sharp edges and the absence of shadows contribute to an unadorned, direct aesthetic.
colors:
  midnight-canvas: "#000000"
  paper-white: "#ffffff"
  process-red: "#ee1c5b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.3
  body-lg:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1.3
spacing:
  elementGap: 10px
  sectionGap: 80px
components:
  primary-filled-button:
    role: Call to action button for key interactions.
  ghost-button:
    role: Secondary action button or navigation element.
  naked-card:
    role: Content container for images or text blocks
  site-navigation-link:
    role: Top-level navigation items.
  footer-navigation-link:
    role: Secondary navigation in the footer.
---

## Overview

**North Star:** High-contrast theatrical canvas

Colab establishes a stark, high-contrast visual system where deep black is the canvas for crisp white typography and a vibrant accent red, creating a bold and theatrical presentation. The design leverages strong spatial separation with ample padding and minimalist components, emphasizing content through scale and isolation rather than embellishment. Typography is distinct, guiding the eye with a custom sans-serif that retains a unique character within a largely monochromatic palette. Sharp edges and the absence of shadows contribute to an unadorned, direct aesthetic.

### Do's

- Use Midnight Canvas (#000000) as the dominant background color for most sections to maintain the high-contrast aesthetic.
- Apply Paper White (#ffffff) for all primary text elements, including headlines, body copy, and navigation to ensure stark readability.
- Prioritize the Munken Sans Web typeface for all typographic content, leveraging its unique character and defined weights (400, 700, 900) and letter spacing of 0.0500em.
- Implement 0px border-radius for all UI elements (buttons, cards) to maintain a sharp, unadorned visual style.
- Adhere strictly to 80px vertical spacing between major page sections and 10px element gaps for moderate density.
- Reserve Process Red (#ee1c5b) exclusively for brand accents, interactive highlights, or subtle graphic elements, using it sparingly to maximize its impact.
- Ensure all interactive elements, like buttons and links, use either the Primary Filled Button or Ghost Button styles with their specified padding and no radius.

### Don'ts

- Do not introduce rounded corners or border-radius values greater than 0px on any components or elements.
- Avoid using drop shadows or elevation effects; the design relies on flat surfaces and high contrast for visual hierarchy.
- Do not deviate from the specified Munken Sans Web font or its defined weights and line heights.
- Refrain from adding unnecessary decorative gradients or complex backgrounds; surfaces should remain solid color for starkness.
- Do not introduce additional color to text or interactive elements beyond Midnight Canvas, Paper White, or Process Red.
- Avoid dense, information-heavy layouts; maintain generous padding and spacing between elements and sections.
- Do not use generic system fonts; always utilize Munken Sans Web for all text to preserve brand identity.

### Layout

The page adheres to a full-bleed layout, where content stretches edge-to-edge, especially prominent in hero sections featuring large visuals. The overall page model is contained vertically by generous section gaps (80px). The hero section typically features a full-viewport dark background with a centered, high-contrast headline. Section rhythm is consistent, separated by substantial vertical spacing, often introducing large image sections followed by text blocks. Content arrangement frequently uses centered stacks of text, particularly for headings and body copy, promoting a direct and impactful presentation. There is no explicit grid usage beyond implied vertical alignment for text blocks. Navigation is a fixed top bar with a logo and hamburger menu, minimal and integrated into the dark canvas. The footer maintains this dark theme containing minimal links and a copyright notice, also using generous padding.

### Imagery

This system primarily features photography with strong visual impact. Images are typically full-bleed or large blocks, often presenting product showcases or abstract compositions with specific color palettes, including notable use of the Process Red accent. There are no obvious illustrations or 3D renders. The iconography is minimal, indicated by simple white hamburger menus and social icons against dark backgrounds, suggesting an outlined or filled white style with a medium stroke weight. Imagery serves both decorative atmosphere and product showcase, with a moderate density, allowing text to also breathe.
