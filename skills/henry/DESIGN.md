---
version: alpha
name: Henry
description: Henry.codes creates a dark, brutalist newsprint aesthetic, evoking a digital zine or an old-school BBS. The design uses stark monochrome contrast, large distressed display typography, and intentional visual chaos within a structured grid. Text blocks are dense, and the overall impression is one of raw, unfiltered information, avoiding typical 'clean' SaaS conventions. The system feels hand-coded, with a deliberate lack of smooth gradients, soft shadows, or rounded forms, opting for sharp edges and explicit separation.
colors:
  midnight-ink: "#2a2722"
  canvas-white: "#fafafa"
  graphite-text: "#3e3b36"
  ash-gray: "#9f9f9f"
  light-border: "#eeeeee"
  midtone-text: "#666666"
  muted-silver: "#b3b3b3"
  faded-gray: "#a9a9a9"
  rainbow-band: "#c679c4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -0.32px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 77px
    lineHeight: 0.9
  display:
    fontFamily: "system-ui"
    fontSize: 132px
    lineHeight: 0.8
spacing:
  cardRadius: 12px
  elementGap: 16px
  sectionGap: 32px
components:
  text-content-card-default:
    role: Container for articles or body text.
  text-content-card-rounded:
    role: Container for 'Brief Letter' and similar self-contained content.
  navigation-link-primary:
    role: Main navigation items in the sidebar or header.
  section-divider-line:
    role: Visual separation between major content blocks.
  ghost-button-outlined-link:
    role: Interactive elements with a minimal footprint, such as 'read more' or external links.
  editorial-text-block:
    role: Stylized introductory text or personal notes.
---

## Overview

**North Star:** Distressed newsprint, black-and-white grid

Henry.codes creates a dark, brutalist newsprint aesthetic, evoking a digital zine or an old-school BBS. The design uses stark monochrome contrast, large distressed display typography, and intentional visual chaos within a structured grid. Text blocks are dense, and the overall impression is one of raw, unfiltered information, avoiding typical 'clean' SaaS conventions. The system feels hand-coded, with a deliberate lack of smooth gradients, soft shadows, or rounded forms, opting for sharp edges and explicit separation.

### Do's

- Prioritize high contrast using Midnight Ink (#2a2722) and Canvas White (#fafafa) for all backgrounds and main text.
- Use Neue Montreal for all functional text and body copy to maintain legibility and a consistent modern feel.
- Apply Louize Display at large sizes (77px-132px) for primary headlines, embracing its distressed, imposing character.
- Maintain a clear separation between content blocks using 2px solid lines of either Midnight Ink (#2a2722) or Canvas White (#fafafa).
- Employ a 12px border radius only for specific content cards or overlays, keeping most UI elements sharp-edged.
- Ensure all interactive elements have a clear 1px or 2px Midnight Ink (#2a2722) border for definition, without relying on fill colors.
- Utilize 16px as the primary base for padding inside interactive containers and for general element spacing.

### Don'ts

- Do not use soft shadows or elevation effects; the design relies on stark lines and dark/light contrast for visual hierarchy.
- Avoid decorative gradients or subtle background textures, beyond the specific 'Rainbow Band' accent.
- Do not introduce highly saturated colors for functional UI elements; color is reserved for decorative accents or very specific indicators.
- Avoid soft, organic shapes or large, friendly radii; maintain sharp corners for most UI elements.
- Do not use multiple font families for body text or navigation; stick to Neue Montreal for consistency in these areas.
- Avoid thin, lightweight dividers; use prominent 2px solid lines to emphasize separation.
- Do not center-align long blocks of body text; reserve centered alignment for short, editorial statements.

### Layout

The page primarily uses a full-bleed layout, allowing wide elements to stretch across the viewport, but often contains content within implied horizontal sections. The hero section is full-bleed, featuring large typographic elements. Content alternates between centered stacks and more complex, asymmetrical compositions, sometimes with text overlaying decorative background type. There's a strong vertical rhythm established through large section gaps and explicit horizontal dividers. Navigation is handled through fixed left-hand sidebars and top announcement bars, sometimes using a 'go home' link rather than a traditional logo. The layout feels like an untamed, yet structured, digital canvas, reminiscent of early web design with modern typographical flourishes.

### Imagery

This site uses stark, high-contrast, pixelated or halftone-style imagery, primarily in black and white. Images are often illustrative or abstract, occasionally featuring distressed textures or demonic/macabre motifs. They serve a decorative, atmospheric role rather than explanatory or product-showcasing. Visuals can be contained within defined areas, but also used as large, partially obscured background elements (like the 'Manuka' font). Icons, if present, are minimal, outlined, and monochromatic, matching the overall stark aesthetic. The density is image-light relative to text but impact-heavy when visuals do appear.
