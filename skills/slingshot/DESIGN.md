---
version: alpha
name: Slingshot
description: Slingshot employs a practical and approachable interface, using a bright white canvas offset by soft, almost achromatic background shades. A single vibrant blue acts as the primary accent, drawing attention to calls to action and interactive elements. Typography is bold and direct for headings, while body text remains clear and functional. Components favor rounded corners and minimal elevation, presenting information without visual clutter.
colors:
  midnight-ink: "#241f37"
  canvas-white: "#ffffff"
  sky-blue: "#ecf2ff"
  pale-peach: "#fff4ec"
  mint-glaze: "#edf9f5"
  action-blue: "#1a5fff"
  accent-orange: "#ff7a1a"
  accent-green: "#359774"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.14
    letterSpacing: 0.083px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
spacing:
  cardRadius: 24px
  buttonRadius: 6px
  elementGap: 16px
  sectionGap: 40px
components:
  secondary-ghost-button:
    role: Navigational or secondary actions where visual prominence is low.
  outline-action-button-nav:
    role: Navigation or login actions, indicating an interactive element without being primary.
  ghost-accent-button:
    role: Lightweight, secondary actions or internal links within content.
  primary-filled-button:
    role: Main calls to action on the page, highly visible and interactive.
  testimonial-card:
    role: Showcasing client feedback, a floating element with subtle visual depth.
  feature-card:
    role: Highlighting product features or key information blocks.
  content-block-card:
    role: Encapsulating longer form textual content or aggregated information.
---

## Overview

**North Star:** Crisp canvas, vivid action.

Slingshot employs a practical and approachable interface, using a bright white canvas offset by soft, almost achromatic background shades. A single vibrant blue acts as the primary accent, drawing attention to calls to action and interactive elements. Typography is bold and direct for headings, while body text remains clear and functional. Components favor rounded corners and minimal elevation, presenting information without visual clutter.

### Do's

- Prioritize `Action Blue` (#1a5fff) for primary calls to action, active states, and critical interactive elements.
- Use `Gopher` with a line height of 1.0 for all primary headings to maintain a dense, impactful visual.
- Employ `Canvas White` (#ffffff) as the default background for general page content and prominent cards.
- Utilize `Sky Blue` (#ecf2ff) for secondary background surfaces, subtle card backgrounds, or distinct content sections.
- Apply a `24px` border-radius to large cards and content blocks, and `6px` for buttons, to create a consistent soft aesthetic.
- Maintain a default `16px` element gap for vertical spacing between most content elements.
- Use `Midnight Ink` (#241f37) for all body copy and most important text elements.

### Don'ts

- Avoid using multiple vivid colors; reserve saturation primarily for `Action Blue` (#1a5fff) and sparingly for `Accent Orange` (#ff7a1a).
- Do not introduce sharp corners; consistently apply radii of at least `6px` on interactive elements and `12px` on cards.
- Refrain from heavy shadows or gradient backgrounds; surfaces should appear flat or with minimal, subtle tinting.
- Do not deviate from the specified font families and weight combinations; `Gopher` for headings, `Inter` for body/functional text.
- Avoid line heights greater than 1.6 for body text, or higher than 1.0 for headers, to prevent excessive vertical spacing.
- Do not use generic gray tones for text that are not `Midnight Ink` (#241f37) or black (#000000), as `Midnight Ink` is the established primary dark text color.
- Do not use highly textured backgrounds; stick to solid color fills, predominantly light neutrals.

### Layout

The page primarily uses a max-width contained layout, with content sitting within a central column. The hero section features a prominent, left-aligned headline and text block, paired with a grid of product images on the right. Subsequent sections often employ an alternating text-left/visual-right pattern. Vertical spacing between sections is generous and consistent. Some sections use `Sky Blue` (#ecf2ff) or `Pale Peach` (#fff4ec) backgrounds to create visual breaks. Navigation is a sticky top bar with brand logo left and text links and an outlined button on the right.

### Imagery

The site uses a combination of product photography and abstract, colorful illustrations. Product photos feature tight crops of swag items (hats, stickers, shirts) arranged in grid-like patterns, often on a pure white or light gray background, highlighting the items themselves without lifestyle context. Illustrations are abstract and colorful, often rounded or organic in shape, serving as decorative accents or visual metaphors without strong outlines. Icons, when present, are simple and outlined with a medium stroke weight. Imagery primarily serves to showcase products and add decorative atmosphere without dominating the layout.
