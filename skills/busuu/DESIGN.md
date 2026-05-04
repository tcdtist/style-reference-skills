---
version: alpha
name: Busuu
description: Busuu's design creates an educational and encouraging atmosphere through its vibrant, optimistic color palette and clear, structured layout. A dominant hero section with a gradient background grounds the brand's primary visual identity, which then transitions into a clean, spacious white canvas. Vivid blue and a unique, bright green act as key interactive accents, indicating engagement and positive action, while the consistent use of rounded corners on buttons and navigation elements softens the overall feel, enhancing approachability.
colors:
  ocean-blue: "#116eee"
  spring-green: "#11ee92"
  sky-tint: "#87b6f6"
  light-bluewash: "#b8d4fa"
  electric-cyan: "#06d2ff"
  action-red: "#fa3746"
  mellow-yellow: "#ffcf00"
  pure-white: "#ffffff"
  cloud-gray: "#f2f7fd"
  border-fog: "#d6dee6"
  text-anthracite: "#252b2f"
  slate-blue: "#666e7"
  disabled-ash: "#b3b3b3"
  deep-black: "#000000"
  hero-gradient: "#116eee"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.14
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.14
spacing:
  buttonRadius: 45.04px
  elementGap: 8-20px
  sectionGap: 40-60px
components:
  primary-cta-button-group:
    role: 
  language-selector-carousel:
    role: 
  display-language-selector-form:
    role: 
  primary-call-to-action-button:
    role: Interactive element
  hero-section-headline:
    role: Information display
  text-input-field:
    role: Form element
  general-body-text:
    role: Information display
---

## Overview

**North Star:** Vibrant learning portal on a clean canvas. A spacious, friendly digital environment where interactive elements pop against a minimal backdrop.

Busuu's design creates an educational and encouraging atmosphere through its vibrant, optimistic color palette and clear, structured layout. A dominant hero section with a gradient background grounds the brand's primary visual identity, which then transitions into a clean, spacious white canvas. Vivid blue and a unique, bright green act as key interactive accents, indicating engagement and positive action, while the consistent use of rounded corners on buttons and navigation elements softens the overall feel, enhancing approachability.

### Do's

- Prioritize 'Spring Green' (#11ee92) for all primary call-to-action buttons, ensuring a 45.04px border-radius and 'Text Anthracite' (#252b2f) text.
- Use 'Ocean Blue' (#116eee) exclusively for interactive elements like links and secondary navigation items, either as text color or outline.
- Maintain a clear visual hierarchy by setting headlines in Nista 800 and body text in Nista 400 at their respective semantic sizes.
- Apply the `rgba(0, 0, 0, 0.1) 0px 1px 2px 0px` shadow consistently for subtle elevation on cards or modal elements.
- Utilize 'Pure White' (#ffffff) as the predominant background color for content sections to maximize readability.
- Employ a 4px base unit for all spacing, with common increments like 8px, 16px, 20px, and 40px for larger gaps and padding.
- Align all input fields with a 5px border-radius and 'Border Fog' (#d6dee6) border for a unified form aesthetic.

### Don'ts

- Do not use dark or highly saturated colors for large background areas, except for the hero section's specific gradient.
- Avoid using any border-radius value other than 5px for inputs, 16px for nav items, or 45.04px for buttons, to preserve brand consistency.
- Refrain from using strong, contrasting colors for general body text; stick to 'Text Anthracite' (#252b2f) and 'Slate Blue' (#666e7e).
- Do not introduce new shadow styles; adhere to the specified `rgba(0, 0, 0, 0.1) 0px 1px 2px 0px` for all elevation.
- Do not add unnecessary decorative elements or strong graphical treatments that compete with the clean, friendly aesthetic.
- Avoid using the 'Spring Green' (#11ee92) or 'Ocean Blue' (#116eee) colors for non-interactive textual content; reserve them for active elements.

### Layout

The page primarily follows a max-width contained model after an initial full-bleed hero section. The hero is a dynamic gradient with a centered headline and CTA. Subsequent sections alternate between a 'Pure White' background and a 'Cloud Gray' or similar light neutral background, creating a gentle visual rhythm. Content within sections is often structured with left-aligned text and right-aligned visuals (or vice-versa) or as centered stacks for key messages. Navigation is a sticky top bar with clearly defined 'Learn for free' and 'Log in' actions, utilizing both a primary accent button and a secondary outlined button. A prominent feature is the use of horizontal scrollable carousels for content like language selection, indicating more content availability without cluttering the initial view.

### Imagery

The site uses a combination of abstract, friendly vector illustrations with a flat, clean aesthetic, and flags as small, functional icons. Illustrations feature simplified human figures engaged in learning activities, often within subtle outlines and filled with brand colors (like 'Sky Tint', 'Electric Cyan', 'Action Red', and 'Mellow Yellow') against a world map motif. Imagery is primarily explanatory and decorative, supporting the educational content rather than product showcases. There's a minimal use of complex photography, shifting focus to the UI and illustrations. Icons are outlined or filled, generally monochrome in 'Deep Black' or 'Text Anthracite', with a consistent visual weight.
