---
version: alpha
name: Stability AI
description: Stability AI's design evokes a sophisticated, high-tech command center with its deep, dark palette and vibrant purple accents. The dominant use of Achromatic Raven for backgrounds provides a sleek, near-black foundation, while crisp Archivo typography in white and light gray ensures clarity. Generous spacing and the playful use of fully rounded buttons contrast with otherwise sharp edges, creating a balance between serious technicality and modern approachability.
colors:
  achromatic-raven: "#1e1e1"
  storm-cloud: "#383838"
  off-white-text: "#e5e7e6"
  polar-white: "#ffffff"
  deep-plum-accent: "#a381ff"
  luminous-violet: "#776cff"
  slate-gray: "#bbbbbb"
  lavender-mist: "#b6a9c6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.05
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.98
spacing:
  cardRadius: 15px
  buttonRadius: 300px
  elementGap: 10-18px
components:
  announcement-banner:
    role: 
  cta-button-group:
    role: 
  mailing-list-signup-form:
    role: 
  primary-call-to-action-button:
    role: Primary interactive element for key actions
  navigation-link-button:
    role: Navigation items in header and footer
  email-input-field:
    role: User input for email addresses
  select-input-field:
    role: Dropdown select fields
  hero-section-headline:
    role: Large, impactful headlines
  informational-card-base:
    role: Container for content; appears as a content division rather than a distinct card
  rounded-corner-card-variant:
    role: Container for specific content that requires subtle rounding for visual grouping
---

## Overview

**North Star:** Midnight command center; a sophisticated dark UI with precise information delivery.

Stability AI's design evokes a sophisticated, high-tech command center with its deep, dark palette and vibrant purple accents. The dominant use of Achromatic Raven for backgrounds provides a sleek, near-black foundation, while crisp Archivo typography in white and light gray ensures clarity. Generous spacing and the playful use of fully rounded buttons contrast with otherwise sharp edges, creating a balance between serious technicality and modern approachability.

### Do's

- Use Achromatic Raven (#1e1e1e) as the primary background color for all main content areas.
- Apply Deep Plum Accent (#a381ff) for all primary call-to-action buttons and interactive links.
- Adopt a 300px border radius for all buttons and fully-rounded elements to maintain the signature pill shape.
- Utilize Archivo font consistently across all text elements, leveraging its various weights for hierarchy.
- Ensure high contrast by using Polar White (#ffffff) for headlines and Off-White Text (#e5e7e6) for body copy against dark backgrounds.
- Prioritize transparency for background elements (cards, badges) to allow base backgrounds to show through, creating depth.

### Don'ts

- Avoid using bright or pastel colors outside of the defined accent palette to maintain the sophisticated dark theme.
- Do not introduce sharp corners on interactive buttons; they must maintain the full pill (300px) or near-pill (99px) radius.
- Refrain from using drop shadows on cards or containers; depth is achieved primarily through background color variations and strategic spacing.
- Do not deviate from the Archivo and Figtree font families; they are central to the brand's typographic identity.
- Avoid excessive use of bold text – rely on size, contrast, and color to establish visual hierarchy, rather than heavy weights.

### Layout

The layout primarily uses a full-bleed background for sections, creating a cohesive, unbroken visual experience, within which content is usually centered, but not strictly constrained by a max-width, allowing for fluid arrangements. The hero section is characterized by a full-viewport image with centered, large headlines and a primary CTA. Content sections follow a rhythm of alternating text and visual elements, sometimes split into two columns (text-left/image-right or vice-versa). The page emphasizes spaciousness with generous vertical gaps between sections, avoiding dense information blocks. Navigation is handled by a sticky top bar, ensuring consistent access.

### Imagery

The visual language relies on high-resolution, artistic photography of diverse individuals, often featuring tech accessories like headphones. These images are typically full-bleed or large background elements, creating an immersive, aspirational atmosphere, and are heavily integrated into the UI rather than being isolated. Product screenshots are woven into the hero and other sections, showcasing the UI of the software in context. There's an absence of traditional cartoon-style illustrations, favoring realism and a sophisticated, professional aesthetic. Small, minimalist icons appear as outline-style for navigation and social media. The overall density is image-heavy in key sections like the hero, creating an immediate visual impact, while other sections are more text-dominant.
