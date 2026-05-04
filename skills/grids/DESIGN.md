---
version: alpha
name: Grids
description: Grids' visual style evokes the precision of an architectural drawing coming to life, with dynamic motion shaping static typography. The aesthetic is stark, relying on a monochrome palette and sharp geometric forms. Giant, highly tracked letterforms transform into interactive elements, giving the impression of blueprints being manipulated in real-time. Subtle shadows provide the only depth in an otherwise flat, canvas-like environment.
colors:
  canvas-white: "#ffffff"
  graphite-black: "#010101"
  concrete-gray: "#f1f1f1"
  charcoal-text: "#282828"
  smoke-border: "#c2c2c2"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.7
    letterSpacing: -0.42px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.64
    letterSpacing: -0.42px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 1.21
    letterSpacing: -0.31px
  heading:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 1.14
    letterSpacing: -3.27px
  display:
    fontFamily: "system-ui"
    fontSize: 264px
    lineHeight: 1.1
    letterSpacing: -10.56px
spacing:
  cardRadius: 0px
  elementGap: 7px
  sectionGap: 40px
components:
  standard-card:
    role: Container for content, appearing as an overlay or distinct element.
  loading-indicator:
    role: Visual cue for content loading states.
  primary-display-text:
    role: Large, interactive headings and key messages.
  utility-text:
    role: Informational text like copyrights or small labels.
---

## Overview

**North Star:** Blueprint in Motion – a stark, interactive canvas where giant letterforms are the only dynamic elements.

Grids' visual style evokes the precision of an architectural drawing coming to life, with dynamic motion shaping static typography. The aesthetic is stark, relying on a monochrome palette and sharp geometric forms. Giant, highly tracked letterforms transform into interactive elements, giving the impression of blueprints being manipulated in real-time. Subtle shadows provide the only depth in an otherwise flat, canvas-like environment.

### Do's

- Use Canvas White (#ffffff) for all primary page and card backgrounds to maintain a stark, clean canvas aesthetic.
- Apply Graphite Black (#010101) for all main headlines and significant text elements, emphasizing strong contrast.
- Utilize custom_40538 for all headings and large textual components, embracing its geometric forms and dynamic letter-spacing for visual impact.
- Employ a 0px border radius for all cards and containers to enforce a sharp, angular aesthetic.
- Introduce depth only through subtle box-shadows like rgba(0, 0, 0, 0.24) 0px 1px 2px 0px for cards, avoiding heavy or colored shadows.
- Prioritize text as the main visual and interactive element, especially large, animated letterforms.
- Maintain generous spacing, with section gaps of 40px and dynamic element spacing derived from the base unit of 4px.

### Don'ts

- Do not use highly saturated or chromatic colors for any UI elements; maintain a strict monochrome palette.
- Avoid rounded corners on any primary UI components; the design language relies on sharp angles and geometric precision.
- Do not introduce complex gradients or background images; surfaces should be solid colors.
- Do not use heavy or numerous drop shadows, as subtle elevation is preferred.
- Avoid decorative icons or illustrations that are not integral to content; focus on typographic and geometric forms.
- Do not deviate from the distinct letter-spacing values provided for custom_40538, as they are crucial to its visual identity.
- Do not introduce highly varied font weights; stick to the specified 400 weight for custom_40538 and -apple-system.

### Layout

The page operates on a full-bleed model, without a fixed max-width, allowing elements to extend to the viewport edges. The hero section is dominated by large, interactive text elements and geometric shapes (e.g., the rotating diamond) appearing floating on the Canvas White background. Sections have a spacious rhythm, with alternating white and light gray backgrounds indicated by the 'Concrete Gray' and 'Canvas White' surfaces, creating visual breaks. Content is arranged with a strong emphasis on horizontal and vertical lines, reminiscent of a technical drawing grid, and features large, often animated, typography. The navigation appears to be a minimal top bar, possibly a single line indicating progress or sections, reinforcing the technical blueprint aesthetic. The overall density is spacious, giving elements ample room to breathe and animate.

### Imagery

The design predominantly uses typography as its core visual element, with a strong focus on large, animated letterforms. There are no traditional photographs, illustrations, or product screenshots. Icons are minimal, represented by simple geometric shapes (like the central rotating black diamond) or basic system icons. The visual language is purely abstract and interactive, using text and simple forms to convey meaning and create a dynamic experience. Imagery is effectively replaced by animated, oversized text that functions as both content and decorative element.
