---
version: alpha
name: Midjourney
description: Midjourney's interface feels like peering through a deep-ocean porthole into a bioluminescent void — vast, pressurized darkness with faint light sources. The #06051d near-black with violet undertone is not simply dark but dimensionally deep, distinguished from pure black by that violet warmth that reads as cosmic rather than void. A sprawling ASCII/generative text animation fills the hero against this background, making the interface itself feel like it's generating intelligence in real time. Section headings and nav use JetBrains Mono exclusively — monospace as aesthetic choice, not technical necessity, giving every label the weight of a terminal command. The three pill buttons (Sign Up, Log In, Explore) float as translucent jewels — each tinted a different hue (green, yellow, red-orange) at 20% opacity against their dark backgrounds, with matching text colors, making them feel less like CTAs and more like categorized data packets.
colors:
  cosmic-void: "#06051d"
  abyssal-blue: "#0f1c36"
  steel-navy: "#1d293d"
  deep-slate: "#314062"
  mist: "#cad5e2"
  fog: "#e5e7eb"
  ash: "#2e3038"
  ghost-white: "#ffffff"
  ice-blue: "#ebf8ff"
  portal-blue: "#63b3ed"
  bioluminescent-green: "#004f3b"
  terminal-amber: "#733e0a"
  crimson-depth: "#8b0836"
  specimen-green: "#00bc7d"
  warning-amber: "#f0b100"
  fault-red: "#ff2056"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.63
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.25
spacing:
  cardRadius: 8px
  buttonRadius: 9999px
  elementGap: 8-16px
  sectionGap: 64px
components:
  pill-button-group:
    role: 
  section-heading-with-body-about:
    role: 
  projects-section-with-image-grid:
    role: 
  sign-up-pill-button:
    role: Primary registration CTA in navigation
  log-in-pill-button:
    role: Secondary auth action in navigation
  explore-pill-button:
    role: Navigation action for main product discovery
  documentation-tab:
    role: Navigation label for technical docs section
  section-heading-with-icon:
    role: Page section titles (About, Projects, Careers)
  project-image-card:
    role: Visual showcase grid for AI-generated imagery
  sticky-navigation-bar:
    role: Primary site navigation across all pages
  hero-ascii-animation-background:
    role: Full-viewport hero visual
  inline-body-link:
    role: Hyperlinks within prose content
  background-gradient-surface:
    role: Full-page atmospheric depth layer
---

## Overview

**North Star:** Deep-ocean bioluminescent terminal. A pressurized darkness where intelligence visibly generates itself in ASCII streams, and controls appear as faintly glowing specimens.

Midjourney's interface feels like peering through a deep-ocean porthole into a bioluminescent void — vast, pressurized darkness with faint light sources. The #06051d near-black with violet undertone is not simply dark but dimensionally deep, distinguished from pure black by that violet warmth that reads as cosmic rather than void. A sprawling ASCII/generative text animation fills the hero against this background, making the interface itself feel like it's generating intelligence in real time. Section headings and nav use JetBrains Mono exclusively — monospace as aesthetic choice, not technical necessity, giving every label the weight of a terminal command. The three pill buttons (Sign Up, Log In, Explore) float as translucent jewels — each tinted a different hue (green, yellow, red-orange) at 20% opacity against their dark backgrounds, with matching text colors, making them feel less like CTAs and more like categorized data packets.

### Do's

- Use JetBrains Mono as the primary typeface for all UI elements — navigation, headings, buttons, body copy — treating monospace as the visual identity, not a code-context exception.
- Apply the three-color pill button system (green/amber/red tints at ~20% opacity) only for the Sign Up / Explore / Log In triad — do not extend the specimen-color scheme to other button types.
- Set all page backgrounds to #06051d or the gradient variant linear-gradient(0deg, #06051d 30%, #061434) — never use pure #000000, which would flatten the violet cosmic depth.
- Use 9999px border-radius for all pill buttons and 8px for all card/image containers — no intermediate values; the contrast between fully rounded and gently rounded is the shape system.
- Render section headings at 30px JetBrains Mono weight 400 with a small amber #f0b100 icon prefix — never increase to bold weights, the whisper-weight at large sizes is the signature.
- Use #63b3ed Portal Blue exclusively for inline hyperlinks and flat navigation text links — it is the only fully visible chromatic color in body content.
- Maintain 64px vertical gap between page sections to preserve the spacious, pressurized-void atmosphere between content blocks.

### Don'ts

- Do not use any sans-serif or serif font as a heading font — DM Sans is for body prose only; JetBrains Mono must dominate the typographic hierarchy.
- Do not create solid-fill opaque buttons — the translucent 20% opacity tinted backgrounds on pills are the system; solid fills break the bioluminescent specimen aesthetic.
- Do not introduce light backgrounds (#ffffff, light grays) into page sections — the design has no light mode; all surfaces must remain within the #06051d to #314062 dark range.
- Do not use more than three accent tint colors for buttons — the red/green/amber specimen triad is a closed system; adding new button colors dilutes the precision.
- Do not bold section headings or use font-weight above 500 anywhere in the UI — weight 400 at display sizes is the deliberate anti-convention choice that defines the visual voice.
- Do not add decorative imagery or photography — the only permitted visuals are AI-generated monochromatic renders and the ASCII/generative text hero.
- Do not apply colored backgrounds to body text sections — prose content must sit directly on #06051d Cosmic Void with #cad5e2 Mist text, no content cards with contrasting backgrounds.

### Layout

Narrow centered column layout with a max-width of approximately 800px — deliberately constrained for a research lab publishing cadence rather than a marketing site. The hero is full-viewport dark with centered ASCII text animation and overlaid logo, creating an immersive first screen before content begins. Below the hero, content flows as a single column of prose sections separated by 64px vertical gaps. Section headings use a left-aligned icon + label pattern. The Projects section breaks into a 4-column image grid with 8px gaps. Navigation is a full-width sticky bar at the top with left-aligned text links and right-aligned pill button cluster — no hamburger menu, no mega-menu, no sidebar. The layout is deliberately text-document-like: a long scrolling page of research notes with visual inserts, not a feature-driven marketing layout.

### Imagery

All imagery on this site is AI-generated — square-format monochromatic renders in blue-violet tones depicting anatomical and symbolic subjects: an eye with radiating iris lines, a stylized brain, a heart, a human hand, a profile of a head, lips, an arched passage, and a needle. Each image is contained in an 8px-radius tile with no text overlay. The color treatment is consistent: desaturated blue-violet with slight 3D relief texturing, making them feel like scientific specimens under ultraviolet light. No photography, no lifestyle imagery, no illustrations in the traditional sense. The hero visual is a generative ASCII sphere — thousands of characters forming a 3D ellipsoid — which is the primary 'image' of the page. Icon usage is minimal: small colored glyphs (gear, info circle) in amber preceding section headings. The visual content IS the product demonstration, not a metaphor for it.

### Elevation

Elevation is expressed through background color steps (Cosmic Void → Abyssal Blue → Steel Navy → Deep Slate) rather than shadows. The one exception is the pill button group, which carries a soft double-layer shadow (rgba(0,0,0,0.1) 0px 4px 6px -1px, rgba(0,0,0,0.1) 0px 2px 4px -2px) — subtle enough to feel like the buttons float slightly off the nav surface without breaking the flat atmospheric plane. Shadows are not used on cards or content elements.
