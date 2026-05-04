---
version: alpha
name: Brisbane Web Developer
description: This design system evokes the ambiance of a high-end art gallery, where precise visual arrangement and subtle material textures give objects a curated weight. A minimalist palette of near-white, light gray, and charcoal provides a neutral stage, making the content—especially project thumbnails framed by soft shadows—the primary visual event. The extensive use of achromatic tones ensures a calm, contemplative experience, subtly emphasizing the work itself rather than decorative flair. Sparse, intentional typography with a high degree of contrast feels both academic and accessible.
colors:
  canvas-white: "#f4f3f1"
  graphite-text: "#333333"
  ash-details: "#aaaaaa"
  stone-gray: "#4d4d4d"
  dust-border: "#dddddd"
  inactive-slate: "#666666"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
    letterSpacing: -0.49px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
spacing:
  cardRadius: 5px
  buttonRadius: 5px
  elementGap: 10px
  sectionGap: 122px
components:
  project-thumbnail-card:
    role: 
  hero-bio-text-block:
    role: 
  newsletter-segmented-form:
    role: 
  primary-button:
    role: Call-to-action buttons for submissions.
  secondary-button:
    role: General interactive buttons.
  text-input:
    role: Standard user input fields.
  segmented-input-left:
    role: Input field designed to be part of a group, appearing on the left.
  project-thumbnail-card:
    role: Displays project previews.
---

## Overview

**North Star:** Art Gallery Minimalism: Project thumbnails, like curated art pieces, float on a light, matte background, each framed by a subtle, soft shadow box.

This design system evokes the ambiance of a high-end art gallery, where precise visual arrangement and subtle material textures give objects a curated weight. A minimalist palette of near-white, light gray, and charcoal provides a neutral stage, making the content—especially project thumbnails framed by soft shadows—the primary visual event. The extensive use of achromatic tones ensures a calm, contemplative experience, subtly emphasizing the work itself rather than decorative flair. Sparse, intentional typography with a high degree of contrast feels both academic and accessible.

### Do's

- Use Canvas White (#f4f3f1) as the primary background for all major content sections and interactive elements.
- Apply Graphite Text (#333333) for all primary body text, headings, and high-contrast UI labels.
- Frame significant visual content, like project cards, with the soft elevation shadow: rgba(90, 50, 40, 0.15) 0px 5px 15px 0px, rgba(80, 40, 30, 0.1) 0px 4px 8px 0px.
- Maintain a clear vertical rhythm between sections using a 122px gap (`sectionGap`).
- Employ a uniform 5px border radius (`radius.inputs`, `radius.buttons`, `radius.cards`) for all rounded elements.
- Utilize Ash Details (#aaaaaa) for all auxiliary textual elements, links, and borders on non-primary UI elements.

### Don'ts

- Avoid using highly saturated or chromatic colors; adhere strictly to the achromatic palette.
- Do not introduce sharp corners or larger radii than 5px for any interactive or card-like elements.
- Do not vary line heights for `sans-serif` from the specified 1.2, 1.4, or 1.5, or for `Suisse Works Trial` from 1.5.
- Do not deviate from the specified letter-spacing for `Suisse Works Trial`; its tightly spaced appearance is a signature element.
- Do not use complex gradient fills or patterned backgrounds; surfaces should remain uniformly Canvas White (#f4f3f1) or Dust Border (#dddddd).

### Layout

The page adheres to a max-width contained model, centered on the screen, creating a formal, academic presentation space. The hero section is a simple, centered text block with ample negative space. Content sections are primarily a grid of project cards, arranged in a visually consistent 3-column layout, maintaining generous horizontal and vertical spacing. The rhythm is established by section gaps of 122px, separating distinct content blocks vertically. The overall density is spacious, emphasizing individual content elements. Navigation is a minimal top-right link cluster, reinforcing the content-first approach.

### Imagery

This design primarily relies on product screenshots and illustrative web interfaces within project cards, contained and presented as distinct objects. The 'project thumbnail' treatment is crucial: these are not full-bleed images, but smaller, contained visuals framed by Card White (#f4f3f1) and lifted by a soft, brown-tinted shadow. This makes each project feel like a displayed artifact. Photography, when used, is integrated within these 'project cards' and visually consistent with digital output, often focused on UI elements or abstract textures. The role of imagery is strictly to showcase work, not to add decorative flourish or lifestyle context. Icons, where present, are minimal line-art, fitting the achromatic theme.
