---
version: alpha
name: GTE
description: GTE embodies a stark, high-contrast digital trading floor: deep backgrounds meet bright surfaces and crisp typography. A single vibrant orange accent serves as the primary call to action, cutting through the monochrome with functional urgency. The design prioritizes clear information hierarchy and lightweight components, reflecting efficiency and speed without heavy ornamentation.
colors:
  carbon: "#09090b"
  midnight-ink: "#000000"
  ash: "#18181b"
  polar-white: "#ffffff"
  fog: "#ebebeb"
  parchment: "#e5e7eb"
  steel: "#71717a"
  stone-grey: "#a1a1aa"
  ghost: "#d4d4d8"
  turbo-orange: "#ff7817"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: -0.48px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -0.32px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.36px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: -0.56px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.8px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.95
    letterSpacing: -1.6px
spacing:
  buttonRadius: 8px
  elementGap: 10px
  sectionGap: 40px
components:
  primary-action-button:
    role: Call to action.
  dark-card-level-1:
    role: Container for content.
  light-card-level-1:
    role: Container for content.
  dark-card-level-2:
    role: Container for content, elevated.
  cookie-banner-card:
    role: System feedback or disclaimer.
  text-input-dark:
    role: User input.
  accent-input-orange-fill:
    role: Submit or action input.
  feature-box-light:
    role: Informational container.
---

## Overview

**North Star:** High-contrast digital trading floor.

GTE embodies a stark, high-contrast digital trading floor: deep backgrounds meet bright surfaces and crisp typography. A single vibrant orange accent serves as the primary call to action, cutting through the monochrome with functional urgency. The design prioritizes clear information hierarchy and lightweight components, reflecting efficiency and speed without heavy ornamentation.

### Do's

- Use Turbo Orange (#ff7817) exclusively for primary calls to action and critical interactive elements.
- Maintain a high contrast ratio between text and background, adhering to AAA accessibility standards where possible (e.g., Midnight Ink #000000 on Polar White #ffffff; Polar White #ffffff on Carbon #09090b).
- Apply 12px border-radius for most cards and default containers, with 8px for interactive elements like buttons and inputs, and 24px for visually distinct, larger cards.
- Utilize PP Supply Mono for headings and navigational elements to emphasize a technical, precise tone.
- Employ Polar White (#ffffff) and Carbon (#09090b) as dominant background colors, defining distinct light and dark sections or components.
- Keep element spacing consistent with increments of 10px and padding with 16px to maintain a compact yet readable density.
- Ensure large display headings use Ogg Text Light at weight 300 to create an atmosphere of restrained authority with unique typographic flourishes.

### Don'ts

- Avoid using multiple chromatic colors; limit accents strictly to Turbo Orange (#ff7817) unless for semantic status (e.g., success/error not present in data).
- Do not introduce heavy shadows or gradients on surfaces; rely on distinct background colors and subtle inset shadows (rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset) for depth.
- Refrain from using overly decorative or illustrative elements that detract from the stark, functional UI.
- Do not deviate from the established type scale; maintain consistent font families, weights, and letter spacing for their defined roles.
- Avoid large amounts of whitespace around content sections; the design favors a 'compact' density.
- Do not use generic sans-serif fonts where Ogg Text Light, PP Supply Mono, or Inter are specified, as they define the brand's unique typographic voice.
- Do not apply large, rounded corners globally; save specific larger radii for distinct components like cookie banners (28px) or pill shapes (600px).

### Layout

The page primarily uses a full-bleed structure for hero sections, which feature a large, centered headline over an immersive visual, then transitions to a max-width contained layout (implied around 1200px based on content blocks). Sections alternate between dark backgrounds (Carbon #09090b) and light backgrounds (Polar White #ffffff or Parchment #e5e7eb) to create distinct visual rhythm. Content often arranges in two-column layouts, frequently with text on one side and a product illustration or card on the other. Card grids are used for presenting features. The navigation is a sticky top bar, minimal in its presence, with a strong Turbo Orange button for 'Launch App'.

### Imagery

The visual language combines abstract 3D renders with illustrative product screenshots. Photography is absent. Abstract graphics feature metallic or coin-like objects with a warm, amber glow against dark backgrounds, suggesting value and motion. These visuals are primarily decorative and atmospheric, full-bleed in hero sections. Product screenshots are contained within light cards, using a monochromatic outlined style for UI elements. Icons are minimal, either solid or outlined, typically monochromatic, with PP Supply Mono font often integrated into their design. The overall density is image-heavy in hero sections, transitioning to text-dominant with illustrative support in feature sections.
