---
version: alpha
name: Moving Parts
description: Moving Parts employs a bold, high-contrast aesthetic characterized by large, confident typography and a vibrant blue accent on an otherwise monochrome canvas. Geometric shapes and a grid-like structure provide underlying order, while distinct large radii soften component edges. The design feels sharp and modern, with a strong focus on readability for headlines and crisp functional elements.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  ghostly-gray: "#121212"
  fog-grid: "#bcc1c7"
  warm-mist: "#efefef"
  cloud-gray: "#b3b3b3"
  pale-ash: "#999999"
  deep-royal-blue: "#0000ff"
  emerald-green: "#00d37c"
  conic-spectrum: "#57C0F1"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.18
    letterSpacing: -0.1px
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.2
    letterSpacing: 0.21px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.2
    letterSpacing: 0.27px
  heading:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 0.85
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 98px
    lineHeight: 0.82
    letterSpacing: -2.94px
  display:
    fontFamily: "system-ui"
    fontSize: 248px
    lineHeight: 1.2
    letterSpacing: 0px
spacing:
  cardRadius: 90.3833px
  buttonRadius: 0px
  elementGap: 13px
  sectionGap: 40px
components:
  primary-action-button:
    role: Main call-to-action
  ghost-button-primary:
    role: Secondary action or navigation
  pill-button-neutral:
    role: Status tags or filters
  rounded-corner-card:
    role: Content container
  large-rounded-card-bottom-flat:
    role: Hero or feature container
  text-input-base:
    role: Single-line text entry
---

## Overview

**North Star:** High-contrast geometric clarity

Moving Parts employs a bold, high-contrast aesthetic characterized by large, confident typography and a vibrant blue accent on an otherwise monochrome canvas. Geometric shapes and a grid-like structure provide underlying order, while distinct large radii soften component edges. The design feels sharp and modern, with a strong focus on readability for headlines and crisp functional elements.

### Do's

- Use 'Midnight Ink' (#000000) for all primary text and headlines to maintain strong contrast.
- Apply 'Deep Royal Blue' (#0000ff) exclusively for primary calls to action and critical interactive elements.
- Utilize Unica77 for headlines and navigation, leveraging its font feature settings for characteristic glyphs and precise tracking.
- Favor large, confident typography for headlines, with tighter letter-spacing on larger sizes and normal spacing on body text.
- Maintain a clear visual hierarchy by limiting saturated colors to 'Deep Royal Blue' and 'Emerald Green' as deliberate accents.
- Employ the specific large border radii of 90.3833px for content cards and 106.333px for prominent containers to define component shapes.
- Ensure all interactive elements provide a comfortable 25px vertical and 30px horizontal padding, as seen on buttons and inputs.

### Don'ts

- Do not introduce new saturated primary colors; adhere to 'Deep Royal Blue' as the sole dominant brand accent.
- Avoid generic small border radii; use the distinct 0px for buttons or the large values (90.3833px, 106.333px) for cards and containers.
- Do not use subtle gray backgrounds or text colors for primary content or calls to action; reserve them for secondary information or decorative grids.
- Do not add additional box-shadows beyond the single defined `rgba(0, 0, 0, 0.3) 15px 20px 30px 0px` for cards, maintaining a predominantly flat aesthetic.
- Do not break the rigid grid-like layout with free-form overlapping elements, maintaining structured geometric compositions.
- Avoid thin, lightweight typefaces for headlines outside of specific decorative uses; default to heavier weights for impact.
- Do not use 'Arial' or 'ui-monospace' for standard UI elements unless explicitly for code snippets, adhering to the brand's custom typefaces.

### Layout

The page primarily uses a max-width contained layout, likely centered, although a specific max-width is not provided. The hero section is characterized by a full-width visual, often a dark background or distinct product visual, with a large, centered headline and a clear call to action below. Section rhythm is driven by alternating background colors (white, dark, solid brand blue) creating distinct blocks of content. Content within sections is often arranged in prominent single-column stacks for headlines, or two-column text-left/image-right or image-left/text-right patterns for feature explanations. Large components like cards can extend this two-column approach to highlight product visuals. Typography dominates the visual hierarchy, with large headlines guiding the eye. Navigation is a persistent top bar, minimal and un-obtrusive.

### Imagery

Imagery primarily consists of bright product screenshots of mobile UI components, often set against a 'Deep Royal Blue' background, emphasizing the product's native context. Abstract geometric shapes, sometimes with vivid conic gradients, act as decorative elements, adding visual interest and motion. Icons are outlined, with a moderate stroke weight, typically 'Midnight Ink' or inverse 'Canvas White', keeping to a minimalist, functional aesthetic. Photography is minimal, used for social proof or team profiles in a clean, high-contrast style. Visual density is balanced: product showcases are image-heavy, while explanatory sections are text-dominant with functional icons.
