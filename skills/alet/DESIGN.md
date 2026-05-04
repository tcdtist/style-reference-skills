---
version: alpha
name: alet
description: ALET utilizes a muted, gallery-like aesthetic, offering an understated backdrop for its creative work. The design minimizes visual distractions, employing a monochrome palette dominated by dark text on a warm, desaturated canvas. Typography carries the primary visual weight, with elegant serifs for headlines and crisp sans-serifs for functional text, achieving a sophisticated yet grounded presentation. Interactive elements are subtle, blending into the background until hovered, emphasizing content over chrome.
colors:
  canvas-clay: "#ada59b"
  inkwell: "#000000"
  charcoal-grey: "#252525"
  deep-shadow: "#060506"
  ash-secondary: "#101010"
  muted-stone: "#454545"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.1
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.1
  body:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.1
spacing:
  cardRadius: 10.8px
  buttonRadius: 9999px
  elementGap: 5px
  sectionGap: 101px
components:
  navigation-link:
    role: Interactive text link in the header and footer.
  category-label:
    role: Descriptive text for content categories.
  main-heading:
    role: Large, eye-catching title for sections or hero content.
  gallery-item-card:
    role: Display unit for portfolio pieces.
  linear-random-toggle:
    role: Interactive element for content sorting.
---

## Overview

**North Star:** Warm clay gallery

ALET utilizes a muted, gallery-like aesthetic, offering an understated backdrop for its creative work. The design minimizes visual distractions, employing a monochrome palette dominated by dark text on a warm, desaturated canvas. Typography carries the primary visual weight, with elegant serifs for headlines and crisp sans-serifs for functional text, achieving a sophisticated yet grounded presentation. Interactive elements are subtle, blending into the background until hovered, emphasizing content over chrome.

### Do's

- Use 'Canvas Clay' #ada59b as the primary background for all page sections and major UI elements.
- Apply 'Inkwell' #000000 for all primary text, ensuring a high contrast against the background.
- Employ Silk Serif Light 400 at 23px with 0.94 line height for all prominent headings to maintain a refined tone.
- Utilize Work Sans 400 at sizes 11px, 12px, or 13px with their respective line heights for all body text, navigation, and functional labels.
- Apply a 10.8px border-radius to all card-like containers, establishing a soft corner aesthetic.
- Use a minimum of 101px vertical spacing between major page sections to ensure a comfortable density.
- Outline interactive elements like buttons and toggles with a 1px 'Inkwell' #000000 border and a 9999px radius for a subtle, rounded pill shape.

### Don'ts

- Avoid introducing vibrant colors; all UI elements must adhere to the defined monochrome palette of warm grays and off-whites.
- Do not use heavy shadows or gradients; flat surfaces and subtle borders define the visual hierarchy.
- Refrain from using bold or heavy weights for any typeface; lightness and delicate forms are key to the brand's aesthetic.
- Do not deviate from the specified typefaces; custom Work Sans and Silk Serif are integral to the brand identity.
- Avoid dense, overcrowded layouts; prioritize ample whitespace and comfortable spacing values like sectionGap 101px and elementGap 5px.
- Do not use generic system fonts; 'Work Sans' and 'Silk Serif' are deliberate choices.
- Introduce no rounded corners sharper than 10.8px for cards, nor less than 9999px for buttons, to maintain consistency.

### Layout

The page structure is full-bleed, with content dynamically displayed across the viewport without a fixed max-width container, creating an immersive experience. The hero area is atypical, consisting of horizontally scrolling image cards and text, inviting exploration. Sections flow seamlessly with consistent vertical spacing, leveraging a natural, relaxed rhythm. Text and content blocks lean towards centered compositions or appear within the flow of the image carousel. Navigation is a minimalist top bar, almost blending into the background, providing essential links without drawing undue attention.

### Imagery

This design system uses a combination of curated, high-quality photography and minimalist graphical elements. Photography is central, featuring interiors, product shots, and abstract compositions, often with muted color palettes that blend with the site's overall tone. Images frequently appear as contained blocks within the layout, sometimes overlapping or featuring a slight rotation. Iconography is minimal, primarily text-based or simple, fine-line outlined styles, complementing the lightweight typography. Imagery serves both decorative atmosphere and to showcase content, and the density is balanced, allowing text to breathe alongside visuals.
