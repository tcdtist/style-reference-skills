---
version: alpha
name: Portfolio Cyd Stumpel
description: Cyd Stumpel's portfolio site evokes a whimsical, hand-crafted feel with its warm, off-white canvas and playful, misaligned elements. It balances robust typography with expressive, varied accent colors, creating an atmosphere that feels both professional and approachable. Borders and shadows are frequently used as decorative accents rather than functional separators, adding to a layered, almost scrapbook-like quality. The system prioritizes personality and visual delight over strict grid adherence or minimalist austerity.
colors:
  seashell-canvas: "#fff5ee"
  midnight-ink: "#111111"
  dusty-charcoal: "#6d6d6d"
  blush-pink: "#fee9e6"
  creative-red: "#d9533f"
  tangerine-tango: "#f13e3e"
  vivid-cerulean: "#1e61bf"
  electric-pink: "#e80055"
  golden-rod: "#946800"
  lime-spritz: "#e2fc91"
  deep-plum: "#a382ff"
  forest-green: "#87935b"
  dark-forest: "#152918"
  espresso: "#3b323d"
  vivid-red: "#d80a0a"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
    letterSpacing: -0.6px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: -0.81px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.36px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.1
    letterSpacing: -0.988px
  display:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 1
    letterSpacing: -2.28px
spacing:
  cardRadius: 16px
  buttonRadius: 64px
  elementGap: 8px
  sectionGap: 50px
components:
  ghost-border-button-creative-red:
    role: Secondary action button, tags, navigation items
  filled-tag-button-creative-red:
    role: Primary action tag button
  filled-tag-button-electric-pink:
    role: Accent tag button
  filled-tag-button-dusty-charcoal:
    role: Neutral tag button
  basic-content-card:
    role: Content grouping, blog posts
  blush-content-card:
    role: Informational content container
  offset-shadow-card-creative-red:
    role: Highlighting specific content, callout boxes
  geometric-media-card:
    role: Image/video display with irregular shapes
  small-text-input-label:
    role: Form labels
---

## Overview

**North Star:** Warm, playful workshop.

Cyd Stumpel's portfolio site evokes a whimsical, hand-crafted feel with its warm, off-white canvas and playful, misaligned elements. It balances robust typography with expressive, varied accent colors, creating an atmosphere that feels both professional and approachable. Borders and shadows are frequently used as decorative accents rather than functional separators, adding to a layered, almost scrapbook-like quality. The system prioritizes personality and visual delight over strict grid adherence or minimalist austerity.

### Do's

- Use Seashell Canvas (#fff5ee) as the primary page and surface background color.
- Apply Midnight Ink (#111111) for all main headings and body text to ensure contrast.
- Utilize Creative Red (#d9533f) as the core accent for interactive elements, primary button borders, and key visual highlights or shadows.
- Form button and tag shapes with a generous 64px or 28px border-radius for distinct, soft edges.
- Employ Geist font at 12px for small, functional text such as tags and metadata, with letter-spacing of -0.05em.
- Create visual hierarchy and playfulness using offset box-shadows, particularly the Creative Red -4px 4px 0px 0px variant for cards.
- Favor Bueno for general body text and UI elements, varying weights from 400 to 700 to establish internal hierarchy without changing font families.

### Don'ts

- Avoid strictly symmetrical layouts; embrace slight misalignments and playful element positioning.
- Do not use generic gray borders; instead, use programmatic accent colors or offset shadows to delineate elements.
- Refrain from stark white backgrounds; maintain the warm, slightly tinted palette of Seashell Canvas and Blush Pink.
- Do not use subtle, soft drop shadows; instead, apply hard-edged, offset box-shadows or no shadows at all.
- Avoid excessive use of system default fonts; stick to Bueno, Instrument Serif, and Geist for all typographic needs.
- Do not create highly structured, rigid design components; allow for organic shapes and varied radii, like the 120px radius cards.
- Do not centralize elements by default; consider asymmetric compositions or subtle offsets for a more dynamic feel.

### Layout

The page structure features a full-bleed canvas of Seashell Canvas, with content primarily contained and centered, allowing for playful overlaps and asymmetrical elements. The hero section uses large, decorative typography overlapping an illustration and a headshot, establishing an immediate sense of personality. Sections often feature alternating visual patterns, such as a large text block alongside a column of custom-shaped media cards. The 'Latest blogs' section uses a strict 3-column grid for Blush Content Cards, breaking the organic flow with structured content. Navigation is a minimal, top-right header with text links, while the footer mimics this simplified approach. Overall density is balanced by generous line spacing and visual breathing room, counteracting the layered and sometimes overlapping nature of individual components.

### Imagery

The site uses a mix of dynamic, illustrative elements and high-quality photography/video. Illustrations are abstract and playful, such as the 'items in a box' graphic, adding whimsy. Photography features portraits and product-focused shots, often contained within irregularly shaped (120px radius) cards with solid color backgrounds like Deep Plum or Dark Forest, giving them a non-standard, artistic presentation. Icons are outlined, bold, and sometimes filled with accent colors like Lime Spritz, serving both decorative and explanatory roles. The density of imagery is balanced to break up text-heavy sections and add personality.
