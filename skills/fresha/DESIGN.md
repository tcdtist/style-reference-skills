---
version: alpha
name: Fresha
description: Fresha uses an expansive, bright self-care marketplace aesthetic with a clear information hierarchy. A luminous radial gradient forms a soft, inviting backdrop, contrasting with sharp black typography and vivid accent colors. Interactive elements are clearly defined by rounded borders and specific color usage, while a subtle surface elevation emphasizes key content. The layout maintains a spacious feel with compact, grouped content, creating an efficient and user-friendly experience.
colors:
  midnight-ink: "#0d0d0d"
  canvas-white: "#ffffff"
  cloud-gray: "#f2f2f2"
  muted-stone: "#767676"
  silver-mist: "#d3d3d3"
  mercury-stroke: "#e5e5e5"
  sunset-gold: "#ffc00a"
  violet-impulse: "#6950f3"
  self-care-glow: "#ef6997"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.41
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.29
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.17
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.15
spacing:
  cardRadius: 8px
  buttonRadius: 999px
  elementGap: 8px
  sectionGap: 24px
components:
  navigation-link:
    role: Main navigation and utility links in header/footer.
  primary-search-input:
    role: Main search bar for services and locations.
  search-button:
    role: Dedicated action button for initiating a search.
  ghost-header-button:
    role: Secondary action button in the header, e.g., 'Log in' or 'Menu'.
  outlined-call-to-action-button:
    role: Prominent, interactive buttons that suggest a primary action, like 'Get the app'.
  product-thumbnail-card:
    role: Display individual service providers with imagery and condensed info.
  information-card:
    role: Standalone informational blocks or larger content groupings.
---

## Overview

**North Star:** Luminous radial gradient

Fresha uses an expansive, bright self-care marketplace aesthetic with a clear information hierarchy. A luminous radial gradient forms a soft, inviting backdrop, contrasting with sharp black typography and vivid accent colors. Interactive elements are clearly defined by rounded borders and specific color usage, while a subtle surface elevation emphasizes key content. The layout maintains a spacious feel with compact, grouped content, creating an efficient and user-friendly experience.

### Do's

- Use Midnight Ink (#0d0d0d) for all primary text and main headings to ensure strong contrast and readability.
- Apply Canvas White (#ffffff) as the default page background and for filled interactive elements.
- Reserve Violet Impulse (#6950f3) for outlined call-to-action buttons and active link states.
- Utilize Cloud Gray (#f2f2f2) for secondary content cards and subtle background variations in sections.
- Implement a 999px border-radius for all primary buttons, search inputs, and navigational elements to maintain a uniformly rounded aesthetic.
- Ensure all textual content uses the RoobertPRO font family in appropriate weights for hierarchy.
- Maintain a clear elementGap of 8px between discrete UI elements for consistent visual rhythm.

### Don'ts

- Avoid using Sunset Gold (#ffc00a) as an interaction color; it is reserved for decorative accents and ratings.
- Do not introduce sharp corners; all significant UI containers and interactive elements should use 8px, 12px, or 999px border-radii.
- Do not use dark backgrounds for main content sections; the system is designed around a light theme with bright surfaces.
- Avoid excessive shadow usage; rely on distinct background colors and minimal borders for element separation.
- Do not use decorative gradients on functional UI components; stick to solid colors for clarity.
- Refrain from altering the letter-spacing of RoobertPRO text; maintain 'normal' tracking for all content.
- Do not use more than two levels of text color in a single component to avoid visual clutter; primarily use Midnight Ink (#0d0d0d) and Muted Stone (#767676).

### Layout

The page uses a maximum-width contained layout, with a prominent full-width hero section that features a radial gradient background and a centered headline. Content sections below the hero alternate between full-width blocks (like the 'Download the app' section) and multi-column grids for recommended services. Vertical spacing between logical sections is consistently 24px. The main navigation is a sticky top bar, providing persistent access. Content is generally grouped into compact, repeating cards, creating an information-dense yet scannable layout.

### Imagery

The site predominantly uses high-quality product photography (salons, spas, services) within contained, rectangular frames with either 8px or 12px rounded corners. These images serve as explanatory content and are crucial for showcasing services. Small, functional icons are outlined and monochromatic, primarily in Midnight Ink (#0d0d0d), serving as visual cues. Product screenshots are realistic and shown within device mockups. The overall imagery is content-heavy, directly illustrating the services offered, rather than relying on abstract graphics or lifestyle photography.
