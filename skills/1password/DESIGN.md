---
version: alpha
name: 1Password
description: The design feels like a high-security airlock transitioning into a well-lit control room. An immersive, deep-space dark hero (#1D1D21) establishes a serious, secure atmosphere, which gives way to crisp white (#FFFFFF) content sections focused on informational clarity. The signature brand blue (#145FE4) is used exclusively for calls-to-action and active states, acting like an indicator light confirming interaction. Typography is a key differentiator; the custom font `agileSans` at large sizes with tight negative letter-spacing creates dense, architectural headlines. Buttons are distinctly full-pill (9999px radius), contrasting with the generally sharp, un-rounded cards, creating a focused tension between interactive and container elements.
colors:
  brand-blue: "#145fe4"
  hero-fade: "#145fe4"
  white: "#ffffff"
  onyx: "#000000"
  deep-space: "#1d1d21"
  void: "#242529"
  graphite: "#303136"
  ash: "#d7d7db"
  warning-tan: "#cbb88"
typography:
  caption:
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
    lineHeight: 1.43
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.74px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -1.1px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.1
    letterSpacing: -1.47px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 1.1
    letterSpacing: -2.02px
spacing:
  cardRadius: 16px
  buttonRadius: 9999px
  elementGap: 8-16px
  sectionGap: 80-120px
components:
  button-group-primary-secondary-ctas:
    role: 
  business-personal-toggle:
    role: 
  feature-cards-discover-secure-audit:
    role: 
  primary-cta-button:
    role: The main call-to-action.
  secondary-cta-button:
    role: A secondary call-to-action, typically used on dark backgrounds.
  integration-list-item:
    role: Represents a linked third-party service in a list.
  business-personal-toggle:
    role: Switches between two primary user segments.
  navigation-header:
    role: Sticky header for primary site navigation.
  interactive-text-link:
    role: An in-text link to another page or section.
  announcement-banner:
    role: A site-wide, non-critical notification at the top of the page.
---

## Overview

**North Star:** Secure Airlock Behind Glass. A system that moves from the protective dark of an airlock to the bright clarity of a control room.

The design feels like a high-security airlock transitioning into a well-lit control room. An immersive, deep-space dark hero (#1D1D21) establishes a serious, secure atmosphere, which gives way to crisp white (#FFFFFF) content sections focused on informational clarity. The signature brand blue (#145FE4) is used exclusively for calls-to-action and active states, acting like an indicator light confirming interaction. Typography is a key differentiator; the custom font `agileSans` at large sizes with tight negative letter-spacing creates dense, architectural headlines. Buttons are distinctly full-pill (9999px radius), contrasting with the generally sharp, un-rounded cards, creating a focused tension between interactive and container elements.

### Do's

- Use Brand Blue (#145fe4) exclusively for primary CTAs, links, and active state indicators.
- Apply tight negative letter-spacing (-1px to -2px) to all headlines (48px and larger).
- Employ 9999px radius for all buttons to create the signature pill shape.
- Contrast fully-rounded buttons with modestly rounded cards (16px) and list items (8px).
- Use the Deep Space (#1d1d21) to Brand Blue gradient solely for hero sections.
- Maintain a clear visual hierarchy with generous vertical spacing between sections (80px+).
- Use Agile Sans for all typography to maintain brand consistency.

### Don'ts

- Do not use Brand Blue for static headlines or body text.
- Avoid using rounded corners on main layout containers; reserve rounding for interactive elements and cards.
- Do not apply shadows to buttons or in-line elements.
- Avoid introducing new saturated colors; the palette is intentionally monochrome with a single blue accent.
- Do not use system fonts for headings; the custom font is a critical brand element.
- Avoid small padding on cards; use a minimum of 24px to ensure they feel spacious.
- Do not use outlines on primary filled buttons.

### Layout

Starts with a full-bleed, viewport-height hero section featuring a centered headline stack over a dark gradient background. The main content that follows is contained within a centered max-width layout (~1200px) on a white background. Sections alternate between centered headline blocks, 3-column feature card grids, and 2-column text-and-image blocks. The navigation header is sticky, starting transparent over the hero and transitioning to a solid white with a bottom border upon scrolling.

### Imagery

The visual language is product-centric and informational. It primarily uses clean product UI screenshots, often contained within abstract shapes or simplified browser chrome. There is no lifestyle photography. Icons are monochrome and line-style. A grid of grayscale customer logos provides social proof. The overall approach is to use visuals to explain functionality and build trust, not to create abstract mood.
