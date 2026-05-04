---
version: alpha
name: Assembly Coffee London
description: Assembly Coffee London employs a sophisticated, dark-mode retail aesthetic that exudes understated luxury. A dominant charcoal canvas is punctuated by subtle, almost unnoticeable interactions and light typography. The brand expresses itself through refined product presentation and a restrained use of soft, warm accents for badges and subtle highlights rather than prominent branding features. Elements are typically unbordered, relying on subtle background shifts or very slight elevation for depth.
colors:
  midnight-ember: "#000000"
  canvas-white: "#ffffff"
  charcoal-smoke: "#333333"
  ghost-marble: "#f6f7f2"
  greige-outline: "#dfdbca"
  moss-badge: "#cadcac"
  goldenrod-badge: "#faf080"
  sunken-gold-highlight: "#cfa53b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 0.75
    letterSpacing: 0px
spacing:
  elementGap: 8px
  sectionGap: 24px
components:
  text-button-dark:
    role: Ghost button for navigation and secondary actions on dark backgrounds.
  filled-button-dark:
    role: Primary call to action button.
  filled-button-light:
    role: Alternative primary call to action button for dark backgrounds.
  product-card-transparent:
    role: Gallery-style displays for products with visual emphasis on imagery.
  product-card-elevated:
    role: Content card for showcasing product details or features within sections.
  badge-new-release:
    role: Informational tag for new product introductions.
  badge-elevated-brewing:
    role: Informational tag for premium product features.
  input-field-dark-outline:
    role: Form input field for user entry on dark backgrounds.
---

## Overview

**North Star:** Shadowy Gallery Vignettes

Assembly Coffee London employs a sophisticated, dark-mode retail aesthetic that exudes understated luxury. A dominant charcoal canvas is punctuated by subtle, almost unnoticeable interactions and light typography. The brand expresses itself through refined product presentation and a restrained use of soft, warm accents for badges and subtle highlights rather than prominent branding features. Elements are typically unbordered, relying on subtle background shifts or very slight elevation for depth.

### Do's

- Prioritize 'Midnight Ember' (#000000) as the dominant background or text color to reinforce the dark, sophisticated aesthetic.
- Use 'ID00 Serif' for headings, especially at display sizes, to convey a sense of artisanal quality and gravitas.
- Apply 4px border radius for most interactive elements like buttons and inputs, and 9999px for pill-shaped badges, for a subtle softness.
- Employ 'Greige Outline' (#dfdbca) for hairline borders and subtle dividers, maintaining a minimal presence.
- Utilize 'Goldenrod Badge' (#faf080) and 'Moss Badge' (#cadcac) sparingly for key status indicators or new releases, ensuring they stand out as functional accents.
- Maintain generous section gaps of at least 24px to create a comfortable, uncrowded layout, allowing content to breathe.
- Ensure all body text uses 'GT America Standard' at appropriate weights for maximum legibility on both dark and light surfaces.

### Don'ts

- Avoid generic system-level button styles; stick to the defined 'Filled Button - Dark' or 'Filled Button - Light' for primary actions.
- Do not introduce new saturated primary colors; brand expression relies on specific accents and gradients, not broad color usage.
- Refrain from using strong box shadows or heavy borders; the design emphasizes subtle surface changes and near-invisible outlines.
- Do not use highly decorative or illustrative imagery; imagery should be product-focused or abstractly minimal.
- Avoid dense arrangement of interactive elements; prioritize comfortable 'elementGap' spacing of 8px.
- Do not deviate from 'ID00 Serif' for product titles and main headings; its unique character is central to the brand's voice.
- Do not use dark backgrounds with light text for entire pages without defining supporting components for inverse states; stick to the dominant dark theme for surface consistency.

### Layout

The page primarily uses a full-bleed layout for background elements, but content is often constrained within a max-width container, likely centered. The hero section features full-bleed dark backgrounds with prominent, centered typographic elements and floating product visuals. Sections typically alternate between dark backgrounds and occasionally lighter 'Ghost Marble' washes or 'Greige Highlight' panels, creating a distinct vertical rhythm. Content arrangement frequently follows a simple stack or two-column grid, especially for product listings, with images and text often paired. Navigation is primarily a top sticky bar with subtle text links and a ghost search/cart functionality. The overall density feels comfortable due to consistent section and element spacing.

### Imagery

This system features a blend of tight product photography and abstract graphic elements. Product images are typically isolated against clean backgrounds (black, white, or light gray) often with minimal staging, focusing intensely on the product itself. The treatment is direct and unfussy, with raw edges and no overlapping. Illustrations are minimalist, often outline-based icons with a moderate stroke weight, and are monochromatic or use single brand accent colors like 'Sunken Gold Highlight'. Imagery serves both decorative atmosphere and product showcase roles, dense in some areas and sparser in others, always maintaining a sophisticated and functional presence.
