---
version: alpha
name: Alec Babala
description: Alec Babala's design language is a 'Midnight Digital Blueprint', characterized by a singular, intense cobalt blue dominating the canvas. Text and interactive elements are rendered in stark white or subtly muted gray, creating high contrast and immediate focus. The system embraces a minimalist, high-density layout where content takes precedence, organized with subtle visual cues rather than heavy ornamentation. This creates a functional, almost stark, digital workspace feel.
colors:
  midnight-cobalt: "#194ae9"
  ghost-white: "#ffffff"
  dark-void: "#000000"
  subtle-violet: "#bfccf9"
spacing:
  elementGap: 8px
  sectionGap: 24px
components:
  interactive-card:
    role: Informational cards that link to content, acting as secondary navigation.
  outlined-link-block:
    role: Content previews for articles or projects, featuring an image and text.
  primary-navigation-text-link:
    role: Top-level textual links for site navigation.
  image-grid-item:
    role: Visual content showcase within grid layouts.
---

## Overview

**North Star:** Midnight Digital Blueprint — a deeply saturated cobalt canvas meticulously laid out with crisp white and subtle gray text.

Alec Babala's design language is a 'Midnight Digital Blueprint', characterized by a singular, intense cobalt blue dominating the canvas. Text and interactive elements are rendered in stark white or subtly muted gray, creating high contrast and immediate focus. The system embraces a minimalist, high-density layout where content takes precedence, organized with subtle visual cues rather than heavy ornamentation. This creates a functional, almost stark, digital workspace feel.

### Do's

- Use Midnight Cobalt (#194ae9) as the dominant background color for all primary canvas areas.
- Employ Ghost White (#ffffff) for all main textual content and active link states.
- Define interactive component borders using Dark Void (#000000) or Subtle Violet (#bfccf9) to create subtle divisions.
- Maintain a tight typographic scale using ui-sans-serif at 16px, weight 400 for all textual elements, overriding browser defaults.
- Structure content within a max-width of 600px, centered on the page for a focused reading experience.
- Separate sections with a vertical gap of 24px and use 8px for internal element spacing within components.
- Utilize Ghost White (#ffffff) for hover states on interactive links against the Midnight Cobalt background.

### Don'ts

- Avoid introducing additional saturated colors; maintain the strictly monochrome + cobalt palette.
- Do not use different font families or weights beyond ui-sans-serif 400.
- Refrain from using drop shadows or complex graphical elements; rely on color and spacing for visual hierarchy.
- Do not vary font sizes significantly; keep the visual density consistent.
- Avoid using outlines or borders on elements that are not interactive or structural.
- Do not use gradients; the system relies on solid color blocks.
- Never justify text alignment; keep all text left-aligned.

### Layout

The page adheres to a centered, max-width 600px layout, appearing as a content column on the wide cobalt blue canvas. The hero section is minimal, simply displaying the brand name. Content is arranged in compact, text-dominant blocks, occasionally interspersed with 2-column grids of monochrome images. Vertical spacing is consistent between sections (24px) but tighter within content groups (8px), creating a focused, high-information density. Navigation is implied through textual links rather than a distinct header bar, with a persistent 'Alec Babala' brand identity at the top.

### Imagery

This design system is image-heavy, utilizing square or rectangular photographic cells treated with a strong blue monochrome filter. The images are contained within subtle borders, not overlapping, and appear as embedded content rather than decorative backgrounds. They function as visual anchors and content previews, contributing to the high-density information display. The icon style is minimal and text-based, blending seamlessly with the typographic focus rather than standing out as distinct graphical elements.
