---
version: alpha
name: Jean Paul Gaultier
description: Jean Paul Gaultier's digital presence embodies a stark, high-contrast aesthetic that is both minimalist and confident. The visual system is built on a foundation of pure black and white, accented sparingly with a bold, vivid blue for select graphic elements. Typography is the primary decorative element, leveraging varied weights and tight tracking for a powerful, almost architectural text-driven experience. Layouts are spacious yet direct, prioritizing clear delineation of content over complex visual metaphors, creating a gallery-like presentation for products.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  whisper-gray: "#e0e0e0"
  steel-gray: "#828282"
  deep-dove-gray: "#161616"
  charcoal-gray: "#222222"
  ash-gray: "#bdbdbd"
  scarlet-alert: "#921d1d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1
    letterSpacing: 0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 250px
    lineHeight: 1
    letterSpacing: 0.02px
spacing:
  elementGap: 10px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Primary action, call-to-action.
  ghost-button:
    role: Secondary actions, navigation links within content.
  disabled-ghost-button:
    role: Unavailable or inactive secondary actions.
  product-card:
    role: Displaying product listings.
  text-input-default:
    role: User text entry fields.
  text-input-error:
    role: Text input with validation error.
  copyright-footer:
    role: Persistent site information, legal links.
  consent-overlay-button:
    role: Confirmation on cookie consent.
---

## Overview

**North Star:** Gallery Canvas on Black Velvet

Jean Paul Gaultier's digital presence embodies a stark, high-contrast aesthetic that is both minimalist and confident. The visual system is built on a foundation of pure black and white, accented sparingly with a bold, vivid blue for select graphic elements. Typography is the primary decorative element, leveraging varied weights and tight tracking for a powerful, almost architectural text-driven experience. Layouts are spacious yet direct, prioritizing clear delineation of content over complex visual metaphors, creating a gallery-like presentation for products.

### Do's

- Design with a dominant high-contrast palette, primarily using Midnight Ink (#000000) and Canvas White (#ffffff).
- Utilize Gaultier Display for all headlines and featured text to establish a strong, fashion-forward brand voice, especially at larger sizes with tight letter-spacing.
- Maintain sharp, angular aesthetics by consistently applying a 0px border-radius to all components, including buttons, cards, and input fields.
- Employ the Ghost Button style for all secondary actions and navigation items to preserve the high-contrast aesthetic without adding heavy fills.
- Use Scarlet Alert (#921d1d) exclusively for error states and critical notifications, avoiding it for decorative or branding purposes.
- Ensure generous vertical spacing between sections (40px) to give content breathing room, typical of a gallery-like presentation.
- Frame product imagery through clean layouts and implied borders rather than distinct card UI, using 0px padding and no visible box shadows on product cards.

### Don'ts

- Do not introduce soft shadows or excessive border-radii; the system relies on sharp edges and stark contrasts.
- Avoid using saturated colors for anything other than explicit semantic states like errors; aesthetic color should be reserved for brand imagery.
- Do not deviate from the Gaultier Text and Gaultier Display font families; they are central to the brand's typographic identity.
- Refrain from complex background patterns or gradients; maintain clean, solid color fields for surfaces.
- Do not use generic button styles that introduce rounded corners or subtle coloring; all buttons should follow the primary filled or ghost outlines.
- Avoid dense or cluttered layouts; maintain a spacious and airy feel, even in information-rich sections.
- Do not use subtle gray text (#bdbdbd) for primary body content; reserve it for placeholders or very minor annotations.

### Layout

The page model is contained within an implied max-width of approximately 1440px, centered horizontally. The hero section often features a striking full-bleed image with text overlaid or alongside. Section rhythm uses consistent vertical spacing of 40px, creating clean separation without explicit visual dividers. Content is arranged in alternating text-left/image-right patterns or as centered stacks for promotional blocks. Product listings utilize a multi-column grid, showcasing items in a direct, unadorned manner. Navigation consists of a persistent top bar with minimal links.

### Imagery

This site features high-fashion photography and tight product crops against pure white or black backgrounds. Photography is full-bleed or contained within clean rectangular frames. There is no lifestyle context; the product and model are the central focus, presented with a stark, art-gallery feel. Iconography is minimal: outlined, monochrome, and used functionally for navigation or actions like 'search' and 'cart'. The visual language heavily prioritizes product showcase and dramatic, fashion-editorial compositions over explanatory graphics or abstract illustrations, lending an image-heavy, text-dominant density to sections containing text.
