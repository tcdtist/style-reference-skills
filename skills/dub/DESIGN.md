---
version: alpha
name: Dub
description: Dub presents a high-contrast, functionally transparent productivity aesthetic. Surfaces range from pure white to subtle light grays, often paired with crisp dark text. Typography is precise and clear, with a prominent serif display font for impact and a neutral sans-serif for content. Accent colors appear as small functional highlights rather than large blocks, creating a dynamic yet understated feel. Components are lightweight, featuring soft border radii and minimal, diffused shadows, emphasizing content over heavy ornamentation.
colors:
  canvas-white: "#ffffff"
  jet-black: "#000000"
  ink-black: "#0a0a0a"
  thunder-gray: "#171717"
  shadow-gray: "#262626"
  steel-gray: "#404040"
  subtle-ash: "#f5f5f5"
  border-light: "#e5e5e5"
  border-muted: "#d4d4d4"
  accent-blue: "#3b82f6"
  fresh-green: "#16a34a"
  warm-orange: "#ea580c"
  deep-violet: "#7c3aed"
  system-info: "#111827"
  focus-ring-blue: "#1e40af"
  highlight-green: "#4ade80"
  highlight-violet: "#c084fc"
  highlight-orange: "#fb923c"
  linear-gray-dark: "#525252"
  linear-gray-light: "#737373"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.11
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.15
spacing:
  elementGap: 16px
  sectionGap: 64px
components:
  primary-action-button:
    role: Filled button for primary calls to action.
  ghost-button:
    role: Interactive elements that blend into the background, typically for secondary actions.
  outlined-card:
    role: Informational containers with a subtle visual boundary.
  raised-card:
    role: Elevated cards for prominent content or interactive sections.
  subtle-background-card:
    role: Cards with a slightly off-white background, often used for grouped information or light contrast.
  text-input:
    role: Standard input fields for user data.
  pill-tag:
    role: Informative labels or categories.
  navigation-link:
    role: Top-level navigation items.
  featured-badge:
    role: Small, colorful highlights for features or status.
---

## Overview

**North Star:** Crisp Utility on White Canvas

Dub presents a high-contrast, functionally transparent productivity aesthetic. Surfaces range from pure white to subtle light grays, often paired with crisp dark text. Typography is precise and clear, with a prominent serif display font for impact and a neutral sans-serif for content. Accent colors appear as small functional highlights rather than large blocks, creating a dynamic yet understated feel. Components are lightweight, featuring soft border radii and minimal, diffused shadows, emphasizing content over heavy ornamentation.

### Do's

- Use Satoshi (or Montserrat) at 48px, weight 500, line-height 1.15 for primary page headings.
- Apply Canvas White (#ffffff) for all main page and card backgrounds to maintain a bright, open feel.
- Employ Ink Black (#0a0a0a) for all primary body text, headings, and crucial interactive text for maximum readability.
- Utilize Border Light (#e5e5e5) for all hairline borders and subtle dividers to define content areas without adding visual weight.
- Apply a 9999px (full pill shape) border-radius to all ghost buttons and tags for a distinctive soft, approachable quality.
- Use Element Gap of 16px to separate most inline elements and Card Padding of 16px for content within containers.
- Employ Accent Blue (#3b82f6) or Focus Ring Blue (#1e40af) as the background for primary call-to-action buttons, with Canvas White (#ffffff) text.

### Don'ts

- Avoid using heavy drop shadows; prefer diffused, subtle shadows like rgba(0, 0, 0, 0.05) 0px 1px 2px 0px.
- Do not deviate from Inter for body text, links, and most UI elements; consistency is key for readability and brand recognition.
- Refrain from using saturated colors as large background blocks; reserve them for small accents, highlights, or semantic indicators.
- Avoid tight line spacing for larger text; ensure line-heights are generous, especially for headings, to enhance scannability.
- Do not overcrowd sections; maintain a Section Gap of at least 64px to provide clear visual separation and breathing room.
- Do not use arbitrary border radii; adhere strictly to the defined scales: 9999px for pills, 8px for small components, 12px for cards, and 16px for larger containers.
- Do not introduce new typefaces; the combination of Satoshi (display), Inter (UI), and Geist Mono (monospace) is comprehensive.

### Layout

The page typically follows a max-width contained model, centered at around 1200px, creating a structured and professional feel. The hero section often presents a centered headline and subtext, followed by primary call-to-action buttons. Sections alternate between full-width content blocks and contained content, maintaining a rhythm of visual interest. Content arrangement leans towards alternating text-left/image-right compositions, or feature grids. There's a consistent vertical spacing between sections, primarily using a large section gap, creating a sense of spaciousness. Navigation is a sticky top bar with logo, main links, and distinct login/signup buttons.

### Imagery

The visual language for imagery is primarily product-focused, featuring clean, cropped screenshots of the Dub UI. These screenshots often appear against a slightly muted background, sometimes with a soft blur or slight elevation. Icons are minimal, featuring outline styles with thin strokes in black or occasionally brand accent colors (green, orange, violet), serving as decorative or explanatory elements. There is a general absence of lifestyle photography or complex illustrations, keeping the focus squarely on the product's interface and functionality. Density is moderate, with images used to break up text blocks and demonstrate product features rather than purely decorative purposes.
