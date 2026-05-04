---
version: alpha
name: Factory.ai
description: Factory.ai embraces a 'technical brutalism meets digital precision' aesthetic, prioritizing informational clarity and directness. The near-monochromatic palette, dominated by light grays and deep charcoals, provides a stark, high-contrast backdrop for technical content. A single vivid orange accent color is deployed sparingly as a functional indicator, highlighting interactive elements and key information without visual noise. The strong typographic voice, characterized by precise letter-spacing and a monospace variant for code, reinforces the structured, engineering-focused identity.
colors:
  factory-black: "#020202"
  factory-light-gray: "#eeeeee"
  faded-silver: "#fafafa"
  cool-gray: "#b8b3b0"
  graphite: "#3d3a39"
  ash-gray: "#a49d9a"
  code-orange: "#ef6f2"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.24px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -2.3px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -2.88px
spacing:
  cardRadius: 6px
  buttonRadius: 4px
  elementGap: 4px
  sectionGap: 72px
components:
  cli-install-block:
    role: 
  news-article-cards:
    role: 
  product-section-nav:
    role: 
  text-link:
    role: Navigation, inline links, 'Learn More' buttons
  navigation-link:
    role: Top navigation menu items
  ghost-button:
    role: Secondary actions, grouped options (macOS / Linux)
  outlined-button:
    role: Download buttons, secondary calls to action
  filled-button-light:
    role: Download buttons, primary calls to action
  filled-button-dark:
    role: Download buttons, primary calls to action (alternative)
  list-item-card:
    role: Content blocks in feature sections
  elevated-content-card:
    role: Featured content blocks, forms, interactive elements
  code-input-block:
    role: CLI instruction display, interactive code examples
  new-badge:
    role: Highlights new features or content
---

## Overview

**North Star:** Architectural blueprint on white marble. Lines are crisp, colors are limited, and every element serves a clear, functional purpose.

Factory.ai embraces a 'technical brutalism meets digital precision' aesthetic, prioritizing informational clarity and directness. The near-monochromatic palette, dominated by light grays and deep charcoals, provides a stark, high-contrast backdrop for technical content. A single vivid orange accent color is deployed sparingly as a functional indicator, highlighting interactive elements and key information without visual noise. The strong typographic voice, characterized by precise letter-spacing and a monospace variant for code, reinforces the structured, engineering-focused identity.

### Do's

- Prioritize Factory Black (#020202) for primary text and Factory Light Gray (#eeeeee) for background, ensuring AAA contrast.
- Apply Geist font consistently for all UI text, utilizing negative letter-spacing for large headlines (e.g., -0.0480em at 60px) to achieve a condensed, precise appearance.
- Use Geist Mono for all code snippets and CLI instructions at weights 400 and sizes 12-18px for clear distinction.
- Implement Cool Gray (#b8b3b0) for subtle borders and dividers to maintain visual structure without heavy lines.
- Reserve Code Orange (#ef6f2e) strictly for highlighting functional elements like 'NEW' badges and active indicators.
- Maintain a default border radius of 4px for buttons and form elements, extending to 6px for elevated cards.
- Ensure consistent vertical spacing of 24px and horizontal elements gaps of 12px or 8px using the base 4px unit.

### Don'ts

- Avoid using chromatic colors beyond Code Orange (#ef6f2e) to maintain the stark, technical aesthetic.
- Do not introduce shadows or complex gradients; rely on color and typography for hierarchy and depth.
- Do not use generic system fonts; always specify Geist or Geist Mono for design consistency.
- Avoid excessive padding or large border radii; the design favors a compressed, precise feel.
- Do not use underlines for links unless on hover, rely on color and context (Factory Black on light backgrounds).
- Avoid arbitrary text styling (bolding, italics); rely on the established type scale (Geist, 400 weight) for hierarchy.
- Do not deviate from the specified negative letter-spacing values, especially for headlines, as it is a core characteristic of the brand's typography.

### Layout

The page structure employs a full-width layout with a primary content area constrained by a clear maximum width, centered on the screen. The hero section is a split two-column design: text-dominant on the left with a headline and descriptive copy, and abstract/UI visuals on the right, punctuated by sparse dot patterns. Sections generally follow a consistent vertical rhythm, often alternating between text-heavy content and content paired with product screenshots or conceptual graphics, typically in a two-column arrangement (text left, image right, or vice versa). There are occasional three-column card grids for presenting features or articles. The navigation is a persistent top bar, clean and functional, with a clear separation of branding and menu items. The layout emphasizes clarity and content organization, feeling spacious yet structured.

### Imagery

The visual language for imagery is primarily functional and technical, leaning heavily on abstract conceptual graphics, UI screenshots, and code blocks. Product screenshots are contained within precise, slightly rounded frames, often featuring stylized UI elements rather than raw interfaces. Graphics are typically monochromatic or use a limited palette, often employing dotted patterns (like the 'grid' in the hero section) and stark lines. There's an absence of photography or human elements, focusing instead on the tools and concepts of software development. Imagery serves an explanatory role, illustrating functionality or abstracting complex ideas, with a high density relative to other pure UI sites.
