---
version: alpha
name: Shelby Kay
description: Shelby Kay's design system uses an earthy, modern-editorial aesthetic, combining a restrained palette of muted greens and beiges with stark, super-sized typography. The visual language emphasizes large negative space and a grid-like organization, creating an atmosphere of quiet confidence and refined utility. Color is primarily used for deep background contrast and subtle accentuation, allowing strong typographic forms to dominate the hierarchy. Components are minimal, relying on borders and text color variations rather than heavy fills or shadows.
colors:
  canvas-parchment: "#efe6d9"
  ashwood-grove: "#393c2a"
  forest-whisper: "#737955"
  soft-sienna: "#d6b292"
  dusty-rose: "#afa199"
  slate-mist: "#7b8785"
  dark-bark: "#454931"
  deep-mocha: "#2c1c03"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 83px
    lineHeight: 0.9
  display:
    fontFamily: "system-ui"
    fontSize: 265px
    lineHeight: 0.9
spacing:
  elementGap: 12px
  sectionGap: 36px
components:
  navigation-link:
    role: Primary navigation item
  hero-title:
    role: Main branding on the landing page
  text-block-container:
    role: Grouped text content
  work-showcase-card:
    role: Thumbnail for portfolio projects
  section-separator-rule:
    role: Visual division between content sections
  footer-copyright-text:
    role: Small print information
---

## Overview

**North Star:** Earthy editorial grid

Shelby Kay's design system uses an earthy, modern-editorial aesthetic, combining a restrained palette of muted greens and beiges with stark, super-sized typography. The visual language emphasizes large negative space and a grid-like organization, creating an atmosphere of quiet confidence and refined utility. Color is primarily used for deep background contrast and subtle accentuation, allowing strong typographic forms to dominate the hierarchy. Components are minimal, relying on borders and text color variations rather than heavy fills or shadows.

### Do's

- Prioritize Canvas Parchment (#efe6d9) as the base background for most content, establishing a light, airy canvas.
- Use Ashwood Grove (#393c2a) as the primary text color for all main body content and bold headings to ensure strong contrast and consistency.
- Headlines, especially hero elements, should leverage the Ranade typeface at extremely large scales (158px or 265px) with a 0.90 line-height to create visual drama.
- Maintain a sense of generous whitespace; use a sectionGap of 36px and elementGap of 12px to keep content uncongested.
- When introducing color accents, use Forest Whisper (#737955) for muted headings or secondary text, providing a soft contrast.
- Design interactive elements (like navigation links) by outlining with Ashwood Grove (#393c2a) rather than filling, maintaining a lightweight feel.
- Employ `normal` letter-spacing for both Ranade and Switzer typefaces by default, avoiding tight tracking even at large sizes.

### Don'ts

- Avoid heavy shadows or gradients on interactive elements; rely on border color and text changes for states.
- Do not introduce strong, saturated colors that deviate from the muted greens and beige-grays, as they will clash with the established palette.
- Avoid small text sizes for body copy; the smallest legible body text should be Switzer 14px.
- Do not use highly contrasting or vibrant imagery; content images should be muted or monochromatic to fit the overall subdued tone.
- Avoid highly decorative or script typefaces; stick to the clean, modern aesthetic of Switzer and abstract forms of Ranade.
- Do not apply rounded corners to elements; maintain sharp, crisp edges throughout the design system.
- Do not use dark backgrounds for entire pages; the design system is firmly rooted in a light theme with varying neutral surface tones.
