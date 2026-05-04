---
version: alpha
name: Chester's Garden
description: Chester's Garden feels like a carefully curated notebook or a personal journal, blending structured content with an organic, lived-in feel. The clean, almost stark white background (#fafafa) and light gray divisions (#e5e7eb) provide a quiet stage, allowing strong typographic choices and varied media to take center-stage. The interplay between the elegant, serifed Fraunces for headlines and the pragmatic, sans-serif Inter for body text defines its character, creating a sense of approachable authority where intellectual pursuits meet personal exploration. Subtle accent colors are used as contextual highlights, like digital Post-it notes within a physical garden.
colors:
  canvas-white: "#fafafa"
  paper-gray: "#e5e7eb"
  charcoal-text: "#171717"
  ink-black: "#000000"
  subtle-gray: "#a3a3a3"
  accent-orange: "#7c2d12"
  highlight-orange: "#fdd3b1"
  accent-violet: "#581c87"
  highlight-violet: "#e6cefe"
  accent-blue: "#0c4a6"
  highlight-blue: "#afe5fc"
  accent-green: "#365314"
  highlight-green: "#daf5ae"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.4px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.25
    letterSpacing: -0.9px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.9px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.11
    letterSpacing: -0.9px
spacing:
  cardRadius: 8px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 40px
components:
  content-tag-collection:
    role: 
  book-card-reading:
    role: 
  coffee-brew-card-hobbies:
    role: 
  primary-navigation-link:
    role: Top-level navigation items
  navigation-tab-active:
    role: Currently active category indicator
  card-container:
    role: Content grouping element
  inline-text-link:
    role: Interactive text embedded within body copy
  content-tag-primary:
    role: Categorization of content, e.g. 'Reading', 'Projects'
  content-tag-secondary:
    role: More granular content tags, e.g. 'Plants'
  image-card:
    role: Card containing an image
  footer-link:
    role: Navigational links in the footer
---

## Overview

**North Star:** Digital garden journal: crisp pages, intimate handwriting, and colorful bookmarks.

Chester's Garden feels like a carefully curated notebook or a personal journal, blending structured content with an organic, lived-in feel. The clean, almost stark white background (#fafafa) and light gray divisions (#e5e7eb) provide a quiet stage, allowing strong typographic choices and varied media to take center-stage. The interplay between the elegant, serifed Fraunces for headlines and the pragmatic, sans-serif Inter for body text defines its character, creating a sense of approachable authority where intellectual pursuits meet personal exploration. Subtle accent colors are used as contextual highlights, like digital Post-it notes within a physical garden.

### Do's

- Prioritize 'Fraunces' for all headings and short, impactful statements to leverage its elegant, light-weight character.
- Use 'Inter' 16px weight 400 for all paragraph text, maintaining a consistent, highly readable, and unobtrusive voice.
- Apply #fafafa as the primary background color for all main content areas to create a bright, airy canvas.
- Utilize #e5e7eb for subtle borders and background for non-interactive list items or dividers, maintaining visual softness.
- Employ 8px border-radius for all content cards and larger UI elements, balancing subtle softness with structure.
- Apply 9999px border-radius to all interactive tags and buttons, creating a distinct pill shape that signals interactivity.
- Use accent colors (e.g., #7c2d12, #581c87, #0c4a6, #365314) and their light background variants consistently for content categorization, acting as visual cues like colored labels.
- Apply minimal inset shadow rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px -2px 0px 1px inset to card backgrounds, giving them a subtle definition without heavy lifting.

### Don'ts

- Avoid bolding or using heavier weights for 'Fraunces'; its impact comes from its lightness (weight 300).
- Do not use highly saturated colors for large blocks of content; reserve them for small, intentional accents only.
- Refrain from introducing strong drop shadows; the design relies on subtle inset shadows for depth or light elevation for images (rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px).
- Avoid using multiple border-radii values for a single component type; maintain consistency (e.g., tags are always 9999px).
- Do not use #000000 for body text unless higher contrast is explicitly required, #171717 or #a3a3a3 are preferred for a softer read.
- Do not vary letter spacing from the defined values; 'Inter' at -0.4px and 'Fraunces' at -0.9px letter-spacing are critical to the typographic feel.
- Avoid generic hover states like simple color changes for interactive elements; opt for underlines on links or distinct background changes for buttons/tags.

### Layout

The page follows a `max-width 1536px` centered layout, offering a structured, comfortable reading experience. The hero section presents a centered block of text with a large, inviting 'Fraunces' headline. Below the hero, the content transitions into a dynamic, asymmetric grid that blends images, short text blocks, and categorized content cards. The rhythm of sections is primarily a flow of content blocks with consistent vertical spacing (40px sections, 12-24px internal gaps). The navigation is a minimalist sticky header and also appears as inline text links. A significant feature is the `flex/grid` layout of content, favoring a varied and engaging presentation over rigid rows and columns.

### Imagery

The visual language blends personal photography (a cat, a person climbing, a beach scene) with product screenshots (UI designs, book covers) and abstract graphics (chess patterns). Photography is largely unedited, natural, and sometimes retro-filtered (e.g., 'FilmNeverDie KIRO 400'), giving a raw, authentic feel. Images are primarily contained within card components, featuring a 4px border-radius, often with subtle, lifting shadows (rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px). The role of imagery is descriptive and personal, illustrating content rather than existing purely decoratively, contributing heavily to the 'journal' aesthetic. Density is image-heavy in the grid sections, balancing the text-dominant introductory area.
