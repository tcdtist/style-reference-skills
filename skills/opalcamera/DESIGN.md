---
version: alpha
name: Opalcamera
description: This design system evokes the precision of high-end camera optics fused with an understated premium aesthetic. It leverages crisp black-on-white typography and subtle gray variations to establish a clean, product-focused stage. A single, vibrant yellow accent color acts as a deliberate spotlight, drawing immediate attention to key interactive elements and product pricing, reinforcing a sense of focused value.
colors:
  absolute-zero: "#000000"
  polar-white: "#ffffff"
  cloud-silver: "#e5e7eb"
  ash-gray: "#959595"
  slate-dust: "#767676"
  amber-spotlight: "#ffdb01"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.56
    letterSpacing: -0.01px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.01px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -0.01px
spacing:
  cardRadius: 4px
  buttonRadius: 9999px
  elementGap: 9-16px
  sectionGap: 46-56px
components:
  product-cards-grid:
    role: 
  button-group:
    role: 
  pricing-feature-highlight-card:
    role: 
  primary-action-button:
    role: Call-to-action
  accent-outlined-button:
    role: Secondary action / Product pricing display
  product-card:
    role: Display individual products or features
  product-navigation-link:
    role: Internal navigation to product details
  header-navigation-item:
    role: Main site navigation
---

## Overview

**North Star:** Precision minimal optics. White space frames stark product focus, highlighted by a sharp yellow beam.

This design system evokes the precision of high-end camera optics fused with an understated premium aesthetic. It leverages crisp black-on-white typography and subtle gray variations to establish a clean, product-focused stage. A single, vibrant yellow accent color acts as a deliberate spotlight, drawing immediate attention to key interactive elements and product pricing, reinforcing a sense of focused value.

### Do's

- Use 'Amber Spotlight' (#ffdb01) exclusively for primary CTAs and critical pricing information to maximize impact.
- Maintain a clear hierarchy using 'Absolute Zero' (#000000) for headings and vital text, and 'Ash Gray' (#959595) or 'Slate Dust' (#767676) for secondary details.
- Apply 9999px border-radius to all buttons and form fields to unify interactive elements.
- Employ 'Cloud Silver' (#e5e7eb) as a subtle visual separator rather than strong shadows for content divisions.
- Ensure all text uses the Roobert typeface, varying only in weight and size as per the defined type scale to maintain a consistent brand voice.

### Don'ts

- Avoid using multiple accent colors; 'Amber Spotlight' (#ffdb01) is the sole vibrant highlight.
- Do not introduce strong drop shadows; the aesthetic relies on flat surfaces and subtle borders for depth.
- Do not deviate from the specified type scale and Roobert font for any textual elements.
- Avoid decorative imagery that competes with product visuals; maintain a functional, product-focused visual language.
- Do not use overly complex layouts; prefer clean, structured arrangements with ample whitespace.

### Layout

The site uses a max-width centered layout for most content sections, with some hero elements extending full-bleed, particularly the dark-themed initial hero. The page model is primarily white-backgrounded content blocks with clear vertical separation. The hero section often features a dark background with centered text over an atmospheric semi-darkened image background, setting a serious, professional tone. Section rhythm uses consistent vertical spacing (approx. 46-56px). Content arrangement frequently employs a 3-column card grid for product features, showcasing each product in an isolated, clear block. Interior content within cards features stacked text and buttons. Navigation is a sticky top bar with minimal links.

### Imagery

The visual language focuses on high-key product photography and contextual lifestyle shots where the product is clearly visible. Photography features tight crops of products on clean, often white or lightly textured backgrounds, emphasizing detail and form. Lifestyle photography places products in use, but remains subdued, avoiding vibrant distractions to keep focus on the device. Imagery is mostly contained within defined sections, not full-bleed, and utilizes angular alignment (not overlapping). Icons are minimal, filled, and achromatic ('Absolute Zero' #000000 or 'Polar White' #ffffff) serving an explanatory, rather than decorative, role. The density is image-heavy in product display sections, using visuals to convey information efficiently.
