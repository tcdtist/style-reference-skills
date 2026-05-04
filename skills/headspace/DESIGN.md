---
version: alpha
name: Headspace
description: Headspace's design system radiates a calm, approachable, and playfully optimistic mood, achieved through a vibrant primary blue, a warm, soft neutral palette, and abundant negative space. Rounded forms and a clean sans-serif typeface contribute to a friendly and user-centric feel. The frequent use of accent colors, especially yellow and various purples, in illustrations and iconography creates visual interest and distinguishes different content areas.
colors:
  sky-connect: "#0061ef"
  sunshine-burst: "#ffce00"
  deep-plum: "#3b197f"
  ocean-glimmer: "#00a4ff"
  blush-petal: "#ffa1cc"
  forest-calm: "#02873"
  inkwell-gray: "#4b4c4d"
  true-black: "#000000"
  charcoal-tone: "#2d2c2b"
  cloud-whisper: "#f9f4f2"
  stone-slate: "#44423f"
  pure-white: "#ffffff"
  pale-ash: "#e2ded9"
  light-stone: "#d0d0d0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.44
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.38
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.32
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.29
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -1px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.15
    letterSpacing: -1.2px
spacing:
  cardRadius: 16px
  buttonRadius: 24px
components:
  feature-category-grid:
    role: 
  feature-tab-pill-selector:
    role: 
  email-newsletter-subscribe-banner:
    role: 
  primary-action-button:
    role: CTA
  ghost-button:
    role: Secondary Action
  tab-button:
    role: Navigation/Filter
  dark-square-button:
    role: Iconic/Informative
  email-subscription-input:
    role: Form Entry
  content-card:
    role: Information display
  accent-banner:
    role: Promotional strip
  feature-pill-button:
    role: Categorization/Navigation
---

## Overview

**North Star:** Warm Modern Playfulness — like a friendly, brightly lit studio full of soft shapes and uplifting colors.

Headspace's design system radiates a calm, approachable, and playfully optimistic mood, achieved through a vibrant primary blue, a warm, soft neutral palette, and abundant negative space. Rounded forms and a clean sans-serif typeface contribute to a friendly and user-centric feel. The frequent use of accent colors, especially yellow and various purples, in illustrations and iconography creates visual interest and distinguishes different content areas.

### Do's

- Prioritize 'Sky Connect' (#0061ef) for all primary call-to-action buttons and active navigation states.
- Apply 'Cloud Whisper' (#f9f4f2) for most large section backgrounds to maintain a soft, inviting atmosphere.
- Use border-radius `24px` for general buttons and `32px` for prominent CTA buttons to reinforce the soft, friendly aesthetic.
- Utilize 'Inkwell Gray' (#4b4c4d) as the primary text color for body copy and headings for optimal readability on light backgrounds.
- Ensure headings and body text use the Headspace Apercu font with careful application of letter-spacing adjustments: -0.0300em, -0.0250em, -0.0100em at larger sizes.
- Incorporate the subtle `rgba(65, 61, 69, 0.2) 0px 2px 0px 0px` shadow on buttons and cards to provide soft visual lift without heavy contrast.
- Use `8px` and `16px` as primary `elementGap` values for consistent spacing between UI elements.

### Don'ts

- Avoid harsh, high-contrast shadows or sharp corners, as they contradict the brand's soft and approachable aesthetic.
- Do not use highly saturated colors for large text blocks; reserve them for accents, illustrations, and interactive elements.
- Refrain from using excessively small or tight letter-spacing for body text; the system clearly favors open and legible typography.
- Do not introduce new typefaces; stick to Headspace Apercu and its defined weights.
- Avoid full-bleed imagery without defined edges or masking; prefer contained, rounded elements or abstract backgrounds.
- Do not use dark backgrounds for entire sections, except where explicitly indicated for specific brand moments (e.g., hero, unless data suggests otherwise).
- Limit the use of 'True Black' (#000000) to critical input text or select emphasis, defaulting to 'Inkwell Gray' (#4b4c4d) for most text.

### Layout

The site employs a max-width centered layout for most content, providing generous white space around elements, contributing to a calm and focused experience. The hero section often features a centered headline over a 'Cloud Whisper' background, sometimes with a full-width accent banner at the very top. Content sections predominantly alternate light backgrounds with white card elements, or feature large content blocks with a `Cloud Whisper` or `Pure White` background. A distinct pattern of 2-column text+image sections is observed, with some feature sections using a loose grid of tab-like buttons. Navigation is a consistent sticky top-bar, and the footer is information-rich with a multi-column layout.

### Imagery

Imagery primarily consists of flat, geometric illustrations and product screenshots of the app. Illustrations are often brand-colored, utilizing a palette of 'Sunshine Burst', 'Deep Plum', 'Ocean Glimmer', and 'Blush Petal' to create a whimsical, abstract, and calming feeling. They are typically contained within rounded shapes or serve as background elements. Product screenshots are shown as device mockups, presented cleanly with rounded corners on 'Pure White' or subtly-shaded backgrounds, emphasizing the app's interface. Icons are filled, monoline, and often use accent colors, appearing friendly and guidance-oriented. The visual density is balanced, with imagery generally supporting text content rather than dominating it, creating an approachable and informative experience.
