---
version: alpha
name: Umbrel
description: Umbrel's design system evokes a sense of deep, sophisticated technology housed within a warm, user-centric environment. The prevailing darkness, created by near-black backgrounds, is punctuated by rich, vibrant gradients that give a feeling of digital depth and energy. Subtle contrasts and varied text weights maintain readability within the dark theme, while rounded corners and soft shadows on elements like buttons and cards introduce approachability to the complex technical offering.
colors:
  midnight-void: "#000000"
  obsidian-surface: "#292929"
  onyx-shadow: "#180f03"
  moonlight-glimmer: "#ffffff"
  warm-gray: "#61635d"
  cool-steel: "#cccccc"
  pale-mist: "#e0e0e0"
  system-gray: "#797985"
  0a0a0a: "#0a0a0a"
  violet-impulse: "#5351f3"
  sunset-ember: "#e3a081"
  neon-blue: "#41bdf5"
  electric-green: "#009b00"
  deep-web-gradient: "#0056ff"
  plasma-flow-gradient: "#855dff"
  core-melt-gradient: "#591010"
  deep-sky-gradient: "#0657a1"
spacing:
  cardRadius: 24px
  buttonRadius: 32px
components:
  product-cards-umbrel-home-umbrelos:
    role: 
  umbrel-pro-hero-banner:
    role: 
  feature-teaser-cards-app-showcase:
    role: 
  primary-filled-button:
    role: Main call-to-action button, highlighted against dark backgrounds.
  ghost-button:
    role: Secondary action or navigation element, subtle interaction.
  navigation-link-button:
    role: Internal navigation or subtle secondary actions within sections.
  umbrel-pro-info-card:
    role: Highlights key product features or variants.
  feature-teaser-card:
    role: Compact informational blocks, often in grids.
  input-field:
    role: User entry for forms.
  headline-banner:
    role: Dominant text for section introductions.
---

## Overview

**North Star:** Deep Space Luxury Console. The UI is a console in a dark, high-tech environment, with glowing accents and soft, tactile controls.

Umbrel's design system evokes a sense of deep, sophisticated technology housed within a warm, user-centric environment. The prevailing darkness, created by near-black backgrounds, is punctuated by rich, vibrant gradients that give a feeling of digital depth and energy. Subtle contrasts and varied text weights maintain readability within the dark theme, while rounded corners and soft shadows on elements like buttons and cards introduce approachability to the complex technical offering.

### Do's

- Prioritize Midnight Void (#000000) for all page and primary section backgrounds, ensuring a consistent dark theme.
- Use Moonlight Glimmer (#ffffff) for primary text on dark backgrounds, and Warm Gray (#61635d) or Cool Steel (#cccccc) for secondary or tertiary text hierarchy.
- Apply Violet Impulse (#5351f3) consistently only to primary call-to-action buttons for clear visual guidance.
- Utilize Inter font family for all textual content, leveraging its multiple weights (400, 500, 600, 700) and varying letter spacing to establish clear typographic hierarchy.
- Employ generous padding of 12px vertically and 16px horizontally for all prominent buttons, using a 32px or 99px corner radius to create a soft, approachable pill shape.
- Integrate the brand gradients (e.g., Deep Web Gradient, Plasma Flow Gradient) judiciously as background fills for feature sections or distinct content blocks to add visual dynamism and depth.
- Maintain a clear visual hierarchy by contrasting headline sizes using Inter Display 600 at 43px with tight letter spacing against body text at 16px Inter 400.

### Don'ts

- Avoid introducing bright or highly saturated colors outside the defined brand and accent palette; they will detract from the sophisticated dark theme.
- Do not use sharp corners for interactive elements or cards; maintain the established softer aesthetic with radii like 24px, 32px, or 99px.
- Refrain from using more than two distinct gradients close to each other; allow gradients to breathe as distinct background elements for different sections.
- Do not place plain text directly on complex gradient backgrounds without sufficient contrast or a text container; ensure readability at all times.
- Avoid excessive shadow usage on every element; reserve prominent shadows (like rgba(0,0,0,0.24) -12px -12px 32px 0px) for truly elevated elements to indicate interactive depth or importance.
- Do not use generic system fonts when Inter or its customized variants are available; maintaining the specific typographic choices is crucial to brand identity.
- Avoid using small, pixel-based letter spacing adjustments on body copy; reserve negative letter spacing for larger headlines as defined in the type scale.

### Layout

The page primarily uses a full-bleed dark background, creating an expansive, borderless feel. Content is typically centered within a max-width constraint (though not explicitly defined, visually appears around 1200-1400px). The hero section features a large, centered headline over a dark background with subtle product imagery. Section rhythm is marked by significant vertical spacing, often with different gradient backgrounds or distinct product showcases. Content arrangement frequently alternates between large stacked headlines and subtext, followed by a product visual or feature grid. Card grids for features feature 3-column layouts. The navigation is a minimalist top bar, staying hidden on scroll but appearing on interaction, maintaining a clean, uncluttered visual.

### Imagery

The visual language is a blend of product photography and abstract, colored graphics. Product images are tightly cropped, studio-lit, and focus on the hardware itself against dark, often reflective, backgrounds, lending a premium, almost jewelry-like quality. These are typically contained with soft, rounded corners (12px-24px). Abstract graphics, often gradient-filled (like the Deep Web Gradient or Plasma Flow Gradient), serve as decorative backdrops for feature sections, adding depth and energy without specific representational content. Icons are minimal, often line-based or simple filled shapes, using accent colors like Neon Blue (#41bdf5) or Electric Green (#009b00) when not Moonlight Glimmer (#ffffff). The overall role of imagery is to showcase the product with precision, explain concepts abstractly through color, and create an immersive, futuristic atmosphere.
