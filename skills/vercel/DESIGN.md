---
version: alpha
name: Vercel
description: Vercel's design embodies a technical precision, like an advanced schematic unfolded on a clean, bright canvas. The interplay of crisp, near-achromatic grays for backgrounds and text creates a serious, developer-focused atmosphere, punctuated by strategic accents of rich, vivid hues. Nearly-monochromatic elements and a tight typographic scale prioritize information density, while subtly rounded corners and soft drop shadows prevent the interface from feeling clinical. The overall impression is one of high performance and controlled complexity.
colors:
  cloud-canvas: "#fafafa"
  storm-gray-wash: "#f0fbff"
  text-primary: "#171717"
  text-secondary: "#4d4d4d"
  graphite-accent: "#000000"
  border-light: "#ebebeb"
  border-neutral: "#666666"
  text-muted: "#7d7d7d"
  sky-blue-accent: "#52aeff"
  vivid-crimson: "#e5484d"
  vivid-teal: "#45dec5"
  electric-blue: "#0070f3"
  conic-gradient: "#eeca2d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.32px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.56
    letterSpacing: -0.32px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
    letterSpacing: -0.32px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.65px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -0.72px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.17
    letterSpacing: -0.72px
spacing:
  buttonRadius: 9999px
  elementGap: 12px
  sectionGap: 48px
components:
  filled-primary-button:
    role: Main call-to-action button, dark background, light text.
  outlined-secondary-button-flexible:
    role: Secondary action button, transparent background, dark text, flexible border radius.
  outlined-muted-button:
    role: Tertiary action button, transparent background, muted gray text and border, large pill radius.
  ghost-button:
    role: Low-prominence or navigation item button, dark text on transparent background.
  elevated-content-card:
    role: Primary content container, featuring a subtle shadow for depth.
  transparent-card:
    role: Simple content grouping without a background or shadow, relying on layout alone.
  subtle-inset-card:
    role: Card with minimal visual difference from the background, often used for form elements or groups.
  text-input-minimal:
    role: Basic text input field.
---

## Overview

**North Star:** Advanced schematic on white canvas — every element precisely placed, every line deliberate.

Vercel's design embodies a technical precision, like an advanced schematic unfolded on a clean, bright canvas. The interplay of crisp, near-achromatic grays for backgrounds and text creates a serious, developer-focused atmosphere, punctuated by strategic accents of rich, vivid hues. Nearly-monochromatic elements and a tight typographic scale prioritize information density, while subtly rounded corners and soft drop shadows prevent the interface from feeling clinical. The overall impression is one of high performance and controlled complexity.

### Do's

- Use Geist font for all text elements with 'liga' and 'ss05' font feature settings enabled.
- Apply #171717 for primary text content and #fafafa for page backgrounds to maintain strong contrast.
- Round corners of all interactive elements like buttons and tags with `borderRadius: 9999px` for a continuous pill shape when content allows, or `borderRadius: 100px` for less extreme pill shapes.
- Maintain a clear visual hierarchy using #171717 for headings and primary actions, and #4d4d4d for supporting text.
- Introduce elements elevation using `box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 2px 0px, rgb(250, 250, 250) 0px 0px 0px 1px` for cards and interactive components.
- Use Electric Blue (#0070f3) exclusively for critical interactive states, active navigation, or significant accents.
- Keep element spacing tight, using `12px` for gaps between related elements.

### Don'ts

- Avoid using multiple chromatic colors for primary UI elements; reserve them for decorative highlights or specific branding.
- Do not use generic system fonts; always utilize Geist and Geist Mono for maintaining brand consistency.
- Refrain from heavy, diffused shadows; prefer crisp, subtle box shadows with minimal offset.
- Do not use letter spacing on body or paragraph text; apply negative letter spacing only to display and larger headings as specified.
- Avoid arbitrary border radii; stick to the defined 6px, 64px, 100px, or 9999px tokens.
- Do not rely on opaque solid backgrounds for content cards when a transparent or border-defined card variant is more appropriate.
- Do not use a large number of distinct background colors; focus on the primary `Cloud Canvas` and `Storm Gray Wash` neutrals.

### Layout

The layout is primarily a max-width contained design with content centered, though specific hero sections can stretch full-bleed visually. The hero pattern often features a large, centered headline over a dynamic background element like the conic gradient. Subsequent sections display a consistent vertical rhythm, often alternating between white and very light gray backgrounds implicitly, without hard dividers. Content is frequently arranged in two-column text-left/image-right (or vice-versa) patterns, or in multi-column card grids (e.g., 3-column features). The spacing is compact, maximizing information density without feeling cramped. A sticky top navigation bar provides constant access to primary links and actions.

### Imagery

The site uses a mix of abstract generative art and minimalist technical graphics. The hero section features a dynamic conic gradient, often paired with geometric shapes, creating a sense of advanced technology. Product screenshots focus on clean UI with code examples. Illustrations, when present, are flat, line-based, and integrate well with the overall minimalist aesthetic, often using subtle brand colors. Icons are outlined, mono-color (either #171717 or #000000), with a consistent stroke weight. Imagery serves both decorative atmosphere in hero sections and explanatory content within product features, generally occupying a balanced visual space alongside text.
