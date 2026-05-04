---
version: alpha
name: 큰그림컴퍼니
description: This design system operates on a 'digital printing press' aesthetic, characterized by an off-white, textured canvas reminiscent of crumpled paper and heavy, monochromatic typography. Visual hierarchy is established through a dramatic scale of bold sans-serif text, often appearing in large, dense blocks. Components are outlined and minimalist, avoiding strong colors or heavy shadows to maintain a lightweight, ephemeral quality, as if printed or drawn onto the background. The overall feel is raw, industrial, and highly graphic, with an emphasis on typographic expression over illustrative elements.
colors:
  ink-black: "#121212"
  paper-white: "#ffffff"
  aged-paper: "#f1f1f1"
  faded-ink: "#e1e1e1"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 2
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.2px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 1.05
    letterSpacing: -0.75px
  display:
    fontFamily: "system-ui"
    fontSize: 274px
    lineHeight: 1
    letterSpacing: -10.96px
spacing:
  elementGap: 10px
  sectionGap: 72px
components:
  ghost-navigation-button:
    role: Top navigation items and secondary actions.
  rounded-button:
    role: General purpose buttons and tags.
  text-block-container:
    role: Grouped content sections, text-heavy cards.
  accent-star:
    role: Decorative divider or visual break.
  hero-text-block:
    role: Large, attention-grabbing typographic display.
---

## Overview

**North Star:** crumpled paper manifesto

This design system operates on a 'digital printing press' aesthetic, characterized by an off-white, textured canvas reminiscent of crumpled paper and heavy, monochromatic typography. Visual hierarchy is established through a dramatic scale of bold sans-serif text, often appearing in large, dense blocks. Components are outlined and minimalist, avoiding strong colors or heavy shadows to maintain a lightweight, ephemeral quality, as if printed or drawn onto the background. The overall feel is raw, industrial, and highly graphic, with an emphasis on typographic expression over illustrative elements.

### Do's

- Prioritize Helvetica Neue, weight 700, for all major headlines and impactful statements, leveraging dramatic scale (e.g., 274px).
- Use distinct negative letter-spacing for large text: -0.0400em for sizes 75px and above, -0.0100em for sizes around 20px.
- Employ Ink Black (#121212) as the default color for all text, essential borders, and icons, creating high contrast.
- Utilize Paper White (#ffffff) for primary page backgrounds and Aged Paper (#f1f1f1) for secondary surfaces to create subtle layered depth.
- Apply a 20px border-radius to general container elements, 28px for navigation items, and 40px for buttons to maintain a consistent rounded but not overly soft aesthetic.
- Use Faded Ink (#e1e1e1) for subtle borders and background textures, suggesting a softer printed line.
- Implement Ghost Navigation Buttons with a 1px solid border in Ink Black and 28px radius for a lightweight, interactive feel.

### Don'ts

- Avoid strong accent colors; the system is deliberately monochromatic with high contrast values.
- Do not introduce heavy shadows or overt elevation effects; rely on subtle background color shifts and borders for layering.
- Refrain from using complex gradients; the aesthetic is flat and print-like.
- Do not combine multiple decorative fonts; Rock Salt is used sparingly for unique callouts, not general elements.
- Avoid dense, clustered layouts; maintain generous spacing with sectionGap at 72px and elementGap at 10px for readability and visual breathing room.
- Do not use generic button styles; ensure buttons follow the 40px radius, ghost or outlined appearance with either Ink Black or Faded Ink borders.
- Avoid illustrative imagery that deviates from product screenshots or stark black-and-white graphics; the focus is on typography and texture.

### Layout

The page primarily uses a full-bleed layout, allowing large typographic and graphic elements to extend to the viewport edges without a fixed max-width. The hero section often presents massive, centered headlines or graphic elements on a full-viewport textured background. Section rhythm is less about alternating bands and more about strong vertical breaks, often marked by massive text blocks or decorative star elements. Content arrangement frequently features centered stacks for headlines and body text, sometimes alternating with large, full-width 'poster-like' graphic sections. There's no evident grid usage for card-like elements, but rather a more freeform, collage-like composition. Density is spacious for text blocks but highly compact and dense within large typographic 'image' sections. Navigation is a minimal, top-aligned bar with ghost buttons, consistent across the page.

### Imagery

The site heavily relies on typographic imagery rather than traditional photographs or illustrations. When present, images appear to be product screenshots or highly stylized, distorted graphics with a strong black-and-white treatment. They are often large-scale, full-bleed, and integrated into the overall visual texture, mimicking large format posters or printed materials. Icons are minimal, outlined, or solid filled in Ink Black, adhering to a consistent, stark visual vocabulary. The density is image-heavy, but these 'images' are primarily textual or abstract graphic elements, making the site feel text-dominant architecturally, even with large visual space allocations.
