---
version: alpha
name: The Fascination The Fascination
description: The Fascination employs a narrative-driven blog aesthetic with ample white space and a clear hierarchy. Typography centers around a robust sans-serif for content and a distinctive script font for thematic accents, creating a balance of utility and branded personality. Interaction is defined by crisp, subtle borders and a singular vivid blue for active states, keeping the focus on editorial content rather than complex UI elements. Most surfaces remain light and neutral, allowing text and imagery to take precedence without visual interruption.
colors:
  midnight: "#000000"
  storm-gray: "#1a202c"
  graphite: "#1f2937"
  silver-ash: "#767676"
  sky-blue: "#2ea3f2"
  twilight-violet: "#454ad3"
  plum-hue: "#4c40e0"
  neon-purple: "#9333ea"
  ghost-white: "#fbfbf7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.3
  display-sm:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1.3
spacing:
  buttonRadius: 6px
  elementGap: 16px
  sectionGap: 32px
components:
  primary-filled-button:
    role: Call-to-action button for core interactions.
  ghost-accent-button:
    role: Secondary action button for less prominent interactions.
  text-link:
    role: Inline navigation and contextual links.
  input-field:
    role: Standard text input element.
  card-item:
    role: Container for individual content pieces like articles or product listings.
  category-tag:
    role: Small, descriptive labels for content categorization.
---

## Overview

**North Star:** Editorial content on a crisp canvas

The Fascination employs a narrative-driven blog aesthetic with ample white space and a clear hierarchy. Typography centers around a robust sans-serif for content and a distinctive script font for thematic accents, creating a balance of utility and branded personality. Interaction is defined by crisp, subtle borders and a singular vivid blue for active states, keeping the focus on editorial content rather than complex UI elements. Most surfaces remain light and neutral, allowing text and imagery to take precedence without visual interruption.

### Do's

- Prioritize Midnight (#000000) for all primary body text and main headings to maintain readability.
- Use Sky Blue (#2ea3f2) exclusively for interactive elements such as links and button outlines, ensuring it serves as a clear call to action.
- Apply Graphik font for all UI text, content, and body copy, utilizing its various weights for hierarchy.
- Reserve Qwitcher Grypen for decorative, prominent headings to introduce brand character, always at larger sizes (48px or 60px).
- Ensure all primary filled buttons use a Midnight (#000000) background with Ghost White (#fbfbf7) text and a 6px border-radius.
- Maintain comfortable density using 16px for element gaps and 32px for section gaps, facilitating easy content scanning.
- Keep card backgrounds transparent with no radius or shadow, allowing content to blend seamlessly with the canvas.

### Don'ts

- Do not introduce new vibrant colors without a clear functional purpose; maintain the restrained chromatic palette.
- Avoid applying box-shadows or border-radii to content cards or basic containers; these elements should remain flat on the canvas.
- Do not use highly saturated brand colors for extensive paragraphs or body text; they are reserved for accents and headings.
- Do not deviate from the 6px border-radius for buttons and links; consistency in subtle roundedness is key.
- Avoid excessive use of the script font Qwitcher Grypen; it is a decorative accent, not a general heading or body font.
- Do not add heavy borders or backgrounds to basic input fields; they should blend into the interface using Silver Ash (#767676) 1px borders.
- Never use text colors other than Midnight (#000000) or Storm Gray (#1a202c) for long-form content to ensure optimal contrast and readability.

### Layout

The page primarily uses a max-width contained layout, though the exact max-width is not consistently defined, suggesting a flexible approach within a comfortable reading measure. The hero section often features a large image or graphic with a centered headline in text, sometimes using the decorative script font. Content sections alternate between visually distinct blocks, typically featuring text-left, image-right compositions or stacked sections. Article listings usually appear in multi-column grids (like the observed 3-column article structure), with consistent vertical spacing between elements. Navigation is a minimal top bar, suggesting a focus on content discovery within the page.

### Imagery

The site uses a mix of high-quality product photography and lifestyle imagery. Product shots are typically tight crops on clean or subtly textured backgrounds, focusing on the item itself. Lifestyle photos are staged, often featuring hands interacting with products or conveying a sense of aspiration. Imagery is typically contained within content blocks, without full-bleed or overlapping treatments. Icons are minimal, outlined, and monochromatic, primarily serving functional UI purposes like search or navigation rather than decorative illustration. The overall density is balanced, allowing images to punctuate text sections without overwhelming the content.
