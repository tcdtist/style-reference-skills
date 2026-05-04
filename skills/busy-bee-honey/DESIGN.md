---
version: alpha
name: Busy Bee Honey
description: Busy Bee Honey's design system evokes a rustic, wholesome, and approachable brand character. It uses warm, earthy tones contrasting with a clean, light background and vibrant accent colors. Typography combines a classic serif for branding and headings with highly legible sans-serif for body text, creating a sense of heritage and trustworthiness. Components are soft and generous, prioritizing comfort over sharp precision, with rounded shapes and ample padding.
colors:
  honeycomb-gold: "#ffca50"
  earth-brown: "#3b2722"
  sky-blue: "#6aacc2"
  warm-cream: "#f2ebd0"
  black-ink: "#000000"
  harvest-green: "#6fa162"
  cacao-red: "#a0342a"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.1
    letterSpacing: 0px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1
    letterSpacing: -0.448px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 0.82
    letterSpacing: -14.4px
  display:
    fontFamily: "system-ui"
    fontSize: 238px
    lineHeight: 0.8
    letterSpacing: -38.08px
spacing:
  buttonRadius: 500px
  elementGap: 8px
  sectionGap: 32px
components:
  primary-filled-button:
    role: Main call-to-action button.
  ghost-outlined-button-earth-brown:
    role: Secondary action or subtle navigation.
  ghost-outlined-button-black:
    role: Neutral tertiary action.
  basic-card:
    role: Container for content where no elevation or strong visual separation is needed.
---

## Overview

**North Star:** Golden Harvest Comfort: a sun-drenched, natural warmth with a handmade touch.

Busy Bee Honey's design system evokes a rustic, wholesome, and approachable brand character. It uses warm, earthy tones contrasting with a clean, light background and vibrant accent colors. Typography combines a classic serif for branding and headings with highly legible sans-serif for body text, creating a sense of heritage and trustworthiness. Components are soft and generous, prioritizing comfort over sharp precision, with rounded shapes and ample padding.

### Do's

- Use Earth Brown (`#3b2722`) for primary text and calls to action to maintain brand consistency.
- Apply 500px or 1000px border-radius to all interactive elements like buttons for a soft, friendly feel.
- Prioritize TayMakawao for large headlines using its tight letter-spacing for visual impact.
- Utilize Warm Cream (`#f2ebd0`) as the dominant background color for content sections.
- Employ consistent 24px vertical and 40px horizontal padding for main ghost buttons.
- Use Honeycomb Gold (`#ffca50`) and Sky Blue (`#6aacc2`) sparingly as accent colors for distinct elements or to indicate active states.

### Don'ts

- Avoid sharp corners; all functional UI elements should have a significant border radius.
- Do not use generic system fonts for branding or primary headlines where TayMakawao or TayBirdie are intended.
- Do not overuse accent colors; most of the UI should remain in the neutral and Earth Brown palette.
- Avoid complex shadow systems; the design system appears to favor flat surfaces.
- Do not vary line heights excessively within body text; maintain a comfortable 1.2-1.5 ratio.
- Do not use transparent backgrounds for text-heavy sections; ensure sufficient contrast with solid background colors.

### Layout

The page primarily uses a full-bleed layout, where background colors or large imagery stretch across the viewport width. The hero section features a large, centered headline over a dark, full-width background, with a prominent product image. Subsequent sections vary, often incorporating alternating full-width color bands (e.g., Warm Cream, Honeycomb Gold). Content within these bands tends to be centrally aligned or uses two-column text and image arrangements. Vertical spacing between sections is generous, establishing a comfortable, unhurried rhythm. Navigation is a top bar, with interactive elements subtly highlighted on hover.

### Imagery

The imagery features highly stylized product photography (honey bottles), often floating or placed centrally against a strong brand-colored background. Illustrations are minimal but present, such as bee icons, adding a whimsical touch without overpowering the product. Icons are either outlined or filled, with a moderate stroke weight, and monochrome. The overall density is low, allowing images to occupy significant visual space and act as focal points, primarily for product showcase and brand atmosphere rather than explanatory content.
