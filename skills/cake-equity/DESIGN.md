---
version: alpha
name: Cake Equity
description: Cake Equity's visual system evokes a precise, supportive atmosphere with a foundation of stark neutrals and a vibrant, warm purple accent. Clean surfaces and intentional use of border radii define interactive elements and containers. Typography is confident and direct, emphasizing clear information hierarchy, while a bright lime green and soft blue punctuate feature areas.
colors:
  midnight-ink: "#18161a"
  polar-white: "#ffffff"
  cloud-gray: "#fafaf8"
  stone-slate: "#333333"
  ash-mist: "#898b91"
  lilac-gray: "#ede9ff"
  lavender-hue: "#d9d2ff"
  plum-royal: "#4823ff"
  vivid-violet: "#6d67fb"
  soft-indigo: "#7e78ff"
  lime-spritz: "#e7ff6e"
  sky-whisper: "#99cefe"
  pale-plum: "#dfddff"
  sunset-orange: "#ffa360"
  phantom-deep-violet: "#2b1599"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: 0.05px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.004px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.001px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.4
    letterSpacing: -0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 1.3
    letterSpacing: -0.045px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 63px
    lineHeight: 1
    letterSpacing: -0.032px
  display:
    fontFamily: "system-ui"
    fontSize: 77px
    lineHeight: 1
    letterSpacing: -0.04px
spacing:
  cardRadius: 20px
  buttonRadius: 100px
  elementGap: 20px
  sectionGap: 71px
components:
  primary-filled-button:
    role: Call to action.
  secondary-outlined-button:
    role: Secondary call to action, ghost buttons.
  navigation-link:
    role: Primary navigation items.
  default-card:
    role: General content container.
  highlight-card-lime-spritz:
    role: Promotional or featured content container.
  subtle-accent-card-sky-whisper:
    role: Informational or complementary content card.
  informational-pane-soft-indigo:
    role: Embedded UI panels or data displays.
---

## Overview

**North Star:** precision ledger on a clean slate

Cake Equity's visual system evokes a precise, supportive atmosphere with a foundation of stark neutrals and a vibrant, warm purple accent. Clean surfaces and intentional use of border radii define interactive elements and containers. Typography is confident and direct, emphasizing clear information hierarchy, while a bright lime green and soft blue punctuate feature areas.

### Do's

- Prioritize Midnight Ink (#18161a) for all primary text and main headings on light backgrounds.
- Use Plum Royal (#4823ff) exclusively for primary interactive elements, ensuring high contrast with Polar White (#ffffff) text.
- Employ Polar White (#ffffff) as the dominant background color for most sections, cards, and interactive elements for a crisp, legible foundation.
- Apply 20px border-radius to all major containers like cards and image masks, softening their visual presence.
- Ensure buttons maintain a 100px border-radius for a distinct pill-like shape, signalling interactiveness.
- Utilize Plus Jakarta Sans 700 with aggressive letter-spacing for large, impactful headlines to create a condensed, authoritative statement.
- Incorporate Lime Spritz (#e7ff6e) sparingly for intentional highlights or call-to-action cards, preventing overuse that could diminish its impact.

### Don'ts

- Avoid using multiple chromatic colors for primary actions; Plum Royal (#4823ff) is the singular choice for this purpose.
- Do not introduce complex shadow patterns; maintain a flat or nearly flat aesthetic, with elevation hinted through color changes or subtle outlines.
- Refrain from widely varying border-radius values. Stick to the defined system (20px for cards, 100px for buttons) for visual consistency.
- Do not use dark backgrounds for large content blocks outside of specifically designed hero sections or dark UI panels, as the system relies on a light canvas.
- Avoid decorative images with overly complex compositions or busy backgrounds; prioritize product screenshots or clean illustrations.
- Do not use letter-spacing on small body text, reserving it for larger headings to maintain readability.
- Resist using a strong border on filled buttons; rely on background color for visual distinction of primary actions.

### Layout

The page primarily uses a max-width contained model, centered on the screen, creating a focused content area. The hero section follows a split layout, featuring a large headline and supporting text on the left, counterbalanced by a product UI preview on the right, which itself is often a dark-themed card on the light canvas. Section rhythm is marked by consistent vertical spacing, often with alternating light (#fafaf8, #ffffff) and accent-colored (#e7ff6e) backgrounds, creating clear visual breaks. Content arrangement frequently alternates between text-left/visual-right and visual-left/text-right patterns within two-column sections. Card grids are used for features and testimonials. Navigation is a simple top bar with clearly defined links and two distinct button types (ghost and primary filled CTA).

### Imagery

The site predominantly uses product screenshots and contained abstract graphics. Product screenshots are clean, showcasing UI in context with a focused, minimal framing. Illustrations leverage a flat, organic style, often outlined or with solid brand-colored fills, serving primarily as decorative atmosphere. Icons are filled, with a moderate stroke weight, typically monochrome. The density is image-heavy in feature sections, with graphics playing an explanatory role, showing actual product functionality. Images are contained within defined boundaries, rarely overlapping, and often benefit from the standard 20px border-radius.
