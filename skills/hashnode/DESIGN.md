---
version: alpha
name: Hashnode
description: Hashnode's design evokes a sense of organized clarity, like a refined environment where complex ideas are constructed. Predominantly bright, near-white surfaces create a spacious, focused canvas, punctuated by sharp, technical typography and a singular, vibrant blue accent. Precision is communicated through crisp sans-serif lines, defined component boundaries, and minimal, intentional softening at corners, creating a sense of professional purpose.
colors:
  cloud-white: "#f9fafb"
  storm-gray: "#f4f5f7"
  stone-dust: "#e6e8eb"
  charcoal-black: "#16191c"
  carbon-slate: "#1c2024"
  ash-mist: "#7b8187"
  border-silver: "#d1d4d9"
  electric-indigo: "#1d52de"
  success-green: "#009966"
  vivid-green: "#00bc7d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.6px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.7px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.38
    letterSpacing: 0.8px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.45px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: -0.5px
  display:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1
    letterSpacing: -0.75px
spacing:
  cardRadius: 10px-14px
  buttonRadius: 10px
  sectionGap: 48px
components:
  article-card-new-popular:
    role: 
  what-s-new-notification-card:
    role: 
  live-stats-bar-cta-button-group:
    role: 
  primary-button:
    role: Main call to action
  ghost-button:
    role: Secondary action or link-like button
  badge-button:
    role: Informational or count display
  menu-item-button:
    role: Sidebar navigation items
  thumbnail-card:
    role: Small interactive cards or featured content
  interactive-chip:
    role: Small, clickable element, often for categories or filters
---

## Overview

**North Star:** Architectural blueprint on white marble. Light, precise, and structured, guiding builders through their thoughts.

Hashnode's design evokes a sense of organized clarity, like a refined environment where complex ideas are constructed. Predominantly bright, near-white surfaces create a spacious, focused canvas, punctuated by sharp, technical typography and a singular, vibrant blue accent. Precision is communicated through crisp sans-serif lines, defined component boundaries, and minimal, intentional softening at corners, creating a sense of professional purpose.

### Do's

- Use suisseIntl (Inter) color Charcoal Black (#16191c) for all primary body text at 16px, lineHeight 1.5, letterSpacing 0.05em.
- Apply Electric Indigo (#1d52de) only to primary interactive elements like 'Start your blog' buttons or active navigation links.
- Implement Card borders using Border Silver (#d1d4d9) at 1px for subtle visual separation, primarily for the 'What's New' style cards.
- Maintain a clear visual hierarchy, using Charcoal Black (#16191c) for main headings and Carbon Slate (#1c2024), Ash Mist (#7b8187) for subtext and metadata.
- Utilize Cloud White (#f9fafb) as the dominant background color for content areas, creating a clean, focused environment.
- Ensure input fields and interactive elements default to a 10px border-radius, aligning with the site's general component rounding.
- Apply a consistent layout max-width of 1176px for main content areas, with a section vertical gap of 48px to create breathing room.

### Don'ts

- Do not introduce new saturated accent colors outside of Electric Indigo (#1d52de); maintain a largely achromatic palette.
- Avoid excessive use of shadows; the design relies on subtle borders and background color changes for separation, not pronounced drop shadows.
- Do not use highly rounded elements except for specific pill-shaped components like badges (radius 1.67772e+07px); most elements should use 10px or 14px radius.
- Do not use overly bold or decorative typography for headings; suisseIntl (Inter) at various weights should convey authority through clarity, not visual loudness.
- Avoid tight spacing between major sections; larger gaps like 48px are crucial for readability and information compartmentalization.
- Do not deviate from the specified suisseIntl letterSpacing values (-0.025em for larger text, 0.05em for smaller) as they are critical to the font's precise appearance.

### Layout

The page adheres to a max-width 1176px contained layout, centered on the screen, creating a focused content experience. The hero section features a split layout: prominent text on the left, a contained vector illustration on the right, resting on a subtly gradiented background. Content sections follow a consistent vertical rhythm with 48px gaps. Article listings use a grid layout where each item is a minimal card, emphasizing content over heavy visual decoration, laid out side-by-side. Navigation is handled by a sticky left sidebar containing primary links and a 'what's new' popout, alongside a conventional top bar for global actions and status.

### Imagery

The visual language for imagery is a mix of abstract, rounded vector illustrations and tightly cropped product screenshots or contextual photography. Illustrations are colorful but contained within defined shapes with soft, rounded corners (e.g., the hero illustration). Photography in article previews tends to be full-bleed within the card's image container, sometimes black and white or vibrant. Icons are primarily functional Font Awesome Pro, supplemented by more decorative Font Awesome Jelly for specific brand elements. Imagery serves a dual role: decorative atmosphere in hero sections and explanatory content/contextual previews within listings. Image density is moderate; sections are image-rich but not image-dominant.

### Elevation

The design primarily avoids traditional drop shadows to maintain a flat, modern aesthetic. Elevation is conveyed through subtle changes in background color, borders, and a minimal inset shadow for specific interactive elements to provide depth on hover rather than standing out statically.
