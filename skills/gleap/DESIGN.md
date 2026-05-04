---
version: alpha
name: Gleap
description: Gleap's visual style operates on a high-contrast model, pairing crisp, modern sans-serifs with a single, highly saturated magenta-purple accent. The UI uses spacious layouts and soft, rounded containers on a light background, creating a calm yet energetic feel. Typography shifts from inviting, editorial display fonts for headlines to compact, functional system fonts for body text. Interaction elements prominently feature the brand's signature purple to guide user focus and denote primary actions.
colors:
  cloud-canvas: "#f5f2f0"
  porcelain-surface: "#ffffff"
  graphite-text: "#333333"
  ink-text: "#000000"
  platinum-border: "#d6d6d6"
  silver-detail: "#bcbcbc"
  deep-plum: "#7b7b7b"
  amethyst-accent: "#f1ccff"
  sky-blue-highlight: "#91e0ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.4
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.44
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.25
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1.3
    letterSpacing: 0px
spacing:
  cardRadius: 24px
  buttonRadius: 10px
  elementGap: 16px
  sectionGap: 30px
components:
  primary-action-button-amethyst:
    role: Main call to action, filled with the brand's primary color.
  secondary-action-button-outline:
    role: Less prominent actions, using only a border to differentiate.
  affirmative-action-button-dark:
    role: Confirmation or direct action button, inverted color scheme from the page.
  icon-button-dark-accent:
    role: Compact button, often used for single actions or icon-only controls, with a distinctive larger radius.
  product-feature-card:
    role: Highlights key features or content, with subtle elevation.
  informational-badge:
    role: Categorizes or labels content with a soft, muted appearance.
---

## Overview

**North Star:** Crisp canvas, magenta highlight

Gleap's visual style operates on a high-contrast model, pairing crisp, modern sans-serifs with a single, highly saturated magenta-purple accent. The UI uses spacious layouts and soft, rounded containers on a light background, creating a calm yet energetic feel. Typography shifts from inviting, editorial display fonts for headlines to compact, functional system fonts for body text. Interaction elements prominently feature the brand's signature purple to guide user focus and denote primary actions.

### Do's

- Use PP Editorial New (weight 400) for all display headlines, setting them at 48px or 62px with normal letter spacing for an elevated, editorial feel.
- Apply Switzer (weights 400, 500, 600) for all body text, subheadings, and UI labels, adjusting letter spacing to -0.010em for 16px, -0.020em for 20px, and -0.025em for 32px to maintain visual compactness.
- Elevate primary calls-to-action with Amethyst Accent (#f1ccff) for backgrounds, paired with Ink Text (#000000) for readability.
- Utilize a 10px border-radius for all buttons and badges, reserving 24px for cards and 42px for distinct large elements, to establish a consistent soft-rounded identity.
- Maintain a clear visual hierarchy by using Ink Text (#000000) for critical headlines and bold elements, and Graphite Text (#333333) for standard body copy and descriptions.
- Structure layout using a 1200px max-width container, centered on the Cloud Canvas (#f5f2f0) background, with a consistent 30px vertical gap between major sections.
- Apply subtle elevation to key UI components like Product Feature Cards using rgba(0, 0, 0, 0.04) 0px 8px 16px 0px shadows, while keeping default backgrounds clean and shadow-less.

### Don'ts

- Avoid using multiple chromatic colors for primary actions; Amethyst Accent (#f1ccff) is the singular brand color for interactive elements.
- Do not introduce sharp corners or unrounded containers; enforce the 10px, 24px, or 42px border-radius system meticulously.
- Refrain from using strong, colorful gradients or textures; the system thrives on clean, mostly flat surfaces and subtle, tonal backgrounds.
- Do not deviate from the defined type scale and letter spacing values, particularly for headlines and body text, to preserve the distinct typographic voice.
- Avoid overuse of shadows; reserve the rgba(0, 0, 0, 0.04) 0px 8px 16px 0px shadow for cards and key elevated components only, preventing visual clutter.
- Do not introduce new border colors for UI elements; stick to Platinum Border (#d6d6d6) or Ink Text (#000000) for subtle separation.
- Resist dense layouts; ensure generous use of the 16px elementGap and 40px cardPadding to maintain a comfortable reading experience and visual breathing room.

### Layout

The page employs a max-width 1200px centered layout with a dominant light theme. Hero sections often feature a centered headline in the distinct serif font over atmospheric, organic gradient backgrounds. Vertical rhythm is established with a significant 30px gap between sections. Content sections frequently use an alternating text-left/visual-right pattern, or stacked centered blocks for feature descriptions. Pricing and feature comparisons often fall into multi-column (3-column) card grids. Navigation is a sticky top bar with a left-aligned logo and right-aligned actions, often using a distinct dark pill-shaped button for 'Sign up'.

### Imagery

The visual language predominantly features clean, product-focused screenshots of the software UI, often presented within rounded, slightly elevated containers. There's also use of abstract, gradient-rich backgrounds with subtle geometric shapes (like moons or soft hills) that provide atmospheric depth without competing with content. Iconography is generally monochromatic, using a filled style with clean lines. Imagery serves an explanatory and showcase role, demonstrating product functionality and providing decorative atmosphere rather than lifestyle context. Overall, it's a balance of functional UI demonstration and soft, atmospheric branding.
