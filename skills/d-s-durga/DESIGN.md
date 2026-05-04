---
version: alpha
name: D.S. & DURGA
description: D.S. & DURGA presents a meticulously crafted aesthetic resembling a gallery display for luxury artisanal products. The design emphasizes stark contrasts with a largely achromatic palette, combining a warm off-white canvas with sharp black typography and deliberate image boundaries. Typography is bold and communicative, used as a primary design element for product showcasing and narrative. The overall impression is one of curated elegance and understated theatricality.
colors:
  canvas-parchment: "#f2e9de"
  midnight-ink: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.43
    letterSpacing: 0.6px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.27
    letterSpacing: 0.7px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
    letterSpacing: 0.8px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.22
    letterSpacing: 0.9px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.17
    letterSpacing: -1.5px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 0.92
    letterSpacing: -3px
  display:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 0.83
    letterSpacing: -6px
spacing:
  elementGap: 10px
  sectionGap: 50px
components:
  text-button-canvas-background:
    role: Standard button for actions and navigation, with a subtle background.
  ghost-button-transparent:
    role: Secondary action or link, blending into the background.
  navigation-link:
    role: Primary navigation items in the header and footer.
  product-input-field:
    role: Single-line text input for search or forms.
  information-banner:
    role: Promotional or notification banner, often for shipping or offers.
  feature-card-implicitly-defined:
    role: Used for displaying product categories or featured items.
---

## Overview

**North Star:** curated gallery, artisanal display

D.S. & DURGA presents a meticulously crafted aesthetic resembling a gallery display for luxury artisanal products. The design emphasizes stark contrasts with a largely achromatic palette, combining a warm off-white canvas with sharp black typography and deliberate image boundaries. Typography is bold and communicative, used as a primary design element for product showcasing and narrative. The overall impression is one of curated elegance and understated theatricality.

### Do's

- Use #f2e9de as the dominant background color for all main sections and UI surfaces.
- Apply #000000 for all primary text, headings, graphical elements, and interface borders to ensure crisp contrast.
- Maintain a strict 0px border-radius for all UI components, including buttons, cards, and input fields.
- Prioritize Sofia Pro (or Montserrat) for all typography, employing different weights to establish hierarchy rather than color changes.
- Utilize 1px solid #000000 borders for clear visual separation of content blocks and interactive elements.
- Ensure letter-spacing is applied as specified for Sofia Pro to maintain its distinctive character, particularly tighter tracking for larger display text.
- Use a minimum 10px element gap for close-related items and 50px for distinct section breaks, reflecting the compact density.

### Don'ts

- Do not introduce any additional background colors beyond #f2e9de for canvas/surface roles.
- Avoid using any rounded corners or soft edges on any UI elements; enforce the 0px radius.
- Refrain from introducing any color into typography for semantic meaning or emphasis; rely solely on weight and size.
- Do not add drop shadows or complex elevation effects; the design emphasizes flat surfaces and strong borders.
- Avoid decorative gradients; surfaces should remain solid color blocks.
- Do not deviate from the specified letter-spacing for Sofia Pro; imprecise tracking will alter the brand's typographic tone.
- Do not introduce inconsistent padding values; adhere to the 5px, 7px, and 20px patterns derived for interactive elements.

### Layout

The page structure is full-bleed, with content expanding to the edges of the viewport horizontally but organized into distinct sections vertically. The hero section often features a dominant, atmospheric image or product shot with centered, large-format text. Content sections alternate between visually strong media blocks and typography-driven informational panels, frequently using 2-column layouts that can reverse. A strong vertical rhythm is established by consistently sized vertical dividers (1px solid #000000) or pronounced section breaks. Navigation features a sticky top bar with minimal links and iconic interactive elements. The layout feels dense but intentionally sparse around key product visuals.

### Imagery

This design system uses a combination of product photography and stylized, conceptual imagery. Photography features tight crops of products on clean, often dark, backgrounds, emphasizing texture and form. Lifestyle imagery uses high-contrast, often black-and-white or desaturated palettes, with unexpected, artistic compositions (e.g., scissors, water glass) that serve as decorative atmosphere rather than direct product showcasing. Imagery is often full-bleed or large blocks, integrated seamlessly into the grid, with sharp, unmasked edges. Icons are outlined, fine-stroke, and monochrome, reinforcing the graphic, minimalist aesthetic. The overall density of imagery is high, often used to create impactful visual sections.
