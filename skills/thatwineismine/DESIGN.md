---
version: alpha
name: ThatWineIsMine
description: ThatWineIsMine presents a warm, inventory-focused shop experience. A classic light theme with high contrast text and a vivid red accent color creates clear calls to action and highlights product details. Product cards are central, featuring soft shadows and prominent imagery, grounded by clear pricing and review details. The layout prioritizes product visibility with clear sectioning and comfortable spacing.
colors:
  canvas-white: "#ffffff"
  ash-gray: "#f0f0f0"
  graphite: "#333333"
  steel-gray: "#666666"
  goldenrod-accent: "#f9a825"
  wine-red: "#8b0000"
  goldenrod-gradient: "#ffa500"
  shadow-tint: "#d5abab"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.6
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.6
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.3
spacing:
  cardRadius: 15px
  buttonRadius: 30px
  elementGap: 20px
  sectionGap: 113px
components:
  navigation-link:
    role: Header navigation items
  ghost-header-button:
    role: Secondary action in header
  vivid-product-card:
    role: Displays individual product listings
  wine-red-action-button:
    role: Primary Call to Action buttons, like 'Lihat Detail'
  product-rating-text:
    role: Displays product star rating and review count
  product-price-text:
    role: Displays the price of a product
---

## Overview

**North Star:** Warm Product Showroom. Brightly lit cards present products with a clear, direct aesthetic.

ThatWineIsMine presents a warm, inventory-focused shop experience. A classic light theme with high contrast text and a vivid red accent color creates clear calls to action and highlights product details. Product cards are central, featuring soft shadows and prominent imagery, grounded by clear pricing and review details. The layout prioritizes product visibility with clear sectioning and comfortable spacing.

### Do's

- Use Graphite (#333333) for all primary text elements to ensure high contrast and readability.
- Apply Wine Red (#8b0000) for primary call-to-action button backgrounds and important interactive links.
- Maintain a comfortable information density using an element gap of 20px and a section gap of 113px.
- Ensure all cards have a 15px border radius and the rgba(0, 0, 0, 0.1) 0px 4px 15px 0px shadow for consistent elevation.
- Use Arial font family for all text elements, leveraging weights 400 for body, 600 for headings, and 700 for bold labels.
- Apply Goldenrod Accent (#f9a825) sparingly for decorative highlights, badges, and to draw attention to specific product features or banners.
- Implement a 30px border radius for key interactive buttons in the header, while primary action buttons within content use an 8px radius.

### Don'ts

- Do not use highly saturated colors for large background areas; reserve Canvas White (#ffffff) and Ash Gray (#f0f0f0) for primary surfaces.
- Avoid using multiple font families; stick strictly to Arial across all typographic elements.
- Do not introduce shadows without the prescribed rgba(0, 0, 0, 0.1) 0px 4px 15px 0px for cards or rgba(139, 0, 0, 0.3) 0px 4px 15px 0px for buttons.
- Do not deviate from the established 15px border radius for cards or 8px for CTA buttons.
- Avoid excessive use of the Goldenrod Accent (#f9a825) that might compete with the Wine Red (#8b0000) primary actions.
- Do not use generic black for text; always use Graphite (#333333) or Steel Gray (#666666) depending on hierarchy.
- Do not use padding inside product cards: images should bleed to the edge to maximize product visibility.

### Layout

The page adheres to a max-width of 1200px, with content centered. The hero section is full-bleed, featuring a background image with a centered headline and supporting text. Content is arranged in distinct sections, with a prominent 'Produk Kami' section presenting a grid of product cards. The primary layout for product display is a multi-column grid, showcasing product cards with uniform sizing. Vertical spacing between sections is generous (113px), providing breathing room. Navigation is a simple top bar, with the brand logo left-aligned and navigation links right-aligned.

### Imagery

The site heavily relies on product-focused photography and digital illustrations. Photography features tight crops of wine and whisky bottles, often on a clean white or slightly textured background, with no lifestyle context. These product images frequently include dynamic water splash-like digital illustrations that emphasize movement and refreshment. Icons, where present, are minimal and functional, typically filled. Imagery's role is primarily product showcase, with a high density of visuals relative to text within product listings, making the products the hero of each card.
