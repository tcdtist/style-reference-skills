---
version: alpha
name: Heart Aerospace
description: Heart Aerospace employs a restrained, high-status design language: a monochrome canvas with minimal accentuation. Typography is the primary conveyor of hierarchy, utilizing subtle weight variations and precise letter-spacing. UI elements are understated, allowing large-scale imagery and bold headlines to dominate. The system relies on precise spacing to create rhythm rather than heavy visual dividers.
colors:
  cloud-gray: "#716e85"
  midnight-ink: "#000000"
  pure-canvas: "#ffffff"
  electric-violet: "#001489"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 1
    letterSpacing: -0.92px
  display:
    fontFamily: "system-ui"
    fontSize: 156px
    lineHeight: 1
    letterSpacing: -3.12px
spacing:
  elementGap: 18px
  sectionGap: 70px
components:
  primary-navigation-link:
    role: Main navigation menu item
  hero-headline:
    role: Main page title for hero sections
  standard-headline:
    role: Section and content headings
  body-text:
    role: Paragraphs and descriptive content
  outlined-link:
    role: Interactive links and calls to action
  global-footer:
    role: Bottom navigation and legal information
---

## Overview

**North Star:** Overcast Sky, Silent Typography

Heart Aerospace employs a restrained, high-status design language: a monochrome canvas with minimal accentuation. Typography is the primary conveyor of hierarchy, utilizing subtle weight variations and precise letter-spacing. UI elements are understated, allowing large-scale imagery and bold headlines to dominate. The system relies on precise spacing to create rhythm rather than heavy visual dividers.

### Do's

- Prioritize NeueHaasDisplay (weight 600) for all headlines, ensuring tight letter-spacing of -0.02em for impact and precision.
- Use Cloud Gray (#716e85) as the background for hero sections to establish a muted, expansive canvas.
- Apply Electric Violet (#001489) sparingly, only as an outline or text color for key interactive elements, not as a solid background.
- Maintain ample vertical separation between sections, using a default sectionGap of 70px.
- Use Midnight Ink (#000000) for all primary body text and most structural borders to provide clear contrast.
- Ensure all interactive elements have a clear :hover state using Electric Violet (#001489) for visual feedback.
- Keep all corners sharp with 0px radius, reinforcing a precise, engineered aesthetic.

### Don'ts

- Avoid using saturation for decorative purposes; reserve Electric Violet (#001489) strictly for functional interaction.
- Do not use heavy box-shadows or gradients on UI elements; elevation is not a system-level visual cue.
- Do not use generic system fonts; always utilize NeueHaasDisplay or NeueHaasText for brand consistency.
- Do not use multiple colors for text hierarchy; vary only weight and size within the established typographic scale.
- Avoid excessive visual clutter; imagery and typography should be the primary focus.
- Do not introduce rounded corners (e.g., card or button radii) — maintain sharp, defined edges.
- Avoid visual dividers between sections; rely on background color changes or strong typographic breaks aided by sectionGap.

### Layout

The page primarily uses a full-bleed layout for hero sections, transitioning to a maximum-width contained layout for content blocks. The hero features large, often full-viewport imagery with centered, large-scale headlines overlaid. Subsequent sections alternate between light and dark backgrounds (Pure Canvas and Midnight Ink) with consistent vertical spacing of 70px. Content is often arranged in simple, centered stacks or 2-column layouts, with text beside visuals or logos in grid patterns. The navigation is a minimal top bar, which remains sticky, featuring text links and the brand logo.

### Imagery

The site heavily features high-quality, aspirational photography and detailed 3D renders of aircraft. These images are often full-bleed or large-scale hero elements, dominating the visual space. They serve to showcase the product and convey an ambitious, forward-looking atmosphere. The treatment is realistic, often depicting aircraft in flight or against dramatic skies, with a focus on product detail. Icons are minimal, monochromatic, and generally filled, integrated subtly next to text to provide functional clarity rather than decorative flair.
