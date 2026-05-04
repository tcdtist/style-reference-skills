---
version: alpha
name: OpenAI Developers
description: The OpenAI Developers site presents a professional and approachable aesthetic, grounded in a refined grayscale palette. Soft, diffused shadows on card elements subtly layer content, avoiding harsh contrasts. Typography employs a custom Sans typeface with precise letter-spacing, particularly noticeable on headlines, cultivating a sense of technical clarity. The design relies on careful text density and spacious layouts to maintain an open, readable environment, with interactive elements subtly highlighted through state changes rather than high-chroma accents.
colors:
  canvas-white: "#ffffff"
  cloud-gray: "#f9f9f9"
  whisper-gray: "#ededed"
  slate-text: "#282828"
  graphite-text: "#5d5d5d"
  subtle-gray: "#64748b"
  shadow: "#000000"
  input-pale: "#f3f3f3"
  dark-overlay: "#181818"
  accent-black: "#0d0d0d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.75
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.176px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.38
    letterSpacing: -0.198px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
    letterSpacing: -0.22px
  display:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1
    letterSpacing: -0.6px
spacing:
  cardRadius: 8px
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 64px
components:
  primary-navigation-link:
    role: Navigation item
  api-dashboard-button:
    role: Call to action button
  search-input-field:
    role: Search interface element
  info-callout-card:
    role: Informational alert/highlight
  feature-card-default:
    role: Interactive content display
  feature-card-alternative:
    role: Interactive content display
  text-link-inline:
    role: Interactive text link
---

## Overview

**North Star:** Architectural blueprints on frosted glass. A digital space that feels both precise and slightly translucent, built on foundational whites and grays.

The OpenAI Developers site presents a professional and approachable aesthetic, grounded in a refined grayscale palette. Soft, diffused shadows on card elements subtly layer content, avoiding harsh contrasts. Typography employs a custom Sans typeface with precise letter-spacing, particularly noticeable on headlines, cultivating a sense of technical clarity. The design relies on careful text density and spacious layouts to maintain an open, readable environment, with interactive elements subtly highlighted through state changes rather than high-chroma accents.

### Do's

- Use `OpenAI Sans` weight 600 for all primary headings, and weight 500 for secondary headings to establish clear hierarchy.
- Employ `Canvas White` (#ffffff) as the default page background and `Cloud Gray` (#f9f9f9) for most card or elevated section backgrounds.
- Apply `8px` border-radius to all feature cards, images, and embedded media elements for visual consistency.
- For interactive buttons, utilize `9999px` (pill shape) border-radius with `Shadow` (#000000) for filled states.
- Maintain `16px` as the standard base font size for body text (`OpenAI Sans` weight 400) colored `Slate Text` (#282828).
- Integrate the `rgba(0, 0, 0, 0.08) 0px 1px 2px -1px` shadow for subtle elevation on key informational cards or interactive containers.
- Ensure `4px` horizontal and `8px` vertical spacing for most inline elements and small gaps within components.

### Don'ts

- Avoid using highly saturated or vibrant colors; the system relies on a monochromatic base with subtle shifts in neutral tones.
- Do not introduce square corners on buttons or interactive elements; all buttons must maintain `9999px` radius.
- Refrain from using strong, dark borders around cards; rely on background color shifts and subtle shadows for visual separation.
- Do not use letter-spacing wider than normal; the tightly tracked `OpenAI Sans` is a key brand characteristic.
- Avoid large hero gradients or busy background images; keep backgrounds clean and functional.
- Do not deviate from the established `4px` spacing base unit for element and component spacing.

### Layout

The page uses a contained max-width layout (approximately 1200px) centered on a `Canvas White` background, providing ample whitespace. The hero section features a centered `OpenAI for developers` heading. Content is primarily arranged in single-column stacks for main text blocks, transitioning to multi-column card grids (e.g., three-column feature cards for 'API Platform', 'Codex', 'Apps SDK'). Sections maintain consistent vertical spacing, creating an organized rhythm. The sticky top navigation bar is minimal, featuring centered links and right-aligned action buttons.

### Imagery

The site predominantly uses abstract graphics and clean product-focused icons. Icons are outlined, monochrome, and have a consistent stroke weight, visually aligning with the UI's precision. When images are present (like the 'GPT-5.5' icon), they feature soft, gradient-like colors within a rounded container. Imagery serves an explanatory or indicative role, not decorative. The visual density is image-light, with UI and text taking precedence.
