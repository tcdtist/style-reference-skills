---
version: alpha
name: School
description: This design system evokes a digital scrapbook or a quirky desktop environment, blending structured content with playful, almost childlike elements. The visual language is defined by a gridded card layout, each card a slightly rounded container. Eclectic color accents, often within illustrations or as background highlights, punctuate a predominantly neutral gray canvas. IBM Plex Mono's technical precision paired with Helvetica's classic readability creates a subtle tension, mirroring the creative studio's 'conceptual yet practical' ethos.
colors:
  ink: "#303030"
  paper-white: "#FFFFFF"
  desktop-gray: "#F2F2F2"
  card-surface: "#DBDBDB"
  input-fill: "#EDEDED"
  border-grey: "#808080"
  badge-base: "#C2C2C2"
  attention-yellow: "#F9F5A2"
  sky-blue: "#648FE0"
  blush-sand: "#E2CEB8"
  desert-peach: "#FDCEB1"
  system-blue: "#0064E2"
  alert-red: "#F4625D"
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
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.4
spacing:
  cardRadius: 10px
  buttonRadius: 20px
  elementGap: 8px
  sectionGap: 24px
components:
  featured-project-card:
    role: 
  your-button-clock-widget:
    role: 
  hero-headline-with-highlight-contact-badges:
    role: 
  primary-card:
    role: Container for distinct content blocks.
  badge-secondary:
    role: Categorization and meta-information.
  large-input-field:
    role: Text input areas.
  headline-highlight:
    role: Emphasizing specific words within a headline.
  image-card:
    role: Displaying images with titles.
  selected-tab-indicator:
    role: Highlighting active navigation or selection.
---

## Overview

**North Star:** Digital scrapbook on a gray desktop.

This design system evokes a digital scrapbook or a quirky desktop environment, blending structured content with playful, almost childlike elements. The visual language is defined by a gridded card layout, each card a slightly rounded container. Eclectic color accents, often within illustrations or as background highlights, punctuate a predominantly neutral gray canvas. IBM Plex Mono's technical precision paired with Helvetica's classic readability creates a subtle tension, mirroring the creative studio's 'conceptual yet practical' ethos.

### Do's

- Use Desktop Gray (#F2F2F2) as the default page background to establish the primary canvas.
- Apply Card Surface (#DBDBDB) and 10px border-radius to all primary content cards.
- Headlines should primarily use Helvetica, varying weights (300, 400, 700) and sizes (18px, 44px) for hierarchy.
- Body text and secondary information must use IBM Plex Mono, 400 weight, with varying sizes (11px, 14px, 16px).
- Employ Attention Yellow (#F9F5A2) as a background highlight for specific words or phrases to draw playful attention.
- All interactive input fields should have Input Fill (#EDEDED) background, a 1px Ink (#303030) top border, and 25px border-radius.
- Use 8px or 12px for internal padding within cards to ensure consistent element spacing.

### Don'ts

- Avoid generic button styles; prefer a pill shape (20px radius) for badges and inputs to maintain the system's character.
- Do not use highly saturated colors for large background areas; save vivid colors for illustrations or small, deliberate accents.
- Do not introduce new shadow styles; adhere to rgba(0, 0, 0, 0.16) 0px 3px 6px 0px for elevated cards.
- Refrain from using System Blue (#0064E2) as a general background or text color; reserve it for distinct interactive states.
- Do not use letter-spacing values other than 'normal' for either font; the expressive quality comes from font choice and weight variation.
- Avoid sharp corners on interactive or card elements; the system prefers soft rounding (10px, 20px, 25px).

### Layout

The page adheres to a mostly full-bleed layout on Desktop Gray (#F2F2F2), but within this, content is structured as a dense, responsive grid of cards. There isn't a strict max-width; instead, cards adapt to available space. The hero section is characterized by a prominent left-aligned heading ('Hi J.S., School is (y)our creative studio.') often featuring a yellow highlight, accompanied by various smaller informational cards. Section rhythm is created by the grid of distinct cards, which vary in size and background color. Content arrangement is dynamic, with no fixed column structure beyond the cascading card layout. Navigation is minimal, a top-left 'Selected Work' badge acting as the primary entry point.

### Imagery

The site uses a highly eclectic mix of visual content, creating a 'scrapbook' or 'mood board' feel. This includes surreal 3D character illustrations (e.g., the profile avatar), real-world product shots (e.g., weather icon), candid photography (e.g., people in top right, news snippets), pixel art, and graphic design samples. Images are often contained within cards with 10px rounded corners, sometimes with soft shadows. The treatment is varied; some images are tightly cropped, others feature a more artistic mask or full-bleed within their card. Role is primarily decorative and atmospheric, showcasing diverse creative outputs rather than a singular product, creating a dense, visually rich experience.
