---
version: alpha
name: Kippo
description: Kippo builds a dark-mode, gaming-centric interface with a compelling use of a single vibrant fuchsia accent color against a deep charcoal background. Typography leans modern and compact, utilizing a monospace font that evokes code or terminal screens. Interactive elements are softened with generous corner radii, creating a friendly contrast to the sharp, dark theme. The overall aesthetic is engaging and dynamic, designed to keep users immersed.
colors:
  pitch-black: "#000000"
  charcoal-surface: "#29292a"
  snow-ghost: "#ffffff"
  smoke-text: "#333333"
  kippo-fuchsia: "#ee1f66"
  sunshine-aura: "#ffc400"
  fresh-mint-gradient: "#33beff"
  silver-gloss-gradient: "#cfcfcf"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.67
    letterSpacing: 1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.67
    letterSpacing: 6.67px
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.88
    letterSpacing: 14px
spacing:
  cardRadius: 10px
  buttonRadius: 10px
  elementGap: 15px
  sectionGap: 50px
components:
  primary-action-button:
    role: Interactive element
  standard-card:
    role: Content container
  promo-callout-card:
    role: Featured content container
  ghost-navigation-link:
    role: Navigation element
---

## Overview

**North Star:** Fuchsia glow in the dark.

Kippo builds a dark-mode, gaming-centric interface with a compelling use of a single vibrant fuchsia accent color against a deep charcoal background. Typography leans modern and compact, utilizing a monospace font that evokes code or terminal screens. Interactive elements are softened with generous corner radii, creating a friendly contrast to the sharp, dark theme. The overall aesthetic is engaging and dynamic, designed to keep users immersed.

### Do's

- Prioritize Kippo Fuchsia (#ee1f66) exclusively for primary calls to action or key interactive states, ensuring it stands out against the dark canvas.
- Container elements like cards should use Charcoal Surface (#29292a) with radius 10px, providing subtle depth against the Pitch Black (#000000) background.
- Use Source Code Pro at weight 700 and size 42px for main headlines, applying its distinctive 0.333em letter spacing to establish brand identity.
- Employ consistent padding of 15px around content within cards and as element gaps between distinct UI elements.
- Ensure all interactive elements and content containers adhere to either 10px or 15px border-radius for a consistent soft-edged aesthetic.
- For all text content, default to Source Code Pro with Snow Ghost (#ffffff) for readability on dark backgrounds.

### Don'ts

- Do not introduce new saturated colors; maintain the brand focus on Kippo Fuchsia (#ee1f66) as the primary accent.
- Avoid using drop shadows for elevation; rely on background color changes from Pitch Black (#000000) to Charcoal Surface (#29292a) and border radii for depth.
- Do not use generic sans-serif fonts; the monospace Source Code Pro is integral to the brand's 'gamer tech' aesthetic.
- Never overcrowd sections; maintain a generous sectionGap of 50px between major content blocks to preserve visual breathing room.
- Avoid sharp corners on interactive components; 10px or 15px border radii are critical for the brand's softer, approachable feel.

### Layout

The page model is a max-width contained layout at 1170px, centered on the screen, creating a focused content area while allowing the Pitch Black background to extend full-bleed. The hero pattern features a split layout: a bold, centered headline on the left alongside a product UI screenshot within a dark mobile mock-up on the right. Sections primarily follow an alternating content arrangement, featuring textual information on one side and supporting visuals or client logos on the other. A rhythm of consistent vertical spacing is created by a section gap of 50px between major blocks, sometimes with a sub-section elementGap of 15px. Navigation is a sticky top bar with minimal links.

### Imagery

This site uses product screenshots and abstract vector illustrations. Product screenshots are typically displayed within a mobile device mock-up, showcasing UI functionality. Abstract vector illustrations are used decoratively, sometimes with subtle gradients like Sunshine Aura or Fresh Mint Gradient. Photography is minimal, appearing primarily as small profile images of users, often desaturated or blended into the dark theme. Icons are outlined, mono-color (either Snow Ghost or Kippo Fuchsia), and have a substantial stroke weight, sometimes with a 50px border-radius creating a circular appearance. Imagery serves both as explanatory content (product UI) and decorative atmosphere (abstract graphics), maintaining a balanced density relative to the text.
