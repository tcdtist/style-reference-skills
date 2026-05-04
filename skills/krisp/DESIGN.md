---
version: alpha
name: Krisp
description: Krisp's visual identity balances robust clarity with a subtle, dynamic energy. Dominant neutral whites and a deep, muted indigo base (#131032) provide a stable foundation, allowing a single, vivid violet accent (#614efa) to punctuate interactive elements. The type scale relies on the highly functional Plus Jakarta Sans, with an emphasis on generous line heights and subtle letter spacing for hierarchy, ensuring legibility even for dense information. Rounded elements contrast with the underlying structural precision, adding a soft, approachable quality to the technical focus.
colors:
  deep-space-indigo: "#131032"
  krisp-violet: "#614efa"
  off-white-background: "#ffffff"
  pale-gray-surface: "#f7f7f8"
  subtle-accent-teal: "#eafdfa"
  muted-gray-text: "#918f9f"
  light-gray-border: "#e7e7ea"
  vivid-red-accent: "#fe6257"
  crisp-white-text: "#ffffff"
  indigo-gradient-1: "#614efa"
  indigo-gradient-2: "#4a3bbe"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.7
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.17
  display-xl:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.14
  display-xxl:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.14
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 64-80px
components:
  tab-pill-selector-feature-card:
    role: 
  feature-cards-grid:
    role: 
  button-group-announcement-badge:
    role: 
  primary-action-button-violet-filled:
    role: Call to action
  secondary-action-button-indigo-filled:
    role: Secondary action
  pill-button-white-outlined:
    role: Tertiary action/informational link
  feature-card-white-background:
    role: Content display
  navigation-link:
    role: Primary navigation
---

## Overview

**North Star:** Deep space command console. Information-dense, with critical functions highlighted by a bright, singular light source against a dark, expansive backdrop.

Krisp's visual identity balances robust clarity with a subtle, dynamic energy. Dominant neutral whites and a deep, muted indigo base (#131032) provide a stable foundation, allowing a single, vivid violet accent (#614efa) to punctuate interactive elements. The type scale relies on the highly functional Plus Jakarta Sans, with an emphasis on generous line heights and subtle letter spacing for hierarchy, ensuring legibility even for dense information. Rounded elements contrast with the underlying structural precision, adding a soft, approachable quality to the technical focus.

### Do's

- Prioritize Plus Jakarta Sans at all weights for both headings and body text to maintain typographic consistency.
- Use Krisp Violet (#614efa) exclusively for primary call-to-action buttons and key interactive states to maximize impact.
- Establish clear hierarchy with the Deep Space Indigo (#131032) for main headings and text, and Muted Gray Text (#918f9f) for secondary descriptive copy.
- Implement a base border-radius of 8px for most interactive elements, reserving 12px for badges and 9999px for distinct pill-shaped components.
- Leverage the Crisp White Background (#ffffff) and Pale Gray Surface (#f7f7f8) to create clear visual separation between content sections.
- Employ gradients (e.g., linear-gradient(90deg, #614efa 22.93%, #62c8ff 76.42%)) for hero sections or distinct visual components to add dynamism.

### Don'ts

- Do not introduce new typefaces; rely solely on Plus Jakarta Sans.
- Avoid using highly saturated colors other than Krisp Violet (#614efa) for interactive elements, except for semantic red where appropriate.
- Do not use dark backgrounds for general page content; maintain a light theme with crisp white or pale gray surfaces.
- Avoid excessive use of drop shadows; maintain a flat aesthetic except for intentional elevation of modals or specific cards.
- Do not deviate from the established spacing scale (multiples of 4px) for padding and margins.
- Avoid non-functional decorative elements; every visual choice should serve a purpose in clarity or interaction.

### Layout

The page employs a max-width 1280px centered content model, with some hero sections extending full-bleed, particularly when using a darker background. The hero typically features a centered headline over a subtle gradient or solid background, followed by descriptive text and CTAs. Sections alternate between Crisp White and Pale Gray backgrounds, creating a clear vertical rhythm. Content is generally arranged in 2-column layouts (text alongside imagery/cards) or 3-column card grids for features. Vertical spacing between sections is generous, around 64-80px. The navigation is a sticky top bar with clearly defined links and primary/secondary action buttons.

### Imagery

The visual language focuses on abstract graphics and conceptual illustrations rather than photography. Imagery features gradients of Deep Space Indigo and Krisp Violet, often with subtle geometric patterns or soft, ethereal glows. Product screenshots, when present, are clean and tightly integrated into the UI. Icons are simple, outlined, and monochromatic, largely in Deep Space Indigo, serving an explanatory role. The overall density is balanced, allowing ample negative space around key text blocks while using graphics to enhance meaning and break visual monotony.
