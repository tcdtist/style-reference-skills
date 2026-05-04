---
version: alpha
name: Fly.io
description: This design orchestrates a playful yet competent aesthetic, combining whimsical hand-drawn illustrations with a structured technical layout. Its mood is one of approachable innovation, where complex systems are presented with a friendly, inviting tone. The foundation is a clean, bright canvas, subtly enhanced by soft, multi-color gradients that hint at dynamism and possibility without visual noise. Muted violet tones dominate text and interactive elements, providing a consistent brand presence that is distinctive but not overwhelming.
colors:
  cloud-white: "#ffffff"
  ghost-gray: "#e7e6f4"
  lavender-mist: "#f1f2f9"
  ash-charcoal: "#000000"
  grape-vine: "#281950"
  lavender-bloom: "#a39ac1"
  muted-violet: "#5e537c"
  electric-violet: "#7c3aed"
  deep-plum: "#191034"
  success-green: "#10b981"
  info-blue: "#3b82f6"
  warning-orange: "#f59e0b"
  accent-gradient-hero: "#7dd3fc"
  accent-gradient-hero-transparent: "#7dd3fc"
  primary-cta-gradient: "#8b5cf6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.025px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
    letterSpacing: 0.025px
  heading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.66
    letterSpacing: 0.05px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.33
    letterSpacing: -0.45px
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.15
    letterSpacing: -0.25px
  hero-display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.15
    letterSpacing: -0.45px
spacing:
  buttonRadius: 9999px
  elementGap: 16px
  sectionGap: 40px
components:
  deploy-cta-button-group:
    role: 
  enterprise-ready-feature-card:
    role: 
  trusted-by-banner:
    role: 
  primary-cta-button:
    role: Call to action
  outline-ghost-button:
    role: Secondary action
  pill-ghost-button:
    role: Tertiary action, navigation
  light-pill-button:
    role: Contextual action
  navigation-link:
    role: Global navigation
  header-logo:
    role: Brand identity
  hero-section-header:
    role: Primary page message
---

## Overview

**North Star:** Whimsical tech playground. Muted violet meets playful pastels on a clean white backdrop.

This design orchestrates a playful yet competent aesthetic, combining whimsical hand-drawn illustrations with a structured technical layout. Its mood is one of approachable innovation, where complex systems are presented with a friendly, inviting tone. The foundation is a clean, bright canvas, subtly enhanced by soft, multi-color gradients that hint at dynamism and possibility without visual noise. Muted violet tones dominate text and interactive elements, providing a consistent brand presence that is distinctive but not overwhelming.

### Do's

- Prioritize `Fricolage Grotesque` for all body text and UI labels, ensuring consistent `letter-spacing` as defined in the type scale.
- Apply `Electric Violet` (#7c3aed) as the singular background color for primary call-to-action buttons, pairing it always with `Cloud White` text (#ffffff).
- Use `Muted Violet` (#5e537c) for general body text and secondary informational elements to maintain a brand-aligned, readable tone.
- Employ `Mackinac` `weight 500` for all display and large section headings, utilizing its defined negative letter spacing for stylistic impact.
- Implement `9999px` corner radius for all primary and secondary button components to achieve a consistent 'pill' shape.
- Utilize `Ghost Gray` (#e7e6f4) for subtle borders and dividers, providing visual structure without harsh lines.
- Incorporate the `Accent Gradient Hero` (linear-gradient(to right, rgb(125, 211, 252), rgb(165, 180, 252), rgb(249, 168, 212))) sparingly for wide background sections to add a dynamic, pastel highlight.

### Don'ts

- Avoid using `Electric Violet` (#7c3aed) for non-interactive text elements; reserve it strictly for primary calls to action.
- Do not introduce sharp corners on any interactive components; adhere to a minimum of `16px` radius for structural elements and `9999px` for buttons.
- Refrain from using strong, single-color shadows for elevation; rely on the subtle `rgba(91, 33, 182, 0.1) 0px 5px 5px -2px, rgba(91, 33, 182, 0.1) 0px 2px 4px -2px` for button elevation.
- Do not use black for body text; instead, use `Grape Vine` (#281950) or `Muted Violet` (#5e537c) for brand consistency.
- Ensure all text blocks maintain generous line heights from the type scale (`1.5` or `1.66`) to prevent dense, hard-to-read paragraphs.
- Avoid arbitrary use of the accent `linear-gradient` for small elements; it is designed for large background areas to provide a subtle, atmospheric shift.

### Layout

The page primarily uses a max-width `1200px` centered container for content, presenting a structured column layout. The hero section breaks this with a full-bleed application of the `Accent Gradient Hero` background, featuring a centered, prominent headline. Subsequent sections often employ a clean, white background with generous vertical spacing (`40px sectionGap`). A common content arrangement is a split layout, featuring text on one side and an accompanying illustration or feature visual on the other, creating a balance between information and visual interest. Navigation is a sticky top bar, containing both textual links and a prominent `Primary CTA Button`. The design feels spacious, with ample breathing room around elements.

### Imagery

The visual language is dominantly characterized by whimsical, hand-drawn vector illustrations featuring pastel color palettes and abstract, flowing forms. These illustrations are not masked or cropped but appear to organically 'spill' across sections or hover as isolated, narrative elements. They are used decoratively to evoke imagination and approachability for complex technical concepts, rather than literal product depiction. Iconography, when present, is simple, filled, and uses the defined accent/semantic colors. The overall density leans towards image-heavy, with illustrations taking significant visual space and often serving as backdrops or scene-setters alongside textual content.
