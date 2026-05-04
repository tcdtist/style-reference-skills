---
version: alpha
name: Shuttle
description: Shuttle employs a crisp, utility-focused aesthetic, blending a stark monochrome palette with a single vibrant blue accent. Surfaces are predominantly white or near-white, providing a clean digital canvas for functional elements. Typography is compact and precise, maintaining a high information density without visual clutter, while subtle shadows and rounded corners soften interactive components.
colors:
  canvas-white: "#ffffff"
  cloud-gray: "#f9f9f9"
  border-fog: "#e5e7eb"
  stroke-silver: "#b8b8b8"
  graphite-black: "#000000"
  muted-ash: "#a3a3a3"
  text-slate: "#525252"
  shuttle-blue: "#0077ff"
  warning-gold: "#f59e0b"
  error-ember: "#ef4444"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body-lg:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1.3
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 128px
components:
  primary-action-button:
    role: Key interactions
  ghost-button:
    role: Secondary actions
  light-ghost-button:
    role: Contextual actions within cards or other surfaces
  elevated-content-card:
    role: Prominent content blocks
  subtle-background-card:
    role: Informational panels
  simple-input-field:
    role: User data entry
  badge-tag:
    role: Categorization and status
---

## Overview

**North Star:** Crisp digital canvas

Shuttle employs a crisp, utility-focused aesthetic, blending a stark monochrome palette with a single vibrant blue accent. Surfaces are predominantly white or near-white, providing a clean digital canvas for functional elements. Typography is compact and precise, maintaining a high information density without visual clutter, while subtle shadows and rounded corners soften interactive components.

### Do's

- Use InterVariable font with the default negative letter-spacing of -0.025em for all text elements to maintain a compact, tight aesthetic.
- Prioritize Canvas White (#ffffff) for primary content backgrounds and Cloud Gray (#f9f9f9) for secondary grouped elements to create subtle depth.
- Apply Shuttle Blue (#0077ff) exclusively for primary calls to action and active states to guide user interaction.
- Borders should primarily use Border Fog (#e5e7eb) at 1px solid, maintaining a light, clean separation of elements.
- Implement 8px border-radius for interactive elements like buttons and inputs, and 16px for content cards to unify component shaping.
- Separate major page sections with a vertical gap of 128px to ensure ample breathing room and clear content distinctions.
- Elevate primary content cards using the prominent shadow rgba(0, 0, 0, 0.25) 0px 25px 50px -12px to give them visual priority.

### Don'ts

- Avoid using highly saturated colors outside of the defined brand and semantic palette; maintain a predominantly neutral visual space.
- Do not vary letter-spacing for different text sizes or roles, as InterVariable's consistent -0.025em is a signature styling choice.
- Refrain from introducing heavy or opaque background colors for cards or containers; favor transparent or very light backgrounds.
- Do not use box-shadows beyond the specified subtle options; the design minimizes aggressive 3D effects.
- Avoid mixed border radii on the same component (e.g., 8px for one corner, 16px for another); ensure consistent rounding.
- Do not introduce gradients unless they are purely decorative and do not interfere with legibility or functional contrast.
- Do not use excessive visual decoration or embellishment; the system prioritizes clarity and functional simplicity.

### Layout

The page maintains a full-bleed layout for its overall canvas (Canvas White), but content within sections appears to be centered with a distinct max-width, though not explicitly defined in the data. The header features a compact, centrally aligned navigation with the brand logo, links, and a primary action button. Sections exhibit a consistent vertical rhythm, often using a section gap of 128px. Content arrangement varies, but often involves focused, centered blocks within the main flow. There's an indication of some content alternating with text and implied visuals. The navigation is a sticky top bar, providing persistent access to key actions.

### Imagery

The site's imagery is minimal, focusing on UI elements and functional icons rather than photography or complex illustrations. Icons are primarily outlined or filled with Graphite Black (#000000) or subtle gray tones, occasionally highlighted with a vibrant accent color like Warning Gold (#f59e0b). Visual treatment is clean, contained, and without ornate stylization, emphasizing product utility and clarity. The density is text-dominant, with icons serving as functional aids rather than large decorative elements.
