---
version: alpha
name: Apollographql
description: Apollo's design system evokes a 'deep space operations center' feel, using a dark, desaturated palette with a single vibrant accent. The dominant near-black background and off-white text establish a high-contrast, technical atmosphere. Subtle use of a vivid orange for primary calls to action creates focused points of visual energy, preventing the dark interface from feeling monotonous. Sharp edges combined with deep, pill-shaped buttons introduce a tension between precision and approachability, reinforcing an infrastructure brand that is both powerful and user-friendly.
colors:
  midnight-ink: "#15252d"
  comet-dust: "#f8f8f8"
  nebula-gray: "#e2e8f0"
  crater-gray: "#9fb2bc"
  off-white-cloud: "#efefef"
  fusion-orange: "#e75e15"
  subtle-dark-gray: "#254250"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.25
  display-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.25
spacing:
  cardRadius: 24px
  buttonRadius: 999px
  elementGap: 8px
  sectionGap: 48px
components:
  hero-cta-button-group:
    role: 
  testimonial-card:
    role: 
  feature-content-card-with-buttons:
    role: 
  primary-call-to-action-button:
    role: Main interactive button
  secondary-outlined-button:
    role: Secondary action or ghost button
  tertiary-ghost-button:
    role: Text-only button for less prominent actions, often within navigation
  header-navigation-button:
    role: Navigation items with a subtle background
  hero-headline:
    role: Main page title
  hero-subheadline:
    role: Secondary text in hero section
  content-card-dark:
    role: Container for featured content
  client-logo-grid-item:
    role: Individual logo container in 'Trusted by' section
---

## Overview

**North Star:** Deep space operations center: dark, high-contrast UI with a single vibrant accent for critical actions, like indicator lights on a mission control panel.

Apollo's design system evokes a 'deep space operations center' feel, using a dark, desaturated palette with a single vibrant accent. The dominant near-black background and off-white text establish a high-contrast, technical atmosphere. Subtle use of a vivid orange for primary calls to action creates focused points of visual energy, preventing the dark interface from feeling monotonous. Sharp edges combined with deep, pill-shaped buttons introduce a tension between precision and approachability, reinforcing an infrastructure brand that is both powerful and user-friendly.

### Do's

- Prioritize Midnight Ink (#15252d) for prominent dark sections and Comet Dust (#f8f8f8) for text, ensuring high contrast (14.8:1) for readability.
- Use Fusion Orange (#e75e15) exclusively for primary calls-to-action and active states to maintain strong visual hierarchy and guide user attention.
- Apply a 999px border-radius to all buttons for a distinctive pill shape, contrasting with the 24px radius used for content cards.
- Maintain a clear content hierarchy using the Inter typeface, reserving weight 700 for display headlines and weight 400 for body text.
- Utilize 48px vertical spacing between major sections and 16px for internal card padding to establish comfortable density.
- Employ the Nebula Gray (#e2e8f0) color for all border elements to imply structure without strong visual interruption.

### Don'ts

- Do not introduce additional vibrant colors; restrict accent colors to Fusion Orange (#e75e15) to preserve visual focus.
- Avoid using harsh shadows for elevation; rely on background color changes for surface differentiation if needed, or subtle borders.
- Do not deviate from the 999px border-radius for buttons or 24px for cards; these are signature shape identifiers.
- Refrain from using monospace fonts for general body text; Fira Code (500, 18px, 0.0800em letter spacing) is strictly for code examples.
- Do not use generic gray values; always refer to defined neutrals like Midnight Ink (#15252d), Nebula Gray (#e2e8f0), or Crater Gray (#9fb2bc).
- Avoid excessive use of text treatments like underlines or italics for emphasis; hierarchy is primarily managed through font size and weight.

### Layout

The site employs a mixed layout strategy: the hero section is full-width with text and calls-to-action centered over a dark, subtly textured background. Subsequent sections alternate between a dark background for feature blocks and a light background for 'trusted by' logos and testimonials, maintaining a consistent vertical rhythm. Content within sections is often structured with a maximum width, centered, or in two-column layouts featuring text on one side and a visual element (like a video player or card) on the other. A grid-like structure is used for client logos and testimonial cards. Vertical spacing is generous, creating breathing room between content blocks. The navigation is a sticky top bar, consistent across the site, with a search icon and prominent 'Contact us' and 'Start for free' buttons.

### Imagery

The visual language for imagery is primarily functional and supportive, not decorative. It includes: product screenshots or abstract graphics (like the faint 'shooting stars' pattern in the hero and video placeholders) which are contained within distinct sections. Photography consists of small, circular profile pictures for team members and testimonials, establishing human connection without large, lifestyle imagery. Icons appear as outlined or filled, primarily serving navigation and feature explanation. The overall density is text-dominant, with imagery acting as focused visual anchors for specific content blocks rather than full-bleed atmospheric elements.
