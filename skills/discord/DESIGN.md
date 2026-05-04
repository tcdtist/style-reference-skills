---
version: alpha
name: Discord
description: Deep cosmic blue fills every section like a starfield at 2am — not a background choice but a total environment. The hero plunges into a rich indigo-to-navy gradient populated with 3D characters, product screens, and floating mascots, making the UI feel like a game world rather than a marketing page. Blurple (#5865F2) — Discord's owned hue — appears only on primary CTAs, creating a controlled pop against the blue-black atmosphere. Typography does the heavy lifting: ABC Ginto Nord at weight 800 with tight -0.01em tracking slams headlines into all-caps blocks that feel like stamped metal, while body copy at 16px/1.5 stays conversational. The overall effect is a gaming-native space where every section is its own immersive stage, not a content column.
colors:
  blurple: "#5865f2"
  dark-blurple: "#3442d9"
  hover-blurple: "#8891f2"
  spring-green: "#57f287"
  fuchsia: "#eb459"
  vivid-cerulean: "#00b0f4"
  ember-orange: "#fda220"
  ekko-red: "#de2761"
  void: "#000000"
  snow: "#ffffff"
  not-quite-black: "#23272a"
  dark-charcoal: "#2c2f33"
  graphite: "#333333"
  fog: "#babcd9"
  greyple: "#99aab5"
  dim-grey: "#50555f"
  off-white: "#f6f6f6"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.38
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.93
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 0.86
    letterSpacing: -0.56px
  display:
    fontFamily: "system-ui"
    fontSize: 61px
    lineHeight: 0.86
    letterSpacing: -0.61px
spacing:
  cardRadius: 16px
  buttonRadius: 12px
  elementGap: 8-16px
  sectionGap: 80-120px
components:
  cta-button-group:
    role: 
  feature-showcase-card-make-your-group-chats-more-fun:
    role: 
  feature-showcase-card-always-have-something-to-do-together:
    role: 
  primary-cta-button-blurple-filled:
    role: Main call-to-action, e.g. 'Open Discord in your browser'
  secondary-cta-button-white-filled:
    role: Download prompt, paired with primary CTA
  ghost-navigation-button-transparent-outlined:
    role: Nav dropdown triggers and secondary navigation actions
  log-in-button-white-outlined:
    role: Top-right header authentication action
  feature-showcase-card:
    role: Full-bleed section content containers holding product screenshots and feature copy
  3d-character-float:
    role: Decorative mascot and character illustrations scattered at section edges
  product-screen-mock-up:
    role: Embedded Discord UI screenshots within feature cards
  navigation-bar:
    role: Global top navigation
  hero-section:
    role: Full-viewport landing block
  footer-navigation:
    role: Site-wide footer link groups
---

## Overview

**North Star:** Game world behind a chat bubble — every section is a self-contained environment with its own lighting and cast of characters.

Deep cosmic blue fills every section like a starfield at 2am — not a background choice but a total environment. The hero plunges into a rich indigo-to-navy gradient populated with 3D characters, product screens, and floating mascots, making the UI feel like a game world rather than a marketing page. Blurple (#5865F2) — Discord's owned hue — appears only on primary CTAs, creating a controlled pop against the blue-black atmosphere. Typography does the heavy lifting: ABC Ginto Nord at weight 800 with tight -0.01em tracking slams headlines into all-caps blocks that feel like stamped metal, while body copy at 16px/1.5 stays conversational. The overall effect is a gaming-native space where every section is its own immersive stage, not a content column.

### Do's

- Use ABC Ginto Nord 800 in all-caps for all section headlines; letter-spacing must be -0.01em to maintain the compressed rectangular silhouette.
- Keep #5865F2 (Blurple) exclusively on primary CTA buttons and interactive focus states — it is the only saturated color with a guaranteed role on every page.
- Set feature section cards with their own gradient or solid background color (purple-magenta, green, etc.) to differentiate sections, since the global page background never changes.
- Pair the blurple CTA button with a white filled secondary button using padding 15px 24px and radius 12px — never use blurple for both primary and secondary in the same CTA cluster.
- Position 3D characters and mascot assets at card edges, overlapping between sections — the overlap is what creates the immersive environment, not isolated placement.
- Apply 12px border-radius to standard buttons and 16px to the Log In/header button to maintain the subtle size hierarchy between interaction contexts.
- Use the Fog color (#BABCD9) for body text in dark sections where full white (#FFFFFF) would overpower headlines — reserve pure white for headlines and critical UI labels.

### Don'ts

- Never use a white or light-gray page background — the deep blue-black environment is non-negotiable for the brand atmosphere; even light-themed sections should be contained within cards.
- Never apply ABC Ginto Nord headlines at mixed-case — the all-caps + tight tracking combination is inseparable from the visual identity.
- Never place Blurple as a background color on large areas (sections, cards) — at scale it overwhelms the controlled accent role and collapses contrast with Blurple text.
- Never use gradient text on headlines — the weight and mass of the black-filled letterforms is the visual statement; gradients would undermine the stamped-metal quality.
- Never add drop shadows to feature cards — section identity comes from contrasting card backgrounds, not elevation shadow depth.
- Never reduce button border-radius below 12px — anything sharper breaks the rounded-corner system that softens the otherwise heavy typographic tone.
- Never use Greyple (#99AAB5) or Dim Grey (#50555F) as primary text colors — they are reserved for disabled, muted, and placeholder states only.

### Layout

Full-bleed at the page level with no explicit max-width container visible — the deep blue background extends edge-to-edge. Hero is a split composition: text block flush-left with 3D product composite filling the right half, both contained within viewport height. Feature sections below the hero use large-radius cards (~24px) that span 80-90% of the viewport width, each card being a self-contained stage. Within cards, layout is 50/50 split — product screenshot left, headline + body right (or reversed). No alternating light/dark band rhythm — all sections share the same dark background; differentiation comes from card background colors. Navigation is a fixed-top full-width bar with centered link groups. Footer uses a 4-5 column link grid. The page is extremely long (7300px+), with generous inter-section gaps of 80-120px giving each feature room to breathe.

### Imagery

Entirely 3D illustration and product screenshots — no photography. Characters are rendered in a cartoon-realistic 3D style with soft subsurface lighting, purple-blue-tinted shadows, and saturated clothing colors (orange, lavender, pink hoodie). They're posed mid-gesture and placed off-axis against the page, creating dynamism without a static layout grid. Product screenshots are composited into device frames (monitor bezel, phone outline) rendered in the same 3D style, making the 'product demo' feel like part of the illustration world rather than a flat screen-grab. Feature cards use full-bleed gradient backgrounds (purple-to-magenta, deep green) as the canvas for these screenshot composites — the gradient IS the scene lighting. Floating 3D props (a peach, a crystal, a robot mascot in lime green) appear at section boundaries as scene accessories. Zero photography — the visual world is entirely constructed, reinforcing that Discord is a space you build rather than a place that exists.

### Elevation

Discord marketing pages use no traditional box-shadow elevation. Depth is created entirely through color contrast between section backgrounds and floating card surfaces. 3D rendered characters establish z-depth through artistic perspective and overlap, not CSS shadows. The only elevation cue is scale — larger elements read as closer.
