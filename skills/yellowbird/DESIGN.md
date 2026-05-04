---
version: alpha
name: Yellowbird®
description: Yellowbird® utilizes a high-contrast, playful aesthetic, rooted in an energetic yellow canvas and bold black typography. The system leans into strong visual boundaries with thick black outlines and defined shapes, avoiding subtle gradients or shadows. Typography, featuring custom display fonts, is a primary expressive element, varying dramatically in size and tracking to create a dynamic hierarchy. Components are chunky and direct, maintaining the brand's unapologetic visual presence through stark color blocking and distinct border treatments.
colors:
  yellowbird-yellow: "#ffe845"
  midnight-black: "#000000"
  canvas-white: "#ffffff"
  warm-paper: "#fbfaf2"
  electric-blue: "#007aff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.67
    letterSpacing: -0.48px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.46
    letterSpacing: -0.496px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
    letterSpacing: -0.558px
  subheading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.2
    letterSpacing: -0.378px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.1
    letterSpacing: -0.33px
  heading:
    fontFamily: "system-ui"
    fontSize: 41px
    lineHeight: 1.2
    letterSpacing: -0.287px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 61px
    lineHeight: 0.78
    letterSpacing: -0.244px
  display:
    fontFamily: "system-ui"
    fontSize: 91px
    lineHeight: 1.05
    letterSpacing: -0.255px
spacing:
  cardRadius: 30px
  buttonRadius: 6px
  elementGap: 24px
  sectionGap: 80px
components:
  outline-navigation-link:
    role: Global navigation item
  primary-call-to-action-button:
    role: Emphasized action
  ghost-call-to-action-button:
    role: Secondary action or link
  category-filter-button:
    role: Product filtering or classification
  product-card:
    role: Display individual product items
  rounded-quote-card:
    role: Highlighting testimonials or key messages
  text-input-search:
    role: User text entry field
---

## Overview

**North Star:** Bold yellow manifesto

Yellowbird® utilizes a high-contrast, playful aesthetic, rooted in an energetic yellow canvas and bold black typography. The system leans into strong visual boundaries with thick black outlines and defined shapes, avoiding subtle gradients or shadows. Typography, featuring custom display fonts, is a primary expressive element, varying dramatically in size and tracking to create a dynamic hierarchy. Components are chunky and direct, maintaining the brand's unapologetic visual presence through stark color blocking and distinct border treatments.

### Do's

- Always use 'Yellowbird Yellow' (#ffe845) as the dominant background color for full-bleed sections, establishing brand identity immediately.
- Define all interactive area boundaries and critical visual separations with a 3px 'Midnight Black' (#000000) solid border.
- Prioritize `Gooper` at 91px for monumental headlines and `ABC Monument Grotesk` 400 for all navigation, headings (27-61px), and marketing copy, reserving `Pitch Sans` for body text.
- Implement tight letter-spacing for headlines and display text, specifically using negative tracking values like -0.0400em at 61px and -0.0280em at 91px.
- Apply `30px` or `36px` border-radius to cards and larger content blocks to soften the chunky design, contrasting with `0px` radius on text inputs and some button variants for directness.
- Utilize 'Midnight Black' (#000000) for all primary text and secondary button backgrounds, ensuring high contrast against the bright yellow and white surfaces.
- Use 20px as a recurring padding unit for cards, buttons, and larger content blocks to create generous internal space.

### Don'ts

- Avoid using gradients or drop shadows for elevation; rely on thick borders and color blocking to define dimensional relationships.
- Do not introduce subtle gray tones or desaturated colors outside of 'Warm Paper' (#fbfaf2); the palette is designed for high-contrast chromaticity.
- Never use type weights below 400 for any text; the system relies on bold, confident typography.
- Do not use white as a background for primary buttons or large content sections unless it is an internal element within a larger yellow or black block.
- Avoid using 'Electric Blue' (#007aff) for anything other than specific interactive accents or link highlights, never as a primary background or text color.
- Do not use letter-spacing values approaching normal (0em) for headings or large text; the system explicitly uses compressed tracking to maintain its distinctive look.
- Do not place text directly on top of visually noisy product imagery; always ensure content has a solid color background for legibility and to maintain the brand's graphic quality.

### Layout

The page uses a full-bleed structure that largely contains content within a central, implicit max-width rather than a strict container. The hero section establishes a clear brand identity with a large, centered headline (`Gooper`, 91px) and vibrant 'Yellowbird Yellow' background, featuring the brand's signature outlined illustration. Section rhythm is highly consistent, dominated by large blocks of 'Yellowbird Yellow' with occasional 'Warm Paper' (#fbfaf2) cards, and thick 3px 'Midnight Black' borders visually separating content blocks. Content is arranged in alternating text-heavy and visual-heavy sections, often centered stacks or a 3-column card grid for features. The overall density is spacious with generous padding and ample vertical separation between sections, reinforcing the bold and direct visual communication. A sticky top navigation offers shop, about, and find us links, along with search, login, and cart actions.

### Imagery

The imagery aesthetic is bold and graphic, primarily featuring product photography against a pure white background, isolating the product as the hero. Illustrations are organic, thick-outlined, and often incorporate the brand's 'sun' character, providing a playful and energetic visual counterpart to the product. Icons are filled with 'Midnight Black' (#000000) and have a thick, confident stroke weight. Visuals serve to showcase the product, add brand personality, and explain content, maintaining an image-text balance where visuals occupy significant space but never overlap or bleed into text content.
