---
version: alpha
name: Nuri
description: Nuri presents a financial clarity aesthetic: clean, spacious layouts with a focus on bold typography and functional accents. The interface marries a muted, almost pastel color story with crisp dark text, creating an approachable yet authoritative tone. Visual hierarchy is established through stark size differences in typography rather than heavy graphic elements, and rounded shapes maintain a friendly, modern feel across interactive components.
colors:
  lavender-mist: "#beaaff"
  deep-plum: "#2c232e"
  slate-text: "#4b5563"
  phantom-gray: "#6b7280"
  powder-violet: "#e2d9ff"
  charcoal-icon: "#374151"
  amber-action: "#f97316"
  gallery-white: "#ffffff"
  whisper-white: "#f7f2ff"
  cloud-gray: "#f9fafb"
  pale-border: "#e2e8f0"
  ash-border: "#d1d5db"
  shadow-tint: "#dddcde"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body-lg:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 0.94
  display:
    fontFamily: "system-ui"
    fontSize: 118px
    lineHeight: 0.9
    letterSpacing: -0.02px
spacing:
  cardRadius: 9999px
  buttonRadius: 8px
  elementGap: 24px
  sectionGap: 48px
components:
  primary-action-button:
    role: Call to action
  ghost-button:
    role: Secondary action
  flag-selector-button:
    role: Language or region selection
  large-hero-heading:
    role: Brand statement
  subtle-card:
    role: Content container
  input-field:
    role: Data entry
---

## Overview

**North Star:** Bitcoin on lavender canvas

Nuri presents a financial clarity aesthetic: clean, spacious layouts with a focus on bold typography and functional accents. The interface marries a muted, almost pastel color story with crisp dark text, creating an approachable yet authoritative tone. Visual hierarchy is established through stark size differences in typography rather than heavy graphic elements, and rounded shapes maintain a friendly, modern feel across interactive components.

### Do's

- Use Sharp Grotesk Bold at 900 weight for high-impact display text, applying -0.02em letter-spacing at large sizes.
- Employ Lavender Mist (#beaaff) for large background sections or as a brand-identifying visual anchor.
- Apply 9999px border-radius to all buttons and card-like elements to maintain the system's friendly, rounded aesthetic.
- Utilize Deep Plum (#2c232e) for all primary text and critical headings to ensure strong legibility and brand presence.
- Maintain generous vertical spacing between sections, primarily using 48px to create an open and spacious layout.
- Apply Amber Action (#f97316) exclusively for primary call-to-action button backgrounds.
- Use Pale Border (#e2e8f0) for all unhovered borders and subtle dividers to keep the interface light and decluttered.

### Don'ts

- Avoid using multiple vibrant colors for primary actions; Amber Action (#f97316) is reserved for this purpose to ensure clear hierarchy.
- Do not deviate from the established rounded border-radius values; square corners contradict the system's soft, approachable feel.
- Refrain from using heavy shadows or strong elevation effects; rely on color contrast and typographic scale for hierarchy.
- Do not introduce additional gray tones that are not present in the defined neutral palette, as this will lead to visual inconsistency.
- Avoid overly dense layouts; maintain a spacious design with consistent element and section gaps (24px and 48px respectively).
- Do not use generic system fonts in place of Inter, Harriet Display, or Sharp Grotesk Bold; their specific characteristics define the brand's typographic voice.
- Avoid using Lavender Mist (#beaaff) as a text color; it is intended for large background fills or decorative purposes only.

### Layout

The page primarily uses a max-width contained layout, though the hero section often stretches full-bleed. The hero features a large, impactful centered headline against a colored background, sometimes split with a visual element. Section rhythm is generally consistent with substantial vertical spacing (48px section gap). Content is arranged in alternating text-left/image-right or centered stacks. Card-like containers, when present, utilize the distinct 'pill' shape. Navigation is handled by a minimal top bar, with elements pushed to the far corners.

### Imagery

The visual language combines abstract, product-focused illustrations with clean product shots. Illustrations are dimensional and stylized, featuring human figures in everyday tech interactions against subtle background elements, often in brand-aligned purple or green hues. Photography, when present, focuses on tight product crops without extensive lifestyle context. Iconography is clean and outlined, maintaining a light visual weight. Imagery serves to explain product features or create atmospheric context without overwhelming UI elements.
