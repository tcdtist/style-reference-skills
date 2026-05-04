---
version: alpha
name: Smiling Wolf
description: Smiling Wolf employs a minimalist, high-contrast aesthetic reminiscent of print editorial design. A stark visual dialogue between near-black and off-white creates a sense of gravitas and directness. Typography, featuring custom fonts, is treated with precision, utilizing subtle letter-spacing adjustments and specific ligatures to convey detail and craft. The UI is largely monochromatic, relying on robust typographic hierarchy and precise spacing to define structure rather than color or extensive visual ornamentation. Components are understated, often presented as text-based interactive elements or subtle outlined cards.
colors:
  ink-black: "#000000"
  paper-white: "#f7f3f0"
  charcoal: "#131713"
  muted-ash: "#bebcb9"
  stone-gray: "#858582"
typography:
  label:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.6
    letterSpacing: 1px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0.14px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.15
    letterSpacing: 0.2px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 59px
    lineHeight: 1
    letterSpacing: -0.59px
  display:
    fontFamily: "system-ui"
    fontSize: 63px
    lineHeight: 0.98
    letterSpacing: -1.26px
spacing:
  cardRadius: 4px
  buttonRadius: 4px
  elementGap: 10px
  sectionGap: 60px
components:
  text-link:
    role: Navigation, inline actions, and footer links
  ghost-button:
    role: Secondary calls to action and interactive elements displayed as text links with subtle borders.
  footer-item:
    role: Structured list items in the footer
  featured-project-card:
    role: Showcasing project previews
  navigation-bar:
    role: Main site navigation
---

## Overview

**North Star:** monochromatic editorial precision

Smiling Wolf employs a minimalist, high-contrast aesthetic reminiscent of print editorial design. A stark visual dialogue between near-black and off-white creates a sense of gravitas and directness. Typography, featuring custom fonts, is treated with precision, utilizing subtle letter-spacing adjustments and specific ligatures to convey detail and craft. The UI is largely monochromatic, relying on robust typographic hierarchy and precise spacing to define structure rather than color or extensive visual ornamentation. Components are understated, often presented as text-based interactive elements or subtle outlined cards.

### Do's

- Use Ink Black (#000000) for primary text on Paper White (#f7f3f0) backgrounds and Paper White (#f7f3f0) on Charcoal (#131713) backgrounds to maintain high contrast.
- Apply `Bagoss Standard` `letter-spacing: -0.0100em` for all large headings (59px and 63px) to create a tight, editorial feel.
- Maintain a default border radius of 4px for all interactive elements and media containers.
- Implement consistent vertical spacing of 60px between major sections to ensure ample breathing room.
- Use `General Grotesque Mono` with `letter-spacing: 0.1000em` for small utilitarian text like tags or meta information to enhance legibility at small sizes.
- Utilize a ghost button style with a 1px Ink Black (#000000) border for secondary actions, avoiding filled buttons unless explicitly defined.

### Don'ts

- Avoid arbitrary color usage; stick to the defined black, white, and gray palette for UI elements.
- Do not use generic sans-serif fonts for headlines; `Bagoss Standard` is essential for brand identity.
- Resist adding unnecessary shadows or complex gradients; the design relies on flat surfaces and high contrast.
- Do not vary border radii; a consistent 4px radius is applied across all shapely elements.
- Avoid tight vertical spacing in sections; ensure a minimum `sectionGap` of 60px.
- Do not introduce strong accent colors for interactive elements unless proven by explicit brand guidelines outside this system. The system uses achromatic feedback.

### Layout

The page primarily employs a max-width contained layout, though specific sections (like the 'Work with us' section) can be full-bleed with a dark background. The hero section features a centered, large headline over a dark background. Content arrangement often utilizes contrasting background blocks, with text-heavy sections or lists having defined vertical rhythm. A fluid column-based layout is implied for project showcases, adapting to available space for image and description blocks. The navigation is a sticky top bar with minimal links and a footer that uses a stacked, bordered list of links.

### Imagery

This site predominantly uses embedded product images and stylized photography within content areas rather than large decorative hero visuals. Imagery, when present, tends to be contained and presented with a 4px border radius. There's a suggestive use of highly stylized visual content in project showcases, often with a subtle desaturated or tinted quality, making the UI itself the primary visual focus. Icons are minimalistic, likely outline-based, colored with Ink Black.
