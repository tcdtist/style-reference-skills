---
version: alpha
name: WRITER
description: WRITER presents an authoritative yet approachable aesthetic, balancing corporate seriousness with a touch of AI-infused futurism. The design prioritizes clear information hierarchy through stark contrast and ample negative space, creating a sense of precision and advanced technology. Vivid violet and electric blue accents against a predominantly achromatic palette create distinct points of focus, signaling innovation and interaction. The interplay of soft, rounded buttons and sharp typographic edges establishes a dynamic visual tension, indicative of cutting-edge yet user-friendly platforms.
colors:
  midnight-graphite: "#000000"
  canvas-white: "#ffffff"
  slate-gray: "#2d2d2d"
  cloud-white: "#e4e7ed"
  fog: "#d2d4d7"
  ghost-gray: "#bdbdbd"
  lavender-mist: "#e4e9ff"
  agent-violet: "#a95ef8"
  action-blue: "#5551ff"
  electric-blue: "#007aff"
  digital-dawn-gradient: "#f7c8ed"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.4
    letterSpacing: 0.091px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.55
  heading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.2
    letterSpacing: -0.031px
spacing:
  buttonRadius: 60px, 82px
  elementGap: 8-20px
components:
  hero-email-cta-form:
    role: 
  writer-agent-section-cta:
    role: 
  resources-cards-dark-section:
    role: 
  primary-call-to-action-button:
    role: Interactive element
  search-email-input-field:
    role: Form Element
  hero-section-email-input:
    role: Form Element
  header-navigation-link-default:
    role: Navigation element
  dark-theme-inline-link:
    role: Navigation / Text element
  trust-bar-logo:
    role: Informational element
  info-banner:
    role: Informational element
---

## Overview

**North Star:** AI-powered clarity on a pristine canvas. Like crisp code on a luminous display.

WRITER presents an authoritative yet approachable aesthetic, balancing corporate seriousness with a touch of AI-infused futurism. The design prioritizes clear information hierarchy through stark contrast and ample negative space, creating a sense of precision and advanced technology. Vivid violet and electric blue accents against a predominantly achromatic palette create distinct points of focus, signaling innovation and interaction. The interplay of soft, rounded buttons and sharp typographic edges establishes a dynamic visual tension, indicative of cutting-edge yet user-friendly platforms.

### Do's

- Always use 'Action Blue' (#5551ff) for primary call-to-action buttons to ensure consistent interaction cues.
- Maintain a clear visual hierarchy by utilizing 'Midnight Graphite' (#000000) for primary headlines and 'Slate Gray' (#2d2d2d) for body text and secondary information.
- Implement the 72px 0px 0px 72px border radius for input fields that have a defined background to create the signature semi-pill shape.
- Employ the 'Agent Violet' (#a95ef8) color strictly for branded elements, main value propositions, and AI-related features, ensuring its impact is reserved.
- Utilize Poppins for all primary text content; reserve CanelaDeck for subtle, decorative accent text where a serif feels appropriate for a touch of class.
- Keep ample negative space around elements, adhering to the elementGap range of 8-20px for comfortable density and modern feel.
- For interactive elements on dark backgrounds, use 'Electric Blue' (#007aff) to provide a vivid, contrasting highlight.

### Don'ts

- Do not deviate from the established button radius values (60px, 82px); avoid arbitrary rounding that would break component consistency.
- Avoid using highly saturated colors for large background areas; maintain the integrity of the achromatic palette broken only by subtle gradients.
- Do not use CanelaDeck for substantial blocks of body text; its weight and style are not optimized for readability at scale.
- Avoid applying drop shadows or complex elevation effects; the design relies on stark contrast and background shifts for depth, not traditional shadows.
- Do not mix 'Agent Violet' (#a95ef8) with standard link colors or common interactive elements as it dilutes its prestige and specific brand association.
- Refrain from using thin borders on interactive elements that could impact clickability or visual prominence, ensure borders are substantial when present.

### Layout

The site uses a max-width 1136px contained layout centered on the page, providing clear boundaries for content. The hero section often breaks this containment with full-bleed backgrounds or large visual elements. Sections generally alternate between light backgrounds ('Canvas White', 'Cloud White') and darker backgrounds ('Midnight Graphite', 'Slate Gray') to create visual rhythm and content separation. Content arrangement frequently uses a centered stack for headlines and calls to action, or a two-column layout with text on one side and a visual on the other. Navigation consists of a sticky top bar with brand logo, prominent CTA button, and clear text links. The 'comfortable' density relies on significant vertical 'sectionGap' spacing, along with 'elementGap' around elements for readability and visual calm.

### Imagery

The visual language focuses on a blend of abstract, ethereal gradients and tight, focused product visuals. Photography, when present, features clean, professional portraits (like the smiling woman in the hero) that convey approachability without sacrificing professionalism. Illustrations are minimal, often abstract, and use brand colors with smooth gradients. Icons are filled, monochrome, and simple, supporting the UI without drawing excessive attention. There's a high density of product screenshots and UI snippets, often layered or presented within mockups, showcasing the platform's functionality directly. The 'Digital Dawn Gradient' is used decoratively to soften otherwise sharp edges and add a touch of modern, digital ambiance.

### Elevation

The design deliberately minimizes traditional drop shadows. Instead, depth and hierarchy are established through stark background color contrasts (e.g., light sections against dark sections), background gradients, and the use of outlines or subtle background tints for interactive elements like buttons and inputs. This approach maintains a flat, precise, and digital aesthetic, allowing content and typography to be the primary focus.
