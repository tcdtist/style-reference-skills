---
version: alpha
name: Conway
description: This design system evokes a clandestine operations center, precise and controlled. Its strength is in the relentless darkness of its background, which provides a stark, high-contrast canvas for sparse, focused information. The near-achromatic type, primarily in off-white, and a single vibrant orange accent, guide the eye with surgical precision. The absence of traditional shadows, replaced by subtle changes in background lightness and bordering, helps maintain the crisp, flat, and technically-oriented aesthetic.
colors:
  midnight-grid: "#000000"
  slate-night: "#0e0c0c"
  faded-ash: "#aeafb0"
  ghost-white: "#fafaf9"
  subtle-gray: "#e5e7eb"
  blaze-orange: "#f6511d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.5px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.6px
  display:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.1
    letterSpacing: -1.47px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 4px
components:
  blog-feature-card:
    role: 
  fraud-lifecycle-stage-list:
    role: 
  careers-job-listings-card:
    role: 
  primary-header-button-light:
    role: Call to action button for primary actions in the header.
  navigation-link-button-dark:
    role: Secondary action or informational link in the navigation.
  informational-card-button-dark-contrast:
    role: Actionable item within darker card containers, providing clear call to action within specific content blocks.
  orange-action-link-inline:
    role: Inline text link for secondary actions or specific navigation points.
  text-input-field:
    role: Standard input field for user data entry.
  job-listing-link:
    role: Interactive list item for job postings, indicating a click target.
  navigation-link:
    role: Main navigation item in the footer.
  feature-card:
    role: Container for distinct content blocks, often with a title and description.
---

## Overview

**North Star:** Shadowless Dark Operations Grid. The visual style is a dark, grid-based interface, where information is displayed with stark clarity against a deep, textured background.

This design system evokes a clandestine operations center, precise and controlled. Its strength is in the relentless darkness of its background, which provides a stark, high-contrast canvas for sparse, focused information. The near-achromatic type, primarily in off-white, and a single vibrant orange accent, guide the eye with surgical precision. The absence of traditional shadows, replaced by subtle changes in background lightness and bordering, helps maintain the crisp, flat, and technically-oriented aesthetic.

### Do's

- Use ABC Monument Grotesk Unlicensed Trial for all text and UI elements, prioritizing weights 300-500. Substitute with Inter if custom font is unavailable.
- Maintain a predominantly dark theme with #000000 (Midnight Grid) and #0e0c0c (Slate Night) as primary background and text colors respectively.
- Apply #f6511d (Blaze Orange) strictly as the accent color for interactive states, key calls to action, and critical indicators, and avoid mixing it with other chromatic colors.
- Enforce 0px border-radius for all primary UI elements like buttons, cards, and input fields to maintain a sharp, technical aesthetic.
- Structure content using subtle borders like rgba(250, 250, 249, 0.15) and #e5e7eb, rather than drop shadows, for visual separation.
- Utilize letter-spacing of -0.0350em for large display text (e.g., 42px) to create a denser, more integrated headline appearance.
- Use `ui-monospace` for small, technical text at 10px with `0.0500em` letter-spacing for specific data or label displays.

### Don'ts

- Do not introduce drop shadows for elevation; use background color changes or subtle borders instead.
- Avoid using a vibrant color palette beyond #f6511d (Blaze Orange) to maintain the focused and precise visual identity.
- Do not use rounded corners larger than 3px; prefer 0px or small radii for specific components like the header button.
- Do not center-align body text; maintain left-alignment for readability in extended content blocks.
- Avoid using bright, saturated background colors; stick to the dark neutral palette.
- Do not deviate from the established typography for headlines and body text; maintain the strict hierarchy and letter spacing.
- Do not apply padding less than 7px for interactive elements; ensure sufficient touch/click targets.

### Layout

The page primarily uses a full-bleed dark background, but content within sections is constrained within an implicit maximum width, giving a contained feel without hard borders. The hero establishes a split layout with a prominent headline on the left and a complementary visual/text block on the right. Subsequent sections often follow a similar side-by-side or stacked content arrangement. Vertical spacing between main sections (sectionGap) is significant, creating distinct content blocks. The layout emphasizes clear, structured information flow, often in two-column formats, with ample negative space to allow content to breathe against the dark backdrop. The footer presents a compact, multi-column link structure.

### Imagery

The site primarily uses product screenshots and abstract, technically-oriented graphics. Product screenshots are contained within dark UI frames, showing internal UIs with data visualizations, often featuring a black background with subtle colored progress bars and text. Imagery is functional and illustrative of complex processes rather than decorative. Graphics are generally abstract, featuring subtle grid patterns or interconnected nodes, often in shades of gray or dark blue, used as background textures. The only curved element identified is the 9999px radius on small avatars/logos within some sections, contrasting against the predominantly sharp edges.
