---
version: alpha
name: Craft Docs
description: The design aesthetic is gentle, creative, and tactile, evoking the feeling of a personal journal or artist's scrapbook. This is achieved through a warm, off-white canvas (#fff3e7), a palette of soft pastels (#9bd8a9, #fde99b), and organic, torn-paper collage elements. The primary visual signature is the typographic pairing: a sophisticated, tightly-tracked serif (`UntitledSerifFont`) for large, literary headlines, contrasted with a clean, functional sans-serif (`UntitledSansFont`) for all UI and body text. Rounded corners (14px, 24px) are prevalent, but are punctuated by pill-shaped buttons, creating a soft and approachable interface. Deep, multi-layered shadows provide a subtle, non-intrusive sense of depth, making elements feel floated rather than stacked.
colors:
  canvas: "#fff3e7"
  ink: "#030302"
  white: "#ffffff"
  linen: "#f7f7f7"
  cloud: "#efefef"
  ash: "#e1e1e1"
  stone: "#bebbba"
  graphite: "#41413f"
  mint: "#9bd8a9"
  marigold: "#fde99b"
  periwinkle: "#b8caf5"
  sky: "#9ed4ef"
  papaya: "#ff4500"
  azure: "#0087ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.12px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.24px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
    letterSpacing: -0.72px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.72px
  heading:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 1.1
    letterSpacing: -1.38px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.05
    letterSpacing: -2.24px
  display:
    fontFamily: "system-ui"
    fontSize: 66px
    lineHeight: 1.1
    letterSpacing: -2.64px
spacing:
  cardRadius: 16-24px
  buttonRadius: 14px
  elementGap: 8-16px
  sectionGap: 96-120px
components:
  cta-button-group:
    role: 
  feature-category-pills:
    role: 
  testimonial-quote-card:
    role: 
  primary-pill-button:
    role: The main 'Try Craft Free' call-to-action in the sticky navigation header.
  navigation-link:
    role: Standard links within the main header navigation.
  testimonial-quote:
    role: Displays user feedback and social proof.
  collage-background-element:
    role: Decorative, atmospheric elements that make up the scrapbook aesthetic.
---

## Overview

**North Star:** Digital Scrapbook Collage. The design feels like a thoughtful, tactile scrapbook where structured digital notes meet soft, organic textures.

The design aesthetic is gentle, creative, and tactile, evoking the feeling of a personal journal or artist's scrapbook. This is achieved through a warm, off-white canvas (#fff3e7), a palette of soft pastels (#9bd8a9, #fde99b), and organic, torn-paper collage elements. The primary visual signature is the typographic pairing: a sophisticated, tightly-tracked serif (`UntitledSerifFont`) for large, literary headlines, contrasted with a clean, functional sans-serif (`UntitledSansFont`) for all UI and body text. Rounded corners (14px, 24px) are prevalent, but are punctuated by pill-shaped buttons, creating a soft and approachable interface. Deep, multi-layered shadows provide a subtle, non-intrusive sense of depth, making elements feel floated rather than stacked.

### Do's

- Use `UntitledSerifFont` for all major headlines (H1, H2) to establish the brand's literary, crafted feel.
- Apply tight negative letter-spacing (e.g., -2.24px at 56px) to serif headlines for a professional, refined look.
- Layer torn-paper textures and soft pastel color blocks (`Mint`, `Marigold`) to create the signature collage aesthetic.
- Use the complex, multi-layered shadow style on all key floating elements like cards.
- Set main page content on the warm `Canvas` (#fff3e7) background, not pure white.
- Combine generous corner radii (14px, 24px) with pill-shaped buttons for a friendly, approachable UI.
- Maintain generous vertical whitespace (96px+) between content sections.

### Don'ts

- Don't use the serif font for UI controls, body copy, or any text smaller than 24px.
- Don't use pure black text; always use the softer `Ink` (#030302).
- Don't use hard, single-source drop shadows. Stick to the soft, deep, multi-layered shadow style.
- Don't use sharp 0px corners on buttons or cards.
- Don't use a pure white (#ffffff) page background for long-form content.
- Don't clutter the layout; prioritize spaciousness and clear, centered compositions.
- Don't use vibrant accent colors for large background surfaces; reserve them for small highlights or illustrative frames.

### Layout

The page begins with a full-bleed, textured hero section that immerses the user. Below this, the layout transitions to a centered, max-width container (approx. 1280px) on a warm Canvas background. Generous vertical spacing (~96-120px) separates content sections, creating a calm, unhurried rhythm. Content is typically arranged in centered stacks for major headlines or simple, balanced grids for features (e.g., a five-column grid of icons and labels). The design avoids complex, asymmetric layouts in favor of clear, centered compositions that feel stable and easy to parse.

### Imagery

The visual language is a distinctive collage of clean UI screenshots and tactile, analog textures. Imagery includes torn paper edges, subtle grid patterns, and flat pastel color fields that frame or sit behind product mockups. This juxtaposition of digital precision and physical craft is central to the brand. Photography is used sparingly for user testimonials, appearing within small, rounded frames. The overall effect is approachable and creative, suggesting that the digital tool is a space for tangible, real-world ideas.
