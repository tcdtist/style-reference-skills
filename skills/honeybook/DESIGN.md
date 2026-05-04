---
version: alpha
name: HoneyBook
description: HoneyBook presents a playful yet established aesthetic, built on a foundation of warm neutrals and a vibrant, almost neon yellow accent. Typography creates distinct hierarchy with a sans-serif for functional text and a serif for display, often with tight tracking. Components are soft and approachable with generous corner radii, emphasizing a friendly user experience. The palette is carefully balanced to keep the vivid yellow from overwhelming the interface, reserving it for key actions and foundational sections.
colors:
  onyx-black: "#142127"
  buttermilk-yellow: "#fffa77"
  lemon-zest: "#fffa56"
  arctic-mist: "#ffffff"
  earl-gray: "#c7d5d9"
  paper-white: "#f4eae0"
  charcoal-grey: "#343c40"
  ink-grey: "#131416"
  dusk-blue: "#9ab9e8"
  jade-green: "#99d3ac"
  lavender-haze: "#dbd2f7"
  stone-grey: "#63696c"
  ash-grey: "#e0e5e7"
  cool-grey: "#525660"
  cloud-grey: "#edf1f3"
  steel-grey: "#b0b8bc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.071px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: -0.03px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.036px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.05px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -0.05px
spacing:
  cardRadius: 20px
  buttonRadius: 159984px
  elementGap: 16px
  sectionGap: 72px
components:
  primary-ghost-button:
    role: Call to action button for primary actions, providing a strong visual cue without a solid fill.
  secondary-ghost-button:
    role: Call to action button for secondary actions or navigation links, less prominent than primary.
  navigation-circle-button:
    role: Round buttons for navigation or specific icon-based actions.
  inverted-ghost-button-dark-background:
    role: Ghost button for use on darker backgrounds, maintaining brand consistency.
  standard-card:
    role: Basic content container for features, information blocks, or testimonials.
  elevated-card:
    role: Prominent content container, distinguishing it from standard cards.
  lemon-zest-tag-pill:
    role: Small informational tags or labels, drawing attention with the accent color.
  primary-action-button-filled:
    role: High-emphasis button for critical calls to action.
---

## Overview

**North Star:** Warm productivity with a vibrant hum

HoneyBook presents a playful yet established aesthetic, built on a foundation of warm neutrals and a vibrant, almost neon yellow accent. Typography creates distinct hierarchy with a sans-serif for functional text and a serif for display, often with tight tracking. Components are soft and approachable with generous corner radii, emphasizing a friendly user experience. The palette is carefully balanced to keep the vivid yellow from overwhelming the interface, reserving it for key actions and foundational sections.

### Do's

- Use Onyx Black (#142127) for all primary text elements to ensure high contrast and readability.
- Implement Buttermilk Yellow (#fffa77) as the dominant background for large, impactful sections, especially the hero.
- Apply a large radius of 159984px to all primary ghost buttons and filled CTA buttons, creating a consistent pill shape.
- Employ STK Bureau Sans for all body text, navigational elements, and functional UI text, picking a weight from 400-700 as needed.
- Utilize STK Bureau Serif with tight letter-spacing for all major headings to establish a distinctive and sophisticated visual voice.
- Maintain an element gap of 16px between most interactive interface elements for comfortable density.
- Use Arctic Mist (#ffffff) for card backgrounds and other contained content areas that require a crisp, clean surface.

### Don'ts

- Avoid using saturated colors other than Buttermilk Yellow or Lemon Zest for primary UI elements; reserve other accent colors for large background blocks.
- Do not use box shadows for elevation; rely on background color changes or border thickness to distinguish elements.
- Do not deviate from the specified letter-spacing values for STK Bureau Sans and Serif, as they are crucial for brand typography.
- Never use radii smaller than 6px for interactive elements or cards; all elements should feel soft and rounded.
- Do not introduce new typefaces; rely solely on STK Bureau Sans, STK Bureau Serif, and STK Gerhard.
- Avoid arbitrary uses of #c7d5d9 (Earl Gray) as a primary action; it is specifically for secondary, less emphasized actions or inactive states.

### Layout

The page primarily uses a constrained, centered layout within a max-width container, with some full-bleed sections filling the viewport horizontally. The hero section features a full-bleed Buttermilk Yellow background with a centered, prominent heading and call to action. Subsequent sections alternate between light backgrounds like Arctic Mist and Paper White, often featuring 2-column text-left/image-right or text-right/image-left layouts, or centered stacks for feature descriptions. Navigation is a persistent top bar with a log-in link and a 'Start for free' button.

### Imagery

The site uses a combination of minimal, outlined, or filled icons in Onyx Black or white for functional UI. Product screenshots or abstract graphics appear within content sections, often contained within cards rather than full-bleed. Imagery is primarily explanatory, showcasing product features rather than decorative atmosphere. When present, images are tightly cropped or illustrative, focusing on conveying information.
