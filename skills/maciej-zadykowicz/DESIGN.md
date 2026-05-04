---
version: alpha
name: Maciej Zadykowicz
description: This design system conjures the atmosphere of a nocturnal command center where raw data meets sophisticated presentation. A muted, dark palette forms the foundational experience, making the vibrant, playful accent colors in the hero element feel like unexpected, dynamic data visualizations. Typography is deliberately restrained, using custom fonts to establish an identity of quiet competence, preventing the busy hero graphic from overwhelming the content.
colors:
  midnight-base: "#0c0c0c"
  charcoal-surface: "#25262d"
  slate-accent: "#383a42"
  ghost-text: "#f2f2f3"
  cool-gray-text: "#858893"
  subtle-gray-text: "#54565f"
  indigo-button: "#384270"
spacing:
  buttonRadius: 24px
  elementGap: 4px
  sectionGap: 90px
components:
  cta-button-group:
    role: 
  project-card-metadrop:
    role: 
  about-bio-block:
    role: 
  primary-button:
    role: Interactive element
  pill-button:
    role: Interactive element
  ghost-button:
    role: Secondary interactive element
  active-navigation-button:
    role: Navigation element
---

## Overview

**North Star:** Nocturnal Data Canvas — a dark, subdued interface punctuated by bursts of algorithmic color.

This design system conjures the atmosphere of a nocturnal command center where raw data meets sophisticated presentation. A muted, dark palette forms the foundational experience, making the vibrant, playful accent colors in the hero element feel like unexpected, dynamic data visualizations. Typography is deliberately restrained, using custom fonts to establish an identity of quiet competence, preventing the busy hero graphic from overwhelming the content.

### Do's

- Use `Midnight Base` (#0c0c0c) for global page backgrounds.
- Apply `Ghost Text` (#f2f2f3) for primary text on dark backgrounds to ensure AAA contrast.
- Maintain a default border-radius of `16px` for general containers and `24px` for most buttons.
- Employ `Replica-Regular` with an explicit `-0.014em` letter spacing for all body and most heading text.
- Prioritize `90px` vertical spacing to separate main content sections.
- Use `Slate Accent` (#383a42) for interactive elements like buttons, reserving `Indigo Button` (#384270) for active states or primary calls to action.

### Don'ts

- Avoid using highly saturated colors for large backgrounds; they are reserved for the hero graphic's abstract shapes.
- Do not deviate from the specified `letter-spacing: -0.014em` for `Replica-Regular` text, as it's a core typographic signature.
- Don't clutter layouts; maintain `4px` as the smallest element gap for tight alignment.
- Do not introduce system fonts for primary text roles, `Replica-Regular` is integral to the brand identity.
- Avoid generic shadows; depth is primarily achieved through subtle background color shifts from `Midnight Base` to `Charcoal Surface`.

### Layout

The site uses a full-bleed, dark background with content centered within a clear conceptual maximum width. The hero section is a full-width canvas showcasing a large, dynamic graphic behind distinct white text. Subsequent content sections alternate between a dominant `Midnight Base` and a slightly lighter `Charcoal Surface` for card-like project entries. Vertical spacing between sections is generous (`90px`), creating a rhythmic flow. Content within sections is often presented in structured blocks, such as two-column text and tag lists, emphasizing clear, readable information presentation. Navigation is a simple top bar with minimalist links. Project listings are organized into year-based, vertically stacked sections.

### Imagery

This system primarily uses abstract, organic shapes within a large hero graphic for visual interest, rather than photography or illustrations. These shapes are multi-colored and appear to mimic data flows or playful splatters. The rest of the site is highly UI-driven, relying on typography and structured content blocks. When product visuals appear, they are typically contained within device mockups or screenshots, maintaining a clean, technical presentation. Icons, when present (e.g., social media), are minimal and outline-based, blending into the subdued aesthetic.
