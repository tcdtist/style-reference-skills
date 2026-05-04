---
version: alpha
name: Daniela and Moe Wedding 2019
description: Daniela and Moe embodies a whimsical, botanical garden aesthetic with a light, airy canvas and expressive organic illustrations. Typography balances classic elegance with contemporary readability. The color palette is driven by natural, muted tones with a singular bold accent orange that brings vitality to interactive elements and key details. Components are visually light, often appearing as ghost elements or subtly differentiated surfaces, ensuring the lush imagery takes center stage.
colors:
  canvas-petal: "#fef1ec"
  paper-white: "#ffffff"
  midnight-ink: "#11223f"
  sunset-blush: "#ff5734"
  mossy-green: "#7e813c"
  deep-forest: "#193c35"
  coral-haze: "#f6bba4"
  dusty-sage: "#c6d7d0"
  azure-whisper: "#092a49"
  sunbeam-gold: "#e5ba2b"
  crimson-bloom: "#ec4f22"
  dark-fern: "#003322"
  shadow: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
    letterSpacing: 2.4px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: 3.2px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 4.8px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: 9.6px
  display:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 0.85
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 20px
  sectionGap: 32px
components:
  primary-action-button:
    role: Call to action button
  transparent-content-card:
    role: Content container for detailed information
  white-content-card:
    role: Elevated content container
  text-input-field:
    role: Form input element
  navigation-link:
    role: Global navigation item
---

## Overview

**North Star:** Whimsical Botanical Canvas

Daniela and Moe embodies a whimsical, botanical garden aesthetic with a light, airy canvas and expressive organic illustrations. Typography balances classic elegance with contemporary readability. The color palette is driven by natural, muted tones with a singular bold accent orange that brings vitality to interactive elements and key details. Components are visually light, often appearing as ghost elements or subtly differentiated surfaces, ensuring the lush imagery takes center stage.

### Do's

- Prioritize 'Canvas Petal' (#fef1ec) as the default page background for all new sections, fostering an airy, consistent base.
- Use 'Midnight Ink' (#11223f) for all body text, headings, and primary UI elements to ensure high contrast and readability.
- Employ 'Sunset Blush' (#ff5734) exclusively for primary action buttons or significant accent elements, ensuring it stands out as a focal point.
- Apply calibre with 0.2000em letter-spacing for all navigation, body text, and button labels to maintain an open and readable tone.
- Implement 0px border-radius for all cards and interactive elements, favoring a sharp, clean edge over rounded corners.
- Utilize 'Paper White' (#ffffff) for card and input backgrounds, providing a lighter surface against the primary canvas.
- Maintain a clear visual hierarchy by using Canela Web for all headlines and display text, allowing calibre for supporting content.

### Don'ts

- Do not use highly saturated colors other than 'Sunset Blush' (#ff5734) for functional UI elements; other vivid colors are reserved for illustrations.
- Avoid applying drop shadows or strong elevation to components; maintain a flat, layered aesthetic as seen on cards.
- Do not introduce new decorative elements or illustrations without first referencing the existing color palette of greens, yellows, and oranges.
- Refrain from using bold or heavy weights for primary body text; calibre weights 300-400 are preferred for most text content.
- Do not vary the border-radius of interactive elements; all buttons and cards should adhere to a 0px radius where applicable.
- Avoid tight letter-spacing for calibre font; ensure a consistent 0.2000em tracking to preserve its signature open feel.
- Do not use generic system fonts; always specify 'Canela Web' for headlines and 'calibre' for body text and interactive elements.

### Layout

The page primarily uses a full-bleed layout, particularly for hero sections, allowing the botanical illustrations to extend to the edges. Content sections tend to be centered, but with no fixed `pageMaxWidth`, they adapt to viewport width. The hero features a large, centered headline over an illustrative background. Subsequent sections follow a consistent vertical rhythm with 'Canvas Petal' backgrounds. Content arrangement often utilizes a multi-column grid, particularly for displaying 'Fun Facts' cards, which are organized in a 4-column layout. Navigation is a simple, sticky top bar with centered text links. The overall density is comfortable, ensuring ample negative space around content blocks.

### Imagery

The site features abstract, organic botanical illustrations as the primary visual element, characterized by flat, filled shapes with occasional outlines. Colors within these illustrations leverage a diverse, muted palette of greens, yellows, corals, and subtle grays. These graphics are largely decorative and atmospheric, forming a lush, full-bleed backdrop in hero sections and serving as contained accents within content blocks. They create a consistent visual theme of a whimsical, natural garden. Icons, where present, are line-drawn with a delicate stroke weight and often adopt the 'Sunset Blush' accent color, serving explanatory roles without overwhelming the design.
