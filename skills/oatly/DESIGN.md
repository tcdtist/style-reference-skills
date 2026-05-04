---
version: alpha
name: Oatly
description: This design evokes a feeling of quirky, approachable earnestness, like a carefully crafted zine or an indie newsletter. The dominant #fffef6 'Notebook Paper' background with a subtle grid pattern sets a deliberately lo-fi, tactile mood. Typography leans into a blocky, full-caps aesthetic that feels both nostalgic and direct. Occasional hand-drawn stamps and a limited, earthy accent palette reinforce a friendly, unpolished brand identity, making the corporate feel personal.
colors:
  notebook-paper: "#fffef6"
  ink-black: "#000000"
  pure-white: "#ffffff"
  pale-gray: "#c6c6c6"
  sunrise-yellow: "#fdcf85"
  blush-pink: "#f8c8d8"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 44px
components:
  content-cards-with-badges:
    role: 
  button-group:
    role: 
  mission-statement-block:
    role: 
  monochrome-outline-button:
    role: Primary action button, default interactive element
  filled-black-button:
    role: Strong call to action
  pill-button:
    role: Specific, distinct call to action
  image-card-with-shadow:
    role: Content card for visual entries with slight lift
  news-badge:
    role: Categorization tag for news content
  tastebuds-badge:
    role: Categorization tag for specific interactive content
---

## Overview

**North Star:** Notebook paper zine

This design evokes a feeling of quirky, approachable earnestness, like a carefully crafted zine or an indie newsletter. The dominant #fffef6 'Notebook Paper' background with a subtle grid pattern sets a deliberately lo-fi, tactile mood. Typography leans into a blocky, full-caps aesthetic that feels both nostalgic and direct. Occasional hand-drawn stamps and a limited, earthy accent palette reinforce a friendly, unpolished brand identity, making the corporate feel personal.

### Do's

- Maintain the all-caps 'Margo Pro' typography across all headings and primary text to evoke the brand's distinct voice.
- Utilize the #fffef6 'Notebook Paper' color for all major page backgrounds.
- Apply the 2px 2px 0px 0px #000000 shadow to interactive cards for a subtle, illustrative lift.
- Keep all borders sharp with a 0px radius, only using 9999px radius for specific pill-shaped buttons.
- Use Ink Black (#000000) for all text and UI outlines to maximize contrast against the light background.
- Employ the 44px vertical spacing between major sections for a clean, regular rhythm.

### Don'ts

- Avoid gradients; the design relies on solid colors and sharp contrasts.
- Do not introduce rounded corners (besides the 9999px pill variant) into any UI elements; maintain 0px radius for a consistent angular feel.
- Do not use any secondary brand colors for body text; reserve accent colors exclusively for badges.
- Avoid subtle grayscale variations for text; use pure Ink Black (#000000) for all primary text.
- Do not use letter-spacing other than 'normal' for 'Margo Pro' to preserve its intended blocky appearance.
- Avoid drop shadows for general UI elements; the design primarily uses a flat aesthetic with specific 2px 2px 0px 0px offset shadows.

### Layout

The page primarily uses a max-width contained layout, though the exact `pageMaxWidth` is not explicitly defined, it maintains a consistent content column. The hero features a two-column split, with a large all-caps headline on the left and a placeholder image area on the right. Below the hero, content is structured into a grid of card-like elements, implying a flexible and responsive arrangement for showcasing articles or products. Vertical sections are demarcated by consistent 44px spacing. The overall impression is a structured yet somewhat unconventional layout, avoiding typical full-bleed hero banners for a more editorial, 'block-based' composition.

### Imagery

Imagery style is mixed, featuring both product photography and graphic elements. Product photography focuses on tight crops of beverages, often in transparent or visually interesting containers, implying a focus on the product's essence rather than lifestyle. Photography is generally light-toned and contained within sharp-edged frames. Illustrations are sparse but impactful, like the hand-drawn-style stamp, conveying an authentic, almost DIY, feel. The overall role of visuals is a blend of product showcase and decorative elements to enhance the zine-like narrative, rather than heavy explanatory graphics. Image density is moderate, balanced with text blocks.
