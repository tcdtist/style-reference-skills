---
version: alpha
name: Sprig
description: Sprig employs a soft, minimalist aesthetic with a focus on clear information hierarchy, using a primarily achromatic palette grounded by a deep navy. Strategic use of subtle gradients and large radii on imagery introduces a touch of warmth and visual interest. Typography is compact and precise, maintaining a high information density while generous vertical spacing creates an airy, uncrowded feel. Interactive elements are softly delineated with rounded corners and muted borders, emphasizing functionality over ornamentation.
colors:
  canvas-white: "#faf9f8"
  midnight-ink: "#0b2330"
  jet-black: "#000000"
  fog-gray: "#f3f3f3"
  graphite: "#1c1a17"
  slate-text: "#6e6d6a"
  charcoal-button: "#272420"
  border-ash: "#e8e7e6"
  deep-space: "#141312"
  medium-gray: "#575653"
  ghost-button: "#8f8d8b"
  subtle-link: "#9a9a91"
  light-mauve-gradient: "#efdcb6"
  peach-sunset-gradient: "#ffd9a0"
  sea-mist-gradient: "#bad4d5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
spacing:
  cardRadius: 100px
  buttonRadius: 32px
  elementGap: 8px
  sectionGap: 80px
components:
  primary-filled-button:
    role: Call to action button for key conversions.
  secondary-outlined-button:
    role: Supporting actions or navigation links.
  ghost-header-button:
    role: Subtle button with minimal styling for navigation or secondary actions in header.
  subtle-information-badge:
    role: Used for categorization or small labels.
  product-display-card:
    role: Highlights features or product screenshots with a curved frame.
---

## Overview

**North Star:** White canvas, thoughtful function

Sprig employs a soft, minimalist aesthetic with a focus on clear information hierarchy, using a primarily achromatic palette grounded by a deep navy. Strategic use of subtle gradients and large radii on imagery introduces a touch of warmth and visual interest. Typography is compact and precise, maintaining a high information density while generous vertical spacing creates an airy, uncrowded feel. Interactive elements are softly delineated with rounded corners and muted borders, emphasizing functionality over ornamentation.

### Do's

- Prioritize Canvas White (#faf9f8) as the dominant background color for body sections and interface elements.
- Use Midnight Ink (#0b2330) for primary text and strong link states, ensuring high contrast and legibility.
- Apply 32px radius to all buttons and navigation elements for a consistent soft, approachable feel.
- Separate content sections with generous vertical spacing (sectionGap: 80px) to create an open and spacious layout.
- Integrate subtle linear gradients like Light Mauve Gradient or Peach Sunset Gradient for decorative backgrounds or imagery, not for functional UI elements.
- Use ABC Diatype for all headings and general body text, with TT Commons Pro for specific hero text or badges.
- Utilize Charcoal Button (#272420) for filled primary CTAs and Border Ash (#e8e7e6) for ghost button borders.

### Don'ts

- Avoid using highly saturated colors for functional UI elements; reserve them for decorative imagery or gradients.
- Do not use dark gray/black backgrounds (Jet Black #000000 or Graphite #1c1a17) for large sections; they are for specific element contrasts.
- Do not break the 32px or 4px radius pattern for buttons and badges, respectively; maintain consistent corner treatments.
- Avoid excessive use of borders; lean on spacing and background color shifts to delineate sections.
- Do not introduce new font families; the system relies on ABC Diatype and TT Commons Pro for its typographic identity.
- Do not add drop shadows to components; the system relies on flat surfaces and subtle background shifts.
- Do not compress vertical spacing; maintain the spacious rhythm established by the 80px section gap and element gaps.

### Layout

The page uses a contained layout with a maximum content width, centered on a Canvas White background. The hero section features a centered headline and description over the Canvas White, occasionally accented by a full-width subtle gradient at the bottom. Sections are separated by generous vertical spacing (80px), often alternating between content blocks on white and subtle gradient backdrops. Content is arranged predominantly in centered stacks for headlines and descriptions, with occasional two-column layouts featuring text on one side and a visual on the other, or multi-column card grids for features. Navigation is a consistent top bar that remains visible.

### Imagery

The site uses a mix of photographic and abstract elements. Photography often features tight product crops or individuals in professional settings, sometimes with a desaturated or subtly tinted color overlay (e.g., cool blue tones). Abstract graphics primarily consist of subtle linear gradients (Light Mauve Gradient, Peach Sunset Gradient) that serve as atmospheric backgrounds or design accents, often with large, organic, or significantly rounded shapes that spill out of bounds or create soft visual containers. Iconography is minimal, outlined, and monochromatic, used for functional clarity. Imagery primarily serves a decorative or atmospheric role.
