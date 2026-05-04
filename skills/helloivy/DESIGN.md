---
version: alpha
name: Helloivy
description: Hello Ivy presents as an architectural blueprint rendered on thick, creamy paper, conveying both structure and a subtle warmth. Heavy, bold titles anchor content, while a high-contrast monochromatic palette creates stark visual hierarchy. The signature feature is the strong grid system defined by fine black lines, segmenting content into clear, distinct blocks, as if each piece of information is a precisely cut and placed element within a larger, deliberate composition. Sparse use of color and a focus on sharp edges for everything but interactive elements contributes to a feeling of focused utility and quiet authority.
colors:
  greige-canvas: "#faf6f0"
  midnight-ink: "#000000"
  soft-graphite: "#5e697f"
  pure-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.28px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.32px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
    letterSpacing: -0.36px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: 0.2px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.2
    letterSpacing: 0.34px
  display:
    fontFamily: "system-ui"
    fontSize: 82px
    lineHeight: 1.1
    letterSpacing: 1.64px
spacing:
  buttonRadius: 8px
  elementGap: 10px
  sectionGap: 64px
components:
  cta-button-group:
    role: 
  feature-highlight-card:
    role: 
  social-proof-client-logo-grid:
    role: 
  primary-navigation-link:
    role: Main navigation items
  hero-headline:
    role: Main page title
  hero-body-text:
    role: Introductory paragraph
  feature-section-heading:
    role: Section titles for feature blocks
  footer-try-it-for-free-button:
    role: Persistent contact/CTA in footer
---

## Overview

**North Star:** Architectural blueprint on creamy paper. Black lines precisely segment content on a soft background.

Hello Ivy presents as an architectural blueprint rendered on thick, creamy paper, conveying both structure and a subtle warmth. Heavy, bold titles anchor content, while a high-contrast monochromatic palette creates stark visual hierarchy. The signature feature is the strong grid system defined by fine black lines, segmenting content into clear, distinct blocks, as if each piece of information is a precisely cut and placed element within a larger, deliberate composition. Sparse use of color and a focus on sharp edges for everything but interactive elements contributes to a feeling of focused utility and quiet authority.

### Do's

- Always define layout sections with subtle 1px Midnight Ink (#000000) borders against Greige Canvas (#faf6f0) to create a structured, architectural feel.
- Use Unbounded (weight 400-500) for all display headlines, setting letter-spacing to 0.02em for large titles (82px) and 0.01em for smaller section titles (20-34px).
- Apply Inter (weight 400-700) with a consistent -0.02em letter-spacing for all body text, subheadings, and UI labels.
- Utilize Greige Canvas (#faf6f0) as the primary background color for all page sections and content blocks.
- Implement 9999px border-radius for primary action buttons (Solid Pill Buttons) and 8px border-radius for secondary interactive elements (Outline Buttons).
- Maintain high contrast by using Midnight Ink (#000000) for all primary text and interactive elements on Greige Canvas (#faf6f0) backgrounds.
- Isolate Pure White (#ffffff) for subtle highlights, such as icon fills or inverse text on dark button backgrounds.

### Don'ts

- Avoid using highly saturated, chromatic colors; the palette is strictly monochromatic with a single warm neutral base.
- Do not deviate from the established 1px Midnight Ink (#000000) border style for section dividers and containers.
- Refrain from using drop shadows or complex elevation; depth is created through borders and color contrast.
- Do not introduce rounded corners on non-interactive content blocks or imagery; maintain sharp, defined edges for structure.
- Avoid decorative whitespace or intricate patterns; layout should be clean, grid-based, and functional.
- Do not use generic system fonts for body or heading text where Inter or Unbounded are specified; adhere to the defined typography for brand consistency.

### Layout

The layout is max-width contained at approximately 1200px, centered on a Greige Canvas background. The hero section features a centered, enormous headline over the background. Section rhythm is created through a strong, visible grid system using fine 1px Midnight Ink borders that divide the page into distinct, almost cell-like blocks. Content often occupies full-width blocks or alternates between two-column text+visual arrangements. A clear client logo grid demonstrates social proof. Navigation is a simple top bar, with a persistent fixed 'Try it for free' button at the bottom right. The overall density is comfortable, with ample whitespace creating breathing room within the strict grid.

### Imagery

The site uses minimal imagery, primarily focusing on clean UI mockups and desaturated client logos. Product screenshots are contained within distinct bordered sections, appearing like functional 'windows' into the application. Photography is absent. Client logos are grayscale and often subtly outlined, adhering to the monochromatic scheme. The visual language emphasizes product function over lifestyle or abstract art, acting mainly as explanatory content or social proof, contained and never full-bleed.
