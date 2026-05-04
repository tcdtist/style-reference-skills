---
version: alpha
name: Studio Gruhl
description: Studio Gruhl presents a stark, high-contrast dark mode aesthetic, emphasizing brand identity through bold, monochrome typography that commands attention. The design system leverages a powerful interplay of deep charcoal and pure white, with minimal use of color reserved for impactful brand moments or subtle interaction cues. Components are compact, sharply defined, and prioritize information density over expansive whitespace, creating a direct and confident user experience. Underlying this is an expressive motion language that adds a dynamic, almost kinetic, fluidity to interactions.
colors:
  midnight-charcoal: "#18181b"
  slate-surface: "#2e2e30"
  pure-white: "#ffffff"
  muted-gray: "#969696"
  shadow-ink: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.15
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
spacing:
  cardRadius: 9px
  buttonRadius: 12px
  elementGap: 10px
  sectionGap: 120px
components:
  primary-filled-button:
    role: Main call-to-action button, dark background with white text.
  outlined-text-button:
    role: Secondary action button, white text with a white border, no background fill.
  naked-text-button:
    role: Minimalist button for pure textual actions, text only.
  transparent-project-card:
    role: Card for displaying project previews without a distinct background, relying on content for definition.
  rounded-project-card:
    role: Card for project previews with a subtle rounded corner, no distinct background.
  slate-project-highlight-card:
    role: Card for featuring key projects or information, using the Slate Surface background.
  header-navigation-item:
    role: Primary navigation links with a clean, rounded focus style.
---

## Overview

**North Star:** Midnight Grid, Sharp Light

Studio Gruhl presents a stark, high-contrast dark mode aesthetic, emphasizing brand identity through bold, monochrome typography that commands attention. The design system leverages a powerful interplay of deep charcoal and pure white, with minimal use of color reserved for impactful brand moments or subtle interaction cues. Components are compact, sharply defined, and prioritize information density over expansive whitespace, creating a direct and confident user experience. Underlying this is an expressive motion language that adds a dynamic, almost kinetic, fluidity to interactions.

### Do's

- Prioritize GreedStandard 700 for all marketing headlines; for sub-headings and body use 400 for contrast. Sizes from the typeScale.
- Use Midnight Charcoal #18181b as the primary page background for all sections unless a distinct surface is needed.
- Apply Pure White #ffffff for all primary text elements to maintain high contrast with dark backgrounds.
- Utilize Slate Surface #2e2e30 for all interactive elements like buttons and card backgrounds requiring a slight elevation.
- Maintain a compact information density with primary vertical spacing between sections at 120px, and horizontal element spacing around 10px.
- Apply a 12px border-radius consistently to all interactive elements, cards, and primary containers.
- Employ the Expressive motion profile with 0.5s ease transitions for general interactive states like hover and active to ensure a fluid user experience.

### Don'ts

- Avoid using excessive color; restrict chromatic colors to functional accents or specific branding elements where explicitly defined.
- Do not introduce drop shadows; the design relies on flat surface changes and borders for depth.
- Steer clear of large, flowing blocks of body text; break text into smaller, impactful chunks matching the bold typographic style.
- Do not use generic system fonts for branding or primary content areas; GreedStandard is essential for brand identity.
- Avoid overly spacious layouts; the system prefers a compact, dense arrangement, conveying efficiency and directness.
- Do not use arbitrary border-radii; adhere strictly to the defined radii such as 12px for cards and buttons, and 9999px for pill-shaped elements.
- Never use light backgrounds for main content sections; the site is exclusively dark-themed.

### Layout

The page model is full-bleed, with content often spanning the entire viewport width, creating an immersive experience. The hero sections boldly present headlines or key visuals, sometimes centered over a background, maintaining a high-impact, direct communication. Section rhythm is driven by sharp transitions between content blocks, often defined by distinct background color changes or large text elements, creating a strong vertical flow without explicit dividers. Content arranges in layered or large-block compositions, prioritizing bold statements. While specific grid usage is not consistently evident across all content, there is a clear emphasis on large, singular visual statements. The navigation is a sticky top bar, minimal and discreet, often appearing as a floating overlay at the top of the viewport.

### Imagery

The visual language is characterized by bold, graphic elements, often abstract or symbolic as seen with the Nike swoosh example. Photography appears to be minimal, focusing on product branding or specific design work tightly integrated into the UI. Icons are simple, outlined, and monochromatic, aligning with the overall stark aesthetic. Imagery serves primarily to showcase project work or provide decorative atmosphere rather than product-focused or lifestyle content. The imagery is secondary to the typographic and color interplay, keeping a text-dominant density.
