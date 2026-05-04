---
version: alpha
name: Good Glyphs
description: Good Glyphs embraces a stark, high-contrast aesthetic, juxtaposing a vibrant, almost neon green background with severe black text and containers. Typography is a dominant visual element, using an ultra-large, compressed sans-serif for headlines that conveys an irreverent, playful attitude. Interface elements are minimal, relying on strong borders and generous radii, with interactive states signaled primarily through color inversion rather than complex shadows or gradients. The overall atmosphere is punchy, high-energy, and digital-native.
colors:
  ghostly-green: "#c7ffcd"
  midnight-ink: "#000000"
  slate-text: "#101010"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
    letterSpacing: -0.39px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: -0.84px
  display:
    fontFamily: "system-ui"
    fontSize: 288px
    lineHeight: 0.8
    letterSpacing: -8.64px
spacing:
  cardRadius: 14px
  buttonRadius: 140px
  elementGap: 4px
  sectionGap: 84px
components:
  default-button:
    role: Standard interactive element with minimal styling.
  inverted-button:
    role: Action-oriented button with high contrast.
  download-button:
    role: Primary call to action.
  contributor-card:
    role: Displays individual entries for designers.
  text-input-default:
    role: Basic text input field.
  text-input-active:
    role: Text input field in a focused or active state.
---

## Overview

**North Star:** Neon Playbill on Black Canvas

Good Glyphs embraces a stark, high-contrast aesthetic, juxtaposing a vibrant, almost neon green background with severe black text and containers. Typography is a dominant visual element, using an ultra-large, compressed sans-serif for headlines that conveys an irreverent, playful attitude. Interface elements are minimal, relying on strong borders and generous radii, with interactive states signaled primarily through color inversion rather than complex shadows or gradients. The overall atmosphere is punchy, high-energy, and digital-native.

### Do's

- Prioritize Midnight Ink (#000000) for all text and UI outlines against Ghostly Green (#c7ffcd) backgrounds for maximum contrast.
- Apply a generous border-radius of 140px for all button shapes that are pill-like, and 14px for cards and container corners.
- Use Helvetica Neue with -0.0300em letter-spacing for all body text and secondary headings to maintain a dense, compact feel.
- Employ the 'good-glyphs' font strictly for large, decorative, glyph-based display elements.
- Use 4px as the foundational unit for small element spacing, such as padding inside buttons.
- Ensure all interactive elements reverse their color scheme upon activation, for example, from Ghostly Green text on Midnight Ink background to Midnight Ink text on Ghostly Green background.
- Utilize 14px for vertical spacing between smaller content blocks or lists, and 84px for large section separation.

### Don'ts

- Avoid using gradients or complex box-shadows; maintain a flat, high-contrast aesthetic.
- Do not introduce additional color beyond Ghostly Green, Midnight Ink, and Slate Text, except where specific brand assets necessitate it.
- Do not vary the letter-spacing for Helvetica Neue beyond -0.0300em unless specifically for the 'good-glyphs' display font.
- Avoid complex layouts; favor centered content stacks or simple grid structures.
- Do not use subtle elevation cues like soft shadows; interaction should be indicated through color changes or strong borders.
- Do not use the 'good-glyphs' font for standard body text or headings due to its decorative nature.
- Avoid padding within input elements where default browser styles are visually sufficient; rely on the minimal border emphasis.

### Layout

The page primarily uses a full-bleed layout, taking advantage of the large background color. The hero section is characterized by ultra-large, compressed typography layered directly onto the background, followed by a contrasting full-width dark section. Content then alternates between a max-width centered stack for body text and a three-column grid for 'Contributors' cards, maintaining consistent vertical spacing. Navigation is minimal, consisting of a sticky top-right link.

### Imagery

The site primarily uses custom dingbat-style vector illustrations from the 'good-glyphs' font. These are graphic, black-and-white, outline icons with a quirky, playful, and sometimes abstract aesthetic. They are used decoratively within card components, demonstrating the font's content. There are no photographs or complex 3D renders; the visual emphasis is on stylized, flat vector art.
