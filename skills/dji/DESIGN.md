---
version: alpha
name: DJI
description: This system evokes a sense of technical precision and premium product display, balancing stark black-and-white hero sections with clean, information-rich content areas. The use of a single vivid blue for interactive elements cuts through the achromatic palette, acting like a power indicator light. Subtle grayscale variations create depth and hierarchy without relying on heavy shadows, maintaining a lightweight, almost floating aesthetic crucial for showcasing high-tech hardware.
colors:
  midnight-void: "#000000"
  arctic-snow: "#ffffff"
  glacial-white: "#f7f9fa"
  platinum-gray: "#ededed"
  charcoal-black: "#272727"
  shadow-ink: "#040404"
  storm-gray: "#6c7073"
  slate-text: "#595959"
  phantom-gray: "#303233"
  ash-gray: "#8c8c8c"
  active-blue: "#0070d5"
  deep-sea-blue: "#3b63a9"
  sky-link-hover: "#2490e3"
  ocean-link-active: "#0058b0"
  button-gradient-blue: "#0060e7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.03px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.33
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.17
  display-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.13
    letterSpacing: -0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.03px
spacing:
  cardRadius: 4px
  buttonRadius: 64px
components:
  product-cards-grid:
    role: 
  announcement-banner:
    role: 
  button-group-cta:
    role: 
  primary-navigation-link:
    role: Main navigation items
  global-call-to-action-button-blue:
    role: Main calls to action
  ghost-text-button-dark-text-light-bg:
    role: Minimal interactive text elements
  compact-navigation-button:
    role: Store button in the utility navigation
  search-input-field:
    role: Site search functionality
  hero-section-header:
    role: Dominant titles on hero sections
  utility-navigation-button:
    role: Small interactive icons/buttons in header
---

## Overview

**North Star:** Precision instrument display. A stark, high-contrast digital interface where light and shadow define advanced technology.

This system evokes a sense of technical precision and premium product display, balancing stark black-and-white hero sections with clean, information-rich content areas. The use of a single vivid blue for interactive elements cuts through the achromatic palette, acting like a power indicator light. Subtle grayscale variations create depth and hierarchy without relying on heavy shadows, maintaining a lightweight, almost floating aesthetic crucial for showcasing high-tech hardware.

### Do's

- Do use Midnight Void (#000000) for primary headlines and Arctic Snow (#ffffff) for page backgrounds, maintaining high contrast for product focus.
- Do apply Active Blue (#0070d5) exclusively for primary interactive elements like call-to-action buttons and critical links.
- Do use Open Sans font family for all textual content, opting for weight 300 for display headlines to convey subtle authority.
- Do consistently apply a 64px border-radius for all ghost buttons and minor interactive elements, creating a soft, tactile feel.
- Do utilize the shadow rgba(0, 0, 0, 0.1) 0px 8px 16px 0px for elevated cards, providing subtle depth without being aggressive.
- Do use 10px vertical and 16px horizontal padding for primary buttons to ensure a comfortable tap target.
- Do employ a spacing hierarchy from 4px to 16px for element gaps to maintain a comfortable visual density.

### Don'ts

- Don't introduce additional saturated colors; the palette relies on a single vibrant blue accent within an achromatic scale.
- Don't use aggressive, hard shadows; elevation should be subtle and support the clean aesthetic.
- Don't deviate from Open Sans; maintain the distinct typographic voice established by its varied weights and specific letter-spacing.
- Don't use sharp, angular corners for buttons; all interactive buttons should have at least a 64px border-radius.
- Don't place ghost buttons directly on highly textured backgrounds without sufficient contrast; they are designed for clean product showcases.
- Don't alter the letter spacing patterns for headlines or navigation; these are carefully set to create a specific visual cadence.
- Don't use more than two levels of elevation (page background, subtle card lift) to preserve the lightweight feel.

### Layout

The page primarily uses a `max-width` contained layout for content sections but features full-bleed hero sections that dominate the viewport, using dark backgrounds to highlight product photography. Header is sticky and spans full-width. Content sections alternate between visually distinct blocks, with clear vertical spacing, often showcasing product cards in grids or alternating text-left/image-right arrangements. The initial hero pattern features a centered headline over a dark background with a prominent product visual. The overall density is comfortable, ensuring breathing room around product displays and textual information.

### Imagery

This site prominently features high-resolution product photography, often isolated on stark black or white backgrounds, emphasizing the product itself as the hero. Products are shown in tight crops or 3/4 views, highlighting their design and functionality without distracting lifestyle context. Photography is crisp, well-lit, and used full-bleed or contained within clean, often card-like structures. There's a minimal use of abstract graphics or conceptual illustrations, reinforcing the focus on tangible hardware. Icons are mostly monochrome, with minimal stroke weight, adhering to the clean, technical aesthetic.
