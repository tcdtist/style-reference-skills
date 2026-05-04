---
version: alpha
name: Beautiful™
description: Beautiful™ uses a warm, inviting aesthetic with a creamy, almost edible color palette that feels like a home goods catalog. Typography blends classic serif with modern sans-serif for a confident yet approachable tone. Components emphasize soft, rounded edges and minimal elevation, fostering a tactile and gentle user experience. Color accents are reserved for primary calls to action, creating a subtle visual hierarchy without jarring contrasts.
colors:
  creamy-canvas: "#fff5e6"
  buttermilk: "#e8e8e1"
  deep-licorice: "#000000"
  truffle: "#282828"
  white-linen: "#ffffff"
  pebble-gray: "#cccccc"
  ash-mist: "#707070"
  coral-kiss: "#fa7864"
  desert-rose: "#dc8264"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.3
    letterSpacing: -0.03px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -0.034px
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.2
    letterSpacing: -0.038px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 1
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1
    letterSpacing: 0px
spacing:
  cardRadius: 50%
  buttonRadius: 999px
  elementGap: 10px
  sectionGap: 32px
components:
  primary-action-button:
    role: Call to action
  secondary-rounded-button:
    role: Alternate call to action
  ghost-action-button:
    role: Subtle, outlined action
  navigation-link-button:
    role: Navigational element
  circular-category-card:
    role: Product category navigation
  light-text-input:
    role: User input field
---

## Overview

**North Star:** Warm Home Goods Catalog: pages feel like browsing a tactile, sunlit lifestyle brand.

Beautiful™ uses a warm, inviting aesthetic with a creamy, almost edible color palette that feels like a home goods catalog. Typography blends classic serif with modern sans-serif for a confident yet approachable tone. Components emphasize soft, rounded edges and minimal elevation, fostering a tactile and gentle user experience. Color accents are reserved for primary calls to action, creating a subtle visual hierarchy without jarring contrasts.

### Do's

- Use 'Creamy Canvas' (#fff5e6) as the primary background for sections with content, providing a soft base.
- Prioritize 'Coral Kiss' (#fa7864) for all primary calls to action, such as 'Shop Now' buttons, and for emphasizing key messaging.
- Apply a 999px border-radius to all filled action buttons to achieve a soft, pill-shaped aesthetic.
- Employ the GascogneTS font for all headlines and prominent brand text to establish the elegant and inviting tone, using 'Deep Licorice' (#000000) for contrast.
- Maintain a comfortable information density, utilizing 10px as a baseline for `elementGap` and `cardPadding` to allow content to breathe.
- Use 'Buttermilk' (#e8e8e1) for input fields and subtle background variations to layer content without harsh breaks.
- Ensure brand imagery features soft lighting, a slightly desaturated color palette, and is contained within clear bounds, often circular or soft-edged.

### Don'ts

- Avoid harsh shadows or strong gradients; the system relies on subtle surface changes and color for hierarchy.
- Do not introduce new saturated primary colors; 'Coral Kiss' and 'Desert Rose' are the only brand accents intended for interactive elements.
- Refrain from using excessively bold or uppercase typography for calls to action or body text; the Basis Grotesque Pro 400 weight should maintain a gentle presence.
- Do not crop product photography tightly or use hard-edged imagery; images should complement the soft, inviting brand feel, often with a hint of lifestyle context.
- Avoid cluttering the layout; allow ample white space around elements, particularly with a `sectionGap` of 32px or more.
- Do not use dark backgrounds for main content sections; the theme is predominantly light, establishing a bright and airy feel.
- Do not use sharp 0px border-radii for interactive elements; all buttons and active components should maintain a soft, rounded appearance.

### Layout

The page model is primarily a max-width contained layout, though it appears to have full-bleed sections for hero imagery depending on viewport. The hero pattern includes a large visual of products on one side and a prominent headline and description on the other, reflecting a split-panel approach. Section rhythm maintains consistent vertical spacing, often distinguished by alternating background colors (Buttermilk vs Creamy Canvas). Content arrangement frequently utilizes 2-column layouts for text alongside visuals, and a 3-column grid for product cards. Overall density is comfortable, with ample breathing room between sections and elements. Navigation is a sticky top bar with the brand logo centered and dropdowns for collections.

### Imagery

The visual language for imagery on Beautiful™ is soft, inviting, and product-focused with a lifestyle touch. Photography is high-key, with bright, diffused lighting and slightly desaturated, warm tones. Products are often shown in a natural home setting or as clean, studio shots with soft shadows. Illustrations are flat, organic, and utilize the brand's warm color palette sparingly. Icons are outlined, with a moderate stroke weight, appearing monochrome. Images are typically contained, often within perfect circles for category navigation or soft-edged rectangles, providing decorative atmosphere and product showcasing. The site is image-heavy, balancing prominent visuals with concise text.
