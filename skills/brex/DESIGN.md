---
version: alpha
name: Brex
description: Brex's design system evokes a sense of quiet authority and precision, like a finely engineered financial instrument. It relies on a high-contrast achromatic palette for clarity, punctuated by a single vibrant orange for critical actions. The interplay of strong typography, including a custom headline font, and a disciplined use of space, crafts an experience that feels both robust and approachable, grounding complex financial offerings in visual simplicity.
colors:
  midnight-ink: "#000710"
  action-orange: "#ff5900"
  primary-text: "#000000"
  paper-white: "#ffffff"
  dark-charcoal: "#15191"
  soft-gray: "#f3f3f7"
  muted-slate: "#b9bbc6"
  cool-stone: "#60646c"
  ash-gray: "#6f737b"
  silver-pine: "#8b8d98"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.96px
spacing:
  cardRadius: 12px
  buttonRadius: 6px
  elementGap: 8-16px
  sectionGap: 48px
components:
  email-signup-cta-bar:
    role: 
  feature-product-cards-row:
    role: 
  cookie-consent-banner:
    role: 
  primary-action-button:
    role: Calls to action
  navigation-link-button:
    role: Header navigation
  ghost-button:
    role: Secondary actions, text-heavy links
  pill-navigation-tag:
    role: Category filters, secondary navigation
  text-input-underlined:
    role: Form fields
---

## Overview

**North Star:** Precision engineered toolkit — crisp, organized, and focused on clarity.

Brex's design system evokes a sense of quiet authority and precision, like a finely engineered financial instrument. It relies on a high-contrast achromatic palette for clarity, punctuated by a single vibrant orange for critical actions. The interplay of strong typography, including a custom headline font, and a disciplined use of space, crafts an experience that feels both robust and approachable, grounding complex financial offerings in visual simplicity.

### Do's

- Always use Action Orange (#ff5900) for primary call-to-action buttons, never fordecorative elements.
- Apply Soft Gray (#f3f3f7) as a background to differentiate content sections without introducing strong color.
- Employ the Flecha typeface (36px, 500 weight) exclusively for main page headlines to maintain brand distinction.
- Utilize Inter for all body text and UI labels, ensuring legibility and consistency across components.
- Maintain a clear visual hierarchy with Dark Charcoal (#15191e) for prominent text and Cool Stone (#60646c) for supporting details.
- Ensure all interactive elements have sufficient padding; a minimum of 4px vertical and 8px horizontal for small buttons, scaling up to 16px horizontal for primary CTAs.

### Don'ts

- Do not use any additional chromatic colors beyond Action Orange (#ff5900); stick to the defined neutral palette.
- Avoid arbitrary border-radius values; adhere to 6px, 8px, or 12px for components, and 0px for inputs.
- Do not use Flecha for any body text or minor headings; its distinctiveness is reserved for key messaging.
- Never use shadows on buttons or cards unless explicitly defined as part of a component style.
- Do not introduce tight letter-spacing for body text; apply negative letter-spacing only to large display typography as specified for Inter.

### Layout

The layout is predominantly a max-width contained structure, with content centered within the viewport. The hero section often features a split layout with prominent headlines and calls to action on the left, balanced by a significant product visual on the right. Below the hero, sections alternate between Paper White backgrounds and subtle Soft Gray (#f3f3f7) bands, creating a gentle vertical rhythm. Content is arranged in flexible grids, often with two or three columns for feature lists and information blocks, utilizing left-aligned text beside accompanying visuals. The navigation is a standard top-bar, fixed header with clear product and resource categorization, emphasizing direct access. Overall density is comfortable, with generous padding around content blocks preventing a cramped feel and enhancing readability.

### Imagery

The visual language focuses on sophisticated, desaturated product photography and clean UI mockups. Images are typically contained within rectangular frames, sometimes with a subtle 12px border-radius, and are frequently masked into device frames (like a smartphone or card). There is a distinct absence of lifestyle photography or complex illustrations. The imagery serves to demonstrate the product and its interface directly, emphasizing functionality and precision rather than emotive storytelling or abstract concepts. When icons are present, they are typically filled or outlined in the neutral palette. Density is moderate, with images serving as explanatory content alongside text blocks.
