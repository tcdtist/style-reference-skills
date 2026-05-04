---
version: alpha
name: Flowers For Society
description: Flowers For Society employs a vibrant, optimistic aesthetic, designed to evoke connection with nature and purpose. It pairs a crisp white canvas with a single dominant 'Deep Cobalt' blue, used prominently for interactive elements, text, and borders, establishing a strong brand identity. Typography is bold and confident, utilizing custom serifs for display and approachable sans-serifs for body text, creating a balanced hierarchy. Components feature soft, rounded edges, suggesting organic forms and approachability, with a focus on clear, unembellished functionality.
colors:
  white-canvas: "#ffffff"
  deep-cobalt: "#203b90"
  muted-indigo: "#7989bc"
  ink-black: "#000000"
  pale-ash: "#f2f2f2"
  charcoal-border: "#1b1b1b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
spacing:
  cardRadius: 4px
  buttonRadius: 41px
  elementGap: 5px
  sectionGap: 50px
components:
  primary-filled-button:
    role: Main call-to-action button, conveying primary intent.
  ghost-button:
    role: Secondary action or navigational button, designed to be less prominent.
  large-rounded-heading-button:
    role: Specialized large button for key conceptual actions or navigation between sections.
  text-input-rounded:
    role: Standard form input for user data entry.
  text-input-subtle:
    role: Alternative simple text input, potentially for smaller forms or searches.
  navigation-link:
    role: Top-level navigation items within the header.
  product-card:
    role: Display individual products within a grid or list.
---

## Overview

**North Star:** Organic Modernity — grounded, yet forward-looking

Flowers For Society employs a vibrant, optimistic aesthetic, designed to evoke connection with nature and purpose. It pairs a crisp white canvas with a single dominant 'Deep Cobalt' blue, used prominently for interactive elements, text, and borders, establishing a strong brand identity. Typography is bold and confident, utilizing custom serifs for display and approachable sans-serifs for body text, creating a balanced hierarchy. Components feature soft, rounded edges, suggesting organic forms and approachability, with a focus on clear, unembellished functionality.

### Do's

- Prioritize Deep Cobalt (#203b90) for all primary actions and key interactive elements, ensuring brand recognition.
- Use Soehne for body text and navigation, maintaining tight letter-spacing for consistency, e.g., 0.0560em at 14px.
- Apply a 41px border-radius universally to primary buttons and form inputs for a soft, consistent brand feel.
- Employ Integral for all headings, using its various sizes with tight line-heights (e.g., 0.92-1.28) to create strong visual statements.
- Maintain a clear visual hierarchy by limiting prominent colors to Deep Cobalt (#203b90) and utilizing White Canvas (#ffffff) and Pale Ash (#f2f2f2) for backgrounds.
- Ensure generous internal padding for components, using values like 15px vertical padding for inputs and 30px horizontal for buttons for comfort and legibility.
- Leverage the Pale Ash (#f2f2f2) background for section breaks to provide visual breathing room between content blocks.

### Don'ts

- Avoid using multiple vibrant chromatic colors; limit the accent palette primarily to Deep Cobalt (#203b90).
- Do not introduce sharp, unrounded corners on interactive elements; maintain a consistent rounded aesthetic (41px, 4px, or 60px).
- Refrain from using thin, light fonts for headings; Integral, weight 400, should carry the visual weight.
- Do not clutter components with excessive borders or shadows; keep them clean and subtly defined, often by just one color.
- Avoid tight spacing between elements; use the established elementGap of 5px and cardPadding of 30px to maintain comfortable density.
- Do not use generic system fonts when custom fonts like Soehne and Integral are available for text and headings.
- Avoid heavy drop shadows or complex elevation; the design relies more on color contrast and clear surface separation.

### Layout

The page primarily uses a max-width contained layout, though the hero section can be full-bleed with a product image centered over a natural background. The hero often features a prominent heading and a central call-to-action. Content sections typically alternate between subtle Pale Ash (#f2f2f2) and White Canvas (#ffffff) backgrounds, creating a clear vertical rhythm. Content arrangement frequently uses large, centered headings, followed by text and image blocks, sometimes in two-column layouts. A common pattern is stacked information with comfortable vertical spacing (sectionGap 50px). Navigation is a clean top bar with core links and user icons, appearing sticky or fixed-position.

### Imagery

The visual language is split between high-quality product photography and evocative macro-level shots of nature. Photography is product-focused, showcasing footwear in natural, often vibrant, outdoor settings (like sneakers surrounded by pink daisies). Product images are often well-lit, providing clear detail. Illustration style is limited to functional icons that are typically monochromatic (Ink Black or Deep Cobalt), outlined, and simple. Imagery functions both decoratively to set a peaceful, natural atmosphere and explanatorily to highlight product features. The density is moderate, with images playing a significant role in hero sections and product features but balancing with text-dominant areas.
