---
version: alpha
name: Home
description: Moderne uses a vibrant, playful light-mode aesthetic characterized by deep, saturated violets and teals meeting warm, vivid reds and oranges. The visual system balances a clean, structured layout with expressive, hand-drawn illustrations. Typography is a confident mix of clear sans-serifs and a distinctive display font with generous letter-spacing for headlines. Components feel plush and inviting, featuring rounded corners and subtle background tints rather than harsh borders or deep shadows.
colors:
  canvas-almond: "#f3eae5"
  midnight-ink: "#000000"
  surface-snow: "#ffffff"
  ash-gray: "#3e3c43"
  stone-whisper: "#7a7780"
  input-pale: "#cfc7c5"
  hero-violet: "#0e1889"
  creative-peach: "#ff7e85"
  lively-rose: "#ff7399"
  insight-teal: "#206871"
  accent-pink: "#dd59cf"
  muted-rose: "#f6c8f1"
  accent-orange: "#ffb283"
  action-green: "#40ac76"
  accent-teal: "#33abb9"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.56
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.33
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.19
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.07
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.02
    letterSpacing: 8.6px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1
    letterSpacing: 10.4px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 0.95
    letterSpacing: 11.2px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 69px
    lineHeight: 0.93
    letterSpacing: 13.8px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 83px
    lineHeight: 0.93
    letterSpacing: 16.6px
spacing:
  elementGap: 20px
  sectionGap: 120px
components:
  primary-action-button:
    role: Filled Call-to-Action button
  secondary-action-button:
    role: Ghost or subtle action button
  outlined-link-button:
    role: Link button with a distinct outline
  standard-card:
    role: Content container for features or information
  accent-card-orange:
    role: Prominent content card
  accent-card-teal:
    role: Prominent content card
  text-input-filled:
    role: User input field
  text-input-standard:
    role: Standard user input field
  success-badge:
    role: Status or label tag for positive indications
---

## Overview

**North Star:** Art-filled creative canvas

Moderne uses a vibrant, playful light-mode aesthetic characterized by deep, saturated violets and teals meeting warm, vivid reds and oranges. The visual system balances a clean, structured layout with expressive, hand-drawn illustrations. Typography is a confident mix of clear sans-serifs and a distinctive display font with generous letter-spacing for headlines. Components feel plush and inviting, featuring rounded corners and subtle background tints rather than harsh borders or deep shadows.

### Do's

- Use Hero Violet (#0e1889) for primary hero sections and major section headers to establish a strong brand presence.
- Apply Canvas Almond (#f3eae5) as the default page background for most light-mode sections.
- Ensure all primary call-to-action buttons use Creative Peach (#ff7e85) for the background with Surface Snow (#ffffff) text to guide user flow.
- Implement Mabry Pro for headlines, strictly adhering to its characteristic wide letter-spacing of 0.2000em.
- Utilize a 4px `radius` for most interactive elements and cards, with an occasional 15px radius for more expressive cards.
- Maintain maximum content width at 1200px, centering all content for a structured, polished feel.
- Emphasize content blocks with a 20px `cardPadding` and a `default` 4px uniform corner radius for cards.

### Don'ts

- Avoid using deep drop shadows; rely on background color differences or subtle fills for element separation.
- Do not deviate from the specified letter-spacing for Mabry Pro; its expansive tracking is a core visual identifier.
- Do not introduce new primary action colors; Creative Peach (#ff7e85) is the singular choice.
- Avoid overly complex gradient backgrounds; stick to solid color backgrounds or expressive illustrations.
- Do not use dark backgrounds for general body text areas outside of designated hero sections to maintain a clear light theme.
- Do not make cards or buttons fully square; always apply at least a 4px border radius for a consistent, softer feel.
- Avoid placing important interactive elements directly on busy illustrative backgrounds, as contrast may be compromised.

### Layout

The page adheres to a max-width of 1200px, with content centered. The hero section is full-bleed, using a deep Hero Violet background with a large, centered headline and a striking illustration. Subsequent sections alternate between the Canvas Almond base and lighter Surface Snow backgrounds, at times featuring large, distinctively colored cards. Content is often presented in a two-column layout with text on one side and a supporting illustration or feature block on the other, creating a dynamic but balanced flow. Vertical spacing between sections is generous, around 120px, providing ample breathing room. Navigation is a simple top bar with a logo, text links, and a primary action button.

### Imagery

The site features highly stylized, hand-drawn vector illustrations with a vibrant, playful, and slightly abstract aesthetic. These illustrations are often full-bleed or large-scale, acting as primary visual anchors. They use a palette closely aligned with the brand's accent colors (pinks, oranges, violets, teals) and are typically contained within sections rather than overlapping. Icons are primarily outlined or subtly filled with brand colors, maintaining a light stroke weight, and serve decorative or explanatory roles to complement text rather than replace it. Imagery is largely decorative atmosphere.
