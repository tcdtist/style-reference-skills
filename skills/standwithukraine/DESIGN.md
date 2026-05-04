---
version: alpha
name: #standwithukraine
description: The #standwithukraine design system conveys a sense of urgent, stark information delivery. It utilizes a striking contrast between dark backgrounds and vivid yellow accents, evoking the Ukrainian flag. Typography is dominant and forceful, often with wide letter-spacing, set against minimal UI elements. The overall aesthetic is raw and direct, prioritizing message over decorative flourishes, with a spacious, almost sparse layout that reinforces the gravity of the content.
colors:
  freedom-yellow: "#f6e54e"
  sky-blue: "#77afd8"
  deep-night: "#202020"
  ghost-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.12
    letterSpacing: 0.24px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.15
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.15
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.15
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.86
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 168px
    lineHeight: 0.86
    letterSpacing: 79px
spacing:
  buttonRadius: 20px
  elementGap: 8px
  sectionGap: 32px
components:
  outlined-cta-button:
    role: Primary call to action.
  neutral-outlined-button:
    role: Secondary call to action.
  navigation-link:
    role: Primary site navigation.
  info-badge:
    role: Informational highlight.
  text-card:
    role: Container for content sections.
---

## Overview

**North Star:** Stark Contrast, Urgent Resolve

The #standwithukraine design system conveys a sense of urgent, stark information delivery. It utilizes a striking contrast between dark backgrounds and vivid yellow accents, evoking the Ukrainian flag. Typography is dominant and forceful, often with wide letter-spacing, set against minimal UI elements. The overall aesthetic is raw and direct, prioritizing message over decorative flourishes, with a spacious, almost sparse layout that reinforces the gravity of the content.

### Do's

- Prioritize text content readability by using `Deep Night` (#202020) for most text against neutral backgrounds, and `Ghost White` (#ffffff) against `Deep Night` backgrounds.
- Use `Freedom Yellow` (#f6e54e) exclusively for primary interactive elements (outlined buttons, links) and key informational accents to maintain its impact.
- Maintain a spacious layout with `32px` vertical gaps between major sections and `8px` between smaller elements.
- Apply `0px` border-radius for general UI components like cards and text containers, reserving `20px` for specific button variants.
- Employ the Helvetica Neue Cyr font family for all primary text, leveraging its bold weights for headings and wider letter-spacing for dramatic effect.
- Use transparent backgrounds and `Freedom Yellow` (#f6e54e) borders for call-to-action buttons, avoiding solid fills to maintain a lightweight, urgent feel.
- Feature large, impactful headlines (72px or 168px) with tight line heights and significant negative letter-spacing for a sculptural, authoritative presence.

### Don'ts

- Do not introduce new saturated accent colors beyond `Freedom Yellow` (#f6e54e) and `Sky Blue` (#77afd8) to preserve the stark brand identity.
- Avoid solid background fills for interactive buttons; use the outlined style with `Freedom Yellow` (#f6e54e) to signify interactivity.
- Do not use subtle elevation or shadows on card components; maintain a flat aesthetic for content containers.
- Refrain from using decorative gradients or complex visual textures, as the system relies on stark contrasts and direct presentation.
- Do not use generic system fonts; stick to Helvetica Neue Cyr and Nitti-Normal to uphold the unique typographic voice.
- Avoid dense information blocks; use generous spacing and clear divisions to ensure content is easily digestible.
- Do not dilute the contrast by placing light text on `Sky Blue` (#77afd8) backgrounds, as the contrast ratio is insufficient (`2.4:1`).

### Layout

The page exhibits a full-bleed layout contrasting with sections restricted by a max-width, suggesting a hybrid model that maximizes impact for key sections while containing detailed content. The hero section leverages a full-viewport gradient background with centered, large-scale typographic elements. Sections typically stack vertically with consistent `32px` gaps, utilizing alternating color bands (dark canvas, yellow accents). Content is often arranged in centered stacks or simple text blocks, with a notable absence of complex grid structures for features, instead relying on clear hierarchical typography. Navigation is via a fixed top bar and a prominent vertical side navigation, both minimalistic.

### Imagery

The site predominantly uses abstract, large-scale typography and graphic elements over traditional imagery. When present, images appear as background elements or within cards, treated with a stark, often monochromatic filter that aligns with the overall somber mood. Icons are minimal, outlined, and monochromatic, primarily serving functional navigation. The visual density is image-light, focusing on text as the primary informational and emotional carrier.
