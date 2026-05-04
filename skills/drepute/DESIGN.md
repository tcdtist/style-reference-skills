---
version: alpha
name: Drepute
description: Drepute employs a dark, contemplative aesthetic, grounding itself in the deep blues and blacks of a stark night sky or a still lake. Typography is central, using elegant serifs for prominent messages and clear sans-serifs for utility. The interface is highly minimal, with muted controls and a focus on content, relying on white text on dark backgrounds and thin borders for structure. Interactivity is suggested by subtle outlines and a scarcity of vibrant color, making any color highlight feel purposeful and significant.
colors:
  midnight-lake: "#161616"
  night-sky: "#000000"
  snow-drift: "#ffffff"
  ash-gray: "#bfbfbf"
  slate-dew: "#a9a9a9"
  pebble-stone: "#7f8080"
  teal-accent: "#00a4a6"
  mountain-mist: "#8995a9"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: -1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -1.14px
  subheading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
    letterSpacing: -3.85px
  heading:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.25
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1.25
    letterSpacing: 0px
spacing:
  buttonRadius: 4px
  elementGap: 24px
  sectionGap: 32px
components:
  light-outlined-button:
    role: Secondary action button on dark backgrounds.
  solid-text-button-default:
    role: Primary action button, used primarily against lighter areas or when a strong contrast is needed.
  text-input:
    role: Standard input field for user data.
  brand-logo:
    role: Primary brand identifier in navigation.
  hero-headline:
    role: Large, prominent text for hero sections.
---

## Overview

**North Star:** Midnight Lake Serenity: a tranquil, dark expanse punctuated by crisp, minimal text and subtle, interactive glints of light.

Drepute employs a dark, contemplative aesthetic, grounding itself in the deep blues and blacks of a stark night sky or a still lake. Typography is central, using elegant serifs for prominent messages and clear sans-serifs for utility. The interface is highly minimal, with muted controls and a focus on content, relying on white text on dark backgrounds and thin borders for structure. Interactivity is suggested by subtle outlines and a scarcity of vibrant color, making any color highlight feel purposeful and significant.

### Do's

- Ground all primary layouts in 'Midnight Lake' (#161616) as the dominant background color to maintain the deep, dark aesthetic.
- Use 'Snow Drift' (#ffffff) for all main headings and body text on dark backgrounds to ensure strong contrast and legibility.
- Apply 'Playfair Display' for all primary display text and headings, leveraging its elegant serif character.
- Structure interactive elements with minimal, crisp borders, such as 1px solid 'Mountain Mist' (#8995a9) for secondary actions or 'Teal Accent' (#00a4a6) for active links.
- Maintain a tight layout with 'elementGap' of 24px and component radii consistently at 4px.
- Introduce 'Teal Accent' (#00a4a6) sparingly, strictly for links and interactive outlines where a subtle highlight is desired, avoiding its use as a filled button background.
- Employ Source Sans Pro for all functional text, like buttons, inputs, and body copy, to provide a modern, legible contrast to the decorative serifs.

### Don'ts

- Avoid using bright or overly saturated colors as primary backgrounds; the system relies on deep, subdued tones.
- Do not introduce heavy shadows or gradients; rely on clean, flat surfaces and crisp borders for visual definition.
- Refrain from using multiple distinct accent colors; 'Teal Accent' (#00a4a6) should largely be the sole chromatic highlight.
- Do not fill primary action buttons with 'Teal Accent' (#00a4a6); reserve it for outlines or text accents.
- Avoid excessive imagery or complex visual elements in content areas; prioritize clean typography and functional UI.
- Do not deviate from the established small border radius of 4px; rounded edges should be consistent and subtle.

### Layout

The page employs a full-bleed layout for its hero section, featuring a centered headline over the background image. Subsequent sections, like the 'Subscribe' area, appear to use a max-width contained layout, vertically centered with clear, consistent spacing. The overall rhythm is one of spaciousness with minimal, focused content blocks stacked vertically, relying on generous vertical padding and strong typographic contrasts to define sections. A thin banner at the top acts as a secondary, lighter navigation or alert area. The navigation itself is a simple top bar, also full-width, displaying the brand name and possibly a few links.

### Imagery

The site primarily features a single, full-bleed night landscape photograph as a hero background, depicting mountains reflected in a still lake under a starry sky. This imagery serves as a decorative, atmospheric backdrop rather than conveying specific content. There is no other prominent use of photography, illustration, or complex graphics. Icons are minimal, likely monochromatic or ghost-style (such as the chat icon), serving strictly functional roles.
