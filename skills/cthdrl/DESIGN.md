---
version: alpha
name: cthdrl
description: Cthdrl presents a stark, high-contrast dark mode aesthetic, leveraging deep black backgrounds for dramatic visual impact. Typography is central, utilizing two bespoke sans-serif fonts in varied sizes to establish a strong hierarchical rhythm and distinctive brand voice. Interactive elements are minimalist, appearing as ghost controls or text links with a subtle off-white highlight, maintaining the overall severe and sophisticated atmosphere. The visual system emphasizes spaciousness, relying on precise typographic arrangement and discreet dividing lines rather than heavy components or decorative flourishes.
colors:
  midnight-void: "#000000"
  ghost-sand: "#e7ded1"
typography:
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.512px
  heading:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1
    letterSpacing: -0.56px
  display:
    fontFamily: "system-ui"
    fontSize: 121px
    lineHeight: 0.85
    letterSpacing: -1.936px
spacing:
  buttonRadius: 0px
  elementGap: 10px
  sectionGap: 26px
components:
  ghost-navigation-link:
    role: Top navigation and inline links
  ghost-primary-button:
    role: Call to action buttons
---

## Overview

**North Star:** Black canvas, stark typography

Cthdrl presents a stark, high-contrast dark mode aesthetic, leveraging deep black backgrounds for dramatic visual impact. Typography is central, utilizing two bespoke sans-serif fonts in varied sizes to establish a strong hierarchical rhythm and distinctive brand voice. Interactive elements are minimalist, appearing as ghost controls or text links with a subtle off-white highlight, maintaining the overall severe and sophisticated atmosphere. The visual system emphasizes spaciousness, relying on precise typographic arrangement and discreet dividing lines rather than heavy components or decorative flourishes.

### Do's

- Prioritize Midnight Void (#000000) for all background surfaces to maintain high contrast and the dark theme.
- Use Ghost Sand (#e7ded1) as the primary color for all text, links, and interactive element outlines.
- Employ NB Akademie for large, impactful headlines, ensuring letter-spacing values (-0.0160em to -0.0100em) are applied for proper visual density.
- Reserve NB Akademie Mono for body text, navigation, and detailed information, using its distinctive negative letter-spacing (-0.0450em) to create a compact, structured feel.
- Maintain a spacious density in layouts, utilizing 26px for section gaps and 10px for element gaps to provide ample breathing room between content blocks.
- Implement Ghost Primary Buttons using Ghost Sand (#e7ded1) text and a 1px solid Ghost Sand border on a Midnight Void background, with no padding or radius.
- Utilize 1px Ghost Sand (#e7ded1) lines for subtle visual dividers, such as those seen in the header and alongside body text blocks.

### Don'ts

- Avoid using saturated or vivid colors for primary UI elements; color is reserved for decorative gradients or specific content within page sections.
- Do not introduce heavy shadows or elevation; the design relies on flat surfaces and high contrast for visual hierarchy.
- Refrain from using rounded corners on any UI elements; all corners should be sharp and angular (0px radius).
- Do not use generic system fonts; NB Akademie and NB Akademie Mono are essential to the brand's typographic identity.
- Avoid dense, information-heavy blocks of text without sufficient line breaks or spacing; maintain the spacious and minimalist aesthetic.
- Do not use filled buttons for primary calls to action; ghost buttons with a border are characteristic of this design system.
- Minimize the use of multiple font weights; the system primarily uses weight 400 for both typefaces.

### Layout

The page model is full-bleed, with a centered content approach that does not impose a strict max-width but rather uses horizontal white space as part of its design. The hero section is characterized by a full-bleed dark background with a large, centered headline that dominates the viewport. The section rhythm is primarily seamless, relying on typographic shifts and subtle dividing lines rather than alternating background colors. Content is often presented in a single column stack, emphasizing large headlines with smaller, supporting text blocks. Navigation is a minimal top bar, with elements precisely spaced and aligned.

### Imagery

The site uses minimal imagery, primarily relying on abstract, subtle line work and geometric arcs that weave across the dark background as decorative elements. Iconography, when present in the header, is monochromatic (Ghost Sand outline on Midnight Void fill), featuring a delicate stroke weight. The visual language is text-dominant, with graphics serving as atmospheric accents rather than prominent content showcases, contributing to a disciplined and structural feel.
