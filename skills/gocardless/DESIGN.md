---
version: alpha
name: Gocardless
description: GoCardless employs a subtly sophisticated financial interface, balancing a grounded, warm achromatic palette with a singular, vibrant yellow accent. The design favors a spacious, approachable feel with soft edges, defined by generous padding and rounded corners. Typography is meticulously chosen, utilizing a blend of sturdy, modern sans-serifs and a refined, airy display font to establish a clear hierarchy. Interaction is supported by crisp, focused states rather than heavy ornamentation, ensuring a clean and efficient user experience.
colors:
  midnight-ink: "#1c1b18"
  stone-slate: "#545048"
  canvas-ecru: "#efece7"
  pebble-gray: "#d4d1cd"
  pure-white: "#ffffff"
  grounded-gold: "#f1f252"
  rich-umber: "#3c3428"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.22
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.21
  display:
    fontFamily: "system-ui"
    fontSize: 84px
    lineHeight: 1
spacing:
  cardRadius: 24px
  buttonRadius: 32px
  elementGap: 16px
  sectionGap: 64px
components:
  primary-action-button:
    role: The main call-to-action button for conversion and key user flows.
  ghost-outline-button:
    role: Secondary action button, typically paired with a primary button or for less critical actions.
  navigation-link-button:
    role: Button-like links within navigation.
  navigation-accent-button:
    role: High-visibility navigation item, often a 'Sign Up' or 'Register' type of action.
  information-card:
    role: Container for content, features, or product showcases.
  cookie-consent-banner:
    role: Persistent notification for cookie usage and consent options.
  icon-link-with-inset-shadow:
    role: Interactive elements with icon and text, often found in footers or detailed content sections.
---

## Overview

**North Star:** Warm canvas, confident yellow

GoCardless employs a subtly sophisticated financial interface, balancing a grounded, warm achromatic palette with a singular, vibrant yellow accent. The design favors a spacious, approachable feel with soft edges, defined by generous padding and rounded corners. Typography is meticulously chosen, utilizing a blend of sturdy, modern sans-serifs and a refined, airy display font to establish a clear hierarchy. Interaction is supported by crisp, focused states rather than heavy ornamentation, ensuring a clean and efficient user experience.

### Do's

- Prioritize Canvas Ecru (#efece7) for page backgrounds and Pure White (#ffffff) for card surfaces to establish a clean, layering effect.
- Use Grounded Gold (#f1f252) exclusively for primary calls to action and critical accent points to maintain its high-impact role.
- Apply a 32px border-radius for all primary buttons and prominent navigation pills for a consistent soft, modern feel.
- Implement the Haffer font family for body text and most headings, adjusting weights (400, 600, 700) to create typographic hierarchy.
- Maintain generous spacing with 64px section gaps and at least 24px card padding to ensure visual breathing room.
- Leverage the light weight of Para (300) for large, softer headings and Nudge (700) for impactful display hero titles.
- Ensure Ghost Outline Buttons use a 1px border in Midnight Ink (#1c1b18) and have a 4px radius for click targets, contrasting with larger primary buttons.

### Don'ts

- Do not introduce new chromatic colors outside of the Grounded Gold (#f1f252) accent; maintain the warm achromatic base palette.
- Avoid applying harsh or deep shadows; prefer subtle inset shadows or rely on background contrast to differentiate UI elements.
- Do not use letter-spacing adjustments unless specifically defined in a type role; default to `normal` for Haffer, DM Mono, Para, and Nudge.
- Refrain from using rectangular buttons; ensure all buttons have at least a 4px border-radius, with 32px for prominent actions.
- Avoid dense, compact layouts; uphold the comfortable density by respecting the 16px element gap and larger section gaps.
- Do not use different font families for core UI elements; Haffer should handle the majority of text content unless it's code/data (DM Mono) or a display title (Para/Nudge).
- Do not overuse Grounded Gold (#f1f252); its impact comes from its scarcity as a primary accent.

### Layout

The page primarily uses a max-width contained layout, though the hero section spans full-bleed with a dark background. The initial hero features a prominent, centered headline over the dark background, flanked by descriptive text and action buttons. Subsequent sections alternate between two-column text-left/image-right (or product screenshot right) layouts and centered content blocks. There's a clear vertical rhythm established by the 64px section gaps, leading to a comfortable, unhurried flow. Navigation is managed by a top bar with minimalist links and distinct accent buttons for calls to action, which can feature both light and dark backgrounds depending on the section.

### Imagery

The site predominantly uses product screenshots and abstract UI elements to convey its functionality. Product screenshots are clean, often showing snippets of the GoCardless interface within rounded frames, sometimes subtly overlaid to create depth. Photography, when used, focuses on individuals in professional settings, often with a muted, realistic color treatment, integrated into UI-like cards rather than as expansive background imagery. Icons are generally filled, monochromatic, and maintain a functional, assistive role. Overall, imagery is supportive and explanatory, reinforcing the product's use cases without being overly stylized or decorative, allowing the UI and typography to lead.
