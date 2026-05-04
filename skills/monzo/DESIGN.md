---
version: alpha
name: Monzo
description: Monzo's visual style evokes 'Digital Craftsmanship,' where vibrant and professional is achieved through a carefully balanced suite of design choices. The core is a confident yet approachable dark charcoal text against a pristine paper-white background, creating high contrast. This is punctuated by a singular, vivid hot coral for primary calls-to-action and brand accents, preventing the design from feeling sterile. Signature choices like generously rounded 'pill' buttons and soft shadows on cards hint at a user-friendly, empathetic digital experience, while strict adherence to a clean, spacious layout grounds the design in reliability.
colors:
  midnight-charcoal: "#091723"
  snow-white: "#ffffff"
  mist-gray: "#f2f8f3"
  slate-blue: "#112231"
  silver-dust: "#e3ebe4"
  steel-gray: "#6b747b"
  ash-gray: "#b5b9bd"
  hot-coral: "#ff4f40"
  muted-olive: "#3b4c54"
  graphite-stroke: "#75817"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
    letterSpacing: -0.65px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.8px
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.38
    letterSpacing: -1px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
    letterSpacing: -1.6px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.15
    letterSpacing: -1.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 49px
    lineHeight: 1.2
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 61px
    lineHeight: 1
    letterSpacing: 0px
spacing:
  cardRadius: 32px
  buttonRadius: 500px
  elementGap: 24px
  sectionGap: 64px
components:
  primary-filled-button:
    role: Call to action
  primary-outlined-button:
    role: Secondary action or ghost button
  ghost-button-with-icon:
    role: Navigation or interactive element with subtle styling
  light-mode-card:
    role: Information container, features
  dark-mode-card:
    role: Information container, features
  section-background-card:
    role: Hero or large content block backgrounds
  status-badge:
    role: Informational tag
---

## Overview

**North Star:** Hot Coral Digital Craftsmanship — a meticulously crafted digital experience with vibrant accents.

Monzo's visual style evokes 'Digital Craftsmanship,' where vibrant and professional is achieved through a carefully balanced suite of design choices. The core is a confident yet approachable dark charcoal text against a pristine paper-white background, creating high contrast. This is punctuated by a singular, vivid hot coral for primary calls-to-action and brand accents, preventing the design from feeling sterile. Signature choices like generously rounded 'pill' buttons and soft shadows on cards hint at a user-friendly, empathetic digital experience, while strict adherence to a clean, spacious layout grounds the design in reliability.

### Do's

- Prioritize 'Midnight Charcoal' (#091723) for all primary text and calls-to-action against light backgrounds to ensure AAA contrast.
- Utilize 'Hot Coral' (#ff4f40) exclusively for primary interactive states or brand-specific elements, reserving its impact.
- Implement 500px radius for all primary buttons and interactive pill-shaped elements.
- Apply 'Mist Gray' (#f2f8f3) as the default page background and use 'Snow White' (#ffffff) for distinct content blocks or cards.
- Maintain a clear visual hierarchy by employing MonzoSansDisplay for headlines and MonzoSansText for all body copy and UI elements.
- Ensure all card elements use a 32px border-radius, accompanied by rgba(0, 0, 0, 0.1) 0px 0px 10px 0px shadow for subtle depth.
- Use 24px for all standard element and grid gaps to maintain consistent breathing room between components.

### Don'ts

- Avoid using multiple chromatic colors; 'Hot Coral' (#ff4f40) is the dominant accent hue.
- Do not deviate from the specified typography sizes, line heights, or letter spacings to preserve brand readability and scale.
- Refrain from using hard-edged borders or square elements where a rounded alternative exists, especially for interactive components.
- Do not introduce complex gradient backgrounds; the system relies on solid color blocks and subtle surface variations.
- Avoid excessive shadow layers or high-contrast shadows; only use the specified light shadow for cards.
- Do not use dark backgrounds without contrasting light text; maintain high readability scores for all content.
- Resist using grayscale or desaturated versions of 'Hot Coral' for functional interactions; use it vividly or not at all.

### Layout

The page primarily employs a max-width contained layout, centering content within a 'Mist Gray' (#f2f8f3) canvas, likely around 1200px. The hero section is full-bleed, featuring a dark atmospheric image with central overlay content. Sections maintain a consistent vertical rhythm, primarily defined by the 'sectionGap' of 64px. Content arrangement varies: some sections feature a centered stack, while others use a flexible two-column layout for text and image pairings. There is a clear use of card-based grids for features and information grouping, leveraging the 'Snow White' (#ffffff) and 'Slate Blue' (#112231) surfaces. The navigation is a sticky top bar with clearly segmented 'Personal' and 'Business' options.

### Imagery

The visual language combines expressive full-bleed photography with clean, contained product shots and illustrative elements. Photography features human elements but also focuses on the product (the card). Product imagery is tightly cropped, often showcasing the Hot Coral card against dark, slightly blurred backgrounds. Icons are monoline, 'Graphite Stroke' colored outlines with a moderate stroke weight, used for navigation and feature differentiation. The overall density leans towards balanced, using imagery to establish atmosphere and convey product function without overwhelming text content.
