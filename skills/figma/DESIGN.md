---
version: alpha
name: Figma
description: The interface operates as a strict, high-contrast structural container that entirely defers visual dominance to user-generated content. A stark #000000 on #ffffff palette forms the baseline, eschewing subtle grays in favor of absolute maximum contrast for primary boundaries and text. Typographic hierarchy relies almost purely on size and aggressive negative tracking rather than color variation, turning large text strings into dense graphical blocks. The border-radius logic enforces a severe dichotomy: 50px extreme pills for global navigation elements clashing intentionally against completely sharp 0px corners on content containers.
colors:
  absolute-canvas: "#ffffff"
  structural-ink: "#000000"
  graphite-metadata: "#595959"
  boundary-frame: "#e2e2e2"
  context-action-violet: "#4d49fc"
  angular-teal: "#33dfdf"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
    letterSpacing: 0.36px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.08px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.13px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.1
    letterSpacing: -0.5px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -1.44px
spacing:
  elementGap: 24px
  sectionGap: 96-120px
components:
  button-group-global-action-pills:
    role: 
  prompt-input-panel:
    role: 
  community-artifact-cards:
    role: 
  global-action-pill:
    role: Page-level CTA and authentication boundaries
  navigation-utility-pill:
    role: Secondary global actions structurally matched to primary pill
  prompt-input-panel:
    role: The central elevated workspace orchestrator
  panel-execution-cta:
    role: The localized trigger within a Prompt Input Panel
  community-artifact-card:
    role: Container framework for raw user-generated output
---

## Overview

**North Star:** monochrome chassis for chromatic chaos

The interface operates as a strict, high-contrast structural container that entirely defers visual dominance to user-generated content. A stark #000000 on #ffffff palette forms the baseline, eschewing subtle grays in favor of absolute maximum contrast for primary boundaries and text. Typographic hierarchy relies almost purely on size and aggressive negative tracking rather than color variation, turning large text strings into dense graphical blocks. The border-radius logic enforces a severe dichotomy: 50px extreme pills for global navigation elements clashing intentionally against completely sharp 0px corners on content containers.

### Do's

- Enforce absolute #000000 for primary typography matrices—rely on weight and harsh negative tracking (-1.44px at display sizes) for hierarchy instead of greys.
- Pair the 50px pill paradigm explicitly and exclusively with global navbar / page-level navigation elements.
- Maintain raw 0px corners on community and gallery containers to strip away UI artifacts from structural content layouts.
- Use #4d49fc strictly as an inner-panel interruptive signal, never for global headers or marketing backgrounds.
- Limit drop shadows strictly to workspace/prompt panels that float structurally above the canvas; do not apply baseline shadows to grid items.

### Don'ts

- Do not dilute body content with #595959 text; force high contrast #000000 on #ffffff for all core structural strings.
- Do not mix button border geometries—never use an 8px radius in the header, and never use 50px pills within an elevated prompt panel.
- Do not frame or stroke image artwork thumbnails; let the unstyled edge define the visual rectangle inside the card space.
- Never apply hover elevation—use pure background-color offsets or opacity changes, reserving box-shadow for persistent Z-index tiers.
- Avoid decorative colored blocks in the UI system—constrain #24cb71, #00b6ff, #ff7237 exclusively to actual artwork or avatar renders.

### Layout

Compositions rely on extreme maximum-width boundaries (1440px max) centering the viewport, utilizing tight clusters of content separated by massive macro-whitespace (96-120px section gaps). The hero archetype frequently stacks an asymmetric gallery-wall of images pinned dynamically beneath a floating, perfectly-centered UI block. Below the fold, information conforms immediately to strict 4-column unpadded grid architecture framing repeated card clusters, maximizing object density while eliminating frame padding.

### Imagery

User-centric outputs completely govern the image domain. Assets appear as flat, unbordered 0px squares or scattered, overlapping physical-like cuts set against a stark void. The imagery operates as the only source of chroma on the site. There are zero lifestyle photography elements or generic corporate illustrations—every graphic is an exact, literal snapshot of a digital canvas creation, functioning both as proof of product and primary aesthetic payload.

### Elevation

Z-axis hierarchy relies on a binary absolute threshold. 99% of the UI (buttons, cards, inputs) exists entirely flush with the background, utilizing zero shadow. Elevation is summoned centrally as a single, massive volumetric throw (0 24px 70px 10% opacity) beneath core interactive 'prompt modules'—physically disconnecting the active toolset layer from the flat, passive content layer underneath.
