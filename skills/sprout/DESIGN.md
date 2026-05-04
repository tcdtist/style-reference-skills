---
version: alpha
name: Sprout
description: Sprout embraces a playful, textured aesthetic with a warm, desaturated color palette that shifts between earthy tones, creating distinct spatial zones. Bold, almost cartoonish typography pairs with a more functional, condensed sans-serif, giving the brand a friendly yet authoritative voice. Components feature soft, rounded edges and light borders, suggesting a tactile, approachable interface. The design feels grounded and unconventional, prioritizing character over stark minimalism.
colors:
  earth-berry: "#3e0808"
  sunbeam-yellow: "#f3d468"
  terracotta: "#f39369"
  midnight-core: "#000000"
  canvas-white: "#ffffff"
  paper-cream: "#fcf6f1"
  stone-gray: "#909090"
  ink-wash: "#111111"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.16px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.58
    letterSpacing: -0.18px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 51px
    lineHeight: 1.14
    letterSpacing: -1.02px
  display:
    fontFamily: "system-ui"
    fontSize: 104px
    lineHeight: 0.9
    letterSpacing: -3.64px
spacing:
  buttonRadius: 20px
  elementGap: 10-24px
  sectionGap: 40px
components:
  ghost-link-button:
    role: Text-based actions and navigation links.
  earth-berry-primary-button:
    role: Main call-to-action.
  outline-ghost-button:
    role: Secondary call-to-action or subtle interactive elements.
  hero-section-card:
    role: Visual containers within the hero section.
  basic-card:
    role: Standard content containers.
---

## Overview

**North Star:** Earthy, shifting canvases

Sprout embraces a playful, textured aesthetic with a warm, desaturated color palette that shifts between earthy tones, creating distinct spatial zones. Bold, almost cartoonish typography pairs with a more functional, condensed sans-serif, giving the brand a friendly yet authoritative voice. Components feature soft, rounded edges and light borders, suggesting a tactile, approachable interface. The design feels grounded and unconventional, prioritizing character over stark minimalism.

### Do's

- Use Earth Berry (#3e0808) as the dominant background for body sections and primary calls to action.
- Employ BrickDisplayPro for all primary headings and display text, leveraging its distinct character at sizes 51px and 104px.
- Apply a 15px border-radius to general UI elements like cards and image containers for a softened, approachable feel.
- Ensure interactive elements like buttons consistently use a 20px border-radius.
- Utilize SuisseIntl for all body text, navigation items, and button labels, maintaining a compact and clear typographic hierarchy.
- Implement distinct background changes between sections, alternating between Earth Berry (#3e0808), Sunbeam Yellow (#f3d468), Terracotta (#f39369), and Canvas White (#ffffff).

### Don'ts

- Avoid using generic system fonts for headlines; BrickDisplayPro is key to brand identity.
- Do not deviate from the specified border-radii of 15px (default) and 20px (buttons) to preserve the brand's soft aesthetic.
- Refrain from introducing new accent colors; rely on Earth Berry, Sunbeam Yellow, and Terracotta to define highlights and section shifts.
- Do not apply heavy shadows or complex elevation; the system prefers subtle borders or background shifts to define layers.
- Avoid excessive letter-spacing on body text; SuisseIntl is designed for slightly tighter tracking (e.g., -0.0100em at 18px).
- Do not use dark text colors on Earth Berry (#3e0808) backgrounds; always use Canvas White (#ffffff) for readability.

### Layout

The page primarily uses a full-bleed layout, where hero sections and color bands stretch across the entire viewport width. Content within these sections often centers or uses alternating text-left/image-right compositions. Vertical spacing is generous, with 'sectionGap: 40px' creating clear visual breaks between different content blocks. The hero section is full-bleed, often containing centered text or a split visual, setting a distinct tone with changing background colors. Navigation is a sticky top bar with a clear call-to-action button, ensuring consistent access.

### Imagery

The site uses a mix of candid product screenshots featuring diverse users and abstract graphic elements. Product screenshots are contained within soft, rounded frames (15-30px radius) and often show video calls or interfaces with minimal contextual background, focusing on the human element. Icons are minimal, outlined, and monochromatic, primarily in Midnight Core (#000000) or Canvas White (#ffffff), serving functional purposes without drawing excessive attention. Imagery is used to explain features and showcase the product's social aspect, often taking up significant visual space.
