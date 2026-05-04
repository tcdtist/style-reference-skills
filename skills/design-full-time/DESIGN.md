---
version: alpha
name: Design Full-Time
description: Design Full-Time employs a dark, pragmatic aesthetic for a focused learning environment. The palette centers around deep blacks and charcoals, accented by bright whites for primary text and a distinct orange-to-red gradient for calls to action. Typography is functional and compact, prioritizing direct communication without flourishes. Components are understated, relying on subtle borders and minimal elevation to define interactive elements against the dark background, creating an efficient and professional feel.
colors:
  absolute-zero: "#000000"
  charcoal-black: "#111111"
  whisper-white: "#ffffff"
  slate-gray: "#888888"
  cool-steel: "#a0a0a0"
  faded-ink: "#2c3e50"
  midnight-graphite: "#343434"
  sunset-fire-light: "#ffc840"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.56
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
spacing:
  elementGap: 8px
  sectionGap: 48px
components:
  primary-filled-button:
    role: Interactive element for key actions
  coming-soon-tag:
    role: Informational label
  promotional-banner:
    role: Highlighting special offers
  video-thumbnail-card:
    role: Container for video content
---

## Overview

**North Star:** Dark mode command center

Design Full-Time employs a dark, pragmatic aesthetic for a focused learning environment. The palette centers around deep blacks and charcoals, accented by bright whites for primary text and a distinct orange-to-red gradient for calls to action. Typography is functional and compact, prioritizing direct communication without flourishes. Components are understated, relying on subtle borders and minimal elevation to define interactive elements against the dark background, creating an efficient and professional feel.

### Do's

- Prioritize Absolute Zero (#000000) as the canvas and Charcoal Black (#111111) for elevated surfaces, maintaining a dark base.
- Use Whisper White (#ffffff) for all primary headings and body text on dark backgrounds to ensure high contrast.
- Apply the Sunset Fire (#ff8a00) gradient for all primary call-to-action buttons and critical highlights to draw immediate attention.
- Employ plain-edged, square components with a 0px border-radius for buttons and input fields to maintain a stark, functional aesthetic.
- Maintain a clear hierarchy using Inter font weights: 400 for body, 600 for subheadings, and 700-800 for prominent headlines.
- Separate content blocks and components primarily through generous vertical spacing, using 32px marginBottom on sections or elements.

### Don'ts

- Avoid using any rounded corners; all elements should have a 0px border-radius.
- Do not introduce light backgrounds beyond Whisper White text; the theme is strictly dark with minimal surface variation.
- Refrain from using pastel or desaturated colors outside of the defined accent gradients; maintain a high contrast and dark tone.
- Do not use subtle drop shadows or complex elevation effects; rely on color differences and borders for hierarchy.
- Avoid decorative illustrations or organic shapes; prioritize clear, functional UI elements and direct photography/video thumbnails.
- Do not use generic blue for links or interactive elements; all interactive accents should derive from the Sunset Fire gradient.

### Layout

The page adheres to a max-width contained layout, with content centered. The hero section is full-bleed black with a centered brand logo and tagline, followed by a full-width promotional banner. Content sections below are primarily dark, arranged in a single column of stacked blocks. Video lessons are presented in a responsive grid, with each video card having a title and subtitle. Navigation is a simple top bar, fixed at the top, offering minimal options and a 'Student Login' button.

### Imagery

The site primarily uses product-focused video thumbnails featuring a single speaker in a studio setting. Photography is candid, focused on a person, and not treated with filters. Icons are minimal, utility-driven, and typically white against the dark background. Imagery's role is explanatory and informative, directly showcasing the content. The layout is text-dominant, with images serving as embedded content blocks rather than full-bleed decorative elements.
