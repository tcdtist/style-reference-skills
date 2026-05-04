---
version: alpha
name: adidas
description: This design system projects a direct, no-nonsense corporate voice, stripped down to essential communication. It uses a stark achromatic palette of black and white, punctuated by subtle gray accents to define secondary text and structural elements. The complete absence of visual flair—no shadows, gradients, or rounded corners beyond a minimal 3px—communicates efficiency and seriousness, while the custom 'adineue' typeface offers a distinct, yet understated, brand presence.
colors:
  absolute-zero: "#ffffff"
  pitch-black: "#000000"
  shadow-play: "#e0e0e0"
  concrete-gray: "#999999"
  pebble: "#cccccc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.4
  display:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.4
spacing:
  elementGap: 8px
  sectionGap: 40px
components:
  error-alert-banner:
    role: 
  two-column-info-cards:
    role: 
  primary-action-button-group:
    role: 
  primary-action-button:
    role: Main call-to-action.
  default-input-field:
    role: Standard text input for forms.
  section-heading:
    role: Organizes content into clear sections.
  body-text-paragraph:
    role: Communicates detailed information.
  reference-error-text:
    role: Displays unique identifiers or technical details.
  secondary-description-text:
    role: Provides additional context or clarifies information.
---

## Overview

**North Star:** monochromatic corporate directive

This design system projects a direct, no-nonsense corporate voice, stripped down to essential communication. It uses a stark achromatic palette of black and white, punctuated by subtle gray accents to define secondary text and structural elements. The complete absence of visual flair—no shadows, gradients, or rounded corners beyond a minimal 3px—communicates efficiency and seriousness, while the custom 'adineue' typeface offers a distinct, yet understated, brand presence.

### Do's

- Use Pitch Black (#000000) for all primary text, headings, and interactive button backgrounds.
- Maintain a minimal border-radius of 3px for all interactive elements like buttons and input fields.
- Apply adineue for all headline and body text, ensuring a consistent brand tone.
- Utilize 40px of vertical margin for significant section breaks and larger content blocks.
- Employ the 1.4 line height for adineue body and heading text for comfortable reading.
- Use Absolute Zero (#ffffff) as the primary page background and for input field backgrounds.
- Apply Concrete Gray (#999999) only for secondary, less prominent text or muted borders.

### Don'ts

- Avoid using any colors outside the defined achromatic palette of Pitch Black, Absolute Zero, Shadow Play, Concrete Gray, and Pebble.
- Do not introduce any drop shadows or complex elevation effects; the design relies on flat separation.
- Never use rounded corners exceeding 3px; maintain the sharp, angular aesthetic.
- Refrain from introducing decorative gradients; stick to solid color fills.
- Do not deviate from the specified font families (adineue, Arial) or their assigned weights and sizes.
- Avoid introducing images or graphics with vibrant colors; all visuals should either be monochromatic or integrate seamlessly with the achromatic theme.
- Do not use letter spacing other than 'normal' for any text elements.

### Layout

The page primarily uses a max-width contained model, centrally aligning content within a clear visual frame. The hero section is characterized by a centered headline and brand logo. Sections are composed of text blocks, often arranged in single or two-column layouts, with consistent vertical spacing (40px for major sections, 20px within text blocks) creating a strong rhythm. Content is generally stacked and centered for key messages, then shifts to a left-aligned, two-column structure for more detailed explanatory text. Navigation is not evident in the provided context, suggesting a minimal or absent global navigation for this specific page type. The layout density is comfortable, providing sufficient white space around text to avoid crowding.

### Imagery

The site uses an 'icons-only' approach for branding, specifically the adidas logo. No other photography, illustrations, or complex graphics are present, emphasizing a purely functional and direct communication style. The logo is typically a contained graphic rather than full-bleed, serving as a clear brand mark without contributing to atmosphere or explanation. The absence of imagery focuses user attention entirely on text-based information.
