---
version: alpha
name: Limón
description: Limón projects a warm, vibrant aesthetic through contrasting earthy dark neutrals with a singular, vivid yellow accent. Typography, primarily a custom sans-serif, maintains a clean and approachable feel, while the use of subtle borders and minimal shadows keeps components lightweight. The design balances rich photographic visuals with ample whitespace, creating an inviting yet structured experience.
colors:
  deep-forest: "#1d0b0d"
  fresh-lime: "#103b15"
  marigold-zest: "#f7ea48"
  vanilla-cream: "#fcf9f0"
  soft-mist: "#dbe2dc"
  pure-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.45
    letterSpacing: 0.02px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: 0.03px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.35
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 1
    letterSpacing: 0.04px
spacing:
  buttonRadius: 1px
  elementGap: 15px
  sectionGap: 30px
components:
  primary-action-button:
    role: Call to action
  ghost-action-button-dark:
    role: Secondary action on dark backgrounds
  ghost-action-button-light:
    role: Secondary action on light backgrounds
  icon-button:
    role: Standalone decorative or functional icon
  product-description-card:
    role: Displaying individual product details
  navigation-link:
    role: Primary navigation elements
---

## Overview

**North Star:** Earthy vibrancy

Limón projects a warm, vibrant aesthetic through contrasting earthy dark neutrals with a singular, vivid yellow accent. Typography, primarily a custom sans-serif, maintains a clean and approachable feel, while the use of subtle borders and minimal shadows keeps components lightweight. The design balances rich photographic visuals with ample whitespace, creating an inviting yet structured experience.

### Do's

- Prioritize 'Marigold Zest' (#f7ea48) for all primary calls to action, ensuring it is the sole vivid accent on pages predominantly using neutral tones.
- Use 'Deep Forest' (#1d0b0d) as the default background for immersive sections and main text color on light backgrounds like 'Vanilla Cream' (#fcf9f0).
- Employ 'Vanilla Cream' (#fcf9f0) for primary content surfaces and background panels, providing a warm, off-white canvas.
- Maintain a comfortable rhythm with '15px' as the standard element gap, extending to '30px' for section separation.
- Apply '1px' border-radius to interactive elements like buttons and body text containers, while using '40px' for imagery crops to introduce softness.
- Use VenusCom with varying weights for all headings and body text; reserve 'Times' and 'FreeSans' for specific decorative list elements if needed.
- Ensure textual elements adhere to the established line heights, particularly longer body text at 1.37 to 1.40 for readability.

### Don'ts

- Avoid introducing additional saturated colors beyond 'Marigold Zest' (#f7ea48) for interactive elements.
- Do not use dark text colors on 'Deep Forest' (#1d0b0d) backgrounds; default to 'Pure White' (#ffffff) or 'Vanilla Cream' (#fcf9f0) for contrast.
- Never deviate from the 1px border-radius for buttons and body containers, or 40px for images; these are signature brand attributes.
- Do not use letter-spacing values from Font Awesome or FreeSans on VenusCom body text or headings.
- Avoid dense UI layouts without sufficient '15px' element gaps or '30px' section gaps, as the design relies on comfortable negative space.
- Do not place 'Marigold Zest' (#f7ea48) text against a 'Vanilla Cream' (#fcf9f0) background; the low contrast will hinder legibility.
- Refrain from using 'Soft Mist' (#dbe2dc) as a background color for large sections; its primary role is for subtle dividers and borders.

### Layout

The layout follows a max-width contained page model for most content, with a centered alignment. The hero section is full-bleed, using a 'Deep Forest' (#1d0b0d) background with food photography and centered text (`Limón`, `See our menu`) often in 'Marigold Zest' (#f7ea48) or 'Pure White' (#ffffff). Section rhythm alternates between full-bleed imagery and content blocks with 'Vanilla Cream' (#fcf9f0) backgrounds. Content is organized into a flexible grid pattern, often featuring 3-column product cards with images above descriptive text and 'Order Now' ghost buttons. Vertical spacing is comfortable, with a '30px' section gap observed. The navigation is a fixed top bar with minimalist links.

### Imagery

The visual language predominantly features high-quality product photography: food items (bowls, wraps) are tightly cropped and displayed in a flat lay, top-down perspective on solid, muted backgrounds (often matching 'Deep Forest' or other earthy tones). Images are typically contained within a rectangular frame but some have a distinct 40px border-radius, giving them a softer edge. Photography serves both decorative and explanatory roles, showcasing the vibrancy of the food. Icons are minimal, using outlined or solid Font Awesome styles primarily for navigation and social links, maintaining a clean distinction from the rich food photography.
