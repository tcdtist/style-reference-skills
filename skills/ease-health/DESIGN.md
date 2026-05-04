---
version: alpha
name: Ease Health
description: Ease Health employs a grounded, clinical yet approachable aesthetic, balancing a muted green-blue palette with abundant whitespace. The design emphasizes clarity through distinct surface levels, subtle typography, and a signature deep forest green for primary actions, contrasting with the soft, almost pastel backgrounds. Components are clean and substantial, featuring generous padding and distinctive rounded corners, giving the interface a calm, trustworthy, and organized feel.
colors:
  forest-green: "#0f3e17"
  cream-canvas: "#fffefc"
  mint-glaze: "#b1dbb8"
  slate-mist: "#b6ced5"
  keylime-wash: "#e1f4df"
  mint-kiss: "#cfe7d3"
  border-grey: "#e5e7eb"
  ink-text: "#222222"
  dark-charcoal: "#333333"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.36px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.42px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.54px
  subheading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.3
    letterSpacing: -0.69px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.3
    letterSpacing: -0.84px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.05
    letterSpacing: -0.4px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -1.68px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 74px
    lineHeight: 1.05
    letterSpacing: -0.74px
spacing:
  cardRadius: 14px
  buttonRadius: 14px
  elementGap: 21px
  sectionGap: 42px
components:
  primary-action-button-filled:
    role: Main call-to-action button, conveying primary user interaction.
  large-action-button:
    role: Prominent full-block call-to-action for key feature sections.
  content-card-mint-glaze:
    role: General purpose container for information or features, with a refreshing tint.
  content-card-slate-mist:
    role: Alternative general purpose container, providing subtle visual distinction.
  content-card-keylime-wash:
    role: Lightest card background for sub-sections or layered content.
  pill-badge:
    role: Used for categorization or brief status indicators.
---

## Overview

**North Star:** calm clinical canvas

Ease Health employs a grounded, clinical yet approachable aesthetic, balancing a muted green-blue palette with abundant whitespace. The design emphasizes clarity through distinct surface levels, subtle typography, and a signature deep forest green for primary actions, contrasting with the soft, almost pastel backgrounds. Components are clean and substantial, featuring generous padding and distinctive rounded corners, giving the interface a calm, trustworthy, and organized feel.

### Do's

- Use Forest Green (#0f3e17) exclusively for primary action buttons and core brand elements to maintain its impact.
- Apply 14px border-radius to all cards and most buttons for a consistent soft, approachable aesthetic.
- Ensure all text content defaults to Suisseintl for readability and consistency, varying only weight and size.
- Utilize Faire Octave at weight 300 for major headlines (40px, 74px) to convey understated authority.
- Employ Cream Canvas (#fffefc) as the primary background for detailed UI elements, balancing against chromatic cards.
- Maintain a comfortable density with 21px for element gaps and 42px for card and section padding.
- Use Border Grey (#e5e7eb) for all neutral borders and dividers to keep the interface light and airy.

### Don'ts

- Do not introduce new chromatic colors outside of the defined green and blue accents to preserve the muted palette.
- Avoid harsh shadows or strong elevation; surfaces should feel flat and distinct through color changes, not depth.
- Do not use multiple font families for body text or interface elements; Suisseintl serves this purpose exclusively.
- Never use full black (#000000) for text; opt for Ink Text (#222222) or Dark Charcoal (#333333) for softer contrast.
- Do not deviate from the established border-radius values across component types.
- Avoid compacting content; err on the side of generous element and padding values to maintain the comfortable density.
- Do not use generic system fonts when Suisseintl or Faire Octave are available; these are critical for brand identity.

### Layout

The page uses a maximum-width contained layout, centering content within a white canvas. The hero section features a split layout: a bold green content block on the left with a large headline, contrasted by a light blue canvas on the right presenting stacked product visuals. Sections below alternate between full-width content blocks and contained layouts, often with alternating two-column layouts (text left, image right, or vice-versa). Vertical rhythm is established through generous and consistent section gaps, giving content ample breathing room. The navigation is a sticky top bar with a primary 'Book a Demo' button.

### Imagery

Imagery is functional and product-focused, featuring clean product screenshots of UI elements and interface cards. These visuals often overlap or are presented as distinct, rounded-corner elements against tinted backgrounds. Text-based icons are minimal. Visuals serve to explain product features rather than create abstract atmosphere, maintaining a high-fidelity, clear display of the software's capabilities.
