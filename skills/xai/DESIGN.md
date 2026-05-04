---
version: alpha
name: xAI
description: xAI employs a darkened cosmic canvas aesthetic: deep black backgrounds, muted grays for surfaces, and sharp white typography for contrast. A single, vivid blue accent is reserved for interactive input states, creating a focal point against the otherwise reserved palette. Components are lightweight with minimal borders and generous radius for buttons, aiming for a sense of contained energy rather than heavy presence.
colors:
  deep-midnight: "#0c0c0b"
  faded-steel: "#1f2228"
  frost-white: "#ffffff"
  muted-ash: "#7d8187"
  whisper-gray: "#474747"
  electric-blue: "#2563eb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 2
    letterSpacing: 0.1px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.025px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.025px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.025px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.11
    letterSpacing: -0.025px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -0.025px
spacing:
  buttonRadius: 9999px
  elementGap: 12px
  sectionGap: 48px
components:
  ghost-primary-button:
    role: Primary action button with transparent background.
  filled-secondary-button:
    role: Secondary action button for explicit actions.
  navigation-link:
    role: Top navigation and footer navigation links.
  interactive-text-input:
    role: Text input field for user queries.
  callout-card:
    role: Section for product features or announcements.
  badge-neutral:
    role: Informational tags and date indicators.
---

## Overview

**North Star:** Midnight Command Center: A dark, responsive interface with precise typographic hierarchy and subtle interactive cues.

xAI employs a darkened cosmic canvas aesthetic: deep black backgrounds, muted grays for surfaces, and sharp white typography for contrast. A single, vivid blue accent is reserved for interactive input states, creating a focal point against the otherwise reserved palette. Components are lightweight with minimal borders and generous radius for buttons, aiming for a sense of contained energy rather than heavy presence.

### Do's

- Retain the dominant dark theme using Deep Midnight (#0c0c0b) as the canvas and Faded Steel (#1f2228) for secondary surfaces.
- Use Frost White (#ffffff) for all primary text, ensuring high contrast on dark backgrounds.
- Apply universalSans with -0.0250em letter spacing for all headlines and body text to maintain the compact, confident typographic style.
- Reserve Electric Blue (#2563eb) exclusively for interactive input focus states and accents, maintaining its visual impact as a sole chromatic element.
- Apply a 9999px border-radius to all interactive buttons for a soft, pill-shaped appearance.
- Set internal padding for feature cards at 16px to create consistent breathing room for content.
- Utilize GeistMono with 0.1000em letter spacing for all badges and auxiliary labels to establish a technical, distinct text style.

### Don'ts

- Avoid introducing additional saturated colors; maintain the restricted palette with Electric Blue as the only vivid accent.
- Do not use heavy box-shadows or significant elevation; prefer subtle borders and slight background shifts for surface differentiation.
- Do not use rectangular, sharp-edged buttons; enforce the 9999px radius for all interactive buttons.
- Avoid large imagery or elaborate illustrations; prioritize clean UI and minimal, abstract graphics.
- Do not use a light theme; the brand identity is firmly established in dark mode.
- Do not vary paragraph line heights or font weights frequently within body text; maintain the universalSans-400, 1.5 lineHeight standard.
- Avoid dense, unbroken blocks of text; break content into manageable sections with clear headings and ample vertical spacing of at least 48px between major sections.

### Layout

The page uses a max-width contained layout for most content, although the hero section appears full-bleed or extends wider. The main hero pattern features a centered, oversized headline over a dark, subtly glowing background. Sections are typically stacked vertically with consistent 48px vertical spacing. Content is arranged in a text-dominant manner, often using two-column layouts for features or product descriptions, or 3-column grids for cards. The navigation is a sticky top bar with left-aligned branding and right-aligned actions, featuring ghost buttons. The density is comfortable, with ample whitespace and clear section breaks.

### Imagery

This design system uses minimal, abstract, and technical-leaning graphics. Photography is absent. Illustrations are primarily line-based or monochromatic, often appearing as subtle background elements or within product cards (e.g., outline of a laptop). Icons are sparse, simple, and monochrome, usually Frost White (#ffffff) or Muted Ash (#7d8187), and function as functional cues rather than decorative elements. The overall density is text-dominant, with graphics serving a supporting, explanatory role, and sometimes featuring a diffuse, luminous glow effect in hero sections.
