---
version: alpha
name: FeedHive
description: FeedHive projects a clean, approachable, and slightly playful digital aesthetic. The use of a custom "Thicccboi" typeface at varying weights, often bold and large for headlines, gives the content a direct, confident voice. Subtle gradients and rounded elements, particularly the ubiquitous 9999px pill shape, soften the otherwise structured interface. A limited but vibrant palette of blues and violets provides energy against a predominantly white and light gray background, suggesting a modern, user-friendly platform.
colors:
  canvas-white: "#ffffff"
  ui-platinum: "#f3f5ff"
  cloud-mist: "#e5e7eb"
  warm-stone: "#c7c8e2"
  deep-midnight: "#181c31"
  subtle-stone: "#757693"
  cloudy-sky: "#dbeafe"
  vivid-cobalt: "#4457ff"
  electric-lavender: "#596aff"
  hyper-blue-gradient: "#4457ff"
  pale-blue-gradient: "#f8f9ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.57
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.56
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.63
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.32
  heading-xl:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.25
  display-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.11
spacing:
  cardRadius: 24px
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 48-80px
components:
  cta-button-group:
    role: 
  testimonial-card:
    role: 
  social-proof-rating-strip:
    role: 
  ghost-navigation-button:
    role: Navigation links
  main-headline:
    role: Key page titles
  sub-headline:
    role: Section titles
  body-text:
    role: Standard paragraph content
  pill-accent-text:
    role: Highlight text on transparent buttons
  shadowed-image-container:
    role: Product screenshot display
---

## Overview

**North Star:** AI-powered clarity on a pristine canvas. Like crisp architecture outlined in electric blue, housing playful, rounded forms.

FeedHive projects a clean, approachable, and slightly playful digital aesthetic. The use of a custom "Thicccboi" typeface at varying weights, often bold and large for headlines, gives the content a direct, confident voice. Subtle gradients and rounded elements, particularly the ubiquitous 9999px pill shape, soften the otherwise structured interface. A limited but vibrant palette of blues and violets provides energy against a predominantly white and light gray background, suggesting a modern, user-friendly platform.

### Do's

- Use Thicccboi font for all text, adhering to specified weights and sizes for a consistent brand voice.
- Apply 9999px border-radius to all interactive buttons and small tags for a friendly, pill-like appearance.
- Utilize 'Hyper Blue Gradient' (linear-gradient(to right, rgb(68, 87, 255), rgb(117, 131, 253))) for all primary call-to-action buttons.
- Employ 'Canvas White' (#ffffff) as the primary page and card background, accentuating content with ample negative space.
- Use 'Deep Midnight' (#181c31) for main headlines and critical text to ensure high contrast and readability.
- Apply Cloud Mist (#e5e7eb) for subtle borders and dividers between content blocks to maintain a light, airy separation.

### Don'ts

- Avoid sharp corners; the minimum radius for significant elements should be 12px, preferring 24px for cards and 9999px for buttons.
- Do not introduce strong, saturated colors outside the defined brand blue and violet spectrum.
- Refrain from using heavy, dark shadows; instead, apply the subtle, blue-tinted rgba(32, 36, 138, 0.25) -19px 5px 60px 4px shadow for elevation.
- Do not deviate from the 'Thicccboi' typeface; its custom nature is central to the FeedHive identity.
- Avoid dense, clustered layouts; maintain generous spacing with base unit increments of 4px, especially 16px for internal padding and 20px-24px for element gaps.
- Do not use generic system fonts; only `Thicccboi` with its specific weights adds to the brand's unique character.

### Layout

The page maintains a centered max-width content area, but with a full-bleed hero section that utilizes a soft blue gradient background. Sections typically feature generous vertical spacing (48-80px). Content is often arranged in a split layout, with text on one side and an image/mockup on the other, or as centered stacks for headlines and CTAs. Feature blocks sometimes use a grid of testimonial cards, each with a rounded container and subtle shadow. The navigation is a sticky top bar with ghost buttons for primary links and a prominent pill-shaped 'Sign up' CTA.

### Imagery

The site uses a combination of product screenshots, often cropped tightly and presented within a UI context. These screenshots are given a slight blue-tinted elevation via box-shadow, presenting the software itself as a central artifact. Abstract, energetic shapes and simple, filled icons are also used decoratively, often incorporating the brand's blue and violet gradients. There are no lifestyle photos; the focus is entirely on the software, its UI, and brand-aligned abstract graphics. Icons are primarily filled, monochrome in the body, but take on brand colors or gradients when serving as major feature indicators.
