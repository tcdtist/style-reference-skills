---
version: alpha
name: Seksy Planety
description: Seksy Planety uses a high-contrast, maximalist visual language, characterized by stark black backgrounds and white text, punctuated by electric neon accents of fuchsia, lime, and purple. UI elements appear as graphic overlays with thick, contrasting borders, creating a layered, collage-like aesthetic. Typography is bold and direct, emphasizing an immediate, almost frantic energy, while all components are sharp-edged, reflecting a raw, unpolished, digital-first sensibility.
colors:
  midnight-void: "#000000"
  ghost-canvas: "#ffffff"
  electric-black: "#040001"
  shocking-pink: "#ff0099"
  ufo-green: "#ccff00"
  toxic-lilac: "#9900ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.1
spacing:
  elementGap: 10px
  sectionGap: 48px
components:
  basic-panel-with-border:
    role: Content container, visual card for information segregation.
  actionable-badge:
    role: Interactive button-like element, status indicator, or label.
  text-overlay-badge:
    role: Informational overlay on content panels.
  layered-accent-panel:
    role: Graphic background element, creating visual depth.
  floating-content-panel:
    role: Primary surface for graphics or short textual content.
---

## Overview

**North Star:** Neon Glitch Canvas: Fragmented text and pop colors splashed against a stark black backdrop.

Seksy Planety uses a high-contrast, maximalist visual language, characterized by stark black backgrounds and white text, punctuated by electric neon accents of fuchsia, lime, and purple. UI elements appear as graphic overlays with thick, contrasting borders, creating a layered, collage-like aesthetic. Typography is bold and direct, emphasizing an immediate, almost frantic energy, while all components are sharp-edged, reflecting a raw, unpolished, digital-first sensibility.

### Do's

- Use Midnight Void (#000000) for all primary backgrounds.
- Apply 1px solid borders in Shocking Pink (#ff0099), Toxic Lilac (#9900ff), or Midnight Void (#000000) for all UI elements to enhance the layered, graphic feel.
- Maintain a 0px border-radius on all components and containers for a sharp aesthetic.
- Employ Ghost Canvas (#ffffff) for primary text and Electric Black (#040001) for secondary text or text within certain badges.
- Emphasize a compact layout with 10px padding for most interactable elements (top, right, left) and 8px padding on the bottom.
- Utilize Shocking Pink (#ff0099), UFO Green (#ccff00), and Toxic Lilac (#9900ff) as primary accent colors, interspersing them prominently across the interface.
- Leverage Helvetica Neue LT Condensed weight 400 for all typography, using its limited size range (10px, 20px) to establish hierarchy.

### Don'ts

- Do not use any rounded corners; maintain hard edges across the entire design.
- Avoid subtle or pastel color palettes; stick to high-contrast, saturated neon and stark achromatic tones.
- Do not use letter-spacing other than normal; the condensed typeface already handles visual density.
- Refrain from using any drop shadows or complex elevation effects; instead, create visual depth through color layering and bold borders.
- Do not introduce gradients unless they are highly contrasting and contribute to a glitchy or fragmented aesthetic.
- Avoid soft, organic shapes or imagery; adhere to geometric forms and sharp cutouts.
- Do not introduce additional font families or weights beyond Helvetica Neue LT Condensed weight 400.

### Layout

The page prominently utilizes a full-bleed layout against a Midnight Void (#000000) background, with no defined pageMaxWidth, allowing elements to extend to the edges. The hero section is characterized by large, fragmented, white slab-serif typography (implied by brand name visual, not extracted) that is partially obscured by overlapping content panels. The overall layout is an unstructured, asynchronous collage of UI panels. Content is arranged in an overlapping, seemingly chaotic, but deliberately composed manner where various rectangular panels (in UFO Green, Toxic Lilac, neutral gray, and white) are stacked and skewed, creating a sense of depth and energetic disarray. Vertical spacing is implied by the stacking of these graphic elements rather than consistent section gaps. Navigation is not explicitly visible in the provided image snippets, suggesting a minimal or hidden navigation approach, or one integrated into the graphic elements themselves.

### Imagery

This system features a highly graphic and illustrative visual language. Imagery consists mainly of stylized, often isometric or abstract illustrations of objects (bananas, peaches, sushi, wine bottles) and black circular shapes, presented in a flat, vector-art style. These are typically contained within rectangular panels or freely floating within compositions. There is no photography, and instead, all visual content is highly stylized. Icons, when present (e.g., social media mentions implied by text), are likely filled or bold outlines given the overall aesthetic. Imagery serves purely decorative and atmospheric purposes, contributing to the maximalist, glitchy, and playful mood, and often forms part of the layered collage composition.
