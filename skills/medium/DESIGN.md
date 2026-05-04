---
version: alpha
name: Medium
description: Medium's design evokes the feeling of a refined, minimalist literary journal, emphasizing content over chrome. The dominant use of a warm off-white background (#f7f4ed) creates a soft, inviting canvas for the high-contrast text. Typography is the cornerstone, with a stately serif font for headlines paired with a clean sans-serif for body text, creating a classic yet accessible reading experience. Accent colors are deliberately minimal, primarily using deep black for interactive elements to draw clear focus and a vibrant green for specific illustrative brand moments.
colors:
  vellum-background: "#f7f4ed"
  parchment-white: "#ffffff"
  charcoal-black: "#191919"
  inkwell-black: "#242424"
  book-text-gray: "#333333"
  muted-text-gray: "#6b6b6b"
  story-green: "#50B33A"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.27
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.43
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.54
  display:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 0.83
    letterSpacing: -6.6px
spacing:
  buttonRadius: 1386px
  elementGap: 16px
  sectionGap: 64px
components:
  primary-filled-button:
    role: Call to action button for primary actions.
  pill-accent-button:
    role: Secondary call to action button, used primarily in navigation.
  header-navigation-link:
    role: Standard text link within the header.
  footer-navigation-link:
    role: Muted text links in the footer.
---

## Overview

**North Star:** Literary Cafe, Digital Ink on Vellum.

Medium's design evokes the feeling of a refined, minimalist literary journal, emphasizing content over chrome. The dominant use of a warm off-white background (#f7f4ed) creates a soft, inviting canvas for the high-contrast text. Typography is the cornerstone, with a stately serif font for headlines paired with a clean sans-serif for body text, creating a classic yet accessible reading experience. Accent colors are deliberately minimal, primarily using deep black for interactive elements to draw clear focus and a vibrant green for specific illustrative brand moments.

### Do's

- Do use Vellum Background (#f7f4ed) as the primary page background to maintain the soft, inviting tone.
- Do apply gt-super for headlines at weight 400 with 'lnum' and 'pnum' font features enabled for distinct editorial typography.
- Do use Charcoal Black (#191919) for primary interactive elements like buttons and primary text, and Inkwell Black (#242424) for standard body text.
- Do use a generous horizontal padding of 16px or 20px for buttons to emphasize their pill shape.
- Do rely on a minimal set of neutral colors for UI elements, reserving Story Green (#50B33A) exclusively for brand illustrations and impactful visuals.
- Do maintain element gaps of 16px between most inline UI elements to ensure comfortable density.

### Don'ts

- Don't use strong, saturated colors for backgrounds or text, which would disrupt the subtle and content-focused aesthetic.
- Don't add shadows or heavy borders to UI components; design should feel flat and integrated with the canvas.
- Don't deviate from the established pill shapes for buttons; all interactive buttons should have extremely high border radii.
- Don't introduce additional serif fonts; the contrast between gt-super and sohne (or medium-content-sans-serif-font) is a core part of the identity.
- Don't animate UI elements with excessive complexity or duration beyond the 'ease' timing and 0.3s duration for subtle transitions.
- Don't use dense layouts; ensure comfortable spacing with a base unit of 8px and larger gaps for sections.

### Layout

The layout is predominantly content-focused, utilizing a maximum width for readability while allowing key elements like the hero illustration to span wider. The hero section features a large, centered headline (`gt-super` 120px) under a sticky top navigation bar. Content is arranged with clear vertical separation between sections (64px `sectionGap`), often with text blocks and illustrative elements in a balanced composition. The footer is minimalistic, presenting links in a compact horizontal arrangement. The overall impression is spacious and breathable, prioritizing legibility and a calm reading experience.

### Imagery

The site uses a combination of abstract, illustrative graphics and highly stylized conceptual visuals. The key pieces include a hand drawing with a pen, geometric patterns (possibly related to design or mathematics), and a bold, illustrative flower in Story Green (#50B33A). Imagery is used decoratively, providing visual metaphors for 'stories & ideas' rather than literal representations, enhancing the brand's creative and thoughtful atmosphere. Icons are minimal, primarily functional, and likely monochrome.
