---
version: alpha
name: Promova
description: Promova's visual identity balances playful, almost illustrative color blocks with grounded, sharp typography. The use of a custom display font with wide characters and prominent Manrope for body text creates a distinctly readable and approachable feel, while the generous rounded corners on cards and buttons soften the overall aesthetic. Occasional bright, muted color panels are layered behind content, adding a sense of depth and energetic contrast against the otherwise neutral black-and-white core.
colors:
  midnight-ink: "#000000"
  cloud-white: "#ffffff"
  pebble-gray: "#595959"
  soft-mist: "#f5f5f5"
  limoncello: "#fff050"
  sky-haze: "#eceeff"
  misty-meadow: "#f4f9e7"
  lavender-dream: "#dfe3ff"
  periwinkle-charm: "#bec8ff"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.67
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 1
spacing:
  cardRadius: 30px
  buttonRadius: 20px
  elementGap: 10px
  sectionGap: 40px
components:
  promotional-modal-card:
    role: 
  button-group-primary-secondary:
    role: 
  faq-accordion:
    role: 
  secondary-outlined-button:
    role: Secondary action button with border
  ghost-navigation-button:
    role: Minimal navigation item or tertiary action
  abstract-background-panel:
    role: Decorative background element
---

## Overview

**North Star:** layered pastel blocks on a dark canvas

Promova's visual identity balances playful, almost illustrative color blocks with grounded, sharp typography. The use of a custom display font with wide characters and prominent Manrope for body text creates a distinctly readable and approachable feel, while the generous rounded corners on cards and buttons soften the overall aesthetic. Occasional bright, muted color panels are layered behind content, adding a sense of depth and energetic contrast against the otherwise neutral black-and-white core.

### Do's

- Use Manrope for all body text and descriptions at various weights, ensuring crisp legibility.
- Apply Nekst font specifically for large headings and display text to deliver brand identity.
- Maintain a clear visual hierarchy by using #000000 (Midnight Ink) for primary text and #595959 (Pebble Gray) for secondary information.
- Implement a 30px border-radius on cards, 20px on prominent buttons to maintain a soft, approachable aesthetic.
- Utilize #fff050 (Limoncello) sparingly for key interactive elements or highlights to draw attention.
- Structure page sections with padding that results in 40px vertical gaps between major content blocks.

### Don'ts

- Avoid using shadows for elevation; instead, create depth through background color layering and contrasting panels.
- Do not deviate from the Manrope and Nekst font families; avoid mixing in other typefaces.
- Refrain from using overly saturated colors outside of the defined accent palette.
- Do not use generic square corners on content cards or primary buttons; maintain the specified rounded radii.
- Avoid tight spacing; ensure comfortable 'elementGap' of at least 10px between interactive elements and textual content.
- Do not use #000000 (Midnight Ink) on a #595959 (Pebble Gray) background, as it fails AAA contrast.

### Layout

The layout is primarily full-bleed, with content sections extending to the edges of the viewport before narrowing to a comfortable reading width internally for text blocks. The hero section often features large, impactful headings using the custom 'Nekst' font over a colored background or abstract graphic. Sections often alternate between dark and light background themes, achieved by large, rounded-corner background panels of muted colors. Content is typically arranged in centered stacks or two-column layouts (text left, image/graphic right). Vertical spacing between sections is generous (approximately 40px), creating clear visual breaks. The navigation is a sticky top bar with prominent 'GET STARTED' and 'Sign Up' buttons.

### Imagery

The site uses a combination of tight product screenshots, profile-style circular headshots, and abstract illustrative background graphics. Product shots of phones are clean, isolated, and often displayed at an angle, focusing purely on the UI. Photography of individuals is contained within circular masks, implying a focus on people and community without full-bleed lifestyle images. Abstract graphic panels in muted pastel tones (#eceeff, #f4f9e7, #dfe3ff, #bec8ff) serve as decorative backgrounds, often layered behind content cards, contributing to a soft, inviting atmosphere. The overall density is balanced, allowing imagery to complement text rather than dominate, primarily serving as decorative context or product showcasing.
