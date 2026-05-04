---
version: alpha
name: Clay
description: This design system feels like a thoughtfully organized play-space, balancing crisp professional typography with unexpected bursts of vibrant, playful color in testimonial cards and illustrations. The overall tone is light and inviting, grounded by a clean, spacious layout. Subtle border treatments and generous radii on containers soften the digital edge, creating a friendly yet authoritative aesthetic.
colors:
  pitch-black: "#000000"
  ghost-white: "#ffffff"
  cloud-gray: "#f9f8f6"
  inkwell: "#55534"
  platinum-gray: "#e6e8ec"
  oatmeal: "#dad4c8"
  clay-violet: "#3859f9"
  vivid-sky: "#429dff"
  tangerine: "#ff7614"
  lime-pop: "#cbd810"
  azure-glow: "#3bd3fd"
  matcha-green: "#02693"
  dragonfruit-pink: "#8b045c"
  blueberry-deep: "#0667d9"
  ube-haze: "#c1b0ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: 0.9px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.1
    letterSpacing: -0.88px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -2.4px
spacing:
  cardRadius: 12px
  buttonRadius: 12px
  elementGap: 8px
  sectionGap: 64px
components:
  cta-button-group:
    role: 
  feature-bullet-card-with-stat:
    role: 
  testimonial-cards:
    role: 
  primary-action-button:
    role: Button
  secondary-outline-button:
    role: Button
  ghost-button:
    role: Button
  pill-button:
    role: Button
  hero-section-card:
    role: Card
  modal-overlay-card:
    role: Card
---

## Overview

**North Star:** Playful Precision Playground. A brightly lit space filled with meticulously arranged, colorful building blocks.

This design system feels like a thoughtfully organized play-space, balancing crisp professional typography with unexpected bursts of vibrant, playful color in testimonial cards and illustrations. The overall tone is light and inviting, grounded by a clean, spacious layout. Subtle border treatments and generous radii on containers soften the digital edge, creating a friendly yet authoritative aesthetic.

### Do's

- Prioritize Roobert for all text, applying specific letter-spacing: -0.0400em for 60px headings and 0.0900em for 10px text, balancing readability and visual density.
- Use Pitch Black (#000000) for primary text and calls to action, ensuring high contrast against light backgrounds like Ghost White (#ffffff) or Cloud Gray (#f9f8f6).
- Employ the 40px border-radius for distinct content blocks like testimonial cards, paired with vibrant accent colors (e.g., #ff7614 Tangerine, #cbd810 Lime Pop).
- Apply Oatmeal (#dad4c8) for subtle borders on UI elements, contributing to a warm, approachable feel without harsh lines.
- Maintain a clear pageMaxWidth of 1200px for main content, using generous section gaps around multiples of 64px to create a spacious layout.
- Utilize Clay Violet (#3859f9) consistently for primary interactive elements, links, and key brand highlights, providing a cohesive brand signature.
- Use 1584px radius for all pill-shaped elements and buttons, reserving the 8px radius for smaller interactive components like nav items.

### Don'ts

- Avoid using harsh, sharp corners; instead, adopt the system's rounded radii, with 12px as a default for most interactive elements and 40px for prominent display cards.
- Do not introduce new shadow effects; adhere to the subtle inset button shadow (rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px -1px 1px 0px inset, rgba(0, 0, 0, 0.05) 0px -0.5px 1px 0px) for elevation.
- Refrain from using highly saturated colors for large text blocks; reserve them for accents, backgrounds of component-level cards, or illustrations.
- Do not deviate from Roobert's specific letter-spacing values at given sizes; these are crucial for the font's intended visual rhythm and legibility.
- Avoid arbitrary text alignments; maintain left-aligned text for paragraphs and headlines, centered only for specific hero sections or impactful statements.
- Do not introduce body text sizes smaller than 13px or larger than 18px; use the designated type scale for readable content blocks.

### Layout

The layout is primarily centered and contained within a max-width of 1200px. The hero section features a large, centered headline over a subtle background texture. Subsequent sections often alternate between text-left/image-right or image-left/text-right patterns, with generous vertical spacing (64px section gaps). Features are presented in a multi-column card grid, often with distinctive, playfully colored backgrounds. The navigation is a sticky top bar, emphasizing common links and a log-in/demo. The overall density is spacious, providing ample breathing room between elements and sections.

### Imagery

The site uses a mix of playful, colorful 3D illustrations featuring abstract shapes and objects (like colorful building blocks or pencils) that are often contained or positioned to complement text blocks. There's also the occasional use of product screenshots or UI snippets that are tightly cropped and framed, but the dominant visual language leans heavily into these vibrant, almost toy-like illustrations. Icons are primarily outlined. The imagery serves a decorative atmospheric role, making technical concepts feel more approachable and engaging, while also being explanatory in the product screenshots.
