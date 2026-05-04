---
version: alpha
name: LUNCH
description: LUNCH cultivates an avant-garde boutique aesthetic, with a cool, muted palette anchored by deep black text and an unusual purple background. Typography is compact and precise, using a bespoke sans-serif for most content and a distinct display font for striking headings. The layout emphasizes strong visual content on neutral surfaces, with minimal UI elements that feel almost like sparse museum displays, allowing the product imagery to dominate.
colors:
  carbon-black: "#000000"
  pale-parchment: "#FCFAF1"
  digital-lavender: "#B8AAD0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
    letterSpacing: -0.013px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
    letterSpacing: -0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
    letterSpacing: -0.007px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: -0.005px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.8
    letterSpacing: 0.002px
spacing:
  cardRadius: 0px
  elementGap: 20px
  sectionGap: 60px
components:
  navigation-link:
    role: Primary navigation items and in-content links
  product-card:
    role: Displaying product items in grids
  footer-announcement-bar:
    role: Global informational messages, typically at the top or bottom of the page.
  cookie-consent-banner:
    role: Legal compliance notice
  ghost-button-link:
    role: Secondary calls to action or informational links
---

## Overview

**North Star:** gallery meets fashion editorial

LUNCH cultivates an avant-garde boutique aesthetic, with a cool, muted palette anchored by deep black text and an unusual purple background. Typography is compact and precise, using a bespoke sans-serif for most content and a distinct display font for striking headings. The layout emphasizes strong visual content on neutral surfaces, with minimal UI elements that feel almost like sparse museum displays, allowing the product imagery to dominate.

### Do's

- Use Carbon Black (#000000) for all primary body text and most UI borders to maintain strong typographic contrast.
- Apply Digital Lavender (#B8AAD0) as a background for any full-width informational banners or footers.
- Render all product cards without any borders, shadows, or rounded corners (0px radius) to emphasize product photography as the sole visual element.
- Utilize Good Sans at weight 400 for all navigation links and product descriptions.
- Implement letter-spacing adjusted for font size, using a tighter track for larger headings (e.g., -0.005em at 32px Good Sans).
- Prioritize generous vertical spacing around content sections (60px) to allow visual elements to breathe.
- Display 'Sold Out' text in a distinct red (#ff0000) for immediate visual feedback on product availability.

### Don'ts

- Avoid using drop shadows or complex gradients on UI elements; elevation is not communicated through shadow.
- Do not introduce additional bright accent colors; the palette is intentionally restrained to prioritize product visuals.
- Refrain from applying rounded corners to buttons, cards, or other containers; maintain a sharp, angular aesthetic (0px radius).
- Do not deviate from Good Sans for general UI text; consistency in this bespoke typeface is key to brand identity.
- Avoid dense, information-heavy blocks of text; opt for precise, spaced-out content.
- Do not use highly saturated colors for backgrounds; stick to the muted neutral palette.
- Never use automatic browser link styling; explicitly set link colors and hover states to Carbon Black.

### Layout

The page structure is full-bleed with an implicit, flexible max-width for textual content within sections, centered on the screen. The hero section is a full-width, full-height striking image often overlaid with large, stylized typography. Content sections alternate between visually dominant product grids and brief textual descriptions. Vertical rhythm is established through consistent 60px gaps between major sections. The main navigation is a minimal, centered horizontal bar at the top, which appears to become a sticky header on scroll. Product grids are typically 4-column, displaying products without explicit card boundaries, relying on image boundaries and minimal text for separation.

### Imagery

The site uses a mix of high-fashion editorial photography for hero sections and clean, studio-lit product photography against light, neutral backgrounds for product listings. Photography is often full-bleed or large-scale, with minimal UI elements overlapping. Editorial images often feature models in dynamic poses, emphasizing clothing movement and texture. Product images are typically tight crops, showcasing detail over context. Iconography is minimal, likely outlined and monochromatic.
