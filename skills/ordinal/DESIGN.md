---
version: alpha
name: Ordinal
description: Ordinal uses a deep-space productivity aesthetic: dark canvas, minimalist UI elements, and a single vibrant green highlight that punctuates critical information and calls to action. The design maintains order through a comfortable density, clear typographic hierarchy, and subtle surface variations rather than heavy shadows or complex gradients. The overall atmosphere feels calm and focused, with interaction points clearly highlighted by the brand's signature accent green. Components are light, using ghost states and crisp borders against the dark background.
colors:
  deep-night: "#151316"
  cloudburst-gray: "#444245"
  fog: "#8e8e8e"
  moonbeam-white: "#ffffff"
  lunar-dust: "#f4f2ee"
  ghostly-gray: "#b9b9b9"
  jade-glow: "#8ef5b5"
  forest-whisper: "#24574d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
    letterSpacing: 0.13px
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.5
    letterSpacing: -0.17px
  subheading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.5
    letterSpacing: -0.81px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -0.96px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 53px
    lineHeight: 1.2
    letterSpacing: -1.59px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -1.8px
spacing:
  cardRadius: 18.08px 0px 0px
  buttonRadius: 1440px
  elementGap: 8px
  sectionGap: 27px
components:
  primary-action-button:
    role: Filled Call to Action Button
  secondary-ghost-button:
    role: Outlined or Ghost Button
  text-link-button:
    role: Minimal Interactive Link
  dark-surface-card:
    role: Product content container
  informational-badge:
    role: Small, functional label
  navigation-link:
    role: Header Navigation Item
---

## Overview

**North Star:** Midnight Command Center – A focused, dark interface illuminated by a singular, bright green operational light.

Ordinal uses a deep-space productivity aesthetic: dark canvas, minimalist UI elements, and a single vibrant green highlight that punctuates critical information and calls to action. The design maintains order through a comfortable density, clear typographic hierarchy, and subtle surface variations rather than heavy shadows or complex gradients. The overall atmosphere feels calm and focused, with interaction points clearly highlighted by the brand's signature accent green. Components are light, using ghost states and crisp borders against the dark background.

### Do's

- Use Deep Night (#151316) for all primary page and large section backgrounds to maintain the dark theme.
- Highlight interactive elements and calls to action exclusively with Jade Glow (#8ef5b5) for maximum visual impact and brand recognition.
- Employ Moonbeam White (#ffffff) for all primary body text and main headings to ensure readability against dark backgrounds.
- Apply Inter font in weights 400 or 500 for general text and headlines, varying size and letter-spacing according to the type scale.
- Utilize the `buttons` radius of 1440px for all action buttons to create a consistent, soft, pill-like appearance.
- Maintain comfortable density with an `elementGap` of 8px and `sectionGap` of 27px for most content blocks.
- Use Inconsolata-Eyebrow for all badge text and subtle functional labels to distinguish them from primary content.

### Don'ts

- Avoid using multiple chromatic colors; Jade Glow (#8ef5b5) is the singular accent color.
- Do not introduce complex shadow systems; the design relies on subtle background shifts and borders for layering.
- Never use generic square buttons; all interactive buttons should leverage the pill-shaped 1440px border radius.
- Do not deviate from the Inter and Inconsolata-Eyebrow font families; maintain typographic consistency.
- Avoid extreme tight or loose letter-spacing; adhere to the defined letter-spacing values in the type scale for proportional text.
- Do not use dark gray or black text on Deep Night backgrounds as this does not meet AAA contrast requirements.
- Avoid using card backgrounds for transparent-by-default cards such as feature cards.

### Layout

The page typically follows a max-width contained layout at 1440px, centered on the screen. The hero section is full-bleed with a dark background, featuring a centered headline and central call-to-action buttons. Subsequent sections alternate between dark and slightly lighter dark bands, creating a subtle visual rhythm. Content is generally arranged in two-column layouts, often with text on one side and a product screenshot or relevant visual on the other, or in three-column grids for feature lists. Navigation is a sticky top bar, minimal and un-obtrusive. The overall density is comfortable, with ample breathing room between sections.

### Imagery

The visual language for imagery is primarily functional product screenshots, often contained within subtle dark surface cards or on a plain background. There are no full-bleed lifestyle images. Iconography is minimalist and outlined, using the brand's primary green for interactive states or as decorative elements. Logos of partners are monochrome white or light gray against the dark background. The imagery serves to explain functionality and build credibility rather than creating a decorative atmosphere, often text-dominant with visuals supplementing the content.
