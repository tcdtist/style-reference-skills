---
version: alpha
name: Koto
description: Koto employs a high-contrast dark mode aesthetic, utilizing a deep charcoal canvas as the primary background. Typography is kept minimal and precise, featuring a distinctive condensed display font for headlines and a more functional sans-serif for body text. Interaction elements are rendered subtly with ghost-like borders, relying on text color and subtle background changes for state indication, rather than heavy fills or shadows. The overall impression is one of stark sophistication and understated control.
colors:
  midnight-charcoal: "#060606"
  dark-void: "#141414"
  silver-whisper: "#989898"
  ghost-gray: "#595959"
  lineage-edge: "#202020"
  pale-ash: "#b4b4b4"
  white-canvas: "#ffffff"
  koto-yellow: "#ffe800"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.1
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.48px
spacing:
  cardRadius: 6px
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 48px
components:
  ghost-navigation-link:
    role: Primary navigation and interactive text links.
  footer-link:
    role: Secondary navigation and informational links within the footer.
  content-card:
    role: Container for showcasing work, content, or features.
  ghost-button:
    role: Generic interactive element, with a text label.
  koto-logo:
    role: Brand identification in header.
  minimal-text-button:
    role: Actionable text without explicit button styling, often for secondary actions.
---

## Overview

**North Star:** Midnight gallery, etched steel.

Koto employs a high-contrast dark mode aesthetic, utilizing a deep charcoal canvas as the primary background. Typography is kept minimal and precise, featuring a distinctive condensed display font for headlines and a more functional sans-serif for body text. Interaction elements are rendered subtly with ghost-like borders, relying on text color and subtle background changes for state indication, rather than heavy fills or shadows. The overall impression is one of stark sophistication and understated control.

### Do's

- Use Midnight Charcoal (#060606) for all primary page and section backgrounds.
- Apply gtKotoheimCondensed (weight 300) with -0.0100em letter-spacing for all headlines and display text larger than 16px.
- Ensure all primary interactive elements (links, buttons) are rendered in White Canvas (#ffffff) against dark backgrounds.
- Utilize a 1px solid White Canvas (#ffffff) border for subtle ghost button treatments.
- Employ the 6px border-radius for all card-like containers and interactive surface elements.
- Maintain generous padding of 36px for all card panels to ensure content breathability.
- Use Koto Yellow (#ffe800) exclusively for brand elements or critical accents requiring high visual callout.

### Don'ts

- Avoid using heavy shadows or strong background fills for interactive elements; prefer ghost styles with subtle borders and text color changes.
- Do not introduce additional background colors outside of the defined neutral palette for surfaces.
- Refrain from using saturated colors other than Koto Yellow; maintain the achromatic dominance.
- Do not deviate from the specified letter-spacing for gtKotoheimCondensed; it is a signature characteristic.
- Avoid using default browser link styles; always override with White Canvas text and ghost interaction patterns.
- Do not apply rounded corners to buttons or navigation links; they should maintain a 0px border radius for a sharp, precise aesthetic.

### Layout

The page adheres to a full-bleed dark canvas model. The hero section features a vertically centered, large-scale headline over the Midnight Charcoal background. Content sections follow a consistent, vertically stacked rhythm with ample spacing. Text blocks are primarily left-aligned. The top navigation is a fixed minimalist bar with left-aligned brand logo and right-aligned compact links, providing global access without occupying significant visual space.

### Imagery

The visual language is UI-dominant, with a strict absence of photography or complex illustrations on the main pages. Icons are minimal, outlined, and monochromatic, typically in White Canvas against Dark Void backgrounds. Imagery is used functionally (e.g., small brand logos within case studies) or within specific product showcase sections, but does not serve as a primary decorative element. The density is text-dominant with UI elements guiding the eye.
