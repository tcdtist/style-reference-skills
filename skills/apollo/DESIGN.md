---
version: alpha
name: Apollo
description: Apollo presents a refined, almost austere, sales platform aesthetic. It combines a warm off-white canvas with stark black typography and a single, vibrant yellow-green accent that acts as a beacon for primary actions. Surfaces are clean and unblemished, focusing user attention on content and functionality, complemented by subtle, tactile border treatments rather than heavy shadows. The overall impression is one of grounded efficiency and direct communication.
colors:
  canvas: "#f7f5f2"
  subtle-gray: "#e5e7eb"
  ash-gray: "#ccc9c6"
  midnight-ink: "#000000"
  graphite: "#1a1a1a"
  charcoal-text: "#47423d"
  faded-stone: "#736f6c"
  soft-stone: "#94918e"
  crisp-white: "#ffffff"
  apollo-gold: "#ebf212"
  accent-green: "#f8ff2c"
  violet-headline: "#3f3653"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 14.4
    letterSpacing: 0.168px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 16.8
    letterSpacing: 0.196px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 24
    letterSpacing: 0.144px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 18
    letterSpacing: 0.162px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 24
    letterSpacing: -0.2px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 28.8
    letterSpacing: -0.24px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 50.4
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 92.4
    letterSpacing: -0.88px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 40px
components:
  navigation-link:
    role: Primary navigation links in header.
  primary-action-button:
    role: Main call-to-action button.
  secondary-action-button:
    role: Outline style button for less prominent actions.
  ghost-button:
    role: Minimalist buttons for secondary or tertiary actions.
  social-sign-up-button:
    role: Buttons for third-party authentication.
  default-card:
    role: Content presentation boxes.
  elevated-card:
    role: Accentuated content presentation boxes, often for feature lists.
  callout-card:
    role: Special content blocks, often for testimonials or quotes.
  text-input-field:
    role: Standard user input fields.
---

## Overview

**North Star:** Yellow-green spotlight on warm concrete.

Apollo presents a refined, almost austere, sales platform aesthetic. It combines a warm off-white canvas with stark black typography and a single, vibrant yellow-green accent that acts as a beacon for primary actions. Surfaces are clean and unblemished, focusing user attention on content and functionality, complemented by subtle, tactile border treatments rather than heavy shadows. The overall impression is one of grounded efficiency and direct communication.

### Do's

- Use Ash Gray (#ccc9c6) for section backgrounds and navigation bars to provide discrete visual breaks.
- Apply Apollo Gold (#ebf212) exclusively to primary calls to action to maintain its impact and direct user focus.
- Set primary headings in Season Mix, weight 550, with tight letter spacing of -0.0100em for a powerful yet composed presence.
- Divide content using Subtle Gray (#e5e7eb) hairline borders or sections backgrounds rather than pronounced shadows or thick lines.
- Employ Soehne font for all body text and interactive elements, ensuring legibility with its specified letter spacing of 0.0090em.
- Frame all interactive elements and most content cards with an 8px border-radius for a consistent, soft edge.
- Utilize Crisp White (#ffffff) for card backgrounds against the off-white canvas to create subtle layering and separation.

### Don'ts

- Avoid arbitrary use of Accent Green (#f8ff2c); reserve it for decorative purposes or very specific highlights, not primary actions.
- Do not introduce additional bold or semibold weights for Soehne; its 400 weight is sufficient for the system's intended clarity.
- Refrain from using hard shadows; elevation should be achieved through background color shifts and subtle borders.
- Do not deviate from the established typography's letter spacing; the specific tracking is core to the brand's visual tone.
- Avoid full-bleed sections that extend edge-to-edge if they contain primary content; content should be comfortably within a defined width.
- Do not use multiple accent colors; Apollo Gold (#ebf212) should be the single vibrant highlight.
- Do not apply padding indiscriminately; follow the structured spacing tokens: 8px for minimal element gaps, 24px for card padding, and 40px for section gaps.

### Layout

The page primarily uses a max-width centered container, but starts with a full-width header. The hero section features a centered headline over a background that transitions from the main canvas to a slightly darker Ash Gray, followed by a form with social sign-in options. Content sections alternate between the Canvas (#f7f5f2) and Ash Gray (#ccc9c6) backgrounds, creating a clear vertical rhythm. Content within these sections often appears in centered stacks or simple two-column text-left/image-right (or vice-versa) layouts. Navigation is a sticky top bar.

### Imagery

The site predominantly uses abstract, geometric illustration elements, often integrated as background texture or subtle decorative accents. Icons are monochrome, simple, and outlined, maintaining a lightweight feel. Product visuals are minimal, appearing as contained UI screenshots or simple illustrations when applicable. Photography is almost non-existent. The overall density of imagery is low, with visuals serving to punctuate textual content rather than dominate the layout.
