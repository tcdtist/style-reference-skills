---
version: alpha
name: Toggl Track
description: Toggl Track employs a playful yet professional aesthetic, characterized by a predominantly light theme with deep violet accents for structure and emphasis. Interactive elements pop with a vibrant 'Orchid Bloom' color, lending a dynamic and engaging feel to the user interface. Typography balances crisp readability with distinct, branded headlines, while generous internal padding and rounded corners contribute to a soft, approachable component style. The system leverages subtle surface variations to define hierarchy rather than heavy shadows.
colors:
  midnight-plum: "#412a4c"
  regal-violet: "#2c1338"
  orchid-bloom: "#e57cd8"
  misty-mauve: "#564260"
  slate-echo: "#6b5a74"
  pebble-gray: "#817187"
  sunbeam-yellow: "#ffde91"
  white-canvas: "#fefbfa"
  frost-haze: "#fcf1f8"
  lilac-mist: "#fdeae2"
  lavender-whisper: "#fae5f7"
  powder-pink: "#f7d8f3"
  onyx: "#000000"
  cloud-burst: "#d5d0d7"
  soft-stone: "#c0b8c3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.35
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.15
  display-lg:
    fontFamily: "system-ui"
    fontSize: 69px
    lineHeight: 1.1
spacing:
  cardRadius: 14px
  buttonRadius: 26px
  elementGap: 10px
  sectionGap: 75px
components:
  primary-action-button:
    role: Calls to action, emphasizing core user journeys.
  ghost-action-button:
    role: Secondary actions that should not compete with the primary call to action.
  navigation-link-button:
    role: Navigation items within the primary header, appearing as a ghost button.
  inline-text-link:
    role: Navigational links embedded within body text or footer, designed to be understated.
  default-card:
    role: Containers for features, info blocks, and grouped content.
  elevated-feature-card:
    role: Prominent information blocks, drawing more attention than default cards.
  accent-card:
    role: Cards for special content or promotions, using a subtle background tint.
  promotional-card:
    role: Higher emphasis promotional content, using a slightly deeper background tint.
---

## Overview

**North Star:** Orchid Bloom Productivity Canvas

Toggl Track employs a playful yet professional aesthetic, characterized by a predominantly light theme with deep violet accents for structure and emphasis. Interactive elements pop with a vibrant 'Orchid Bloom' color, lending a dynamic and engaging feel to the user interface. Typography balances crisp readability with distinct, branded headlines, while generous internal padding and rounded corners contribute to a soft, approachable component style. The system leverages subtle surface variations to define hierarchy rather than heavy shadows.

### Do's

- Prioritize Orchid Bloom (#e57cd8) for primary calls to action, active states, and elements requiring significant visual emphasis.
- Use Midnight Plum (#412a4c) for major text elements, hero section backgrounds, and defining container fills.
- Employ GT Haptik Medium for all headlines, using GT Haptik Medium Rotalic for emphasis on key words within headings.
- Maintain a default border-radius of 10px for cards and general containers, extending to 26px for most buttons and 200px for fully rounded buttons.
- Separate content sections with White Canvas (#fefbfa) and Frost Haze (#fcf1f8) backgrounds to create visual breaks without hard lines.
- Utilize Inter for all body copy, links, and functional UI elements to ensure consistent readability.
- Ensure generous internal padding for all cards, standardizing around 15px to 30px depending on prominence, and a default element gap of 10px.

### Don'ts

- Avoid using multiple accent colors; confine strong saturation to Orchid Bloom (#e57cd8) to maintain visual hierarchy.
- Do not introduce heavy drop shadows or excessive elevation; rely on varied background colors and subtle borders for surface distinction.
- Do not deviate from the specified GT Haptik fonts for headlines; generic sans-serif alternatives will compromise brand identity.
- Do not use highly saturated colors for large text blocks; reserve them for accents and calls to action.
- Avoid tight spacing in cards and between elements; maintain a comfortable density for an approachable feel.
- Do not use dark backgrounds without providing sufficient contrast for text and interactive elements; ensure readability against deeper tones like Regal Violet (#2c1338).
- Do not use square corners; ensure all interactive elements and content containers have a degree of roundedness, with a minimum of 8px for small elements.

### Layout

The page uses a contained layout with no explicit global max-width, allowing content to stretch broader than typical. The hero section is full-bleed with a deep Regal Violet (#2c1338) background, featuring a large, centered headline and primary actions. Subsequent sections generally alternate between White Canvas (#fefbfa) and Frost Haze (#fcf1f8) backgrounds, creating a clear vertical rhythm. Content is arranged in alternating text-left/image-right and image-left/text-right patterns, often using two-column structures. Card grids are prevalent, displaying features and integrations in a flexible layout. Navigation is a sticky top bar with a primary 'Try for free' button and secondary links.

### Imagery

The site primarily uses abstract, simplified 2D illustrations with a strong focus on product UI elements and data visualization examples. Illustrations are geometric, outlined in various shades of the brand's violet tones, and often feature small product screenshots or abstract representations of devices. Iconography is filled or outlined with medium stroke weight, in monochromatic or subtly tinted violet. Imagery serves an explanatory and atmospheric role, showcasing product functionality in context without relying on photography or complex 3D renders. Density is moderate, balancing text-heavy sections with illustrative accents.
