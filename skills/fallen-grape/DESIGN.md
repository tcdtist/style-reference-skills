---
version: alpha
name: Fallen Grape
description: Fallen Grape cultivates a natural, earthy aesthetic, reflecting its product's organic ethos: a warm, muted palette evokes a sunset over a vineyard, complemented by rustic typography. Surfaces are generally flat and unadorned, with a distinct absence of shadows, creating an honest and grounded feel. User interface elements such as buttons and navigation are kept simple, often with a subtle border in a desaturated tone, maintaining an unobtrusive presence that lets the product and imagery shine. The overall atmosphere is serene and authentic, using color and typography to suggest handcrafted quality rather than digital slickness.
colors:
  desert-sand: "#ece0d2"
  warm-clay: "#e1c6ab"
  vineyard-mauve: "#7c664d"
  terra-cotta: "#e3a36e"
  deep-earth: "#573d21"
  pale-sage: "#d8deb7"
  cloud-cover: "#f3f3f3"
  electric-blue: "#007aff"
  sunny-glow: "#efa164"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.7
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.7
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: 0.03px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0.03px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: 0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.2
    letterSpacing: 0.03px
spacing:
  elementGap: 10px
  sectionGap: 36-40px
components:
  primary-action-button:
    role: Call to action for key interactions
  section-callout-button:
    role: Secondary action within content sections
  ghost-navigation-button:
    role: Navigation and subtle interactive elements, often with icons
  product-card:
    role: Display individual product listings in grids
  elevated-product-card:
    role: Display featured product listings or interactive cards on the homepage
---

## Overview

**North Star:** Sunset Vineyard Aura

Fallen Grape cultivates a natural, earthy aesthetic, reflecting its product's organic ethos: a warm, muted palette evokes a sunset over a vineyard, complemented by rustic typography. Surfaces are generally flat and unadorned, with a distinct absence of shadows, creating an honest and grounded feel. User interface elements such as buttons and navigation are kept simple, often with a subtle border in a desaturated tone, maintaining an unobtrusive presence that lets the product and imagery shine. The overall atmosphere is serene and authentic, using color and typography to suggest handcrafted quality rather than digital slickness.

### Do's

- Use Desert Sand (#ece0d2) as the primary canvas for all background structures, providing a warm, inviting base.
- Apply Vineyard Mauve (#7c664d) for all standard text elements and hairline borders, creating a cohesive, low-contrast UI.
- Set headlines in Romie font, utilizing its 48px or 64px size with 0.0300em letter spacing for a refined brand presence.
- Design primary call-to-action buttons with a Warm Clay (#e1c6ab) background and Electric Blue (#007aff) text, ensuring they stand out functionally.
- Maintain a comfortable density with element gaps of 10px and card paddings of 17px to allow content to breathe.
- Keep all corners sharp with 0px border-radius across UI components for a grounded, architectural feel.
- Implement the Electric Blue (#007aff) specifically for accessibility features, ensuring high visibility for these vital controls.

### Don'ts

- Avoid the use of drop shadows or strong elevation; the design system favors a flat, natural aesthetic.
- Do not introduce highly saturated or cool-toned colors outside of explicit semantic use (like Electric Blue for accessibility), to preserve the warm, earthy palette.
- Refrain from using varied border-radii; adhere strictly to 0px for all elements to maintain visual consistency.
- Do not use generic system fonts in place of Romie, Arial Narrow, or GTStandard-M, as these are critical to the brand’s typographic identity.
- Avoid dense, information-heavy sections; prioritize comfortable spacing and clear focus around imagery and key text.
- Do not assume any semantic color roles for green, red, or blue, unless explicitly stated as an accent or semantic color in the palette; context is critical to usage guidelines.

### Layout

The site employs a max-width contained layout generally, but parts of the hero are full-bleed with illustrative background elements that extend to the viewport edges. The hero section features a large, centered illustration with a headline and prominent 'SHOP ALL' button. Below the hero, sections alternate between a primary background and a subtly lighter card background, creating a soft visual rhythm. Content is arranged in centered stacks for textual intros, and multi-column grids (likely 3-column) for product displays. The navigation is a classic sticky top bar, centered for the logo with left-aligned 'Shop All' and right-aligned 'Login' and 'Cart'. The density is comfortable, with ample breathing room between sections and content blocks.

### Imagery

The site uses a mix of artistic, abstract illustrations and high-quality product photography. Illustrations, particularly in the hero section, depict whimsical nature scenes with butterflies, dragonflies, and grapevines, rendered in a muted, painterly style with soft, blended colors. Product photography features wine bottles, merch, and glasses, either in tight crops with soft, natural lighting or in lifestyle contexts with organic elements like leaves. Icons appear to be outlined and minimalist if present, often brand-colored. Imagery serves both decorative atmosphere and direct product showcase, occupying significant visual space in the hero but becoming more contained in product grids.
