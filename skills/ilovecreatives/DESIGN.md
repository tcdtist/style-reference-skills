---
version: alpha
name: ilovecreatives
description: ilovecreatives presents a 'digital trade school' aesthetic where crisp, high-contrast typography dominates a near-monochromatic canvas. The density serves to pack information, while playful inline elements and irregularly shaped buttons hint at creativity. The overall impression is business-like but with moments of subversive charm, avoiding overt corporate polish through its unique typographic voice and informal component radii.
colors:
  canvas-white: "#ffffff"
  code-black: "#000000"
  text-gray: "#222222"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.4
    letterSpacing: -0.017px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.024px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.05
    letterSpacing: -0.028px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 49px
    lineHeight: 1
    letterSpacing: -0.04px
  display:
    fontFamily: "system-ui"
    fontSize: 59px
    lineHeight: 0.95
    letterSpacing: -0.06px
spacing:
  cardRadius: 20px
  buttonRadius: 450px
  elementGap: 4px
  sectionGap: 64px
components:
  pill-button:
    role: Primary Call to Action, interactive elements.
  ghost-button:
    role: Secondary actions, inline links disguised as buttons.
  rounded-corner-button:
    role: Small, contained interactive elements.
  large-ghost-button:
    role: Prominent ghost links or buttons.
  feature-card:
    role: Content containers for courses, profiles, or features.
  inline-text-badge:
    role: Decorative or contextual text highlights within larger bodies of text.
  profile-image-card:
    role: Display individual profiles with imagery.
---

## Overview

**North Star:** Black & White Zine

ilovecreatives presents a 'digital trade school' aesthetic where crisp, high-contrast typography dominates a near-monochromatic canvas. The density serves to pack information, while playful inline elements and irregularly shaped buttons hint at creativity. The overall impression is business-like but with moments of subversive charm, avoiding overt corporate polish through its unique typographic voice and informal component radii.

### Do's

- Prioritize SuisseRegular at various weights for most text elements, ensuring -0.017em to -0.06em letter-spacing for tight, impactful typography.
- Use Code Black (#000000) for primary text and Canvas White (#ffffff) for backgrounds to maintain a high-contrast, monochromatic base.
- Apply 450px or 1458px border-radius to buttons for distinct pill or fully rounded shapes respectively, using 1.5px vertical padding and 6-8px horizontal padding.
- Implement 20px border-radius for all content cards and image containers, creating soft, consistent visual modules.
- Emphasize headings using the 'romana' font at a thin weight (100) and large sizes (35-59px) with negative tracking (-0.04em or -0.06em) for an artistic, delicate yet bold statement.
- Utilize 2px padding for inline badges and decorative text elements, allowing them to subtly break text flow without heavy visual weight.
- Maintain a compact element spacing with a default of 4px between adjacent elements, supporting the information-dense aesthetic.

### Don'ts

- Avoid introducing saturated colors outside of specific image content or emoji, as the system thrives on a high-contrast achromatic palette with subtle playful accents.
- Do not use default rectangular buttons; all buttons should have a very high border-radius.
- Refrain from heavy drop shadows or complex elevation; the design relies on flat planes and subtle typographic texture.
- Do not use SuisseRegular for primary display headings, reserve 'romana' for that purpose to differentiate visual hierarchy and brand voice.
- Avoid broad, generous padding within components that would break the compact density; stick to minimal vertical padding for interactive elements.
- Do not use generic system fonts for prominent UI elements; SuisseRegular and romana define the brand's distinctiveness.
- Avoid large gaps between sections, instead maintaining a consistent compact rhythm with vertical spacing like 64px section gaps.

### Layout

The page structure favors a max-width contained layout, likely around 1200px, which centers content while allowing full-bleed background experiences in hero sections. The hero showcases a large, impactful visual with centered, overlaid display text. Vertical rhythm is characterized by consistent section gaps, creating distinct, readable blocks. Content sections often present information in a two-column layout combining text and visuals, or a grid of cards for courses and profiles. Navigation is typically a sticky top bar with minimal links and a 'Made for ✹Slashies©™' badge, maintaining an accessible, unfussy presence.

### Imagery

Imagery on ilovecreatives alternates between desaturated or grayscale product photography/portraits and stylized, sometimes abstract 3D renders with vibrant but contained palettes. Photography is often presented in rounded rectangular or pill shapes, sometimes overlapping for an informal collage effect. Icons are minimalist, using outlines or solid fills in Code Black, often with quirky, emoji-like designs. Graphics prioritize illustration and stylized text, creating decorative breaks and adding personality to the otherwise monochromatic UI. The density of imagery is balanced, supporting explanatory content without overwhelming the primary textual focus.
