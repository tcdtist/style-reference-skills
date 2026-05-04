---
version: alpha
name: Simone Sniekers
description: Simone Sniekers' visual identity is a theatrical canvas for large-scale photography, characterized by bold, shifting background colors that act as dynamic stage backdrops. Minimalist typography and components recede to highlight the imagery, creating an immersive, editorial feel. The frequent full-page background color changes define each section as a distinct act within a larger portfolio narrative. White text and borders provide stark contrast against the vivid, unpredictable color shifts.
colors:
  ember-gradient: "#f9532d"
  black-ink: "#000000"
  winter-mist: "#bcbcbc"
  pure-white: "#ffffff"
  accelerator-yellow: "#eae800"
  cloud-gray: "#cccbbb"
  desert-rose: "#926560"
  harvest-gold: "#d0a43e"
  fiery-crimson: "#e01365"
  ginger-bread: "#b18759"
spacing:
  elementGap: 16px
  sectionGap: 48px
components:
  ghost-navigation-button:
    role: Tertiary navigation element, typically found in footers or global info sections.
  image-card:
    role: Primary content display for portfolio pieces.
  header-title:
    role: Main brand identification and page title.
  information-link:
    role: General links for contact and external profiles.
---

## Overview

**North Star:** Shifting theatrical backdrop.

Simone Sniekers' visual identity is a theatrical canvas for large-scale photography, characterized by bold, shifting background colors that act as dynamic stage backdrops. Minimalist typography and components recede to highlight the imagery, creating an immersive, editorial feel. The frequent full-page background color changes define each section as a distinct act within a larger portfolio narrative. White text and borders provide stark contrast against the vivid, unpredictable color shifts.

### Do's

- Use full-bleed background colors for distinct page sections, shifting between a vibrant palette and a restrained, almost achromatic set.
- Prioritize large-scale, unadorned photography as the central content, with UI elements acting as minimal overlays.
- Employ Neue Haas Grotesk (or Helvetica Neue) at 16px in weight 400 for all text, maintaining a consistent, understated typographic voice.
- Delineate interactive text regions with a simple 1px border in #ffffff when on dark backgrounds, or #000000 on light backgrounds.
- Maintain strict absence of border-radius or box-shadows on all components to preserve a flat, editorial aesthetic.
- Use color purely for background statements and text contrast; avoid decorative or illustrative color. The page background is the primary color vehicle.
- Employ 0px padding and margin on core content blocks like image cards, allowing images to extend to the visual edge of their containers.

### Don'ts

- Do not introduce multiple font families or weights; stick to Neue Haas Grotesk 400 for all text.
- Avoid using box-shadows or any form of elevation except for subtle border shifts for interaction states.
- Do not add superfluous padding or margins around images within image cards; let them fill the available space.
- Do not introduce small, decorative UI elements or complex layouts; the design is about large content blocks and background color shifts.
- Avoid any chromatic colors for text or borders unless it is one of the designated background accent colors used as text in rare cases.
- Do not use generic 'info', 'success', 'warning' semantic colors; the palette is exclusively brand and neutral tied to editorial sections.
- Do not break the flat aesthetic with gradients or complex visual effects on components; gradients are reserved for the full-page background only.

### Layout

The page operates on a full-bleed, responsive model where each major section takes on a distinct background color, creating a dynamic progression down the page. There is no fixed max-width, allowing content to stretch across the viewport. The hero section prominently features a full-bleed gradient background that frames a central portfolio image. Subsequent sections alternate between large editorial photographs and minimal text, with wide vertical spacing (e.g., 48px) between these blocks. Content is generally centered or implicitly aligned by the full-bleed imagery, avoiding complex grid structures in favor of sequential, large-format presentations. Navigation is minimal, typically confined to small text links placed discretely at the bottom of the viewport or within the footer area, ensuring an uninterrupted focus on the visual content.

### Imagery

This site features high-quality, professional photography, primarily editorial fashion and stylistic still lifes. Images are presented full-bleed within their sections or contained within a subtle border, serving as the absolute focal point of each content block. The treatment is direct and impactful, with strong stylistic choices in the photography itself, rather than complex digital manipulation on the site. There are no illustrations or abstract graphics; it's a showcase of photographic work. Iconography is absent, reinforcing a text-light, image-dominant presentation where visuals convey meaning and atmosphere.
