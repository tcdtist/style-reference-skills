---
version: alpha
name: Spring/Summer
description: This system projects an academic-editorial mood, blending the starkness of brutalist typography with a muted, almost vintage color palette. The signature move is the expansive negative space around headlines set in Grotesk, which dominates the visual field and suggests an understated confidence. Text-based navigation and calls-to-action avoid typical button aesthetics, relying on subtle underlines or a neutral background for interaction cues, making the design feel more like a printed journal than a typical website. The overall impression is one of grounded authority, achieved through deliberate understatement rather than overt design flourishes.
colors:
  greige-canvas: "#e5ebda"
  deep-plum: "#44394c"
  pure-white: "#ffffff"
  ash-border: "#c0c3b6"
  input-pale-gray: "#b0b2a9"
  true-black: "#000000"
  accent-yellow: "#FFFF00"
spacing:
  elementGap: 10px
  sectionGap: 30px
components:
  contact-cta-banner:
    role: 
  project-card-grid:
    role: 
  agency-description-block:
    role: 
  navigation-link:
    role: Primary navigation within header/footer.
  unstyled-button:
    role: Functional clickable elements (e.g., 'What we do').
  bordered-input-field:
    role: User input fields.
  plain-text-badge:
    role: Informational tags, typically within blocks of content.
  project-card-thumbnail:
    role: Clickable overview of project case studies.
  editorial-body-text:
    role: General content paragraphs and article text.
  impact-headline:
    role: Dominant, section-starting headlines.
---

## Overview

**North Star:** Vintage academic journal — muted tones on rough-cut paper.

This system projects an academic-editorial mood, blending the starkness of brutalist typography with a muted, almost vintage color palette. The signature move is the expansive negative space around headlines set in Grotesk, which dominates the visual field and suggests an understated confidence. Text-based navigation and calls-to-action avoid typical button aesthetics, relying on subtle underlines or a neutral background for interaction cues, making the design feel more like a printed journal than a typical website. The overall impression is one of grounded authority, achieved through deliberate understatement rather than overt design flourishes.

### Do's

- Prioritize text as primary UI elements; use plain text for navigation and buttons unless explicit interaction styling is required.
- Use Deep Plum (#44394c) for all primary text and interactive elements to maintain a restrained, authoritative tone.
- Deploy Grotesk only for very large headlines (170px, 386px) with 'normal' letter and line spacing, embracing its raw, impactful nature.
- Maintain generous negative space, especially around Grotesk headlines, to emphasize content and create an editorial feel.
- Ensure all interactive elements and links use Deep Plum (#44394c) for color and Montreal font for consistency.
- Apply 4px border-radius sparingly, primarily for input fields and specific interactive text elements, to create a subtle softening.
- Use Greige Canvas (#e5ebda) as the default background for most page sections, and Layered Beige (#c0c3b6) for subtle dividers or secondary borders.

### Don'ts

- Avoid using highly saturated colors for branding elements; stick to the muted palette of Deep Plum and Greige Canvas.
- Do not add shadows or overly complex styling to buttons or navigation items; interaction cues should be subtle like underlines or background shifts.
- Disallow custom font weights other than 400 for both Montreal and Grotesk to preserve the distinct 'unadorned' character.
- Refrain from using animated or highly decorative visual effects that could detract from the content-first, editorial aesthetic.
- Do not use small, multi-weight display typography; Grotesk is for monumental statements, not nuanced headlines.
- Avoid decorative icons or illustrations that are not monochrome; any visual elements should be minimalist and functional.
- Do not break the subtle color palette with vibrant, unbranded accents; the only allowed accent is implied by the 'highlight yellow' in imagery, not in the UI.

### Layout

The page adheres to a max-width contained layout for most content, framed by the Greige Canvas background. The hero section is characterized by a colossal, off-center Grotesk headline ('NEW WORK') overlaid on a background of Greige Canvas, sometimes interacting with a large, unbordered image that seemingly floats or overlaps. Subsequent sections alternate between large, impactful imagery and text blocks, often with a 2-column or 3-column grid for project previews. Vertical spacing is comfortable but not overly spacious, creating a dense, magazine-like flow. Navigation is a minimalist top bar, utilizing styled text links rather than explicit buttons, emphasizing content over chrome.

### Imagery

The visual language blends raw, often textured photography with abstract or product-focused imagery. Photography appears full-bleed or contained within large, uncropped sections, with a slight desaturated or cool tint, often focusing on landscapes, architecture, or tight product crops. There's an absence of overly staged lifestyle photography. Overlaid on these images are bold, high-contrast typography elements, creating a magazine-layout feel. Icons are monochrome (True Black #000000 or Deep Plum #44394c), simple, and often part of structural UI. The use of yellow 'highlight' elements within showcased work adds an editorial, annotation-like quality, breaking the otherwise muted palette for deliberate emphasis. The density is image-heavy in portfolio sections, but in a structured, often gridded manner, allowing the work to speak for itself.
