---
version: alpha
name: ElevenLabs
description: ElevenLabs feels like a museum label next to a working instrument — type-first, almost severe, yet alive with subtle warmth in the off-white surfaces. The page background #fdfcfc (named 'Eggshell' in the CSS tokens) is barely-not-white, giving the layout a slight papery warmth that black text lands on with extraordinary weight. Headlines use Waldenburg at weight 300 with -0.02em tracking, a custom serif that whispers where competitors shout — the counter-intuitive choice of a light-weight, slightly classical typeface for an AI voice platform creates authority through restraint. The entire chromatic palette is suppressed to near-zero saturation: #e5e5e5 borders, #777169 secondary text (a warm stone gray), and #fdfcfc surfaces — the only true color breaks come from pill-shaped black CTA buttons and the small colored avatar dots on voice profiles. The product UI card floats on a hairline shadow (0px 0px 1px rgba(0,0,0,0.4)) rather than elevation depth, keeping everything in the same visual plane.
colors:
  eggshell: "#fdfcfc"
  powder: "#f5f3f1"
  chalk: "#e5e5e5"
  fog: "#b1b0b0"
  gravel: "#777169"
  slate: "#a59f97"
  cinder: "#57534"
  obsidian: "#000000"
  signal-blue: "#0447ff"
  ember: "#ff4704"
  voice-spectrum: "#3d75d8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.44
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.17
    letterSpacing: -0.64px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.13
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.08
    letterSpacing: -0.96px
spacing:
  cardRadius: 16px
  buttonRadius: 9999px
  elementGap: 8-12px
  sectionGap: 80-120px
components:
  cta-button-group:
    role: 
  product-demo-card-voice-list:
    role: 
  social-proof-logo-grid:
    role: 
  primary-pill-button-filled:
    role: Primary CTA — Sign up, Play, Submit
  ghost-pill-button-outline:
    role: Secondary actions — Contact sales, Log in, Read all stories
  rounded-outline-button-tab-toggle:
    role: Segmented control tabs — ElevenCreative, ElevenAgents, ElevenAPI selector
  compact-action-button:
    role: Inline UI actions — pagination arrows, expand/collapse controls
  product-demo-card:
    role: Interactive voice-player UI card embedded in hero section
  voice-list-item:
    role: Individual voice selection row inside demo card
  navigation-bar:
    role: Top global navigation
  section-divider-label:
    role: Eyebrow text above section headings
  text-input-transparent:
    role: Inline text editors and search fields
  text-input-contained:
    role: Form inputs with white background
  feature-platform-card-ghost:
    role: Two-column product description cards — ElevenCreative / ElevenAgents
---

## Overview

**North Star:** Architect's blueprint on warm vellum — Waldenburg weight-300 headlines at 48px with -0.02em tracking anchored against an eggshell ground, pure black pill buttons as the only punctuation.

ElevenLabs feels like a museum label next to a working instrument — type-first, almost severe, yet alive with subtle warmth in the off-white surfaces. The page background #fdfcfc (named 'Eggshell' in the CSS tokens) is barely-not-white, giving the layout a slight papery warmth that black text lands on with extraordinary weight. Headlines use Waldenburg at weight 300 with -0.02em tracking, a custom serif that whispers where competitors shout — the counter-intuitive choice of a light-weight, slightly classical typeface for an AI voice platform creates authority through restraint. The entire chromatic palette is suppressed to near-zero saturation: #e5e5e5 borders, #777169 secondary text (a warm stone gray), and #fdfcfc surfaces — the only true color breaks come from pill-shaped black CTA buttons and the small colored avatar dots on voice profiles. The product UI card floats on a hairline shadow (0px 0px 1px rgba(0,0,0,0.4)) rather than elevation depth, keeping everything in the same visual plane.

### Do's

- Use Waldenburg 300 with -0.02em letter-spacing for all headings at 32px and above — never substitute a heavier weight.
- Apply 9999px border-radius to every button and pill tag; use 16-20px for cards and panels; use 0px for bare input fields.
- Keep the entire color palette at near-zero saturation: #000000 text, #fdfcfc background, #e5e5e5 borders, #777169 secondary text. Reserve #ff4704 and #0447ff for product avatar dots only.
- Use the inset shadow rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset on white UI surfaces that sit on eggshell — it replaces border outlines on cards without adding visual weight.
- Use Geist Mono 400 13px only for machine-generated or technical inline annotations (e.g. [whispers], [sarcastic]) and code snippets.
- Render all third-party logos in the social proof grid at #b1b0b0 (Fog) with no hover color change — chromatic logos break the achromatic discipline.
- Size section gaps at 80-120px vertical spacing between major content blocks; use 8-12px for element-level gaps within components.

### Don'ts

- Never use a weight above 300 for Waldenburg display headlines — weight 700 belongs only to WaldenburgFH product-label contexts at 14px.
- Never introduce saturated color for text, background fills, or buttons — the Signal Blue #0447ff and Ember #ff4704 are reserved exclusively for 8-16px avatar/dot indicators.
- Never apply box-shadow elevation larger than rgba(0,0,0,0.4) 0px 0px 1.143px — ElevenLabs cards float by 1px shadow, not by depth layering.
- Never use a pure white #ffffff background for page surfaces — use #fdfcfc (Eggshell) for all base surfaces to preserve the warm papery ground.
- Never place Inter body text below 13px in product UI contexts or below 14px in marketing prose — the 0.01em tracking needs minimum size to work.
- Never use more than two button variants in the same visual cluster — one filled black pill (primary) + one white ghost pill (secondary) is the maximum combination.
- Never apply border-radius to input fields — inputs use 0px radius, creating an editorial underline-or-box distinction from the rounded interactive elements.

### Layout

Max-width ~1200px centered on eggshell ground. Hero is a two-column asymmetric split: large Waldenburg headline left (60% width) with body text right, followed by two pill buttons. Below the fold, a full-width white product card (border-radius 16px) acts as a live demo embed spanning the full content column. Logo grid is a 6-column × 3-row flat array on white, centered, with generous 24-32px row gaps. Feature descriptions use a 2-column text block layout (no images, purely typographic). Navigation is a slim 36px top bar, likely sticky on scroll, with logo left and auth CTAs right. Section rhythm is seamless — no alternating dark/light bands; the entire page is the same eggshell ground broken only by the white card surfaces and the #f5f3f1 subtle hover zones.

### Imagery

Product screenshots are the dominant visual — specifically, the interactive voice-player UI shown as a white card with structured list and text area. No lifestyle photography is present. Illustration is absent. The only 'graphic' element is the conic-gradient logomark, a spinning blue-to-cyan color wheel suggesting audio waveforms or voice spectra, contained within a ~24px icon footprint. Voice avatars use small 28-32px circular gradient fills (multicolor mini-spheres) as person-indicators — these are the only chromatic imagery in the UI. Social proof section uses SVG wordmark logos uniformly desaturated to #b1b0b0 Fog. The design is text-dominant: imagery occupies roughly 30% of visual space with the product card; 70% is typographic.

### Elevation

ElevenLabs uses only hairline elevation: rgba(0,0,0,0.4) 0px 0px 1.143px with a secondary rgba(0,0,0,0.04) 0px 2px 4px. Cards barely detach from the eggshell surface — they hover rather than float. This flatness keeps all UI elements in the same perceptual plane, matching the editorial, text-first design intention. The inset shadow rgba(0,0,0,0.075) 0px 0px 0px 0.5px is used instead of border-color on white-on-eggshell surfaces.
