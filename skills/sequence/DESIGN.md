---
version: alpha
name: Sequence
description: Sequence establishes a sunlit, architectural clarity with a predominant white canvas, delicate grays, and precise monochrome elements. Subtle background gradients add depth without overwhelming the product's clean functionality. Typography is compact and confident, grounding the interface with a technical yet approachable feel. The visual system emphasizes functional directness, using soft elevation and a single, vivid violet accent for key interactions and brand highlights.
colors:
  canvas-white: "#ffffff"
  cloud-gray: "#f7f7f7"
  ghost-gray: "#efefef"
  stone-grey: "#e5e7eb"
  graphite: "#505050"
  dark-slate: "#42424a"
  ash: "#757575"
  deep-ink: "#1d1d20"
  sequence-violet: "#a565ff"
  deep-violet: "#5e5cff"
  pale-violet-background: "#ebebff"
  muted-violet-glow: "#e0c9ff"
  accent-green: "#2e7317"
  hero-background-gradient: "#c0e6ff"
  subtle-radial-overlay: "#b9d9f9"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: -0.002px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.002px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.003px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.003px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -0.025px
  display:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 1
    letterSpacing: -0.025px
spacing:
  cardRadius: 8px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 40px
components:
  primary-ghost-button:
    role: Action button with an invisible background and text that blends with surrounds till hovered.
  secondary-ghost-button:
    role: Muted action button or navigation link for less prominent interactions.
  branded-pill-button:
    role: Primary call to action, drawing attention with the brand accent color.
  outline-pill-button:
    role: Subtle, secondary call to action that needs slightly more emphasis than a ghost button.
  content-card-default:
    role: Container for articles, features, or small product showcases.
  content-card-elevated:
    role: Prominent information containers that require clear separation and subtle 'lift'.
  input-field-full-width:
    role: Standard editable text input for forms.
  input-field-underscored:
    role: Minimalist input style with only a bottom border, often for search or focused data entry.
---

## Overview

**North Star:** Architectural blueprint on white marble

Sequence establishes a sunlit, architectural clarity with a predominant white canvas, delicate grays, and precise monochrome elements. Subtle background gradients add depth without overwhelming the product's clean functionality. Typography is compact and confident, grounding the interface with a technical yet approachable feel. The visual system emphasizes functional directness, using soft elevation and a single, vivid violet accent for key interactions and brand highlights.

### Do's

- Use twkLausanne font family for all body text, navigation, and most headings, employing its various weights to establish visual hierarchy.
- Apply moderatSerif for signature large display headings between 40px and 46px at weights 300 or 400 with -0.0250em letter spacing.
- Reserve Sequence Violet (#a565ff) exclusively for primary calls to action, brand highlights, and decorative icon accents.
- Implement Canvas White (#ffffff) as the dominant background for all major sections and elevated cards to maintain an airy, expansive feel.
- Define UI element borders with Stone Grey (#e5e7eb) at 1px thickness for a delicate, crisp separation.
- Apply a 9999px border-radius to all buttons for a friendly, pill-shaped aesthetic.
- Employ Cloud Gray (#f7f7f7) for subtle background shifts to differentiate sections without heavy visual dividers.

### Don'ts

- Avoid using multiple accent colors; keep Sequence Violet (#a565ff) as the singular chromatic highlight for interactive elements.
- Do not introduce strong, opaque background gradients on interface elements, instead opt for subtle, near-transparent washes or blurred effects.
- Do not use heavy, dark drop shadows; maintain a light elevation style with minimal offset and transparency, referencing the existing shadow tokens.
- Refrain from using excessively bold weights for body text; prioritize clarity and a compact information display with twkLausanne at weights 400 or below.
- Do not deviate from the established spacing scale; maintain a compact density, relying on 4px and 8px increments for element gaps and small paddings.
- Avoid sharp, angular corners on cards; use 8px or 16px radius to align with the slightly softer visual style.
- Do not introduce complex color patterns or highly saturated hues outside of the defined brand and accent colors.

### Layout

The page maintains a centered max-width content area, often implicit, creating a contained and organized feel. The hero section features a centered headline over a subtle, full-bleed gradient background, establishing an open first impression. Section rhythm is predominantly defined by alternating white and subtly grayed backgrounds, often with soft linear gradients, creating a seamless flow without overt dividers. Content is arranged in alternating text-left/visual-right patterns or centered stacked blocks, providing clear visual progression. Grid usage includes multi-column feature lists with icons and descriptions, and card grids for solutions or partners. The overall density is spacious between sections, but content within blocks is compact. Navigation is a sticky top bar with a clear brand logo, primary links, and distinct 'Sign in' and 'Book demo' actions.

### Imagery

The site predominantly uses abstract, blueprint-like illustrations, often with a subtle glowing effect or faded outlines against a light background. These conceptual visuals provide context without being literal product screenshots. When product imagery is present, it's typically clean, outlined UI mockups or line-art illustrations of interfaces. Icons are monochromatic, mostly outlined with a consistent stroke weight, and occasionally filled with Sequence Violet (#a565ff) for emphasis. Imagery serves a decorative and atmospheric role, rather than purely informational, creating an intellectual and somewhat futuristic mood. Image density is moderate, carefully balanced with significant white space.
