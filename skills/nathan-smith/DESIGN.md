---
version: alpha
name: Nathan Smith
description: This design system feels like a minimalist display terminal, prioritizing stark readability over ornamentation. Pure black backgrounds serve as an absolute void, upon which unashamedly bold, high-contrast typography in 'off-white' is projected. The deliberate absence of rounded corners across primary content elements, except for navigation pills, creates a tension between sharp utility and interactive cues. Sudden, vivid blocks of color act as dynamic project showcases, appearing almost as glitches or command line outputs against the monochrome UI.
colors:
  absolute-black: "#000000"
  ghost-white: "#f5f4ee"
  off-black: "#333333"
  emerald-screen: "#017051"
  neon-lemon: "#deeb52"
  fuchsia-burst: "#fe7cd2"
  blazing-orange: "#f95720"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.5
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
spacing:
  cardRadius: 0px
  buttonRadius: 100px
  elementGap: 8px
  sectionGap: 128px
components:
  navigation-pills:
    role: 
  award-notification-box:
    role: 
  project-cards-grid:
    role: 
  primary-navigation-pill:
    role: Interactive element allowing user navigation.
  footer-link:
    role: Small, functional links in the footer.
  award-notification-box:
    role: Small, toast-like notification for achievements.
  hero-headline:
    role: Dominant text on the initial screen, establishing brand identity.
---

## Overview

**North Star:** Raw pixels on a pure black canvas. Imagine a high-contrast terminal, where information is stark and unyielding, punctuated by sudden, vibrant bursts of color.

This design system feels like a minimalist display terminal, prioritizing stark readability over ornamentation. Pure black backgrounds serve as an absolute void, upon which unashamedly bold, high-contrast typography in 'off-white' is projected. The deliberate absence of rounded corners across primary content elements, except for navigation pills, creates a tension between sharp utility and interactive cues. Sudden, vivid blocks of color act as dynamic project showcases, appearing almost as glitches or command line outputs against the monochrome UI.

### Do's

- Do use Absolute Black (#000000) as the primary background for all page sections and elevated components.
- Do use Ghost White (#f5f4ee) for all primary text content and interactive element states to ensure maximum contrast.
- Do apply 0px border-radius to all content-bearing elements like Project Cards to maintain a sharp, utilitarian aesthetic.
- Do use the Mabry pro font (weight 400, size 80px, line-height 1.0) for all main headlines to establish a bold, direct tone.
- Do punctuate the monochrome design with single, vivid accent colors (#017051, #deeb52, #fe7cd2, #f95720) only for project cards and other intentional focal points.
- Do use a consistent 100px border-radius for all navigation pills to distinguish interactive elements with softness against the prevailing angularity.

### Don'ts

- Don't introduce any soft-edged shapes or general rounded corners outside of explicit navigation elements.
- Don't use gradients; stick to solid color blocks for backgrounds and accents.
- Don't introduce subtle background patterns or textures; maintain pure, flat color fields.
- Don't use desaturated or muted colors for accents; only vivid, high-chromatic colors are permitted where color is used.
- Don't vary font weights for Fk Display; it should remain weight 400 across all its usage.
- Don't break the tight line-height (1.0) for Mabry pro headlines; its impact relies on close text packing.

### Layout

The site uses a full-bleed layout on an Absolute Black background. The hero section features large, centered typographic elements (Mabry Pro) that demand attention. Content sections appear to stack vertically, with substantial vertical spacing (sectionGap: 128px) providing breathing room. Project showcases are presented as distinct, vivid color blocks, sometimes overlapping partially, breaking the rigid grid. The overall layout is centered-content with flexible margins that adjust to viewport size, rather than a fixed maximum width container for the main content. The navigation is a minimalist top-bar on the left, featuring pill-shaped buttons. The footer contains left-aligned and right-aligned text links, maintaining the high-contrast aesthetic.

### Imagery

The visual language is dominantly UI-focused, with minimal use of external imagery. When present, imagery (like the small pencil icons in the award notification) is functional and iconographic, not lifestyle. Project showcases utilize bold, solid color blocks (Emerald Screen, Neon Lemon, Fuchsia Burst, Blazing Orange) instead of traditional images or product screenshots. These color blocks are presented full-bleed within their respective card areas, with raw, sharp edges, acting as abstract placeholders or categorical signifiers rather than detailed visual content. The site is text-dominant, relying on typography and stark color contrasts to convey information and atmosphere.
