---
version: alpha
name: Art Direction/Design
description: Lundqvist & Dallyn presents as a disciplined, high-contrast monochrome canvas, where bold typography and intentional negative space command attention. Visual information is presented with stark clarity, often reversing between black text on white and white text on black. The system uses a single, vibrant teal accent color sparingly, injecting a precise jolt of energy into an otherwise composed and minimal aesthetic. Imagery is integrated as bold, contained blocks, maintaining the overall sense of deliberate, high-impact design.
colors:
  canvas-white: "#ffffff"
  ink-black: "#1d1d1d"
  accent-teal: "#75fbee"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1
    letterSpacing: 1.1px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.7
    letterSpacing: 1.8px
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.1
    letterSpacing: -0.735px
  heading:
    fontFamily: "system-ui"
    fontSize: 51px
    lineHeight: 1.2
    letterSpacing: -1.785px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.2
    letterSpacing: -2.1px
spacing:
  elementGap: 10px
  sectionGap: 113px
components:
  primary-navigation-link:
    role: Top-level navigation items
  hero-headline:
    role: Main page headline
  content-grid-item:
    role: Individual elements within a layout grid for work examples or features
  footer-canvas:
    role: Page footer background
---

## Overview

**North Star:** High-contrast monochrome blueprint

Lundqvist & Dallyn presents as a disciplined, high-contrast monochrome canvas, where bold typography and intentional negative space command attention. Visual information is presented with stark clarity, often reversing between black text on white and white text on black. The system uses a single, vibrant teal accent color sparingly, injecting a precise jolt of energy into an otherwise composed and minimal aesthetic. Imagery is integrated as bold, contained blocks, maintaining the overall sense of deliberate, high-impact design.

### Do's

- Use Canvas White (#ffffff) as the dominant background color for all main content areas.
- Employ Ink Black (#1d1d1d) exclusively for primary text, headings, and interactive element borders.
- Apply AkkuratMonoLLWeb for all functional text, navigation, and small information at 11px or 18px, with 0.1em letter-spacing.
- Reserve Favorit for headlines and prominent textual statements, at sizes 21px, 51px, or 60px, with -0.035em letter-spacing.
- Introduce Accent Teal (#75fbee) only as a background color for distinct content blocks, like the footer or specific highlighted sections.
- Maintain generous negative space, with a section gap of 113px between major content blocks.
- Utilize a compact element gap of 10px, especially for horizontal spacing within navigation or grouped links.

### Don'ts

- Do not use Accent Teal (#75fbee) for text or borders; it is strictly a background color.
- Avoid using any other colors beyond Canvas White, Ink Black, and Accent Teal.
- Do not vary the letter-spacing of Favorit or AkkuratMonoLLWeb from their specified values.
- Do not add shadows or heavy borders to elements; surfaces are largely flat.
- Avoid mixing text styles; Favorit is for display, AkkuratMonoLLWeb for everything else.
- Do not use subtle gradients or overlays; maintain a stark, high-contrast aesthetic.
- Do not introduce rounded corners; elements should adhere to sharp, precise edges.

### Layout

The page adheres to a full-bleed structure without a fixed max-width, allowing content to stretch across the viewport, then often containing inner elements. The hero features a centered headline over a background that alternates between Canvas White and Ink Black. Sections maintain a consistent vertical rhythm with a 113px section gap. Content is arranged in alternating structures, including text-left/image-right and centered stacks for large headlines. There's an implicit grid for case studies or portfolio pieces, where visuals are presented as large, distinct blocks. The layout is spacious yet compact in information flow, guiding the eye through deliberate, large-scale compositions. Navigation is a minimal top-bar, fixed to the top right corner, while the brand logo 'L&D' is top-left.

### Imagery

Imagery primarily consists of contained, high-impact product photography or abstract graphics, often presented as large, full-width blocks within the layout. The treatment leans towards stark presentation with minimal context, emphasizing the object or subject itself. Icons are minimal, monochromatic, and typically outlined (#1d1d1d on #ffffff). The density is high-impact visual, where imagery takes up significant screen real estate, acting as both decorative atmosphere and content showcase, with a text-light approach.
