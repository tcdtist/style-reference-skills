---
version: alpha
name: TinyFaces NFT
description: The TinyFaces NFT design system presents a playful, yet grounded aesthetic, blending softly muted pastels with strong, grounded typography. Its visual identity revolves around distinctive 3D character illustrations. The UI, while text-dominant, uses color sparingly for section distinction and branding, creating a sense of collectible rarity and nostalgic charm.
colors:
  midnight-ink: "#212529"
  cloud-canvas: "#f4f4f2"
  silver-mist: "#d4d5d4"
  white-smoke: "#ffffff"
  coral-charm: "#ed4a29"
  deep-ocean: "#142855"
  sage-whisper: "#8d9876"
  sky-patch: "#a0b1cd"
  rose-bloom: "#e5cce0"
  sandstone-highlight: "#f4ddbe"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: 0.079px
  heading:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 187px
    lineHeight: 1
spacing:
  buttonRadius: 23px
  elementGap: 8px
  sectionGap: 64px
components:
  navigation-link:
    role: Header and footer links
  filled-primary-button:
    role: Main call-to-action
  ghost-primary-button:
    role: Secondary call-to-action
  text-button:
    role: Tertiary actions, links within sentences or phrases
  muted-pastel-card-sky-patch:
    role: Content container for features or thematic sections
  muted-pastel-card-rose-bloom:
    role: Content container for features or thematic sections
  muted-pastel-card-sage-whisper:
    role: Content container for features or thematic sections
---

## Overview

**North Star:** Whimsical collectibles on pastel canvas

The TinyFaces NFT design system presents a playful, yet grounded aesthetic, blending softly muted pastels with strong, grounded typography. Its visual identity revolves around distinctive 3D character illustrations. The UI, while text-dominant, uses color sparingly for section distinction and branding, creating a sense of collectible rarity and nostalgic charm.

### Do's

- Use Migra (500) for all main headings to assert brand identity, prioritizing its unique character over conventional readability for large text.
- Apply Deep Ocean (#142855) as a background for high-impact hero sections to ground the whimsical 3D art.
- Container components such as cards should consistently use a 10px border-radius, maintaining a soft visual system.
- Utilize Coral Charm (#ed4a29) exclusively for interactive elements like links and active states where a clear, vibrant accent is needed.
- Maintain a clear visual hierarchy by limiting saturated colors to accents and content distinctions, keeping the main UI in neutrals and pastels.
- Implement the Inter font family with 0.0790em letter-spacing for all body and UI text, contributing to an open and spacious textual presentation.
- Ensure buttons adhere to a 23px border-radius when filled and 22px when ghosted, creating a consistent pill-shaped aesthetic.

### Don'ts

- Do not use saturated colors for large background areas unless it is a specific accent card background from the defined pastel palette.
- Avoid applying heavy shadows or complex gradients; the system relies on flat surfaces and minimal depth.
- Do not vary border-radius arbitrarily; stick to 10px for cards and 23px or 22px for buttons to maintain shape consistency.
- Avoid using more than one brand accent color (Coral Charm) for interactive states on a single screen to prevent visual clutter.
- Do not use system fonts other than Arial (13px) for specific functional text; Inter or Migra should cover the primary typographic needs.
- Do not clutter layouts; aim for a compact density with 8px element gaps and 64px section gaps, allowing content and characters to breathe.
- Do not introduce strong, contrasting borders on elements unless it is specifically part of a defined component variant.

### Layout

The page primarily uses a full-bleed layout for sections, with content often centered or arranged in multi-column grids. The hero section features a dense grid of 3D characters against a Deep Ocean (#142855) background, establishing a digital showroom feel. Subsequent sections alternate background colors, such as Cloud Canvas (#f4f4f2) or specific accent pastels (Sky Patch, Rose Bloom, Sage Whisper) for cards, creating a rhythmic visual flow. Content blocks often appear in a two-column text-left/image-right pattern or as centered stacks within these colored sections. Navigation is handled by a compact top bar that is sticky, featuring text links and distinct pill-shaped buttons.

### Imagery

The site heavily features illustrative, generative 3D characters. These are treated with soft lighting and vintage color schemes, presented centrally within cards or as hero elements. Graphics are the primary content, often full-bleed within sections or displayed in a grid, with minimal masking or complex treatments. Icons are simple, monochromatic, and outlined, appearing in navigation and social links, keeping the focus on the product imagery. Image density is high, with characters occupying significant visual space.
