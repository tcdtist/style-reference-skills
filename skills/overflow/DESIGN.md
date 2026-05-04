---
version: alpha
name: Overflow
description: Overflow's design evokes a sense of vibrant, dynamic clarity, like a digital canvas brought to life with soft pastels. The dominant white background keeps the focus on content, while subtle card shadows provide necessary dimensional separation. The playful use of gradient backgrounds infuses energy without overwhelming the UI, suggesting creativity within a structured environment. Varied border radii, from sharp 8px to soft 24px and even circular forms, add visual interest and a touch of approachability.
colors:
  midnight-graphite: "#000000"
  ghost-white: "#fafafc"
  slate-gray: "#666666"
  light-ash: "#dadce0"
  cloud-gray: "#f0f0f2"
  deep-violet: "#161637"
  overflow-blue: "#0085e4"
  gradient-sky: "#7272fb"
  gradient-ocean: "#007bff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.24px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.07px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.2px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.29px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.61px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.15
    letterSpacing: -1.01px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.07
    letterSpacing: -1.4px
spacing:
  cardRadius: 8px, 24px, 0px
  buttonRadius: 8px, 22px, 50%
  sectionGap: 40px
components:
  cta-button-group:
    role: 
  feature-cards-grid:
    role: 
  social-proof-banner:
    role: 
  primary-dark-button:
    role: Main calls to action.
  circular-icon-button:
    role: Small, contained actions like 'play video' or 'more info'.
  ghost-card:
    role: Content container without visual hierarchy emphasis.
  light-gray-input:
    role: Standard form input fields.
  subtle-gray-card:
    role: Feature cards or content blocks needing slight background distinction.
---

## Overview

**North Star:** Vibrant digital canvas. A bright, expansive white canvas animated by soft, flowing color gradients.

Overflow's design evokes a sense of vibrant, dynamic clarity, like a digital canvas brought to life with soft pastels. The dominant white background keeps the focus on content, while subtle card shadows provide necessary dimensional separation. The playful use of gradient backgrounds infuses energy without overwhelming the UI, suggesting creativity within a structured environment. Varied border radii, from sharp 8px to soft 24px and even circular forms, add visual interest and a touch of approachability.

### Do's

- Use Inter font family exclusively for all text elements.
- Prioritize Midnight Graphite (#000000) for primary text and Ghost White (#fafafc) for background surfaces to ensure optimal contrast.
- Apply Soft Shadow Cards (background: #FFFFFF, borderRadius: 24px, boxShadow: rgba(0, 0, 0, 0.08) 0px 4px 16px -8px) to visually elevate key content blocks.
- Utilize either 8px or 24px borderRadius for most UI elements like buttons and cards, creating a consistent soft yet defined aesthetic.
- Introduce brand gradients like Gradient Sky (linear-gradient(127deg, rgb(114, 114, 251) 0px, rgb(184, 225, 255) 99%)) in hero sections or large thematic areas to add dynamic visual interest.
- Maintain consistent letter spacing as defined for Inter, especially negative values for larger text, to enhance readability and visual density: e.g., -0.0210em for 48px headlines.

### Don'ts

- Avoid using harsh or dark shadow values; adhere to the subtle, diffused style like rgba(0, 0, 0, 0.08) 0px 4px 16px -8px.
- Do not introduce new color hues; stick to the established palette of Deep Violet, Overflow Blue, and the neutral scale.
- Refrain from using square (0px) border radii for interactive elements; maintain a degree of roundness (at least 8px).
- Avoid excessive text decoration or capitalization; rely on weight and color changes for emphasis.
- Do not deviate from the defined Inter font scale, line heights, or letter spacing. These are critical for brand consistency and readability.

### Layout

The layout is primarily a max-width 1288px container, centered, with occasional full-bleed sections. The hero section is full-bleed, featuring a striking gradient background with a large, centered headline and a prominent call-to-action. Subsequent sections alternate between the main white background and subtle gray backgrounds, with consistent vertical spacing. Content is arranged in flexible patterns, including centered stacks, multi-column feature grids (like the 3-column card grid for 'superpowers'), and fluid component arrangements. There's a clear visual rhythm established by the section breaks and card layouts, with ample breathing room. The navigation is a sticky top bar with a logo, primary links, and prominent download buttons.

### Imagery

Imagery primarily features product screenshots with a focus on UI elements, often presented within white or subtle gray frames, sometimes overlapping for a dynamic effect. The screenshot treatment highlights the software's functionality, with minimal surrounding context. Photography is completely absent. Icons are typically monolinear or filled, matching the overall clean aesthetic. Abstract gradients serve as atmospheric backgrounds rather than explicit imagery. The density suggests a product-heavy site where the application itself is the hero, supported by graphical representations of its features.
