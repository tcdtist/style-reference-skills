---
version: alpha
name: Reflect Notes
description: Reflect Notes evokes a deep, intellectual calm, like a thoughtful, organized mind brought to digital life. The consistent dark violet canvas sets a contemplative mood, while subtle gradients and inset shadows carve out interactive elements and content zones with precision. A single powerful violet serves as the primary accent, drawing focus and providing clear affordances without overwhelming the subdued aesthetic. The interplay of soft, almost translucent cards with sharp typography gives the UI a distinctly thoughtful and elevated feel.
colors:
  deep-violet: "#030014"
  subtle-violet: "#060317"
  twilight-graphite: "#10093a"
  whisper-white: "#ffffff"
  shadowed-slate: "#f4f0ff"
  muted-ash: "#a8a6b7"
  passive-gray: "#918ea0"
  inactive-steel: "#54525f"
  reflect-violet: "#5046e4"
  interactive-violet: "#9382ff"
  aurora-gradient: "#e59cff"
  halo-inset-gradient: "#b7a4fb"
  rainbow-burst-gradient: "#fc72ff"
typography:
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: 0px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.17
    letterSpacing: 0px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.14
    letterSpacing: 0px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.11
    letterSpacing: 0px
spacing:
  cardRadius: 16px
  buttonRadius: 6px
  sectionGap: 72-120px
components:
  cta-badge-hero-buttons:
    role: 
  feature-grid-cards:
    role: 
  testimonial-cards:
    role: 
  primary-call-to-action-button:
    role: Main user action.
  secondary-ghost-button:
    role: Minor actions, navigation, or less prominent calls to action.
  pill-accent-button:
    role: Navigation links or categorical tags, offering more visual presence than a standard link.
  interactive-card:
    role: Showcasing features, testimonials, or grouped content.
  search-input-field:
    role: Search or text input with clear feedback.
  tag-badge:
    role: Categorization or short status labels.
---

## Overview

**North Star:** Midnight Orbit in a Dark Universe. It feels like navigating a personal cosmos of interconnected thoughts, illuminated by subtle internal light.

Reflect Notes evokes a deep, intellectual calm, like a thoughtful, organized mind brought to digital life. The consistent dark violet canvas sets a contemplative mood, while subtle gradients and inset shadows carve out interactive elements and content zones with precision. A single powerful violet serves as the primary accent, drawing focus and providing clear affordances without overwhelming the subdued aesthetic. The interplay of soft, almost translucent cards with sharp typography gives the UI a distinctly thoughtful and elevated feel.

### Do's

- Use Deep Violet (#030014) as the primary page background to maintain the consistent dark, immersive aesthetic.
- Apply Reflect Violet (#5046e4) exclusively to primary call-to-action buttons for powerful, unambiguous interaction.
- Maintain a clear visual hierarchy using AeonikPro (substitute: Montserrat) for all headings (sizes 24px-72px) and Inter V (substitute: Inter) for all body and UI text (sizes 12px-18px).
- Employ the 16px border-radius for all primary content cards to establish visual consistency and a subtle softness.
- Utilize rgba(255, 255, 255, 0.01) for card backgrounds to allow the underlying page gradients and dark tones to create depth.
- Implement the Halo Inset Gradient (linear-gradient(rgba(183, 164, 251, 0) 0px, rgb(183, 164, 251) 100%, rgb(133, 98, 255) 100%, rgba(133, 98, 255, 0) 0%)) for feature backgrounds to give an internal glow.

### Don'ts

- Avoid using highly saturated colors other than Reflect Violet for interactive elements; stick to the muted violet palette.
- Do not introduce sharp corners; maintain the consistent 5px, 6px, 8px, 16px, or 32px border radii for elements.
- Do not use external drop shadows for elevation; rely on transparent backgrounds and subtle inset shadows like rgba(255, 255, 255, 0.04) 0px 0px 24px 0px inset.
- Do not deviate from the Inter V and AeonikPro font families; alternative fonts would compromise the precise, thoughtful tone.
- Avoid arbitrary custom padding values; adhere to the 4px base unit and specified spacing tokens (e.g., 8px, 12px, 16px, 20px, 24px, 28px).
- Do not replace the subtle gradient backgrounds with solid colors, as the gradients are central to the 'orbit' aesthetic.

### Layout

The page primarily utilizes a max-width contained layout for content sections, implicitly around 1200px, although the hero section extends full-bleed. The hero features a large, centered headline over a cosmic gradient background. Subsequent sections often employ a 2-column or 3-column grid for features and testimonials. Section rhythm is generally consistent vertical spacing, often with subtle background shifts (Deep Violet vs. Subtle Violet) or atmospheric gradients like Aurora. Content arrangement frequently alternates text-left/image-right or centered feature blocks. A 3-column card grid is common for presenting features and social proof. The overall density is comfortable, with ample breathing room between elements and sections. Navigation is a sticky top bar with logo, links, and right-aligned buttons.

### Imagery

The site uses a combination of abstract, subtle glowing graphics, product screenshots, and iconography. Abstract graphics, especially in the hero, are full-bleed radial gradients with slight white opacity highlights over the dark violet background, creating a sense of a distant nebula or cosmic energy without being distracting. Product screenshots are contained within cards, depicting a minimalist dark UI, often with subtle, almost holographic internal elements. Icons are predominantly outlined, mono-color (Whisper White or Shadowed Slate), and highly simplified, serving an explanatory role without adding visual clutter. Imagery is used decoratively to set mood and illustratively to explain features, and is never full-bleed photography. The density is moderate; images break up text but don't dominate the layout.
