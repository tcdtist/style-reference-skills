---
version: alpha
name: Epidemicsound
description: This design system presents a clean, approachable aesthetic with a strong emphasis on content, rather than heavy ornamentation. Subtle background color shifts create visual segmentation, preventing the flat UI from feeling stark. Type takes center stage, particularly the custom 'Sebenta Font' for headlines, which adds a distinct, sophisticated character, contrasting the straightforward 'Inter' for body copy. Playful, high-contrast accent colors are used sparingly to draw attention to key interactive elements and promotions, injecting vibrancy into an otherwise restrained palette.
colors:
  midnight-ink: "#000000"
  cloud-white: "#ffffff"
  paper-gray: "#f1f0eb"
  ash-gray: "#efefef"
  storm-gray: "#60605"
  light-steel: "#cfd6e5"
  rose-pop: "#ff82c2"
  electric-blue: "#20afff"
  lemon-zest: "#ffda40"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.71
    letterSpacing: 0.1px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.04px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.06
    letterSpacing: -0.04px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 40px
components:
  cta-button-group:
    role: 
  promotional-highlight-card-studio-feature:
    role: 
  faq-accordion:
    role: 
  primary-action-button-dark:
    role: Call to action
  secondary-action-button-light:
    role: Secondary action or navigation
  ghost-button:
    role: Tertiary action or navigational link
  promotional-banner-button:
    role: CTA within promotional banners
  image-card-transparent:
    role: Content container for images with overlaid text
  promotional-highlight-card-rose-pop:
    role: Highlighting key features or promotions
  image-background-card-light-steel:
    role: Container for image-based content sections
  new-feature-badge:
    role: Signaling new content or features
  accordion-item:
    role: Collapsible content sections, FAQs
---

## Overview

**North Star:** Crisp Paper, Bold Ink. Like a freshly printed document with critical information highlighted in vibrant markers.

This design system presents a clean, approachable aesthetic with a strong emphasis on content, rather than heavy ornamentation. Subtle background color shifts create visual segmentation, preventing the flat UI from feeling stark. Type takes center stage, particularly the custom 'Sebenta Font' for headlines, which adds a distinct, sophisticated character, contrasting the straightforward 'Inter' for body copy. Playful, high-contrast accent colors are used sparingly to draw attention to key interactive elements and promotions, injecting vibrancy into an otherwise restrained palette.

### Do's

- Use Midnight Ink (#000000) for all primary body text and headings to ensure high contrast.
- Apply Rose Pop (#ff82c2) sparingly for promotional banners and key feature highlights to create visual pop.
- Employ the 'sebentaFont' at weight 500 for all headlines 20px and above, maintaining negative letter spacing values (-0.02em to -0.04em) to achieve a sophisticated, distinctive look.
- Utilize Paper Gray (#f1f0eb) as the default page and section background color, varying it subtly for content blocks where more visual separation is needed.
- Buttons and cards must always have a 0px border radius, reinforcing the crisp, boxy aesthetic of the UI.
- Ensure all text set in 'Inter' maintains a positive letter spacing of 0.1000em for an open, airy feel.
- Maintain a minimum vertical spacing of 40px between major content sections on the page.

### Don'ts

- Do not use saturated brand colors for extensive text blocks; reserve them for accents and banners.
- Avoid using box shadows or gradients, as the system relies on flat colors and subtle background shifts for depth.
- Do not round corners on cards or buttons; maintain the explicit 0px border radius for a sharp, defined appearance.
- Do not substitute 'Inter' for 'sebentaFont' in headlines, as the custom font is crucial for brand identity.
- Avoid excessive use of the vivid accent colors simultaneously; typically, one strong accent color per section is sufficient to avoid visual clutter.

### Layout

The page maintains a centered max-width layout, with some sections breaking out to full-bleed for visual impact, such as the initial dark hero banner that contrasts with the main content area. The hero includes a prominent centered headline over a light background. Content alternates between stacked text blocks, two-column layouts (often text adjacent to an image or product screenshot), and 3-column card grids for features and examples. A consistent vertical rhythm is established, primarily through the 'sectionGap', creating distinct, comfortable breathing room between content blocks. Navigation is a sticky top bar with clearly defined 'Log in' and 'Create free account' buttons.

### Imagery

The visual language relies heavily on product-oriented photography and clean, unadorned UI. Photography is typically tightly cropped on a single subject or product, sometimes presented without much environmental context, or large landscape shots that evoke atmosphere. Images are often integrated directly into card backgrounds or full-width sections. There's a notable absence of illustrations or 3D renders. Icons are monochromatic, filled, and simplified, maintaining a functional, utilitarian role. The overall density is high with imagery, serving to showcase either the product in use or the 'sound' it represents, rather than just decorative elements.
