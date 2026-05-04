---
version: alpha
name: Vectary
description: This design evokes a feeling of structured clarity and restrained energy. The almost monochromatic palette, dominated by deep grays and stark white, creates a serious and direct atmosphere. A single vivid violet accent color, used sparingly, cuts through the neutrality, acting as a precise digital highlight. Sharp corners prevail, reinforcing a sense of precision and modern utility, with only minor softening for interactive elements.
colors:
  midnight-graphite: "#252525"
  deep-slate: "#313131"
  midtone-gray: "#595959"
  muted-silver: "#949494"
  alabaster-white: "#ffffff"
  vectary-violet: "#6100ff"
  violet-gradient: "#6100ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.69
    letterSpacing: -0.48px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.3px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.45px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.3
    letterSpacing: -0.66px
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.09
    letterSpacing: -0.88px
  display:
    fontFamily: "system-ui"
    fontSize: 83px
    lineHeight: 1
    letterSpacing: -3.24px
spacing:
  buttonRadius: 8px
  elementGap: 6px
  sectionGap: 60px
components:
  button-group-primary-secondary:
    role: 
  policy-section-card-acceptable-use:
    role: 
  prohibited-use-bullet-list:
    role: 
  primary-navigation-link:
    role: Navigation, header
  section-heading-large:
    role: Primary page title
  section-heading-medium:
    role: Section title
  body-text-paragraph:
    role: Standard content
  bullet-point-item:
    role: Lists and details
  timestamp-text:
    role: Metadata
---

## Overview

**North Star:** Digital Blueprint on Whiteboard. The crisp contrast and precise typography against a clean white background feel like technical specifications brought to life with minimal flourish.

This design evokes a feeling of structured clarity and restrained energy. The almost monochromatic palette, dominated by deep grays and stark white, creates a serious and direct atmosphere. A single vivid violet accent color, used sparingly, cuts through the neutrality, acting as a precise digital highlight. Sharp corners prevail, reinforcing a sense of precision and modern utility, with only minor softening for interactive elements.

### Do's

- Prioritize Alabaster White (#ffffff) for all main page backgrounds to maintain visual spaciousness.
- Use Midnight Graphite (#252525) for all primary text elements, including large headings and bolded content.
- Apply Vectary Violet (#6100ff) exclusively for primary interactive elements, such as CTA buttons, to maximize its impact.
- Ensure all headings use Inter font with appropriate negative letter spacing: '-0.039em' for 83px, '-0.034em' for 26px, and '-0.030em' for 22px.
- Maintain 8px radius for all buttons that are not purely navigation links.
- Utilize a base unit of 6px for managing vertical and horizontal spacing, resulting in 6px, 9px, 10px, 16px, 20px, 30px, 53px, and 60px increments.
- Employ Midtone Gray (#595959) for body text and Muted Silver (#949494) for less emphasized text like timestamps or secondary links to create clear information hierarchy.

### Don'ts

- Avoid using multiple chromatic colors; limit accents strictly to Vectary Violet (#6100ff) and its gradient variant.
- Do not use dark backgrounds for entire sections unless it's a specific brand feature or navigation bar; reserve Alabaster White for overall page content.
- Do not introduce additional border radii beyond 8px for buttons and elements, or 0px for navigation items.
- Avoid generic system fonts; always specify Inter with its defined weights and letter spacing for all text.
- Do not use box shadows or other elevation effects; rely on color and spacing hierarchy to convey depth.
- Do not deviate from the defined spacing tokens; avoid arbitrary padding or margins.
- Never use bold (weight 700) for body text; reserve it for headings or specific emphasis points to maintain visual clarity.

### Layout

The page adheres to a maximal width layout, though a `pageMaxWidth` isn't strictly defined, hinting at a flexible container centered on larger screens. The hero section is a full-width header composed of a centered logo and right-aligned navigation. Content sections are vertical stacks, using generous top/bottom padding (60px) to separate them. Text content is primarily left-aligned, with headings followed by body paragraphs and bulleted lists. The overall impression is one of structured, information-dense content presented in a clean, scrollable format, with a notable lack of complex grid patterns or alternating content blocks.

### Imagery

This site features a clean, professional aesthetic with a strong focus on UI and typography over illustrative or photographic content. Graphics are minimal, primarily consisting of icons (not directly visible in the screenshots but implied by component data) that are likely outlined or filled in a monochromatic style. There is an absence of lifestyle photography, complex illustrations, or 3D renders. The visual language emphasizes clarity and straightforward presentation, relying on crisp lines and precise spacing rather than decorative imagery. When imagery is present, it is likely contained and supportive of the UI, rather than a dominant visual element.
