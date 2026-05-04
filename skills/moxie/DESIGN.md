---
version: alpha
name: Moxie
description: Moxie embraces a dark, atmospheric interface where rich blacks and deep grays provide a dramatic backdrop for subtle typography and a singular, vivid blue accent. Content appears on soft, low-contrast surfaces, outlined by fine borders, creating a quiet depth rather than sharp separation. Typography is a deliberate interplay of classic serifs for impact and clean sans-serifs for detail, all rendered in a warm, near-white hue that feels inviting against the dark theme. The overall aesthetic is one of understated authority, with controlled bursts of color for key interactive elements.
colors:
  background-ink: "#000000"
  parchment-white: "#f4efd4"
  twilight-gray: "#626055"
  deep-shadow: "#333333"
  authority-blue: "#84acfb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.1
  display-sm:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 55px
    lineHeight: 1.1
spacing:
  cardRadius: 13.8417px
  buttonRadius: 1000px
  elementGap: 21px
  sectionGap: 107px
components:
  primary-action-button:
    role: Interactive element
  ghost-outline-button:
    role: Interactive element
  soft-border-card:
    role: Content container
  client-logo-card:
    role: Display brand logos
  quote-card:
    role: Testimonial display
---

## Overview

**North Star:** Midnight velvet, shimmering ink

Moxie embraces a dark, atmospheric interface where rich blacks and deep grays provide a dramatic backdrop for subtle typography and a singular, vivid blue accent. Content appears on soft, low-contrast surfaces, outlined by fine borders, creating a quiet depth rather than sharp separation. Typography is a deliberate interplay of classic serifs for impact and clean sans-serifs for detail, all rendered in a warm, near-white hue that feels inviting against the dark theme. The overall aesthetic is one of understated authority, with controlled bursts of color for key interactive elements.

### Do's

- Prioritize 'Background Ink' (#000000) for all page backgrounds to maintain the deep, dark aesthetic.
- Use 'Parchment White' (#f4efd4) for primary text and icon elements across the interface.
- Apply IBM Plex Serif with a weight of 300 for headlines to achieve an understated, elegant authority.
- Employ the 'Authority Blue' (#84acfb) exclusively for primary interactive elements, such as button backgrounds and key accents, to create high-impact punctuation.
- Utilize a 1000px border-radius for all interactive buttons and tags to ensure a consistent pill-shaped appearance.
- Maintain comfortable density by using 19px for card padding and 21px for element gaps.
- Outline content cards and sections with subtle borders in 'Twilight Gray' (#626055) or 'Parchment White' (#f4efd4) rather than using strong background fills.

### Don'ts

- Avoid using bright or overly saturated colors beyond 'Authority Blue' to prevent distracting from the dark, sophisticated palette.
- Do not use heavy box shadows; the system relies on subtle borders and transparent fills for depth.
- Refrain from using bold or heavy weights for IBM Plex Serif headlines; the system's impact comes from lightness and restraint.
- Do not introduce additional sans-serif fonts; stick to IBM Plex Sans for all functional text.
- Avoid large blocks of filled background colors for cards or content sections; prefer transparent or subtly bordered containers.
- Do not deviate from the defined border radii; maintain 1000px for buttons and tags, and 13.84px/8.65px for cards.
- Do not use generic system greys; ensure all achromatic elements align with 'Parchment White','Twilight Gray', or 'Deep Shadow'.

### Layout

The page primarily uses a full-bleed dark background and a centered content area with varying widths. The hero section features a large, centered headline (IBM Plex Serif) over an unadorned dark expanse, immediately establishing the brand's quiet authority. Subsequent sections alternate between full-width presentations (like client logos) and more structured content blocks, often laid out with alternating text-left/visual-right patterns. Testimonials are presented in a horizontal scroll arrangement of transparent cards with subtle borders. Vertical spacing between sections is generous, contributing to a spacious feel despite the content density. Navigation is a minimal top bar with a hamburger menu and a single 'Become a Client' button, reinforcing the uncluttered aesthetic.

### Imagery

The site uses minimal imagery, primarily relying on embedded videos or product shots within framed containers. When present, images are contained within cards, often with rounded corners or subtle borders, blending into the dark interface without harsh edges. There's an implied focus on product showcases or testimonials through video content, rather than decorative photography. Icons are outlined, typically monochrome using 'Parchment White', with thin stroke weights, providing functional clarity without visual clutter. The density is image-light, text-dominant, with visuals serving an explanatory or evidence-based role.
