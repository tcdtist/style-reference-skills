---
version: alpha
name: Arc
description: Arc's design feels like an iridescent canvas beneath structured content. A clean, spacious base of near-white `#fffcec` and `#ffffff` is contrasted by vibrant, gradient-heavy headers and footers that burst with energetic blues and purples. Typography utilizes tight letter-spacing for headlines, lending a crisp, almost digital precision, while interactive elements are defined by a singular, deep violet `#3139fb` and a distinct pill-shaped button style.
colors:
  canvas: "#ffffff"
  wash: "#fffcec"
  highlight: "#fffadd"
  charcoal-text: "#000000"
  body-text: "#696969"
  muted-text: "#595853"
  shadow-tint: "#bfbdb1"
  arc-violet: "#3139fb"
  action-violet: "#2702c2"
  red-accent: "#ff5060"
  cerulean-accent: "#0034fe"
  coral-accent: "#ff9999"
  indigo-accent: "#26069c"
  deep-violet-accent: "#210784"
  royal-blue-accent: "#2404aa"
  hero-gradient-background: "#fffcec"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
    letterSpacing: 0.033px
  nav:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: -0.02px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.5
    letterSpacing: 0.033px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.1
    letterSpacing: -0.04px
  statement:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 0.98
    letterSpacing: -0.04px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 0.93
    letterSpacing: -0.05px
spacing:
  elementGap: 24px
  sectionGap: 48px
components:
  primary-ghost-button:
    role: Primary Call to Action
  secondary-ghost-button:
    role: Secondary Call to Action
  pill-download-button:
    role: Download / Key Action
  navigation-link:
    role: Primary Navigation
  feature-card:
    role: Informational Display
  browser-ui-element:
    role: Product Mockup Display
  quote-citation:
    role: Testimonial or Endorsement
---

## Overview

**North Star:** Playful gradient on clean slate

Arc's design feels like an iridescent canvas beneath structured content. A clean, spacious base of near-white `#fffcec` and `#ffffff` is contrasted by vibrant, gradient-heavy headers and footers that burst with energetic blues and purples. Typography utilizes tight letter-spacing for headlines, lending a crisp, almost digital precision, while interactive elements are defined by a singular, deep violet `#3139fb` and a distinct pill-shaped button style.

### Do's

- Prioritize Marlin Soft SQ for all headlines and navigation, applying tight letter spacing values like -0.05em at 46px to maintain the crisp, modern feel.
- Use Arc Violet (#3139fb) as the dominant accent for all interactive elements, ensuring visual consistency for brand actions.
- Apply the Pill Download Button's 22px border-radius and rgba(0, 0, 0, 0.85) background to all primary call-to-action buttons for consistency.
- Employ the Canvas (#ffffff) and Wash (#fffcec) backgrounds in an alternating fashion for major page sections to create a subtle shift in depth.
- Use a base vertical padding of 8px and horizontal padding of 22px for buttons to preserve the brand's unique button proportions.
- For any UI elements requiring a subtle lift, incorporate a soft shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px 0px.
- Maintain a clear hierarchy of text colors: use Charcoal Text (#000000) for headlines, Body Text (#696969) for main paragraphs, and Muted Text (#595853) for secondary information.

### Don'ts

- Avoid using harsh or opaque shadows; stick to the light, transparent shadow styles provided.
- Do not introduce new color hues for interactive elements; confine brand interactions to Arc Violet (#3139fb) and Action Violet (#2702c2).
- Avoid generic button shapes; adhere to either the 10px radius for ghost buttons or the 22px pill shape for primary CTAs.
- Do not let headlines breathe with positive letter spacing; maintain the characteristic negative tracking for impact.
- Avoid using stock photography; instead, focus on clean product screenshots within browser frames.
- Do not deviate from the established spacing hierarchy; all elements should align with the 4px base unit, with element gaps at 24px and section gaps at 48px.
- Don't use gradients for subtle UI elements; confine them to large, thematic areas like hero sections or structural backgrounds.

### Layout

The page primarily uses a max-width contained layout for core content after the hero. The hero section is characterized by a full-bleed gradient background with a centered headline and CTA. Content sections generally use consistent vertical spacing of 48px. Within sections, content is arranged in centered stacks or alternating text+image compositions, as seen with the browser mockups. Density is comfortable, with generous white space around elements.

### Imagery

The site uses product screenshots embedded within highly stylized browser frames as its primary visual content, showcasing the Arc browser's UI. These are typically contained and serve an explanatory role. Icons are outlined, mono-color (either black or a brand accent like Arc Violet). There is a complete absence of conventional photography or illustrations, putting the focus entirely on the product UI and its innovative design.
