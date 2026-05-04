---
version: alpha
name: Evernote
description: Evernote projects a calm, confident workspace aesthetic with an off-white canvas and muted neutral surfaces. Typography is grounded and readable, while a single vibrant green accent provides functional punctuation for primary actions and key highlights. Interaction elements are lightweight but clearly defined, emphasizing clarity and focus over heavy ornamentation.
colors:
  canvas: "#f9f6f2"
  surface-off-white: "#f4eee5"
  pure-white: "#ffffff"
  vivid-evernote-green: "#94e130"
  midnight-graphite: "#141414"
  deep-black: "#000000"
  carbon-gray: "#262626"
  medium-gray: "#4e4d4c"
  muted-silver: "#a1a1a1"
  light-gray-stroke: "#e7e7e7"
  soft-gray: "#737373"
  decorative-violet: "#000015"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.1
    letterSpacing: -0.75px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -1.08px
spacing:
  cardRadius: 10px
  buttonRadius: 5px
  elementGap: 8px
  sectionGap: 32px
components:
  primary-filled-button:
    role: Call to action
  secondary-filled-button:
    role: Secondary call to action
  ghost-text-button:
    role: Tertiary action or navigation link
  primary-feature-card:
    role: Content container
  secondary-content-card:
    role: Informational container
  muted-navigation-link:
    role: Navigation items
---

## Overview

**North Star:** Calm workspace, grounded neutrals

Evernote projects a calm, confident workspace aesthetic with an off-white canvas and muted neutral surfaces. Typography is grounded and readable, while a single vibrant green accent provides functional punctuation for primary actions and key highlights. Interaction elements are lightweight but clearly defined, emphasizing clarity and focus over heavy ornamentation.

### Do's

- Prioritize text legibility by using Midnight Graphite (#141414) or Deep Black (#000000) for primary content on light backgrounds like Canvas (#f9f6f2) or Pure White (#ffffff).
- Use Vivid Evernote Green (#94e130) exclusively for primary calls to action or key interactive states to maintain its impact and clarity.
- Apply 5px border radius for interactive elements like buttons and navigation items to give them a soft, approachable geometry.
- Maintain a clear content hierarchy using Figtree for all typographic elements, with display sizes (72px, 50px) using negative letter-spacing for impact.
- Segment content using distinct background colors: Canvas (#f9f6f2) for the main page, Pure White (#ffffff) for elevated cards, and Surface Off-White (#f4eee5) for secondary sections.
- Utilize an 8px base unit for all spacing values, ensuring consistent rhythm and density across layouts and components.
- Employ Light Gray Stroke (#e7e7e7) for all hairline borders and subtle dividers, maintaining a lightweight interface feel.

### Don'ts

- Do not introduce new saturated colors; limit accents to Vivid Evernote Green (#94e130) with occasional Decorative Violet (#000015) for non-interactive elements.
- Avoid heavy drop shadows or complex gradients on cards; the system relies on background color shifts and solid borders for surface separation.
- Do not use letter-spacing on body text; it should remain at its default for optimal readability.
- Do not use Pure White (#ffffff) as a background for direct page sections; it's reserved for contained components like cards to appear elevated.
- Do not vary border radii arbitrarily; stick to 5px for interactive elements, 10px for standard cards, and 16px for larger feature cards.
- Avoid dense, information-heavy blocks without sufficient padding; use 32px padding for cards and sections to ensure comfortable breathing room.
- Do not introduce unnecessary iconography that distracts from core content; icons should be functional and simple, often with a subtle color accent.

### Layout

The page adheres to a max-width 1320px centered container for main content, often bordered by the Canvas (#f9f6f2) background. Hero sections frequently feature a centered headline and description over either a full-bleed dark background with blurred abstract shapes or the primary Canvas (#f9f6f2). Section rhythm often alternates between the Canvas (#f9f6f2) and Surface Off-White (#f4eee5) backgrounds. Content is frequently arranged in multi-column grids or side-by-side text-and-image blocks. A prominent 3-column card grid is used for feature showcases. The navigation is a sticky top bar with clearly segmented interactive elements.

### Imagery

The site predominantly uses product screenshots within a simulated user interface, often presented on Pure White (#ffffff) cards to highlight functionality. Photography is minimal, mostly focused on business-oriented people in work settings. Illustrations are abstract and atmospheric, characterized by blurred, multi-colored organic shapes that serve as decorative background elements, particularly in hero sections, rather than conveying specific meaning. Icons are outlined, simple, and functional, occasionally with a fill in Vivid Evernote Green (#94e130) or other brand-related colors for clarity. Imagery largely serves to showcase product features and create a professional, contemporary atmosphere.
