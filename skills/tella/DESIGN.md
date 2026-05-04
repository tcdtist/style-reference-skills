---
version: alpha
name: Tella
description: Tella pulses with electric violet energy — a hero that washes the entire viewport in saturated purple (#5e51f8 to #251544), then cuts hard to white for feature sections. The contrast is deliberate and jarring in the best way: you go from immersive chromatic field to clinical white card grid without transition. The headline font NaN Jaune Midi Bold does the heavy lifting — a chunky, tightly-tracked display face at -0.054em letter-spacing that feels like broadcast TV titles squeezed into browser chrome. Lavender-tinted secondary text (#cfcbfd on dark, #d7d3fd on features) carries brand color even into body copy, preventing the white sections from losing brand identity. The pill-shaped dark CTA floating in a violet sea is the signature contradiction: the most important action is the darkest, most contained element on the page.
colors:
  signal-violet: "#5e51f8"
  deep-nebula: "#251544"
  iris-mid: "#4b41c6"
  soft-amethyst: "#cfcbfd"
  lavender-mist: "#d5a8f5"
  powder-violet: "#d7d3fd"
  periwinkle-glow: "#867dfa"
  celestial-cyan: "#99eeff"
  ink: "#0f172a"
  slate: "#475569"
  steel: "#808a99"
  fog: "#94a3b8"
  ash-border: "#e5e7eb"
  chalk: "#f8fafc"
  pure-white: "#ffffff"
  carbon: "#111111"
  deep-violet-text: "#312e58"
  hero-gradient: "#5e51f8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 18
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 22
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 25
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 27
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 29
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 36
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 62
    letterSpacing: -3.02px
  display:
    fontFamily: "system-ui"
    fontSize: 84px
    lineHeight: 93
    letterSpacing: -4.54px
spacing:
  cardRadius: 24px
  buttonRadius: 40px
  elementGap: 16px
  sectionGap: 96px
components:
  hero-cta-section:
    role: 
  feature-cards-grid:
    role: 
  tab-selector-video-demo-card:
    role: 
  hero-primary-cta-button:
    role: Main conversion action on the violet hero
  lavender-accent-pill-button:
    role: Secondary or decorative CTA variant
  ghost-navigation-link:
    role: Top nav links (Features, Resources, Pricing)
  outlined-sign-up-button:
    role: Nav bar secondary action
  feature-card:
    role: Individual feature showcase in the horizontal scrolling card grid
  tab-selector-demo-tutorials-courses:
    role: Content filter tabs beneath the hero product screenshot
  video-demo-card:
    role: Inline video teaser with play button
  product-screenshot-frame:
    role: Showcasing the Tella app UI within the hero
  social-proof-avatar-row:
    role: Trust signal showing user community
  gear-list-content-card:
    role: Embedded product content card (within app screenshot)
  footnote-trial-copy:
    role: De-emphasised trust copy beneath primary CTA
---

## Overview

**North Star:** Violet broadcast signal — the design feels like a TV network's on-air package: full-bleed chromatic fields, bold compressed display type, hard cuts between saturated and white.

Tella pulses with electric violet energy — a hero that washes the entire viewport in saturated purple (#5e51f8 to #251544), then cuts hard to white for feature sections. The contrast is deliberate and jarring in the best way: you go from immersive chromatic field to clinical white card grid without transition. The headline font NaN Jaune Midi Bold does the heavy lifting — a chunky, tightly-tracked display face at -0.054em letter-spacing that feels like broadcast TV titles squeezed into browser chrome. Lavender-tinted secondary text (#cfcbfd on dark, #d7d3fd on features) carries brand color even into body copy, preventing the white sections from losing brand identity. The pill-shaped dark CTA floating in a violet sea is the signature contradiction: the most important action is the darkest, most contained element on the page.

### Do's

- Use NaN Jaune Midi Bold with letter-spacing -0.047em to -0.054em for all display headlines above 48px — never set this font at tracking above -0.036em or it loses its broadcast-title compression.
- Apply the full-bleed violet hero (#5e51f8 → #251544 gradient) as a hard-cut section, not a fade — the abrupt transition to #f8fafc white is a signature move, not a design error.
- Use 40px border-radius for all interactive pill elements: CTA buttons, nav sign-up button, tab selectors, and tag labels — this is the single rounded form that appears system-wide.
- Tint feature card illustrations and ghost text with #d7d3fd or #cfcbfd on white surfaces — this keeps brand violet present in content sections without saturating the white ground.
- Apply the lavender glow shadow (rgba(238,217,253,0.25) 0px 16px 64px 4px) to product screenshots and elevated frames — generic black shadows on violet-adjacent content would break the brand-colored elevation system.
- Maintain the dark CTA (#111111 pill) as the primary action on violet hero sections — the unexpected darkness against saturated violet reads as decisive contrast, not absence of brand.
- Use Inter 700 at 24-30px for section subheadings on white sections — NaN Jaune Midi is reserved for display sizes only; Inter carries section-level hierarchy below 48px.

### Don'ts

- Never use NaN Jaune Midi Bold below 48px — the custom face loses its display impact at text sizes and competes poorly with Inter's legibility.
- Never add gradient transitions between the violet hero and white sections — the hard cut is a deliberate design choice, not a transition oversight.
- Never use semantic red/green for status colors without verifying they appear in the design system — no semantic colors were detected in the extracted data; default to violet (#5e51f8) for interactive states.
- Never apply card border-radius below 24px — even small UI elements use 12-20px; the system has no sharp-cornered cards.
- Never place the lavender pill button (#d5a8f5) as the sole primary CTA — it reads as decorative or secondary alongside the dark pill; always pair it with or subordinate it to #111111 primary action.
- Never use box-shadows with warm-toned or yellow-shifted colors — all elevation uses either neutral black rgba(0,0,0,x) or brand-tinted lavender rgba(238,217,253,x). No warm brown or golden shadow tones.
- Never center-align body copy in card grids at more than 2 lines — the feature cards use left-aligned body text below card headers; centered multi-line body copy breaks the card's reading rhythm.

### Layout

Max-width approximately 1200px, centered. Hero is full-bleed violet spanning the full viewport width and approximately 100vh, with centered headline stack and a single dark pill CTA. Below the CTA, a tab row switches between content modes, and a large product screenshot frame extends below the fold — the frame bottom intentionally crops, pulling the eye down. The hero-to-white section transition is a hard cut with no gradient bridge. Feature sections use a horizontal scroll card grid (4 visible cards, partial 5th visible, approximately 280px wide each) — not a static grid, implying overflow scroll on desktop. The video demo card floats in the transition zone between violet and white, using a card-on-gradient effect. Social proof is a single centered row at near-full width. Navigation is a fixed top bar with logo left, three links centered, auth actions right — standard SaaS nav but the sign-up button uses a pill outline matching the brand's rounded language. Footer is multi-column with approximately 3 content columns on a dark violet/near-black background.

### Imagery

Tella's visual language mixes real user webcam footage (candid, casual, head-and-shoulders crops inside rounded device frames) with flat-style brand illustrations. The webcam footage is raw and unretouched — intentionally amateur-feeling, matching the 'anyone can make videos' positioning. Product screenshots are contained within simulated laptop/monitor bezels at 16px internal radius. Feature card illustrations use ultra-light lavender (#d7d3fd, #cfcbfd) line drawings on white — outline-style, no fill, geometric human figures carrying trash (delete silences), large typographic elements ('um', 'ahh', 'ehhh' in fading lavender) for the filler-words card. Icons are outlined, approximately 1.5px stroke weight, monochromatic using #5e51f8 or #94a3b8. The rainbow linear/conic gradient (yellow→cyan→magenta) appears as an animated decorative ring — a neon halo effect, likely around the logo or a status indicator. Imagery is sparse: the white sections are text-and-illustration dominant, the hero is type-dominant with one large contained product demo below the fold.

### Elevation

Tella uses shadows only at section boundaries and floating elements — never on text or inline content. The hero-to-white transition is handled by hard color cuts, not shadows. Elevated cards on white use rgba(0,0,0,0.15) 0px 8px 32px 4px — a single soft ambient layer. The lavender-tinted glow shadow rgba(238,217,253,0.25) 0px 16px 64px 4px appears on product screenshots and video frames within the violet sections, making elevation feel brand-colored rather than neutral.
