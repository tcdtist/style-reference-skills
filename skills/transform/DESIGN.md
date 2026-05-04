---
version: alpha
name: Transform
description: Transform's visual system evokes a dark, pulsating theater space with bursts of electrifying color. Deep, immersive purples and magenta accents cut through stark black and white typography, creating a high-contrast experience that feels both bold and immediate. Typefaces are impactful and condensed, anchoring the dynamic palette and drawing attention to key announcements, while ample negative space ensures clarity amidst the visual energy.
colors:
  midnight-plum: "#340068"
  neon-magenta: "#fb00c2"
  live-event-red: "#ff1e00"
  coal-black: "#000000"
  paper-beige: "#f4ede9"
  canvas-white: "#ffffff"
  concrete-gray: "#d9d9d9"
  input-border-gray: "#767676"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.45
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.45
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.38
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.38
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.1
    letterSpacing: -1.12px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -1.6px
spacing:
  elementGap: 8-16px
  sectionGap: 48-56px
components:
  primary-action-button:
    role: Fills and calls to action prominently
  subtle-circular-button:
    role: Decorative page navigation, subtle actions
  footer-action-button:
    role: Call to action within dark footer sections
  monochromatic-feature-card:
    role: Displays related content, news, or blog posts
  subtle-feature-card:
    role: Displays related content using a lighter background
  standard-input-field:
    role: Text input forms
---

## Overview

**North Star:** Electric theater spotlight

Transform's visual system evokes a dark, pulsating theater space with bursts of electrifying color. Deep, immersive purples and magenta accents cut through stark black and white typography, creating a high-contrast experience that feels both bold and immediate. Typefaces are impactful and condensed, anchoring the dynamic palette and drawing attention to key announcements, while ample negative space ensures clarity amidst the visual energy.

### Do's

- Use Midnight Plum (#340068) for all large background sections that require a dramatic, immersive feel.
- Apply Neon Magenta (#fb00c2) as the primary accent color for all calls to action, interactive states, and important graphical elements.
- Set all headlines and impactful text in Walsheim at weight 700 or 800 with a letter-spacing of -0.0200em for a condensed, bold presence.
- Maintain high contrast by pairing Coal Black (#000000) text on Paper Beige (#f4ede9) or Canvas White (#ffffff) backgrounds for readability.
- Utilize 0px border radius for most UI elements like cards and buttons, favoring sharp, defined edges.
- Employ a base spacing unit of 8px, building up to 16px for element gaps and 48-56px for section separation.

### Don'ts

- Avoid using gradients; the design relies on stark, solid color blocks.
- Do not introduce soft shadows or elevated effects; surfaces are flat and defined by color and boundaries.
- Do not use highly saturated colors for large areas of body text, reserve chromatic colors for accents and headings.
- Avoid decorative border radii for cards or buttons, maintaining the 0px radius aesthetic unless specifically for a circular element.
- Do not use subtle gray for primary action backgrounds; reserve Neon Magenta (#fb00c2) for clear interactive elements.
- Refrain from using lightweight fonts or open letter-spacing for headlines; Walsheim's condensed, bold nature is critical to the brand.

### Layout

The site uses a max-width contained layout generally, but a full-bleed hero section is often employed, characterized by a dark background with a large, centered, high-contrast headline. Section rhythm varies but includes distinct alternating bands of color (e.g., dark with light text, then light with dark text). Content is often arranged in prominent centered stacks for headlines and quotes, with occasional two-column layouts for information blocks. There is a prominent sticky top navigation bar. The overall density is comfortable, with generous vertical spacing between major sections, letting dramatic headlines breathe.

### Imagery

This design system uses a mix of candid, dark-lit photography capturing live performance environments and abstract patterns. Photography is often full-bleed or presented as background elements, creating an immersive, atmospheric context for text. Product-style visuals are not present. Icons are simple, outlined, and monochromatic, primarily serving a functional role in navigation or social links. Imagery typically serves a decorative and atmospheric role, rather than strictly explanatory, allowing the bold typography to convey key messages. The density of imagery can be high in hero sections, giving way to more text-dominant layouts in content sections.
