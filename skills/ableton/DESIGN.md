---
version: alpha
name: Ableton
description: This design system presents a digital canvas for creative tools, characterized by its stark, high-contrast monochrome base with strategic, vibrant accents. The primary palette of black and white, occasionally softened by light gray, is frequently punctuated by a singular, intense violet-blue. This creates an energetic, almost electric, feel, reflecting the dynamic nature of music production. Typography is assertive and direct yet uses a soft geometry, balancing instruction with visual appeal.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  studio-gray: "#eeeeee"
  electric-violet: "#0000ff"
  melody-red: "#ff8389"
  synth-teal: "#00d2be"
spacing:
  elementGap: 10px
  sectionGap: 69px
components:
  blog-post-card-grid:
    role: 
  category-tag-collection:
    role: 
  cta-banner-with-input:
    role: 
  primary-call-to-action-button:
    role: Action
  category-tag-button-melody-red:
    role: Categorization
  category-tag-button-synth-teal:
    role: Categorization
  ghost-button:
    role: Secondary action
  basic-card:
    role: Content container
  input-field:
    role: Form Element
  navigation-link:
    role: Navigation
  hero-headline:
    role: Primary heading
---

## Overview

**North Star:** High-contrast digital studio. A canvas of stark black and white, illuminated by electric blue.

This design system presents a digital canvas for creative tools, characterized by its stark, high-contrast monochrome base with strategic, vibrant accents. The primary palette of black and white, occasionally softened by light gray, is frequently punctuated by a singular, intense violet-blue. This creates an energetic, almost electric, feel, reflecting the dynamic nature of music production. Typography is assertive and direct yet uses a soft geometry, balancing instruction with visual appeal.

### Do's

- Use Midnight Ink (#000000) for all primary text elements to ensure high contrast.
- Apply Canvas White (#ffffff) as the default background for content sections.
- Utilize Electric Violet (#0000ff) exclusively for primary interactive elements, such as CTA buttons and active navigation links, to draw attention.
- Maintain a consistent `0px` border-radius across all buttons, cards, and input fields for a sharp, unyielding aesthetic.
- Employ futura-pt throughout the UI, with variations in weight and size to create hierarchy while retaining brand consistency.
- Maintain minimal vertical padding of 1.96px for utility tags with a vibrant background and 7px for primary action buttons.

### Don'ts

- Avoid using drop shadows or complex gradients; the aesthetic relies on flat, high-contrast surfaces.
- Do not introduce additional rounded corners beyond `0px`; sharp edges are a defining characteristic.
- Do not deviate from the futura-pt typeface; alternative fonts will dilute the brand's typographic identity.
- Refrain from using Electric Violet (#0000ff) for purely decorative elements; reserve it for interactive or highlight states.
- Do not use background colors other than Canvas White (#ffffff) or Studio Gray (#eeeeee) for primary content containers; chromatic colors are for accents only.
- Avoid excessive spacing between elements; a comfortable but not overly sparse density is preferred, often using `10px` element gaps.

### Layout

The page exhibits a mix of full-bleed and constrained content. The hero section is full-bleed, showcasing a product shot with a large, centered headline. Subsequent sections often feature a `1200px` max-width centered container, breaking into two-column layouts with text on one side and a corresponding image or nested content cards on the other. Vertical rhythm is established through consistent section gaps, maintaining a comfortable density. Navigation is a sticky top bar, providing persistent access to key tools. Content is arranged to present information in visually digestible blocks, often in grids of 3, keeping visual clutter to a minimum and emphasizing direct interaction with media and text.

### Imagery

The visual language is utilitarian and product-focused, featuring tight shots of hardware and software interfaces. Photography often captures studio environments or creative practitioners interacting with Ableton's tools, lending an authentic, creator-centric feel. Treatments are generally full-bleed or contained within sharp-edged containers, with a raw, unpolished quality that suggests real-world usage rather than glossy abstraction. Icons are monochrome, often Midnight Ink on Canvas White backgrounds, with a clear, outlined style that complements the geometric typography. Imagery serves primarily to showcase the product's functionality and its place in the creative process, blending seamlessly with the high-contrast UI.
