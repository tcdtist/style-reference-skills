---
version: alpha
name: Creative Giants
description: This design system feels like a gallery of contemporary art and industrial design, using a sparse, neutral palette as a canvas for striking typographic and image-based narratives. The dominant off-white background (#fffef7) and deep black text provide high contrast, while a unique 'Switzer' typeface with varied weights and precise letter-spacing sculpts a distinctive voice. Strategic use of full-bleed imagery and occasional vibrant, unexpected color blocks punctuates the otherwise minimalist composition, creating a dynamic rhythm without visual clutter. The absence of traditional shadows or overt decorative elements emphasizes clarity and directness.
colors:
  canvas-white: "#fffef7"
  ink-black: "#000000"
  medium-gray: "#666666"
  light-gray: "#aaaaaa"
  charcoal-gradient: "#4d4c4a"
  vivid-orchid: "#ffacea"
  muted-teal: "#a5ebd6"
  deep-plum: "#101731"
  sunburst-yellow: "#ffd001"
  sky-blue: "#009fff"
  aqua-cyan: "#48d1d6"
  fiery-orange: "#fc4c00"
  hot-pink: "#ee77cf"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.25
    letterSpacing: -0.68px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.25
    letterSpacing: -1.242px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -1.728px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 84px
    lineHeight: 1
    letterSpacing: -3.36px
spacing:
  buttonRadius: 1440px
  elementGap: 8px
  sectionGap: 48px
components:
  menu-button-nav-badge:
    role: 
  what-we-do-section-block:
    role: 
  news-opinion-article-cards:
    role: 
  ghost-navigation-button:
    role: Navigation, secondary actions
  pill-accent-button-black:
    role: Primary calls to action in dark contexts
  pill-accent-button-transparent-white-text:
    role: Secondary calls to action, especially over images
  monochromatic-feature-card:
    role: Content grouping, visually subtle sections
  vivid-orchid-feature-card:
    role: Highlighting specific content, adding visual interest
  muted-teal-feature-card:
    role: Highlighting specific content, adding visual interest
  deep-plum-feature-card:
    role: Highlighting specific content, adding visual interest
  text-input-field:
    role: User data entry
  overlay-menu-badge:
    role: Menu items within an overlay
---

## Overview

**North Star:** Sculpted Minimalism on Canvas. An off-white backdrop frames strong typography and vibrant multimedia like exhibits in a pristine gallery.

This design system feels like a gallery of contemporary art and industrial design, using a sparse, neutral palette as a canvas for striking typographic and image-based narratives. The dominant off-white background (#fffef7) and deep black text provide high contrast, while a unique 'Switzer' typeface with varied weights and precise letter-spacing sculpts a distinctive voice. Strategic use of full-bleed imagery and occasional vibrant, unexpected color blocks punctuates the otherwise minimalist composition, creating a dynamic rhythm without visual clutter. The absence of traditional shadows or overt decorative elements emphasizes clarity and directness.

### Do's

- Prioritize Canvas White (#fffef7) for page and card backgrounds to maintain the clean, gallery-like aesthetic.
- Use Ink Black (#000000) for all primary text elements to ensure maximum contrast and legibility.
- Apply the 'Switzer' font family with specific letter-spacing adjustments: -0.04em for 84px, -0.027em for 64px, and -0.023em for 54px to maintain typographic distinction.
- Employ the 1440px border-radius for all interactive buttons to create a consistent pill-shaped form.
- Utilize 48px padding for content cards that use chromatic backgrounds (Vivid Orchid, Muted Teal, Deep Plum) to create emphasis and breathing room.
- Use 0px border-radius for all cards and input fields to maintain sharp, architectural lines, contrasting with the pill-shaped buttons.
- Ensure all interactive elements have sufficient contrast against their backgrounds as per the #000000 on #fffef7 (20.8:1 AAA) standard.

### Don'ts

- Avoid using drop shadows on any element, as the design relies on color and proximity for depth, not elevation effects.
- Do not introduce additional font families; 'Switzer' is the singular typographic voice for the entire system.
- Refrain from using intermediate gray tones (#666666, #aaaaaa) for primary text or backgrounds — reserve them for secondary details.
- Do not deviate from the specified padding values for cards (48px) or buttons (14.08px vertical, 20px horizontal for solid buttons, 8px all-around for ghost buttons).
- Avoid generic rectangular buttons or elements with small radii; the extreme 1440px radius is a signature visual cue.
- Do not use background images or textures behind body text; maintain the clean Canvas White (#fffef7) or solid chromatic card backgrounds.

### Layout

The page primarily uses a full-bleed layout, particularly in the hero section where large-scale imagery dominates the viewport. Content appears to be centered within an implicit maximal width, though the hero extends edge-to-edge. Sections are separated by distinct background changes, primarily between Canvas White (#fffef7) and full-bleed imagery/video. Content arrangement often features large headlines (e.g., 'Creative Giants') overlaid directly onto images, and subsequent sections use left-aligned text with occasional multi-column layouts for features. There's a comfortable density with ample negative space. The navigation is a minimalist top-bar with a 'Menu' button, likely triggering an overlay.

### Imagery

The visual language is characterized by high-quality, full-bleed photography and video that feels cinematic and impactful. Images often serve as large background elements, sometimes with a dark gradient overlay. Content is either lifestyle-oriented (people in urban or artistic settings) or features abstract, artistic scenes. The treatment is raw with minimal processing or effects, focusing on strong compositions and natural lighting. Imagery plays a dual role: providing dramatic atmosphere and showcasing abstract creative work, occupying significant visual space on the page to enhance impact rather than merely decorate.
