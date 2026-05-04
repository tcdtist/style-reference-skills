---
version: alpha
name: Payments
description: This system feels like a playful, high-energy tech brand that dares to be vibrant without sacrificing clarity. The deep, rich 'Grape Soda' purple is the signature and dominant hue, creating a striking backdrop for crisp white text and clean, information-dense UIs. Bright 'Lemon Zest' yellow appears strategically as an accent, especially in the announcement bar, introducing a pop of warmth. Type is clean and authoritative with a touch of character, using generous letter spacing within headlines to balance the bold color choices.
colors:
  grape-soda: "#5423e7"
  lemon-zest: "#ffc233"
  forest-canopy: "#1e874c"
  ocean-deep: "#0075ad"
  ruby-glow: "#d50b3"
  bubblegum-pink: "#cf75ff"
  midnight-ink: "#121217"
  ghost-white: "#ffffff"
  driftwood: "#6c6c89"
  parchment: "#f7f7f8"
  cloud-grey: "#d1d1db"
  pink-sugar: "#feecfb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.7
    letterSpacing: 0.143px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.8
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.22
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.13
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -3.2px
spacing:
  cardRadius: 48px
  buttonRadius: 8px
  elementGap: 8-16px
  sectionGap: 80px
components:
  announcement-banner:
    role: 
  button-group:
    role: 
  feature-list-section:
    role: 
  primary-call-to-action-button:
    role: Primary interactive element.
  outline-button-default:
    role: Secondary and tertiary actions.
  outline-button-ocean-deep:
    role: Informational or complementary actions.
  outline-button-forest-canopy:
    role: Positive or confirmation actions.
  hero-section-headline:
    role: Main page title or key marketing message.
  navigation-link:
    role: Primary navigation items.
---

## Overview

**North Star:** Grape Soda & Lemon Zest. A bold purple lake with bright yellow accents floating atop.

This system feels like a playful, high-energy tech brand that dares to be vibrant without sacrificing clarity. The deep, rich 'Grape Soda' purple is the signature and dominant hue, creating a striking backdrop for crisp white text and clean, information-dense UIs. Bright 'Lemon Zest' yellow appears strategically as an accent, especially in the announcement bar, introducing a pop of warmth. Type is clean and authoritative with a touch of character, using generous letter spacing within headlines to balance the bold color choices.

### Do's

- Use Grape Soda (#5423e7) for strong background statements or primary branding blocks.
- Apply Lemon Zest (#ffc233) for high-impact alerts or secondary interactive elements.
- Employ Circularpro Book 400 with negative letter spacing for all headings and display text to achieve a distinctive visual voice.
- Maintain high contrast text with Midnight Ink (#121217) on light backgrounds and Ghost White (#ffffff) on dark backgrounds.
- Use Inter font for all body copy and UI elements to ensure readability across sizes, varying weights for hierarchy.
- Apply 8px border-radius consistently for all interactive buttons and smaller UI elements.
- Utilize 48px border-radius for larger, distinct elements such as feature cards or graphical containers to soften their appearance.

### Don'ts

- Avoid using primary brand colors (Grape Soda, Lemon Zest) for extensive body copy; refer to Midnight Ink or Driftwood for readability.
- Do not use box shadows for elevation; rely on color changes and Ghost White (#ffffff) backgrounds to differentiate content blocks.
- Do not introduce additional font families; adhere strictly to Inter and Circularpro Book.
- Avoid arbitrary color choices; all chromatic colors should derive from the established brand, accent, or semantic palettes.
- Do not use generic button styles; always apply 8px radius and text/background/border combinations from the defined button variants.
- Do not add additional visual ornamentation or gradients; the design relies on bold color blocks and typographic expressiveness.
- Avoid deviating from the established spacing scale (multiples of 8px) for consistent visual rhythm.

### Layout

The page primarily uses a max-width contained layout (1233px) with content centered. The hero section, however, breaks this pattern with a full-bleed Grape Soda (#5423e7) background, featuring a large, centered headline and a prominent product mockup. Section rhythm alternates between large, full-bleed color blocks (Grape Soda) and clean, white or slightly tinted (#feecfb) backgrounds for content sections. Content arrangement typically follows a clear vertical stacking or alternating two-column layout (text on left, visual/icon on right, or vice-versa). Vertical spacing between sections is generous, creating a spacious and breathable feel. Navigation is a sticky top bar with primary links and a 'Get Started' CTA, positioned on the right.

### Imagery

The visual language is characterized by realistic product mockups (e.g., tablet showing the dashboard UI) floating in space on vibrant brand-colored backgrounds. These are contained, sharp-edged, and serve to directly showcase product functionality rather than create an abstract mood. Icons, where visible, are simple, monochromatic, and outlined, appearing frequently in navigation or feature lists. Photography is notably absent, reinforcing the focus on the digital product itself. The overall density is text-dominant in feature sections, with hero areas relying on bold typography and a single product visual.
