---
version: alpha
name: Metalab
description: This design system conjures a mood of restrained sophistication and intellectual calm. Large, dramatic serif typography acts as art against a stark black and white canvas, establishing an immediate sense of gravity and refined taste. The composition prioritizes ample negative space, allowing elements to breathe and create an atmosphere of quiet authority, where every visual decision feels deliberate and impactful.
colors:
  canvas-white: "#ffffff"
  void-black: "#000000"
  ash-surface: "#252525"
  elevated-grey: "#bababa"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.76
    letterSpacing: -0.16px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -0.16px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 0.8
    letterSpacing: -1.76px
spacing:
  buttonRadius: 50px
  elementGap: 8px
components:
  ghost-button:
    role: 
  client-tag-buttons:
    role: 
  stat-identity-block:
    role: 
  ghost-button:
    role: Primary Call to Action
  client-tag-button:
    role: Client Logo/Identifier
---

## Overview

**North Star:** monochrome canvas, serif headlines as art

This design system conjures a mood of restrained sophistication and intellectual calm. Large, dramatic serif typography acts as art against a stark black and white canvas, establishing an immediate sense of gravity and refined taste. The composition prioritizes ample negative space, allowing elements to breathe and create an atmosphere of quiet authority, where every visual decision feels deliberate and impactful.

### Do's

- Prioritize PP Eiko (240 weight, 88px, -1.76px letter-spacing) for all main headings to maintain dramatic visual impact.
- Use Basis Grotesque Pro (350/400 weight, 12px/16px) for all functional text with -0.16px letter-spacing for consistent readability.
- Apply Canvas White (#ffffff) as the dominant background color for most sections to create a bright, expansive canvas.
- Use Void Black (#000000) for primary text on Canvas White backgrounds, ensuring AAA contrast.
- Employ 50px border-radius for all interactive elements and contained content blocks to maintain a soft yet defined shape.
- Maintain generous padding; apply 0px top/bottom, 16px left/right for client tag buttons and other container specific components.
- Utilize rgba(186, 186, 186, 0.2) background for subtly interactive elements on dark backgrounds, providing visual feedback without strong color.

### Don'ts

- Avoid using highly saturated or chromatic colors; adhere strictly to the monochrome palette with subtle gray variations.
- Do not deviate from the specified font families; PP Eiko and Basis Grotesque Pro are core to the brand's typographic identity.
- Avoid box shadows or strong elevation effects, as the system relies on color contrast and negative space for hierarchy.
- Do not use letter-spacing values other than -1.76px for display text and -0.16px for body text.
- Avoid tightly packed sections; ensure `sectionGap` of 900px vertical spacing between major content blocks.
- Do not introduce square or sharp-cornered elements; 50px is the minimum radius for rounded forms including buttons.

### Layout

The layout follows a full-bleed model with content centered within implied vertical segments, rather than a fixed maximum width. The hero section features a dramatic, highly asymmetric composition of large serif headings framing a central, dark, rounded rectangle. Sections below adopt a similar asymmetrical arrangement, with large dark blocks often balanced by sparse text or logos. There's a strong visual rhythm established by large, consistent vertical section gaps (900px), creating a spacious, almost architectural feel. Content is arranged in alternating visual weights rather than strict grids. Navigation is minimal, likely restricted to an off-screen menu. The overall density is very spacious, emphasizing individual elements and generous negative space.

### Imagery

The site's visual language is dominated by UI-like simulations or abstract dark rectangles that suggest screens or digital interfaces. There are no traditional photographs or illustrations. The treatment is full-bleed, occupying significant visual real estate, with softly rounded corners (implied by the 50px radius). These elements serve a decorative, atmospheric role, enhancing the 'interfaces' theme rather than explaining content or showcasing products directly. The density is medium, with these large visual elements balanced by extensive negative space and purposeful typography.
