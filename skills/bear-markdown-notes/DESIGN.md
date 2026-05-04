---
version: alpha
name: Bear Markdown Notes
description: This system evokes clarity and approachability, like a crisp page from a digital notebook. Its light, airy aesthetic is built on a high-contrast palette of near-achromatic grays and subtle background tints, punctuated by a single vibrant red for brand presence and interactive elements. Soft 8px corner radii on interactive components and a few larger 16px/40px organic shapes add a friendly, understated warmth to the otherwise precise informational layout. The custom sans-serif typography, with a generous body line height, ensures a comfortable reading experience, reinforcing the app's focus on content.
colors:
  bear-red: "#dd4c4f"
  blueprint-blue: "#456aa3"
  leaf-green: "#2b6451"
  orchid-pink: "#884aa8"
  content-teal: "#9fd7e4"
  highlight-yellow: "#fcb827"
  badge-blue: "#44a2e5"
  ink-black: "#444444"
  paper-white: "#ffffff"
  ash-gray: "#f3f5f7"
  divider-gray: "#d5d6d9"
  subtle-text: "#888888"
  stroke-silver: "#e6e7eb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.45
    letterSpacing: 0.31px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
    letterSpacing: 0.31px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: 0.31px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.7
    letterSpacing: 0.31px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 51px
    lineHeight: 1.1
spacing:
  elementGap: 11px
components:
  pricing-cards-free-vs-bear-pro:
    role: 
  platform-selector-tabs:
    role: 
  awards-row:
    role: 
  primary-navigation-link:
    role: Navigation
  basic-input-field:
    role: Form Element
  pro-badge-red:
    role: Indicator/Tag
  benefit-checkmark:
    role: Feature List Item
  feature-card:
    role: Content Display
  promo-badge-yellow:
    role: Indicator/Tag
  install-option-tag:
    role: Category/Indicator
---

## Overview

**North Star:** Digital Notebook Page — where every element is legible and inviting.

This system evokes clarity and approachability, like a crisp page from a digital notebook. Its light, airy aesthetic is built on a high-contrast palette of near-achromatic grays and subtle background tints, punctuated by a single vibrant red for brand presence and interactive elements. Soft 8px corner radii on interactive components and a few larger 16px/40px organic shapes add a friendly, understated warmth to the otherwise precise informational layout. The custom sans-serif typography, with a generous body line height, ensures a comfortable reading experience, reinforcing the app's focus on content.

### Do's

- Use Bear Red (#dd4c4f) exclusively for primary calls-to-action, active states, and brand highlights.
- Maintain a clear visual hierarchy with Ink Black (#444444) for primary text and Subtle Text (#888888) for secondary information.
- Apply an 8px border-radius to interactive elements like buttons and input fields for a consistent, soft touch.
- Employ bearsans for all body text and UI elements at 400 weight, ensuring the 0.031em letter spacing is consistent for legibility.
- Utilize Paper White (#ffffff) as the primary background and Ash Gray (#f3f5f7) for subtle section differentiation.
- Ensure generous line heights (e.g., 1.45 at 16px) for all body text (`bearsans`) to enhance readability.
- Use a vertical element gap of 11px for most stacked items to maintain 'comfortable' density.

### Don'ts

- Do not introduce new vibrant colors outside of the defined brand and semantic palette; rely on the neutral scale for structure.
- Avoid box shadows on non-interactive elements, reserving rgba(0, 0, 0, 0.12) 0px 13px 34px 0px for elevated feature cards only.
- Do not use letter spacing on `bearsansheadline` as it is explicitly set to `normal`.
- Avoid using bold or heavy weights for headlines; use bearsansheadline at 400 weight to maintain the light visual tone.
- Do not use dark backgrounds for sections, maintaining the light theme across all content areas.
- Avoid overly tight typography; the standard `letterSpacing: 0.031em` on `bearsans` is critical for its open feel.
- Do not introduce square corners; the soft radii are an important part of the brand's friendly visual language.

### Layout

The layout is predominantly a max-width centered design, constrained to 960px, providing a focused, article-like reading experience. The hero section features a large, centered headline over a white background, with calls-to-action. Sections below are typically alternating blocks of text-left/image-right compositions or reversed, creating a rhythmic flow down the page. Feature lists often use two-column layouts. Vertical spacing between sections is generous, around 48px to 64px, contributing to an open, uncrowded feel. The navigation is a fixed top bar with branding on the left and primary links on the right, maintaining simplicity.

### Imagery

The site's imagery strategy focuses on product screenshots and abstract, playful illustrations, with minimal use of photography. Product screenshots are typically high-fidelity, showing the app UI clearly, often positioned within a device mockup (MacBook). These are sometimes slightly elevated with subtle shadows. Illustrations are flat, line-based, and whimsical (e.g., the astronaut in the lower section), using a monochromatic palette or subtle tints of blues and greens, serving a decorative and atmospheric role rather than explanatory. Icons are filled and monochromatic, predominantly Ink Black (#444444) or Subtle Text (#888888), used sparingly to aid navigation and highlight features. The density is moderate; imagery provides visual breaks and enhances key sections without overwhelming the text-dominant layout.
