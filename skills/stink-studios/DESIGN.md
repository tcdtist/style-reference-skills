---
version: alpha
name: Stink Studios
description: Stink Studios projects a bold, artistic, and somewhat stark aesthetic, primarily using a dark canvas with sharp, high-contrast typography. The design emphasizes content through large, impactful headlines and minimal, almost invisible UI elements. A distinct lack of rounded corners or elevation creates a flat, direct visual experience, with interactions often subtly outlined rather than filled. The overall impression is one of confident, unornamented creative expression.
colors:
  midnight-ink: "#000000"
  paper-white: "#ffffff"
  deep-charcoal: "#050505"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 1.4px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.15
    letterSpacing: -0.38px
  heading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.15
    letterSpacing: -0.69px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1
    letterSpacing: -2.08px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -3px
spacing:
  elementGap: 20px
  sectionGap: 60px
components:
  ghost-button-text:
    role: Interactive element, navigation links
  ghost-button-outlined:
    role: Interactive element, navigation links
  input-field:
    role: Form input elements
  minimal-badge:
    role: Categorization and tagging
---

## Overview

**North Star:** Black canvas, stark typography

Stink Studios projects a bold, artistic, and somewhat stark aesthetic, primarily using a dark canvas with sharp, high-contrast typography. The design emphasizes content through large, impactful headlines and minimal, almost invisible UI elements. A distinct lack of rounded corners or elevation creates a flat, direct visual experience, with interactions often subtly outlined rather than filled. The overall impression is one of confident, unornamented creative expression.

### Do's

- Prioritize Midnight Ink (#000000) for all main backgrounds and Paper White (#ffffff) for foreground text in a dark theme context.
- Use Times New Roman 400 at 60px with -0.05em letter-spacing for prominent page headlines to convey a bold, artistic statement.
- Maintain high typographic contrast: use Helvetica 300-700 for utilitarian text, and Helvetica 400 at 16px as the default body text.
- Keep all interactive elements visually minimal; prefer text-only or outline-only buttons with 0px corner radius.
- Apply 10px border-radius sparingly, primarily for input fields and specific form elements, maintaining an otherwise sharp aesthetic.
- Leverage the Courier New font with 0.10em letter-spacing for date stamps and meta-details to create a clear visual distinction from primary content.
- Employ a base unit of 20px horizontally and 60px vertically for section and element separation to establish a comfortable, open layout.

### Don'ts

- Avoid using filled buttons unless explicitly specified for a unique interactive state; ghost buttons are the default.
- Do not introduce shadows or significant elevation, as the design system leans towards a flat, graphic quality.
- Do not use rounded corners universally; reserve 10px radius for specific functional elements like input fields.
- Avoid generic serif fonts for headlines; the distinct Times New Roman with specific letter-spacing is key to the brand's typographic identity.
- Do not use a light theme; the brand aesthetic is built around a dominant dark canvas, with white serving as a high-contrast foreground.
- Do not apply vibrant or highly saturated brand colors as backgrounds or prominent features; color should primarily be functional or an accent for semantic states.
- Avoid tight, dense layouts; provide ample space between sections and elements using the defined spacing tokens.

### Layout

The page primarily uses a full-bleed layout, with content spanning the entire viewport width, particularly evident in hero sections and background videos. The hero features a large, centered text headline over a dynamic background. Subsequent sections often alternate between large, impactful typographic statements and full-width image-based content blocks. A common content arrangement involves prominent headlines, followed by body text, and then visual content like video stills or project imagery. Navigation is a sticky, minimal footer bar, implying content is meant to be scrolled through without top-level distractions.

### Imagery

The site predominantly uses photography and video footage as its imagery. Photography features a mix of conceptual, often blurry or motion-heavy shots (like the red car), and sometimes product/brand advertising imagery (Rippling, Canva billboards). The treatment is full-bleed or large contained elements, integrated into the dark canvas. There are no consistent geometric illustrations or specific icon styles beyond utilitarian, text-based icons (like the copyright symbol). Imagery serves decorative and illustrative purposes, establishing mood and showcasing work examples.
