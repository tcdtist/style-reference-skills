---
version: alpha
name: Office Chair Finder
description: Vitra's Office Chair Finder adopts a functional, no-frills aesthetic, prioritizing clear user interaction over decorative flourishes. The design relies on a monochrome palette of deep charcoals and bright whites, complemented by a single muted red for interactive elements. Typography is direct and legible, with button components featuring defined borders and a subtle shadow for clear affordance rather than visual spectacle. The overall impression is one of practical utility, guiding the user through a structured process.
colors:
  absolute-zero: "#272727"
  canvas-white: "#ffffff"
  ink-wash: "#333333"
  ash-gray: "#a9a9a9"
  action-red: "#ef6b6b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
spacing:
  elementGap: 13px
  sectionGap: 173px
components:
  filled-action-button:
    role: Primary Call to Action
  outlined-action-link:
    role: Secondary Interaction
  muted-link-text:
    role: Tertiary Navigation/Information
  modal-card:
    role: Content Overlay
  navigation-bar:
    role: Persistent Global Navigation
---

## Overview

**North Star:** Monochrome utility with active red accents.

Vitra's Office Chair Finder adopts a functional, no-frills aesthetic, prioritizing clear user interaction over decorative flourishes. The design relies on a monochrome palette of deep charcoals and bright whites, complemented by a single muted red for interactive elements. Typography is direct and legible, with button components featuring defined borders and a subtle shadow for clear affordance rather than visual spectacle. The overall impression is one of practical utility, guiding the user through a structured process.

### Do's

- Use Absolute Zero (#272727) for all primary text content and main headings.
- Implement Canvas White (#ffffff) as the default background for all cards and page surfaces.
- Apply Ink Wash (#333333) exclusively for filled button backgrounds, paired with Canvas White text.
- Reserve Action Red (#ef6b6b) for borders and text of outlined interactive elements, indicating primary actions or important links.
- Ensure all buttons have a 5px border-radius and use 12px vertical padding.
- Maintain a spacious feel, using 173px for vertical section gaps and 13px for element spacing.
- Utilize Futura (sans-serif) for all headings, navigation, and interactive text, and Times New Roman (serif) for body copy.

### Don'ts

- Avoid using multiple chromatic colors; limit color accents strictly to Action Red (#ef6b6b).
- Do not use shadows on elements other than buttons or distinct interactive components.
- Refrain from deviating from the established monochromatic palette for backgrounds or primary textual elements.
- Do not apply decorative text styles or weights other than what is specified for Futura and Times New Roman.
- Avoid tight spacing; maintain the generous 173px section gaps and 13px element gaps.
- Do not use generic blue for links; all interactive link text should either be Absolute Zero or Action Red.
- Do not introduce complex gradients; the system relies heavily on solid colors and subtle elevation.

### Layout

The page exhibits a max-width contained layout rather than full-bleed. The hero section, if present, is obscured by a modal, but background elements suggest a visually dynamic, full-viewport aesthetic. Content is arranged with consistent vertical spacing, and sections appear to predominantly stack. The primary content is presented within a central modal that overlays the background, indicating a highly focused, task-oriented user flow. Navigation is a minimal top bar, suggesting an overlay or simplified experience rather than complex hierarchies.

### Imagery

The site uses a 'no imagery, pure UI' approach for its interface elements, relying on typography and solid color fields to convey information. For product display, it features 3D rendered office chairs presented in a dynamic, scattered pattern on a neutral background, serving as decorative atmosphere rather than direct content support. Icons, where present, appear to be minimal and monochromatic, adhering to the overall utilitarian design.
