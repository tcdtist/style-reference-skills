---
version: alpha
name: Chainzoku
description: Chainzoku's visual system evokes a dark, gritty cyberpunk aesthetic set against an urban nightscape. It uses stark black and off-white as primary textual and surface colors, punched up by vivid, almost neon, greens and hot pinks for interactive elements and accents. Typography is oversized and angular, featuring a custom variable font with high contrast and tight-tracked display text, giving the brand a distinct, almost aggressive, voice. Surfaces are generally flat and unshadowed, opting for strong borders and high-contrast color shifts to delineate elements.
colors:
  midnight-ink: "#000000"
  ghost-white: "#fffff7"
  deep-shadow: "#1c1616"
  faded-concrete: "#c4c1c6"
  electric-lime: "#cdfb52"
  sky-blue: "#5c97ce"
  cyber-pink: "#f24ac7"
  olive-drab: "#485229"
  forest-fern: "#8c9b57"
  crimson-glare: "#ab0000"
  lavender-ash: "#deafd2"
  vibrant-magenta: "#f756a3"
  gradient-sky: "#a2b6cf"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.39
  subheading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.19
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 57px
    lineHeight: 1
    letterSpacing: -1.14px
  display-md:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 0.8
    letterSpacing: -2px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 177px
    lineHeight: 0.8
    letterSpacing: -3.54px
  display:
    fontFamily: "system-ui"
    fontSize: 301px
    lineHeight: 0.8
    letterSpacing: -6.02px
spacing:
  cardRadius: 10px
  elementGap: 8px
  sectionGap: 50px
components:
  ghost-navigation-link-dark:
    role: Primary header navigation and sidebar links.
  ghost-navigation-link-light:
    role: Primary header navigation and sidebar links.
  pill-accent-button:
    role: Primary calls to action for key interactions.
  outline-sidebar-button:
    role: Interactive elements within the left sidebar navigation.
  base-card:
    role: Structural container for content sections.
  content-card-narrow:
    role: Containers for specific content blocks with subtle visual separation.
  content-card-dark:
    role: Containers for specific content blocks requiring a darker background.
  padded-content-block:
    role: Sections requiring significant internal padding for content.
---

## Overview

**North Star:** Neon Cyberpunk Nightscape – A high-contrast world of dark urban realism punctuated by electric neon accents.

Chainzoku's visual system evokes a dark, gritty cyberpunk aesthetic set against an urban nightscape. It uses stark black and off-white as primary textual and surface colors, punched up by vivid, almost neon, greens and hot pinks for interactive elements and accents. Typography is oversized and angular, featuring a custom variable font with high contrast and tight-tracked display text, giving the brand a distinct, almost aggressive, voice. Surfaces are generally flat and unshadowed, opting for strong borders and high-contrast color shifts to delineate elements.

### Do's

- Use Midnight Ink (#000000) for all primary text on light backgrounds and Ghost White (#fffff7) for primary text on dark backgrounds to maintain high contrast.
- Implement Electric Lime (#cdfb52) as the primary accent color for active states, small interactive elements, and key calls to action like the 'Play' button.
- Apply Druk Heavy for all large display headlines at sizes 100px or larger, using a letterSpacing of -0.0200em and a lineHeight of 0.8em to create a compressed, impactful header.
- Structure primary navigation links using Ghost Navigation Link components, ensuring no background or padding to keep a lightweight, unobtrusive feel.
- Maintain a comfortable density by utilizing an elementGap of 8px for internal spacing between components.
- Round corners of cards and interactive background elements with a 10px border radius, except for header navigation which uses 15px.
- Use 1px borders of either Midnight Ink (#000000) or Ghost White (#fffff7) for subtle separation, particularly in list items or form elements, avoiding overt shadows where possible.

### Don'ts

- Avoid using soft shadows or complex elevation; the design relies on stark color contrast and clear borders for visual hierarchy.
- Do not use generic system fonts for branding headlines; Druk Heavy is crucial for the strong brand voice.
- Refrain from saturating the interface with multiple vibrant colors; reserve vivid hues like Electric Lime (#cdfb52) and Cyber Pink (#f24ac7) for accents and interactive states.
- Do not introduce gradients unless they are the specific 'Gradient Sky' (#a2b6cf) linear gradient, or directly for background atmosphere.
- Do not apply large internal padding to navigation links or simple buttons; they should feel lightweight and text-focused.
- Avoid arbitrary border radii; adhere strictly to 10px for cards and 15px for navigation to maintain visual consistency.

### Layout

The page primarily uses a full-bleed layout, allowing atmospheric illustrations to extend to the viewport edges, especially in the hero and section backgrounds. Content sections below the hero often alternate with strong background visuals. The main branding (Chainzoku logo) and primary navigation are confined to a top bar, with an additional sticky left-hand sidebar for section navigation. Text is frequently presented as centered headlines or in distinct, visually separated blocks, often with a unique, cut-out container shape rather than a standard rectangular box, creating an angular, dynamic rhythm. The site features a mix of two-column layouts juxtaposed with large, immersive single-column visual elements. There's a comfortable density with ample breathing room, ensuring large visuals can dominate.

### Imagery

The site's imagery is characterized by highly stylized, detailed illustrations and concept art, often depicting characters and urban environments. These visuals are typically full-bleed or large contained elements, integrated into the page with masked or irregular edges. The art style is dimensional but not photorealistic, with a strong emphasis on vivid, almost neon, colors against a dark, nocturnal backdrop. Icons are primarily solid or filled, echoing the game-like aesthetic, and serve both decorative and explanatory roles. The imagery is central to content delivery, giving the site a visual-heavy, immersive feel.
