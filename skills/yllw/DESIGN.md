---
version: alpha
name: Yllw
description: Yllw employs a bold, industrial aesthetic: stark black typography makes an immediate impact against a mostly white and 'foggy gray' canvas. The layout often alternates between dense, high-contrast text blocks and more spacious sections featuring architectural line drawings, giving a sense of technical precision without being overly rigid. Component borders are crisp, often 1px black, reinforcing the structured, no-nonse feel, while a single vivid yellow accent provides a punch of energetic utility for alerts and interactive prompts.
colors:
  midnight-ink: "#000000"
  ghost-white: "#ffffff"
  foggy-gray: "#cac7b4"
  deep-charcoal: "#191919"
  light-gray: "#cccccc"
  school-bus-yellow: "#ffdd00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
    letterSpacing: -0.005px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.006px
  subheading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.24
    letterSpacing: -0.01px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.18
    letterSpacing: -0.015px
  heading:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.04
    letterSpacing: -0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 0.9
    letterSpacing: -0.025px
  display:
    fontFamily: "system-ui"
    fontSize: 216px
    lineHeight: 0.88
    letterSpacing: -0.025px
spacing:
  cardRadius: 6px
  elementGap: 16px
  sectionGap: 64px
components:
  filled-button-foggy:
    role: Primary action button for key calls to action.
  outlined-button-foggy:
    role: Secondary action button, providing a less prominent interactive element.
  filled-button-white:
    role: Action button used on darker backgrounds or for specific content blocks.
  outlined-button-white-text:
    role: Ghost button variant, typically used on dark or image backgrounds.
  borderless-card:
    role: Content container for features or descriptions, emphasizing content without visual heavy lifting.
  white-card:
    role: Elevated content block, typically for feature outlines or detailed information.
  foggy-card-border:
    role: Decorative card with a subtle contextual background, indicating a section.
  black-card:
    role: High-contrast card for specific standout content sections.
  accordion-item:
    role: Collapsible content area, often seen in FAQs or service listings.
  info-banner-yellow:
    role: Top-level communication bar for important, temporary messages.
---

## Overview

**North Star:** Industrial Blueprint on Fog

Yllw employs a bold, industrial aesthetic: stark black typography makes an immediate impact against a mostly white and 'foggy gray' canvas. The layout often alternates between dense, high-contrast text blocks and more spacious sections featuring architectural line drawings, giving a sense of technical precision without being overly rigid. Component borders are crisp, often 1px black, reinforcing the structured, no-nonse feel, while a single vivid yellow accent provides a punch of energetic utility for alerts and interactive prompts.

### Do's

- Prioritize high contrast with Midnight Ink (#000000) for all primary text and critical UI elements against lighter backgrounds.
- Use Foggy Gray (#cac7b4) and Ghost White (#ffffff) as the primary background and surface colors, alternating them to create visual rhythm between sections.
- Apply Gd Grio Vf with dense, impactful kerning, especially at larger sizes, to convey a strong, architectural typographic presence (e.g., -0.0250em for display text).
- Employ the 2px border radius for all interactive elements like buttons and navigation items, maintaining a sharp, precise feel.
- Reserve School Bus Yellow (#ffdd00) sparingly for high-attention alerts, banners, and functional highlights rather than decorative purposes.
- Maintain consistent 1px Midnight Ink (#000000) borders for all outline buttons and visual separators to reinforce a structured system.
- Use 64px for section gaps to create generous breathing room between major content blocks, with 16px as the primary element spacing within sections.

### Don'ts

- Avoid using multiple chromatic colors; restrict non-neutral color to School Bus Yellow (#ffdd00) for accent and utility.
- Do not introduce soft shadows or gradients for elevation; rely on stark color contrast and 1px borders for depth.
- Refrain from using heavily rounded corners; adhere to the 2px default radius for buttons and links, and 6px for cards.
- Do not break away from the Gd Grio Vf font; avoid generic sans-serif substitutes that dilute the bold, industrial aesthetic.
- Do not vary line heights significantly for body text; keep it tight and consistent to maintain readability and density.
- Avoid decorative imagery that is not aligned with the brand's architectural, industrial, or blueprint aesthetic.

### Layout

The page primarily follows a max-width contained layout, typically centered around a 1200px content area, with some full-bleed sections (e.g., the top alert bar, some hero elements, or alternating background bands). The hero section is a full-width header featuring oversized, impactful typography 'TRANSFORMING SPACES DRIVING GROWTH' often with an embedded image or video within the text itself. Sections alternate between Ghost White and Foggy Gray backgrounds, creating a clear vertical rhythm. Content often appears in centered stacks, or in 2-column or 3-column feature grids for services and solutions. Distinct structural elements are often outlined with thin Midnight Ink (#000000) borders, especially in areas featuring architectural drawings. Navigation is a minimalist sticky top bar within a contained layout, with a prominent 'Book a meeting' call to action button.

### Imagery

This site uses a mix of high-contrast photography integrated into large typographic fields and abstract architectural line drawings or blueprints. Photography tends to be tightly cropped, often showcasing people collaboratively working in modern office environments, serving as a backdrop or infill for bold text. Illustrations are highly stylized, consisting of geometric, outlined floor plans and structural elements, usually in white against Foggy Gray backgrounds, functioning as explanatory content or decorative accents. Icons are minimal, outlined, and monochromatic (Midnight Ink) with a thin stroke weight, primarily for functional purposes (e.g., accordion toggles, navigation arrows). The overall role of imagery is to support the structured, architectural narrative and enhance content explanation, keeping a text-dominant feel.
