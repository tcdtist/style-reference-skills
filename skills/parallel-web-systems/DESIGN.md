---
version: alpha
name: Parallel Web Systems
description: This design system presents as a highly structured, data-driven interface, echoing the precision required in AI systems. Its palette is almost entirely achromatic, with a deliberate and minimal use of vivid orange and moderate blue to highlight interactive elements and key information. The signature move is the pairing of a classic humanist sans-serif with a mono-spaced font, creating an aesthetic that feels both approachable and technically rigorous. Underlying the visual clarity are subtle shadows and crisp borders, conveying a sense of engineered robustness.
colors:
  cloud-white: "#ffffff"
  smoke-gray: "#f6f6f6"
  whisper-gray: "#eeeeee"
  light-concrete: "#e5e5e5"
  medium-ash: "#858483"
  charcoal-black: "#181818"
  obsidian: "#000000"
  ignite-orange: "#fb631b"
  sky-blueprint: "#0d6ea5"
  ocean-tint: "#6fa2e8"
  sea-mist: "#8fb6cc"
  success-green: "#69be78"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.11
    letterSpacing: 0.26px
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.11
    letterSpacing: 0.36px
spacing:
  buttonRadius: 4px
  elementGap: 8px
  sectionGap: 80px
components:
  button-group:
    role: 
  feature-cards-grid:
    role: 
  announcement-banner-status-bar:
    role: 
  secondary-ghost-button:
    role: Interactive element
  neutral-button:
    role: Interactive element
  navigation-button:
    role: Interactive element
  elevated-information-card:
    role: Information container
  ghost-content-card:
    role: Information container
---

## Overview

**North Star:** Architectural Blueprint; Grid-based precision with sparse, functional color accents.

This design system presents as a highly structured, data-driven interface, echoing the precision required in AI systems. Its palette is almost entirely achromatic, with a deliberate and minimal use of vivid orange and moderate blue to highlight interactive elements and key information. The signature move is the pairing of a classic humanist sans-serif with a mono-spaced font, creating an aesthetic that feels both approachable and technically rigorous. Underlying the visual clarity are subtle shadows and crisp borders, conveying a sense of engineered robustness.

### Do's

- Prioritize `Charcoal Black (#181818)` for all primary headings and body text, ensuring high readability against light backgrounds.
- Use `Ignite Orange (#fb631b)` exclusively for primary calls-to-action to maximize visual impact and direct user attention.
- Apply `Light Concrete (#e5e5e5)` for all non-functional borders and dividers to maintain a discreet, structured appearance.
- Maintain `8px` as the base unit for all spacing, including `cardPadding`, `elementGap`, and `sectionGap` multiples, to ensure rhythm and consistency.
- Employ the `ftSystemMono` font for all technical data, code snippets, and UI toggles like 'Human/Machine' to reinforce the platform's technical nature.
- Utilize `borderRadius: 4px` for primary buttons and elevated cards, and `borderRadius: 2px` for smaller controls and elements for a consistent, subtle softening of edges.

### Don'ts

- Do not introduce new saturated colors outside of `Ignite Orange (#fb631b)` and `Sky Blueprint (#0d6ea5)` to preserve the system's focused chromatic palette.
- Avoid large, soft shadows; stick to the specified subtle box-shadows `rgba(0, 0, 0, 0.02) 0px 13px 8px 0px` for elevation, or thin borders for definition.
- Do not deviate from the `gerstnerProgramm` and `ftSystemMono` font families, as their interplay is central to the brand's identity.
- Refrain from using `Sky Blueprint (#0d6ea5)` for primary calls-to-action; its role is for secondary interactive elements and links.
- Do not use `borderRadius: 0px` on interactive elements unless it is specifically a `Ghost Button` or part of a component designed for a stark, flat look.
- Avoid dense sections of text; use `Medium Ash (#858483)` for secondary content and ensure adequate line-heights (e.g., 1.5 for body text) to maintain readability within the compact density.

### Layout

The page adheres to a max-width of `1600px`, centrally aligned, creating a contained and structured feel. The hero section is a full-width blue banner containing animated, code-like graphics, with a centered headline stack. Content sections typically alternate between a background of `Cloud White` and a subtle `Whisper Gray`, providing a clear visual rhythm. Information is presented in organized blocks, often with left-aligned text and accompanying elements, or in distinct feature grids. Dense content blocks are offset by generous vertical spacing of `80px` between sections. The navigation is a fixed top bar, housing utilitarian links and distinctly colored CTA buttons.

### Imagery

This design primarily uses abstract graphics and iconography. The hero section features an animated code-like graphic of small randomized characters on a blue background, conveying a sense of data processing and complex systems. Brand logos are flat, monochrome where possible, and minimally treated, serving a functional rather than decorative role. Photography is absent; visuals are either abstract representations of data/code or clean UI elements. Density is moderate, with images/graphics serving as section dividers or thematic accents rather than illustrative content.
