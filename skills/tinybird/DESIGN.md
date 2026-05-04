---
version: alpha
name: Tinybird
description: Tinybird presents a 'data noir' aesthetic, marrying industrial-strength data tools with a sophisticated, restrained dark theme. The interplay of near-black backgrounds and pristine white text creates a high-contrast experience, punctuated by a single, vibrant green accent. Careful use of grayscale and subtle elevation on cards provides depth, ensuring critical information stands out against the dark canvas without feeling overwhelming.
colors:
  midnight-ink: "#0a0a0a"
  obsidian-slate: "#262626"
  iron-oxide: "#151515"
  deep-graphite: "#353535"
  silver-mist: "#8d8d8d"
  pure-white: "#ffffff"
  electric-green: "#27f795"
  deep-jade: "#008060"
  alert-red: "#800000"
  crimson-hue: "#ec6d62"
  goldenrod: "#f5c451"
  leaf-green: "#61c454"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.78
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.57
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.57
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.67
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  display-sm:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -0.084px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.13
    letterSpacing: -0.02px
spacing:
  cardRadius: 8px
  buttonRadius: 0px
  elementGap: 8px
components:
  cta-button-group:
    role: 
  use-case-tag-selector:
    role: 
  testimonial-card-grid:
    role: 
  primary-cta-button:
    role: Call to action
  ghost-navigation-link:
    role: Navigation
  badge-button:
    role: Categorization/Tagging
  disabled-secondary-ghost-link:
    role: Navigation/Low-priority action
  sign-up-button:
    role: Navigation/Action
  sign-in-button:
    role: Navigation/Action
  client-logo-grid-item:
    role: Brand endorsement display
---

## Overview

**North Star:** Data noir interface — high contrast text and a single, electric green highlight on a deep, almost black background.

Tinybird presents a 'data noir' aesthetic, marrying industrial-strength data tools with a sophisticated, restrained dark theme. The interplay of near-black backgrounds and pristine white text creates a high-contrast experience, punctuated by a single, vibrant green accent. Careful use of grayscale and subtle elevation on cards provides depth, ensuring critical information stands out against the dark canvas without feeling overwhelming.

### Do's

- Use Midnight Ink (#0a0a0a) for all primary page backgrounds to maintain the brand's 'data noir' aesthetic.
- Apply Electric Green (#27f795) exclusively for primary calls-to-action and active states to ensure high impact and clear signaling.
- Utilize Roboto at weight 400 for all body copy and default text at 14px with lineHeight 1.57 for maximum readability.
- Reserve Roboto Mono for all data points, code blocks, and technical figures, specifically at 56px with -0.0840em letter-spacing for large numbers.
- Implement 0px border-radius for all primary buttons to convey a direct, precise interaction model.
- Maintain a clear hierarchy with Pure White (#ffffff) for primary text and Silver Mist (#8d8d8d) for secondary or supporting text.
- Employ Obsidian Slate (#262626) with an 8px border-radius for card backgrounds to visually separate content blocks from the main background.

### Don'ts

- Do not introduce additional saturated colors; Electric Green (#27f795) is the singular brand accent.
- Avoid decorative shadows or excessive elevation; depth is created through varying shades of gray and card backgrounds.
- Do not use letter-spacing on body text; apply tight letter-spacing (-0.0200em or -0.0840em) only to display headings and technical text fields.
- Never use rounded buttons or pill shapes; all interactive elements should maintain sharp corners unless specifically designated for cards (8px).
- Avoid light backgrounds; the design system is strictly dark-mode first.
- Do not use generic system fonts for data or code; Roboto Mono is mandated for technical content to ensure distinction.
- Refrain from using gratuitous iconography; only use icons when they serve a clear functional purpose, maintaining the minimal aesthetic.

### Layout

The layout is primarily centered and contained, with a max-width approach implied by content blocks, although the main background is full-bleed Midnight Ink. The hero section is full-bleed dark with a prominent, centered headline and subtext, followed by centered CTA buttons. Sections alternate between dense information blocks, often with client logos in a grid, and testimonial cards that adopt a card grid structure. Vertical spacing between sections is generous and irregular, ranging from 136px to 456px, creating a comfortable rhythm. Navigation is a sticky top bar with left-aligned brand icon and right-aligned text links and CTA buttons.

### Imagery

The site's visual language is text-dominant, with imagery appearing primarily as product-focused illustrations or iconographic elements. Where present, visuals are stark and clean: client logos are monochrome, either Pure White or Silver Mist against the dark background. Abstract graphics are geometric and align with a data visualization aesthetic. There are no photographs. The overall impression is one of pure UI, where information and code are the primary visual content, accented by minimalist, functional graphics that support the technical narrative.
