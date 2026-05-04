---
version: alpha
name: July Fund
description: July Fund presents a grounded digital experience, blending rich, dark backgrounds with soft, off-white content surfaces. Typography marries traditional serif headlines with modern sans-serif body text, creating a subtle tension between heritage and forward-thinking. Accent colors are primarily deep, muted tones and vivid greens, used sparingly to highlight key information or status, giving the interface a considered, almost academic feel.
colors:
  background-charcoal: "#221f1e"
  paper-white: "#f0e7e4"
  text-dark: "#433e3c"
  text-light: "#ffffff"
  shadow-ink: "#000000"
  midtone-gray: "#898989"
  deep-plum: "#322b66"
  forest-green: "#113619"
  muted-espresso: "#2e2909"
  vivid-green: "#56d270"
  lavender-mist: "#c6bffa"
  sunbeam-yellow: "#fde440"
  terra-cotta: "#b9534a"
  deep-night-gradient: "#131415"
typography:
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.3
spacing:
  cardRadius: 12px
  buttonRadius: 24px
  elementGap: 20px
  sectionGap: 40px
components:
  outline-button-dark:
    role: Secondary action button for general use on light backgrounds.
  outline-button-light:
    role: Secondary action button for general use on dark backgrounds.
  minimal-link-button:
    role: Tertiary action or navigational link with minimal styling.
  content-card-paper-white:
    role: Standard information card for displaying content sections.
  content-card-charcoal:
    role: Standard information card for displaying content sections on dark backgrounds.
  callout-card-deep-plum:
    role: Themed card for highlighting specific categories or insights.
  news-badge:
    role: Informational tag for categorizing content, particularly news items.
  category-badge-lavender-mist:
    role: Secondary thematic badge for categorizing content.
---

## Overview

**North Star:** Warm parchment in a dark library

July Fund presents a grounded digital experience, blending rich, dark backgrounds with soft, off-white content surfaces. Typography marries traditional serif headlines with modern sans-serif body text, creating a subtle tension between heritage and forward-thinking. Accent colors are primarily deep, muted tones and vivid greens, used sparingly to highlight key information or status, giving the interface a considered, almost academic feel.

### Do's

- Always use Portrait for headlines (18px and above) and Helvetica Neue for body text, ensuring distinction.
- Apply a 12px border-radius to all general cards, reserving 20px for larger feature cards or sections.
- Use Vivid Green (#56d270) only for positive status indicators or 'news' badges, never for primary actions.
- Ensure letter-spacing is applied to Helvetica Neue at smaller sizes: 0.2em for 8px, 0.25em for 10px.
- Prioritize tonal shifts for surface differentiation, utilizing Background Charcoal (#221f1e) and Paper White (#f0e7e4) as primary background surfaces.
- Maintain comfortable visual density using 20px for element gaps and 40px for section gaps.
- Employ ghost buttons with 24px radius, using Text Dark (#433e3c) on light backgrounds and Paper White (#f0e7e4) on dark backgrounds for text and border.

### Don'ts

- Do not use saturated colors for large background areas or primary text; restrict them to small accents like badges.
- Avoid mixing more than two distinct font families on a single page.
- Do not introduce new border-radius values; adhere strictly to 8px for badges, 24px for buttons, and 12px/20px for cards.
- Never use Vivid Green (#56d270) as a primary action color; it is reserved for semantic success/news indicators.
- Do not use drop shadows for elevation; rely on color contrast and subtle borders for perceived depth.
- Do not vary line-height based on individual preference; use the established 1.2 or 1.3 for Portrait and 1.15-1.3 for Helvetica Neue based on context.
- Avoid decorative gradients outside of the Deep Night Gradient on large, singular hero sections.

### Layout

The page uses a contained layout with no explicit max-width, suggesting a responsive design that adapts fluidly. The hero section features a centered headline over a dark, full-bleed gradient background, establishing an immersive tone. Subsequent sections follow an alternating pattern of dark and light surfaces, with content arranged in a dynamic, sometimes asymmetric grid. There's a prominent use of 2-column and 3-column card grids for features and articles, which break from strict linear flow to create visual interest. Vertical spacing is consistent and comfortable, promoting readability without feeling cramped. A minimal sticky top bar provides subtle navigation.

### Imagery

The imagery on July Fund is sparse and highly curated, focusing on abstract graphics, subtle 3D renders, and occasional product-adjacent photography. When present, images are often contained within cards, sometimes featuring masked or soft-edged compositions. Photography consists of tight crops or distant, atmospheric shots (e.g., Earth from space), lacking lifestyle context and focusing on the essence of the subject. Icons, when visible, are minimal, often outlined, and primarily monochromatic, serving explanatory or decorative atmospheric roles. The overall density is text-dominant, with imagery serving as visual punctuation rather than extensive content.
