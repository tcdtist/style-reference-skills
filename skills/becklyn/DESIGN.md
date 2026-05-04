---
version: alpha
name: Becklyn
description: Becklyn employs a deep, inky canvas with stark white text, establishing a high-contrast foundation for a digital agency. Typography blends assertive, almost brutalist sans-serifs with classic serifs for accent, creating a mood of modern authority with a nod to traditional craft. Components are defined by sharp edges or subtle curves and ghost-like interactions, prioritizing functionality without heavy ornamentation. The visual system is rooted in a dark mode aesthetic, allowing a single vivid gradient accent to provide energetic punctuation against an otherwise monochrome backdrop.
colors:
  midnight-ink: "#1a1a1a"
  ghost-white: "#ffffff"
  charcoal-gray: "#3b3b3b"
  steel-gray: "#606060"
  spectrum-burst: "#004eff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.15
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.28px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
    letterSpacing: -0.506px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.9px
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.2
    letterSpacing: -1.008px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1.05
    letterSpacing: -2.924px
  display:
    fontFamily: "system-ui"
    fontSize: 92px
    lineHeight: 1
    letterSpacing: -5.428px
spacing:
  cardRadius: 10px, 20px
  buttonRadius: 100px
  elementGap: 20px
  sectionGap: 40px
components:
  ghost-navigation-link-dark:
    role: Global navigation item
  ghost-navigation-link-light:
    role: Footer navigation item
  circular-toggle-button:
    role: Interactive control or status indicator
  information-card-charcoal:
    role: Content container, feature display
  information-card-midnight:
    role: Prominent content container
  system-notification-popup:
    role: Temporary information or cookie consent
  primary-action-button-gradient:
    role: Main call to action, interactive button
---

## Overview

**North Star:** Inky canvas, stark white lines

Becklyn employs a deep, inky canvas with stark white text, establishing a high-contrast foundation for a digital agency. Typography blends assertive, almost brutalist sans-serifs with classic serifs for accent, creating a mood of modern authority with a nod to traditional craft. Components are defined by sharp edges or subtle curves and ghost-like interactions, prioritizing functionality without heavy ornamentation. The visual system is rooted in a dark mode aesthetic, allowing a single vivid gradient accent to provide energetic punctuation against an otherwise monochrome backdrop.

### Do's

- Prioritize a dark aesthetic with a Midnight Ink (#1a1a1a) background for most surfaces and Ghost White (#ffffff) for primary text and interactive elements.
- Use UniversalSans for all body text, UI elements, and most headlines, primarily at weight 400 for clarity and a modern feel.
- Reserve Cambon for high-impact display headlines (68px or 92px) to add a touch of classic elegance against the modern sans-serif majority.
- Apply negative letter-spacing aggressively on larger text sizes (e.g., -0.0590em at 92px) to ensure titles feel tight and impactful.
- Employ Charcoal Gray (#3b3b3b) as a subtle background for elevated cards or secondary content blocks, providing minimal surface differentiation.
- Use 100px border-radius for all button-like interactive elements to create a distinct pill or circular shape.
- Introduce the Spectrum Burst gradient (linear-gradient(...) #004eff) as a deliberate accent for primary calls-to-action or critical highlights against the dark monochrome. Use it sparingly.

### Don'ts

- Avoid using bright, saturated colors universally; restrict them to the Spectrum Burst gradient for accent.
- Do not use generic box-shadows or heavy elevation; surfaces should primarily differentiate through background color shifts.
- Avoid mixed-case headings unless Cambon is specifically used for a decorative effect; otherwise, maintain clear typographic hierarchy with UniversalSans.
- Do not deviate from the established letter-spacing values, especially for headlines, as it defines a key part of the typographic personality.
- Avoid complex border styles or heavy strokes; the design favors minimal borders (if any) or very thin outlines in Ghost White.
- Do not use Ghost White as a background color unless for specific, small, and contained elements like the footer on some pages, where it acts as a rare inversion of the dominant dark theme.
- Do not apply large, standard padding to interactive ghost buttons; they are designed to be visually lightweight and contextually driven by text.

### Layout

The page uses a contained layout within a maximum width of 503px, centered within the full viewport. The hero section often features a large, dark background with centered, prominent Cambon typography. Sections flow vertically with comfortable spacing (40px section gap), and content is primarily displayed in stacked, clear blocks, often anchored by large headings. There are instances of 2-column card grids for features. Navigation is primarily a minimal top-bar and a bottom-fixed navigation bar, both using ghost-style links.

### Imagery

Imagery is minimal, primarily focusing on abstract graphics or subtle, full-bleed backgrounds where visible. When present, product or concept visuals are handled with a dark aesthetic, often blending into the background. Icons, when visible, appear as simple outlines in Ghost White. The density is text-dominant, with ample breathing room, pushing imagery to a supporting, atmospheric role rather than a direct content showcase. There is no evidence of photography, illustrations, or 3D renders. The aesthetic is pure UI and typography driven.
