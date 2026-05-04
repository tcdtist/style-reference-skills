---
version: alpha
name: Netflix
description: The design system feels like the house lights dimming in a theater, creating an immersive, cinematic space. The foundation is a pure black (#000000) void, against which content carousels appear as an infinite, browsable library. The single, iconic 'Netflix Red' (#e50914) is used with extreme restraint, reserved for the brand mark and primary calls-to-action, serving as the sole point of visual urgency. The custom font, Netflix Sans, is the confident and utilitarian voice, scaling from microcopy to massive 56px headlines without flourish. Feature cards add subtle dimensionality not with shadows, but with a deep, cosmic gradient of blue and purple, making them glow softly in the darkness.
colors:
  netflix-red: "#e50914"
  feature-card-gradient: "#1d153f"
  deep-space: "#000000"
  graphite: "#2d2d2d"
  charcoal: "#414141"
  slate: "#5a5a5a"
  ash: "#808080"
  silver: "#b3b3b3"
  chalk-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.17
  display:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 1
spacing:
  cardRadius: 16px
  buttonRadius: 4px
  elementGap: 16px
  sectionGap: 48px
components:
  hero-email-cta:
    role: 
  more-reasons-to-join-feature-cards:
    role: 
  promotional-banner:
    role: 
  hero-cta-button:
    role: The primary 'Get Started' call-to-action.
  header-sign-in-button:
    role: Secondary sign-in action in the header.
  translucent-header-button:
    role: Language selector and other minor header actions.
  hero-email-input:
    role: The primary email capture field in the hero.
  trending-poster-card:
    role: Showcases trending content as interactive posters.
  footer-link:
    role: Tertiary navigation links in the page footer.
  promotional-banner:
    role: A persistent banner at the bottom of the viewport for offers.
---

## Overview

**North Star:** The Infinite Digital Shelf. A cinematic experience where an endless library of content is presented against a pure black, theatrical backdrop.

The design system feels like the house lights dimming in a theater, creating an immersive, cinematic space. The foundation is a pure black (#000000) void, against which content carousels appear as an infinite, browsable library. The single, iconic 'Netflix Red' (#e50914) is used with extreme restraint, reserved for the brand mark and primary calls-to-action, serving as the sole point of visual urgency. The custom font, Netflix Sans, is the confident and utilitarian voice, scaling from microcopy to massive 56px headlines without flourish. Feature cards add subtle dimensionality not with shadows, but with a deep, cosmic gradient of blue and purple, making them glow softly in the darkness.

### Do's

- Use pure black (#000000) for all main page backgrounds to maximize immersion.
- Reserve Netflix Red (#e50914) exclusively for the brand logo, primary CTAs, and key interactive moments.
- Employ the Netflix Sans font for all typography, from headlines to microcopy.
- Utilize content carousels and card grids as the primary method for displaying content.
- For feature cards, use the 'Feature Card Gradient' to create depth instead of shadows.
- Maintain minimal corner rounding: 4px for buttons and inputs, 16px for large content cards.
- Ensure all primary text on dark backgrounds is Chalk White (#ffffff) for maximum contrast.

### Don'ts

- Don't use any saturated accent colors other than Netflix Red.
- Don't apply traditional box-shadows to any element.
- Don't use light or gray page backgrounds; the entire experience must be dark.
- Don't outline buttons; use solid fills for primary and secondary actions.
- Don't clutter the header with navigation; keep it minimal and focused on signup/signin.
- Don't use multiple font families; Netflix Sans is the sole typeface.
- Don't introduce complex shapes; stick to simple rectangles with slight corner rounding.

### Layout

The layout is full-bleed, with a cinematic hero that fills the viewport. Core content is centered within a wide max-width container (~1280px) on a pure black background. The page structure is a rhythmic vertical stack of horizontally-scrolling content carousels and multi-column card grids. This creates a powerful sense of an infinitely browsable library. Section spacing is generous, allowing each content row to breathe. The header is minimal, funneling the user journey towards the primary email signup flow, which itself uses a prominent Z-pattern.

### Imagery

The visual language is defined by high-quality photography and video stills from the content library. Imagery is the primary product showcase. The hero section uses a full-bleed, dimmed collage of these visuals as a rich, atmospheric backdrop. In content carousels, images are presented as clean, sharp, vertical posters with no additional framing. Icons used in feature blocks are illustrative and dimensional, with subtle gradients, contrasting with the flat UI. Visual density is high; the UI is a vessel designed to surface as much compelling visual content as possible.

### Elevation

The design avoids traditional box-shadows. Depth is created by layering elements on the pure black (#000000) canvas. Subtle dimension is added to specific components, like feature cards, through dark, low-contrast gradients, giving them a 'glow' from within rather than a cast shadow.
