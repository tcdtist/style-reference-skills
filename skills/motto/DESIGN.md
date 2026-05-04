---
version: alpha
name: Motto®
description: The Motto® design system evokes an atmosphere of rigorous clarity and understated authority. Its visual language relies on stark contrasts between crisp black text and an expansive canvas of near-white, creating a sophisticated and professional impression. The dominance of bold, custom san-serif typography, particularly the expansive display font, dictates the site's strong visual rhythm. A distinct lack of ornamentation, shadows, or vibrant color accents streamlines the user experience to focus purely on content and impactful messaging.
colors:
  pitch-black: "#000000"
  canvas-white: "#ffffff"
  charcoal-surface: "#1b1b1c"
  cloud-gray: "#f2f2f2"
  stone-accent: "#d8d8d8"
  ash-text: "#4d5153"
  silver-text: "#848484"
  input-border: "#c8cacd"
  faint-gray: "#717476"
  vivid-purple: "#9c98ef"
  electric-violet: "#6980ff"
  grass-green: "#beee98"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.38
  subheading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.14
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.14
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.14
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 61px
    lineHeight: 1.1
  display-sm:
    fontFamily: "system-ui"
    fontSize: 99px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 154px
    lineHeight: 1
spacing:
  cardRadius: 0px
  buttonRadius: 9999px
  sectionGap: 48px
components:
  services-tag-strip:
    role: 
  testimonial-card:
    role: 
  section-header-with-cta:
    role: 
  navigation-link:
    role: Standard interactive navigation item
  ghost-button-text:
    role: Secondary action or informational link styled as a button
  ghost-button-white-text:
    role: Secondary action on a dark background
  filled-button-pill-medium:
    role: Primary Call to Action
  ghost-button-pill-icon-only:
    role: Iconic secondary action
  info-card-no-border-shadow:
    role: Neutral content container
  text-input-underlined:
    role: User data entry field
---

## Overview

**North Star:** Architectural Blueprint on White Canvas. Black lines and precise typography articulate structure and ideas against an expansive, bright background.

The Motto® design system evokes an atmosphere of rigorous clarity and understated authority. Its visual language relies on stark contrasts between crisp black text and an expansive canvas of near-white, creating a sophisticated and professional impression. The dominance of bold, custom san-serif typography, particularly the expansive display font, dictates the site's strong visual rhythm. A distinct lack of ornamentation, shadows, or vibrant color accents streamlines the user experience to focus purely on content and impactful messaging.

### Do's

- Prioritize high contrast between text (Pitch Black #000000) and background (Canvas White #ffffff or Cloud Gray #f2f2f2) for legibility.
- Use 'disp' font (weight 500) exclusively for large, impactful headlines (61px to 154px) to establish a clear hierarchy and brand voice.
- Maintain a sense of generous whitespace; sections should breathe with sectionGap of 48px and elementGap varying from 8px to 70px.
- Apply 9999px border-radius only to interactive buttons and similar atomic elements like tags, creating distinct 'pill' shapes.
- All non-interactive content containers (cards, content blocks) should have 0px border-radius, reinforcing a sharp, clean aesthetic.
- Use Charcoal Surface (#1b1b1c) for primary button fills to provide a strong visual anchor without introducing chromatic color.

### Don'ts

- Avoid using drop shadows or heavy gradients; the elevation philosophy is based on content hierarchy and spatial separation, not artificial depth.
- Do not introduce color to UI elements or text beyond the defined neutral palette for brand and accent; chromatic colors are strictly decorative.
- Do not deviate from the 'sans' font family (weight 500) for body text, links, and navigation; avoid mixing font weights that are not explicitly defined.
- Never use rounded corners on cards, content sections, or layout blocks; maintain sharp, angular forms.
- Do not use subtle variations in gray tones for text that reduce contrast below AAA accessibility levels; stick to defined text colors like Pitch Black, Ash Text, or Silver Text.
- Avoid decorative imagery that competes with the bold typography; stick to abstract, monochromatic, or product-focused visuals if present.

### Layout

The site employs a max-width contained layout, centered on a Canvas White background, creating a stable and focused content area. The hero section is full-width with a dramatic, oversized headline ('disp' font) vertically centered, setting an immediate tone of prominence. Sections maintain consistent vertical spacing, often with a large sectionGap of 48px, leading to a spacious feel. Content is primarily arranged in single-column stacks or simple two-column layouts for text alongside conceptual elements. There is no grid visible for cards or features; content blocks are isolated entities, emphasizing individual messages. The navigation is a persistent top bar, sticky or otherwise always available, maintaining minimal branding and focusing on key links.

### Imagery

The visual language is characterized by an absence of traditional imagery in the main UI areas. Photography is not present. Instead, the focus is on a stark, text-dominant interface, occasionally featuring abstract graphic elements like the asterisk or arrow. When present, graphics are inline and monochromatic (Pitch Black on Canvas White), functional rather than decorative, serving to guide or symbolize concepts. The visual weight is carried almost entirely by typography.
