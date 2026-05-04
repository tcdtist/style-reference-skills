---
version: alpha
name: Break Maiden
description: Break Maiden employs a high-contrast cinematic dark mode, characterized by stark black backgrounds and bold, expansive white typography. The design emphasizes content-first presentation, with large product imagery and minimal UI adornment. Typography is used as a primary design element, leveraging a custom, display-style sans-serif for striking headlines. Interaction is subtle, relying on ghost elements and border changes rather than saturated color for feedback, creating a focused and dramatic visual experience.
colors:
  midnight-canvas: "#000000"
  ghostly-white: "#ffffff"
  muted-stone: "#8e8e8e"
spacing:
  elementGap: 18px
  sectionGap: 43px
components:
  primary-ghost-button:
    role: Subtle interactive element for primary actions.
  navigation-link:
    role: Top-level navigation items.
  product-grid-card:
    role: Container for showcasing product imagery.
  hero-headline:
    role: Dominant text element at the top of the page.
---

## Overview

**North Star:** High-contrast cinematic dark

Break Maiden employs a high-contrast cinematic dark mode, characterized by stark black backgrounds and bold, expansive white typography. The design emphasizes content-first presentation, with large product imagery and minimal UI adornment. Typography is used as a primary design element, leveraging a custom, display-style sans-serif for striking headlines. Interaction is subtle, relying on ghost elements and border changes rather than saturated color for feedback, creating a focused and dramatic visual experience.

### Do's

- Use Midnight Canvas (#000000) as the default background for all main sections and UI surfaces.
- Apply Ghostly White (#ffffff) for all primary text, headlines, and active states to maintain high contrast.
- Utilize the Martin font at 153px for primary page headings, leveraging its large size as a key visual element.
- Ensure all interactive elements, such as buttons and cards, maintain a 0px border-radius for a sharp, angular aesthetic.
- Implement a 1.5px solid Ghostly White (#ffffff) border for button outlines and subtle interactive element highlights.
- Employ a section gap of 43px to create distinct visual divisions between major content blocks.
- Use a comfortable element gap of 18px for spacing between most internal elements like text blocks or image captions.

### Don'ts

- Avoid using saturated accent colors for primary interactive states; rely on Ghostly White (#ffffff) borders and text for feedback.
- Do not introduce rounded corners (border-radius > 0px) on any components or elements.
- Refrain from using drop shadows or complex elevation effects; the design is intentionally flat and high-contrast.
- Do not deviate from the specified font families; avoid system defaults unless explicitly defined.
- Minimize extraneous UI elements; the design prioritizes content and typography as primary visual drivers.
- Avoid mixing different background colors in adjacent sections; maintain a consistent Midnight Canvas (#000000) base.
- Do not use overly complex or busy imagery; opt for clean, focused product photography or stark graphics.
