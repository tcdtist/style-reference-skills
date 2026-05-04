---
version: alpha
name: O0
description: O0 establishes a commanding, minimalist aesthetic through stark black and white contrasts and oversized, serif typography for headlines. The interaction is focused on content, with a high degree of content density. The system relies on precise typographic interplay and generous negative space to convey a sense of modern authority, using a light theme with occasional inverse dark sections for dramatic effect. Components are typically ghosted or outlined, allowing content to take center stage.
colors:
  midnight-black: "#000000"
  canvas-white: "#ffffff"
  cloud-mist: "#f2f2f2"
  pale-ash: "#e8e9ea"
  stone-gray: "#cecdcb"
  yellow-accent: "#ffe500"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.9
spacing:
  elementGap: 10px
  sectionGap: 60px
components:
  ghost-navigation-link:
    role: Navigation item
  ghost-button:
    role: Call to action
  client-logo-grid-item:
    role: Static display
  section-divider-subtle:
    role: Visual separation
  primary-heading-times:
    role: Hero headline
  body-text-arial:
    role: Descriptive content
---

## Overview

**North Star:** gallery wall contrast

O0 establishes a commanding, minimalist aesthetic through stark black and white contrasts and oversized, serif typography for headlines. The interaction is focused on content, with a high degree of content density. The system relies on precise typographic interplay and generous negative space to convey a sense of modern authority, using a light theme with occasional inverse dark sections for dramatic effect. Components are typically ghosted or outlined, allowing content to take center stage.

### Do's

- Prioritize stark black and white contrasts for all primary interactive and textual elements using #000000 and #ffffff.
- Use Times 400 for all headlines and display text, selecting appropriate sizes from the established scale (48-88px) with tight line heights (0.9-1.0).
- Apply Arial 400 for all body text, navigation, and labels, at 16px or 20px, with line heights tuned for readability (1.15-1.5).
- Maintain a compact element spacing of 10px where interaction requires proximity without visual clutter.
- Establish clear section breaks using large vertical gaps (60px) or by alternating background colors between Canvas White and Cloud Mist.
- Utilize ghosted or text-only buttons and interactive elements, relying on color changes for hover states rather than filled backgrounds.
- Keep all border-radii at 0px to uphold a sharp, angular aesthetic across UI elements.

### Don'ts

- Avoid using saturated colors for backgrounds or primary interactive elements; color should be used sparingly for decorative accents only.
- Do not introduce soft shadows or rounded corners, as the system relies on flat surfaces and sharp edges.
- Do not deviate from the strict typographic pairing of Times for headlines and Arial for body text; avoid using other fonts or weights.
- Refrain from dense layouts where large section gaps (60px) are intended to create breathing room.
- Do not use background colors with high saturation or significant chromaticity for any functional UI element.
- Avoid decorative gradients or complex visual textures; the system thrives on minimalism and solid color blocks.
- Do not allow internal element padding to grow beyond 10px, as the system emphasizes content density.

### Layout

The page primarily uses a full-bleed layout for hero sections and some content blocks, transitioning to a contained max-width structure implicitly defined by content alignment. The hero section often features a large, centered headline on a vast white canvas. Sections alternate between pure white, subtle Cloud Mist backgrounds, and dramatic full-bleed Midnight Black blocks. Content is arranged in prominent center-aligned stacks or two-column layouts, with text sometimes on one side and imagery or whitespace on the other. Navigation is a simple top-right floating text menu, maintaining a clean header. Grid usage is subtle, hinted at by client logos and portfolio showcases.

### Imagery

The visual language focuses on high-quality product photography, often tightly cropped and presented on pure white or stark black backgrounds, sometimes full-bleed with minimal context beyond the product itself. Illustrations are likely minimalist, possibly geometric or outlined, used for abstract concepts rather than decorative flourishes. Iconography is clean and outlined, maintaining the system's overall stark and functional feel. Imagery serves primarily to showcase products and services directly, acting as explanatory content rather than atmospheric decoration. The density is image-heavy in portfolio sections, but balanced with significant negative space around key visual elements.
