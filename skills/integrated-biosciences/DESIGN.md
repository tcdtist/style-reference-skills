---
version: alpha
name: Integrated Biosciences
description: Integrated Bio's design system presents a serious, academic aesthetic with a striking dark canvas and intentionally muted chromatic accents. Typography is the primary visual communicator, featuring a custom sans-serif with generous scaling and tight tracking that commands attention without overpowering. Surfaces are predominantly dark or off-white, acting as clean backdrops for content, with borders serving to define interactive elements or subtle divisions. The overall impression is one of modern scientific rigor, where visual flourish is minimal, and focus remains on data and information.
colors:
  midnight-ink: "#000000"
  carbon: "#222f30"
  fog: "#4d5757"
  sage-mist: "#c9cbbe"
  cloud-canvas: "#e7e8e1"
  light-gray: "#eeeeee"
  off-white: "#f7f7f5"
  polar-white: "#ffffff"
  bio-green: "#cef79e"
  deep-sea: "#445e5f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 1.2
  display-sm:
    fontFamily: "system-ui"
    fontSize: 111px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 158px
    lineHeight: 1.2
spacing:
  cardRadius: 40px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 40px
components:
  navigation-button:
    role: Outlined Button
  header-action-button:
    role: Filled Button
  primary-action-cta-button-text-only:
    role: Text Button
  news-article-card:
    role: Content Grid Item
  text-input:
    role: Form Element
  monospace-data-tag:
    role: Informational Label
---

## Overview

**North Star:** Dark Academia Laboratory: A meticulously organized workbench under a cool, precise spotlight.

Integrated Bio's design system presents a serious, academic aesthetic with a striking dark canvas and intentionally muted chromatic accents. Typography is the primary visual communicator, featuring a custom sans-serif with generous scaling and tight tracking that commands attention without overpowering. Surfaces are predominantly dark or off-white, acting as clean backdrops for content, with borders serving to define interactive elements or subtle divisions. The overall impression is one of modern scientific rigor, where visual flourish is minimal, and focus remains on data and information.

### Do's

- Prioritize Aspekta weight 400 for all primary text, adjusting size to establish hierarchy—large headlines (75-158px) use tight tracking (-0.03em), body text (16-19px) uses minimal tracking (-0.001em).
- Employ the Midnight Ink (#000000) or Carbon (#222f30) for dark backgrounds, contrasting with Polar White (#ffffff) for primary text where readability is paramount.
- Use Off-White (#f7f7f5) or Cloud Canvas (#e7e8e1) as secondary backgrounds for content sections and cards in lighter contexts, framed by 1px Polar White (#ffffff) borders.
- Define interactive elements and sections with subtle 1px borders using Carbon (#222f30) or Polar White (#ffffff), or Sage Mist (#c9cbbe) for a softer presence on dark interfaces.
- Apply Bio-Green (#cef79e) sparingly as an accent for functional indicators, small decorative elements, or subtle background highlights, ensuring it acts as a precise punctuation mark.
- Maintain a comfortable density with 40px section gaps and card padding, with smaller 8px element gaps for details, creating clear content separation.
- Ensure all buttons and navigational elements utilize an 8px border-radius, while cards and larger containers feature a more generous 40px radius, providing a distinct shape language.

### Don'ts

- Avoid generic drop shadows or heavy elevation; surface differentiation primarily occurs through background color changes (#f7f7f5, #e7e8e1, #eeeeee) and subtle borders.
- Do not introduce additional vibrant colors; adhere strictly to the established Bio-Green (#cef79e) and Deep Sea (#445e5f) accents for chromatic emphasis.
- Refrain from using excessively open letter-spacing for headlines or body text; the system relies on a tightly tracked, confident typographic voice.
- Do not neglect the 1px border for interactive elements; it is crucial for defining clickable areas and maintaining the system's precise aesthetic.
- Avoid using Bio-Green (#cef79e) as a primary action background; it functions as an accent, not a call-to-action fill.
- Do not use high-fidelity, busy photography; prefer scientific or abstract imagery that complements the academic tone, or product-focused clean graphics.
- Avoid dense, unbroken blocks of text; break content into digestible sections with clear headings and sufficient inter-element spacing.

### Layout

The page primarily uses a full-bleed layout, allowing sections to fill the viewport width. The hero section features a dark background with a large, centered headline and a secondary text block at the bottom left. Content sections alternate between dark and light backgrounds, creating a clear vertical rhythm. Inner content is often constrained, with text-heavy sections using a single column or a broad central column for readability. Card grids, like the 'Newsroom' section, use a multi-column layout with generous spacing. Navigation is a simple top bar, with elements flushed to the right, maintaining a minimal and unobtrusive presence.

### Imagery

This system primarily uses scientific and abstract imagery. Visuals are typically product-focused or show magnified biological structures, often with internal glow effects or stylized connections. Photography is minimal, if present, and tends to be clinical or abstract rather than lifestyle. Illustrations are geometric and clean, often outlined or using filled shapes that hint at molecular or data structures. Icons are minimal, outlined, and monochromatic, usually in Polar White on dark backgrounds or Carbon on light. Imagery serves to explain complex concepts or showcase scientific processes, rather than purely decorative purposes. Density is moderate, with images often contained within cards or as full-width elements in alternating sections.
