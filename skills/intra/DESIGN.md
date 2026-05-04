---
version: alpha
name: Intra
description: Intra's design system evokes a stark, utilitarian aesthetic, heavily reliant on bold monochromatic contrasts and raw typographic statements. The visual language is defined by a primary background of industrial gray, offset by sharp white and black elements. Cards and key visuals use a reversed dark theme that feels integrated rather than an overlay, maintaining a consistent high-contrast, blocky presence. Typography is the primary decorative element, with large, unembellished sans-serifs commanding attention.
colors:
  canvas-gray: "#e4e4e4"
  ink-black: "#212529"
  paper-white: "#ffffff"
  absolute-black: "#000000"
  vivid-pink: "#f78da7"
  vivid-amber: "#fcb900"
  vivid-clay: "#dc3545"
  vivid-green-cyan: "#00d084"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  display:
    fontFamily: "system-ui"
    fontSize: 95px
    lineHeight: 1
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 10px
  sectionGap: 40px
components:
  ghost-button:
    role: Navigation and secondary actions
  product-display-card:
    role: Showcasing individual product items with strong branding
  callout-section-card:
    role: Highlighting specific information like cafe description or hours
---

## Overview

**North Star:** monolithic concrete gallery

Intra's design system evokes a stark, utilitarian aesthetic, heavily reliant on bold monochromatic contrasts and raw typographic statements. The visual language is defined by a primary background of industrial gray, offset by sharp white and black elements. Cards and key visuals use a reversed dark theme that feels integrated rather than an overlay, maintaining a consistent high-contrast, blocky presence. Typography is the primary decorative element, with large, unembellished sans-serifs commanding attention.

### Do's

- Prioritize high contrast between text and background, especially for #212529 on #e4e4e4 and #ffffff on #212529.
- Use Whyte font at 95px for primary headlines to create a bold, blocky statement.
- Apply 0px border-radius to all buttons and cards, enforcing a sharp, geometric aesthetic.
- Maintain a clear visual hierarchy by limiting color primarily to the neutral palette and using accent colors only for product features or decorative card backgrounds.
- Employ consistent 10px element gaps for inline items and 40px section gaps for vertical rhythm.
- Utilize ghost buttons with #000000 text and 0px border for all interactive elements to preserve the monochromatic, utility-focused style.

### Don'ts

- Do not introduce rounded corners on primary UI elements such as cards or buttons.
- Avoid gradients or soft shadows that would dilute the stark, high-contrast visual identity.
- Do not use subtle color variations for backgrounds; stick to the defined #e4e4e4 and #212529 surfaces.
- Refrain from using lightweight fonts for anything other than body text to preserve the brand's bold typographic presence.
- Do not use imagery in a way that breaks out of the rigid grid or introduces irregular shapes.
- Avoid decorative icons; keep visual elements strictly photographic or abstract geometric shapes.

### Layout

The site employs a max-width layout (approximately 900px, derived from inner content blocks) for primary content, which is then centered. The hero section is full-bleed, often featuring a large graphic or logo against a contrasting background. Throughout the page, content is arranged in clear, distinct blocks, often in two-column layouts where text and imagery (or another content block) sit side-by-side. Vertical spacing between sections is generous and consistent, creating a breathable yet structured feel. Navigation is minimalist, typically featuring discrete text links that integrate visually with the blocky design.

### Imagery

Imagery follows a stark, functional treatment. Product images appear against solid accent colored backgrounds or are tightly cropped within a blocky system. Photography, when present (e.g., people), is embedded directly into the layout without frames or overlays, adopting the inherent rectangularity of the content block. Iconography is absent, favoring a text-and-block dominant approach. Overall, imagery plays a supportive, content-rich role rather than a decorative one, fitting seamlessly into the rigid grid.
