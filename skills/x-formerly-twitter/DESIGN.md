---
version: alpha
name: X (formerly Twitter)
description: X (formerly Twitter) employs a high-contrast, functionally driven design system built on a monochrome base with a singular, vivid blue accent. Content takes precedence, rendered against crisp white and subtle gray surfaces, defined by thin borders and minimal elevation. Typography is compact and precise, maintaining a dense information flow, while rounded corners provide a subtle approachability to functional elements like buttons and cards.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  puck-blue: "#1d9bf0"
  slate-gray: "#536471"
  mist: "#eff3f4"
  border-silver: "#cfd9de"
  near-black: "#0f1419"
  whisper-gray: "#e0e4e7"
  shadowed-button: "#4b4f53"
  muted-navigation-text: "#829aab"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.23
    letterSpacing: 0px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.09
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 0.8
    letterSpacing: 0px
spacing:
  cardRadius: 16px
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 40px
components:
  text-only-button:
    role: Neutral, interactive text-based button.
  subtle-text-button:
    role: Subtly darker text button for secondary actions.
  outlined-button:
    role: Ghost button with a neutral border.
  primary-action-button:
    role: Calls to action with brand emphasis.
  ghost-card:
    role: Content container with minimal visual separation from the background.
  profile-header-card:
    role: Card with pronounced rounded corners for profile details.
  feed-item-card:
    role: Standard post or feed item container.
  global-navigation-bar:
    role: Sticky bottom bar for primary actions.
---

## Overview

**North Star:** High-contrast information stream

X (formerly Twitter) employs a high-contrast, functionally driven design system built on a monochrome base with a singular, vivid blue accent. Content takes precedence, rendered against crisp white and subtle gray surfaces, defined by thin borders and minimal elevation. Typography is compact and precise, maintaining a dense information flow, while rounded corners provide a subtle approachability to functional elements like buttons and cards.

### Do's

- Use Midnight Ink (#000000) for all primary text and headings to ensure maximum contrast.
- Apply Puck Blue (#1d9bf0) exclusively for primary action buttons, active states, and brand iconography.
- Utilize 9999px border-radius for all interactive buttons, profile avatars, and social links to maintain a fluid, rounded aesthetic.
- Maintain a clear visual hierarchy with Canvas White (#ffffff) for primary content surfaces and Mist (#eff3f4) for subtle background distinctions.
- Enforce a base unit of 4px for all spacing decisions, translating to common increments like 4px, 8px, 12px, and 16px for clear rhythm.
- Employ the TwitterChirp font for all UI elements, utilizing its varying weights (400, 500, 700, 800) to indicate hierarchy without size changes where appropriate.
- Frame content within a pageMaxWidth of 1070px for optimal readability and balanced composition on larger screens.

### Don'ts

- Do not introduce new chromatic colors; adhere strictly to the Puck Blue (#1d9bf0) as the sole accent color.
- Avoid heavy shadows or gradients; the system prefers subtle elevation with Whisper Gray (#e0e4e7) or thin Border Silver (#cfd9de) outlines.
- Do not deviate from the specified font sizes and line heights for TwitterChirp to preserve the compact and high-density information display.
- Never use Times or any other serif font for primary UI text; it is reserved for system fallback or specific legacy contexts.
- Avoid applying large, decorative radii to content cards unless specifically defined, maintaining a 16px radius for standard content blocks.
- Do not cluster elements excessively; ensure a minimum elementGap of 4px to maintain visual breathing room.
- Resist using bold headlines universally; instead, leverage TwitterChirp's range of weights and the designated type scale to create nuanced visual hierarchy.

### Layout

The page structure follows a max-width contained model of 1070px, with content centered. The hero section is characterized by a prominent user banner, followed by a profile header and a tabbed navigation. Content sections (feed items) flow vertically, each acting as a distinct card with internal padding. A sticky global navigation bar is present at the bottom of the viewport, providing persistent access to primary actions. The layout is dense, prioritizing information display with compact vertical rhythm, rather than spacious arrangements.

### Imagery

This system primarily uses embedded media (videos, images) and user avatars, often unstyled or with default system treatments. Product screenshots and user-generated content are showcased directly. Icons are flat, monochrome, and filled, primarily in Slate Gray (#536471) or Puck Blue (#1d9bf0) for functional indicators. The density of imagery is high, with media often taking up significant visual space within the content stream, contributing to an information-rich visual experience rather than a decorative one.
