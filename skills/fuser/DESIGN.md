---
version: alpha
name: Fuser
description: Fuser establishes a crisp, expansive canvas for AI workflow orchestration. Its visual system prioritizes clarity and a sense of depth, achieved through a subtle, cool-toned gray scale as the primary surface treatment, punctuated by vivid violets and vibrant greens for interactive elements. Imagery is encased in soft-cornered cards that float above a sparse, grid-like background, suggesting modularity and precision. Typography combines a sharp, modern sans-serif with a distinctive display serif for headlines, creating an aesthetic that is both functional and subtly artistic.
colors:
  stormy-night: "#0a0a0a"
  graphite: "#171717"
  deep-space-violet: "#432dd7"
  violet-impulse: "#312c85"
  sage-bloom: "#00c950"
  zinc: "#262626"
  ash-charcoal: "#404040"
  slate: "#525252"
  medium-gray: "#737373"
  stone: "#828282"
  silver-mist: "#b7b7b7"
  light-heather: "#d4d4d4"
  fog: "#e5e5e5"
  cloud: "#efefef"
  canvas: "#f5f5f5"
  paper-white: "#fafafa"
  lavender-haze: "#c6d2ff"
  dusk-orchid: "#a6a5fe"
  lavender-whisper: "#d7defd"
  gradient-aura: "#c679c4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 12
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 22
    letterSpacing: -0.14px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 24
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 27
    letterSpacing: -0.18px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 29
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 43
    letterSpacing: -0.36px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 53
    letterSpacing: -0.48px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 96
    letterSpacing: -0.96px
spacing:
  cardRadius: 16px
  elementGap: 16px
  sectionGap: 32px
components:
  ghost-navigation-button:
    role: Primary navigation and subtle actions
  small-contained-button:
    role: Secondary calls to action, form actions
  outline-accent-button:
    role: Emphasis action, 'Get Started' button
  prominent-text-input:
    role: Main form fields
  content-card-minimal:
    role: Basic display of content, images, or media
  content-card-elevated:
    role: Standard content display, modal backgrounds
  content-card-highlighted:
    role: Featured content blocks, interactive elements
  decorative-tag-round:
    role: Informational labels, status indicators
---

## Overview

**North Star:** Frosted glass network — a cool, translucent interface connecting modular, vivid ideas.

Fuser establishes a crisp, expansive canvas for AI workflow orchestration. Its visual system prioritizes clarity and a sense of depth, achieved through a subtle, cool-toned gray scale as the primary surface treatment, punctuated by vivid violets and vibrant greens for interactive elements. Imagery is encased in soft-cornered cards that float above a sparse, grid-like background, suggesting modularity and precision. Typography combines a sharp, modern sans-serif with a distinctive display serif for headlines, creating an aesthetic that is both functional and subtly artistic.

### Do's

- Always use 'Canvas' (#f5f5f5) as the primary page background to maintain an expansive, light feel.
- Apply 'Deep Space Violet' (#432dd7) only to interactive icons and borders to signal interactivity and brand presence clearly.
- Ensure all cards, images, and interactive elements use a border-radius of at least 6px, and up to 24px for larger content cards, to maintain the soft, approachable aesthetic.
- Utilize Marund for all display-level typography (size 48px and above) with its specific letter-spacing and stylistic sets to convey brand distinctiveness.
- Create visual depth using 'Fog' (#e5e5e5) for card backgrounds, elevating them above the main page 'Canvas' (#f5f5f5).
- Employ the `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px` shadow for cards requiring subtle elevation and interaction emphasis.
- Implement consistent `16px` element gaps for vertical stacking of related components and `12px` padding for internal card content.

### Don'ts

- Avoid using highly saturated colors for large background areas; they should be reserved for small, functional accents like 'Deep Space Violet' (#432dd7) or 'Sage Bloom' (#00c950).
- Do not use Marund for body text; reserve it entirely for headlines and display text to preserve its unique impact and legibility at smaller sizes.
- Never introduce hard, 0px border-radii for interactive elements or containers; maintain the consistent soft cornering established by 6px minimal radius.
- Refrain from using strong, dark shadows on navigation or primary action elements; elevation should be subtle and primarily for content grouping.
- Do not vary line-height significantly from the established semantic type scale; maintaining the rhythm of `1.2` for headings and `1.5` for body text ensures a cohesive reading experience.
- Avoid arbitrary custom letter-spacing; adhere to the defined `letterSpacing` values for Inter and Marund to control visual density.
- Do not use dark backgrounds for primary sections unless specifically integrating a full-bleed visual or hero where a dark gradient is explicitly defined.

### Layout

The page primarily uses a max-width contained layout for core content. The hero section is full-bleed, featuring a central headline over an ethereal gradient background, with modular image cards floating within a subtle grid. Sections beneath maintain a consistent vertical rhythm with 32px spacing. Content is largely arranged in centered stacks or alternating text-left / image-right patterns. A subtle, light grid pattern (likely repeating lines or dots) underlays the canvas, hinting at the product's node-based or generative nature. Navigation is a sticky top bar with ghost buttons and a distinct outlined accent button.

### Imagery

The site employs a mix of crisp product photography and artistic, abstract visuals. Product photos are often contained within soft-cornered cards, showcasing objects (like garments or machinery) in isolation against neutral backgrounds, emphasizing detail and form. Abstract imagery, sometimes with gradient overlays, is used for atmospheric depth, particularly in the hero section. There's also evident use of AI-generated content (e.g., stylized topographical maps, dynamic compositions) within these card frames, serving as both decorative elements and visual demonstrations of the product's capabilities. Icons are primarily outlined or subtle fills, maintaining a lightweight feel, often in black or the 'Deep Space Violet' accent. The density is moderate; imagery works to break up text and provide visual anchors, often floating in the canvas rather than being integrated full-bleed.
