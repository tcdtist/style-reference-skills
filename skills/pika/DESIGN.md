---
version: alpha
name: Pika
description: The site presents a striking split personality, juxtaposing a relaxed, warm-toned left panel with a deep, authoritative black right panel. This creates a functional and conceptual division, visually separating descriptive content from interactive login forms. Text on both sides prioritizes legibility with high contrast, while subtle border radii soften interactive elements without sacrificing a clean, modern edge. It feels like a laid-back, creative studio space meeting a behind-the-scenes control panel.
colors:
  buttermilk-base: "#ffedd2"
  inkwell-deep: "#0d0d0d"
  carbon-panel: "#1f1f1f"
  paper-white: "#ffffff"
  ash-gray: "#9e9e9"
  chrome-edges: "#e5e7eb"
  facebook-blue: "#4267b2"
  discord-purple: "#5865f2"
  google-yellow: "#ffc107"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.28px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.16px
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.13
    letterSpacing: 0.32px
spacing:
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 56px
components:
  sign-in-panel:
    role: 
  feature-promo-card:
    role: 
  footer-links-bar:
    role: 
  primary-sign-in-button:
    role: Main call to action for email sign-in.
  social-sign-in-button:
    role: Alternative sign-in options via social platforms.
  social-sign-in-button-compact:
    role: Social sign-in with reduced padding and dark background (not explicitly shown in screenshot but available in variants).
  video-player-frame:
    role: Container for embedded video content.
---

## Overview

**North Star:** Dual-pane studio and control room. One side warm, inviting; the other dark, efficient.

The site presents a striking split personality, juxtaposing a relaxed, warm-toned left panel with a deep, authoritative black right panel. This creates a functional and conceptual division, visually separating descriptive content from interactive login forms. Text on both sides prioritizes legibility with high contrast, while subtle border radii soften interactive elements without sacrificing a clean, modern edge. It feels like a laid-back, creative studio space meeting a behind-the-scenes control panel.

### Do's

- Always use Buttermilk Base (#ffedd2) for the left content pane background and Carbon Panel (#1f1f1f) for the right interactive pane background to maintain the split layout identity.
- Apply a 6px border radius to all interactive buttons and 10px to larger media containers like video players.
- Use telkaExtended, weight 900, size 32px, lineHeight 1.13, letterSpacing 0.32px for all primary section headings.
- Ensure all primary text on Buttermilk Base background uses Inkwell Deep (#0d0d0d) for maximum readability.
- Maintain 10px top/bottom padding and 16px left/right padding for standard-height buttons.
- Use Chrome Edges (#e5e7eb) for subtle borders on buttons and input fields where a delineation is needed without high contrast.

### Don'ts

- Do not deviate from the two-tone split layout structure; avoid full-bleed backgrounds that span both content and interactive areas.
- Do not introduce strong chromatic colors beyond the specific brand/social icons; the palette is intentionally restrained.
- Avoid large, aggressive letter-spacing on body text; telka uses subtle negative or minimal positive spacing.
- Do not use box-shadows for elevation; the design relies on color contrast and subtle borders for depth.
- Do not use font weights above 450 for body text or links; reserve 900 for headings only.

### Layout

The page employs a strong two-column, split-screen layout where the left column (approx 67% width) is the content area with a Buttermilk Base background and the right column (approx 33% width) is a dark interactive login panel. The content area is left-aligned and centrally stacked, featuring a video player followed by descriptive text. The right panel is also centrally stacked with a prominent heading and a series of vertically stacked social and email login buttons. Horizontal padding (67px) on the content side maintains significant negative space. Sections are separated vertically by a consistent 56px gap for visual breathing room. Navigation is minimal, consisting of a simple footer with text links.

### Imagery

Imagery primarily consists of contained video content and social media icons. The video content (e.g., a dog in a recording studio) is presented with sharp, defined edges, enclosed within a frame with a 10px border radius. This suggests a focus on showcasing the output or process of the AI tool with direct, unstylized media. Icons are flat, filled, and leverage their brand's specific color, appearing within buttons. The overall style is functional rather than decorative, with imagery serving an explicit role in content or interaction.
