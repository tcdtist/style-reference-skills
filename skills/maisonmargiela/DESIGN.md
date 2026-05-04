---
version: alpha
name: Maisonmargiela
description: This design system evokes understated luxury and conceptual fashion, reminiscent of a high-end atelier's minimalist presentation. The dominant use of near-achromatic grays from `#121212` to `#f7f7f2` creates a sophisticated, muted backdrop. Typefaces are the primary vehicle for brand expression: the bespoke Margiela Sans with its numerous weights defines interactive elements and body text, while the subtly elegant Margiela Serif provides an exclusive touch to display large text. A complete absence of sharp accents or strong colors maintains a refined visual restraint, allowing product imagery to capture full attention.
colors:
  greige-canvas: "#f7f7f2"
  coal-text: "#121212"
  white-linen: "#ffffff"
  ash-detail: "#898989"
  ghost-gray: "#eaeae6"
  deep-graphite: "#000000"
  subtle-accent: "#d6d6d1"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  label:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
  display-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
    letterSpacing: -0.07px
  display:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.08px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 4px
  sectionGap: 64px
components:
  announcement-banner:
    role: 
  product-card-tabi-claw:
    role: 
  campaign-cta-block-primavera-verano:
    role: 
  text-only-button:
    role: Primary interactive element for navigation and inline actions.
  text-underline-button:
    role: Secondary call-to-action or link within content.
  muted-text-underline-button:
    role: Tertiary action or less emphasized links.
  search-field:
    role: Global search input.
  standard-input-field:
    role: Form inputs for data entry.
  product-thumbnail:
    role: Displays product images in grids or listings.
---

## Overview

**North Star:** muted runway elegance

This design system evokes understated luxury and conceptual fashion, reminiscent of a high-end atelier's minimalist presentation. The dominant use of near-achromatic grays from `#121212` to `#f7f7f2` creates a sophisticated, muted backdrop. Typefaces are the primary vehicle for brand expression: the bespoke Margiela Sans with its numerous weights defines interactive elements and body text, while the subtly elegant Margiela Serif provides an exclusive touch to display large text. A complete absence of sharp accents or strong colors maintains a refined visual restraint, allowing product imagery to capture full attention.

### Do's

- Do prioritize near-achromatic colors from the Greige Canvas (#f7f7f2) to Coal Text (#121212) scale for all primary UI elements and text.
- Do use Margiela Sans at various weights (375-700) for all functional text, headings, and interactive labels.
- Do apply 0px border-radius to all buttons and cards, maintaining a sharp, precise aesthetic.
- Do use 9999px border-radius exclusively for input fields, making them a distinct, subtly softer element.
- Do maintain minimal padding of 0px for navigation links, integrating them seamlessly into the header.
- Do use Margiela Serif for editorial content or distinctive display text to introduce an elevated, classic contrast.
- Do ensure interactive elements utilize the full color of Coal Text (#121212) or Deep Graphite (#000000) for clarity against lighter backgrounds.

### Don'ts

- Don't introduce vivid or saturated colors outside of product imagery; the palette is strictly muted.
- Don't use drop shadows; the design relies on subtle background color shifts for depth.
- Don't apply rounded corners to any element other than input fields.
- Don't use generic system fonts; Margiela Sans and Margiela Serif are integral to the brand identity.
- Don't use heavy borders or outlines on elements; rely on text color and subtle background changes for visual separation.
- Don't break the tight letter-spacing for Margiela Serif at display sizes; its elegance depends on precise typography.

### Layout

The site employs a full-bleed layout for hero sections, filling the entire viewport with large, impactful imagery and centered, minimalist text overlays. Content sections beneath the hero typically maintain a comfortable horizontal max-width but with variably loose vertical spacing. The navigation is a minimalist, fixed top bar using text-only links. Content blocks frequently consist of large, single images or stacked text and imagery, creating a spacious and gallery-like flow. There's a subtle grid structure for product listings, but the overall presentation prioritizes large-scale visuals over dense information, creating a luxurious, unhurried browsing experience.

### Imagery

The visual language is product-centric and highly art-directed. Photography features tight crops of products (shoes, garments) on muted, often textured studio backgrounds, emphasizing the product's form and material. There is an editorial, almost sculptural quality to the composition, focusing on the object itself rather than lifestyle context. The human models are often positioned to highlight the clothing's silhouette, captured with a slightly desaturated, cool-toned filter, enhancing the high-fashion aesthetic. Images are typically full-bleed within their sections, leveraging the entire viewport for visual impact without explicit masks or ornate treatments. Icons, like the search or cart icons, are minimalist, outlined, and monochromatic, blending seamlessly with the overall design.
