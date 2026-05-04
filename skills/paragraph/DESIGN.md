---
version: alpha
name: Paragraph
description: Paragraph employs a gentle, almost monastic aesthetic, built on a warm, off-white canvas and a subtle palette of muted grays. Typography is key; classic serifs for headlines against modern sans-serifs for body text create an intellectual yet inviting tone. Components are crafted with generous corner radii and speak with soft, layered shadows rather than bold color or heavy borders.
colors:
  canvas: "#dbd5d2"
  inkwell: "#271f1b"
  snow: "#ffffff"
  silver-mist: "#ededed"
  stone-gray: "#888786"
  cloud-wash: "#f1f5fe"
  distant-sky: "#c9c7c6"
  shadow-blue: "#524c49"
  action-azure: "#4a83f5"
  horizon-glow: "#b1cafb"
  pale-blue: "#cedaf3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.56
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.53px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -1.92px
spacing:
  cardRadius: 28px
  buttonRadius: 24px
  elementGap: 8px
  sectionGap: 48px
components:
  ghost-navigation-item:
    role: Neutral, interactive navigation menu item.
  pill-button-outlined:
    role: Secondary action button with rounded corners.
  feature-card-primary:
    role: Content card for displaying articles or features.
  callout-card-secondary:
    role: Highlight card with muted background.
  article-card-minimal:
    role: Minimal container for article listings, using transparent background.
  pill-badge:
    role: Informational tag or status indicator.
  action-button-filled:
    role: Main call-to-action button, highlighted.
---

## Overview

**North Star:** Whisper-soft sepia canvas with quiet elevation.

Paragraph employs a gentle, almost monastic aesthetic, built on a warm, off-white canvas and a subtle palette of muted grays. Typography is key; classic serifs for headlines against modern sans-serifs for body text create an intellectual yet inviting tone. Components are crafted with generous corner radii and speak with soft, layered shadows rather than bold color or heavy borders.

### Do's

- Use IvyOra for all headings (h1-h6) at weight 400, adjusting letter-spacing according to type scale.
- Apply Google Sans Flex for all body text, UI labels, and buttons, maintaining normal letter spacing.
- Elevate primary surfaces with Snow (#ffffff), secondary with Silver Mist (#ededed), and the base canvas with Canvas (#dbd5d2).
- Utilize 28px border-radius for cards and larger containers, and 24px for buttons and badges to ensure consistent softness.
- Employ Inkwell (#271f1b) for primary text and Stone Gray (#888786) for all secondary or helper text.
- Emphasize interactive elements through Action Azure (#4a83f5) for backgrounds, paired with Snow for text.
- Maintain a compact element spacing of 8px, escalating to 48px for vertical section gaps within the 1400px page max-width.

### Don'ts

- Avoid harsh, saturated colors; stick to the muted, earthy palette with Action Azure as the sole vivid accent.
- Do not introduce sharp corners; all interactive and card-like elements should respect the 24px or 28px radii.
- Refrain from heavy, opaque shadows; utilize the provided soft, layered shadows for subtle depth and elevation.
- Do not use generic system fonts; always specify Google Sans Flex for sans-serif and IvyOra for serif elements.
- Avoid dense, unbroken blocks of text; break up content using varied type sizes, deliberate line heights, and ample surrounding space.
- Do not use full-width, uncontained layouts; maintain content within the 1400px pageMaxWidth.
- Avoid decorative gradients or intricate background patterns; surfaces should remain clean and uniform.

### Layout

The page structure is primarily max-width contained at 1400px, creating a refined, column-based presentation. The hero section often features a centered headline over a background that flows slightly outside the main content area, providing subtle visual depth. Content sections typically flow with consistent vertical spacing (48px separation) and present information in multi-column grids, such as 4-column cards for articles or alternating text-left/image-right blocks. Navigation features a sticky top bar with minimal links and a central logo. The rhythm is intentional and calm, with a focus on clear content presentation.

### Imagery

Imagery on Paragraph is characterized by a mix of full-bleed, stylized photography within article previews and compact, soft-edged product screenshots or illustrations. Photography tends to be editorial, often with subtle desaturation, while product shots are clean, contained within rounded frames, and integrated seamlessly into the UI. Icons are typically single-color, filled, and minimalistic, supporting UI functions rather than acting as decorative elements. Overall, visuals serve to introduce or explain content, with a moderate density, allowing text to remain dominant.
