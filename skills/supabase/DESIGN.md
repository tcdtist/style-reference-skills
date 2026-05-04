---
version: alpha
name: Supabase
description: Supabase embodies a technical, deeply functional aesthetic like a high-performance terminal where every element serves a clear purpose. Dark, layered surfaces create a sense of depth and focus, akin to illuminated code on a dark screen. The primary green accent color, `Supabase Green`, acts as a confident highlight, drawing attention to interactive elements without being overwhelming. Typography prioritizes clarity and a dense information hierarchy, ensuring readability even with intricate data displays.
colors:
  midnight-abyss: "#000000"
  ebony-canvas: "#121212"
  graphite-base: "#242424"
  steel-surface: "#2e2e2"
  carbon-border: "#393939"
  iron-outline: "#4d4d4d"
  mid-gray-text: "#898989"
  silver-highlight: "#b4b4b4"
  whiteout: "#fafafa"
  supabase-green: "#3ecf8"
  deep-sea-green: "#1f4b37"
  forest-call-to-action: "#006239"
  glow-green: "#00c573"
  shadow-green: "#002918"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.56
    letterSpacing: -0.007px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.007px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
    letterSpacing: -0.007px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.38
    letterSpacing: -0.007px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.007px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: -0.007px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.11
    letterSpacing: -0.007px
spacing:
  cardRadius: 16px
  buttonRadius: 6px
components:
  cta-button-group:
    role: 
  feature-cards-grid:
    role: 
  testimonial-cards:
    role: 
  ghost-button:
    role: secondary action
  secondary-button:
    role: secondary action
  primary-call-to-action-button:
    role: primary action
  alert-pill-button-state-of-startups:
    role: informational alert
  feature-card:
    role: content container
  text-input-with-focus-ring:
    role: data entry
---

## Overview

**North Star:** Midnight Terminal Interface — a dark, organized, and quietly powerful workspace.

Supabase embodies a technical, deeply functional aesthetic like a high-performance terminal where every element serves a clear purpose. Dark, layered surfaces create a sense of depth and focus, akin to illuminated code on a dark screen. The primary green accent color, `Supabase Green`, acts as a confident highlight, drawing attention to interactive elements without being overwhelming. Typography prioritizes clarity and a dense information hierarchy, ensuring readability even with intricate data displays.

### Do's

- Use 'Circular' font at weight 400 or 500 for all UI text, except code blocks.
- Adopt #fafafa for primary text and headings against dark backgrounds to ensure AAA contrast.
- Apply #3ecf8 ('Supabase Green') exclusively for active states, primary links, and key brand affirmations.
- Maintain a clear visual hierarchy by utilizing #121212 as the base surface and #2e2e2 for elevated cards and modals.
- Utilize 6px radius for interactive elements like buttons and inputs, transitioning to 16px for larger content cards.
- Employ the 9999px radius sparingly, only for 'Pill Buttons' that act as prominent announcements or unique navigational elements.
- Ensure all interactive elements have a clear visual feedback using either a color change to 'Glow Green' or a subtle border change to 'Deep Sea Green'.

### Don'ts

- Avoid arbitrary color usage; every color should map to a defined role in the palette.
- Do not use shadows for elevation; rely on background color changes from #121212 to #2e2e2 to differentiate surface levels.
- Do not apply `Source Code Pro` for general body text or headlines; reserve it specifically for code or data display.
- Refrain from using mixed color backgrounds or gradients unless explicitly defined as a brand graphical element.
- Do not break the established spacing scale; maintain 8px increments or derived values (e.g., 24px, 32px) for consistency.
- Avoid excessive text decoration; links are identified by color ('Supabase Green') rather than underlines or heavy styling.

### Layout

The page adheres to a mostly full-bleed layout, particularly in hero sections, with content centered within an implied max-width. The hero section is characterized by a full-width dark background with a large, centered headline that uses two distinct colors (`Whiteout` and `Supabase Green`) for visual emphasis. Content sections alternate between visually seamless dark backgrounds and slightly lighter dark surfaces for cards. There's a clear rhythm of stacked content blocks and feature sections that often alternate between text on one side and a visual or conceptual graphic on the other. Card grids, typically 3-column, are used to present features, maintaining consistent padding. Navigation is a sticky top bar, minimal and persistent. The overall density is comfortable, providing breathing room around critical information.

### Imagery

The visual language for imagery is primarily functional and technical. Product shots are minimalist, showcasing UI directly against dark backgrounds, often with code-like visual elements. Illustrations, where present, are abstract and geometric, utilizing line art and flat fills in shades of gray and `Supabase Green`. Icons are outlined, minimal, and mono-colored, complementing the overall technical aesthetic. Photography is absent, replaced by stylized graphics or product UI snippets. Images serve an explanatory or demonstrative role rather than decorative one, maintaining a high density of visual information without clutter. The elephant logo is abstracted and used as a subtle background texture.

### Elevation

Supabase intentionally avoids traditional box shadows for elevation. Instead, depth and hierarchy are communicated through distinct background color shifts. Elements on a higher 'layer' utilize a lighter, less saturated dark tone (#2e2e2e) against the base page background (#121212), creating a clean, high-contrast separation without blur or visual noise. The only shadow detected is a subtle one on buttons, likely for a minimal pressed state, not for general elevation.
