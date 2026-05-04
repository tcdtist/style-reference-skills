---
version: alpha
name: Loveseen
description: Loveseen's visual style evokes a minimalist fashion-editorial aesthetic. It presents content on a clean, light canvas, leveraging subtle neutral tones for background variation and borders. Typography is sophisticated and generous with letter spacing, creating an airy feel. Components are understated, featuring hairline borders and an absence of strong shadows, emphasizing content over chrome. The overall impression is one of effortless elegance and product-focused presentation.
colors:
  midnight-ink: "#00091b"
  alabaster: "#f2eded"
  porcelain: "#faf6f5"
  blush-sand: "#f2e2e0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.63
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.63
  body:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.63
  body-lg:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.63
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.63
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.63
spacing:
  elementGap: 15px
  sectionGap: 70px
components:
  ghost-button:
    role: Primary interactive element for calls to action.
  navigation-link:
    role: Top-level navigation and secondary links.
  input-field:
    role: Text input areas.
  follow-cta-block:
    role: Social media call to action.
  product-image-card:
    role: Displaying product images or user-generated content.
---

## Overview

**North Star:** Minimalist Editorial Canvas

Loveseen's visual style evokes a minimalist fashion-editorial aesthetic. It presents content on a clean, light canvas, leveraging subtle neutral tones for background variation and borders. Typography is sophisticated and generous with letter spacing, creating an airy feel. Components are understated, featuring hairline borders and an absence of strong shadows, emphasizing content over chrome. The overall impression is one of effortless elegance and product-focused presentation.

### Do's

- Use Alabaster (#f2eded) as the default background for all primary page content sections.
- Apply Midnight Ink (#00091b) for all primary body text, headlines, and interactive elements to maintain high contrast and sophistication.
- Ensure all buttons and input fields feature sharp, 0px border radii.
- Implement consistent 1px borders in Midnight Ink (#00091b) for ghost buttons and input fields to define interactive areas subtly.
- Utilize the BeausiteWeb font family across all typographic elements, leveraging its varied letter-spacing for an airy, elegant presentation.
- Introduce Blush Sand (#f2e2e0) as a background color to delineate distinct content sections or footers with a soft visual break.
- Maintain a spacious density; prioritize ample whitespace, with element gaps around 15px and vertical section gaps at 70px.

### Don'ts

- Avoid applying any border-radius greater than 0px to interactive components like buttons or input fields.
- Do not use strong shadows (elevation) on any UI elements; rely on subtle background color shifts or hairline borders for visual separation.
- Refrain from using highly saturated or bright colors beyond the core brand palette; color should be spare and functional.
- Do not use generic system fonts for prominent display text or navigation; BeausiteWeb is critical to the brand's aesthetic.
- Avoid decorative gradients; stick to solid colors for backgrounds and component fills.
- Do not clutter layouts; maintain a disciplined spaciousness and minimal component density.
- Do not use distinct filled buttons for primary actions; prefer the ghost button style with Midnight Ink borders and text.

### Layout

The page primarily utilizes a full-bleed layout for hero sections, transitioning to a contained, centered model for body content. The hero typically features large, dynamic imagery often split or overlaid with minimal text and ghost buttons. Sections are defined by varying background colors (Alabaster, Blush Sand), creating a subtle visual rhythm without hard dividers. Content is arranged in flexible patterns, including centered stacks for calls to action and multi-column grids for featuring images or testimonials. Navigation is a persistent, minimal top bar with left-aligned brand logo and right-aligned links.

### Imagery

This site features high-key, product-focused photography and lifestyle imagery, often tightly cropped to focus on the face or eyes. Images are full-bleed or presented as isolated, square, unmasked elements on clean backgrounds. The photography is vibrant and high-contrast, showcasing product usage directly rather than conceptual scenes. Icons are minimal, utilizing outlined styles with light stroke weights and predominantly Midnight Ink (#00091b) color. Imagery serves both decorative atmosphere in hero sections and explanatory/social proof roles within content blocks.
