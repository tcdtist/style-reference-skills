---
version: alpha
name: Secure and powerful crypto wallet | Ctrl Wallet
description: Ctrl employs a high-contrast, minimalist interface with a strong focus on typography and subtle organic accents. Bold, large black text dominates white backdrops, establishing a clear visual hierarchy. Interactive elements are sparingly colored with vibrant, almost neon green and yellow, creating distinct focal points without overwhelming the monochrome base. Cards introduce soft, rounded corners and muted background tints, adding gentle variations to the otherwise stark presentation. The overall impression is one of crisp efficiency and modern simplicity, with functional accents.
colors:
  absolute-black: "#000000"
  polar-white: "#ffffff"
  graphite: "#0f0f0f"
  light-ash: "#f9faf9"
  pebble-gray: "#ecefec"
  slate-dust: "#eeeeee"
  muted-stone: "#5a585a"
  deep-khaki: "#6e726e"
  vivid-green: "#05c92f"
  sunshine-yellow: "#fcea59"
  blush-pink: "#ffd0e2"
  sky-blue: "#a7cbf6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.13
  heading:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.08
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 0.9
  display:
    fontFamily: "system-ui"
    fontSize: 176px
    lineHeight: 0.77
spacing:
  cardRadius: 17.56px
  buttonRadius: 35.12px
  elementGap: 18px
  sectionGap: 26px
components:
  primary-filled-button:
    role: Primary Call-to-action button, e.g., 'Download'.
  ghost-bordered-button:
    role: Secondary action or navigation item.
  pill-bordered-button:
    role: Outline button with extreme rounded corners, typically for secondary actions.
  faq-accordion-card:
    role: Content container for questions and answers, appearing as expandable sections.
  feature-highlight-card:
    role: Prominent information display or feature showcase card.
  subtle-feature-card:
    role: Card for supporting information or related features.
  tinted-feature-card-blue:
    role: Decorative or categorized feature card with a distinct color.
  input-field-dark-border:
    role: Standard user input field.
  search-input-field:
    role: Input field for search functionality, with more rounded corners.
---

## Overview

**North Star:** Crisp monochrome canvas

Ctrl employs a high-contrast, minimalist interface with a strong focus on typography and subtle organic accents. Bold, large black text dominates white backdrops, establishing a clear visual hierarchy. Interactive elements are sparingly colored with vibrant, almost neon green and yellow, creating distinct focal points without overwhelming the monochrome base. Cards introduce soft, rounded corners and muted background tints, adding gentle variations to the otherwise stark presentation. The overall impression is one of crisp efficiency and modern simplicity, with functional accents.

### Do's

- Prioritize Absolute Black (#000000) text on Polar White (#ffffff) or Light Ash (#f9faf9) backgrounds for all primary content to ensure high contrast and readability.
- Use Tomato Grotesk at weight 600 for all primary headings and weight 500 for body text and navigation, adjusting sizes according to the type scale.
- Apply 35.12px or 52.68px border-radius to interactive elements like buttons and inputs for a distinct, soft pill-like shape.
- Utilize Vivid Green (#05c92f), Sunshine Yellow (#fcea59), Blush Pink (#ffd0e2), and Sky Blue (#a7cbf6) exclusively as accent colors for headings or decorative card backgrounds, not for primary interface elements.
- Maintain generous spacing with a minimum element gap of 18px and section/card padding of 26px to ensure a spacious and uncluttered layout.
- Employ the Ghost Bordered Button style for secondary actions or navigation, explicitly outlining them with Graphite (#0f0f0f) borders and text and 0px radius.

### Don'ts

- Avoid using multiple font families; adhere strictly to Tomato Grotesk across all textual elements.
- Do not introduce shadows for elevation; rely on color contrast and subtle background tints for depth and layering.
- Refrain from using accent colors for large background areas or primary text; reserve them for functional highlights or decorative touches.
- Do not deviate from the established border radii; maintain 17.56px for cards and 35.12-52.68px for buttons and inputs.
- Do not overcrowd sections; preserve the spacious density by adhering to the established section and element gaps.
- Avoid generic button styles that don't match the specific filled, ghost, or pill-bordered variants with their precise radii and color treatments.
- Do not use dark backgrounds for full sections; maintain the dominant light theme with white and light gray canvases.

### Layout

The layout follows a contained, centered model, likely with a fixed maximum width for main content sections. The hero section features a full-bleed white background with a striking centered headline. Content is primarily arranged in vertical stacks of text, often with a large, feature-focused headline, followed by a sub-heading and call to action. Secondary sections introduce alternating content blocks, sometimes featuring a 2-column arrangement pairing text with visual elements (illustrations or product mockups). FAQ sections use vertically stacked, uniformly styled accordion cards. Navigation is handled by a minimal top bar with prominent branding and a 'Download' button, alongside smaller text links.

### Imagery

The visual language predominantly features abstract, geometric illustrations and product mockups (e.g., phone screen with wallet UI) for conceptual elements. When present, illustrations are typically organic in shape, outlined or filled with brand-specific accent colors (Vivid Green, Sunshine Yellow, Blush Pink, Sky Blue), and used decoratively around UI representations or as small, playful accents. Icons are generally outlined or filled with Absolute Black, maintaining the monochrome aesthetic. Imagery serves to add visual interest and explain concepts in a lighthearted, yet clear manner, without being overwhelming or detracting from the text-heavy messaging. Images are contained within defined areas, often with rounded corners, and do not typically bleed to the edges or overlap elements.

### Elevation

This design system intentionally avoids shadows. Depth and visual hierarchy are achieved through strong color contrast (Absolute Black on light backgrounds) and distinct, rounded card backgrounds with subtle color variations (Pebble Gray, Sky Blue, Blush Pink, Sunshine Yellow) rather than traditional elevation effects.
