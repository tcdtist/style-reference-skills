---
version: alpha
name: Giulia Saporito
description: This design system presents a high-contrast, text-dominant aesthetic that feels like a curated typographical exhibition. Bold, expressive serif headlines dance with restrained sans-serif details, all set against a minimalist, almost stark, light background. A single vibrant yellow accent color acts as a playful, yet precise, point of focus and interaction against the otherwise monochrome palette. Components are virtually invisible, relying on text and whitespace for their definition rather than overt borders or shadows, giving the impression of content floating on an ethereal canvas.
colors:
  canvas: "#f2f2f2"
  nightfall: "#000000"
  pale-mist: "#e5e5e5"
  lavender-haze: "#cfabef"
  electric-indigo: "#698fff"
  solar-flare: "#fcf572"
typography:
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 65px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 84px
    lineHeight: 0.8
  display:
    fontFamily: "system-ui"
    fontSize: 198px
    lineHeight: 1
spacing:
  elementGap: 4-26px
  sectionGap: 48-80px
components:
  ghost-link:
    role: Interactive text links and navigation items.
  minimal-card:
    role: Container for content, appearing as a content block.
  branded-highlight:
    role: Decorative visual accents.
---

## Overview

**North Star:** typographical gallery on a stark canvas

This design system presents a high-contrast, text-dominant aesthetic that feels like a curated typographical exhibition. Bold, expressive serif headlines dance with restrained sans-serif details, all set against a minimalist, almost stark, light background. A single vibrant yellow accent color acts as a playful, yet precise, point of focus and interaction against the otherwise monochrome palette. Components are virtually invisible, relying on text and whitespace for their definition rather than overt borders or shadows, giving the impression of content floating on an ethereal canvas.

### Do's

- Prioritize typography as the primary visual element on any page.
- Use 'Canvas' (#f2f2f2) as the default background for all page sections.
- Employ 'Nightfall' (#000000) for all primary text, ensuring maximum contrast.
- Reserve 'Electric Indigo' (#698fff) exclusively for interactive link text or thin borders on actionable items, never for large background fills.
- When using 'Freight Big', ensure it takes up significant visual space, leveraging its large sizes (84px, 198px) and thin weight (200) for impact.
- Embrace a minimal aesthetic by avoiding unnecessary borders, shadows, or background fills on content blocks and components.
- Use 'Solar Flare' (#fcf572) as a small, circular, primary accent point, positioned to complement text blocks.

### Don'ts

- Do not use heavy, filled buttons; all primary interaction should be conveyed through outlined or text-only links.
- Avoid gradients or complex background patterns; maintain a flat, stark background.
- Do not introduce additional font families or weights beyond the defined system.
- Refrain from using 'Lavender Haze' (#cfabef) as a default background or text color unless explicitly for a decorative section or specific heading.
- Do not apply drop shadows or elevation effects to any components; maintain a flat UI.
- Avoid dense UI elements; instead, use generous whitespace and large vertical gaps to separate content.
- Do not use photographic imagery; prefer abstract shapes or clean product/text displays.
