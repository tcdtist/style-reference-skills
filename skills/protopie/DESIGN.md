---
version: alpha
name: ProtoPie
description: ProtoPie's design system creates a feeling of approachable high-tech proficiency. Its light theme and ample whitespace are punctuated by vibrant violet accents that guide interaction without overwhelming, like glowing controls on a clean white console. The judicious use of rounded corners—from subtle 4px button radii to emphatic 9999px pills—softens the technical edge, making complex prototyping feel open and inviting. Custom display fonts contribute to a distinctive, playful yet authoritative brand voice.
colors:
  midnight-ink: "#181818"
  stone-gray: "#555555"
  pale-gray: "#999999"
  ghost-white: "#ffffff"
  crystal-frost: "#e9e9e9"
  iris-bloom: "#8169ff"
  violet-signal: "#6d4ff0"
  lavender-haze: "#c9bfff"
  aqua-tint: "#3eb2b2"
  violet-fade: "#ab9eff"
  aqua-gradient: "#81dbdb"
  lavender-swirl: "#e3deff"
  violet-mist: "#c9bfff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.45
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.43
  display-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 0.8
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.33
  display-lg:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1.29
spacing:
  cardRadius: 16px
  buttonRadius: 4px
  elementGap: 8px
components:
  primary-filled-button:
    role: Main call-to-action.
  secondary-soft-button:
    role: Alternative call-to-action or secondary action.
  ghost-text-button:
    role: Navigation or less prominent actions.
  pill-button:
    role: Tags, categories, or filtering elements.
  header-navigation-link:
    role: Main navigation items.
  input-field:
    role: User data entry.
  elevated-card:
    role: Content container with visual separation.
---

## Overview

**North Star:** Tech console, soft glow.

ProtoPie's design system creates a feeling of approachable high-tech proficiency. Its light theme and ample whitespace are punctuated by vibrant violet accents that guide interaction without overwhelming, like glowing controls on a clean white console. The judicious use of rounded corners—from subtle 4px button radii to emphatic 9999px pills—softens the technical edge, making complex prototyping feel open and inviting. Custom display fonts contribute to a distinctive, playful yet authoritative brand voice.

### Do's

- Use Iris Bloom (#8169ff) for primary interactive buttons and links to consistently highlight calls to action.
- Apply Gilroy 700 for all headings to maintain brand's bold and clear voice, particularly at display sizes up to 62px.
- Implement 4px border-radius on primary action buttons for a subtle softening, contrasting with the overall sharpness.
- Incorporate `radial-gradient(47.72% 108.66% at -12.1% 21.18%, rgba(129, 219, 219, 0.25) 24.27%, rgba(160, 232, 232, 0) 100%)` for background accents to add depth without strong hard lines.
- Maintain a clear visual hierarchy using Midnight Ink (#181818) for primary text, Stone Gray (#555555) for secondary, and Pale Gray (#999999) for tertiary information.
- Use 9999px radius for all pill-shaped elements to differentiate them clearly as tags or small categorizations.
- Employ the `rgba(0, 0, 0, 0.12) 0px 3px 12px 0px, rgba(0, 0, 0, 0.3) 0px 0px 2px 0px` shadow for cards or elevated content to give subtle lift.

### Don'ts

- Avoid using highly saturated colors outside of the brand's defined violet and aqua accents to maintain a clean, light aesthetic.
- Do not introduce sharp corners on card-like elements; maintain a minimum of 8px radius to keep the system's approachable feel.
- Refrain from heavy, dark backgrounds on main content areas; the Ghost White (#ffffff) and Crystal Frost (#e9e9e9) provide necessary breathing room.
- Do not use generic system fonts for prominent headings; always use Gilroy or designated substitutes to preserve brand identity.
- Avoid excessive use of Palmer Lake Print; reserve it for specific, high-impact decorative headings only, due to its distinct character.
- Do not clutter layouts; leverage the comfortable density and significant whitespace to emphasize key content and interactions.
- Do not deviate from the established padding and spacing units; consistent use of 8px, 12px, 16px is crucial for a cohesive system.

### Layout

The page maintains a centered, max-width content area (around 1200px inferred) within a full-bleed background. The hero section often features a centered headline over a subtle gradient background, setting an open tone. Section rhythm relies on generous vertical spacing and occasional background color shifts, primarily using soft white and light gradient bands to delineate content blocks. Content arrangement frequently uses two-column layouts, often text on one side and product visuals or user testimonials on the other. Card grids organize features or customer logos in a 3-column structure. Navigation is a persistent top bar, sticky on scroll, with a clear 'Get Started' CTA.

### Imagery

The site uses a mix of tightly cropped product screenshots and playful, sometimes abstract, illustrations. Product shots are typically clean, isolated, and demonstrate UI interactions. Illustrations are dimensional and often incorporate brand colors (violet/aqua) or soft gradients, lending a friendly but sophisticated feel. Icons are primarily outlined or filled monochrome, reflecting the precision of a design tool. The visual density is balanced; images are present but not overwhelming, serving to explain and showcase the product's capabilities rather than just decorate.
