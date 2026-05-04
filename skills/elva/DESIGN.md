---
version: alpha
name: Elva
description: This design system is a study in stark monochrome contrast, evoking a gallery space for typographic art. Large-scale, custom typography dominates, creating a bold, almost brutalist visual identity. The absence of color and subtle shifts in near-achromatic tones (#262523 on #ECECEC) place absolute focus on form, text, and playful graphic interventions within the letterforms themselves. Subtle hints of illustration are integrated directly into oversized headlines, turning text into hero content.
colors:
  anchor-black: "#262523"
  gallery-white: "#ececec"
  pure-black: "#000000"
  fog-gray: "#cfcdcd"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 0.9
  heading:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 0.82
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 240px
    lineHeight: 1
    letterSpacing: -19.2px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 640px
    lineHeight: 0.8
    letterSpacing: -38.4px
spacing:
  elementGap: 16px
  sectionGap: 160px
components:
  navigation-links:
    role: 
  announcement-banner:
    role: 
  hero-headline-display:
    role: 
  header-navigation-link:
    role: Interactive element
  hero-headline:
    role: Prominent heading
  body-text:
    role: Standard content
  information-link:
    role: Secondary interactive element
  logo:
    role: Brand identity
---

## Overview

**North Star:** Typographic Brutalism in a Monochrome Gallery. The design feels like a curated exhibition where letterforms are the central art pieces.

This design system is a study in stark monochrome contrast, evoking a gallery space for typographic art. Large-scale, custom typography dominates, creating a bold, almost brutalist visual identity. The absence of color and subtle shifts in near-achromatic tones (#262523 on #ECECEC) place absolute focus on form, text, and playful graphic interventions within the letterforms themselves. Subtle hints of illustration are integrated directly into oversized headlines, turning text into hero content.

### Do's

- Prioritize Messina Sans for all visual-hero level typography, at sizes above 240px with a line-height of 0.80 and letter-spacing of -0.0600em.
- Maintain a strict monochrome palette using Anchor Black (#262523) for text and Gallery White (#ececec) for backgrounds as primary colors.
- Use Basis font with negative letter spacing (e.g., -0.0600em for 120px) to enhance the condensed, impactful look of large headlines.
- Leverage the 160px sectionGap to create significant breathing room between major content blocks, emphasizing spaciousness.
- Integrate playful iconography or graphic elements directly into large text headlines rather than as standalone images, as seen with the heart and asterisk.
- Apply Anchor Black (#262523) for all interactive text elements to ensure a consistent focal point for action.

### Don'ts

- Avoid introducing any saturated chromatic colors; the system relies purely on a grayscale palette with minor shifts.
- Do not use box-shadows or complex elevation effects; depth is created through scale and typographic hierarchy.
- Do not use default system font styles for any textual content; all type must conform to Basis or Messina Sans rules.
- Avoid generic imagery like stock photos; if visuals are needed, they should be integrated graphically with typography.
- Do not use small, secondary buttons or badges that break the overall bold, oversized aesthetic.
- Do not introduce border-radius values other than 0px, except for intentional graphic elements like the 70px rounded shape in the headline.

### Layout

The page model is full-bleed, but content appears visually contained by generous margins from the edge. The hero section is characterized by a full-viewport, centered, and dramatically oversized headline, serving as the primary visual and content focus. There's no immediately apparent section rhythm beyond large vertical spacing created by the `sectionGap`. Content arrangement is primarily centered or implicitly balanced around large typographic blocks. There is no visible grid for cards or features, suggesting a more free-form, editorial approach. The layout is extremely spacious with ample `sectionGap` (160px) and `elementGap` (16px), creating significant whitespace. Navigation is minimal, consisting of a top-right header with text links and contact info, likely a fixed or sticky element due to its separation from the main content. The main navigation is a simple list of text links 'WORK', 'COMPANY', 'CAPABILITIES', 'CONTACT'.

### Imagery

The visual language is dominantly typographic, with imagery integrated directly into or replacing parts of large headlines. For example, the heart and asterisk symbols act as visual substitutions within key phrases. There are no traditional photographs, illustrations, or product shots. The treatment is sharp and graphic, with no rounded corners or masking on any visual elements observed. The role of these integrated graphics is purely decorative and atmospheric, enhancing the 'memorable experiences' concept without literal representation. The density is image-light, text-dominant, with visual weight coming from typography itself.
