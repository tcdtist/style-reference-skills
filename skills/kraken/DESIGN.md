---
version: alpha
name: Kraken
description: This design system projects a technically forward and secure image, achieved through a meticulously balanced palette of near-achromatic grays and subtle purple accents. The key visual identity is driven by the custom 'Kraken-Product' and 'Kraken-Brand' fonts, particularly their application with precise, tight letter-spacing for headlines, conveying modern authority. Controlled use of rounded corners (8-12px for cards and buttons, 9999px for small indicators) softens the sharp, data-driven aesthetic without compromising precision, like a high-end electronic device. Strategic use of a vibrant violet (#7132f5) acts as a high-contrast indicator, drawing immediate attention to interactive elements, similar to a status LED on a piece of financial hardware.
colors:
  midnight-ink: "#101114"
  graphite: "#686b82"
  pure-white: "#ffffff"
  whisper-gray: "#f6f5f9"
  mist: "#d4d4dc"
  kraken-violet: "#7132f5"
  lavender-mist: "#e4dcf9"
  success-green: "#026b3f"
  alert-red: "#d11d45"
  deep-space-purple: "#8453e6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.71
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.38
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.42px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.34px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.22
    letterSpacing: -0.76px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.17
    letterSpacing: -1px
spacing:
  cardRadius: 8px
  buttonRadius: 8-12px
  elementGap: 4-16px
  sectionGap: 48px
components:
  stat-block:
    role: 
  crypto-portfolio-tab-selector-with-price-rows:
    role: 
  email-sign-up-form:
    role: 
  navigation-link-default:
    role: Primary navigation links in header
  navigation-link-ghost-secondary:
    role: Secondary navigation items within lists or filters
  primary-action-button:
    role: Key call-to-action buttons
  accent-tag-button:
    role: Small interactive tags or filters
  information-card:
    role: Displaying informational blocks or articles
  success-badge:
    role: Highlighting positive metrics or status
  email-input-field:
    role: User input for forms
---

## Overview

**North Star:** Regulated purple circuit board. Precise, interconnected components glowing with strategic violet light.

This design system projects a technically forward and secure image, achieved through a meticulously balanced palette of near-achromatic grays and subtle purple accents. The key visual identity is driven by the custom 'Kraken-Product' and 'Kraken-Brand' fonts, particularly their application with precise, tight letter-spacing for headlines, conveying modern authority. Controlled use of rounded corners (8-12px for cards and buttons, 9999px for small indicators) softens the sharp, data-driven aesthetic without compromising precision, like a high-end electronic device. Strategic use of a vibrant violet (#7132f5) acts as a high-contrast indicator, drawing immediate attention to interactive elements, similar to a status LED on a piece of financial hardware.

### Do's

- Use Kraken Violet (#7132f5) exclusively for primary calls to action, active states, and critical brand accents to maintain its strong signaling power.
- Apply Kraken-Brand font with specific negative letter-spacing for all headlines (e.g., -0.021em at 48px, -0.014em at 24px) to achieve the signature precise, modern feel.
- Maintain a clear visual hierarchy by limiting shadows to Information Cards (rgba(0, 0, 0, 0.03) 0px 4px 24px 0px) and a minimal effect for elevated buttons (rgba(16, 24, 40, 0.04) 0px 1px 4px 0px).
- Employ an 8px border radius for all primary cards and buttons, using 9999px for small pill-shaped labels or indicators to create a consistent soft yet defined component shape.
- Ensure generous internal padding within components using the established spacing tokens (e.g., 12-16px for card padding, 8-12px for button padding) to prevent a cramped feel and promote readability.
- Utilize Whisper Gray (#f6f5f9) for section backgrounds that require subtle separation from Pure White (#ffffff) without creating stark visual breaks.

### Don'ts

- Do not introduce new saturated primary colors; adhere strictly to Kraken Violet as the sole chromatic brand accent.
- Avoid using drop shadows on elements other than specified cards and buttons, as this dilutes the subtle elevation strategy.
- Do not deviate from the defined Kraken-Brand and Kraken-Product font families or their specified weights and letter-spacing for text, as they are central to the brand's typographic identity.
- Do not use highly rounded corners (e.g. 20px, 16px) for cards or primary buttons; maintain the 8-12px range for a consistent, precise aesthetic.
- Never use Pure White (#ffffff) as text on light backgrounds; always ensure sufficient contrast with Midnight Ink (#101114) or Graphite (#686b82) for readability.

### Layout

The site employs a max-width contained layout, typically centered, though the hero section often utilizes a full-bleed background. The hero pattern features a prominent headline and call-to-action on the left, balanced by a large product screenshot (mobile app) on the right. Content sections generally follow a consistent vertical rhythm, often alternating between a main content area and a slightly differentiated background color like Whisper Gray. Featured information and statistics are presented in clear, gridded layouts, such as 3-column card grids for articles or detailed feature lists. Navigation is handled by a sticky top bar, featuring primary links and user actions on the right. The overall density is balanced, allowing breathing room between sections while maintaining a structured, information-dense display.

### Imagery

This design primarily uses abstract, branded illustrations and product screenshots. Illustrations feature geometric forms, often with subtle gradients in brand violet or muted cool tones, and serve decorative or conceptual roles. Product screenshots of the mobile app are rendered on a modern smartphone, demonstrating the UI in context, always in a pristine, 'hero' position. Icons are minimalist and outlined, typically in Midnight Ink or Graphite, occasionally filled in Kraken Violet for active states. Imagery is either full-bleed for impactful hero sections (like the mobile app screenshot) or contained within cards and sections, with soft 8px rounded corners to integrate with the UI. The density is moderate; imagery supports content rather than dominating it, providing visual anchor points in a text-rich layout.
