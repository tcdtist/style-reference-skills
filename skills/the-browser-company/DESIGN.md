---
version: alpha
name: The Browser Company
description: The Browser Company's design system evokes a classic, literary feel through its sparse composition and refined typography. A warm, off-white canvas provides a tranquil backdrop for minimal, precisely placed text elements. The visual identity relies heavily on the nuanced interplay of diverse typefaces, with a primary blue accent reserved for subtle interactive cues.
colors:
  parchment: "#eeeee7"
  midnight-ink: "#000000"
  internet-blue: "#0c50ff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: 1.5px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
spacing:
  buttonRadius: 0px
  elementGap: 12px
  sectionGap: 40px
components:
  ghost-button:
    role: Interactive element (e.g., navigation links, secondary actions)
  header-branding:
    role: Primary brand identity display
---

## Overview

**North Star:** Vintage literary journal

The Browser Company's design system evokes a classic, literary feel through its sparse composition and refined typography. A warm, off-white canvas provides a tranquil backdrop for minimal, precisely placed text elements. The visual identity relies heavily on the nuanced interplay of diverse typefaces, with a primary blue accent reserved for subtle interactive cues.

### Do's

- Prioritize generous vertical spacing, using values like 40px and 50px for section and large element separation.
- Use EB Garamond at 28px for primary headlines to convey a classic and composed tone.
- Apply ABCDiatypeMono 14px with 0.15em letter-spacing for all navigation and functional labels, maintaining distinct visual separation from body text.
- Employ Parchment (#eeeee7) as the dominant background color for most page areas and surfaces.
- Use Midnight Ink (#000000) for all primary text, borders, and iconography.
- Reserve Internet Blue (#0c50ff) for subtle accentuation of interactive elements or as a background for specific content blocks.
- Maintain a consistent 0px border-radius for all interactive and structural elements, favoring sharp, defined edges.

### Don'ts

- Avoid using multiple colors for text; primary text should consistently be Midnight Ink (#000000).
- Do not introduce heavy shadows or overt elevation; rely on spacing and typography for hierarchy.
- Do not deviate from the specified serif (EB Garamond, IvarText) and monospace (ABCDiatypeMono) font families; avoid sans-serif fonts.
- Do not apply large, rounded corners to any components; maintain the consistent 0px radius.
- Avoid dense information blocks; instead, use ample whitespace and conservative element spacing.
- Do not use Internet Blue (#0c50ff) as a primary button background; it is an accent, not a filled CTA.
- Do not use default browser link colors; all links should conform to Midnight Ink (#000000) with ABCDiatypeMono typography.

### Layout

The page implements a max-width contained layout with centered content. The hero area features a centered branding logo and headline. Sections below maintain consistent vertical spacing, often showcasing a centered stack of textual content and navigation. The overall density is spacious, providing significant breathing room between blocks of information. Navigation is minimal, presented as inline links or a simple ghost button structure.

### Imagery

The site favors an 'icons-only' approach for symbolic elements like browser logos, rendered with a clean, outlined style in Midnight Ink. No photography or complex illustrations are present; the visual focus is entirely on typography and minimal graphic elements. Imagery is sparse, serving primarily as identifiers rather than decorative or explanatory content.
