---
version: alpha
name: Square
description: Square's design system evokes the precision of a finely tuned instrument, balancing robust functionality with an accessible aesthetic. The interplay of a predominantly white background with crisp dark typography creates a high-contrast, information-first experience that feels direct and trustworthy. Strategic use of a vibrant blue accent color serves as a clear functional indicator, like a status light on a reliable machine, guiding the user without visual clutter, while subtle rounded corners on interactive elements soften the overall technical impression.
colors:
  sky-blue: "#006aff"
  ink-black: "#1a1a1a"
  graphite: "#737373"
  pure-white: "#ffffff"
  deep-black: "#030303"
  light-fog: "#f2f2f2"
  ash-gray: "#cccccc"
  silver-mist: "#d9d9d9"
  stone-gray: "#b3b3b3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.71
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.19
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.12
    letterSpacing: -0.5px
  display:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1.1
    letterSpacing: -0.6px
spacing:
  elementGap: 10-20px
  sectionGap: 48px
components:
  button-group:
    role: 
  feature-cards:
    role: 
  email-signup-form:
    role: 
  primary-action-button:
    role: Main call to action.
  secondary-outline-button:
    role: Secondary calls to action, navigation links.
  ghost-button:
    role: Minimal interactive elements, textual links as buttons.
  pill-button:
    role: Categorization, filters, or internal navigation. Not used for primary actions.
  information-card-light-fog:
    role: Showcasing features or information blocks.
  information-card-pure-white:
    role: Emphasized feature cards or content blocks.
  text-input-field:
    role: User input for forms.
---

## Overview

**North Star:** Crisp Utility, Intuitive Flow. The UI emphasizes clarity and direct interaction, like operating a well-designed tool.

Square's design system evokes the precision of a finely tuned instrument, balancing robust functionality with an accessible aesthetic. The interplay of a predominantly white background with crisp dark typography creates a high-contrast, information-first experience that feels direct and trustworthy. Strategic use of a vibrant blue accent color serves as a clear functional indicator, like a status light on a reliable machine, guiding the user without visual clutter, while subtle rounded corners on interactive elements soften the overall technical impression.

### Do's

- Use Sky Blue (#006aff) exclusively for primary calls to action and active interactive states.
- Maintain a clear hierarchy with Square Sans Display VF for headlines and Square Sans Text VF for body copy.
- Always apply a 5px radius to primary buttons and input fields for a consistent tactile feel.
- Utilize Pure White (#ffffff) as the default background for content sections to maximize readability.
- Employ Light Fog (#f2f2f2) to subtly differentiate background sections without introducing strong visual breaks. It acts as a soft divider.
- Ensure input fields have a 1px solid Ink Black (#1a1a1a) border to clearly delineate the interactive area.

### Don'ts

- Do not use Sky Blue (#006aff) for decorative elements or non-interactive text.
- Avoid using Cash Sans for long passages of text; reserve it for specific button labels and distinct accents.
- Do not introduce strong visual shadows on cards or elements; rely on background color changes for depth.
- Do not use highly saturated colors other than Sky Blue; maintain a largely monochromatic palette with blue as the sole accent.
- Avoid arbitrary border radii; stick to 0px, 4px, 5px, 20px, 24px, or 32px for specific component types.
- Do not use highly decorative or script fonts; maintain a modern, sans-serif aesthetic throughout.

### Layout

The page primarily uses a max-width centered layout, containing content within a clear reading area against a continuous white background for most sections. The hero section breaks this slightly by using a two-column split: a left-aligned headline and CTA on a white canvas, paired with a right-aligned full-height photographic element. Sections alternate visually between Pure White and Light Fog (#f2f2f2) backgrounds, creating a clear vertical rhythm without hard dividers. Content is often arranged in symmetrical multi-column grids (typically 3-column for feature showcases) or left-aligned text blocks with associated visual content. Breathing room between sections is generous and consistent. The site uses a sticky top navigation bar with a centered logo and right-aligned action buttons, maintaining constant accessibility.

### Imagery

The visual language focuses on a mix of authentic, often close-up photography of people interacting with Square's physical payment devices, juxtaposed with clean digital product screenshots showing the software's interface. Photography is grounded and real, often featuring hands, creating a sense of accessibility and tangibility. Product screenshots are contained within device mockups or simple rectangular masks, emphasizing clarity of the UI. Icons are simple, filled, and monochromatic, primarily Ink Black or Pure White, serving an explanatory rather than decorative role. Imagery is always contained, never full-bleed, and generally in a 16:9 or similar aspect ratio, serving to illustrate features or user benefits rather than purely aesthetic embellishment. There is a strong absence of abstract or illustrative graphics, reinforcing a practical, business-focused approach.
