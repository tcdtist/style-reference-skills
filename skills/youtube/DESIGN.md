---
version: alpha
name: YouTube
description: The design prioritizes content delivery with a near-monochromatic palette and a spacious layout. A pure white background ( #ffffff) serves as a digital canvas, allowing black text (#0f0f0f) and a singular vivid blue (#065fd4) for interactive elements to carry all visual weight. Rounded corners (10px, 18px) provide subtle softness against an otherwise austere, functional aesthetic. The lack of decorative elements directs full attention to the video and community content.
colors:
  canvas-white: "#ffffff"
  ink-black: "#0f0f0f"
  medium-gray: "#606060"
  light-gray: "#909090"
  border-gray: "#c6c6c6"
  accent-blue: "#065fd4"
  youtube-red: "#ff0033"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: 0px
spacing:
  buttonRadius: 18px
  elementGap: 8px
  sectionGap: 48px
components:
  history-off-dialogue-card:
    role: 
  sidebar-navigation-explore-section:
    role: 
  sign-in-prompt-sidebar-card:
    role: 
  navigation-link:
    role: Interactive element
  search-input-field:
    role: Data entry
  standard-button-text:
    role: Action trigger
  rounded-action-button:
    role: Primary action
  dialogue-card:
    role: Information display
  youtube-red-indicator-button:
    role: Brand-specific action
---

## Overview

**North Star:** Crisp White Canvas; an expansive, information-first interface on a stark white background with minimal ornamentation.

The design prioritizes content delivery with a near-monochromatic palette and a spacious layout. A pure white background (
#ffffff) serves as a digital canvas, allowing black text (#0f0f0f) and a singular vivid blue (#065fd4) for interactive elements to carry all visual weight. Rounded corners (10px, 18px) provide subtle softness against an otherwise austere, functional aesthetic. The lack of decorative elements directs full attention to the video and community content.

### Do's

- Use Canvas White (#ffffff) as the default background for all page sections and elevated components.
- Apply Ink Black (#0f0f0f) for all main headings, body text, and primary icons to ensure high contrast.
- Employ Accent Blue (#065fd4) exclusively for active states, clickable links, and primary calls to action.
- Maintain a clear visual hierarchy by utilizing Medium Gray (#606060) for secondary information and Light Gray (#909090) for tertiary details.
- Ensure all interactive buttons use a border-radius of 18px for a consistent soft, approachable shape.
- Adhere to Roboto weight 400 for standard body text and weight 600 for YouTube Sans for section headings.
- Use 16px horizontal padding within interactive buttons or elements like the 'Update setting' button.

### Don'ts

- Avoid using multiple accent colors; confine brand emphasis strictly to Accent Blue (#065fd4) and YouTube Red (#ff0033) for branding only.
- Do not introduce complex shadows or gradients; prioritize a flat, clean aesthetic over dimensional effects.
- Refrain from using heavily saturated images or illustrations that compete with UI elements; opt for functional imagery.
- Do not deviate from the established type scale and font families; maintain consistency in text presentation.
- Avoid tight spacing; maintain `elementGap` of 8px and larger gaps for sections to ensure content breathability.
- Do not use dark backgrounds for main content areas; reserve them for specific, isolated components if necessary.
- Do not apply rounded corners indiscriminately; reserve radii like 18px for buttons and 10px for cards/dialogues.

### Layout

The page adheres to a max-width 1185px centered content model. The hero section includes a sticky top navigation bar with a search input. A persistent left-hand sidebar acts as the primary navigation, featuring a hierarchical list of links and categories. Content areas are primarily full-width within the max-width container, with information generally stacked vertically or presented in a single, primary content column. There are no alternating background bands; the layout relies on a uniform Canvas White background to create a spacious, unbounded feeling. The design is information-dense in the main content area, with vertical sections separated by generous padding (sectionGap).

### Imagery

The site primarily uses functional icons and the brand's YouTube Red logo. Icons are line-based and filled, typically in black or gray, maintaining a minimalist, system-driven aesthetic. When imagery is present, it's typically video thumbnails – embedded content rather than decorative graphics. The visual language emphasizes direct content presentation over abstract visuals or elaborate photography, with illustrations being absent. Density is low, with imagery serving explanatory or embedded content roles.
