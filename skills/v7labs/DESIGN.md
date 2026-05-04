---
version: alpha
name: V7labs
description: V7 presents a data-driven, operational aesthetic with a strong dark mode emphasis contrasted by a single vibrant orange accent. Heavy-set headlines command attention, while compact, meticulously tracked body text conveys information efficiency. Surfaces are cool and dark, often in shades of gray, creating a backdrop for the brand's bold orange highlights, which are reserved for functional elements. Component shapes lean towards pronounced circularity and soft, rounded containers.
colors:
  midnight-ink: "#000000"
  white-canvas: "#ffffff"
  ghost-gray: "#f7f6f5"
  charcoal-surface: "#292929"
  deep-gray: "#1c1c1c"
  card-gray: "#484848"
  muted-ash: "#989897"
  link-ink: "#00104e"
  action-orange: "#ff683d"
  danger-red: "#ec580a"
  info-blue: "#2663eb"
  warning-yellow: "#ce8c04"
  success-green: "#14a249"
typography:
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.17
    letterSpacing: -0.36px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.14
    letterSpacing: -0.525px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -1.2px
spacing:
  cardRadius: 8px
  buttonRadius: 160px
  elementGap: 4px
  sectionGap: 39px
components:
  pill-button-filled:
    role: Primary action button with a rounded, pill-like shape.
  pill-button-outlined:
    role: Secondary action button with a distinct border accent.
  white-text-button:
    role: Light-themed or ghost button.
  standard-content-card:
    role: Container for information modules within a dark section.
  compact-content-card:
    role: Smaller variant of the content card for denser information display.
  light-overlay-card:
    role: Slightly transparent card for highlighting content over a dark background.
  pill-input-field:
    role: Form input field with a distinctive pill shape.
---

## Overview

**North Star:** Dark Slate Operational Hub

V7 presents a data-driven, operational aesthetic with a strong dark mode emphasis contrasted by a single vibrant orange accent. Heavy-set headlines command attention, while compact, meticulously tracked body text conveys information efficiency. Surfaces are cool and dark, often in shades of gray, creating a backdrop for the brand's bold orange highlights, which are reserved for functional elements. Component shapes lean towards pronounced circularity and soft, rounded containers.

### Do's

- Prioritize Martina Plantijn Light for all prominent headlines (H1-H3), using weight 300 for large sizes (above 40px) to achieve a sophisticated, non-shouting presence.
- Utilize STK Bureau for all UI text, navigation, and most body content, applying its tight letter-spacing to maintain a compact, high-information density aesthetic.
- Implement Action Orange (#ff683d) exclusively for primary calls-to-action and essential interactive highlights; avoid using it for decorative purposes.
- Apply Charcoal Surface (#292929) as the default background for cards and content blocks within dark sections, ensuring visual consistency across components.
- Ensure interactive elements like buttons and input fields feature prominent rounded borders (160px or 40px radius) to emphasize their clickable nature.
- Use Link Ink (#00104e) sparingly for outlined button borders and text links, establishing a secondary interactive color that complements the brand orange.
- Maintain a clear visual hierarchy by using Midnight Ink (#000000) for primary text against light backgrounds and White Canvas (#ffffff) for primary text against dark backgrounds.

### Don'ts

- Do not introduce new saturated accent colors outside of the established brand and semantic palette; color should be functional, not decorative.
- Avoid using Martina Plantijn Light for body text or small UI elements, as its elegance is lost at smaller point sizes and its character designed for impact.
- Do not deviate from the specified border radii; the distinct rounding (e.g., 160px for buttons, 8px for cards) is a core part of the visual identity.
- Refrain from using drop shadows excessively; the system favors flat surfaces and subtle elevation, mainly rgba(0, 0, 0, 0.25) 0px 1px 2px 0px for minor depth.
- Do not mix light and dark surface colors randomly; sections should either commit to a full dark background (Charcoal Surface, Deep Gray) or a light background (White Canvas, Ghost Gray).
- Avoid generic system fonts unless explicitly specified for supplementary content; the custom typography is crucial for brand recognition and voice.
- Do not use Action Orange (#ff683d) for non-interactive elements or generic display text; its purpose is to guide user action.
