---
version: alpha
name: Airtable
description: The Airtable design system conveys an approachable enterprise workflow platform. Its light theme and ample spacing provide a sense of clarity, grounded by a distinctive dark blue (#181D26) for strong text elements and primary actions. Functional interactivity is highlighted by a bright blue (#1B61C9) while a palette of vivid, multi-colored accents introduces a playful, almost illustrative quality, suggesting flexibility and creativity within a structured environment. Rounded corners and subtle shadows soften the experience, making complex AI tools feel less intimidating.
colors:
  white-canvas: "#ffffff"
  cloud-whisper: "#f8fafc"
  warm-parchment: "#faf5e8"
  slate-ink: "#181d26"
  deep-graphite: "#333333"
  soft-steel: "#333840"
  silver-mist: "#e0e2e6"
  muted-stone: "#41454d"
  cool-gray: "#9297a0"
  frost: "#c7e5f2"
  dark-shadow: "#040e20"
  ocean-accent: "#1b61c9"
  sky-veil: "#c4dbfd"
  amethyst: "#254fad"
  burnt-sienna: "#aa2d00"
  forest-nudge: "#0a2e00"
  sweet-pink: "#fa91e0"
  sunburst: "#fcb42a"
  mars-red: "#912e1f"
  tropical-orange: "#fcab79"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.35
    letterSpacing: 0.007px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
    letterSpacing: 0.007px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: 0.007px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: 0.006px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0.006px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
    letterSpacing: 0.005px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.5
    letterSpacing: 0px
spacing:
  cardRadius: 16px
  buttonRadius: 12px
  elementGap: 16px
  sectionGap: 40-80px
components:
  primary-filled-button:
    role: Call to Action
  secondary-outline-button:
    role: Secondary Action
  white-filled-button:
    role: Tertiary/Alternate Action
  compact-nav-link:
    role: In-line Navigation Link/Tag
  base-card:
    role: Content container
  subtle-card:
    role: Content container
  accent-card-mars-red:
    role: Highlighted Content Container
  white-elevated-card:
    role: Prominent Content Container
  input-search-bar:
    role: Data Entry Field
  navigation-bar:
    role: Site Navigation
---

## Overview

**North Star:** Polished Workflow, Vibrant Efficiency — like a perfectly organized, brightly lit command center.

The Airtable design system conveys an approachable enterprise workflow platform. Its light theme and ample spacing provide a sense of clarity, grounded by a distinctive dark blue (#181D26) for strong text elements and primary actions. Functional interactivity is highlighted by a bright blue (#1B61C9) while a palette of vivid, multi-colored accents introduces a playful, almost illustrative quality, suggesting flexibility and creativity within a structured environment. Rounded corners and subtle shadows soften the experience, making complex AI tools feel less intimidating.

### Do's

- Prioritize Slate Ink (#181D26) for headlines and primary actions against light backgrounds for strong contrast.
- Use Ocean Accent (#1B61C9) exclusively for interactive elements like primary CTAs and active navigation links.
- Apply 12px border-radius consistently to all buttons and similar interactive elements for a softened feel.
- Maintain comfortable spacing with 16px for elementGap and 24-48px for cardPadding to ensure visual breathing room.
- Utilize Haas Groot Disp (or IBM Plex Sans fallback) at its 900 weight for eye-catching, high-impact headlines.
- Employ the full palette of vivid brand accents (Amethyst, Burnt Sienna, Forest Nudge, Sweet Pink, Sunburst) for illustrative elements, badges, or specific content blocks, not for core UI text or backgrounds.
- Elevate primary navigation and critical interactive buttons with subtle box shadows to indicate hierarchy and interactivity.

### Don'ts

- Do not use Gray Mist (#E0E2E6) for primary text or backgrounds that require strong contrast.
- Avoid using the vivid brand accent colors for standard text or backgrounds; reserve them for highlighting and illustration.
- Do not introduce sharp corners on interactive components; maintain the established 12px or 16px radius for buttons and cards.
- Avoid excessive use of shadows; most elevation is achieved through color contrast and subtle background shades.
- Do not use letter-spacing on display-sized text; keep it normal for Haas Groot Disp at 48px.
- Do not condense spacing beyond 16px for element gaps; preserve the comfortable density.

### Layout

The page primarily follows a max-width contained layout, centering content within a flexible width, likely around 1280px. The hero section features a full-width background (often a solid color or subtle gradient) behind a centered headline and subtext, followed by a large product demonstration graphic that visually breaks the top fold. Sections below alternate between varying background shades (White Canvas, Cloud Whisper, Warm Parchment) and feature common patterns: centered content stacks, text-left/image-right (or vice-versa) modules, and multi-column grid layouts for features and testimonials. Vertical spacing between sections is generous (40-80px), creating a comfortable, open rhythm. The navigation is a sticky top bar, providing persistent access.

### Imagery

The visual language blends product screenshots with abstract, illustrative elements. Product screenshots are typically centered, slightly elevated as if floating, and feature an inner shadow suggesting depth and interaction. Illustrations are often in a flat, geometric style, using the full spectrum of brand accent colors (Amethyst, Burnt Sienna, Forest Nudge, Sweet Pink, Sunburst) to depict data flow, connections, or metaphorical concepts related to workflows and AI. Icons are minimal, either outlined or filled in a mono color (Slate Ink or a brand accent), used functionally rather than decoratively to guide UI. The density is image-moderate, with illustrations breaking up text-heavy sections and product shots showcasing key features directly.
