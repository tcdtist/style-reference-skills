---
version: alpha
name: Mario Carrillo
description: The Mario Carrillo site presents a bold, high-contrast aesthetic, pairing stark white canvases with black typography for a graphic, almost stark feel. The visual dynamism is introduced through a vibrant, full-bleed gradient background that serves as the site's primary visual element, contrasting sharply with the minimalist UI. Typography is concise and direct, maintaining a clean presentation. The design leverages visual simplicity to foreground the impactful background imagery.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  scarlet-flash: "#de3333"
  ocean-dream: "#70b2ff"
  emerald-glaze: "#7bdcb5"
  golden-burst: "#f9bf03"
spacing:
  elementGap: 5px
components:
  navigation-link:
    role: Interactive text link
  footer-copyright:
    role: Small, unobtrusive legal text
---

## Overview

**North Star:** Vibrant gradient canvas

The Mario Carrillo site presents a bold, high-contrast aesthetic, pairing stark white canvases with black typography for a graphic, almost stark feel. The visual dynamism is introduced through a vibrant, full-bleed gradient background that serves as the site's primary visual element, contrasting sharply with the minimalist UI. Typography is concise and direct, maintaining a clean presentation. The design leverages visual simplicity to foreground the impactful background imagery.

### Do's

- Prioritize a stark white background (#ffffff) for all UI content on the left pane and use Ink Black (#000000) for all text and UI outlines.
- Use StudioFeixenSans (or Montserrat) at weight 400 for all textual content, adhering to minimal letter spacing.
- Introduce dynamic color via full-bleed gradient sections that contrast sharply with static UI elements. These gradients should feature vivid brand colors like Scarlet Flash (#de3333), Ocean Dream (#70b2ff), Emerald Glaze (#7bdcb5), and Golden Burst (#f9bf03).
- Maintain a compact density for UI elements, utilizing a base spacing unit of 6px and minimal gaps like 5px between navigation items.
- Ensure the logo is prominent black text (#000000) against the white canvas, consistent with the typographic style.
- Implement interactive states for navigation items by applying one of the distinct brand colors as a solid background fill on hover, ensuring high contrast with the black text.

### Don'ts

- Avoid using multiple font families or weights beyond 400 (StudioFeixenSans) to maintain typographic consistency.
- Do not introduce shadows or complex elevation schemes, as the design relies on flat surfaces and high contrast.
- Refrain from using muted or desaturated colors for UI elements; chromatic colors should be vivid and high-impact when used.
- Do not use iconography or other decorative elements that could detract from the strong contrast and gradient visual.
- Avoid excessive padding or large empty spaces within the UI content area; maintain a concentrated, information-dense display for text.
- Do not break the full-bleed nature of the gradient sections with contained content or overlays that obscure their vibrancy.

### Layout

The page uses a split layout: a fixed-width left navigation sidebar (max-width implicitly defined by content) against a full-height, full-width gradient background on the right. The left section maintains a stark white canvas with vertically stacked navigation links. The hero pattern is effectively this full-bleed, animated gradient on the right, providing visual energy without explicit content. Section rhythm is absent beyond the initial split, as content beyond the navigation footer is not visible. Content arrangement is primarily a left-aligned vertical stack of navigation elements. Overall density is compact on the left, with the right dedicated to expansive visual display.

### Imagery

The site's primary imagery consists of abstract, vibrant, vertically-striped gradients that function as energetic, full-bleed backgrounds. They are highly saturated and appear to shift fluidly, serving a purely decorative and atmospheric role rather than explanatory content. There are no photographs, illustrations, or product screenshots in the UI. Icons are not present. The density of imagery is high, as it occupies a significant portion of the screen, contrasting with the text-dominant UI on the left.
