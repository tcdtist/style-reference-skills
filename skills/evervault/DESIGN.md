---
version: alpha
name: Evervault
description: This design system evokes a sense of secure, high-tech elegance, like a digital vault operating in a cosmic void. Its visual identity relies on a deep, almost black background punctuated by subtly glowing purple gradients and crisp white text. The calculated tension between sharp edges and soft, almost nebulous gradients gives it a sophisticated yet approachable feel for a data security platform. The visual style avoids typical corporate starkness, opting instead for a more atmospheric, controlled digital aesthetic.
colors:
  midnight-abyss: "#010314"
  astral-black: "#171825"
  stardust-white: "#ffffff"
  nebula-gray: "#dfe1f4"
  dark-matter-gray: "#2a2b3a"
  whisper-gray: "#5e6077"
  astral-purple: "#6633ee"
  galactic-violet: "#b88cff"
  infra-red: "#f92672"
  cosmic-gradient-a: "#6633ee"
  refractive-glow: "#ececfb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
    letterSpacing: -0.5px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
    letterSpacing: -0.64px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.13
    letterSpacing: -1.4px
spacing:
  cardRadius: 16px
  buttonRadius: 24px
  elementGap: 12px
  sectionGap: 64px
components:
  cta-button-group:
    role: 
  feature-product-cards:
    role: 
  developer-code-card:
    role: 
  primary-ghost-button:
    role: Call to Action
  solid-button-primary:
    role: Call to Action
  small-solid-button:
    role: Interactive
  navigation-link-button:
    role: Navigation
  elevated-card-light:
    role: Content container
  elevated-card-dark:
    role: Content container
  transparent-elevated-card:
    role: Content container
  accent-border-card:
    role: Content container
  badge-transparent:
    role: Metadata / Tag
  badge-faded:
    role: Metadata / Tag
---

## Overview

**North Star:** Digital vault in a cosmic void. Deep indigo and rich purples glow against stark black, outlining crisp content.

This design system evokes a sense of secure, high-tech elegance, like a digital vault operating in a cosmic void. Its visual identity relies on a deep, almost black background punctuated by subtly glowing purple gradients and crisp white text. The calculated tension between sharp edges and soft, almost nebulous gradients gives it a sophisticated yet approachable feel for a data security platform. The visual style avoids typical corporate starkness, opting instead for a more atmospheric, controlled digital aesthetic.

### Do's

- Use Midnight Abyss (#010314) as the default background for all main page content and primary surface elements.
- Prioritize Stardust White (#ffffff) for primary text elements to ensure high contrast and readability against dark backgrounds.
- Apply Astral Purple (#6633ee) only for primary call-to-action buttons, key interactive elements, and critical highlights to maintain its impact.
- Employ Roobert for all headings and prominent UI text to leverage its modern, technical aesthetic, especially with tight letter-spacing (-0.0100em to -0.0250em) at larger sizes.
- Maintain a default border-radius of 8px for most small elements and 16px for content cards, with 24px reserved for high-prominence buttons to create a consistent soft-edged feel.
- Use the complex card shadow for elevated elements, which includes both subtle inner and outer dark shadows combined with a light inner border highlight, to create depth on dark surfaces.

### Don'ts

- Avoid using highly saturated, non-purple colors for interactive elements; Astral Purple and Galactic Violet are reserved for primary brand interaction.
- Do not use Roboto Mono for body text or headlines; reserve it strictly for code snippets or technical annotations.
- Do not introduce sharp corners (0px border-radius) except for specific, decorative ghost buttons or when explicitly part of custom vector graphics.
- Avoid using multiple distinct shadow styles on a single page; stick to the defined elevated card shadow to maintain visual consistency for depth cues.
- Do not use light theme components on pages primarily styled with the dark theme; ensure all components use the appropriate dark backgrounds and text colors.

### Layout

The page primarily utilizes a max-width contained model (around 1200px equivalent, with 12px-16px internal padding used for content blocks), centered on a full-bleed dark background. The hero section is full-bleed, featuring a prominent centered headline against a deep, glowing purple gradient background. Section rhythm alternates between full-width dark sections with atmospheric backgrounds and contained content blocks with consistent vertical spacing (sectionGap 64px). Content arrangement frequently uses a centered stack approach for headings and subtext, often followed by two-column layouts featuring text on one side and a product visual or abstract graphic on the other. Card grids (e.g., 3-column) are used for feature listings. The navigation is a sticky top bar, initially transparent over the hero, then solidifying to Astral Black. There's a subtle top banner for announcements.

### Imagery

Imagery on Evervault is a mix of abstract 3D renders, product photography, and subtle technical illustrations. Product photography (e.g., credit card) features tight, clean crops on a dark, unadorned background, emphasizing the object itself. Abstract 3D renders lean towards glowing, nebulous forms in shades of purple and blue, creating a high-tech, futuristic atmosphere. Technical illustrations are geometric and isometric, often using the brand's purple and white palette to explain complex concepts visually. Icons are generally outlined or filled, monocolor (Stardust White or Nebula Gray) with a consistent, relatively thin stroke weight, playing a functional role in explaining features. Visual density is moderate; imagery serves to break up text-heavy sections or reinforce thematic elements rather than as primary content. Overlapping elements and soft-edged gradients are common, providing a sense of depth without harsh boundaries.
