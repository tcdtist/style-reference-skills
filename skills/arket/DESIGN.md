---
version: alpha
name: ARKET
description: This design system presents an authoritative, understated retail experience, reminiscent of a high-end editorial magazine. A monochromatic palette with a subtle emphasis on crisp typography, particularly the distinct arketSansMono, defines its core. The sparing use of an inline link blue and subtle green for indicators provides functional accents without disrupting the minimal aesthetic. Element interactions are often border-based or purely typographical, favoring a quiet visual presence over ornate decoration.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  ash-gray: "#e0e0e0"
  soft-graphite: "#666666"
  hint-of-gray: "#eaeae8"
  body-text-gray: "#767676"
  command-blue: "#3860be"
  success-green: "#38793f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.21
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.38
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.5
  display:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.88
spacing:
  buttonRadius: 2px
  elementGap: 8px
  sectionGap: 80-128px
components:
  membership-callout-modal:
    role: 
  announcement-banner:
    role: 
  editorial-article-cards:
    role: 
  primary-ghost-button:
    role: Navigation links, inline actions
  subtle-outlined-button:
    role: Secondary actions, filtering
  filled-square-button:
    role: Primary calls to action with specific borders
  filled-rounded-button:
    role: Standard calls to action
  product-card:
    role: Displaying product listings, editorial content
  callout-modal:
    role: Promotional pop-ups, membership offers
---

## Overview

**North Star:** Editorial Minimal Canvas — Think high-contrast type on stark white pages, framed by precise, almost invisible borders, allowing rich product photography to dominate.

This design system presents an authoritative, understated retail experience, reminiscent of a high-end editorial magazine. A monochromatic palette with a subtle emphasis on crisp typography, particularly the distinct arketSansMono, defines its core. The sparing use of an inline link blue and subtle green for indicators provides functional accents without disrupting the minimal aesthetic. Element interactions are often border-based or purely typographical, favoring a quiet visual presence over ornate decoration.

### Do's

- Prioritize arketSansMono (IBM Plex Mono) for almost all textual content to maintain brand consistency.
- Use Canvas White (#ffffff) as the dominant background color for all main content areas and modals.
- Implement Ink Black (#000000) for all primary text, headings, and interactive element borders for optimal contrast.
- Apply 2px border radius for buttons and 4px for input fields; almost all other elements should use 0px radius.
- Utilize 0px padding and 0px border radius for card-like elements to promote a clean, unframed aesthetic.
- Maintain comfortable element spacing, defaulting to 8px for internal element gaps and up to 16px for larger component separations.
- Employ Command Blue (#3860be) exclusively for navigation links and direct calls to action within text.

### Don'ts

- Avoid using highly saturated colors; confine chromatic accents to Command Blue (#3860be) and Success Green (#38793f) for specific functional purposes.
- Do not introduce complex shadows; stick to the single `rgba(0, 0, 0, 0.1) 0px 2px 10px 2px` for elevated containers.
- Refrain from using varied border radii across elements; adhere strictly to 0px, 2px, or 4px.
- Do not deviate from the established font families; custom typefaces are a core part of the brand identity.
- Avoid decorative background patterns or strong gradients; the design relies on clean, solid surfaces.
- Do not use generic system default link colors; all links must be styled with Command Blue (#3860be) or Ink Black (#000000) for ghost buttons.

### Layout

The page adheres to a max-width contained layout rather than full-bleed, centering content to provide clear margins. The hero section often features large photography with minimal overlay text, setting a serene mood. Sections generally maintain consistent vertical spacing between 80px and 128px, fostering a spacious rhythm. Content arrangement frequently alternates between large images and text blocks, sometimes in two-column layouts. Feature sections can employ grid-based layouts for editorial cards. Navigation is a persistent top bar, with key navigational elements and search. Density is comfortable, with ample breathing room between elements.

### Imagery

The site heavily features high-quality, editorial lifestyle photography with a muted, natural aesthetic. Images are predominantly full-bleed or large, contained within the content flow without masks, sharp edges. They serve both decorative atmosphere and product showcasing roles, being central to the content rather than supplementary. Object-focused photography, like the denim shot, is common, presenting items in a raw, authentic manner. Product photography often integrates models within realistic settings, capturing candid moments. Iconography is minimalist, outlined, and monochromatic, primarily using Ink Black.
