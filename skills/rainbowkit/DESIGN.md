---
version: alpha
name: RainbowKit
description: RainbowKit orchestrates a cosmic dark-mode experience with glowing accents. Most surfaces are deep, rich dark grays and blacks, providing a canvas for vibrant, saturated blues, violets, and a spectrum of other hues to punctuate interactive elements and provide visual interest. Typography is compact and precise, maintaining clarity against the dark backdrop. Components favor soft curves and subtle inner shadows, creating a sense of depth and dimensionality without harsh outlines, prioritizing a confident, playful developer-tool aesthetic.
colors:
  eclipse-black: "#000000"
  cloud-white: "#ffffff"
  slate-deep: "#1b1c1e"
  charcoal-grey: "#25292e"
  vivid-blue: "#0e76fd"
  deep-violet: "#38228f"
  sky-blue: "#3898ff"
  azure-glow: "#5f5afa"
  flamingo-pink: "#ff5ca0"
  volcanic-red: "#fa423c"
  sunset-orange: "#ff801f"
  emerald-green: "#1db847"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.33
    letterSpacing: 0.35px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.29
    letterSpacing: 0.28px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
    letterSpacing: 0.26px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: 0.32px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.17
    letterSpacing: 0.34px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.05
    letterSpacing: 0.29px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: 0.36px
  display:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1
    letterSpacing: 0.36px
spacing:
  cardRadius: 24px
  buttonRadius: 9999px
  elementGap: 12px
  sectionGap: 40px
components:
  ghost-button:
    role: Ghost interactive element for secondary actions.
  primary-action-button:
    role: Main call-to-action button, conveying primary interaction.
  icon-button-circular:
    role: Small, circular button for actions related to icons or status.
  modal-card-light:
    role: Elevated container primarily for interactive dialogs or pop-ups.
  code-snippet-container:
    role: Container for showcasing code or command-line instructions.
  logo-icon:
    role: Used for partner logos and small brand identifiers.
---

## Overview

**North Star:** Midnight Nebula Canvas

RainbowKit orchestrates a cosmic dark-mode experience with glowing accents. Most surfaces are deep, rich dark grays and blacks, providing a canvas for vibrant, saturated blues, violets, and a spectrum of other hues to punctuate interactive elements and provide visual interest. Typography is compact and precise, maintaining clarity against the dark backdrop. Components favor soft curves and subtle inner shadows, creating a sense of depth and dimensionality without harsh outlines, prioritizing a confident, playful developer-tool aesthetic.

### Do's

- Prioritize Eclipse Black (#000000) for base backgrounds and Cloud White (#ffffff) for primary text on dark themes.
- Use Vivid Blue (#0e76fd) as the default for all primary calls to action and interactive elements.
- Apply `9999px` border-radius for all button elements to create a distinctive pill shape.
- Maintain comfortable vertical rhythm with `12px` element gaps and `40px` section gaps.
- Utilize SFRounded as the primary typeface for all textual content, adjusting weights for hierarchy.
- Apply the inner shadow `rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset` to interactive elements on dark backgrounds for a subtle raised effect.
- Reserve specific vibrant colors (like Azure Glow, Flamingo Pink, Volcanic Red) for accent buttons to diversify call-to-action options without diluting the primary brand blue.

### Don'ts

- Avoid harsh, contrasting outlines on interactive elements; prefer subtle inner shadows or transparent backgrounds.
- Do not use generic system fonts for display headings; leverage SFRounded weights for brand consistency.
- Do not use #4bd166 for UI elements; it is reserved for decorative SVG fills and not interactive components.
- Avoid dense informational blocks; ensure ample spacing (`12px` elementGap, `40px` sectionGap) between components and content.
- Do not use box-shadows excessively; only apply the specific tokenized shadows for elevation or interactive states.
- Do not introduce new color palettes outside of the defined Brand and Accent colors; decorative gradients should be limited to the defined Gradient Aura Blue and Gradient Ocean.

### Layout

The page primarily uses a max-width contained layout, approximately 1200px, centered on the screen. The hero section is full-bleed with a dark background, featuring a centered headline and subtext. Content flows in distinct vertical sections, often featuring alternating left-aligned text with right-aligned visuals, or vice-versa, creating a dynamic Z-pattern. Feature grids utilize a multi-column card layout, specifically a 3-column grid for partner logos. Navigation is a minimal top bar, featuring a primary 'Connect Wallet' action button, providing a clear and sparse interface.

### Imagery

The site predominantly relies on product screenshots and custom illustrations for visual content rather than photography. Product screenshots are typically contained within device mocks or clean cards, showing the UI in context. Illustrations are simple, often monochromatic or using a limited brand palette, with a flat and slightly geometric style. Iconography is primarily outlined, using a medium stroke weight, and integrates with the brand's vibrant accent colors for decorative and functional purposes. Imagery serves primarily to explain product features and showcase brand partners, and is well-balanced with text, avoiding an image-heavy aesthetic.
