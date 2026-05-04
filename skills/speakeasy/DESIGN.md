---
version: alpha
name: Speakeasy
description: Speakeasy employs a stark, high-contrast digital blueprint aesthetic. It combines bold, ultra-thin headlines that command attention through restraint, with compact, functional body text. Most elements are monochrome, set against clean white surfaces, fostering a sense of precision and control. A distinctive rainbow gradient acts as a vibrant brand identifier, appearing strategically at page edges and as a subtle accent. User interface elements are crisp, with soft rounded corners on interactive components and subtle, functional shadows that provide hierarchy without visual weight.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  ash-gray: "#dbdbdb"
  charcoal: "#242424"
  slate: "#545454"
  silver-thread: "#969696"
  ghost-gray: "#f1f1f1"
  deep-space: "#333333"
  rainbow-horizon: "#330f1f"
typography:
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.75
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.75
    letterSpacing: 0.003px
  heading:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.2
    letterSpacing: -0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 67px
    lineHeight: 1.3
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 140px
    lineHeight: 1
    letterSpacing: -0.04px
spacing:
  cardRadius: 8px
  buttonRadius: 1.67772e+07px
  elementGap: 6px
  sectionGap: 80px
components:
  primary-filled-button:
    role: Calls to action, form submissions, primary interactions.
  ghost-button:
    role: Secondary actions, navigation links, less prominent calls to action.
  badge:
    role: Categorization, status indicators, small labels.
  content-card:
    role: To encapsulate related information, features, or testimonials.
  nav-item:
    role: Top navigation links.
  input-field:
    role: User entry for forms.
  product-feature-card:
    role: Showcasing individual product features with an icon and description.
---

## Overview

**North Star:** Monochrome Blueprint, Rainbow Spectrum. A highly structured and functional interface with a vibrant, linear brand accent.

Speakeasy employs a stark, high-contrast digital blueprint aesthetic. It combines bold, ultra-thin headlines that command attention through restraint, with compact, functional body text. Most elements are monochrome, set against clean white surfaces, fostering a sense of precision and control. A distinctive rainbow gradient acts as a vibrant brand identifier, appearing strategically at page edges and as a subtle accent. User interface elements are crisp, with soft rounded corners on interactive components and subtle, functional shadows that provide hierarchy without visual weight.

### Do's

- Use Midnight Ink (#000000) for all primary body text and major headlines, ensuring AAA contrast.
- Apply Canvas White (#ffffff) as the default background for all primary content sections and cards.
- Implement the Rainbow Horizon linear gradient only as a top-border or divider for significant sections or the main navigation, reserving its unique presence.
- Set display headlines (tobias font family) with weight 100 and negative letter-spacing for a distinct, airy feel.
- Employ Ash Gray (#dbdbdb) for all hairline borders, dividers, and secondary component outlines, maintaining a clean, understated separation.
- Utilize a full pill radius (1.67772e+07px) for primary and ghost buttons to convey a modern, approachable interactive element.
- Maintain compact density with an elementGap of 6px and cardPadding of 24px to keep information concise yet readable.

### Don'ts

- Do not use saturated colors for large background areas or extensive text; restrict them to small, functional accents like icons or status indicators.
- Avoid applying heavy drop shadows; elevation should be subtle, using rgba(0, 0, 0, 0.1) 0px 1px 3px 0px for hierarchy, not depth.
- Do not introduce new font families; the current selection (ui-sans-serif, diatype, tobias, speakeasyAscii) defines the brand's typographic voice.
- Never compromise the contrast of text against backgrounds; prioritize readability first, especially for functional UI elements.
- Resist using bold (700) weights for main headings; the system's signature is achieved via tobias 100 weight.
- Do not use distinct background colors for action buttons other than Midnight Ink for filled or transparent for ghost; avoid chromatic button fills.
- Avoid wide page layouts; content should generally be contained within a maximum width section, even if the canvas is full-bleed.

### Layout

The page primarily uses a series of vertically stacked, full-width sections. Some sections feature a max-width centered content container, while others are truly full-bleed. The hero section is characterized by a prominent, ultra-light headline centered or left-aligned against a clean white background, often accompanied by a large, minimalist graphic. Section rhythm is created through consistent vertical spacing (80px sectionGap) and alternating background tones (Canvas White and Ghost Gray). Content frequently arranges into two-column layouts featuring text on one side and a visual element or card grid on the other. Navigation is a sticky top bar, lightweight and minimal, with logical dropdowns indicated by chevrons, and accented by the Rainbow Horizon gradient.

### Imagery

This system primarily uses abstract, stylized graphic elements and minimal product-focused visuals. The dominant visual is a 'digital hand' composed of ASCII-like characters, suggesting AI and technology in a minimalist, almost ethereal manner. Imagery is almost always monochromatic or line-based, using a 'ghosted' or 'wireframe' aesthetic. When product illustrations appear, they are dimensional but simplified, showing layered components (e.g., stacked platforms) with soft, muted pastel tones. Icons are consistently outlined, with a moderate stroke weight, and may use a single accent color from the small semantic palette (like green or orange) for contextual meaning. The overall density of imagery is low, allowing text to dominate.
