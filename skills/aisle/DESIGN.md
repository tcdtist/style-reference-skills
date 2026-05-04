---
version: alpha
name: Aisle
description: Aisle uses a natural, organic visual language with a focus on soft, inviting textures and a grounding palette. Typography balances modern, geometric forms with humanistic touches, creating approachability. Surfaces are generally flat and minimal, with subtle borders and inset shadows providing depth rather than heavy elevation. The design promotes a sense of calm and natural comfort, utilizing earth tones and a singular vibrant accent for key interactive elements.
colors:
  forest-green: "#144747"
  harvest-gold: "#d9e142"
  deep-plum: "#162a91"
  rose-bloom: "#c52242"
  ocean-stone: "#516b84"
  warm-clay: "#bdab9b"
  graphite: "#292623"
  canvas-white: "#fffffb"
  pure-white: "#ffffff"
  pale-ash: "#e3e8df"
  jet-black: "#000000"
  light-pebble: "#d6d4d3"
  cream-tint: "#f5f5f2"
  dark-charcoal: "#201d1d"
  slate-gray: "#606a72"
  true-black: "#10131c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.1
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.4
  display-sm:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
  display-lg:
    fontFamily: "system-ui"
    fontSize: 85px
    lineHeight: 1.1
spacing:
  cardRadius: 0px
  buttonRadius: 39px
  elementGap: 4px
  sectionGap: 120px
components:
  primary-ghost-button:
    role: Standard interactive element for calls to action.
  secondary-ghost-button:
    role: Less prominent interactive elements, often used for navigation or supplementary actions.
  promotional-button:
    role: Highlighting special offers or urgent calls to action.
  ghost-button-dark-text:
    role: Interactive elements on light backgrounds where a dark text contrast is needed.
  default-card:
    role: Basic content container, typically for product listings or informational blocks.
  elevated-card:
    role: Content cards with slight visual separation from the background.
  input-field:
    role: Standard form input for text entry.
  radio-checkbox-input:
    role: Interactive selectors.
---

## Overview

**North Star:** earthy comfort, quiet confidence

Aisle uses a natural, organic visual language with a focus on soft, inviting textures and a grounding palette. Typography balances modern, geometric forms with humanistic touches, creating approachability. Surfaces are generally flat and minimal, with subtle borders and inset shadows providing depth rather than heavy elevation. The design promotes a sense of calm and natural comfort, utilizing earth tones and a singular vibrant accent for key interactive elements.

### Do's

- Use Forest Green (#144747) for all primary interactive elements and subtle inset button shadows to maintain a cohesive brand feel.
- Apply a 39px border-radius to all primary buttons for a soft, pill-like appearance.
- Prioritize Montserrat for all body text and general interface labels in weights 400, 600, or 700 with standard letter spacing.
- Employ RocGrotesk-ExtraWide at 48px or 56px, weight 400, for heroic headlines to convey prominence with minimalist impact.
- Structure layouts with a default 4px element gap for compact content, expanding to 10px for card padding, and 120px for section separation.
- Utilize Pale Ash (#e3e8df) or Cream Tint (#f5f5f2) for backgrounds of distinct content blocks to create subtle layering against the Canvas White (#fffffb) page background.
- Ensure input fields have a Pure White (#ffffff) background, Jet Black (#000000) text, and a Slate Gray (#606a72) border with a 4px radius.

### Don'ts

- Avoid harsh, strong shadows; use only the defined inset shadows for buttons.
- Do not use saturated brand colors like Deep Plum, Rose Bloom, Ocean Stone, or Warm Clay as primary text or border colors; reserve them for background blocks.
- Do not vary border-radius for cards; maintain a sharp 0px radius for all card components.
- Avoid using generic blue for links; all links should primarily use Graphite (#292623) or Pure White (#ffffff) based on context.
- Do not overuse the Harvest Gold (#d9e142) accent; reserve it strictly for high-impact promotional buttons.
- Do not introduce new typefaces; restrict typography to Montserrat, Moderat, roc-grotesk-wide, RocGrotesk-ExtraWide, Poppins, ModeratMono, and Arial.
- Avoid complex gradients; the system operates on solid colors and subtle color shifts.

### Layout

The page primarily uses a full-bleed layout, particularly for hero sections and lifestyle imagery that spans the viewport width. Content within sections tends to be centrally aligned or uses alternating text-left/image-right compositions. Vertical rhythm is established through consistent section gaps, creating a spacious and unhurried browsing experience. Navigation is a prominent sticky header at the top, offering primary categories and utility icons.

### Imagery

Photography is dominant, featuring natural-looking models in casual, relatable poses, often against muted or earthy backdrops, emphasizing comfort and authenticity. Product shots are typically clean, close-up crops, minimizing distractions. Iconography is simple and outlined, often in black or a supporting neutral, maintaining the minimalist and natural aesthetic. Imagery is used expansively, sometimes full-bleed beneath text, contributing significantly to the atmospheric quality of the design.
