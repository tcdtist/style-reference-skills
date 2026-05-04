---
version: alpha
name: Titan
description: Titan presents a refined, high-contrast, monochrome aesthetic, marrying the sharpness of financial precision with an underlying human warmth. Its visual language prioritizes clear information hierarchy and direct interaction, utilizing stark black and white with subtle, almost imperceptible, warm off-white and gray undertones for depth. Components are lightweight and interaction-focused, often featuring generous padding and distinctive pill-shaped radii to create a sense of approachability within a formal system. The design feels grounded and authoritative, not through heavy elements, but through its disciplined use of space, typography, and a distinct lack of decorative flourishes, allowing content and functionality to lead.
colors:
  midnight-ink: "#111111"
  canvas-white: "#ffffff"
  off-white-sage: "#f3efeb"
  faded-stone: "#e9eaeb"
  gunmetal-gray: "#615e5b"
  soft-concrete: "#d8d3cc"
  action-black: "#000000"
  highlight-orange: "#ff9900"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
  display-sm:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.2
spacing:
  cardRadius: 32px
  buttonRadius: 160px
  elementGap: 24px
  sectionGap: 80px
components:
  primary-filled-button:
    role: Call to action
  ghost-button:
    role: Secondary action or link
  navigation-link-button:
    role: Tertiary action or inline navigation link
  feature-card:
    role: Informational content container
  expanded-feature-card:
    role: Detailed content container
  stat-display-card:
    role: Quick view data presentation
  inline-text-link:
    role: Navigation or contextual information link
---

## Overview

**North Star:** monochrome financial ledger

Titan presents a refined, high-contrast, monochrome aesthetic, marrying the sharpness of financial precision with an underlying human warmth. Its visual language prioritizes clear information hierarchy and direct interaction, utilizing stark black and white with subtle, almost imperceptible, warm off-white and gray undertones for depth. Components are lightweight and interaction-focused, often featuring generous padding and distinctive pill-shaped radii to create a sense of approachability within a formal system. The design feels grounded and authoritative, not through heavy elements, but through its disciplined use of space, typography, and a distinct lack of decorative flourishes, allowing content and functionality to lead.

### Do's

- Use Midnight Ink (#111111) as the primary text color against Canvas White (#ffffff) or Off-White Sage (#f3efeb) to maintain high contrast.
- Apply a 160px border-radius to all primary and ghost buttons, and 140px to navigation elements for a consistent pill-shaped aesthetic.
- Separate major content sections with 80px vertical spacing to ensure comfortable density and visual breathing room.
- Utilize Geist at weight 700 for headings, sizes 40px and 60px, with -0.0300em letter spacing to create impactful, condensed titles.
- Use Geist Mono sparingly for numerical data or technical terms, leveraging its 'ss08' feature for distinct presentation.
- Implement Soft Concrete (#d8d3cc) for subtle 1px borders on ghost buttons and divider lines to avoid heavy visual separation.
- Employ Off-White Sage (#f3efeb) as a background for secondary content blocks or cards to provide a warm, soft distinction from the main Canvas White background.

### Don'ts

- Avoid introducing additional saturated colors; maintain the predominantly monochrome palette with only subtle Highlight Orange accents in decorative elements.
- Do not use box-shadows for elevation; rely on background color changes or subtle borders for surface differentiation.
- Do not use generic circular or square button radii; adhere to the specific 160px and 140px values for interactive elements.
- Avoid dense, unbroken blocks of text; break up content with generous padding, section gaps, and clear typographic hierarchy.
- Do not use default browser link styles; all links should be styled with Midnight Ink (#111111) and no underline by default.
- Do not use thin or light text weights for body copy; ensure readability with Geist at weight 400 or 500 for paragraph text.
- Avoid cluttering the layout; maintain the spacious and comfortable density by respecting elementGap of 24px and cardPadding of 28px.

### Layout

The page follows a contained, centered layout, with content constrained to a `pageMaxWidth` of 1200px. The hero section is a two-column split, with a bold headline and primary CTA on the left, balanced by a large, detailed monochrome illustration on the right. Section rhythm is consistent, primarily using 80px vertical gaps between major content blocks. Content is often presented in a grid-like fashion, such as the three-column card grid for feature highlights. Navigation is a simple, sticky top bar with logo, prominent brand name, a few text links, and filled/ghost buttons for login/signup. The density is comfortable, ensuring plenty of whitespace around elements.

### Imagery

The site uses a combination of high-contrast, black-and-white, highly detailed illustrations and occasional, stark product/lifestyle photography. Illustrations are the primary visual element, depicting urban landscapes (like a cityscape) or abstract financial concepts with fine linework, often with a single bird or abstract element for movement. Photography is minimal, often cropped tightly on individuals (lifestyle) or objects, maintaining the monochrome or desaturated tone. Icons are outlined, thin stroke, and monochromatic, used functionally rather than decoratively. The overall density of imagery is balanced; it serves to add atmosphere and context without overwhelming the clean UI.
