---
version: alpha
name: Laura Monin
description: Laura Monin's design system evokes an editorial, gallery-like experience with a distinct focus on imagery and classic typography. The minimal, high-contrast monochrome palette ensures visual content takes center stage, while elegant serifs for headlines and classic sans-serifs for body text provide a timeless, refined touch. It prioritizes breathable negative space and structured, but flexible, arrangements of visual elements, creating an atmosphere of understated luxury and artistic presentation.
colors:
  canvas-white: "#ffffff"
  text-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.15
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.15
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.15
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.15
    letterSpacing: 0px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.2
    letterSpacing: -0.63px
  display:
    fontFamily: "system-ui"
    fontSize: 158px
    lineHeight: 1.2
    letterSpacing: -2.84px
spacing:
  cardRadius: 0px
  elementGap: 7px
components:
  navigation-link:
    role: Top-right global navigation items.
  hero-title:
    role: Main page headline / artistic statement.
  image-caption:
    role: Descriptive text accompanying visual content.
  info-contact-link:
    role: Small, functional links for contact or additional information.
  gallery-image-card:
    role: Primary content display for portfolio images.
---

## Overview

**North Star:** Gallery Grid Serenity

Laura Monin's design system evokes an editorial, gallery-like experience with a distinct focus on imagery and classic typography. The minimal, high-contrast monochrome palette ensures visual content takes center stage, while elegant serifs for headlines and classic sans-serifs for body text provide a timeless, refined touch. It prioritizes breathable negative space and structured, but flexible, arrangements of visual elements, creating an atmosphere of understated luxury and artistic presentation.

### Do's

- Prioritize Canvas White (#ffffff) for all backgrounds and primary containers to achieve a bright, expansive feel.
- Use Text Black (#000000) for all text elements to maintain high contrast and an editorial aesthetic.
- Reserve the 'title' font for large display headlines, applying its specific -0.0180em letter-spacing for an elegant, bespoke look.
- Apply neue-haas-grotesk-display for all body copy, navigation, and supplementary text roles, strictly at weight 400.
- Maintain generous vertical spacing between sections, using values such as 255px (sectionGap) to create a sense of calm and visual breathing room.
- Frame images with no border-radius (0px) to enhance the gallery-like, art-focused presentation.
- Utilize a minimal element gap of 7px to imply close association between elements like image and caption lists.

### Don'ts

- Avoid using any saturated colors for UI elements; stick to the dominant #ffffff and #000000 palette.
- Do not introduce rounded corners (e.g., 4px, 8px) on any image containers or cards; all visuals should retain sharp, rectilinear edges.
- Refrain from using heavily bolded text across the interface; the system relies on weight 400 for both primary fonts.
- Do not overcrowd sections; maintain generous negative space consistent with the 255px sectionGap.
- Avoid adding unnecessary shadows or complex visual effects; the design emphasizes flatness and clarity.
- Do not deviate from the specified font families; their distinct characteristics are central to the brand's identity.
- Do not introduce additional padding or margins that disrupt the established spacing rhythm defined by 7px element gaps and 255px section margins.

### Layout

The page primarily employs a full-bleed layout for the canvas, but content, especially imagery, is centrally anchored and surrounded by significant negative space. The hero element is a large, centered, serif headline. Images are arranged in an asymmetrical, editorial grid, often floating with generous whitespace. Sections appear to flow seamlessly without strong visual dividers, relying on spacious vertical gaps (approx. 255px). Navigation is minimal, located at the top-right.

### Imagery

The site relies primarily on high-quality, product-focused photography and lifestyle fashion shots. Images are treated with sharp, non-rounded edges, appearing as self-contained 'cards' on a vast white canvas. They serve as the main content, often paired with minimal text overlays or adjacent captions. The aesthetic is often bright, airy, and reflective of fashion photography, giving a sophisticated, magazine-like feel. Icons are not a prominent feature, and illustrations are absent, emphasizing photographic realism.
