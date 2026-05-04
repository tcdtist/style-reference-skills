---
version: alpha
name: Flayks
description: Flayks employs a dark, high-contrast, and playfully chaotic visual system. Bold, oversized typography in vivid colors dominates the layout, creating a dense, almost overwhelming textual landscape. Surfaces are predominantly dark, acting as a backdrop for energetic text and accent elements. The system feels dynamic and experimental, with elements often overlapping or being partially obscured, emphasizing a sense of motion and irreverence.
colors:
  deep-forest: "#00381c"
  coral-punch: "#ff8370"
  lavender-haze: "#d1adff"
  vanilla-beam: "#ffe0ce"
  void-black: "#000000"
  charcoal-grey: "#272221"
  slate-surface: "#2c2f34"
  soft-spruce: "#546f57"
  ink-blue: "#002a3b"
  indigo-abyss: "#2d0458"
  whisper-white: "#f6e9d9"
  ocean-dream: "#55f9ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: 1.8px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: 4.8px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 0.85
    letterSpacing: 8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.85
    letterSpacing: 12px
  display:
    fontFamily: "system-ui"
    fontSize: 518px
    lineHeight: 0.8
    letterSpacing: 129.5px
spacing:
  cardRadius: 6px
  buttonRadius: 900px
  elementGap: 4px
  sectionGap: 29px
components:
  ghost-text-button:
    role: Interactive element for navigation and actions within content.
  outlined-accent-button:
    role: Secondary action or navigational links where visual hierarchy needs to be present but not dominant.
  standard-card:
    role: Group related content, such as project entries or information blocks.
  elevated-card:
    role: Highlight key content or projects with a subtle sense of depth.
  dark-accent-card:
    role: Visually distinct content blocks, often used for project showcases with specific visual themes.
---

## Overview

**North Star:** Overlapping typographic playground

Flayks employs a dark, high-contrast, and playfully chaotic visual system. Bold, oversized typography in vivid colors dominates the layout, creating a dense, almost overwhelming textual landscape. Surfaces are predominantly dark, acting as a backdrop for energetic text and accent elements. The system feels dynamic and experimental, with elements often overlapping or being partially obscured, emphasizing a sense of motion and irreverence.

### Do's

- Prioritize legibility for all text over pure aesthetic, especially with overlapping graphic elements.
- Use Mango Grotesque for all display-level headings (32px-518px), varying weight and size to create visual hierarchy and impact.
- Employ Deep Forest (#00381c) as a foundational dark background for sections that need maximum brand presence.
- Utilize Coral Punch (#ff8370) and Lavender Haze (#d1adff) as primary and secondary accents for headings and interactive elements.
- Implement the 900px border radius for all interactive buttons and tags to maintain the distinct pill-shape.
- Maintain a clear distinction between the Charcoal Grey (#272221) secondary background and Slate Surface (#2c2f34) card backgrounds to establish subtle layering.
- Ensure the Vanilla Beam (#ffe0ce) outlined button is used for primary actions to provide a consistent interactive cue.

### Don'ts

- Avoid using light backgrounds. The system is fundamentally dark-themed.
- Do not introduce new typefaces. Limit typography to Nohemi, Mango Grotesque, and Arial.
- Do not deviate from the defined color palette; new colors will disrupt the high-contrast aesthetic.
- Avoid generic rectangular buttons; all buttons should have a 900px border radius for visual identity.
- Do not over-use box shadows; reserve them for specific elevated card variants to maintain their impact.
- Do not apply large, standard padding to components. The system favors compact and sometimes edge-to-edge content.
- Avoid excessive spacing between elements; the design emphasizes density and overlapping visuals.

### Layout

The page uses a maximum width of 1800px, but elements frequently break out of this constraint for visual impact, especially large typographic elements. The hero section is full-bleed, dominated by oversized, dynamically positioned text, creating a strong editorial and art-director aesthetic. Section rhythm is less about alternating bands and more about distinct content blocks that sometimes overlap or appear dynamically placed. Content arrangement is often asymmetrical, balancing large text blocks with project cards or abstract visuals. There's a preference for dynamic visual composition over strict grid alignment, although project showcases might adopt a looser card grid. The overall density is high, with visual elements competing for attention, contributing to a maximalist feel. Navigation is minimal, often relegated to small contextual links or a sticky header.

### Imagery

Imagery on Flayks is primarily abstract and graphical, often incorporating digital art, geometric shapes, and stylized 3D renders. Photography, when present, is usually high contrast or desaturated, integrated into these graphic compositions rather than standalone. Images are frequently overlapped, masked, or have raw edges, contributing to the chaotic and energetic feel. Icons are typically outlined and monochromatic but can adopt brand accent colors like Ocean Dream, with a medium stroke weight. The imagery serves a decorative atmospheric purpose, enhancing the artistic and experimental brand identity.
