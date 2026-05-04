---
version: alpha
name: Dollar Shave Club
description: Dollar Shave Club presents a bold, product-focused aesthetic built on a deep blue foundation. Vibrant brand colors like orange and maroon punctuate the interface, guiding attention to key actions and brand messaging, while a tightly defined typographic system ensures strong hierarchy. Components are direct and confident, featuring slight corner rounding and minimal elevation, allowing the strong color palette and product imagery to drive the visual experience.
colors:
  midnight-blue: "#142978"
  mahogany-red: "#82163f"
  action-orange: "#fe5000"
  deep-space-blue: "#0a153c"
  crisp-white: "#ffffff"
  slate-gray: "#404040"
  powder-blue: "#dbebf5"
  warm-cream: "#f5ecdf"
  light-gray: "#eeeeee"
  platinum-gray: "#e3e3e3"
  ash-gray: "#949596"
  ink-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.528px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.57
    letterSpacing: 0.602px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.608px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.29
    letterSpacing: 0.594px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: 0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: 0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 0.8
    letterSpacing: -0.312px
spacing:
  cardRadius: 4px
  buttonRadius: 5px 10px
  elementGap: 10px
  sectionGap: 30px
components:
  primary-action-button:
    role: Main call-to-action
  ghost-button:
    role: Secondary action that needs less emphasis
  navigation-button:
    role: Top-level navigation items
  information-card-powder-blue:
    role: Presenting product features or bundles
  plain-card-transparent:
    role: Flexible content container without visual emphasis
  text-input-transparent:
    role: Form fields without a distinct background
  text-input-white-background:
    role: Standard form input fields
  badge-white:
    role: Small informational tags
  badge-platinum-border:
    role: Indicating quantity or status
---

## Overview

**North Star:** Bold utility, clear guidance

Dollar Shave Club presents a bold, product-focused aesthetic built on a deep blue foundation. Vibrant brand colors like orange and maroon punctuate the interface, guiding attention to key actions and brand messaging, while a tightly defined typographic system ensures strong hierarchy. Components are direct and confident, featuring slight corner rounding and minimal elevation, allowing the strong color palette and product imagery to drive the visual experience.

### Do's

- Use Midnight Blue (#142978) as the primary background for content sections to maintain visual depth and brand consistency.
- Apply Action Orange (#fe5000) exclusively for primary calls-to-action and critical interactive elements.
- Prioritize DSC Specter for all headings and body text, varying weights (400-900) to establish clear typographic hierarchy.
- Ensure all buttons use a border-radius of either 5px or 4px for a consistent, subtle softness.
- Maintain a clear elementGap of 10px between inline interactive elements and form fields.
- Utilize Mahogany Red (#82163f) sparingly, primarily for navigation highlights or specific brand messages.
- Leverage Powder Blue (#dbebf5) for card backgrounds to visually differentiate information blocks without adding visual weight.

### Don'ts

- Do not use generic gray tones for button backgrounds; all functional buttons should adopt Action Orange (#fe5000) or Deep Space Blue (#0a153c) for variant actions.
- Avoid excessive use of shadows; most components should remain flat to emphasize the bold color palette.
- Do not introduce new font families; adhere strictly to DSC Specter and Gelica for all text.
- Refrain from using Crisp White (#ffffff) as a primary background for large sections unless it's a dedicated hero or a very light content spot contrasting a dark dominant mode.
- Do not deviate from the established spacing scale; maintain 10px for element gaps and 25px for card padding to keep a comfortable density.
- Never use achromatic blacks or dark grays for primary text on dark backgrounds; always use Crisp White (#ffffff) for readability.
- Avoid outlining primary action buttons; the design system strongly favors filled Action Orange (#fe5000) for emphasis.

### Layout

The page primarily uses a full-bleed layout for background colors, creating distinct horizontal sections. Content within these sections is often centered within an implied max-width container, especially for headings and feature blocks. The hero section is a split layout: a commanding headline and call-to-action on the left, set against a predominantly white or light background, paired with a dynamic lifestyle image on the right which can be deeply saturated with brand colors. Subsequent sections alternate between Midnight Blue and brighter card backgrounds, often utilizing a 4-column grid for product features or a 3-column grid for 'How It Works' style content. Navigation is a sticky top bar with clearly segmented 'Men's' and 'Women's' options, reinforced by a secondary navigation for product categories.

### Imagery

This site features a mix of product photography and stylized lifestyle imagery. Product shots are typically tight crops, often on solid backgrounds (Powder Blue or white), showcasing the items clearly rather than in use. Lifestyle images, when present, tend to be candid and dynamic, with warm lighting and a slightly desaturated color treatment, aiming for authenticity. Illustrations are abstract and organic, using brand colors like Action Orange and a pastel purple for decorative flair. Icons are outlined, with a moderate stroke weight, and primarily use Action Orange or Crisp White, contrasting against the dark backgrounds. Imagery density is moderate, used to break up text sections and highlight product benefits.
