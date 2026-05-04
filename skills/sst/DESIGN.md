---
version: alpha
name: SST
description: This design system presents complex technical configurations with a light, spacious, and highly legible aesthetic. The dominant use of a nearly white background provides a clean canvas, while a nuanced palette of near-gray and muted violet shades for text and interactive elements grounds the interface without heavy contrasts. A signature element is the code block's precise syntax highlighting, which uses a range of vivid and moderate hues to structure information within a constrained, elegant form.
colors:
  page-white: "#ffffff"
  border-ash: "#e8e8f2"
  text-graphite: "#403f53"
  text-slate: "#767682"
  text-fog: "#a8a8b0"
  text-jet: "#111111"
  primary-violet: "#303055"
  code-rose: "#984e4d"
  code-magenta: "#8844ae"
  code-sky: "#5196b3"
  code-indigo: "#3b61b0"
  code-teal: "#096e72"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.78
    letterSpacing: 0.016px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.056px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.96px
spacing:
  cardRadius: 8px
  buttonRadius: 4px
  elementGap: 3-16px
  sectionGap: 64px
components:
  code-editor-card:
    role: 
  npm-install-cta-with-badge:
    role: 
  nav-button-group:
    role: 
  primary-heading:
    role: Hero section titles
  nav-button-default:
    role: Secondary navigation and utility buttons
  nav-button-solitary:
    role: Standalone secondary actions or filters in header.
  text-link-button:
    role: Inline textual actions
  code-editor-card:
    role: Display of structured code examples
  npm-install-button:
    role: Call to action for installation
---

## Overview

**North Star:** Config File on Paper — An architects precise blueprint on pristine white, using code as a primary visual element.

This design system presents complex technical configurations with a light, spacious, and highly legible aesthetic. The dominant use of a nearly white background provides a clean canvas, while a nuanced palette of near-gray and muted violet shades for text and interactive elements grounds the interface without heavy contrasts. A signature element is the code block's precise syntax highlighting, which uses a range of vivid and moderate hues to structure information within a constrained, elegant form.

### Do's

- Prioritize 'Primary Violet' (#303055) for all interactive clickable elements to maintain brand identity.
- Use 'Page White' (#ffffff) as the primary background for all page sections and elevated components.
- Apply 'Border Ash' (#e8e8f2) for subtle borders on all secondary buttons and input fields to define interactive regions subtly.
- Ensure headings use 'Text Jet' (#111111) to establish clear hierarchy and strong visual anchors.
- Employ IBM Plex Mono for all code displays, capitalizing on its fixed-width and precise letter-spacing of -0.021em.
- Maintain a default border-radius of 4px for all buttons and interactive elements, and 8px for cards and containers.
- Utilize the full range of custom colors for syntax highlighting within code blocks to ensure legibility and structural clarity.

### Don'ts

- Avoid using highly saturated, non-brand colors outside of code syntax highlighting.
- Do not use letter-spacing values less than -0.021em or greater than 0.056em for any text element.
- Do not introduce strong, intrusive shadows; rely on 'Page White' backgrounds on 'Border Ash' for subtle elevation.
- Avoid mixed-case headings; all primary headings are sentence case with a strong weight.
- Do not use large images or prominent graphical elements that disrupt the clean, text-heavy layout.
- Never use `background-color: transparent` for primary call-to-action buttons; solid backgrounds are preferred for prominence.

### Layout

The page maintains a centered, max-width layout, relying on ample white space. The hero section prominently features a split layout with a large, bold 'IBM Plex Mono' headline on the right and a 'Code Editor Card' on the left, demonstrating the product's core functionality upfront. Content generally follows a vertical stacking of sections, with consistent padding. Navigation is handled by a standard top bar with right-aligned utility links and branding on the left. The overall density is comfortable, prioritizing readability and systematic information presentation.

### Imagery

The site primarily uses code snippets and icons as its visual language. Photography is absent. Illustrations are minimal and functional, focused on conveying technical concepts rather than decorative flourishes. The code snippets, particularly the 'Code Editor Card', are themselves a central visual element, colorized using the accent palette for enhanced readability and visual interest. Icons are either monocolor (Text Slate, Primary Violet) or outlined, maintaining a lightweight and functional aesthetic. Visuals serve an explanatory role, illustrating product functionality directly and minimally, rather than creating atmosphere.
