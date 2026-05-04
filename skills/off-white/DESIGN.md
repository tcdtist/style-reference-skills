---
version: alpha
name: OFF WHITE
description: This design system conjures a digital arcade aesthetic, vibrant and deliberately chaotic. It layers a stark black canvas with an aggressive, highly saturated palette of neon 'glitch' green, 'warning' red, and 'digital' yellow, creating a high-contrast, attention-demanding visual rhythm. Text is predominantly rendered in stark black or white, with occasional use of a muted gray. The visual language is defined by the interplay of dense imagery and hard-edged blocks of vivid color, presenting a challenging, yet engaging, interface that resists traditional notions of 'clean' or 'minimal'.
colors:
  midnight-void: "#000000"
  ghost-canvas: "#ffffff"
  muted-grey: "#aba4a4"
  glitch-green: "#00fb34"
  warning-red: "#ff0000"
  digital-yellow: "#fff500"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.31
  body-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.31
  body:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.3
  body-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.3
  display-sm:
    fontFamily: "system-ui"
    fontSize: 180px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 500px
    lineHeight: 1.3
spacing:
  buttonRadius: 30px
  elementGap: 40px
  sectionGap: 60-120px
components:
  ghost-brand-button:
    role: Interactive element
  filled-brand-button:
    role: Primary action
  rounded-link:
    role: Navigation or secondary interaction
  hero-headline-text-block:
    role: Primary page title
  image-collage-block:
    role: Content display
---

## Overview

**North Star:** Neon Glitch Arcade — stark black canvas with pixelated neon blocks.

This design system conjures a digital arcade aesthetic, vibrant and deliberately chaotic. It layers a stark black canvas with an aggressive, highly saturated palette of neon 'glitch' green, 'warning' red, and 'digital' yellow, creating a high-contrast, attention-demanding visual rhythm. Text is predominantly rendered in stark black or white, with occasional use of a muted gray. The visual language is defined by the interplay of dense imagery and hard-edged blocks of vivid color, presenting a challenging, yet engaging, interface that resists traditional notions of 'clean' or 'minimal'.

### Do's

- Always use Midnight Void (#000000) as the default page background to maintain the stark, dark canvas.
- Utilize Glitch Green (#00fb34) for all primary interactive elements such as buttons and active links.
- Apply a 30px border-radius only to Ghost Brand Buttons and Rounded Links, no other UI elements.
- When using typography, prioritize the Offwhite font for all headings and brand text, with Times/Arial reserved for body/small functional text.
- Emphasize content through high-contrast color pairings, specifically Glitch Green on Midnight Void, or Warning Red as a highlight against Midnight Void.
- Employ the image collage pattern with Midnight Void (#000000) image borders to break vertical rhythm and add visual density.
- Maintain a spacious density for sections, using 60px or 90px paddingTop and 40px padding for element gaps.

### Don'ts

- Do not use subtle shadows or gradients; all visual elements should have hard edges and solid color fills.
- Avoid using Glitch Green (#00fb34), Warning Red (#ff0000), or Digital Yellow (#fff500) for large, static decorative backgrounds; their impact is in their high-contrast disruption.
- Do not introduce additional border-radius values beyond 0px and 30px (for specific interactive elements).
- Do not rely solely on system fonts; the custom 'Offwhite' font is crucial for brand identity and visual impact.
- Avoid standard grid layouts for imagery; instead, prefer a dense, overlapping collage or staggered arrangement.
- Do not use subtle or low-contrast text colors; the palette demands strong contrast (e.g., Midnight Void on Glitch Green, Ghost Canvas on Midnight Void).
- Never use generic spacing that creates unintended visual breathing room; adhere to the specified 40px, 60px, 90px, 120px values as defined.

### Layout

The page adheres to a full-bleed layout, maximizing the screen width without a defined pageMaxWidth. The hero section features a dominant, central headline typography in an oversized custom font, surrounded by the image collage. Content arrangement alternates between dense, overlapping photographic blocks and large, blocky text elements that break normal flow. Vertical rhythm is established by section gaps ranging from 60px to 120px, with no subtle dividers. Navigation is minimal, a hamburger menu icon, suggesting an intentional resistance to conventional, easily discoverable navigation. The overall density is high, with design elements frequently overlapping.

### Imagery

The visual language is dominated by highly treated photography, almost exclusively tight crops of a single individual. The images are contained within rectangular containers, often overlapping or arranged in a dense, 'glitchy' collage pattern against a black background. There are no smooth transitions; images are abruptly cut and bordered with a 1px solid Midnight Void (#000000) line or the vivid brand accent colors. This creates a raw, fragmented, and somewhat aggressive visual density. Imagery's role is primarily decorative atmosphere and brand identity showcase, rather than explanatory content.
