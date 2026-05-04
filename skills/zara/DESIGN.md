---
version: alpha
name: Zara
description: Zara's interface projects an unyielding, high-fashion minimalism through a stark monochrome palette and precise typography. The visual brand is built on a high-contrast black-on-white foundation, creating a sophisticated backdrop where product photography becomes the primary source of color and texture. An absence of soft edges or expressive spacing reinforces a refined, almost austere aesthetic.
colors:
  pitch-black: "#000000"
  luminous-white: "#ffffff"
  subtle-gray: "#757575"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
spacing:
  elementGap: 16px
  sectionGap: 48px
components:
  location-language-selector-form:
    role: 
  button-group-primary-ghost:
    role: 
  product-card:
    role: 
  ghost-link-button:
    role: Secondary interactive elements within text (e.g., 'haz click aquí')
  default-input-field:
    role: User input for forms (e.g., 'LOCATION', 'LANGUAGE')
  transparent-input-field:
    role: Secondary input fields or those within larger interactive components
  location-language-dropdown:
    role: Selector for locale-specific options
---

## Overview

**North Star:** High-fashion starkness on white marble. Unyielding contrast and precise lines on a luminous white canvas.

Zara's interface projects an unyielding, high-fashion minimalism through a stark monochrome palette and precise typography. The visual brand is built on a high-contrast black-on-white foundation, creating a sophisticated backdrop where product photography becomes the primary source of color and texture. An absence of soft edges or expressive spacing reinforces a refined, almost austere aesthetic.

### Do's

- Do use #000000 (Pitch Black) for all primary text and interactive element borders.
- Do use #ffffff (Luminous White) for all page and primary component backgrounds.
- Do maintain 0px border-radius for all elements, including buttons and input fields.
- Do apply Helvetica Now Text (or a suitable substitute like Helvetica Neue or Arial) for all typographic elements.
- Do use a consistent base spacing unit of 4px for fine-grained adjustments, and multiples for larger gaps (e.g., 12px, 16px, 20px, 32px, 48px).
- Do limit text colors to Pitch Black (#000000) for primary content and Subtle Gray (#757575) for secondary details.

### Don'ts

- Don't introduce any color outside of the defined monochrome palette of Pitch Black, Luminous White, and Subtle Gray.
- Don't use any rounded corners or soft edges on UI elements; maintain sharp, crisp rectangular forms.
- Don't use drop shadows or complex elevation effects; depth is created through direct contrast and layering.
- Don't apply padding to the top, bottom, or left of input fields listed under 'Default Input Field' or 'Location/Language Dropdown' to maintain precise alignment.
- Don't vary font weights significantly; adhere strictly to 300 and 400 for Helvetica Now Text.
- Don't use decorative flourishes or non-essential graphical elements; the design emphasizes functional minimalism.

### Layout

The page uses a maximum-width contained layout, with content (like the form) aligned to the left against an expansive white background. The hero section employs a split-screen approach, with a functional form on the left and a large, full-bleed photograph on the right. There are no alternating background bands; the entire canvas is Luminous White. Content arrangement is primarily vertical stacking for forms, paired with dominant, large-format imagery, creating a sense of spaciousness and clear hierarchy. Navigation appears minimal, implied rather than explicitly detailed in the provided view, with a prominent brand logo at the top-left.

### Imagery

Photography is the primary visual element, featuring full-bleed, high-quality fashion model shots. The imagery is often centrally composed, highlighting the product and model with a soft-focus, desaturated background that provides context without distraction. There's no specific masking or corner treatment; images appear as raw, uncropped editorial photography. Illustrations and abstract graphics are absent, as the visual load is carried almost entirely by fashion photography, serving a purely product showcase and atmospheric role.
