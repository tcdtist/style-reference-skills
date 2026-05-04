---
version: alpha
name: Craftwork
description: This system projects an organized, creatively fertile atmosphere. Dominant crisp white backgrounds allow bold black typography to stand out, reminiscent of ink on paper. Subtle charcoal-tinted shadows lift elements just enough to define hierarchy without visual weight. The only saturated hue, vibrant lime green, serves as a focused accent, guiding user interaction like a highlighter on a blueprint, while soft, organic radial gradients add a touch of playful depth.
colors:
  pitch-black: "#000000"
  cloud-white: "#ffffff"
  slate-gray: "#606060"
  ash-gray: "#999999"
  whisper-gray: "#f9f9f9"
  smoke-gray: "#f2f2f2"
  silver-mist: "#dee0e3"
  jet-black: "#1e1e1"
  electric-lime: "#cafc00"
  fuchsia-burst: "#df04e3"
  violet-splash: "#c42df9"
  warning-orange: "#f54911"
  sky-blue: "#53c1de"
  meadow-glow-top: "#b4eba0"
  meadow-glow-side: "#b4eba0"
  meadow-glow-center: "#c8faBE"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.44
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.44
    letterSpacing: -0.007px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.27
    letterSpacing: -0.018px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.13
    letterSpacing: -0.027px
  display-md:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.14
    letterSpacing: -0.04px
  display:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1.06
    letterSpacing: -0.05px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -0.069px
spacing:
  cardRadius: 10px, 33px, 9999px
  buttonRadius: 10px, 9999px
  elementGap: 4px
  sectionGap: 64px
components:
  cta-button-group:
    role: 
  filter-pill-tags:
    role: 
  testimonial-cards:
    role: 
  primary-navigation-link:
    role: Navigational elements in the top bar.
  tertiary-ghost-button:
    role: Subtle action buttons, often alongside primary actions.
  prominent-cta-button:
    role: Primary calls to action with strong visual emphasis.
  text-link-button:
    role: In-line actions or simple clickable text without a distinct background.
  pill-button:
    role: Filter tags or category selection, emphasizing choice.
  category-filter-card:
    role: Cards for displaying different categories of assets.
  search-input-field:
    role: User input for search queries.
  cookie-consent-banner:
    role: Notifying users about cookie usage.
---

## Overview

**North Star:** Crisp paper on a clean desk. A light, airy workspace where bold black text and electric lime accents pop against pristine whites and soft grays, creating an impression of organized creativity.

This system projects an organized, creatively fertile atmosphere. Dominant crisp white backgrounds allow bold black typography to stand out, reminiscent of ink on paper. Subtle charcoal-tinted shadows lift elements just enough to define hierarchy without visual weight. The only saturated hue, vibrant lime green, serves as a focused accent, guiding user interaction like a highlighter on a blueprint, while soft, organic radial gradients add a touch of playful depth.

### Do's

- Prioritize Pitch Black (#000000) for all significant text and headings to ensure maximum visual impact and contrast against light backgrounds.
- Utilize Electric Lime (#cafc00) exclusively for primary calls to action, active states, and key 'Pro Access' indicators.
- Apply Euclid Circular A with specific negative letter-spacing values (-0.0690em for 72px headlines, down to -0.0070em for 18px body text) as defined in the typography section, to maintain the brand's tight typesetting.
- Use a border-radius of 9999px for call-out buttons, tags, or small interactive elements to create a distinct pill shape.
- Employ the subtle charcoal-tinted shadows (rgba(47, 43, 67, 0.1) for inset 0px -1px 0px 0px and 0px 1px 3px 0px) to indicate clickable or interactive surfaces without heavy visual weight.
- Use Cloud White (#ffffff) and Whisper Gray (#f9f9f9) for surface backgrounds, clearly delineating content blocks while retaining an airy feel.

### Don'ts

- Do not introduce new saturated primary colors; limit the palette to Electric Lime (#cafc00), Fuchsia Burst (#df04e3), and Violet Splash (#c42df9) for accenting.
- Avoid using heavy drop shadows for elevation; instead, use the subtle rgba(47, 43, 67, 0.1) charcoal-tinted shadows or slight background color shifts like Whisper Gray (#f9f9f9) on Cloud White (#ffffff).
- Do not use generic system fonts; always specify Euclid Circular A with its defined weights and letter spacing.
- Refrain from using square or overly sharp corners for interactive elements where a 10px or 9999px radius is established as a pattern.
- Do not use the Electric Lime (#cafc00) for non-interactive content or purely decorative elements; reserve its use for actionable items.

### Layout

The page uses a maximum width containment for most content, centered on a Cloud White background, creating a spacious and structured feel. The hero section is a centered stack of a large headline, subtext, and prominent CTA buttons, usually featuring a product visualization above it. Sections follow a consistent vertical rhythm with ample spacing (e.g., inferred 'sectionGap' of 64px or more). Content is primarily arranged in centered stacks, or in clear two-column visual arrangements where text is to one side and imagery/cards to the other. Card grids (e.g., for categories or testimonials) typically appear in a flexible multi-column layout, adapting to screen size. The header is a sticky top bar with a search input, navigation, and 'Pro Access' CTA, while secondary navigation features pill-shaped category filters, further reinforcing the organized toolkit metaphor.

### Imagery

The visual language focuses on product visualization through high-quality, illustrative screenshots and product photography, often displayed within mockups (e.g., tablets, phones, monitors). These are typically contained within card-like structures, sometimes with soft rounded corners (10px). Illustrations are flat or slightly dimensional, using a mix of brand colors and neutrals, acting as decorative elements or supporting explanatory content. Icons are outline or filled, using Pitch Black or Slate Gray, with occasional Violet Splash accents. Imagery is not full-bleed but carefully placed to showcase design assets, contributing to the site's function as a resource library rather than a storytelling platform. The density is balanced, allowing both visuals and text to breathe.
