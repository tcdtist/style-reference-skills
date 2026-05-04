---
version: alpha
name: Affinity
description: Affinity presents a dark, theatrical stage for creativity, utilizing deep black canvases to highlight vibrant, floating artistic elements. Typography is a confident mix of a bespoke serif for headlines, bringing a classic yet bold presence, paired with a modern sans-serif for functional text. Bright, almost neon green serves as the primary accent, signaling interactive states and calls to action with an energetic pop against the dark backdrop, while subtle elevation and distinct radii define interactive components, ensuring a tactile, precise feel.
colors:
  canvas-black: "#000000"
  foreground-black: "#0f1015"
  dark-card-surface: "#211d1d"
  midtone-gray: "#505050"
  light-gray-text: "#707477"
  muted-white: "#e0dcd6"
  paper-white: "#ffffff"
  border-silver: "#c4c4c4"
  affinity-green: "#a7f175"
  ocean-teal: "#83d9e1"
  electric-violet: "#9e9eff"
  deep-plum: "#a370fc"
  canva-blue: "#3860be"
  sunrise-yellow: "#fdbd68"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.4
    letterSpacing: 0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.5
    letterSpacing: 0.01px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.57
    letterSpacing: 0.01px
  display:
    fontFamily: "system-ui"
    fontSize: 112px
    lineHeight: 0.96
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 4px
  sectionGap: 48px
components:
  primary-action-button:
    role: Key interaction element
  ghost-button-pill:
    role: Secondary action control
  cookie-action-button:
    role: Tertiary consent action
  light-theme-card:
    role: Content container on dark backgrounds
  dark-theme-card:
    role: Content container on dark backgrounds
  elevated-dark-theme-card:
    role: Prominent content container
  navigation-link:
    role: Primary navigation item
---

## Overview

**North Star:** Theatrical design stage, floating artworks

Affinity presents a dark, theatrical stage for creativity, utilizing deep black canvases to highlight vibrant, floating artistic elements. Typography is a confident mix of a bespoke serif for headlines, bringing a classic yet bold presence, paired with a modern sans-serif for functional text. Bright, almost neon green serves as the primary accent, signaling interactive states and calls to action with an energetic pop against the dark backdrop, while subtle elevation and distinct radii define interactive components, ensuring a tactile, precise feel.

### Do's

- Always use Canvas Black (#000000) as the primary page background.
- Utilize Affirmative Green (#a7f175) exclusively for primary calls to action and active interactive states, ensuring high contrast.
- Employ Affinity Serif Variable for all prominent headlines, varying sizes but maintaining its inherent normal letter spacing.
- Apply Canva Sans for all body text, navigation, and button labels, setting letterSpacing: 0.01em for consistent readability.
- Default to an 8px border radius for most elements like buttons and cards, creating a consistent soft corner styling.
- Use a 9999px border radius for pill-shaped secondary action buttons to distinguish them from primary actions.
- Maintain a clear visual hierarchy by differentiating card backgrounds: Paper White for light cards, Foreground Black for dark cards, and Dark Card Surface for elevated dark cards.

### Don'ts

- Do not use generic system serifs for headlines; Affinity Serif Variable is critical for brand identity.
- Avoid using multiple chromatic colors for primary calls to action; Affinity Green has a singular role.
- Do not use subtle elevation shadows on cards; the design prioritizes flat surfaces with clear background color differentiation.
- Refrain from altering the positive letter-spacing of Canva Sans; it's a core aspect of its visual rhythm.
- Do not use square corners for interactive elements; 8px or 9999px radii are preferred.
- Avoid using light text on light backgrounds or dark text on dark backgrounds without sufficient contrast, as the system relies on high contrast pairings.
- Do not use more than two levels of dark background (#000000, #0f1015, #211d1d) unless explicitly defined for a unique component.

### Layout

The page operates on a full-bleed structure for background colors, primarily using Canvas Black (#000000) as the base, creating an immersive, dark theme from edge to edge. Content within sections is often centered, adhering to a perceived maximum width implicitly, though not strictly constrained by a single `pageMaxWidth`. The hero section features a full-width dark background with a large, centered headline using the distinctive Affinity Serif Variable type, flanked by vibrant, seemingly scattered image cards. Sections below this often alternate between dark and subtly lighter dark backgrounds, maintaining consistent vertical spacing. Content is generally arranged in centered stacks or implied multi-column layouts for features, moving towards a more structured grid system for showcasing products or detailed information. Navigation is a fixed top bar on a dark background, with prominent 'Get Affinity' action.

### Imagery

Imagery on Affinity is a curated display of artistic works and product screenshots. The visuals are typically contained within rectangular frames, often with a subtle shadow suggesting depth, and positioned to 'float' against the dark background canvas. Photography is vibrant and artistic, showcasing diverse subjects with strong color palettes. Product screenshots are crisp, highlighting the UI within the app itself. Icons are primarily outlined or filled, with a moderate stroke weight, and in some cases, feature subtle color accents. Imagery serves a decorative and inspirational role, showcasing the creative possibilities of the software, rather than purely functional explanations. The density is moderate, balancing text and visuals, ensuring images occupy meaningful, showcased space rather than being mere accompaniments.
