---
version: alpha
name: Vivid Spain
description: Vivid Spain's design system feels like a digital canvas touched by soft, diffused light, giving financial services an approachable, almost ethereal quality. The pervasive use of very subtle, near-gray lavenders and clear white creates a clean, expansive backdrop. Pops of vivid violet on interactive elements act as gentle guiding lights, preventing the light palette from feeling sterile and instead imbuing it with a sense of calm innovation. The subtle use of gradients adds a painterly depth, making backgrounds feel less like solid blocks and more like atmospheric washes.
colors:
  midnight-ink: "#24282d"
  snowdrift: "#ffffff"
  graphite: "#333333"
  ash-gray: "#79797f"
  pale-lavender: "#f4edff"
  cloud-gray: "#eceef2"
  desert-sand: "#f5f5f4"
  frosty-pearl: "#bbbbc1"
  vivid-violet: "#7d33f6"
  hero-gradient: "#e9d4fb"
  pricing-card-gradient: "#c786e1"
  success-green: "#00b67a"
  light-success: "#daf7db"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.3px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.6
    letterSpacing: 0.05px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.09px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.17
    letterSpacing: -0.11px
  display:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.1
    letterSpacing: -0.2px
spacing:
  cardRadius: 24px
  buttonRadius: 100px
  elementGap: 8px
  sectionGap: 72px
components:
  pricing-cards:
    role: 
  feature-cards:
    role: 
  achievements-banner:
    role: 
  navigation-link:
    role: Interactive element
  nav-pill-button:
    role: Secondary action / Navigation
  secondary-pill-button-pale:
    role: Secondary action / Tag
  subtle-card:
    role: Content container
  input-field:
    role: User input
  pricing-tier-card-primary:
    role: Call to action variant
---

## Overview

**North Star:** diffused lavender light

Vivid Spain's design system feels like a digital canvas touched by soft, diffused light, giving financial services an approachable, almost ethereal quality. The pervasive use of very subtle, near-gray lavenders and clear white creates a clean, expansive backdrop. Pops of vivid violet on interactive elements act as gentle guiding lights, preventing the light palette from feeling sterile and instead imbuing it with a sense of calm innovation. The subtle use of gradients adds a painterly depth, making backgrounds feel less like solid blocks and more like atmospheric washes.

### Do's

- Prioritize Satoshi for all text elements; ensure correct weight and letter-spacing for each size to maintain the brand's typographic tone.
- Use Vivid Violet (#7d33f6) exclusively for primary calls to action and active interactive states, reserving its prominence.
- Apply Pale Lavender (#f4edff) or Snowdrift (#ffffff) for card backgrounds and content sections to maintain a bright, spacious feel.
- Utilize 24px border-radius for all content cards and larger photographic elements, establishing a consistent soft geometry.
- Embed the Hero Gradient on primary hero sections to create a distinct, atmospheric entry point.
- Employ Midnight Ink (#24282d) and Graphite (#333333) for all primary text, ensuring high contrast and readability on light backgrounds.
- Maintain a uniform elementGap of 8px for consistent internal spacing between smaller elements.

### Don'ts

- Avoid introducing new primary colors; maintain the dominance of violet and the neutral palette to prevent visual clutter.
- Do not use box-shadows for elevation; instead, rely on background color variations and subtle background gradients to imply depth.
- Do not use sharp corners; ensure all significant interactive elements and containers adhere to the 24px or 100px border-radius system.
- Limit the use of bold (weight 700) to critical headlines or emphasized words; primarily use 400 and 500 for body text.
- Avoid generic button styles; stick to the defined pill-shaped buttons with 100px or 48px border-radius.
- Do not vary letter-spacing for different custom weights of the same font size; follow the defined letter-spacing rules per size.
- Do not add additional padding to components unless specifically defined, especially for buttons which rely on internal content for their perceived size.

### Layout

The page model is primarily full-bleed with a centered content area that is not strictly constrained by a max-width, allowing sections to breathe. The hero section is a full-bleed gradient background with a prominent, left-aligned headline and CTA, complemented by illustrative product shots on the right. Section rhythm is driven by alternating background colors, primarily white and Pale Lavender, creating distinct yet seamlessly flowing content blocks. Content arrangement frequently uses a split layout (text left, image/illustration right) or centered content stacks for headings and pricing tables. Feature sections often use a 4-column card grid, providing an organized display of information. The layout feels spacious, with ample vertical breathing room between sections. Navigation is a sticky top bar with a left-aligned logo, central navigation links, and right-aligned action buttons ('Login', 'Open an account').

### Imagery

The visual language of imagery is a mix of abstract 3D renders, illustrative product screenshots on devices, and stylized headshot photography. Product screenshots are clean, showcasing the UI on tablets and phones against a soft, gradient background. Abstract 3D elements, like floating coins or stylized objects (e.g., a briefcase), complement the clean UI, often rendered in muted tones or with soft light. Photography features diverse, professional-looking individuals, often in natural light, in a lifestyle context, but integrated into UI cards rather than full-bleed. Icons are primarily filled or subtly outlined, monochrome in Graphite (#333333) or Vivid Violet (#7d33f6), maintaining a sleek, minimal aesthetic. The overall density of imagery is balanced, with visuals serving an explanatory or brand-reinforcing role rather than purely decorative, providing clear context for banking solutions.
