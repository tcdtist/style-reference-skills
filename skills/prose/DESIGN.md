---
version: alpha
name: Prose
description: This design system evokes a sense of refined, organic luxury through its earthy color palette and bespoke typography. Soft, desaturated greens and beiges (#4d523c, #f1ece0) cradle content, while custom fonts, particularly the whisper-weight display typeface Saol, convey a premium, artisanal feel. Button-level details like the generous 60px radius create a distinctive, approachable tactility against an otherwise structured layout, grounding the brand in natural ease.
colors:
  pine-needle: "#4d523c"
  powder-sand: "#f1ece0"
  lunar-dust: "#f9f7f2"
  white-linen: "#ffffff"
  charcoal-bark: "#323429"
  deep-moss: "#161716"
  ash-grey: "#6c6c6c"
  pale-mauve: "#ead7f3"
  sunken-orange: "#f69371"
  stone-grey: "#a6a6a6"
  shadow-tint: "#e2d9c2"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.31px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.49px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.24px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
    letterSpacing: -0.42px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.3
    letterSpacing: -0.62px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.86
    letterSpacing: -0.96px
spacing:
  cardRadius: 10px
  buttonRadius: 60px
components:
  email-offer-modal:
    role: 
  announcement-banner-cta-buttons:
    role: 
  how-it-works-step-cards:
    role: 
  text-link-button:
    role: Navigation, secondary actions
  input-field:
    role: User input
  offer-badge:
    role: Promotional highlights
  navigation-link:
    role: Primary site navigation
---

## Overview

**North Star:** Organic luxury, soft earth tones. Imagine sunlight filtering through linen onto a stoneware table.

This design system evokes a sense of refined, organic luxury through its earthy color palette and bespoke typography. Soft, desaturated greens and beiges (#4d523c, #f1ece0) cradle content, while custom fonts, particularly the whisper-weight display typeface Saol, convey a premium, artisanal feel. Button-level details like the generous 60px radius create a distinctive, approachable tactility against an otherwise structured layout, grounding the brand in natural ease.

### Do's

- Use Saol weight 300 with negative letter-spacing (-0.42 to -0.96px) for all primary headings (h1, h2) to establish a distinct, whisper-weight authority.
- Prioritize Charcoal Bark (#323429) for primary body text and Pine Needle (#4d523c) for emphasized text and links, to maintain the organic, refined palette.
- Apply a 60px border-radius to all primary call-to-action buttons, creating a soft, pill-shaped tactile feel.
- Employ Lunar Dust (#f9f7f2) as the default page background, and White Linen (#ffffff) for card or modal surfaces, creating subtle layering.
- Utilize an 8px base unit for all spacing, with common increments of 16px, 20px, 32px for larger element and section gaps.
- Ensure input fields are transparent with a #6c6c6c (Ash Grey) bottom border for a minimalist, integrated look.
- Incorporate the muted Sunken Orange (#f69371) sparingly for high-visibility accents, such as small promotional text or warnings, to provide gentle emphasis.

### Don'ts

- Do not use sharp, angular buttons; all interactive elements that are not pure text links should adopt the characteristic 60px or 50% border radius.
- Avoid stark white (#FFFFFF) for large background areas; instead, use the slightly warmer Lunar Dust (#f9f7f2) or Powder Sand (#f1ece0).
- Do not use highly saturated or vivid colors outside of the defined accent palette; maintain the brand's near-gray and muted chromatic aesthetic.
- Refrain from heavy shadows or harsh borders; elevation should be subtle, like the #e2d9c2 (Shadow Tint) used for modals.
- Avoid mixing Simplon Norm and Saol indiscriminately; Saol is reserved for display headings, while Simplon Norm handles everything else.
- Do not introduce new typefaces; the current selection (Simplon Norm, Saol, Simplon Mono) is specific and central to the brand identity.
- Do not overuse Simplon Mono; it is for specific, technical-looking details and should not compete with body or headline text.

### Layout

The page primarily uses a max-width contained layout, with content centered. The hero section often features a split layout with text on one side and a product visual on the other, or a centered headline over a background image. Sections alternate between light backgrounds and slightly darker, more muted tones, creating a gentle visual rhythm without harsh dividers. Content is often arranged in a classic text-left/image-right or vice-versa pattern, promoting easy readability. Navigation is a simple top bar, with elements subtly integrated rather than boldly highlighted. The overall density is comfortable, with generous breathing room around content blocks.

### Imagery

The site predominantly uses product photography, often featuring custom-designed bottles and packaging in warm, natural light. Products are typically presented as contained compositions, either tightly cropped on a clean background or arranged aesthetically with other natural elements (like the comb and soap bar in the modal). Some imagery uses abstract gradients as backgrounds, suggesting a fluid, natural feel. Icons are minimal, subtle, and outline-based, blending into the refined aesthetic; they are not heavily featured. The overall role of imagery is to showcase the product's premium nature and bespoke appeal, less about lifestyle and more about the object itself.
