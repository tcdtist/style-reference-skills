---
version: alpha
name: Erno Forsström
description: Erno Forsström's visual system evokes a gallery exhibition laid out in a stark, minimalist environment. Typography takes center stage, creating hierarchy and visual interest through precise sizes and tracking on a primarily achromatic canvas. The interface is text-heavy but feels spacious, punctuated by large, photographic case studies that break the rhythm with high-fidelity product imagery. The overall impression is one of restrained confidence and cerebral focus.
colors:
  lead-graphite: "#202020"
  canvas-white: "#ffffff"
  whisper-gray: "#cdcecf"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.33
    letterSpacing: -0.75px
  heading-md:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.1
    letterSpacing: -1.16px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 0.93
    letterSpacing: -2.9px
spacing:
  elementGap: 18px
  sectionGap: 31px
components:
  minimal-navigation-link:
    role: Text link for primary navigation (header, footers)
  featured-project-card:
    role: Showcase individual portfolio projects with a large image and descriptive text.
  category-heading:
    role: Divides content sections
---

## Overview

**North Star:** Gallery exhibition, typographic precision

Erno Forsström's visual system evokes a gallery exhibition laid out in a stark, minimalist environment. Typography takes center stage, creating hierarchy and visual interest through precise sizes and tracking on a primarily achromatic canvas. The interface is text-heavy but feels spacious, punctuated by large, photographic case studies that break the rhythm with high-fidelity product imagery. The overall impression is one of restrained confidence and cerebral focus.

### Do's

- Use Lead Graphite (#202020) for all primary text, headings, and interactive elements for consistent contrast.
- Maintain a tight letter spacing for all typography, with larger headings receiving more negative tracking: -2.9px at 58px, -1.16px at 43px, and -0.75px at 21px.
- Adhere to 'tnum' font feature settings for all numeric data when using Nb akademie pro book to ensure consistent tabular alignment.
- Apply 18px as the default element spacing between components and within horizontal layouts.
- Utilize Whisper Gray (#cdcecf) only for subtle borders or low-emphasis dividers, such as separating links or minor UI elements.
- Ensure all interactive text elements (links) visually change state on hover, using Lead Graphite (#202020) text and a subtle border for visual feedback.

### Don'ts

- Avoid using multiple font families or excessive font weights; stick to Nb akademie pro book book webfont at 400 weight exclusively.
- Do not introduce strong accent colors; the palette is strictly achromatic with the only distinct color being for structural borders.
- Refrain from using shadows or gradients; the design relies on flat surfaces and high contrast typography.
- Do not use small body text sizes; the smallest text observed for body is 21px, ensuring legibility and presence.
- Avoid decorative imagery or illustrations; focus on high-fidelity product shots or screenshots for visual content.

### Layout

The page uses a full-bleed layout without a fixed max-width, allowing content to extend to the viewport edges, which is particularly evident in the large project showcases. The hero section prominently features a large, horizontally centered heading text. Section rhythm is managed through consistent vertical spacing (31px section gap) and the alternating presentation of large imagery blocks and text. Content is primarily arranged in centered stacks for headings and text, with project showcases presenting a large visual followed by text. Navigation is minimal, consisting of a top bar with aligned text links on the left and right.

### Imagery

The imagery primarily consists of high-fidelity product screenshots or tightly cropped product photography, often showcasing digital interfaces on devices. The treatment is full-bleed or contained within a black or dark background, suggesting a focus on the product itself rather than lifestyle or environmental context. There are no apparent rounded corners; images maintain sharp, raw edges. Icons are typically not used to convey meaning; visual weight comes from larger product images.
