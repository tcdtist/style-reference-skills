---
version: alpha
name: Hey Low
description: Hey Low utilizes a fresh, eco-conscious aesthetic, blending a serene light theme with a strong emphasis on a single accent green. Typography is understated yet precise, with a custom sans-serif for content and a distinctive display font for headlines. Components are minimal, relying on soft radii and a prominent, specific accent green for interactive elements and highlighted content, rather than heavy borders or deep shadows. The overall feel is one of thoughtful efficiency, with visual weight primarily driven by color rather than complex styling.
colors:
  forest-green: "#003329"
  green-flash: "#e6ffa3"
  ash-gray: "#e5e7eb"
  paper-white: "#ffffff"
  charcoal-black: "#000000"
  moss-gray: "#52756e"
  dark-olive: "#33544c"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.53
    letterSpacing: -0.34px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
    letterSpacing: -0.6px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.93px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.14
    letterSpacing: -1.4px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.13
    letterSpacing: -2.2px
  display:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 0.82
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 7px
  sectionGap: 56px
components:
  primary-call-to-action-button:
    role: Interactive element
  secondary-ghost-button:
    role: Interactive element
  dark-call-to-action-button:
    role: Interactive element
  feature-card-green:
    role: Content container
  content-card-white:
    role: Content container
  hero-cta-button-dark-background:
    role: Interactive Element for hero section
  client-logo-card:
    role: Brand/Partner display
---

## Overview

**North Star:** Eco-minimalist botanical blueprint: Lush green accents on a cream canvas.

Hey Low utilizes a fresh, eco-conscious aesthetic, blending a serene light theme with a strong emphasis on a single accent green. Typography is understated yet precise, with a custom sans-serif for content and a distinctive display font for headlines. Components are minimal, relying on soft radii and a prominent, specific accent green for interactive elements and highlighted content, rather than heavy borders or deep shadows. The overall feel is one of thoughtful efficiency, with visual weight primarily driven by color rather than complex styling.

### Do's

- Prioritize Forest Green (#003329) for all primary text and critical UI elements to establish brand presence.
- Use Green Flash (#e6ffa3) exclusively for primary calls-to-action, active indicators, and highlighted content blocks to draw attention.
- Maintain an 8px border radius for all buttons, cards, and most images to ensure a consistent friendly yet precise feel.
- Apply 24px vertical and horizontal padding to content cards and sections for a comfortable, uncrowded layout.
- Employ UntitledSans for all body text and most headings, adjusting letter-spacing according to the scale to maintain legibility and visual rhythm.
- Use BoogyBrutPoster (weight 400, normal letter-spacing) specifically for large, expressive headlines to add a unique brand signature.
- Separate sections with a consistent 56px vertical gap for clear content distinction.

### Don'ts

- Avoid using multiple chromatic colors; limit vibrant color usage strictly to Green Flash (#e6ffa3) as the single accent.
- Do not introduce heavy drop shadows or glows; surfaces should remain flat or use subtle elevation where absolutely necessary.
- Do not deviate from the established 8px border radius for primary interface elements; avoid sharp corners or overly rounded shapes.
- Do not use generic sans-serif fonts for headlines when a custom font is available; the BoogyBrutPoster font is critical for brand recognition.
- Avoid dense, information-packed sections without generous padding and spacing; maintain a comfortable density with ample whitespace.
- Do not apply excessive letter-spacing to body text; follow the defined negative tracking for UntitledSans at larger sizes and normal for smaller sizes.

### Layout

The page primarily uses a max-width 1200px centered layout for content sections. The hero section is a full-width arrangement with a centered headline and supporting text, flanked by a large, circular graphic element featuring butterfly illustrations. Subsequent sections alternate between full-width neutral backgrounds and max-width contained content blocks. Content is typically arranged in left-aligned or centered stacks, with features presented in a flexible grid (e.g., 3-column card grid). There's a consistent vertical rhythm of 56px section gaps, contributing to a spacious, comfortable feel. Navigation is a minimalist top bar with right-aligned links and a 'Contact' button.

### Imagery

Imagery primarily features product screenshots and abstract graphic elements. Product shots are typically contained with either a subtle background or masked elements. Illustrations are flat, bold, and organic, often using brand colors (Forest Green, Green Flash) with abstract shapes. Iconography is primarily filled, often monochromatic in Forest Green, with a medium stroke weight where outlines exist. Images serve both decorative atmosphere and explanatory content roles, maintaining a relatively balanced density with text, ensuring visual breaks without overwhelming content.
