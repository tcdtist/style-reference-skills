---
version: alpha
name: Readwise
description: This design evokes the feel of a diligent academic workspace – focused and organized, with clear visual cues to guide attention. The use of a brand-specific blue for interactive elements cuts through the otherwise muted, almost off-white background and near-black text, signaling action without being overly aggressive. Highlights and key phrases stand out with a soft, muted yellow background, mimicking physical highlighters, creating a direct visual reference to core product functionality. The interplay of a custom serif font for display text against a highly legible sans-serif for body content establishes a serious yet approachable scholarly tone.
colors:
  midnight-ink: "#1f1f1f"
  page-canvas: "#ffffff"
  ash-cloud: "#f1f5f8"
  highlight-yellow: "#fff7ca"
  action-blue: "#478cd0"
  status-orange: "#fb9100"
  sky-gradient: "#7496f7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: -0.44px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.28px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.13
    letterSpacing: -0.44px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.13
  display:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1
spacing:
  cardRadius: 10px
  buttonRadius: 10px
  elementGap: 5-24px
  sectionGap: 30-35px
components:
  primary-cta-button-group:
    role: 
  how-readwise-works-feature-steps:
    role: 
  user-testimonial-cards:
    role: 
  primary-action-button:
    role: Interactive element
  navigation-link:
    role: Navigation
  highlighted-text-block:
    role: Emphasis
  hero-headline:
    role: Display
  feature-icon-block:
    role: Information display
---

## Overview

**North Star:** Scholarly Workspace Blueprint. It feels like an organized desk with a clear task list.

This design evokes the feel of a diligent academic workspace – focused and organized, with clear visual cues to guide attention. The use of a brand-specific blue for interactive elements cuts through the otherwise muted, almost off-white background and near-black text, signaling action without being overly aggressive. Highlights and key phrases stand out with a soft, muted yellow background, mimicking physical highlighters, creating a direct visual reference to core product functionality. The interplay of a custom serif font for display text against a highly legible sans-serif for body content establishes a serious yet approachable scholarly tone.

### Do's

- Use 'Action Blue' (#478cd0) exclusively for primary call-to-actions and interactive elements to maintain focus.
- Apply Charter font only for headlines (22px, 29px, 50px) to preserve its distinct visual impact.
- Maintain a 10px border-radius for all primary buttons and card-like elements to ensure visual consistency.
- Ensure ample vertical spacing between sections, leveraging 30px or 35px, to create a comfortable reading density.
- Utilize 'Highlight Yellow' (#fff7ca) only for subtle background emphasis on text, mimicking physical highlighting.

### Don'ts

- Do not use highly saturated colors for large background areas; stick to 'Page Canvas' (#ffffff) and 'Ash Cloud' (#f1f5f8).
- Avoid using Mulish for display headlines; reserve Charter for this purpose.
- Do not vary border-radius for interactive buttons; always use 10px.
- Do not introduce new color gradients; use `Sky Gradient` only where specifically defined.
- Do not apply excessive letter-spacing to Mulish; maintain its default -0.0200em.

### Layout

The page adopts a max-width centered layout, with a `pageMaxWidth` of 1440px providing containment. The hero section is full-bleed white, featuring a prominent centered headline, subtext, and a central product visual composed of device mockups. Sections maintain a consistent vertical rhythm, primarily defined by the 30-35px `sectionGap`. Content is often presented in centered stacks or simple two-column arrangements (text alongside mockups). Navigation is a sticky top bar with minimal items and a clear 'Sign In' call to action. The overall density is comfortable, allowing text and visuals to breathe without feeling sparse.

### Imagery

The site's imagery is primarily product-focused, featuring crisp screenshots of the Readwise application running on laptops and mobile devices. These are meticulously presented on white backgrounds, often slightly angled, emphasizing clarity and functionality. Icons are simple, filled, and occasionally two-toned (white on blue/orange) or line-art in 'Midnight Ink' to explain features. The overall treatment is literal and explanatory, serving to showcase the product's interface and capabilities rather than evoke an emotional response. Visual density is moderate, breaking up text blocks with relevant interface displays.
