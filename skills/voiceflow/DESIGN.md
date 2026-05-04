---
version: alpha
name: Voiceflow
description: Voiceflow presents a light and airy interface, built on a spacious canvas of off-white and crisp backgrounds, punctuated by a single vibrant blue for primary actions. Typography is precise and clear, with a preference for slightly condensed sans-serifs for body text and a light, elegant serif for dramatic headlines. Cards and elements feature large, comfortable padding and rounded corners, creating a friendly yet professional feel. The overall impression is one of confident, approachable AI technology, with visual complexity reserved for product demonstrations.
colors:
  skybound-blue: "#397dff"
  amber-pop: "#f55c15"
  impact-red: "#ff0000"
  ultramarine: "#1956f3"
  inkwell: "#171717"
  deep-graphite: "#262626"
  anchor-gray: "#333333"
  slate-text: "#525252"
  quiet-stone: "#737373"
  silver-thread: "#a1a1a1"
  platinum-mist: "#d4d4d4"
  canvas-white: "#ffffff"
  whisper-white: "#f5f5f4"
  light-cloud: "#edeeee"
  border-ash: "#e5e5e5"
typography:
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.47
    letterSpacing: 0.25px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.34px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.14
    letterSpacing: -0.72px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.13
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.16
    letterSpacing: -1.68px
spacing:
  cardRadius: 20px
  buttonRadius: 999px
  elementGap: 24px
  sectionGap: 40px
components:
  primary-action-button:
    role: Main call to action
  secondary-ghost-button:
    role: Alternative action
  small-dark-tag:
    role: Informational tag
  content-card:
    role: Container for information
  product-feature-card:
    role: Showcasing product screens
  informational-badge:
    role: Highlighting keywords or categories
---

## Overview

**North Star:** AI Blueprint on White Canvas

Voiceflow presents a light and airy interface, built on a spacious canvas of off-white and crisp backgrounds, punctuated by a single vibrant blue for primary actions. Typography is precise and clear, with a preference for slightly condensed sans-serifs for body text and a light, elegant serif for dramatic headlines. Cards and elements feature large, comfortable padding and rounded corners, creating a friendly yet professional feel. The overall impression is one of confident, approachable AI technology, with visual complexity reserved for product demonstrations.

### Do's

- Prioritize Canvas White (#ffffff) for primary backgrounds and Content Card surfaces, maintaining a bright and open feel.
- Use Skybound Blue (#397dff) exclusively for primary interactive elements, ensuring all core actions are distinctly colored.
- Apply a 999px border-radius to all buttons and tags, creating a consistent, friendly pill shape.
- Employ Tiempos Headline (weight 300) for all major headings to convey quiet authority and elegance.
- Use 24px as the primary value for `elementGap` and `cardPadding` to ensure a consistent, comfortable density.
- Define UI borders and dividers using Platinum Mist (#d4d4d4) for soft separation, or Quiet Stone (#737373) for slightly more emphasis.
- Allow imagery, especially product mockups, to feature transparent or semi-transparent backgrounds to integrate seamlessly with the light canvas.

### Don'ts

- Avoid using saturated colors in large blocks unless specifically for brand accents like Ultramarine (#1956f3).
- Do not introduce heavy shadows or gradients; maintain the light and airy surface treatment.
- Refrain from using Tiempos Headline for body text or small labels; reserve it for large display typography.
- Do not deviate from the established border-radius values (999px, 20px, 14px) for interactive elements and cards.
- Avoid tightly packed content where `elementGap` is less than 8px; ensure generous breathing room.
- Do not use multiple chromatic colors for primary calls to action; Skybound Blue (#397dff) is the sole accent for interactive elements.
- Never use generic system fonts; always specify 'Selecta' for body and UI, and 'Tiempos Headline' for headings.

### Layout

The page uses a maximum-width contained layout, likely around 1200px, centered on a Canvas White background. The hero section features a centered, visually strong headline on a white canvas above a subtle full-width gradient or image background, followed by prominent calls-to-action. Content sections alternate between single-column centered text blocks, two-column text-left/image-right or image-left/text-right arrangements. There is a distinct three-column card grid used for features and testimonials. Vertical spacing between sections is generous and consistent, creating comfortable reading rhythm. The navigation is a sticky top bar, providing persistent access to key links and calls to action.

### Imagery

The visual language predominantly features product screenshots and UI mockups, often presented on transparent or semi-transparent backgrounds. These are used to explain functionality and showcase the product directly, rather than relying on abstract concepts or lifestyle photography. When photography is used, it's typically environmental (e.g., aerial views of landscapes) as a background for text or product displays, or professional headshots for social proof. Icons are minimal, outlined, and mostly monochrome, reinforcing a focus on UI clarity. The density of imagery is balanced, with product shots interspersed with text-heavy sections to explain features.
