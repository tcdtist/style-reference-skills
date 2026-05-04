---
version: alpha
name: Home page | Impossible Foods
description: Impossible Foods utilizes a bold, high-contrast visual system dominated by deep, saturated reds and blacks, creating an urgent and impactful atmosphere. Typography is large and commanding, often leveraging uppercase and strong tracking for graphic appeal. The design employs a "dark mode" aesthetic with rich, deep background colors that make the vibrant reds and product imagery pop. Components are distinct, featuring sharp corners or subtly rounded edges, with a focus on clear messaging and strong visual hierarchy through color and scale rather than extensive use of elevation or subtle textures.
colors:
  butcher-shop-crimson: "#4f0423"
  deep-berry: "#260212"
  impossible-red: "#e10600"
  pale-flesh: "#ffc7c6"
  rich-mahogany: "#8f6174"
  midnight-ink: "#000000"
  ghost-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: 0.3px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0.3px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.15
    letterSpacing: 0.02px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.15
    letterSpacing: 0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: 0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: 0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 150px
    lineHeight: 0.73
    letterSpacing: 0.02px
spacing:
  cardRadius: 37.8889px
  buttonRadius: 15px
  elementGap: 6px
  sectionGap: 40px
components:
  hero-section-headline:
    role: Dominant page title
  navigation-link:
    role: Primary site navigation
  outlined-call-to-action-button:
    role: Secondary action or informational button
  filled-action-button:
    role: Primary call to action button
  product-category-badge:
    role: Filters and content categorization
  product-card:
    role: Showcasing individual products
---

## Overview

**North Star:** Saturated Night Butcher

Impossible Foods utilizes a bold, high-contrast visual system dominated by deep, saturated reds and blacks, creating an urgent and impactful atmosphere. Typography is large and commanding, often leveraging uppercase and strong tracking for graphic appeal. The design employs a "dark mode" aesthetic with rich, deep background colors that make the vibrant reds and product imagery pop. Components are distinct, featuring sharp corners or subtly rounded edges, with a focus on clear messaging and strong visual hierarchy through color and scale rather than extensive use of elevation or subtle textures.

### Do's

- Use Butcher Shop Crimson (#4f0423) or Deep Berry (#260212) as primary background colors for all sections to maintain the dark theme.
- Employ Impossible Red (#e10600) strictly for critical headlines, brand accents, and active UI states to ensure high impact and urgency.
- Utilize 'sans-meat' font family at weight 700 for headlines exceeding 48px to convey strong impactful messaging.
- Ensure all interactive elements have a Ghost White (#ffffff) border or text color when on dark backgrounds, or Midnight Ink (#000000) text on Pale Flesh (#ffc7c6) backgrounds, maintaining contrast.

### Don'ts

- Do not introduce light backgrounds beyond Ghost White (#ffffff) for specific input fields or detailed content cards, avoiding deviation from the dark theme.
- Do not use subtle, muted colors for primary actions; they must always be high-contrast combinations like Pale Flesh (#ffc7c6) background with Midnight Ink (#000000) text, or Impossible Red (#e10600) text.
- Avoid generic serif or default sans-serif fonts; the 'sans-meat' typeface is integral to the brand's bold voice.
- Do not use elevation or subtle shadows for cards or containers; rely on strong color blocking and outlines instead.
- Do not introduce overly rounded elements; radii are either minimal (0-5px) or very large (15px, 37.8889px) for distinct purposes.
