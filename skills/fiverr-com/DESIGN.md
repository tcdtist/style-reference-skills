---
version: alpha
name: Fiverr.com
description: Fiverr.com projects a workaday, accessible design system with a sharp focus on clarity and function. The visual style is rooted in a dominant, slightly desaturated green brand color used for accents and action, set against a predominantly achromatic palette of white, grays, and dark graphite surfaces. Interface elements are compact, utilizing soft curves and minimal elevation to maintain a lightweight feel, emphasizing direct interaction without visual clutter. The overall impression is one of efficiency and straightforward professionalism, guiding users through a clean, task-oriented experience.
colors:
  fiverr-green: "#1dbf73"
  deep-moss: "#003912"
  graphite: "#222325"
  cloud-white: "#ffffff"
  slate-gray: "#62646a"
  pebble-gray: "#c5c6c9"
  ash-gray: "#dadbdd"
  warm-gray: "#404145"
  cool-gray: "#74767e"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.57
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.05
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -0.48px
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 12px
  sectionGap: 40px
components:
  primary-ghost-button:
    role: Call to action; outlined button against dark backgrounds
  small-filter-button:
    role: Navigation links or categorical filters within sub-sections.
  text-only-button:
    role: Minimal interactive elements or navigation links that primarily use text.
  white-filled-button:
    role: General action button on light backgrounds.
  category-card:
    role: Displays service categories with an associated image and text.
  search-input-field:
    role: Global site search or form inputs.
  trending-tag:
    role: Highlights trending topics or services.
---

## Overview

**North Star:** Green accented workplace

Fiverr.com projects a workaday, accessible design system with a sharp focus on clarity and function. The visual style is rooted in a dominant, slightly desaturated green brand color used for accents and action, set against a predominantly achromatic palette of white, grays, and dark graphite surfaces. Interface elements are compact, utilizing soft curves and minimal elevation to maintain a lightweight feel, emphasizing direct interaction without visual clutter. The overall impression is one of efficiency and straightforward professionalism, guiding users through a clean, task-oriented experience.

### Do's

- Use Graphite (#222325) for primary text on light backgrounds and Cloud White (#ffffff) for primary text on dark backgrounds to ensure high contrast.
- Apply Fiverr Green (#1dbf73) exclusively for interactive elements like links and active states, or for decorative accents, to signal interactability and brand presence.
- Maintain a clear element gap of `12px` for consistent vertical and horizontal rhythm between most UI components.
- Utilize `16px` border-radius for cards and `8px` for buttons to maintain a consistent, slightly softened aesthetic without appearing overly rounded.
- Implement `Macan` typeface with `text-align: left` for body text and `text-align: center` for hero headlines, leveraging its versatility for content hierarchy.
- Apply the card shadow `rgba(0, 0, 0, 0.13) 0px 3px 10px 0px` consistently to cards for a subtle lift off the page.
- Prioritize Cloud White (#ffffff) for main page and card backgrounds to establish a light theme canvas, contrasting with Deep Moss (#003912) for hero sections and feature blocks.

### Don'ts

- Do not use Fiverr Green (#1dbf73) as a background for large sections or containers, as its vividness is reserved for accents.
- Avoid using multiple distinct colors for primary call-to-action buttons; stick to the specified outlined white or subtle filled graphite for actions.
- Do not use text weights below 400 for body copy on light backgrounds, as the system favors legibility over excessive lightness.
- Refrain from introducing additional shadow styles; adhere to the defined card shadow for all elevation needs.
- Do not use highly saturated colors for borders or backgrounds of primary UI elements; maintain a neutral base with controlled green accents.
- Avoid using inconsistent spacing values; always refer to the defined `elementGap`, `cardPadding`, and `sectionGap` tokens for predictable layouts.
- Do not alter the `Macan` typeface letter spacing; apply `-0.0600em` only at `72px` and `-0.0300em` at `48px`, keeping normal spacing for smaller text sizes.

### Layout

The page primarily uses a max-width contained layout, usually centered around `1200px`. The hero section is full-bleed, using a dark background with a prominent, centered headline and search input. Sections alternate between Cloud White (#ffffff) and Ash Gray (#dadbdd) backgrounds, maintaining consistent vertical spacing. Content is arranged in alternating text-left/image-right patterns or centered stacks for feature descriptions. Card grids are prominently used for service categories, typically in a 3-column layout. Navigation is a sticky top bar with branding, primary links, and user actions on the right.

### Imagery

The site uses a mix of real-world photography and abstract product illustrations. Photography is contextual, often showing individuals in work settings or close-up product shots, frequently presented in a desaturated, almost monochromatic style to blend with the neutral palette. Illustrations are flat, dimensional, and often feature the brand's Deep Moss and Fiverr Green, used to represent concepts or services. Icons are filled, with a consistent stroke weight, and follow a mono-color scheme, typically in Graphite or Fiverr Green. Imagery serves both decorative atmosphere in hero sections and explanatory content in feature blocks, maintaining a relatively high density of visuals within defined content areas.
