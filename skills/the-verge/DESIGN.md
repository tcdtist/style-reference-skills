---
version: alpha
name: The Verge
description: This design system evokes a 'digital newsprint' feel, balancing raw information density with striking, almost industrial accentuation. A deep, near-black background provides a stark canvas for crisp, often condensed typography and the electrifying 'Voltage Teal' accent. The unusual mix of a narrow sans-serif, a classic display serif, and a monospaced font creates a unique typographic voice that is both modern and slightly nostalgic, preventing the dark theme from becoming generic.
colors:
  ink-black: "#000000"
  deep-graphite: "#131313"
  light-ash: "#313131"
  ghost-white: "#ffffff"
  silver-mist: "#e9e9e9"
  faded-steel: "#949494"
  voltage-teal: "#3cffd0"
  neon-violet: "#5200ff"
  blaze-orange: "#ff3d00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1
    letterSpacing: 0.68px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 0.8
    letterSpacing: 0.6px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 107px
    lineHeight: 0.8
    letterSpacing: 1.07px
spacing:
  buttonRadius: 24px
  elementGap: 10px
  sectionGap: 40px
components:
  top-stories-list:
    role: 
  today-s-stream-tab-bar-feed-item:
    role: 
  podcasts-most-popular-block:
    role: 
  navigation-link:
    role: Primary navigation elements
  primary-action-button:
    role: Call To Action
  secondary-action-button:
    role: Alternative Call To Action
  hamburger-navigation-button-invisible:
    role: Menu toggle
  article-card:
    role: Content previews
  the-verge-wordmark:
    role: Site Identity
  trending-list-item:
    role: Highlights popular content
  hero-headline:
    role: Main feature story title
---

## Overview

**North Star:** Digital Newsprint, Laser-Etched Text. A dark, information-dense canvas with sharp typographic contrasts and electric accents.

This design system evokes a 'digital newsprint' feel, balancing raw information density with striking, almost industrial accentuation. A deep, near-black background provides a stark canvas for crisp, often condensed typography and the electrifying 'Voltage Teal' accent. The unusual mix of a narrow sans-serif, a classic display serif, and a monospaced font creates a unique typographic voice that is both modern and slightly nostalgic, preventing the dark theme from becoming generic.

### Do's

- Use Ink Black (#000000) for the primary page background.
- Apply Deep Graphite (#131313) for card and content block backgrounds to establish clear hierarchy.
- Style interactive elements and primary links with Voltage Teal (#3cffd0) for high visibility.
- Always use 'Manuka' font (or substitute) at 900 weight for display headlines to create a dramatic impact, setting lineHeight to 0.8.
- Implement 24px border-radius for all primary and secondary buttons for a pill-shaped aesthetic.
- Utilize Poly Sans Mono with wide letter spacing (0.1000em or 0.1250em) for all metadata and timestamps.
- Maintain a default border-radius of 0px for most elements to reinforce the sharp, industrial aesthetic.

### Don'ts

- Do not use subtle shadows or gradients for elevation; distinguish surfaces primarily through color changes from Ink Black (#000000) to Deep Graphite (#131313) and Light Ash (#313131).
- Avoid generic 'modern sans-serif' for headlines; the distinctive display typefaces like Manuka and Fk Roman Standard are key to the brand.
- Do not introduce additional accent colors, as Voltage Teal, Neon Violet, and Blaze Orange are carefully deployed and highly impactful.
- Never use `ui-sans-serif` system font for prominent text or headlines; it's reserved for utility and fallback only.
- Do not apply padding or borders to article cards; their structure is defined by typography and background colors.
- Do not use soft, organic shapes; stick to the hard edges and specific rounded radii (3px or 24px) for distinct elements.

### Layout

The page primarily uses a max-width contained model for readability, with main content centered. The hero section often features a large image with a bold, Manuka font headline overlaid. Sections flow largely vertically with consistent spacing. Content arrangement often employs a two-column primary layout for feature stories (large image with adjacent text block) and a sidebar for 'Top Stories' or 'Most Popular' lists. There is a strong use of a grid for presenting article snippets and card-like elements. Navigation is a prominent top bar, typically using Ghost White text on an Ink Black background, with a distinctive vertical 'The Verge' wordmark pylon on the left side, slightly overlapping the content.

### Imagery

This site utilizes a mixed visual language heavily dependent on photography and product screenshots. Photography includes tight, often abstract crops of technology and scientific subjects, sometimes with a raw, documentary feel, or product shots on clean backgrounds. Images are typically contained within rectangular bounds, often with a subtle 3px border-radius or no radius. They serve both decorative atmosphere and explanatory content, integrated directly into article layouts. The density is high, with images being integral to breaking up dense text blocks, often full-bleed within their content containers.
