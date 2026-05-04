---
version: alpha
name: Hai
description: Hai employs a minimalist aesthetic that centers on a clean, almost stark white canvas providing ample negative space for product photography and subtle typography. Contrasting with the light backdrop, all text and interactive elements are rendered in a deep, absolute black, creating sophisticated definition. The brand's distinctive visual identity is further characterized by the use of custom serif and sans-serif fonts with unique letter-spacing, giving a sense of exclusivity and handcrafted precision. Buttons feature a refined, subtle outline rather than bold fills, maintaining the quiet luxury feel.
colors:
  midnight-ink: "#000000"
  canvas-white: "#FFFFFF"
  ferry-red: "#CF2442"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
    letterSpacing: 0.8px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: -0.8px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
    letterSpacing: -1.65px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
    letterSpacing: -2.06px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 0.8
    letterSpacing: -1.92px
spacing:
  cardRadius: 50%
  buttonRadius: 10px
  elementGap: 16px
  sectionGap: 32px
components:
  ghost-outline-button:
    role: Primary action button
  product-title-forma-nuovo:
    role: Product listing headline
  product-link-times-now:
    role: Product detail link
  circular-card:
    role: Decorative or featured product card
  navigation-link:
    role: Top-level navigation item
---

## Overview

**North Star:** white gallery, black ink

Hai employs a minimalist aesthetic that centers on a clean, almost stark white canvas providing ample negative space for product photography and subtle typography. Contrasting with the light backdrop, all text and interactive elements are rendered in a deep, absolute black, creating sophisticated definition. The brand's distinctive visual identity is further characterized by the use of custom serif and sans-serif fonts with unique letter-spacing, giving a sense of exclusivity and handcrafted precision. Buttons feature a refined, subtle outline rather than bold fills, maintaining the quiet luxury feel.

### Do's

- Prioritize ample negative space around all elements to maintain a clean, high-end feel.
- Use Midnight Ink (#000000) for all text and UI outlines to ensure stark contrast and definition.
- Apply Forma Nuovo for all headings and key UI labels, utilizing its specified letter-spacing for each size.
- Use Times Now for body text and descriptive elements, adhering to its specific letter-spacing for a refined look.
- Implement the Ghost Outline Button for all interactive elements, featuring the 1px Midnight Ink border and 10px radius.
- Maintain a clear visual hierarchy by limiting saturated colors; reserve Ferry Red (#CF2442) for highly specific and subtle accents if needed.
- Ensure all buttons and links utilize a 10px border-radius, while specialized circular cards use a 50% radius for distinctiveness.

### Don'ts

- Avoid using harsh drop shadows or heavy backgrounds; maintain the light and airy feel.
- Do not introduce new typefaces, as the chosen custom fonts are core to the brand's identity.
- Do not deviate from the specified letter-spacing values as they are a signature characteristic of the typography.
- Avoid filling buttons with solid background colors; stick to the ghost outline style for primary interactions.
- Do not clutter layouts with excessive elements; embrace spaciousness and minimalism.
- Do not use gradients unless explicitly part of the design system beyond the current data.
- Avoid using any color other than Midnight Ink for borders on interactive elements, or for primary text.

### Layout

The page primarily employs a full-bleed layout for hero sections featuring large imagery, while internal content often adheres to a max-width contained model. The hero section frequently presents a large visual on one side (e.g., a model) and a distinct brand element or text on the other. Vertical rhythm is characterized by comfortable, consistent section gaps, creating a spacious feel. Content arrangement often alternates between imagery and text, with text labels positioned deliberately adjacent to products. Navigation is a minimal top bar, displaying key links without overwhelming the header space. The overall density is light, with significant breathing room.

### Imagery

The site predominantly uses high-key product photography, often featuring candid-style models in lifestyle shots or tightly cropped product details (e.g., shoes). Imagery is integrated seamlessly into the white canvas, frequently appearing as full-bleed sections or subtly framed without strong borders. The visual focus is on the product and its texture, often with a raw, authentic feel. Icons, if present, are likely minimal, outlined, and monochromatic, matching the overall stark aesthetic. Imagery plays an atmospheric and showcase role, with a strong emphasis on texture and natural light.
