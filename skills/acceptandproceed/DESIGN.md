---
version: alpha
name: Acceptandproceed
description: Accept&Proceed presents a subtly textured, spacious environment that feels like a quiet gallery space. Neutral tones dominate, allowing content and subtle interaction cues to stand out. Typography is precise and understated, maintaining a sense of refined professionalism. Interactions are minimal and direct, avoiding heavy graphics or loud effects, reinforcing an atmosphere of focused artistic curation.
colors:
  midnight-ink: "#000000"
  fog: "#8c8c8c"
  cloud-cover: "#ecebe7"
  canvas-white: "#ffffff"
  warm-linen: "#f9f7f3"
  steel-gaze: "#a2a1a1"
  carbon-text: "#333333"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.01px
  button:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.41
    letterSpacing: -0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.01px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.29
    letterSpacing: -0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.33
    letterSpacing: -0.01px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.6
    letterSpacing: -0.01px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.71
    letterSpacing: -0.01px
spacing:
  cardRadius: 8px
  buttonRadius: 20px
  elementGap: 8px
  sectionGap: 48px
components:
  filled-button-read-story-large:
    role: Primary interactive button for calls to action.
  ghost-button-navigation-link:
    role: Subtle navigation or secondary action within content. Inherits text color from parent context.
  pill-button-curved-left:
    role: Unique interactive element, often for specialized actions or tags, with an asymmetric pill shape.
  project-card-image-top:
    role: Container for project previews, featuring an imagery block and descriptive text.
  soft-badge-outlined-text:
    role: Categorization or tagging element, visually lightweight.
  muted-badge-grey-background:
    role: Secondary categorization, distinct from active or primary tags.
  rounded-input-field-curved-left:
    role: Input element with a distinct rounded style for forms.
  listen-button-minimal:
    role: Interactive element for audio content, integrated subtly into lists.
---

## Overview

**North Star:** Gallery Canvas, Subtle Presence

Accept&Proceed presents a subtly textured, spacious environment that feels like a quiet gallery space. Neutral tones dominate, allowing content and subtle interaction cues to stand out. Typography is precise and understated, maintaining a sense of refined professionalism. Interactions are minimal and direct, avoiding heavy graphics or loud effects, reinforcing an atmosphere of focused artistic curation.

### Do's

- Use Fog (#8c8c8c) for all muted text, secondary icon outlines, and inactive UI elements.
- Apply a 20px border-radius to all primary action buttons, using Cloud Cover (#ecebe7) for the background and Midnight Ink (#000000) for text and border.
- Maintain -0.01em letter-spacing for all Messina Sans text elements to preserve typographic precision.
- Organize content into clean card structures with an 8px border-radius, remaining transparent and shadowless.
- Utilize Warm Linen (#f9f7f3) or Canvas White (#ffffff) as primary neutral surface backgrounds, alternating for visual segmentation.
- Implement the 3.4px border-radius for badges to create subtle corner rounding distinct from larger components.
- Ensure a minimum elementGap of 8px between discrete UI elements, especially within containers like badges or form fields.

### Don'ts

- Do not introduce strong accent colors; confine the palette to the established neutrals for content segmentation and interaction.
- Avoid heavy drop shadows or significant elevation; the design relies on subtle background shifts and borders for separation.
- Do not use generic button styles; prefer the pre-defined Filled, Ghost, or Pill variants with their specific radii and visual properties.
- Refrain from using varied letter-spacings beyond the Messina Sans default; maintain consistent tracking.
- Do not use highly saturated imagery; imagery should be high-contrast or desaturated to complement the neutral palette.
- Avoid decorative gradients; the system prefers flat colors and subtle textural shifts.
- Do not vary line heights significantly; adhere to the Messina Sans predefined line-height scale for all text roles.

### Layout

The site uses a max-width contained layout with centered content blocks, punctuated by occasional full-bleed hero sections. The header is sticky and minimal. Sections are vertically stacked with consistent spacing (48px sectionGap), creating a rhythmic flow. Content often alternates between left-aligned text and right-aligned visuals or vice-versa within a two-column grid. Project listings often utilize a multi-column card grid pattern. Density is comfortable, with ample whitespace providing breathable separation between elements and sections.

### Imagery

Imagery primarily features product shots, abstract digital renderings (like the globe), and high-contrast event photography. Photography leans towards moody or impactful scenes with desaturated or monochrome treatments, emphasizing shape and form over vibrant color. Illustrations are digital, often abstract and volumetric like the blue globe effect, serving an explanatory or atmospheric role rather than literal representation. Icons are minimal, outlined, thin, and monochrome (Midnight Ink) for functionality. Imagery is often contained within card structures or hero sections, acting as key content rather than decorative filler, and sometimes full-bleed in hero sections.
