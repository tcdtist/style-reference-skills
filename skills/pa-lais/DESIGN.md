---
version: alpha
name: Pa'lais
description: Pa'lais blends nourishing organics with a playful, hand-drawn aesthetic. The system features a bright white canvas interspersed with organic, flowing colored sections. Typography is confident and layered, mixing classic serif with modern sans-serif and whimsical display fonts. Components are subtly rounded and light, emphasizing a fresh, approachable brand identity, with an occasional bold accent color to draw attention.
colors:
  canvas-white: "#ffffff"
  ghost-frost: "#fbf9f6"
  midnight-ink: "#000000"
  shadow-tint: "#d6d6d6"
  ocean-blue: "#234386"
  sunny-yellow: "#ffc400"
  lagoon-blue: "#6aa8dc"
  desert-ochre: "#d2b68c"
  harvest-orange: "#ed7328"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
    letterSpacing: 0.267px
  subheading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 0.9
    letterSpacing: 0.031px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 0.87
    letterSpacing: 0.043px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.14
    letterSpacing: 0.031px
  display:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 0.73
spacing:
  cardRadius: 8px
  buttonRadius: 32px
  elementGap: 4px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Main call to action
  secondary-outlined-button:
    role: Alternative call to action, less prominent actions
  neutral-outlined-button:
    role: General informational or secondary navigations
  text-link-button:
    role: Inline actions or navigational links without a background
  elevated-recipe-card:
    role: Showcasing recipes or product features with a subtle lift
  ghost-card:
    role: Content container with minimal visual impact
  input-field:
    role: Standard form input or search field
  outlined-input-field:
    role: Alternative form input with full border, more explicit interaction area
---

## Overview

**North Star:** organic, hand-drawn vitality

Pa'lais blends nourishing organics with a playful, hand-drawn aesthetic. The system features a bright white canvas interspersed with organic, flowing colored sections. Typography is confident and layered, mixing classic serif with modern sans-serif and whimsical display fonts. Components are subtly rounded and light, emphasizing a fresh, approachable brand identity, with an occasional bold accent color to draw attention.

### Do's

- Use Ocean Blue (#234386) for all primary action buttons, ensuring a consistent brand call to action.
- Apply Canvas White (#ffffff) as the default background for most content sections, fostering a light and open feel.
- Employ the 32px border radius for all buttons to maintain a soft and approachable interactive style.
- Utilize hwt-artz for key headings and prominent display text to leverage its playful, distinctive character and wide tracking.
- Integrate Sunny Yellow (#ffc400) and Lagoon Blue (#6aa8dc) as decorative accents and illustration fills to add vibrancy without overwhelming the UI.
- Maintain a clear visual hierarchy by using Harvest Orange (#ed7328) for outlined button text and borders, offering a warm secondary action.
- Structure most UI elements with a base 4px spacing unit, using multiples for consistency (e.g., 4px, 8px, 16px, 24px, 40px).

### Don'ts

- Avoid using Harvest Orange (#ed7328) as a filled button background; reserve it for outlined button text and borders.
- Do not use multiple shadow values on a single UI element; adhere to the specified card shadow only for cards.
- Refrain from using Times for primary headings or body text; it is reserved for small utility text.
- Do not use dark backgrounds for main content areas unless it's a specific, localized, decorative treatment.
- Avoid adding hard, sharp corners to interactive elements; maintain the consistent use of rounded borders, especially 32px for buttons.
- Do not condense letter spacing in display fonts; hwt-artz and ITC Avant Garde rely on wider tracking for their visual signature.
- Do not introduce new color shades for accents or brand elements; stick to the defined palette of Sunny Yellow, Lagoon Blue, and Harvest Orange.

### Layout

The page maintains a centered max-width content area for readability, framed by often full-bleed decorative elements. The hero section prominently features a large, decorative text headline centered over a background that combines a soft, off-white with organic color splashes and product imagery. Sections generally alternate between full-width decorative background elements (like the orange wave) and contained, white-background content blocks. Content arrangement often uses two-column layouts, pairing descriptive text with related visuals (such as product shots or illustrations). A feature grid is employed for showcasing recipes in distinctive, elevated cards. Navigation is handled by a discreet top-bar that remains relatively compact, alongside a sticky header that likely appears on scroll.

### Imagery

The visual language is characterized by a blend of stylized, hand-drawn botanical illustrations and high-quality, vibrant product photography. Illustrations are often monochrome (Ocean Blue or deep gray) or feature soft, muted colors like Desert Ochre and Lagoon Blue, appearing as elegant background motifs, abstract shapes, or decorative elements. Photography focuses on appetizing, fresh food arrangements, often with ingredients in context, rich in color and texture. Both image types are often treated with organic, flowing masks or cut-outs, creating a soft, natural aesthetic. Icons are primarily line-based, monochrome, and have a medium stroke weight. Density is balanced, with imagery often serving as atmospheric background or contextual visual alongside text blocks, rather than dominating full screens.
