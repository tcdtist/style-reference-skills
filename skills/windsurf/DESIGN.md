---
version: alpha
name: Windsurf
description: Windsurf operates with a high-contrast, dark-mode scheme, using a deep navy background that evokes a professional, sophisticated environment. A vibrant, almost neon cyan serves as the primary accent, signaling interactive elements and highlighting key information, complemented by a softer magenta for secondary accents. Typography is a blend of impactful, large-scale headlines with subtly tracked small text, creating a dynamic yet precise visual hierarchy. Components are lightweight and often borderless, preferring subtle color shifts and soft corners over heavy shadows or solid fills.
colors:
  midnight-ink: "#011c42"
  arctic-mist: "#f8f1e5"
  platinum-white: "#ffffff"
  slate-text: "#696962"
  ash-border: "#c0c1c6"
  charcoal-black: "#0b100f"
  neon-cyan: "#34e8bb"
  electric-magenta: "#fb9ce5"
  plasma-pink-gradient: "#a95af8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.71
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.28px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: -0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -1.44px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -0.64px
spacing:
  cardRadius: 8px
  buttonRadius: 2px
  elementGap: 8px
  sectionGap: 64px
components:
  primary-action-button:
    role: Calls to action that drive key user behavior (e.g., download, submit).
  ghost-accent-button:
    role: Secondary actions or links that need visual emphasis without overwhelming the primary action.
  download-banner-button:
    role: Prominent, often full-width or oversized, call to action in hero sections.
  content-card:
    role: Container for feature descriptions, process steps, or grouped information.
  tag-pill:
    role: Small, distinct labels for categories, statuses, or new features.
  code-input-field:
    role: User input fields, primarily for code or technical information.
---

## Overview

**North Star:** Deep Space Command Center

Windsurf operates with a high-contrast, dark-mode scheme, using a deep navy background that evokes a professional, sophisticated environment. A vibrant, almost neon cyan serves as the primary accent, signaling interactive elements and highlighting key information, complemented by a softer magenta for secondary accents. Typography is a blend of impactful, large-scale headlines with subtly tracked small text, creating a dynamic yet precise visual hierarchy. Components are lightweight and often borderless, preferring subtle color shifts and soft corners over heavy shadows or solid fills.

### Do's

- Always use Midnight Ink (#011c42) for large background surfaces to maintain the deep, dark theme.
- Apply Neon Cyan (#34e8bb) consistently as the background for primary call-to-action buttons.
- Headlines should leverage tomatoGrotesk (weights 300-500) for impactful presence, especially the distinctive light 300 weight at larger sizes.
- Text against dark backgrounds should primarily use Platinum White (#ffffff) for readability, reserving Slate Text (#696962) for secondary, less prominent text.
- Utilize Electric Magenta (#fb9ce5) for ghost button borders and decorative elements to provide secondary visual interest without overshadowing the primary cyan.
- Implement a 2px border radius for all filled buttons and a 8px radius for cards to distinguish interaction elements from content blocks.
- Ensure generous vertical spacing between sections (64px) to provide ample breathing room between content blocks on the dark canvas.

### Don'ts

- Do not introduce new saturated primary colors; stick to the Neon Cyan and Electric Magenta for brand accents.
- Avoid heavy drop shadows on individual elements; prefer subtle surface shifts or border accents for depth.
- Do not use bold weights for tomatoGrotesk headlines; the system relies on lighter weights for its distinctive authority.
- Refrain from using excessively small text sizes (below 12px) for DM Sans to maintain legibility on the dark background.
- Do not apply large, rounded corners globally; save 9999px radius primarily for small tags and pills.
- Avoid dense, unbroken blocks of text; break content with imagery or concise paragraphs to suit the high-contrast display.
- Do not default to generic monospace fonts; specifically use DM Mono for code-related text to maintain brand consistency.

### Layout

The page structure is full-bleed with content often centered or presented in distinct, spacious horizontal blocks. The hero section is full-width, featuring a prominent centered headline over the abstract dark gradient background, accompanied by a cluster of call-to-action buttons. Subsequent sections alternate between clear content blocks and sometimes integrate background graphics seamlessly. Features and descriptions typically use a two-column layout (text-left/visual-right or vice-versa) or stacked centered content. Navigation is a persistent top bar, with interactive elements highlighted by the brand's accent colors. Vertical spacing is generous between sections.

### Imagery

The visual language predominantly features abstract, generative graphics with undulating wave patterns, often with colorful gradients (like the Plasma Pink Gradient) against the deep navy backdrop. These serve a decorative, atmospheric role rather than explanatory. Product screenshots, when present, are clean, full-bleed, and often framed directly into the dark UI without additional ornamentation, showcasing the software itself. Icons are minimal, either solid white or using the Electric Magenta or Neon Cyan accents, maintaining a high-tech, functional aesthetic. The density is image-light, focusing more on crisp UI and typography.

### Elevation

This system minimizes traditional drop shadows, primarily relying on flat surfaces and color contrast for hierarchy. When shadows are present, they are subtle and appear mostly for tooltips or modal elements, often with colored tints like rgba(52, 211, 153, 0.5) to maintain the brand's vibrant feel, enhancing elements rather than creating heavy stacking. The preferred method for perceived depth is through subtle background color changes (e.g., Arctic Mist for cards on Midnight Ink).
