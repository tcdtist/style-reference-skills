---
version: alpha
name: Tilda
description: Tilda's aesthetic is an 'architectural blueprint on white marble', conveying a sense of playful professionalism through precise lines and a singular warm accent against a stark, high-contrast monochrome palette. The design marries the structured with the whimsical, using clean typography and minimalist UI elements to frame dynamic, illustrative hero sections. A consistent application of a soft, peachy-orange for interactive elements injects warmth and approachability without compromising the overall sense of meticulous design.
colors:
  arctic-white: "#ffffff"
  ink-black: "#000000"
  cloud-gray: "#efefef"
  graphite: "#222222"
  pebble: "#cccccc"
  warm-peach: "#fa8669"
  soft-peach: "#ffa282"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.2
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.57
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.4
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.17
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 78px
    lineHeight: 1.13
    letterSpacing: 0.038px
spacing:
  cardRadius: 0px, maintaining a sharp, structured aesthetic.
  buttonRadius: 100px for pill shapes, or 60px for softer rounded rectangles.
components:
  cta-button-group:
    role: 
  pricing-plan-cards:
    role: 
  feature-stat-block:
    role: 
  primary-filled-button:
    role: Call-to-action button for core actions like 'Sign up' or 'Create a website'.
  ghost-button-primary:
    role: Secondary call-to-action or navigational element.
  text-link-button:
    role: Inline actions or less prominent calls to action.
  ghost-button-secondary-gray:
    role: Low-prominence or disabled actions.
  dark-filled-button:
    role: Specialized CTA for dark themes or specific sections.
  pill-button-neutral:
    role: Small interactive elements, categories, or tags.
  empty-card:
    role: Container for content without visual elevation, acting as a structured content block.
  pill-badge:
    role: Small content labels, often used for categorization or status.
---

## Overview

**North Star:** Architectural blueprint on white marble. Clean lines and a single warm accent define a space where work feels like play.

Tilda's aesthetic is an 'architectural blueprint on white marble', conveying a sense of playful professionalism through precise lines and a singular warm accent against a stark, high-contrast monochrome palette. The design marries the structured with the whimsical, using clean typography and minimalist UI elements to frame dynamic, illustrative hero sections. A consistent application of a soft, peachy-orange for interactive elements injects warmth and approachability without compromising the overall sense of meticulous design.

### Do's

- Always use TildaSans as the primary typeface, leveraging light weights (100-300) for large headings and 400-500 for body text to maintain the sophisticated, understated tone.
- Utilize #fa8669 (Warm Peach) exclusively for primary calls-to-action and key interactive elements to draw attention and convey action.
- Maintain high contrast with #000000 (Ink Black) text on #ffffff (Arctic White) backgrounds for maximum readability and visual impact.
- Apply a 60px or 100px border-radius for all primary buttons and interactive pill-shaped elements to soften sharp lines.
- Ensure generous line-heights for all text, especially headings, to provide ample breathing room and enhance the sophisticated aesthetic.
- When introducing secondary backgrounds, use #efefef (Cloud Gray) to create subtle distinction without heavy shadows or borders.
- Employ consistent element gaps using the 8px, 10px, or 12px tokens for internal spacing, creating a precise and ordered layout.

### Don'ts

- Avoid using multiple accent colors; #fa8669 (Warm Peach) and #ffa282 (Soft Peach) are the only acceptable chromatic accents.
- Do not use box shadows for general elevation of cards or sections; rely on background color changes or thick borders for hierarchy.
- Do not vary font families beyond TildaSans for primary content; Arial and Times are reserved for fallback or specific utility contexts.
- Never use small, tight line-heights that crowd text; maintain the spacious typographic style.
- Do not use heavy, bold weights for display headings; the aesthetic prioritizes thin, elegant typography even at large sizes.
- Avoid decorative borders or aggressive gradients that would detract from the clean, architectural feel.
- Do not introduce rounded corners on general information cards or section containers; maintain a sharp, logical structure for these elements.

### Layout

The page primarily uses a full-bleed model, with the main content often centered within an implied maximum width but frequently extending to the viewport edges for background colors or illustrations. The hero section is characterized by a large, illustrative graphic occupying the left side, balancing a prominent, light-weighted headline and call-to-actions on the right. Section rhythm is generally consistent, with ample vertical spacing (multiples of ~60px to ~120px) between distinct content blocks, often separated by a hard white background. Content arrangement alternates between centered text stacks and left-aligned text with visual elements, creating a balanced, scannable flow. Minimalist navigation with centered links and distinct 'Log in'/'Sign up' buttons is present at the top right, staying sticky on scroll. There are no obvious multi-column card grids in the provided sections, favoring larger, distinct content blocks.

### Imagery

The site uses a distinct style of abstract, illustrative imagery, primarily seen in hero sections. These are line-art illustrations with occasional solid fills of #fa8669 (Warm Peach) and #000000 (Ink Black), featuring human figures interacting with UI elements in a whimsical, almost playful manner. The illustrations are contained within larger white or transparent sections, often overlapping simple geometric shapes or dotted patterns for added visual interest. They serve a decorative and atmospheric role, conveying the brand's creative and user-friendly approach without being literal product screenshots. The density is moderate to high in hero sections, then transitions to text-dominant content with occasional small, functional icons. Iconography is primarily outlined, matching the line-art illustration style.
