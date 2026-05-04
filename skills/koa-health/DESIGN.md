---
version: alpha
name: Koa Health
description: Koa Health presents a calm, structured brand identity, marrying a clinical white canvas with deep, authoritative blues. Its visual system is built on compact, precise typography that prioritizes scannability, offset by a single vivid teal as an accent color for interactive elements and subtle highlights. Component treatment is minimal, emphasizing content clarity through soft surfaces and clear borders rather than heavy-handed elevation or decorative elements. The overall aesthetic is one of understated professionalism and focused user experience.
colors:
  midnight-indigo: "#2e3fd2"
  arctic-teal: "#5ed7de"
  ebony-text: "#302625"
  canvas-white: "#ffffff"
  soft-vanilla: "#fef8f4"
  parchment-tan: "#efe0d9"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.36px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.3
    letterSpacing: 0.42px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
    letterSpacing: 0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -1.44px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.1
    letterSpacing: -1.28px
spacing:
  buttonRadius: 4px
  elementGap: 8px
  sectionGap: 80px
components:
  primary-filled-button:
    role: Key calls to action
  ghost-navigation-button:
    role: Secondary actions within navigation
  ghost-text-button:
    role: Outline/text links
  navigation-link:
    role: Primary navigation items
  feature-card-ghost:
    role: Informational content blocks
  message-bar-top:
    role: Global announcements or alerts
---

## Overview

**North Star:** Clinical clarity on white canvas

Koa Health presents a calm, structured brand identity, marrying a clinical white canvas with deep, authoritative blues. Its visual system is built on compact, precise typography that prioritizes scannability, offset by a single vivid teal as an accent color for interactive elements and subtle highlights. Component treatment is minimal, emphasizing content clarity through soft surfaces and clear borders rather than heavy-handed elevation or decorative elements. The overall aesthetic is one of understated professionalism and focused user experience.

### Do's

- Prioritize Canvas White (#ffffff) as the dominant background for body content to maintain a clean appearance.
- Use Midnight Indigo (#2e3fd2) for primary calls-to-action and significant branding elements like the footer.
- Apply Super font for all main headings (H1, H2) with weight 500 and tight letter-spacing (-1.28px at 64px, -1.44px at 48px).
- Use Surt font for body text, navigation, and detailed information, opting for lighter weights (400) for readability.
- Employ Arctic Teal (#5ed7de) as the primary accent color for active states, links, and illustrative details.
- Maintain comfortable element spacing using a base of 8px, with multiples like 16px, 24px and 40px for consistency.
- Ensure buttons use a 4px border-radius, while smaller interactive elements like tags or active navigation tabs can use a 9999px (pill) radius.

### Don'ts

- Avoid using heavy box shadows; elevation is minimal and surfaces are predominantly flat.
- Do not introduce new saturated colors outside of Midnight Indigo or Arctic Teal; maintain a controlled palette.
- Refrain from using overly decorative elements or gradients unless they are the brand's primary Midnight Indigo Gradient.
- Do not use letter-spacing on body text or standard paragraph elements, reserve custom tracking for headlines and navigation.
- Avoid large, expansive padding on components unless specifically for section breaks, promoting a denser, information-focused layout.
- Do not deviate from the established font families Surt and Super; avoid using system fonts or other typefaces.
- Avoid dark-themed sections on pages prominently displaying a light theme, except for the clearly defined footer area.

### Layout

The page primarily uses a max-width 1440px centered layout. The hero section is full-width with a significant top margin, featuring a centered headline and description. Content sections maintain consistent vertical spacing, often with text-heavy blocks, sometimes paired with illustrations or product UI shots. The footer is a full-bleed block of Midnight Indigo gradient. Navigation is a sticky top bar, accommodating an internal menu and a 'Request a meeting' button.

### Imagery

The imagery leans towards product screenshots of mobile interfaces, treated as contained, rectangular blocks without overlapping or complex masking. There's an absence of lifestyle photography, focusing instead on UI elements and information. Icons are primarily outlined, thin-stroked, and monochrome, often in Arctic Teal, serving as functional accents rather than decorative elements. The visual density of imagery is low, with text dominating most sections.
