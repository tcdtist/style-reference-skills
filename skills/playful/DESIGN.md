---
version: alpha
name: Playful
description: Playful adopts a vibrant yet refined aesthetic with a spacious layout that emphasizes content clarity. Backgrounds feature subtle gradients, creating soft washes of color. Typography is predominantly dark and compact, giving a serious counterpoint to the playful accent colors. Interactive elements utilize a vivid pink, contrasting against a canvas dominated by off-white, imparting an energetic yet sophisticated feel.
colors:
  midnight-ink: "#0f172a"
  vivacious-pink: "#ff2e95"
  frost-canvas: "#f6f2ee"
  pitch-black: "#000000"
  deep-graphite: "#111111"
  coal-text: "#202126"
  pale-ash: "#e8e5e0"
  cloud-white: "#ffffff"
  slate-gray: "#414040"
  light-taupe: "#e2dcd6"
  light-graphite: "#353535"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.4
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -0.002px
  subheading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.33
    letterSpacing: -0.002px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.23
    letterSpacing: -0.002px
  heading:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 1.15
    letterSpacing: -0.002px
  display:
    fontFamily: "system-ui"
    fontSize: 79px
    lineHeight: 1
    letterSpacing: -0.002px
spacing:
  cardRadius: 44px
  buttonRadius: 99px
  elementGap: 10px
  sectionGap: 113px
components:
  ghost-button:
    role: Navigational or secondary actions where visual weight should be minimal.
  primary-action-button:
    role: Main calls to action.
  circular-secondary-button:
    role: Icon-only or small, focused interactive elements.
  feature-card:
    role: Displaying product features or content blocks.
  input-field:
    role: Collecting user data.
---

## Overview

**North Star:** Gradient Playground

Playful adopts a vibrant yet refined aesthetic with a spacious layout that emphasizes content clarity. Backgrounds feature subtle gradients, creating soft washes of color. Typography is predominantly dark and compact, giving a serious counterpoint to the playful accent colors. Interactive elements utilize a vivid pink, contrasting against a canvas dominated by off-white, imparting an energetic yet sophisticated feel.

### Do's

- Always use a generous `sectionGap` of 113px to maintain spaciousness between primary content blocks.
- Apply `border-radius: 44px` to article cards and larger UI containers to soften surfaces and align with the playful aesthetic.
- Utilize 'Vivacious Pink' (#ff2e95) exclusively for primary calls to action, active navigation states, and key interactive highlights.
- Ensure all primary headings use Inter font with `letter-spacing: -0.002em` to achieve a compact, signature appearance.
- Prioritize 'Frost Canvas' (#f6f2ee) for main page backgrounds to maintain a light and airy feel.
- Employ the dual shadow `rgba(0, 0, 0, 0.22) 0px 32px 80px 0px, rgba(0, 0, 0, 0.08) 0px 2px 8px 0px` for elevated cards.
- Use 'Midnight Ink' (#0f172a) for body text and secondary element borders for strong contrast and clarity.

### Don'ts

- Do not use dark backgrounds for sections that contain extensive body copy; maintain a light background to preserve readability.
- Avoid arbitrary border radii; stick to the established system tokens: 44px for cards, 99px for buttons, 16px for images.
- Never introduce new chromatic colors outside of 'Vivacious Pink' (#ff2e95) and the brand gradient for UI elements.
- Do not use a default system font for any body text or headings; 'Inter' is paramount for brand identity.
- Avoid dense, information-heavy blocks without sufficient padding or `elementGap` of at least 10px.
- Do not add any additional box-shadows to elements other than cards; rely on the subtle elevation provided by background color differences.

### Layout

The page adheres to a max-width of 1500px, centered on the screen. The hero section is full-bleed with a top custom gradient background, featuring a large, centered headline, subtext, and an input/button pair. Subsequent sections maintain consistent vertical spacing of 113px and alternate between centered text blocks and grids of feature cards. Navigation is a minimal top bar. Overall, the layout is spacious, allowing content to breathe.

### Imagery

The site uses a mix of playful, graphic-style illustrations for app icons and abstract, colorful gradients as hero and background elements. App icons are displayed as contained, rounded-corner elements, sometimes overlapping, showcasing a product-focused content. There are also simple, functional icons (like chevron arrows) that are outlined, and monochrome 'Midnight Ink' or 'Slate Gray'. Imagery serves primarily as decorative atmosphere and product showcase, with a medium density relative to text.
