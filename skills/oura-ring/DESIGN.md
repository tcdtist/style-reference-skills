---
version: alpha
name: Oura Ring
description: This design system evokes a sense of understated luxury and sophisticated technology, blending warm, earthy neutrals with crisp, architectural typography. The use of a muted, almost desaturated background palette creates a premium canvas, upon which product imagery takes center stage, imbued with a soft, inviting glow. The precise, sans-serif AkkuratLL counters the fluid, almost calligraphic Editorial New, establishing a deliberate tension between precision and human touch. Subtle gradients and large product photography integrate seamlessly into the soft color scheme, rather than competing, suggesting an experience that is both advanced and deeply personal.
colors:
  linen-mist: "#f7f1e8"
  graphite: "#4a4741"
  ebony: "#000000"
  cloud-gray: "#ececec"
  stone: "#a8a5a0"
  off-white: "#ffffff"
  deep-space: "#1c1b1a"
  twilight-indigo: "#5b6550"
  ocean-glimmer: "#1f72cd"
  warm-bronze-gradient: "#af751b"
  sky-veil-gradient: "#b5e4fe"
  sun-kissed-gradient: "#ffb648"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.6px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.7px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.4px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.38
    letterSpacing: 0.45px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: 0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.25
    letterSpacing: -2px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -4px
spacing:
  cardRadius: 8px
  buttonRadius: 16777215px
  elementGap: 8px
  sectionGap: 40px
components:
  product-display-cards:
    role: 
  tab-bar-activity-selector:
    role: 
  button-group-announcement-banner:
    role: 
  primary-filled-button:
    role: Call to action.
  secondary-outlined-button:
    role: Secondary actions or navigation.
  tertiary-ghost-button:
    role: Minimalist interactive elements, often in navigation.
  tertiary-ghost-pill-button:
    role: Secondary navigation or subtle calls to action.
  product-display-card:
    role: Showcasing individual products.
  informational-card:
    role: Grouping related content blocks.
  dark-input-field:
    role: Form input elements.
---

## Overview

**North Star:** Warm, diffused elegance. Like light filtering through linen onto brushed metal.

This design system evokes a sense of understated luxury and sophisticated technology, blending warm, earthy neutrals with crisp, architectural typography. The use of a muted, almost desaturated background palette creates a premium canvas, upon which product imagery takes center stage, imbued with a soft, inviting glow. The precise, sans-serif AkkuratLL counters the fluid, almost calligraphic Editorial New, establishing a deliberate tension between precision and human touch. Subtle gradients and large product photography integrate seamlessly into the soft color scheme, rather than competing, suggesting an experience that is both advanced and deeply personal.

### Do's

- Prioritize AkkuratLL for all body text, UI elements, and most headings to establish a technical, precise tone.
- Utilize Editorial New for prominent display text and hero headlines, leveraging its elegant forms to add a touch of humanistic sophistication.
- Implement the Linen Mist (#f7f1e8) as the predominant page and card background, fostering a soft, warm visual foundation.
- Use pill-shaped radii (16777215px) for all primary and secondary buttons, conveying approachability and a natural feel.
- Maintain a clear visual hierarchy with Graphite (#4a4741) for primary text and Stone (#a8a5a0) for secondary details and subheadings.
- Integrate gradient backgrounds for hero sections or brand moments, ensuring they complement the muted palette rather than dominating it, like Warm Bronze Gradient.

### Don'ts

- Avoid using harsh, saturated primary colors for UI elements; chromatic colors are reserved for subtle accents or complex brand graphics.
- Do not introduce sharp, angular edges where rounded forms are established for buttons and inputs; maintain the consistent use of 8px and 12px radii for cards and input fields.
- Refrain from heavy drop shadows or strong elevation effects; rely on subtle background color shifts and content arrangement for visual depth.
- Do not use highly decorative or illustrative imagery for product showcases; prefer clean, close-up photography of the product in muted contexts.
- Do not over-emphasize text with bold or heavy weights from AkkuratLL for body copy; stick to 300-400 for readability against the soft backgrounds.
- Avoid generic stock photography; all imagery should be bespoke, high-quality, and resonate with the product's understated elegance.

### Layout

The page primarily uses a full-bleed layout for hero sections, which often feature large-scale product imagery with centered headlines overlapping the visual. Subsequent sections tend to adopt a contained, centered content block approach, using generous vertical spacing between sections to create a comfortable, airy rhythm (sectionGap is 40px). Content is frequently arranged in multi-column layouts, such as two-column text-left/image-right or a grid for feature cards. The main body content respects a comfortable max-width, preventing lines from becoming too long. Navigation is a consistent sticky top bar with a clean, centered logo and right-aligned menu items. The overall density is comfortable, with ample breathing room, suggesting a premium and thoughtful experience.

### Imagery

The visual language focuses on high-quality, aspirational product photography, often incorporating hands or close-up shots of the Oura Ring itself. Images are typically full-bleed or presented within contained, soft-edged cards (8px radius) that blend into the warm neutral backgrounds. There's an intentional lack of busy lifestyle photography; instead, product shots are often artfully composed with diffused lighting, emphasizing the metallic sheen or ceramic texture. When illustrative elements appear, they are minimal, often line-based icons, maintaining a sleek, understated aesthetic. Photography is generally high-key with soft, diffused light, avoiding harsh shadows or vibrant saturation, making the product the focal point without overwhelming the senses. The overall density is balanced, allowing product visuals significant space.
