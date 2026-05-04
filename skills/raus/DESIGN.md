---
version: alpha
name: Raus
description: Raus employs a serene wilderness-retreat visual language: naturalistic colors, soft rounded forms, and compact typography that blends seamlessly with rich photography of cabins and nature. The overall impression is one of grounded tranquility with moments of playful vibrancy. Components feature subtle elevation and generous padding, creating a comfortable, inviting experience.
colors:
  forest-green: "#006434"
  midnight-pine: "#23212c"
  vanilla-cream: "#ffffff"
  sunflower-gold: "#fcbd1c"
  sky-mist: "#a6dfff"
  charred-orange: "#dd5000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.22
    letterSpacing: -0.24px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.18
    letterSpacing: -0.28px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.15
    letterSpacing: -0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
    letterSpacing: -0.44px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.07
    letterSpacing: -0.54px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 0.95
    letterSpacing: -0.6px
spacing:
  cardRadius: 20px
  buttonRadius: 20px
  elementGap: 20px
  sectionGap: 192px
components:
  primary-action-button-charred-orange:
    role: Key calls to action requiring immediate attention.
  secondary-action-button-midnight-pine:
    role: General purpose actions, typically less prominent than primary actions.
  ghost-button-midnight-pine:
    role: Subtle actions or navigation links that appear as text.
  gift-voucher-button-charred-orange-outline:
    role: Call to action specifically for gift vouchers, using brand color as an outline.
  information-card-vanilla-cream:
    role: Container for content sections like articles or feature descriptions.
  search-form-card-sunflower-gold:
    role: Prominent interactive elements for searching or filtering.
  navigation-link:
    role: Primary site navigation items.
  input-field:
    role: User input fields within forms.
---

## Overview

**North Star:** Warm rustic minimalism: soft natural tones meet crisp, understated typography.

Raus employs a serene wilderness-retreat visual language: naturalistic colors, soft rounded forms, and compact typography that blends seamlessly with rich photography of cabins and nature. The overall impression is one of grounded tranquility with moments of playful vibrancy. Components feature subtle elevation and generous padding, creating a comfortable, inviting experience.

### Do's

- Use Midnight Pine (#23212c) for most text and solid backgrounds on secondary buttons, maintaining a grounded feel.
- Apply Forest Green (#006434) exclusively for the brand logo and specific text links where core identity is reinforced.
- Prioritize Charred Orange (#dd5000) for primary action buttons to create a clear, warm focal point.
- Utilize Sunflower Gold (#fcbd1c) as a background for interactive form sections to make them playfully prominent.
- Ensure all cards and many buttons use a soft 20px border-radius to maintain approachability and organic feel.
- For headlines, pair `neue-haas-unica` or `fonts` at weight 300 with negative letter-spacing for refined, understated presence.
- Maintain generous padding of 20px around card content and 48px horizontally in key interactive cards like the search form.

### Don'ts

- Avoid using multiple vivid accent colors together; stick to Charred Orange (#dd5000) for primary actions and Sunflower Gold (#fcbd1c) for background blocks.
- Do not use sharp 0px border-radii for any surfaced components; all interactive and content blocks should feature soft rounding.
- Do not introduce heavy shadows; surfaces should primarily rely on background color differences and subtle borders for distinction.
- Refrain from using Forest Green (#006434) for large blocks of text or general UI elements; reserve it for distinct brand marks and key links.
- Do not use bold-weight typography for main headings; the system relies on lighter weights (300) with generous tracking for elegance.
- Avoid tight spacing between elements within cards; use at least 20px padding for comfort.
- Do not use generic system fonts; `neue-haas-unica` and `fonts` are critical for the brand's typographic identity.

### Layout

The page maintains a contained layout within an inferred maximum width, centered on a warm, off-white canvas. The hero section features a large, left-aligned headline contrasting with full-width, organically shaped photographic elements. Content sections alternate between visually engaging image cards and text blocks, often with a 2-column arrangement. Card grids are prominent for presenting content like journal entries. Vertical spacing is generous and comfortable, creating a relaxed flow. The top navigation is a fixed header with left-aligned brand logo and right-aligned links. The overall density feels spacious and intentional, guiding the eye through a narrative of tranquil retreats.

### Imagery

The site uses high-quality, authentic photography of small, modern cabins in natural settings, often with lush greenery or expansive views. Images are typically full-bleed within card components, featuring organic, rounded-corner masking. The focus is on rustic yet comfortable lifestyle and the natural environment, rather than posed models or abstract concepts. Illustrations are minimal, primarily consisting of outlined icons (e.g., arrows) that match the precise typographic style. Photography is the primary visual storytelling mechanism, used to evoke a sense of quiet escape and natural beauty, occupying significant visual space.
