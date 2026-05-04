---
version: alpha
name: Touchy Coffee
description: Touchy Coffee's design system evokes the feeling of a friendly, DIY publication with a strong personality. It uses a limited, somewhat desaturated color palette with a vivid accent program and a striking, custom logotype that's soft and rounded. The layout is structured but playful, featuring hand-drawn elements and a slightly retro, analog feel. Typography relies on a monospaced sans-serif for high legibility and a distinct voice.
colors:
  burnt-sienna: "#9f4920"
  forest-green: "#5b9133"
  periwinkle-mist: "#a697c6"
  graphite: "#000000"
  canvas-white: "#ffffff"
  muted-sage: "#788c8c"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.2
spacing:
  cardRadius: 20px
  buttonRadius: 100px
  elementGap: 20px
  sectionGap: 80px
components:
  ghost-header-button:
    role: Navigation and utility actions
  filled-primary-button:
    role: Key interactions and calls to action
  filled-forest-green-button:
    role: Secondary calls to action or context-specific actions
  product-card:
    role: Displaying individual product items
  promotional-modal:
    role: Temporary messages or offers
  text-input-with-border:
    role: Forms and data entry
  decorative-slider-placeholder:
    role: Visual indicator of horizontal scrollable content
  review-card:
    role: Displaying customer testimonials
  newsletter-card:
    role: Subscription call to action
---

## Overview

**North Star:** whimsical indie zine

Touchy Coffee's design system evokes the feeling of a friendly, DIY publication with a strong personality. It uses a limited, somewhat desaturated color palette with a vivid accent program and a striking, custom logotype that's soft and rounded. The layout is structured but playful, featuring hand-drawn elements and a slightly retro, analog feel. Typography relies on a monospaced sans-serif for high legibility and a distinct voice.

### Do's

- Prioritize Apercu Mono for almost all text elements, relying on weight 400 for body and weight 700 for emphasis, always with 'normal' letter spacing.
- Utilize Muted Sage (#788c8c) as the primary canvas color for large background areas, establishing a subdued base.
- Apply 100px border-radius to all interactive buttons and small tags for a soft, friendly pill shape.
- Use 20px border-radius on cards, images, and larger container elements to maintain consistent rounded corners.
- Employ Graphite (#000000) for all primary body text and strong outlines against lighter backgrounds.
- Incorporate Burnt Sienna (#9f4920) or Forest Green (#5b9133) as vivid accent colors for decorative details, specific statuses, or when a strong, yet warm, visual pop is needed.
- Maintain a clear visual hierarchy by limiting shadows and keeping component surfaces flat or outlined.

### Don'ts

- Avoid using highly saturated, primary colors outside of the defined accent palette (Burnt Sienna, Forest Green, Periwinkle Mist).
- Do not introduce sharp corners or square elements for interactive components or cards; leverage the curved radii consistently.
- Refrain from using complex gradients or drop shadows, as the system emphasizes flat surfaces and outlines.
- Do not deviate from Apercu Mono; introducing other typefaces would break the distinctive brand voice.
- Avoid dense, compact layouts. Strive for comfortable density with 20px element spacing and 80px section gaps.
- Don't add custom padding to buttons; adhere to the 10px/20px or 15px/20px padding specifications for consistent sizing.
- Never use blue for links outside of the Periwinkle Mist accent; all link text should be Graphite or White as context dictates.

### Layout

The page uses a maximum-width contained layout, with content centered. The hero section features a large, custom logotype centered over a solid Muted Sage background with minimal overlaying text. Sections alternate between Muted Sage, Periwinkle Mist, and even an all-white background. Content arrangement often utilizes a grid for product display (e.g., 3-column) or a two-column side-by-side layout for text blocks and a central image. Vertical spacing between sections is generous, using 80px gaps. Navigation is minimal, with 'HOME' and 'SHOP' as ghost buttons positioned at the top corners.

### Imagery

The site uses a mix of product photography (muted, neutral tones for coffee bags that serve as a canvas for colorful product names), abstract graphics (finger pointer icon), and line-art elements. Photography is typically studio-style, product-focused. Icons are minimal, outlined, and monochromatic, often using Muted Sage. Imagery serves primarily to showcase products or add a touch of whimsy and brand personality rather than being purely decorative.
