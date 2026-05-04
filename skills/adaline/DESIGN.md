---
version: alpha
name: Adaline
description: Adaline employs a serene, naturally-inspired aesthetic, combining a nearly monochromatic palette with organic, muted greens and browns. The visual language conveys quiet authority: elegant typography with subtle letter spacing, carefully rounded components, and restrained use of color only for functional elements. Grays are abundant, creating a soft, layered depth, while a single striking green serves as the primary accent, signaling interactive states and brand identity. Components feel integrated with their environment, avoiding harsh contrasts or strong shadows.
colors:
  canvas-ice: "#fbfdf6"
  adaline-ink: "#0a1d08"
  mist-gray: "#c5ccb6"
  deep-earth: "#31200b"
  valley-green: "#203b14"
  stone-moss: "#e0e5d5"
  amber-seed: "#4a3212"
  forest-dew: "#d7e8b5"
  blackest-night: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.43
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
  body-lg:
    fontFamily: "system-ui"
    fontSize: 47px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 53px
    lineHeight: 1.3
spacing:
  buttonRadius: 20px
  elementGap: 4px
  sectionGap: 48px
components:
  primary-action-button-filled:
    role: Emphasized calls to action
  secondary-action-button-ghost:
    role: Secondary calls to action, less emphasis
  tertiary-action-button-ghost-thin:
    role: Minimal calls to action, often in navigation
  navigation-link:
    role: Top-level navigation and contextual links
  client-logo-card:
    role: Display partner logos
---

## Overview

**North Star:** Mist-shrouded valley

Adaline employs a serene, naturally-inspired aesthetic, combining a nearly monochromatic palette with organic, muted greens and browns. The visual language conveys quiet authority: elegant typography with subtle letter spacing, carefully rounded components, and restrained use of color only for functional elements. Grays are abundant, creating a soft, layered depth, while a single striking green serves as the primary accent, signaling interactive states and brand identity. Components feel integrated with their environment, avoiding harsh contrasts or strong shadows.

### Do's

- Prioritize Canvas Ice (#fbfdf6) for all primary backgrounds to maintain the light, airy feel.
- Use Adaline Ink (#0a1d08) for primary headings and body text, ensuring a consistent dark, earthy tone.
- Apply Akkurat with a consistent -0.0400em letter spacing for all headings and body text to maintain signature visual precision.
- Employ 20px border-radius for all interactive elements like buttons and navigation items for a softer, approachable feel.
- Reserve Amber Seed (#4a3212) exclusively for the background of primary calls to action to ensure clear visual hierarchy.
- Maintain a clear vertical rhythm using 48px sectional gaps and 24px inner padding for cards.
- Use Valley Green (#203b14) as the primary accent for interactive states, icons, and subtle brand highlights.

### Don'ts

- Do not use highly saturated or vivid colors outside of designated brand accent areas; the system relies on a muted, natural palette.
- Avoid harsh shadows or strong elevation; the design favors flat, layered surfaces with minimal depth indicators.
- Do not introduce new typefaces; Akkurat and fragmentMono are the only approved fonts.
- Do not use generic square or minimal border radii for buttons or navigation items; always apply 20px for consistency.
- Avoid dense packing of elements; maintain comfortable element gaps (e.g., 4px) and page-level spacing.
- Do not use light text on light backgrounds for interactive elements; ensure sufficient contrast, particularly against Canvas Ice.
- Do not deviate from the established color roles; for instance, only Amber Seed should be a solid button background.

### Imagery

The site predominantly uses abstract, digital-nature illustrations. These feature rendered landscapes reminiscent of real-world photography but with a stylized, digital art aesthetic, such as misty mountains and serene lakes. Imagery serves a decorative and atmospheric role, often as full-bleed backgrounds for hero sections, creating a calm and contemplative mood. There are also product UI screenshots, which appear as contained elements, likely with slight rounding and minimal borders. Icons are minimal, monochromatic, and outlined, maintaining a clean and functional appearance. The overall impression is one of visual spaciousness and low density, letting the abstract visuals set the tone.
