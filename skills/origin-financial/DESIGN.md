---
version: alpha
name: Origin Financial
description: Origin Financial employs a 'Dark Canvas, Subtle Glow' visual system. It uses a deep, rich dark grey as its primary background, accented by layers of lighter, desaturated greys for elevated surfaces and text. Typography is elegant, with a focus on restrained display fonts and highly legible body text. While largely monochromatic, the system introduces a spectrum of soft, vivid colors within functional cards, creating a sense of dynamic data visualization and subtle branding rather than overt color blocking.
colors:
  midnight-ink: "#0f1011"
  elevated-charcoal: "#2e2e2e"
  slate-canvas: "#000000"
  ghost-white: "#ffffff"
  faded-mist: "#f5f5f7"
  subtle-ash: "#cacaca"
  whisper-blue: "#6a6b6b"
  ocean-glimmer: "#00b3dd"
  violet-haze: "#847dff"
  lavender-mist: "#d1c9ff"
  soft-rose: "#dd90d8"
  deep-indigo: "#4b49aa"
  sky-tint: "#90b8f0"
  deep-sea: "#195f97"
  dark-sky-gradient: "#2b2b2c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: 0.182px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.9
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.9
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 12px
  sectionGap: 64px
components:
  primary-ghost-button:
    role: Main call to action on dark backgrounds.
  light-filled-button:
    role: Call to action on dark backgrounds where immediate strong contrast is needed.
  circular-micro-button:
    role: Small, interactive buttons for secondary actions or toggles.
  pill-input-field:
    role: Search bars or prominent single-line text inputs.
  themed-content-card:
    role: Displaying data or information with a unique thematic background color.
  seamless-card:
    role: Cards seamlessly integrated into the background with no discernible borders or shadows.
  floating-data-card:
    role: Elevated card for statistical data or features, used against a dark background.
---

## Overview

**North Star:** Midnight Command Center – screens glowing with data against a dark, seamless backdrop.

Origin Financial employs a 'Dark Canvas, Subtle Glow' visual system. It uses a deep, rich dark grey as its primary background, accented by layers of lighter, desaturated greys for elevated surfaces and text. Typography is elegant, with a focus on restrained display fonts and highly legible body text. While largely monochromatic, the system introduces a spectrum of soft, vivid colors within functional cards, creating a sense of dynamic data visualization and subtle branding rather than overt color blocking.

### Do's

- Always use Midnight Ink (#0f1011) as the primary page background to maintain the dark theme.
- Utilize Lyondisplay App weight 300 for prominent headlines, letting its lightness convey subtle authority.
- Apply a generous 16px border-radius to static cards and 8px to interactive components like buttons and inputs.
- Structure primary buttons as Ghost White text on a transparent background, accented with a light border, to maintain visual lightness.
- Incorporate accent colors like Ocean Glimmer (#00b3dd) or Violet Haze (#847dff) primarily within card backgrounds or data visualizations, as functional highlights.
- Maintain comfortable element spacing with 12px as a common `elementGap` between related items.
- Ensure all body text uses Suisseintl weight 400 for optimal readability on dark backgrounds.

### Don'ts

- Avoid using harsh, saturated primary colors for large background areas; reserve vivid hues for contained accents.
- Do not introduce strong drop shadows; the system relies on distinct background colors and subtle borders for elevation.
- Do not deviate from the specified font families or their intended weights and letter spacing, as these are critical for brand identity.
- Never use Ghost White (#ffffff) text directly on Slate Canvas (#000000) for large text blocks; primary text should sit against Midnight Ink or Elevated Charcoal for optimal contrast.
- Avoid using generic button styles; always apply the specific radius (8px or 1440px) as defined for primary actions.
- Do not create dense layouts; maintain a comfortable density with ample padding and vertical spacing.
- Don't use more than a single accent color in any given visual area to avoid visual clutter and maintain focus.

### Layout

The page uses a max-width 1200px centered layout for content sections. The hero section is full-bleed, featuring atmospheric photography or gradient backgrounds with a large, centered headline and a centered call-to-action block. Subsequent sections maintain consistent vertical spacing, creating a comfortable, unhurried rhythm. Content is often presented in centered stacks or a 3-column card grid, with cards dynamically themed. Navigation is a sticky top bar, minimal and semi-transparent, supporting a secondary Log In button and a prominent 'Get Started' ghost button. The layout feels spacious and deliberate, with breathing room between major content blocks.

### Imagery

The site primarily uses dark, atmospheric photography as background elements in hero sections, often with cloud formations, setting a reflective and expansive mood. Product screenshots are contained within device mockups (like iPhones), showcasing the UI in a dark mode context, implying functionality and data visualization. Illustrations are absent. Icons are minimal, monochromatic, and outlined, reinforcing the clean, data-focused UI. Imagery serves as decorative atmosphere or explanatory product showcase, not content-heavy. The overall density is text-dominant.
