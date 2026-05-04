---
version: alpha
name: 15five
description: 15Five employs a vibrant, confident design language with clean white canvases, softened cards, and a striking violet-to-pink gradient. Typography is a blend of bold, impactful headlines and accessible body text. The system uses a specific 'hero' violet as its primary accent, contrasted with touches of warm orange and pink, creating an energetic yet grounded feel. Components are lightweight with generous rounded corners, emphasizing an approachable and modern presentation.
colors:
  canvas-white: "#ffffff"
  warm-mist: "#fff2e8"
  violet-shadow: "#5e5777"
  deep-violet: "#2f115b"
  midnight-indigo: "#1a0d3f"
  accent-violet: "#3b1572"
  pink-sunset: "#ffdacf"
  fiery-orange: "#ff4b11"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.002px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.63
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.64
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 66px
    lineHeight: 1.15
spacing:
  cardRadius: 16px
  buttonRadius: 68px
  elementGap: 20px
  sectionGap: 24px
components:
  primary-filled-button:
    role: Call to action.
  light-outlined-button:
    role: Secondary action or ghost button.
  subtle-nav-link:
    role: Navigation or in-page links.
  text-only-link:
    role: Inline textual links.
  information-card-transparent:
    role: Content container for data or features.
  data-insight-card:
    role: Displays data metrics or key insights.
  highlighted-testimonial-card:
    role: Prominently features customer testimonials.
  shadowed-link-box:
    role: Interactive link blocks with elevation.
---

## Overview

**North Star:** Violet-tinged sunrise on white marble

15Five employs a vibrant, confident design language with clean white canvases, softened cards, and a striking violet-to-pink gradient. Typography is a blend of bold, impactful headlines and accessible body text. The system uses a specific 'hero' violet as its primary accent, contrasted with touches of warm orange and pink, creating an energetic yet grounded feel. Components are lightweight with generous rounded corners, emphasizing an approachable and modern presentation.

### Do's

- Use Midnight Indigo (#1a0d3f) for all main headings and primary body text to ensure high contrast and readability.
- Apply Canvas White (#ffffff) as the default background for all primary page content sections and cards.
- Implement the 68px border-radius for all button elements, including both filled and outlined variants, to maintain a consistent soft, approachable shape.
- Utilize Manrope for all functional typography (buttons, nav, body text) and DM Serif Display for major page headings to leverage their distinct roles.
- Incorporate the Hero Gradient (linear-gradient(90deg, #3b1572 0%, #1a0d3f 100%)) as a background for high-impact sections like hero banners and testimonials.
- Maintain a comfortable density with an element gap of 20px and a section gap of 24px between major content blocks.
- Use Accent Violet (#3b1572) as the primary fill color for active buttons and key interactive elements, drawing immediate attention.

### Don'ts

- Avoid using multiple border styles or weights for interactive elements; stick to 1px solid for subtle hints and no border for purely textual links.
- Do not introduce new typefaces; rely solely on Manrope and DM Serif Display to preserve typographic consistency.
- Resist using harsh or high-contrast shadows; only apply the soft, diffused shadow (rgba(0, 0, 0, 0.1) 0px 12px 30px 0px) for specific elevated components like link cards.
- Do not deviate from the established border radii; avoid sharp corners or excessively small radii as they contradict the system's approachable aesthetic.
- Refrain from using saturated colors other than Accent Violet, Pink Sunset, or Fiery Orange for UI elements; other vibrant hues are reserved for data visualization or illustrations.
- Do not expand the primary color palette with additional blues, greens, or reds unless they are specifically for semantic status indications (success, error).
- Avoid arbitrary letter-spacing adjustments; adhere to the defined Manrope letter-spacing values or normal for DM Serif Display.

### Layout

The page adheres to a max-width of 1363px, centered for most content, but the initial hero section appears full-bleed with a gradient background. The hero features a large, centered headline and subtext, followed by two prominent call-to-action buttons. Sections below alternate between a white canvas and a subtle Warm Mist (#fff2e8) background, often employing a two-column layout with text on one side and product UI screenshots or data visualizations on the other. A three or four-column card grid is used for feature showcases. Vertical spacing is consistent and comfortable, with a section gap of 24px fostering readability. The navigation is a sticky top bar with a 'Book a Demo' button prominently featured.

### Imagery

The site predominantly uses clean, product-focused illustrations and data visualizations. Illustrations are often abstract, geometric, and brand-colored, featuring soft gradients. Photography is largely absent, replaced by UI screenshots of the product. Icons are filled, with a consistent stroke weight, and mostly monochromatic or brand-colored. Imagery serves an explanatory and illustrative role, showcasing product features and data outputs rather than decorative atmosphere, contributing to a high-density, text-supported visual experience.
