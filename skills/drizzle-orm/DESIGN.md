---
version: alpha
name: Drizzle ORM
description: Drizzle ORM's design feels like an approachable developer workbench — functional and clear, with a dash of quirky personality. The dominant use of a system sans-serif for most text, coupled with the playful hand-drawn 'FirstTimeWriting' font for select headings and accents, creates a unique tension between serious engineering and whimsical creativity. Subtle gray tones provide structure and visual hierarchy, while thoughtful rounding on interactive elements hints at a user-friendly experience. Even the slight shadow on cards and inputs maintains a light, approachable feel rather than a stark, elevated presence.
colors:
  cloud-white: "#ffffff"
  smoke-gray: "#e5e7eb"
  steel-gray: "#f6f6f7"
  ink-black: "#222222"
  charcoal-text: "#444444"
  stone-text: "#909090"
  deep-sea: "#282b3b"
  sky-blue: "#006be6"
  amethyst-accent: "#3e7ff0"
  action-green: "#4bb74b"
  alert-red: "#ef4444"
  slate-gray: "#334155"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.17
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.17
spacing:
  cardRadius: 8px
  buttonRadius: 4px
  elementGap: 8px
  sectionGap: 48px
components:
  quick-navigation-cards:
    role: 
  release-progress-stats-block:
    role: 
  performance-benchmark-card:
    role: 
  primary-action-button:
    role: Calls to action across the site.
  default-button:
    role: Secondary actions, navigation links within content.
  ghost-button:
    role: Navigation items with a subtle background.
  badge-neutral-background:
    role: Categorization, metadata tags.
  badge-subtle-fill:
    role: Highlighting key attributes or technologies.
  badge-dark-gray-outline:
    role: Less prominent tags.
  badge-light-gray-fill:
    role: Informational badges with reduced visual emphasis.
  text-input:
    role: User input fields.
  informational-card:
    role: Content segmentation and display of related data.
  navigation-link-header:
    role: Primary site navigation.
---

## Overview

**North Star:** developer's spirited workbench

Drizzle ORM's design feels like an approachable developer workbench — functional and clear, with a dash of quirky personality. The dominant use of a system sans-serif for most text, coupled with the playful hand-drawn 'FirstTimeWriting' font for select headings and accents, creates a unique tension between serious engineering and whimsical creativity. Subtle gray tones provide structure and visual hierarchy, while thoughtful rounding on interactive elements hints at a user-friendly experience. Even the slight shadow on cards and inputs maintains a light, approachable feel rather than a stark, elevated presence.

### Do's

- Prioritize `ui-sans-serif` at weight 400 or 500 for all body and interface text to maintain clarity.
- Use Amethyst Accent (#3e7ff0) exclusively for stylized headings or playful visual emphasis, never for critical information or interactive states.
- Apply Deep Sea (#282b3b) for primary interactive elements and text requiring high contrast.
- Maintain a subtle visual hierarchy with Smoke Gray (#e5e7eb) for borders and backgrounds of secondary components.
- Ensure buttons utilize a `4px` radius for Primary Action Buttons and `3px` for Default and Subtle Buttons.
- Employ the 'FirstTimeWriting' font for headline elements where a relaxed, distinctive tone is desired, usually at `30px` or `20px`.

### Don'ts

- Avoid using FirstTimeWriting for long passages of text or critical UI elements like buttons and navigation, as its readability is limited.
- Do not introduce strong, saturated colors beyond the defined brand and accent palette; maintain the largely neutral, approachable tone.
- Refrain from heavy shadows or strong elevation; the design favors subtle separation with light outlines and minimal depth.
- Do not deviate from the established padding and radius values for interactive components; consistency is key for usability.
- Avoid using Sky Blue (#006be6) for non-interactive text elements, to preserve its role as a link indicator.

### Layout

The page primarily uses a max-width contained model, centered on the screen, creating a focused content area. The hero section breaks this with a full-bleed background, using a large, centered headline paired with the signature whimsical illustrations. Sections are defined by consistent vertical spacing, creating an organized rhythm. Content arrangement often employs a two-column layout, alternating between text on one side and a supporting visual (illustration or code snippet) on the other. A 3-column card grid is used for feature display. The density is spacious, providing ample breathing room around content blocks. Navigation is a sticky top bar, minimal and functional, featuring text links and a GitHub star count.

### Imagery

The site's visual language is a blend of clean UI and whimsical, hand-drawn vector illustrations. Imagery features stylized, anthropomorphic 'droplet' characters and abstract shapes, often colored with the playful violet and blue accents. These illustrations are generally contained, not full-bleed, and often interact with text elements. Product screenshots are minimal, focusing on code snippets or simplified interface examples, often presented within subtle gray containers with rounded corners, maintaining a clean, explanatory role. Icons are outlined, typically monochrome (Ink Black or Stone Text), and used functionally to enhance navigation or convey status effectively. The overall density leans towards text-dominant, with imagery serving a decorative and explanatory purpose rather than a primary content role.
