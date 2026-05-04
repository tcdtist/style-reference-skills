---
version: alpha
name: Sana Agents
description: This design system projects a clean, authoritative presence through a stark black-on-white palette, punctuated by a single vibrant accent. The large, elegant serif headlines create a sense of established gravitas, while the rounded corners and vibrant lime green call-to-action offer a touch of approachable modernism. This creates a balanced aesthetic where seriousness meets accessible innovation, making complex AI feel intuitive.
colors:
  tarmac: "#0a1217"
  canvas-white: "#ffffff"
  limestone: "#e4eff7"
  jet-black: "#000000"
  cloud-gray: "#85898b"
  steel-gray: "#6c7174"
  bio-luminescent-green: "#cdfe00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.1
spacing:
  buttonRadius: 24px
  elementGap: 8px
  sectionGap: 62px
components:
  product-cards-sana-agents-sana-learn:
    role: 
  sign-up-form-try-for-free-with-your-work-email:
    role: 
  button-group-primary-secondary-outline-variants:
    role: 
  pill-outline-button:
    role: Secondary action button, often for navigation or subtle interactions.
  dark-filled-button:
    role: Primary action button within dark contexts or for prominent interactions.
  light-filled-button:
    role: Secondary action button in light contexts or for less prominent interactions.
  feature-card:
    role: Container for introducing product features, often in a grid.
  form-input-field:
    role: Standard user input field for text.
---

## Overview

**North Star:** Architectural blueprint on white marble.  Sharp, expansive white spaces frame meticulously placed elements, with occasional flashes of neon green illuminating key interactions.

This design system projects a clean, authoritative presence through a stark black-on-white palette, punctuated by a single vibrant accent. The large, elegant serif headlines create a sense of established gravitas, while the rounded corners and vibrant lime green call-to-action offer a touch of approachable modernism. This creates a balanced aesthetic where seriousness meets accessible innovation, making complex AI feel intuitive.

### Do's

- Use Sana Serif for display headlines at 72px, weight 400, to establish authority.
- Apply Tarmac (#0a1217) for primary text and dark surface backgrounds to maintain strong contrast.
- Utilize Bio-Luminescent Green (#cdfe00) exclusively for primary call-to-action buttons, drawing clear attention.
- Employ 24px border-radius for all primary buttons and input fields to ensure a consistent contemporary feel.
- Maintain a clear page structure with 62px vertical spacing between major sections.
- Use Sana Sans (lnum, tnum) across all body text, navigation, and interactive elements for numeral consistency and legibility.
- Ensure all interactive elements have sufficient padding: 8px 16px for buttons, 8px 18px for inputs.

### Don'ts

- Do not use highly saturated colors other than Bio-Luminescent Green (#cdfe00); the palette is intentionally restrained.
- Avoid decorative shadows or complex gradients; the aesthetic is flat and crisp.
- Do not introduce additional font families; Sana Serif and Sana Sans are the only approved typefaces.
- Do not deviate from the established border radii; 24px and 9999px are the only sanctioned options for interactive elements.
- Do not vary paragraph line-height aggressively; keep it within the 1.2-1.5 range to maintain reading comfort.
- Avoid using Jet Black (#000000) for large blocks of text; reserve it for specific accents or input fields.
- Do not use small padding values; minimum 8px padding ensures adequate tap targets and visual breathing room.

### Layout

The layout is primarily a max-width contained design at 1305px, centered on the page. The hero features a large, centered Sana Serif headline over a white background. Sections alternate between full-width white backgrounds and contained white space. Content is arranged using a mix of centered stacks (for headings and forms) and a prominent two-column grid for product features, where text is often paired with a product showcase card. Vertical spacing between sections is generous at 62px, giving elements ample breathing room. The navigation is a minimalist top bar, right-aligned with interactive links and a prominent 'Sign in' button.

### Imagery

This site features a blend of product screenshots and abstract graphic elements. Product shots are typically tight crops showcasing hands interacting with devices, often with a dark, monochromatic background. The treatment is full-bleed within card components, featuring rounded corners (24px) that soften the edges. Abstract elements are geometric, often in saturated tones (like blue or purple) within a device screen context, serving to illustrate the UI without being literal. The overall role of imagery is to demonstrate product functionality and create a sense of direct engagement, balancing technical detail with a clean, aspirational feel. Image density is moderate, used effectively within feature sections rather than as decorative full-bleed hero backgrounds.
