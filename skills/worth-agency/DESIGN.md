---
version: alpha
name: Worth Agency
description: Worth Agency employs a vibrant, confident design language using bold typography and a limited, high-contrast color palette. Dominant bright surfaces are punctuated by a vivid orange-red for headings and accent elements, creating an energetic yet clean feel. Components are light, with subtle bordering and pronounced roundness, allowing the strong typography and accent colors to define the brand's presence.
colors:
  canvas-white: "#ffffff"
  whisper-gray: "#f9f9f9"
  midnight-text: "#282828"
  pitch-black: "#000000"
  blush-pink: "#f8d4d4"
  zest-orange: "#eb4726"
  muted-sage: "#d2fdd1"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
    letterSpacing: 0.096px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
    letterSpacing: 0.132px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.14
    letterSpacing: 0.168px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.27
    letterSpacing: 0.252px
  display:
    fontFamily: "system-ui"
    fontSize: 400px
    lineHeight: 0.75
    letterSpacing: -4.4px
spacing:
  cardRadius: 16px
  elementGap: 16px
  sectionGap: 64px
components:
  primary-heading-display:
    role: Large, eye-catching text for hero sections.
  body-text:
    role: Standard paragraph text.
  accent-link:
    role: Interactive text links for navigation and calls to action.
  navigation-tag:
    role: Small, rounded tags for categorical navigation or labels.
  content-card-default-white:
    role: Standard content containers for features or portfolio items.
  content-card-muted-sage:
    role: Alternative content container for visual variation.
  ghost-button-scroll:
    role: Subtle call-to-action to guide users down the page.
---

## Overview

**North Star:** Vibrant canvas, bold statements.

Worth Agency employs a vibrant, confident design language using bold typography and a limited, high-contrast color palette. Dominant bright surfaces are punctuated by a vivid orange-red for headings and accent elements, creating an energetic yet clean feel. Components are light, with subtle bordering and pronounced roundness, allowing the strong typography and accent colors to define the brand's presence.

### Do's

- Prioritize 'Zest Orange' (#eb4726) for all primary headings to establish immediate visual hierarchy.
- Use 'Canvas White' (#ffffff) as the dominant background color for most sections, ensuring generous negative space.
- Apply 'Midnight Text' (#282828) for all body text for clear readability against light backgrounds.
- Maintain a clear visual distinction between text and background with a minimum contrast ratio of 14.7:1 (e.g. 'Midnight Text' on 'Canvas White').
- Employ a 16px border-radius for all card-like containers, providing a consistent soft aesthetic.
- Use bold, large typography from 'custom_47178' (400px) and 'custom_47163' (52px) for impactful statements in hero and key headings.
- Accentuate interactive elements like links and subtle ghost buttons with 'Blush Pink' (#f8d4d4) borders.

### Don'ts

- Avoid using multiple chromatic colors in close proximity; the palette should remain focused on 'Zest Orange' and 'Blush Pink' as accents.
- Do not introduce strong shadows or complex gradients; rely on color and typography for emphasis.
- Refrain from drastically altering font sizes or weights outside the defined type scale to maintain typographic rhythm.
- Do not use dark backgrounds for large content blocks; the system is designed around a light-mode aesthetic.
- Avoid using radii smaller than 12px for interactive elements or 16px for cards, as this conflicts with the rounded visual identity.
- Do not rely on small text sizes for critical information; prioritize readability with defined body text sizes.
- Avoid generic system-default blue for links; use 'Zest Orange' (#eb4726) or 'Pitch Black' (#000000) for all interactive text.

### Layout

The page primarily uses a full-bleed layout for hero sections, immediately engaging the user with a large, centered headline. Subsequent sections, while appearing full-width in background, contain content within an implied max-width, maintaining a clean, centered stack for text and visual elements. The section rhythm is primarily seamless, flowing without hard dividers, relying on background color changes for distinction, as seen with alternating white and blush pink sections. Navigation is minimal, often appearing as a small, rounded tag in the top right, discreetly placed to not distract from the main content. Density is moderate, with ample whitespace surrounding key elements, ensuring clarity of the bold statements.

### Imagery

This site features product-centric imagery with tight crops and no lifestyle context. The primary focus is on displaying the core subject, often text-based brand names or service offerings, acting as a direct product showcase. Icons are simple, filled, and primarily monochromatic with occasional 'Zest Orange' accents, serving to clarify actions or decorative elements rather than convey complex information. Imagery is sparse; the design is text-dominant, with large, bold typography and color choices defining the visual weight.
