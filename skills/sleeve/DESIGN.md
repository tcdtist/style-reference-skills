---
version: alpha
name: Sleeve
description: Sleeve's design evokes a polished, app-native desktop experience, blending macOS aesthetics with thoughtful detail. Its most distinctive feature is the interplay between sharp, angular content blocks and the soft, organic forms of the app's UI elements, specifically the deeply rounded 'pill' buttons and window-like card backgrounds. Typography is restrained and precise, anchored by system sans-serif fonts, ensuring legibility and a familiar feel. Shadows are crucial here, providing subtle elevation to card-like containers, mimicking floating UI elements without heavy borders, creating depth while maintaining a clean, white background.
colors:
  white-marble: "#ffffff"
  cloud-gray: "#f9fafb"
  border-fog: "#e5e7eb"
  ash-text: "#000000"
  slate-text: "#333333"
  steel-accent: "#374151"
  deep-sea-gradient: "#0e95ee"
  success-leaf: "#53bc2a"
  error-ember: "#750d0d"
  accent-violet: "#783af5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.6px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.6
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.5
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.33
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1
    letterSpacing: -2.4px
spacing:
  cardRadius: 24px
  buttonRadius: 12px
  elementGap: 8px
  sectionGap: 96px
components:
  cta-button-group:
    role: 
  feature-cards-grid:
    role: 
  product-tab-selector:
    role: 
  ghost-navigation-button:
    role: Primary navigation and selection in header.
  bordered-pill-button:
    role: Secondary navigation and filtering tags.
  primary-dark-button:
    role: Call to action for purchasing or key actions.
  secondary-light-button:
    role: Alternative call to action, less prominent than primary.
  feature-card:
    role: Container for individual features or content blocks.
  product-display-card:
    role: Prominent showcase for product visuals and key information.
  in-page-status-badge:
    role: Informational banner within a section.
---

## Overview

**North Star:** Macintosh desktop app on white marble. The design system feels like a carefully crafted macOS application brought to a website, with crisp, clean elements resting on a bright, uncluttered surface.

Sleeve's design evokes a polished, app-native desktop experience, blending macOS aesthetics with thoughtful detail. Its most distinctive feature is the interplay between sharp, angular content blocks and the soft, organic forms of the app's UI elements, specifically the deeply rounded 'pill' buttons and window-like card backgrounds. Typography is restrained and precise, anchored by system sans-serif fonts, ensuring legibility and a familiar feel. Shadows are crucial here, providing subtle elevation to card-like containers, mimicking floating UI elements without heavy borders, creating depth while maintaining a clean, white background.

### Do's

- Prioritize ui-sans-serif at weight 900 for all large display headings (48px, 96px) with tightened letter-spacing (-0.96px, -2.4px) for impact.
- Use Border Fog (#e5e7eb) for all visible borders on cards and buttons, maintaining a soft, consistent edge.
- Apply 24px border-radius to all content cards and product display elements to create a consistent 'app window' aesthetic.
- Elevate primary content cards using the comprehensive shadow stack of rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.4) 0px 12px 24px -8px, rgba(0, 0, 0, 0.2) 0px 8px 24px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px 0px.
- Utilize 9999px border-radius for all interactive pill-shaped elements and tags to signify interactivity and a distinct form language.
- Maintain a clear page structure using a max-width of 1264px for content and section gaps of approximately 96px for breathing room.
- Employ Deep Sea Gradient (linear-gradient(to right top, rgb(14, 149, 238), rgb(39, 201, 245))) for primary hero sections or prominent visual accents to infuse vibrancy.

### Don'ts

- Avoid using harsh, high-contrast borders; all borders should be subtle, like Border Fog (#e5e7eb) or a similar desaturated gray.
- Do not introduce strong, saturated colors for backgrounds of major content sections; stick to White Marble (#ffffff) or Cloud Gray (#f9fafb).
- Refrain from using heavily decorative fonts; ui-sans-serif is the sole typographic voice, emphasizing clarity and system-level integration.
- Avoid arbitrary rounding; use 24px for cards, 12px for primary/secondary buttons, and 9999px for pill-shaped elements exclusively.
- Do not clutter layouts with too many differing shadow styles; adhere to the defined card elevation shadows.
- Exclude any imagery that is not either a product screenshot, a UI icon, or an abstract graphic; avoid lifestyle photography.
- Do not use letter-spacing on body text; it should primarily be applied to large headings for stylistic effect.

### Layout

The page adheres to a centered maximum width (1264px) for most content, providing ample whitespace on larger screens. The hero section is a full-bleed block with a large, central product visual, immediately conveying the product's purpose. Sections typically alternate between either a two-column layout (image/illustration on one side, text on the other) or a centered stack of text followed by a grid of feature cards. Vertical spacing between main sections is generous (around 96px), creating a comfortable, unhurried rhythm. Navigation is a minimalist top bar with ghost buttons, consistent with a clean app-focused style.

### Imagery

Imagery primarily consists of highly polished product screenshots of the 'Sleeve' application, often presented within a macOS window frame, sometimes floating in 3D space with subtle shadow effects. Abstract graphical elements and app icons with vibrant gradients and soft shadows are used decoratively to frame product shots or illustrate concepts. The style is dimensional and clean, with a focus on showcasing the software's UI in a detailed and aspirational manner. There is an absence of photography, relying entirely on product and UI visuals to communicate value.
