---
version: alpha
name: Branding
description: SVZ orchestrates a dramatic, high-contrast dark mode aesthetic, building 'digital worlds' with deep blacks and stark whites. Typography embraces expressive, bespoke typefaces with tight tracking, creating an impactful, almost architectural text presence. The system employs subtle textural overlays and an unexpected, vibrant red accent that pierces through the monochrome, signaling energy and action.
colors:
  absolute-zero: "#000000"
  deep-space: "#080808"
  nightfall-gray: "#171617"
  charcoal-surface: "#262525"
  slate-highlight: "#393939"
  cloud-white: "#fcfcfc"
  glacial-white: "#f3efef"
  ash-accent: "#d4d2d2"
  dim-gray: "#b5b2b2"
  steel-border: "#525252"
  inferno-red: "#fe1e34"
  vivid-crimson: "#ff0000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.308px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.02px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -0.047px
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.1
    letterSpacing: -0.037px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.05
    letterSpacing: -0.075px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.9
    letterSpacing: -0.08px
  editorial-display:
    fontFamily: "system-ui"
    fontSize: 160px
    lineHeight: 0.9
    letterSpacing: -0.08px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 24px
  sectionGap: 48px
components:
  primary-action-button:
    role: Filled button for critical calls to action.
  secondary-ghost-button:
    role: Outlined button for secondary actions, blending into dark contexts.
  textured-card:
    role: Card with subtle background texture and inset shadow.
  feature-content-card:
    role: Solid background card for feature blocks.
  navigation-link:
    role: Interactive text link within navigation menus.
---

## Overview

**North Star:** Midnight atelier of digital craftsmanship

SVZ orchestrates a dramatic, high-contrast dark mode aesthetic, building 'digital worlds' with deep blacks and stark whites. Typography embraces expressive, bespoke typefaces with tight tracking, creating an impactful, almost architectural text presence. The system employs subtle textural overlays and an unexpected, vibrant red accent that pierces through the monochrome, signaling energy and action.

### Do's

- Prioritize Kmr Waldenburg for all headings and navigational elements, applying negative letter-spacing for visual impact (e.g., -0.0800em at 80px, -0.0750em at 64px, -0.0380em at 42px).
- Maintain a stark contrast using Absolute Zero (#000000) for backgrounds and Cloud White (#fcfcfc) or Glacial White (#f3efef) for text.
- Use Inferno Red (#fe1e34) exclusively for primary calls to action or brand-specific interactive elements, limiting its usage to maintain its visual power.
- Apply 8px border-radius to all buttons and prominent cards, and 14.4px specifically for Textured Cards, to introduce a subtle softness to the otherwise hard-edged aesthetic.
- Employ consistent padding: 32px for button padding, 12px for card inner padding, and 24px for general element spacing.
- Incorporate the rgba(255, 255, 255, 0.2) 0px 2px 5px 0px inset shadow for Textured Cards to add depth while integrating into the dark theme.
- Utilize Dirtyline 36 Daysoftype 2022 for expressive, oversized hero text with extreme negative tracking (e.g., -0.1000em at 80px) to signify artistic branding.

### Don'ts

- Avoid using bright or pastel colors; the palette is strictly monochrome with one primary red accent.
- Do not use generic system fonts for display text or navigational elements; always use the specified custom typefaces.
- Refrain from applying soft, external box-shadows; elevation is achieved through subtle inset shadows and variations in background darkness or textural overlays.
- Do not deviate from the aggressive letter-spacing defined for headings and prominent text; loose tracking will diminish the established aesthetic.
- Do not use the Inferno Red (#fe1e34) for decorative purposes or as a general UI color for elements other than primary actions; its impact relies on scarcity.
- Avoid using large blocks of pure white as backgrounds; the primary canvas is Absolute Zero (#000000).
- Do not use multiple contrasting accent colors; the visual system relies on the singular punch of Inferno Red.

### Layout

The page primarily uses a max-width contained layout, likely around 1440px, centered on a deep black canvas. Hero sections frequently feature full-bleed black backgrounds with large, centered, expressive typography and abstract graphics or stylized 3D elements. Vertical rhythm is established through consistent section gaps, often alternating between solid dark backgrounds and sections with subtle textural overlays. Content is typically arranged in centered stacks or alternating left/right text-image blocks where visuals are highly integrated. Card grids are present for features. A sticky top navigation bar with minimal elements and a prominent 'Discovery Call' button maintains constant access.

### Imagery

The visual language focuses on abstract, geometric shapes and bold typography. When photography or 3D renders are present (like the furry 'V' letter), they are highly stylized and often isolated against deep black backgrounds, serving as artistic statements rather than informative imagery. Images are full-bleed within sections, and occasionally masked or integrated with text. Iconography, when visible, is outlined and monochromatic, aligning with the stark aesthetic. The density is image-heavy in hero sections, but otherwise text-dominant with key visuals used sparingly for impact and atmosphere.
