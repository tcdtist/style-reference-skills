---
version: alpha
name: Clyde
description: Clyde deploys a dark, atmospheric interface punctuated by subtle gradients and an emphasis on dimensional product rendering. The design system uses sparse, highly contrasted typography with a blend of classic serif and modern grotesk fonts, creating a 'luxury tech' feel. Surfaces are dark, with elements softly lit by internal shadows and occasional, vibrant iridescent gradients. The overall density is comfortable, providing generous breathing room for content.
colors:
  midnight: "#000000"
  ghost-ash: "#f6f6f4"
  slate: "#7d7d7d"
  white-smoke: "#ffffff"
  dark-charcoal: "#1a1a1a"
  iridescent-glow: "#ff8400"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.6
    letterSpacing: 0.15px
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.4
    letterSpacing: 0.21px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.1
    letterSpacing: -0.36px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 47px
    lineHeight: 1.1
    letterSpacing: -0.94px
  display:
    fontFamily: "system-ui"
    fontSize: 61px
    lineHeight: 1.1
    letterSpacing: -1.22px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -1.6px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 125px
    lineHeight: 1
    letterSpacing: -3.75px
  display-xxl:
    fontFamily: "system-ui"
    fontSize: 138px
    lineHeight: 1
    letterSpacing: -4.14px
spacing:
  cardRadius: 16px
  buttonRadius: 100px
  elementGap: 20px
  sectionGap: 50px
components:
  ghost-header-button:
    role: Navigation and secondary actions
  pill-button:
    role: Primary Call to Action
  feature-card:
    role: Content container for features or case studies
  large-radius-card:
    role: Prominent content blocks
  inline-text-link:
    role: Linked text within content
  announcement-bar-link:
    role: High-visibility information link
---

## Overview

**North Star:** Iridescent gradients on obsidian glass

Clyde deploys a dark, atmospheric interface punctuated by subtle gradients and an emphasis on dimensional product rendering. The design system uses sparse, highly contrasted typography with a blend of classic serif and modern grotesk fonts, creating a 'luxury tech' feel. Surfaces are dark, with elements softly lit by internal shadows and occasional, vibrant iridescent gradients. The overall density is comfortable, providing generous breathing room for content.

### Do's

- Use Midnight (#000000) for all page backgrounds to maintain atmospheric depth.
- Apply Recoleta for all primary headlines, leveraging its unique tracking values for distinct visual impact.
- Implement 100px border-radius for all primary buttons to achieve a soft, pill-shaped aesthetic.
- Employ the Iridescent Glow gradient (linear-gradient(90deg, #feed7a, #ff8400, #df91f7)) for any elements requiring unique visual emphasis or product highlights.
- Ensure Ghost Ash (#f6f6f4) is the default text color on dark backgrounds, providing maximum contrast and legibility.
- Maintain generous spacing with a base unit of 4px and elemental gaps around 20px, fostering a comfortable content density.

### Don'ts

- Avoid harsh, solid borders or backgrounds, except for functional elements that require clear separation.
- Do not use highly saturated colors for text except for specific accent elements; stick to Ghost Ash (#f6f6f4) and Midnight (#000000) for content.
- Do not introduce sharp corners or small radii on interactive elements; favor the 16px and 100px radii for organic, approachable shapes.
- Avoid generic system fonts for any primary heading or body text; always use Recoleta or Oldschool Grotesk.
- Do not use explicit drop shadows for elevation; rely on subtle inset shadows (rgba(255, 255, 255, 0.25) 0px 0.636826px 3.82096px 0px inset) for depth on dark surfaces.
- Do not introduce competing gradients; the Iridescent Glow is the signature gradient.

### Layout

The page primarily employs a full-bleed layout on a Midnight (#000000) canvas. The hero section features a centered, large Recoleta headline over an abstract 3D iridescent background. Main content sections alternate between full-width blocks and content contained within fluid sections that appear centered. A common pattern is a two-column layout with large typography on one side and a product visual or smaller text block on the other, occasionally reversing. Feature lists utilize a grid of card-like elements. Navigation is a minimalist top bar, generally un-sticky, with ghost buttons and a pill-shaped primary action.

### Imagery

The site utilizes 3D abstract graphics with an iridescent, glowing quality, serving as decorative atmosphere rather than direct content. These are often full-bleed backgrounds or large, contained elements. Product visuals are crisp and dimensional, appearing either isolated against the dark backdrop or within simulated screen interfaces, demonstrating a clear focus on showcasing objects with a realistic, high-fidelity render. Icons are minimal, outlined, and monochromatic, primarily in Ghost Ash (#f6f6f4). Imagery density is moderate; illustrative elements occupy significant visual space but are balanced with generous typography.
