---
version: alpha
name: Runway
description: This system projects an image of serious, understated technological leadership, avoiding visual exuberance. Typography is the primary visual differentiator, using a custom font family with precise letter-spacing to convey meticulous control. Colors are monochromatic with a single, highly saturated accent, creating a sharp brand impression against an otherwise stoic palette. Components are designed for functionality and subtle brand reinforcement, prioritizing clarity and direct interaction.
colors:
  storm-gray: "#6b7280"
  runway-midnight: "#2b22fa"
  cloud-burst: "#e5e7eb"
  graphite: "#404040"
  pure-white: "#ffffff"
  deep-shadow: "#0c0c0c"
  silver-mist: "#cccccc"
  obsidian: "#2a2a2a"
  ash-gray: "#999999"
  pitch-black: "#000000"
  charcoal: "#1a1a1a"
  pale-gray: "#eef1f5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.43
    letterSpacing: 0.25px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.012px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.1
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.025px
spacing:
  cardRadius: 8px
  buttonRadius: 6px
  elementGap: 4px
  sectionGap: 48-80px
components:
  announcement-banner:
    role: 
  research-product-cards:
    role: 
  feature-detail-block:
    role: 
  primary-dark-button:
    role: Call to action buttons
  ghost-button:
    role: Secondary actions, tertiary navigation
  light-action-button:
    role: Informational action, contextual buttons
  brand-secondary-button:
    role: Prominent but not primary calls to action
  global-header:
    role: Main navigation and branding
  content-card:
    role: Showcasing articles, products, or features
---

## Overview

**North Star:** Precision-engineered black glass. Every element is deliberately placed like components in a high-performance machine, with a single bright light indicating activity.

This system projects an image of serious, understated technological leadership, avoiding visual exuberance. Typography is the primary visual differentiator, using a custom font family with precise letter-spacing to convey meticulous control. Colors are monochromatic with a single, highly saturated accent, creating a sharp brand impression against an otherwise stoic palette. Components are designed for functionality and subtle brand reinforcement, prioritizing clarity and direct interaction.

### Do's

- Prioritize abcNormal font for all text, leveraging its specific weights and negative letter-spacing for headlines to create a precise, technical feel.
- Use Deep Shadow (#0c0c0c) and Pure White (#ffffff) as primary text/background contrast, ensuring AAA readability.
- Apply Runway Midnight (#2b22fa) exclusively for primary calls to action, active states, and brand signifiers to maintain its high impact.
- Implement Cloud Burst (#e5e7eb) for all neutral borders and dividers to softly delineate content areas.
- Maintain 6px radius for primary buttons and 8px for cards, establishing a subtle rounding language.
- Use a base spacing unit of 4px, ensuring all padding and margins are multiples of this unit for consistent rhythm.
- For headlines, apply letter-spacing -0.020em at large sizes (48px) and -0.012em at medium sizes (24-36px) to maintain the signature tight kerning effect.

### Don'ts

- Avoid introducing additional saturated colors beyond Runway Midnight (#2b22fa); the system relies on a monochromatic base with a single pop.
- Do not vary border radius widely; stick to 4px for default, 6px for buttons, and 8px for cards to maintain visual consistency.
- Refrain from using strong box shadows; the design uses subtle borders for element separation, not elevation through depth.
- Avoid overly casual or decorative typography; the system is built on the precise, controlled aesthetic of abcNormal.
- Do not use generic button styles; ensure all interactive buttons adhere to the defined Primary Dark, Ghost, Light Action, or Brand Secondary Button specifications.
- Do not overuse Pitch Black (#000000); reserve it for high-impact elements like the header background or critical iconography to prevent overwhelming the page.

### Layout

The page primarily uses a max-width contained layout, approximately 1200px, symmetrically centered. The hero section features a centered headline over a white background. Content sections follow a consistent rhythm of alternating image and text blocks, often with a two-column layout. A three-column grid is visible for showcasing research or product cards. Vertical spacing between sections is generous but consistent, allowing content to breathe. The navigation is a sticky top bar, dark-themed, anchoring the brand and key actions.

### Imagery

The site uses a mix of sophisticated product imagery, often in tight crops, showcasing AI-generated content (e.g., goats, toy cars) or robotic components. These visuals are typically contained within card-like structures with 8px rounded corners. Photography is professional, often high-key with strong focus on the subject. Illustrations are absent. Overall, imagery functions as direct evidence of the technology's capabilities rather than decorative elements, consistent with a deep-tech brand.
