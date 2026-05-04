---
version: alpha
name: Delphi
description: This design system evokes a sense of thoughtful, quiet expertise, like a leather-bound journal filled with well-considered thoughts. The dominant use of an off-white, almost beige background (#fdf6ee) coupled with a nuanced palette of warm grays and subtle browns creates an inviting, scholarly atmosphere. The signature element is the `Martina Plantijn Light` typeface at whisper-weights, which gives a sophisticated, almost intimate feel, contrasting with the geometric precision of accompanying sans-serifs.
colors:
  parchment-white: "#fdf6ee"
  deep-cognac: "#2b180a"
  muted-stone: "#94877c"
  pressed-cacao: "#7f6e60"
  burnt-umber: "#3e2407"
  warm-ash: "#a99d93"
  cloud-fog: "#f0e6dc"
  fire-opal: "#f65726"
  sunset-orange: "#ff5c00"
  white: "#ffffff"
  dark-charcoal: "#21201c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
    letterSpacing: -0.01px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
    letterSpacing: -0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.48px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.22
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.22
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.2
    letterSpacing: -1.23px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.34
    letterSpacing: -1.92px
spacing:
  buttonRadius: 12px
  elementGap: 8px
  sectionGap: 75px
components:
  cta-button-group:
    role: 
  feature-cards-why-delphi:
    role: 
  trust-feature-cards-grid:
    role: 
  primary-button-filled:
    role: Call to action.
  secondary-button-outlined:
    role: Secondary action or ghost button.
  tertiary-button:
    role: Subtle, less emphasized actions, often within navigation.
  auth-button:
    role: Sign-in or Get-started actions in the header.
  testimonial-card:
    role: Displaying expert quotes or profiles.
  input-field:
    role: User data entry.
  header-navigation-item:
    role: Primary site navigation.
  feature-card:
    role: Highlighting product features or benefits.
---

## Overview

**North Star:** Cognac-Stained Parchment – A sense of aged wisdom and quiet authority, inviting deep contemplation.

This design system evokes a sense of thoughtful, quiet expertise, like a leather-bound journal filled with well-considered thoughts. The dominant use of an off-white, almost beige background (#fdf6ee) coupled with a nuanced palette of warm grays and subtle browns creates an inviting, scholarly atmosphere. The signature element is the `Martina Plantijn Light` typeface at whisper-weights, which gives a sophisticated, almost intimate feel, contrasting with the geometric precision of accompanying sans-serifs.

### Do's

- Use Martina Plantijn Light at weight 300 for all content headings larger than 24px, applying appropriate negative letter-spacing.
- Maintain #fdf6ee as the primary background color for all main page content and interactive cards.
- Apply a default border-radius of 12px to all interactive elements and contained content blocks like cards.
- Employ the Deep Cognac (#2b180a) as the default text color for primary content and navigation.
- Utilize Inter at 15px with line height 1.4 for most body copy, ensuring an open and readable text block.
- Emphasize primary calls-to-action using a filled button with Burnt Umber (#3e2407) background and white text.
- Ensure consistent spacing elements are multiples of 4px, especially for padding within components and between text blocks.

### Don'ts

- Do not use highly saturated colors for backgrounds or large text areas; reserve them for small, impactful accents like #f65726 or #ff5c00.
- Avoid harsh shadows; prefer subtle, barely-there elevations to maintain the soft, warm aesthetic.
- Do not use pure black (#000000) for text on #fdf6ee backgrounds unless for specific, high-contrast, legal text. Prefer Deep Cognac (#2b180a) or Dark Charcoal (#21201c).
- Do not break the established type scale; Martina Plantijn Light scales with specific letter-spacing adjustments at larger sizes.
- Do not introduce strong, geometric shapes where rounded corners (12px or 70px) are the established pattern.
- Avoid busy or distracting imagery; prefer tightly cropped portraits or clean UI mockups.
- Do not use `sans-serif` (system font) for any primary content; it is reserved for inaccessible or fallback instances.

### Layout

The page primarily employs a max-width contained model (around 1200px) centered on a 'Parchment White' background, creating a spacious and breathable feel. The hero section features a centered, inviting headline ('Digitize Your Mind') above a descriptive subtext and two call-to-action buttons, framed by dynamically floating, blurred testimonial-like cards, creating a sense of activity and social proof. Sections below alternate between a slightly darker off-white background (#f0e6dc) and the primary #fdf6ee, establishing a subtle rhythm. Content arrangement frequently uses two-column layouts, often pairing text with supporting UI snippets or further testimonial cards. There are instances of tightly clustered card grids for features, maintaining generous padding. The navigation is a classic sticky top bar, providing persistent access to key sections. The overall density is balanced, allowing ample whitespace to highlight cognitive ease.

### Imagery

The visual language is characterized by minimal photography, primarily featuring tightly cropped, professional headshots of individuals within testimonial-like thought bubbles. These headshots are typically well-lit, direct, and slightly desaturated, presenting a human but professional face to the AI's 'mind'. The images are often contained within rounded rectangular cards, sometimes layered or scattered, suggesting a constellation of expert voices. Product UI screenshots are presented cleanly within simulated device frames or as isolated, focused elements, detailing functionality without overwhelming the layout. There's an absence of abstract graphics, 3D renders, or decorative illustrations, reinforcing a serious, content-focused approach. The overall density is text-dominant, with imagery serving as supportive, grounded evidence.

### Elevation

The design embraces a philosophy of subtle, organic elevation, shying away from strong, hard-edged shadows. Instead, elevation is primarily conveyed through slight background color variations (e.g., #fdf6ee for cards on potentially #f0e6dc backgrounds) and very soft, diffuse box-shadows. These shadows are barely perceptible, creating a gentle lift rather than a stark separation, maintaining the warm and inviting aesthetic without sharp contrasts.
