---
version: alpha
name: Limitless
description: This design system presents a serious and understated aesthetic, hinting at a modern, high-tech product without resorting to overt flashiness. A constrained palette of near-gray shades dominates, creating a subdued, focused environment. The choice of a custom sans-serif typeface with fine weight variations, especially at display sizes, allows headlines to communicate authority through subtle presence rather than bold declaration. The single, vivid violet accent is sparingly applied, acting as a precise indicator in an otherwise achromatic landscape.
colors:
  page-graphite: "#0f172a"
  body-slate: "#475569"
  subtle-gray: "#334155"
  link-ash: "#64748b"
  violet-signal: "#8a53e1"
  porcelain-white: "#e5e7eb"
  snowdrift: "#f2f3f5"
  divider-silver: "#d1d5db"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.56
    letterSpacing: -0.025px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.025px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.025px
  subheading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.43
    letterSpacing: -0.025px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.025px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.11
    letterSpacing: -0.025px
spacing:
  cardRadius: 16px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 48-64px
components:
  announcement-hero-heading:
    role: 
  ceo-message-content-card:
    role: 
  navigation-link-group-sign-in-button:
    role: 
  navigation-link:
    role: Primary navigation items in the header.
  pill-ghost-button:
    role: Subtle, interactive elements and secondary actions.
  section-heading:
    role: Titles for major content blocks.
  body-paragraph:
    role: General informational text.
  card-container:
    role: Groups related content or interactive elements.
---

## Overview

**North Star:** Architectural blueprint on white marble.  The visual identity relies on precise lines, muted tones, and selective accents to convey controlled innovation.

This design system presents a serious and understated aesthetic, hinting at a modern, high-tech product without resorting to overt flashiness. A constrained palette of near-gray shades dominates, creating a subdued, focused environment. The choice of a custom sans-serif typeface with fine weight variations, especially at display sizes, allows headlines to communicate authority through subtle presence rather than bold declaration. The single, vivid violet accent is sparingly applied, acting as a precise indicator in an otherwise achromatic landscape.

### Do's

- Prioritize Greycliff (Inter) for all text elements to maintain a consistent, modern typographic voice.
- Use Page Graphite (#0f172a) for primary text and headings, grounding the content with a strong, deep tone.
- Apply Body Slate (#475569) for all body copy and default links, ensuring comfortable readability and a subdued feel.
- Employ a border-radius of 9999px for all interactive buttons to establish a consistent 'pill' shape.
- Maintain a tight letter spacing of -0.025em for all text, contributing to the refined and precise aesthetic.
- Use Porcelain White (#e5e7eb) as the primary page background color for a clean and expansive canvas.
- Where elevation is needed, use the distinct shadow rgba(30, 41, 59, 0.15) 0px 25px 50px -12px, creating a subtle lift.

### Don'ts

- Do not introduce highly saturated or bright colors beyond the Violet Signal (#8a53e1) accent, to preserve the restrained palette.
- Avoid using generic button shapes; all buttons should have a 9999px border-radius.
- Do not deviate from the Greycliff (Inter) typeface for any textual content.
- Avoid heavy drop shadows or glows; the elevation should be subtle, created with rgba(30, 41, 59, 0.15) 0px 25px 50px -12px.
- Do not use letter spacing greater than 0; the design relies on a slightly tighter -0.025em for its specific aesthetic.
- Do not use decorative borders or backgrounds that detract from the clean, achromatic base.

### Layout

The layout is primarily centered and contained within a content width that isn't explicitly maxed, allowing for flexible responsiveness. The hero section features a prominent, centered headline over a white background. Sections are delineated by clear vertical spacing, typically 48px to 64px, creating comfortable breathing room. Content within sections is often stacked centrally, as seen with the main message, favoring directness. Navigation is a simple top bar, with links aligning to the right of the brand logo, maintaining a clean and traditional structure.

### Imagery

The site predominantly uses abstract or placeholder images, shown as gray blocks with a subtle error icon. This suggests a content-focused UI with minimal decorative imagery. The brand logo itself is a simple, abstract icon in violet, embodying the precision and technical focus of the brand. There is an absence of photography or complex illustrations, pointing to a 'no-fuss' approach, relying on typography and layout to convey information.
