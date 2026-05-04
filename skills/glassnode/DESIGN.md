---
version: alpha
name: Glassnode
description: Glassnode's design evokes a sense of understated authority and analytical precision, like an institutional data terminal. Its visual character is built on stark achromatic contrasts, pairing deep charcoal backgrounds with white text and light gray surfaces. A single, cool ultramarine blue functions as the sole accent, appearing only to highlight interactive elements and subtle visual cues, reinforcing a no-nonsense, data-centric identity. The sparing use of rounded corners (2px) on buttons and inputs prevents a harsh, technical feel, while maintaining an overall sharp and deliberate aesthetic.
colors:
  midnight-charcoal: "#1a1a1a"
  arctic-white: "#ffffff"
  cloud-gray: "#f7f8fa"
  ash-concrete: "#edeff2"
  stone-whisper: "#dedfe1"
  slate-text: "#5a5a5a"
  granite-text: "#6f6f6f"
  mist-gray: "#a0a0a0"
  deep-marine: "#e2e7fc"
  violet-signal: "#8fa5f6"
  ultramarine-ink: "#6888fb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.5
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.2
spacing:
  buttonRadius: 2px
  elementGap: 16px
  sectionGap: 64px
components:
  announcement-banner-cta-buttons:
    role: 
  feature-list-dark-section:
    role: 
  research-cards-email-subscribe:
    role: 
  primary-navigation-link:
    role: Interactive element
  hero-cta-button:
    role: Call to action
  secondary-outline-button:
    role: Secondary action
  feature-teaser-button:
    role: Informational
  email-input-field:
    role: Data entry
  research-badge:
    role: Categorization
  subtle-callout-button:
    role: Informational link
---

## Overview

**North Star:** Analytical Console on Dark Steel. The design feels like a sophisticated yet functional tool built for focused data analysis, emphasizing clarity with deliberate restraint.

Glassnode's design evokes a sense of understated authority and analytical precision, like an institutional data terminal. Its visual character is built on stark achromatic contrasts, pairing deep charcoal backgrounds with white text and light gray surfaces. A single, cool ultramarine blue functions as the sole accent, appearing only to highlight interactive elements and subtle visual cues, reinforcing a no-nonsense, data-centric identity. The sparing use of rounded corners (2px) on buttons and inputs prevents a harsh, technical feel, while maintaining an overall sharp and deliberate aesthetic.

### Do's

- Prioritize text content against `Arctic White (#ffffff)` and `Midnight Charcoal (#1a1a1a)` for strong contrast.
- Use `Inter` at weight 400 for all body text, ensuring a consistent and clear reading experience.
- Apply `2px` to all interactive element border radii (buttons, inputs) for subtle softening.
- Reserve `Fraktion` weight 700, size 56px, exclusively for hero headings to establish grand emphasis.
- Highlight interactive elements and data points with `Deep Marine (#e2e7fc)` or `Violet Signal (#8fa5f6)` to guide user attention.
- Maintain `16px` as the standard horizontal padding and interior element spacing within layouts.
- Implement `64px` vertical spacing between major page sections to ensure clear content separation.

### Don'ts

- Avoid using `Deep Marine (#e2e7fc)` or `Violet Signal (#8fa5f6)` for large blocks of text; their vibracy is for accents only.
- Do not deviate from the `2px` border radius for buttons and inputs; maintain the sharp, precise aesthetic.
- Do not use shadows on cards or sections; the design relies on stark background color changes for separation instead of elevation.
- Never introduce additional accent colors outside of the defined ultramarine palette, to preserve the focused, limited palette.
- Do not use `Fraktion` for any text below 56px; it is a display font only, not suitable for body or subheadings.
- Avoid overly complex layouts or decorative elements; the design emphasizes direct presentation of information.

### Layout

The site uses a mixed-mode layout, alternating between light and dark sections. The primary page model is max-width contained, with content centered within an implied `1200px` boundary, though the page itself is full-bleed. The hero section features a left-aligned headline and body text against a dark background with an illustrative product screenshot on the right. Subsequent sections alternate between light (`Arctic White`) and dark (`Midnight Charcoal`) backgrounds, primarily using a two-column text-left/visual-right arrangement, or grids for product cards and testimonials. Vertical spacing between these sections is generous at `64px`, providing ample breathing room. The navigation is a sticky top bar, centered, with clearly delineated interactive buttons and dropdowns, all in service of a direct and functional content presentation.

### Imagery

The site uses a combination of product screenshots, abstract data visualizations, and minimalist, brand-colored line illustrations. Product screenshots are contained within a browser-like frame, showcasing interactive charts and data, emphasizing functionality over aesthetic appeal. Abstract data visualizations, often in `Violet Signal` or `Ultramarine Ink` against dark backgrounds, serve a decorative but theme-aligned role, reinforcing the data-centric nature of the product. Illustrations are sparse, simple, and utilize the brand's accent colors, appearing as small explanatory graphics rather than hero images. The overall approach is functional and explanatory, rather than emotive or lifestyle-focused.
