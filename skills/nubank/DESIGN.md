---
version: alpha
name: Nubank
description: Nubank's visual identity feels like a digitally native financial institution — confidently modern and approachable, driven by a vibrant violet. Large, friendly sans-serif type with subtle tracking dominates, creating a conversational tone. The defining feature is a playful tension between the dominant 'Royalty Violet' and stark black/white neutrals, softened by generous 999px pill radii on interactive elements which stand out against the otherwise sharp-edged UI. A single, consistent elevated primary action button in vibrant violet grounds the visual hierarchy amidst fluid, content-driven layouts.
colors:
  royalty-violet: "#820ad1"
  deep-violet-shadow: "#290b4d"
  subtle-violet: "#714f8f"
  noir: "#000000"
  porcelain-white: "#ffffff"
  ash-gray: "#f4f4f4"
  silver-mist: "#a2a2a2"
  medium-gray: "#b3b3b3"
  dark-charcoal: "#666666"
  steel-gray: "#777777"
spacing:
  cardRadius: 12px
  buttonRadius: 999px
  elementGap: 8-24px
  sectionGap: 40px
components:
  cpf-sign-up-card:
    role: 
  product-carousel-cards:
    role: 
  primary-secondary-button-group:
    role: 
  primary-action-button:
    role: Call-to-action
  ghost-navigation-button:
    role: Navigation and secondary actions
  solid-disabled-button:
    role: Disabled state
  login-secondary-action-button:
    role: Login and less prominent actions
  hero-input-field:
    role: Data entry
  footer-badge:
    role: Informational badge
  carousel-card:
    role: Content showcase
---

## Overview

**North Star:** Royalty Violet and Pill Forms — a playful, digital-first financial presence.

Nubank's visual identity feels like a digitally native financial institution — confidently modern and approachable, driven by a vibrant violet. Large, friendly sans-serif type with subtle tracking dominates, creating a conversational tone. The defining feature is a playful tension between the dominant 'Royalty Violet' and stark black/white neutrals, softened by generous 999px pill radii on interactive elements which stand out against the otherwise sharp-edged UI. A single, consistent elevated primary action button in vibrant violet grounds the visual hierarchy amidst fluid, content-driven layouts.

### Do's

- Use `Royalty Violet` (#820ad1) exclusively for primary call-to-action buttons and active states to maintain visual punch.
- Apply `999px` border-radius to all buttons and prominent interactive links.
- Ensure all body text uses Graphik Medium with `1.50` line height for a comfortable reading experience.
- Utilize `Ash Gray` (#f4f4f4) for form input backgrounds for subtle visual distinction.
- Maintain `24px` of horizontal padding for primary buttons and at least `16px` of vertical padding for form inputs.
- Employ Graphik Medium letter-spacing values (-0.03em at large sizes decreasing to normal at small text) to give headlines a distinctive and compact feel.
- Use `Noir` (#000000) for primary text and major headings on light backgrounds, and `Porcelain White` (#ffffff) on dark backgrounds.

### Don'ts

- Do not introduce new color accents outside of the established violet palette.
- Avoid using sharp corners on interactive buttons; maintain `999px` pill shapes.
- Do not create overly dense layouts; ensure generous `40px` minimum `sectionGap` between content blocks.
- Do not use arbitrary font weights; stick to Graphik Medium 400 and 500.
- Do not apply shadows for subtle elevation; use distinct background colors like `Ash Gray` or `Deep Violet Shadow` instead.
- Avoid excessive line-heights, ensuring textual densities are consistent with the established `1.50` for body copy.

### Layout

The page primarily uses a max-width contained layout with centered content, though the hero section is full-bleed with a dark, immersive background and a centered, high-impact headline. Below the hero, the page transitions to a light theme with alternating sections using `Porcelain White` and `Ash Gray` backgrounds. Content blocks are typically structured in two-column layouts (text left, image right, or vice-versa) or a prominent three-column card grid in the 'Para cada momento, um Nubank diferente' section. Vertical spacing between sections is generous, around `40px` (though not consistently defined, derived from `marginBottom` and `marginTop` values). A sticky top navigation bar with the Nubank logo and key links is always present. The footer is a dense, multi-column layout on a `Noir` background, utilizing `Silver Mist` text for links and info.

### Imagery

The site uses a mix of high-quality, aspirational lifestyle photography for brand storytelling and polished product screenshots/illustrations for feature showcases. Photography often depicts diverse groups of people laughing or engaging in financial activities, leaning towards candid and natural light. Product images are typically presented on clean, simple backgrounds. A prominent hero section uses an aerial, dynamic shot of a stadium, tinted with the brand's violet, demonstrating a full-bleed, almost immersive visual. Imagery is broadly contained within rounded-corner elements (e.g., `32px` radius cards in the carousel) or subtle gradients that visually integrate with text. Iconography is minimal, primarily leveraging line icons with `Steel Gray` (#777777), maintaining the clean aesthetic. The role of imagery is both decorative, setting a brand mood, and explanatory, showcasing product features.
