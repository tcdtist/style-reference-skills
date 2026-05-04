---
version: alpha
name: Healthy Together
description: Healthy Together employs a cool, dark-mode canvas accented by vibrant, saturated gradients and a subtle, soft light theme for content sections. Typography is grounded in a single, versatile sans-serif family, used confidently across a wide range of sizes and precise tracking. Components feature large, pill-shaped buttons for primary actions and subtly rounded cards, providing a friendly yet professional interface.
colors:
  midnight-ink: "#101722"
  canvas-ice: "#f9f0ff"
  plasma-violet: "#4541fe"
  soft-lavender: "#d9c6ff"
  pale-stone: "#6c6c7a"
  snow-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.05px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
    letterSpacing: -0.05px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.15
    letterSpacing: -0.05px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.1
    letterSpacing: -0.05px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -0.05px
  display:
    fontFamily: "system-ui"
    fontSize: 92px
    lineHeight: 0.88
    letterSpacing: -0.05px
spacing:
  cardRadius: 42px
  buttonRadius: 16000px
  elementGap: 16px
  sectionGap: 56px
components:
  primary-action-button:
    role: Call to action button
  ghost-button:
    role: Secondary action or subtle navigation
  cream-background-button:
    role: Tertiary action or alternative prompt
  standard-content-card:
    role: Information container, testimonial display
  gradient-hero-card:
    role: Prominent feature or call to action
  rounded-highlight-card:
    role: Isolated highlight or feature panel
---

## Overview

**North Star:** midnight gradient horizon

Healthy Together employs a cool, dark-mode canvas accented by vibrant, saturated gradients and a subtle, soft light theme for content sections. Typography is grounded in a single, versatile sans-serif family, used confidently across a wide range of sizes and precise tracking. Components feature large, pill-shaped buttons for primary actions and subtly rounded cards, providing a friendly yet professional interface.

### Do's

- Use Inter font family for all text, applying a global letter-spacing of `-0.05em` to maintain a consistently tight, condensed feel.
- Prioritize Plasma Violet (#4541fe) for all primary interactive elements like buttons and key brand highlights.
- Apply `16000px` border-radius for all buttons and small interactive elements to achieve a distinct pill shape.
- Utilize Canvas Ice (#f9f0ff) or Snow White (#ffffff) for card backgrounds and content sections, reserving Midnight Ink (#101722) for entire page backgrounds in dark mode or hero sections.
- Maintain a clear visual hierarchy by using the Radiant Gradient for hero sections and dramatic visual introductions.
- Use `42px` border-radius for standard content cards to ensure a soft and approachable appearance across the system.
- Employ `16px` for `elementGap` horizontally and vertically to create comfortable spacing between UI elements.

### Don'ts

- Avoid using harsh, saturated primary colors for large background areas that are not hero sections or prominent feature cards.
- Do not deviate from the Inter font family or its defined letter-spacing; consistency is crucial for brand recognition.
- Never use square or minimally rounded corners for interactive components; all buttons and critical interactive elements should be pill-shaped.
- Do not introduce new shadow styles for elevated elements; stick to the predefined shadow for Gradient Hero Cards or use no shadow.
- Avoid using multiple font sizes for body text; aim for `14px` or `16px` for main content based on context.
- Do not introduce strong, contrasting colors for text that are not Midnight Ink (#101722), Pale Stone (#6c6c7a), or Snow White (#ffffff).
- Avoid generic or standard button shapes; the pill-shaped `16000px` radius is a core identifier.

### Layout

The page primarily uses a max-width contained layout, though the hero section breaks this with a full-bleed dark background and a centered headline. Sections alternate between dark (Midnight Ink) and light (Canvas Ice/Snow White) backgrounds, creating a clear visual rhythm. Content is generally arranged in centered stacks for headlines and calls to action, transitioning to 2-column text + image layouts or 3-column card grids for features and testimonials. Vertical spacing between sections is generous and consistent. Navigation is a sticky top bar with a logo, menu links, and a distinctive Plasma Violet pill-shaped 'Need Help?' button.

### Imagery

The imagery style is a mix of abstract 3D renders and subtle iconography. The 3D render, seen in the hero, features organic, flowing shapes in the brand's gradient colors (Plasma Violet to Hot Pink), acting as an atmospheric and decorative element. When present, product imagery consists of tightly cropped screenshots or product surfaces, integrated subtly within cards or sections. Outlined icons with moderate stroke weight are used for functional clarity, typically in Midnight Ink or Pale Stone. The overall density is balanced, with imagery serving both decorative and explanatory roles, often framed by soft card shapes or integrated into background experiences.
