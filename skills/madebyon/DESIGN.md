---
version: alpha
name: Madebyon
description: Madebyon uses a high-contrast dark aesthetic where deep black surfaces meet vivid neon green accents. Typography is compact and precise, maintaining readability against dark backgrounds with a single sans-serif typeface that subtly shifts its tracking for emphasis. Components are defined by sharp corners and generous padding, creating a distinct, confident presence, with interactive elements highlighted by a 'switched-on' luminous green. The overall impression is one of modern, refined competence.
colors:
  midnight-ink: "#000000"
  onyx-graphite: "#151515"
  floral-veil: "#faf9f4"
  soft-silver: "#bdbdbd"
  warm-gray: "#666666"
  switchblade-green: "#dcff4f"
  emerald-spark: "#51d287"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.35
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.35
  body:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.35
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.35
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
spacing:
  cardRadius: 8px
  buttonRadius: 50px
  elementGap: 16px
  sectionGap: 81px
components:
  primary-action-button:
    role: Call-to-action button, signaling key interactive elements.
  testimonial-card:
    role: Container for client testimonials.
  nested-card:
    role: Secondary content container within primary black cards.
  input-field:
    role: Form input elements for user data entry.
  ghost-navigation-link:
    role: Main navigation links in the header.
  text-link-muted:
    role: Secondary or informational links, often found in footers.
---

## Overview

**North Star:** Neon on Obsidian: Precision text and vivid accents against a deep, dark canvas.

Madebyon uses a high-contrast dark aesthetic where deep black surfaces meet vivid neon green accents. Typography is compact and precise, maintaining readability against dark backgrounds with a single sans-serif typeface that subtly shifts its tracking for emphasis. Components are defined by sharp corners and generous padding, creating a distinct, confident presence, with interactive elements highlighted by a 'switched-on' luminous green. The overall impression is one of modern, refined competence.

### Do's

- Always use Midnight Ink (#000000) as the base background for pages and main content blocks.
- Highlight primary actions with Switchblade Green (#dcff4f) for backgrounds, ensuring text uses a dark neutral like Onyx Graphite (#151515) for contrast.
- Apply Favorit at weight 400 for all typography, adjusting letter-spacing to -0.020em only for display headings (40px, 56px).
- Utilize 50px border-radius for all interactive buttons to create a consistent pill shape, and 8px for cards.
- Maintain a clear functional hierarchy using Floral Veil (#faf9f4) for primary text, Soft Silver (#bdbdbd) for secondary text, and Warm Gray (#666666) for tertiary text.
- Separate major sections with a consistent `sectionGap` of 81px to create a spacious rhythm.
- Use Onyx Graphite (#151515) for nested surfaces or input fields to provide subtle depth against the main Midnight Ink (#000000) background.

### Don'ts

- Avoid introducing additional chromatic colors beyond Switchblade Green (#dcff4f) and Emerald Spark (#51d287) to preserve the stark brand identity.
- Do not vary font weights beyond 400 for Favorit; all typographic emphasis should be achieved through size and letter-spacing.
- Do not use subtle shadows for elevation; rely on background color changes or strong borders if elevation is required.
- Avoid applying tight padding on cards; maintain comfortable internal spacing with a minimum of 16px to 24px where content is present.
- Never use full-width sections without some horizontal padding; content should always feel contained even in full-bleed patterns.
- Do not use generic system fonts; always specify 'Favorit' or its defined substitute to maintain brand consistency.
- Avoid centered text blocks for large amounts of body copy; prefer left-aligned text for readability in the dark theme.

### Layout

The page model is primarily full-bleed with content contained within implied horizontal margins, giving a sense of expansive space. The hero section is full-bleed, dark, featuring a large, centered headline against the dark background. Section rhythm is consistent, separated by the significant `sectionGap` of 81px, with visual breaks often marked by full-width dark sections alternating with slightly deeper dark surfaces. Content often alternates between large centered text blocks and two-column layouts featuring text on one side and a product image or abstract visual on the other. A card grid is used for testimonials, presenting information in neat, uniform blocks. Navigation is a fixed top bar, minimal and unobtrusive, featuring ghost links and a single primary action button.

### Imagery

The visual language relies heavily on clean product screenshots and abstract or conceptual graphics. Photography tends toward product-focused shots or highly stylized, sometimes desaturated, close-ups with tight crops to eliminate distracting backgrounds. Illustrations are minimal, often geometric or abstract, used primarily for decorative flair rather than information conveyance. Icons are outlined, simple, and monochromatic, aligning with the UI's clean aesthetic. Imagery is sparse, serving primarily to add decorative atmosphere or demonstrate product context, making the site feel text-dominant.
