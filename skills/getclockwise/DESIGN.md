---
version: alpha
name: Getclockwise
description: Clockwise employs a crisp, professional visual system with a bright canvas and strong green branding. Text is highly structured, using a custom display font for headlines and a clear sans-serif for body content. Borders are prominent, acting as dividers and enclosures, while color accents are used sparingly for links and interactive elements, maintaining an airy yet authoritative feel.
colors:
  canvas-white: "#fdf9f7"
  midnight-pine: "#003f2e"
  forest-link: "#039861"
  slate-text: "#333333"
  ash-gray: "#6e7673"
  steel-border: "#a6a6a6"
  light-gray-border: "#d6d6d6"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.48px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.54px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.6px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.2
    letterSpacing: -0.69px
  heading:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.95
  display:
    fontFamily: "system-ui"
    fontSize: 66px
    lineHeight: 0.95
spacing:
  elementGap: 20px
  sectionGap: 32px
components:
  primary-headline:
    role: Dominant page titles and hero content.
  section-heading:
    role: Titles for major content sections, establishing hierarchy.
  body-text-paragraph:
    role: Standard paragraph content for readability.
  muted-subheading:
    role: Descriptive text under headlines or for secondary information.
  link-text:
    role: Hyperlinks within body copy or navigation.
  faq-section-divider:
    role: Visual separator for question groups in an FAQ.
  faq-accordion-item:
    role: Interactive question and answer section.
  stat-card:
    role: Highlighting key numerical achievements.
---

## Overview

**North Star:** Evergreen clarity on a clean slate

Clockwise employs a crisp, professional visual system with a bright canvas and strong green branding. Text is highly structured, using a custom display font for headlines and a clear sans-serif for body content. Borders are prominent, acting as dividers and enclosures, while color accents are used sparingly for links and interactive elements, maintaining an airy yet authoritative feel.

### Do's

- Prioritize PP Mori for all headlines and display text, leveraging its strong character at larger sizes.
- Use Midnight Pine (#003f2e) for primary text content to maintain strong contrast and brand presence.
- Apply Forest Link (#039861) exclusively for active links and interactive elements, ensuring its vibrancy draws attention.
- Employ Light Gray Border (#d6d6d6) and Steel Border (#a6a6a6) for functional dividers and UI element outlines, using 3px solid for major sections and 1px solid for subtle distinctions.
- Maintain generous vertical spacing between sections (32px to 64px) to emphasize clarity and airiness.
- Utilize the `circular` (9999px) and `soft` (800px) radii for all interactive elements and badges, to convey a friendly tangibility.
- Ensure all body text uses Inter with -0.0300em letter spacing for enhanced readability on screen.

### Don'ts

- Avoid using saturated colors other than Forest Link (#039861) on interactive elements.
- Never use generic rectangular buttons; all buttons must adopt the `circular` (9999px) or `soft` (800px) radius.
- Do not introduce new serif fonts; the system relies on the distinct contrast between PP Mori and Inter.
- Avoid heavy drop shadows or complex gradients; the system prefers a flat, border-driven aesthetic.
- Do not deviate from the established text colors; use Midnight Pine (#003f2e), Slate Text (#333333), and Ash Gray (#6e7673) only for their designated roles.
- Refrain from using tight line spacing; maintain the established line heights (1.3-1.4) for all body copy to prevent text density.
- Do not use accent colors for large background areas; reserve them for small, functional UI elements.

### Layout

The page follows a classic max-width contained layout, likely centered, though specific max-width is not provided. The hero section presents a large, centered headline followed by a descriptive subtitle. Content is arranged in a single-column flow with consistent vertical spacing between paragraphs and sections. The FAQ section uses a clear question-and-answer format, bordered for distinction. Towards the bottom, there's a multi-column grid for partner logos, and a two-column grid for numerical stats, indicating a balanced use of white space and structured content blocks. The navigation is a simple top bar with a logo.

### Imagery

The site uses minimal imagery, primarily focusing on its logo and a grid of partner logos that are presented in a monochrome, desaturated style to maintain visual harmony. There are no full-bleed photographs or illustrations. Icons, like the plus/minus in the FAQ, are simple, outlined, and monochromatic, with a prominent stroke weight, and use the accent green for interactive states. The overall density of imagery is low, with text dominating the visual space and acting as the primary carrier of information.
