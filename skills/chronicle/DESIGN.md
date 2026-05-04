---
version: alpha
name: Chronicle
description: Chronicle runs on a strict achromatic foundation: white canvas, near-black ink, and a structured gray scale — no brand color, no decorative hue, zero saturation. The product UI (rendered in electric blue inside presentation previews) is the only color that appears on the page, framed as content rather than interface chrome. Typography is a single custom variable font, Diatype, at tight negative tracking — headlines compress letterforms so aggressively at large sizes that the text feels mechanically engraved rather than set. Buttons are either filled black or ghost-outlined, both with hairline 4px radius corners, keeping the interface sharp and editorial rather than app-friendly. The overall rhythm is generous white space punctuated by 1px borders and one subtle card shadow, with sections separated by alternating white and warm-gray (#f3f3f3) bands.
colors:
  pitch-black: "#050505"
  midnight: "#000000"
  charcoal: "#151515"
  obsidian: "#292929"
  graphite: "#6b6b6b"
  pewter: "#7e7e7e"
  ash: "#929292"
  silver: "#b3b3b3"
  fog: "#e2e2e2"
  limestone: "#f3f3f3"
  cloud: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.4px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -0.74px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.05
    letterSpacing: -1.44px
  display:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1
    letterSpacing: -1.62px
spacing:
  cardRadius: 8px
  buttonRadius: 4px
  elementGap: 8px
  sectionGap: 80-128px
components:
  filled-black-cta-button:
    role: Primary call-to-action — 'Try for free', 'Try Chronicle'
  ghost-underline-button:
    role: Secondary text action — 'Watch video', tab-style navigation items
  muted-ghost-button:
    role: Inactive or de-emphasized action
  pill-tab-button:
    role: Horizontal tab navigation — presentation type selectors (Sales proposal, Pitch deck, etc.)
  testimonial-card:
    role: Social proof — customer quote with logo, name, role
  product-preview-frame:
    role: In-page presentation screenshot / app preview
  logo-trust-bar:
    role: Social proof partner / customer logos
  navigation-bar:
    role: Primary site header
  section-divider-tab-row:
    role: Tabbed content switcher above the hero product preview
  ai-prompt-input-card:
    role: Product UI element — chat/prompt card visible in feature section
---

## Overview

**North Star:** Typographer's proof sheet — a composited page where precision of letterform carries the entire visual weight, color is an intrusion, and the grid is the design.

Chronicle runs on a strict achromatic foundation: white canvas, near-black ink, and a structured gray scale — no brand color, no decorative hue, zero saturation. The product UI (rendered in electric blue inside presentation previews) is the only color that appears on the page, framed as content rather than interface chrome. Typography is a single custom variable font, Diatype, at tight negative tracking — headlines compress letterforms so aggressively at large sizes that the text feels mechanically engraved rather than set. Buttons are either filled black or ghost-outlined, both with hairline 4px radius corners, keeping the interface sharp and editorial rather than app-friendly. The overall rhythm is generous white space punctuated by 1px borders and one subtle card shadow, with sections separated by alternating white and warm-gray (#f3f3f3) bands.

### Do's

- Use #000000 or #050505 as the filled button background — never use a chromatic color for any interactive element
- Apply Diatype with letter-spacing -0.030em at 54px display and -0.023em at 32px headings; body text at 16px uses 0 tracking
- Alternate page sections between #ffffff and #f3f3f3 backgrounds to create rhythm without decorative elements
- Use 4px border-radius for all buttons, inputs, and tags; 8px for cards and image frames only
- Maintain 1px solid #e2e2e2 hairline borders on image frames and card edges — never use thicker strokes
- Reserve electric blue and any chromatic color strictly for rendered product UI content inside frames, never in navigation, buttons, or backgrounds
- Use the single shadow token (rgba(5,5,5,0.08) 0px 2px 24px 0px) only for white cards sitting on gray surfaces — no shadow on white-on-white

### Don'ts

- Never introduce a brand color (blue, purple, green) into navigation, buttons, section backgrounds, or typography — the UI is intentionally achromatic
- Never round buttons or inputs beyond 4px — pill-shaped buttons would break the editorial typographic register
- Never use font weights above 500 — Diatype at 400/500 is the full weight range; heavier weights crush the mechanical letterform quality
- Never stack more than two type sizes within a single content block without re-establishing hierarchy through #6b6b6b muted color rather than additional size steps
- Never apply more than one shadow elevation level — the system uses a single subtle card shadow; adding layered shadows introduces unwanted depth
- Never center-align body paragraphs or subheadings — all text below headline level is left-aligned
- Never use #b3b3b3 or #929292 as text colors for meaningful content — these tones exist only for disabled states and decorative separators

### Layout

Max-width 1212px centered on a white canvas. Hero is a two-column split: large left-aligned headline stack (Diatype 54px) with two buttons below, and a right-aligned product preview frame occupying roughly 55% of the viewport width. Below the hero, horizontal tab row switches between presentation type previews. Sections alternate between white (#ffffff) and warm gray (#f3f3f3) bands with 80-128px vertical separation — no decorative dividers, just background color shifts. Feature sections use a 50/50 split (photo or product UI left, stepped text list right) with left-to-right reading flow. Testimonials appear in a horizontal 3-column card grid on the gray surface. Footer CTA is a centered stack on white with a single filled black pill button. Navigation is a top sticky bar with logo-left / links-center / actions-right pattern.

### Imagery

Imagery is sparse and purposeful: the hero features a product screenshot (the Chronicle editor) rendered inside a browser/application frame with a vivid electric-blue slide canvas — this is the only color on the entire page and functions as proof-of-product rather than decoration. Below the fold, a full-bleed photograph of an urban street scene (San Francisco neighborhood) appears as a muted, journalistic background behind a product UI overlay card, creating a contrast between raw real-world context and the polished editor interface. Testimonial cards show small circular headshots (natural photography, tight crops, no stylization). Icons are monochrome filled symbols at ~16px, single-weight, achromatic. The overall density is text-dominant — imagery occupies roughly 30% of screen real estate and always frames the product rather than evoking lifestyle.

### Elevation

Chronicle uses a single, minimal shadow token — rgba(5,5,5,0.08) 0px 2px 24px 0px — applied exclusively to white cards that sit on #f3f3f3 gray surfaces. The shadow is warm-dark (near-black tint at 8% opacity) rather than cool-blue, keeping the achromatic commitment. On white-on-white surfaces, cards are differentiated by #e2e2e2 hairline borders alone — no shadow, no tint. This creates a flat, document-like hierarchy where surfaces feel printed rather than floating.
