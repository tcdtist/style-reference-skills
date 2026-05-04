---
version: alpha
name: VALIENTE BRANDS
description: This design system presents as a raw, almost brutalist exhibition of brand identity. A primary, vivid red against a near-white background commands attention, creating an aggressive, high-energy aesthetic. Typography is dense and tightly kerned, often acting as a visual element itself, reinforcing a sense of purposeful, impactful communication. The design feels like a bold statement rather than a polished interface, prioritizing directness and brand impact.
colors:
  valiente-crimson: "#ff1a00"
  concrete-white: "#f5f5f5"
  charcoal-black: "#0a0a0a"
  ash-gray: "#eaeaea"
  pale-rose: "#e7a196"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
    letterSpacing: -0.6px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -0.64px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
    letterSpacing: -0.72px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -1.92px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 95px
    lineHeight: 0.8
    letterSpacing: -7.125px
  display:
    fontFamily: "system-ui"
    fontSize: 245px
    lineHeight: 0.8
    letterSpacing: -12.25px
spacing:
  elementGap: 20px
  sectionGap: 64px
components:
  hero-tagline-bar:
    role: 
  video-play-button-block:
    role: 
  services-navigation-menu:
    role: 
  navigation-link:
    role: Interactive text link in the header and footer navigation.
  hero-headline:
    role: Main heading for the hero section.
  body-paragraph:
    role: Standard text blocks for descriptive content.
  footer-copyright:
    role: Legal and copyright information at the bottom of the page.
  feature-card-text-only:
    role: Displays specific features or project details.
---

## Overview

**North Star:** Raw Crimson Statement. The page feels like a manifesto etched in bold red on stark white.

This design system presents as a raw, almost brutalist exhibition of brand identity. A primary, vivid red against a near-white background commands attention, creating an aggressive, high-energy aesthetic. Typography is dense and tightly kerned, often acting as a visual element itself, reinforcing a sense of purposeful, impactful communication. The design feels like a bold statement rather than a polished interface, prioritizing directness and brand impact.

### Do's

- Prioritize Valiente Crimson (#ff1a00) for all interactive states and primary branding elements.
- Maintain tight letter-spacing for all text elements, particularly at larger sizes (e.g., -1.44px for 48px text, -12.25px for 245px text), using GT Pressura predominantly.
- Use a pure, flat background of Concrete White (#f5f5f5) for the majority of page sections.
- Ensure headings and key textual statements are rendered in Valiente Crimson (#ff1a00) to maximize brand presence and impact.
- Maintain strict 0px border-radius and box-shadow on all card-like elements, keeping the UI sharp and unadorned.
- Employ Charcoal Black (#0a0a0a) for most body copy to establish clear contrast against the light background.

### Don'ts

- Avoid using soft shadows or complex gradients; the aesthetic is flat and direct.
- Do not introduce curved corners or significant border-radii; all elements should maintain sharp 0px corners.
- Refrain from using varied weights or italic styles for GT Pressura; stick to weight 400 for consistency.
- Do not introduce any additional chromatic colors; limit the palette strictly to Valiente Crimson and the neutral shades.
- Avoid excessive whitespace around content blocks; the design prefers compactness and density, especially in text arrangement.
- Do not deviate from the established negative letter-spacing for text, as it is a core characteristic of the brand's typographic identity.

### Layout

The page primarily uses a max-width contained layout, likely around 1200-1440px, though a full-bleed video section interrupts this pattern for dramatic effect. The hero section is characterized by a unique staggered typography layout, creating a visual grid rather than a traditional centered headline. Sections are defined by consistent vertical spacing, creating an airy, uncluttered feel despite the dense typography. Content often appears in stacked blocks or implied two-column arrangements (e.g., text block left, implicit visual right), with a strong left alignment. Navigation is a minimalist top-right 'Get in Touch' button and a left-aligned, stacked text menu, both fixed or sticky. The overall rhythm is open and free-flowing, punctuated by bold text blocks.

### Imagery

The site uses a mix of candid, dark-toned photography and abstract typography as visual elements. Photography, when present (like the boxing scene), appears full-bleed or large-scale, often with a moody, desaturated filter that contrasts strongly with the bright, text-centric UI. Imagery is used decoratively to evoke atmosphere rather than to explicitly explain content, relying on its emotional impact. There are also product/people shots with neutral or studio-like backgrounds, often focused on individuals, maintaining a raw, authentic feel without overt styling. Icons are minimal, resembling simple outlined shapes with sharp edges, consistently in Valiente Crimson, providing functional navigation cues while adhering to the bold aesthetic.
