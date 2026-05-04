---
version: alpha
name: Legora
description: Legora employs a classic minimalist aesthetic with high contrast typography and subdued, often desaturated, color accents. The design emphasizes clear information hierarchy through sparse layouts and strong textual elements. Subtle background shifts and minimal interactive elements create an atmosphere of quiet professionalism, allowing content to take center stage.
colors:
  inkwell-black: "#000000"
  canvas-white: "#fefefc"
  text-gray: "#0a0a0a"
  pale-ash: "#ebf5ed"
  shadowstone-gray: "#6b6b6b"
  whisper-gray: "#444444"
  parchment-tan: "#e1d5b6"
  sky-tint: "#bdd4f0"
  steel-blue: "#98a7aa"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 0.8
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
    letterSpacing: -0.24px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 0.95
    letterSpacing: -0.32px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 0.95
    letterSpacing: -1.76px
spacing:
  cardRadius: 8px
  buttonRadius: 2px
  elementGap: 10px
  sectionGap: 80px
components:
  ghost-navigation-link:
    role: Primary navigation item
  filled-action-button:
    role: Call to action button
  outlined-cookie-consent-button:
    role: Secondary action in cookie consent
  text-input-field:
    role: User input control
  cookie-consent-banner:
    role: Legal disclosure pop-up
---

## Overview

**North Star:** Warm monochrome legal canvas

Legora employs a classic minimalist aesthetic with high contrast typography and subdued, often desaturated, color accents. The design emphasizes clear information hierarchy through sparse layouts and strong textual elements. Subtle background shifts and minimal interactive elements create an atmosphere of quiet professionalism, allowing content to take center stage.

### Do's

- Prioritize high visual contrast between text (#000000, #0a0a0a) and background (#fefefc, #ebf5ed), maintaining AAA accessibility standards.
- Use Rhymes Display Light (weight 300) for large headlines (32px and up) with a tight line height and negative letter-spacing for a refined, spacious feel.
- Apply Suisse Intl Book (weight 450) consistently for all body text, maintaining its specific font feature settings for brand consistency.
- Utilize Pale Ash (#ebf5ed) as a subtle alternating background color for content sections, providing visual rhythm without strong division.
- Employ a radius of 8px for cards, images, and input fields to convey a soft, modern touch.
- Ensure interactive elements like buttons and links maintain a clear visual distinction, even if the primary action color is derived from a browser default.
- Use Inkwell Black (#000000) for hero section text and prominent borders to create a strong initial impression against dark backgrounds.

### Don'ts

- Avoid using highly saturated colors for large UI elements; accents should be subtle and functional.
- Do not introduce strong drop shadows; rely on background color changes or minimal borders for surface differentiation.
- Do not deviate from the specified font families and weights, especially for Rhymes Display Light, as its unique weight defines the brand's headline style.
- Avoid over-clustering content; embrace white space and the specified elementGap (10px) to maintain a compact yet uncrowded appearance.
- Do not use generic system borders for inputs; always apply Pale Ash (#ebf5ed) background and 8px border-radius.
- Do not use multiple button styles for primary actions; stick to the translucent white filled button on dark backgrounds and the outlined white button on light backgrounds.
- Avoid full-bleed imagery that competes with text; imagery should be contained or used as a subtle background element as seen in the hero.

### Layout

The page primarily employs a contained layout with a maximum content width, centered on a light canvas. The hero section is a full-bleed application of the Inkwell Black background with a foreground image, displaying a centered, large-format serif headline and supportive text. Subsequent sections alternate between the Canvas White and Pale Ash backgrounds, providing clear visual breaks. Content within these sections often uses a two-column layout, featuring text on one side and a product screenshot or abstract visual on the other, occasionally reversing the arrangement for rhythm (z-pattern). Vertical spacing is consistent with a section gap of 80px, contributing to a spacious feel. Navigation is handled by a sticky top bar with minimal ghost links and a single primary action button (Book a demo).

### Imagery

The site uses a mix of high-quality, professional photography and subtle, abstract visual elements, with a distinct absence of illustrative graphics. Photography is often dark and moody, featuring professional individuals in a corporate or office setting, sometimes blurred or used as a background layer, such as in the hero section. Product screenshots are clean, functional, and presented flat within UI frames, sometimes with a slight backdrop filter blur. Icons are minimal, outlined, and monochromatic, typically in Inkwell Black. The imagery serves both decorative atmospheric purposes (hero) and explanatory content (product screenshots), maintaining a refined and serious tone. Image density is moderate, used strategically to break up text-heavy sections or to establish a mood, rather than overwhelming the page.
