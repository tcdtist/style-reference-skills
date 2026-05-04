---
version: alpha
name: Craft
description: Craft presents a botanical elegance, marrying a muted, organic color palette with sharp, high-contrast typography. The design emphasizes natural greens and soft off-whites as background and text colors, contrasted by a single vibrant green for primary actions. Layouts are spacious, utilizing a comfortable density with ample negative space to allow content to breathe, fostering a calm yet authoritative feel. Visual details like crisp outlines and subtle off-white surfaces blend into a sophisticated, understated aesthetic.
colors:
  ink-bark: "#2a1a1d"
  night-forest: "#1d3023"
  deep-moss: "#0e634f"
  garden-sprout: "#26d862"
  linen-mist: "#eae6df"
  parchment-white: "#f7f5f2"
  ash-taupe: "#504344"
  cloud-cement: "#d7d2cc"
  stone-slate: "#645757"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.01px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
    letterSpacing: -0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: -0.02px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.18
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.18
    letterSpacing: -0.025px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.95
    letterSpacing: -0.025px
  display:
    fontFamily: "system-ui"
    fontSize: 180px
    lineHeight: 0.85
    letterSpacing: -0.03px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 16px
  sectionGap: 56px
components:
  ghost-text-button:
    role: Navigation, inline actions, and secondary calls-to-action.
  primary-action-button:
    role: Main calls-to-action.
  subtle-pill-button:
    role: Tertiary navigation or filter elements.
  feature-card-transparent:
    role: To group related content in a flexible layout.
  content-block-card:
    role: Informational cards or statistics.
  dark-overlay-card:
    role: Visual content containers, such as imagery or embedded media.
---

## Overview

**North Star:** Botanical elegance on linen

Craft presents a botanical elegance, marrying a muted, organic color palette with sharp, high-contrast typography. The design emphasizes natural greens and soft off-whites as background and text colors, contrasted by a single vibrant green for primary actions. Layouts are spacious, utilizing a comfortable density with ample negative space to allow content to breathe, fostering a calm yet authoritative feel. Visual details like crisp outlines and subtle off-white surfaces blend into a sophisticated, understated aesthetic.

### Do's

- Use `Parchment White` (#f7f5f2) as the default page background for clarity and spaciousness.
- Apply `Ink Bark` (#2a1a1d) for primary body text and most headings to ensure high contrast and readability.
- Utilize `ABC Arizona Flare Condensed Variable` with weight 300 for prominent display headlines, with letter spacing between -0.025em and -0.03em.
- Implement `Garden Sprout` (#26d862) exclusively for primary interactive elements, such as filled action buttons and navigation accents.
- Maintain an `8px` border radius for all cards and primary buttons to ensure a consistent softened-edge aesthetic.
- Employ a base `elementGap` of `16px` and `sectionGap` of `56px` to establish comfortable visual density.
- Use `Night Forest` (#1d3023) as the default background for any visually dense sections or image backgrounds to create depth.

### Don'ts

- Avoid using `Garden Sprout` (#26d862) for non-interactive textual content; its high saturation is reserved for action.
- Do not introduce sharp, angular edges; apply `8px` or `4px` radii consistently to all applicable components.
- Refrain from heavy drop shadows; the design relies on color contrast and subtle borders for visual separation.
- Do not use generic system fonts; `ABC Arizona Flare Variable` and `ABC Arizona Flare Condensed Variable` are critical to brand identity.
- Avoid tight spacing; maintain a comfortable density by adhering to the `16px` element gap and `56px` section gap.
- Do not embed imagery tightly; prioritize spacious layouts that give visuals room to breathe.
- Avoid introducing additional chromatic colors; the palette is intentionally restrained, leveraging greens and earth tones.

### Layout

The page primarily uses a contained layout with a comfortable max-width, allowing content to center. The hero section is full-bleed, featuring large, condensed typography centered over an abstract, blurred green background gradient. Subsequent sections generally alternate between bands of `Parchment White` (#f7f5f2) and `Linen Mist` (#eae6df), maintaining a consistent `56px` vertical `sectionGap`. Content within sections often follows a text-dominant, centered stack or a simple column grid (e.g., 2-column or 4-column cards for features or statistics), promoting a clean, organized flow. Navigation is a minimalist top bar, integrating subtle ghost buttons.

### Imagery

The site uses a mix of tightly cropped, natural photography with blurred effects and clean product-focused imagery. Photography often features organic subjects like plants or flowers, treated with motion blur to create an artistic, abstract feel rather than literal representation. Product-focused images (if present) are crisp and isolated. Iconography, visible in navigation, is minimal, using `Ink Bark` (#2a1a1d) stroke for abstract, outlined symbols that complement the typography. Imagery serves both decorative, atmospheric purposes and as a direct showcase for brand personality.
