---
version: alpha
name: Render
description: This design system is a light, airy canvas punctuated by bold, evocative gradients and a vibrant, expansive color palette. The combination of clean, modern sans-serifs and a striking, multi-color gradient usage creates a dynamic yet professional atmosphere. Text is predominantly dark charcoal against a pristine white background, allowing the rich accent colors and gradients to highlight key information and interactive elements, giving the impression of a sophisticated, high-performance platform.
colors:
  white-canvas: "#ffffff"
  charcoal-text: "#0d0d0d"
  asphalt-gray: "#272727"
  pebble-gray: "#4d4d4d"
  smoke-gray: "#6b6b6b"
  silver-lining: "#e3e3e3"
  lavender-mist: "#e6daff"
  arctic-blue-tint: "#e0f4ff"
  grape-glow: "#8a05ff"
  sunset-violet: "#d67f2"
  digital-emerald: "#009e7a"
  deep-plum: "#48008c"
  crimson-spark: "#e96770"
  candy-pink: "#f347ff"
  sky-surge: "#33acff"
  twilight-gradient: "#8a05ff"
  radiant-purple-to-pink: "#9b52fb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.43
    letterSpacing: 0.24px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.08px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.2px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.08
    letterSpacing: -1.6px
spacing:
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 40px
components:
  hero-cta-button-group:
    role: 
  feature-steps-click-click-done:
    role: 
  announcement-banner-pill-tags:
    role: 
  primary-dark-button:
    role: Call to Action
  outline-button:
    role: Secondary Action
  text-link-button:
    role: Tertiary Action
  header-navigation-item:
    role: Primary Navigation
  hero-headline:
    role: Page Title
  feature-list-item-heading:
    role: Section Sub-heading
  body-paragraph:
    role: General Content
  pill-tag:
    role: Metadata/Label
---

## Overview

**North Star:** Crisp canvas, gradient fireworks. A bright, white backdrop that provides contrast for a constellation of colorful gradients and powerful typography.

This design system is a light, airy canvas punctuated by bold, evocative gradients and a vibrant, expansive color palette. The combination of clean, modern sans-serifs and a striking, multi-color gradient usage creates a dynamic yet professional atmosphere. Text is predominantly dark charcoal against a pristine white background, allowing the rich accent colors and gradients to highlight key information and interactive elements, giving the impression of a sophisticated, high-performance platform.

### Do's

- Use Charcoal Text (`#0d0d0d`) for all primary text against white backgrounds to ensure AAA contrast.
- Apply `borderRadius: 0px` for all standard buttons and cards to maintain a sharp, modern aesthetic.
- Utilize `Roobert` for all headlines with negative letter spacing (`-0.03em` to `-0.01em`) to create a signature tight, impactful look.
- Employ the `Grape Glow` (`#8a05ff`) as the primary accent for interactive elements and key numerical highlights.
- Incorporate the linear brand gradients (e.g., `linear-gradient(to right, rgb(138, 5, 255), rgb(214, 127, 46))`) for high-impact headlines or distinctive background sections.
- Maintain a clear visual hierarchy by consistently using `PPNeueMontreal` for body text and UI elements, with `16px` as a base font size.
- Ensure all interactive elements have a clear hover state, typically darkening the text or background subtly as seen on navigation items.

### Don'ts

- Do not introduce rounded corners other than `937px` for specific pill-shaped tags to maintain the sharp aesthetic.
- Avoid using additional bright, highly saturated colors for backgrounds; reserve them for accents and gradients.
- Do not deviate from the specified font families; PPNeueMontreal and Roobert define the typographic voice.
- Do not use generic box shadows; elevation is primarily achieved through background color shifts and borders.
- Avoid overuse of the vivid accent colors; their power comes from strategic placement to highlight key information.
- Do not apply `letterSpacing: 0` to large headlines; the distinctive negative letter spacing of Roobert is crucial.
- Do not use a solid background color for the 'apps & agents' portion of the main hero headline; it must retain its gradient fill.

### Layout

The page model is a max-width, center-aligned container for main content, providing comfortable reading width on a full-bleed white background. The hero section is full-bleed with a left-aligned, gradient-filled headline over a white background, accompanied by a stylized technical illustration on the right. Sections are clearly delineated by consistent vertical spacing, creating an airy feel. Content is primarily arranged in two-column layouts, often alternating text and image/illustration, with some sections stacking content centrally. The navigation is a sticky top bar with a left-aligned logo and right-aligned links and CTA buttons. Density is spacious, prioritizing readability and visual breathing room between blocks of information.

### Imagery

The visual language focuses on abstract, geometric patterns and subtle product illustrations. Graphics often feature white or muted backgrounds, with elements constructed from simple shapes and lines, frequently incorporating the brand's vibrant accent colors and gradients. Treatment typically isolates elements against a clean backdrop, avoiding busy compositions. Icons are outlined or filled in a minimalist style, often monochromatic or using a single accent color. Photography is absent; the emphasis is on schematic representations and UI mockups. The overall role is to explain technical concepts and showcase product functionality through stylized, uncluttered visuals.
