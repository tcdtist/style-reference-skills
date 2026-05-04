---
version: alpha
name: Surface
description: Arctic Volume presents a bold, editorial aesthetic. It emphasizes high contrast typography on vast, unobtrusive white space. Visuals are treated as distinct collage elements, drawing attention without being enclosed. The overall impression is one of stark graphic clarity, where content is king and design serves to amplify rather than decorate.
colors:
  arctic-snow: "#f7f7f7"
  midnight-ink: "#000000"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.35
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 230px
    lineHeight: 1
spacing:
  elementGap: 10px
  sectionGap: 48px
components:
  ghost-button:
    role: Secondary actions and navigation links
  filled-primary-button:
    role: Primary calls to action
  content-card-image-text:
    role: Displaying images and associated text in a grid or collage layout
---

## Overview

**North Star:** Minimalist gallery canvas

Arctic Volume presents a bold, editorial aesthetic. It emphasizes high contrast typography on vast, unobtrusive white space. Visuals are treated as distinct collage elements, drawing attention without being enclosed. The overall impression is one of stark graphic clarity, where content is king and design serves to amplify rather than decorate.

### Do's

- Always use Munken Sans Web for all text elements.
- Implement Midnight Ink (#000000) for all primary text and active states.
- Utilize Arctic Snow (#f7f7f7) as the dominant background color for clarity.
- Adhere to a 0px border-radius for all elements (buttons, cards) to maintain a sharp, editorial edge.
- Maintain high contrast between text and background, typically Midnight Ink on Arctic Snow.
- Employ consistent 48px vertical spacing between major page sections and headings.
- Design with a spacious layout, allowing ample white space around elements.

### Don'ts

- Avoid rounded corners; all interface elements should have a 0px radius.
- Do not introduce additional saturated colors; the palette is strictly achromatic for UI elements.
- Refrain from using drop shadows or complex elevation; surfaces are flat and direct.
- Do not add padding or borders to primary content cards; they should float freely or be placed directly.
- Avoid decorative gradients or background images for UI components; stick to solid colors.
- Do not use letter-spacing other than normal, except where explicitly specified by type scale.

### Layout

The page uses a full-bleed layout without a fixed max-width, allowing content to span the browser's width, though elements frequently align to loose vertical columns or grids. The hero section features unusually large, overlapping text with an irregular arrangement of small image cards, setting a dynamic, non-uniform tone. Section rhythm is primarily driven by generous vertical spacing between content blocks. Content arrangement is fluid; sometimes text-left/image-right, but more often a collage of visual elements surrounding central textual content. The navigation is minimal, a simple top-bar with a hamburger menu.

### Imagery

This site features a heavy reliance on photography and occasional abstract graphics, treated with a collage-like sensibility. Images are typically contained within their own bounding boxes, but arranged in dynamic, overlapping, and seemingly unconstrained layouts, creating a 'mood board' effect. Photography styles vary, from product-focused to artistic lifestyle shots. The imagery serves primarily as decorative atmosphere and content showcase, often appearing in high density relative to text, contributing to the visual-first editorial feel.
