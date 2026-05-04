---
version: alpha
name: Robinhood
description: This system evokes a high-contrast, edgy digital experience, like a sleek command interface. Its stark visual identity is built on a limited palette of near-black, pure white, and a single, aggressive electric lime green. Typography plays a crucial role in establishing authority through custom typefaces, with a distinct serif for display headings creating a sense of luxury and importance, while a sans-serif maintains legibility for body text. Rounded pill-shaped buttons stand out against the predominantly angular design, providing clear interactive points.
colors:
  deep-space-black: "#110e08"
  void-black: "#000000"
  ghost-white: "#ffffff"
  shadow-graphite: "#35322d"
  rocket-lime: "#ccff00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.26
    letterSpacing: -0.077px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.008px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.09
    letterSpacing: -0.011px
  heading:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 1.2
    letterSpacing: -0.019px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.08
    letterSpacing: -0.014px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -0.014px
spacing:
  buttonRadius: 36px
  elementGap: 8px
components:
  cta-button-group:
    role: 
  stock-token-feature-card:
    role: 
  asset-search-tab-bar:
    role: 
  primary-call-to-action-button:
    role: Action
  secondary-ghost-button:
    role: Action
  inline-text-link:
    role: Navigation/Action
  navigation-link:
    role: Navigation
  input-field-example:
    role: Data Entry
---

## Overview

**North Star:** Electric lime on a dark canvas. The design feels like a financial dashboard powered by neon-green data points against a dark, responsive background.

This system evokes a high-contrast, edgy digital experience, like a sleek command interface. Its stark visual identity is built on a limited palette of near-black, pure white, and a single, aggressive electric lime green. Typography plays a crucial role in establishing authority through custom typefaces, with a distinct serif for display headings creating a sense of luxury and importance, while a sans-serif maintains legibility for body text. Rounded pill-shaped buttons stand out against the predominantly angular design, providing clear interactive points.

### Do's

- Prioritize Deep Space Black (#110e08) for backgrounds and Ghost White (#ffffff) for primary text to maintain high contrast.
- Use Rocket Lime (#ccff00) exclusively for primary CTA buttons and explicit accent elements, never for large blocks or generic text.
- Apply 36px border-radius to all interactive components like buttons and inputs for a consistent 'pill' shape.
- Utilize Martina Plantijn at 72px or 80px for all page-level headlines to establish a luxurious and authoritative tone.
- Ensure consistent spacing with the 8px base unit, particularly for element-to-element gaps.
- Leverage Capsule Sans Text for all body copy and most UI elements, adjusting letter-spacing as per its defined profiles for optimal visual rhythm.

### Don'ts

- Do not introduce new vibrant colors outside of the Rocket Lime (#ccff00) accent.
- Avoid using hard-edged rectangles for interactive elements; all buttons and input fields must be pill-shaped with 36px radius.
- Do not use generic system fonts; stick strictly to Capsule Sans Text, Phonic, and Martina Plantijn.
- Do not dilute the impact of Rocket Lime by using it for non-interactive or purely decorative elements.
- Refrain from heavy drop shadows or excessive elevation; the aesthetic relies on flat, high-contrast layers and typography for hierarchy.
- Avoid using multiple line-heights or letter-spacings for the same font/size combination — adhere to the defined typographic profiles.

### Layout

The page primarily employs a max-width contained layout, though the initial hero section is full-bleed with a deep black background and centered headline. Sections alternate between dark backgrounds (Deep Space Black) and lighter, usually Rocket Lime (#ccff00), for distinct content blocks, creating a strong visual rhythm without explicit dividers. Content is generally arranged in a centered stack for the hero, transitioning into two-column layouts (text beside device mockups) or stacked blocks for feature explanations. The footer is full-bleed deep black, echoing the hero. The navigation is a fixed top bar on a deep black background, centered with interactive elements.

### Imagery

The visual language relies heavily on abstract graphics and product screenshots, with a notable absence of lifestyle photography. Product screenshots feature mobile interfaces in deep black, demonstrating app functionality clearly. Abstract graphics often use the brand's electric lime color to highlight key information or create dynamic backgrounds, particularly for the main hero section. Iconography is clean and minimal, appearing as monochrome outlines or fills, consistent with the overall UI. When imagery is present, it serves an explanatory or informational role rather than a decorative or aspirational one, contained within clear sections or device mockups, and never bleeding into the background.
