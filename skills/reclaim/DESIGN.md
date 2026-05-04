---
version: alpha
name: Reclaim
description: This design orchestrates a friendly yet authoritative presentation through vibrant accents against a clean, spacious white backdrop. Key information is spotlighted with bold headings and a signature electric violet, while supporting details use muted tones. The frequent use of rounded corners, especially 100px pill shapes, softens the otherwise structured content, creating an approachable and modern feel for an AI-driven tool.
colors:
  white: "#ffffff"
  charcoal: "#2b2b2b"
  graphite: "#474747"
  light-steel: "#c2c4d0"
  electric-violet: "#5562eb"
  ai-green: "#7ac17b"
  zenith-gradient: "#5562eb"
  growth-gradient: "#7ac17b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.24px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.18
    letterSpacing: -0.4px
  display:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 1.05
    letterSpacing: -0.7px
spacing:
  cardRadius: 0px
  buttonRadius: 100px
  elementGap: 5-15px
  sectionGap: 40-70px
components:
  cta-button-group:
    role: 
  impact-statistics-block:
    role: 
  announcement-banner:
    role: 
  primary-pill-button:
    role: Primary call to action.
  secondary-outline-button:
    role: Secondary call to action.
  ghost-header-button:
    role: Navigation or tertiary actions in headers.
  dark-square-button:
    role: Secondary navigation or actions, offering higher contrast.
  feature-card:
    role: Highlighting product features or benefits.
  product-insight-card:
    role: Displaying key statistics or quotes.
  accent-tag:
    role: Categorization or small interactive labels.
  impact-statistic:
    role: Presenting key performance indicators with visual hierarchy.
---

## Overview

**North Star:** Vibrant AI workspace

This design orchestrates a friendly yet authoritative presentation through vibrant accents against a clean, spacious white backdrop. Key information is spotlighted with bold headings and a signature electric violet, while supporting details use muted tones. The frequent use of rounded corners, especially 100px pill shapes, softens the otherwise structured content, creating an approachable and modern feel for an AI-driven tool.

### Do's

- Always use Poppins for display headings and primary text, leveraging its -0.01em letterSpacing for a sophisticated feel.
- Apply Electric Violet (#5562eb) exclusively for primary interactive elements, such as main CTA buttons and navigation links.
- Utilize 100px border-radius for all primary buttons and image masks to maintain a consistent soft, modern touch.
- Pair AI Green (#7ac17b) with Poppins Bold for all numerical statistics or positive affirmations.
- Maintain generous vertical spacing between sections to ensure content breathe and visual comfort.
- Use Charcoal (#2b2b2b) for general paragraph text and secondary headings for clear readability against a white background.

### Don'ts

- Do not use box shadows for content cards; rely on background color changes for hierarchy when needed.
- Avoid using multiple chromatic colors for primary calls to action; reserve Electric Violet (#5562eb) for this role.
- Do not use Poppins with default letter-spacing; ensure -0.01em is applied for the consistent brand typography.
- Do not introduce square buttons unless for specific dark background contexts (like the Get Started button in the header) to avoid inconsistency with the dominant pill style.
- Do not use dark backgrounds for sections unless explicitly defined with gradient fills or for specific hero moments.
- Avoid arbitrary border-radii; stick to 0px, 10px, or 100px for consistency.

### Layout

The layout is predominantly max-width contained, centered on the page, with a pageMaxWidth implicitly around 1200px based on visual density. The hero section features a left-aligned, prominent headline over a white background, balanced by a large product screenshot on the right. Subsequent sections alternate between centered content stacks for testimonials or statistics and two-column layouts featuring text on the left and a product graphic or illustration on the right. There's a consistent vertical rhythm from varied margin-bottoms, leading to a comfortable density. The navigation is a sticky top bar with a logo, text links, and prominent pill-shaped buttons for CTAs.

### Imagery

The site uses a combination of abstract graphics and product screenshots. Product imagery features tight crops of the Reclaim UI, often presented on a clean white background with a subtle, friendly purple-tinted shadow like #ebefff. These screenshots are typically contained rather than full-bleed, showcasing the application's functionality. Icons are primarily outlined or subtle filled, using either dark neutrals or brand colors like AI Green, maintaining a clean, technical aesthetic. There are no lifestyle photos.
