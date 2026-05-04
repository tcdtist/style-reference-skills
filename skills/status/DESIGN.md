---
version: alpha
name: Status
description: Status employs a dark, crypto-native aesthetic, evoking a secure, high-tech environment. The primary interface is a deep, near-black canvas, contrasted by crisp white typography for prominence and readability. UI elements often feature soft, subtle borders and a deliberate avoidance of strong shadows, lending a flat, yet layered, appearance. Vivid accent colors of purple and blue are reserved for interactive elements and brand highlights, creating clear focal points against the monochromatic base.
colors:
  deep-space: "#09101c"
  ash: "#1b273d"
  cloud-white: "#ffffff"
  off-white: "#dce0e5"
  light-mist: "#f0f2f5"
  slate-fabric: "#3a4049"
  quiet-fog: "#647084"
  charcoal-black: "#000000"
  obsidian-grey: "#131d2f"
  steel-grey: "#a1abbd"
  violet-plasma: "#7140fd"
  lapis-glow: "#2a4af5"
  ocean-tint: "#2a799b"
  golden-rod: "#f6b03c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.45
    letterSpacing: -0.11px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.42
    letterSpacing: -0.38px
  heading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.19
    letterSpacing: -0.43px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.06
    letterSpacing: -1.02px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 0.95
    letterSpacing: -1.85px
spacing:
  cardRadius: 20px
  buttonRadius: 12px
  elementGap: 4px
  sectionGap: 40px
components:
  navigation-link:
    role: Primary navigation item in the header.
  ghost-button:
    role: Secondary action button, typically for 'Download' or 'Learn More' actions.
  filled-action-button-light:
    role: Primary calls to action on the dark hero, contrasting with the dark background.
  branded-action-button:
    role: Main call to action, utilizing the brand's vibrant blue.
  product-feature-card:
    role: Displays key product features or benefits in a visually distinct manner.
  light-content-card:
    role: General content container for information blocks within light sections.
  hero-message-card:
    role: Informational overlay or banner within the dark hero section.
  footer-navigation-item:
    role: Links within the footer for secondary navigation or legal information.
---

## Overview

**North Star:** Midnight Command Center: a dark interface on deep canvas, with precise white type and select vibrant accents.

Status employs a dark, crypto-native aesthetic, evoking a secure, high-tech environment. The primary interface is a deep, near-black canvas, contrasted by crisp white typography for prominence and readability. UI elements often feature soft, subtle borders and a deliberate avoidance of strong shadows, lending a flat, yet layered, appearance. Vivid accent colors of purple and blue are reserved for interactive elements and brand highlights, creating clear focal points against the monochromatic base.

### Do's

- Prioritize Deep Space (#09101c) for page backgrounds and Cloud White (#ffffff) for primary text and light surface areas to maintain the high-contrast dark theme.
- Apply Lapis Glow (#2a4af5) specifically for primary action buttons and highlight states to ensure immediate visual recognition of interactivity.
- Use Inter at 88px weight 700 with a letter spacing of -0.0210em for large, impactful display headings (display role).
- Employ a base border radius of 20px for cards and 12px for primary buttons and interactive elements, favoring slightly rounded corners over sharp edges.
- Maintain a clear functional distinction between text colors: Cloud White (#ffffff) for primary text, Quiet Fog (#647084) for secondary text, and Violet Plasma (#7140fd) for critical links or highlighted information.
- Utilize the subtle shadow rgba(9, 16, 28, 0.08) 0px 4px 20px 0px exclusively for elevated Product Feature Cards to signal a distinct layer of content.
- Ensure horizontal and vertical spacing between major sections adhere to 40px, while internal component spacing uses a smaller harmonious increment from the 4px base unit.

### Don'ts

- Avoid using highly saturated colors for large background areas or extensive text blocks; these are reserved for accents and interactive elements.
- Do not introduce heavy, complex shadows or excessive gradients for general UI elements, as the design emphasizes a flat and clean aesthetic.
- Do not deviate from the Inter typeface; it is the sole font for all typographic needs.
- Do not create buttons with hard, unrounded corners; all interactive elements should adhere to the established radius tokens.
- Avoid using multiple foreground colors within a single text block unless for specific, semantic highlighting such as links or status updates.
- Do not use dark text on dark backgrounds; ensure sufficient contrast by always pairing Cloud White (#ffffff) or similar light colors with Deep Space (#09101c) and other dark neutrals.
- Do not apply the main card shadow to anything other than `Product Feature Card` and similar elevated content panels.

### Layout

The page primarily uses a max-width contained model of 1224px, centered on the screen. The hero section is full-bleed and dark, featuring a large, centered headline and a split text-left/image-right arrangement for the primary call to action with device mockups. Subsequent sections alternate between the dark Deep Space canvas and lighter Light Mist or Cloud White backgrounds, creating a clear visual rhythm. Content is generally arranged in a two-column text-left/image-right or vertical stack pattern with generous vertical spacing (40px) between major content blocks. Feature sections often employ a 3-column card grid. The navigation is a sticky top bar, minimal and icon-driven, with text links only for primary routes.

### Imagery

The imagery strategy mixes product screenshots, abstract gradient forms, and stylized vector illustrations. Product screenshots are contained within device mockups (laptops, phones) and depicted with bright, high-key interfaces against the dark site background, directly showcasing functionality. Abstract gradient shapes serve as background elements or atmospheric flourishes, using the Spectrum Burst gradient for vibrant, dynamic effects. Icons are primarily outlined or subtly filled using brand and accent colors, appearing frequently in feature sections. The overall density of imagery is balanced, with large hero visuals giving way to more text-dominant sections punctuated by smaller illustrative icons and product views. Photography is absent.
