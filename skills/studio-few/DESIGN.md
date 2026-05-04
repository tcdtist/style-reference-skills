---
version: alpha
name: Studio Few
description: Studio Few embodies a stark, monochromatic aesthetic focused on typography. Surfaces are minimalist, predominantly white, creating a gallery-like backdrop for type specimens. Interaction elements are sharp, high-contrast, and leverage black as a primary action color, emphasizing clarity and directness. The overall feel is one of precise, confident design, allowing the varied and often experimental typefaces to be the central visual event.
colors:
  canvas-white: "#ffffff"
  midnight-black: "#000000"
  subtle-gray: "#b7b7b7"
  anchor-gray: "#333333"
  faded-gray: "#858585"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.71
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.17px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  display-sm:
    fontFamily: "system-ui"
    fontSize: 115px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 158px
    lineHeight: 1
    letterSpacing: -2px
spacing:
  buttonRadius: 6px
  elementGap: 16px
  sectionGap: 64px
components:
  primary-filled-button:
    role: Main call-to-action button, indicating primary actions.
  navigation-link:
    role: Header navigation items and inline links.
  input-field:
    role: Text input areas for filtering or data entry.
  type-specimen-panel:
    role: Container for individual typeface demonstrations.
  ghost-button:
    role: Secondary action or trial options.
---

## Overview

**North Star:** Gallery of Type on White Canvas

Studio Few embodies a stark, monochromatic aesthetic focused on typography. Surfaces are minimalist, predominantly white, creating a gallery-like backdrop for type specimens. Interaction elements are sharp, high-contrast, and leverage black as a primary action color, emphasizing clarity and directness. The overall feel is one of precise, confident design, allowing the varied and often experimental typefaces to be the central visual event.

### Do's

- Prioritize high contrast using Midnight Black (#000000) and Canvas White (#ffffff) for all main content and interactive elements.
- Use SterlingVF for general UI text, body content, and navigation, varying weights for hierarchy.
- Reserve bold, high-impact display fonts like Formative, Voyager, and AnthroVF for showcasing type specimens and major headlines.
- Apply a 6px border radius consistently to all interactive buttons and links.
- Maintain generous horizontal padding of 24px around block-level interactive elements like buttons.
- Employ Subtle Gray (#b7b7b7) for secondary information, muted controls, and dividers to introduce subtle visual breaks.
- Ensure letter-spacing is precisely managed for display fonts, using values like -0.0200em at large sizes to maintain impact.

### Don'ts

- Avoid introducing chromatic colors; maintain a strictly monochromatic palette featuring only black, white, and various grays.
- Do not use generic system fonts; always specify custom fonts for headlines and body text.
- Never use soft shadows or complex gradients; rely on flat colors, crisp lines, and high contrast for visual hierarchy.
- Do not vary border radius across interactive elements; maintain a consistent 6px for buttons and links.
- Avoid dense or cluttered layouts; leverage ample whitespace to give design elements room to breathe.
- Do not use letter-spacing as a broad stylistic choice; apply it specifically to display typography for visual impact.
- Do not use Canvas White (#ffffff) as the primary action background; Midnight Black (#000000) is reserved for this role.

### Layout

The page primarily uses a full-bleed layout, particularly for hero sections and areas showcasing type specimens. Content is horizontally centered within a logical reading width when necessary, though explicit max-width is frequently overridden by full-width content blocks. The hero section features large, centered headlines paired with abstract graphic arrangements illustrating type. Sections often flow seamlessly into one another, with subtle visual breaks created by the shift in content or imagery alignment rather than strong dividers. Type specimen sections employ implicit grids for presenting individual fonts, using consistent vertical padding for rhythm. Navigation is a minimal top-bar, sticky header at the top right, providing unobtrusive access to key areas. The overall density is comfortable, allowing elements breathing room against the predominantly white canvas.

### Imagery

The visual language is characterized by minimalist, product-focused imagery. This primarily consists of abstract 3D renders or high-quality product mockups of screens showcasing typefaces. Imagery is typically monochrome or desaturated, often appearing on a stark white or light gray background, highlighting the typography itself as the primary visual. The treatment is full-bleed or contained in a way that emphasizes crisp edges and clean compositions. Icons are simple, outlined, and monochromatic, with a thin stroke weight, serving a functional rather than decorative role. Imagery acts as a sophisticated backdrop or direct showcase for the product (fonts), maintaining a strong sense of focus and eliminating distraction, making the site very text-dominant in its information display.
