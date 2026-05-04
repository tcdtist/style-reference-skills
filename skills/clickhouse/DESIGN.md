---
version: alpha
name: ClickHouse
description: ClickHouse presents as a high-performance console, leveraging a deep, near-black backdrop and stark white typography for a focused, technical aesthetic. Signature is the 'Chartreuse Zap' yellow-green accent, appearing on interactive elements and key brand highlights, creating a vivid contrast that directs attention without overwhelming the UI. Rounded forms are used sparingly for interactive elements, while container cards maintain sharp corners, building a hierarchy of interaction against static information. The visual atmosphere is one of serious capability and precise feedback, like a terminal display offering critical insights.
colors:
  midnight-oil: "#151515"
  smokey-carbon: "#1f1f1c"
  deep-graphite: "#282828"
  iron-oxide: "#343434"
  cool-stone: "#3a3a3a"
  muted-ash: "#414141"
  shadow-white: "#a0a0a0"
  cloud-white: "#ffffff"
  highlight-silver: "#dfdfdf"
  silken-whisper: "#bcbcbb"
  border-light: "#e5e7eb"
  chartreuse-zap: "#faff69"
  veridian-stroke: "#4f5100"
  emerald-glint: "#fbff46"
  alert-red: "#ff7575"
  halo-gradient: "#faff69"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.1px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.1px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: 0.1px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: 0.1px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: 0.1px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.17
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: 0.1px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1
    letterSpacing: 0.1px
spacing:
  cardRadius: 8px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 40px
components:
  use-case-feature-cards:
    role: 
  faq-accordion:
    role: 
  install-code-block-cta:
    role: 
  primary-action-button:
    role: Main call to action
  secondary-outline-button:
    role: Alternative actions
  hero-cta-button:
    role: Prominent hero section action
  plain-text-button:
    role: Inline actions or minimal interaction
  round-icon-button:
    role: Small, interactive icons
  monochrome-card:
    role: Content grouping, less emphasis
  faq-accordion-item:
    role: Expandable content
  navigation-link:
    role: Primary navigation elements
---

## Overview

**North Star:** Terminal Console with Chartreuse Zap — a focused dark UI with high-contrast, almost neon, interactive highlights.

ClickHouse presents as a high-performance console, leveraging a deep, near-black backdrop and stark white typography for a focused, technical aesthetic. Signature is the 'Chartreuse Zap' yellow-green accent, appearing on interactive elements and key brand highlights, creating a vivid contrast that directs attention without overwhelming the UI. Rounded forms are used sparingly for interactive elements, while container cards maintain sharp corners, building a hierarchy of interaction against static information. The visual atmosphere is one of serious capability and precise feedback, like a terminal display offering critical insights.

### Do's

- Do use Midnight Oil (#151515) as the default page background to maintain the dark, focused aesthetic.
- Do exclusively use Chartreuse Zap (#faff69) for primary call-to-action buttons and active navigation indicators.
- Do apply a 9999px radius to all interactive buttons and tags for a consistent 'pill' shape, indicating interactivity.
- Do use Inter for all body text and secondary headings, ensuring an -0.01em letter-spacing for large text (72px, 96px).
- Do reserve Basier 600 for prominent headlines (20px, 24px, 36px) to give them visual weight and distinctiveness without overt decoration.
- Do differentiate static content cards with an 8px border-radius and a subtle inset shadow from the background, using Smokey Carbon (#1f1f1c) as their background.
- Do use Inconsolata 600 at 16px for all code snippets and command-line instructions, wrapped in a Smokey Carbon (#1f1f1c) background.

### Don'ts

- Don't use any other color besides Chartreuse Zap (#faff69) for primary interactive elements; it dilutes the brand's primary accent.
- Don't use pronounced drop shadows for elevation; rely on subtle inset shadows or shifts in background color (e.g., from Midnight Oil to Smokey Carbon) to indicate depth.
- Don't clutter the layout with excessive imagery; when images are used, ensure they are high-contrast and relevant to the technical context.
- Don't introduce additional font families; restrict typography to Inter, Basier, and Inconsolata to maintain type harmony.
- Don't use large, rounded corners on static content cards; keep them at 8px to distinguish them from the pill-shaped buttons and ensure a structured feel.
- Don't use generic or abstract background patterns; stick to solid dark colors or subtle gradients like Halo Gradient where visual emphasis is needed.

### Layout

The site uses a full-bleed page model with a consistent max-width content container within sections, centered horizontally. The hero section is full-bleed Midnight Oil with a large, centered headline and subtext, followed by two prominent CTA buttons. Section rhythm is primarily defined by consistent vertical spacing (sectionGap '40px') and a subtle alternation of background shades, though the base is always dark. Content arrangement frequently uses 2 to 4-column card grids for features and use cases. Text and visual elements (like icons or code blocks) are often aligned centrally or in clear, symmetrical pairs. The navigation is a sticky top bar with a left-aligned logo and right-aligned links and buttons, all against the dark primary background. The layout prioritizes clear information hierarchy and scannability within a structured, dark environment.

### Imagery

The site uses a mix of icons and occasional abstract graphics. Icons are primarily outlined, thin-stroke, and monocolor (either Cloud White #ffffff or Chartreuse Zap #faff69), reinforcing the technical, precise aesthetic. There's a minimal use of product screenshots, favoring abstract, data-centric visualizations if present, often with a green or yellow glow consistent with the brand accent color. Photography is notably absent. The visual language focuses on UI cleanliness and symbolic representation over literal imagery, making the content and interactive elements the primary visual information. Density is image-light, text-dominant.
