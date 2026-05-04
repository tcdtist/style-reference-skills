---
version: alpha
name: Google for Education
description: This design system feels like a thoughtfully organized learning environment, clean and accessible, with a strong institutional identity. Its visual precision is built on harmonious Google Sans typography and a distinctive palette of blue and green accents on a stark white background. The use of soft border radii and subtle shadow planes prevents the interface from feeling sterile, instead fostering an approachable and encouraging atmosphere.
colors:
  classroom-blue: "#1a73e8"
  educator-green: "#188038"
  interactive-blue: "#1967d2"
  sky-tint: "#e8f0fe"
  mint-glaze: "#ceead6"
  page-white: "#f8f9fa"
  text-dark: "#202124"
  text-medium: "#3c4043"
  text-subtle: "#5f6368"
  border-light: "#dadce0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.072px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.57
    letterSpacing: 0.05px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.0096px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
    letterSpacing: 0.009px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.29
    letterSpacing: -0.01px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.006px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.09
    letterSpacing: -0.008px
spacing:
  buttonRadius: 200px
  elementGap: 8px
  sectionGap: 64px
components:
  button-group-primary-secondary-ctas:
    role: 
  ai-feature-cards-educator-student:
    role: 
  region-selector-modal-dialog:
    role: 
  primary-call-to-action-button:
    role: Main interactive element
  secondary-outline-button:
    role: Alternative interactive element
  navigation-link-button:
    role: Navigation or secondary action
  inline-text-link:
    role: Contextual navigation
  feature-card:
    role: Content container
  modal-dialog:
    role: Overlay content
  language-selector-input:
    role: Form element
  chip-tag:
    role: Categorization or filtration
---

## Overview

**North Star:** Academic blueprint on a clean whiteboard. Clarity and structure in a digitally-enhanced learning space.

This design system feels like a thoughtfully organized learning environment, clean and accessible, with a strong institutional identity. Its visual precision is built on harmonious Google Sans typography and a distinctive palette of blue and green accents on a stark white background. The use of soft border radii and subtle shadow planes prevents the interface from feeling sterile, instead fostering an approachable and encouraging atmosphere.

### Do's

- Prioritize Google Sans Display for all hierarchical headlines to maintain authoritative, clear communication.
- Use Classroom Blue (#1a73e8) exclusively for primary calls to action and critical interactive elements.
- Employ the 200px border-radius for all primary buttons and interactive 'chips' to maintain the signature pill shape.
- Maintain a clear visual hierarchy by differentiating text with Text Dark (#202124), Text Medium (#3c4043), and Text Subtle (#5f6368).
- Apply Border Light (#dadce0) for all subtle dividers, borders, and outlined states to ensure a soft, unobtrusive separation.
- Utilize a base spacing unit of 8px, scaling up consistently for element, card, and section spacing (e.g., 8px, 16px, 24px, 32px, 64px).
- Employ Sky Tint (#e8f0fe) or Mint Glaze (#ceead6) for subtle background shifts to break content monotony without harsh transitions.

### Don'ts

- Avoid using harsh shadows; instead, opt for subtle, barely-there elevations to maintain the light, modern aesthetic.
- Do not introduce new typefaces; strictly adhere to Google Sans Display and Google Sans Text.
- Refrain from using saturated colors other than Classroom Blue or Educator Green to prevent visual clutter and maintain brand consistency.
- Do not use sharp corners; the soft 8px radius for containers and the 200px radius for buttons are fundamental to the system's character.
- Avoid dense, text-heavy blocks without visual breaks; incorporate generous white space and imagery to maintain readability and visual comfort.
- Do not deviate from the established type scale; maintain consistent font sizes and line heights for defined roles (e.g., headline, body, caption).
- Do not use dark backgrounds for main content areas; maintain Page White (#f8f9fa) as the dominant background color to reinforce the light theme.

### Layout

The page model is primarily max-width contained, centered on the screen, creating a sense of order. The hero section often features a large, centered headline (80px Google Sans Display) over a clean white background. Content sections follow a consistent rhythm of alternating white and light-accent bands (e.g., Sky Tint), with ample vertical spacing (64px section gap). Content is arranged in alternating text-left/image-right or text-right/image-left patterns, often in two columns, creating a dynamic yet balanced flow down the page. Feature areas sometimes use a 2-column or 3-column card grid. The navigation is a persistent top bar with a 'Contact Sales' primary button, and secondary navigation elements are minimal or contextual within sections.

### Imagery

The visual language is characterized by clean, context-free product screenshots of the Google Classroom interface. These are typically contained within rounded-corner frames (8px or 24px radius), presented against either the Page White background or the subtle accent backgrounds like Sky Tint. Icons are primarily filled or outlined, using Classroom Blue or Educator Green, with a consistent, relatively thin stroke weight. Imagery serves an explanatory and product-showcase role, demonstrating functionality rather than creating atmosphere, leading to a text-dominant layout with images serving as clear, illustrative anchors.
