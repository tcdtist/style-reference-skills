---
version: alpha
name: Vucko
description: Vucko's design system embodies unadorned precision with a high-contrast monochrome palette. Bold, oversized typography dominates the visual field, creating clear hierarchy through scale rather than color. Surface treatments are flat and minimal, emphasizing content, while subtle border radii apply to interactive elements and showcased cards. The overall effect is one of directness and sophisticated restraint, where motion is implied through scale and interaction rather than explicit graphical flourishes.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  slate-mist: "#eeeeee"
  warm-gray: "#888a8b"
  deep-gray: "#222222"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.5
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.21
    letterSpacing: -0.43px
  heading:
    fontFamily: "system-ui"
    fontSize: 55px
    lineHeight: 1.17
    letterSpacing: -1.1px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 1.13
    letterSpacing: -2.4px
  display:
    fontFamily: "system-ui"
    fontSize: 211px
    lineHeight: 0.7
    letterSpacing: -11.9px
spacing:
  cardRadius: 9.6px
  buttonRadius: 0px
  elementGap: 23px
  sectionGap: 58px
components:
  text-link-button-dark:
    role: Interactive text link, border-bottom appears on hover/focus.
  text-link-button-light:
    role: Interactive text link within dark contexts, border-bottom appears on hover/focus.
  showcase-card:
    role: Display individual portfolio items or content blocks.
  elevated-showcase-card:
    role: Highlight specific content or product showcases.
  navigation-dot:
    role: Indicates current section or state in compact navigation.
---

## Overview

**North Star:** High-contrast typographic canvas.

Vucko's design system embodies unadorned precision with a high-contrast monochrome palette. Bold, oversized typography dominates the visual field, creating clear hierarchy through scale rather than color. Surface treatments are flat and minimal, emphasizing content, while subtle border radii apply to interactive elements and showcased cards. The overall effect is one of directness and sophisticated restraint, where motion is implied through scale and interaction rather than explicit graphical flourishes.

### Do's

- Prioritize text scale and weight changes over color for hierarchy; use Midnight Ink (#000000) for primary content and Canvas White (#ffffff) for backgrounds.
- Apply 9.6px border-radius to showcase cards and similar contained content areas for subtle softness.
- Utilize 0px padding and 0px border-radius for ghost buttons/links, relying on a bottom border for interactive states.
- Maintain a spacious density; use 58px as the primary vertical section gap and 23px for element gaps.
- Use Suisse, or its closest sans-serif substitute, for all textual elements in various weights to ensure typographic consistency.
- Employ the negative letter-spacing values provided for larger text sizes to achieve a tightly composed, impactful headline aesthetic.
- Ensure all interactive text elements use a 1px border on hover, matching the text color.

### Don'ts

- Avoid decorative gradients or vivid accent colors; the system is built on a high-contrast achromatic foundation.
- Do not introduce unnecessary shadows or complex layer effects; keep surfaces flat and distinct through background color changes.
- Do not deviate from the specified scale for typography; large sizes have specific line heights and negative letter spacing that are integral to brand identity.
- Avoid using multiple font families; Suisse is the sole typeface.
- Do not add internal padding to cards or buttons, the padding is implied by the surrounding spacing.
- Do not use generic rounded corners; adhere strictly to 9.6px for cards, 0px for buttons, and 9999px for dots.
- Do not use subtle gray borders for actionable items; borders are strong and match the text color.

### Layout

The page adheres to a full-bleed layout, particularly for hero sections and large typographic statements, which extend to the viewport edges. Content within sections, however, often feels implicitly contained by generous horizontal padding. The hero leverages oversized, high-contrast typography, often centered or left-aligned, establishing an immediate impactful presence. Sections exhibit consistent vertical spacing of 58px. Content often alternates between pure typographic blocks and large visual showcases. Navigation is a minimal top bar, featuring right-aligned text links and a utility dot, without a sticky header visible.

### Imagery

Imagery treatment varies between simple black rectangular placeholders for abstract motion concepts and full-bleed product showcases with rounded corners (9.6px). Photography is not dominant. Illustrations are abstract and colorful, often appearing as embedded content rather than primary UI elements, contained within the UI structure. Icons are minimal, primarily filled, and monochrome (Midnight Ink or Canvas White), used for functional navigation cues like a small dot.
