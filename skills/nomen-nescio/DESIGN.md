---
version: alpha
name: Nomen Nescio
description: Nomen Nescio employs a stark, monochromatic aesthetic reminiscent of minimal brutalism, where form and function merge without decorative flourishes. The design emphasizes content through abundant clear space, precise typography, and a deliberate absence of color, aside from deep charcoal text and near-white backgrounds. Components are visually lightweight, often ghosted or outlined, allowing imagery and text to command attention. This system evokes a sense of quiet authority and refined simplicity, typical of high-end fashion or architectural studios.
colors:
  midnight-charcoal: "#2b2b2e"
  arctic-canvas: "#fdfdfa"
  whisper-gray: "#f5f3ee"
  limestone: "#bebcb4"
  dusty-road: "#deddd8"
  porcelain-whisper: "#d9d7c9"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.33
    letterSpacing: -0.008px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.26
    letterSpacing: -0.017px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.11
    letterSpacing: -0.028px
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.05
    letterSpacing: -0.036px
spacing:
  elementGap: 20px
  sectionGap: 39px
components:
  ghost-border-button:
    role: Interactive elements, secondary actions, and navigational links.
  minimal-card:
    role: Content containers for product listings, informational blocks.
  transparent-input-field:
    role: Data entry fields within forms.
  ghost-badge:
    role: Informational labels, category tags, promotional indicators.
---

## Overview

**North Star:** Monochromatic architectural canvas.

Nomen Nescio employs a stark, monochromatic aesthetic reminiscent of minimal brutalism, where form and function merge without decorative flourishes. The design emphasizes content through abundant clear space, precise typography, and a deliberate absence of color, aside from deep charcoal text and near-white backgrounds. Components are visually lightweight, often ghosted or outlined, allowing imagery and text to command attention. This system evokes a sense of quiet authority and refined simplicity, typical of high-end fashion or architectural studios.

### Do's

- Prioritize Midnight Charcoal (#2b2b2e) for all primary text over any other color to ensure maximum readability and stark contrast against light backgrounds.
- Maintain a strict 0px border-radius for all components and elements to uphold the sharp, minimalist aesthetic.
- Use Arctic Canvas (#fdfdfa) as the default background for all primary content areas, cards, and sections.
- Apply Whiskey Gray (#f5f3ee) for subtle background shifts to indicate secondary content blocks or hover states, avoiding any strong color accents.
- Implement Ghost Border Buttons with Limestone (#bebcb4) border and text for all interactive elements to maintain a lightweight, interactive feel.
- Ensure all interactive elements, including text links and buttons, change to Midnight Charcoal (#2b2b2e) on hover to provide clear feedback.
- Preserve abundant whitespace with a base element gap of 20px and a section gap of approximately 39px to give content room to breathe.

### Don'ts

- Avoid the introduction of any saturated colors for accents or interactive states; stick strictly to the achromatic palette.
- Do not use box-shadows or elevation effects; the design relies on flat surfaces and direct contrast for visual hierarchy.
- Do not introduce decorative borders or strong graphical elements; maintain a focus on typography and high-quality imagery.
- Avoid heavy filled buttons or pronounced call-to-action styles that would disrupt the ghosted, understated component language.
- Do not use varying font families or weights beyond the single 'nomennescio' family at weight 400; typographic consistency is key.
- Do not break the 0px border-radius rule for any UI elements, regardless of context.
- Avoid small text sizes and tight line spacing for body content, as the system relies on clear, readable type against high contrast.

### Layout

The page maintains a maximum-width contained layout, likely centered, allowing ample side margins for structure. The hero section often features a full-width image with contrasting header text. Content sections alternate between visually distinct blocks, though no explicit color banding is shown beyond the main background. A common pattern is text on one side and an image on the other, or a grid of product cards. The navigation is a persistent top bar, with minimalist text links. The overall density is comfortable, with generous vertical spacing between content blocks.

### Imagery

Photography is central to the brand, featuring models dressed in products, or close-up product shots. The treatment is high-key, with clean lighting, often isolated against neutral backgrounds like concrete or subtle off-white environments, emphasizing texture and form. Imagery is contained within defined areas, not full-bleed, and integrates seamlessly with the minimalist grid. No obvious custom icons or illustrations are present, relying entirely on photography for visual interest and product showcase.
