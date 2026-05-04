---
version: alpha
name: Quizlet
description: This design system feels like a friendly, structured learning environment, prioritizing clarity and interactive engagement. The dominant near-gray background (#F6F7FB) provides a clean canvas, while a palette of vivid and moderate hues—primarily a bold violet (#4255FF) and accent colors like light blue (#98E3FF) and vibrant pink (#EEAAFF)—define interactive elements and illustrate content categories. The consistent use of `hurme_no2-webfont` with varying weights creates a cohesive textual experience, balancing readability with a distinctive, approachable character.
colors:
  stormcloud-ink: "#282e3"
  quizlet-violet: "#4255ff"
  sky-study: "#98e3ff"
  flashcard-pink: "#eeaaff"
  night-violet: "#423ed8"
  practice-orange: "#ffc38c"
  slate-text: "#586380"
  light-slate: "#939bb4"
  deep-slate: "#2e3856"
  page-background: "#f6f7fb"
  pure-white: "#ffffff"
  ash-border: "#d9dde8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.27
  display:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.25
spacing:
  cardRadius: 8px
  buttonRadius: 200px
  elementGap: 8px
  sectionGap: 48px
components:
  study-mode-cards:
    role: 
  flashcard-set-cards-grid:
    role: 
  cta-button-group-with-search-bar:
    role: 
  secondary-button-ghost:
    role: Action
  icon-button-circular:
    role: Navigation/Action
  navigation-link-button:
    role: Navigation
  category-card-learn:
    role: Content Display
  category-card-flashcards:
    role: Content Display
  category-card-practice-tests:
    role: Content Display
---

## Overview

**North Star:** Academic Playground on Soft Gray. Like a well-organized desk scattered with colorful learning tools.

This design system feels like a friendly, structured learning environment, prioritizing clarity and interactive engagement. The dominant near-gray background (#F6F7FB) provides a clean canvas, while a palette of vivid and moderate hues—primarily a bold violet (#4255FF) and accent colors like light blue (#98E3FF) and vibrant pink (#EEAAFF)—define interactive elements and illustrate content categories. The consistent use of `hurme_no2-webfont` with varying weights creates a cohesive textual experience, balancing readability with a distinctive, approachable character.

### Do's

- Use 'Page Background' (`#f6f7fb`) as the foundational canvas for all pages.
- Apply 'Quizlet Violet' (`#4255ff`) exclusively for primary call-to-action buttons and key interactive elements to maintain focus.
- Utilize `hurme_no2-webfont` weight 700 for headlines and primary CTA button text to ensure clear hierarchy and impact.
- Maintain `8px` border-radius for all content cards and larger container elements, and `4px` for input fields and smaller interactive items.
- Employ the `Stormcloud Ink` shadow (`rgba(40, 46, 62, 0.1) 0px 4px 16px 0px`) for elevated components like cards and navigation to create subtle depth.
- Employ `16px` padding for internal spacing within content blocks and `48px` for vertical separation between major sections.
- Use `Stormcloud Ink` (`#282e3e`) for main body text and prominent informational text, and `Slate Text` (`#586380`) for secondary text details.

### Don'ts

- Do not introduce new highly saturated colors outside of the defined accent palette, as they will clash with the established brand hues.
- Avoid using `200px` border-radius on any element other than primary buttons to preserve their distinctive pill shape.
- Do not use generic system fonts; only `hurme_no2-webfont` should be used for all text content.
- Refrain from heavy, dark shadows; the subtle `Stormcloud Ink` shadow is sufficient for elevation.
- Do not use `0px` border-radius on any visible component unless it's a specific, text-only navigation link, to preserve a soft, approachable aesthetic.
- Do not cluster too much vibrant imagery; allow the core UI colors and clean layout to guide user attention.
- Avoid using `Pure White` (#ffffff) for any primary text color; it's reserved for backgrounds and text on dark buttons.

### Layout

The page primarily uses a max-width contained layout, approximately 1200px wide, centered within the browser. The hero section features a centered headline and subtext over a `Page Background` (`#f6f7fb`), followed by a row of distinct, accent-colored category cards. Sections generally follow a consistent `48px` vertical spacing. Content is often arranged in alternate text-left/image-right compositions for features, and a flexible grid for content cards (visible as a 3-column grid in some sections). The navigation is a fixed top bar (`64px` height) with a clear search input and primary CTA button. The footer is dense with links, organized into column lists.

### Imagery

Imagery features a mix of product screenshots demonstrating the app's interface (contained in stylized device mockups), flat, geometric illustrations that are brand-colored and serve as decorative accents on cards, and abstract graphics. Photography is largely absent. The icons are minimalistic, usually filled, with a medium stroke weight where outlines are present, consistent with the brand colors. Imagery plays a role in both explanatory content (product screenshots) and decorative atmosphere (card illustrations), balancing visual interest with clean UI. Density shows imagery playing a significant role in breaking up text and making sections more engaging, especially in the hero area and feature descriptions.
