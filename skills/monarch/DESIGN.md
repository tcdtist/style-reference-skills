---
version: alpha
name: Monarch
description: Monarch presents a financial platform with a comfortable, professional aesthetic. It pairs a warm, inviting orange as its primary accent with a clean, light canvas, creating an approachable yet authoritative feel. Typography uses a custom serif for headlines, conveying trust, while a modern sans-serif offers crisp product information. Components are subtly elevated with rounded corners and soft shadows for a tactile, user-friendly experience.
colors:
  monarch-flame: "#ff692d"
  burnt-orange: "#f35b16"
  sunny-glow: "#ffbc0b"
  crimson-ember-gradient: "#e5484d"
  porcelain-white: "#ffffff"
  canvas-oat: "#efecea"
  slate-border: "#dcd9d6"
  deep-charcoal: "#22201d"
  muted-stone: "#777573"
  light-gray-icons: "#cccccc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.05px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.012px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.012px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.067px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -0.06px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.05px
spacing:
  cardRadius: 12px
  buttonRadius: 9999px
  elementGap: 16px
  sectionGap: 64px
components:
  primary-action-button:
    role: Call to action
  secondary-ghost-button:
    role: Alternative action
  navigation-link-button:
    role: Navigation and internal links
  canvas-card:
    role: Content grouping
  subtle-canvas-card:
    role: Content grouping (light emphasis)
  app-screenshot-card:
    role: Product detail showcase
  sectional-card-with-shadow:
    role: Elevated content block
---

## Overview

**North Star:** Warm, confident financial clarity

Monarch presents a financial platform with a comfortable, professional aesthetic. It pairs a warm, inviting orange as its primary accent with a clean, light canvas, creating an approachable yet authoritative feel. Typography uses a custom serif for headlines, conveying trust, while a modern sans-serif offers crisp product information. Components are subtly elevated with rounded corners and soft shadows for a tactile, user-friendly experience.

### Do's

- Use Monarch Flame (#ff692d) exclusively for primary calls to action or key brand highlights.
- Apply Deep Charcoal (#22201d) for all primary body text and headings to ensure strong readability.
- Employ Copernicus font weight 350 for all page-level headlines to maintain a refined and established tone.
- Always use a 9999px border-radius for buttons and navigation items to convey a soft, approachable feel.
- Distribute content vertically using 'sectionGap' at 64px to provide ample breathing room between major content blocks.
- Utilize Canvas Oat (#efecea) as the dominant page background color for all main content sections outside of the hero.
- Ensure input fields and secondary elements use a Slate Border (#dcd9d6) with a 1px solid stroke.

### Don'ts

- Do not use Monarch Flame (#ff692d) for general text or borders; reserve it for functional components.
- Avoid using multiple serif fonts for headlines; Copernicus is the designated serif heading font.
- Do not use dark backgrounds for main content areas; maintain a light theme dominant with Canvas Oat and Porcelain White.
- Never apply harsh or overly dark shadows; stick to the specified soft elevation styles for subtle depth.
- Do not deviate from the established spacing scale; maintain comfortable density with 'elementGap' at 16px and 'cardPadding' at 24px.
- Avoid sharp corners on interactive elements and cards; enforce 9999px for buttons and 8px/12px for cards.
- Do not use the Crimson Ember Gradient for anything other than header banners or specific promotional calls due to its intensity.

### Layout

The page primarily uses a max-width contained layout, though the initial hero section spans full-bleed with a dark background. The hero features a large, centered headline over a background image with frosted product UI overlays. Subsequent sections alternate between a light Canvas Oat (#efecea) and Porcelain White (#ffffff) background, creating a visual rhythm. Content is arranged in flexible patterns, including centered stacked text blocks and alternating two-column layouts (text on left, product visual on right). A 3-column card grid is used for feature presentation. The overall density is comfortable, with generous vertical spacing between sections. Navigation is primarily a sticky top bar with clearly labeled links and distinct sign-in/sign-up buttons.

### Imagery

The site uses a combination of stock photography featuring people in a casual, warm setting, paired with abstract, data-visualization-like UI overlays. Product screenshots of the Monarch app are presented on soft, neutral background cards or within simulated device frames, always in a contained and isolated manner. Iconography is minimalist, often monochrome in Deep Charcoal or Slate Border, with occasional accents of Monarch Flame or Sunny Glow for emphasis. The imagery serves both decorative atmosphere (lifestyle photos) and clear explanatory content (product UIs), maintaining a balance between human connection and financial clarity.
